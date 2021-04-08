import{S as e,i as t,s as r,e as s,t as a,a as l,c as i,b as n,d as o,f as c,g as h,h as f,j as d,k as u,l as m,m as p,n as v,o as g,p as E,q as w,r as D,u as F,v as I,w as M,x as b,y as $,z as y,H as T,A as V,B as A}from"./client.469e557b.js";import{l as k,d as H,f as j,a as q,P as L}from"./PictoAge.a0fd25e8.js";import"./dayjs_custom_locale_fr.b3d72994.js";import{M as P}from"./MainTitle.15719b28.js";var U=function(e){e.preventDefault();const t=e.currentTarget,r=new URL(t.href).hash.replace("#",""),s=document.getElementById(r);window.scrollTo({top:s.offsetTop,behavior:"smooth"}),history.pushState({top:s.offsetTop},null,"#"+r)};const{window:x}=y;function C(e,t,r){const s=e.slice();return s[6]=t[r],s}function S(e,t,r){const s=e.slice();return s[3]=t[r],s}function B(e,t,r){const s=e.slice();return s[1]=t[r],s}function N(e,t,r){const s=e.slice();return s[3]=t[r],s}function R(e){let t,r,g,E,w,D,F,I=e[3].name+"";return{c(){t=s("a"),r=s("span"),g=a(I),E=l(),this.h()},l(e){t=i(e,"A",{href:!0});var s=n(t);r=i(s,"SPAN",{});var a=n(r);g=o(a,I),a.forEach(c),E=h(s),s.forEach(c),this.h()},h(){f(t,"href",w="#"+e[3].slug),d(t,"archived",e[3].isArchived),d(t,"glow",e[3].name===e[1][0].collection)},m(e,s){u(e,t,s),m(t,r),m(r,g),m(t,E),D||(F=p(t,"click",U),D=!0)},p(e,r){1&r&&I!==(I=e[3].name+"")&&v(g,I),1&r&&w!==(w="#"+e[3].slug)&&f(t,"href",w),1&r&&d(t,"archived",e[3].isArchived),3&r&&d(t,"glow",e[3].name===e[1][0].collection)},d(e){e&&c(t),D=!1,F()}}}function z(e){let t,r,d,p,E,w,D,F=1===e[1].length?"Le film":"Les films",I=H(e[1][0].datePublished).format("dddd D MMMM")+"",M=e[1],b=[];for(let t=0;t<M.length;t+=1)b[t]=_(B(e,M,t));return{c(){t=s("div"),r=s("div"),d=s("h2"),p=a(F),E=a("\r\n            du\r\n            "),w=a(I),D=l();for(let e=0;e<b.length;e+=1)b[e].c();this.h()},l(e){t=i(e,"DIV",{class:!0});var s=n(t);r=i(s,"DIV",{class:!0});var a=n(r);d=i(a,"H2",{});var l=n(d);p=o(l,F),E=o(l,"\r\n            du\r\n            "),w=o(l,I),l.forEach(c),a.forEach(c),D=h(s);for(let e=0;e<b.length;e+=1)b[e].l(s);s.forEach(c),this.h()},h(){f(r,"class","pick-label"),f(t,"class","pick-container")},m(e,s){u(e,t,s),m(t,r),m(r,d),m(d,p),m(d,E),m(d,w),m(t,D);for(let e=0;e<b.length;e+=1)b[e].m(t,null)},p(e,r){if(2&r&&F!==(F=1===e[1].length?"Le film":"Les films")&&v(p,F),2&r&&I!==(I=H(e[1][0].datePublished).format("dddd D MMMM")+"")&&v(w,I),2&r){let s;for(M=e[1],s=0;s<M.length;s+=1){const a=B(e,M,s);b[s]?b[s].p(a,r):(b[s]=_(a),b[s].c(),b[s].m(t,null))}for(;s<b.length;s+=1)b[s].d(1);b.length=M.length}},d(e){e&&c(t),g(b,e)}}}function _(e){let t,r,d,p,g,E,w,D,F,I,M,b,$,y,V,A,H,L,P,U,x,C,S,B,N,R,z,_,G,J,O,K,Q,W=j(e[1].artFr,e[1].titreFr)+"",X=q("<div class='sous-titre-fr'>","</div>",e[1].sousTitreFr)+"",Y=e[1].duree+"",Z=e[1].realisateurs+"",ee=e[1].annee+"",te=q("<div>","</div>",e[1].adaptation)+"",re=q("<div>Avec ",".</div>",e[1].interpretation)+"",se=q("<div>","</div>",e[1].shortSynopsis||e[1].synopsis)+"";return{c(){t=s("div"),r=s("div"),d=s("a"),p=s("img"),w=l(),D=s("div"),F=s("div"),M=l(),$=l(),y=s("div"),V=a(Y),H=l(),L=s("div"),P=s("div"),U=a(Z),x=a(", "),C=a(ee),S=l(),N=l(),z=l(),G=l(),J=s("a"),O=a("Voir le film"),Q=l(),this.h()},l(e){t=i(e,"DIV",{class:!0});var s=n(t);r=i(s,"DIV",{class:!0});var a=n(r);d=i(a,"A",{rel:!0,href:!0,class:!0});var l=n(d);p=i(l,"IMG",{src:!0,alt:!0}),w=h(l),D=i(l,"DIV",{class:!0});var f=n(D);F=i(f,"DIV",{});var u=n(F);M=h(u),u.forEach(c),f.forEach(c),$=h(l),y=i(l,"DIV",{class:!0});var m=n(y);V=o(m,Y),m.forEach(c),l.forEach(c),a.forEach(c),H=h(s),L=i(s,"DIV",{class:!0});var v=n(L);P=i(v,"DIV",{});var g=n(P);U=o(g,Z),x=o(g,", "),C=o(g,ee),g.forEach(c),S=h(v),N=h(v),z=h(v),G=h(v),J=i(v,"A",{class:!0,rel:!0,href:!0});var E=n(J);O=o(E,"Voir le film"),E.forEach(c),v.forEach(c),Q=h(s),s.forEach(c),this.h()},h(){p.src!==(g=k.isUndefined(e[1].thumb)?`https://www.cinematheque.fr/catalogues/restaurations-tirages-images/images/film/533x400/${e[1].pk}-1.jpg`:""+e[1].thumb)&&f(p,"src",g),f(p,"alt",E=j(e[1].artFr,e[1].titreFr)),I=new T(M),b=new T(null),f(D,"class","pick-title-container"),f(y,"class","duree"),f(d,"rel","prefetch"),f(d,"href",A="film/"+e[1].slug+"/"),f(d,"class","pick-img"),f(r,"class","pick-img-container"),B=new T(N),R=new T(z),_=new T(G),f(J,"class","more"),f(J,"rel","prefetch"),f(J,"href",K="film/"+e[1].slug+"/"),f(L,"class","pick-film-info"),f(t,"class","pick")},m(e,s){u(e,t,s),m(t,r),m(r,d),m(d,p),m(d,w),m(d,D),m(D,F),I.m(W,F),m(F,M),b.m(X,F),m(d,$),m(d,y),m(y,V),m(t,H),m(t,L),m(L,P),m(P,U),m(P,x),m(P,C),m(L,S),B.m(te,L),m(L,N),R.m(re,L),m(L,z),_.m(se,L),m(L,G),m(L,J),m(J,O),m(t,Q)},p(e,t){2&t&&p.src!==(g=k.isUndefined(e[1].thumb)?`https://www.cinematheque.fr/catalogues/restaurations-tirages-images/images/film/533x400/${e[1].pk}-1.jpg`:""+e[1].thumb)&&f(p,"src",g),2&t&&E!==(E=j(e[1].artFr,e[1].titreFr))&&f(p,"alt",E),2&t&&W!==(W=j(e[1].artFr,e[1].titreFr)+"")&&I.p(W),2&t&&X!==(X=q("<div class='sous-titre-fr'>","</div>",e[1].sousTitreFr)+"")&&b.p(X),2&t&&Y!==(Y=e[1].duree+"")&&v(V,Y),2&t&&A!==(A="film/"+e[1].slug+"/")&&f(d,"href",A),2&t&&Z!==(Z=e[1].realisateurs+"")&&v(U,Z),2&t&&ee!==(ee=e[1].annee+"")&&v(C,ee),2&t&&te!==(te=q("<div>","</div>",e[1].adaptation)+"")&&B.p(te),2&t&&re!==(re=q("<div>Avec ",".</div>",e[1].interpretation)+"")&&R.p(re),2&t&&se!==(se=q("<div>","</div>",e[1].shortSynopsis||e[1].synopsis)+"")&&_.p(se),2&t&&K!==(K="film/"+e[1].slug+"/")&&f(J,"href",K)},d(e){e&&c(t)}}}function G(e){let t,r=e[3].header.stub+"";return{c(){t=s("div"),this.h()},l(e){t=i(e,"DIV",{class:!0}),n(t).forEach(c),this.h()},h(){f(t,"class","stub"),d(t,"archived",e[3].isArchived)},m(e,s){u(e,t,s),t.innerHTML=r},p(e,s){1&s&&r!==(r=e[3].header.stub+"")&&(t.innerHTML=r),1&s&&d(t,"archived",e[3].isArchived)},d(e){e&&c(t)}}}function J(e){let t,r,l,h=H(e[6].dateUnpublished).format("D MMM")+"";return{c(){t=s("div"),r=a("Jusqu'au\r\n                      "),l=a(h),this.h()},l(e){t=i(e,"DIV",{class:!0});var s=n(t);r=o(s,"Jusqu'au\r\n                      "),l=o(s,h),s.forEach(c),this.h()},h(){f(t,"class","end")},m(e,s){u(e,t,s),m(t,r),m(t,l)},p(e,t){1&t&&h!==(h=H(e[6].dateUnpublished).format("D MMM")+"")&&v(l,h)},d(e){e&&c(t)}}}function O(e){let t,r;return{c(){t=s("div"),r=a("Film indisponible"),this.h()},l(e){t=i(e,"DIV",{class:!0});var s=n(t);r=o(s,"Film indisponible"),s.forEach(c),this.h()},h(){f(t,"class","end")},m(e,s){u(e,t,s),m(t,r)},p:A,d(e){e&&c(t)}}}function K(e){let t,r,p,g,b,$,y,V,A,k,H,P,U,x,C,S,B,N,R,z,_,G,K,Q,W=e[6].duree+"",X=`${j(e[6].artFr,e[6].titreFr)}${q("string"==typeof e[6].sousTitreFr?e[6].sousTitreFr[0]===e[6].sousTitreFr[0].toUpperCase()?". ":" ":"","",e[6].sousTitreFr)}`,Y=e[6].realisateurs+"",Z=e[6].annee+"";function ee(e,t){return 3===e[6].status?O:e[6].dateUnpublished?J:void 0}C=new L({props:{age:e[6].ageMin,size:"20"}});let te=ee(e),re=te&&te(e);return{c(){t=s("li"),r=s("a"),p=s("div"),g=s("img"),y=l(),V=s("div"),A=a(W),k=l(),H=s("div"),P=s("div"),x=l(),w(C.$$.fragment),S=l(),B=s("div"),N=a(Y),R=a(", "),z=a(Z),_=l(),re&&re.c(),K=l(),this.h()},l(e){t=i(e,"LI",{class:!0});var s=n(t);r=i(s,"A",{rel:!0,href:!0});var a=n(r);p=i(a,"DIV",{class:!0});var l=n(p);g=i(l,"IMG",{loading:!0,src:!0,alt:!0}),y=h(l),V=i(l,"DIV",{class:!0});var f=n(V);A=o(f,W),f.forEach(c),l.forEach(c),k=h(a),H=i(a,"DIV",{class:!0});var d=n(H);P=i(d,"DIV",{class:!0});var u=n(P);x=h(u),D(C.$$.fragment,u),u.forEach(c),S=h(d),B=i(d,"DIV",{});var m=n(B);N=o(m,Y),R=o(m,", "),z=o(m,Z),m.forEach(c),_=h(d),re&&re.l(d),d.forEach(c),a.forEach(c),K=h(s),s.forEach(c),this.h()},h(){f(g,"loading","lazy"),g.src!==(b=e[6].thumb)&&f(g,"src",b),f(g,"alt",$=j(e[6].artFr,e[6].titreFr)),f(V,"class","duree"),f(p,"class","img-container"),U=new T(x),f(P,"class","titre"),f(H,"class","film-info"),f(r,"rel","prefetch"),f(r,"href",G="film/"+e[6].slug+"/"),f(t,"class","film"),d(t,"archived",e[6].isArchived),d(t,"ispick",e[6].isPick)},m(e,s){u(e,t,s),m(t,r),m(r,p),m(p,g),m(p,y),m(p,V),m(V,A),m(r,k),m(r,H),m(H,P),U.m(X,P),m(P,x),F(C,P,null),m(H,S),m(H,B),m(B,N),m(B,R),m(B,z),m(H,_),re&&re.m(H,null),m(t,K),Q=!0},p(e,s){(!Q||1&s&&g.src!==(b=e[6].thumb))&&f(g,"src",b),(!Q||1&s&&$!==($=j(e[6].artFr,e[6].titreFr)))&&f(g,"alt",$),(!Q||1&s)&&W!==(W=e[6].duree+"")&&v(A,W),(!Q||1&s)&&X!==(X=`${j(e[6].artFr,e[6].titreFr)}${q("string"==typeof e[6].sousTitreFr?e[6].sousTitreFr[0]===e[6].sousTitreFr[0].toUpperCase()?". ":" ":"","",e[6].sousTitreFr)}`)&&U.p(X);const a={};1&s&&(a.age=e[6].ageMin),C.$set(a),(!Q||1&s)&&Y!==(Y=e[6].realisateurs+"")&&v(N,Y),(!Q||1&s)&&Z!==(Z=e[6].annee+"")&&v(z,Z),te===(te=ee(e))&&re?re.p(e,s):(re&&re.d(1),re=te&&te(e),re&&(re.c(),re.m(H,null))),(!Q||1&s&&G!==(G="film/"+e[6].slug+"/"))&&f(r,"href",G),1&s&&d(t,"archived",e[6].isArchived),1&s&&d(t,"ispick",e[6].isPick)},i(e){Q||(E(C.$$.fragment,e),Q=!0)},o(e){I(C.$$.fragment,e),Q=!1},d(e){e&&c(t),M(C),re&&re.d()}}}function Q(e){let t,r,p,w,D,F,M,$,y,T=e[3].name+"",A=e[3].header.stub&&G(e),k=e[3].films,H=[];for(let t=0;t<k.length;t+=1)H[t]=K(C(e,k,t));const j=e=>I(H[e],1,1,()=>{H[e]=null});return{c(){t=s("div"),r=s("h2"),p=a(T),D=l(),A&&A.c(),F=l(),M=s("ul");for(let e=0;e<H.length;e+=1)H[e].c();$=l(),this.h()},l(e){t=i(e,"DIV",{});var s=n(t);r=i(s,"H2",{class:!0,id:!0});var a=n(r);p=o(a,T),a.forEach(c),D=h(s),A&&A.l(s),F=h(s),M=i(s,"UL",{class:!0});var l=n(M);for(let e=0;e<H.length;e+=1)H[e].l(l);l.forEach(c),$=h(s),s.forEach(c),this.h()},h(){f(r,"class","collection"),f(r,"id",w=e[3].slug),d(r,"archived",e[3].isArchived),f(M,"class","grid")},m(e,s){u(e,t,s),m(t,r),m(r,p),m(t,D),A&&A.m(t,null),m(t,F),m(t,M);for(let e=0;e<H.length;e+=1)H[e].m(M,null);m(t,$),y=!0},p(e,s){if((!y||1&s)&&T!==(T=e[3].name+"")&&v(p,T),(!y||1&s&&w!==(w=e[3].slug))&&f(r,"id",w),1&s&&d(r,"archived",e[3].isArchived),e[3].header.stub?A?A.p(e,s):(A=G(e),A.c(),A.m(t,F)):A&&(A.d(1),A=null),1&s){let t;for(k=e[3].films,t=0;t<k.length;t+=1){const r=C(e,k,t);H[t]?(H[t].p(r,s),E(H[t],1)):(H[t]=K(r),H[t].c(),E(H[t],1),H[t].m(M,null))}for(V(),t=k.length;t<H.length;t+=1)j(t);b()}},i(e){if(!y){for(let e=0;e<k.length;e+=1)E(H[e]);y=!0}},o(e){H=H.filter(Boolean);for(let e=0;e<H.length;e+=1)I(H[e]);y=!1},d(e){e&&c(t),A&&A.d(),g(H,e)}}}function W(e){let t,r,a,o,d,v,y,T,A,k,H,j,q,L,U,C;A=new P({});let B=e[0],_=[];for(let t=0;t<B.length;t+=1)_[t]=R(N(e,B,t));let G=e[1].length>0&&z(e),J=e[0],O=[];for(let t=0;t<J.length;t+=1)O[t]=Q(S(e,J,t));const K=e=>I(O[e],1,1,()=>{O[e]=null});return{c(){t=s("meta"),r=s("meta"),a=s("meta"),o=s("meta"),d=l(),v=s("section"),y=s("div"),T=s("h1"),w(A.$$.fragment),k=l(),H=s("div");for(let e=0;e<_.length;e+=1)_[e].c();j=l(),G&&G.c(),q=l();for(let e=0;e<O.length;e+=1)O[e].c();this.h()},l(e){const s=$('[data-svelte="svelte-1hmvvng"]',document.head);t=i(s,"META",{property:!0,content:!0}),r=i(s,"META",{property:!0,content:!0}),a=i(s,"META",{property:!0,content:!0}),o=i(s,"META",{property:!0,content:!0}),s.forEach(c),d=h(e),v=i(e,"SECTION",{});var l=n(v);y=i(l,"DIV",{class:!0});var f=n(y);T=i(f,"H1",{class:!0});var u=n(T);D(A.$$.fragment,u),u.forEach(c),k=h(f),H=i(f,"DIV",{class:!0});var m=n(H);for(let e=0;e<_.length;e+=1)_[e].l(m);m.forEach(c),j=h(f),G&&G.l(f),q=h(f);for(let e=0;e<O.length;e+=1)O[e].l(f);f.forEach(c),l.forEach(c),this.h()},h(){document.title="\r\n    HENRI : Des films rares de la Cinémathèque française à voir en ligne\r\n  ",f(t,"property","og:url"),f(t,"content","https://www.cinematheque.fr/henri/"),f(r,"property","og:title"),f(r,"content","HENRI - Des films rares de la Cinémathèque française à voir en\r\n    ligne"),f(a,"property","og:image"),f(a,"content","https://www.cinematheque.fr/henri/logo-918x480.jpg"),f(o,"property","og:description"),f(o,"content","HENRI, la plateforme VOD de la Cinémathèque française vous propose\r\n    de découvrir gratuitement en ligne des films rares issus de ses collections."),f(T,"class","svelte-14mm8il"),f(H,"class","collections-list"),f(y,"class","container")},m(s,l){m(document.head,t),m(document.head,r),m(document.head,a),m(document.head,o),u(s,d,l),u(s,v,l),m(v,y),m(y,T),F(A,T,null),m(y,k),m(y,H);for(let e=0;e<_.length;e+=1)_[e].m(H,null);m(y,j),G&&G.m(y,null),m(y,q);for(let e=0;e<O.length;e+=1)O[e].m(y,null);L=!0,U||(C=p(x,"popstate",e[2]),U=!0)},p(e,[t]){if(3&t){let r;for(B=e[0],r=0;r<B.length;r+=1){const s=N(e,B,r);_[r]?_[r].p(s,t):(_[r]=R(s),_[r].c(),_[r].m(H,null))}for(;r<_.length;r+=1)_[r].d(1);_.length=B.length}if(e[1].length>0?G?G.p(e,t):(G=z(e),G.c(),G.m(y,q)):G&&(G.d(1),G=null),1&t){let r;for(J=e[0],r=0;r<J.length;r+=1){const s=S(e,J,r);O[r]?(O[r].p(s,t),E(O[r],1)):(O[r]=Q(s),O[r].c(),E(O[r],1),O[r].m(y,null))}for(V(),r=J.length;r<O.length;r+=1)K(r);b()}},i(e){if(!L){E(A.$$.fragment,e);for(let e=0;e<J.length;e+=1)E(O[e]);L=!0}},o(e){I(A.$$.fragment,e),O=O.filter(Boolean);for(let e=0;e<O.length;e+=1)I(O[e]);L=!1},d(e){c(t),c(r),c(a),c(o),e&&c(d),e&&c(v),M(A),g(_,e),G&&G.d(),g(O,e),U=!1,C()}}}async function X({params:e,query:t}){let r=await this.fetch("collections-headers.json");if(200===r.status){r=await r.json();let e=k(r).map(e=>e.films).flatten().filter(e=>!e.isArchived&&e.isPick).orderBy(e=>e.order).map(e=>e.slug).value();return e=await Promise.all(k(e).map(async e=>{let t=await this.fetch(`film/${e}.json`);return t.status>=400?null:await t.json()}).value()),e=k.compact(e),{collectionsHeaders:r,pick:e}}this.error(res.status,data.message)}function Y(e,t,r){H.locale("fr");let{collectionsHeaders:s}=t,{pick:a}=t;return e.$set=e=>{"collectionsHeaders"in e&&r(0,s=e.collectionsHeaders),"pick"in e&&r(1,a=e.pick)},[s,a,e=>{console.log(e.state&&e.state.top||0),window.scrollTo({top:e.state&&e.state.top||0,behavior:"smooth"})}]}export default class extends e{constructor(e){super(),t(this,e,Y,W,r,{collectionsHeaders:0,pick:1})}}export{X as preload};