(function(e){function t(t){for(var r,c,o=t[0],u=t[1],d=t[2],l=0,s=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&s.push(i[c][0]),i[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(s.length)s.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var o=n[c];0!==i[o]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},i={app:0},a=[];function o(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-1b12db51":"3309d32a","chunk-2d0b9fd5":"4bc15275","chunk-2d0c1567":"30a9ea5d","chunk-2d0ceb19":"ea8ba9cb","chunk-2d0e1f26":"9c29fceb","chunk-2d0f04c0":"d8b18971","chunk-2d20f4f5":"947400ea"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-1b12db51":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1b12db51":"4cccbd70","chunk-2d0b9fd5":"31d6cfe0","chunk-2d0c1567":"31d6cfe0","chunk-2d0ceb19":"31d6cfe0","chunk-2d0e1f26":"31d6cfe0","chunk-2d0f04c0":"31d6cfe0","chunk-2d20f4f5":"31d6cfe0"}[e]+".css",i=u.p+r,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var d=a[o],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===r||l===i))return t()}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){d=s[o],l=d.getAttribute("data-href");if(l===r||l===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete c[e],f.parentNode.removeChild(f),n(a)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){c[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=a);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=o(e);var s=new Error;d=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,n[1](s)}i[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var s=0;s<d.length;s++)t(d[s]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"425b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("kw-header"),n("router-view")],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"banxin"},[n("swiper",{ref:"swiper",staticClass:"swiper-container",attrs:{options:e.swiperOption}},e._l(e.swiperList,(function(t){return n("swiper-slide",{key:t.id,class:{active:e.navActive===t.id},attrs:{"data-uri":t.id}},[e._v(" "+e._s(t.text)+" ")])})),1),n("div",{staticClass:"logo"})],1)])},o=[],u=(n("c740"),n("ac1f"),n("1276"),n("7212")),d=(n("5f67"),[{id:"index",text:"Home"},{id:"web",text:"前端"},{id:"game",text:"游戏"},{id:"dao",text:"悟道"},{id:"dir",text:"日志"},{id:"neighbor",text:"友人帐"},{id:"file",text:"悠哉"}]),l={name:"Header",components:{Swiper:u["Swiper"],SwiperSlide:u["SwiperSlide"]},data:function(){var e=this,t=location.pathname.split("/")[1],n=d.findIndex((function(e){return e.id===t}));return{navActive:t,swiperOption:{slidesPerView:"auto",spaceBetween:20,initialSlide:n,on:{click:function(t){t.changedTouches[0].target.dataset.uri&&e.$router.push({path:t.changedTouches[0].target.dataset.uri})}}},swiperList:d}},created:function(){},mounted:function(){},watch:{$route:{handler:function(e){var t=e.path.split("/")[1];e&&(this.navActive=t)},deep:!0}},methods:{navClick:function(e){this.navActive=e,this.$router.push({path:e})}}},s=l,f=(n("adf4"),n("2877")),h=Object(f["a"])(s,a,o,!1,null,"418c23c9",null),p=h.exports,b={name:"App",components:{KwHeader:p}},m=b,v=(n("034f"),Object(f["a"])(m,c,i,!1,null,null,null)),g=v.exports,w=(n("99af"),n("2909")),k=n("8c4f"),y=(n("d3b7"),[{path:"/index",name:"home",component:function(){return n.e("chunk-1b12db51").then(n.bind(null,"bb51"))},children:[]}]),O=[{path:"/web",name:"web",component:function(){return n.e("chunk-2d0b9fd5").then(n.bind(null,"34fd"))},children:[]}],x=[{path:"/game",name:"game",component:function(){return n.e("chunk-2d0e1f26").then(n.bind(null,"7d36"))},children:[]}],j=[{path:"/dao",name:"dao",component:function(){return n.e("chunk-2d20f4f5").then(n.bind(null,"b2a0"))},children:[]}],S=[{path:"/dir",name:"dir",component:function(){return n.e("chunk-2d0c1567").then(n.bind(null,"462a"))},children:[]}],_=[{path:"/neighbor",name:"neighbor",component:function(){return n.e("chunk-2d0ceb19").then(n.bind(null,"6119"))},children:[]}],C=[{path:"/file",name:"file",component:function(){return n.e("chunk-2d0f04c0").then(n.bind(null,"9c88"))},children:[]}];r["default"].use(k["a"]);var A=new k["a"]({routes:[{path:"/",redirect:{name:"home"}}].concat(Object(w["a"])(y),Object(w["a"])(O),Object(w["a"])(x),Object(w["a"])(j),Object(w["a"])(S),Object(w["a"])(_),Object(w["a"])(C)),mode:"history"}),E=A;n("8190");r["default"].config.productionTip=!1,new r["default"]({router:E,render:function(e){return e(g)}}).$mount("#app")},8190:function(e,t,n){},"85ec":function(e,t,n){},adf4:function(e,t,n){"use strict";n("425b")}});
//# sourceMappingURL=app.cbca8325.js.map