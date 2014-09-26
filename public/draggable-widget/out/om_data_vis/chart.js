// Compiled by ClojureScript 0.0-2227
goog.provide('om_data_vis.chart');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('ajax.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('om.core');
om_data_vis.chart.draw_chart = (function draw_chart(cursor,p__30073){var map__30076 = p__30073;var map__30076__$1 = ((cljs.core.seq_QMARK_.call(null,map__30076))?cljs.core.apply.call(null,cljs.core.hash_map,map__30076):map__30076);var plot = cljs.core.get.call(null,map__30076__$1,new cljs.core.Keyword(null,"plot","plot",1017348179));var y_axis = cljs.core.get.call(null,map__30076__$1,new cljs.core.Keyword(null,"y-axis","y-axis",4522598375));var x_axis = cljs.core.get.call(null,map__30076__$1,new cljs.core.Keyword(null,"x-axis","x-axis",4493969224));var bounds = cljs.core.get.call(null,map__30076__$1,new cljs.core.Keyword(null,"bounds","bounds",3925666343));var div = cljs.core.get.call(null,map__30076__$1,new cljs.core.Keyword(null,"div","div",1014003715));var map__30077 = div;var map__30077__$1 = ((cljs.core.seq_QMARK_.call(null,map__30077))?cljs.core.apply.call(null,cljs.core.hash_map,map__30077):map__30077);var height = cljs.core.get.call(null,map__30077__$1,new cljs.core.Keyword(null,"height","height",4087841945));var width = cljs.core.get.call(null,map__30077__$1,new cljs.core.Keyword(null,"width","width",1127031096));var id = cljs.core.get.call(null,map__30077__$1,new cljs.core.Keyword(null,"id","id",1013907597));var Chart = dimple.chart;var svg = dimple.newSvg(("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),width,height);var data = cljs.core.get_in.call(null,cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",1016980252)], null));var dimple_chart = (new Chart(svg)).setBounds(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(bounds));var x = dimple_chart.addCategoryAxis("x",x_axis);var y = dimple_chart.addMeasureAxis("y",y_axis);var s = dimple_chart.addSeries(null,plot,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));(s["data"] = cljs.core.clj__GT_js.call(null,data));
dimple_chart.addLegend("5%","10%","20%","10%","right");
dimple_chart.draw();
return x.shapes.selectAll("text").attr("transform","rotate(45,0,12.6015625) translate(5, 0)");
});
om_data_vis.chart.chart_figure = (function chart_figure(cursor,owner,p__30078){var map__30112 = p__30078;var map__30112__$1 = ((cljs.core.seq_QMARK_.call(null,map__30112))?cljs.core.apply.call(null,cljs.core.hash_map,map__30112):map__30112);var opts = map__30112__$1;var chart = cljs.core.get.call(null,map__30112__$1,new cljs.core.Keyword(null,"chart","chart",1108527952));if(typeof om_data_vis.chart.t30113 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_data_vis.chart.t30113 = (function (chart,opts,map__30112,p__30078,owner,cursor,chart_figure,meta30114){
this.chart = chart;
this.opts = opts;
this.map__30112 = map__30112;
this.p__30078 = p__30078;
this.owner = owner;
this.cursor = cursor;
this.chart_figure = chart_figure;
this.meta30114 = meta30114;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_data_vis.chart.t30113.cljs$lang$type = true;
om_data_vis.chart.t30113.cljs$lang$ctorStr = "om-data-vis.chart/t30113";
om_data_vis.chart.t30113.cljs$lang$ctorPrWriter = ((function (map__30112,map__30112__$1,opts,chart){
return (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"om-data-vis.chart/t30113");
});})(map__30112,map__30112__$1,opts,chart))
;
om_data_vis.chart.t30113.prototype.om$core$IDidUpdate$ = true;
om_data_vis.chart.t30113.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__30112,map__30112__$1,opts,chart){
return (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;var n_30145 = document.getElementById("chart");while(true){
if(cljs.core.truth_(n_30145.hasChildNodes()))
{n_30145.removeChild(n_30145.lastChild);
{
continue;
}
} else
{}
break;
}
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(self__.cursor)))
{return om_data_vis.chart.draw_chart.call(null,self__.cursor,self__.chart);
} else
{return null;
}
});})(map__30112,map__30112__$1,opts,chart))
;
om_data_vis.chart.t30113.prototype.om$core$IRender$ = true;
om_data_vis.chart.t30113.prototype.om$core$IRender$render$arity$1 = ((function (map__30112,map__30112__$1,opts,chart){
return (function (_){var self__ = this;
var ___$1 = this;var map__30116 = new cljs.core.Keyword(null,"div","div",1014003715).cljs$core$IFn$_invoke$arity$1(self__.chart);var map__30116__$1 = ((cljs.core.seq_QMARK_.call(null,map__30116))?cljs.core.apply.call(null,cljs.core.hash_map,map__30116):map__30116);var height = cljs.core.get.call(null,map__30116__$1,new cljs.core.Keyword(null,"height","height",4087841945));var width = cljs.core.get.call(null,map__30116__$1,new cljs.core.Keyword(null,"width","width",1127031096));var id = cljs.core.get.call(null,map__30116__$1,new cljs.core.Keyword(null,"id","id",1013907597));return React.DOM.div({"id": id, "width": width, "height": height});
});})(map__30112,map__30112__$1,opts,chart))
;
om_data_vis.chart.t30113.prototype.om$core$IWillMount$ = true;
om_data_vis.chart.t30113.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__30112,map__30112__$1,opts,chart){
return (function (_){var self__ = this;
var ___$1 = this;var event_chan = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-chan","event-chan",1951581719)], null));var event_fn = new cljs.core.Keyword(null,"event-fn","event-fn",1291974733).cljs$core$IFn$_invoke$arity$1(self__.opts);var c__6344__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__,event_chan,event_fn,___$1,map__30112,map__30112__$1,opts,chart){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__,event_chan,event_fn,___$1,map__30112,map__30112__$1,opts,chart){
return (function (state_30129){var state_val_30130 = (state_30129[1]);if((state_val_30130 === 7))
{var inst_30120 = (state_30129[2]);var inst_30121 = event_fn.call(null,self__.cursor,self__.owner,inst_30120);var state_30129__$1 = (function (){var statearr_30131 = state_30129;(statearr_30131[7] = inst_30121);
return statearr_30131;
})();var statearr_30132_30146 = state_30129__$1;(statearr_30132_30146[2] = null);
(statearr_30132_30146[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30130 === 6))
{var inst_30125 = (state_30129[2]);var state_30129__$1 = state_30129;var statearr_30133_30147 = state_30129__$1;(statearr_30133_30147[2] = inst_30125);
(statearr_30133_30147[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30130 === 5))
{var state_30129__$1 = state_30129;var statearr_30134_30148 = state_30129__$1;(statearr_30134_30148[2] = null);
(statearr_30134_30148[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30130 === 4))
{var state_30129__$1 = state_30129;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30129__$1,7,event_chan);
} else
{if((state_val_30130 === 3))
{var inst_30127 = (state_30129[2]);var state_30129__$1 = state_30129;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30129__$1,inst_30127);
} else
{if((state_val_30130 === 2))
{var state_30129__$1 = state_30129;if(true)
{var statearr_30135_30149 = state_30129__$1;(statearr_30135_30149[1] = 4);
} else
{var statearr_30136_30150 = state_30129__$1;(statearr_30136_30150[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30130 === 1))
{var state_30129__$1 = state_30129;var statearr_30137_30151 = state_30129__$1;(statearr_30137_30151[2] = null);
(statearr_30137_30151[1] = 2);
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
});})(c__6344__auto__,event_chan,event_fn,___$1,map__30112,map__30112__$1,opts,chart))
;return ((function (switch__6329__auto__,c__6344__auto__,event_chan,event_fn,___$1,map__30112,map__30112__$1,opts,chart){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_30141 = [null,null,null,null,null,null,null,null];(statearr_30141[0] = state_machine__6330__auto__);
(statearr_30141[1] = 1);
return statearr_30141;
});
var state_machine__6330__auto____1 = (function (state_30129){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_30129);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e30142){if((e30142 instanceof Object))
{var ex__6333__auto__ = e30142;var statearr_30143_30152 = state_30129;(statearr_30143_30152[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30129);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30142;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30153 = state_30129;
state_30129 = G__30153;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_30129){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_30129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__,event_chan,event_fn,___$1,map__30112,map__30112__$1,opts,chart))
})();var state__6346__auto__ = (function (){var statearr_30144 = f__6345__auto__.call(null);(statearr_30144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_30144;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__,event_chan,event_fn,___$1,map__30112,map__30112__$1,opts,chart))
);
return c__6344__auto__;
});})(map__30112,map__30112__$1,opts,chart))
;
om_data_vis.chart.t30113.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30112,map__30112__$1,opts,chart){
return (function (_30115){var self__ = this;
var _30115__$1 = this;return self__.meta30114;
});})(map__30112,map__30112__$1,opts,chart))
;
om_data_vis.chart.t30113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30112,map__30112__$1,opts,chart){
return (function (_30115,meta30114__$1){var self__ = this;
var _30115__$1 = this;return (new om_data_vis.chart.t30113(self__.chart,self__.opts,self__.map__30112,self__.p__30078,self__.owner,self__.cursor,self__.chart_figure,meta30114__$1));
});})(map__30112,map__30112__$1,opts,chart))
;
om_data_vis.chart.__GT_t30113 = ((function (map__30112,map__30112__$1,opts,chart){
return (function __GT_t30113(chart__$1,opts__$1,map__30112__$2,p__30078__$1,owner__$1,cursor__$1,chart_figure__$1,meta30114){return (new om_data_vis.chart.t30113(chart__$1,opts__$1,map__30112__$2,p__30078__$1,owner__$1,cursor__$1,chart_figure__$1,meta30114));
});})(map__30112,map__30112__$1,opts,chart))
;
}
return (new om_data_vis.chart.t30113(chart,opts,map__30112__$1,p__30078,owner,cursor,chart_figure,null));
});

//# sourceMappingURL=chart.js.map