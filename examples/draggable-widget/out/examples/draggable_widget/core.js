// Compiled by ClojureScript 0.0-2227
goog.provide('examples.draggable_widget.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om_data_vis.widget');
goog.require('om_data_vis.widget');
goog.require('ajax.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('om.core');
examples.draggable_widget.core.app_model = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"draggable-box","draggable-box",2329629949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",1761709211),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",1014019271),40,new cljs.core.Keyword(null,"left","left",1017222009),40], null),new cljs.core.Keyword(null,"text","text",1017460895),"Drag me!"], null),new cljs.core.Keyword(null,"draggable-circle","draggable-circle",1949906050),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",1761709211),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",1014019271),150,new cljs.core.Keyword(null,"left","left",1017222009),150], null),new cljs.core.Keyword(null,"text","text",1017460895),"Drag me too!"], null)], null));
examples.draggable_widget.core.box = (function box(cursor,owner){if(typeof examples.draggable_widget.core.t29922 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.draggable_widget.core.t29922 = (function (owner,cursor,box,meta29923){
this.owner = owner;
this.cursor = cursor;
this.box = box;
this.meta29923 = meta29923;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.draggable_widget.core.t29922.cljs$lang$type = true;
examples.draggable_widget.core.t29922.cljs$lang$ctorStr = "examples.draggable-widget.core/t29922";
examples.draggable_widget.core.t29922.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"examples.draggable-widget.core/t29922");
});
examples.draggable_widget.core.t29922.prototype.om$core$IRender$ = true;
examples.draggable_widget.core.t29922.prototype.om$core$IRender$render$arity$1 = (function (this__5120__auto__){var self__ = this;
var this__5120__auto____$1 = this;return React.DOM.div({"style": {"width": "80px", "height": "80px", "border": "solid", "color": "black", "display": "inline-block"}},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(self__.cursor)));
});
examples.draggable_widget.core.t29922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29924){var self__ = this;
var _29924__$1 = this;return self__.meta29923;
});
examples.draggable_widget.core.t29922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29924,meta29923__$1){var self__ = this;
var _29924__$1 = this;return (new examples.draggable_widget.core.t29922(self__.owner,self__.cursor,self__.box,meta29923__$1));
});
examples.draggable_widget.core.__GT_t29922 = (function __GT_t29922(owner__$1,cursor__$1,box__$1,meta29923){return (new examples.draggable_widget.core.t29922(owner__$1,cursor__$1,box__$1,meta29923));
});
}
return (new examples.draggable_widget.core.t29922(owner,cursor,box,null));
});
examples.draggable_widget.core.circle = (function circle(cursor,owner){if(typeof examples.draggable_widget.core.t29928 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.draggable_widget.core.t29928 = (function (owner,cursor,circle,meta29929){
this.owner = owner;
this.cursor = cursor;
this.circle = circle;
this.meta29929 = meta29929;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.draggable_widget.core.t29928.cljs$lang$type = true;
examples.draggable_widget.core.t29928.cljs$lang$ctorStr = "examples.draggable-widget.core/t29928";
examples.draggable_widget.core.t29928.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"examples.draggable-widget.core/t29928");
});
examples.draggable_widget.core.t29928.prototype.om$core$IRender$ = true;
examples.draggable_widget.core.t29928.prototype.om$core$IRender$render$arity$1 = (function (this__5120__auto__){var self__ = this;
var this__5120__auto____$1 = this;return React.DOM.div({"style": {"width": "100px", "height": "100px", "borderRadius": "50%", "border": "solid", "color": "black", "paddingTop": "30px", "textAlign": "center", "display": "inline-block"}},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(self__.cursor)));
});
examples.draggable_widget.core.t29928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29930){var self__ = this;
var _29930__$1 = this;return self__.meta29929;
});
examples.draggable_widget.core.t29928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29930,meta29929__$1){var self__ = this;
var _29930__$1 = this;return (new examples.draggable_widget.core.t29928(self__.owner,self__.cursor,self__.circle,meta29929__$1));
});
examples.draggable_widget.core.__GT_t29928 = (function __GT_t29928(owner__$1,cursor__$1,circle__$1,meta29929){return (new examples.draggable_widget.core.t29928(owner__$1,cursor__$1,circle__$1,meta29929));
});
}
return (new examples.draggable_widget.core.t29928(owner,cursor,circle,null));
});
examples.draggable_widget.core.draggable_widget = (function draggable_widget(cursor,owner){if(typeof examples.draggable_widget.core.t29934 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.draggable_widget.core.t29934 = (function (owner,cursor,draggable_widget,meta29935){
this.owner = owner;
this.cursor = cursor;
this.draggable_widget = draggable_widget;
this.meta29935 = meta29935;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.draggable_widget.core.t29934.cljs$lang$type = true;
examples.draggable_widget.core.t29934.cljs$lang$ctorStr = "examples.draggable-widget.core/t29934";
examples.draggable_widget.core.t29934.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"examples.draggable-widget.core/t29934");
});
examples.draggable_widget.core.t29934.prototype.om$core$IRenderState$ = true;
examples.draggable_widget.core.t29934.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "container"},sablono.interpreter.interpret.call(null,om.core.build.call(null,om_data_vis.widget.draggable,new cljs.core.Keyword(null,"draggable-box","draggable-box",2329629949).cljs$core$IFn$_invoke$arity$1(self__.cursor),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"box-widget",new cljs.core.Keyword(null,"build-fn","build-fn",3878167545),om.core.build.call(null,examples.draggable_widget.core.box,new cljs.core.Keyword(null,"draggable-box","draggable-box",2329629949).cljs$core$IFn$_invoke$arity$1(self__.cursor))], null)], null))),sablono.interpreter.interpret.call(null,om.core.build.call(null,om_data_vis.widget.draggable,new cljs.core.Keyword(null,"draggable-circle","draggable-circle",1949906050).cljs$core$IFn$_invoke$arity$1(self__.cursor),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"circle-widget",new cljs.core.Keyword(null,"build-fn","build-fn",3878167545),om.core.build.call(null,examples.draggable_widget.core.circle,new cljs.core.Keyword(null,"draggable-circle","draggable-circle",1949906050).cljs$core$IFn$_invoke$arity$1(self__.cursor))], null)], null))));
});
examples.draggable_widget.core.t29934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29936){var self__ = this;
var _29936__$1 = this;return self__.meta29935;
});
examples.draggable_widget.core.t29934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29936,meta29935__$1){var self__ = this;
var _29936__$1 = this;return (new examples.draggable_widget.core.t29934(self__.owner,self__.cursor,self__.draggable_widget,meta29935__$1));
});
examples.draggable_widget.core.__GT_t29934 = (function __GT_t29934(owner__$1,cursor__$1,draggable_widget__$1,meta29935){return (new examples.draggable_widget.core.t29934(owner__$1,cursor__$1,draggable_widget__$1,meta29935));
});
}
return (new examples.draggable_widget.core.t29934(owner,cursor,draggable_widget,null));
});
om.core.root.call(null,examples.draggable_widget.core.draggable_widget,examples.draggable_widget.core.app_model,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map