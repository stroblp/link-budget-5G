var Ol=Object.defineProperty;var Il=(t,o,n)=>o in t?Ol(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n;var Mt=(t,o,n)=>(Il(t,typeof o!="symbol"?o+"":o,n),n);(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))a(f);new MutationObserver(f=>{for(const d of f)if(d.type==="childList")for(const v of d.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&a(v)}).observe(document,{childList:!0,subtree:!0});function n(f){const d={};return f.integrity&&(d.integrity=f.integrity),f.referrerPolicy&&(d.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?d.credentials="include":f.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(f){if(f.ep)return;f.ep=!0;const d=n(f);fetch(f.href,d)}})();function Te(){}function Ll(t){return t()}function _l(){return Object.create(null)}function xe(t){t.forEach(Ll)}function Bl(t){return typeof t=="function"}function kl(t,o){return t!=t?o==o:t!==o||t&&typeof t=="object"||typeof t=="function"}let pt;function yl(t,o){return t===o?!0:(pt||(pt=document.createElement("a")),pt.href=o,t===pt.href)}function Fl(t){return Object.keys(t).length===0}function l(t,o){t.appendChild(o)}function Ml(t,o,n){t.insertBefore(o,n||null)}function K(t){t.parentNode&&t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function El(t){return document.createTextNode(t)}function r(){return El(" ")}function _(t,o,n,a){return t.addEventListener(o,n,a),()=>t.removeEventListener(o,n,a)}function e(t,o,n){n==null?t.removeAttribute(o):t.getAttribute(o)!==n&&t.setAttribute(o,n)}function c(t){return t===""?null:+t}function Gl(t){return Array.from(t.childNodes)}function Al(t,o){o=""+o,t.data!==o&&(t.data=o)}function u(t,o){t.value=o??""}let Qe;function Je(t){Qe=t}function Hl(){if(!Qe)throw new Error("Function called outside component initialization");return Qe}function Dl(t){Hl().$$.on_mount.push(t)}const Re=[],Cl=[];let je=[];const wl=[],Ul=Promise.resolve();let Nt=!1;function Wl(){Nt||(Nt=!0,Ul.then(Nl))}function St(t){je.push(t)}const Et=new Set;let Se=0;function Nl(){if(Se!==0)return;const t=Qe;do{try{for(;Se<Re.length;){const o=Re[Se];Se++,Je(o),ql(o.$$)}}catch(o){throw Re.length=0,Se=0,o}for(Je(null),Re.length=0,Se=0;Cl.length;)Cl.pop()();for(let o=0;o<je.length;o+=1){const n=je[o];Et.has(n)||(Et.add(n),n())}je.length=0}while(Re.length);for(;wl.length;)wl.pop()();Nt=!1,Et.clear(),Je(t)}function ql(t){if(t.fragment!==null){t.update(),xe(t.before_update);const o=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,o),t.after_update.forEach(St)}}function zl(t){const o=[],n=[];je.forEach(a=>t.indexOf(a)===-1?o.push(a):n.push(a)),n.forEach(a=>a()),je=o}const mt=new Set;let Yl;function Sl(t,o){t&&t.i&&(mt.delete(t),t.i(o))}function Kl(t,o,n,a){if(t&&t.o){if(mt.has(t))return;mt.add(t),Yl.c.push(()=>{mt.delete(t),a&&(n&&t.d(1),a())}),t.o(o)}else a&&a()}function Zl(t){t&&t.c()}function Rl(t,o,n){const{fragment:a,after_update:f}=t.$$;a&&a.m(o,n),St(()=>{const d=t.$$.on_mount.map(Ll).filter(Bl);t.$$.on_destroy?t.$$.on_destroy.push(...d):xe(d),t.$$.on_mount=[]}),f.forEach(St)}function jl(t,o){const n=t.$$;n.fragment!==null&&(zl(n.after_update),xe(n.on_destroy),n.fragment&&n.fragment.d(o),n.on_destroy=n.fragment=null,n.ctx=[])}function Vl(t,o){t.$$.dirty[0]===-1&&(Re.push(t),Wl(),t.$$.dirty.fill(0)),t.$$.dirty[o/31|0]|=1<<o%31}function Tl(t,o,n,a,f,d,v=null,h=[-1]){const b=Qe;Je(t);const p=t.$$={fragment:null,ctx:[],props:d,update:Te,not_equal:f,bound:_l(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(b?b.$$.context:[])),callbacks:_l(),dirty:h,skip_bound:!1,root:o.target||b.$$.root};v&&v(p.root);let y=!1;if(p.ctx=n?n(t,o.props||{},(m,C,...w)=>{const N=w.length?w[0]:C;return p.ctx&&f(p.ctx[m],p.ctx[m]=N)&&(!p.skip_bound&&p.bound[m]&&p.bound[m](N),y&&Vl(t,m)),C}):[],p.update(),y=!0,xe(p.before_update),p.fragment=a?a(p.ctx):!1,o.target){if(o.hydrate){const m=Gl(o.target);p.fragment&&p.fragment.l(m),m.forEach(K)}else p.fragment&&p.fragment.c();o.intro&&Sl(t.$$.fragment),Rl(t,o.target,o.anchor),Nl()}Je(b)}class Pl{constructor(){Mt(this,"$$");Mt(this,"$$set")}$destroy(){jl(this,1),this.$destroy=Te}$on(o,n){if(!Bl(n))return Te;const a=this.$$.callbacks[o]||(this.$$.callbacks[o]=[]);return a.push(n),()=>{const f=a.indexOf(n);f!==-1&&a.splice(f,1)}}$set(o){this.$$set&&!Fl(o)&&(this.$$.skip_bound=!0,this.$$set(o),this.$$.skip_bound=!1)}}const Xl="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Xl);function Jl(t){let o,n,a,f,d,v,h,b,p,y,m,C,w,N,Pe,B,ae,k,H,R,M,Z,E,j,ue,F,$e,V,ce,et,T,tt,X,fe,lt,G,nt,Oe,ot,P,st,de,rt,O,J,pe,it,A,at,L,S,he,D,Rt,be,Ie,jt,Q,Tt,Fe,Pt,me,ve,Ge,Ot,x,It,ge,Ae,Ft,U,Gt,ht,At,W,Ht,q,_e,He,Dt,$,Ut,ye,De,Wt,ee,qt,Ce,Ue,zt,te,Yt,bt,Kt,z,Zt,I,we,We,Vt,le,Xt,Le,qe,Jt,ne,Qt,Be,ze,xt,oe,$t,ke,Ye,el,Y,tl,vt,ll,gt,nl,_t,ol,yt,sl,Ct,rl,ut,il,wt,al,Me,Ke,ul,se,cl,Ee,Ze,fl,re,dl,Ne,Ve,pl,ie,ml,ct,hl,Xe,bl,ft,Lt,Bt,vl,dt,kt,gl;return{c(){o=s("div"),n=s("div"),a=s("h2"),a.textContent="5G Link Budget",f=r(),d=s("button"),d.textContent="Radio Configuration",v=r(),h=s("div"),b=s("div"),p=s("label"),p.textContent="Frequency Tx (MHz):",y=r(),m=s("input"),C=r(),w=s("div"),N=s("label"),N.textContent="RB count:",Pe=r(),B=s("input"),ae=r(),k=s("div"),H=s("label"),H.textContent="Noise Figure (dB):",R=r(),M=s("input"),Z=r(),E=s("div"),j=s("label"),j.textContent="Numerolgy:",ue=r(),F=s("input"),$e=r(),V=s("div"),ce=s("label"),ce.textContent="Subcarrie Spacing (kHz):",et=r(),T=s("input"),tt=r(),X=s("div"),fe=s("label"),fe.textContent="Receiver Sensitivity:",lt=r(),G=s("input"),nt=r(),Oe=s("div"),ot=r(),P=s("button"),P.textContent="NodeB",st=r(),de=s("h6"),de.textContent="Tx",rt=r(),O=s("div"),J=s("div"),pe=s("label"),pe.textContent="Tx Power (dBm):",it=r(),A=s("input"),at=r(),L=s("div"),S=s("label"),S.textContent="Tx Cable Loss (dB):",he=r(),D=s("input"),Rt=r(),be=s("div"),Ie=s("label"),Ie.textContent="Tx Gain (dB):",jt=r(),Q=s("input"),Tt=r(),Fe=s("h6"),Fe.textContent="Rx",Pt=r(),me=s("div"),ve=s("div"),Ge=s("label"),Ge.textContent="SINR (dB):",Ot=r(),x=s("input"),It=r(),ge=s("div"),Ae=s("label"),Ae.textContent="Receiver Sensitivity:",Ft=r(),U=s("input"),Gt=r(),ht=s("div"),At=r(),W=s("button"),W.textContent="Loss&Margins",Ht=r(),q=s("div"),_e=s("div"),He=s("label"),He.textContent="Interference Margin (dB):",Dt=r(),$=s("input"),Ut=r(),ye=s("div"),De=s("label"),De.textContent="Fading Margin (dB):",Wt=r(),ee=s("input"),qt=r(),Ce=s("div"),Ue=s("label"),Ue.textContent="Penetration Loss (dB):",zt=r(),te=s("input"),Yt=r(),bt=s("div"),Kt=r(),z=s("button"),z.textContent="UE",Zt=r(),I=s("div"),we=s("div"),We=s("label"),We.textContent="Rx Gain (dB):",Vt=r(),le=s("input"),Xt=r(),Le=s("div"),qe=s("label"),qe.textContent="Rx Cable Loss (dB):",Jt=r(),ne=s("input"),Qt=r(),Be=s("div"),ze=s("label"),ze.textContent="SINR (dB):",xt=r(),oe=s("input"),$t=r(),ke=s("div"),Ye=s("label"),Ye.textContent="Receiver Sensitivity:",el=r(),Y=s("input"),tl=r(),vt=s("div"),ll=r(),gt=s("div"),nl=r(),_t=s("div"),ol=r(),yt=s("div"),sl=r(),Ct=s("div"),rl=r(),ut=s("div"),ut.innerHTML="<h4>Results</h4>",il=r(),wt=s("div"),al=r(),Me=s("div"),Ke=s("label"),Ke.textContent="Cell Radius (m):",ul=r(),se=s("input"),cl=r(),Ee=s("div"),Ze=s("label"),Ze.textContent="Centre frequency Tx (MHz)",fl=r(),re=s("input"),dl=r(),Ne=s("div"),Ve=s("label"),Ve.textContent="Max Path Loss (dB):",pl=r(),ie=s("input"),ml=r(),ct=s("div"),ct.innerHTML="",hl=r(),Xe=s("button"),Xe.textContent="Calculate Link Budget",bl=r(),ft=s("div"),Lt=s("p"),Bt=El(t[17]),vl=r(),dt=s("div"),dt.innerHTML='<canvas id="pathLossChart"></canvas>',e(d,"class","btn btn-outline-secondary custom-height col-3 svelte-1oyukct"),e(d,"type","button"),e(d,"data-bs-toggle","collapse"),e(d,"data-bs-target","#channel"),e(d,"aria-expanded","false"),e(d,"aria-controls","collapseExample"),e(p,"for","centerFrequency"),e(p,"class","form-label"),e(m,"type","number"),e(m,"class","form-control"),e(b,"class","col-3"),e(N,"for","noRBs"),e(N,"class","form-label"),e(B,"type","number"),e(B,"class","form-control"),e(w,"class","col-3"),e(H,"for","noiseFigure"),e(H,"class","form-label"),e(M,"type","number"),e(M,"class","form-control"),e(k,"class","col-3"),e(j,"for","numerology"),e(j,"class","form-label"),e(F,"type","number"),e(F,"class","form-control"),e(E,"class","col-3"),e(ce,"for","subCarrierSpacing"),e(ce,"class","form-label"),e(T,"type","number"),e(T,"class","form-control"),T.disabled=!0,e(V,"class","col-3"),e(fe,"for","transmitterGain"),e(fe,"class","form-label"),e(G,"type","number"),e(G,"class","form-control"),e(X,"class","col-3"),e(h,"class","row collapse"),e(h,"id","channel"),e(Oe,"class","w-100 mb-3"),e(P,"class","btn btn-outline-secondary custom-height col-3 svelte-1oyukct"),e(P,"type","button"),e(P,"data-bs-toggle","collapse"),e(P,"data-bs-target","#nodeB"),e(P,"aria-expanded","false"),e(P,"aria-controls","collapseExample"),e(de,"class","collapse"),e(de,"id","nodeB"),e(pe,"for","transmitPower"),e(pe,"class","form-label"),e(A,"type","number"),e(A,"class","form-control"),e(J,"class","col-3"),e(S,"for","transmitCableLoss"),e(S,"class","form-label"),e(D,"type","number"),e(D,"class","form-control"),e(L,"class","col-3"),e(Ie,"for","transmitterGain"),e(Ie,"class","form-label"),e(Q,"type","number"),e(Q,"class","form-control"),e(be,"class","col-3"),e(O,"class","row collapse"),e(O,"id","nodeB"),e(Fe,"class","collapse"),e(Fe,"id","nodeB"),e(Ge,"for","sinrNodeB"),e(Ge,"class","form-label"),e(x,"type","number"),e(x,"class","form-control"),e(ve,"class","col-3"),e(Ae,"for","rxSensitivityNodeB"),e(Ae,"class","form-label"),e(U,"type","number"),e(U,"class","form-control"),U.disabled=!0,e(ge,"class","col-3"),e(me,"class","row collapse"),e(me,"id","nodeB"),e(ht,"class","w-100 mb-3"),e(W,"class","btn btn-outline-secondary custom-height col-3 svelte-1oyukct"),e(W,"type","button"),e(W,"data-bs-toggle","collapse"),e(W,"data-bs-target","#losses"),e(W,"aria-expanded","false"),e(W,"aria-controls","collapseExample"),e(He,"for","interferenceMargin"),e(He,"class","form-label"),e($,"type","number"),e($,"class","form-control"),e(_e,"class","col-3"),e(De,"for","fadingMargin"),e(De,"class","form-label"),e(ee,"type","number"),e(ee,"class","form-control"),e(ye,"class","col-3"),e(Ue,"for","penetrationLoss"),e(Ue,"class","form-label"),e(te,"type","number"),e(te,"class","form-control"),e(Ce,"class","col-3"),e(q,"class","row collapse"),e(q,"id","losses"),e(bt,"class","w-100 mb-3"),e(z,"class","btn btn-outline-secondary custom-height col-3 svelte-1oyukct"),e(z,"type","button"),e(z,"data-bs-toggle","collapse"),e(z,"data-bs-target","#ueconf"),e(z,"aria-expanded","false"),e(z,"aria-controls","collapseExample"),e(We,"for","receiverGain"),e(We,"class","form-label"),e(le,"type","number"),e(le,"class","form-control"),e(we,"class","col-3"),e(qe,"for","receiveCableLoss"),e(qe,"class","form-label"),e(ne,"type","number"),e(ne,"class","form-control"),e(Le,"class","col-3"),e(ze,"for","sinrUE"),e(ze,"class","form-label"),e(oe,"type","number"),e(oe,"class","form-control"),e(Be,"class","col-3"),e(Ye,"for","rxSensitivityUE"),e(Ye,"class","form-label"),e(Y,"type","number"),e(Y,"class","form-control"),Y.disabled=!0,e(ke,"class","col-3"),e(I,"class","row collapse"),e(I,"id","ueconf"),e(vt,"class","w-100 mb-3"),e(gt,"class","w-100 mb-3"),e(_t,"class","col"),e(yt,"class","col"),e(Ct,"class","w-100 mb-3"),e(ut,"class","col-3"),e(wt,"class","w-100 mb-3"),e(Ke,"for","cellradius"),e(Ke,"class","form-label"),e(se,"type","number"),e(se,"class","form-control"),e(Me,"class","col-3"),e(Ze,"for","cftx"),e(Ze,"class","form-label"),e(re,"type","number"),e(re,"class","form-control"),e(Ee,"class","col-3"),e(Ve,"for","pathLoss"),e(Ve,"class","form-label"),e(ie,"type","number"),e(ie,"class","form-control"),e(Ne,"class","col-3"),e(n,"class","row"),e(ct,"class","row"),e(Xe,"class","btn btn-primary mt-3"),e(ft,"class","result svelte-1oyukct"),e(dt,"class","chart-container svelte-1oyukct"),e(o,"class","container")},m(i,g){Ml(i,o,g),l(o,n),l(n,a),l(n,f),l(n,d),l(n,v),l(n,h),l(h,b),l(b,p),l(b,y),l(b,m),u(m,t[9]),l(h,C),l(h,w),l(w,N),l(w,Pe),l(w,B),u(B,t[19]),l(h,ae),l(h,k),l(k,H),l(k,R),l(k,M),u(M,t[13]),l(h,Z),l(h,E),l(E,j),l(E,ue),l(E,F),u(F,t[14]),l(h,$e),l(h,V),l(V,ce),l(V,et),l(V,T),u(T,t[20]),l(h,tt),l(h,X),l(X,fe),l(X,lt),l(X,G),u(G,t[10]),l(n,nt),l(n,Oe),l(n,ot),l(n,P),l(n,st),l(n,de),l(n,rt),l(n,O),l(O,J),l(J,pe),l(J,it),l(J,A),u(A,t[0]),l(O,at),l(O,L),l(L,S),l(L,he),l(L,D),u(D,t[1]),l(O,Rt),l(O,be),l(be,Ie),l(be,jt),l(be,Q),u(Q,t[2]),l(n,Tt),l(n,Fe),l(n,Pt),l(n,me),l(me,ve),l(ve,Ge),l(ve,Ot),l(ve,x),u(x,t[11]),l(me,It),l(me,ge),l(ge,Ae),l(ge,Ft),l(ge,U),u(U,t[15]),l(n,Gt),l(n,ht),l(n,At),l(n,W),l(n,Ht),l(n,q),l(q,_e),l(_e,He),l(_e,Dt),l(_e,$),u($,t[4]),l(q,Ut),l(q,ye),l(ye,De),l(ye,Wt),l(ye,ee),u(ee,t[5]),l(q,qt),l(q,Ce),l(Ce,Ue),l(Ce,zt),l(Ce,te),u(te,t[6]),l(n,Yt),l(n,bt),l(n,Kt),l(n,z),l(n,Zt),l(n,I),l(I,we),l(we,We),l(we,Vt),l(we,le),u(le,t[7]),l(I,Xt),l(I,Le),l(Le,qe),l(Le,Jt),l(Le,ne),u(ne,t[8]),l(I,Qt),l(I,Be),l(Be,ze),l(Be,xt),l(Be,oe),u(oe,t[12]),l(I,$t),l(I,ke),l(ke,Ye),l(ke,el),l(ke,Y),u(Y,t[16]),l(n,tl),l(n,vt),l(n,ll),l(n,gt),l(n,nl),l(n,_t),l(n,ol),l(n,yt),l(n,sl),l(n,Ct),l(n,rl),l(n,ut),l(n,il),l(n,wt),l(n,al),l(n,Me),l(Me,Ke),l(Me,ul),l(Me,se),u(se,t[18]),l(n,cl),l(n,Ee),l(Ee,Ze),l(Ee,fl),l(Ee,re),u(re,t[9]),l(n,dl),l(n,Ne),l(Ne,Ve),l(Ne,pl),l(Ne,ie),u(ie,t[3]),l(o,ml),l(o,ct),l(o,hl),l(o,Xe),l(o,bl),l(o,ft),l(ft,Lt),l(Lt,Bt),l(o,vl),l(o,dt),kt||(gl=[_(m,"input",t[22]),_(B,"input",t[23]),_(M,"input",t[24]),_(F,"input",t[25]),_(T,"input",t[26]),_(G,"input",t[27]),_(A,"input",t[28]),_(D,"input",t[29]),_(Q,"input",t[30]),_(x,"input",t[31]),_(U,"input",t[32]),_($,"input",t[33]),_(ee,"input",t[34]),_(te,"input",t[35]),_(le,"input",t[36]),_(ne,"input",t[37]),_(oe,"input",t[38]),_(Y,"input",t[39]),_(se,"input",t[40]),_(re,"input",t[41]),_(ie,"input",t[42]),_(Xe,"click",t[21])],kt=!0)},p(i,g){g[0]&512&&c(m.value)!==i[9]&&u(m,i[9]),g[0]&524288&&c(B.value)!==i[19]&&u(B,i[19]),g[0]&8192&&c(M.value)!==i[13]&&u(M,i[13]),g[0]&16384&&c(F.value)!==i[14]&&u(F,i[14]),g[0]&1048576&&c(T.value)!==i[20]&&u(T,i[20]),g[0]&1024&&c(G.value)!==i[10]&&u(G,i[10]),g[0]&1&&c(A.value)!==i[0]&&u(A,i[0]),g[0]&2&&c(D.value)!==i[1]&&u(D,i[1]),g[0]&4&&c(Q.value)!==i[2]&&u(Q,i[2]),g[0]&2048&&c(x.value)!==i[11]&&u(x,i[11]),g[0]&32768&&c(U.value)!==i[15]&&u(U,i[15]),g[0]&16&&c($.value)!==i[4]&&u($,i[4]),g[0]&32&&c(ee.value)!==i[5]&&u(ee,i[5]),g[0]&64&&c(te.value)!==i[6]&&u(te,i[6]),g[0]&128&&c(le.value)!==i[7]&&u(le,i[7]),g[0]&256&&c(ne.value)!==i[8]&&u(ne,i[8]),g[0]&4096&&c(oe.value)!==i[12]&&u(oe,i[12]),g[0]&65536&&c(Y.value)!==i[16]&&u(Y,i[16]),g[0]&262144&&c(se.value)!==i[18]&&u(se,i[18]),g[0]&512&&c(re.value)!==i[9]&&u(re,i[9]),g[0]&8&&c(ie.value)!==i[3]&&u(ie,i[3]),g[0]&131072&&Al(Bt,i[17])},i:Te,o:Te,d(i){i&&K(o),kt=!1,xe(gl)}}}function Ql(t,o){return Math.round(t*Math.pow(10,o))/Math.pow(10,o)}function xl(t,o,n){let a=20,f=2,d=15,v=100,h=10,b=6,p=15,y=10,m=2,C=-100,w=-100,N=-100,Pe="",B=null,ae=500,k=3600,H=1,R=0,M=4,Z=10,E=-6,j=0,ue=0;function F(L,S,he){return Math.pow(10,(L-13.54-20*Math.log10(S/1e3)+.6*(he-1.5))/39.08)}const $e=()=>{const L=a+d+y-v-f-m-p+b-h-C;if(n(17,Pe=`Calculated Link Budget: ${L.toFixed(2)} dBm`),!B){const S=document.getElementById("pathLossChart").getContext("2d");B=new Chart(S,{type:"bar",data:{labels:[],datasets:[{label:"Link Budget Components (dBm)",data:[],backgroundColor:["rgba(54, 162, 235, 0.2)"],borderColor:["rgba(54, 162, 235, 1)"],borderWidth:1}]},options:{scales:{y:{beginAtZero:!0}}}})}V([{name:"Transmit Power",value:a},{name:"Transmit Cable Loss",value:-f},{name:"Transmitter Gain",value:d},{name:"Path Loss",value:-v},{name:"Fading Margin",value:b},{name:"Interference Margin",value:-h},{name:"Penetration Loss",value:-p},{name:"Receiver Gain",value:y},{name:"Receive Cable Loss",value:-m}])};Dl(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js").then(L=>console.log("Service Worker registered",L)).catch(L=>console.log("Service Worker registration failed:",L))});function V(L){B.data.labels=L.map(S=>S.name),B.data.datasets.forEach(S=>{S.data=L.map(he=>he.value)}),B.update()}function ce(){k=c(this.value),n(9,k)}function et(){H=c(this.value),n(19,H)}function T(){E=c(this.value),n(13,E)}function tt(){j=c(this.value),n(14,j)}function X(){ue=c(this.value),n(20,ue),n(14,j)}function fe(){R=c(this.value),n(10,R)}function lt(){a=c(this.value),n(0,a)}function G(){f=c(this.value),n(1,f)}function nt(){d=c(this.value),n(2,d)}function Oe(){M=c(this.value),n(11,M)}function ot(){w=c(this.value),n(15,w),n(10,R),n(11,M),n(13,E)}function P(){h=c(this.value),n(4,h)}function st(){b=c(this.value),n(5,b)}function de(){p=c(this.value),n(6,p)}function rt(){y=c(this.value),n(7,y)}function O(){m=c(this.value),n(8,m)}function J(){Z=c(this.value),n(12,Z)}function pe(){N=c(this.value),n(16,N),n(10,R),n(12,Z),n(13,E)}function it(){ae=c(this.value),n(18,ae),n(3,v),n(9,k),n(0,a),n(1,f),n(2,d),n(4,h),n(5,b),n(6,p),n(7,y),n(8,m),n(44,C)}function A(){k=c(this.value),n(9,k)}function at(){v=c(this.value),n(3,v),n(0,a),n(1,f),n(2,d),n(4,h),n(5,b),n(6,p),n(7,y),n(8,m),n(44,C)}return t.$$.update=()=>{t.$$.dirty[0]&16384&&n(20,ue=15*Math.pow(2,j)),t.$$.dirty[0]&503&&n(3,v=a-f+d-h-b-p+y-m-C),t.$$.dirty[0]&520&&n(18,ae=F(v,k,1.5)),t.$$.dirty[0]&11264&&n(15,w=R+M+E),t.$$.dirty[0]&13312&&n(16,N=R+Z+E)},n(10,R=Ql(-174+10*Math.log10(36e4),3)),[a,f,d,v,h,b,p,y,m,k,R,M,Z,E,j,w,N,Pe,ae,H,ue,$e,ce,et,T,tt,X,fe,lt,G,nt,Oe,ot,P,st,de,rt,O,J,pe,it,A,at]}class $l extends Pl{constructor(o){super(),Tl(this,o,xl,Jl,kl,{},null,[-1,-1])}}function en(t){let o,n,a,f,d,v,h,b,p,y,m;return y=new $l({}),{c(){o=s("script"),o.innerHTML="",a=s("link"),f=s("link"),d=s("link"),v=s("script"),v.innerHTML="",b=s("link"),p=r(),Zl(y.$$.fragment),document.title="Link Budget App",yl(o.src,n="https://cdn.jsdelivr.net/npm/chart.js")||e(o,"src",n),e(a,"rel","stylesheet"),e(a,"href","https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"),e(f,"rel","stylesheet"),e(f,"href","https://fonts.googleapis.com/css?family=Roboto+Mono"),e(d,"rel","stylesheet"),e(d,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"),yl(v.src,h="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")||e(v,"src",h),e(v,"integrity","sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"),e(v,"crossorigin","anonymous"),e(b,"href","https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"),e(b,"rel","stylesheet"),e(b,"integrity","sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"),e(b,"crossorigin","anonymous")},m(C,w){l(document.head,o),l(document.head,a),l(document.head,f),l(document.head,d),l(document.head,v),l(document.head,b),Ml(C,p,w),Rl(y,C,w),m=!0},p:Te,i(C){m||(Sl(y.$$.fragment,C),m=!0)},o(C){Kl(y.$$.fragment,C),m=!1},d(C){C&&K(p),K(o),K(a),K(f),K(d),K(v),K(b),jl(y,C)}}}class tn extends Pl{constructor(o){super(),Tl(this,o,null,en,kl,{})}}new tn({target:document.getElementById("app")});