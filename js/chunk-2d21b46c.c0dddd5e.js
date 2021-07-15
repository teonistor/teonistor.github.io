(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21b46c"],{bea4:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h3",[t._v("SUHC Captain's Log")]),this.loadState?t._e():e("P",{staticStyle:{"text-align":"justify"}},[t._v(" I held the position of Day Walk Secretary of SUHC roughly between March 2017 and May 2018. The idea of keeping a (sometimes unnecessarily detailed) log of our events occurred to me before that and will last until long after, as far as I can attend; of course, said attendance decreased drastically after leaving uni. Here goes:")]),this.loadState?e("P",{staticStyle:{"text-align":"center"}},[t._v(" "+t._s(this.loadState))]):t._e(),t._l(t.walks,(function(a,n){return e("SUHCLogEntry",{attrs:{walk:a,index:t.walks.length-n}})}))],2)},s=[],i=e("bc3a"),l=e.n(i),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{staticStyle:{margin:"0 0 10px 0","border-radius":"1em"},attrs:{outlined:""}},[e("v-card-title",[t._v(t._s(this.name))]),e("v-card-subtitle",[t._v(t._s(this.walk.date))]),e("v-expansion-panels",{attrs:{disabled:!this.expandable}},[e("v-expansion-panel",{key:this.index,style:{background:this.expandable?"rgba(255,255,255,0.075)":null,"border-radius":"0 0 1em 1em"},attrs:{hover:"",focusable:"",inset:""}},[e("v-expansion-panel-header",{staticStyle:{"line-height":"1.25"}},[t._v(" "+t._s(this.fromTo)),e("br"),t._v(" "+t._s(this.headCount)),e("br"),t._v(" "+t._s(this.km)+" ")]),e("v-expansion-panel-content",[e("table",t._l(this.walk.checkpoints,(function(a){return e("tr",[e("td",{staticClass:"suhclogtime"},[t._v(t._s(a.time))]),e("td",[t._v(t._s(a.event))])])})),0),t._l(this.walk.accounts,(function(a){return e("p",[e("i",[e("br"),t._v(t._s(a.who)+" says... "),e("br")]),t._v(t._s(a.what))])}))],2)],1)],1)],1)},r=[],h=(e("b0c0"),{name:"SUHCLogEntry",props:["walk","index"],data:function(){return{name:"",fromTo:"",headCount:"",km:""}},computed:{expandable:function(){return this.walk.checkpoints||this.walk.accounts}},mounted:function(){this.walk.name?(this.name=this.walk.name,this.walk.start&&this.walk.finish&&(this.walk.start===this.walk.finish?this.fromTo="Around "+this.walk.start:this.fromTo="From "+this.walk.start+" to "+this.walk.finish)):this.walk.start===this.walk.finish?this.name="Day walk around "+this.walk.start:this.name="Day walk from "+this.walk.start+" to "+this.walk.finish,this.walk.headCount&&(this.headCount=this.walk.headCount+" attended",this.walk.committeeCount&&(this.headCount+=" ("+this.walk.committeeCount+" committee)")),this.walk.km&&(this.km="Effective walk length: "+this.walk.km+" km")}}),c=h,d=e("2877"),u=Object(d["a"])(c,o,r,!1,null,null,null),k=u.exports,w={name:"SUHC_Log",components:{SUHCLogEntry:k},data:function(){return{loadState:"Loading...",walks:[]}},mounted:function(){var t=this;l()({method:"GET",url:this.$dataUrl+"/suhc/log.json"}).then((function(a){t.walks=a.data,t.loadState=""}),(function(a){console.error(a),t.loadState="Error!"}))}},m=w,f=Object(d["a"])(m,n,s,!1,null,null,null);a["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d21b46c.c0dddd5e.js.map