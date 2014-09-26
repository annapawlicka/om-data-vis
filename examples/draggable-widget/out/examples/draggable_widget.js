// Compiled by ClojureScript 0.0-2227
goog.provide('examples.draggable_widget');
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
cljs.core.enable_console_print_BANG_.call(null);
examples.draggable_widget.app_model = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),"Drag me!"], null));
examples.draggable_widget.draggable_widget = (function draggable_widget(cursor,owner){if(typeof examples.draggable_widget.t10753 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.draggable_widget.t10753 = (function (owner,cursor,draggable_widget,meta10754){
this.owner = owner;
this.cursor = cursor;
this.draggable_widget = draggable_widget;
this.meta10754 = meta10754;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.draggable_widget.t10753.cljs$lang$type = true;
examples.draggable_widget.t10753.cljs$lang$ctorStr = "examples.draggable-widget/t10753";
examples.draggable_widget.t10753.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"examples.draggable-widget/t10753");
});
examples.draggable_widget.t10753.prototype.om$core$IRenderState$ = true;
examples.draggable_widget.t10753.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "container"},sablono.interpreter.interpret.call(null,om.core.build.call(null,om_data_vis.widget.widget,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(self__.cursor))));
});
examples.draggable_widget.t10753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10755){var self__ = this;
var _10755__$1 = this;return self__.meta10754;
});
examples.draggable_widget.t10753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10755,meta10754__$1){var self__ = this;
var _10755__$1 = this;return (new examples.draggable_widget.t10753(self__.owner,self__.cursor,self__.draggable_widget,meta10754__$1));
});
examples.draggable_widget.__GT_t10753 = (function __GT_t10753(owner__$1,cursor__$1,draggable_widget__$1,meta10754){return (new examples.draggable_widget.t10753(owner__$1,cursor__$1,draggable_widget__$1,meta10754));
});
}
return (new examples.draggable_widget.t10753(owner,cursor,draggable_widget,null));
});
om.core.root.call(null,examples.draggable_widget.draggable_widget,examples.draggable_widget.app_model,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=draggable_widget.js.map