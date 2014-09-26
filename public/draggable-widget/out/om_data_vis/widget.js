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
om_data_vis.widget.draggable = (function draggable(cursor,owner,p__30169){var map__30200 = p__30169;var map__30200__$1 = ((cljs.core.seq_QMARK_.call(null,map__30200))?cljs.core.apply.call(null,cljs.core.hash_map,map__30200):map__30200);var id = cljs.core.get.call(null,map__30200__$1,new cljs.core.Keyword(null,"id","id",1013907597));var build_fn = cljs.core.get.call(null,map__30200__$1,new cljs.core.Keyword(null,"build-fn","build-fn",3878167545));if(typeof om_data_vis.widget.t30201 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_data_vis.widget.t30201 = (function (build_fn,id,map__30200,p__30169,owner,cursor,draggable,meta30202){
this.build_fn = build_fn;
this.id = id;
this.map__30200 = map__30200;
this.p__30169 = p__30169;
this.owner = owner;
this.cursor = cursor;
this.draggable = draggable;
this.meta30202 = meta30202;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_data_vis.widget.t30201.cljs$lang$type = true;
om_data_vis.widget.t30201.cljs$lang$ctorStr = "om-data-vis.widget/t30201";
om_data_vis.widget.t30201.cljs$lang$ctorPrWriter = ((function (map__30200,map__30200__$1,id,build_fn){
return (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"om-data-vis.widget/t30201");
});})(map__30200,map__30200__$1,id,build_fn))
;
om_data_vis.widget.t30201.prototype.om$core$IRenderState$ = true;
om_data_vis.widget.t30201.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__30200,map__30200__$1,id,build_fn){
return (function (_,p__30204){var self__ = this;
var map__30205 = p__30204;var map__30205__$1 = ((cljs.core.seq_QMARK_.call(null,map__30205))?cljs.core.apply.call(null,cljs.core.hash_map,map__30205):map__30205);var mouse_chan = cljs.core.get.call(null,map__30205__$1,new cljs.core.Keyword(null,"mouse-chan","mouse-chan",1975028460));var ___$1 = this;return sablono.interpreter.interpret.call(null,(function (){var map__30206 = new cljs.core.Keyword(null,"position","position",1761709211).cljs$core$IFn$_invoke$arity$1(self__.cursor);var map__30206__$1 = ((cljs.core.seq_QMARK_.call(null,map__30206))?cljs.core.apply.call(null,cljs.core.hash_map,map__30206):map__30206);var left = cljs.core.get.call(null,map__30206__$1,new cljs.core.Keyword(null,"left","left",1017222009));var top = cljs.core.get.call(null,map__30206__$1,new cljs.core.Keyword(null,"top","top",1014019271));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),self__.id,new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",1014019271),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((top - 40))+"px"),new cljs.core.Keyword(null,"left","left",1017222009),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((left - 40))+"px"),new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"z-index","z-index",3303828785),100], null)], null),self__.build_fn], null);
})());
});})(map__30200,map__30200__$1,id,build_fn))
;
om_data_vis.widget.t30201.prototype.om$core$IDidMount$ = true;
om_data_vis.widget.t30201.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__30200,map__30200__$1,id,build_fn){
return (function (_){var self__ = this;
var ___$1 = this;var node = om_data_vis.widget.by_id.call(null,self__.id);var mouse_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mouse-chan","mouse-chan",1975028460));goog.events.listen(node,"mousemove",((function (node,mouse_chan,___$1,map__30200,map__30200__$1,id,build_fn){
return (function (p1__30166_SHARP_){return cljs.core.async.put_BANG_.call(null,mouse_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move","move",1017261891),p1__30166_SHARP_], null));
});})(node,mouse_chan,___$1,map__30200,map__30200__$1,id,build_fn))
);
goog.events.listen(node,"mousedown",((function (node,mouse_chan,___$1,map__30200,map__30200__$1,id,build_fn){
return (function (p1__30167_SHARP_){return cljs.core.async.put_BANG_.call(null,mouse_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down","down",1016993812),p1__30167_SHARP_], null));
});})(node,mouse_chan,___$1,map__30200,map__30200__$1,id,build_fn))
);
return goog.events.listen(node,"mouseup",((function (node,mouse_chan,___$1,map__30200,map__30200__$1,id,build_fn){
return (function (p1__30168_SHARP_){return cljs.core.async.put_BANG_.call(null,mouse_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",1013907981),p1__30168_SHARP_], null));
});})(node,mouse_chan,___$1,map__30200,map__30200__$1,id,build_fn))
);
});})(map__30200,map__30200__$1,id,build_fn))
;
om_data_vis.widget.t30201.prototype.om$core$IWillMount$ = true;
om_data_vis.widget.t30201.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__30200,map__30200__$1,id,build_fn){
return (function (_){var self__ = this;
var ___$1 = this;var mouse_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mouse-chan","mouse-chan",1975028460));var c__6344__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__,mouse_chan,___$1,map__30200,map__30200__$1,id,build_fn){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__,mouse_chan,___$1,map__30200,map__30200__$1,id,build_fn){
return (function (state_30218){var state_val_30219 = (state_30218[1]);if((state_val_30219 === 4))
{var inst_30210 = (state_30218[2]);var inst_30211 = cljs.core.nth.call(null,inst_30210,0,null);var inst_30212 = cljs.core.nth.call(null,inst_30210,1,null);var inst_30213 = om_data_vis.widget.handle_drag_event.call(null,self__.cursor,self__.owner,inst_30211,inst_30212);var state_30218__$1 = (function (){var statearr_30220 = state_30218;(statearr_30220[7] = inst_30213);
return statearr_30220;
})();var statearr_30221_30230 = state_30218__$1;(statearr_30221_30230[2] = null);
(statearr_30221_30230[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30219 === 3))
{var inst_30216 = (state_30218[2]);var state_30218__$1 = state_30218;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30218__$1,inst_30216);
} else
{if((state_val_30219 === 2))
{var state_30218__$1 = state_30218;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30218__$1,4,mouse_chan);
} else
{if((state_val_30219 === 1))
{var state_30218__$1 = state_30218;var statearr_30222_30231 = state_30218__$1;(statearr_30222_30231[2] = null);
(statearr_30222_30231[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});})(c__6344__auto__,mouse_chan,___$1,map__30200,map__30200__$1,id,build_fn))
;return ((function (switch__6329__auto__,c__6344__auto__,mouse_chan,___$1,map__30200,map__30200__$1,id,build_fn){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_30226 = [null,null,null,null,null,null,null,null];(statearr_30226[0] = state_machine__6330__auto__);
(statearr_30226[1] = 1);
return statearr_30226;
});
var state_machine__6330__auto____1 = (function (state_30218){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_30218);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e30227){if((e30227 instanceof Object))
{var ex__6333__auto__ = e30227;var statearr_30228_30232 = state_30218;(statearr_30228_30232[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30218);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30227;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30233 = state_30218;
state_30218 = G__30233;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_30218){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_30218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__,mouse_chan,___$1,map__30200,map__30200__$1,id,build_fn))
})();var state__6346__auto__ = (function (){var statearr_30229 = f__6345__auto__.call(null);(statearr_30229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_30229;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__,mouse_chan,___$1,map__30200,map__30200__$1,id,build_fn))
);
return c__6344__auto__;
});})(map__30200,map__30200__$1,id,build_fn))
;
om_data_vis.widget.t30201.prototype.om$core$IInitState$ = true;
om_data_vis.widget.t30201.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__30200,map__30200__$1,id,build_fn){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouse-chan","mouse-chan",1975028460),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1000)),new cljs.core.Keyword(null,"pressed","pressed",695639956),false], null);
});})(map__30200,map__30200__$1,id,build_fn))
;
om_data_vis.widget.t30201.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30200,map__30200__$1,id,build_fn){
return (function (_30203){var self__ = this;
var _30203__$1 = this;return self__.meta30202;
});})(map__30200,map__30200__$1,id,build_fn))
;
om_data_vis.widget.t30201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30200,map__30200__$1,id,build_fn){
return (function (_30203,meta30202__$1){var self__ = this;
var _30203__$1 = this;return (new om_data_vis.widget.t30201(self__.build_fn,self__.id,self__.map__30200,self__.p__30169,self__.owner,self__.cursor,self__.draggable,meta30202__$1));
});})(map__30200,map__30200__$1,id,build_fn))
;
om_data_vis.widget.__GT_t30201 = ((function (map__30200,map__30200__$1,id,build_fn){
return (function __GT_t30201(build_fn__$1,id__$1,map__30200__$2,p__30169__$1,owner__$1,cursor__$1,draggable__$1,meta30202){return (new om_data_vis.widget.t30201(build_fn__$1,id__$1,map__30200__$2,p__30169__$1,owner__$1,cursor__$1,draggable__$1,meta30202));
});})(map__30200,map__30200__$1,id,build_fn))
;
}
return (new om_data_vis.widget.t30201(build_fn,id,map__30200__$1,p__30169,owner,cursor,draggable,null));
});

//# sourceMappingURL=widget.js.map