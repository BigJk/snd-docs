"use strict";(self.webpackChunksnd_docs_ds=self.webpackChunksnd_docs_ds||[]).push([[836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),g=i,h=u["".concat(p,".").concat(g)]||u[g]||c[g]||o;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:4},a="FAQ",s={unversionedId:"faq",id:"faq",title:"FAQ",description:"My printer isn't printing the full paper width, what to do?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,editUrl:"https://github.com/BigJk/snd-docs/blob/main/docs/faq.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Tested Printers",permalink:"/docs/printer/models"},next:{title:"Data Sources",permalink:"/docs/data-source/"}},p={},l=[{value:"My printer isn&#39;t printing the full paper width, what to do?",id:"my-printer-isnt-printing-the-full-paper-width-what-to-do",level:2},{value:"My printer is randomly stopping half way through printing, what to do?",id:"my-printer-is-randomly-stopping-half-way-through-printing-what-to-do",level:2},{value:"Windows: Multiple Devices",id:"windows-multiple-devices",level:3},{value:"My printer is only printing gibberish characters, what to do?",id:"my-printer-is-only-printing-gibberish-characters-what-to-do",level:2},{value:"I&#39;m getting a Trojan warning on Windows, what&#39;s going on?",id:"im-getting-a-trojan-warning-on-windows-whats-going-on",level:2},{value:"I&#39;m getting &#39;RAW USB Printing&#39; errors, what to do?",id:"im-getting-raw-usb-printing-errors-what-to-do",level:2},{value:"Getting strange libusb errors, what to do?",id:"getting-strange-libusb-errors-what-to-do",level:2},{value:"Mac App: It&#39;s not opening because it&#39;s from a unverified developer",id:"mac-app-its-not-opening-because-its-from-a-unverified-developer",level:2},{value:"Mac App: It&#39;s not opening because the app &quot;is damaged&quot;",id:"mac-app-its-not-opening-because-the-app-is-damaged",level:2}],d={toc:l},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"faq"},"FAQ"),(0,i.kt)("h2",{id:"my-printer-isnt-printing-the-full-paper-width-what-to-do"},"My printer isn't printing the full paper width, what to do?"),(0,i.kt)("p",null,"The default printing width in S&D is set for 58mm printers. Just go to the settings and increase the printer width. See ",(0,i.kt)("a",{parentName:"p",href:"./printer/models"},"Tested Printer")," for common values. Rule of thumb is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"58mm: 384"),(0,i.kt)("li",{parentName:"ul"},"80mm: 504 - 576")),(0,i.kt)("h2",{id:"my-printer-is-randomly-stopping-half-way-through-printing-what-to-do"},"My printer is randomly stopping half way through printing, what to do?"),(0,i.kt)("p",null,"Try enabling ",(0,i.kt)("strong",{parentName:"p"},"Explicit Initialization")," and / or ",(0,i.kt)("strong",{parentName:"p"},"Force Standard Mode")," in the settings and ",(0,i.kt)("strong",{parentName:"p"},"unplugging")," (not just using the on/off switch) your printer for a few seconds until all LEDs are out between changing the settings."),(0,i.kt)("h3",{id:"windows-multiple-devices"},"Windows: Multiple Devices"),(0,i.kt)("p",null,"It was reported that in some cases a printer might be registered twice in the Device Manager. Removing the device should fix problems."),(0,i.kt)("h2",{id:"my-printer-is-only-printing-gibberish-characters-what-to-do"},"My printer is only printing gibberish characters, what to do?"),(0,i.kt)("p",null,"Try enabling image chunking in the settings with a value of 200 or 100. If that doesn't fix it try the steps in the question before."),(0,i.kt)("h2",{id:"im-getting-a-trojan-warning-on-windows-whats-going-on"},"I'm getting a Trojan warning on Windows, what's going on?"),(0,i.kt)("p",null,"This is a false positive triggered by a library that S&D uses. In newer versions of S&D the related component was disabled and trojan warnings should not occur anymore."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"More info: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/BigJk/snd/issues/28"},"https://github.com/BigJk/snd/issues/28"))),(0,i.kt)("h2",{id:"im-getting-raw-usb-printing-errors-what-to-do"},"I'm getting 'RAW USB Printing' errors, what to do?"),(0,i.kt)("p",null,"If you get errors like ",(0,i.kt)("inlineCode",{parentName:"p"},"Error: printer wasn't able to print: libusb: bad access [code -3]")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Error: printer wasn't able to print: not supported [code -12]")," this can be related to other drivers interfering or S&D not having enough privilege's. You can try:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Running S&D as Admin (Windows) or ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo")," (Mac, Linux)"),(0,i.kt)("li",{parentName:"ul"},"Switching the USB port and re-selecting it on the Device page"),(0,i.kt)("li",{parentName:"ul"},"Try using Direct Printing (Windows) or CUPS (Mac, Linux)")),(0,i.kt)("h2",{id:"getting-strange-libusb-errors-what-to-do"},"Getting strange libusb errors, what to do?"),(0,i.kt)("p",null,"If you get errors like ",(0,i.kt)("inlineCode",{parentName:"p"},"handle_events: error: libusb: interrupted [code -10]")," and don't need 'Raw USB Printing' try downloading the ",(0,i.kt)("inlineCode",{parentName:"p"},"gui")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"gui-usb")," version of S&D."),(0,i.kt)("h2",{id:"mac-app-its-not-opening-because-its-from-a-unverified-developer"},"Mac App: It's not opening because it's from a unverified developer"),(0,i.kt)("p",null,'If your mac is telling you that this app is from a unverified developer you can allow it via the "Privacy & Security" settings. More info: ',(0,i.kt)("a",{parentName:"p",href:"https://support.apple.com/lv-lv/guide/mac-help/mh40616/mac"},"Open a Mac app from an unidentified developer")),(0,i.kt)("h2",{id:"mac-app-its-not-opening-because-the-app-is-damaged"},'Mac App: It\'s not opening because the app "is damaged"'),(0,i.kt)("p",null,"On M1, M2, etc. it can happen that the app is reported as damaged. Just copy Sales & Dungeons into your Applications folder and execute the following command to allow it to run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'xattr -d com.apple.quarantine "/Applications/Sales & Dungeons.app/"\n')))}c.isMDXComponent=!0}}]);