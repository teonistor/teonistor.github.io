(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ce34b22"],{"057f":function(t,e,n){var o=n("c6b6"),i=n("fc6a"),r=n("241c").f,a=n("4dae"),s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],l=function(t){try{return r(t)}catch(e){return a(s)}};t.exports.f=function(t){return s&&"Window"==o(t)?l(t):r(i(t))}},"1b05":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",[n("v-list",{staticStyle:{padding:"4px 0 0 0"},attrs:{dense:"",nav:""}},[t._l(t.categories,(function(e){return n("v-list-item",{staticStyle:{display:"inline-block",width:"220px",padding:"10px","text-align":"center"},attrs:{link:"",to:"/l/"+e}},[n("span",[t._v(t._s(t.effectiveEnglishToggle&&t.englishCategoryNames[e]||e))])])})),t.restCallsGoing?n("v-progress-circular",{staticStyle:{width:"220px"},attrs:{indeterminate:""}}):t._e(),t.showLanguageToggle?n("span",{staticStyle:{float:"right",margin:"-10px 0","padding-left":"20px"}},[n("span",{staticClass:"flagButton",on:{click:function(e){t.languageCfg.englishToggle=!1}}},[t._v("🇷🇴")]),n("v-switch",{staticClass:"floatingToggle",model:{value:t.languageCfg.englishToggle,callback:function(e){t.$set(t.languageCfg,"englishToggle",e)},expression:"languageCfg.englishToggle"}}),n("span",{staticClass:"flagButton",on:{click:function(e){t.languageCfg.englishToggle=!0}}},[t._v("🇬🇧")])],1):t._e(),n("span",{staticStyle:{float:"right",margin:"-10px 0"}},[n("v-icon",{on:{click:function(e){t.narrow=!1}}},[t._v("mdi-arrow-expand-horizontal")]),n("v-switch",{staticClass:"floatingToggle",model:{value:t.narrow,callback:function(e){t.narrow=e},expression:"narrow"}}),n("v-icon",{on:{click:function(e){t.narrow=!0}}},[t._v("mdi-arrow-collapse-horizontal")])],1)],2)],1),n("v-container",{style:{"max-width":t.narrow?"675px":null},attrs:{fluid:""}},[n("Notifications",{attrs:{alerts:t.alerts}}),t.rootCollection?n("LiteratureCollection",{attrs:{category:t.category,collection:t.rootCollection}}):t._e()],1)],1)},i=[],r=(n("99af"),n("4160"),n("d81d"),n("b64b"),n("d3b7"),n("ac1f"),n("6062"),n("3ca3"),n("5319"),n("159b"),n("ddb0"),n("2cc9")),a=n("343b"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-expansion-panels",{attrs:{popout:""}},[t._l(t.collection.subCollections,(function(e){return n("v-expansion-panel",{key:e.title,attrs:{hover:"",focusable:"",popout:""}},[n("v-expansion-panel-header",[t._v(" 📖 "+t._s(e.title)+" ")]),n("v-expansion-panel-content",{staticClass:"outer-panel"},[n("LiteratureCollection",{attrs:{category:t.category,collection:e}})],1)],1)})),t._l(t.collection.entries,(function(e){return n("v-expansion-panel",{key:e.title,attrs:{hover:"",focusable:"",popout:""}},[n("v-expansion-panel-header",{class:"entry-"+e.lang},[t._v(" 🖋 "+t._s(e.title)+" ")]),n("v-expansion-panel-content",[e.htmlPath?n("HtmlEntry",{attrs:{sourcePath:e.htmlPath}}):t._e(),e.mdPath?n("BasicMdEntry",{attrs:{sourcePath:e.mdPath}}):t._e()],1)],1)}))],2)},l=[],c=n("f9f8"),u=n("e5a4"),f={name:"LiteratureCollection",components:{BasicMdEntry:c["a"],HtmlEntry:u["a"]},props:["category","collection"],mounted:function(){console.log("LiteratureCollection :: this.collection =",this.collection)}},d=f,g=(n("b899"),n("2877")),h=Object(g["a"])(d,s,l,!1,null,null,null),v=h.exports,p=n("e985"),b={components:{LiteratureCollection:v,Notifications:p["a"]},mixins:[a["a"]],props:["category"],data:function(){return{staticRootCollections:{Eseuri:{entries:[{title:"This Should Never Happen",mdPath:"/essay/ThisShouldNeverHappen.md",lang:"en"},{title:"Întrebări fără răspuns despre organizarea societății și mersul lumii",mdPath:"/essay/IntrebariFaraRaspuns.md",lang:"ro"}]}},englishCategoryNames:{Eseuri:"Essays",Poezii:"Poetry"},languageCfg:{romanianExists:!1,englishExists:!1,englishToggle:!1},narrow:!0,loadedCategories:[],loadedRootCollection:null}},computed:{showLanguageToggle:function(){return this.romanianExists&&this.englishExists},effectiveEnglishToggle:function(){return!0},categories:function(){var t=new Set(this.loadedCategories||[]);return Object.keys(this.staticRootCollections).forEach((function(e){return t.add(e)})),t},rootCollection:function(){var t=this,e=this.absolutiseLoadedEntries(this.loadedRootCollection);console.log("Literature :: rootCollection :: absrc =",e);var n=(this.staticRootCollections&&this.staticRootCollections[this.category]&&this.staticRootCollections[this.category].entries||[]).map((function(e){return Object.assign({},e,{mdPath:t.$localDataUrl+e.mdPath})})),o=(e&&e.entries||[]).concat(n);return console.log("Literature :: rootCollection :: entries =",o),{title:this.category,entries:o,subCollections:e&&e.subCollections||[]}}},methods:{loadToc:function(){var t=this;this.credentialedAxios("loading TOC",(function(e){return e.get(t.$apiUrl+"/l/toc/"+encodeURIComponent(t.category))}),(function(e){return t.loadedRootCollection=e}))},absolutiseLoadedEntries:function(t){var e=this;if(!t||!t.entries)return t;var n=t.entries.map((function(t){return Object.assign({},t,{htmlPath:e.absolutisePath(t.htmlPath),mdPath:e.absolutisePath(t.mdPath)})})),o=(t.subCollections||[]).map(this.absolutiseLoadedEntries);return Object.assign({},t,{entries:n,subCollections:o})},absolutisePath:function(t){return t&&this.$apiUrl+"/l/toc/"+encodeURIComponent(this.category)+"/"+encodeURIComponent(t)},navigateToFirstCategoryIfNeeded:function(){!this.category&&this.categories.size&&r["a"].replace("/l/"+this.categories.entries().next().value[0])}},watch:{category:function(){this.loadToc()}},beforeMount:function(){var t=this;this.categories.length||this.credentialedAxios("loading categories",(function(e){return e.get(t.$apiUrl+"/l/categories")}),(function(e){return t.loadedCategories=e.d})).then(this.navigateToFirstCategoryIfNeeded)},mounted:function(){this.loadToc()}},y=b,x=(n("6be4"),Object(g["a"])(y,o,i,!1,null,null,null));e["default"]=x.exports},4352:function(t,e,n){},"4dae":function(t,e,n){var o=n("da84"),i=n("23cb"),r=n("07fa"),a=n("8418"),s=o.Array,l=Math.max;t.exports=function(t,e,n){for(var o=r(t),c=i(e,o),u=i(void 0===n?o:n,o),f=s(l(u-c,0)),d=0;c<u;c++,d++)a(f,d,t[c]);return f.length=d,f}},"4fad":function(t,e,n){var o=n("d039"),i=n("861d"),r=n("c6b6"),a=n("d86b"),s=Object.isExtensible,l=o((function(){s(1)}));t.exports=l||a?function(t){return!!i(t)&&((!a||"ArrayBuffer"!=r(t))&&(!s||s(t)))}:s},6062:function(t,e,n){"use strict";var o=n("6d61"),i=n("6566");o("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},6566:function(t,e,n){"use strict";var o=n("9bf2").f,i=n("7c73"),r=n("e2cc"),a=n("0366"),s=n("19aa"),l=n("2266"),c=n("7dd0"),u=n("2626"),f=n("83ab"),d=n("f183").fastKey,g=n("69f3"),h=g.set,v=g.getterFor;t.exports={getConstructor:function(t,e,n,c){var u=t((function(t,o){s(t,g),h(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),f||(t.size=0),void 0!=o&&l(o,t[c],{that:t,AS_ENTRIES:n})})),g=u.prototype,p=v(e),b=function(t,e,n){var o,i,r=p(t),a=y(t,e);return a?a.value=n:(r.last=a={index:i=d(e,!0),key:e,value:n,previous:o=r.last,next:void 0,removed:!1},r.first||(r.first=a),o&&(o.next=a),f?r.size++:t.size++,"F"!==i&&(r.index[i]=a)),t},y=function(t,e){var n,o=p(t),i=d(e);if("F"!==i)return o.index[i];for(n=o.first;n;n=n.next)if(n.key==e)return n};return r(g,{clear:function(){var t=this,e=p(t),n=e.index,o=e.first;while(o)o.removed=!0,o.previous&&(o.previous=o.previous.next=void 0),delete n[o.index],o=o.next;e.first=e.last=void 0,f?e.size=0:t.size=0},delete:function(t){var e=this,n=p(e),o=y(e,t);if(o){var i=o.next,r=o.previous;delete n.index[o.index],o.removed=!0,r&&(r.next=i),i&&(i.previous=r),n.first==o&&(n.first=i),n.last==o&&(n.last=r),f?n.size--:e.size--}return!!o},forEach:function(t){var e,n=p(this),o=a(t,arguments.length>1?arguments[1]:void 0);while(e=e?e.next:n.first){o(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!y(this,t)}}),r(g,n?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return b(this,0===t?0:t,e)}}:{add:function(t){return b(this,t=0===t?0:t,t)}}),f&&o(g,"size",{get:function(){return p(this).size}}),u},setStrong:function(t,e,n){var o=e+" Iterator",i=v(e),r=v(o);c(t,e,(function(t,e){h(this,{type:o,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=r(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),u(e)}}},"6be4":function(t,e,n){"use strict";var o=n("4352"),i=n.n(o);i.a},"6d61":function(t,e,n){"use strict";var o=n("23e7"),i=n("da84"),r=n("e330"),a=n("94ca"),s=n("6eeb"),l=n("f183"),c=n("2266"),u=n("19aa"),f=n("1626"),d=n("861d"),g=n("d039"),h=n("1c7e"),v=n("d44e"),p=n("7156");t.exports=function(t,e,n){var b=-1!==t.indexOf("Map"),y=-1!==t.indexOf("Weak"),x=b?"set":"add",m=i[t],C=m&&m.prototype,w=m,E={},k=function(t){var e=r(C[t]);s(C,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(y&&!d(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return y&&!d(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!d(t))&&e(this,0===t?0:t)}:function(t,n){return e(this,0===t?0:t,n),this})},P=a(t,!f(m)||!(y||C.forEach&&!g((function(){(new m).entries().next()}))));if(P)w=n.getConstructor(e,t,b,x),l.enable();else if(a(t,!0)){var _=new w,T=_[x](y?{}:-0,1)!=_,O=g((function(){_.has(1)})),j=h((function(t){new m(t)})),z=!y&&g((function(){var t=new m,e=5;while(e--)t[x](e,e);return!t.has(-0)}));j||(w=e((function(t,e){u(t,C);var n=p(new m,t,w);return void 0!=e&&c(e,n[x],{that:n,AS_ENTRIES:b}),n})),w.prototype=C,C.constructor=w),(O||z)&&(k("delete"),k("has"),b&&k("get")),(z||T)&&k(x),y&&C.clear&&delete C.clear}return E[t]=w,o({global:!0,forced:w!=m},E),v(w,t),y||n.setStrong(w,t,b),w}},7156:function(t,e,n){var o=n("1626"),i=n("861d"),r=n("d2bb");t.exports=function(t,e,n){var a,s;return r&&o(a=e.constructor)&&a!==n&&i(s=a.prototype)&&s!==n.prototype&&r(t,s),t}},a907:function(t,e,n){},b899:function(t,e,n){"use strict";var o=n("a907"),i=n.n(o);i.a},bb2f:function(t,e,n){var o=n("d039");t.exports=!o((function(){return Object.isExtensible(Object.preventExtensions({}))}))},d86b:function(t,e,n){var o=n("d039");t.exports=o((function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}}))},f183:function(t,e,n){var o=n("23e7"),i=n("e330"),r=n("d012"),a=n("861d"),s=n("1a2d"),l=n("9bf2").f,c=n("241c"),u=n("057f"),f=n("4fad"),d=n("90e3"),g=n("bb2f"),h=!1,v=d("meta"),p=0,b=function(t){l(t,v,{value:{objectID:"O"+p++,weakData:{}}})},y=function(t,e){if(!a(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!s(t,v)){if(!f(t))return"F";if(!e)return"E";b(t)}return t[v].objectID},x=function(t,e){if(!s(t,v)){if(!f(t))return!0;if(!e)return!1;b(t)}return t[v].weakData},m=function(t){return g&&h&&f(t)&&!s(t,v)&&b(t),t},C=function(){w.enable=function(){},h=!0;var t=c.f,e=i([].splice),n={};n[v]=1,t(n).length&&(c.f=function(n){for(var o=t(n),i=0,r=o.length;i<r;i++)if(o[i]===v){e(o,i,1);break}return o},o({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:u.f}))},w=t.exports={enable:C,fastKey:y,getWeakData:x,onFreeze:m};r[v]=!0}}]);
//# sourceMappingURL=chunk-2ce34b22.55a7c3e1.js.map