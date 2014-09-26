// Compiled by ClojureScript 0.0-2227
goog.provide('om_data_vis.widget');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('om.core');
om_data_vis.widget.by_id = (function by_id(id){return document.getElementById(id);
});
om_data_vis.widget.handle_drag_event = (function handle_drag_event(cursor,owner,evt_type,e){if(cljs.core._EQ_.call(null,evt_type,new cljs.core.Keyword(null,"down","down",1016993812)))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"pressed","pressed",695639956),true);
} else
{}
if(cljs.core._EQ_.call(null,evt_type,new cljs.core.Keyword(null,"up","up",1013907981)))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"pressed","pressed",695639956),false);
} else
{}
if(cljs.core.truth_((function (){var and__3545__auto__ = cljs.core._EQ_.call(null,evt_type,new cljs.core.Keyword(null,"move","move",1017261891));if(and__3545__auto__)
{return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"pressed","pressed",695639956));
} else
{return and__3545__auto__;
}
})()))
{return om.core.update_BANG_.call(null,cursor,new cljs.core.Keyword(null,"position","position",1761709211),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",1014019271),e.clientY,new cljs.core.Keyword(null,"left","left",1017222009),e.clientX], null));
} else
{return null;
}
});
om_data_vis.widget.draggable = (function draggable(cursor,owner,p__30008){var map__30039 = p__30008;var map__30039__$1 = ((cljs.core.seq_QMARK_.call(null,map__30039))?cljs.core.apply.call(null,cljs.core.hash_map,map__30039):map__30039);var id = cljs.core.get.call(null,map__30039__$1,new cljs.core.Keyword(null,"id","id",1013907597));var build_fn = cljs.core.get.call(null,map__30039__$1,new cljs.core.Keyword(null,"build-fn","build-fn",3878167545));if(typeof om_data_vis.widget.t30040 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_data_vis.widget.t30040 = (function (build_fn,id,map__30039,p__30008,owner,cursor,draggable,meta30041){
this.build_fn = build_fn;
this.id = id;
this.map__30039 = map__30039;
this.p__30008 = p__30008;
this.owner = owner;
this.cursor = cursor;
this.draggable = draggable;
this.meta30041 = meta30041;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_data_vis.widget.t30040.cljs$lang$type = true;
om_data_vis.widget.t30040.cljs$lang$ctorStr = "om-data-vis.widget/t30040";
om_data_vis.widget.t30040.cljs$lang$ctorPrWriter = ((function (map__30039,map__30039__$1,id,build_fn){
return (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"om-data-vis.widget/t30040");
});})(map__30039,map__30039__$1,id,build_fn))
;
om_data_vis.widget.t30040.prototype.om$core$IRenderState$ = true;
om_data_vis.widget.t30040.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__30039,map__30039__$1,id,build_fn){
return (function (_,p__30043){var self__ = this;
var map__30044 = p__30043;var map__30044__$1 = ((cljs.core.seq_QMARK_.call(null,map__30044))?cljs.core.apply.call(null,cljs.core.hash_map,map__30044):map__30044);var mouse_chan = cljs.core.get.call(null,map__30044__$1,new cljs.core.Keyword(null,"mouse-chan","mouse-chan",1975028460));var ___$1 = this;return sablono.interpreter.interpret.call(null,(function (){var map__30045 = new cljs.core.Keyword(null,"position","position",1761709211).cljs$core$IFn$_invoke$arity$1(self__.cursor);var map__30045__$1 = ((cljs.core.seq_QMARK_.call(null,map__30045))?cljs.core.apply.call(null,cljs.core.hash_map,map__30045):map__30045);var left = cljs.core.get.call(null,map__30045__$1,new cljs.core.Keyword(null,"left","left",1017222009));var top = cljs.core.get.call(null,map__30045__$1,new cljs.core.Keyword(null,"top","top",1014019271));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),self__.id,new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",1014019271),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((top - 40))+"px"),new cljs.core.Keyword(null,"left","left",1017222009),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((left - 40))+"px"),new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"z-index","z-index",3303828785),100], null)], null),self__.build_fn], null);
})());
});})(map__30039,map__30039__$1,id,build_fn))
;
om_data_vis.widget.t30040.prototype.om$core$IDidMount$ = true;
om_data_vis.widget.t30040.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__30039,map__30039__$1,id,build_fn){
return (function (_){var self__ = this;
var ___$1 = this;var node = om_data_vis.widget.by_id.call(null,self__.id);var mouse_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mouse-chan","mouse-chan",1975028460));goog.events.listen(node,"mousemove",((function (node,mouse_chan,___$1,map__30039,map__30039__$1,id,build_fn){
return (function (p1__30005_SHARP_){return cljs.core.async.put_BANG_.call(null,mouse_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move","move",1017261891),p1__30005_SHARP_], null));
});})(node,mouse_chan,___$1,map__30039,map__30039__$1,id,build_fn))
);
goog.events.listen(node,"mousedown",((function (node,mouse_chan,___$1,map__30039,map__30039__$1,id,build_fn){
return (function (p1__30006_SHARP_){return cljs.core.async.put_BANG_.call(null,mouse_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down","down",1016993812),p1__30006_SHARP_], null));
});})(node,mouse_chan,___$1,map__30039,map__30039__$1,id,build_fn))
);
return goog.events.listen(node,"mouseup",((function (node,mouse_chan,___$1,map__30039,map__30039__$1,id,build_fn){
return (function (p1__30007_SHARP_){return cljs.core.async.put_BANG_.call(null,mouse_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",1013907981),p1__30007_SHARP_], null));
});})(node,mouse_chan,___$1,map__30039,map__30039__$1,id,build_fn))
);
});})(map__30039,map__30039__$1,id,build_fn))
;
om_data_vis.widget.t30040.prototype.om$core$IWillMount$ = true;
om_data_vis.widget.t30040.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__30039,map__30039__$1,id,build_fn){
return (function (_){var self__ = this;
var ___$1 = this;var mouse_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mouse-chan","mouse-chan",1975028460));var c__6344__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__,mouse_chan,___$1,map__30039,map__30039__$1,id,build_fn){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__,mouse_chan,___$1,map__30039,map__30039__$1,id,build_fn){
return (function (state_30057){var state_val_30058 = (state_30057[1]);if((state_val_30058 === 4))
{var inst_30049 = (state_30057[2]);var inst_30050 = cljs.core.nth.call(null,inst_30049,0,null);var inst_30051 = cljs.core.nth.call(null,inst_30049,1,null);var inst_30052 = om_data_vis.widget.handle_drag_event.call(null,self__.cursor,self__.owner,inst_30050,inst_30051);var state_30057__$1 = (function (){var statearr_30059 = state_30057;(statearr_30059[7] = inst_30052);
return statearr_30059;
})();var statearr_30060_30069 = state_30057__$1;(statearr_30060_30069[2] = null);
(statearr_30060_30069[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30058 === 3))
{var inst_30055 = (state_30057[2]);var state_30057__$1 = state_30057;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30057__$1,inst_30055);
} else
{if((state_val_30058 === 2))
{var state_30057__$1 = state_30057;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30057__$1,4,mouse_chan);
} else
{if((state_val_30058 === 1))
{var state_30057__$1 = state_30057;var statearr_30061_30070 = state_30057__$1;(statearr_30061_30070[2] = null);
(statearr_30061_30070[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});})(c__6344__auto__,mouse_chan,___$1,map__30039,map__30039__$1,id,build_fn))
;return ((function (switch__6329__auto__,c__6344__auto__,mouse_chan,___$1,map__30039,map__30039__$1,id,build_fn){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_30065 = [null,null,null,null,null,null,null,null];(statearr_30065[0] = state_machine__6330__auto__);
(statearr_30065[1] = 1);
return statearr_30065;
});
var state_machine__6330__auto____1 = (function (state_30057){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_30057);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e30066){if((e30066 instanceof Object))
{var ex__6333__auto__ = e30066;var statearr_30067_30071 = state_30057;(statearr_30067_30071[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30057);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30066;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30072 = state_30057;
state_30057 = G__30072;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_30057){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_30057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__,mouse_chan,___$1,map__30039,map__30039__$1,id,build_fn))
})();var state__6346__auto__ = (function (){var statearr_30068 = f__6345__auto__.call(null);(statearr_30068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_30068;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__,mouse_chan,___$1,map__30039,map__30039__$1,id,build_fn))
);
return c__6344__auto__;
});})(map__30039,map__30039__$1,id,build_fn))
;
om_data_vis.widget.t30040.prototype.om$core$IInitState$ = true;
om_data_vis.widget.t30040.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__30039,map__30039__$1,id,build_fn){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouse-chan","mouse-chan",1975028460),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1000)),new cljs.core.Keyword(null,"pressed","pressed",695639956),false], null);
});})(map__30039,map__30039__$1,id,build_fn))
;
om_data_vis.widget.t30040.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30039,map__30039__$1,id,build_fn){
return (function (_30042){var self__ = this;
var _30042__$1 = this;return self__.meta30041;
});})(map__30039,map__30039__$1,id,build_fn))
;
om_data_vis.widget.t30040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30039,map__30039__$1,id,build_fn){
return (function (_30042,meta30041__$1){var self__ = this;
var _30042__$1 = this;return (new om_data_vis.widget.t30040(self__.build_fn,self__.id,self__.map__30039,self__.p__30008,self__.owner,self__.cursor,self__.draggable,meta30041__$1));
});})(map__30039,map__30039__$1,id,build_fn))
;
om_data_vis.widget.__GT_t30040 = ((function (map__30039,map__30039__$1,id,build_fn){
return (function __GT_t30040(build_fn__$1,id__$1,map__30039__$2,p__30008__$1,owner__$1,cursor__$1,draggable__$1,meta30041){return (new om_data_vis.widget.t30040(build_fn__$1,id__$1,map__30039__$2,p__30008__$1,owner__$1,cursor__$1,draggable__$1,meta30041));
});})(map__30039,map__30039__$1,id,build_fn))
;
}
return (new om_data_vis.widget.t30040(build_fn,id,map__30039__$1,p__30008,owner,cursor,draggable,null));
});

//# sourceMappingURL=widget.js.map