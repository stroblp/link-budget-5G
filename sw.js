if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let c={};const o=e=>s(e,t),l={module:{uri:t},exports:c,require:o};i[t]=Promise.all(n.map((e=>l[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-B01uIbtB.js",revision:null},{url:"assets/index-U6rSJGzz.css",revision:null},{url:"index.html",revision:"eea8382dac6aefbcc09496ebbc5bf95f"},{url:"registerSW.js",revision:"81c3067ca1c42492cf81dd05c4e6248a"},{url:"pwa-192x192.png",revision:"a04fc711bca67dd78794cf9f2f8c598a"},{url:"pwa-512x512.png",revision:"2df28ac7cb24678137265b2e2000b44f"},{url:"manifest.webmanifest",revision:"e4cb49bad70464a7d52111d2ae09823c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
