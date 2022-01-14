(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{267:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(371)),i=r(374),c={title:"Generator setup"},l={unversionedId:"basics/generator-setup",id:"version-1.0.3/basics/generator-setup",isDocsHomePage:!1,title:"Generator setup",description:"With our level graph prepared, we are now ready to generate our very first dungeon. In order to do that, we have to setup our procedural dungeon generator. There are two ways to do that - you either use the prefab that comes with the plugin or you create your own instance of the generator.",source:"@site/versioned_docs\\version-1.0.3\\basics\\generator-setup.md",slug:"/basics/generator-setup",permalink:"/Edgar-Unity-DocsArchive/docs/1.0.3/basics/generator-setup",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-1.0.3/basics/generator-setup.md",version:"1.0.3",sidebar:"version-1.0.3/docs",previous:{title:"Level graphs",permalink:"/Edgar-Unity-DocsArchive/docs/1.0.3/basics/level-graphs"},next:{title:"Performance tips",permalink:"/Edgar-Unity-DocsArchive/docs/1.0.3/basics/performance-tips"}},s=[{value:"Using prefab",id:"using-prefab",children:[]},{value:"Manual setup",id:"manual-setup",children:[]}],p={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With our level graph prepared, we are now ready to generate our very first dungeon. In order to do that, we have to setup our procedural dungeon generator. There are two ways to do that - you either use the prefab that comes with the plugin or you create your own instance of the generator."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," The goal of this guide is not to describe individual options of the generator but rather to describe how to get an instance of the generator with reasonable default configuration. If you are interested in individual options, head to the ",Object(o.b)("em",{parentName:"p"},"Pipeline tasks")," section.")),Object(o.b)("h2",{id:"using-prefab"},"Using prefab"),Object(o.b)("p",null,"The easiest way to start generating dungeons is to use the ",Object(o.b)("em",{parentName:"p"},"Dungeon Generator")," prefab that is located at ",Object(o.b)("em",{parentName:"p"},"ProceduralDungeonGenerator/Examples/BasicDungeonGenerator"),". Simply drag and drop it to the scene and open in in the Inspector. It should look like the image below."),Object(o.b)(i.c,{src:"img/original/dungeon_generator_inspector1.png",caption:"Basic dungeon generator script",mdxType:"Image"}),Object(o.b)("p",null,"Now you can simply drop you level graph to the ",Object(o.b)("em",{parentName:"p"},"Level Graph")," property in the generator pipeline and then hit the ",Object(o.b)("em",{parentName:"p"},"Generate")," button to generate a layout."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," The dungeon generator script is made of ScriptableObjects. Therefore, you cannot duplicate this prefab and think that you have a separate copy of the generator as it is linked to the same instance of the ScriptableObjects. If you want to create another instance of the generator, follow the ",Object(o.b)("em",{parentName:"p"},"Manual setup")," section below.")),Object(o.b)("h2",{id:"manual-setup"},"Manual setup"),Object(o.b)("p",null,"To create our own dungeon generator, we have to follow a few simple steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create an empty GameObject and add the ",Object(o.b)("em",{parentName:"li"},"DungeonGeneratorPipeline")," component"),Object(o.b)("li",{parentName:"ol"},"Create ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"fixedInput.md"}),"Fixed input")," ScriptableObject (",Object(o.b)("em",{parentName:"li"},"Dungeon generator/Pipeline/Fixed input"),") and add it as the first element in the ",Object(o.b)("em",{parentName:"li"},"GeneratorPipeline")),Object(o.b)("li",{parentName:"ol"},"Create ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"graphBasedGenerator.md"}),"Graph based generator")," ScriptableObject (",Object(o.b)("em",{parentName:"li"},"Dungeon generator/Generators/Graph based generator"),") and add it as the second element in the ",Object(o.b)("em",{parentName:"li"},"GeneratorPipeline")),Object(o.b)("li",{parentName:"ol"},"Create ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"payloadInitializer.md"}),"PayloadInitializer")," ScriptableObject (",Object(o.b)("em",{parentName:"li"},"Dungeon generator/Pipeline/Payload initializer"),") and add it ti the ",Object(o.b)("em",{parentName:"li"},"Payload Initializer")," field")))}u.isMDXComponent=!0},371:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(f,c(c({ref:t},s),{},{components:r})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},372:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(22),a=r(373);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return o?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=o();return r(e,t)}},373:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},374:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return u}));var n=r(3),a=r(0),o=r.n(a),i=r(372);const c=e=>o.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),l=e=>o.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},o.a.Children.map(e.children,(t=>o.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight})))),s=e=>o.a.createElement(c,{cols:e.cols},o.a.createElement("a",{href:Object(i.a)(e.src),target:"_blank"},o.a.createElement("img",{src:Object(i.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&o.a.createElement(p,null,e.caption)),p=e=>o.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),u=e=>{const{src:t,caption:r,...a}=e;return o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("img",Object(n.a)({src:Object(i.a)(e.src)},a)),void 0!==e.caption&&o.a.createElement(p,null,e.caption))}}}]);