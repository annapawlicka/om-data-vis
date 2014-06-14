// Compiled by ClojureScript 0.0-2227
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11356 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11356 = (function (f,fn_handler,meta11357){
this.f = f;
this.fn_handler = fn_handler;
this.meta11357 = meta11357;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11356.cljs$lang$type = true;
cljs.core.async.t11356.cljs$lang$ctorStr = "cljs.core.async/t11356";
cljs.core.async.t11356.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t11356");
});
cljs.core.async.t11356.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11356.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11356.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11358){var self__ = this;
var _11358__$1 = this;return self__.meta11357;
});
cljs.core.async.t11356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11358,meta11357__$1){var self__ = this;
var _11358__$1 = this;return (new cljs.core.async.t11356(self__.f,self__.fn_handler,meta11357__$1));
});
cljs.core.async.__GT_t11356 = (function __GT_t11356(f__$1,fn_handler__$1,meta11357){return (new cljs.core.async.t11356(f__$1,fn_handler__$1,meta11357));
});
}
return (new cljs.core.async.t11356(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11360 = buff;if(G__11360)
{var bit__4207__auto__ = null;if(cljs.core.truth_((function (){var or__3557__auto__ = bit__4207__auto__;if(cljs.core.truth_(or__3557__auto__))
{return or__3557__auto__;
} else
{return G__11360.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11360.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11360);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11360);
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
{var val_11361 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11361);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11361,ret){
return (function (){return fn1.call(null,val_11361);
});})(val_11361,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4413__auto___11362 = n;var x_11363 = 0;while(true){
if((x_11363 < n__4413__auto___11362))
{(a[x_11363] = 0);
{
var G__11364 = (x_11363 + 1);
x_11363 = G__11364;
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
var G__11365 = (i + 1);
i = G__11365;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11369 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11369 = (function (flag,alt_flag,meta11370){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11370 = meta11370;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11369.cljs$lang$type = true;
cljs.core.async.t11369.cljs$lang$ctorStr = "cljs.core.async/t11369";
cljs.core.async.t11369.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t11369");
});})(flag))
;
cljs.core.async.t11369.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11369.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11369.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11369.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11371){var self__ = this;
var _11371__$1 = this;return self__.meta11370;
});})(flag))
;
cljs.core.async.t11369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11371,meta11370__$1){var self__ = this;
var _11371__$1 = this;return (new cljs.core.async.t11369(self__.flag,self__.alt_flag,meta11370__$1));
});})(flag))
;
cljs.core.async.__GT_t11369 = ((function (flag){
return (function __GT_t11369(flag__$1,alt_flag__$1,meta11370){return (new cljs.core.async.t11369(flag__$1,alt_flag__$1,meta11370));
});})(flag))
;
}
return (new cljs.core.async.t11369(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11375 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11375 = (function (cb,flag,alt_handler,meta11376){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11376 = meta11376;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11375.cljs$lang$type = true;
cljs.core.async.t11375.cljs$lang$ctorStr = "cljs.core.async/t11375";
cljs.core.async.t11375.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t11375");
});
cljs.core.async.t11375.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11375.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11375.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11377){var self__ = this;
var _11377__$1 = this;return self__.meta11376;
});
cljs.core.async.t11375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11377,meta11376__$1){var self__ = this;
var _11377__$1 = this;return (new cljs.core.async.t11375(self__.cb,self__.flag,self__.alt_handler,meta11376__$1));
});
cljs.core.async.__GT_t11375 = (function __GT_t11375(cb__$1,flag__$1,alt_handler__$1,meta11376){return (new cljs.core.async.t11375(cb__$1,flag__$1,alt_handler__$1,meta11376));
});
}
return (new cljs.core.async.t11375(cb,flag,alt_handler,null));
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
return (function (p1__11378_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11378_SHARP_,port], null));
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
var G__11379 = (i + 1);
i = G__11379;
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
{var temp__4092__auto__ = (function (){var and__3545__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3545__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3545__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__11380){var map__11382 = p__11380;var map__11382__$1 = ((cljs.core.seq_QMARK_.call(null,map__11382))?cljs.core.apply.call(null,cljs.core.hash_map,map__11382):map__11382);var opts = map__11382__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11380 = null;if (arguments.length > 1) {
  p__11380 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11380);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11383){
var ports = cljs.core.first(arglist__11383);
var p__11380 = cljs.core.rest(arglist__11383);
return alts_BANG___delegate(ports,p__11380);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11391 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11391 = (function (ch,f,map_LT_,meta11392){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11392 = meta11392;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11391.cljs$lang$type = true;
cljs.core.async.t11391.cljs$lang$ctorStr = "cljs.core.async/t11391";
cljs.core.async.t11391.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t11391");
});
cljs.core.async.t11391.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11391.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11391.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11391.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11394 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11394 = (function (fn1,_,meta11392,ch,f,map_LT_,meta11395){
this.fn1 = fn1;
this._ = _;
this.meta11392 = meta11392;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11395 = meta11395;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11394.cljs$lang$type = true;
cljs.core.async.t11394.cljs$lang$ctorStr = "cljs.core.async/t11394";
cljs.core.async.t11394.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t11394");
});})(___$1))
;
cljs.core.async.t11394.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11394.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11394.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11394.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__11384_SHARP_){return f1.call(null,(((p1__11384_SHARP_ == null))?null:self__.f.call(null,p1__11384_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t11394.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11396){var self__ = this;
var _11396__$1 = this;return self__.meta11395;
});})(___$1))
;
cljs.core.async.t11394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11396,meta11395__$1){var self__ = this;
var _11396__$1 = this;return (new cljs.core.async.t11394(self__.fn1,self__._,self__.meta11392,self__.ch,self__.f,self__.map_LT_,meta11395__$1));
});})(___$1))
;
cljs.core.async.__GT_t11394 = ((function (___$1){
return (function __GT_t11394(fn1__$1,___$2,meta11392__$1,ch__$2,f__$2,map_LT___$2,meta11395){return (new cljs.core.async.t11394(fn1__$1,___$2,meta11392__$1,ch__$2,f__$2,map_LT___$2,meta11395));
});})(___$1))
;
}
return (new cljs.core.async.t11394(fn1,___$1,self__.meta11392,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t11391.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11391.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11393){var self__ = this;
var _11393__$1 = this;return self__.meta11392;
});
cljs.core.async.t11391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11393,meta11392__$1){var self__ = this;
var _11393__$1 = this;return (new cljs.core.async.t11391(self__.ch,self__.f,self__.map_LT_,meta11392__$1));
});
cljs.core.async.__GT_t11391 = (function __GT_t11391(ch__$1,f__$1,map_LT___$1,meta11392){return (new cljs.core.async.t11391(ch__$1,f__$1,map_LT___$1,meta11392));
});
}
return (new cljs.core.async.t11391(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11400 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11400 = (function (ch,f,map_GT_,meta11401){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11401 = meta11401;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11400.cljs$lang$type = true;
cljs.core.async.t11400.cljs$lang$ctorStr = "cljs.core.async/t11400";
cljs.core.async.t11400.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t11400");
});
cljs.core.async.t11400.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11400.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11400.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11400.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11400.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11400.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11402){var self__ = this;
var _11402__$1 = this;return self__.meta11401;
});
cljs.core.async.t11400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11402,meta11401__$1){var self__ = this;
var _11402__$1 = this;return (new cljs.core.async.t11400(self__.ch,self__.f,self__.map_GT_,meta11401__$1));
});
cljs.core.async.__GT_t11400 = (function __GT_t11400(ch__$1,f__$1,map_GT___$1,meta11401){return (new cljs.core.async.t11400(ch__$1,f__$1,map_GT___$1,meta11401));
});
}
return (new cljs.core.async.t11400(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11406 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11406 = (function (ch,p,filter_GT_,meta11407){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11407 = meta11407;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11406.cljs$lang$type = true;
cljs.core.async.t11406.cljs$lang$ctorStr = "cljs.core.async/t11406";
cljs.core.async.t11406.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t11406");
});
cljs.core.async.t11406.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11406.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11406.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11406.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11406.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11406.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11408){var self__ = this;
var _11408__$1 = this;return self__.meta11407;
});
cljs.core.async.t11406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11408,meta11407__$1){var self__ = this;
var _11408__$1 = this;return (new cljs.core.async.t11406(self__.ch,self__.p,self__.filter_GT_,meta11407__$1));
});
cljs.core.async.__GT_t11406 = (function __GT_t11406(ch__$1,p__$1,filter_GT___$1,meta11407){return (new cljs.core.async.t11406(ch__$1,p__$1,filter_GT___$1,meta11407));
});
}
return (new cljs.core.async.t11406(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6335__auto___11491 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6335__auto___11491,out){
return (function (){var f__6336__auto__ = (function (){var switch__6320__auto__ = ((function (c__6335__auto___11491,out){
return (function (state_11470){var state_val_11471 = (state_11470[1]);if((state_val_11471 === 1))
{var state_11470__$1 = state_11470;var statearr_11472_11492 = state_11470__$1;(statearr_11472_11492[2] = null);
(statearr_11472_11492[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11471 === 2))
{var state_11470__$1 = state_11470;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11470__$1,4,ch);
} else
{if((state_val_11471 === 3))
{var inst_11468 = (state_11470[2]);var state_11470__$1 = state_11470;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11470__$1,inst_11468);
} else
{if((state_val_11471 === 4))
{var inst_11452 = (state_11470[7]);var inst_11452__$1 = (state_11470[2]);var inst_11453 = (inst_11452__$1 == null);var state_11470__$1 = (function (){var statearr_11473 = state_11470;(statearr_11473[7] = inst_11452__$1);
return statearr_11473;
})();if(cljs.core.truth_(inst_11453))
{var statearr_11474_11493 = state_11470__$1;(statearr_11474_11493[1] = 5);
} else
{var statearr_11475_11494 = state_11470__$1;(statearr_11475_11494[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11471 === 5))
{var inst_11455 = cljs.core.async.close_BANG_.call(null,out);var state_11470__$1 = state_11470;var statearr_11476_11495 = state_11470__$1;(statearr_11476_11495[2] = inst_11455);
(statearr_11476_11495[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11471 === 6))
{var inst_11452 = (state_11470[7]);var inst_11457 = p.call(null,inst_11452);var state_11470__$1 = state_11470;if(cljs.core.truth_(inst_11457))
{var statearr_11477_11496 = state_11470__$1;(statearr_11477_11496[1] = 8);
} else
{var statearr_11478_11497 = state_11470__$1;(statearr_11478_11497[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11471 === 7))
{var inst_11466 = (state_11470[2]);var state_11470__$1 = state_11470;var statearr_11479_11498 = state_11470__$1;(statearr_11479_11498[2] = inst_11466);
(statearr_11479_11498[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11471 === 8))
{var inst_11452 = (state_11470[7]);var state_11470__$1 = state_11470;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11470__$1,11,out,inst_11452);
} else
{if((state_val_11471 === 9))
{var state_11470__$1 = state_11470;var statearr_11480_11499 = state_11470__$1;(statearr_11480_11499[2] = null);
(statearr_11480_11499[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11471 === 10))
{var inst_11463 = (state_11470[2]);var state_11470__$1 = (function (){var statearr_11481 = state_11470;(statearr_11481[8] = inst_11463);
return statearr_11481;
})();var statearr_11482_11500 = state_11470__$1;(statearr_11482_11500[2] = null);
(statearr_11482_11500[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11471 === 11))
{var inst_11460 = (state_11470[2]);var state_11470__$1 = state_11470;var statearr_11483_11501 = state_11470__$1;(statearr_11483_11501[2] = inst_11460);
(statearr_11483_11501[1] = 10);
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
});})(c__6335__auto___11491,out))
;return ((function (switch__6320__auto__,c__6335__auto___11491,out){
return (function() {
var state_machine__6321__auto__ = null;
var state_machine__6321__auto____0 = (function (){var statearr_11487 = [null,null,null,null,null,null,null,null,null];(statearr_11487[0] = state_machine__6321__auto__);
(statearr_11487[1] = 1);
return statearr_11487;
});
var state_machine__6321__auto____1 = (function (state_11470){while(true){
var ret_value__6322__auto__ = (function (){try{while(true){
var result__6323__auto__ = switch__6320__auto__.call(null,state_11470);if(cljs.core.keyword_identical_QMARK_.call(null,result__6323__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6323__auto__;
}
break;
}
}catch (e11488){if((e11488 instanceof Object))
{var ex__6324__auto__ = e11488;var statearr_11489_11502 = state_11470;(statearr_11489_11502[5] = ex__6324__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11470);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11488;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6322__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11503 = state_11470;
state_11470 = G__11503;
continue;
}
} else
{return ret_value__6322__auto__;
}
break;
}
});
state_machine__6321__auto__ = function(state_11470){
switch(arguments.length){
case 0:
return state_machine__6321__auto____0.call(this);
case 1:
return state_machine__6321__auto____1.call(this,state_11470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6321__auto____0;
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6321__auto____1;
return state_machine__6321__auto__;
})()
;})(switch__6320__auto__,c__6335__auto___11491,out))
})();var state__6337__auto__ = (function (){var statearr_11490 = f__6336__auto__.call(null);(statearr_11490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6335__auto___11491);
return statearr_11490;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6337__auto__);
});})(c__6335__auto___11491,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6335__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6335__auto__){
return (function (){var f__6336__auto__ = (function (){var switch__6320__auto__ = ((function (c__6335__auto__){
return (function (state_11655){var state_val_11656 = (state_11655[1]);if((state_val_11656 === 1))
{var state_11655__$1 = state_11655;var statearr_11657_11694 = state_11655__$1;(statearr_11657_11694[2] = null);
(statearr_11657_11694[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11656 === 2))
{var state_11655__$1 = state_11655;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11655__$1,4,in$);
} else
{if((state_val_11656 === 3))
{var inst_11653 = (state_11655[2]);var state_11655__$1 = state_11655;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11655__$1,inst_11653);
} else
{if((state_val_11656 === 4))
{var inst_11601 = (state_11655[7]);var inst_11601__$1 = (state_11655[2]);var inst_11602 = (inst_11601__$1 == null);var state_11655__$1 = (function (){var statearr_11658 = state_11655;(statearr_11658[7] = inst_11601__$1);
return statearr_11658;
})();if(cljs.core.truth_(inst_11602))
{var statearr_11659_11695 = state_11655__$1;(statearr_11659_11695[1] = 5);
} else
{var statearr_11660_11696 = state_11655__$1;(statearr_11660_11696[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11656 === 5))
{var inst_11604 = cljs.core.async.close_BANG_.call(null,out);var state_11655__$1 = state_11655;var statearr_11661_11697 = state_11655__$1;(statearr_11661_11697[2] = inst_11604);
(statearr_11661_11697[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11656 === 6))
{var inst_11601 = (state_11655[7]);var inst_11606 = f.call(null,inst_11601);var inst_11611 = cljs.core.seq.call(null,inst_11606);var inst_11612 = inst_11611;var inst_11613 = null;var inst_11614 = 0;var inst_11615 = 0;var state_11655__$1 = (function (){var statearr_11662 = state_11655;(statearr_11662[8] = inst_11612);
(statearr_11662[9] = inst_11613);
(statearr_11662[10] = inst_11615);
(statearr_11662[11] = inst_11614);
return statearr_11662;
})();var statearr_11663_11698 = state_11655__$1;(statearr_11663_11698[2] = null);
(statearr_11663_11698[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11656 === 7))
{var inst_11651 = (state_11655[2]);var state_11655__$1 = state_11655;var statearr_11664_11699 = state_11655__$1;(statearr_11664_11699[2] = inst_11651);
(statearr_11664_11699[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11656 === 8))
{var inst_11615 = (state_11655[10]);var inst_11614 = (state_11655[11]);var inst_11617 = (inst_11615 < inst_11614);var inst_11618 = inst_11617;var state_11655__$1 = state_11655;if(cljs.core.truth_(inst_11618))
{var statearr_11665_11700 = state_11655__$1;(statearr_11665_11700[1] = 10);
} else
{var statearr_11666_11701 = state_11655__$1;(statearr_11666_11701[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11656 === 9))
{var inst_11648 = (state_11655[2]);var state_11655__$1 = (function (){var statearr_11667 = state_11655;(statearr_11667[12] = inst_11648);
return statearr_11667;
})();var statearr_11668_11702 = state_11655__$1;(statearr_11668_11702[2] = null);
(statearr_11668_11702[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11656 === 10))
{var inst_11613 = (state_11655[9]);var inst_11615 = (state_11655[10]);var inst_11620 = cljs.core._nth.call(null,inst_11613,inst_11615);var state_11655__$1 = state_11655;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11655__$1,13,out,inst_11620);
} else
{if((state_val_11656 === 11))
{var inst_11626 = (state_11655[13]);var inst_11612 = (state_11655[8]);var inst_11626__$1 = cljs.core.seq.call(null,inst_11612);var state_11655__$1 = (function (){var statearr_11672 = state_11655;(statearr_11672[13] = inst_11626__$1);
return statearr_11672;
})();if(inst_11626__$1)
{var statearr_11673_11703 = state_11655__$1;(statearr_11673_11703[1] = 14);
} else
{var statearr_11674_11704 = state_11655__$1;(statearr_11674_11704[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11656 === 12))
{var inst_11646 = (state_11655[2]);var state_11655__$1 = state_11655;var statearr_11675_11705 = state_11655__$1;(statearr_11675_11705[2] = inst_11646);
(statearr_11675_11705[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11656 === 13))
{var inst_11612 = (state_11655[8]);var inst_11613 = (state_11655[9]);var inst_11615 = (state_11655[10]);var inst_11614 = (state_11655[11]);var inst_11622 = (state_11655[2]);var inst_11623 = (inst_11615 + 1);var tmp11669 = inst_11612;var tmp11670 = inst_11613;var tmp11671 = inst_11614;var inst_11612__$1 = tmp11669;var inst_11613__$1 = tmp11670;var inst_11614__$1 = tmp11671;var inst_11615__$1 = inst_11623;var state_11655__$1 = (function (){var statearr_11676 = state_11655;(statearr_11676[8] = inst_11612__$1);
(statearr_11676[9] = inst_11613__$1);
(statearr_11676[10] = inst_11615__$1);
(statearr_11676[11] = inst_11614__$1);
(statearr_11676[14] = inst_11622);
return statearr_11676;
})();var statearr_11677_11706 = state_11655__$1;(statearr_11677_11706[2] = null);
(statearr_11677_11706[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11656 === 14))
{var inst_11626 = (state_11655[13]);var inst_11628 = cljs.core.chunked_seq_QMARK_.call(null,inst_11626);var state_11655__$1 = state_11655;if(inst_11628)
{var statearr_11678_11707 = state_11655__$1;(statearr_11678_11707[1] = 17);
} else
{var statearr_11679_11708 = state_11655__$1;(statearr_11679_11708[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11656 === 15))
{var state_11655__$1 = state_11655;var statearr_11680_11709 = state_11655__$1;(statearr_11680_11709[2] = null);
(statearr_11680_11709[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11656 === 16))
{var inst_11644 = (state_11655[2]);var state_11655__$1 = state_11655;var statearr_11681_11710 = state_11655__$1;(statearr_11681_11710[2] = inst_11644);
(statearr_11681_11710[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11656 === 17))
{var inst_11626 = (state_11655[13]);var inst_11630 = cljs.core.chunk_first.call(null,inst_11626);var inst_11631 = cljs.core.chunk_rest.call(null,inst_11626);var inst_11632 = cljs.core.count.call(null,inst_11630);var inst_11612 = inst_11631;var inst_11613 = inst_11630;var inst_11614 = inst_11632;var inst_11615 = 0;var state_11655__$1 = (function (){var statearr_11682 = state_11655;(statearr_11682[8] = inst_11612);
(statearr_11682[9] = inst_11613);
(statearr_11682[10] = inst_11615);
(statearr_11682[11] = inst_11614);
return statearr_11682;
})();var statearr_11683_11711 = state_11655__$1;(statearr_11683_11711[2] = null);
(statearr_11683_11711[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11656 === 18))
{var inst_11626 = (state_11655[13]);var inst_11635 = cljs.core.first.call(null,inst_11626);var state_11655__$1 = state_11655;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11655__$1,20,out,inst_11635);
} else
{if((state_val_11656 === 19))
{var inst_11641 = (state_11655[2]);var state_11655__$1 = state_11655;var statearr_11684_11712 = state_11655__$1;(statearr_11684_11712[2] = inst_11641);
(statearr_11684_11712[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11656 === 20))
{var inst_11626 = (state_11655[13]);var inst_11637 = (state_11655[2]);var inst_11638 = cljs.core.next.call(null,inst_11626);var inst_11612 = inst_11638;var inst_11613 = null;var inst_11614 = 0;var inst_11615 = 0;var state_11655__$1 = (function (){var statearr_11685 = state_11655;(statearr_11685[8] = inst_11612);
(statearr_11685[9] = inst_11613);
(statearr_11685[15] = inst_11637);
(statearr_11685[10] = inst_11615);
(statearr_11685[11] = inst_11614);
return statearr_11685;
})();var statearr_11686_11713 = state_11655__$1;(statearr_11686_11713[2] = null);
(statearr_11686_11713[1] = 8);
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
});})(c__6335__auto__))
;return ((function (switch__6320__auto__,c__6335__auto__){
return (function() {
var state_machine__6321__auto__ = null;
var state_machine__6321__auto____0 = (function (){var statearr_11690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11690[0] = state_machine__6321__auto__);
(statearr_11690[1] = 1);
return statearr_11690;
});
var state_machine__6321__auto____1 = (function (state_11655){while(true){
var ret_value__6322__auto__ = (function (){try{while(true){
var result__6323__auto__ = switch__6320__auto__.call(null,state_11655);if(cljs.core.keyword_identical_QMARK_.call(null,result__6323__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6323__auto__;
}
break;
}
}catch (e11691){if((e11691 instanceof Object))
{var ex__6324__auto__ = e11691;var statearr_11692_11714 = state_11655;(statearr_11692_11714[5] = ex__6324__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11655);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11691;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6322__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11715 = state_11655;
state_11655 = G__11715;
continue;
}
} else
{return ret_value__6322__auto__;
}
break;
}
});
state_machine__6321__auto__ = function(state_11655){
switch(arguments.length){
case 0:
return state_machine__6321__auto____0.call(this);
case 1:
return state_machine__6321__auto____1.call(this,state_11655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6321__auto____0;
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6321__auto____1;
return state_machine__6321__auto__;
})()
;})(switch__6320__auto__,c__6335__auto__))
})();var state__6337__auto__ = (function (){var statearr_11693 = f__6336__auto__.call(null);(statearr_11693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6335__auto__);
return statearr_11693;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6337__auto__);
});})(c__6335__auto__))
);
return c__6335__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6335__auto___11796 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6335__auto___11796){
return (function (){var f__6336__auto__ = (function (){var switch__6320__auto__ = ((function (c__6335__auto___11796){
return (function (state_11775){var state_val_11776 = (state_11775[1]);if((state_val_11776 === 1))
{var state_11775__$1 = state_11775;var statearr_11777_11797 = state_11775__$1;(statearr_11777_11797[2] = null);
(statearr_11777_11797[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11776 === 2))
{var state_11775__$1 = state_11775;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11775__$1,4,from);
} else
{if((state_val_11776 === 3))
{var inst_11773 = (state_11775[2]);var state_11775__$1 = state_11775;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11775__$1,inst_11773);
} else
{if((state_val_11776 === 4))
{var inst_11758 = (state_11775[7]);var inst_11758__$1 = (state_11775[2]);var inst_11759 = (inst_11758__$1 == null);var state_11775__$1 = (function (){var statearr_11778 = state_11775;(statearr_11778[7] = inst_11758__$1);
return statearr_11778;
})();if(cljs.core.truth_(inst_11759))
{var statearr_11779_11798 = state_11775__$1;(statearr_11779_11798[1] = 5);
} else
{var statearr_11780_11799 = state_11775__$1;(statearr_11780_11799[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11776 === 5))
{var state_11775__$1 = state_11775;if(cljs.core.truth_(close_QMARK_))
{var statearr_11781_11800 = state_11775__$1;(statearr_11781_11800[1] = 8);
} else
{var statearr_11782_11801 = state_11775__$1;(statearr_11782_11801[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11776 === 6))
{var inst_11758 = (state_11775[7]);var state_11775__$1 = state_11775;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11775__$1,11,to,inst_11758);
} else
{if((state_val_11776 === 7))
{var inst_11771 = (state_11775[2]);var state_11775__$1 = state_11775;var statearr_11783_11802 = state_11775__$1;(statearr_11783_11802[2] = inst_11771);
(statearr_11783_11802[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11776 === 8))
{var inst_11762 = cljs.core.async.close_BANG_.call(null,to);var state_11775__$1 = state_11775;var statearr_11784_11803 = state_11775__$1;(statearr_11784_11803[2] = inst_11762);
(statearr_11784_11803[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11776 === 9))
{var state_11775__$1 = state_11775;var statearr_11785_11804 = state_11775__$1;(statearr_11785_11804[2] = null);
(statearr_11785_11804[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11776 === 10))
{var inst_11765 = (state_11775[2]);var state_11775__$1 = state_11775;var statearr_11786_11805 = state_11775__$1;(statearr_11786_11805[2] = inst_11765);
(statearr_11786_11805[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11776 === 11))
{var inst_11768 = (state_11775[2]);var state_11775__$1 = (function (){var statearr_11787 = state_11775;(statearr_11787[8] = inst_11768);
return statearr_11787;
})();var statearr_11788_11806 = state_11775__$1;(statearr_11788_11806[2] = null);
(statearr_11788_11806[1] = 2);
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
});})(c__6335__auto___11796))
;return ((function (switch__6320__auto__,c__6335__auto___11796){
return (function() {
var state_machine__6321__auto__ = null;
var state_machine__6321__auto____0 = (function (){var statearr_11792 = [null,null,null,null,null,null,null,null,null];(statearr_11792[0] = state_machine__6321__auto__);
(statearr_11792[1] = 1);
return statearr_11792;
});
var state_machine__6321__auto____1 = (function (state_11775){while(true){
var ret_value__6322__auto__ = (function (){try{while(true){
var result__6323__auto__ = switch__6320__auto__.call(null,state_11775);if(cljs.core.keyword_identical_QMARK_.call(null,result__6323__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6323__auto__;
}
break;
}
}catch (e11793){if((e11793 instanceof Object))
{var ex__6324__auto__ = e11793;var statearr_11794_11807 = state_11775;(statearr_11794_11807[5] = ex__6324__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11775);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11793;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6322__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11808 = state_11775;
state_11775 = G__11808;
continue;
}
} else
{return ret_value__6322__auto__;
}
break;
}
});
state_machine__6321__auto__ = function(state_11775){
switch(arguments.length){
case 0:
return state_machine__6321__auto____0.call(this);
case 1:
return state_machine__6321__auto____1.call(this,state_11775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6321__auto____0;
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6321__auto____1;
return state_machine__6321__auto__;
})()
;})(switch__6320__auto__,c__6335__auto___11796))
})();var state__6337__auto__ = (function (){var statearr_11795 = f__6336__auto__.call(null);(statearr_11795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6335__auto___11796);
return statearr_11795;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6337__auto__);
});})(c__6335__auto___11796))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6335__auto___11895 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6335__auto___11895,tc,fc){
return (function (){var f__6336__auto__ = (function (){var switch__6320__auto__ = ((function (c__6335__auto___11895,tc,fc){
return (function (state_11873){var state_val_11874 = (state_11873[1]);if((state_val_11874 === 1))
{var state_11873__$1 = state_11873;var statearr_11875_11896 = state_11873__$1;(statearr_11875_11896[2] = null);
(statearr_11875_11896[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11874 === 2))
{var state_11873__$1 = state_11873;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11873__$1,4,ch);
} else
{if((state_val_11874 === 3))
{var inst_11871 = (state_11873[2]);var state_11873__$1 = state_11873;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11873__$1,inst_11871);
} else
{if((state_val_11874 === 4))
{var inst_11854 = (state_11873[7]);var inst_11854__$1 = (state_11873[2]);var inst_11855 = (inst_11854__$1 == null);var state_11873__$1 = (function (){var statearr_11876 = state_11873;(statearr_11876[7] = inst_11854__$1);
return statearr_11876;
})();if(cljs.core.truth_(inst_11855))
{var statearr_11877_11897 = state_11873__$1;(statearr_11877_11897[1] = 5);
} else
{var statearr_11878_11898 = state_11873__$1;(statearr_11878_11898[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11874 === 5))
{var inst_11857 = cljs.core.async.close_BANG_.call(null,tc);var inst_11858 = cljs.core.async.close_BANG_.call(null,fc);var state_11873__$1 = (function (){var statearr_11879 = state_11873;(statearr_11879[8] = inst_11857);
return statearr_11879;
})();var statearr_11880_11899 = state_11873__$1;(statearr_11880_11899[2] = inst_11858);
(statearr_11880_11899[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11874 === 6))
{var inst_11854 = (state_11873[7]);var inst_11860 = p.call(null,inst_11854);var state_11873__$1 = state_11873;if(cljs.core.truth_(inst_11860))
{var statearr_11881_11900 = state_11873__$1;(statearr_11881_11900[1] = 9);
} else
{var statearr_11882_11901 = state_11873__$1;(statearr_11882_11901[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11874 === 7))
{var inst_11869 = (state_11873[2]);var state_11873__$1 = state_11873;var statearr_11883_11902 = state_11873__$1;(statearr_11883_11902[2] = inst_11869);
(statearr_11883_11902[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11874 === 8))
{var inst_11866 = (state_11873[2]);var state_11873__$1 = (function (){var statearr_11884 = state_11873;(statearr_11884[9] = inst_11866);
return statearr_11884;
})();var statearr_11885_11903 = state_11873__$1;(statearr_11885_11903[2] = null);
(statearr_11885_11903[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11874 === 9))
{var state_11873__$1 = state_11873;var statearr_11886_11904 = state_11873__$1;(statearr_11886_11904[2] = tc);
(statearr_11886_11904[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11874 === 10))
{var state_11873__$1 = state_11873;var statearr_11887_11905 = state_11873__$1;(statearr_11887_11905[2] = fc);
(statearr_11887_11905[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11874 === 11))
{var inst_11854 = (state_11873[7]);var inst_11864 = (state_11873[2]);var state_11873__$1 = state_11873;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11873__$1,8,inst_11864,inst_11854);
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
});})(c__6335__auto___11895,tc,fc))
;return ((function (switch__6320__auto__,c__6335__auto___11895,tc,fc){
return (function() {
var state_machine__6321__auto__ = null;
var state_machine__6321__auto____0 = (function (){var statearr_11891 = [null,null,null,null,null,null,null,null,null,null];(statearr_11891[0] = state_machine__6321__auto__);
(statearr_11891[1] = 1);
return statearr_11891;
});
var state_machine__6321__auto____1 = (function (state_11873){while(true){
var ret_value__6322__auto__ = (function (){try{while(true){
var result__6323__auto__ = switch__6320__auto__.call(null,state_11873);if(cljs.core.keyword_identical_QMARK_.call(null,result__6323__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6323__auto__;
}
break;
}
}catch (e11892){if((e11892 instanceof Object))
{var ex__6324__auto__ = e11892;var statearr_11893_11906 = state_11873;(statearr_11893_11906[5] = ex__6324__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11873);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11892;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6322__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11907 = state_11873;
state_11873 = G__11907;
continue;
}
} else
{return ret_value__6322__auto__;
}
break;
}
});
state_machine__6321__auto__ = function(state_11873){
switch(arguments.length){
case 0:
return state_machine__6321__auto____0.call(this);
case 1:
return state_machine__6321__auto____1.call(this,state_11873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6321__auto____0;
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6321__auto____1;
return state_machine__6321__auto__;
})()
;})(switch__6320__auto__,c__6335__auto___11895,tc,fc))
})();var state__6337__auto__ = (function (){var statearr_11894 = f__6336__auto__.call(null);(statearr_11894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6335__auto___11895);
return statearr_11894;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6337__auto__);
});})(c__6335__auto___11895,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6335__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6335__auto__){
return (function (){var f__6336__auto__ = (function (){var switch__6320__auto__ = ((function (c__6335__auto__){
return (function (state_11954){var state_val_11955 = (state_11954[1]);if((state_val_11955 === 7))
{var inst_11950 = (state_11954[2]);var state_11954__$1 = state_11954;var statearr_11956_11972 = state_11954__$1;(statearr_11956_11972[2] = inst_11950);
(statearr_11956_11972[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11955 === 6))
{var inst_11940 = (state_11954[7]);var inst_11943 = (state_11954[8]);var inst_11947 = f.call(null,inst_11940,inst_11943);var inst_11940__$1 = inst_11947;var state_11954__$1 = (function (){var statearr_11957 = state_11954;(statearr_11957[7] = inst_11940__$1);
return statearr_11957;
})();var statearr_11958_11973 = state_11954__$1;(statearr_11958_11973[2] = null);
(statearr_11958_11973[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11955 === 5))
{var inst_11940 = (state_11954[7]);var state_11954__$1 = state_11954;var statearr_11959_11974 = state_11954__$1;(statearr_11959_11974[2] = inst_11940);
(statearr_11959_11974[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11955 === 4))
{var inst_11943 = (state_11954[8]);var inst_11943__$1 = (state_11954[2]);var inst_11944 = (inst_11943__$1 == null);var state_11954__$1 = (function (){var statearr_11960 = state_11954;(statearr_11960[8] = inst_11943__$1);
return statearr_11960;
})();if(cljs.core.truth_(inst_11944))
{var statearr_11961_11975 = state_11954__$1;(statearr_11961_11975[1] = 5);
} else
{var statearr_11962_11976 = state_11954__$1;(statearr_11962_11976[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11955 === 3))
{var inst_11952 = (state_11954[2]);var state_11954__$1 = state_11954;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11954__$1,inst_11952);
} else
{if((state_val_11955 === 2))
{var state_11954__$1 = state_11954;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11954__$1,4,ch);
} else
{if((state_val_11955 === 1))
{var inst_11940 = init;var state_11954__$1 = (function (){var statearr_11963 = state_11954;(statearr_11963[7] = inst_11940);
return statearr_11963;
})();var statearr_11964_11977 = state_11954__$1;(statearr_11964_11977[2] = null);
(statearr_11964_11977[1] = 2);
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
});})(c__6335__auto__))
;return ((function (switch__6320__auto__,c__6335__auto__){
return (function() {
var state_machine__6321__auto__ = null;
var state_machine__6321__auto____0 = (function (){var statearr_11968 = [null,null,null,null,null,null,null,null,null];(statearr_11968[0] = state_machine__6321__auto__);
(statearr_11968[1] = 1);
return statearr_11968;
});
var state_machine__6321__auto____1 = (function (state_11954){while(true){
var ret_value__6322__auto__ = (function (){try{while(true){
var result__6323__auto__ = switch__6320__auto__.call(null,state_11954);if(cljs.core.keyword_identical_QMARK_.call(null,result__6323__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6323__auto__;
}
break;
}
}catch (e11969){if((e11969 instanceof Object))
{var ex__6324__auto__ = e11969;var statearr_11970_11978 = state_11954;(statearr_11970_11978[5] = ex__6324__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11954);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11969;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6322__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11979 = state_11954;
state_11954 = G__11979;
continue;
}
} else
{return ret_value__6322__auto__;
}
break;
}
});
state_machine__6321__auto__ = function(state_11954){
switch(arguments.length){
case 0:
return state_machine__6321__auto____0.call(this);
case 1:
return state_machine__6321__auto____1.call(this,state_11954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6321__auto____0;
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6321__auto____1;
return state_machine__6321__auto__;
})()
;})(switch__6320__auto__,c__6335__auto__))
})();var state__6337__auto__ = (function (){var statearr_11971 = f__6336__auto__.call(null);(statearr_11971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6335__auto__);
return statearr_11971;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6337__auto__);
});})(c__6335__auto__))
);
return c__6335__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6335__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6335__auto__){
return (function (){var f__6336__auto__ = (function (){var switch__6320__auto__ = ((function (c__6335__auto__){
return (function (state_12041){var state_val_12042 = (state_12041[1]);if((state_val_12042 === 1))
{var inst_12021 = cljs.core.seq.call(null,coll);var inst_12022 = inst_12021;var state_12041__$1 = (function (){var statearr_12043 = state_12041;(statearr_12043[7] = inst_12022);
return statearr_12043;
})();var statearr_12044_12062 = state_12041__$1;(statearr_12044_12062[2] = null);
(statearr_12044_12062[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12042 === 2))
{var inst_12022 = (state_12041[7]);var state_12041__$1 = state_12041;if(cljs.core.truth_(inst_12022))
{var statearr_12045_12063 = state_12041__$1;(statearr_12045_12063[1] = 4);
} else
{var statearr_12046_12064 = state_12041__$1;(statearr_12046_12064[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12042 === 3))
{var inst_12039 = (state_12041[2]);var state_12041__$1 = state_12041;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12041__$1,inst_12039);
} else
{if((state_val_12042 === 4))
{var inst_12022 = (state_12041[7]);var inst_12025 = cljs.core.first.call(null,inst_12022);var state_12041__$1 = state_12041;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12041__$1,7,ch,inst_12025);
} else
{if((state_val_12042 === 5))
{var state_12041__$1 = state_12041;if(cljs.core.truth_(close_QMARK_))
{var statearr_12047_12065 = state_12041__$1;(statearr_12047_12065[1] = 8);
} else
{var statearr_12048_12066 = state_12041__$1;(statearr_12048_12066[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12042 === 6))
{var inst_12037 = (state_12041[2]);var state_12041__$1 = state_12041;var statearr_12049_12067 = state_12041__$1;(statearr_12049_12067[2] = inst_12037);
(statearr_12049_12067[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12042 === 7))
{var inst_12022 = (state_12041[7]);var inst_12027 = (state_12041[2]);var inst_12028 = cljs.core.next.call(null,inst_12022);var inst_12022__$1 = inst_12028;var state_12041__$1 = (function (){var statearr_12050 = state_12041;(statearr_12050[7] = inst_12022__$1);
(statearr_12050[8] = inst_12027);
return statearr_12050;
})();var statearr_12051_12068 = state_12041__$1;(statearr_12051_12068[2] = null);
(statearr_12051_12068[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12042 === 8))
{var inst_12032 = cljs.core.async.close_BANG_.call(null,ch);var state_12041__$1 = state_12041;var statearr_12052_12069 = state_12041__$1;(statearr_12052_12069[2] = inst_12032);
(statearr_12052_12069[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12042 === 9))
{var state_12041__$1 = state_12041;var statearr_12053_12070 = state_12041__$1;(statearr_12053_12070[2] = null);
(statearr_12053_12070[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12042 === 10))
{var inst_12035 = (state_12041[2]);var state_12041__$1 = state_12041;var statearr_12054_12071 = state_12041__$1;(statearr_12054_12071[2] = inst_12035);
(statearr_12054_12071[1] = 6);
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
});})(c__6335__auto__))
;return ((function (switch__6320__auto__,c__6335__auto__){
return (function() {
var state_machine__6321__auto__ = null;
var state_machine__6321__auto____0 = (function (){var statearr_12058 = [null,null,null,null,null,null,null,null,null];(statearr_12058[0] = state_machine__6321__auto__);
(statearr_12058[1] = 1);
return statearr_12058;
});
var state_machine__6321__auto____1 = (function (state_12041){while(true){
var ret_value__6322__auto__ = (function (){try{while(true){
var result__6323__auto__ = switch__6320__auto__.call(null,state_12041);if(cljs.core.keyword_identical_QMARK_.call(null,result__6323__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6323__auto__;
}
break;
}
}catch (e12059){if((e12059 instanceof Object))
{var ex__6324__auto__ = e12059;var statearr_12060_12072 = state_12041;(statearr_12060_12072[5] = ex__6324__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12041);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12059;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6322__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12073 = state_12041;
state_12041 = G__12073;
continue;
}
} else
{return ret_value__6322__auto__;
}
break;
}
});
state_machine__6321__auto__ = function(state_12041){
switch(arguments.length){
case 0:
return state_machine__6321__auto____0.call(this);
case 1:
return state_machine__6321__auto____1.call(this,state_12041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6321__auto____0;
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6321__auto____1;
return state_machine__6321__auto__;
})()
;})(switch__6320__auto__,c__6335__auto__))
})();var state__6337__auto__ = (function (){var statearr_12061 = f__6336__auto__.call(null);(statearr_12061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6335__auto__);
return statearr_12061;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6337__auto__);
});})(c__6335__auto__))
);
return c__6335__auto__;
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
cljs.core.async.Mux = (function (){var obj12075 = {};return obj12075;
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
cljs.core.async.Mult = (function (){var obj12077 = {};return obj12077;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12301 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12301 = (function (cs,ch,mult,meta12302){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12302 = meta12302;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12301.cljs$lang$type = true;
cljs.core.async.t12301.cljs$lang$ctorStr = "cljs.core.async/t12301";
cljs.core.async.t12301.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t12301");
});})(cs))
;
cljs.core.async.t12301.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12301.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12301.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12301.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12301.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12301.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12301.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12303){var self__ = this;
var _12303__$1 = this;return self__.meta12302;
});})(cs))
;
cljs.core.async.t12301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12303,meta12302__$1){var self__ = this;
var _12303__$1 = this;return (new cljs.core.async.t12301(self__.cs,self__.ch,self__.mult,meta12302__$1));
});})(cs))
;
cljs.core.async.__GT_t12301 = ((function (cs){
return (function __GT_t12301(cs__$1,ch__$1,mult__$1,meta12302){return (new cljs.core.async.t12301(cs__$1,ch__$1,mult__$1,meta12302));
});})(cs))
;
}
return (new cljs.core.async.t12301(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6335__auto___12524 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6335__auto___12524,cs,m,dchan,dctr,done){
return (function (){var f__6336__auto__ = (function (){var switch__6320__auto__ = ((function (c__6335__auto___12524,cs,m,dchan,dctr,done){
return (function (state_12438){var state_val_12439 = (state_12438[1]);if((state_val_12439 === 32))
{var inst_12382 = (state_12438[7]);var inst_12306 = (state_12438[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12438,31,Object,null,30);var inst_12389 = cljs.core.async.put_BANG_.call(null,inst_12382,inst_12306,done);var state_12438__$1 = state_12438;var statearr_12440_12525 = state_12438__$1;(statearr_12440_12525[2] = inst_12389);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12438__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 1))
{var state_12438__$1 = state_12438;var statearr_12441_12526 = state_12438__$1;(statearr_12441_12526[2] = null);
(statearr_12441_12526[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 33))
{var inst_12395 = (state_12438[9]);var inst_12397 = cljs.core.chunked_seq_QMARK_.call(null,inst_12395);var state_12438__$1 = state_12438;if(inst_12397)
{var statearr_12442_12527 = state_12438__$1;(statearr_12442_12527[1] = 36);
} else
{var statearr_12443_12528 = state_12438__$1;(statearr_12443_12528[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 2))
{var state_12438__$1 = state_12438;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12438__$1,4,ch);
} else
{if((state_val_12439 === 34))
{var state_12438__$1 = state_12438;var statearr_12444_12529 = state_12438__$1;(statearr_12444_12529[2] = null);
(statearr_12444_12529[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 3))
{var inst_12436 = (state_12438[2]);var state_12438__$1 = state_12438;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12438__$1,inst_12436);
} else
{if((state_val_12439 === 35))
{var inst_12420 = (state_12438[2]);var state_12438__$1 = state_12438;var statearr_12445_12530 = state_12438__$1;(statearr_12445_12530[2] = inst_12420);
(statearr_12445_12530[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 4))
{var inst_12306 = (state_12438[8]);var inst_12306__$1 = (state_12438[2]);var inst_12307 = (inst_12306__$1 == null);var state_12438__$1 = (function (){var statearr_12446 = state_12438;(statearr_12446[8] = inst_12306__$1);
return statearr_12446;
})();if(cljs.core.truth_(inst_12307))
{var statearr_12447_12531 = state_12438__$1;(statearr_12447_12531[1] = 5);
} else
{var statearr_12448_12532 = state_12438__$1;(statearr_12448_12532[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 36))
{var inst_12395 = (state_12438[9]);var inst_12399 = cljs.core.chunk_first.call(null,inst_12395);var inst_12400 = cljs.core.chunk_rest.call(null,inst_12395);var inst_12401 = cljs.core.count.call(null,inst_12399);var inst_12374 = inst_12400;var inst_12375 = inst_12399;var inst_12376 = inst_12401;var inst_12377 = 0;var state_12438__$1 = (function (){var statearr_12449 = state_12438;(statearr_12449[10] = inst_12377);
(statearr_12449[11] = inst_12376);
(statearr_12449[12] = inst_12374);
(statearr_12449[13] = inst_12375);
return statearr_12449;
})();var statearr_12450_12533 = state_12438__$1;(statearr_12450_12533[2] = null);
(statearr_12450_12533[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 5))
{var inst_12313 = cljs.core.deref.call(null,cs);var inst_12314 = cljs.core.seq.call(null,inst_12313);var inst_12315 = inst_12314;var inst_12316 = null;var inst_12317 = 0;var inst_12318 = 0;var state_12438__$1 = (function (){var statearr_12451 = state_12438;(statearr_12451[14] = inst_12318);
(statearr_12451[15] = inst_12315);
(statearr_12451[16] = inst_12316);
(statearr_12451[17] = inst_12317);
return statearr_12451;
})();var statearr_12452_12534 = state_12438__$1;(statearr_12452_12534[2] = null);
(statearr_12452_12534[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 37))
{var inst_12395 = (state_12438[9]);var inst_12404 = cljs.core.first.call(null,inst_12395);var state_12438__$1 = (function (){var statearr_12453 = state_12438;(statearr_12453[18] = inst_12404);
return statearr_12453;
})();var statearr_12454_12535 = state_12438__$1;(statearr_12454_12535[2] = null);
(statearr_12454_12535[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 6))
{var inst_12366 = (state_12438[19]);var inst_12365 = cljs.core.deref.call(null,cs);var inst_12366__$1 = cljs.core.keys.call(null,inst_12365);var inst_12367 = cljs.core.count.call(null,inst_12366__$1);var inst_12368 = cljs.core.reset_BANG_.call(null,dctr,inst_12367);var inst_12373 = cljs.core.seq.call(null,inst_12366__$1);var inst_12374 = inst_12373;var inst_12375 = null;var inst_12376 = 0;var inst_12377 = 0;var state_12438__$1 = (function (){var statearr_12455 = state_12438;(statearr_12455[10] = inst_12377);
(statearr_12455[11] = inst_12376);
(statearr_12455[12] = inst_12374);
(statearr_12455[13] = inst_12375);
(statearr_12455[20] = inst_12368);
(statearr_12455[19] = inst_12366__$1);
return statearr_12455;
})();var statearr_12456_12536 = state_12438__$1;(statearr_12456_12536[2] = null);
(statearr_12456_12536[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 38))
{var inst_12417 = (state_12438[2]);var state_12438__$1 = state_12438;var statearr_12457_12537 = state_12438__$1;(statearr_12457_12537[2] = inst_12417);
(statearr_12457_12537[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 7))
{var inst_12434 = (state_12438[2]);var state_12438__$1 = state_12438;var statearr_12458_12538 = state_12438__$1;(statearr_12458_12538[2] = inst_12434);
(statearr_12458_12538[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 39))
{var inst_12395 = (state_12438[9]);var inst_12413 = (state_12438[2]);var inst_12414 = cljs.core.next.call(null,inst_12395);var inst_12374 = inst_12414;var inst_12375 = null;var inst_12376 = 0;var inst_12377 = 0;var state_12438__$1 = (function (){var statearr_12459 = state_12438;(statearr_12459[21] = inst_12413);
(statearr_12459[10] = inst_12377);
(statearr_12459[11] = inst_12376);
(statearr_12459[12] = inst_12374);
(statearr_12459[13] = inst_12375);
return statearr_12459;
})();var statearr_12460_12539 = state_12438__$1;(statearr_12460_12539[2] = null);
(statearr_12460_12539[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 8))
{var inst_12318 = (state_12438[14]);var inst_12317 = (state_12438[17]);var inst_12320 = (inst_12318 < inst_12317);var inst_12321 = inst_12320;var state_12438__$1 = state_12438;if(cljs.core.truth_(inst_12321))
{var statearr_12461_12540 = state_12438__$1;(statearr_12461_12540[1] = 10);
} else
{var statearr_12462_12541 = state_12438__$1;(statearr_12462_12541[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 40))
{var inst_12404 = (state_12438[18]);var inst_12405 = (state_12438[2]);var inst_12406 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12407 = cljs.core.async.untap_STAR_.call(null,m,inst_12404);var state_12438__$1 = (function (){var statearr_12463 = state_12438;(statearr_12463[22] = inst_12406);
(statearr_12463[23] = inst_12405);
return statearr_12463;
})();var statearr_12464_12542 = state_12438__$1;(statearr_12464_12542[2] = inst_12407);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12438__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 9))
{var inst_12363 = (state_12438[2]);var state_12438__$1 = state_12438;var statearr_12465_12543 = state_12438__$1;(statearr_12465_12543[2] = inst_12363);
(statearr_12465_12543[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 41))
{var inst_12306 = (state_12438[8]);var inst_12404 = (state_12438[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12438,40,Object,null,39);var inst_12411 = cljs.core.async.put_BANG_.call(null,inst_12404,inst_12306,done);var state_12438__$1 = state_12438;var statearr_12466_12544 = state_12438__$1;(statearr_12466_12544[2] = inst_12411);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12438__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 10))
{var inst_12318 = (state_12438[14]);var inst_12316 = (state_12438[16]);var inst_12324 = cljs.core._nth.call(null,inst_12316,inst_12318);var inst_12325 = cljs.core.nth.call(null,inst_12324,0,null);var inst_12326 = cljs.core.nth.call(null,inst_12324,1,null);var state_12438__$1 = (function (){var statearr_12467 = state_12438;(statearr_12467[24] = inst_12325);
return statearr_12467;
})();if(cljs.core.truth_(inst_12326))
{var statearr_12468_12545 = state_12438__$1;(statearr_12468_12545[1] = 13);
} else
{var statearr_12469_12546 = state_12438__$1;(statearr_12469_12546[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 42))
{var state_12438__$1 = state_12438;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12438__$1,45,dchan);
} else
{if((state_val_12439 === 11))
{var inst_12335 = (state_12438[25]);var inst_12315 = (state_12438[15]);var inst_12335__$1 = cljs.core.seq.call(null,inst_12315);var state_12438__$1 = (function (){var statearr_12470 = state_12438;(statearr_12470[25] = inst_12335__$1);
return statearr_12470;
})();if(inst_12335__$1)
{var statearr_12471_12547 = state_12438__$1;(statearr_12471_12547[1] = 16);
} else
{var statearr_12472_12548 = state_12438__$1;(statearr_12472_12548[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 43))
{var state_12438__$1 = state_12438;var statearr_12473_12549 = state_12438__$1;(statearr_12473_12549[2] = null);
(statearr_12473_12549[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 12))
{var inst_12361 = (state_12438[2]);var state_12438__$1 = state_12438;var statearr_12474_12550 = state_12438__$1;(statearr_12474_12550[2] = inst_12361);
(statearr_12474_12550[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 44))
{var inst_12431 = (state_12438[2]);var state_12438__$1 = (function (){var statearr_12475 = state_12438;(statearr_12475[26] = inst_12431);
return statearr_12475;
})();var statearr_12476_12551 = state_12438__$1;(statearr_12476_12551[2] = null);
(statearr_12476_12551[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 13))
{var inst_12325 = (state_12438[24]);var inst_12328 = cljs.core.async.close_BANG_.call(null,inst_12325);var state_12438__$1 = state_12438;var statearr_12477_12552 = state_12438__$1;(statearr_12477_12552[2] = inst_12328);
(statearr_12477_12552[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 45))
{var inst_12428 = (state_12438[2]);var state_12438__$1 = state_12438;var statearr_12481_12553 = state_12438__$1;(statearr_12481_12553[2] = inst_12428);
(statearr_12481_12553[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 14))
{var state_12438__$1 = state_12438;var statearr_12482_12554 = state_12438__$1;(statearr_12482_12554[2] = null);
(statearr_12482_12554[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 15))
{var inst_12318 = (state_12438[14]);var inst_12315 = (state_12438[15]);var inst_12316 = (state_12438[16]);var inst_12317 = (state_12438[17]);var inst_12331 = (state_12438[2]);var inst_12332 = (inst_12318 + 1);var tmp12478 = inst_12315;var tmp12479 = inst_12316;var tmp12480 = inst_12317;var inst_12315__$1 = tmp12478;var inst_12316__$1 = tmp12479;var inst_12317__$1 = tmp12480;var inst_12318__$1 = inst_12332;var state_12438__$1 = (function (){var statearr_12483 = state_12438;(statearr_12483[14] = inst_12318__$1);
(statearr_12483[27] = inst_12331);
(statearr_12483[15] = inst_12315__$1);
(statearr_12483[16] = inst_12316__$1);
(statearr_12483[17] = inst_12317__$1);
return statearr_12483;
})();var statearr_12484_12555 = state_12438__$1;(statearr_12484_12555[2] = null);
(statearr_12484_12555[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 16))
{var inst_12335 = (state_12438[25]);var inst_12337 = cljs.core.chunked_seq_QMARK_.call(null,inst_12335);var state_12438__$1 = state_12438;if(inst_12337)
{var statearr_12485_12556 = state_12438__$1;(statearr_12485_12556[1] = 19);
} else
{var statearr_12486_12557 = state_12438__$1;(statearr_12486_12557[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 17))
{var state_12438__$1 = state_12438;var statearr_12487_12558 = state_12438__$1;(statearr_12487_12558[2] = null);
(statearr_12487_12558[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 18))
{var inst_12359 = (state_12438[2]);var state_12438__$1 = state_12438;var statearr_12488_12559 = state_12438__$1;(statearr_12488_12559[2] = inst_12359);
(statearr_12488_12559[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 19))
{var inst_12335 = (state_12438[25]);var inst_12339 = cljs.core.chunk_first.call(null,inst_12335);var inst_12340 = cljs.core.chunk_rest.call(null,inst_12335);var inst_12341 = cljs.core.count.call(null,inst_12339);var inst_12315 = inst_12340;var inst_12316 = inst_12339;var inst_12317 = inst_12341;var inst_12318 = 0;var state_12438__$1 = (function (){var statearr_12489 = state_12438;(statearr_12489[14] = inst_12318);
(statearr_12489[15] = inst_12315);
(statearr_12489[16] = inst_12316);
(statearr_12489[17] = inst_12317);
return statearr_12489;
})();var statearr_12490_12560 = state_12438__$1;(statearr_12490_12560[2] = null);
(statearr_12490_12560[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 20))
{var inst_12335 = (state_12438[25]);var inst_12345 = cljs.core.first.call(null,inst_12335);var inst_12346 = cljs.core.nth.call(null,inst_12345,0,null);var inst_12347 = cljs.core.nth.call(null,inst_12345,1,null);var state_12438__$1 = (function (){var statearr_12491 = state_12438;(statearr_12491[28] = inst_12346);
return statearr_12491;
})();if(cljs.core.truth_(inst_12347))
{var statearr_12492_12561 = state_12438__$1;(statearr_12492_12561[1] = 22);
} else
{var statearr_12493_12562 = state_12438__$1;(statearr_12493_12562[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 21))
{var inst_12356 = (state_12438[2]);var state_12438__$1 = state_12438;var statearr_12494_12563 = state_12438__$1;(statearr_12494_12563[2] = inst_12356);
(statearr_12494_12563[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 22))
{var inst_12346 = (state_12438[28]);var inst_12349 = cljs.core.async.close_BANG_.call(null,inst_12346);var state_12438__$1 = state_12438;var statearr_12495_12564 = state_12438__$1;(statearr_12495_12564[2] = inst_12349);
(statearr_12495_12564[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 23))
{var state_12438__$1 = state_12438;var statearr_12496_12565 = state_12438__$1;(statearr_12496_12565[2] = null);
(statearr_12496_12565[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 24))
{var inst_12335 = (state_12438[25]);var inst_12352 = (state_12438[2]);var inst_12353 = cljs.core.next.call(null,inst_12335);var inst_12315 = inst_12353;var inst_12316 = null;var inst_12317 = 0;var inst_12318 = 0;var state_12438__$1 = (function (){var statearr_12497 = state_12438;(statearr_12497[14] = inst_12318);
(statearr_12497[29] = inst_12352);
(statearr_12497[15] = inst_12315);
(statearr_12497[16] = inst_12316);
(statearr_12497[17] = inst_12317);
return statearr_12497;
})();var statearr_12498_12566 = state_12438__$1;(statearr_12498_12566[2] = null);
(statearr_12498_12566[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 25))
{var inst_12377 = (state_12438[10]);var inst_12376 = (state_12438[11]);var inst_12379 = (inst_12377 < inst_12376);var inst_12380 = inst_12379;var state_12438__$1 = state_12438;if(cljs.core.truth_(inst_12380))
{var statearr_12499_12567 = state_12438__$1;(statearr_12499_12567[1] = 27);
} else
{var statearr_12500_12568 = state_12438__$1;(statearr_12500_12568[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 26))
{var inst_12366 = (state_12438[19]);var inst_12424 = (state_12438[2]);var inst_12425 = cljs.core.seq.call(null,inst_12366);var state_12438__$1 = (function (){var statearr_12501 = state_12438;(statearr_12501[30] = inst_12424);
return statearr_12501;
})();if(inst_12425)
{var statearr_12502_12569 = state_12438__$1;(statearr_12502_12569[1] = 42);
} else
{var statearr_12503_12570 = state_12438__$1;(statearr_12503_12570[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 27))
{var inst_12377 = (state_12438[10]);var inst_12375 = (state_12438[13]);var inst_12382 = cljs.core._nth.call(null,inst_12375,inst_12377);var state_12438__$1 = (function (){var statearr_12504 = state_12438;(statearr_12504[7] = inst_12382);
return statearr_12504;
})();var statearr_12505_12571 = state_12438__$1;(statearr_12505_12571[2] = null);
(statearr_12505_12571[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 28))
{var inst_12395 = (state_12438[9]);var inst_12374 = (state_12438[12]);var inst_12395__$1 = cljs.core.seq.call(null,inst_12374);var state_12438__$1 = (function (){var statearr_12509 = state_12438;(statearr_12509[9] = inst_12395__$1);
return statearr_12509;
})();if(inst_12395__$1)
{var statearr_12510_12572 = state_12438__$1;(statearr_12510_12572[1] = 33);
} else
{var statearr_12511_12573 = state_12438__$1;(statearr_12511_12573[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 29))
{var inst_12422 = (state_12438[2]);var state_12438__$1 = state_12438;var statearr_12512_12574 = state_12438__$1;(statearr_12512_12574[2] = inst_12422);
(statearr_12512_12574[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 30))
{var inst_12377 = (state_12438[10]);var inst_12376 = (state_12438[11]);var inst_12374 = (state_12438[12]);var inst_12375 = (state_12438[13]);var inst_12391 = (state_12438[2]);var inst_12392 = (inst_12377 + 1);var tmp12506 = inst_12376;var tmp12507 = inst_12374;var tmp12508 = inst_12375;var inst_12374__$1 = tmp12507;var inst_12375__$1 = tmp12508;var inst_12376__$1 = tmp12506;var inst_12377__$1 = inst_12392;var state_12438__$1 = (function (){var statearr_12513 = state_12438;(statearr_12513[31] = inst_12391);
(statearr_12513[10] = inst_12377__$1);
(statearr_12513[11] = inst_12376__$1);
(statearr_12513[12] = inst_12374__$1);
(statearr_12513[13] = inst_12375__$1);
return statearr_12513;
})();var statearr_12514_12575 = state_12438__$1;(statearr_12514_12575[2] = null);
(statearr_12514_12575[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 31))
{var inst_12382 = (state_12438[7]);var inst_12383 = (state_12438[2]);var inst_12384 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12385 = cljs.core.async.untap_STAR_.call(null,m,inst_12382);var state_12438__$1 = (function (){var statearr_12515 = state_12438;(statearr_12515[32] = inst_12383);
(statearr_12515[33] = inst_12384);
return statearr_12515;
})();var statearr_12516_12576 = state_12438__$1;(statearr_12516_12576[2] = inst_12385);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12438__$1);
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
});})(c__6335__auto___12524,cs,m,dchan,dctr,done))
;return ((function (switch__6320__auto__,c__6335__auto___12524,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6321__auto__ = null;
var state_machine__6321__auto____0 = (function (){var statearr_12520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12520[0] = state_machine__6321__auto__);
(statearr_12520[1] = 1);
return statearr_12520;
});
var state_machine__6321__auto____1 = (function (state_12438){while(true){
var ret_value__6322__auto__ = (function (){try{while(true){
var result__6323__auto__ = switch__6320__auto__.call(null,state_12438);if(cljs.core.keyword_identical_QMARK_.call(null,result__6323__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6323__auto__;
}
break;
}
}catch (e12521){if((e12521 instanceof Object))
{var ex__6324__auto__ = e12521;var statearr_12522_12577 = state_12438;(statearr_12522_12577[5] = ex__6324__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12438);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12521;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6322__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12578 = state_12438;
state_12438 = G__12578;
continue;
}
} else
{return ret_value__6322__auto__;
}
break;
}
});
state_machine__6321__auto__ = function(state_12438){
switch(arguments.length){
case 0:
return state_machine__6321__auto____0.call(this);
case 1:
return state_machine__6321__auto____1.call(this,state_12438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6321__auto____0;
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6321__auto____1;
return state_machine__6321__auto__;
})()
;})(switch__6320__auto__,c__6335__auto___12524,cs,m,dchan,dctr,done))
})();var state__6337__auto__ = (function (){var statearr_12523 = f__6336__auto__.call(null);(statearr_12523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6335__auto___12524);
return statearr_12523;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6337__auto__);
});})(c__6335__auto___12524,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj12580 = {};return obj12580;
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
;var m = (function (){if(typeof cljs.core.async.t12690 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12690 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12691){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta12691 = meta12691;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12690.cljs$lang$type = true;
cljs.core.async.t12690.cljs$lang$ctorStr = "cljs.core.async/t12690";
cljs.core.async.t12690.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t12690");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12690.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12690.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12690.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12690.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12690.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12690.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12690.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12690.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12690.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12692){var self__ = this;
var _12692__$1 = this;return self__.meta12691;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12692,meta12691__$1){var self__ = this;
var _12692__$1 = this;return (new cljs.core.async.t12690(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12691__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12690 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12690(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12691){return (new cljs.core.async.t12690(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12691));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12690(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6335__auto___12799 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6335__auto___12799,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6336__auto__ = (function (){var switch__6320__auto__ = ((function (c__6335__auto___12799,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12757){var state_val_12758 = (state_12757[1]);if((state_val_12758 === 1))
{var inst_12696 = (state_12757[7]);var inst_12696__$1 = calc_state.call(null);var inst_12697 = cljs.core.seq_QMARK_.call(null,inst_12696__$1);var state_12757__$1 = (function (){var statearr_12759 = state_12757;(statearr_12759[7] = inst_12696__$1);
return statearr_12759;
})();if(inst_12697)
{var statearr_12760_12800 = state_12757__$1;(statearr_12760_12800[1] = 2);
} else
{var statearr_12761_12801 = state_12757__$1;(statearr_12761_12801[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 2))
{var inst_12696 = (state_12757[7]);var inst_12699 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12696);var state_12757__$1 = state_12757;var statearr_12762_12802 = state_12757__$1;(statearr_12762_12802[2] = inst_12699);
(statearr_12762_12802[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 3))
{var inst_12696 = (state_12757[7]);var state_12757__$1 = state_12757;var statearr_12763_12803 = state_12757__$1;(statearr_12763_12803[2] = inst_12696);
(statearr_12763_12803[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 4))
{var inst_12696 = (state_12757[7]);var inst_12702 = (state_12757[2]);var inst_12703 = cljs.core.get.call(null,inst_12702,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12704 = cljs.core.get.call(null,inst_12702,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12705 = cljs.core.get.call(null,inst_12702,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12706 = inst_12696;var state_12757__$1 = (function (){var statearr_12764 = state_12757;(statearr_12764[8] = inst_12704);
(statearr_12764[9] = inst_12703);
(statearr_12764[10] = inst_12706);
(statearr_12764[11] = inst_12705);
return statearr_12764;
})();var statearr_12765_12804 = state_12757__$1;(statearr_12765_12804[2] = null);
(statearr_12765_12804[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 5))
{var inst_12706 = (state_12757[10]);var inst_12709 = cljs.core.seq_QMARK_.call(null,inst_12706);var state_12757__$1 = state_12757;if(inst_12709)
{var statearr_12766_12805 = state_12757__$1;(statearr_12766_12805[1] = 7);
} else
{var statearr_12767_12806 = state_12757__$1;(statearr_12767_12806[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 6))
{var inst_12755 = (state_12757[2]);var state_12757__$1 = state_12757;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12757__$1,inst_12755);
} else
{if((state_val_12758 === 7))
{var inst_12706 = (state_12757[10]);var inst_12711 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12706);var state_12757__$1 = state_12757;var statearr_12768_12807 = state_12757__$1;(statearr_12768_12807[2] = inst_12711);
(statearr_12768_12807[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 8))
{var inst_12706 = (state_12757[10]);var state_12757__$1 = state_12757;var statearr_12769_12808 = state_12757__$1;(statearr_12769_12808[2] = inst_12706);
(statearr_12769_12808[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 9))
{var inst_12714 = (state_12757[12]);var inst_12714__$1 = (state_12757[2]);var inst_12715 = cljs.core.get.call(null,inst_12714__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12716 = cljs.core.get.call(null,inst_12714__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12717 = cljs.core.get.call(null,inst_12714__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12757__$1 = (function (){var statearr_12770 = state_12757;(statearr_12770[12] = inst_12714__$1);
(statearr_12770[13] = inst_12717);
(statearr_12770[14] = inst_12716);
return statearr_12770;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12757__$1,10,inst_12715);
} else
{if((state_val_12758 === 10))
{var inst_12721 = (state_12757[15]);var inst_12722 = (state_12757[16]);var inst_12720 = (state_12757[2]);var inst_12721__$1 = cljs.core.nth.call(null,inst_12720,0,null);var inst_12722__$1 = cljs.core.nth.call(null,inst_12720,1,null);var inst_12723 = (inst_12721__$1 == null);var inst_12724 = cljs.core._EQ_.call(null,inst_12722__$1,change);var inst_12725 = (inst_12723) || (inst_12724);var state_12757__$1 = (function (){var statearr_12771 = state_12757;(statearr_12771[15] = inst_12721__$1);
(statearr_12771[16] = inst_12722__$1);
return statearr_12771;
})();if(cljs.core.truth_(inst_12725))
{var statearr_12772_12809 = state_12757__$1;(statearr_12772_12809[1] = 11);
} else
{var statearr_12773_12810 = state_12757__$1;(statearr_12773_12810[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 11))
{var inst_12721 = (state_12757[15]);var inst_12727 = (inst_12721 == null);var state_12757__$1 = state_12757;if(cljs.core.truth_(inst_12727))
{var statearr_12774_12811 = state_12757__$1;(statearr_12774_12811[1] = 14);
} else
{var statearr_12775_12812 = state_12757__$1;(statearr_12775_12812[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 12))
{var inst_12717 = (state_12757[13]);var inst_12736 = (state_12757[17]);var inst_12722 = (state_12757[16]);var inst_12736__$1 = inst_12717.call(null,inst_12722);var state_12757__$1 = (function (){var statearr_12776 = state_12757;(statearr_12776[17] = inst_12736__$1);
return statearr_12776;
})();if(cljs.core.truth_(inst_12736__$1))
{var statearr_12777_12813 = state_12757__$1;(statearr_12777_12813[1] = 17);
} else
{var statearr_12778_12814 = state_12757__$1;(statearr_12778_12814[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 13))
{var inst_12753 = (state_12757[2]);var state_12757__$1 = state_12757;var statearr_12779_12815 = state_12757__$1;(statearr_12779_12815[2] = inst_12753);
(statearr_12779_12815[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 14))
{var inst_12722 = (state_12757[16]);var inst_12729 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12722);var state_12757__$1 = state_12757;var statearr_12780_12816 = state_12757__$1;(statearr_12780_12816[2] = inst_12729);
(statearr_12780_12816[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 15))
{var state_12757__$1 = state_12757;var statearr_12781_12817 = state_12757__$1;(statearr_12781_12817[2] = null);
(statearr_12781_12817[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 16))
{var inst_12732 = (state_12757[2]);var inst_12733 = calc_state.call(null);var inst_12706 = inst_12733;var state_12757__$1 = (function (){var statearr_12782 = state_12757;(statearr_12782[18] = inst_12732);
(statearr_12782[10] = inst_12706);
return statearr_12782;
})();var statearr_12783_12818 = state_12757__$1;(statearr_12783_12818[2] = null);
(statearr_12783_12818[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 17))
{var inst_12736 = (state_12757[17]);var state_12757__$1 = state_12757;var statearr_12784_12819 = state_12757__$1;(statearr_12784_12819[2] = inst_12736);
(statearr_12784_12819[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 18))
{var inst_12717 = (state_12757[13]);var inst_12716 = (state_12757[14]);var inst_12722 = (state_12757[16]);var inst_12739 = cljs.core.empty_QMARK_.call(null,inst_12717);var inst_12740 = inst_12716.call(null,inst_12722);var inst_12741 = cljs.core.not.call(null,inst_12740);var inst_12742 = (inst_12739) && (inst_12741);var state_12757__$1 = state_12757;var statearr_12785_12820 = state_12757__$1;(statearr_12785_12820[2] = inst_12742);
(statearr_12785_12820[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 19))
{var inst_12744 = (state_12757[2]);var state_12757__$1 = state_12757;if(cljs.core.truth_(inst_12744))
{var statearr_12786_12821 = state_12757__$1;(statearr_12786_12821[1] = 20);
} else
{var statearr_12787_12822 = state_12757__$1;(statearr_12787_12822[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 20))
{var inst_12721 = (state_12757[15]);var state_12757__$1 = state_12757;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12757__$1,23,out,inst_12721);
} else
{if((state_val_12758 === 21))
{var state_12757__$1 = state_12757;var statearr_12788_12823 = state_12757__$1;(statearr_12788_12823[2] = null);
(statearr_12788_12823[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 22))
{var inst_12714 = (state_12757[12]);var inst_12750 = (state_12757[2]);var inst_12706 = inst_12714;var state_12757__$1 = (function (){var statearr_12789 = state_12757;(statearr_12789[19] = inst_12750);
(statearr_12789[10] = inst_12706);
return statearr_12789;
})();var statearr_12790_12824 = state_12757__$1;(statearr_12790_12824[2] = null);
(statearr_12790_12824[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12758 === 23))
{var inst_12747 = (state_12757[2]);var state_12757__$1 = state_12757;var statearr_12791_12825 = state_12757__$1;(statearr_12791_12825[2] = inst_12747);
(statearr_12791_12825[1] = 22);
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
});})(c__6335__auto___12799,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6320__auto__,c__6335__auto___12799,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6321__auto__ = null;
var state_machine__6321__auto____0 = (function (){var statearr_12795 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12795[0] = state_machine__6321__auto__);
(statearr_12795[1] = 1);
return statearr_12795;
});
var state_machine__6321__auto____1 = (function (state_12757){while(true){
var ret_value__6322__auto__ = (function (){try{while(true){
var result__6323__auto__ = switch__6320__auto__.call(null,state_12757);if(cljs.core.keyword_identical_QMARK_.call(null,result__6323__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6323__auto__;
}
break;
}
}catch (e12796){if((e12796 instanceof Object))
{var ex__6324__auto__ = e12796;var statearr_12797_12826 = state_12757;(statearr_12797_12826[5] = ex__6324__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12757);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12796;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6322__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12827 = state_12757;
state_12757 = G__12827;
continue;
}
} else
{return ret_value__6322__auto__;
}
break;
}
});
state_machine__6321__auto__ = function(state_12757){
switch(arguments.length){
case 0:
return state_machine__6321__auto____0.call(this);
case 1:
return state_machine__6321__auto____1.call(this,state_12757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6321__auto____0;
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6321__auto____1;
return state_machine__6321__auto__;
})()
;})(switch__6320__auto__,c__6335__auto___12799,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6337__auto__ = (function (){var statearr_12798 = f__6336__auto__.call(null);(statearr_12798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6335__auto___12799);
return statearr_12798;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6337__auto__);
});})(c__6335__auto___12799,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj12829 = {};return obj12829;
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
return (function (p1__12830_SHARP_){if(cljs.core.truth_(p1__12830_SHARP_.call(null,topic)))
{return p1__12830_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12830_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3557__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12955 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12955 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12956){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12956 = meta12956;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12955.cljs$lang$type = true;
cljs.core.async.t12955.cljs$lang$ctorStr = "cljs.core.async/t12955";
cljs.core.async.t12955.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t12955");
});})(mults,ensure_mult))
;
cljs.core.async.t12955.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12955.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12955.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12955.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12955.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12955.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12955.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12955.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12957){var self__ = this;
var _12957__$1 = this;return self__.meta12956;
});})(mults,ensure_mult))
;
cljs.core.async.t12955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12957,meta12956__$1){var self__ = this;
var _12957__$1 = this;return (new cljs.core.async.t12955(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12956__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12955 = ((function (mults,ensure_mult){
return (function __GT_t12955(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12956){return (new cljs.core.async.t12955(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12956));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12955(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6335__auto___13079 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6335__auto___13079,mults,ensure_mult,p){
return (function (){var f__6336__auto__ = (function (){var switch__6320__auto__ = ((function (c__6335__auto___13079,mults,ensure_mult,p){
return (function (state_13031){var state_val_13032 = (state_13031[1]);if((state_val_13032 === 1))
{var state_13031__$1 = state_13031;var statearr_13033_13080 = state_13031__$1;(statearr_13033_13080[2] = null);
(statearr_13033_13080[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 2))
{var state_13031__$1 = state_13031;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13031__$1,4,ch);
} else
{if((state_val_13032 === 3))
{var inst_13029 = (state_13031[2]);var state_13031__$1 = state_13031;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13031__$1,inst_13029);
} else
{if((state_val_13032 === 4))
{var inst_12960 = (state_13031[7]);var inst_12960__$1 = (state_13031[2]);var inst_12961 = (inst_12960__$1 == null);var state_13031__$1 = (function (){var statearr_13034 = state_13031;(statearr_13034[7] = inst_12960__$1);
return statearr_13034;
})();if(cljs.core.truth_(inst_12961))
{var statearr_13035_13081 = state_13031__$1;(statearr_13035_13081[1] = 5);
} else
{var statearr_13036_13082 = state_13031__$1;(statearr_13036_13082[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 5))
{var inst_12967 = cljs.core.deref.call(null,mults);var inst_12968 = cljs.core.vals.call(null,inst_12967);var inst_12969 = cljs.core.seq.call(null,inst_12968);var inst_12970 = inst_12969;var inst_12971 = null;var inst_12972 = 0;var inst_12973 = 0;var state_13031__$1 = (function (){var statearr_13037 = state_13031;(statearr_13037[8] = inst_12973);
(statearr_13037[9] = inst_12972);
(statearr_13037[10] = inst_12971);
(statearr_13037[11] = inst_12970);
return statearr_13037;
})();var statearr_13038_13083 = state_13031__$1;(statearr_13038_13083[2] = null);
(statearr_13038_13083[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 6))
{var inst_13010 = (state_13031[12]);var inst_13008 = (state_13031[13]);var inst_12960 = (state_13031[7]);var inst_13008__$1 = topic_fn.call(null,inst_12960);var inst_13009 = cljs.core.deref.call(null,mults);var inst_13010__$1 = cljs.core.get.call(null,inst_13009,inst_13008__$1);var state_13031__$1 = (function (){var statearr_13039 = state_13031;(statearr_13039[12] = inst_13010__$1);
(statearr_13039[13] = inst_13008__$1);
return statearr_13039;
})();if(cljs.core.truth_(inst_13010__$1))
{var statearr_13040_13084 = state_13031__$1;(statearr_13040_13084[1] = 19);
} else
{var statearr_13041_13085 = state_13031__$1;(statearr_13041_13085[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 7))
{var inst_13027 = (state_13031[2]);var state_13031__$1 = state_13031;var statearr_13042_13086 = state_13031__$1;(statearr_13042_13086[2] = inst_13027);
(statearr_13042_13086[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 8))
{var inst_12973 = (state_13031[8]);var inst_12972 = (state_13031[9]);var inst_12975 = (inst_12973 < inst_12972);var inst_12976 = inst_12975;var state_13031__$1 = state_13031;if(cljs.core.truth_(inst_12976))
{var statearr_13046_13087 = state_13031__$1;(statearr_13046_13087[1] = 10);
} else
{var statearr_13047_13088 = state_13031__$1;(statearr_13047_13088[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 9))
{var inst_13006 = (state_13031[2]);var state_13031__$1 = state_13031;var statearr_13048_13089 = state_13031__$1;(statearr_13048_13089[2] = inst_13006);
(statearr_13048_13089[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 10))
{var inst_12973 = (state_13031[8]);var inst_12972 = (state_13031[9]);var inst_12971 = (state_13031[10]);var inst_12970 = (state_13031[11]);var inst_12978 = cljs.core._nth.call(null,inst_12971,inst_12973);var inst_12979 = cljs.core.async.muxch_STAR_.call(null,inst_12978);var inst_12980 = cljs.core.async.close_BANG_.call(null,inst_12979);var inst_12981 = (inst_12973 + 1);var tmp13043 = inst_12972;var tmp13044 = inst_12971;var tmp13045 = inst_12970;var inst_12970__$1 = tmp13045;var inst_12971__$1 = tmp13044;var inst_12972__$1 = tmp13043;var inst_12973__$1 = inst_12981;var state_13031__$1 = (function (){var statearr_13049 = state_13031;(statearr_13049[14] = inst_12980);
(statearr_13049[8] = inst_12973__$1);
(statearr_13049[9] = inst_12972__$1);
(statearr_13049[10] = inst_12971__$1);
(statearr_13049[11] = inst_12970__$1);
return statearr_13049;
})();var statearr_13050_13090 = state_13031__$1;(statearr_13050_13090[2] = null);
(statearr_13050_13090[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 11))
{var inst_12984 = (state_13031[15]);var inst_12970 = (state_13031[11]);var inst_12984__$1 = cljs.core.seq.call(null,inst_12970);var state_13031__$1 = (function (){var statearr_13051 = state_13031;(statearr_13051[15] = inst_12984__$1);
return statearr_13051;
})();if(inst_12984__$1)
{var statearr_13052_13091 = state_13031__$1;(statearr_13052_13091[1] = 13);
} else
{var statearr_13053_13092 = state_13031__$1;(statearr_13053_13092[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 12))
{var inst_13004 = (state_13031[2]);var state_13031__$1 = state_13031;var statearr_13054_13093 = state_13031__$1;(statearr_13054_13093[2] = inst_13004);
(statearr_13054_13093[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 13))
{var inst_12984 = (state_13031[15]);var inst_12986 = cljs.core.chunked_seq_QMARK_.call(null,inst_12984);var state_13031__$1 = state_13031;if(inst_12986)
{var statearr_13055_13094 = state_13031__$1;(statearr_13055_13094[1] = 16);
} else
{var statearr_13056_13095 = state_13031__$1;(statearr_13056_13095[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 14))
{var state_13031__$1 = state_13031;var statearr_13057_13096 = state_13031__$1;(statearr_13057_13096[2] = null);
(statearr_13057_13096[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 15))
{var inst_13002 = (state_13031[2]);var state_13031__$1 = state_13031;var statearr_13058_13097 = state_13031__$1;(statearr_13058_13097[2] = inst_13002);
(statearr_13058_13097[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 16))
{var inst_12984 = (state_13031[15]);var inst_12988 = cljs.core.chunk_first.call(null,inst_12984);var inst_12989 = cljs.core.chunk_rest.call(null,inst_12984);var inst_12990 = cljs.core.count.call(null,inst_12988);var inst_12970 = inst_12989;var inst_12971 = inst_12988;var inst_12972 = inst_12990;var inst_12973 = 0;var state_13031__$1 = (function (){var statearr_13059 = state_13031;(statearr_13059[8] = inst_12973);
(statearr_13059[9] = inst_12972);
(statearr_13059[10] = inst_12971);
(statearr_13059[11] = inst_12970);
return statearr_13059;
})();var statearr_13060_13098 = state_13031__$1;(statearr_13060_13098[2] = null);
(statearr_13060_13098[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 17))
{var inst_12984 = (state_13031[15]);var inst_12993 = cljs.core.first.call(null,inst_12984);var inst_12994 = cljs.core.async.muxch_STAR_.call(null,inst_12993);var inst_12995 = cljs.core.async.close_BANG_.call(null,inst_12994);var inst_12996 = cljs.core.next.call(null,inst_12984);var inst_12970 = inst_12996;var inst_12971 = null;var inst_12972 = 0;var inst_12973 = 0;var state_13031__$1 = (function (){var statearr_13061 = state_13031;(statearr_13061[16] = inst_12995);
(statearr_13061[8] = inst_12973);
(statearr_13061[9] = inst_12972);
(statearr_13061[10] = inst_12971);
(statearr_13061[11] = inst_12970);
return statearr_13061;
})();var statearr_13062_13099 = state_13031__$1;(statearr_13062_13099[2] = null);
(statearr_13062_13099[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 18))
{var inst_12999 = (state_13031[2]);var state_13031__$1 = state_13031;var statearr_13063_13100 = state_13031__$1;(statearr_13063_13100[2] = inst_12999);
(statearr_13063_13100[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 19))
{var state_13031__$1 = state_13031;var statearr_13064_13101 = state_13031__$1;(statearr_13064_13101[2] = null);
(statearr_13064_13101[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 20))
{var state_13031__$1 = state_13031;var statearr_13065_13102 = state_13031__$1;(statearr_13065_13102[2] = null);
(statearr_13065_13102[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 21))
{var inst_13024 = (state_13031[2]);var state_13031__$1 = (function (){var statearr_13066 = state_13031;(statearr_13066[17] = inst_13024);
return statearr_13066;
})();var statearr_13067_13103 = state_13031__$1;(statearr_13067_13103[2] = null);
(statearr_13067_13103[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 22))
{var inst_13021 = (state_13031[2]);var state_13031__$1 = state_13031;var statearr_13068_13104 = state_13031__$1;(statearr_13068_13104[2] = inst_13021);
(statearr_13068_13104[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 23))
{var inst_13008 = (state_13031[13]);var inst_13012 = (state_13031[2]);var inst_13013 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13008);var state_13031__$1 = (function (){var statearr_13069 = state_13031;(statearr_13069[18] = inst_13012);
return statearr_13069;
})();var statearr_13070_13105 = state_13031__$1;(statearr_13070_13105[2] = inst_13013);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13031__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13032 === 24))
{var inst_13010 = (state_13031[12]);var inst_12960 = (state_13031[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13031,23,Object,null,22);var inst_13017 = cljs.core.async.muxch_STAR_.call(null,inst_13010);var state_13031__$1 = state_13031;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13031__$1,25,inst_13017,inst_12960);
} else
{if((state_val_13032 === 25))
{var inst_13019 = (state_13031[2]);var state_13031__$1 = state_13031;var statearr_13071_13106 = state_13031__$1;(statearr_13071_13106[2] = inst_13019);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13031__$1);
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
});})(c__6335__auto___13079,mults,ensure_mult,p))
;return ((function (switch__6320__auto__,c__6335__auto___13079,mults,ensure_mult,p){
return (function() {
var state_machine__6321__auto__ = null;
var state_machine__6321__auto____0 = (function (){var statearr_13075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13075[0] = state_machine__6321__auto__);
(statearr_13075[1] = 1);
return statearr_13075;
});
var state_machine__6321__auto____1 = (function (state_13031){while(true){
var ret_value__6322__auto__ = (function (){try{while(true){
var result__6323__auto__ = switch__6320__auto__.call(null,state_13031);if(cljs.core.keyword_identical_QMARK_.call(null,result__6323__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6323__auto__;
}
break;
}
}catch (e13076){if((e13076 instanceof Object))
{var ex__6324__auto__ = e13076;var statearr_13077_13107 = state_13031;(statearr_13077_13107[5] = ex__6324__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13031);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13076;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6322__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13108 = state_13031;
state_13031 = G__13108;
continue;
}
} else
{return ret_value__6322__auto__;
}
break;
}
});
state_machine__6321__auto__ = function(state_13031){
switch(arguments.length){
case 0:
return state_machine__6321__auto____0.call(this);
case 1:
return state_machine__6321__auto____1.call(this,state_13031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6321__auto____0;
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6321__auto____1;
return state_machine__6321__auto__;
})()
;})(switch__6320__auto__,c__6335__auto___13079,mults,ensure_mult,p))
})();var state__6337__auto__ = (function (){var statearr_13078 = f__6336__auto__.call(null);(statearr_13078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6335__auto___13079);
return statearr_13078;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6337__auto__);
});})(c__6335__auto___13079,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6335__auto___13245 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6335__auto___13245,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6336__auto__ = (function (){var switch__6320__auto__ = ((function (c__6335__auto___13245,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13215){var state_val_13216 = (state_13215[1]);if((state_val_13216 === 1))
{var state_13215__$1 = state_13215;var statearr_13217_13246 = state_13215__$1;(statearr_13217_13246[2] = null);
(statearr_13217_13246[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13216 === 2))
{var inst_13178 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13179 = 0;var state_13215__$1 = (function (){var statearr_13218 = state_13215;(statearr_13218[7] = inst_13178);
(statearr_13218[8] = inst_13179);
return statearr_13218;
})();var statearr_13219_13247 = state_13215__$1;(statearr_13219_13247[2] = null);
(statearr_13219_13247[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13216 === 3))
{var inst_13213 = (state_13215[2]);var state_13215__$1 = state_13215;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13215__$1,inst_13213);
} else
{if((state_val_13216 === 4))
{var inst_13179 = (state_13215[8]);var inst_13181 = (inst_13179 < cnt);var state_13215__$1 = state_13215;if(cljs.core.truth_(inst_13181))
{var statearr_13220_13248 = state_13215__$1;(statearr_13220_13248[1] = 6);
} else
{var statearr_13221_13249 = state_13215__$1;(statearr_13221_13249[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13216 === 5))
{var inst_13199 = (state_13215[2]);var state_13215__$1 = (function (){var statearr_13222 = state_13215;(statearr_13222[9] = inst_13199);
return statearr_13222;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13215__$1,12,dchan);
} else
{if((state_val_13216 === 6))
{var state_13215__$1 = state_13215;var statearr_13223_13250 = state_13215__$1;(statearr_13223_13250[2] = null);
(statearr_13223_13250[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13216 === 7))
{var state_13215__$1 = state_13215;var statearr_13224_13251 = state_13215__$1;(statearr_13224_13251[2] = null);
(statearr_13224_13251[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13216 === 8))
{var inst_13197 = (state_13215[2]);var state_13215__$1 = state_13215;var statearr_13225_13252 = state_13215__$1;(statearr_13225_13252[2] = inst_13197);
(statearr_13225_13252[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13216 === 9))
{var inst_13179 = (state_13215[8]);var inst_13192 = (state_13215[2]);var inst_13193 = (inst_13179 + 1);var inst_13179__$1 = inst_13193;var state_13215__$1 = (function (){var statearr_13226 = state_13215;(statearr_13226[10] = inst_13192);
(statearr_13226[8] = inst_13179__$1);
return statearr_13226;
})();var statearr_13227_13253 = state_13215__$1;(statearr_13227_13253[2] = null);
(statearr_13227_13253[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13216 === 10))
{var inst_13183 = (state_13215[2]);var inst_13184 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13215__$1 = (function (){var statearr_13228 = state_13215;(statearr_13228[11] = inst_13183);
return statearr_13228;
})();var statearr_13229_13254 = state_13215__$1;(statearr_13229_13254[2] = inst_13184);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13215__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13216 === 11))
{var inst_13179 = (state_13215[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13215,10,Object,null,9);var inst_13188 = chs__$1.call(null,inst_13179);var inst_13189 = done.call(null,inst_13179);var inst_13190 = cljs.core.async.take_BANG_.call(null,inst_13188,inst_13189);var state_13215__$1 = state_13215;var statearr_13230_13255 = state_13215__$1;(statearr_13230_13255[2] = inst_13190);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13215__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13216 === 12))
{var inst_13201 = (state_13215[12]);var inst_13201__$1 = (state_13215[2]);var inst_13202 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13201__$1);var state_13215__$1 = (function (){var statearr_13231 = state_13215;(statearr_13231[12] = inst_13201__$1);
return statearr_13231;
})();if(cljs.core.truth_(inst_13202))
{var statearr_13232_13256 = state_13215__$1;(statearr_13232_13256[1] = 13);
} else
{var statearr_13233_13257 = state_13215__$1;(statearr_13233_13257[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13216 === 13))
{var inst_13204 = cljs.core.async.close_BANG_.call(null,out);var state_13215__$1 = state_13215;var statearr_13234_13258 = state_13215__$1;(statearr_13234_13258[2] = inst_13204);
(statearr_13234_13258[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13216 === 14))
{var inst_13201 = (state_13215[12]);var inst_13206 = cljs.core.apply.call(null,f,inst_13201);var state_13215__$1 = state_13215;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13215__$1,16,out,inst_13206);
} else
{if((state_val_13216 === 15))
{var inst_13211 = (state_13215[2]);var state_13215__$1 = state_13215;var statearr_13235_13259 = state_13215__$1;(statearr_13235_13259[2] = inst_13211);
(statearr_13235_13259[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13216 === 16))
{var inst_13208 = (state_13215[2]);var state_13215__$1 = (function (){var statearr_13236 = state_13215;(statearr_13236[13] = inst_13208);
return statearr_13236;
})();var statearr_13237_13260 = state_13215__$1;(statearr_13237_13260[2] = null);
(statearr_13237_13260[1] = 2);
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
});})(c__6335__auto___13245,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6320__auto__,c__6335__auto___13245,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6321__auto__ = null;
var state_machine__6321__auto____0 = (function (){var statearr_13241 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13241[0] = state_machine__6321__auto__);
(statearr_13241[1] = 1);
return statearr_13241;
});
var state_machine__6321__auto____1 = (function (state_13215){while(true){
var ret_value__6322__auto__ = (function (){try{while(true){
var result__6323__auto__ = switch__6320__auto__.call(null,state_13215);if(cljs.core.keyword_identical_QMARK_.call(null,result__6323__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6323__auto__;
}
break;
}
}catch (e13242){if((e13242 instanceof Object))
{var ex__6324__auto__ = e13242;var statearr_13243_13261 = state_13215;(statearr_13243_13261[5] = ex__6324__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13215);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13242;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6322__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13262 = state_13215;
state_13215 = G__13262;
continue;
}
} else
{return ret_value__6322__auto__;
}
break;
}
});
state_machine__6321__auto__ = function(state_13215){
switch(arguments.length){
case 0:
return state_machine__6321__auto____0.call(this);
case 1:
return state_machine__6321__auto____1.call(this,state_13215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6321__auto____0;
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6321__auto____1;
return state_machine__6321__auto__;
})()
;})(switch__6320__auto__,c__6335__auto___13245,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6337__auto__ = (function (){var statearr_13244 = f__6336__auto__.call(null);(statearr_13244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6335__auto___13245);
return statearr_13244;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6337__auto__);
});})(c__6335__auto___13245,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6335__auto___13370 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6335__auto___13370,out){
return (function (){var f__6336__auto__ = (function (){var switch__6320__auto__ = ((function (c__6335__auto___13370,out){
return (function (state_13346){var state_val_13347 = (state_13346[1]);if((state_val_13347 === 1))
{var inst_13317 = cljs.core.vec.call(null,chs);var inst_13318 = inst_13317;var state_13346__$1 = (function (){var statearr_13348 = state_13346;(statearr_13348[7] = inst_13318);
return statearr_13348;
})();var statearr_13349_13371 = state_13346__$1;(statearr_13349_13371[2] = null);
(statearr_13349_13371[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13347 === 2))
{var inst_13318 = (state_13346[7]);var inst_13320 = cljs.core.count.call(null,inst_13318);var inst_13321 = (inst_13320 > 0);var state_13346__$1 = state_13346;if(cljs.core.truth_(inst_13321))
{var statearr_13350_13372 = state_13346__$1;(statearr_13350_13372[1] = 4);
} else
{var statearr_13351_13373 = state_13346__$1;(statearr_13351_13373[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13347 === 3))
{var inst_13344 = (state_13346[2]);var state_13346__$1 = state_13346;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13346__$1,inst_13344);
} else
{if((state_val_13347 === 4))
{var inst_13318 = (state_13346[7]);var state_13346__$1 = state_13346;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13346__$1,7,inst_13318);
} else
{if((state_val_13347 === 5))
{var inst_13340 = cljs.core.async.close_BANG_.call(null,out);var state_13346__$1 = state_13346;var statearr_13352_13374 = state_13346__$1;(statearr_13352_13374[2] = inst_13340);
(statearr_13352_13374[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13347 === 6))
{var inst_13342 = (state_13346[2]);var state_13346__$1 = state_13346;var statearr_13353_13375 = state_13346__$1;(statearr_13353_13375[2] = inst_13342);
(statearr_13353_13375[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13347 === 7))
{var inst_13325 = (state_13346[8]);var inst_13326 = (state_13346[9]);var inst_13325__$1 = (state_13346[2]);var inst_13326__$1 = cljs.core.nth.call(null,inst_13325__$1,0,null);var inst_13327 = cljs.core.nth.call(null,inst_13325__$1,1,null);var inst_13328 = (inst_13326__$1 == null);var state_13346__$1 = (function (){var statearr_13354 = state_13346;(statearr_13354[8] = inst_13325__$1);
(statearr_13354[9] = inst_13326__$1);
(statearr_13354[10] = inst_13327);
return statearr_13354;
})();if(cljs.core.truth_(inst_13328))
{var statearr_13355_13376 = state_13346__$1;(statearr_13355_13376[1] = 8);
} else
{var statearr_13356_13377 = state_13346__$1;(statearr_13356_13377[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13347 === 8))
{var inst_13325 = (state_13346[8]);var inst_13318 = (state_13346[7]);var inst_13326 = (state_13346[9]);var inst_13327 = (state_13346[10]);var inst_13330 = (function (){var c = inst_13327;var v = inst_13326;var vec__13323 = inst_13325;var cs = inst_13318;return ((function (c,v,vec__13323,cs,inst_13325,inst_13318,inst_13326,inst_13327,state_val_13347,c__6335__auto___13370,out){
return (function (p1__13263_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13263_SHARP_);
});
;})(c,v,vec__13323,cs,inst_13325,inst_13318,inst_13326,inst_13327,state_val_13347,c__6335__auto___13370,out))
})();var inst_13331 = cljs.core.filterv.call(null,inst_13330,inst_13318);var inst_13318__$1 = inst_13331;var state_13346__$1 = (function (){var statearr_13357 = state_13346;(statearr_13357[7] = inst_13318__$1);
return statearr_13357;
})();var statearr_13358_13378 = state_13346__$1;(statearr_13358_13378[2] = null);
(statearr_13358_13378[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13347 === 9))
{var inst_13326 = (state_13346[9]);var state_13346__$1 = state_13346;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13346__$1,11,out,inst_13326);
} else
{if((state_val_13347 === 10))
{var inst_13338 = (state_13346[2]);var state_13346__$1 = state_13346;var statearr_13360_13379 = state_13346__$1;(statearr_13360_13379[2] = inst_13338);
(statearr_13360_13379[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13347 === 11))
{var inst_13318 = (state_13346[7]);var inst_13335 = (state_13346[2]);var tmp13359 = inst_13318;var inst_13318__$1 = tmp13359;var state_13346__$1 = (function (){var statearr_13361 = state_13346;(statearr_13361[7] = inst_13318__$1);
(statearr_13361[11] = inst_13335);
return statearr_13361;
})();var statearr_13362_13380 = state_13346__$1;(statearr_13362_13380[2] = null);
(statearr_13362_13380[1] = 2);
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
});})(c__6335__auto___13370,out))
;return ((function (switch__6320__auto__,c__6335__auto___13370,out){
return (function() {
var state_machine__6321__auto__ = null;
var state_machine__6321__auto____0 = (function (){var statearr_13366 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13366[0] = state_machine__6321__auto__);
(statearr_13366[1] = 1);
return statearr_13366;
});
var state_machine__6321__auto____1 = (function (state_13346){while(true){
var ret_value__6322__auto__ = (function (){try{while(true){
var result__6323__auto__ = switch__6320__auto__.call(null,state_13346);if(cljs.core.keyword_identical_QMARK_.call(null,result__6323__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6323__auto__;
}
break;
}
}catch (e13367){if((e13367 instanceof Object))
{var ex__6324__auto__ = e13367;var statearr_13368_13381 = state_13346;(statearr_13368_13381[5] = ex__6324__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13346);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13367;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6322__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13382 = state_13346;
state_13346 = G__13382;
continue;
}
} else
{return ret_value__6322__auto__;
}
break;
}
});
state_machine__6321__auto__ = function(state_13346){
switch(arguments.length){
case 0:
return state_machine__6321__auto____0.call(this);
case 1:
return state_machine__6321__auto____1.call(this,state_13346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6321__auto____0;
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6321__auto____1;
return state_machine__6321__auto__;
})()
;})(switch__6320__auto__,c__6335__auto___13370,out))
})();var state__6337__auto__ = (function (){var statearr_13369 = f__6336__auto__.call(null);(statearr_13369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6335__auto___13370);
return statearr_13369;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6337__auto__);
});})(c__6335__auto___13370,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6335__auto___13475 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6335__auto___13475,out){
return (function (){var f__6336__auto__ = (function (){var switch__6320__auto__ = ((function (c__6335__auto___13475,out){
return (function (state_13452){var state_val_13453 = (state_13452[1]);if((state_val_13453 === 1))
{var inst_13429 = 0;var state_13452__$1 = (function (){var statearr_13454 = state_13452;(statearr_13454[7] = inst_13429);
return statearr_13454;
})();var statearr_13455_13476 = state_13452__$1;(statearr_13455_13476[2] = null);
(statearr_13455_13476[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13453 === 2))
{var inst_13429 = (state_13452[7]);var inst_13431 = (inst_13429 < n);var state_13452__$1 = state_13452;if(cljs.core.truth_(inst_13431))
{var statearr_13456_13477 = state_13452__$1;(statearr_13456_13477[1] = 4);
} else
{var statearr_13457_13478 = state_13452__$1;(statearr_13457_13478[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13453 === 3))
{var inst_13449 = (state_13452[2]);var inst_13450 = cljs.core.async.close_BANG_.call(null,out);var state_13452__$1 = (function (){var statearr_13458 = state_13452;(statearr_13458[8] = inst_13449);
return statearr_13458;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13452__$1,inst_13450);
} else
{if((state_val_13453 === 4))
{var state_13452__$1 = state_13452;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13452__$1,7,ch);
} else
{if((state_val_13453 === 5))
{var state_13452__$1 = state_13452;var statearr_13459_13479 = state_13452__$1;(statearr_13459_13479[2] = null);
(statearr_13459_13479[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13453 === 6))
{var inst_13447 = (state_13452[2]);var state_13452__$1 = state_13452;var statearr_13460_13480 = state_13452__$1;(statearr_13460_13480[2] = inst_13447);
(statearr_13460_13480[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13453 === 7))
{var inst_13434 = (state_13452[9]);var inst_13434__$1 = (state_13452[2]);var inst_13435 = (inst_13434__$1 == null);var inst_13436 = cljs.core.not.call(null,inst_13435);var state_13452__$1 = (function (){var statearr_13461 = state_13452;(statearr_13461[9] = inst_13434__$1);
return statearr_13461;
})();if(inst_13436)
{var statearr_13462_13481 = state_13452__$1;(statearr_13462_13481[1] = 8);
} else
{var statearr_13463_13482 = state_13452__$1;(statearr_13463_13482[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13453 === 8))
{var inst_13434 = (state_13452[9]);var state_13452__$1 = state_13452;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13452__$1,11,out,inst_13434);
} else
{if((state_val_13453 === 9))
{var state_13452__$1 = state_13452;var statearr_13464_13483 = state_13452__$1;(statearr_13464_13483[2] = null);
(statearr_13464_13483[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13453 === 10))
{var inst_13444 = (state_13452[2]);var state_13452__$1 = state_13452;var statearr_13465_13484 = state_13452__$1;(statearr_13465_13484[2] = inst_13444);
(statearr_13465_13484[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13453 === 11))
{var inst_13429 = (state_13452[7]);var inst_13439 = (state_13452[2]);var inst_13440 = (inst_13429 + 1);var inst_13429__$1 = inst_13440;var state_13452__$1 = (function (){var statearr_13466 = state_13452;(statearr_13466[10] = inst_13439);
(statearr_13466[7] = inst_13429__$1);
return statearr_13466;
})();var statearr_13467_13485 = state_13452__$1;(statearr_13467_13485[2] = null);
(statearr_13467_13485[1] = 2);
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
});})(c__6335__auto___13475,out))
;return ((function (switch__6320__auto__,c__6335__auto___13475,out){
return (function() {
var state_machine__6321__auto__ = null;
var state_machine__6321__auto____0 = (function (){var statearr_13471 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13471[0] = state_machine__6321__auto__);
(statearr_13471[1] = 1);
return statearr_13471;
});
var state_machine__6321__auto____1 = (function (state_13452){while(true){
var ret_value__6322__auto__ = (function (){try{while(true){
var result__6323__auto__ = switch__6320__auto__.call(null,state_13452);if(cljs.core.keyword_identical_QMARK_.call(null,result__6323__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6323__auto__;
}
break;
}
}catch (e13472){if((e13472 instanceof Object))
{var ex__6324__auto__ = e13472;var statearr_13473_13486 = state_13452;(statearr_13473_13486[5] = ex__6324__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13452);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13472;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6322__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13487 = state_13452;
state_13452 = G__13487;
continue;
}
} else
{return ret_value__6322__auto__;
}
break;
}
});
state_machine__6321__auto__ = function(state_13452){
switch(arguments.length){
case 0:
return state_machine__6321__auto____0.call(this);
case 1:
return state_machine__6321__auto____1.call(this,state_13452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6321__auto____0;
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6321__auto____1;
return state_machine__6321__auto__;
})()
;})(switch__6320__auto__,c__6335__auto___13475,out))
})();var state__6337__auto__ = (function (){var statearr_13474 = f__6336__auto__.call(null);(statearr_13474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6335__auto___13475);
return statearr_13474;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6337__auto__);
});})(c__6335__auto___13475,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6335__auto___13584 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6335__auto___13584,out){
return (function (){var f__6336__auto__ = (function (){var switch__6320__auto__ = ((function (c__6335__auto___13584,out){
return (function (state_13559){var state_val_13560 = (state_13559[1]);if((state_val_13560 === 1))
{var inst_13536 = null;var state_13559__$1 = (function (){var statearr_13561 = state_13559;(statearr_13561[7] = inst_13536);
return statearr_13561;
})();var statearr_13562_13585 = state_13559__$1;(statearr_13562_13585[2] = null);
(statearr_13562_13585[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13560 === 2))
{var state_13559__$1 = state_13559;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13559__$1,4,ch);
} else
{if((state_val_13560 === 3))
{var inst_13556 = (state_13559[2]);var inst_13557 = cljs.core.async.close_BANG_.call(null,out);var state_13559__$1 = (function (){var statearr_13563 = state_13559;(statearr_13563[8] = inst_13556);
return statearr_13563;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13559__$1,inst_13557);
} else
{if((state_val_13560 === 4))
{var inst_13539 = (state_13559[9]);var inst_13539__$1 = (state_13559[2]);var inst_13540 = (inst_13539__$1 == null);var inst_13541 = cljs.core.not.call(null,inst_13540);var state_13559__$1 = (function (){var statearr_13564 = state_13559;(statearr_13564[9] = inst_13539__$1);
return statearr_13564;
})();if(inst_13541)
{var statearr_13565_13586 = state_13559__$1;(statearr_13565_13586[1] = 5);
} else
{var statearr_13566_13587 = state_13559__$1;(statearr_13566_13587[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13560 === 5))
{var inst_13539 = (state_13559[9]);var inst_13536 = (state_13559[7]);var inst_13543 = cljs.core._EQ_.call(null,inst_13539,inst_13536);var state_13559__$1 = state_13559;if(inst_13543)
{var statearr_13567_13588 = state_13559__$1;(statearr_13567_13588[1] = 8);
} else
{var statearr_13568_13589 = state_13559__$1;(statearr_13568_13589[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13560 === 6))
{var state_13559__$1 = state_13559;var statearr_13570_13590 = state_13559__$1;(statearr_13570_13590[2] = null);
(statearr_13570_13590[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13560 === 7))
{var inst_13554 = (state_13559[2]);var state_13559__$1 = state_13559;var statearr_13571_13591 = state_13559__$1;(statearr_13571_13591[2] = inst_13554);
(statearr_13571_13591[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13560 === 8))
{var inst_13536 = (state_13559[7]);var tmp13569 = inst_13536;var inst_13536__$1 = tmp13569;var state_13559__$1 = (function (){var statearr_13572 = state_13559;(statearr_13572[7] = inst_13536__$1);
return statearr_13572;
})();var statearr_13573_13592 = state_13559__$1;(statearr_13573_13592[2] = null);
(statearr_13573_13592[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13560 === 9))
{var inst_13539 = (state_13559[9]);var state_13559__$1 = state_13559;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13559__$1,11,out,inst_13539);
} else
{if((state_val_13560 === 10))
{var inst_13551 = (state_13559[2]);var state_13559__$1 = state_13559;var statearr_13574_13593 = state_13559__$1;(statearr_13574_13593[2] = inst_13551);
(statearr_13574_13593[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13560 === 11))
{var inst_13539 = (state_13559[9]);var inst_13548 = (state_13559[2]);var inst_13536 = inst_13539;var state_13559__$1 = (function (){var statearr_13575 = state_13559;(statearr_13575[10] = inst_13548);
(statearr_13575[7] = inst_13536);
return statearr_13575;
})();var statearr_13576_13594 = state_13559__$1;(statearr_13576_13594[2] = null);
(statearr_13576_13594[1] = 2);
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
});})(c__6335__auto___13584,out))
;return ((function (switch__6320__auto__,c__6335__auto___13584,out){
return (function() {
var state_machine__6321__auto__ = null;
var state_machine__6321__auto____0 = (function (){var statearr_13580 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13580[0] = state_machine__6321__auto__);
(statearr_13580[1] = 1);
return statearr_13580;
});
var state_machine__6321__auto____1 = (function (state_13559){while(true){
var ret_value__6322__auto__ = (function (){try{while(true){
var result__6323__auto__ = switch__6320__auto__.call(null,state_13559);if(cljs.core.keyword_identical_QMARK_.call(null,result__6323__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6323__auto__;
}
break;
}
}catch (e13581){if((e13581 instanceof Object))
{var ex__6324__auto__ = e13581;var statearr_13582_13595 = state_13559;(statearr_13582_13595[5] = ex__6324__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13559);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13581;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6322__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13596 = state_13559;
state_13559 = G__13596;
continue;
}
} else
{return ret_value__6322__auto__;
}
break;
}
});
state_machine__6321__auto__ = function(state_13559){
switch(arguments.length){
case 0:
return state_machine__6321__auto____0.call(this);
case 1:
return state_machine__6321__auto____1.call(this,state_13559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6321__auto____0;
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6321__auto____1;
return state_machine__6321__auto__;
})()
;})(switch__6320__auto__,c__6335__auto___13584,out))
})();var state__6337__auto__ = (function (){var statearr_13583 = f__6336__auto__.call(null);(statearr_13583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6335__auto___13584);
return statearr_13583;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6337__auto__);
});})(c__6335__auto___13584,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6335__auto___13731 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6335__auto___13731,out){
return (function (){var f__6336__auto__ = (function (){var switch__6320__auto__ = ((function (c__6335__auto___13731,out){
return (function (state_13701){var state_val_13702 = (state_13701[1]);if((state_val_13702 === 1))
{var inst_13664 = (new Array(n));var inst_13665 = inst_13664;var inst_13666 = 0;var state_13701__$1 = (function (){var statearr_13703 = state_13701;(statearr_13703[7] = inst_13666);
(statearr_13703[8] = inst_13665);
return statearr_13703;
})();var statearr_13704_13732 = state_13701__$1;(statearr_13704_13732[2] = null);
(statearr_13704_13732[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13702 === 2))
{var state_13701__$1 = state_13701;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13701__$1,4,ch);
} else
{if((state_val_13702 === 3))
{var inst_13699 = (state_13701[2]);var state_13701__$1 = state_13701;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13701__$1,inst_13699);
} else
{if((state_val_13702 === 4))
{var inst_13669 = (state_13701[9]);var inst_13669__$1 = (state_13701[2]);var inst_13670 = (inst_13669__$1 == null);var inst_13671 = cljs.core.not.call(null,inst_13670);var state_13701__$1 = (function (){var statearr_13705 = state_13701;(statearr_13705[9] = inst_13669__$1);
return statearr_13705;
})();if(inst_13671)
{var statearr_13706_13733 = state_13701__$1;(statearr_13706_13733[1] = 5);
} else
{var statearr_13707_13734 = state_13701__$1;(statearr_13707_13734[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13702 === 5))
{var inst_13669 = (state_13701[9]);var inst_13674 = (state_13701[10]);var inst_13666 = (state_13701[7]);var inst_13665 = (state_13701[8]);var inst_13673 = (inst_13665[inst_13666] = inst_13669);var inst_13674__$1 = (inst_13666 + 1);var inst_13675 = (inst_13674__$1 < n);var state_13701__$1 = (function (){var statearr_13708 = state_13701;(statearr_13708[11] = inst_13673);
(statearr_13708[10] = inst_13674__$1);
return statearr_13708;
})();if(cljs.core.truth_(inst_13675))
{var statearr_13709_13735 = state_13701__$1;(statearr_13709_13735[1] = 8);
} else
{var statearr_13710_13736 = state_13701__$1;(statearr_13710_13736[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13702 === 6))
{var inst_13666 = (state_13701[7]);var inst_13687 = (inst_13666 > 0);var state_13701__$1 = state_13701;if(cljs.core.truth_(inst_13687))
{var statearr_13712_13737 = state_13701__$1;(statearr_13712_13737[1] = 12);
} else
{var statearr_13713_13738 = state_13701__$1;(statearr_13713_13738[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13702 === 7))
{var inst_13697 = (state_13701[2]);var state_13701__$1 = state_13701;var statearr_13714_13739 = state_13701__$1;(statearr_13714_13739[2] = inst_13697);
(statearr_13714_13739[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13702 === 8))
{var inst_13674 = (state_13701[10]);var inst_13665 = (state_13701[8]);var tmp13711 = inst_13665;var inst_13665__$1 = tmp13711;var inst_13666 = inst_13674;var state_13701__$1 = (function (){var statearr_13715 = state_13701;(statearr_13715[7] = inst_13666);
(statearr_13715[8] = inst_13665__$1);
return statearr_13715;
})();var statearr_13716_13740 = state_13701__$1;(statearr_13716_13740[2] = null);
(statearr_13716_13740[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13702 === 9))
{var inst_13665 = (state_13701[8]);var inst_13679 = cljs.core.vec.call(null,inst_13665);var state_13701__$1 = state_13701;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13701__$1,11,out,inst_13679);
} else
{if((state_val_13702 === 10))
{var inst_13685 = (state_13701[2]);var state_13701__$1 = state_13701;var statearr_13717_13741 = state_13701__$1;(statearr_13717_13741[2] = inst_13685);
(statearr_13717_13741[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13702 === 11))
{var inst_13681 = (state_13701[2]);var inst_13682 = (new Array(n));var inst_13665 = inst_13682;var inst_13666 = 0;var state_13701__$1 = (function (){var statearr_13718 = state_13701;(statearr_13718[12] = inst_13681);
(statearr_13718[7] = inst_13666);
(statearr_13718[8] = inst_13665);
return statearr_13718;
})();var statearr_13719_13742 = state_13701__$1;(statearr_13719_13742[2] = null);
(statearr_13719_13742[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13702 === 12))
{var inst_13665 = (state_13701[8]);var inst_13689 = cljs.core.vec.call(null,inst_13665);var state_13701__$1 = state_13701;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13701__$1,15,out,inst_13689);
} else
{if((state_val_13702 === 13))
{var state_13701__$1 = state_13701;var statearr_13720_13743 = state_13701__$1;(statearr_13720_13743[2] = null);
(statearr_13720_13743[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13702 === 14))
{var inst_13694 = (state_13701[2]);var inst_13695 = cljs.core.async.close_BANG_.call(null,out);var state_13701__$1 = (function (){var statearr_13721 = state_13701;(statearr_13721[13] = inst_13694);
return statearr_13721;
})();var statearr_13722_13744 = state_13701__$1;(statearr_13722_13744[2] = inst_13695);
(statearr_13722_13744[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13702 === 15))
{var inst_13691 = (state_13701[2]);var state_13701__$1 = state_13701;var statearr_13723_13745 = state_13701__$1;(statearr_13723_13745[2] = inst_13691);
(statearr_13723_13745[1] = 14);
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
});})(c__6335__auto___13731,out))
;return ((function (switch__6320__auto__,c__6335__auto___13731,out){
return (function() {
var state_machine__6321__auto__ = null;
var state_machine__6321__auto____0 = (function (){var statearr_13727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13727[0] = state_machine__6321__auto__);
(statearr_13727[1] = 1);
return statearr_13727;
});
var state_machine__6321__auto____1 = (function (state_13701){while(true){
var ret_value__6322__auto__ = (function (){try{while(true){
var result__6323__auto__ = switch__6320__auto__.call(null,state_13701);if(cljs.core.keyword_identical_QMARK_.call(null,result__6323__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6323__auto__;
}
break;
}
}catch (e13728){if((e13728 instanceof Object))
{var ex__6324__auto__ = e13728;var statearr_13729_13746 = state_13701;(statearr_13729_13746[5] = ex__6324__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13701);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13728;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6322__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13747 = state_13701;
state_13701 = G__13747;
continue;
}
} else
{return ret_value__6322__auto__;
}
break;
}
});
state_machine__6321__auto__ = function(state_13701){
switch(arguments.length){
case 0:
return state_machine__6321__auto____0.call(this);
case 1:
return state_machine__6321__auto____1.call(this,state_13701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6321__auto____0;
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6321__auto____1;
return state_machine__6321__auto__;
})()
;})(switch__6320__auto__,c__6335__auto___13731,out))
})();var state__6337__auto__ = (function (){var statearr_13730 = f__6336__auto__.call(null);(statearr_13730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6335__auto___13731);
return statearr_13730;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6337__auto__);
});})(c__6335__auto___13731,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6335__auto___13890 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6335__auto___13890,out){
return (function (){var f__6336__auto__ = (function (){var switch__6320__auto__ = ((function (c__6335__auto___13890,out){
return (function (state_13860){var state_val_13861 = (state_13860[1]);if((state_val_13861 === 1))
{var inst_13819 = [];var inst_13820 = inst_13819;var inst_13821 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13860__$1 = (function (){var statearr_13862 = state_13860;(statearr_13862[7] = inst_13821);
(statearr_13862[8] = inst_13820);
return statearr_13862;
})();var statearr_13863_13891 = state_13860__$1;(statearr_13863_13891[2] = null);
(statearr_13863_13891[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13861 === 2))
{var state_13860__$1 = state_13860;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13860__$1,4,ch);
} else
{if((state_val_13861 === 3))
{var inst_13858 = (state_13860[2]);var state_13860__$1 = state_13860;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13860__$1,inst_13858);
} else
{if((state_val_13861 === 4))
{var inst_13824 = (state_13860[9]);var inst_13824__$1 = (state_13860[2]);var inst_13825 = (inst_13824__$1 == null);var inst_13826 = cljs.core.not.call(null,inst_13825);var state_13860__$1 = (function (){var statearr_13864 = state_13860;(statearr_13864[9] = inst_13824__$1);
return statearr_13864;
})();if(inst_13826)
{var statearr_13865_13892 = state_13860__$1;(statearr_13865_13892[1] = 5);
} else
{var statearr_13866_13893 = state_13860__$1;(statearr_13866_13893[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13861 === 5))
{var inst_13821 = (state_13860[7]);var inst_13824 = (state_13860[9]);var inst_13828 = (state_13860[10]);var inst_13828__$1 = f.call(null,inst_13824);var inst_13829 = cljs.core._EQ_.call(null,inst_13828__$1,inst_13821);var inst_13830 = cljs.core.keyword_identical_QMARK_.call(null,inst_13821,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13831 = (inst_13829) || (inst_13830);var state_13860__$1 = (function (){var statearr_13867 = state_13860;(statearr_13867[10] = inst_13828__$1);
return statearr_13867;
})();if(cljs.core.truth_(inst_13831))
{var statearr_13868_13894 = state_13860__$1;(statearr_13868_13894[1] = 8);
} else
{var statearr_13869_13895 = state_13860__$1;(statearr_13869_13895[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13861 === 6))
{var inst_13820 = (state_13860[8]);var inst_13845 = inst_13820.length;var inst_13846 = (inst_13845 > 0);var state_13860__$1 = state_13860;if(cljs.core.truth_(inst_13846))
{var statearr_13871_13896 = state_13860__$1;(statearr_13871_13896[1] = 12);
} else
{var statearr_13872_13897 = state_13860__$1;(statearr_13872_13897[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13861 === 7))
{var inst_13856 = (state_13860[2]);var state_13860__$1 = state_13860;var statearr_13873_13898 = state_13860__$1;(statearr_13873_13898[2] = inst_13856);
(statearr_13873_13898[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13861 === 8))
{var inst_13824 = (state_13860[9]);var inst_13828 = (state_13860[10]);var inst_13820 = (state_13860[8]);var inst_13833 = inst_13820.push(inst_13824);var tmp13870 = inst_13820;var inst_13820__$1 = tmp13870;var inst_13821 = inst_13828;var state_13860__$1 = (function (){var statearr_13874 = state_13860;(statearr_13874[11] = inst_13833);
(statearr_13874[7] = inst_13821);
(statearr_13874[8] = inst_13820__$1);
return statearr_13874;
})();var statearr_13875_13899 = state_13860__$1;(statearr_13875_13899[2] = null);
(statearr_13875_13899[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13861 === 9))
{var inst_13820 = (state_13860[8]);var inst_13836 = cljs.core.vec.call(null,inst_13820);var state_13860__$1 = state_13860;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13860__$1,11,out,inst_13836);
} else
{if((state_val_13861 === 10))
{var inst_13843 = (state_13860[2]);var state_13860__$1 = state_13860;var statearr_13876_13900 = state_13860__$1;(statearr_13876_13900[2] = inst_13843);
(statearr_13876_13900[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13861 === 11))
{var inst_13824 = (state_13860[9]);var inst_13828 = (state_13860[10]);var inst_13838 = (state_13860[2]);var inst_13839 = [];var inst_13840 = inst_13839.push(inst_13824);var inst_13820 = inst_13839;var inst_13821 = inst_13828;var state_13860__$1 = (function (){var statearr_13877 = state_13860;(statearr_13877[12] = inst_13840);
(statearr_13877[7] = inst_13821);
(statearr_13877[8] = inst_13820);
(statearr_13877[13] = inst_13838);
return statearr_13877;
})();var statearr_13878_13901 = state_13860__$1;(statearr_13878_13901[2] = null);
(statearr_13878_13901[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13861 === 12))
{var inst_13820 = (state_13860[8]);var inst_13848 = cljs.core.vec.call(null,inst_13820);var state_13860__$1 = state_13860;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13860__$1,15,out,inst_13848);
} else
{if((state_val_13861 === 13))
{var state_13860__$1 = state_13860;var statearr_13879_13902 = state_13860__$1;(statearr_13879_13902[2] = null);
(statearr_13879_13902[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13861 === 14))
{var inst_13853 = (state_13860[2]);var inst_13854 = cljs.core.async.close_BANG_.call(null,out);var state_13860__$1 = (function (){var statearr_13880 = state_13860;(statearr_13880[14] = inst_13853);
return statearr_13880;
})();var statearr_13881_13903 = state_13860__$1;(statearr_13881_13903[2] = inst_13854);
(statearr_13881_13903[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13861 === 15))
{var inst_13850 = (state_13860[2]);var state_13860__$1 = state_13860;var statearr_13882_13904 = state_13860__$1;(statearr_13882_13904[2] = inst_13850);
(statearr_13882_13904[1] = 14);
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
});})(c__6335__auto___13890,out))
;return ((function (switch__6320__auto__,c__6335__auto___13890,out){
return (function() {
var state_machine__6321__auto__ = null;
var state_machine__6321__auto____0 = (function (){var statearr_13886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13886[0] = state_machine__6321__auto__);
(statearr_13886[1] = 1);
return statearr_13886;
});
var state_machine__6321__auto____1 = (function (state_13860){while(true){
var ret_value__6322__auto__ = (function (){try{while(true){
var result__6323__auto__ = switch__6320__auto__.call(null,state_13860);if(cljs.core.keyword_identical_QMARK_.call(null,result__6323__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6323__auto__;
}
break;
}
}catch (e13887){if((e13887 instanceof Object))
{var ex__6324__auto__ = e13887;var statearr_13888_13905 = state_13860;(statearr_13888_13905[5] = ex__6324__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13860);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13887;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6322__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13906 = state_13860;
state_13860 = G__13906;
continue;
}
} else
{return ret_value__6322__auto__;
}
break;
}
});
state_machine__6321__auto__ = function(state_13860){
switch(arguments.length){
case 0:
return state_machine__6321__auto____0.call(this);
case 1:
return state_machine__6321__auto____1.call(this,state_13860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6321__auto____0;
state_machine__6321__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6321__auto____1;
return state_machine__6321__auto__;
})()
;})(switch__6320__auto__,c__6335__auto___13890,out))
})();var state__6337__auto__ = (function (){var statearr_13889 = f__6336__auto__.call(null);(statearr_13889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6335__auto___13890);
return statearr_13889;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6337__auto__);
});})(c__6335__auto___13890,out))
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