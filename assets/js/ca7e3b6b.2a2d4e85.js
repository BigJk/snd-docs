"use strict";(self.webpackChunksnd_docs_ds=self.webpackChunksnd_docs_ds||[]).push([[921],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},l="AI Features",i={unversionedId:"templating/ai",id:"templating/ai",title:"AI Features",description:"You can use LLM to aid in generating content for your templates. Currently supported providers:",source:"@site/docs/templating/ai.md",sourceDirName:"templating",slug:"/templating/ai",permalink:"/docs/templating/ai",draft:!1,editUrl:"https://github.com/BigJk/snd-docs/docs/templating/ai.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Template",permalink:"/docs/templating/template"},next:{title:"Generator",permalink:"/docs/templating/generator"}},p={},s=[{value:"Setup",id:"setup",level:2},{value:"Local Model",id:"local-model",level:3},{value:"Context Window and Max Tokens",id:"context-window-and-max-tokens",level:3},{value:"Template Features",id:"template-features",level:2},{value:"Nunjucks Template Features",id:"nunjucks-template-features",level:2},{value:"AI from Javascript",id:"ai-from-javascript",level:2}],u={toc:s},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ai-features"},"AI Features"),(0,r.kt)("p",null,"You can use LLM to aid in generating content for your templates. Currently supported providers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://openai.com/"},"OpenAI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://openrouter.ai/"},"OpenRouter"),": Gives you access to nearly all of the latest models"),(0,r.kt)("li",{parentName:"ul"},"Local/Custom Model: You can also use a local model that is running on your or another machine")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"To use the AI features you need to provide an API key. Open the settings of S&D and scroll down to the AI section."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enable it"),(0,r.kt)("li",{parentName:"ul"},"Put in the key into ",(0,r.kt)("inlineCode",{parentName:"li"},"API Key")),(0,r.kt)("li",{parentName:"ul"},"Select the ",(0,r.kt)("inlineCode",{parentName:"li"},"Provider")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Model"))),(0,r.kt)("h3",{id:"local-model"},"Local Model"),(0,r.kt)("p",null,"If you are using a local model, for example via ",(0,r.kt)("a",{parentName:"p",href:"https://lmstudio.ai/"},"LMStudio")," you want to select ",(0,r.kt)("inlineCode",{parentName:"p"},"Custom (e.g. Local)")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider"),".\nYou can then put in the URL of the model as ",(0,r.kt)("inlineCode",{parentName:"p"},"Custom URL")," and provide a optional ",(0,r.kt)("inlineCode",{parentName:"p"},"Custom Model")," in case the custom url provides multiple models.\nIn general all endpoints that support the OpenAI API specs should work, which is most of them."),(0,r.kt)("h3",{id:"context-window-and-max-tokens"},"Context Window and Max Tokens"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Context Window"),": Defines how much token are allowed to be used to give the model context. The more context the better the model can generate content as he gets more example to work with."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Max Tokens"),": Defines how many tokens the model should generate at max. If this is too low the model might not be able to finish the data.")),(0,r.kt)("h2",{id:"template-features"},"Template Features"),(0,r.kt)("p",null,"If you open a Template you can open the ",(0,r.kt)("inlineCode",{parentName:"p"},"AI Tools")," tab in the sidebar. Here you can generate content for your template."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AI Entry"),": This will generate a new entry based on the prompt. Example for a ttrpg monster template: ",(0,r.kt)("inlineCode",{parentName:"li"},"generate a new entry about a rogue cash register.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AI Translation"),": This will try translating the current selected entry to another language.")),(0,r.kt)("h2",{id:"nunjucks-template-features"},"Nunjucks Template Features"),(0,r.kt)("p",null,"You can also prompt the AI in the Nunjucks templates."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{% ai %}\n  you are a expert in ...\n{% user %}\n  some question\n{% endai %}\n")),(0,r.kt)("h2",{id:"ai-from-javascript"},"AI from Javascript"),(0,r.kt)("p",null,"In your templates the globally available ",(0,r.kt)("inlineCode",{parentName:"p"},"aiPrompt")," function can also be used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const res = aiPrompt("you are a expert in ...", "some question");\n')))}c.isMDXComponent=!0}}]);