if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let c={};const o=e=>s(e,t),d={module:{uri:t},exports:c,require:o};i[t]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Bkvm_Xp2.js",revision:null},{url:"assets/index-Bs3T3l0-.css",revision:null},{url:"index.html",revision:"fb511d4e8a1d1f0d286f4c1ffedd943c"},{url:"registerSW.js",revision:"81c3067ca1c42492cf81dd05c4e6248a"},{url:"pwa-192x192.png",revision:"c4bcf67a56c4f86fe241b0785cc07d47"},{url:"pwa-512x512.png",revision:"60cd82ac7adf05d6f59e12db6ce51187"},{url:"manifest.webmanifest",revision:"e482db92ea0b376b600b2c2b587c35a7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
