// Compiled by ClojureScript 0.0-2227
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12015 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12015 = (function (f,fn_handler,meta12016){
this.f = f;
this.fn_handler = fn_handler;
this.meta12016 = meta12016;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12015.cljs$lang$type = true;
cljs.core.async.t12015.cljs$lang$ctorStr = "cljs.core.async/t12015";
cljs.core.async.t12015.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t12015");
});
cljs.core.async.t12015.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12015.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12015.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12017){var self__ = this;
var _12017__$1 = this;return self__.meta12016;
});
cljs.core.async.t12015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12017,meta12016__$1){var self__ = this;
var _12017__$1 = this;return (new cljs.core.async.t12015(self__.f,self__.fn_handler,meta12016__$1));
});
cljs.core.async.__GT_t12015 = (function __GT_t12015(f__$1,fn_handler__$1,meta12016){return (new cljs.core.async.t12015(f__$1,fn_handler__$1,meta12016));
});
}
return (new cljs.core.async.t12015(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12019 = buff;if(G__12019)
{var bit__4207__auto__ = null;if(cljs.core.truth_((function (){var or__3557__auto__ = bit__4207__auto__;if(cljs.core.truth_(or__3557__auto__))
{return or__3557__auto__;
} else
{return G__12019.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12019.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12019);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12019);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_12020 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12020);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_12020,ret){
return (function (){return fn1.call(null,val_12020);
});})(val_12020,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3545__auto__ = ret;if(cljs.core.truth_(and__3545__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3545__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4413__auto___12021 = n;var x_12022 = 0;while(true){
if((x_12022 < n__4413__auto___12021))
{(a[x_12022] = 0);
{
var G__12023 = (x_12022 + 1);
x_12022 = G__12023;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__12024 = (i + 1);
i = G__12024;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12028 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12028 = (function (flag,alt_flag,meta12029){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12029 = meta12029;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12028.cljs$lang$type = true;
cljs.core.async.t12028.cljs$lang$ctorStr = "cljs.core.async/t12028";
cljs.core.async.t12028.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t12028");
});})(flag))
;
cljs.core.async.t12028.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12028.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t12028.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t12028.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12030){var self__ = this;
var _12030__$1 = this;return self__.meta12029;
});})(flag))
;
cljs.core.async.t12028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12030,meta12029__$1){var self__ = this;
var _12030__$1 = this;return (new cljs.core.async.t12028(self__.flag,self__.alt_flag,meta12029__$1));
});})(flag))
;
cljs.core.async.__GT_t12028 = ((function (flag){
return (function __GT_t12028(flag__$1,alt_flag__$1,meta12029){return (new cljs.core.async.t12028(flag__$1,alt_flag__$1,meta12029));
});})(flag))
;
}
return (new cljs.core.async.t12028(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12034 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12034 = (function (cb,flag,alt_handler,meta12035){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12035 = meta12035;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12034.cljs$lang$type = true;
cljs.core.async.t12034.cljs$lang$ctorStr = "cljs.core.async/t12034";
cljs.core.async.t12034.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t12034");
});
cljs.core.async.t12034.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12034.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12034.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12036){var self__ = this;
var _12036__$1 = this;return self__.meta12035;
});
cljs.core.async.t12034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12036,meta12035__$1){var self__ = this;
var _12036__$1 = this;return (new cljs.core.async.t12034(self__.cb,self__.flag,self__.alt_handler,meta12035__$1));
});
cljs.core.async.__GT_t12034 = (function __GT_t12034(cb__$1,flag__$1,alt_handler__$1,meta12035){return (new cljs.core.async.t12034(cb__$1,flag__$1,alt_handler__$1,meta12035));
});
}
return (new cljs.core.async.t12034(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12037_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12037_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3557__auto__ = wport;if(cljs.core.truth_(or__3557__auto__))
{return or__3557__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__12038 = (i + 1);
i = G__12038;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3557__auto__ = ret;if(cljs.core.truth_(or__3557__auto__))
{return or__3557__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__3545__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3545__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3545__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__12039){var map__12041 = p__12039;var map__12041__$1 = ((cljs.core.seq_QMARK_.call(null,map__12041))?cljs.core.apply.call(null,cljs.core.hash_map,map__12041):map__12041);var opts = map__12041__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12039 = null;if (arguments.length > 1) {
  p__12039 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12039);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12042){
var ports = cljs.core.first(arglist__12042);
var p__12039 = cljs.core.rest(arglist__12042);
return alts_BANG___delegate(ports,p__12039);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12050 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12050 = (function (ch,f,map_LT_,meta12051){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12051 = meta12051;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12050.cljs$lang$type = true;
cljs.core.async.t12050.cljs$lang$ctorStr = "cljs.core.async/t12050";
cljs.core.async.t12050.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t12050");
});
cljs.core.async.t12050.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12050.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t12050.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12050.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12053 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12053 = (function (fn1,_,meta12051,ch,f,map_LT_,meta12054){
this.fn1 = fn1;
this._ = _;
this.meta12051 = meta12051;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12054 = meta12054;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12053.cljs$lang$type = true;
cljs.core.async.t12053.cljs$lang$ctorStr = "cljs.core.async/t12053";
cljs.core.async.t12053.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t12053");
});})(___$1))
;
cljs.core.async.t12053.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12053.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t12053.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t12053.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__12043_SHARP_){return f1.call(null,(((p1__12043_SHARP_ == null))?null:self__.f.call(null,p1__12043_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t12053.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12055){var self__ = this;
var _12055__$1 = this;return self__.meta12054;
});})(___$1))
;
cljs.core.async.t12053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12055,meta12054__$1){var self__ = this;
var _12055__$1 = this;return (new cljs.core.async.t12053(self__.fn1,self__._,self__.meta12051,self__.ch,self__.f,self__.map_LT_,meta12054__$1));
});})(___$1))
;
cljs.core.async.__GT_t12053 = ((function (___$1){
return (function __GT_t12053(fn1__$1,___$2,meta12051__$1,ch__$2,f__$2,map_LT___$2,meta12054){return (new cljs.core.async.t12053(fn1__$1,___$2,meta12051__$1,ch__$2,f__$2,map_LT___$2,meta12054));
});})(___$1))
;
}
return (new cljs.core.async.t12053(fn1,___$1,self__.meta12051,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3545__auto__ = ret;if(cljs.core.truth_(and__3545__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3545__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t12050.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12050.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12052){var self__ = this;
var _12052__$1 = this;return self__.meta12051;
});
cljs.core.async.t12050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12052,meta12051__$1){var self__ = this;
var _12052__$1 = this;return (new cljs.core.async.t12050(self__.ch,self__.f,self__.map_LT_,meta12051__$1));
});
cljs.core.async.__GT_t12050 = (function __GT_t12050(ch__$1,f__$1,map_LT___$1,meta12051){return (new cljs.core.async.t12050(ch__$1,f__$1,map_LT___$1,meta12051));
});
}
return (new cljs.core.async.t12050(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12059 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12059 = (function (ch,f,map_GT_,meta12060){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12060 = meta12060;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12059.cljs$lang$type = true;
cljs.core.async.t12059.cljs$lang$ctorStr = "cljs.core.async/t12059";
cljs.core.async.t12059.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t12059");
});
cljs.core.async.t12059.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12059.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t12059.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12059.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12059.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12059.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12061){var self__ = this;
var _12061__$1 = this;return self__.meta12060;
});
cljs.core.async.t12059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12061,meta12060__$1){var self__ = this;
var _12061__$1 = this;return (new cljs.core.async.t12059(self__.ch,self__.f,self__.map_GT_,meta12060__$1));
});
cljs.core.async.__GT_t12059 = (function __GT_t12059(ch__$1,f__$1,map_GT___$1,meta12060){return (new cljs.core.async.t12059(ch__$1,f__$1,map_GT___$1,meta12060));
});
}
return (new cljs.core.async.t12059(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12065 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12065 = (function (ch,p,filter_GT_,meta12066){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12066 = meta12066;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12065.cljs$lang$type = true;
cljs.core.async.t12065.cljs$lang$ctorStr = "cljs.core.async/t12065";
cljs.core.async.t12065.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t12065");
});
cljs.core.async.t12065.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12065.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t12065.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12065.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12065.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12065.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12067){var self__ = this;
var _12067__$1 = this;return self__.meta12066;
});
cljs.core.async.t12065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12067,meta12066__$1){var self__ = this;
var _12067__$1 = this;return (new cljs.core.async.t12065(self__.ch,self__.p,self__.filter_GT_,meta12066__$1));
});
cljs.core.async.__GT_t12065 = (function __GT_t12065(ch__$1,p__$1,filter_GT___$1,meta12066){return (new cljs.core.async.t12065(ch__$1,p__$1,filter_GT___$1,meta12066));
});
}
return (new cljs.core.async.t12065(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6344__auto___12150 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___12150,out){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___12150,out){
return (function (state_12129){var state_val_12130 = (state_12129[1]);if((state_val_12130 === 7))
{var inst_12125 = (state_12129[2]);var state_12129__$1 = state_12129;var statearr_12131_12151 = state_12129__$1;(statearr_12131_12151[2] = inst_12125);
(statearr_12131_12151[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 1))
{var state_12129__$1 = state_12129;var statearr_12132_12152 = state_12129__$1;(statearr_12132_12152[2] = null);
(statearr_12132_12152[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 4))
{var inst_12111 = (state_12129[7]);var inst_12111__$1 = (state_12129[2]);var inst_12112 = (inst_12111__$1 == null);var state_12129__$1 = (function (){var statearr_12133 = state_12129;(statearr_12133[7] = inst_12111__$1);
return statearr_12133;
})();if(cljs.core.truth_(inst_12112))
{var statearr_12134_12153 = state_12129__$1;(statearr_12134_12153[1] = 5);
} else
{var statearr_12135_12154 = state_12129__$1;(statearr_12135_12154[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 6))
{var inst_12111 = (state_12129[7]);var inst_12116 = p.call(null,inst_12111);var state_12129__$1 = state_12129;if(cljs.core.truth_(inst_12116))
{var statearr_12136_12155 = state_12129__$1;(statearr_12136_12155[1] = 8);
} else
{var statearr_12137_12156 = state_12129__$1;(statearr_12137_12156[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 3))
{var inst_12127 = (state_12129[2]);var state_12129__$1 = state_12129;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12129__$1,inst_12127);
} else
{if((state_val_12130 === 2))
{var state_12129__$1 = state_12129;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12129__$1,4,ch);
} else
{if((state_val_12130 === 11))
{var inst_12119 = (state_12129[2]);var state_12129__$1 = state_12129;var statearr_12138_12157 = state_12129__$1;(statearr_12138_12157[2] = inst_12119);
(statearr_12138_12157[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 9))
{var state_12129__$1 = state_12129;var statearr_12139_12158 = state_12129__$1;(statearr_12139_12158[2] = null);
(statearr_12139_12158[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 5))
{var inst_12114 = cljs.core.async.close_BANG_.call(null,out);var state_12129__$1 = state_12129;var statearr_12140_12159 = state_12129__$1;(statearr_12140_12159[2] = inst_12114);
(statearr_12140_12159[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 10))
{var inst_12122 = (state_12129[2]);var state_12129__$1 = (function (){var statearr_12141 = state_12129;(statearr_12141[8] = inst_12122);
return statearr_12141;
})();var statearr_12142_12160 = state_12129__$1;(statearr_12142_12160[2] = null);
(statearr_12142_12160[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 8))
{var inst_12111 = (state_12129[7]);var state_12129__$1 = state_12129;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12129__$1,11,out,inst_12111);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6344__auto___12150,out))
;return ((function (switch__6329__auto__,c__6344__auto___12150,out){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_12146 = [null,null,null,null,null,null,null,null,null];(statearr_12146[0] = state_machine__6330__auto__);
(statearr_12146[1] = 1);
return statearr_12146;
});
var state_machine__6330__auto____1 = (function (state_12129){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_12129);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e12147){if((e12147 instanceof Object))
{var ex__6333__auto__ = e12147;var statearr_12148_12161 = state_12129;(statearr_12148_12161[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12129);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12147;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12162 = state_12129;
state_12129 = G__12162;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_12129){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_12129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___12150,out))
})();var state__6346__auto__ = (function (){var statearr_12149 = f__6345__auto__.call(null);(statearr_12149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___12150);
return statearr_12149;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___12150,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6344__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__){
return (function (state_12314){var state_val_12315 = (state_12314[1]);if((state_val_12315 === 7))
{var inst_12310 = (state_12314[2]);var state_12314__$1 = state_12314;var statearr_12316_12353 = state_12314__$1;(statearr_12316_12353[2] = inst_12310);
(statearr_12316_12353[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12315 === 20))
{var inst_12285 = (state_12314[7]);var inst_12296 = (state_12314[2]);var inst_12297 = cljs.core.next.call(null,inst_12285);var inst_12271 = inst_12297;var inst_12272 = null;var inst_12273 = 0;var inst_12274 = 0;var state_12314__$1 = (function (){var statearr_12317 = state_12314;(statearr_12317[8] = inst_12274);
(statearr_12317[9] = inst_12273);
(statearr_12317[10] = inst_12271);
(statearr_12317[11] = inst_12296);
(statearr_12317[12] = inst_12272);
return statearr_12317;
})();var statearr_12318_12354 = state_12314__$1;(statearr_12318_12354[2] = null);
(statearr_12318_12354[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12315 === 1))
{var state_12314__$1 = state_12314;var statearr_12319_12355 = state_12314__$1;(statearr_12319_12355[2] = null);
(statearr_12319_12355[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12315 === 4))
{var inst_12260 = (state_12314[13]);var inst_12260__$1 = (state_12314[2]);var inst_12261 = (inst_12260__$1 == null);var state_12314__$1 = (function (){var statearr_12323 = state_12314;(statearr_12323[13] = inst_12260__$1);
return statearr_12323;
})();if(cljs.core.truth_(inst_12261))
{var statearr_12324_12356 = state_12314__$1;(statearr_12324_12356[1] = 5);
} else
{var statearr_12325_12357 = state_12314__$1;(statearr_12325_12357[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12315 === 15))
{var state_12314__$1 = state_12314;var statearr_12326_12358 = state_12314__$1;(statearr_12326_12358[2] = null);
(statearr_12326_12358[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12315 === 13))
{var inst_12274 = (state_12314[8]);var inst_12273 = (state_12314[9]);var inst_12271 = (state_12314[10]);var inst_12272 = (state_12314[12]);var inst_12281 = (state_12314[2]);var inst_12282 = (inst_12274 + 1);var tmp12320 = inst_12273;var tmp12321 = inst_12271;var tmp12322 = inst_12272;var inst_12271__$1 = tmp12321;var inst_12272__$1 = tmp12322;var inst_12273__$1 = tmp12320;var inst_12274__$1 = inst_12282;var state_12314__$1 = (function (){var statearr_12327 = state_12314;(statearr_12327[14] = inst_12281);
(statearr_12327[8] = inst_12274__$1);
(statearr_12327[9] = inst_12273__$1);
(statearr_12327[10] = inst_12271__$1);
(statearr_12327[12] = inst_12272__$1);
return statearr_12327;
})();var statearr_12328_12359 = state_12314__$1;(statearr_12328_12359[2] = null);
(statearr_12328_12359[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12315 === 6))
{var inst_12260 = (state_12314[13]);var inst_12265 = f.call(null,inst_12260);var inst_12270 = cljs.core.seq.call(null,inst_12265);var inst_12271 = inst_12270;var inst_12272 = null;var inst_12273 = 0;var inst_12274 = 0;var state_12314__$1 = (function (){var statearr_12329 = state_12314;(statearr_12329[8] = inst_12274);
(statearr_12329[9] = inst_12273);
(statearr_12329[10] = inst_12271);
(statearr_12329[12] = inst_12272);
return statearr_12329;
})();var statearr_12330_12360 = state_12314__$1;(statearr_12330_12360[2] = null);
(statearr_12330_12360[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12315 === 17))
{var inst_12285 = (state_12314[7]);var inst_12289 = cljs.core.chunk_first.call(null,inst_12285);var inst_12290 = cljs.core.chunk_rest.call(null,inst_12285);var inst_12291 = cljs.core.count.call(null,inst_12289);var inst_12271 = inst_12290;var inst_12272 = inst_12289;var inst_12273 = inst_12291;var inst_12274 = 0;var state_12314__$1 = (function (){var statearr_12331 = state_12314;(statearr_12331[8] = inst_12274);
(statearr_12331[9] = inst_12273);
(statearr_12331[10] = inst_12271);
(statearr_12331[12] = inst_12272);
return statearr_12331;
})();var statearr_12332_12361 = state_12314__$1;(statearr_12332_12361[2] = null);
(statearr_12332_12361[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12315 === 3))
{var inst_12312 = (state_12314[2]);var state_12314__$1 = state_12314;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12314__$1,inst_12312);
} else
{if((state_val_12315 === 12))
{var inst_12305 = (state_12314[2]);var state_12314__$1 = state_12314;var statearr_12333_12362 = state_12314__$1;(statearr_12333_12362[2] = inst_12305);
(statearr_12333_12362[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12315 === 2))
{var state_12314__$1 = state_12314;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12314__$1,4,in$);
} else
{if((state_val_12315 === 19))
{var inst_12300 = (state_12314[2]);var state_12314__$1 = state_12314;var statearr_12334_12363 = state_12314__$1;(statearr_12334_12363[2] = inst_12300);
(statearr_12334_12363[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12315 === 11))
{var inst_12271 = (state_12314[10]);var inst_12285 = (state_12314[7]);var inst_12285__$1 = cljs.core.seq.call(null,inst_12271);var state_12314__$1 = (function (){var statearr_12335 = state_12314;(statearr_12335[7] = inst_12285__$1);
return statearr_12335;
})();if(inst_12285__$1)
{var statearr_12336_12364 = state_12314__$1;(statearr_12336_12364[1] = 14);
} else
{var statearr_12337_12365 = state_12314__$1;(statearr_12337_12365[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12315 === 9))
{var inst_12307 = (state_12314[2]);var state_12314__$1 = (function (){var statearr_12338 = state_12314;(statearr_12338[15] = inst_12307);
return statearr_12338;
})();var statearr_12339_12366 = state_12314__$1;(statearr_12339_12366[2] = null);
(statearr_12339_12366[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12315 === 5))
{var inst_12263 = cljs.core.async.close_BANG_.call(null,out);var state_12314__$1 = state_12314;var statearr_12340_12367 = state_12314__$1;(statearr_12340_12367[2] = inst_12263);
(statearr_12340_12367[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12315 === 14))
{var inst_12285 = (state_12314[7]);var inst_12287 = cljs.core.chunked_seq_QMARK_.call(null,inst_12285);var state_12314__$1 = state_12314;if(inst_12287)
{var statearr_12341_12368 = state_12314__$1;(statearr_12341_12368[1] = 17);
} else
{var statearr_12342_12369 = state_12314__$1;(statearr_12342_12369[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12315 === 16))
{var inst_12303 = (state_12314[2]);var state_12314__$1 = state_12314;var statearr_12343_12370 = state_12314__$1;(statearr_12343_12370[2] = inst_12303);
(statearr_12343_12370[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12315 === 10))
{var inst_12274 = (state_12314[8]);var inst_12272 = (state_12314[12]);var inst_12279 = cljs.core._nth.call(null,inst_12272,inst_12274);var state_12314__$1 = state_12314;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12314__$1,13,out,inst_12279);
} else
{if((state_val_12315 === 18))
{var inst_12285 = (state_12314[7]);var inst_12294 = cljs.core.first.call(null,inst_12285);var state_12314__$1 = state_12314;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12314__$1,20,out,inst_12294);
} else
{if((state_val_12315 === 8))
{var inst_12274 = (state_12314[8]);var inst_12273 = (state_12314[9]);var inst_12276 = (inst_12274 < inst_12273);var inst_12277 = inst_12276;var state_12314__$1 = state_12314;if(cljs.core.truth_(inst_12277))
{var statearr_12344_12371 = state_12314__$1;(statearr_12344_12371[1] = 10);
} else
{var statearr_12345_12372 = state_12314__$1;(statearr_12345_12372[1] = 11);
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6344__auto__))
;return ((function (switch__6329__auto__,c__6344__auto__){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_12349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12349[0] = state_machine__6330__auto__);
(statearr_12349[1] = 1);
return statearr_12349;
});
var state_machine__6330__auto____1 = (function (state_12314){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_12314);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e12350){if((e12350 instanceof Object))
{var ex__6333__auto__ = e12350;var statearr_12351_12373 = state_12314;(statearr_12351_12373[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12314);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12350;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12374 = state_12314;
state_12314 = G__12374;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_12314){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_12314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__))
})();var state__6346__auto__ = (function (){var statearr_12352 = f__6345__auto__.call(null);(statearr_12352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_12352;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__))
);
return c__6344__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6344__auto___12455 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___12455){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___12455){
return (function (state_12434){var state_val_12435 = (state_12434[1]);if((state_val_12435 === 7))
{var inst_12430 = (state_12434[2]);var state_12434__$1 = state_12434;var statearr_12436_12456 = state_12434__$1;(statearr_12436_12456[2] = inst_12430);
(statearr_12436_12456[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12435 === 1))
{var state_12434__$1 = state_12434;var statearr_12437_12457 = state_12434__$1;(statearr_12437_12457[2] = null);
(statearr_12437_12457[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12435 === 4))
{var inst_12417 = (state_12434[7]);var inst_12417__$1 = (state_12434[2]);var inst_12418 = (inst_12417__$1 == null);var state_12434__$1 = (function (){var statearr_12438 = state_12434;(statearr_12438[7] = inst_12417__$1);
return statearr_12438;
})();if(cljs.core.truth_(inst_12418))
{var statearr_12439_12458 = state_12434__$1;(statearr_12439_12458[1] = 5);
} else
{var statearr_12440_12459 = state_12434__$1;(statearr_12440_12459[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12435 === 6))
{var inst_12417 = (state_12434[7]);var state_12434__$1 = state_12434;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12434__$1,11,to,inst_12417);
} else
{if((state_val_12435 === 3))
{var inst_12432 = (state_12434[2]);var state_12434__$1 = state_12434;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12434__$1,inst_12432);
} else
{if((state_val_12435 === 2))
{var state_12434__$1 = state_12434;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12434__$1,4,from);
} else
{if((state_val_12435 === 11))
{var inst_12427 = (state_12434[2]);var state_12434__$1 = (function (){var statearr_12441 = state_12434;(statearr_12441[8] = inst_12427);
return statearr_12441;
})();var statearr_12442_12460 = state_12434__$1;(statearr_12442_12460[2] = null);
(statearr_12442_12460[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12435 === 9))
{var state_12434__$1 = state_12434;var statearr_12443_12461 = state_12434__$1;(statearr_12443_12461[2] = null);
(statearr_12443_12461[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12435 === 5))
{var state_12434__$1 = state_12434;if(cljs.core.truth_(close_QMARK_))
{var statearr_12444_12462 = state_12434__$1;(statearr_12444_12462[1] = 8);
} else
{var statearr_12445_12463 = state_12434__$1;(statearr_12445_12463[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12435 === 10))
{var inst_12424 = (state_12434[2]);var state_12434__$1 = state_12434;var statearr_12446_12464 = state_12434__$1;(statearr_12446_12464[2] = inst_12424);
(statearr_12446_12464[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12435 === 8))
{var inst_12421 = cljs.core.async.close_BANG_.call(null,to);var state_12434__$1 = state_12434;var statearr_12447_12465 = state_12434__$1;(statearr_12447_12465[2] = inst_12421);
(statearr_12447_12465[1] = 10);
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
}
}
}
}
});})(c__6344__auto___12455))
;return ((function (switch__6329__auto__,c__6344__auto___12455){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_12451 = [null,null,null,null,null,null,null,null,null];(statearr_12451[0] = state_machine__6330__auto__);
(statearr_12451[1] = 1);
return statearr_12451;
});
var state_machine__6330__auto____1 = (function (state_12434){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_12434);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e12452){if((e12452 instanceof Object))
{var ex__6333__auto__ = e12452;var statearr_12453_12466 = state_12434;(statearr_12453_12466[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12434);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12452;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12467 = state_12434;
state_12434 = G__12467;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_12434){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_12434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___12455))
})();var state__6346__auto__ = (function (){var statearr_12454 = f__6345__auto__.call(null);(statearr_12454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___12455);
return statearr_12454;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___12455))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6344__auto___12554 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___12554,tc,fc){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___12554,tc,fc){
return (function (state_12532){var state_val_12533 = (state_12532[1]);if((state_val_12533 === 7))
{var inst_12528 = (state_12532[2]);var state_12532__$1 = state_12532;var statearr_12534_12555 = state_12532__$1;(statearr_12534_12555[2] = inst_12528);
(statearr_12534_12555[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12533 === 1))
{var state_12532__$1 = state_12532;var statearr_12535_12556 = state_12532__$1;(statearr_12535_12556[2] = null);
(statearr_12535_12556[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12533 === 4))
{var inst_12513 = (state_12532[7]);var inst_12513__$1 = (state_12532[2]);var inst_12514 = (inst_12513__$1 == null);var state_12532__$1 = (function (){var statearr_12536 = state_12532;(statearr_12536[7] = inst_12513__$1);
return statearr_12536;
})();if(cljs.core.truth_(inst_12514))
{var statearr_12537_12557 = state_12532__$1;(statearr_12537_12557[1] = 5);
} else
{var statearr_12538_12558 = state_12532__$1;(statearr_12538_12558[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12533 === 6))
{var inst_12513 = (state_12532[7]);var inst_12519 = p.call(null,inst_12513);var state_12532__$1 = state_12532;if(cljs.core.truth_(inst_12519))
{var statearr_12539_12559 = state_12532__$1;(statearr_12539_12559[1] = 9);
} else
{var statearr_12540_12560 = state_12532__$1;(statearr_12540_12560[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12533 === 3))
{var inst_12530 = (state_12532[2]);var state_12532__$1 = state_12532;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12532__$1,inst_12530);
} else
{if((state_val_12533 === 2))
{var state_12532__$1 = state_12532;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12532__$1,4,ch);
} else
{if((state_val_12533 === 11))
{var inst_12513 = (state_12532[7]);var inst_12523 = (state_12532[2]);var state_12532__$1 = state_12532;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12532__$1,8,inst_12523,inst_12513);
} else
{if((state_val_12533 === 9))
{var state_12532__$1 = state_12532;var statearr_12541_12561 = state_12532__$1;(statearr_12541_12561[2] = tc);
(statearr_12541_12561[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12533 === 5))
{var inst_12516 = cljs.core.async.close_BANG_.call(null,tc);var inst_12517 = cljs.core.async.close_BANG_.call(null,fc);var state_12532__$1 = (function (){var statearr_12542 = state_12532;(statearr_12542[8] = inst_12516);
return statearr_12542;
})();var statearr_12543_12562 = state_12532__$1;(statearr_12543_12562[2] = inst_12517);
(statearr_12543_12562[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12533 === 10))
{var state_12532__$1 = state_12532;var statearr_12544_12563 = state_12532__$1;(statearr_12544_12563[2] = fc);
(statearr_12544_12563[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12533 === 8))
{var inst_12525 = (state_12532[2]);var state_12532__$1 = (function (){var statearr_12545 = state_12532;(statearr_12545[9] = inst_12525);
return statearr_12545;
})();var statearr_12546_12564 = state_12532__$1;(statearr_12546_12564[2] = null);
(statearr_12546_12564[1] = 2);
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
}
}
}
}
});})(c__6344__auto___12554,tc,fc))
;return ((function (switch__6329__auto__,c__6344__auto___12554,tc,fc){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_12550 = [null,null,null,null,null,null,null,null,null,null];(statearr_12550[0] = state_machine__6330__auto__);
(statearr_12550[1] = 1);
return statearr_12550;
});
var state_machine__6330__auto____1 = (function (state_12532){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_12532);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e12551){if((e12551 instanceof Object))
{var ex__6333__auto__ = e12551;var statearr_12552_12565 = state_12532;(statearr_12552_12565[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12532);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12551;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12566 = state_12532;
state_12532 = G__12566;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_12532){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_12532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___12554,tc,fc))
})();var state__6346__auto__ = (function (){var statearr_12553 = f__6345__auto__.call(null);(statearr_12553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___12554);
return statearr_12553;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___12554,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6344__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__){
return (function (state_12613){var state_val_12614 = (state_12613[1]);if((state_val_12614 === 7))
{var inst_12609 = (state_12613[2]);var state_12613__$1 = state_12613;var statearr_12615_12631 = state_12613__$1;(statearr_12615_12631[2] = inst_12609);
(statearr_12615_12631[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12614 === 6))
{var inst_12602 = (state_12613[7]);var inst_12599 = (state_12613[8]);var inst_12606 = f.call(null,inst_12599,inst_12602);var inst_12599__$1 = inst_12606;var state_12613__$1 = (function (){var statearr_12616 = state_12613;(statearr_12616[8] = inst_12599__$1);
return statearr_12616;
})();var statearr_12617_12632 = state_12613__$1;(statearr_12617_12632[2] = null);
(statearr_12617_12632[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12614 === 5))
{var inst_12599 = (state_12613[8]);var state_12613__$1 = state_12613;var statearr_12618_12633 = state_12613__$1;(statearr_12618_12633[2] = inst_12599);
(statearr_12618_12633[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12614 === 4))
{var inst_12602 = (state_12613[7]);var inst_12602__$1 = (state_12613[2]);var inst_12603 = (inst_12602__$1 == null);var state_12613__$1 = (function (){var statearr_12619 = state_12613;(statearr_12619[7] = inst_12602__$1);
return statearr_12619;
})();if(cljs.core.truth_(inst_12603))
{var statearr_12620_12634 = state_12613__$1;(statearr_12620_12634[1] = 5);
} else
{var statearr_12621_12635 = state_12613__$1;(statearr_12621_12635[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12614 === 3))
{var inst_12611 = (state_12613[2]);var state_12613__$1 = state_12613;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12613__$1,inst_12611);
} else
{if((state_val_12614 === 2))
{var state_12613__$1 = state_12613;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12613__$1,4,ch);
} else
{if((state_val_12614 === 1))
{var inst_12599 = init;var state_12613__$1 = (function (){var statearr_12622 = state_12613;(statearr_12622[8] = inst_12599);
return statearr_12622;
})();var statearr_12623_12636 = state_12613__$1;(statearr_12623_12636[2] = null);
(statearr_12623_12636[1] = 2);
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
});})(c__6344__auto__))
;return ((function (switch__6329__auto__,c__6344__auto__){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_12627 = [null,null,null,null,null,null,null,null,null];(statearr_12627[0] = state_machine__6330__auto__);
(statearr_12627[1] = 1);
return statearr_12627;
});
var state_machine__6330__auto____1 = (function (state_12613){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_12613);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e12628){if((e12628 instanceof Object))
{var ex__6333__auto__ = e12628;var statearr_12629_12637 = state_12613;(statearr_12629_12637[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12613);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12628;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12638 = state_12613;
state_12613 = G__12638;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_12613){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_12613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__))
})();var state__6346__auto__ = (function (){var statearr_12630 = f__6345__auto__.call(null);(statearr_12630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_12630;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__))
);
return c__6344__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6344__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto__){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto__){
return (function (state_12700){var state_val_12701 = (state_12700[1]);if((state_val_12701 === 7))
{var inst_12681 = (state_12700[7]);var inst_12686 = (state_12700[2]);var inst_12687 = cljs.core.next.call(null,inst_12681);var inst_12681__$1 = inst_12687;var state_12700__$1 = (function (){var statearr_12702 = state_12700;(statearr_12702[7] = inst_12681__$1);
(statearr_12702[8] = inst_12686);
return statearr_12702;
})();var statearr_12703_12721 = state_12700__$1;(statearr_12703_12721[2] = null);
(statearr_12703_12721[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12701 === 1))
{var inst_12680 = cljs.core.seq.call(null,coll);var inst_12681 = inst_12680;var state_12700__$1 = (function (){var statearr_12704 = state_12700;(statearr_12704[7] = inst_12681);
return statearr_12704;
})();var statearr_12705_12722 = state_12700__$1;(statearr_12705_12722[2] = null);
(statearr_12705_12722[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12701 === 4))
{var inst_12681 = (state_12700[7]);var inst_12684 = cljs.core.first.call(null,inst_12681);var state_12700__$1 = state_12700;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12700__$1,7,ch,inst_12684);
} else
{if((state_val_12701 === 6))
{var inst_12696 = (state_12700[2]);var state_12700__$1 = state_12700;var statearr_12706_12723 = state_12700__$1;(statearr_12706_12723[2] = inst_12696);
(statearr_12706_12723[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12701 === 3))
{var inst_12698 = (state_12700[2]);var state_12700__$1 = state_12700;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12700__$1,inst_12698);
} else
{if((state_val_12701 === 2))
{var inst_12681 = (state_12700[7]);var state_12700__$1 = state_12700;if(cljs.core.truth_(inst_12681))
{var statearr_12707_12724 = state_12700__$1;(statearr_12707_12724[1] = 4);
} else
{var statearr_12708_12725 = state_12700__$1;(statearr_12708_12725[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12701 === 9))
{var state_12700__$1 = state_12700;var statearr_12709_12726 = state_12700__$1;(statearr_12709_12726[2] = null);
(statearr_12709_12726[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12701 === 5))
{var state_12700__$1 = state_12700;if(cljs.core.truth_(close_QMARK_))
{var statearr_12710_12727 = state_12700__$1;(statearr_12710_12727[1] = 8);
} else
{var statearr_12711_12728 = state_12700__$1;(statearr_12711_12728[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12701 === 10))
{var inst_12694 = (state_12700[2]);var state_12700__$1 = state_12700;var statearr_12712_12729 = state_12700__$1;(statearr_12712_12729[2] = inst_12694);
(statearr_12712_12729[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12701 === 8))
{var inst_12691 = cljs.core.async.close_BANG_.call(null,ch);var state_12700__$1 = state_12700;var statearr_12713_12730 = state_12700__$1;(statearr_12713_12730[2] = inst_12691);
(statearr_12713_12730[1] = 10);
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
}
}
}
});})(c__6344__auto__))
;return ((function (switch__6329__auto__,c__6344__auto__){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_12717 = [null,null,null,null,null,null,null,null,null];(statearr_12717[0] = state_machine__6330__auto__);
(statearr_12717[1] = 1);
return statearr_12717;
});
var state_machine__6330__auto____1 = (function (state_12700){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_12700);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e12718){if((e12718 instanceof Object))
{var ex__6333__auto__ = e12718;var statearr_12719_12731 = state_12700;(statearr_12719_12731[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12700);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12718;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12732 = state_12700;
state_12700 = G__12732;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_12700){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_12700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__))
})();var state__6346__auto__ = (function (){var statearr_12720 = f__6345__auto__.call(null);(statearr_12720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_12720;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto__))
);
return c__6344__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12734 = {};return obj12734;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3545__auto__ = _;if(and__3545__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3545__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4184__auto__ = (((_ == null))?null:_);return (function (){var or__3557__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4184__auto__)]);if(or__3557__auto__)
{return or__3557__auto__;
} else
{var or__3557__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3557__auto____$1)
{return or__3557__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12736 = {};return obj12736;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3545__auto__ = m;if(and__3545__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3545__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4184__auto__ = (((m == null))?null:m);return (function (){var or__3557__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4184__auto__)]);if(or__3557__auto__)
{return or__3557__auto__;
} else
{var or__3557__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3557__auto____$1)
{return or__3557__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3545__auto__ = m;if(and__3545__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3545__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4184__auto__ = (((m == null))?null:m);return (function (){var or__3557__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4184__auto__)]);if(or__3557__auto__)
{return or__3557__auto__;
} else
{var or__3557__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3557__auto____$1)
{return or__3557__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3545__auto__ = m;if(and__3545__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3545__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4184__auto__ = (((m == null))?null:m);return (function (){var or__3557__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4184__auto__)]);if(or__3557__auto__)
{return or__3557__auto__;
} else
{var or__3557__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3557__auto____$1)
{return or__3557__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12960 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12960 = (function (cs,ch,mult,meta12961){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12961 = meta12961;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12960.cljs$lang$type = true;
cljs.core.async.t12960.cljs$lang$ctorStr = "cljs.core.async/t12960";
cljs.core.async.t12960.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t12960");
});})(cs))
;
cljs.core.async.t12960.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12960.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12960.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12960.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12960.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12960.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12960.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12962){var self__ = this;
var _12962__$1 = this;return self__.meta12961;
});})(cs))
;
cljs.core.async.t12960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12962,meta12961__$1){var self__ = this;
var _12962__$1 = this;return (new cljs.core.async.t12960(self__.cs,self__.ch,self__.mult,meta12961__$1));
});})(cs))
;
cljs.core.async.__GT_t12960 = ((function (cs){
return (function __GT_t12960(cs__$1,ch__$1,mult__$1,meta12961){return (new cljs.core.async.t12960(cs__$1,ch__$1,mult__$1,meta12961));
});})(cs))
;
}
return (new cljs.core.async.t12960(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6344__auto___13183 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___13183,cs,m,dchan,dctr,done){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___13183,cs,m,dchan,dctr,done){
return (function (state_13097){var state_val_13098 = (state_13097[1]);if((state_val_13098 === 7))
{var inst_13093 = (state_13097[2]);var state_13097__$1 = state_13097;var statearr_13099_13184 = state_13097__$1;(statearr_13099_13184[2] = inst_13093);
(statearr_13099_13184[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 20))
{var inst_12994 = (state_13097[7]);var inst_13004 = cljs.core.first.call(null,inst_12994);var inst_13005 = cljs.core.nth.call(null,inst_13004,0,null);var inst_13006 = cljs.core.nth.call(null,inst_13004,1,null);var state_13097__$1 = (function (){var statearr_13100 = state_13097;(statearr_13100[8] = inst_13005);
return statearr_13100;
})();if(cljs.core.truth_(inst_13006))
{var statearr_13101_13185 = state_13097__$1;(statearr_13101_13185[1] = 22);
} else
{var statearr_13102_13186 = state_13097__$1;(statearr_13102_13186[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 27))
{var inst_13036 = (state_13097[9]);var inst_13034 = (state_13097[10]);var inst_13041 = cljs.core._nth.call(null,inst_13034,inst_13036);var state_13097__$1 = (function (){var statearr_13103 = state_13097;(statearr_13103[11] = inst_13041);
return statearr_13103;
})();var statearr_13104_13187 = state_13097__$1;(statearr_13104_13187[2] = null);
(statearr_13104_13187[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 1))
{var state_13097__$1 = state_13097;var statearr_13105_13188 = state_13097__$1;(statearr_13105_13188[2] = null);
(statearr_13105_13188[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 24))
{var inst_12994 = (state_13097[7]);var inst_13011 = (state_13097[2]);var inst_13012 = cljs.core.next.call(null,inst_12994);var inst_12974 = inst_13012;var inst_12975 = null;var inst_12976 = 0;var inst_12977 = 0;var state_13097__$1 = (function (){var statearr_13106 = state_13097;(statearr_13106[12] = inst_13011);
(statearr_13106[13] = inst_12977);
(statearr_13106[14] = inst_12975);
(statearr_13106[15] = inst_12976);
(statearr_13106[16] = inst_12974);
return statearr_13106;
})();var statearr_13107_13189 = state_13097__$1;(statearr_13107_13189[2] = null);
(statearr_13107_13189[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 39))
{var inst_13054 = (state_13097[17]);var inst_13072 = (state_13097[2]);var inst_13073 = cljs.core.next.call(null,inst_13054);var inst_13033 = inst_13073;var inst_13034 = null;var inst_13035 = 0;var inst_13036 = 0;var state_13097__$1 = (function (){var statearr_13111 = state_13097;(statearr_13111[18] = inst_13033);
(statearr_13111[9] = inst_13036);
(statearr_13111[19] = inst_13072);
(statearr_13111[20] = inst_13035);
(statearr_13111[10] = inst_13034);
return statearr_13111;
})();var statearr_13112_13190 = state_13097__$1;(statearr_13112_13190[2] = null);
(statearr_13112_13190[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 4))
{var inst_12965 = (state_13097[21]);var inst_12965__$1 = (state_13097[2]);var inst_12966 = (inst_12965__$1 == null);var state_13097__$1 = (function (){var statearr_13113 = state_13097;(statearr_13113[21] = inst_12965__$1);
return statearr_13113;
})();if(cljs.core.truth_(inst_12966))
{var statearr_13114_13191 = state_13097__$1;(statearr_13114_13191[1] = 5);
} else
{var statearr_13115_13192 = state_13097__$1;(statearr_13115_13192[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 15))
{var inst_12977 = (state_13097[13]);var inst_12975 = (state_13097[14]);var inst_12976 = (state_13097[15]);var inst_12974 = (state_13097[16]);var inst_12990 = (state_13097[2]);var inst_12991 = (inst_12977 + 1);var tmp13108 = inst_12975;var tmp13109 = inst_12976;var tmp13110 = inst_12974;var inst_12974__$1 = tmp13110;var inst_12975__$1 = tmp13108;var inst_12976__$1 = tmp13109;var inst_12977__$1 = inst_12991;var state_13097__$1 = (function (){var statearr_13116 = state_13097;(statearr_13116[13] = inst_12977__$1);
(statearr_13116[14] = inst_12975__$1);
(statearr_13116[22] = inst_12990);
(statearr_13116[15] = inst_12976__$1);
(statearr_13116[16] = inst_12974__$1);
return statearr_13116;
})();var statearr_13117_13193 = state_13097__$1;(statearr_13117_13193[2] = null);
(statearr_13117_13193[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 21))
{var inst_13015 = (state_13097[2]);var state_13097__$1 = state_13097;var statearr_13118_13194 = state_13097__$1;(statearr_13118_13194[2] = inst_13015);
(statearr_13118_13194[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 31))
{var inst_13041 = (state_13097[11]);var inst_13042 = (state_13097[2]);var inst_13043 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13044 = cljs.core.async.untap_STAR_.call(null,m,inst_13041);var state_13097__$1 = (function (){var statearr_13119 = state_13097;(statearr_13119[23] = inst_13042);
(statearr_13119[24] = inst_13043);
return statearr_13119;
})();var statearr_13120_13195 = state_13097__$1;(statearr_13120_13195[2] = inst_13044);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13097__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 32))
{var inst_13041 = (state_13097[11]);var inst_12965 = (state_13097[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13097,31,Object,null,30);var inst_13048 = cljs.core.async.put_BANG_.call(null,inst_13041,inst_12965,done);var state_13097__$1 = state_13097;var statearr_13121_13196 = state_13097__$1;(statearr_13121_13196[2] = inst_13048);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13097__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 40))
{var inst_13063 = (state_13097[25]);var inst_13064 = (state_13097[2]);var inst_13065 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13066 = cljs.core.async.untap_STAR_.call(null,m,inst_13063);var state_13097__$1 = (function (){var statearr_13122 = state_13097;(statearr_13122[26] = inst_13064);
(statearr_13122[27] = inst_13065);
return statearr_13122;
})();var statearr_13123_13197 = state_13097__$1;(statearr_13123_13197[2] = inst_13066);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13097__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 33))
{var inst_13054 = (state_13097[17]);var inst_13056 = cljs.core.chunked_seq_QMARK_.call(null,inst_13054);var state_13097__$1 = state_13097;if(inst_13056)
{var statearr_13124_13198 = state_13097__$1;(statearr_13124_13198[1] = 36);
} else
{var statearr_13125_13199 = state_13097__$1;(statearr_13125_13199[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 13))
{var inst_12984 = (state_13097[28]);var inst_12987 = cljs.core.async.close_BANG_.call(null,inst_12984);var state_13097__$1 = state_13097;var statearr_13126_13200 = state_13097__$1;(statearr_13126_13200[2] = inst_12987);
(statearr_13126_13200[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 22))
{var inst_13005 = (state_13097[8]);var inst_13008 = cljs.core.async.close_BANG_.call(null,inst_13005);var state_13097__$1 = state_13097;var statearr_13127_13201 = state_13097__$1;(statearr_13127_13201[2] = inst_13008);
(statearr_13127_13201[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 36))
{var inst_13054 = (state_13097[17]);var inst_13058 = cljs.core.chunk_first.call(null,inst_13054);var inst_13059 = cljs.core.chunk_rest.call(null,inst_13054);var inst_13060 = cljs.core.count.call(null,inst_13058);var inst_13033 = inst_13059;var inst_13034 = inst_13058;var inst_13035 = inst_13060;var inst_13036 = 0;var state_13097__$1 = (function (){var statearr_13128 = state_13097;(statearr_13128[18] = inst_13033);
(statearr_13128[9] = inst_13036);
(statearr_13128[20] = inst_13035);
(statearr_13128[10] = inst_13034);
return statearr_13128;
})();var statearr_13129_13202 = state_13097__$1;(statearr_13129_13202[2] = null);
(statearr_13129_13202[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 41))
{var inst_12965 = (state_13097[21]);var inst_13063 = (state_13097[25]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13097,40,Object,null,39);var inst_13070 = cljs.core.async.put_BANG_.call(null,inst_13063,inst_12965,done);var state_13097__$1 = state_13097;var statearr_13130_13203 = state_13097__$1;(statearr_13130_13203[2] = inst_13070);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13097__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 43))
{var state_13097__$1 = state_13097;var statearr_13131_13204 = state_13097__$1;(statearr_13131_13204[2] = null);
(statearr_13131_13204[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 29))
{var inst_13081 = (state_13097[2]);var state_13097__$1 = state_13097;var statearr_13132_13205 = state_13097__$1;(statearr_13132_13205[2] = inst_13081);
(statearr_13132_13205[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 44))
{var inst_13090 = (state_13097[2]);var state_13097__$1 = (function (){var statearr_13133 = state_13097;(statearr_13133[29] = inst_13090);
return statearr_13133;
})();var statearr_13134_13206 = state_13097__$1;(statearr_13134_13206[2] = null);
(statearr_13134_13206[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 6))
{var inst_13025 = (state_13097[30]);var inst_13024 = cljs.core.deref.call(null,cs);var inst_13025__$1 = cljs.core.keys.call(null,inst_13024);var inst_13026 = cljs.core.count.call(null,inst_13025__$1);var inst_13027 = cljs.core.reset_BANG_.call(null,dctr,inst_13026);var inst_13032 = cljs.core.seq.call(null,inst_13025__$1);var inst_13033 = inst_13032;var inst_13034 = null;var inst_13035 = 0;var inst_13036 = 0;var state_13097__$1 = (function (){var statearr_13135 = state_13097;(statearr_13135[30] = inst_13025__$1);
(statearr_13135[31] = inst_13027);
(statearr_13135[18] = inst_13033);
(statearr_13135[9] = inst_13036);
(statearr_13135[20] = inst_13035);
(statearr_13135[10] = inst_13034);
return statearr_13135;
})();var statearr_13136_13207 = state_13097__$1;(statearr_13136_13207[2] = null);
(statearr_13136_13207[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 28))
{var inst_13033 = (state_13097[18]);var inst_13054 = (state_13097[17]);var inst_13054__$1 = cljs.core.seq.call(null,inst_13033);var state_13097__$1 = (function (){var statearr_13137 = state_13097;(statearr_13137[17] = inst_13054__$1);
return statearr_13137;
})();if(inst_13054__$1)
{var statearr_13138_13208 = state_13097__$1;(statearr_13138_13208[1] = 33);
} else
{var statearr_13139_13209 = state_13097__$1;(statearr_13139_13209[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 25))
{var inst_13036 = (state_13097[9]);var inst_13035 = (state_13097[20]);var inst_13038 = (inst_13036 < inst_13035);var inst_13039 = inst_13038;var state_13097__$1 = state_13097;if(cljs.core.truth_(inst_13039))
{var statearr_13140_13210 = state_13097__$1;(statearr_13140_13210[1] = 27);
} else
{var statearr_13141_13211 = state_13097__$1;(statearr_13141_13211[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 34))
{var state_13097__$1 = state_13097;var statearr_13142_13212 = state_13097__$1;(statearr_13142_13212[2] = null);
(statearr_13142_13212[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 17))
{var state_13097__$1 = state_13097;var statearr_13143_13213 = state_13097__$1;(statearr_13143_13213[2] = null);
(statearr_13143_13213[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 3))
{var inst_13095 = (state_13097[2]);var state_13097__$1 = state_13097;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13097__$1,inst_13095);
} else
{if((state_val_13098 === 12))
{var inst_13020 = (state_13097[2]);var state_13097__$1 = state_13097;var statearr_13144_13214 = state_13097__$1;(statearr_13144_13214[2] = inst_13020);
(statearr_13144_13214[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 2))
{var state_13097__$1 = state_13097;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13097__$1,4,ch);
} else
{if((state_val_13098 === 23))
{var state_13097__$1 = state_13097;var statearr_13145_13215 = state_13097__$1;(statearr_13145_13215[2] = null);
(statearr_13145_13215[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 35))
{var inst_13079 = (state_13097[2]);var state_13097__$1 = state_13097;var statearr_13146_13216 = state_13097__$1;(statearr_13146_13216[2] = inst_13079);
(statearr_13146_13216[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 19))
{var inst_12994 = (state_13097[7]);var inst_12998 = cljs.core.chunk_first.call(null,inst_12994);var inst_12999 = cljs.core.chunk_rest.call(null,inst_12994);var inst_13000 = cljs.core.count.call(null,inst_12998);var inst_12974 = inst_12999;var inst_12975 = inst_12998;var inst_12976 = inst_13000;var inst_12977 = 0;var state_13097__$1 = (function (){var statearr_13147 = state_13097;(statearr_13147[13] = inst_12977);
(statearr_13147[14] = inst_12975);
(statearr_13147[15] = inst_12976);
(statearr_13147[16] = inst_12974);
return statearr_13147;
})();var statearr_13148_13217 = state_13097__$1;(statearr_13148_13217[2] = null);
(statearr_13148_13217[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 11))
{var inst_12994 = (state_13097[7]);var inst_12974 = (state_13097[16]);var inst_12994__$1 = cljs.core.seq.call(null,inst_12974);var state_13097__$1 = (function (){var statearr_13149 = state_13097;(statearr_13149[7] = inst_12994__$1);
return statearr_13149;
})();if(inst_12994__$1)
{var statearr_13150_13218 = state_13097__$1;(statearr_13150_13218[1] = 16);
} else
{var statearr_13151_13219 = state_13097__$1;(statearr_13151_13219[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 9))
{var inst_13022 = (state_13097[2]);var state_13097__$1 = state_13097;var statearr_13152_13220 = state_13097__$1;(statearr_13152_13220[2] = inst_13022);
(statearr_13152_13220[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 5))
{var inst_12972 = cljs.core.deref.call(null,cs);var inst_12973 = cljs.core.seq.call(null,inst_12972);var inst_12974 = inst_12973;var inst_12975 = null;var inst_12976 = 0;var inst_12977 = 0;var state_13097__$1 = (function (){var statearr_13153 = state_13097;(statearr_13153[13] = inst_12977);
(statearr_13153[14] = inst_12975);
(statearr_13153[15] = inst_12976);
(statearr_13153[16] = inst_12974);
return statearr_13153;
})();var statearr_13154_13221 = state_13097__$1;(statearr_13154_13221[2] = null);
(statearr_13154_13221[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 14))
{var state_13097__$1 = state_13097;var statearr_13155_13222 = state_13097__$1;(statearr_13155_13222[2] = null);
(statearr_13155_13222[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 45))
{var inst_13087 = (state_13097[2]);var state_13097__$1 = state_13097;var statearr_13156_13223 = state_13097__$1;(statearr_13156_13223[2] = inst_13087);
(statearr_13156_13223[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 26))
{var inst_13025 = (state_13097[30]);var inst_13083 = (state_13097[2]);var inst_13084 = cljs.core.seq.call(null,inst_13025);var state_13097__$1 = (function (){var statearr_13157 = state_13097;(statearr_13157[32] = inst_13083);
return statearr_13157;
})();if(inst_13084)
{var statearr_13158_13224 = state_13097__$1;(statearr_13158_13224[1] = 42);
} else
{var statearr_13159_13225 = state_13097__$1;(statearr_13159_13225[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 16))
{var inst_12994 = (state_13097[7]);var inst_12996 = cljs.core.chunked_seq_QMARK_.call(null,inst_12994);var state_13097__$1 = state_13097;if(inst_12996)
{var statearr_13163_13226 = state_13097__$1;(statearr_13163_13226[1] = 19);
} else
{var statearr_13164_13227 = state_13097__$1;(statearr_13164_13227[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 38))
{var inst_13076 = (state_13097[2]);var state_13097__$1 = state_13097;var statearr_13165_13228 = state_13097__$1;(statearr_13165_13228[2] = inst_13076);
(statearr_13165_13228[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 30))
{var inst_13033 = (state_13097[18]);var inst_13036 = (state_13097[9]);var inst_13035 = (state_13097[20]);var inst_13034 = (state_13097[10]);var inst_13050 = (state_13097[2]);var inst_13051 = (inst_13036 + 1);var tmp13160 = inst_13033;var tmp13161 = inst_13035;var tmp13162 = inst_13034;var inst_13033__$1 = tmp13160;var inst_13034__$1 = tmp13162;var inst_13035__$1 = tmp13161;var inst_13036__$1 = inst_13051;var state_13097__$1 = (function (){var statearr_13166 = state_13097;(statearr_13166[33] = inst_13050);
(statearr_13166[18] = inst_13033__$1);
(statearr_13166[9] = inst_13036__$1);
(statearr_13166[20] = inst_13035__$1);
(statearr_13166[10] = inst_13034__$1);
return statearr_13166;
})();var statearr_13167_13229 = state_13097__$1;(statearr_13167_13229[2] = null);
(statearr_13167_13229[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 10))
{var inst_12977 = (state_13097[13]);var inst_12975 = (state_13097[14]);var inst_12983 = cljs.core._nth.call(null,inst_12975,inst_12977);var inst_12984 = cljs.core.nth.call(null,inst_12983,0,null);var inst_12985 = cljs.core.nth.call(null,inst_12983,1,null);var state_13097__$1 = (function (){var statearr_13168 = state_13097;(statearr_13168[28] = inst_12984);
return statearr_13168;
})();if(cljs.core.truth_(inst_12985))
{var statearr_13169_13230 = state_13097__$1;(statearr_13169_13230[1] = 13);
} else
{var statearr_13170_13231 = state_13097__$1;(statearr_13170_13231[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 18))
{var inst_13018 = (state_13097[2]);var state_13097__$1 = state_13097;var statearr_13171_13232 = state_13097__$1;(statearr_13171_13232[2] = inst_13018);
(statearr_13171_13232[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 42))
{var state_13097__$1 = state_13097;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13097__$1,45,dchan);
} else
{if((state_val_13098 === 37))
{var inst_13054 = (state_13097[17]);var inst_13063 = cljs.core.first.call(null,inst_13054);var state_13097__$1 = (function (){var statearr_13172 = state_13097;(statearr_13172[25] = inst_13063);
return statearr_13172;
})();var statearr_13173_13233 = state_13097__$1;(statearr_13173_13233[2] = null);
(statearr_13173_13233[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13098 === 8))
{var inst_12977 = (state_13097[13]);var inst_12976 = (state_13097[15]);var inst_12979 = (inst_12977 < inst_12976);var inst_12980 = inst_12979;var state_13097__$1 = state_13097;if(cljs.core.truth_(inst_12980))
{var statearr_13174_13234 = state_13097__$1;(statearr_13174_13234[1] = 10);
} else
{var statearr_13175_13235 = state_13097__$1;(statearr_13175_13235[1] = 11);
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6344__auto___13183,cs,m,dchan,dctr,done))
;return ((function (switch__6329__auto__,c__6344__auto___13183,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_13179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13179[0] = state_machine__6330__auto__);
(statearr_13179[1] = 1);
return statearr_13179;
});
var state_machine__6330__auto____1 = (function (state_13097){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_13097);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e13180){if((e13180 instanceof Object))
{var ex__6333__auto__ = e13180;var statearr_13181_13236 = state_13097;(statearr_13181_13236[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13097);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13180;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13237 = state_13097;
state_13097 = G__13237;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_13097){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_13097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___13183,cs,m,dchan,dctr,done))
})();var state__6346__auto__ = (function (){var statearr_13182 = f__6345__auto__.call(null);(statearr_13182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___13183);
return statearr_13182;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___13183,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj13239 = {};return obj13239;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3545__auto__ = m;if(and__3545__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3545__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4184__auto__ = (((m == null))?null:m);return (function (){var or__3557__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4184__auto__)]);if(or__3557__auto__)
{return or__3557__auto__;
} else
{var or__3557__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3557__auto____$1)
{return or__3557__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3545__auto__ = m;if(and__3545__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3545__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4184__auto__ = (((m == null))?null:m);return (function (){var or__3557__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4184__auto__)]);if(or__3557__auto__)
{return or__3557__auto__;
} else
{var or__3557__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3557__auto____$1)
{return or__3557__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3545__auto__ = m;if(and__3545__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3545__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4184__auto__ = (((m == null))?null:m);return (function (){var or__3557__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4184__auto__)]);if(or__3557__auto__)
{return or__3557__auto__;
} else
{var or__3557__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3557__auto____$1)
{return or__3557__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3545__auto__ = m;if(and__3545__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3545__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4184__auto__ = (((m == null))?null:m);return (function (){var or__3557__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4184__auto__)]);if(or__3557__auto__)
{return or__3557__auto__;
} else
{var or__3557__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3557__auto____$1)
{return or__3557__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3545__auto__ = m;if(and__3545__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3545__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4184__auto__ = (((m == null))?null:m);return (function (){var or__3557__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4184__auto__)]);if(or__3557__auto__)
{return or__3557__auto__;
} else
{var or__3557__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3557__auto____$1)
{return or__3557__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t13349 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13349 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13350){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13350 = meta13350;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13349.cljs$lang$type = true;
cljs.core.async.t13349.cljs$lang$ctorStr = "cljs.core.async/t13349";
cljs.core.async.t13349.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t13349");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13349.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13349.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13349.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13349.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13349.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13349.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13349.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13349.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13351){var self__ = this;
var _13351__$1 = this;return self__.meta13350;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13351,meta13350__$1){var self__ = this;
var _13351__$1 = this;return (new cljs.core.async.t13349(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13350__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13349 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13349(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13350){return (new cljs.core.async.t13349(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13350));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13349(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6344__auto___13458 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___13458,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___13458,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13416){var state_val_13417 = (state_13416[1]);if((state_val_13417 === 7))
{var inst_13365 = (state_13416[7]);var inst_13370 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13365);var state_13416__$1 = state_13416;var statearr_13418_13459 = state_13416__$1;(statearr_13418_13459[2] = inst_13370);
(statearr_13418_13459[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13417 === 20))
{var inst_13380 = (state_13416[8]);var state_13416__$1 = state_13416;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13416__$1,23,out,inst_13380);
} else
{if((state_val_13417 === 1))
{var inst_13355 = (state_13416[9]);var inst_13355__$1 = calc_state.call(null);var inst_13356 = cljs.core.seq_QMARK_.call(null,inst_13355__$1);var state_13416__$1 = (function (){var statearr_13419 = state_13416;(statearr_13419[9] = inst_13355__$1);
return statearr_13419;
})();if(inst_13356)
{var statearr_13420_13460 = state_13416__$1;(statearr_13420_13460[1] = 2);
} else
{var statearr_13421_13461 = state_13416__$1;(statearr_13421_13461[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13417 === 4))
{var inst_13355 = (state_13416[9]);var inst_13361 = (state_13416[2]);var inst_13362 = cljs.core.get.call(null,inst_13361,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13363 = cljs.core.get.call(null,inst_13361,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13364 = cljs.core.get.call(null,inst_13361,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13365 = inst_13355;var state_13416__$1 = (function (){var statearr_13422 = state_13416;(statearr_13422[7] = inst_13365);
(statearr_13422[10] = inst_13363);
(statearr_13422[11] = inst_13362);
(statearr_13422[12] = inst_13364);
return statearr_13422;
})();var statearr_13423_13462 = state_13416__$1;(statearr_13423_13462[2] = null);
(statearr_13423_13462[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13417 === 15))
{var state_13416__$1 = state_13416;var statearr_13424_13463 = state_13416__$1;(statearr_13424_13463[2] = null);
(statearr_13424_13463[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13417 === 21))
{var state_13416__$1 = state_13416;var statearr_13425_13464 = state_13416__$1;(statearr_13425_13464[2] = null);
(statearr_13425_13464[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13417 === 13))
{var inst_13412 = (state_13416[2]);var state_13416__$1 = state_13416;var statearr_13426_13465 = state_13416__$1;(statearr_13426_13465[2] = inst_13412);
(statearr_13426_13465[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13417 === 22))
{var inst_13373 = (state_13416[13]);var inst_13409 = (state_13416[2]);var inst_13365 = inst_13373;var state_13416__$1 = (function (){var statearr_13427 = state_13416;(statearr_13427[14] = inst_13409);
(statearr_13427[7] = inst_13365);
return statearr_13427;
})();var statearr_13428_13466 = state_13416__$1;(statearr_13428_13466[2] = null);
(statearr_13428_13466[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13417 === 6))
{var inst_13414 = (state_13416[2]);var state_13416__$1 = state_13416;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13416__$1,inst_13414);
} else
{if((state_val_13417 === 17))
{var inst_13395 = (state_13416[15]);var state_13416__$1 = state_13416;var statearr_13429_13467 = state_13416__$1;(statearr_13429_13467[2] = inst_13395);
(statearr_13429_13467[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13417 === 3))
{var inst_13355 = (state_13416[9]);var state_13416__$1 = state_13416;var statearr_13430_13468 = state_13416__$1;(statearr_13430_13468[2] = inst_13355);
(statearr_13430_13468[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13417 === 12))
{var inst_13395 = (state_13416[15]);var inst_13376 = (state_13416[16]);var inst_13381 = (state_13416[17]);var inst_13395__$1 = inst_13376.call(null,inst_13381);var state_13416__$1 = (function (){var statearr_13431 = state_13416;(statearr_13431[15] = inst_13395__$1);
return statearr_13431;
})();if(cljs.core.truth_(inst_13395__$1))
{var statearr_13432_13469 = state_13416__$1;(statearr_13432_13469[1] = 17);
} else
{var statearr_13433_13470 = state_13416__$1;(statearr_13433_13470[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13417 === 2))
{var inst_13355 = (state_13416[9]);var inst_13358 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13355);var state_13416__$1 = state_13416;var statearr_13434_13471 = state_13416__$1;(statearr_13434_13471[2] = inst_13358);
(statearr_13434_13471[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13417 === 23))
{var inst_13406 = (state_13416[2]);var state_13416__$1 = state_13416;var statearr_13435_13472 = state_13416__$1;(statearr_13435_13472[2] = inst_13406);
(statearr_13435_13472[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13417 === 19))
{var inst_13403 = (state_13416[2]);var state_13416__$1 = state_13416;if(cljs.core.truth_(inst_13403))
{var statearr_13436_13473 = state_13416__$1;(statearr_13436_13473[1] = 20);
} else
{var statearr_13437_13474 = state_13416__$1;(statearr_13437_13474[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13417 === 11))
{var inst_13380 = (state_13416[8]);var inst_13386 = (inst_13380 == null);var state_13416__$1 = state_13416;if(cljs.core.truth_(inst_13386))
{var statearr_13438_13475 = state_13416__$1;(statearr_13438_13475[1] = 14);
} else
{var statearr_13439_13476 = state_13416__$1;(statearr_13439_13476[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13417 === 9))
{var inst_13373 = (state_13416[13]);var inst_13373__$1 = (state_13416[2]);var inst_13374 = cljs.core.get.call(null,inst_13373__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13375 = cljs.core.get.call(null,inst_13373__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13376 = cljs.core.get.call(null,inst_13373__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13416__$1 = (function (){var statearr_13440 = state_13416;(statearr_13440[16] = inst_13376);
(statearr_13440[18] = inst_13375);
(statearr_13440[13] = inst_13373__$1);
return statearr_13440;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13416__$1,10,inst_13374);
} else
{if((state_val_13417 === 5))
{var inst_13365 = (state_13416[7]);var inst_13368 = cljs.core.seq_QMARK_.call(null,inst_13365);var state_13416__$1 = state_13416;if(inst_13368)
{var statearr_13441_13477 = state_13416__$1;(statearr_13441_13477[1] = 7);
} else
{var statearr_13442_13478 = state_13416__$1;(statearr_13442_13478[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13417 === 14))
{var inst_13381 = (state_13416[17]);var inst_13388 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13381);var state_13416__$1 = state_13416;var statearr_13443_13479 = state_13416__$1;(statearr_13443_13479[2] = inst_13388);
(statearr_13443_13479[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13417 === 16))
{var inst_13391 = (state_13416[2]);var inst_13392 = calc_state.call(null);var inst_13365 = inst_13392;var state_13416__$1 = (function (){var statearr_13444 = state_13416;(statearr_13444[19] = inst_13391);
(statearr_13444[7] = inst_13365);
return statearr_13444;
})();var statearr_13445_13480 = state_13416__$1;(statearr_13445_13480[2] = null);
(statearr_13445_13480[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13417 === 10))
{var inst_13381 = (state_13416[17]);var inst_13380 = (state_13416[8]);var inst_13379 = (state_13416[2]);var inst_13380__$1 = cljs.core.nth.call(null,inst_13379,0,null);var inst_13381__$1 = cljs.core.nth.call(null,inst_13379,1,null);var inst_13382 = (inst_13380__$1 == null);var inst_13383 = cljs.core._EQ_.call(null,inst_13381__$1,change);var inst_13384 = (inst_13382) || (inst_13383);var state_13416__$1 = (function (){var statearr_13446 = state_13416;(statearr_13446[17] = inst_13381__$1);
(statearr_13446[8] = inst_13380__$1);
return statearr_13446;
})();if(cljs.core.truth_(inst_13384))
{var statearr_13447_13481 = state_13416__$1;(statearr_13447_13481[1] = 11);
} else
{var statearr_13448_13482 = state_13416__$1;(statearr_13448_13482[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13417 === 18))
{var inst_13376 = (state_13416[16]);var inst_13381 = (state_13416[17]);var inst_13375 = (state_13416[18]);var inst_13398 = cljs.core.empty_QMARK_.call(null,inst_13376);var inst_13399 = inst_13375.call(null,inst_13381);var inst_13400 = cljs.core.not.call(null,inst_13399);var inst_13401 = (inst_13398) && (inst_13400);var state_13416__$1 = state_13416;var statearr_13449_13483 = state_13416__$1;(statearr_13449_13483[2] = inst_13401);
(statearr_13449_13483[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13417 === 8))
{var inst_13365 = (state_13416[7]);var state_13416__$1 = state_13416;var statearr_13450_13484 = state_13416__$1;(statearr_13450_13484[2] = inst_13365);
(statearr_13450_13484[1] = 9);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6344__auto___13458,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6329__auto__,c__6344__auto___13458,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_13454 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13454[0] = state_machine__6330__auto__);
(statearr_13454[1] = 1);
return statearr_13454;
});
var state_machine__6330__auto____1 = (function (state_13416){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_13416);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e13455){if((e13455 instanceof Object))
{var ex__6333__auto__ = e13455;var statearr_13456_13485 = state_13416;(statearr_13456_13485[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13416);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13455;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13486 = state_13416;
state_13416 = G__13486;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_13416){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_13416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___13458,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6346__auto__ = (function (){var statearr_13457 = f__6345__auto__.call(null);(statearr_13457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___13458);
return statearr_13457;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___13458,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj13488 = {};return obj13488;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3545__auto__ = p;if(and__3545__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3545__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4184__auto__ = (((p == null))?null:p);return (function (){var or__3557__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4184__auto__)]);if(or__3557__auto__)
{return or__3557__auto__;
} else
{var or__3557__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3557__auto____$1)
{return or__3557__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3545__auto__ = p;if(and__3545__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3545__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4184__auto__ = (((p == null))?null:p);return (function (){var or__3557__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4184__auto__)]);if(or__3557__auto__)
{return or__3557__auto__;
} else
{var or__3557__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3557__auto____$1)
{return or__3557__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3545__auto__ = p;if(and__3545__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3545__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4184__auto__ = (((p == null))?null:p);return (function (){var or__3557__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4184__auto__)]);if(or__3557__auto__)
{return or__3557__auto__;
} else
{var or__3557__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3557__auto____$1)
{return or__3557__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3545__auto__ = p;if(and__3545__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3545__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4184__auto__ = (((p == null))?null:p);return (function (){var or__3557__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4184__auto__)]);if(or__3557__auto__)
{return or__3557__auto__;
} else
{var or__3557__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3557__auto____$1)
{return or__3557__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3557__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3557__auto__))
{return or__3557__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3557__auto__,mults){
return (function (p1__13489_SHARP_){if(cljs.core.truth_(p1__13489_SHARP_.call(null,topic)))
{return p1__13489_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13489_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3557__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13614 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13614 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13615){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13615 = meta13615;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13614.cljs$lang$type = true;
cljs.core.async.t13614.cljs$lang$ctorStr = "cljs.core.async/t13614";
cljs.core.async.t13614.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t13614");
});})(mults,ensure_mult))
;
cljs.core.async.t13614.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13614.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13614.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13614.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13614.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13614.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13614.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13614.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13616){var self__ = this;
var _13616__$1 = this;return self__.meta13615;
});})(mults,ensure_mult))
;
cljs.core.async.t13614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13616,meta13615__$1){var self__ = this;
var _13616__$1 = this;return (new cljs.core.async.t13614(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13615__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13614 = ((function (mults,ensure_mult){
return (function __GT_t13614(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13615){return (new cljs.core.async.t13614(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13615));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13614(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6344__auto___13738 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___13738,mults,ensure_mult,p){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___13738,mults,ensure_mult,p){
return (function (state_13690){var state_val_13691 = (state_13690[1]);if((state_val_13691 === 7))
{var inst_13686 = (state_13690[2]);var state_13690__$1 = state_13690;var statearr_13692_13739 = state_13690__$1;(statearr_13692_13739[2] = inst_13686);
(statearr_13692_13739[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13691 === 20))
{var state_13690__$1 = state_13690;var statearr_13693_13740 = state_13690__$1;(statearr_13693_13740[2] = null);
(statearr_13693_13740[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13691 === 1))
{var state_13690__$1 = state_13690;var statearr_13694_13741 = state_13690__$1;(statearr_13694_13741[2] = null);
(statearr_13694_13741[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13691 === 24))
{var inst_13619 = (state_13690[7]);var inst_13669 = (state_13690[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13690,23,Object,null,22);var inst_13676 = cljs.core.async.muxch_STAR_.call(null,inst_13669);var state_13690__$1 = state_13690;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13690__$1,25,inst_13676,inst_13619);
} else
{if((state_val_13691 === 4))
{var inst_13619 = (state_13690[7]);var inst_13619__$1 = (state_13690[2]);var inst_13620 = (inst_13619__$1 == null);var state_13690__$1 = (function (){var statearr_13695 = state_13690;(statearr_13695[7] = inst_13619__$1);
return statearr_13695;
})();if(cljs.core.truth_(inst_13620))
{var statearr_13696_13742 = state_13690__$1;(statearr_13696_13742[1] = 5);
} else
{var statearr_13697_13743 = state_13690__$1;(statearr_13697_13743[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13691 === 15))
{var inst_13661 = (state_13690[2]);var state_13690__$1 = state_13690;var statearr_13698_13744 = state_13690__$1;(statearr_13698_13744[2] = inst_13661);
(statearr_13698_13744[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13691 === 21))
{var inst_13683 = (state_13690[2]);var state_13690__$1 = (function (){var statearr_13699 = state_13690;(statearr_13699[9] = inst_13683);
return statearr_13699;
})();var statearr_13700_13745 = state_13690__$1;(statearr_13700_13745[2] = null);
(statearr_13700_13745[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13691 === 13))
{var inst_13643 = (state_13690[10]);var inst_13645 = cljs.core.chunked_seq_QMARK_.call(null,inst_13643);var state_13690__$1 = state_13690;if(inst_13645)
{var statearr_13701_13746 = state_13690__$1;(statearr_13701_13746[1] = 16);
} else
{var statearr_13702_13747 = state_13690__$1;(statearr_13702_13747[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13691 === 22))
{var inst_13680 = (state_13690[2]);var state_13690__$1 = state_13690;var statearr_13703_13748 = state_13690__$1;(statearr_13703_13748[2] = inst_13680);
(statearr_13703_13748[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13691 === 6))
{var inst_13619 = (state_13690[7]);var inst_13667 = (state_13690[11]);var inst_13669 = (state_13690[8]);var inst_13667__$1 = topic_fn.call(null,inst_13619);var inst_13668 = cljs.core.deref.call(null,mults);var inst_13669__$1 = cljs.core.get.call(null,inst_13668,inst_13667__$1);var state_13690__$1 = (function (){var statearr_13704 = state_13690;(statearr_13704[11] = inst_13667__$1);
(statearr_13704[8] = inst_13669__$1);
return statearr_13704;
})();if(cljs.core.truth_(inst_13669__$1))
{var statearr_13705_13749 = state_13690__$1;(statearr_13705_13749[1] = 19);
} else
{var statearr_13706_13750 = state_13690__$1;(statearr_13706_13750[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13691 === 25))
{var inst_13678 = (state_13690[2]);var state_13690__$1 = state_13690;var statearr_13707_13751 = state_13690__$1;(statearr_13707_13751[2] = inst_13678);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13690__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13691 === 17))
{var inst_13643 = (state_13690[10]);var inst_13652 = cljs.core.first.call(null,inst_13643);var inst_13653 = cljs.core.async.muxch_STAR_.call(null,inst_13652);var inst_13654 = cljs.core.async.close_BANG_.call(null,inst_13653);var inst_13655 = cljs.core.next.call(null,inst_13643);var inst_13629 = inst_13655;var inst_13630 = null;var inst_13631 = 0;var inst_13632 = 0;var state_13690__$1 = (function (){var statearr_13708 = state_13690;(statearr_13708[12] = inst_13630);
(statearr_13708[13] = inst_13629);
(statearr_13708[14] = inst_13632);
(statearr_13708[15] = inst_13654);
(statearr_13708[16] = inst_13631);
return statearr_13708;
})();var statearr_13709_13752 = state_13690__$1;(statearr_13709_13752[2] = null);
(statearr_13709_13752[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13691 === 3))
{var inst_13688 = (state_13690[2]);var state_13690__$1 = state_13690;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13690__$1,inst_13688);
} else
{if((state_val_13691 === 12))
{var inst_13663 = (state_13690[2]);var state_13690__$1 = state_13690;var statearr_13710_13753 = state_13690__$1;(statearr_13710_13753[2] = inst_13663);
(statearr_13710_13753[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13691 === 2))
{var state_13690__$1 = state_13690;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13690__$1,4,ch);
} else
{if((state_val_13691 === 23))
{var inst_13667 = (state_13690[11]);var inst_13671 = (state_13690[2]);var inst_13672 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13667);var state_13690__$1 = (function (){var statearr_13711 = state_13690;(statearr_13711[17] = inst_13671);
return statearr_13711;
})();var statearr_13712_13754 = state_13690__$1;(statearr_13712_13754[2] = inst_13672);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13690__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13691 === 19))
{var state_13690__$1 = state_13690;var statearr_13713_13755 = state_13690__$1;(statearr_13713_13755[2] = null);
(statearr_13713_13755[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13691 === 11))
{var inst_13629 = (state_13690[13]);var inst_13643 = (state_13690[10]);var inst_13643__$1 = cljs.core.seq.call(null,inst_13629);var state_13690__$1 = (function (){var statearr_13714 = state_13690;(statearr_13714[10] = inst_13643__$1);
return statearr_13714;
})();if(inst_13643__$1)
{var statearr_13715_13756 = state_13690__$1;(statearr_13715_13756[1] = 13);
} else
{var statearr_13716_13757 = state_13690__$1;(statearr_13716_13757[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13691 === 9))
{var inst_13665 = (state_13690[2]);var state_13690__$1 = state_13690;var statearr_13717_13758 = state_13690__$1;(statearr_13717_13758[2] = inst_13665);
(statearr_13717_13758[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13691 === 5))
{var inst_13626 = cljs.core.deref.call(null,mults);var inst_13627 = cljs.core.vals.call(null,inst_13626);var inst_13628 = cljs.core.seq.call(null,inst_13627);var inst_13629 = inst_13628;var inst_13630 = null;var inst_13631 = 0;var inst_13632 = 0;var state_13690__$1 = (function (){var statearr_13718 = state_13690;(statearr_13718[12] = inst_13630);
(statearr_13718[13] = inst_13629);
(statearr_13718[14] = inst_13632);
(statearr_13718[16] = inst_13631);
return statearr_13718;
})();var statearr_13719_13759 = state_13690__$1;(statearr_13719_13759[2] = null);
(statearr_13719_13759[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13691 === 14))
{var state_13690__$1 = state_13690;var statearr_13723_13760 = state_13690__$1;(statearr_13723_13760[2] = null);
(statearr_13723_13760[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13691 === 16))
{var inst_13643 = (state_13690[10]);var inst_13647 = cljs.core.chunk_first.call(null,inst_13643);var inst_13648 = cljs.core.chunk_rest.call(null,inst_13643);var inst_13649 = cljs.core.count.call(null,inst_13647);var inst_13629 = inst_13648;var inst_13630 = inst_13647;var inst_13631 = inst_13649;var inst_13632 = 0;var state_13690__$1 = (function (){var statearr_13724 = state_13690;(statearr_13724[12] = inst_13630);
(statearr_13724[13] = inst_13629);
(statearr_13724[14] = inst_13632);
(statearr_13724[16] = inst_13631);
return statearr_13724;
})();var statearr_13725_13761 = state_13690__$1;(statearr_13725_13761[2] = null);
(statearr_13725_13761[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13691 === 10))
{var inst_13630 = (state_13690[12]);var inst_13629 = (state_13690[13]);var inst_13632 = (state_13690[14]);var inst_13631 = (state_13690[16]);var inst_13637 = cljs.core._nth.call(null,inst_13630,inst_13632);var inst_13638 = cljs.core.async.muxch_STAR_.call(null,inst_13637);var inst_13639 = cljs.core.async.close_BANG_.call(null,inst_13638);var inst_13640 = (inst_13632 + 1);var tmp13720 = inst_13630;var tmp13721 = inst_13629;var tmp13722 = inst_13631;var inst_13629__$1 = tmp13721;var inst_13630__$1 = tmp13720;var inst_13631__$1 = tmp13722;var inst_13632__$1 = inst_13640;var state_13690__$1 = (function (){var statearr_13726 = state_13690;(statearr_13726[12] = inst_13630__$1);
(statearr_13726[13] = inst_13629__$1);
(statearr_13726[14] = inst_13632__$1);
(statearr_13726[16] = inst_13631__$1);
(statearr_13726[18] = inst_13639);
return statearr_13726;
})();var statearr_13727_13762 = state_13690__$1;(statearr_13727_13762[2] = null);
(statearr_13727_13762[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13691 === 18))
{var inst_13658 = (state_13690[2]);var state_13690__$1 = state_13690;var statearr_13728_13763 = state_13690__$1;(statearr_13728_13763[2] = inst_13658);
(statearr_13728_13763[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13691 === 8))
{var inst_13632 = (state_13690[14]);var inst_13631 = (state_13690[16]);var inst_13634 = (inst_13632 < inst_13631);var inst_13635 = inst_13634;var state_13690__$1 = state_13690;if(cljs.core.truth_(inst_13635))
{var statearr_13729_13764 = state_13690__$1;(statearr_13729_13764[1] = 10);
} else
{var statearr_13730_13765 = state_13690__$1;(statearr_13730_13765[1] = 11);
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6344__auto___13738,mults,ensure_mult,p))
;return ((function (switch__6329__auto__,c__6344__auto___13738,mults,ensure_mult,p){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_13734 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13734[0] = state_machine__6330__auto__);
(statearr_13734[1] = 1);
return statearr_13734;
});
var state_machine__6330__auto____1 = (function (state_13690){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_13690);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e13735){if((e13735 instanceof Object))
{var ex__6333__auto__ = e13735;var statearr_13736_13766 = state_13690;(statearr_13736_13766[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13690);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13735;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13767 = state_13690;
state_13690 = G__13767;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_13690){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_13690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___13738,mults,ensure_mult,p))
})();var state__6346__auto__ = (function (){var statearr_13737 = f__6345__auto__.call(null);(statearr_13737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___13738);
return statearr_13737;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___13738,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6344__auto___13904 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___13904,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___13904,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13874){var state_val_13875 = (state_13874[1]);if((state_val_13875 === 7))
{var state_13874__$1 = state_13874;var statearr_13876_13905 = state_13874__$1;(statearr_13876_13905[2] = null);
(statearr_13876_13905[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13875 === 1))
{var state_13874__$1 = state_13874;var statearr_13877_13906 = state_13874__$1;(statearr_13877_13906[2] = null);
(statearr_13877_13906[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13875 === 4))
{var inst_13838 = (state_13874[7]);var inst_13840 = (inst_13838 < cnt);var state_13874__$1 = state_13874;if(cljs.core.truth_(inst_13840))
{var statearr_13878_13907 = state_13874__$1;(statearr_13878_13907[1] = 6);
} else
{var statearr_13879_13908 = state_13874__$1;(statearr_13879_13908[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13875 === 15))
{var inst_13870 = (state_13874[2]);var state_13874__$1 = state_13874;var statearr_13880_13909 = state_13874__$1;(statearr_13880_13909[2] = inst_13870);
(statearr_13880_13909[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13875 === 13))
{var inst_13863 = cljs.core.async.close_BANG_.call(null,out);var state_13874__$1 = state_13874;var statearr_13881_13910 = state_13874__$1;(statearr_13881_13910[2] = inst_13863);
(statearr_13881_13910[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13875 === 6))
{var state_13874__$1 = state_13874;var statearr_13882_13911 = state_13874__$1;(statearr_13882_13911[2] = null);
(statearr_13882_13911[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13875 === 3))
{var inst_13872 = (state_13874[2]);var state_13874__$1 = state_13874;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13874__$1,inst_13872);
} else
{if((state_val_13875 === 12))
{var inst_13860 = (state_13874[8]);var inst_13860__$1 = (state_13874[2]);var inst_13861 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13860__$1);var state_13874__$1 = (function (){var statearr_13883 = state_13874;(statearr_13883[8] = inst_13860__$1);
return statearr_13883;
})();if(cljs.core.truth_(inst_13861))
{var statearr_13884_13912 = state_13874__$1;(statearr_13884_13912[1] = 13);
} else
{var statearr_13885_13913 = state_13874__$1;(statearr_13885_13913[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13875 === 2))
{var inst_13837 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13838 = 0;var state_13874__$1 = (function (){var statearr_13886 = state_13874;(statearr_13886[9] = inst_13837);
(statearr_13886[7] = inst_13838);
return statearr_13886;
})();var statearr_13887_13914 = state_13874__$1;(statearr_13887_13914[2] = null);
(statearr_13887_13914[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13875 === 11))
{var inst_13838 = (state_13874[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13874,10,Object,null,9);var inst_13847 = chs__$1.call(null,inst_13838);var inst_13848 = done.call(null,inst_13838);var inst_13849 = cljs.core.async.take_BANG_.call(null,inst_13847,inst_13848);var state_13874__$1 = state_13874;var statearr_13888_13915 = state_13874__$1;(statearr_13888_13915[2] = inst_13849);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13874__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13875 === 9))
{var inst_13838 = (state_13874[7]);var inst_13851 = (state_13874[2]);var inst_13852 = (inst_13838 + 1);var inst_13838__$1 = inst_13852;var state_13874__$1 = (function (){var statearr_13889 = state_13874;(statearr_13889[7] = inst_13838__$1);
(statearr_13889[10] = inst_13851);
return statearr_13889;
})();var statearr_13890_13916 = state_13874__$1;(statearr_13890_13916[2] = null);
(statearr_13890_13916[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13875 === 5))
{var inst_13858 = (state_13874[2]);var state_13874__$1 = (function (){var statearr_13891 = state_13874;(statearr_13891[11] = inst_13858);
return statearr_13891;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13874__$1,12,dchan);
} else
{if((state_val_13875 === 14))
{var inst_13860 = (state_13874[8]);var inst_13865 = cljs.core.apply.call(null,f,inst_13860);var state_13874__$1 = state_13874;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13874__$1,16,out,inst_13865);
} else
{if((state_val_13875 === 16))
{var inst_13867 = (state_13874[2]);var state_13874__$1 = (function (){var statearr_13892 = state_13874;(statearr_13892[12] = inst_13867);
return statearr_13892;
})();var statearr_13893_13917 = state_13874__$1;(statearr_13893_13917[2] = null);
(statearr_13893_13917[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13875 === 10))
{var inst_13842 = (state_13874[2]);var inst_13843 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13874__$1 = (function (){var statearr_13894 = state_13874;(statearr_13894[13] = inst_13842);
return statearr_13894;
})();var statearr_13895_13918 = state_13874__$1;(statearr_13895_13918[2] = inst_13843);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13874__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13875 === 8))
{var inst_13856 = (state_13874[2]);var state_13874__$1 = state_13874;var statearr_13896_13919 = state_13874__$1;(statearr_13896_13919[2] = inst_13856);
(statearr_13896_13919[1] = 5);
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
}
}
}
}
}
}
}
}
}
});})(c__6344__auto___13904,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6329__auto__,c__6344__auto___13904,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_13900 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13900[0] = state_machine__6330__auto__);
(statearr_13900[1] = 1);
return statearr_13900;
});
var state_machine__6330__auto____1 = (function (state_13874){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_13874);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e13901){if((e13901 instanceof Object))
{var ex__6333__auto__ = e13901;var statearr_13902_13920 = state_13874;(statearr_13902_13920[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13874);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13901;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13921 = state_13874;
state_13874 = G__13921;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_13874){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_13874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___13904,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6346__auto__ = (function (){var statearr_13903 = f__6345__auto__.call(null);(statearr_13903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___13904);
return statearr_13903;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___13904,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6344__auto___14029 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___14029,out){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___14029,out){
return (function (state_14005){var state_val_14006 = (state_14005[1]);if((state_val_14006 === 7))
{var inst_13984 = (state_14005[7]);var inst_13985 = (state_14005[8]);var inst_13984__$1 = (state_14005[2]);var inst_13985__$1 = cljs.core.nth.call(null,inst_13984__$1,0,null);var inst_13986 = cljs.core.nth.call(null,inst_13984__$1,1,null);var inst_13987 = (inst_13985__$1 == null);var state_14005__$1 = (function (){var statearr_14007 = state_14005;(statearr_14007[9] = inst_13986);
(statearr_14007[7] = inst_13984__$1);
(statearr_14007[8] = inst_13985__$1);
return statearr_14007;
})();if(cljs.core.truth_(inst_13987))
{var statearr_14008_14030 = state_14005__$1;(statearr_14008_14030[1] = 8);
} else
{var statearr_14009_14031 = state_14005__$1;(statearr_14009_14031[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14006 === 1))
{var inst_13976 = cljs.core.vec.call(null,chs);var inst_13977 = inst_13976;var state_14005__$1 = (function (){var statearr_14010 = state_14005;(statearr_14010[10] = inst_13977);
return statearr_14010;
})();var statearr_14011_14032 = state_14005__$1;(statearr_14011_14032[2] = null);
(statearr_14011_14032[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14006 === 4))
{var inst_13977 = (state_14005[10]);var state_14005__$1 = state_14005;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14005__$1,7,inst_13977);
} else
{if((state_val_14006 === 6))
{var inst_14001 = (state_14005[2]);var state_14005__$1 = state_14005;var statearr_14012_14033 = state_14005__$1;(statearr_14012_14033[2] = inst_14001);
(statearr_14012_14033[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14006 === 3))
{var inst_14003 = (state_14005[2]);var state_14005__$1 = state_14005;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14005__$1,inst_14003);
} else
{if((state_val_14006 === 2))
{var inst_13977 = (state_14005[10]);var inst_13979 = cljs.core.count.call(null,inst_13977);var inst_13980 = (inst_13979 > 0);var state_14005__$1 = state_14005;if(cljs.core.truth_(inst_13980))
{var statearr_14014_14034 = state_14005__$1;(statearr_14014_14034[1] = 4);
} else
{var statearr_14015_14035 = state_14005__$1;(statearr_14015_14035[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14006 === 11))
{var inst_13977 = (state_14005[10]);var inst_13994 = (state_14005[2]);var tmp14013 = inst_13977;var inst_13977__$1 = tmp14013;var state_14005__$1 = (function (){var statearr_14016 = state_14005;(statearr_14016[11] = inst_13994);
(statearr_14016[10] = inst_13977__$1);
return statearr_14016;
})();var statearr_14017_14036 = state_14005__$1;(statearr_14017_14036[2] = null);
(statearr_14017_14036[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14006 === 9))
{var inst_13985 = (state_14005[8]);var state_14005__$1 = state_14005;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14005__$1,11,out,inst_13985);
} else
{if((state_val_14006 === 5))
{var inst_13999 = cljs.core.async.close_BANG_.call(null,out);var state_14005__$1 = state_14005;var statearr_14018_14037 = state_14005__$1;(statearr_14018_14037[2] = inst_13999);
(statearr_14018_14037[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14006 === 10))
{var inst_13997 = (state_14005[2]);var state_14005__$1 = state_14005;var statearr_14019_14038 = state_14005__$1;(statearr_14019_14038[2] = inst_13997);
(statearr_14019_14038[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14006 === 8))
{var inst_13986 = (state_14005[9]);var inst_13977 = (state_14005[10]);var inst_13984 = (state_14005[7]);var inst_13985 = (state_14005[8]);var inst_13989 = (function (){var c = inst_13986;var v = inst_13985;var vec__13982 = inst_13984;var cs = inst_13977;return ((function (c,v,vec__13982,cs,inst_13986,inst_13977,inst_13984,inst_13985,state_val_14006,c__6344__auto___14029,out){
return (function (p1__13922_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13922_SHARP_);
});
;})(c,v,vec__13982,cs,inst_13986,inst_13977,inst_13984,inst_13985,state_val_14006,c__6344__auto___14029,out))
})();var inst_13990 = cljs.core.filterv.call(null,inst_13989,inst_13977);var inst_13977__$1 = inst_13990;var state_14005__$1 = (function (){var statearr_14020 = state_14005;(statearr_14020[10] = inst_13977__$1);
return statearr_14020;
})();var statearr_14021_14039 = state_14005__$1;(statearr_14021_14039[2] = null);
(statearr_14021_14039[1] = 2);
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
}
}
}
}
});})(c__6344__auto___14029,out))
;return ((function (switch__6329__auto__,c__6344__auto___14029,out){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_14025 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14025[0] = state_machine__6330__auto__);
(statearr_14025[1] = 1);
return statearr_14025;
});
var state_machine__6330__auto____1 = (function (state_14005){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_14005);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e14026){if((e14026 instanceof Object))
{var ex__6333__auto__ = e14026;var statearr_14027_14040 = state_14005;(statearr_14027_14040[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14005);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14026;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14041 = state_14005;
state_14005 = G__14041;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_14005){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_14005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___14029,out))
})();var state__6346__auto__ = (function (){var statearr_14028 = f__6345__auto__.call(null);(statearr_14028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___14029);
return statearr_14028;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___14029,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6344__auto___14134 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___14134,out){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___14134,out){
return (function (state_14111){var state_val_14112 = (state_14111[1]);if((state_val_14112 === 7))
{var inst_14093 = (state_14111[7]);var inst_14093__$1 = (state_14111[2]);var inst_14094 = (inst_14093__$1 == null);var inst_14095 = cljs.core.not.call(null,inst_14094);var state_14111__$1 = (function (){var statearr_14113 = state_14111;(statearr_14113[7] = inst_14093__$1);
return statearr_14113;
})();if(inst_14095)
{var statearr_14114_14135 = state_14111__$1;(statearr_14114_14135[1] = 8);
} else
{var statearr_14115_14136 = state_14111__$1;(statearr_14115_14136[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14112 === 1))
{var inst_14088 = 0;var state_14111__$1 = (function (){var statearr_14116 = state_14111;(statearr_14116[8] = inst_14088);
return statearr_14116;
})();var statearr_14117_14137 = state_14111__$1;(statearr_14117_14137[2] = null);
(statearr_14117_14137[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14112 === 4))
{var state_14111__$1 = state_14111;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14111__$1,7,ch);
} else
{if((state_val_14112 === 6))
{var inst_14106 = (state_14111[2]);var state_14111__$1 = state_14111;var statearr_14118_14138 = state_14111__$1;(statearr_14118_14138[2] = inst_14106);
(statearr_14118_14138[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14112 === 3))
{var inst_14108 = (state_14111[2]);var inst_14109 = cljs.core.async.close_BANG_.call(null,out);var state_14111__$1 = (function (){var statearr_14119 = state_14111;(statearr_14119[9] = inst_14108);
return statearr_14119;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14111__$1,inst_14109);
} else
{if((state_val_14112 === 2))
{var inst_14088 = (state_14111[8]);var inst_14090 = (inst_14088 < n);var state_14111__$1 = state_14111;if(cljs.core.truth_(inst_14090))
{var statearr_14120_14139 = state_14111__$1;(statearr_14120_14139[1] = 4);
} else
{var statearr_14121_14140 = state_14111__$1;(statearr_14121_14140[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14112 === 11))
{var inst_14088 = (state_14111[8]);var inst_14098 = (state_14111[2]);var inst_14099 = (inst_14088 + 1);var inst_14088__$1 = inst_14099;var state_14111__$1 = (function (){var statearr_14122 = state_14111;(statearr_14122[10] = inst_14098);
(statearr_14122[8] = inst_14088__$1);
return statearr_14122;
})();var statearr_14123_14141 = state_14111__$1;(statearr_14123_14141[2] = null);
(statearr_14123_14141[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14112 === 9))
{var state_14111__$1 = state_14111;var statearr_14124_14142 = state_14111__$1;(statearr_14124_14142[2] = null);
(statearr_14124_14142[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14112 === 5))
{var state_14111__$1 = state_14111;var statearr_14125_14143 = state_14111__$1;(statearr_14125_14143[2] = null);
(statearr_14125_14143[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14112 === 10))
{var inst_14103 = (state_14111[2]);var state_14111__$1 = state_14111;var statearr_14126_14144 = state_14111__$1;(statearr_14126_14144[2] = inst_14103);
(statearr_14126_14144[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14112 === 8))
{var inst_14093 = (state_14111[7]);var state_14111__$1 = state_14111;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14111__$1,11,out,inst_14093);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6344__auto___14134,out))
;return ((function (switch__6329__auto__,c__6344__auto___14134,out){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_14130 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14130[0] = state_machine__6330__auto__);
(statearr_14130[1] = 1);
return statearr_14130;
});
var state_machine__6330__auto____1 = (function (state_14111){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_14111);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e14131){if((e14131 instanceof Object))
{var ex__6333__auto__ = e14131;var statearr_14132_14145 = state_14111;(statearr_14132_14145[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14111);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14131;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14146 = state_14111;
state_14111 = G__14146;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_14111){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_14111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___14134,out))
})();var state__6346__auto__ = (function (){var statearr_14133 = f__6345__auto__.call(null);(statearr_14133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___14134);
return statearr_14133;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___14134,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6344__auto___14243 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___14243,out){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___14243,out){
return (function (state_14218){var state_val_14219 = (state_14218[1]);if((state_val_14219 === 7))
{var inst_14213 = (state_14218[2]);var state_14218__$1 = state_14218;var statearr_14220_14244 = state_14218__$1;(statearr_14220_14244[2] = inst_14213);
(statearr_14220_14244[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14219 === 1))
{var inst_14195 = null;var state_14218__$1 = (function (){var statearr_14221 = state_14218;(statearr_14221[7] = inst_14195);
return statearr_14221;
})();var statearr_14222_14245 = state_14218__$1;(statearr_14222_14245[2] = null);
(statearr_14222_14245[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14219 === 4))
{var inst_14198 = (state_14218[8]);var inst_14198__$1 = (state_14218[2]);var inst_14199 = (inst_14198__$1 == null);var inst_14200 = cljs.core.not.call(null,inst_14199);var state_14218__$1 = (function (){var statearr_14223 = state_14218;(statearr_14223[8] = inst_14198__$1);
return statearr_14223;
})();if(inst_14200)
{var statearr_14224_14246 = state_14218__$1;(statearr_14224_14246[1] = 5);
} else
{var statearr_14225_14247 = state_14218__$1;(statearr_14225_14247[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14219 === 6))
{var state_14218__$1 = state_14218;var statearr_14226_14248 = state_14218__$1;(statearr_14226_14248[2] = null);
(statearr_14226_14248[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14219 === 3))
{var inst_14215 = (state_14218[2]);var inst_14216 = cljs.core.async.close_BANG_.call(null,out);var state_14218__$1 = (function (){var statearr_14227 = state_14218;(statearr_14227[9] = inst_14215);
return statearr_14227;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14218__$1,inst_14216);
} else
{if((state_val_14219 === 2))
{var state_14218__$1 = state_14218;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14218__$1,4,ch);
} else
{if((state_val_14219 === 11))
{var inst_14198 = (state_14218[8]);var inst_14207 = (state_14218[2]);var inst_14195 = inst_14198;var state_14218__$1 = (function (){var statearr_14228 = state_14218;(statearr_14228[10] = inst_14207);
(statearr_14228[7] = inst_14195);
return statearr_14228;
})();var statearr_14229_14249 = state_14218__$1;(statearr_14229_14249[2] = null);
(statearr_14229_14249[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14219 === 9))
{var inst_14198 = (state_14218[8]);var state_14218__$1 = state_14218;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14218__$1,11,out,inst_14198);
} else
{if((state_val_14219 === 5))
{var inst_14198 = (state_14218[8]);var inst_14195 = (state_14218[7]);var inst_14202 = cljs.core._EQ_.call(null,inst_14198,inst_14195);var state_14218__$1 = state_14218;if(inst_14202)
{var statearr_14231_14250 = state_14218__$1;(statearr_14231_14250[1] = 8);
} else
{var statearr_14232_14251 = state_14218__$1;(statearr_14232_14251[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14219 === 10))
{var inst_14210 = (state_14218[2]);var state_14218__$1 = state_14218;var statearr_14233_14252 = state_14218__$1;(statearr_14233_14252[2] = inst_14210);
(statearr_14233_14252[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14219 === 8))
{var inst_14195 = (state_14218[7]);var tmp14230 = inst_14195;var inst_14195__$1 = tmp14230;var state_14218__$1 = (function (){var statearr_14234 = state_14218;(statearr_14234[7] = inst_14195__$1);
return statearr_14234;
})();var statearr_14235_14253 = state_14218__$1;(statearr_14235_14253[2] = null);
(statearr_14235_14253[1] = 2);
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
}
}
}
}
});})(c__6344__auto___14243,out))
;return ((function (switch__6329__auto__,c__6344__auto___14243,out){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_14239 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14239[0] = state_machine__6330__auto__);
(statearr_14239[1] = 1);
return statearr_14239;
});
var state_machine__6330__auto____1 = (function (state_14218){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_14218);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e14240){if((e14240 instanceof Object))
{var ex__6333__auto__ = e14240;var statearr_14241_14254 = state_14218;(statearr_14241_14254[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14218);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14240;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14255 = state_14218;
state_14218 = G__14255;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_14218){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_14218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___14243,out))
})();var state__6346__auto__ = (function (){var statearr_14242 = f__6345__auto__.call(null);(statearr_14242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___14243);
return statearr_14242;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___14243,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6344__auto___14390 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___14390,out){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___14390,out){
return (function (state_14360){var state_val_14361 = (state_14360[1]);if((state_val_14361 === 7))
{var inst_14356 = (state_14360[2]);var state_14360__$1 = state_14360;var statearr_14362_14391 = state_14360__$1;(statearr_14362_14391[2] = inst_14356);
(statearr_14362_14391[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14361 === 1))
{var inst_14323 = (new Array(n));var inst_14324 = inst_14323;var inst_14325 = 0;var state_14360__$1 = (function (){var statearr_14363 = state_14360;(statearr_14363[7] = inst_14325);
(statearr_14363[8] = inst_14324);
return statearr_14363;
})();var statearr_14364_14392 = state_14360__$1;(statearr_14364_14392[2] = null);
(statearr_14364_14392[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14361 === 4))
{var inst_14328 = (state_14360[9]);var inst_14328__$1 = (state_14360[2]);var inst_14329 = (inst_14328__$1 == null);var inst_14330 = cljs.core.not.call(null,inst_14329);var state_14360__$1 = (function (){var statearr_14365 = state_14360;(statearr_14365[9] = inst_14328__$1);
return statearr_14365;
})();if(inst_14330)
{var statearr_14366_14393 = state_14360__$1;(statearr_14366_14393[1] = 5);
} else
{var statearr_14367_14394 = state_14360__$1;(statearr_14367_14394[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14361 === 15))
{var inst_14350 = (state_14360[2]);var state_14360__$1 = state_14360;var statearr_14368_14395 = state_14360__$1;(statearr_14368_14395[2] = inst_14350);
(statearr_14368_14395[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14361 === 13))
{var state_14360__$1 = state_14360;var statearr_14369_14396 = state_14360__$1;(statearr_14369_14396[2] = null);
(statearr_14369_14396[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14361 === 6))
{var inst_14325 = (state_14360[7]);var inst_14346 = (inst_14325 > 0);var state_14360__$1 = state_14360;if(cljs.core.truth_(inst_14346))
{var statearr_14370_14397 = state_14360__$1;(statearr_14370_14397[1] = 12);
} else
{var statearr_14371_14398 = state_14360__$1;(statearr_14371_14398[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14361 === 3))
{var inst_14358 = (state_14360[2]);var state_14360__$1 = state_14360;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14360__$1,inst_14358);
} else
{if((state_val_14361 === 12))
{var inst_14324 = (state_14360[8]);var inst_14348 = cljs.core.vec.call(null,inst_14324);var state_14360__$1 = state_14360;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14360__$1,15,out,inst_14348);
} else
{if((state_val_14361 === 2))
{var state_14360__$1 = state_14360;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14360__$1,4,ch);
} else
{if((state_val_14361 === 11))
{var inst_14340 = (state_14360[2]);var inst_14341 = (new Array(n));var inst_14324 = inst_14341;var inst_14325 = 0;var state_14360__$1 = (function (){var statearr_14372 = state_14360;(statearr_14372[7] = inst_14325);
(statearr_14372[10] = inst_14340);
(statearr_14372[8] = inst_14324);
return statearr_14372;
})();var statearr_14373_14399 = state_14360__$1;(statearr_14373_14399[2] = null);
(statearr_14373_14399[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14361 === 9))
{var inst_14324 = (state_14360[8]);var inst_14338 = cljs.core.vec.call(null,inst_14324);var state_14360__$1 = state_14360;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14360__$1,11,out,inst_14338);
} else
{if((state_val_14361 === 5))
{var inst_14333 = (state_14360[11]);var inst_14328 = (state_14360[9]);var inst_14325 = (state_14360[7]);var inst_14324 = (state_14360[8]);var inst_14332 = (inst_14324[inst_14325] = inst_14328);var inst_14333__$1 = (inst_14325 + 1);var inst_14334 = (inst_14333__$1 < n);var state_14360__$1 = (function (){var statearr_14374 = state_14360;(statearr_14374[11] = inst_14333__$1);
(statearr_14374[12] = inst_14332);
return statearr_14374;
})();if(cljs.core.truth_(inst_14334))
{var statearr_14375_14400 = state_14360__$1;(statearr_14375_14400[1] = 8);
} else
{var statearr_14376_14401 = state_14360__$1;(statearr_14376_14401[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14361 === 14))
{var inst_14353 = (state_14360[2]);var inst_14354 = cljs.core.async.close_BANG_.call(null,out);var state_14360__$1 = (function (){var statearr_14378 = state_14360;(statearr_14378[13] = inst_14353);
return statearr_14378;
})();var statearr_14379_14402 = state_14360__$1;(statearr_14379_14402[2] = inst_14354);
(statearr_14379_14402[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14361 === 10))
{var inst_14344 = (state_14360[2]);var state_14360__$1 = state_14360;var statearr_14380_14403 = state_14360__$1;(statearr_14380_14403[2] = inst_14344);
(statearr_14380_14403[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14361 === 8))
{var inst_14333 = (state_14360[11]);var inst_14324 = (state_14360[8]);var tmp14377 = inst_14324;var inst_14324__$1 = tmp14377;var inst_14325 = inst_14333;var state_14360__$1 = (function (){var statearr_14381 = state_14360;(statearr_14381[7] = inst_14325);
(statearr_14381[8] = inst_14324__$1);
return statearr_14381;
})();var statearr_14382_14404 = state_14360__$1;(statearr_14382_14404[2] = null);
(statearr_14382_14404[1] = 2);
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
}
}
}
}
}
}
}
}
});})(c__6344__auto___14390,out))
;return ((function (switch__6329__auto__,c__6344__auto___14390,out){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_14386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14386[0] = state_machine__6330__auto__);
(statearr_14386[1] = 1);
return statearr_14386;
});
var state_machine__6330__auto____1 = (function (state_14360){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_14360);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e14387){if((e14387 instanceof Object))
{var ex__6333__auto__ = e14387;var statearr_14388_14405 = state_14360;(statearr_14388_14405[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14360);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14387;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14406 = state_14360;
state_14360 = G__14406;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_14360){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_14360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___14390,out))
})();var state__6346__auto__ = (function (){var statearr_14389 = f__6345__auto__.call(null);(statearr_14389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___14390);
return statearr_14389;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___14390,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6344__auto___14549 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___14549,out){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___14549,out){
return (function (state_14519){var state_val_14520 = (state_14519[1]);if((state_val_14520 === 7))
{var inst_14515 = (state_14519[2]);var state_14519__$1 = state_14519;var statearr_14521_14550 = state_14519__$1;(statearr_14521_14550[2] = inst_14515);
(statearr_14521_14550[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14520 === 1))
{var inst_14478 = [];var inst_14479 = inst_14478;var inst_14480 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14519__$1 = (function (){var statearr_14522 = state_14519;(statearr_14522[7] = inst_14479);
(statearr_14522[8] = inst_14480);
return statearr_14522;
})();var statearr_14523_14551 = state_14519__$1;(statearr_14523_14551[2] = null);
(statearr_14523_14551[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14520 === 4))
{var inst_14483 = (state_14519[9]);var inst_14483__$1 = (state_14519[2]);var inst_14484 = (inst_14483__$1 == null);var inst_14485 = cljs.core.not.call(null,inst_14484);var state_14519__$1 = (function (){var statearr_14524 = state_14519;(statearr_14524[9] = inst_14483__$1);
return statearr_14524;
})();if(inst_14485)
{var statearr_14525_14552 = state_14519__$1;(statearr_14525_14552[1] = 5);
} else
{var statearr_14526_14553 = state_14519__$1;(statearr_14526_14553[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14520 === 15))
{var inst_14509 = (state_14519[2]);var state_14519__$1 = state_14519;var statearr_14527_14554 = state_14519__$1;(statearr_14527_14554[2] = inst_14509);
(statearr_14527_14554[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14520 === 13))
{var state_14519__$1 = state_14519;var statearr_14528_14555 = state_14519__$1;(statearr_14528_14555[2] = null);
(statearr_14528_14555[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14520 === 6))
{var inst_14479 = (state_14519[7]);var inst_14504 = inst_14479.length;var inst_14505 = (inst_14504 > 0);var state_14519__$1 = state_14519;if(cljs.core.truth_(inst_14505))
{var statearr_14529_14556 = state_14519__$1;(statearr_14529_14556[1] = 12);
} else
{var statearr_14530_14557 = state_14519__$1;(statearr_14530_14557[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14520 === 3))
{var inst_14517 = (state_14519[2]);var state_14519__$1 = state_14519;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14519__$1,inst_14517);
} else
{if((state_val_14520 === 12))
{var inst_14479 = (state_14519[7]);var inst_14507 = cljs.core.vec.call(null,inst_14479);var state_14519__$1 = state_14519;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14519__$1,15,out,inst_14507);
} else
{if((state_val_14520 === 2))
{var state_14519__$1 = state_14519;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14519__$1,4,ch);
} else
{if((state_val_14520 === 11))
{var inst_14487 = (state_14519[10]);var inst_14483 = (state_14519[9]);var inst_14497 = (state_14519[2]);var inst_14498 = [];var inst_14499 = inst_14498.push(inst_14483);var inst_14479 = inst_14498;var inst_14480 = inst_14487;var state_14519__$1 = (function (){var statearr_14531 = state_14519;(statearr_14531[7] = inst_14479);
(statearr_14531[11] = inst_14497);
(statearr_14531[12] = inst_14499);
(statearr_14531[8] = inst_14480);
return statearr_14531;
})();var statearr_14532_14558 = state_14519__$1;(statearr_14532_14558[2] = null);
(statearr_14532_14558[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14520 === 9))
{var inst_14479 = (state_14519[7]);var inst_14495 = cljs.core.vec.call(null,inst_14479);var state_14519__$1 = state_14519;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14519__$1,11,out,inst_14495);
} else
{if((state_val_14520 === 5))
{var inst_14487 = (state_14519[10]);var inst_14483 = (state_14519[9]);var inst_14480 = (state_14519[8]);var inst_14487__$1 = f.call(null,inst_14483);var inst_14488 = cljs.core._EQ_.call(null,inst_14487__$1,inst_14480);var inst_14489 = cljs.core.keyword_identical_QMARK_.call(null,inst_14480,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14490 = (inst_14488) || (inst_14489);var state_14519__$1 = (function (){var statearr_14533 = state_14519;(statearr_14533[10] = inst_14487__$1);
return statearr_14533;
})();if(cljs.core.truth_(inst_14490))
{var statearr_14534_14559 = state_14519__$1;(statearr_14534_14559[1] = 8);
} else
{var statearr_14535_14560 = state_14519__$1;(statearr_14535_14560[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14520 === 14))
{var inst_14512 = (state_14519[2]);var inst_14513 = cljs.core.async.close_BANG_.call(null,out);var state_14519__$1 = (function (){var statearr_14537 = state_14519;(statearr_14537[13] = inst_14512);
return statearr_14537;
})();var statearr_14538_14561 = state_14519__$1;(statearr_14538_14561[2] = inst_14513);
(statearr_14538_14561[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14520 === 10))
{var inst_14502 = (state_14519[2]);var state_14519__$1 = state_14519;var statearr_14539_14562 = state_14519__$1;(statearr_14539_14562[2] = inst_14502);
(statearr_14539_14562[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14520 === 8))
{var inst_14487 = (state_14519[10]);var inst_14479 = (state_14519[7]);var inst_14483 = (state_14519[9]);var inst_14492 = inst_14479.push(inst_14483);var tmp14536 = inst_14479;var inst_14479__$1 = tmp14536;var inst_14480 = inst_14487;var state_14519__$1 = (function (){var statearr_14540 = state_14519;(statearr_14540[7] = inst_14479__$1);
(statearr_14540[14] = inst_14492);
(statearr_14540[8] = inst_14480);
return statearr_14540;
})();var statearr_14541_14563 = state_14519__$1;(statearr_14541_14563[2] = null);
(statearr_14541_14563[1] = 2);
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
}
}
}
}
}
}
}
}
});})(c__6344__auto___14549,out))
;return ((function (switch__6329__auto__,c__6344__auto___14549,out){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_14545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14545[0] = state_machine__6330__auto__);
(statearr_14545[1] = 1);
return statearr_14545;
});
var state_machine__6330__auto____1 = (function (state_14519){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_14519);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e14546){if((e14546 instanceof Object))
{var ex__6333__auto__ = e14546;var statearr_14547_14564 = state_14519;(statearr_14547_14564[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14519);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14546;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14565 = state_14519;
state_14519 = G__14565;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_14519){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_14519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___14549,out))
})();var state__6346__auto__ = (function (){var statearr_14548 = f__6345__auto__.call(null);(statearr_14548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___14549);
return statearr_14548;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___14549,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map