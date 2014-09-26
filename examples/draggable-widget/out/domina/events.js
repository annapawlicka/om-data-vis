// Compiled by ClojureScript 0.0-2227
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj16001 = {};return obj16001;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3545__auto__ = evt;if(and__3545__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3545__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4184__auto__ = (((evt == null))?null:evt);return (function (){var or__3557__auto__ = (domina.events.prevent_default[goog.typeOf(x__4184__auto__)]);if(or__3557__auto__)
{return or__3557__auto__;
} else
{var or__3557__auto____$1 = (domina.events.prevent_default["_"]);if(or__3557__auto____$1)
{return or__3557__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3545__auto__ = evt;if(and__3545__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3545__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4184__auto__ = (((evt == null))?null:evt);return (function (){var or__3557__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4184__auto__)]);if(or__3557__auto__)
{return or__3557__auto__;
} else
{var or__3557__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3557__auto____$1)
{return or__3557__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3545__auto__ = evt;if(and__3545__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3545__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4184__auto__ = (((evt == null))?null:evt);return (function (){var or__3557__auto__ = (domina.events.target[goog.typeOf(x__4184__auto__)]);if(or__3557__auto__)
{return or__3557__auto__;
} else
{var or__3557__auto____$1 = (domina.events.target["_"]);if(or__3557__auto____$1)
{return or__3557__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3545__auto__ = evt;if(and__3545__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3545__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4184__auto__ = (((evt == null))?null:evt);return (function (){var or__3557__auto__ = (domina.events.current_target[goog.typeOf(x__4184__auto__)]);if(or__3557__auto__)
{return or__3557__auto__;
} else
{var or__3557__auto____$1 = (domina.events.current_target["_"]);if(or__3557__auto____$1)
{return or__3557__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3545__auto__ = evt;if(and__3545__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3545__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4184__auto__ = (((evt == null))?null:evt);return (function (){var or__3557__auto__ = (domina.events.event_type[goog.typeOf(x__4184__auto__)]);if(or__3557__auto__)
{return or__3557__auto__;
} else
{var or__3557__auto____$1 = (domina.events.event_type["_"]);if(or__3557__auto____$1)
{return or__3557__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3545__auto__ = evt;if(and__3545__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3545__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4184__auto__ = (((evt == null))?null:evt);return (function (){var or__3557__auto__ = (domina.events.raw_event[goog.typeOf(x__4184__auto__)]);if(or__3557__auto__)
{return or__3557__auto__;
} else
{var or__3557__auto____$1 = (domina.events.raw_event["_"]);if(or__3557__auto____$1)
{return or__3557__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t16005 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16005 = (function (evt,f,create_listener_function,meta16006){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16006 = meta16006;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16005.cljs$lang$type = true;
domina.events.t16005.cljs$lang$ctorStr = "domina.events/t16005";
domina.events.t16005.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"domina.events/t16005");
});
domina.events.t16005.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t16005.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3557__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3557__auto__))
{return or__3557__auto__;
} else
{return not_found;
}
});
domina.events.t16005.prototype.domina$events$Event$ = true;
domina.events.t16005.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16005.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16005.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16005.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16005.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16005.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16007){var self__ = this;
var _16007__$1 = this;return self__.meta16006;
});
domina.events.t16005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16007,meta16006__$1){var self__ = this;
var _16007__$1 = this;return (new domina.events.t16005(self__.evt,self__.f,self__.create_listener_function,meta16006__$1));
});
domina.events.__GT_t16005 = (function __GT_t16005(evt__$1,f__$1,create_listener_function__$1,meta16006){return (new domina.events.t16005(evt__$1,f__$1,create_listener_function__$1,meta16006));
});
}
return (new domina.events.t16005(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4282__auto__ = ((function (f,t){
return (function iter__16012(s__16013){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__16013__$1 = s__16013;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16013__$1);if(temp__4126__auto__)
{var s__16013__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16013__$2))
{var c__4280__auto__ = cljs.core.chunk_first.call(null,s__16013__$2);var size__4281__auto__ = cljs.core.count.call(null,c__4280__auto__);var b__16015 = cljs.core.chunk_buffer.call(null,size__4281__auto__);if((function (){var i__16014 = 0;while(true){
if((i__16014 < size__4281__auto__))
{var node = cljs.core._nth.call(null,c__4280__auto__,i__16014);cljs.core.chunk_append.call(null,b__16015,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__16016 = (i__16014 + 1);
i__16014 = G__16016;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16015),iter__16012.call(null,cljs.core.chunk_rest.call(null,s__16013__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16015),null);
}
} else
{var node = cljs.core.first.call(null,s__16013__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__16012.call(null,cljs.core.rest.call(null,s__16013__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4282__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){var seq__16025 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16026 = null;var count__16027 = 0;var i__16028 = 0;while(true){
if((i__16028 < count__16027))
{var node = cljs.core._nth.call(null,chunk__16026,i__16028);goog.events.removeAll(node);
{
var G__16033 = seq__16025;
var G__16034 = chunk__16026;
var G__16035 = count__16027;
var G__16036 = (i__16028 + 1);
seq__16025 = G__16033;
chunk__16026 = G__16034;
count__16027 = G__16035;
i__16028 = G__16036;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__16025);if(temp__4126__auto__)
{var seq__16025__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16025__$1))
{var c__4313__auto__ = cljs.core.chunk_first.call(null,seq__16025__$1);{
var G__16037 = cljs.core.chunk_rest.call(null,seq__16025__$1);
var G__16038 = c__4313__auto__;
var G__16039 = cljs.core.count.call(null,c__4313__auto__);
var G__16040 = 0;
seq__16025 = G__16037;
chunk__16026 = G__16038;
count__16027 = G__16039;
i__16028 = G__16040;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16025__$1);goog.events.removeAll(node);
{
var G__16041 = cljs.core.next.call(null,seq__16025__$1);
var G__16042 = null;
var G__16043 = 0;
var G__16044 = 0;
seq__16025 = G__16041;
chunk__16026 = G__16042;
count__16027 = G__16043;
i__16028 = G__16044;
continue;
}
}
} else
{return null;
}
}
break;
}
});
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__16029 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16030 = null;var count__16031 = 0;var i__16032 = 0;while(true){
if((i__16032 < count__16031))
{var node = cljs.core._nth.call(null,chunk__16030,i__16032);goog.events.removeAll(node,type__$1);
{
var G__16045 = seq__16029;
var G__16046 = chunk__16030;
var G__16047 = count__16031;
var G__16048 = (i__16032 + 1);
seq__16029 = G__16045;
chunk__16030 = G__16046;
count__16031 = G__16047;
i__16032 = G__16048;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__16029);if(temp__4126__auto__)
{var seq__16029__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16029__$1))
{var c__4313__auto__ = cljs.core.chunk_first.call(null,seq__16029__$1);{
var G__16049 = cljs.core.chunk_rest.call(null,seq__16029__$1);
var G__16050 = c__4313__auto__;
var G__16051 = cljs.core.count.call(null,c__4313__auto__);
var G__16052 = 0;
seq__16029 = G__16049;
chunk__16030 = G__16050;
count__16031 = G__16051;
i__16032 = G__16052;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16029__$1);goog.events.removeAll(node,type__$1);
{
var G__16053 = cljs.core.next.call(null,seq__16029__$1);
var G__16054 = null;
var G__16055 = 0;
var G__16056 = 0;
seq__16029 = G__16053;
chunk__16030 = G__16054;
count__16031 = G__16055;
i__16032 = G__16056;
continue;
}
}
} else
{return null;
}
}
break;
}
});
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){return ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){while(true){
var temp__4124__auto__ = n.parentNode;if(cljs.core.truth_(temp__4124__auto__))
{var parent = temp__4124__auto__;{
var G__16057 = parent;
var G__16058 = cljs.core.cons.call(null,parent,so_far);
n = G__16057;
so_far = G__16058;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__16067_16075 = cljs.core.seq.call(null,ancestors);var chunk__16068_16076 = null;var count__16069_16077 = 0;var i__16070_16078 = 0;while(true){
if((i__16070_16078 < count__16069_16077))
{var n_16079 = cljs.core._nth.call(null,chunk__16068_16076,i__16070_16078);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16079;
goog.events.fireListeners(n_16079,evt.type,true,evt);
}
{
var G__16080 = seq__16067_16075;
var G__16081 = chunk__16068_16076;
var G__16082 = count__16069_16077;
var G__16083 = (i__16070_16078 + 1);
seq__16067_16075 = G__16080;
chunk__16068_16076 = G__16081;
count__16069_16077 = G__16082;
i__16070_16078 = G__16083;
continue;
}
} else
{var temp__4126__auto___16084 = cljs.core.seq.call(null,seq__16067_16075);if(temp__4126__auto___16084)
{var seq__16067_16085__$1 = temp__4126__auto___16084;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16067_16085__$1))
{var c__4313__auto___16086 = cljs.core.chunk_first.call(null,seq__16067_16085__$1);{
var G__16087 = cljs.core.chunk_rest.call(null,seq__16067_16085__$1);
var G__16088 = c__4313__auto___16086;
var G__16089 = cljs.core.count.call(null,c__4313__auto___16086);
var G__16090 = 0;
seq__16067_16075 = G__16087;
chunk__16068_16076 = G__16088;
count__16069_16077 = G__16089;
i__16070_16078 = G__16090;
continue;
}
} else
{var n_16091 = cljs.core.first.call(null,seq__16067_16085__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16091;
goog.events.fireListeners(n_16091,evt.type,true,evt);
}
{
var G__16092 = cljs.core.next.call(null,seq__16067_16085__$1);
var G__16093 = null;
var G__16094 = 0;
var G__16095 = 0;
seq__16067_16075 = G__16092;
chunk__16068_16076 = G__16093;
count__16069_16077 = G__16094;
i__16070_16078 = G__16095;
continue;
}
}
} else
{}
}
break;
}
var seq__16071_16096 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__16072_16097 = null;var count__16073_16098 = 0;var i__16074_16099 = 0;while(true){
if((i__16074_16099 < count__16073_16098))
{var n_16100 = cljs.core._nth.call(null,chunk__16072_16097,i__16074_16099);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16100;
goog.events.fireListeners(n_16100,evt.type,false,evt);
}
{
var G__16101 = seq__16071_16096;
var G__16102 = chunk__16072_16097;
var G__16103 = count__16073_16098;
var G__16104 = (i__16074_16099 + 1);
seq__16071_16096 = G__16101;
chunk__16072_16097 = G__16102;
count__16073_16098 = G__16103;
i__16074_16099 = G__16104;
continue;
}
} else
{var temp__4126__auto___16105 = cljs.core.seq.call(null,seq__16071_16096);if(temp__4126__auto___16105)
{var seq__16071_16106__$1 = temp__4126__auto___16105;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16071_16106__$1))
{var c__4313__auto___16107 = cljs.core.chunk_first.call(null,seq__16071_16106__$1);{
var G__16108 = cljs.core.chunk_rest.call(null,seq__16071_16106__$1);
var G__16109 = c__4313__auto___16107;
var G__16110 = cljs.core.count.call(null,c__4313__auto___16107);
var G__16111 = 0;
seq__16071_16096 = G__16108;
chunk__16072_16097 = G__16109;
count__16073_16098 = G__16110;
i__16074_16099 = G__16111;
continue;
}
} else
{var n_16112 = cljs.core.first.call(null,seq__16071_16106__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16112;
goog.events.fireListeners(n_16112,evt.type,false,evt);
}
{
var G__16113 = cljs.core.next.call(null,seq__16071_16106__$1);
var G__16114 = null;
var G__16115 = 0;
var G__16116 = 0;
seq__16071_16096 = G__16113;
chunk__16072_16097 = G__16114;
count__16073_16098 = G__16115;
i__16074_16099 = G__16116;
continue;
}
}
} else
{}
}
break;
}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3545__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3545__auto__))
{return o.dispatchEvent;
} else
{return and__3545__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__16123_16129 = cljs.core.seq.call(null,evt_map);var chunk__16124_16130 = null;var count__16125_16131 = 0;var i__16126_16132 = 0;while(true){
if((i__16126_16132 < count__16125_16131))
{var vec__16127_16133 = cljs.core._nth.call(null,chunk__16124_16130,i__16126_16132);var k_16134 = cljs.core.nth.call(null,vec__16127_16133,0,null);var v_16135 = cljs.core.nth.call(null,vec__16127_16133,1,null);(evt[k_16134] = v_16135);
{
var G__16136 = seq__16123_16129;
var G__16137 = chunk__16124_16130;
var G__16138 = count__16125_16131;
var G__16139 = (i__16126_16132 + 1);
seq__16123_16129 = G__16136;
chunk__16124_16130 = G__16137;
count__16125_16131 = G__16138;
i__16126_16132 = G__16139;
continue;
}
} else
{var temp__4126__auto___16140 = cljs.core.seq.call(null,seq__16123_16129);if(temp__4126__auto___16140)
{var seq__16123_16141__$1 = temp__4126__auto___16140;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16123_16141__$1))
{var c__4313__auto___16142 = cljs.core.chunk_first.call(null,seq__16123_16141__$1);{
var G__16143 = cljs.core.chunk_rest.call(null,seq__16123_16141__$1);
var G__16144 = c__4313__auto___16142;
var G__16145 = cljs.core.count.call(null,c__4313__auto___16142);
var G__16146 = 0;
seq__16123_16129 = G__16143;
chunk__16124_16130 = G__16144;
count__16125_16131 = G__16145;
i__16126_16132 = G__16146;
continue;
}
} else
{var vec__16128_16147 = cljs.core.first.call(null,seq__16123_16141__$1);var k_16148 = cljs.core.nth.call(null,vec__16128_16147,0,null);var v_16149 = cljs.core.nth.call(null,vec__16128_16147,1,null);(evt[k_16148] = v_16149);
{
var G__16150 = cljs.core.next.call(null,seq__16123_16141__$1);
var G__16151 = null;
var G__16152 = 0;
var G__16153 = 0;
seq__16123_16129 = G__16150;
chunk__16124_16130 = G__16151;
count__16125_16131 = G__16152;
i__16126_16132 = G__16153;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__16154_SHARP_){return goog.events.getListeners(p1__16154_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map