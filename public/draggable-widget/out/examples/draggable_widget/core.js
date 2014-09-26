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
examples.draggable_widget.core.box = (function box(cursor,owner){if(typeof examples.draggable_widget.core.t34685 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.draggable_widget.core.t34685 = (function (owner,cursor,box,meta34686){
this.owner = owner;
this.cursor = cursor;
this.box = box;
this.meta34686 = meta34686;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.draggable_widget.core.t34685.cljs$lang$type = true;
examples.draggable_widget.core.t34685.cljs$lang$ctorStr = "examples.draggable-widget.core/t34685";
examples.draggable_widget.core.t34685.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"examples.draggable-widget.core/t34685");
});
examples.draggable_widget.core.t34685.prototype.om$core$IRender$ = true;
examples.draggable_widget.core.t34685.prototype.om$core$IRender$render$arity$1 = (function (this__5120__auto__){var self__ = this;
var this__5120__auto____$1 = this;return React.DOM.div({"className": "disable-select", "style": {"width": "80px", "height": "80px", "border": "solid", "color": "black", "display": "inline-block"}},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(self__.cursor)));
});
examples.draggable_widget.core.t34685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34687){var self__ = this;
var _34687__$1 = this;return self__.meta34686;
});
examples.draggable_widget.core.t34685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34687,meta34686__$1){var self__ = this;
var _34687__$1 = this;return (new examples.draggable_widget.core.t34685(self__.owner,self__.cursor,self__.box,meta34686__$1));
});
examples.draggable_widget.core.__GT_t34685 = (function __GT_t34685(owner__$1,cursor__$1,box__$1,meta34686){return (new examples.draggable_widget.core.t34685(owner__$1,cursor__$1,box__$1,meta34686));
});
}
return (new examples.draggable_widget.core.t34685(owner,cursor,box,null));
});
examples.draggable_widget.core.circle = (function circle(cursor,owner){if(typeof examples.draggable_widget.core.t34691 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.draggable_widget.core.t34691 = (function (owner,cursor,circle,meta34692){
this.owner = owner;
this.cursor = cursor;
this.circle = circle;
this.meta34692 = meta34692;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.draggable_widget.core.t34691.cljs$lang$type = true;
examples.draggable_widget.core.t34691.cljs$lang$ctorStr = "examples.draggable-widget.core/t34691";
examples.draggable_widget.core.t34691.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"examples.draggable-widget.core/t34691");
});
examples.draggable_widget.core.t34691.prototype.om$core$IRender$ = true;
examples.draggable_widget.core.t34691.prototype.om$core$IRender$render$arity$1 = (function (this__5120__auto__){var self__ = this;
var this__5120__auto____$1 = this;return React.DOM.div({"className": "disable-select", "style": {"width": "100px", "height": "100px", "borderRadius": "50%", "border": "solid", "color": "black", "paddingTop": "30px", "textAlign": "center", "display": "inline-block"}},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(self__.cursor)));
});
examples.draggable_widget.core.t34691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34693){var self__ = this;
var _34693__$1 = this;return self__.meta34692;
});
examples.draggable_widget.core.t34691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34693,meta34692__$1){var self__ = this;
var _34693__$1 = this;return (new examples.draggable_widget.core.t34691(self__.owner,self__.cursor,self__.circle,meta34692__$1));
});
examples.draggable_widget.core.__GT_t34691 = (function __GT_t34691(owner__$1,cursor__$1,circle__$1,meta34692){return (new examples.draggable_widget.core.t34691(owner__$1,cursor__$1,circle__$1,meta34692));
});
}
return (new examples.draggable_widget.core.t34691(owner,cursor,circle,null));
});
examples.draggable_widget.core.draggable_widget = (function draggable_widget(cursor,owner){if(typeof examples.draggable_widget.core.t34697 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.draggable_widget.core.t34697 = (function (owner,cursor,draggable_widget,meta34698){
this.owner = owner;
this.cursor = cursor;
this.draggable_widget = draggable_widget;
this.meta34698 = meta34698;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.draggable_widget.core.t34697.cljs$lang$type = true;
examples.draggable_widget.core.t34697.cljs$lang$ctorStr = "examples.draggable-widget.core/t34697";
examples.draggable_widget.core.t34697.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"examples.draggable-widget.core/t34697");
});
examples.draggable_widget.core.t34697.prototype.om$core$IRenderState$ = true;
examples.draggable_widget.core.t34697.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "container"},sablono.interpreter.interpret.call(null,om.core.build.call(null,om_data_vis.widget.draggable,new cljs.core.Keyword(null,"draggable-box","draggable-box",2329629949).cljs$core$IFn$_invoke$arity$1(self__.cursor),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"box-widget",new cljs.core.Keyword(null,"build-fn","build-fn",3878167545),om.core.build.call(null,examples.draggable_widget.core.box,new cljs.core.Keyword(null,"draggable-box","draggable-box",2329629949).cljs$core$IFn$_invoke$arity$1(self__.cursor))], null)], null))),sablono.interpreter.interpret.call(null,om.core.build.call(null,om_data_vis.widget.draggable,new cljs.core.Keyword(null,"draggable-circle","draggable-circle",1949906050).cljs$core$IFn$_invoke$arity$1(self__.cursor),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"circle-widget",new cljs.core.Keyword(null,"build-fn","build-fn",3878167545),om.core.build.call(null,examples.draggable_widget.core.circle,new cljs.core.Keyword(null,"draggable-circle","draggable-circle",1949906050).cljs$core$IFn$_invoke$arity$1(self__.cursor))], null)], null))));
});
examples.draggable_widget.core.t34697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34699){var self__ = this;
var _34699__$1 = this;return self__.meta34698;
});
examples.draggable_widget.core.t34697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34699,meta34698__$1){var self__ = this;
var _34699__$1 = this;return (new examples.draggable_widget.core.t34697(self__.owner,self__.cursor,self__.draggable_widget,meta34698__$1));
});
examples.draggable_widget.core.__GT_t34697 = (function __GT_t34697(owner__$1,cursor__$1,draggable_widget__$1,meta34698){return (new examples.draggable_widget.core.t34697(owner__$1,cursor__$1,draggable_widget__$1,meta34698));
});
}
return (new examples.draggable_widget.core.t34697(owner,cursor,draggable_widget,null));
});
om.core.root.call(null,examples.draggable_widget.core.draggable_widget,examples.draggable_widget.core.app_model,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map