(function(t){function e(e){for(var i,o,a=e[0],l=e[1],u=e[2],s=0,d=[];s<a.length;s++)o=a[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);m&&m(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],i=!0,o=1;o<n.length;o++){var a=n[o];0!==r[a]&&(i=!1)}i&&(c.splice(e--,1),t=l(l.s=n[0]))}return t}var i={},o={app:0},r={app:0},c=[];function a(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-09dff9c2":"b3381cd7","chunk-0e011b66":"6e0f10ef","chunk-10adbdbb":"a321cd42","chunk-2d0c0c24":"852497a6","chunk-d6581bb6":"0e39e3ce","chunk-117e819f":"599b5370","chunk-14a324fa":"832743d8","chunk-1a76c570":"f543ef84","chunk-274277e4":"7cfed3b0","chunk-2f5cb18a":"c61d0d45","chunk-47987228":"bc5f1743","chunk-7757ce2b":"db553f78","chunk-965b8cce":"5b93c3cc","chunk-e2f49838":"81dd2989"}[t]+".js"}function l(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"chunk-09dff9c2":1,"chunk-0e011b66":1,"chunk-10adbdbb":1,"chunk-d6581bb6":1,"chunk-14a324fa":1,"chunk-1a76c570":1,"chunk-274277e4":1,"chunk-2f5cb18a":1,"chunk-47987228":1,"chunk-7757ce2b":1,"chunk-965b8cce":1,"chunk-e2f49838":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var i="css/"+({}[t]||t)+"."+{"chunk-09dff9c2":"abb9b615","chunk-0e011b66":"9898e219","chunk-10adbdbb":"642e831d","chunk-2d0c0c24":"31d6cfe0","chunk-d6581bb6":"d1969422","chunk-117e819f":"31d6cfe0","chunk-14a324fa":"642e831d","chunk-1a76c570":"642e831d","chunk-274277e4":"49469239","chunk-2f5cb18a":"30592c39","chunk-47987228":"0963014d","chunk-7757ce2b":"0c4e71d4","chunk-965b8cce":"7e761f46","chunk-e2f49838":"025b3ffb"}[t]+".css",r=l.p+i,c=document.getElementsByTagName("link"),a=0;a<c.length;a++){var u=c[a],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===i||s===r))return e()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){u=d[a],s=u.getAttribute("data-href");if(s===i||s===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var i=e&&e.target&&e.target.src||r,c=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=i,delete o[t],m.parentNode.removeChild(m),n(c)},m.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(m)})).then((function(){o[t]=0})));var i=r[t];if(0!==i)if(i)e.push(i[2]);else{var c=new Promise((function(e,n){i=r[t]=[e,n]}));e.push(i[2]=c);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=a(t);var d=new Error;u=function(e){s.onerror=s.onload=null,clearTimeout(m);var n=r[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",d.name="ChunkLoadError",d.type=i,d.request=o,n[1](d)}r[t]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(e)},l.m=t,l.c=i,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(n,i,function(e){return t[e]}.bind(null,i));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var m=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2cc9":function(t,e,n){"use strict";n("b0c0"),n("d3b7");var i=n("2b0e"),o=n("8c4f");i["default"].use(o["a"]);var r=[{path:"/",name:"Home",component:function(){return n.e("chunk-2f5cb18a").then(n.bind(null,"bb51"))}},{path:"/a/:current?",props:!0,name:"Anything",component:function(){return n.e("chunk-117e819f").then(n.bind(null,"ce89"))}},{path:"/projects",name:"Projects",component:function(){return n.e("chunk-09dff9c2").then(n.bind(null,"acca"))}},{path:"/suhc",name:"SUHC",component:function(){return n.e("chunk-7757ce2b").then(n.bind(null,"d151"))},children:[{path:"log",name:"Captain's log | SUHC",component:function(){return n.e("chunk-274277e4").then(n.bind(null,"bea4"))}},{path:"quotes",name:"Quotes | SUHC",component:function(){return n.e("chunk-14a324fa").then(n.bind(null,"b660"))}}]},{path:"/l/admin",name:"Administrare Literatură",component:function(){return n.e("chunk-965b8cce").then(n.bind(null,"a545"))}},{path:"/l/:category?",name:"Literature",props:!0,component:function(){return n.e("chunk-47987228").then(n.bind(null,"1b05"))}},{path:"/essay/:filename?",name:"Essays",props:!0,component:function(){return Promise.all([n.e("chunk-10adbdbb"),n.e("chunk-d6581bb6")]).then(n.bind(null,"4d06"))}},{path:"/more-writing/:filename",name:"More Essays",props:!0,component:function(){return Promise.all([n.e("chunk-10adbdbb"),n.e("chunk-2d0c0c24")]).then(n.bind(null,"42c3"))}},{path:"/contact",name:"Contact",component:function(){return n.e("chunk-1a76c570").then(n.bind(null,"b8fa"))}},{path:"/goldmine",name:"Gold Mine | Diary",component:function(){return n.e("chunk-0e011b66").then(n.bind(null,"0881"))}},{path:"*",name:"404",component:function(){return n.e("chunk-e2f49838").then(n.bind(null,"8cdb"))}}],c=function(t,e,n){document.title=t.name+" | "+window.globals.interpretedHost,n()},a=new o["a"]({routes:r});a.beforeEach(c),e["a"]=a},"56d7":function(t,e,n){"use strict";n.r(e);n("caad"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-navigation-drawer",{attrs:{fixed:"",permanent:"","expand-on-hover":"",touchless:""}},[i("v-list-item",[i("v-list-item-icon",{attrs:{id:"circular-icon"}},[t._v(" t ")])],1),i("v-divider"),i("v-list",{attrs:{dense:"",nav:""}},[i("v-list-item",{attrs:{link:"",to:"/"}},[i("v-list-item-icon",[i("v-icon",[t._v("mdi-home")])],1),i("v-list-item-title",[t._v("Home")])],1),i("v-list-item",{attrs:{link:"",to:"/projects"}},[i("v-list-item-icon",[i("v-icon",[t._v("mdi-xml")])],1),i("v-list-item-title",[t._v("Projects")])],1),i("v-list-item",{attrs:{link:"",to:"/suhc"}},[i("v-list-item-icon",[i("img",{attrs:{src:n("f6e3")}})]),i("v-list-item-title",[t._v("SUHC")])],1),i("v-list",{attrs:{dense:"",nav:""}},[i("v-list-item",{attrs:{link:"",to:"/suhc/log"}},[i("v-list-item-icon",[i("v-icon",{staticClass:"move-icon-left"},[t._v("mdi-menu-right")])],1),i("v-list-item-title",[t._v("Captain's log")])],1),i("v-list-item",{attrs:{link:"",to:"/suhc/quotes"}},[i("v-list-item-icon",[i("v-icon",{staticClass:"move-icon-left"},[t._v("mdi-menu-right")])],1),i("v-list-item-title",[t._v("Quotes Collection")])],1)],1),this.activeComponents.includes("A")?i("v-list-item",{attrs:{link:"",to:"/a"}},[i("v-list-item-icon",[i("v-icon",[t._v("mdi-upload")])],1),i("v-list-item-title",[t._v("A")])],1):t._e(),i("v-list-item",{attrs:{link:"",to:"/essay"}},[i("v-list-item-icon",[i("v-icon",[t._v("mdi-pencil")])],1),i("v-list-item-title",[t._v("Essays")])],1),this.activeComponents.includes("Goldmine")?i("v-list-item",{attrs:{link:"",to:"/goldmine"}},[i("v-list-item-icon",[i("v-icon",[t._v("mdi-emoticon-excited")])],1),i("v-list-item-title",[t._v("Gold mine")])],1):t._e(),this.activeComponents.includes("L")?i("v-list-item",{attrs:{link:"",to:"/l"}},[i("v-list-item-icon",[i("v-icon",[t._v("mdi-pencil")])],1),i("v-list-item-title",[t._v("Literatură")])],1):t._e(),this.activeComponents.includes("L")?i("v-list",{attrs:{dense:"",nav:""}},[this.activeComponents.includes("LA")?i("v-list-item",{attrs:{link:"",to:"/l/admin"}},[i("v-list-item-icon",[i("v-icon",[t._v("mdi-wrench")])],1),i("v-list-item-title",[t._v("Administrare Literatură")])],1):t._e(),t._l(t.literatureCategories,(function(e){return i("v-list-item",{key:e,attrs:{link:"",to:"/l/"+e}},[i("v-list-item-icon",[i("v-icon",{staticClass:"move-icon-left"},[t._v("mdi-menu-right")])],1),i("v-list-item-title",[t._v(t._s(e))])],1)}))],2):t._e(),i("v-list-item",{attrs:{link:"",to:"/contact"}},[i("v-list-item-icon",[i("v-icon",[t._v("mdi-email")])],1),i("v-list-item-title",[t._v("Contact")])],1),this.activeComponents.includes("Login")?i("v-list-item",{attrs:{link:"",href:"/login"}},[i("v-list-item-icon",[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-title",[t._v("Login")])],1):t._e(),this.activeComponents.includes("Logout")?i("v-list-item",{attrs:{link:"",href:"/logout"}},[i("v-list-item-icon",[i("v-icon",[t._v("mdi-lock")])],1),i("v-list-item-title",[t._v("Logout")])],1):t._e(),t.backendPresent?t._e():i("v-list-item",{attrs:{link:"",href:"https://teonistor.herokuapp.com"}},[i("v-list-item-icon",[i("v-icon",[t._v("mdi-exit-to-app")])],1),i("v-list-item-title",[t._v("Fully featured interactive"),i("br"),t._v("site version")])],1)],1)],1),i("v-main",{staticStyle:{"padding-left":"56px"}},[i("header",[i("div",{staticClass:"container"},[i("span",{staticStyle:{float:"right",margin:"-10px 0"}},[i("v-icon",{on:{click:function(e){t.lightTheme=!1}}},[t._v("mdi-moon-waning-crescent")]),i("v-switch",{staticStyle:{display:"inline-block","vertical-align":"middle"},model:{value:t.lightTheme,callback:function(e){t.lightTheme=e},expression:"lightTheme"}}),i("v-icon",{on:{click:function(e){t.lightTheme=!0}}},[t._v("mdi-weather-sunny")])],1),i("h1",[t._v(t._s(t.interpretedHost))])])]),i("router-view",{attrs:{backendPresent:t.backendPresent,loggedIn:t.loggedIn}})],1)],1)},r=[],c=(n("2532"),n("bc3a")),a=n.n(c),l={name:"App",data:function(){return{lightTheme:!1,activeComponents:[],literatureCategories:["Poezii","Eseuri"]}},computed:{backendPresent:function(){return!this.activeComponents.includes("Full")},loggedIn:function(){return this.activeComponents.includes("Logout")},interpretedHost:function(){return window.globals.interpretedHost}},watch:{lightTheme:function(t){this.$vuetify.theme.dark=!t}},mounted:function(){var t=this;a()({method:"GET",url:this.$apiUrl+"/activeComponents.json"}).then((function(e){t.activeComponents=e.data,t.activeComponents.includes("L")&&a()({method:"GET",url:t.$apiUrl+"/l/categories"}).then((function(e){window.globals.literatureCategories=t.literatureCategories=e.data.d}),(function(t){console.error(t)}))}),(function(t){console.error(t)}))}},u=l,s=n("2877"),d=Object(s["a"])(u,o,r,!1,null,null,null),m=d.exports,h=n("2cc9"),v=n("ce5b"),p=n.n(v);n("bf40");i["default"].use(p.a);var f=new p.a({theme:{dark:!0,themes:{light:{primary:"#ca007a"},dark:{primary:"#ee44aa"}}}}),b=(n("d5e8"),n("5363"),["teonistor.github.io","teonistor.herokuapp.com","teodor.nistor.uk"]),k=b.includes(location.host)?location.host:b[0]+" (on "+location.host+")";window.globals={interpretedHost:k,literatureCategories:["Poezii","Eseuri"]},i["default"].prototype.$apiUrl="/api",i["default"].prototype.$dataUrl="https://teodor.nistor.uk/data",i["default"].prototype.$localDataUrl="/data",i["default"].prototype.$hiddenDataUrl="https://teonistor.herokuapp.com/documents",i["default"].prototype.$githubApiUrl="https://api.github.com",i["default"].config.productionTip=!1,new i["default"]({router:h["a"],vuetify:f,render:function(t){return t(m)}}).$mount("#app")},f6e3:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AMOEDQERh9qSQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAD90lEQVRIx71VW0gjZxT+ZjKTUXMzdzrZZGNiaxIF1xsYazSoIN4oKtQHU9CV4oVUS1HBUuuDYBr64EOj2IUKxQerxb70RdiiYEGwKGrL0ka0FRvYWoIaalqtMdOHNdPE264L7QcD5/zn8P3n9p8BbkBubm6CLhKJSsVi8dtqtTrN6/US8baSkhLcCeXl5Qm6Wq1uGhsb829tbZ0NDAz4MzMzWyiKksT7ZGRk4KUglUrrxsfHf4xEIlwMMzMzfzkcjo8YhtHdmVAulydUyuPxPA6FQtxlrK6untXV1c2IRKJXY87Jycm3k1sslnj1le7u7kd+v5+7CXt7e1xTU9OSSqXKBsD3xWg0PjeRpJqamp75+flT7jkIhULR9vb27+Ry+evxl8hksiu15mWz2ez0+Xxb3Avi9PQ02tvb+4NWq60EQMZ4CgoKngmpqak8OU3Tuo6OjrlgMMjdBdFoNOr1ev0Gg6ERgOCm0jAOh6NncXHxjHsJHB4envl8vl+Li4sfxjIhTSYTz24wGGzV1dVdTqeTunRx9OK7DrxtcnLyZ7lc/kQqlb5DEES/TqcT8l46nU7U0NDw2cVInofDYT6LhYWF45WVlfDu7u55OBxOiPrk5ORkcHBwZ3Z29jebzTYPwFJVVdUoFAo/pCiqNdZ1Mjs7+42+vr7PGYYRbG5uPm1ubtZZLJakjY2N4NDQUEgmkyElJeVbm832oKWl5UHcUHB2u/0JgPcDgQACgcDXF+9Jcnx8nA8AYFlWrVQqv+nq6nqUn5/fWllZ+TgSiXA7Ozvh+vr6LyUSyRjLsu8C0BqNxtL+/v6l/f19PsO5ublDAIUABG1tbXxV1tbWCHAcRwgEArdEIikFoCksLMyZmJh4enBwwLnd7q8A2ADcA8CHLJFILC6X64vt7e0/L8aUs1qtn177ohmGyaMo6mFMra2t/WB9fZ0bGRlZApB3y2PUlpWVjS4vL//BcRzn8Xj2ALAkSSZsWpAk+XF6eroIAIqKiu61trZuTk1NfQ/AeZnRarVePhJbrda+6enp34+Ojv5mGOa9K2HQNG2+ECmLxfKmy+X6SavVNsb7dHZ28rLT6YyViafQ6/V1w8PDv7jd7nUAQgDQaDTPrBqNhgIAsVisEAgEMyqVKiGKnJycK0GZzebLR2RaWlquyWRaBtCSYDGZTFAoFERSUtJrJEl+Em+z2+23bsS8vH9bRFEUoVQqWYIg3rrWmSRJkmVZEgCysrLu9A9RKBSxNU1wHAcA6Onpud35rtDr9bw8OjqK/xcMw/xn3AIAOD8/h1AoBE3TBMuyREVFBSEWiwm5XE4qlUoEg8EXIlMqlVCpVITH4yHv379P0DRN/AM2bShlCtiMawAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.848cf33b.js.map