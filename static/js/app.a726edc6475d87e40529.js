webpackJsonp([1],{"4gKV":function(e,a){},NHnr:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t("7+uW"),n=t("Xxa5"),s=t.n(n),c=t("exGp"),i=t.n(c),o={name:"Exchange",data:function(){return{exchanges:ccxt.exchanges,exchangeSearch:""}},methods:{findPair:function(e){var a=this;i()(s.a.mark(function t(){var r;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return(r=new ccxt[e]).enableRateLimit=!0,a.prev=2,a.next=5,r.loadMarkets();case 5:g.$emit("exchangeChosen",r),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(2),g.$emit("exchangeChosenErr","Failed to fetch the exchange info, please try another one.");case 11:case"end":return a.stop()}},t,a,[[2,8]])}))()}}},l={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"height100"},[t("div",{staticClass:"header-container"},[t("h2",{staticClass:"text-center"},[e._v("Exchange")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.exchangeSearch,expression:"exchangeSearch"}],attrs:{type:"text",placeholder:"Type an exchange name"},domProps:{value:e.exchangeSearch},on:{input:function(a){a.target.composing||(e.exchangeSearch=a.target.value)}}})]),e._v(" "),t("div",{staticClass:"items-container"},[t("ul",e._l(e.exchanges,function(a){return t("li",{directives:[{name:"show",rawName:"v-show",value:-1!=a.toLowerCase().indexOf(e.exchangeSearch.toLowerCase()),expression:"exchange.toLowerCase().indexOf(exchangeSearch.toLowerCase())!=-1"}],on:{click:function(t){e.findPair(a)}}},[e._v(e._s(a))])}))])])},staticRenderFns:[]};var h={name:"Pair",data:function(){return{errMsg:"",currExchange:{},pairSearch:""}},methods:{findTrades:function(e,a){g.$emit("PairChosen",e,a)}},created:function(){var e=this;g.$on("exchangeChosen",function(a){e.currExchange=a,e.errMsg=""}),g.$on("exchangeChosenErr",function(a){e.errMsg=a,e.currExchange={}})}},d={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"height100"},[t("div",{staticClass:"header-container"},[t("h2",{staticClass:"text-center"},[e._v("Pair "),t("small",[e._v("for: "+e._s(e.currExchange.id))])]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.pairSearch,expression:"pairSearch"}],attrs:{type:"text",placeholder:"Type an exchange name"},domProps:{value:e.pairSearch},on:{input:function(a){a.target.composing||(e.pairSearch=a.target.value)}}})]),e._v(" "),t("div",{staticClass:"items-container"},[t("h4",{directives:[{name:"show",rawName:"v-show",value:!e.currExchange.symbols&&!e.errMsg,expression:"!currExchange.symbols && !errMsg"}],staticClass:"text-center"},[e._v("Chose an exchange")]),e._v(" "),t("h4",{directives:[{name:"show",rawName:"v-show",value:e.errMsg,expression:"errMsg"}],staticClass:"text-center"},[e._v(e._s(e.errMsg))]),e._v(" "),t("ul",e._l(e.currExchange.symbols,function(a){return t("li",{directives:[{name:"show",rawName:"v-show",value:-1!=a.toLowerCase().indexOf(e.pairSearch.toLowerCase()),expression:"pair.toLowerCase().indexOf(pairSearch.toLowerCase())!=-1"}],on:{click:function(t){e.findTrades(e.currExchange,a)}}},[e._v(e._s(a))])}))])])},staticRenderFns:[]};var v={name:"Trades",data:function(){return{dateNow:new Date,errMsg:"",exchange:{},pair:"",allTrades:[],limit:20,fetchTradesInterval:void 0}},created:function(){var e=this;g.$on("PairChosen",function(a,t){e.allTrades=[],e.errMsg="",e.exchange=a,e.pair=t;e.fetchTradesInterval&&clearInterval(e.fetchTradesInterval),e.fetchTradesInterval=setInterval(i()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.exchange.has.fetchTrades){t.next=14;break}return t.prev=1,t.next=4,a.fetchTrades(e.pair,void 0,e.limit);case 4:e.allTrades=t.sent,0==e.allTrades.length?e.errMsg="There is no data available.":e.allTrades.reverse(),e.dateNow=new Date,t.next=14;break;case 9:t.prev=9,t.t0=t.catch(1),e.errMsg="Failed to fetch the trades info, please try another pair or exchange.",e.allTrades=[],e.fetchTradesInterval&&clearInterval(e.fetchTradesInterval);case 14:case"end":return t.stop()}},t,e,[[1,9]])})),2e3)}),g.$on("exchangeChosenErr",function(a){e.exchange={},e.pair="",e.allTrades=[],e.errMsg="",e.fetchTradesInterval&&clearInterval(e.fetchTradesInterval)})}},u={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"height100"},[t("div",{staticClass:"header-container"},[t("h2",{staticClass:"text-center"},[e._v("Trades "),t("small",[t("sup",[e._v("live")]),e._v(" : "+e._s(e.exchange.id)+" ( "+e._s(e.pair)+" )")])]),e._v(" "),t("p",{staticClass:"text-center"},[e._v("Last update: "+e._s(e.dateNow.getUTCHours())+" : "+e._s(e.dateNow.getUTCMinutes())+" : "+e._s(e.dateNow.getUTCSeconds())+" (UTC)")])]),e._v(" "),t("div",{staticClass:"items-container"},[t("h4",{directives:[{name:"show",rawName:"v-show",value:e.errMsg,expression:"errMsg"}]},[e._v(e._s(e.errMsg))]),e._v(" "),t("table",{directives:[{name:"show",rawName:"v-show",value:!e.errMsg,expression:"!errMsg"}],staticClass:"table table-borderless text-center"},[t("thead",[t("tr",[e._m(0),e._v(" "),t("th",[t("h4",[e._v("Price("+e._s(e.pair.slice(e.pair.indexOf("/")+1))+"):")])]),e._v(" "),e._m(1)])]),e._v(" "),t("tbody",e._l(e.allTrades,function(a){return t("tr",[t("td",[e._v(e._s(a.amount))]),e._v(" "),t("td",[e._v(e._s(a.price))]),e._v(" "),t("td",[e._v(e._s(a.datetime.slice(0,a.datetime.indexOf(".")).replace("T"," / ")))])])}))])])])},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("th",[a("h4",[this._v("Size:")])])},function(){var e=this.$createElement,a=this._self._c||e;return a("th",[a("h4",[this._v("Date / Time (UTC):")])])}]};var p={name:"App",components:{exchange:t("VU/8")(o,l,!1,function(e){t("4gKV")},"data-v-d325546a",null).exports,pair:t("VU/8")(h,d,!1,function(e){t("WnD0")},"data-v-d3d94abc",null).exports,trades:t("VU/8")(v,u,!1,function(e){t("eLON")},"data-v-6baf5510",null).exports}},f={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-3 main-col"},[a("exchange")],1),this._v(" "),a("div",{staticClass:"col-sm-3 main-col"},[a("pair")],1),this._v(" "),a("div",{staticClass:"col-sm-6 main-col"},[a("trades")],1)])])},staticRenderFns:[]};var x=t("VU/8")(p,f,!1,function(e){t("mite")},"data-v-51c986f8",null).exports;t.d(a,"bus",function(){return g}),r.a.config.productionTip=!1;var g=new r.a;new r.a({el:"#app",components:{App:x},template:"<App/>"})},WnD0:function(e,a){},eLON:function(e,a){},mite:function(e,a){}},["NHnr"]);
//# sourceMappingURL=app.a726edc6475d87e40529.js.map