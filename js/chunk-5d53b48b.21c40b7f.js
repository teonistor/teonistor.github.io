(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d53b48b"],{"25f0":function(t,n,e){"use strict";var r=e("6eeb"),o=e("825a"),s=e("d039"),a=e("ad6d"),i="toString",u=RegExp.prototype,l=u[i],c=s((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),f=l.name!=i;(c||f)&&r(RegExp.prototype,i,(function(){var t=o(this),n=String(t.source),e=t.flags,r=String(void 0===e&&t instanceof RegExp&&!("flags"in u)?a.call(t):e);return"/"+n+"/"+r}),{unsafe:!0})},"343b":function(t,n,e){"use strict";e("d3b7"),e("25f0");var r,o,s={name:"AxiosHelper",data:function(){return{alerts:[],restCallsGoing:0}},methods:{axiosHelper:function(t,n,e){var r=this;return e?(this.restCallsGoing++,n().then((function(t){return e(t.data)})).catch((function(n){var e="Error "+t;console.log(e,n);var o=n.response&&n.response.status&&" ("+n.response.status+")"||"",s=n.response&&n.response.data||n.toString();r.alerts.push({type:"warning",text:e+o+": "+s})})).then((function(){return r.restCallsGoing--}))):this.axiosHelper(t,n,(function(){}))}}},a=s,i=e("2877"),u=Object(i["a"])(a,r,o,!1,null,null,null);n["a"]=u.exports},"53c4":function(t,n,e){},ad6d:function(t,n,e){"use strict";var r=e("825a");t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},b660:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h3",[t._v("Out-of-Context Hillwalkers' Quotes")]),e("p",[t._v(" A pseudo-random collection of the funniest and most accidentally spoken words and adages by our club members are here for your enjoyment: ")]),e("Notifications",{attrs:{alerts:t.alerts}}),e("v-card",[t.quoteVisible?e("v-card-text",{staticStyle:{"min-height":"250px"}},t._l(this.quotes[this.current],(function(n){return e("span",[t._v(t._s(n)),e("br")])})),0):t._e(),e("v-card-actions",[e("v-btn",{attrs:{disabled:!t.quotes.length,loading:!!t.restCallsGoing},on:{click:function(n){return t.nextQuote()}}},[t._v(" "+t._s(t.buttonText)+" ")])],1)],1)],1)},o=[],s=e("bc3a"),a=e.n(s),i=e("343b"),u=e("e985");function l(t,n,e){var r=t[n];t[n]=t[e],t[e]=r}function c(t){for(var n=0;n<t.length;n++)for(var e=0;e<t[n].length;e++)l(t[n],Math.floor(Math.random()*t[n].length),Math.floor(Math.random()*t[n].length))}function f(t,n){for(var e=t.length-1;e>=0;e--)for(var r=0;r<t[e].length;r++)n.push(t[e][r])}function h(){this.current=(this.current+1)%this.quotes.length,this.blankOrMore=" more"}var d={name:"SUHC_Quotes",components:{Notifications:u["a"]},mixins:[i["a"]],data:function(){return{blankOrMore:"",current:-1,quotes:[],nextQuote:h}},computed:{quoteVisible:function(){return this.current>=0},buttonText:function(){return this.quoteVisible?"More":"Show me!"}},mounted:function(){var t=this;this.axiosHelper("retrieving quotes",(function(){return a.a.get(t.$dataUrl+"/suhc/quotes.json")}),(function(n){c(n),f(n,t.quotes)}))}},p=d,g=e("2877"),v=Object(g["a"])(p,r,o,!1,null,null,null);n["default"]=v.exports},cf45:function(t,n,e){"use strict";var r=e("53c4"),o=e.n(r);o.a},e985:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:{"alerts-outer-floating":t.floating}},t._l(t.alerts,(function(n,r){return e("v-alert",{key:n.text,attrs:{dismissible:"",elevation:"7",type:n.type},on:{input:function(n){return t.$delete(t.alerts,r)}}},[t._v(" "+t._s(n.text)+" ")])})),1)},o=[],s={name:"Notifications",props:["alerts","floating"]},a=s,i=(e("cf45"),e("2877")),u=Object(i["a"])(a,r,o,!1,null,null,null);n["a"]=u.exports}}]);
//# sourceMappingURL=chunk-5d53b48b.21c40b7f.js.map