(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{145:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(375)),i={title:"Migration from v1 to v2"},c={unversionedId:"other/migration-v1-v2",id:"version-2.0.0-alpha.6/other/migration-v1-v2",isDocsHomePage:!1,title:"Migration from v1 to v2",description:"Make sure to have a backup of your work before you decide to migrate.",source:"@site/versioned_docs\\version-2.0.0-alpha.6\\other\\migration-v1-v2.md",slug:"/other/migration-v1-v2",permalink:"/Edgar-Unity-DocsArchive/docs/2.0.0-alpha.6/other/migration-v1-v2",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-2.0.0-alpha.6/other/migration-v1-v2.md",version:"2.0.0-alpha.6",sidebar:"version-2.0.0-alpha.6/docs",previous:{title:"(PRO) Minimap",permalink:"/Edgar-Unity-DocsArchive/docs/2.0.0-alpha.6/guides/minimap"}},p=[{value:"<strong>Dungeon Generator Pipeline</strong> replaced with <strong>Dungeon Generator</strong> script",id:"dungeon-generator-pipeline-replaced-with-dungeon-generator-script",children:[]},{value:"Room templates migration",id:"room-templates-migration",children:[]}],l={toc:p};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Make sure to have a backup of your work before you decide to migrate."))),Object(a.b)("h3",{id:"dungeon-generator-pipeline-replaced-with-dungeon-generator-script"},Object(a.b)("strong",{parentName:"h3"},"Dungeon Generator Pipeline")," replaced with ",Object(a.b)("strong",{parentName:"h3"},"Dungeon Generator")," script"),Object(a.b)("p",null,"We want to make the generator as easy to use as possible and the whole pipeline was quite hard to setup. Even if we did not need any custom functionality, we still had to create several scriptable objects to create the pipeline. We decided to replace the pipeline with a much simpler script (",Object(a.b)("strong",{parentName:"p"},"Dungeon Generator"),") which should be hopefully easier to use and as flexible as the pipeline."),Object(a.b)("h4",{id:"migration"},"Migration"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Read the ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"../basic/generator-setup"}),"Generator setup")," page and add the ",Object(a.b)("strong",{parentName:"li"},"Dungeon Generator")," script to an empty game object"),Object(a.b)("li",{parentName:"ul"},"Instead of using the ",Object(a.b)("strong",{parentName:"li"},"Fixed Input")," task, assign your level graph directly to the ",Object(a.b)("em",{parentName:"li"},"Level Graph")," field in the generator"),Object(a.b)("li",{parentName:"ul"},"Instead of using ",Object(a.b)("em",{parentName:"li"},"pipeline tasks")," to implement post-processing logic, see the ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"../generators/post-process"}),"Post processing")," and move your logic to a post-processing task")),Object(a.b)("h3",{id:"room-templates-migration"},"Room templates migration"),Object(a.b)("p",null,"The structure of room templates is now slightly different:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"tilemaps are now children of the ",Object(a.b)("em",{parentName:"li"},"Tilemaps")," game object and of the root game object"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"Room template")," script is added to the root game object"),Object(a.b)("li",{parentName:"ul"},"the sorting order of ",Object(a.b)("em",{parentName:"li"},"Walls")," is now 1 and the sorting order of ",Object(a.b)("em",{parentName:"li"},"Floor")," is now 0")),Object(a.b)("p",null,"You can convert a room template automatically by following these steps:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"open the room template in the ",Object(a.b)("strong",{parentName:"li"},"prefab mode")," (it does not work if we simply put the prefab into a scene)"),Object(a.b)("li",{parentName:"ul"},"add ",Object(a.b)("strong",{parentName:"li"},"Room Template Migration V1 to V2")," component to the root game object of the prefab"),Object(a.b)("li",{parentName:"ul"},"press the ",Object(a.b)("strong",{parentName:"li"},"Convert")," button of the component"),Object(a.b)("li",{parentName:"ul"},"save the prefab")))}s.isMDXComponent=!0},375:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(r),m=n,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||a;return r?o.a.createElement(d,c(c({ref:t},l),{},{components:r})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);