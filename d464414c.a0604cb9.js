(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{309:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return s})),o.d(t,"default",(function(){return p}));var n=o(3),r=o(7),a=(o(0),o(375)),i={title:"(PRO) Custom input"},l={unversionedId:"generators/custom-input",id:"version-2.0.0-alpha.5/generators/custom-input",isDocsHomePage:!1,title:"(PRO) Custom input",description:"In the free version of the asset, the input for the generator is fixed. That means that we create a level graph in the GUI and give it directly to the generator. However, there are situations where we might want to alter the level graph. For example, we may want to add a secret room that is connected to a random room in the level.",source:"@site/versioned_docs\\version-2.0.0-alpha.5\\generators\\custom-input.md",slug:"/generators/custom-input",permalink:"/Edgar-Unity-DocsArchive/docs/2.0.0-alpha.5/generators/custom-input",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-2.0.0-alpha.5/generators/custom-input.md",version:"2.0.0-alpha.5",sidebar:"version-2.0.0-alpha.5/docs",previous:{title:"(PRO) Platformer generator",permalink:"/Edgar-Unity-DocsArchive/docs/2.0.0-alpha.5/generators/platformer-generator"},next:{title:"Example 1",permalink:"/Edgar-Unity-DocsArchive/docs/2.0.0-alpha.5/examples/example-1"}},s=[{value:"<code>LevelGraph</code> and <code>LevelDescription</code>",id:"levelgraph-and-leveldescription",children:[]},{value:"Custom input implementation",id:"custom-input-implementation",children:[]},{value:"Typical use cases",id:"typical-use-cases",children:[{value:"Add rooms to the level graph",id:"add-rooms-to-the-level-graph",children:[]},{value:"Assign room templates automatically",id:"assign-room-templates-automatically",children:[]},{value:"Procedural graphs",id:"procedural-graphs",children:[]}]}],c={toc:s};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In the free version of the asset, the input for the generator is fixed. That means that we create a level graph in the GUI and give it directly to the generator. However, there are situations where we might want to alter the level graph. For example, we may want to add a secret room that is connected to a random room in the level."),Object(a.b)("p",null,"In this tutorial, we will learn how to implement custom inputs in order to have more control over the input for the generator."),Object(a.b)("h2",{id:"levelgraph-and-leveldescription"},Object(a.b)("inlineCode",{parentName:"h2"},"LevelGraph")," and ",Object(a.b)("inlineCode",{parentName:"h2"},"LevelDescription")),Object(a.b)("p",null,"The first thing that we need to understand is the difference between ",Object(a.b)("inlineCode",{parentName:"p"},"LevelGraph")," and ",Object(a.b)("inlineCode",{parentName:"p"},"LevelDescription")," classes. If you are reading this tutorial, you probably know what is a level graph. It is a collection of rooms and connections and it describes the high-level structure of generated levels. With each level graph is associated an instance of the ",Object(a.b)("inlineCode",{parentName:"p"},"LevelGraph")," scriptable object. "),Object(a.b)("p",null,"However, level graph are not directly given to the generator as an input. First, we need to convert the ",Object(a.b)("inlineCode",{parentName:"p"},"LevelGraph")," to an instance of the ",Object(a.b)("inlineCode",{parentName:"p"},"LevelDescription")," class. The reason for that is that level graphs are made primarily for the GUI editor and we need to convert them to a real graph data structure."),Object(a.b)("p",null,"Both ",Object(a.b)("inlineCode",{parentName:"p"},"LevelGraph")," and ",Object(a.b)("inlineCode",{parentName:"p"},"LevelDescription")," revolve around rooms and connections. The following code should demonstrate the basic API of both classes and how to convert one to the other one:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'public class CustomInputExample : DungeonGeneratorInputBase\n{\n    public LevelGraph LevelGraph;\n    public bool UseCorridors;\n\n    protected override LevelDescription GetLevelDescription()\n    {\n        var levelDescription = new LevelDescription();\n\n        // Go through rooms in the level graph and add them to the level description\n        foreach (var room in LevelGraph.Rooms)\n        {\n            levelDescription.AddRoom(room, GetRoomTemplates(room));\n        }\n\n        // Go through connections in the level graph\n        foreach (var connection in LevelGraph.Connections)\n        {\n            // If corridors are enabled, add corridor connection\n            if (UseCorridors)\n            {\n                // Create a room for the corridor\n                var corridorRoom = ScriptableObject.CreateInstance<Room>();\n                corridorRoom.Name = "Corridor";\n\n\n                levelDescription.AddCorridorConnection(connection, corridorRoom, GetCorridorRoomTemplates());\n            }\n            // Else connect the rooms directly\n            else\n            {\n                levelDescription.AddConnection(connection);\n            }\n        }\n\n        return levelDescription;\n    }\n\n    /// <summary>\n    /// Gets room templates for a given room.\n    /// </summary>\n    private List<GameObject> GetRoomTemplates(RoomBase room)\n    {\n        // Get room templates from a given room\n        var roomTemplates = room.GetRoomTemplates();\n\n        // If the list is empty, we use the defaults room templates from the level graph\n        if (roomTemplates == null || roomTemplates.Count == 0)\n        {\n            var defaultRoomTemplates = LevelGraph.DefaultIndividualRoomTemplates;\n            var defaultRoomTemplatesFromSets = LevelGraph.DefaultRoomTemplateSets.SelectMany(x => x.RoomTemplates);\n\n            // Combine individual room templates with room templates from room template sets\n            return defaultRoomTemplates.Union(defaultRoomTemplatesFromSets).ToList();\n        }\n\n        return roomTemplates;\n    }\n\n    /// <summary>\n    /// Gets corridor room templates.\n    /// </summary>\n    private List<GameObject> GetCorridorRoomTemplates()\n    {\n        var defaultRoomTemplates = LevelGraph.CorridorIndividualRoomTemplates;\n        var defaultRoomTemplatesFromSets = LevelGraph.CorridorRoomTemplateSets.SelectMany(x => x.RoomTemplates);\n\n        return defaultRoomTemplates.Union(defaultRoomTemplatesFromSets).ToList();\n    }\n}\n')),Object(a.b)("h2",{id:"custom-input-implementation"},"Custom input implementation"),Object(a.b)("p",null,"Custom inputs are quite similar to ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/Edgar-Unity-DocsArchive/docs/2.0.0-alpha.5/generators/post-process"}),"Custom post-processing")," logic. We have to create a class that inherits from ",Object(a.b)("inlineCode",{parentName:"p"},"DungeonGeneratorInputBase"),". And because the base class is a ScriptableObject, we need to add the ",Object(a.b)("inlineCode",{parentName:"p"},"CreateAssetMenu")," attribute so we are able to create an instance of that ScriptableObject. The ",Object(a.b)("inlineCode",{parentName:"p"},"DungeonGeneratorInputBase")," class has one abstract method that we need to implement - ",Object(a.b)("inlineCode",{parentName:"p"},"LevelDescription GetLevelDescription()"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'[CreateAssetMenu(menuName = "Dungeon generator/Examples/Docs/My custom input", fileName = "MyCustomInputSetup")]\npublic class CustomInputExample : DungeonGeneratorInputBase\n{\n    protected override LevelDescription GetLevelDescription()\n    {\n        // Create level description\n    }\n}\n')),Object(a.b)("p",null,"After we implement the logic, we have to create an instance of that ScriptableObject by right clicking in the project view and ",Object(a.b)("em",{parentName:"p"},"Create -> Dungeon generator -> Examples -> Docs -> My custom input"),". And the last step is to switch the ",Object(a.b)("em",{parentName:"p"},"Input Type")," in the generator inspector to ",Object(a.b)("em",{parentName:"p"},"Custom Input")," and drag and drop the ScriptableObject instance to the ",Object(a.b)("em",{parentName:"p"},"Custom Input Task")," field."),Object(a.b)("h2",{id:"typical-use-cases"},"Typical use cases"),Object(a.b)("h3",{id:"add-rooms-to-the-level-graph"},"Add rooms to the level graph"),Object(a.b)("p",null,"One typical use case is adding additional rooms (for example a random secret room) to an existing level graph. The workflow is usually as follows:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Create static part of the level graph in the GUI"),Object(a.b)("li",{parentName:"ol"},"Create a custom input task with a public level graph field that we will assign our level graph to"),Object(a.b)("li",{parentName:"ol"},"Convert the ",Object(a.b)("inlineCode",{parentName:"li"},"LevelGraph")," to ",Object(a.b)("inlineCode",{parentName:"li"},"LevelDescription")," (as discussed above)"),Object(a.b)("li",{parentName:"ol"},"Create additional rooms and connect them to existing rooms in the level description")),Object(a.b)("p",null,"To make it easier to work with the graph of rooms and connections, ",Object(a.b)("inlineCode",{parentName:"p"},"LevelDescription")," has a ",Object(a.b)("inlineCode",{parentName:"p"},"IGraph<RoomBase> GetGraph()")," method to get the current graph of rooms. The graphs contains all the expected methods like getting all rooms or checking if two rooms are neighbours."),Object(a.b)("p",null,"For an example of how can this be implemented, see the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/Edgar-Unity-DocsArchive/docs/2.0.0-alpha.5/examples/enter-the-gungeon"}),"Enter the Gungeon")," example where we connect a secret room to a random room in the graph."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," The graph which is returned by the ",Object(a.b)("inlineCode",{parentName:"p"},"GetGraph()")," method currently does not get updated when you modify the level description. You need to call the method again to get a new graph.")),Object(a.b)("h3",{id:"assign-room-templates-automatically"},"Assign room templates automatically"),Object(a.b)("p",null,"Another typical use case is implementing custom logic for assigning room templates to individual rooms. For example, if we use ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../basics/level-graphs#pro-custom-rooms-and-connections"}),"custom rooms"),", we may want to assign room templates based on the type of the room instead of manually assigning room templates to individual rooms. This can be seen both in ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/Edgar-Unity-DocsArchive/docs/2.0.0-alpha.5/examples/enter-the-gungeon"}),"Enter the Gungeon")," and ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/Edgar-Unity-DocsArchive/docs/2.0.0-alpha.5/examples/dead-cells"}),"Dead Cells")," examples."),Object(a.b)("h3",{id:"procedural-graphs"},"Procedural graphs"),Object(a.b)("p",null,"It is also possible to have completely procedural structure of levels by creating the whole level description on the fly without any static parts."))}p.isMDXComponent=!0},375:function(e,t,o){"use strict";o.d(t,"a",(function(){return m})),o.d(t,"b",(function(){return u}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},m=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(o),h=n,u=m["".concat(i,".").concat(h)]||m[h]||d[h]||a;return o?r.a.createElement(u,l(l({ref:t},c),{},{components:o})):r.a.createElement(u,l({ref:t},c))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}h.displayName="MDXCreateElement"}}]);