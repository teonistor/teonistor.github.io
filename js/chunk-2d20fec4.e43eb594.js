(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20fec4"],{b660:function(t,n,o){"use strict";o.r(n);var r=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("h3",[t._v("Out-of-Context Hillwalkers' Quotes")]),o("P",[t._v(" A pseudo-random collection of the funniest and most accidentally spoken words and adages by our club members are here for your enjoyment: ")]),o("v-card",[this.loadError?o("v-card-text",{staticStyle:{color:"red"}},[t._v(" Error! ")]):t.quoteVisible?o("v-card-text",{staticStyle:{"min-height":"250px"}},t._l(this.quotes[this.current],(function(n){return o("span",[t._v(t._s(n)),o("br")])})),0):t._e(),o("v-card-actions",[o("v-btn",{attrs:{disabled:this.loadError,loading:this.loading},on:{click:function(n){return t.nextQuote()}}},[t._v(" "+t._s(t.buttonText)+" ")])],1)],1)],1)},e=[],a=o("bc3a"),u=o.n(a);function i(t,n,o){var r=t[n];t[n]=t[o],t[o]=r}function s(t){for(var n=0;n<t.length;n++)for(var o=0;o<t[n].length;o++)i(t[n],Math.floor(Math.random()*t[n].length),Math.floor(Math.random()*t[n].length))}function l(t,n){for(var o=t.length-1;o>=0;o--)for(var r=0;r<t[o].length;r++)n.push(t[o][r])}function c(){this.current=(this.current+1)%this.quotes.length,this.blankOrMore=" more"}var d={name:"SUHC_Quotes",data:function(){return{loading:!0,loadError:!1,blankOrMore:"",current:-1,quotes:[],nextQuote:c}},computed:{quoteVisible:function(){return this.current>=0},buttonText:function(){return this.quoteVisible?"More":"Show me!"}},mounted:function(){var t=this;u()({method:"GET",url:this.$dataUrl+"/suhc/quotes.json"}).then((function(n){s(n.data),l(n.data,t.quotes),t.loading=!1}),(function(n){console.error(n),t.loading=!1,t.loadError=!0}))}},h=d,f=o("2877"),v=Object(f["a"])(h,r,e,!1,null,null,null);n["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d20fec4.e43eb594.js.map