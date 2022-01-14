(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{208:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return m}));var i=a(3),r=a(7),o=(a(0),a(371)),n=a(374),l=(a(376),{title:"(PRO) Minimap"}),s={unversionedId:"guides/minimap",id:"version-2.0.0-alpha.8/guides/minimap",isDocsHomePage:!1,title:"(PRO) Minimap",description:"In this guide, we will learn how to implement a simple minimap functionality.",source:"@site/versioned_docs\\version-2.0.0-alpha.8\\guides\\minimap.md",slug:"/guides/minimap",permalink:"/Edgar-Unity-DocsArchive/docs/2.0.0-alpha.8/guides/minimap",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-2.0.0-alpha.8/guides/minimap.md",version:"2.0.0-alpha.8",sidebar:"version-2.0.0-alpha.8/docs",previous:{title:"(PRO) Fog of war",permalink:"/Edgar-Unity-DocsArchive/docs/2.0.0-alpha.8/guides/fog-of-war"},next:{title:"(PRO) Door sockets",permalink:"/Edgar-Unity-DocsArchive/docs/2.0.0-alpha.8/guides/door-sockets"}},c=[{value:"Example scene",id:"example-scene",children:[]},{value:"Setup",id:"setup",children:[{value:"Create a Minimap camera",id:"create-a-minimap-camera",children:[]},{value:"Create Render Texture",id:"create-render-texture",children:[]},{value:"Assign render texture to the camera",id:"assign-render-texture-to-the-camera",children:[]},{value:"Prepare UI elements",id:"prepare-ui-elements",children:[]},{value:"<em>(Optional)</em> Post-processing",id:"optional-post-processing",children:[]},{value:"<em>(Optional)</em> Fog of War",id:"optional-fog-of-war",children:[]}]},{value:"Post-processing",id:"post-processing",children:[{value:"Layers",id:"layers",children:[]},{value:"Size correction #1",id:"size-correction-1",children:[]},{value:"Size correction #2 and overlapping tiles",id:"size-correction-2-and-overlapping-tiles",children:[]}]},{value:"Customization",id:"customization",children:[{value:"Shape of the minimap border",id:"shape-of-the-minimap-border",children:[]},{value:"Background colour",id:"background-colour",children:[]},{value:"Zoom level",id:"zoom-level",children:[]},{value:"Add player (or other) icon(s)",id:"add-player-or-other-icons",children:[]}]}],p={toc:c};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this guide, we will learn how to implement a simple minimap functionality."),Object(o.b)(n.c,{src:"img/v2/guides/minimap/result.png",caption:"Minimap in the top-right corner, simplified view of the level, with fog of war",mdxType:"Image"}),Object(o.b)("h2",{id:"example-scene"},"Example scene"),Object(o.b)("p",null,"An example scene can be found at ",Object(o.b)("em",{parentName:"p"},"Edgar/Examples/MinimapExample")," and ",Object(o.b)("em",{parentName:"p"},"Edgar/Examples/MinimapExample2"),". "),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("h3",{id:"create-a-minimap-camera"},"Create a Minimap camera"),Object(o.b)("p",null,"The first step is to create an additional camera that will render the minimap view. For starters, configure the camera so that it renders the same things as the main camera. Later, you will be able to change the background colour or zoom it out. Do not forget to make the camera follow your player so that it is always centered on the player."),Object(o.b)("h3",{id:"create-render-texture"},"Create Render Texture"),Object(o.b)("p",null,"The next step is to create a Render Texture that we will use to show the minimap inside the UI. Go to ",Object(o.b)("em",{parentName:"p"},"Create -> Render Texture")," to create the render texture and set its size to e.g. 512x512. "),Object(o.b)("h3",{id:"assign-render-texture-to-the-camera"},"Assign render texture to the camera"),Object(o.b)("p",null,"The next step is to assign the render texture to the ",Object(o.b)("em",{parentName:"p"},"Target Texture")," field of our minimap camera. By doing so, the camera will now render its view to the render texture instead of on the screen. If you run the game now, you should see that the render texture changes as you move in the level."),Object(o.b)("h3",{id:"prepare-ui-elements"},"Prepare UI elements"),Object(o.b)("p",null,"The next step is to show the render texture in our UI. To make this tutorial simple, we will create a simple square minimap with a solid white border. However, it should be very easy to customize the look of the minimap - make it circular or add a custom border."),Object(o.b)("p",null,"First, create a canvas if you do not have one already. Next, add an ",Object(o.b)("em",{parentName:"p"},"Image")," (",Object(o.b)("em",{parentName:"p"},"UI -> Image"),") element inside the canvas. Set its colour to white and the size to e.g. 204x204. Move the image to the top-right corner so that it looks like the left image below. Next, add a ",Object(o.b)("em",{parentName:"p"},"Raw Image")," (",Object(o.b)("em",{parentName:"p"},"UI -> Raw Image"),") element inside the white image. Set its size to 200x200 and move it to the centre of the white background. And finally, assign our render texture to the ",Object(o.b)("em",{parentName:"p"},"Texture")," field of the raw image. The screen should now look like the right image below."),Object(o.b)(n.a,{cols:2,mdxType:"Gallery"},Object(o.b)(n.b,{src:"img/v2/guides/minimap/ui_white_background.png",caption:"Minimap with background only",mdxType:"GalleryImage"}),Object(o.b)(n.b,{src:"img/v2/guides/minimap/ui_with_texture.png",caption:"Minimap with render texture",mdxType:"GalleryImage"})),Object(o.b)("p",null,"The minimap is now fully functional. The following steps are optional, but I recommend to check them out."),Object(o.b)("h3",{id:"optional-post-processing"},Object(o.b)("em",{parentName:"h3"},"(Optional)")," Post-processing"),Object(o.b)("p",null,"Usually, a minimap is not just a zoomed-out view of the game. We often want to show a simplified view of the game. The goal is the following: we will create an additional tilemap layer in which we will create a simplified version of the level with single-coloured tiles. We will also create a special Unity layer, assign this layer to the new tilemap layer and then set up cameras in a way that only the minimap camera displays the new layer."),Object(o.b)("p",null,"The first step is to create a new Unity Layer, called, for example, ",Object(o.b)("em",{parentName:"p"},'"Minimap"'),"."),Object(o.b)("p",null,"Next, we have to create an instance of the ",Object(o.b)("em",{parentName:"p"},"MinimapPostProcess")," scriptable object. In order to do that, head to ",Object(o.b)("em",{parentName:"p"},"Create -> Edgar -> Features -> Minimap post-process"),", which should create a new file for you. Now drag and drop this file to the ",Object(o.b)("em",{parentName:"p"},"Custom post-process tasks")," section of the dungeon generator in order to enable it. After you do that, you should see several editor fields in the post-processing task:"),Object(o.b)(n.c,{src:"img/v2/guides/minimap/post_processing_new.png",caption:"Minimap post-processing task",mdxType:"Image"}),Object(o.b)("p",null,"First, change the ",Object(o.b)("em",{parentName:"p"},"Layer")," field to match the layer that you created for the minimap."),Object(o.b)("p",null,"Next, take a look at the ",Object(o.b)("em",{parentName:"p"},"Layers")," array. Here you can configure which tilemap layers should be displayed in the minimap. By default, the minimap comes with two layers - the first layer is for the ",Object(o.b)("em",{parentName:"p"},"Walls")," tilemap layer and the second one is for the ",Object(o.b)("em",{parentName:"p"},"Floor")," tilemap layer. "),Object(o.b)("p",null," Next, check that the ",Object(o.b)("em",{parentName:"p"},"Walls Tilemaps")," and ",Object(o.b)("em",{parentName:"p"},"Floor Tilemaps")," match the names of your wall tilemap layer and floor tilemap layer. After you generate a level, you should see something similar to the image below. You can see that there is an additional tilemap layer on top of the level, and it contains a simplified view of the level."),Object(o.b)(n.c,{src:"img/v2/guides/minimap/simplified_view.png",caption:"Both cameras rendering the simplified view",mdxType:"Image"}),Object(o.b)("p",null,"The last step is to change which camera renders which layers. In your main camera, exclude the minimap layer from the ",Object(o.b)("em",{parentName:"p"},"Culling Mask")," field. In your minimap camera, render only the minimap layer. After doing that, you should see something similar to the image below."),Object(o.b)(n.c,{src:"img/v2/guides/minimap/simplified_view_result.png",caption:"Only the minimap camera rendering the simplified view",mdxType:"Image"}),Object(o.b)("h3",{id:"optional-fog-of-war"},Object(o.b)("em",{parentName:"h3"},"(Optional)")," Fog of War"),Object(o.b)("p",null,"The minimap works really well with the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/Edgar-Unity-DocsArchive/docs/2.0.0-alpha.8/guides/fog-of-war"}),"Fog of War")," feature. If you have the Fog of War already working, it is very easy to use it together with the minimap. Because the ",Object(o.b)("em",{parentName:"p"},"Fog Of War")," component is a singleton, we cannot directly add it to the minimap camera. However, there is the ",Object(o.b)("em",{parentName:"p"},"Fog Of War Additional Camera")," components that was created for this exact purpose. If you add this component to the minimap camera, the fog effect will be applied to both cameras."),Object(o.b)(n.a,{cols:2,mdxType:"Gallery"},Object(o.b)(n.b,{src:"img/v2/guides/minimap/fog_original.png",caption:"Fog of War",mdxType:"GalleryImage"}),Object(o.b)(n.b,{src:"img/v2/guides/minimap/fog_simplified.png",caption:"Fog of War with simplified view",mdxType:"GalleryImage"})),Object(o.b)("h2",{id:"post-processing"},"Post-processing"),Object(o.b)("p",null,"Usually, a minimap is not just a zoomed-out view of the game. We often want to show a simplified view of the game with simple graphics or remove some tilemap layers from the minimap. For this purpose, there is the ",Object(o.b)("em",{parentName:"p"},"MinimapPostProcessing")," task that should help you customize the look of the minimap. "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," It is expected that you know how to add the ",Object(o.b)("em",{parentName:"p"},"MinimapPostProcessing")," task. (See the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/Edgar-Unity-DocsArchive/docs/2.0.0-alpha.8/guides/minimap#optional-post-processing"}),"Setup")," section)")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," If you change something in the task settings, you have to generate the level again to see the changes applied.")),Object(o.b)("h4",{id:"layer"},Object(o.b)("inlineCode",{parentName:"h4"},"Layer")),Object(o.b)("p",null,"This field controls on which layer should the minimap be rendered. This was already described in the the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/Edgar-Unity-DocsArchive/docs/2.0.0-alpha.8/guides/minimap#optional-post-processing"}),"Setup")," section."),Object(o.b)("h4",{id:"use-mutliple-tilemaps"},Object(o.b)("inlineCode",{parentName:"h4"},"Use Mutliple Tilemaps")),Object(o.b)("p",null,"This field controls if each minimap layer should get its own tilemap layer of if they should all share a single layer. It is usually recommended to keep this checkbox enabled."),Object(o.b)("h3",{id:"layers"},"Layers"),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"Layers")," field is the main configuration section of the minimap post-processing task. The core idea is that the minimap consists of multiple layers of tiles, and each such layer corresponds to one or more tilemap layers that are present in the level. For example, if we wanted to display all wall tiles using the colour white and all floor tiles using the colour blue, we would add two minimap layers and configure them accordingly. Below are described all the fields of minimap layers."),Object(o.b)(n.c,{src:"img/v2/guides/minimap/post_processing_new.png",caption:"Minimap post-processing task",mdxType:"Image"}),Object(o.b)("h4",{id:"tilemaps"},Object(o.b)("inlineCode",{parentName:"h4"},"Tilemaps")),Object(o.b)("p",null,"This field controls which tilemap layers are displayed in the minimap layer. Usually, it will be a single tilemap layer (for example ",Object(o.b)("em",{parentName:"p"},'"Walls"'),"). As a result, the post-processing task will copy all the wall tiles from the level to the minimap layer. If there are multiple tilemap layers with the same configuration, we can concatenate their names with a comma (for example ",Object(o.b)("em",{parentName:"p"},'"Walls,Collideable"'),")."),Object(o.b)("h4",{id:"display-mode"},Object(o.b)("inlineCode",{parentName:"h4"},"Display Mode")),Object(o.b)("p",null,"There are current 3 ways of displaying minimap layers:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Color")," - tiles are rendered as a single colour"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Custom Tile")," - a given custom tile is used instead of the original tiles"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Original Tiles")," - original tiles are used")),Object(o.b)("p",null,"Below are properties that change the behaviour of individual modes."),Object(o.b)("h4",{id:"color-color-mode-only"},Object(o.b)("inlineCode",{parentName:"h4"},"Color")," (",Object(o.b)("em",{parentName:"h4"},"Color")," mode only)"),Object(o.b)("p",null,"This field controls the colour of tiles in the layer."),Object(o.b)("h4",{id:"size-color-mode-only"},Object(o.b)("inlineCode",{parentName:"h4"},"Size")," (",Object(o.b)("em",{parentName:"h4"},"Color")," mode only)"),Object(o.b)("p",null,"This field controls the size of tiles and is used to correct the sizes of minimap tiles (see ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/Edgar-Unity-DocsArchive/docs/2.0.0-alpha.8/guides/minimap#size-correction-1"}),"Size correction #1"),"). The default value is ",Object(o.b)("em",{parentName:"p"},"1")," - tiles have their original sizes. If we set the size to ",Object(o.b)("em",{parentName:"p"},"2"),", the size will be two times as large and the tiles will occupy part of the space of neighbouring tiles."),Object(o.b)("h4",{id:"tile-custom-tile-mode-only"},Object(o.b)("inlineCode",{parentName:"h4"},"Tile")," (",Object(o.b)("em",{parentName:"h4"},"Custom Tile")," mode only)"),Object(o.b)("p",null,"This field controls the tile that will be used instead of the original tiles."),Object(o.b)("h4",{id:"material"},Object(o.b)("inlineCode",{parentName:"h4"},"Material")),Object(o.b)("p",null,"This field controls which material is used in the ",Object(o.b)("inlineCode",{parentName:"p"},"Tilemap Renderer")," component. The default material is used if null. This field can also be used for size correction, see ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/Edgar-Unity-DocsArchive/docs/2.0.0-alpha.8/guides/minimap#size-correction-2"}),"Size correction #2"),"."),Object(o.b)("h3",{id:"size-correction-1"},"Size correction #1"),Object(o.b)("p",null,"When using the ",Object(o.b)("em",{parentName:"p"},"Color"),' display mode, we will often encounter a problem with minimap tile sizes being different to actual tile sizes used in the game. An example of this problem can be seen in the image below. In the left image, we can see how the minimap looks with equal sizes of wall and floor tiles (i.e. Floor layer size set to 1). The problem is that the original wall tiles do not occupy the whole tile which results in the outline of the minimap view looking more "chunkier". To compensate for that, we can increase the size of the floor minimap layer. If we set the floor layer size to 2, the floor tiles will occupy some space of the wall tiles and as a result, the wall tiles will look thinner.'),Object(o.b)(n.a,{cols:2,mdxType:"Gallery"},Object(o.b)(n.b,{src:"img/v2/guides/minimap/wall_size_1.png",caption:"Floor size 1",mdxType:"GalleryImage"}),Object(o.b)(n.b,{src:"img/v2/guides/minimap/wall_size_0_5.png",caption:"Floor size 2",mdxType:"GalleryImage"})),Object(o.b)("p",null,"For this to work, the floor layer must be rendered on top of the wall layer (i.e. the floor layer must be under the wall layer in the ",Object(o.b)("em",{parentName:"p"},"Layers")," array). Also, it is not possible to decrease the size of wall tiles, we always have to increase the size of a suitable layer."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," All files from this example can be found at ",Object(o.b)("em",{parentName:"p"},"Edgar/Examples/MinimapExample"),".")),Object(o.b)("h3",{id:"size-correction-2-and-overlapping-tiles"},"Size correction #2 and overlapping tiles"),Object(o.b)("p",null,"For some tilesets, the previous approach for size correction will not work. The previous approach can work only for tilesets, where there are no tiles displayed over one another. This does not hold for the tileset that can be seen in the image below because the lighter wall outlines are displayed on top of floor tiles. In the left image, we can see how the minimap looks without any size correction. Once again, the wall tiles are much thicker when compared to the original game view. And in the right image, we can see how it looks like when we apply the previous size correction approach. The problem is that with the previous approach, the floor minimap tiles must be drawn on top of the wall tiles, which causes the vertical wall tiles to completely disappear."),Object(o.b)(n.a,{cols:2,mdxType:"Gallery"},Object(o.b)(n.b,{src:"img/v2/guides/minimap/example2_no_correction.png",caption:"No size correction",mdxType:"GalleryImage"}),Object(o.b)(n.b,{src:"img/v2/guides/minimap/example2_wrong_correction.png",caption:"Size correction #1",mdxType:"GalleryImage"})),Object(o.b)("p",null,"To fix this issue, we will utilize the fact that when a given tile does not occupy the whole square tile space, the rest of the pixels are transparent. Instead of using the ",Object(o.b)("em",{parentName:"p"},"Color")," mode, we will use the ",Object(o.b)("em",{parentName:"p"},"Original Tiles")," mode together with a custom shader that keeps all transparent pixels intact and transforms all the other pixels to a uniform colour."),Object(o.b)("p",null,"First, create a new material for each tilemap layer (",Object(o.b)("em",{parentName:"p"},"Create -> Material"),") that contains non-square tiles. For the example above, we will need two materials - one for the walls and for the lighter wall outlines. Open these materials, set their shader to ",Object(o.b)("em",{parentName:"p"},'"Edgar/Minimap Single Color Tile"')," and configure the ",Object(o.b)("em",{parentName:"p"},"Tile Color")," field to match the desired colour of the minimap layer. The last step is to assign the materials to the ",Object(o.b)("em",{parentName:"p"},"Material")," field of the tilemap layer. The final setup shoud look like this:"),Object(o.b)(n.c,{src:"img/v2/guides/minimap/example2_setup.png",caption:"Setup",mdxType:"Image"}),Object(o.b)(n.c,{src:"img/v2/guides/minimap/example2_correct.png",caption:"Result",mdxType:"Image"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," All files from this example can be found at ",Object(o.b)("em",{parentName:"p"},"Edgar/Examples/MinimapExample2"),".")),Object(o.b)("h2",{id:"customization"},"Customization"),Object(o.b)("h3",{id:"shape-of-the-minimap-border"},"Shape of the minimap border"),Object(o.b)("p",null,"See 3rd party tutorials ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://blog.theknightsofunity.com/implementing-minimap-unity/"}),"here")," or ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://learn.unity.com/tutorial/5c5151b9edbc2a0020694df6#5c7f8528edbc2a002053b552"}),"here"),"."),Object(o.b)("h3",{id:"background-colour"},"Background colour"),Object(o.b)("p",null,"To change the background colour of the minimap, change the background colour of the minimap camera."),Object(o.b)("h3",{id:"zoom-level"},"Zoom level"),Object(o.b)("p",null,"If you want to zoom out the minimap view, just change the ",Object(o.b)("em",{parentName:"p"},"Size")," field of the minimap camera to a larger number."),Object(o.b)("h3",{id:"add-player-or-other-icons"},"Add player (or other) icon(s)"),Object(o.b)("p",null,"You can easily add a player icon to the minimap. Add a child game object to your player, add your player icon as a sprite to the game object and change its layer to the minimap layer. By doing so, the sprite will be only visible on the minimap. You can do the same thing with enemies, treasures, etc."))}m.isMDXComponent=!0},371:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var i=a(0),r=a.n(i);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,n=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),h=i,u=m["".concat(n,".").concat(h)]||m[h]||d[h]||o;return a?r.a.createElement(u,l(l({ref:t},c),{},{components:a})):r.a.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,n=new Array(o);n[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,n[1]=l;for(var c=2;c<o;c++)n[c]=a[c];return r.a.createElement.apply(null,n)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},372:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return n}));var i=a(22),r=a(373);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(i.default)();return{withBaseUrl:(a,i)=>function(e,t,a,{forcePrependBaseUrl:i=!1,absolute:o=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(i)return t+a;const n=a.startsWith(t)?a:t+a.replace(/^\//,"");return o?e+n:n}(t,e,a,i)}}function n(e,t={}){const{withBaseUrl:a}=o();return a(e,t)}},373:function(e,t,a){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return r}))},374:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return m}));var i=a(3),r=a(0),o=a.n(r),n=a(372);const l=e=>o.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),s=e=>o.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},o.a.Children.map(e.children,(t=>o.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight})))),c=e=>o.a.createElement(l,{cols:e.cols},o.a.createElement("a",{href:Object(n.a)(e.src),target:"_blank"},o.a.createElement("img",{src:Object(n.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&o.a.createElement(p,null,e.caption)),p=e=>o.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),m=e=>{const{src:t,caption:a,...r}=e;return o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("img",Object(i.a)({src:Object(n.a)(e.src)},r)),void 0!==e.caption&&o.a.createElement(p,null,e.caption))}},375:function(e,t,a){"use strict";var i=a(0),r=a.n(i),o=a(11),n=a(373),l=a(8);const s=Object(i.createContext)({collectLink:()=>{}});var c=a(372),p=function(e,t){var a={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(a[i[r]]=e[i[r]])}return a};t.a=function(e){var t,{isNavLink:a,to:m,href:d,activeClassName:h,isActive:u,"data-noBrokenLinkCheck":b,autoAddBaseUrl:f=!0}=e,g=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:y}=Object(c.b)(),w=Object(i.useContext)(s),O=m||d,j=Object(n.a)(O),v=null==O?void 0:O.replace("pathname://",""),x=void 0!==v?(N=v,f&&(e=>e.startsWith("/"))(N)?y(N):N):void 0;var N;const k=Object(i.useRef)(!1),T=a?o.e:o.c,E=l.a.canUseIntersectionObserver;let z;Object(i.useEffect)((()=>(!E&&j&&window.docusaurus.prefetch(x),()=>{E&&z&&z.disconnect()})),[x,E,j]);const C=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,I=!x||!j||C;return x&&j&&!C&&!b&&w.collectLink(x),I?r.a.createElement("a",Object.assign({href:x},O&&!j&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(T,Object.assign({},g,{onMouseEnter:()=>{k.current||(window.docusaurus.preload(x),k.current=!0)},innerRef:e=>{var t,a;E&&e&&j&&(t=e,a=()=>{window.docusaurus.prefetch(x)},z=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(z.unobserve(t),z.disconnect(),a())}))})),z.observe(t))},to:x||""},a&&{isActive:u,activeClassName:h}))}},376:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return p}));var i=a(0),r=a.n(i),o=a(375);const n=[{id:"outline-override",url:"../basics/room-templates#outline-override",name:"Outline override",usages:[{id:"corridors",description:"Outline override is used to properly handle corridors"}]},{id:"custom-rooms-and-connections",url:"../basics/level-graphs#pro-custom-rooms-and-connections",name:"Custom rooms",usages:[{id:"room-type",description:"The definition of rooms is enhanced with a custom type"}]},{id:"custom-post-processing",url:"../generators/post-process#custom-post-processing",name:"Custom post-processing",usages:[{id:"enemies",description:"A custom post-processing task is used to spawn enemies after a level is generated"},{id:"player-spawn",description:"Move the player to the spawn position of the level"}]}],l=[{id:"example-1",name:"Example 1",url:"../examples/example-1",features:[{id:"custom-post-processing",usage:"enemies",anchor:"enemies"}]},{id:"example-2",name:"Example 2",url:"../examples/example-2",features:[{id:"outline-override",usage:"corridors",anchor:"vertical-corridors"}]},{id:"dead-cells",name:"Dead Cells",url:"../examples/dead-cells",features:[{id:"custom-post-processing",usage:"enemies",anchor:"enemies"},{id:"custom-post-processing",usage:"player-spawn",anchor:"spawn-position"},{id:"custom-rooms-and-connections",usage:"room-type",anchor:"custom-room-and-connection-types"}]}];function s(e){if("undefined"!=typeof window){const t=window.location.href,a=t.split("/");(a[a.length-1].startsWith("#")||t.endsWith("/"))&&(e="../"+e)}return e}const c=e=>{const t=n.find((t=>t.id===e.id)).usages.map((e=>({...e,examples:[]})));return l.forEach((a=>{a.features.forEach((i=>{if(i.id===e.id){t.find((e=>e.id===i.usage)).examples.push({example:a,feature:i})}}))})),r.a.createElement("div",{className:"featureUsage"},r.a.createElement("div",{className:"featureUsage__title"},"Where is this feature used?"),r.a.createElement("div",{className:"featureUsage__description"},"Below is the list of examples/tutorials where we use this feature. Feel free to check them out if you're not sure how something works or if you just want to see this feature used in action."),r.a.createElement("table",null,r.a.createElement("tbody",null,t.map(((e,t)=>r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.examples.map(((e,t)=>r.a.createElement("span",null,t?", ":"",r.a.createElement(o.a,{to:s(e.example.url+"#"+e.feature.anchor),onClick:()=>{return t=e.feature.anchor,void setTimeout((function(){var e=document.getElementById(t);e&&e.scrollIntoView()}),1e3);var t}},e.example.name))))),r.a.createElement("td",null,e.description)))))))},p=e=>{const t=l.find((t=>t.id===e.id)),a=[];return t.features.forEach((e=>{const t=n.find((t=>t.id===e.id)),i=t.usages.find((t=>t.id===e.usage));a.push({...e,feature:t,featureUsage:i})})),r.a.createElement("div",{className:"featureUsage"},r.a.createElement("div",{className:"featureUsage__title"},"List of used features"),r.a.createElement("div",{className:"featureUsage__description"},"Below is a list of features that are used in this example."),r.a.createElement("table",null,r.a.createElement("tbody",null,a.map(((e,t)=>r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement(o.a,{to:e.feature.url},e.feature.name)),r.a.createElement("td",null,e.featureUsage.description)))))))}}}]);