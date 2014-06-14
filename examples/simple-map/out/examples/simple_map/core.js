// Compiled by ClojureScript 0.0-2227
goog.provide('examples.simple_map.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
examples.simple_map.core.app_model = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"legend","legend",4202297215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),null], null),new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414),null,new cljs.core.Keyword(null,"map","map",1014012110),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",1014011153),50.06297958283694,new cljs.core.Keyword(null,"lng","lng",1014011543),19.94705200195313], null)], null));
examples.simple_map.core.tile_url = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";
examples.simple_map.core.legend_component = (function legend_component(data,owner){if(typeof examples.simple_map.core.t14831 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.simple_map.core.t14831 = (function (owner,data,legend_component,meta14832){
this.owner = owner;
this.data = data;
this.legend_component = legend_component;
this.meta14832 = meta14832;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.simple_map.core.t14831.cljs$lang$type = true;
examples.simple_map.core.t14831.cljs$lang$ctorStr = "examples.simple-map.core/t14831";
examples.simple_map.core.t14831.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"examples.simple-map.core/t14831");
});
examples.simple_map.core.t14831.prototype.om$core$IRender$ = true;
examples.simple_map.core.t14831.prototype.om$core$IRender$render$arity$1 = (function (this__5105__auto__){var self__ = this;
var this__5105__auto____$1 = this;var labels = new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(self__.data);var title = new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(self__.data);return React.DOM.div({"className": "my-legend"});
});
examples.simple_map.core.t14831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14833){var self__ = this;
var _14833__$1 = this;return self__.meta14832;
});
examples.simple_map.core.t14831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14833,meta14832__$1){var self__ = this;
var _14833__$1 = this;return (new examples.simple_map.core.t14831(self__.owner,self__.data,self__.legend_component,meta14832__$1));
});
examples.simple_map.core.__GT_t14831 = (function __GT_t14831(owner__$1,data__$1,legend_component__$1,meta14832){return (new examples.simple_map.core.t14831(owner__$1,data__$1,legend_component__$1,meta14832));
});
}
return (new examples.simple_map.core.t14831(owner,data,legend_component,null));
});
examples.simple_map.core.create_map = (function create_map(cursor,id){var m = L.map(id).setView([new cljs.core.Keyword(null,"lat","lat",1014011153).cljs$core$IFn$_invoke$arity$1(cursor),new cljs.core.Keyword(null,"lng","lng",1014011543).cljs$core$IFn$_invoke$arity$1(cursor)],13);var tiles = L.tileLayer(examples.simple_map.core.tile_url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"maxZoom","maxZoom",1858199241),16,new cljs.core.Keyword(null,"attribution","attribution",704021489),"Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2012 CloudMade"], null));tiles.addTo(m);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414),m], null);
});
examples.simple_map.core.panel_component = (function panel_component(cursor,owner){if(typeof examples.simple_map.core.t14837 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.simple_map.core.t14837 = (function (owner,cursor,panel_component,meta14838){
this.owner = owner;
this.cursor = cursor;
this.panel_component = panel_component;
this.meta14838 = meta14838;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.simple_map.core.t14837.cljs$lang$type = true;
examples.simple_map.core.t14837.cljs$lang$ctorStr = "examples.simple-map.core/t14837";
examples.simple_map.core.t14837.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"examples.simple-map.core/t14837");
});
examples.simple_map.core.t14837.prototype.om$core$IRender$ = true;
examples.simple_map.core.t14837.prototype.om$core$IRender$render$arity$1 = (function (this__5105__auto__){var self__ = this;
var this__5105__auto____$1 = this;return React.DOM.div(null,React.DOM.h1(null,"Leaflet Map"),React.DOM.div({"id": "panel"},om.core.build.call(null,examples.simple_map.core.legend_component,self__.cursor)));
});
examples.simple_map.core.t14837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14839){var self__ = this;
var _14839__$1 = this;return self__.meta14838;
});
examples.simple_map.core.t14837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14839,meta14838__$1){var self__ = this;
var _14839__$1 = this;return (new examples.simple_map.core.t14837(self__.owner,self__.cursor,self__.panel_component,meta14838__$1));
});
examples.simple_map.core.__GT_t14837 = (function __GT_t14837(owner__$1,cursor__$1,panel_component__$1,meta14838){return (new examples.simple_map.core.t14837(owner__$1,cursor__$1,panel_component__$1,meta14838));
});
}
return (new examples.simple_map.core.t14837(owner,cursor,panel_component,null));
});
/**
* Drop pin on click and removes it when it's clicked again.
*/
examples.simple_map.core.drop_pin = (function drop_pin(map,latlng){var marker = L.marker(cljs.core.clj__GT_js.call(null,latlng)).addTo(map);return marker.on("click",((function (marker){
return (function (e){return map.removeLayer(marker);
});})(marker))
);
});
examples.simple_map.core.map_component = (function map_component(cursor,owner){if(typeof examples.simple_map.core.t14845 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.simple_map.core.t14845 = (function (owner,cursor,map_component,meta14846){
this.owner = owner;
this.cursor = cursor;
this.map_component = map_component;
this.meta14846 = meta14846;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.simple_map.core.t14845.cljs$lang$type = true;
examples.simple_map.core.t14845.cljs$lang$ctorStr = "examples.simple-map.core/t14845";
examples.simple_map.core.t14845.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"examples.simple-map.core/t14845");
});
examples.simple_map.core.t14845.prototype.om$core$IDidUpdate$ = true;
examples.simple_map.core.t14845.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__14848 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1014012110));var map__14848__$1 = ((cljs.core.seq_QMARK_.call(null,map__14848))?cljs.core.apply.call(null,cljs.core.hash_map,map__14848):map__14848);var map = map__14848__$1;var leaflet_map = cljs.core.get.call(null,map__14848__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414));return null;
});
examples.simple_map.core.t14845.prototype.om$core$IDidMount$ = true;
examples.simple_map.core.t14845.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__14849 = examples.simple_map.core.create_map.call(null,new cljs.core.Keyword(null,"map","map",1014012110).cljs$core$IFn$_invoke$arity$1(self__.cursor),node);var map__14849__$1 = ((cljs.core.seq_QMARK_.call(null,map__14849))?cljs.core.apply.call(null,cljs.core.hash_map,map__14849):map__14849);var map = map__14849__$1;var leaflet_map = cljs.core.get.call(null,map__14849__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414));var loc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lng","lng",1014011543),cljs.core.get_in.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1014012110),new cljs.core.Keyword(null,"lng","lng",1014011543)], null)),new cljs.core.Keyword(null,"lat","lat",1014011153),cljs.core.get_in.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1014012110),new cljs.core.Keyword(null,"lat","lat",1014011153)], null))], null);leaflet_map.on("click",((function (node,map__14849,map__14849__$1,map,leaflet_map,loc,this$__$1){
return (function (e){var latlng = e.latlng;return examples.simple_map.core.drop_pin.call(null,leaflet_map,latlng);
});})(node,map__14849,map__14849__$1,map,leaflet_map,loc,this$__$1))
);
leaflet_map.on("moveend",((function (node,map__14849,map__14849__$1,map,leaflet_map,loc,this$__$1){
return (function (e){var center = leaflet_map.getCenter();om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1014012110),new cljs.core.Keyword(null,"lng","lng",1014011543)], null),center.lng);
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1014012110),new cljs.core.Keyword(null,"lat","lat",1014011153)], null),center.lat);
});})(node,map__14849,map__14849__$1,map,leaflet_map,loc,this$__$1))
);
leaflet_map.panTo(cljs.core.clj__GT_js.call(null,loc));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1014012110),map);
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414),leaflet_map);
});
examples.simple_map.core.t14845.prototype.om$core$IRender$ = true;
examples.simple_map.core.t14845.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"id": "map"});
});
examples.simple_map.core.t14845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14847){var self__ = this;
var _14847__$1 = this;return self__.meta14846;
});
examples.simple_map.core.t14845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14847,meta14846__$1){var self__ = this;
var _14847__$1 = this;return (new examples.simple_map.core.t14845(self__.owner,self__.cursor,self__.map_component,meta14846__$1));
});
examples.simple_map.core.__GT_t14845 = (function __GT_t14845(owner__$1,cursor__$1,map_component__$1,meta14846){return (new examples.simple_map.core.t14845(owner__$1,cursor__$1,map_component__$1,meta14846));
});
}
return (new examples.simple_map.core.t14845(owner,cursor,map_component,null));
});
om.core.root.call(null,examples.simple_map.core.map_component,examples.simple_map.core.app_model,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));
om.core.root.call(null,examples.simple_map.core.panel_component,examples.simple_map.core.app_model,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("panel")], null));

//# sourceMappingURL=core.js.map