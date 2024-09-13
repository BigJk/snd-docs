"use strict";(self.webpackChunksnd_docs_ds=self.webpackChunksnd_docs_ds||[]).push([[220],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={},o="API Routes",l={unversionedId:"advanced/api",id:"advanced/api",title:"API Routes",description:"Although Sales & Dungeons runs as a local application it is split into a backend (handling the database, printing and more) and the UI (handling the visual interface). Backend and frontend communicate via HTTP requests like typical web applications. This has the nice side effect that other applications can also interact with the S&D. Some examples of what you could do:",source:"@site/docs/advanced/api.md",sourceDirName:"advanced",slug:"/advanced/api",permalink:"/docs/advanced/api",draft:!1,editUrl:"https://github.com/BigJk/snd-docs/docs/advanced/api.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Advanced",permalink:"/docs/advanced/"},next:{title:"Building",permalink:"/docs/advanced/building"}},c={},s=[{value:"Architecture",id:"architecture",level:2},{value:"Protocol",id:"protocol",level:2},{value:"Examples",id:"examples",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api-routes"},"API Routes"),(0,r.kt)("p",null,"Although Sales & Dungeons runs as a local application it is split into a backend (handling the database, printing and more) and the UI (handling the visual interface). Backend and frontend communicate via HTTP requests like typical web applications. This has the nice side effect that other applications can also interact with the S&D. Some examples of what you could do:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Remotely create, delete, edit templates, generators and data sources"),(0,r.kt)("li",{parentName:"ul"},"Write a script that imports data sources from different sources than provided in S&D"),(0,r.kt)("li",{parentName:"ul"},"Connect your application to the data from S&D"),(0,r.kt)("li",{parentName:"ul"},"Trigger printing"),(0,r.kt)("li",{parentName:"ul"},"Create your own UI")),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("center",null,(0,r.kt)("img",{src:"/img/snd_arch.png",style:{maxWidth:"700px",width:"100%",padding:"50px 0 50px 0"}})),(0,r.kt)("h2",{id:"protocol"},"Protocol"),(0,r.kt)("p",null,"Communication is done via HTTP POST requests only, because I'm using my own mini-rpc framework which makes it very simple to make go functions available to a frontend. It's called ",(0,r.kt)("inlineCode",{parentName:"p"},"nra"),", and you can find more about it ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/BigJk/nra"},"here"),". In essence:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All requests are POST"),(0,r.kt)("li",{parentName:"ul"},"The body of the request is a JSON encoded array of arguments (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},'["arg1", "arg2", 3, { "hello": "world" }]'),")"),(0,r.kt)("li",{parentName:"ul"},"All functions are present under ",(0,r.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:7123/api/FUNCTION_NAME")),(0,r.kt)("li",{parentName:"ul"},"You can get a basic overview about the available functions via ",(0,r.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:7123/api/functions"))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/BigJk/snd/blob/master/sdk/python/snd_sdk.py"},"S&D Python SDK"),": Example python sdk generated automatically")))}u.isMDXComponent=!0}}]);