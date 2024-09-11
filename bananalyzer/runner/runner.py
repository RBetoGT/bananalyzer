import os
import shutil
import tempfile
from pathlib import Path
from typing import Awaitable, Callable, List

import pytest
from pydantic import BaseModel

from bananalyzer.data.schemas import Example
from bananalyzer.hooks import BananalyzerPytestPlugin
from bananalyzer.junit import enrich_report
from bananalyzer.schema import AgentRunnerClass, PytestArgs, XDistArgs

TestType = Callable[[], Awaitable[None]]


class BananalyzerTest(BaseModel):
    code: str
    example: Example


def create_test_file(
    tests: List[BananalyzerTest],
    prefix: str,
    cache_dir: Path,
    runner: AgentRunnerClass,
    headless: bool,
    single_browser_instance: bool,
) -> str:
    with tempfile.NamedTemporaryFile(
        mode="w+",
        delete=False,
        prefix=prefix,
        suffix=".py",
        dir=cache_dir,
    ) as f:
        # noinspection PyUnresolvedReferences
        for test_content in tests:
            f.write(
                f"""
import pytest
import pytest_asyncio
import asyncio

from bananalyzer.data.examples import get_example_by_url
from playwright.async_api import async_playwright

@pytest.fixture(scope="session")
def event_loop():
    loop = asyncio.new_event_loop()
    yield loop
    loop.close()


@pytest.fixture(scope="session")
def agent_constructor():
    import importlib.util
    import sys
    from pathlib import Path
    import pprint


    path = Path("{runner.class_path}")
    module_name = path.stem
    spec = importlib.util.spec_from_file_location(module_name, str(path))
    module = importlib.util.module_from_spec(spec)

    sys.modules[module_name] = module
    spec.loader.exec_module(module)
    print(f"Loaded agent module", module)

    agent_constructor = getattr(module, '{runner.class_name}')
    yield agent_constructor


@pytest_asyncio.fixture(scope="{'session' if single_browser_instance else 'class'}")
async def page():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless={headless})
        context = await browser.new_context(
            viewport={{ 'width': 1280, 'height': 1024 }},
            ignore_https_errors=True,
            user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        )
        {f"await context.route_from_har('{test_content.example.har_file_path}', not_found='abort', update=False)" if test_content.example.source == "har" else ""}
        page = await context.new_page()
        yield page
        await browser.close()

"""
            )
            f.write(f"{test_content.code}\n\n")

    return f.name


def run_tests(
    tests: List[BananalyzerTest],
    runner: AgentRunnerClass,
    pytest_args: PytestArgs,
    xdist_args: XDistArgs,
    headless: bool = False,
    single_browser_instance: bool = False,
) -> int:
    """
    Create temporary test files for each test, run them, and then delete them
    """

    cache_dir = Path(os.getcwd()) / ".banana_cache"
    cache_dir.mkdir(exist_ok=True)
    with open(cache_dir / ".gitignore", "w") as f:
        f.write("# Generated by bananalyzer automatically\n*")

    with tempfile.TemporaryDirectory(dir=cache_dir) as temp_dir:
        temp_path = Path(temp_dir)

        test_file_names = [
            create_test_file(
                [test],
                f"{test.example.id}_",
                temp_path,
                runner,
                headless,
                single_browser_instance,
            )
            for test in tests
        ]

        args = (
            test_file_names
            + ["-s"] * pytest_args.s
            + (["-vvv"] if pytest_args.v else ["-v"])
            + ["-n", str(xdist_args.n)]
            + ["--dist", xdist_args.dist]
            + [f"--junitxml={pytest_args.xml}"] * bool(pytest_args.xml)
            + ["--disable-warnings"]
        )

        kwargs = dict()
        if not xdist_args.n:
            kwargs["plugins"] = [BananalyzerPytestPlugin()]
        else:
            hooks = Path(__file__).parent.parent / "hooks.py"
            shutil.copy(hooks, temp_path / "conftest.py")

        exit_code = pytest.main(args, **kwargs)
        if pytest_args.xml:
            enrich_report(pytest_args.xml)

        return exit_code
