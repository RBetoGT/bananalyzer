"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4921],{38895:function(e,n,t){var r=t(24273),o=t(90292),i=t(71610);n.Z=function(){var e=(0,r.useRouter)();return(0,i.useEffect)((function(){var n=function(){!function(){var e=document.getElementById("onetrust-consent-sdk");e&&e.remove(),null!=window.OneTrust&&(window.OneTrust.Init(),setTimeout((function(){window.OneTrust.LoadBanner();var e=Array.from(document.getElementsByClassName("ot-sdk-show-settings")),n=!0,t=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){o.value.onclick=function(e){e.stopImmediatePropagation(),window.OneTrust.ToggleInfoDisplay()}}}catch(u){t=!0,r=u}finally{try{n||null==i.return||i.return()}finally{if(t)throw r}}}),1e3))}()};return e.events.on("routeChangeComplete",n),function(){e.events.off("routeChangeComplete",n)}}),[e.events]),i.createElement(i.Fragment,null,i.createElement(o.default,{src:"https://cdn.cookielaw.org/scripttemplates/otSDKStub.js","data-document-language":"true",type:"text/javascript",charSet:"UTF-8","data-domain-script":"0c1270b7-3d02-4afa-bd15-f3c23839b75a"}),i.createElement(o.default,{type:"text/javascript"},"function OptanonWrapper() {}"))}},64727:function(e,n,t){t.d(n,{x:function(){return v}});var r=t(71610),o=t(73437),i=t(61638),u=t(67866),l=t(47382),a=(0,i.default)((function(){return Promise.all([t.e(9774),t.e(3802),t.e(7823),t.e(8663)]).then(t.bind(t,37823)).then((function(e){return e.FoundryNav}))}),{loadableGenerated:{webpack:function(){return[37823]}}}),s=function(e,n){if(e)return e.map((function(e,t){var r={id:t+1},o=e.fields;if("title"in o?r.title=o.title:"text"in o&&(r.title=o.text),"linkSet"in o)r.type="linkset",r.links=(0,l.q)(o.linkSet).links,r.dropdownTitle=(0,l.q)(o.linkSet).title,r.dropdownDescription=o.description;else if("linkSets"in o){var i;r.type="linksets",r.linksets=null===(i=o.linkSets)||void 0===i?void 0:i.map(l.q)}else if("url"in o){var u;r.type="link",r.link={type:"urlLink",url:o.url},n===(null===(u=o.url)||void 0===u?void 0:u.slice(1,-1))&&(r.isActive=!0)}return r}))},c=function(e){var n,t,o=e.slug,i=e.currentLocale,l=(0,r.useContext)(u.N);if(!l)throw Error("siteSettings is undefined.");var c=l.fields.locales,d=null===c||void 0===c?void 0:c.find((function(e){return e.fields.abbreviation===i})),f=(null===(n=null===d||void 0===d?void 0:d.fields.navFoundry)||void 0===n?void 0:n.fields.navItems)||(null===(t=l.fields.navFoundry)||void 0===t?void 0:t.fields.navItems);return r.createElement(a,{items:s(f,o)})},d=t(28957),f=t(54622),v=function(e){var n=e.sections,t=e.subNav,i=e.usePageNumbering,u=e.backgroundColor,l=e.productNav,a=e.slug,s=e.currentLocale,v=(0,o.C)(u);return r.createElement("main",{role:"main"},t&&r.createElement(d.u,{entry:t,backgroundColor:v}),l&&r.createElement(c,{items:l,slug:a,currentLocale:s}),r.createElement(f.T,{sections:n,usePageNumbering:i,backgroundColor:v}))}},54622:function(e,n,t){t.d(n,{T:function(){return m}});var r=t(23011),o=t(71610),i=t(73437),u=t(68848),l=t(31427);function a(e){var n=function(e){var n=e.fields.blocks[0];if((0,l.FY)(n))return n.fields.headlineText;if((0,l.v)(n)||(0,l.bN)(n)||(0,l.TH)(n)||(0,l.Vo)(n)||(0,l.o_)(n)||(0,l.Yz)(n)||(0,l.Wj)(n))return n.fields.headingText;if((0,l.dW)(n)||(0,l.Pp)(n))return n.fields.title;if((0,l.zm)(n))return n.fields.text;return e.fields.title}(e);return n}function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function c(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;s(this,e),this._enabled=n,this.sections=[],this.base=r}var n,t,r;return n=e,(t=[{key:"getEarmark",value:function(e,n,t){if(this.enabled){var r=this.getSection(e);if(r)return r.earmarkNumber;var o=this.sections.length+this.base,i=o<10?"0".concat(o):o.toString();return this.sections.push({earmarkNumber:i,id:e,navigationTitle:t||n,title:n}),i}}},{key:"getSection",value:function(e){var n=!0,t=!1,r=void 0;try{for(var o,i=this.sections[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var u=o.value;if(u.id===e)return u}}catch(l){t=!0,r=l}finally{try{n||null==i.return||i.return()}finally{if(t)throw r}}}},{key:"enabled",get:function(){return this._enabled},set:function(e){this._enabled=e}}])&&c(n.prototype,t),r&&c(n,r),e}();function f(e,n){var t,r=e.fields.useNumbering;if(null==r||r){var o=function(e){var n=e.fields.blocks[0];return(0,l.TH)(n)?n.fields.navigationTitle:void 0}(e),i=a(e),s=(0,u.Y)(e);t=function(){return n.getEarmark(s,i,o)}}return t}var v=t(51157),m=function(e){var n=e.sections,t=e.usePageNumbering,u=e.backgroundColor,l=(0,i.C)(u),a=n.map((function(e){return e.sys.id})),s=new d(t,a);return o.createElement(o.Fragment,null,n.map((function(e,n){var t=f(e,s);return o.createElement(v.K,{key:n,entry:e,getEarmark:t,backgroundColor:l})})),o.createElement(r.q,{sections:s.sections}))}},95910:function(e,n,t){t.d(n,{x:function(){return u}});var r=t(71610),o=function(e,n){return"undefined"===n?void 0:n},i=function(e,n){return null==n?void 0:n};function u(e){return function(n){try{var t=function(e){var n=JSON.stringify(e,o);return JSON.parse(n,i)}(n);return r.createElement(e,Object.assign({},t))}catch(u){console.error(u)}return r.createElement(e,Object.assign({},n))}}},73437:function(e,n,t){function r(e){return"dark"===e?"dark":"light"}t.d(n,{C:function(){return r}})},35381:function(e,n,t){t.d(n,{o:function(){return c}});var r=t(61638),o=t(71610),i=t(67866),u=t(58507),l=t(47382),a=t(6508),s=(0,r.default)((function(){return Promise.all([t.e(9774),t.e(3802),t.e(7823),t.e(7498)]).then(t.bind(t,37823)).then((function(e){return e.Footer}))}),{loadableGenerated:{webpack:function(){return[37823]}}});function c(e){var n,t=e.backgroundColor,r=e.reducedFooter,c=e.variant,d=e.currentLocale,f=(0,o.useContext)(i.N);if(void 0===f)throw Error("siteSettings is undefined.");var v=f.fields.locales,m=null===v||void 0===v?void 0:v.find((function(e){return e.fields.abbreviation===d})),b=(null===m||void 0===m?void 0:m.fields.footerLinks)||f.fields.footerLinks,k=(null===m||void 0===m?void 0:m.fields.subFooterLinks)||f.fields.subFooterLinks,g=(null===m||void 0===m?void 0:m.fields.footerFootnote)||f.fields.footerFootnote,p=(null===m||void 0===m?void 0:m.fields.footerActionLinks)||f.fields.footerActionLinks,y=null===b||void 0===b?void 0:b.map(l.q),h=null===k||void 0===k?void 0:k.map(l.q),E=f.fields,w=E.footerFoundationFootnote,C=E.footerFoundationSubLinks,F=E.footerJournalFootnote,S=E.footerJournalSublinks,N=f.fields.locales,T=void 0===N||null===(n=(0,a.V)(N))||void 0===n?void 0:n.filter((function(e){return e.enabled}));return c===u.LQ?o.createElement(s,{footerFootnote:w,primaryMenus:[],secondaryMenus:null===C||void 0===C?void 0:C.map(l.q),backgroundColor:t,reduced:!0}):c===u.X2?o.createElement(s,{footerFootnote:F,primaryMenus:[],secondaryMenus:null===S||void 0===S?void 0:S.map(l.q),backgroundColor:t,reduced:!0}):o.createElement(s,{footerFootnote:g,primaryMenus:y,secondaryMenus:h,actionMenu:p?(0,l.q)(p).links:void 0,backgroundColor:t,locales:T,reduced:r})}}}]);