// Compiled by ClojureScript 0.0-2227
goog.provide('om_data_vis.forms');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('ajax.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('om.core');
om_data_vis.forms.input_box = (function (){var method_table__4423__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4424__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4425__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4426__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4427__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("input-box",((function (method_table__4423__auto__,prefer_table__4424__auto__,method_cache__4425__auto__,cached_hierarchy__4426__auto__,hierarchy__4427__auto__){
return (function (cursor,owner,opts){return !((new cljs.core.Keyword(null,"default-value","default-value",901118551).cljs$core$IFn$_invoke$arity$1(opts) == null));
});})(method_table__4423__auto__,prefer_table__4424__auto__,method_cache__4425__auto__,cached_hierarchy__4426__auto__,hierarchy__4427__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4427__auto__,method_table__4423__auto__,prefer_table__4424__auto__,method_cache__4425__auto__,cached_hierarchy__4426__auto__));
})();
cljs.core._add_method.call(null,om_data_vis.forms.input_box,true,(function (cursor,owner,p__10284){var map__10285 = p__10284;var map__10285__$1 = ((cljs.core.seq_QMARK_.call(null,map__10285))?cljs.core.apply.call(null,cljs.core.hash_map,map__10285):map__10285);var default_value = cljs.core.get.call(null,map__10285__$1,new cljs.core.Keyword(null,"default-value","default-value",901118551));if(typeof om_data_vis.forms.t10286 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_data_vis.forms.t10286 = (function (default_value,map__10285,p__10284,owner,cursor,meta10287){
this.default_value = default_value;
this.map__10285 = map__10285;
this.p__10284 = p__10284;
this.owner = owner;
this.cursor = cursor;
this.meta10287 = meta10287;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_data_vis.forms.t10286.cljs$lang$type = true;
om_data_vis.forms.t10286.cljs$lang$ctorStr = "om-data-vis.forms/t10286";
om_data_vis.forms.t10286.cljs$lang$ctorPrWriter = ((function (map__10285,map__10285__$1,default_value){
return (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"om-data-vis.forms/t10286");
});})(map__10285,map__10285__$1,default_value))
;
om_data_vis.forms.t10286.prototype.om$core$IRenderState$ = true;
om_data_vis.forms.t10286.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__10285,map__10285__$1,default_value){
return (function (_,p__10289){var self__ = this;
var map__10290 = p__10289;var map__10290__$1 = ((cljs.core.seq_QMARK_.call(null,map__10290))?cljs.core.apply.call(null,cljs.core.hash_map,map__10290):map__10290);var event_chan = cljs.core.get.call(null,map__10290__$1,new cljs.core.Keyword(null,"event-chan","event-chan",1951581719));var ___$1 = this;return React.DOM.div({"className": "form-inline", "role": "form"},React.DOM.div({"className": "form-group"},sablono.interpreter.input.call(null,{"className": "form-control", "type": "text", "defaultValue": self__.default_value, "style": {"width": "100%"}, "onChange": ((function (___$1,map__10290,map__10290__$1,event_chan,map__10285,map__10285__$1,default_value){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"value","value",1125876963),e.target.value);
});})(___$1,map__10290,map__10290__$1,event_chan,map__10285,map__10285__$1,default_value))
, "onKeyPress": ((function (___$1,map__10290,map__10290__$1,event_chan,map__10285,map__10285__$1,default_value){
return (function (e){if(cljs.core._EQ_.call(null,e.keyCode,13))
{var value = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"value","value",1125876963));if(cljs.core.truth_(value))
{return cljs.core.async.put_BANG_.call(null,event_chan,value);
} else
{return null;
}
} else
{return null;
}
});})(___$1,map__10290,map__10290__$1,event_chan,map__10285,map__10285__$1,default_value))
})),React.DOM.button({"className": "btn btn-primary", "type": "button", "onClick": ((function (___$1,map__10290,map__10290__$1,event_chan,map__10285,map__10285__$1,default_value){
return (function (e){var value = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"value","value",1125876963));if(cljs.core.truth_(value))
{return cljs.core.async.put_BANG_.call(null,event_chan,value);
} else
{return null;
}
});})(___$1,map__10290,map__10290__$1,event_chan,map__10285,map__10285__$1,default_value))
},"Go"));
});})(map__10285,map__10285__$1,default_value))
;
om_data_vis.forms.t10286.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10285,map__10285__$1,default_value){
return (function (_10288){var self__ = this;
var _10288__$1 = this;return self__.meta10287;
});})(map__10285,map__10285__$1,default_value))
;
om_data_vis.forms.t10286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10285,map__10285__$1,default_value){
return (function (_10288,meta10287__$1){var self__ = this;
var _10288__$1 = this;return (new om_data_vis.forms.t10286(self__.default_value,self__.map__10285,self__.p__10284,self__.owner,self__.cursor,meta10287__$1));
});})(map__10285,map__10285__$1,default_value))
;
om_data_vis.forms.__GT_t10286 = ((function (map__10285,map__10285__$1,default_value){
return (function __GT_t10286(default_value__$1,map__10285__$2,p__10284__$1,owner__$1,cursor__$1,meta10287){return (new om_data_vis.forms.t10286(default_value__$1,map__10285__$2,p__10284__$1,owner__$1,cursor__$1,meta10287));
});})(map__10285,map__10285__$1,default_value))
;
}
return (new om_data_vis.forms.t10286(default_value,map__10285__$1,p__10284,owner,cursor,null));
}));
cljs.core._add_method.call(null,om_data_vis.forms.input_box,false,(function (cursor,owner){if(typeof om_data_vis.forms.t10291 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_data_vis.forms.t10291 = (function (owner,cursor,meta10292){
this.owner = owner;
this.cursor = cursor;
this.meta10292 = meta10292;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_data_vis.forms.t10291.cljs$lang$type = true;
om_data_vis.forms.t10291.cljs$lang$ctorStr = "om-data-vis.forms/t10291";
om_data_vis.forms.t10291.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"om-data-vis.forms/t10291");
});
om_data_vis.forms.t10291.prototype.om$core$IRenderState$ = true;
om_data_vis.forms.t10291.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10294){var self__ = this;
var map__10295 = p__10294;var map__10295__$1 = ((cljs.core.seq_QMARK_.call(null,map__10295))?cljs.core.apply.call(null,cljs.core.hash_map,map__10295):map__10295);var event_chan = cljs.core.get.call(null,map__10295__$1,new cljs.core.Keyword(null,"event-chan","event-chan",1951581719));var ___$1 = this;return React.DOM.div({"className": "form-inline", "role": "form"},React.DOM.div({"className": "form-group"},sablono.interpreter.input.call(null,{"className": "form-control", "type": "text", "style": {"width": "100%"}, "onChange": ((function (___$1,map__10295,map__10295__$1,event_chan){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"value","value",1125876963),e.target.value);
});})(___$1,map__10295,map__10295__$1,event_chan))
, "onKeyPress": ((function (___$1,map__10295,map__10295__$1,event_chan){
return (function (e){if(cljs.core._EQ_.call(null,e.keyCode,13))
{var value = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"value","value",1125876963));if(cljs.core.truth_(value))
{return cljs.core.async.put_BANG_.call(null,event_chan,value);
} else
{return null;
}
} else
{return null;
}
});})(___$1,map__10295,map__10295__$1,event_chan))
})),React.DOM.button({"className": "btn btn-primary", "type": "button", "onClick": ((function (___$1,map__10295,map__10295__$1,event_chan){
return (function (e){var value = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"value","value",1125876963));if(cljs.core.truth_(value))
{return cljs.core.async.put_BANG_.call(null,event_chan,value);
} else
{return null;
}
});})(___$1,map__10295,map__10295__$1,event_chan))
},"Go"));
});
om_data_vis.forms.t10291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10293){var self__ = this;
var _10293__$1 = this;return self__.meta10292;
});
om_data_vis.forms.t10291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10293,meta10292__$1){var self__ = this;
var _10293__$1 = this;return (new om_data_vis.forms.t10291(self__.owner,self__.cursor,meta10292__$1));
});
om_data_vis.forms.__GT_t10291 = (function __GT_t10291(owner__$1,cursor__$1,meta10292){return (new om_data_vis.forms.t10291(owner__$1,cursor__$1,meta10292));
});
}
return (new om_data_vis.forms.t10291(owner,cursor,null));
}));

//# sourceMappingURL=forms.js.map