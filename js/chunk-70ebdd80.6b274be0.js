(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70ebdd80"],{"057f":function(t,e,s){var n=s("c6b6"),o=s("fc6a"),i=s("241c").f,r=s("4dae"),l="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return r(l)}};t.exports.f=function(t){return l&&"Window"==n(t)?a(t):i(o(t))}},"0b42":function(t,e,s){var n=s("da84"),o=s("e8b5"),i=s("68ee"),r=s("861d"),l=s("b622"),a=l("species"),c=n.Array;t.exports=function(t){var e;return o(t)&&(e=t.constructor,i(e)&&(e===c||o(e.prototype))?e=void 0:r(e)&&(e=e[a],null===e&&(e=void 0))),void 0===e?c:e}},"159b":function(t,e,s){var n=s("da84"),o=s("fdbc"),i=s("785a"),r=s("17c2"),l=s("9112"),a=function(t){if(t&&t.forEach!==r)try{l(t,"forEach",r)}catch(e){t.forEach=r}};for(var c in o)o[c]&&a(n[c]&&n[c].prototype);a(i)},"17c2":function(t,e,s){"use strict";var n=s("b727").forEach,o=s("a640"),i=o("forEach");t.exports=i?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,s){var n=s("d039"),o=s("b622"),i=s("2d00"),r=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[],s=e.constructor={};return s[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3ca3":function(t,e,s){"use strict";var n=s("6547").charAt,o=s("577e"),i=s("69f3"),r=s("7dd0"),l="String Iterator",a=i.set,c=i.getterFor(l);r(String,"String",(function(t){a(this,{type:l,string:o(t),index:0})}),(function(){var t,e=c(this),s=e.string,o=e.index;return o>=s.length?{value:void 0,done:!0}:(t=n(s,o),e.index+=t.length,{value:t,done:!1})}))},4160:function(t,e,s){"use strict";var n=s("23e7"),o=s("17c2");n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"4dae":function(t,e,s){var n=s("da84"),o=s("23cb"),i=s("07fa"),r=s("8418"),l=n.Array,a=Math.max;t.exports=function(t,e,s){for(var n=i(t),c=o(e,n),u=o(void 0===s?n:s,n),h=l(a(u-c,0)),f=0;c<u;c++,f++)r(h,f,t[c]);return h.length=f,h}},"4fad":function(t,e,s){var n=s("d039"),o=s("861d"),i=s("c6b6"),r=s("d86b"),l=Object.isExtensible,a=n((function(){l(1)}));t.exports=a||r?function(t){return!!o(t)&&((!r||"ArrayBuffer"!=i(t))&&(!l||l(t)))}:l},"5ebe":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:""}},[s("h2",[t._v("The “Monster” Diagram of modular times tables")]),s("v-row",[s("v-col",{attrs:{cols:"12",lg:"4"}},[s("p",[s("v-btn",{attrs:{href:"https://github.com/teonistor/kata/tree/modular-times-table",target:"_blank"}},[t._v("Source code")]),t._v("   "),s("v-btn",{attrs:{href:"https://www.youtube.com/watch?v=6ZrO90AI0c8",target:"_blank"}},[t._v("Source of inspiration")])],1),s("hr"),s("v-slider",{attrs:{min:100,max:1500,label:"Picture size"},scopedSlots:t._u([{key:"append",fn:function(){return[s("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{min:100,type:"number"},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}})]},proxy:!0}]),model:{value:t.size,callback:function(e){t.size=e},expression:"size"}}),s("v-slider",{attrs:{min:1,max:Math.max(255,1.1*t.n),label:"modulus"},scopedSlots:t._u([{key:"append",fn:function(){return[s("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{min:1,type:"number"},model:{value:t.n,callback:function(e){t.n=e},expression:"n"}})]},proxy:!0}]),model:{value:t.n,callback:function(e){t.n=e},expression:"n"}}),s("v-slider",{attrs:{min:2,max:Math.max(255,1.1*t.m),label:"multiplier"},scopedSlots:t._u([{key:"append",fn:function(){return[s("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{min:2,type:"number"},model:{value:t.m,callback:function(e){t.m=e},expression:"m"}})]},proxy:!0}]),model:{value:t.m,callback:function(e){t.m=e},expression:"m"}}),s("hr"),s("v-switch",{staticStyle:{display:"inline-block"},attrs:{label:"Show outer circle"},model:{value:t.showCircle,callback:function(e){t.showCircle=e},expression:"showCircle"}}),t._v("  "),s("v-switch",{staticStyle:{display:"inline-block"},attrs:{label:"Show outer points"},model:{value:t.showPoints,callback:function(e){t.showPoints=e},expression:"showPoints"}}),t._v("  "),s("v-switch",{staticStyle:{display:"inline-block"},attrs:{label:"Show arrows"},model:{value:t.showArrows,callback:function(e){t.showArrows=e},expression:"showArrows"}}),s("hr"),t._v(" Show segment length in color as:  "),s("v-switch",{staticStyle:{display:"inline-block"},attrs:{label:"Hue"},model:{value:t.lengthAsHue,callback:function(e){t.lengthAsHue=e},expression:"lengthAsHue"}}),t._v("  "),s("v-switch",{staticStyle:{display:"inline-block"},attrs:{label:"Lightness",color:"white"},model:{value:t.lengthAsLightness,callback:function(e){t.lengthAsLightness=e},expression:"lengthAsLightness"}}),t._v("  "),s("v-switch",{staticStyle:{display:"inline-block"},attrs:{label:"R",color:"red"},model:{value:t.lengthAsR,callback:function(e){t.lengthAsR=e},expression:"lengthAsR"}}),t._v("  "),s("v-switch",{staticStyle:{display:"inline-block"},attrs:{label:"G",color:"green"},model:{value:t.lengthAsG,callback:function(e){t.lengthAsG=e},expression:"lengthAsG"}}),t._v("  "),s("v-switch",{staticStyle:{display:"inline-block"},attrs:{label:"B",color:"blue"},model:{value:t.lengthAsB,callback:function(e){t.lengthAsB=e},expression:"lengthAsB"}}),s("br"),t._v(" Show different loops in color as:  "),s("v-switch",{staticStyle:{display:"inline-block"},attrs:{label:"Hue"},model:{value:t.loopsAsHue,callback:function(e){t.loopsAsHue=e},expression:"loopsAsHue"}}),t._v("  "),s("v-switch",{staticStyle:{display:"inline-block"},attrs:{label:"Lightness",color:"white"},model:{value:t.loopsAsLightness,callback:function(e){t.loopsAsLightness=e},expression:"loopsAsLightness"}}),t._v("  "),s("v-switch",{staticStyle:{display:"inline-block"},attrs:{label:"R",color:"red"},model:{value:t.loopsAsR,callback:function(e){t.loopsAsR=e},expression:"loopsAsR"}}),t._v("  "),s("v-switch",{staticStyle:{display:"inline-block"},attrs:{label:"G",color:"green"},model:{value:t.loopsAsG,callback:function(e){t.loopsAsG=e},expression:"loopsAsG"}}),t._v("  "),s("v-switch",{staticStyle:{display:"inline-block"},attrs:{label:"B",color:"blue"},model:{value:t.loopsAsB,callback:function(e){t.loopsAsB=e},expression:"loopsAsB"}}),s("br"),s("small",[t._v("(You can use either HSL or RGB at a time, and you can only use one component to mean one thing)")]),s("hr")],1),s("v-col",{attrs:{cols:"12",lg:"8"}},[s("svg",{attrs:{width:2*t.size+4,height:2*t.size+4,viewBox:"-"+(t.size+2)+" -"+(t.size+2)+" "+(2*t.size+4)+" "+(2*t.size+4)}},[t._l(t.lines,(function(e){return s("g",{directives:[{name:"let",rawName:"v-let",value:t.color=t.computeColor(e),expression:"color = computeColor(line)"}]},[s("line",{style:{stroke:t.color,"stroke-width":"1"},attrs:{x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2}}),t.showArrows?s("polygon",{style:{fill:t.color,stroke:"none"},attrs:{points:t.computeArrow(e)}}):t._e()])})),t.showCircle?s("circle",{attrs:{cx:"0",cy:"0",stroke:"rgb(180,180,180)",fill:"none","stroke-width":"0.5",r:t.size}}):t._e(),t._l(t.points,(function(e){return t.showPoints?s("circle",{attrs:{cx:e.x,cy:e.y,stroke:"none",fill:"rgb(210,210,210)",r:"2"}}):t._e()}))],2)])],1)],1)},o=[],i=(s("4160"),s("d81d"),s("d3b7"),s("6062"),s("3ca3"),s("159b"),s("ddb0"),{data:function(){return{size:300,n:9,m:2,showCircle:!0,showPoints:!0,showArrows:!1,lengthAsHue:!1,lengthAsLightness:!0,lengthAsR:!1,lengthAsG:!1,lengthAsB:!1,loopsAsHue:!0,loopsAsLightness:!1,loopsAsR:!1,loopsAsG:!1,loopsAsB:!1}},computed:{points:function(){for(var t=[],e=0;e<this.n;e++){var s=2*Math.PI*e/this.n;t.push({x:-Math.sin(s)*this.size,y:-Math.cos(s)*this.size})}return t},pairs:function(){for(var t=[],e=0;e<this.n;e++)t[e]=e*this.m%this.n;return t},loopMins:function(){var t=this,e=new Set(this.pairs),s=[],n=function(){var n=e.entries().next().value[0],o=n,i=new Set([n]);e.delete(n);while(!i.has(t.pairs[n]))n=t.pairs[n],o=Math.min(o,n),i.add(n),e.delete(n);i.forEach((function(t){return s[t]=o}))};while(e.size>0)n();return s},loopColors:function(){var t=new Set(this.loopMins),e=[];return t.forEach((function(s,n){return e[s]=n/t.size})),e},lines:function(){var t=this;return this.pairs.map((function(e,s){return{x1:t.points[s].x,x2:t.points[e].x,y1:t.points[s].y,y2:t.points[e].y,to:e}}))}},methods:{computeColor:function(t){if(this.lengthAsHue||this.lengthAsLightness||this.loopsAsHue||this.loopsAsLightness){var e=this.lengthAsHue&&Math.round(180*this.computeLength(t)/this.size)||this.loopsAsHue&&Math.round(360*this.loopColors[this.loopMins[t.to]])||25,s=this.lengthAsLightness&&10+Math.round(40*this.computeLength(t)/this.size)||this.loopsAsLightness&&10+Math.round(80*this.loopColors[this.loopMins[t.to]])||50;return"hsl("+e+",80%,"+s+"%)"}if(this.lengthAsR||this.lengthAsG||this.lengthAsB||this.loopsAsR||this.loopsAsG||this.loopsAsB){var n=this.lengthAsR&&Math.round(127.5*this.computeLength(t)/this.size)||this.loopsAsR&&Math.round(255*this.loopColors[this.loopMins[t.to]])||127,o=this.lengthAsG&&Math.round(127.5*this.computeLength(t)/this.size)||this.loopsAsG&&Math.round(255*this.loopColors[this.loopMins[t.to]])||127,i=this.lengthAsB&&Math.round(127.5*this.computeLength(t)/this.size)||this.loopsAsB&&Math.round(255*this.loopColors[this.loopMins[t.to]])||127;return"rgb("+n+","+o+","+i+")"}return"rgb(127, 127, 127)"},computeLength:function(t){var e=t.x1-t.x2,s=t.y1-t.y2;return Math.sqrt(e*e+s*s)},computeArrow:function(t){var e=this.size*this.size/6400,s=(t.x1+t.x2)/2,n=(t.y1+t.y2)/2,o=t.x2-t.x1,i=t.y2-t.y1,r=Math.sqrt(e/(o*o+i*i));return o*=r,i*=r,s+2*o+","+(n+2*i)+" "+(s+i)+","+(n-o)+" "+(s-i)+","+(n+o)}},watch:{lengthAsHue:function(t){t&&(this.loopsAsHue=!1,this.loopsAsR=!1,this.loopsAsG=!1,this.loopsAsB=!1,this.lengthAsR=!1,this.lengthAsG=!1,this.lengthAsB=!1)},lengthAsLightness:function(t){t&&(this.loopsAsLightness=!1,this.loopsAsR=!1,this.loopsAsG=!1,this.loopsAsB=!1,this.lengthAsR=!1,this.lengthAsG=!1,this.lengthAsB=!1)},lengthAsR:function(t){t&&(this.loopsAsR=!1,this.lengthAsHue=!1,this.lengthAsLightness=!1,this.loopsAsHue=!1,this.loopsAsLightness=!1)},lengthAsG:function(t){t&&(this.loopsAsG=!1,this.lengthAsHue=!1,this.lengthAsLightness=!1,this.loopsAsHue=!1,this.loopsAsLightness=!1)},lengthAsB:function(t){t&&(this.loopsAsB=!1,this.lengthAsHue=!1,this.lengthAsLightness=!1,this.loopsAsHue=!1,this.loopsAsLightness=!1)},loopsAsHue:function(t){t&&(this.lengthAsHue=!1,this.loopsAsR=!1,this.loopsAsG=!1,this.loopsAsB=!1,this.lengthAsR=!1,this.lengthAsG=!1,this.lengthAsB=!1)},loopsAsLightness:function(t){t&&(this.lengthAsLightness=!1,this.loopsAsR=!1,this.loopsAsG=!1,this.loopsAsB=!1,this.lengthAsR=!1,this.lengthAsG=!1,this.lengthAsB=!1)},loopsAsR:function(t){t&&(this.lengthAsR=!1,this.lengthAsHue=!1,this.lengthAsLightness=!1,this.loopsAsHue=!1,this.loopsAsLightness=!1)},loopsAsG:function(t){t&&(this.lengthAsG=!1,this.lengthAsHue=!1,this.lengthAsLightness=!1,this.loopsAsHue=!1,this.loopsAsLightness=!1)},loopsAsB:function(t){t&&(this.lengthAsB=!1,this.lengthAsHue=!1,this.lengthAsLightness=!1,this.loopsAsHue=!1,this.loopsAsLightness=!1)}}}),r=i,l=s("2877"),a=Object(l["a"])(r,n,o,!1,null,null,null);e["default"]=a.exports},6062:function(t,e,s){"use strict";var n=s("6d61"),o=s("6566");n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},6547:function(t,e,s){var n=s("e330"),o=s("5926"),i=s("577e"),r=s("1d80"),l=n("".charAt),a=n("".charCodeAt),c=n("".slice),u=function(t){return function(e,s){var n,u,h=i(r(e)),f=o(s),p=h.length;return f<0||f>=p?t?"":void 0:(n=a(h,f),n<55296||n>56319||f+1===p||(u=a(h,f+1))<56320||u>57343?t?l(h,f):n:t?c(h,f,f+2):u-56320+(n-55296<<10)+65536)}};t.exports={codeAt:u(!1),charAt:u(!0)}},6566:function(t,e,s){"use strict";var n=s("9bf2").f,o=s("7c73"),i=s("e2cc"),r=s("0366"),l=s("19aa"),a=s("2266"),c=s("7dd0"),u=s("2626"),h=s("83ab"),f=s("f183").fastKey,p=s("69f3"),d=p.set,v=p.getterFor;t.exports={getConstructor:function(t,e,s,c){var u=t((function(t,n){l(t,p),d(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),h||(t.size=0),void 0!=n&&a(n,t[c],{that:t,AS_ENTRIES:s})})),p=u.prototype,g=v(e),A=function(t,e,s){var n,o,i=g(t),r=b(t,e);return r?r.value=s:(i.last=r={index:o=f(e,!0),key:e,value:s,previous:n=i.last,next:void 0,removed:!1},i.first||(i.first=r),n&&(n.next=r),h?i.size++:t.size++,"F"!==o&&(i.index[o]=r)),t},b=function(t,e){var s,n=g(t),o=f(e);if("F"!==o)return n.index[o];for(s=n.first;s;s=s.next)if(s.key==e)return s};return i(p,{clear:function(){var t=this,e=g(t),s=e.index,n=e.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete s[n.index],n=n.next;e.first=e.last=void 0,h?e.size=0:t.size=0},delete:function(t){var e=this,s=g(e),n=b(e,t);if(n){var o=n.next,i=n.previous;delete s.index[n.index],n.removed=!0,i&&(i.next=o),o&&(o.previous=i),s.first==n&&(s.first=o),s.last==n&&(s.last=i),h?s.size--:e.size--}return!!n},forEach:function(t){var e,s=g(this),n=r(t,arguments.length>1?arguments[1]:void 0);while(e=e?e.next:s.first){n(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),i(p,s?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return A(this,0===t?0:t,e)}}:{add:function(t){return A(this,t=0===t?0:t,t)}}),h&&n(p,"size",{get:function(){return g(this).size}}),u},setStrong:function(t,e,s){var n=e+" Iterator",o=v(e),i=v(n);c(t,e,(function(t,e){d(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){var t=i(this),e=t.kind,s=t.last;while(s&&s.removed)s=s.previous;return t.target&&(t.last=s=s?s.next:t.state.first)?"keys"==e?{value:s.key,done:!1}:"values"==e?{value:s.value,done:!1}:{value:[s.key,s.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),s?"entries":"values",!s,!0),u(e)}}},"65f0":function(t,e,s){var n=s("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},"6d61":function(t,e,s){"use strict";var n=s("23e7"),o=s("da84"),i=s("e330"),r=s("94ca"),l=s("6eeb"),a=s("f183"),c=s("2266"),u=s("19aa"),h=s("1626"),f=s("861d"),p=s("d039"),d=s("1c7e"),v=s("d44e"),g=s("7156");t.exports=function(t,e,s){var A=-1!==t.indexOf("Map"),b=-1!==t.indexOf("Weak"),y=A?"set":"add",x=o[t],m=x&&x.prototype,w=x,L={},k=function(t){var e=i(m[t]);l(m,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(b&&!f(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return b&&!f(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(b&&!f(t))&&e(this,0===t?0:t)}:function(t,s){return e(this,0===t?0:t,s),this})},S=r(t,!h(x)||!(b||m.forEach&&!p((function(){(new x).entries().next()}))));if(S)w=s.getConstructor(e,t,A,y),a.enable();else if(r(t,!0)){var M=new w,z=M[y](b?{}:-0,1)!=M,H=p((function(){M.has(1)})),R=d((function(t){new x(t)})),B=!b&&p((function(){var t=new x,e=5;while(e--)t[y](e,e);return!t.has(-0)}));R||(w=e((function(t,e){u(t,m);var s=g(new x,t,w);return void 0!=e&&c(e,s[y],{that:s,AS_ENTRIES:A}),s})),w.prototype=m,m.constructor=w),(H||B)&&(k("delete"),k("has"),A&&k("get")),(B||z)&&k(y),b&&m.clear&&delete m.clear}return L[t]=w,n({global:!0,forced:w!=x},L),v(w,t),b||s.setStrong(w,t,A),w}},7156:function(t,e,s){var n=s("1626"),o=s("861d"),i=s("d2bb");t.exports=function(t,e,s){var r,l;return i&&n(r=e.constructor)&&r!==s&&o(l=r.prototype)&&l!==s.prototype&&i(t,l),t}},"785a":function(t,e,s){var n=s("cc12"),o=n("span").classList,i=o&&o.constructor&&o.constructor.prototype;t.exports=i===Object.prototype?void 0:i},8418:function(t,e,s){"use strict";var n=s("a04b"),o=s("9bf2"),i=s("5c6c");t.exports=function(t,e,s){var r=n(e);r in t?o.f(t,r,i(0,s)):t[r]=s}},a640:function(t,e,s){"use strict";var n=s("d039");t.exports=function(t,e){var s=[][t];return!!s&&n((function(){s.call(null,e||function(){throw 1},1)}))}},b727:function(t,e,s){var n=s("0366"),o=s("e330"),i=s("44ad"),r=s("7b0b"),l=s("07fa"),a=s("65f0"),c=o([].push),u=function(t){var e=1==t,s=2==t,o=3==t,u=4==t,h=6==t,f=7==t,p=5==t||h;return function(d,v,g,A){for(var b,y,x=r(d),m=i(x),w=n(v,g),L=l(m),k=0,S=A||a,M=e?S(d,L):s||f?S(d,0):void 0;L>k;k++)if((p||k in m)&&(b=m[k],y=w(b,k,x),t))if(e)M[k]=y;else if(y)switch(t){case 3:return!0;case 5:return b;case 6:return k;case 2:c(M,b)}else switch(t){case 4:return!1;case 7:c(M,b)}return h?-1:o||u?u:M}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},bb2f:function(t,e,s){var n=s("d039");t.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},d81d:function(t,e,s){"use strict";var n=s("23e7"),o=s("b727").map,i=s("1dde"),r=i("map");n({target:"Array",proto:!0,forced:!r},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},d86b:function(t,e,s){var n=s("d039");t.exports=n((function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}}))},ddb0:function(t,e,s){var n=s("da84"),o=s("fdbc"),i=s("785a"),r=s("e260"),l=s("9112"),a=s("b622"),c=a("iterator"),u=a("toStringTag"),h=r.values,f=function(t,e){if(t){if(t[c]!==h)try{l(t,c,h)}catch(n){t[c]=h}if(t[u]||l(t,u,e),o[e])for(var s in r)if(t[s]!==r[s])try{l(t,s,r[s])}catch(n){t[s]=r[s]}}};for(var p in o)f(n[p]&&n[p].prototype,p);f(i,"DOMTokenList")},e8b5:function(t,e,s){var n=s("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},f183:function(t,e,s){var n=s("23e7"),o=s("e330"),i=s("d012"),r=s("861d"),l=s("1a2d"),a=s("9bf2").f,c=s("241c"),u=s("057f"),h=s("4fad"),f=s("90e3"),p=s("bb2f"),d=!1,v=f("meta"),g=0,A=function(t){a(t,v,{value:{objectID:"O"+g++,weakData:{}}})},b=function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!l(t,v)){if(!h(t))return"F";if(!e)return"E";A(t)}return t[v].objectID},y=function(t,e){if(!l(t,v)){if(!h(t))return!0;if(!e)return!1;A(t)}return t[v].weakData},x=function(t){return p&&d&&h(t)&&!l(t,v)&&A(t),t},m=function(){w.enable=function(){},d=!0;var t=c.f,e=o([].splice),s={};s[v]=1,t(s).length&&(c.f=function(s){for(var n=t(s),o=0,i=n.length;o<i;o++)if(n[o]===v){e(n,o,1);break}return n},n({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:u.f}))},w=t.exports={enable:m,fastKey:b,getWeakData:y,onFreeze:x};i[v]=!0},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-70ebdd80.6b274be0.js.map