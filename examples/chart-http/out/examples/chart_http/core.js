// Compiled by ClojureScript 0.0-2227
goog.provide('examples.chart_http.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('mrhyde.core');
goog.require('mrhyde.core');
cljs.core.enable_console_print_BANG_.call(null);
examples.chart_http.core.dimple = (function (){var ct = this;return (ct["dimple"]);
})();
mrhyde.core.bootstrap.call(null);
examples.chart_http.core.app_model = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"devices","devices",2573705295),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all","all",1014000915),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"chart","chart",1108527952),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",2205476365),null,new cljs.core.Keyword(null,"measurements","measurements",651661225),null], null)], null));
examples.chart_http.core.form_row = (function form_row(selection){return (function (the_item,owner){if(typeof examples.chart_http.core.t21064 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.chart_http.core.t21064 = (function (owner,the_item,selection,form_row,meta21065){
this.owner = owner;
this.the_item = the_item;
this.selection = selection;
this.form_row = form_row;
this.meta21065 = meta21065;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.chart_http.core.t21064.cljs$lang$type = true;
examples.chart_http.core.t21064.cljs$lang$ctorStr = "examples.chart-http.core/t21064";
examples.chart_http.core.t21064.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"examples.chart-http.core/t21064");
});
examples.chart_http.core.t21064.prototype.om$core$IRender$ = true;
examples.chart_http.core.t21064.prototype.om$core$IRender$render$arity$1 = (function (this__5089__auto__){var self__ = this;
var this__5089__auto____$1 = this;var map__21067 = self__.the_item;var map__21067__$1 = ((cljs.core.seq_QMARK_.call(null,map__21067))?cljs.core.apply.call(null,cljs.core.hash_map,map__21067):map__21067);var unit = cljs.core.get.call(null,map__21067__$1,new cljs.core.Keyword(null,"unit","unit",1017498870));var description = cljs.core.get.call(null,map__21067__$1,new cljs.core.Keyword(null,"description","description",3584325486));var type = cljs.core.get.call(null,map__21067__$1,new cljs.core.Keyword(null,"type","type",1017479852));var id = cljs.core.get.call(null,map__21067__$1,new cljs.core.Keyword(null,"id","id",1013907597));return React.DOM.tr(null,React.DOM.td(null,om.dom.input.call(null,{"onChange": ((function (map__21067,map__21067__$1,unit,description,type,id,this__5089__auto____$1){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.selection,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"type","type",1017479852),type], null));
});})(map__21067,map__21067__$1,unit,description,type,id,this__5089__auto____$1))
, "value": cljs.core.name, "name": "type", "type": "radio"})),React.DOM.td(null,id),React.DOM.td(null,type),React.DOM.td(null,description),React.DOM.td(null,unit));
});
examples.chart_http.core.t21064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21066){var self__ = this;
var _21066__$1 = this;return self__.meta21065;
});
examples.chart_http.core.t21064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21066,meta21065__$1){var self__ = this;
var _21066__$1 = this;return (new examples.chart_http.core.t21064(self__.owner,self__.the_item,self__.selection,self__.form_row,meta21065__$1));
});
examples.chart_http.core.__GT_t21064 = (function __GT_t21064(owner__$1,the_item__$1,selection__$1,form_row__$1,meta21065){return (new examples.chart_http.core.t21064(owner__$1,the_item__$1,selection__$1,form_row__$1,meta21065));
});
}
return (new examples.chart_http.core.t21064(owner,the_item,selection,form_row,null));
});
});
examples.chart_http.core.device_form = (function device_form(cursor,owner){if(typeof examples.chart_http.core.t21074 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.chart_http.core.t21074 = (function (owner,cursor,device_form,meta21075){
this.owner = owner;
this.cursor = cursor;
this.device_form = device_form;
this.meta21075 = meta21075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.chart_http.core.t21074.cljs$lang$type = true;
examples.chart_http.core.t21074.cljs$lang$ctorStr = "examples.chart-http.core/t21074";
examples.chart_http.core.t21074.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"examples.chart-http.core/t21074");
});
examples.chart_http.core.t21074.prototype.om$core$IRenderState$ = true;
examples.chart_http.core.t21074.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__21077){var self__ = this;
var map__21078 = p__21077;var map__21078__$1 = ((cljs.core.seq_QMARK_.call(null,map__21078))?cljs.core.apply.call(null,cljs.core.hash_map,map__21078):map__21078);var clicked = cljs.core.get.call(null,map__21078__$1,new cljs.core.Keyword(null,"clicked","clicked",1874428825));var ___$1 = this;var devices = new cljs.core.Keyword(null,"all","all",1014000915).cljs$core$IFn$_invoke$arity$1(self__.cursor);return React.DOM.div(null,React.DOM.table({"cellSpacing": "10"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Select"),React.DOM.th(null,"ID"),React.DOM.th(null,"Type"),React.DOM.th(null,"Description"),React.DOM.th(null,"Unit"))),cljs.core.apply.call(null,om.dom.tbody,null,om.core.build_all.call(null,examples.chart_http.core.form_row.call(null,clicked),devices))));
});
examples.chart_http.core.t21074.prototype.om$core$IWillMount$ = true;
examples.chart_http.core.t21074.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var host = new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner));var url = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(host)+"devices/");return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",1706707644),((function (host,url,___$1){
return (function (p1__21068_SHARP_){return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all","all",1014000915)], null),p1__21068_SHARP_);
});})(host,url,___$1))
], null));
});
examples.chart_http.core.t21074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21076){var self__ = this;
var _21076__$1 = this;return self__.meta21075;
});
examples.chart_http.core.t21074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21076,meta21075__$1){var self__ = this;
var _21076__$1 = this;return (new examples.chart_http.core.t21074(self__.owner,self__.cursor,self__.device_form,meta21075__$1));
});
examples.chart_http.core.__GT_t21074 = (function __GT_t21074(owner__$1,cursor__$1,device_form__$1,meta21075){return (new examples.chart_http.core.t21074(owner__$1,cursor__$1,device_form__$1,meta21075));
});
}
return (new examples.chart_http.core.t21074(owner,cursor,device_form,null));
});
examples.chart_http.core.draw_chart = (function draw_chart(cursor){var Chart = examples.chart_http.core.dimple.chart;var svg = examples.chart_http.core.dimple.newSvg("#chart","100%",600);var selected = cljs.core.get_in.call(null,cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",2205476365)], null));var data = cljs.core.get_in.call(null,cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"measurements","measurements",651661225)], null));var dimple_chart = (new Chart(svg)).setBounds("5%","15%","80%","50%");var x = dimple_chart.addCategoryAxis("x","timestamp");var y = dimple_chart.addMeasureAxis("y","value");var s = dimple_chart.addSeries("type",dimple.plot.line,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));(s["data"] = cljs.core.clj__GT_js.call(null,data));
dimple_chart.addLegend("5%","10%","20%","10%","right");
return dimple_chart.draw();
});
examples.chart_http.core.chart_figure = (function chart_figure(cursor,owner){if(typeof examples.chart_http.core.t21133 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.chart_http.core.t21133 = (function (owner,cursor,chart_figure,meta21134){
this.owner = owner;
this.cursor = cursor;
this.chart_figure = chart_figure;
this.meta21134 = meta21134;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.chart_http.core.t21133.cljs$lang$type = true;
examples.chart_http.core.t21133.cljs$lang$ctorStr = "examples.chart-http.core/t21133";
examples.chart_http.core.t21133.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"examples.chart-http.core/t21133");
});
examples.chart_http.core.t21133.prototype.om$core$IDidUpdate$ = true;
examples.chart_http.core.t21133.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;var n_21186 = document.getElementById("chart");while(true){
if(cljs.core.truth_(n_21186.hasChildNodes()))
{n_21186.removeChild(n_21186.lastChild);
{
continue;
}
} else
{}
break;
}
return examples.chart_http.core.draw_chart.call(null,self__.cursor);
});
examples.chart_http.core.t21133.prototype.om$core$IRender$ = true;
examples.chart_http.core.t21133.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"height": 600, "width": "100%", "id": "chart"}));
});
examples.chart_http.core.t21133.prototype.om$core$IWillMount$ = true;
examples.chart_http.core.t21133.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var clicked_items = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicked","clicked",1874428825)], null));var host = new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner));var c__6319__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6319__auto__,clicked_items,host,___$1){
return (function (){var f__6320__auto__ = (function (){var switch__6304__auto__ = ((function (c__6319__auto__,clicked_items,host,___$1){
return (function (state_21165){var state_val_21166 = (state_21165[1]);if((state_val_21166 === 1))
{var state_21165__$1 = state_21165;var statearr_21167_21187 = state_21165__$1;(statearr_21167_21187[2] = null);
(statearr_21167_21187[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21166 === 2))
{var state_21165__$1 = state_21165;if(true)
{var statearr_21168_21188 = state_21165__$1;(statearr_21168_21188[1] = 4);
} else
{var statearr_21169_21189 = state_21165__$1;(statearr_21169_21189[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21166 === 3))
{var inst_21163 = (state_21165[2]);var state_21165__$1 = state_21165;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21165__$1,inst_21163);
} else
{if((state_val_21166 === 4))
{var state_21165__$1 = state_21165;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21165__$1,7,clicked_items);
} else
{if((state_val_21166 === 5))
{var state_21165__$1 = state_21165;var statearr_21170_21190 = state_21165__$1;(statearr_21170_21190[2] = null);
(statearr_21170_21190[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21166 === 6))
{var inst_21161 = (state_21165[2]);var state_21165__$1 = state_21165;var statearr_21171_21191 = state_21165__$1;(statearr_21171_21191[2] = inst_21161);
(statearr_21171_21191[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21166 === 7))
{var inst_21140 = (state_21165[7]);var inst_21140__$1 = (state_21165[2]);var inst_21141 = cljs.core.seq_QMARK_.call(null,inst_21140__$1);var state_21165__$1 = (function (){var statearr_21172 = state_21165;(statearr_21172[7] = inst_21140__$1);
return statearr_21172;
})();if(inst_21141)
{var statearr_21173_21192 = state_21165__$1;(statearr_21173_21192[1] = 8);
} else
{var statearr_21174_21193 = state_21165__$1;(statearr_21174_21193[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21166 === 8))
{var inst_21140 = (state_21165[7]);var inst_21143 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21140);var state_21165__$1 = state_21165;var statearr_21175_21194 = state_21165__$1;(statearr_21175_21194[2] = inst_21143);
(statearr_21175_21194[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21166 === 9))
{var inst_21140 = (state_21165[7]);var state_21165__$1 = state_21165;var statearr_21176_21195 = state_21165__$1;(statearr_21176_21195[2] = inst_21140);
(statearr_21176_21195[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21166 === 10))
{var inst_21140 = (state_21165[7]);var inst_21146 = (state_21165[2]);var inst_21147 = cljs.core.get.call(null,inst_21146,new cljs.core.Keyword(null,"type","type",1017479852));var inst_21148 = cljs.core.get.call(null,inst_21146,new cljs.core.Keyword(null,"id","id",1013907597));var inst_21149 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(host)+"device/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21148)+"/type/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21147)+"/measurements/");var inst_21150 = [new cljs.core.Keyword(null,"handler","handler",1706707644)];var inst_21151 = (function (){var url = inst_21149;var id = inst_21148;var type = inst_21147;var map__21138 = inst_21146;var sel = inst_21140;return ((function (url,id,type,map__21138,sel,inst_21140,inst_21146,inst_21147,inst_21148,inst_21149,inst_21150,state_val_21166,c__6319__auto__,clicked_items,host,___$1){
return (function (p1__21079_SHARP_){return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"measurements","measurements",651661225)], null),p1__21079_SHARP_);
});
;})(url,id,type,map__21138,sel,inst_21140,inst_21146,inst_21147,inst_21148,inst_21149,inst_21150,state_val_21166,c__6319__auto__,clicked_items,host,___$1))
})();var inst_21152 = [inst_21151];var inst_21153 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21150,inst_21152);var inst_21154 = ajax.core.GET.call(null,inst_21149,inst_21153);var inst_21155 = [new cljs.core.Keyword(null,"selected","selected",2205476365)];var inst_21156 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_21155,null));var inst_21157 = om.core.update_BANG_.call(null,self__.cursor,inst_21156,inst_21147);var state_21165__$1 = (function (){var statearr_21177 = state_21165;(statearr_21177[8] = inst_21157);
(statearr_21177[9] = inst_21154);
return statearr_21177;
})();var statearr_21178_21196 = state_21165__$1;(statearr_21178_21196[2] = null);
(statearr_21178_21196[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__6319__auto__,clicked_items,host,___$1))
;return ((function (switch__6304__auto__,c__6319__auto__,clicked_items,host,___$1){
return (function() {
var state_machine__6305__auto__ = null;
var state_machine__6305__auto____0 = (function (){var statearr_21182 = [null,null,null,null,null,null,null,null,null,null];(statearr_21182[0] = state_machine__6305__auto__);
(statearr_21182[1] = 1);
return statearr_21182;
});
var state_machine__6305__auto____1 = (function (state_21165){while(true){
var ret_value__6306__auto__ = (function (){try{while(true){
var result__6307__auto__ = switch__6304__auto__.call(null,state_21165);if(cljs.core.keyword_identical_QMARK_.call(null,result__6307__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6307__auto__;
}
break;
}
}catch (e21183){if((e21183 instanceof Object))
{var ex__6308__auto__ = e21183;var statearr_21184_21197 = state_21165;(statearr_21184_21197[5] = ex__6308__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21165);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21183;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6306__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21198 = state_21165;
state_21165 = G__21198;
continue;
}
} else
{return ret_value__6306__auto__;
}
break;
}
});
state_machine__6305__auto__ = function(state_21165){
switch(arguments.length){
case 0:
return state_machine__6305__auto____0.call(this);
case 1:
return state_machine__6305__auto____1.call(this,state_21165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6305__auto____0;
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6305__auto____1;
return state_machine__6305__auto__;
})()
;})(switch__6304__auto__,c__6319__auto__,clicked_items,host,___$1))
})();var state__6321__auto__ = (function (){var statearr_21185 = f__6320__auto__.call(null);(statearr_21185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6319__auto__);
return statearr_21185;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6321__auto__);
});})(c__6319__auto__,clicked_items,host,___$1))
);
return c__6319__auto__;
});
examples.chart_http.core.t21133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21135){var self__ = this;
var _21135__$1 = this;return self__.meta21134;
});
examples.chart_http.core.t21133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21135,meta21134__$1){var self__ = this;
var _21135__$1 = this;return (new examples.chart_http.core.t21133(self__.owner,self__.cursor,self__.chart_figure,meta21134__$1));
});
examples.chart_http.core.__GT_t21133 = (function __GT_t21133(owner__$1,cursor__$1,chart_figure__$1,meta21134){return (new examples.chart_http.core.t21133(owner__$1,cursor__$1,chart_figure__$1,meta21134));
});
}
return (new examples.chart_http.core.t21133(owner,cursor,chart_figure,null));
});
examples.chart_http.core.chart_http = (function chart_http(cursor,owner){if(typeof examples.chart_http.core.t21204 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.chart_http.core.t21204 = (function (owner,cursor,chart_http,meta21205){
this.owner = owner;
this.cursor = cursor;
this.chart_http = chart_http;
this.meta21205 = meta21205;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.chart_http.core.t21204.cljs$lang$type = true;
examples.chart_http.core.t21204.cljs$lang$ctorStr = "examples.chart-http.core/t21204";
examples.chart_http.core.t21204.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"examples.chart-http.core/t21204");
});
examples.chart_http.core.t21204.prototype.om$core$IRenderState$ = true;
examples.chart_http.core.t21204.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__21207){var self__ = this;
var map__21208 = p__21207;var map__21208__$1 = ((cljs.core.seq_QMARK_.call(null,map__21208))?cljs.core.apply.call(null,cljs.core.hash_map,map__21208):map__21208);var chans = cljs.core.get.call(null,map__21208__$1,new cljs.core.Keyword(null,"chans","chans",1108527827));var ___$1 = this;return React.DOM.div(null,React.DOM.h3({"key": "head"},("Metering data")),React.DOM.div({"id": "device-form"},om.core.build.call(null,examples.chart_http.core.device_form,new cljs.core.Keyword(null,"devices","devices",2573705295).cljs$core$IFn$_invoke$arity$1(self__.cursor),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),chans], null))),om.core.build.call(null,examples.chart_http.core.chart_figure,new cljs.core.Keyword(null,"chart","chart",1108527952).cljs$core$IFn$_invoke$arity$1(self__.cursor),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),chans], null)));
});
examples.chart_http.core.t21204.prototype.om$core$IInitState$ = true;
examples.chart_http.core.t21204.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clicked","clicked",1874428825),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1))], null)], null);
});
examples.chart_http.core.t21204.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21206){var self__ = this;
var _21206__$1 = this;return self__.meta21205;
});
examples.chart_http.core.t21204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21206,meta21205__$1){var self__ = this;
var _21206__$1 = this;return (new examples.chart_http.core.t21204(self__.owner,self__.cursor,self__.chart_http,meta21205__$1));
});
examples.chart_http.core.__GT_t21204 = (function __GT_t21204(owner__$1,cursor__$1,chart_http__$1,meta21205){return (new examples.chart_http.core.t21204(owner__$1,cursor__$1,chart_http__$1,meta21205));
});
}
return (new examples.chart_http.core.t21204(owner,cursor,chart_http,null));
});
om.core.root.call(null,examples.chart_http.core.chart_http,examples.chart_http.core.app_model,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app"),new cljs.core.Keyword(null,"shared","shared",4405305303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",1014020321),"http://localhost:3000/"], null)], null));

//# sourceMappingURL=core.js.map