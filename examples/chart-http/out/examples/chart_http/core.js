// Compiled by ClojureScript 0.0-2227
goog.provide('examples.chart_http.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
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
examples.chart_http.core.form_row = (function form_row(selection){return (function (the_item,owner){if(typeof examples.chart_http.core.t20617 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.chart_http.core.t20617 = (function (owner,the_item,selection,form_row,meta20618){
this.owner = owner;
this.the_item = the_item;
this.selection = selection;
this.form_row = form_row;
this.meta20618 = meta20618;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.chart_http.core.t20617.cljs$lang$type = true;
examples.chart_http.core.t20617.cljs$lang$ctorStr = "examples.chart-http.core/t20617";
examples.chart_http.core.t20617.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"examples.chart-http.core/t20617");
});
examples.chart_http.core.t20617.prototype.om$core$IRender$ = true;
examples.chart_http.core.t20617.prototype.om$core$IRender$render$arity$1 = (function (this__5089__auto__){var self__ = this;
var this__5089__auto____$1 = this;var map__20620 = self__.the_item;var map__20620__$1 = ((cljs.core.seq_QMARK_.call(null,map__20620))?cljs.core.apply.call(null,cljs.core.hash_map,map__20620):map__20620);var unit = cljs.core.get.call(null,map__20620__$1,new cljs.core.Keyword(null,"unit","unit",1017498870));var description = cljs.core.get.call(null,map__20620__$1,new cljs.core.Keyword(null,"description","description",3584325486));var type = cljs.core.get.call(null,map__20620__$1,new cljs.core.Keyword(null,"type","type",1017479852));var id = cljs.core.get.call(null,map__20620__$1,new cljs.core.Keyword(null,"id","id",1013907597));return React.DOM.tr(null,React.DOM.td(null,om.dom.input.call(null,{"onChange": ((function (map__20620,map__20620__$1,unit,description,type,id,this__5089__auto____$1){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.selection,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"type","type",1017479852),type], null));
});})(map__20620,map__20620__$1,unit,description,type,id,this__5089__auto____$1))
, "value": cljs.core.name, "name": "type", "type": "radio"})),React.DOM.td(null,id),React.DOM.td(null,type),React.DOM.td(null,description),React.DOM.td(null,unit));
});
examples.chart_http.core.t20617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20619){var self__ = this;
var _20619__$1 = this;return self__.meta20618;
});
examples.chart_http.core.t20617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20619,meta20618__$1){var self__ = this;
var _20619__$1 = this;return (new examples.chart_http.core.t20617(self__.owner,self__.the_item,self__.selection,self__.form_row,meta20618__$1));
});
examples.chart_http.core.__GT_t20617 = (function __GT_t20617(owner__$1,the_item__$1,selection__$1,form_row__$1,meta20618){return (new examples.chart_http.core.t20617(owner__$1,the_item__$1,selection__$1,form_row__$1,meta20618));
});
}
return (new examples.chart_http.core.t20617(owner,the_item,selection,form_row,null));
});
});
examples.chart_http.core.device_form = (function device_form(cursor,owner){if(typeof examples.chart_http.core.t20627 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.chart_http.core.t20627 = (function (owner,cursor,device_form,meta20628){
this.owner = owner;
this.cursor = cursor;
this.device_form = device_form;
this.meta20628 = meta20628;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.chart_http.core.t20627.cljs$lang$type = true;
examples.chart_http.core.t20627.cljs$lang$ctorStr = "examples.chart-http.core/t20627";
examples.chart_http.core.t20627.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"examples.chart-http.core/t20627");
});
examples.chart_http.core.t20627.prototype.om$core$IRenderState$ = true;
examples.chart_http.core.t20627.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__20630){var self__ = this;
var map__20631 = p__20630;var map__20631__$1 = ((cljs.core.seq_QMARK_.call(null,map__20631))?cljs.core.apply.call(null,cljs.core.hash_map,map__20631):map__20631);var clicked = cljs.core.get.call(null,map__20631__$1,new cljs.core.Keyword(null,"clicked","clicked",1874428825));var ___$1 = this;var devices = new cljs.core.Keyword(null,"all","all",1014000915).cljs$core$IFn$_invoke$arity$1(self__.cursor);return React.DOM.div(null,React.DOM.table({"cellSpacing": "10"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Select"),React.DOM.th(null,"ID"),React.DOM.th(null,"Type"),React.DOM.th(null,"Description"),React.DOM.th(null,"Unit"))),cljs.core.apply.call(null,om.dom.tbody,null,om.core.build_all.call(null,examples.chart_http.core.form_row.call(null,clicked),devices))));
});
examples.chart_http.core.t20627.prototype.om$core$IWillMount$ = true;
examples.chart_http.core.t20627.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var host = new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner));var url = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(host)+"devices/");return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",1706707644),((function (host,url,___$1){
return (function (p1__20621_SHARP_){return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all","all",1014000915)], null),p1__20621_SHARP_);
});})(host,url,___$1))
], null));
});
examples.chart_http.core.t20627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20629){var self__ = this;
var _20629__$1 = this;return self__.meta20628;
});
examples.chart_http.core.t20627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20629,meta20628__$1){var self__ = this;
var _20629__$1 = this;return (new examples.chart_http.core.t20627(self__.owner,self__.cursor,self__.device_form,meta20628__$1));
});
examples.chart_http.core.__GT_t20627 = (function __GT_t20627(owner__$1,cursor__$1,device_form__$1,meta20628){return (new examples.chart_http.core.t20627(owner__$1,cursor__$1,device_form__$1,meta20628));
});
}
return (new examples.chart_http.core.t20627(owner,cursor,device_form,null));
});
examples.chart_http.core.draw_chart = (function draw_chart(cursor){var Chart = examples.chart_http.core.dimple.chart;var svg = examples.chart_http.core.dimple.newSvg("#chart","100%",600);var selected = cljs.core.get_in.call(null,cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",2205476365)], null));var data = cljs.core.get_in.call(null,cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"measurements","measurements",651661225)], null));var dimple_chart = (new Chart(svg)).setBounds("5%","15%","80%","50%");var x = dimple_chart.addCategoryAxis("x","timestamp");var y = dimple_chart.addMeasureAxis("y","value");var s = dimple_chart.addSeries("type",dimple.plot.line,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));(s["data"] = cljs.core.clj__GT_js.call(null,data));
dimple_chart.addLegend("5%","10%","20%","10%","right");
return dimple_chart.draw();
});
examples.chart_http.core.chart_figure = (function chart_figure(cursor,owner){if(typeof examples.chart_http.core.t20686 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.chart_http.core.t20686 = (function (owner,cursor,chart_figure,meta20687){
this.owner = owner;
this.cursor = cursor;
this.chart_figure = chart_figure;
this.meta20687 = meta20687;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.chart_http.core.t20686.cljs$lang$type = true;
examples.chart_http.core.t20686.cljs$lang$ctorStr = "examples.chart-http.core/t20686";
examples.chart_http.core.t20686.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"examples.chart-http.core/t20686");
});
examples.chart_http.core.t20686.prototype.om$core$IDidUpdate$ = true;
examples.chart_http.core.t20686.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;var n_20739 = document.getElementById("chart");while(true){
if(cljs.core.truth_(n_20739.hasChildNodes()))
{n_20739.removeChild(n_20739.lastChild);
{
continue;
}
} else
{}
break;
}
return examples.chart_http.core.draw_chart.call(null,self__.cursor);
});
examples.chart_http.core.t20686.prototype.om$core$IRender$ = true;
examples.chart_http.core.t20686.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"height": 600, "width": "100%", "id": "chart"}));
});
examples.chart_http.core.t20686.prototype.om$core$IWillMount$ = true;
examples.chart_http.core.t20686.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var clicked_items = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicked","clicked",1874428825)], null));var host = new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner));var c__6319__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6319__auto__,clicked_items,host,___$1){
return (function (){var f__6320__auto__ = (function (){var switch__6304__auto__ = ((function (c__6319__auto__,clicked_items,host,___$1){
return (function (state_20718){var state_val_20719 = (state_20718[1]);if((state_val_20719 === 1))
{var state_20718__$1 = state_20718;var statearr_20720_20740 = state_20718__$1;(statearr_20720_20740[2] = null);
(statearr_20720_20740[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20719 === 2))
{var state_20718__$1 = state_20718;if(true)
{var statearr_20721_20741 = state_20718__$1;(statearr_20721_20741[1] = 4);
} else
{var statearr_20722_20742 = state_20718__$1;(statearr_20722_20742[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20719 === 3))
{var inst_20716 = (state_20718[2]);var state_20718__$1 = state_20718;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20718__$1,inst_20716);
} else
{if((state_val_20719 === 4))
{var state_20718__$1 = state_20718;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20718__$1,7,clicked_items);
} else
{if((state_val_20719 === 5))
{var state_20718__$1 = state_20718;var statearr_20723_20743 = state_20718__$1;(statearr_20723_20743[2] = null);
(statearr_20723_20743[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20719 === 6))
{var inst_20714 = (state_20718[2]);var state_20718__$1 = state_20718;var statearr_20724_20744 = state_20718__$1;(statearr_20724_20744[2] = inst_20714);
(statearr_20724_20744[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20719 === 7))
{var inst_20693 = (state_20718[7]);var inst_20693__$1 = (state_20718[2]);var inst_20694 = cljs.core.seq_QMARK_.call(null,inst_20693__$1);var state_20718__$1 = (function (){var statearr_20725 = state_20718;(statearr_20725[7] = inst_20693__$1);
return statearr_20725;
})();if(inst_20694)
{var statearr_20726_20745 = state_20718__$1;(statearr_20726_20745[1] = 8);
} else
{var statearr_20727_20746 = state_20718__$1;(statearr_20727_20746[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20719 === 8))
{var inst_20693 = (state_20718[7]);var inst_20696 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20693);var state_20718__$1 = state_20718;var statearr_20728_20747 = state_20718__$1;(statearr_20728_20747[2] = inst_20696);
(statearr_20728_20747[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20719 === 9))
{var inst_20693 = (state_20718[7]);var state_20718__$1 = state_20718;var statearr_20729_20748 = state_20718__$1;(statearr_20729_20748[2] = inst_20693);
(statearr_20729_20748[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20719 === 10))
{var inst_20693 = (state_20718[7]);var inst_20699 = (state_20718[2]);var inst_20700 = cljs.core.get.call(null,inst_20699,new cljs.core.Keyword(null,"type","type",1017479852));var inst_20701 = cljs.core.get.call(null,inst_20699,new cljs.core.Keyword(null,"id","id",1013907597));var inst_20702 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(host)+"device/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20701)+"/type/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20700)+"/measurements/");var inst_20703 = [new cljs.core.Keyword(null,"handler","handler",1706707644)];var inst_20704 = (function (){var url = inst_20702;var id = inst_20701;var type = inst_20700;var map__20691 = inst_20699;var sel = inst_20693;return ((function (url,id,type,map__20691,sel,inst_20693,inst_20699,inst_20700,inst_20701,inst_20702,inst_20703,state_val_20719,c__6319__auto__,clicked_items,host,___$1){
return (function (p1__20632_SHARP_){return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"measurements","measurements",651661225)], null),p1__20632_SHARP_);
});
;})(url,id,type,map__20691,sel,inst_20693,inst_20699,inst_20700,inst_20701,inst_20702,inst_20703,state_val_20719,c__6319__auto__,clicked_items,host,___$1))
})();var inst_20705 = [inst_20704];var inst_20706 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_20703,inst_20705);var inst_20707 = ajax.core.GET.call(null,inst_20702,inst_20706);var inst_20708 = [new cljs.core.Keyword(null,"selected","selected",2205476365)];var inst_20709 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_20708,null));var inst_20710 = om.core.update_BANG_.call(null,self__.cursor,inst_20709,inst_20700);var state_20718__$1 = (function (){var statearr_20730 = state_20718;(statearr_20730[8] = inst_20707);
(statearr_20730[9] = inst_20710);
return statearr_20730;
})();var statearr_20731_20749 = state_20718__$1;(statearr_20731_20749[2] = null);
(statearr_20731_20749[1] = 2);
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
var state_machine__6305__auto____0 = (function (){var statearr_20735 = [null,null,null,null,null,null,null,null,null,null];(statearr_20735[0] = state_machine__6305__auto__);
(statearr_20735[1] = 1);
return statearr_20735;
});
var state_machine__6305__auto____1 = (function (state_20718){while(true){
var ret_value__6306__auto__ = (function (){try{while(true){
var result__6307__auto__ = switch__6304__auto__.call(null,state_20718);if(cljs.core.keyword_identical_QMARK_.call(null,result__6307__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6307__auto__;
}
break;
}
}catch (e20736){if((e20736 instanceof Object))
{var ex__6308__auto__ = e20736;var statearr_20737_20750 = state_20718;(statearr_20737_20750[5] = ex__6308__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20718);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20736;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6306__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20751 = state_20718;
state_20718 = G__20751;
continue;
}
} else
{return ret_value__6306__auto__;
}
break;
}
});
state_machine__6305__auto__ = function(state_20718){
switch(arguments.length){
case 0:
return state_machine__6305__auto____0.call(this);
case 1:
return state_machine__6305__auto____1.call(this,state_20718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6305__auto____0;
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6305__auto____1;
return state_machine__6305__auto__;
})()
;})(switch__6304__auto__,c__6319__auto__,clicked_items,host,___$1))
})();var state__6321__auto__ = (function (){var statearr_20738 = f__6320__auto__.call(null);(statearr_20738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6319__auto__);
return statearr_20738;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6321__auto__);
});})(c__6319__auto__,clicked_items,host,___$1))
);
return c__6319__auto__;
});
examples.chart_http.core.t20686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20688){var self__ = this;
var _20688__$1 = this;return self__.meta20687;
});
examples.chart_http.core.t20686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20688,meta20687__$1){var self__ = this;
var _20688__$1 = this;return (new examples.chart_http.core.t20686(self__.owner,self__.cursor,self__.chart_figure,meta20687__$1));
});
examples.chart_http.core.__GT_t20686 = (function __GT_t20686(owner__$1,cursor__$1,chart_figure__$1,meta20687){return (new examples.chart_http.core.t20686(owner__$1,cursor__$1,chart_figure__$1,meta20687));
});
}
return (new examples.chart_http.core.t20686(owner,cursor,chart_figure,null));
});
examples.chart_http.core.chart_http = (function chart_http(cursor,owner){if(typeof examples.chart_http.core.t20757 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.chart_http.core.t20757 = (function (owner,cursor,chart_http,meta20758){
this.owner = owner;
this.cursor = cursor;
this.chart_http = chart_http;
this.meta20758 = meta20758;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.chart_http.core.t20757.cljs$lang$type = true;
examples.chart_http.core.t20757.cljs$lang$ctorStr = "examples.chart-http.core/t20757";
examples.chart_http.core.t20757.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"examples.chart-http.core/t20757");
});
examples.chart_http.core.t20757.prototype.om$core$IRenderState$ = true;
examples.chart_http.core.t20757.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__20760){var self__ = this;
var map__20761 = p__20760;var map__20761__$1 = ((cljs.core.seq_QMARK_.call(null,map__20761))?cljs.core.apply.call(null,cljs.core.hash_map,map__20761):map__20761);var chans = cljs.core.get.call(null,map__20761__$1,new cljs.core.Keyword(null,"chans","chans",1108527827));var ___$1 = this;return React.DOM.div(null,React.DOM.h3({"key": "head"},("Metering data")),React.DOM.div({"id": "device-form"},om.core.build.call(null,examples.chart_http.core.device_form,new cljs.core.Keyword(null,"devices","devices",2573705295).cljs$core$IFn$_invoke$arity$1(self__.cursor),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),chans], null))),om.core.build.call(null,examples.chart_http.core.chart_figure,new cljs.core.Keyword(null,"chart","chart",1108527952).cljs$core$IFn$_invoke$arity$1(self__.cursor),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),chans], null)));
});
examples.chart_http.core.t20757.prototype.om$core$IInitState$ = true;
examples.chart_http.core.t20757.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clicked","clicked",1874428825),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1))], null)], null);
});
examples.chart_http.core.t20757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20759){var self__ = this;
var _20759__$1 = this;return self__.meta20758;
});
examples.chart_http.core.t20757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20759,meta20758__$1){var self__ = this;
var _20759__$1 = this;return (new examples.chart_http.core.t20757(self__.owner,self__.cursor,self__.chart_http,meta20758__$1));
});
examples.chart_http.core.__GT_t20757 = (function __GT_t20757(owner__$1,cursor__$1,chart_http__$1,meta20758){return (new examples.chart_http.core.t20757(owner__$1,cursor__$1,chart_http__$1,meta20758));
});
}
return (new examples.chart_http.core.t20757(owner,cursor,chart_http,null));
});
om.core.root.call(null,examples.chart_http.core.chart_http,examples.chart_http.core.app_model,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app"),new cljs.core.Keyword(null,"shared","shared",4405305303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",1014020321),"http://localhost:3000/"], null)], null));

//# sourceMappingURL=core.js.map