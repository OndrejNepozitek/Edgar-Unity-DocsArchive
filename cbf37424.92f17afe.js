(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{300:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(375)),i=r(378),c={title:"Generator setup"},u={unversionedId:"basics/generator-setup",id:"basics/generator-setup",isDocsHomePage:!1,title:"Generator setup",description:"With our level graph prepared, we are now ready to generate our very first dungeon. In order to do that, we have to setup our procedural dungeon generator.",source:"@site/docs\\basics\\generator-setup.md",slug:"/basics/generator-setup",permalink:"/Edgar-Unity-DocsArchive/docs/next/basics/generator-setup",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/docs/basics/generator-setup.md",version:"current",sidebar:"docs",previous:{title:"Level graphs",permalink:"/Edgar-Unity-DocsArchive/docs/next/basics/level-graphs"},next:{title:"Level structure and rooms data",permalink:"/Edgar-Unity-DocsArchive/docs/next/basics/generated-level-info"}},l=[],s={toc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"With our level graph prepared, we are now ready to generate our very first dungeon. In order to do that, we have to setup our procedural dungeon generator."),Object(a.b)("p",null,"The setup is very easy:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Create an empty game object in the scene"),Object(a.b)("li",{parentName:"ol"},"Add the ",Object(a.b)("strong",{parentName:"li"},"Dungeon Generator")," component to that game object"),Object(a.b)("li",{parentName:"ol"},"Assign your level graph to the ",Object(a.b)("strong",{parentName:"li"},"Level Graph")," field"),Object(a.b)("li",{parentName:"ol"},"Hit the ",Object(a.b)("strong",{parentName:"li"},"Generate dungeon")," button or enable ",Object(a.b)("strong",{parentName:"li"},"Generate on start")," and enter play mode")),Object(a.b)(i.c,{src:"img/v2/generators/dungeon_generator_inspector.png",caption:"Dungeon generator runner",width:"500px",mdxType:"Image"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," The goal of this guide is not to describe individual options of the generator but rather to describe how to get an instance of the generator with a reasonable default configuration. If you are interested in individual options, head to the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/Edgar-Unity-DocsArchive/docs/next/generators/dungeon-generator"}),"Dungeon generator")," page.")))}p.isMDXComponent=!0},375:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return r?o.a.createElement(f,c(c({ref:t},l),{},{components:r})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},376:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var n=r(22),o=r(377);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:a=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return a?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=a();return r(e,t)}},377:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},378:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return p}));var n=r(3),o=r(0),a=r.n(o),i=r(376);const c=e=>a.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),u=e=>a.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},a.a.Children.map(e.children,(t=>a.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight})))),l=e=>a.a.createElement(c,{cols:e.cols},a.a.createElement("a",{href:Object(i.a)(e.src),target:"_blank"},a.a.createElement("img",{src:Object(i.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&a.a.createElement(s,null,e.caption)),s=e=>a.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),p=e=>{const{src:t,caption:r,...o}=e;return a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement("img",Object(n.a)({src:Object(i.a)(e.src)},o)),void 0!==e.caption&&a.a.createElement(s,null,e.caption))}}}]);