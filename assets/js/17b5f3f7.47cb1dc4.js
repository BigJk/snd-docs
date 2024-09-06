"use strict";(self.webpackChunksnd_docs_ds=self.webpackChunksnd_docs_ds||[]).push([[471],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={},i="Generator",l={unversionedId:"templating/generator",id:"templating/generator",title:"Generator",description:"A Generator creates procedural content like random dungeons, rolling from a table, random encounters and much more.",source:"@site/docs/templating/generator.md",sourceDirName:"templating",slug:"/templating/generator",permalink:"/docs/templating/generator",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/templating/generator.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AI Features",permalink:"/docs/templating/ai"},next:{title:"Nunjucks Filter & Extensions",permalink:"/docs/templating/nunjucks-filter"}},s={},u=[{value:"Information",id:"information",level:2},{value:"Author &amp; Slug",id:"author--slug",level:3},{value:"Pass Entries to Javascript",id:"pass-entries-to-javascript",level:3},{value:"Images",id:"images",level:2},{value:"Example",id:"example",level:3},{value:"Sources",id:"sources",level:2},{value:"Pass Entries to Javascript",id:"pass-entries-to-javascript-1",level:2},{value:"Config",id:"config",level:2},{value:"Seed",id:"seed",level:3},{value:"Test Config",id:"test-config",level:2},{value:"Print Template",id:"print-template",level:2},{value:"Random",id:"random",level:3},{value:"Seed",id:"seed-1",level:4},{value:"<code>random()</code>",id:"random-1",level:4},{value:"RPG Dice Roller",id:"rpg-dice-roller",level:4},{value:"Nunjucks",id:"nunjucks",level:4}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"generator"},"Generator"),(0,r.kt)("p",null,"A Generator creates procedural content like random dungeons, rolling from a table, random encounters and much more."),(0,r.kt)("p",null,"In the following section a brief introduction to the tabs found in the generator creation will be given:"),(0,r.kt)("h2",{id:"information"},"Information"),(0,r.kt)("p",null,"Here basic information for the generator, like a name and description that will be shown in the generator page are set."),(0,r.kt)("h3",{id:"author--slug"},"Author & Slug"),(0,r.kt)("p",null,"It's important to know that generators will be identified by author and slug. Both are allowed\nto contain alphanumeric (",(0,r.kt)("inlineCode",{parentName:"p"},"a-z A-Z 0-9"),") and the ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," character. You can think about the slug as a simplified\nname that is used for identification instead of looking nice to display."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," If you want a generator generating Dungeons you might set the name to ",(0,r.kt)("inlineCode",{parentName:"p"},"Dungeon Generator"),",\nthe Author to ",(0,r.kt)("inlineCode",{parentName:"p"},"YourUsername")," and the slug to ",(0,r.kt)("inlineCode",{parentName:"p"},"dungeon-generator"),"."),(0,r.kt)("p",null,"With the help of author and slug it is easier to share generators and update them when importing."),(0,r.kt)("h3",{id:"pass-entries-to-javascript"},"Pass Entries to Javascript"),(0,r.kt)("p",null,"Check Source section below."),(0,r.kt)("h2",{id:"images"},"Images"),(0,r.kt)("p",null,"It is possible to attach images to a generator. Imagine you want to add a border to your template.\nHere is the right place to add these images. If you added an image it is possible to access it\nin a template via the ",(0,r.kt)("inlineCode",{parentName:"p"},"images")," variable."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<img src="{{ images[\'your_image.png\'] }}" alt="" />\n')),(0,r.kt)("h2",{id:"sources"},"Sources"),(0,r.kt)("p",null,"Data sources are collection of entries (data) that can be linked to generators.\nAn example would be a list of Monsters or Magic Items. Any data source that you want to link\nto this generator can be selected here."),(0,r.kt)("h2",{id:"pass-entries-to-javascript-1"},"Pass Entries to Javascript"),(0,r.kt)("p",null,"If you enabled this option in the Information tab the entries of all the data sources will be available as a javascript array called ",(0,r.kt)("inlineCode",{parentName:"p"},"entries")," inside of the Print Template."),(0,r.kt)("h2",{id:"config"},"Config"),(0,r.kt)("p",null,"The config of a generator defines what kind of values a user can tweak. These are the values your generator template should respond to and are available in your template."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Key"),": Specifies the key for the value. This affects how you access the value in the template. ",(0,r.kt)("inlineCode",{parentName:"li"},"key_test")," can be accessed in template by ",(0,r.kt)("inlineCode",{parentName:"li"},"{{ config.key_test }}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name & Description"),": What the user will be shown as name and description for this config option."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type"),": What kind of input will be shown for the user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": The default value for this config")),(0,r.kt)("h3",{id:"seed"},"Seed"),(0,r.kt)("p",null,"Every generator will have a seed as config option. This option can't be deleted and generator authors are advised to use the seed or the seeded random functions inside their Print Template to keep the output reproducible. More on that in the Print Template section."),(0,r.kt)("h2",{id:"test-config"},"Test Config"),(0,r.kt)("p",null,"Here you can change the test config for the template preview to see if everything works as expected."),(0,r.kt)("h2",{id:"print-template"},"Print Template"),(0,r.kt)("p",null,"Just like a Template a Generator also contains a Print Template that specifies what should be printed. With generators the template will most likely contain more complex logic and javascript than your typical Template."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/BigJk/snd/wiki/Nunjucks-Filter-&-Extensions"},"Nunjucks Filter & Extension")," for more info on additional filters and extensions available in Sales & Dungeons."),(0,r.kt)("h3",{id:"random"},"Random"),(0,r.kt)("h4",{id:"seed-1"},"Seed"),(0,r.kt)("p",null,"As mentioned before all generators should use the user provided seed in their generation logic. You can access the seed with ",(0,r.kt)("inlineCode",{parentName:"p"},"{{ config.seed }}"),".\nThere are two javascript functions that are pre-seeded with the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.seed")," value. If you use them the template will be seeded correctly without any additional changes:"),(0,r.kt)("h4",{id:"random-1"},(0,r.kt)("inlineCode",{parentName:"h4"},"random()")),(0,r.kt)("p",null,"Replacement for ",(0,r.kt)("inlineCode",{parentName:"p"},"Math.random()")),(0,r.kt)("h4",{id:"rpg-dice-roller"},"RPG Dice Roller"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://dice-roller.github.io/documentation/"},"RPG Dice Roller")," is embedded in any generator template. You can access it via the global variable ",(0,r.kt)("inlineCode",{parentName:"p"},"rpgDiceRoller"),"."),(0,r.kt)("p",null,"If you just want to quickly roll a dice and get the numeric output use: ",(0,r.kt)("inlineCode",{parentName:"p"},"dice.roll('1d6+2').total")),(0,r.kt)("h4",{id:"nunjucks"},"Nunjucks"),(0,r.kt)("p",null,"The following Nunjucks filters are also seeded and should result in predictable output when using the same seed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Shuffled: {{ [1, 2, 3, 4, 5] | shuffle }}\nPick one by random: {{ [1, 2, 3, 4, 5] | random }}\n")))}c.isMDXComponent=!0}}]);