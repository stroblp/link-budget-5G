if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>s(e,t),d={module:{uri:t},exports:o,require:c};i[t]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-B01uIbtB.js",revision:null},{url:"assets/index-U6rSJGzz.css",revision:null},{url:"index.html",revision:"7b662c82c6455949e4d0d1e436bf9483"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"pwa-192x192.png",revision:"a04fc711bca67dd78794cf9f2f8c598a"},{url:"pwa-512x512.png",revision:"2df28ac7cb24678137265b2e2000b44f"},{url:"manifest.webmanifest",revision:"e401cdf2805e61adb6ad9dbc1f192ec7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
