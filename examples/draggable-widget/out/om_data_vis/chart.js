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
om_data_vis.chart.draw_chart = (function draw_chart(cursor,p__10203){var map__10206 = p__10203;var map__10206__$1 = ((cljs.core.seq_QMARK_.call(null,map__10206))?cljs.core.apply.call(null,cljs.core.hash_map,map__10206):map__10206);var plot = cljs.core.get.call(null,map__10206__$1,new cljs.core.Keyword(null,"plot","plot",1017348179));var y_axis = cljs.core.get.call(null,map__10206__$1,new cljs.core.Keyword(null,"y-axis","y-axis",4522598375));var x_axis = cljs.core.get.call(null,map__10206__$1,new cljs.core.Keyword(null,"x-axis","x-axis",4493969224));var bounds = cljs.core.get.call(null,map__10206__$1,new cljs.core.Keyword(null,"bounds","bounds",3925666343));var div = cljs.core.get.call(null,map__10206__$1,new cljs.core.Keyword(null,"div","div",1014003715));var map__10207 = div;var map__10207__$1 = ((cljs.core.seq_QMARK_.call(null,map__10207))?cljs.core.apply.call(null,cljs.core.hash_map,map__10207):map__10207);var height = cljs.core.get.call(null,map__10207__$1,new cljs.core.Keyword(null,"height","height",4087841945));var width = cljs.core.get.call(null,map__10207__$1,new cljs.core.Keyword(null,"width","width",1127031096));var id = cljs.core.get.call(null,map__10207__$1,new cljs.core.Keyword(null,"id","id",1013907597));var Chart = dimple.chart;var svg = dimple.newSvg(("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),width,height);var data = cljs.core.get_in.call(null,cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",1016980252)], null));var dimple_chart = (new Chart(svg)).setBounds(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(bounds));var x = dimple_chart.addCategoryAxis("x",x_axis);var y = dimple_chart.addMeasureAxis("y",y_axis);var s = dimple_chart.addSeries(null,plot,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));(s["data"] = cljs.core.clj__GT_js.call(null,data));
dimple_chart.addLegend("5%","10%","20%","10%","right");
dimple_chart.draw();
return x.shapes.selectAll("text").attr("transform","rotate(45,0,12.6015625) translate(5, 0)");
});
om_data_vis.chart.chart_figure = (function chart_figure(cursor,owner,p__10208){var map__10242 = p__10208;var map__10242__$1 = ((cljs.core.seq_QMARK_.call(null,map__10242))?cljs.core.apply.call(null,cljs.core.hash_map,map__10242):map__10242);var opts = map__10242__$1;var chart = cljs.core.get.call(null,map__10242__$1,new cljs.core.Keyword(null,"chart","chart",1108527952));if(typeof om_data_vis.chart.t10243 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_data_vis.chart.t10243 = (function (chart,opts,map__10242,p__10208,owner,cursor,chart_figure,meta10244){
this.chart = chart;
this.opts = opts;
this.map__10242 = map__10242;
this.p__10208 = p__10208;
this.owner = owner;
this.cursor = cursor;
this.chart_figure = chart_figure;
this.meta10244 = meta10244;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_data_vis.chart.t10243.cljs$lang$type = true;
om_data_vis.chart.t10243.cljs$lang$ctorStr = "om-data-vis.chart/t10243";
om_data_vis.chart.t10243.cljs$lang$ctorPrWriter = ((function (map__10242,map__10242__$1,opts,chart){
return (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"om-data-vis.chart/t10243");
});})(map__10242,map__10242__$1,opts,chart))
;
om_data_vis.chart.t10243.prototype.om$core$IDidUpdate$ = true;
om_data_vis.chart.t10243.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__10242,map__10242__$1,opts,chart){
return (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;var n_10275 = document.getElementById("chart");while(true){
if(cljs.core.truth_(n_10275.hasChildNodes()))
{n_10275.removeChild(n_10275.lastChild);
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
});})(map__10242,map__10242__$1,opts,chart))
;
om_data_vis.chart.t10243.prototype.om$core$IRender$ = true;
om_data_vis.chart.t10243.prototype.om$core$IRender$render$arity$1 = ((function (map__10242,map__10242__$1,opts,chart){
return (function (_){var self__ = this;
var ___$1 = this;var map__10246 = new cljs.core.Keyword(null,"div","div",1014003715).cljs$core$IFn$_invoke$arity$1(self__.chart);var map__10246__$1 = ((cljs.core.seq_QMARK_.call(null,map__10246))?cljs.core.apply.call(null,cljs.core.hash_map,map__10246):map__10246);var height = cljs.core.get.call(null,map__10246__$1,new cljs.core.Keyword(null,"height","height",4087841945));var width = cljs.core.get.call(null,map__10246__$1,new cljs.core.Keyword(null,"width","width",1127031096));var id = cljs.core.get.call(null,map__10246__$1,new cljs.core.Keyword(null,"id","id",1013907597));return React.DOM.div({"id": id, "width": width, "height": height});
});})(map__10242,map__10242__$1,opts,chart))
;
om_data_vis.chart.t10243.prototype.om$core$IWillMount$ = true;
om_data_vis.chart.t10243.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__10242,map__10242__$1,opts,chart){
return (function (_){var self__ = this;
var ___$1 = this;var event_chan = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-chan","event-chan",1951581719)], null));var event_fn = new cljs.core.Keyword(null,"event-fn","event-fn",1291974733).cljs$core$IFn$_invoke$arity$1(self__.opts);var c__6344__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__,event_chan,event_fn,___$1,map__10242,map__10242__$1,opts,chart){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__,event_chan,event_fn,___$1,map__10242,map__10242__$1,opts,chart){
return (function (state_10259){var state_val_10260 = (state_10259[1]);if((state_val_10260 === 7))
{var inst_10250 = (state_10259[2]);var inst_10251 = event_fn.call(null,self__.cursor,self__.owner,inst_10250);var state_10259__$1 = (function (){var statearr_10261 = state_10259;(statearr_10261[7] = inst_10251);
return statearr_10261;
})();var statearr_10262_10276 = state_10259__$1;(statearr_10262_10276[2] = null);
(statearr_10262_10276[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10260 === 6))
{var inst_10255 = (state_10259[2]);var state_10259__$1 = state_10259;var statearr_10263_10277 = state_10259__$1;(statearr_10263_10277[2] = inst_10255);
(statearr_10263_10277[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10260 === 5))
{var state_10259__$1 = state_10259;var statearr_10264_10278 = state_10259__$1;(statearr_10264_10278[2] = null);
(statearr_10264_10278[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10260 === 4))
{var state_10259__$1 = state_10259;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10259__$1,7,event_chan);
} else
{if((state_val_10260 === 3))
{var inst_10257 = (state_10259[2]);var state_10259__$1 = state_10259;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10259__$1,inst_10257);
} else
{if((state_val_10260 === 2))
{var state_10259__$1 = state_10259;if(true)
{var statearr_10265_10279 = state_10259__$1;(statearr_10265_10279[1] = 4);
} else
{var statearr_10266_10280 = state_10259__$1;(statearr_10266_10280[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10260 === 1))
{var state_10259__$1 = state_10259;var statearr_10267_10281 = state_10259__$1;(statearr_10267_10281[2] = null);
(statearr_10267_10281[1] = 2);
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
});})(c__6344__auto__,event_chan,event_fn,___$1,map__10242,map__10242__$1,opts,chart))
;return ((function (switch__6329__auto__,c__6344__auto__,event_chan,event_fn,___$1,map__10242,map__10242__$1,opts,chart){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_10271 = [null,null,null,null,null,null,null,null];(statearr_10271[0] = state_machine__6330__auto__);
(statearr_10271[1] = 1);
return statearr_10271;
});
var state_machine__6330__auto____1 = (function (state_10259){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_10259);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e10272){if((e10272 instanceof Object))
{var ex__6333__auto__ = e10272;var statearr_10273_10282 = state_10259;(statearr_10273_10282[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10259);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10272;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10283 = state_10259;
state_10259 = G__10283;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_10259){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_10259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__,event_chan,event_fn,___$1,map__10242,map__10242__$1,opts,chart))
})();var state__6346__auto__ = (function (){var statearr_10274 = f__6345__auto__.call(null);(statearr_10274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_10274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__,event_chan,event_fn,___$1,map__10242,map__10242__$1,opts,chart))
);
return c__6344__auto__;
});})(map__10242,map__10242__$1,opts,chart))
;
om_data_vis.chart.t10243.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10242,map__10242__$1,opts,chart){
return (function (_10245){var self__ = this;
var _10245__$1 = this;return self__.meta10244;
});})(map__10242,map__10242__$1,opts,chart))
;
om_data_vis.chart.t10243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10242,map__10242__$1,opts,chart){
return (function (_10245,meta10244__$1){var self__ = this;
var _10245__$1 = this;return (new om_data_vis.chart.t10243(self__.chart,self__.opts,self__.map__10242,self__.p__10208,self__.owner,self__.cursor,self__.chart_figure,meta10244__$1));
});})(map__10242,map__10242__$1,opts,chart))
;
om_data_vis.chart.__GT_t10243 = ((function (map__10242,map__10242__$1,opts,chart){
return (function __GT_t10243(chart__$1,opts__$1,map__10242__$2,p__10208__$1,owner__$1,cursor__$1,chart_figure__$1,meta10244){return (new om_data_vis.chart.t10243(chart__$1,opts__$1,map__10242__$2,p__10208__$1,owner__$1,cursor__$1,chart_figure__$1,meta10244));
});})(map__10242,map__10242__$1,opts,chart))
;
}
return (new om_data_vis.chart.t10243(chart,opts,map__10242__$1,p__10208,owner,cursor,chart_figure,null));
});

//# sourceMappingURL=chart.js.map