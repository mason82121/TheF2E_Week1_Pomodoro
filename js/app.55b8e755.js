(function(e){function t(t){for(var o,r,u=t[0],c=t[1],d=t[2],l=0,s=[];l<u.length;l++)r=u[l],a[r]&&s.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(t);while(s.length)s.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-32f8b599":"ead42b17","chunk-68e81a0e":"cfa34868","chunk-40dc745d":"5731f32f","chunk-5aa7b5ea":"a26ed88e","chunk-9813a3c2":"bd6b4ba3","chunk-d91dda1e":"53d1c43a"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-32f8b599":1,"chunk-68e81a0e":1,"chunk-40dc745d":1,"chunk-5aa7b5ea":1,"chunk-9813a3c2":1,"chunk-d91dda1e":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-32f8b599":"d16657ab","chunk-68e81a0e":"7b5f4a98","chunk-40dc745d":"c09b7948","chunk-5aa7b5ea":"5a7b8e09","chunk-9813a3c2":"55153b8d","chunk-d91dda1e":"c2b40ff8"}[e]+".css",a=c.p+o,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var d=i[u],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===o||l===a))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){d=s[u],l=d.getAttribute("data-href");if(l===o||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){r[e]=0}));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise(function(t,n){o=a[e]=[t,n]});t.push(o[2]=i);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e),d=function(t){l.onerror=l.onload=null,clearTimeout(s);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");i.type=o,i.request=r,n[1](i)}a[e]=void 0}};var s=setTimeout(function(){d({type:"timeout",target:l})},12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/TheF2E_Week1_Pomodoro/dist/",c.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var s=0;s<d.length;s++)t(d[s]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("6b54"),n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vue-page-transition",{attrs:{id:"app",name:"fade"}},[n("router-view")],1)},a=[],i=(n("5c0b"),n("2877")),u={},c=Object(i["a"])(u,r,a,!1,null,null,null),d=c.exports,l=n("8c4f");o["a"].use(l["a"]);var s=new l["a"]({base:"/TheF2E_Week1_Pomodoro/dist/",routes:[{path:"/",name:"home",component:function(){return Promise.all([n.e("chunk-68e81a0e"),n.e("chunk-9813a3c2")]).then(n.bind(null,"bb51"))}},{path:"/tools",name:"tools",component:function(){return Promise.all([n.e("chunk-68e81a0e"),n.e("chunk-5aa7b5ea")]).then(n.bind(null,"d5d4"))},children:[{path:"todo",name:"todo",component:function(){return Promise.all([n.e("chunk-68e81a0e"),n.e("chunk-40dc745d")]).then(n.bind(null,"a3b3"))}},{path:"analytics",name:"analytics",component:function(){return n.e("chunk-d91dda1e").then(n.bind(null,"41f2"))}},{path:"ringtones",name:"ringtones",component:function(){return n.e("chunk-32f8b599").then(n.bind(null,"628d"))}}]},{path:"*",redirect:"/"}]}),f=(n("ac6a"),n("2f62"));o["a"].use(f["a"]);var h=new f["a"].Store({state:{playMode:"work",isStart:!1,playing:!1,playingTime:0,modeTime:{work:1500,break:300},todos:[{id:1562918030517,title:"the First thing to do today",isCompleted:!1,doTimes:3,remark:""},{id:1562918049596,title:"the second thing to do today",isCompleted:!1,doTimes:5,remark:""},{id:1562918051424,title:"the third thing to do today",isCompleted:!1,doTimes:3,remark:""},{id:1562918068435,title:"the forth thing to do today",isCompleted:!0,doTimes:4,remark:""},{id:1562918077667,title:"the five thing to do today",isCompleted:!1,doTimes:4,remark:""}],nowTodoID:1562918030517,dashValue:"",ring:{work:"default",break:"alert"}},mutations:{onChangeWorkRing:function(e,t){var n=t.value;e.ring.work=n},onChangeBreakRing:function(e,t){var n=t.value;e.ring.break=n},addTimesInMession:function(e){"work"===e.playMode&&e.todos.forEach(function(t){t.id===e.nowTodoID&&(t.doTimes+=1),e.dashValue="0%"})},onChangeDashValue:function(e,t){var n=t.value;e.dashValue=n},switchPlayMode:function(e){!0!==e.playing&&!0!==e.isStart&&(e.playMode="break"===e.playMode?"work":"break")},setPlayMode:function(e,t){var n=t.value;e.playMode=n},togglePlaying:function(e,t){var n=t.value;e.playing=n},toggleStarted:function(e,t){var n=t.value;e.isStart=n},setPlayingTime:function(e,t){var n=t.value;e.playingTime=n},countDownPlayingTime:function(e){e.playingTime=e.playingTime-1},addTodoItem:function(e,t){var n=t.title;e.todos.push({id:(new Date).valueOf(),title:n,isCompleted:!1,doTimes:0,remark:""})},toggleItemCompleted:function(e,t){var n=t.id;e.todos.forEach(function(e){e.id===n&&(e.isCompleted=!e.isCompleted)})},deleteTodoItemById:function(e,t){var n=t.id;e.todos=e.todos.filter(function(e){return e.id!==n})},editTodoItemById:function(e,t){var n=t.id,o=t.text;e.todos.forEach(function(e){e.id===n&&(e.title=o)})},onChangeNowMession:function(e,t){var n=t.id;e.nowTodoID=n}},actions:{}}),p=new o["a"];Object.defineProperty(o["a"].prototype,"$bus",{get:function(){return this.$root.bus}});var m=p,g=n("9483");Object(g["a"])("".concat("/TheF2E_Week1_Pomodoro/dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var b=n("f0eb");n("8594");o["a"].use(b["default"]),o["a"].config.productionTip=!1,o["a"].filter("timeformat",function(e){var t=e%60,n=Math.floor(e/60)%60,o=Math.floor(Math.floor(e/60)/60);return 1===t.toString().length&&(t="0"+t.toString()),1===n.toString().length&&(n="0"+n.toString()),1===o.toString().length&&(o="0"+o.toString()),"".concat(n,":").concat(t)}),new o["a"]({data:function(){return{bus:m}},router:s,store:h,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("5e27"),r=n.n(o);r.a},"5e27":function(e,t,n){},8594:function(e,t,n){}});
//# sourceMappingURL=app.55b8e755.js.map