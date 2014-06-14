// Compiled by ClojureScript 0.0-2227
goog.provide('examples.simple_map.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('ajax.core');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
examples.simple_map.core.app_model = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"legend","legend",4202297215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),null], null),new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414),null,new cljs.core.Keyword(null,"map","map",1014012110),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",1014011153),50.06297958283694,new cljs.core.Keyword(null,"lng","lng",1014011543),19.94705200195313], null)], null));
examples.simple_map.core.tile_url = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";
examples.simple_map.core.legend_component = (function legend_component(data,owner){if(typeof examples.simple_map.core.t15997 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.simple_map.core.t15997 = (function (owner,data,legend_component,meta15998){
this.owner = owner;
this.data = data;
this.legend_component = legend_component;
this.meta15998 = meta15998;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.simple_map.core.t15997.cljs$lang$type = true;
examples.simple_map.core.t15997.cljs$lang$ctorStr = "examples.simple-map.core/t15997";
examples.simple_map.core.t15997.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"examples.simple-map.core/t15997");
});
examples.simple_map.core.t15997.prototype.om$core$IRender$ = true;
examples.simple_map.core.t15997.prototype.om$core$IRender$render$arity$1 = (function (this__5105__auto__){var self__ = this;
var this__5105__auto____$1 = this;var labels = new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(self__.data);var title = new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(self__.data);return React.DOM.div({"className": "my-legend"});
});
examples.simple_map.core.t15997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15999){var self__ = this;
var _15999__$1 = this;return self__.meta15998;
});
examples.simple_map.core.t15997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15999,meta15998__$1){var self__ = this;
var _15999__$1 = this;return (new examples.simple_map.core.t15997(self__.owner,self__.data,self__.legend_component,meta15998__$1));
});
examples.simple_map.core.__GT_t15997 = (function __GT_t15997(owner__$1,data__$1,legend_component__$1,meta15998){return (new examples.simple_map.core.t15997(owner__$1,data__$1,legend_component__$1,meta15998));
});
}
return (new examples.simple_map.core.t15997(owner,data,legend_component,null));
});
examples.simple_map.core.create_map = (function create_map(cursor,id){var m = L.map(id).setView([new cljs.core.Keyword(null,"lat","lat",1014011153).cljs$core$IFn$_invoke$arity$1(cursor),new cljs.core.Keyword(null,"lng","lng",1014011543).cljs$core$IFn$_invoke$arity$1(cursor)],13);var tiles = L.tileLayer(examples.simple_map.core.tile_url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"maxZoom","maxZoom",1858199241),16,new cljs.core.Keyword(null,"attribution","attribution",704021489),"Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2012 CloudMade"], null));tiles.addTo(m);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414),m], null);
});
examples.simple_map.core.pan_to_postcode = (function pan_to_postcode(cursor,owner){var postcode = clojure.string.replace.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"postcode","postcode",1771366911)),/[\s]+/,"").toUpperCase();return ajax.core.GET.call(null,("http://maps.googleapis.com/maps/api/geocode/json?address="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(postcode)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",1706707644),((function (postcode){
return (function (body){var map = new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cursor));var latlng = cljs.core.get_in.call(null,cljs.core.get_in.call(null,cljs.core.first.call(null,cljs.core.get_in.call(null,body,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["results"], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["geometry"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["location"], null));return map.panTo(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",1014011153),parseFloat(cljs.core.get_in.call(null,latlng,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lat"], null))),new cljs.core.Keyword(null,"lng","lng",1014011543),parseFloat(cljs.core.get_in.call(null,latlng,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lng"], null)))], null)));
});})(postcode))
], null));
});
examples.simple_map.core.postcode_selector_component = (function postcode_selector_component(cursor,owner){if(typeof examples.simple_map.core.t16003 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.simple_map.core.t16003 = (function (owner,cursor,postcode_selector_component,meta16004){
this.owner = owner;
this.cursor = cursor;
this.postcode_selector_component = postcode_selector_component;
this.meta16004 = meta16004;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.simple_map.core.t16003.cljs$lang$type = true;
examples.simple_map.core.t16003.cljs$lang$ctorStr = "examples.simple-map.core/t16003";
examples.simple_map.core.t16003.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"examples.simple-map.core/t16003");
});
examples.simple_map.core.t16003.prototype.om$core$IRenderState$ = true;
examples.simple_map.core.t16003.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.h2(null,"Zoom to postcode"),om.dom.input.call(null,{"onKeyPress": ((function (___$1){
return (function (e){if(cljs.core._EQ_.call(null,e.keyCode,13))
{return examples.simple_map.core.pan_to_postcode.call(null,self__.cursor,self__.owner);
} else
{return null;
}
});})(___$1))
, "onChange": ((function (___$1){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"postcode","postcode",1771366911),e.target.value);
});})(___$1))
, "defaultValue": new cljs.core.Keyword(null,"initialPostCode","initialPostCode",3563623811).cljs$core$IFn$_invoke$arity$1(state), "type": "text"}),React.DOM.button({"onClick": ((function (___$1){
return (function (___$2){return examples.simple_map.core.pan_to_postcode.call(null,self__.cursor,self__.owner);
});})(___$1))
},"Go"));
});
examples.simple_map.core.t16003.prototype.om$core$IWillMount$ = true;
examples.simple_map.core.t16003.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"postcode","postcode",1771366911),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"initialPostCode","initialPostCode",3563623811)));
});
examples.simple_map.core.t16003.prototype.om$core$IInitState$ = true;
examples.simple_map.core.t16003.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in","in",1013907607),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1)),new cljs.core.Keyword(null,"out","out",1014014656),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1)),new cljs.core.Keyword(null,"initialPostCode","initialPostCode",3563623811),"30-302 Krakow"], null);
});
examples.simple_map.core.t16003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16005){var self__ = this;
var _16005__$1 = this;return self__.meta16004;
});
examples.simple_map.core.t16003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16005,meta16004__$1){var self__ = this;
var _16005__$1 = this;return (new examples.simple_map.core.t16003(self__.owner,self__.cursor,self__.postcode_selector_component,meta16004__$1));
});
examples.simple_map.core.__GT_t16003 = (function __GT_t16003(owner__$1,cursor__$1,postcode_selector_component__$1,meta16004){return (new examples.simple_map.core.t16003(owner__$1,cursor__$1,postcode_selector_component__$1,meta16004));
});
}
return (new examples.simple_map.core.t16003(owner,cursor,postcode_selector_component,null));
});
examples.simple_map.core.panel_component = (function panel_component(cursor,owner){if(typeof examples.simple_map.core.t16009 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.simple_map.core.t16009 = (function (owner,cursor,panel_component,meta16010){
this.owner = owner;
this.cursor = cursor;
this.panel_component = panel_component;
this.meta16010 = meta16010;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.simple_map.core.t16009.cljs$lang$type = true;
examples.simple_map.core.t16009.cljs$lang$ctorStr = "examples.simple-map.core/t16009";
examples.simple_map.core.t16009.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"examples.simple-map.core/t16009");
});
examples.simple_map.core.t16009.prototype.om$core$IRender$ = true;
examples.simple_map.core.t16009.prototype.om$core$IRender$render$arity$1 = (function (this__5105__auto__){var self__ = this;
var this__5105__auto____$1 = this;return React.DOM.div(null,React.DOM.h1(null,"Leaflet Map"),React.DOM.div({"id": "panel"},om.core.build.call(null,examples.simple_map.core.legend_component,self__.cursor),om.core.build.call(null,examples.simple_map.core.postcode_selector_component,self__.cursor)));
});
examples.simple_map.core.t16009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16011){var self__ = this;
var _16011__$1 = this;return self__.meta16010;
});
examples.simple_map.core.t16009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16011,meta16010__$1){var self__ = this;
var _16011__$1 = this;return (new examples.simple_map.core.t16009(self__.owner,self__.cursor,self__.panel_component,meta16010__$1));
});
examples.simple_map.core.__GT_t16009 = (function __GT_t16009(owner__$1,cursor__$1,panel_component__$1,meta16010){return (new examples.simple_map.core.t16009(owner__$1,cursor__$1,panel_component__$1,meta16010));
});
}
return (new examples.simple_map.core.t16009(owner,cursor,panel_component,null));
});
/**
* Drop pin on click and removes it when it's clicked again.
*/
examples.simple_map.core.drop_pin = (function drop_pin(map,latlng){var marker = L.marker(cljs.core.clj__GT_js.call(null,latlng)).addTo(map);return marker.on("click",((function (marker){
return (function (e){return map.removeLayer(marker);
});})(marker))
);
});
examples.simple_map.core.map_component = (function map_component(cursor,owner){if(typeof examples.simple_map.core.t16017 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.simple_map.core.t16017 = (function (owner,cursor,map_component,meta16018){
this.owner = owner;
this.cursor = cursor;
this.map_component = map_component;
this.meta16018 = meta16018;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.simple_map.core.t16017.cljs$lang$type = true;
examples.simple_map.core.t16017.cljs$lang$ctorStr = "examples.simple-map.core/t16017";
examples.simple_map.core.t16017.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"examples.simple-map.core/t16017");
});
examples.simple_map.core.t16017.prototype.om$core$IDidUpdate$ = true;
examples.simple_map.core.t16017.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__16020 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1014012110));var map__16020__$1 = ((cljs.core.seq_QMARK_.call(null,map__16020))?cljs.core.apply.call(null,cljs.core.hash_map,map__16020):map__16020);var map = map__16020__$1;var leaflet_map = cljs.core.get.call(null,map__16020__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414));return null;
});
examples.simple_map.core.t16017.prototype.om$core$IDidMount$ = true;
examples.simple_map.core.t16017.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__16021 = examples.simple_map.core.create_map.call(null,new cljs.core.Keyword(null,"map","map",1014012110).cljs$core$IFn$_invoke$arity$1(self__.cursor),node);var map__16021__$1 = ((cljs.core.seq_QMARK_.call(null,map__16021))?cljs.core.apply.call(null,cljs.core.hash_map,map__16021):map__16021);var map = map__16021__$1;var leaflet_map = cljs.core.get.call(null,map__16021__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414));var loc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lng","lng",1014011543),cljs.core.get_in.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1014012110),new cljs.core.Keyword(null,"lng","lng",1014011543)], null)),new cljs.core.Keyword(null,"lat","lat",1014011153),cljs.core.get_in.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1014012110),new cljs.core.Keyword(null,"lat","lat",1014011153)], null))], null);leaflet_map.on("click",((function (node,map__16021,map__16021__$1,map,leaflet_map,loc,this$__$1){
return (function (e){var latlng = e.latlng;return examples.simple_map.core.drop_pin.call(null,leaflet_map,latlng);
});})(node,map__16021,map__16021__$1,map,leaflet_map,loc,this$__$1))
);
leaflet_map.on("moveend",((function (node,map__16021,map__16021__$1,map,leaflet_map,loc,this$__$1){
return (function (e){var center = leaflet_map.getCenter();om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1014012110),new cljs.core.Keyword(null,"lng","lng",1014011543)], null),center.lng);
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1014012110),new cljs.core.Keyword(null,"lat","lat",1014011153)], null),center.lat);
});})(node,map__16021,map__16021__$1,map,leaflet_map,loc,this$__$1))
);
leaflet_map.panTo(cljs.core.clj__GT_js.call(null,loc));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1014012110),map);
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414),leaflet_map);
});
examples.simple_map.core.t16017.prototype.om$core$IRender$ = true;
examples.simple_map.core.t16017.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"id": "map"});
});
examples.simple_map.core.t16017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16019){var self__ = this;
var _16019__$1 = this;return self__.meta16018;
});
examples.simple_map.core.t16017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16019,meta16018__$1){var self__ = this;
var _16019__$1 = this;return (new examples.simple_map.core.t16017(self__.owner,self__.cursor,self__.map_component,meta16018__$1));
});
examples.simple_map.core.__GT_t16017 = (function __GT_t16017(owner__$1,cursor__$1,map_component__$1,meta16018){return (new examples.simple_map.core.t16017(owner__$1,cursor__$1,map_component__$1,meta16018));
});
}
return (new examples.simple_map.core.t16017(owner,cursor,map_component,null));
});
om.core.root.call(null,examples.simple_map.core.map_component,examples.simple_map.core.app_model,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));
om.core.root.call(null,examples.simple_map.core.panel_component,examples.simple_map.core.app_model,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("panel")], null));

//# sourceMappingURL=core.js.map