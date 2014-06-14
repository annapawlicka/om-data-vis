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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11396 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11396 = (function (f,fn_handler,meta11397){
this.f = f;
this.fn_handler = fn_handler;
this.meta11397 = meta11397;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11396.cljs$lang$type = true;
cljs.core.async.t11396.cljs$lang$ctorStr = "cljs.core.async/t11396";
cljs.core.async.t11396.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t11396");
});
cljs.core.async.t11396.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11396.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11396.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11398){var self__ = this;
var _11398__$1 = this;return self__.meta11397;
});
cljs.core.async.t11396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11398,meta11397__$1){var self__ = this;
var _11398__$1 = this;return (new cljs.core.async.t11396(self__.f,self__.fn_handler,meta11397__$1));
});
cljs.core.async.__GT_t11396 = (function __GT_t11396(f__$1,fn_handler__$1,meta11397){return (new cljs.core.async.t11396(f__$1,fn_handler__$1,meta11397));
});
}
return (new cljs.core.async.t11396(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11400 = buff;if(G__11400)
{var bit__4191__auto__ = null;if(cljs.core.truth_((function (){var or__3541__auto__ = bit__4191__auto__;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return G__11400.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11400.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11400);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11400);
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
{var val_11401 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11401);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11401,ret){
return (function (){return fn1.call(null,val_11401);
});})(val_11401,ret))
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3529__auto__ = ret;if(cljs.core.truth_(and__3529__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3529__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4397__auto___11402 = n;var x_11403 = 0;while(true){
if((x_11403 < n__4397__auto___11402))
{(a[x_11403] = 0);
{
var G__11404 = (x_11403 + 1);
x_11403 = G__11404;
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
var G__11405 = (i + 1);
i = G__11405;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11409 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11409 = (function (flag,alt_flag,meta11410){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11410 = meta11410;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11409.cljs$lang$type = true;
cljs.core.async.t11409.cljs$lang$ctorStr = "cljs.core.async/t11409";
cljs.core.async.t11409.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t11409");
});})(flag))
;
cljs.core.async.t11409.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11409.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11409.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11409.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11411){var self__ = this;
var _11411__$1 = this;return self__.meta11410;
});})(flag))
;
cljs.core.async.t11409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11411,meta11410__$1){var self__ = this;
var _11411__$1 = this;return (new cljs.core.async.t11409(self__.flag,self__.alt_flag,meta11410__$1));
});})(flag))
;
cljs.core.async.__GT_t11409 = ((function (flag){
return (function __GT_t11409(flag__$1,alt_flag__$1,meta11410){return (new cljs.core.async.t11409(flag__$1,alt_flag__$1,meta11410));
});})(flag))
;
}
return (new cljs.core.async.t11409(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11415 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11415 = (function (cb,flag,alt_handler,meta11416){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11416 = meta11416;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11415.cljs$lang$type = true;
cljs.core.async.t11415.cljs$lang$ctorStr = "cljs.core.async/t11415";
cljs.core.async.t11415.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t11415");
});
cljs.core.async.t11415.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11415.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11415.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11415.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11417){var self__ = this;
var _11417__$1 = this;return self__.meta11416;
});
cljs.core.async.t11415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11417,meta11416__$1){var self__ = this;
var _11417__$1 = this;return (new cljs.core.async.t11415(self__.cb,self__.flag,self__.alt_handler,meta11416__$1));
});
cljs.core.async.__GT_t11415 = (function __GT_t11415(cb__$1,flag__$1,alt_handler__$1,meta11416){return (new cljs.core.async.t11415(cb__$1,flag__$1,alt_handler__$1,meta11416));
});
}
return (new cljs.core.async.t11415(cb,flag,alt_handler,null));
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
return (function (p1__11418_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11418_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3541__auto__ = wport;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11419 = (i + 1);
i = G__11419;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3541__auto__ = ret;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3529__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3529__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3529__auto__;
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
var alts_BANG___delegate = function (ports,p__11420){var map__11422 = p__11420;var map__11422__$1 = ((cljs.core.seq_QMARK_.call(null,map__11422))?cljs.core.apply.call(null,cljs.core.hash_map,map__11422):map__11422);var opts = map__11422__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11420 = null;if (arguments.length > 1) {
  p__11420 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11420);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11423){
var ports = cljs.core.first(arglist__11423);
var p__11420 = cljs.core.rest(arglist__11423);
return alts_BANG___delegate(ports,p__11420);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11431 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11431 = (function (ch,f,map_LT_,meta11432){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11432 = meta11432;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11431.cljs$lang$type = true;
cljs.core.async.t11431.cljs$lang$ctorStr = "cljs.core.async/t11431";
cljs.core.async.t11431.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t11431");
});
cljs.core.async.t11431.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11431.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11431.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11431.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11434 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11434 = (function (fn1,_,meta11432,ch,f,map_LT_,meta11435){
this.fn1 = fn1;
this._ = _;
this.meta11432 = meta11432;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11435 = meta11435;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11434.cljs$lang$type = true;
cljs.core.async.t11434.cljs$lang$ctorStr = "cljs.core.async/t11434";
cljs.core.async.t11434.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t11434");
});})(___$1))
;
cljs.core.async.t11434.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11434.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11434.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11434.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__11424_SHARP_){return f1.call(null,(((p1__11424_SHARP_ == null))?null:self__.f.call(null,p1__11424_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t11434.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11436){var self__ = this;
var _11436__$1 = this;return self__.meta11435;
});})(___$1))
;
cljs.core.async.t11434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11436,meta11435__$1){var self__ = this;
var _11436__$1 = this;return (new cljs.core.async.t11434(self__.fn1,self__._,self__.meta11432,self__.ch,self__.f,self__.map_LT_,meta11435__$1));
});})(___$1))
;
cljs.core.async.__GT_t11434 = ((function (___$1){
return (function __GT_t11434(fn1__$1,___$2,meta11432__$1,ch__$2,f__$2,map_LT___$2,meta11435){return (new cljs.core.async.t11434(fn1__$1,___$2,meta11432__$1,ch__$2,f__$2,map_LT___$2,meta11435));
});})(___$1))
;
}
return (new cljs.core.async.t11434(fn1,___$1,self__.meta11432,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3529__auto__ = ret;if(cljs.core.truth_(and__3529__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3529__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11431.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11431.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11433){var self__ = this;
var _11433__$1 = this;return self__.meta11432;
});
cljs.core.async.t11431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11433,meta11432__$1){var self__ = this;
var _11433__$1 = this;return (new cljs.core.async.t11431(self__.ch,self__.f,self__.map_LT_,meta11432__$1));
});
cljs.core.async.__GT_t11431 = (function __GT_t11431(ch__$1,f__$1,map_LT___$1,meta11432){return (new cljs.core.async.t11431(ch__$1,f__$1,map_LT___$1,meta11432));
});
}
return (new cljs.core.async.t11431(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11440 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11440 = (function (ch,f,map_GT_,meta11441){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11441 = meta11441;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11440.cljs$lang$type = true;
cljs.core.async.t11440.cljs$lang$ctorStr = "cljs.core.async/t11440";
cljs.core.async.t11440.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t11440");
});
cljs.core.async.t11440.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11440.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11440.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11440.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11440.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11440.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11442){var self__ = this;
var _11442__$1 = this;return self__.meta11441;
});
cljs.core.async.t11440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11442,meta11441__$1){var self__ = this;
var _11442__$1 = this;return (new cljs.core.async.t11440(self__.ch,self__.f,self__.map_GT_,meta11441__$1));
});
cljs.core.async.__GT_t11440 = (function __GT_t11440(ch__$1,f__$1,map_GT___$1,meta11441){return (new cljs.core.async.t11440(ch__$1,f__$1,map_GT___$1,meta11441));
});
}
return (new cljs.core.async.t11440(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11446 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11446 = (function (ch,p,filter_GT_,meta11447){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11447 = meta11447;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11446.cljs$lang$type = true;
cljs.core.async.t11446.cljs$lang$ctorStr = "cljs.core.async/t11446";
cljs.core.async.t11446.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t11446");
});
cljs.core.async.t11446.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11446.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11446.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11446.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11446.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11446.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11448){var self__ = this;
var _11448__$1 = this;return self__.meta11447;
});
cljs.core.async.t11446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11448,meta11447__$1){var self__ = this;
var _11448__$1 = this;return (new cljs.core.async.t11446(self__.ch,self__.p,self__.filter_GT_,meta11447__$1));
});
cljs.core.async.__GT_t11446 = (function __GT_t11446(ch__$1,p__$1,filter_GT___$1,meta11447){return (new cljs.core.async.t11446(ch__$1,p__$1,filter_GT___$1,meta11447));
});
}
return (new cljs.core.async.t11446(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6319__auto___11531 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6319__auto___11531,out){
return (function (){var f__6320__auto__ = (function (){var switch__6304__auto__ = ((function (c__6319__auto___11531,out){
return (function (state_11510){var state_val_11511 = (state_11510[1]);if((state_val_11511 === 1))
{var state_11510__$1 = state_11510;var statearr_11512_11532 = state_11510__$1;(statearr_11512_11532[2] = null);
(statearr_11512_11532[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11511 === 2))
{var state_11510__$1 = state_11510;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11510__$1,4,ch);
} else
{if((state_val_11511 === 3))
{var inst_11508 = (state_11510[2]);var state_11510__$1 = state_11510;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11510__$1,inst_11508);
} else
{if((state_val_11511 === 4))
{var inst_11492 = (state_11510[7]);var inst_11492__$1 = (state_11510[2]);var inst_11493 = (inst_11492__$1 == null);var state_11510__$1 = (function (){var statearr_11513 = state_11510;(statearr_11513[7] = inst_11492__$1);
return statearr_11513;
})();if(cljs.core.truth_(inst_11493))
{var statearr_11514_11533 = state_11510__$1;(statearr_11514_11533[1] = 5);
} else
{var statearr_11515_11534 = state_11510__$1;(statearr_11515_11534[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11511 === 5))
{var inst_11495 = cljs.core.async.close_BANG_.call(null,out);var state_11510__$1 = state_11510;var statearr_11516_11535 = state_11510__$1;(statearr_11516_11535[2] = inst_11495);
(statearr_11516_11535[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11511 === 6))
{var inst_11492 = (state_11510[7]);var inst_11497 = p.call(null,inst_11492);var state_11510__$1 = state_11510;if(cljs.core.truth_(inst_11497))
{var statearr_11517_11536 = state_11510__$1;(statearr_11517_11536[1] = 8);
} else
{var statearr_11518_11537 = state_11510__$1;(statearr_11518_11537[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11511 === 7))
{var inst_11506 = (state_11510[2]);var state_11510__$1 = state_11510;var statearr_11519_11538 = state_11510__$1;(statearr_11519_11538[2] = inst_11506);
(statearr_11519_11538[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11511 === 8))
{var inst_11492 = (state_11510[7]);var state_11510__$1 = state_11510;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11510__$1,11,out,inst_11492);
} else
{if((state_val_11511 === 9))
{var state_11510__$1 = state_11510;var statearr_11520_11539 = state_11510__$1;(statearr_11520_11539[2] = null);
(statearr_11520_11539[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11511 === 10))
{var inst_11503 = (state_11510[2]);var state_11510__$1 = (function (){var statearr_11521 = state_11510;(statearr_11521[8] = inst_11503);
return statearr_11521;
})();var statearr_11522_11540 = state_11510__$1;(statearr_11522_11540[2] = null);
(statearr_11522_11540[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11511 === 11))
{var inst_11500 = (state_11510[2]);var state_11510__$1 = state_11510;var statearr_11523_11541 = state_11510__$1;(statearr_11523_11541[2] = inst_11500);
(statearr_11523_11541[1] = 10);
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
});})(c__6319__auto___11531,out))
;return ((function (switch__6304__auto__,c__6319__auto___11531,out){
return (function() {
var state_machine__6305__auto__ = null;
var state_machine__6305__auto____0 = (function (){var statearr_11527 = [null,null,null,null,null,null,null,null,null];(statearr_11527[0] = state_machine__6305__auto__);
(statearr_11527[1] = 1);
return statearr_11527;
});
var state_machine__6305__auto____1 = (function (state_11510){while(true){
var ret_value__6306__auto__ = (function (){try{while(true){
var result__6307__auto__ = switch__6304__auto__.call(null,state_11510);if(cljs.core.keyword_identical_QMARK_.call(null,result__6307__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6307__auto__;
}
break;
}
}catch (e11528){if((e11528 instanceof Object))
{var ex__6308__auto__ = e11528;var statearr_11529_11542 = state_11510;(statearr_11529_11542[5] = ex__6308__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11510);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11528;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6306__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11543 = state_11510;
state_11510 = G__11543;
continue;
}
} else
{return ret_value__6306__auto__;
}
break;
}
});
state_machine__6305__auto__ = function(state_11510){
switch(arguments.length){
case 0:
return state_machine__6305__auto____0.call(this);
case 1:
return state_machine__6305__auto____1.call(this,state_11510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6305__auto____0;
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6305__auto____1;
return state_machine__6305__auto__;
})()
;})(switch__6304__auto__,c__6319__auto___11531,out))
})();var state__6321__auto__ = (function (){var statearr_11530 = f__6320__auto__.call(null);(statearr_11530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6319__auto___11531);
return statearr_11530;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6321__auto__);
});})(c__6319__auto___11531,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6319__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6319__auto__){
return (function (){var f__6320__auto__ = (function (){var switch__6304__auto__ = ((function (c__6319__auto__){
return (function (state_11695){var state_val_11696 = (state_11695[1]);if((state_val_11696 === 1))
{var state_11695__$1 = state_11695;var statearr_11697_11734 = state_11695__$1;(statearr_11697_11734[2] = null);
(statearr_11697_11734[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 2))
{var state_11695__$1 = state_11695;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11695__$1,4,in$);
} else
{if((state_val_11696 === 3))
{var inst_11693 = (state_11695[2]);var state_11695__$1 = state_11695;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11695__$1,inst_11693);
} else
{if((state_val_11696 === 4))
{var inst_11641 = (state_11695[7]);var inst_11641__$1 = (state_11695[2]);var inst_11642 = (inst_11641__$1 == null);var state_11695__$1 = (function (){var statearr_11698 = state_11695;(statearr_11698[7] = inst_11641__$1);
return statearr_11698;
})();if(cljs.core.truth_(inst_11642))
{var statearr_11699_11735 = state_11695__$1;(statearr_11699_11735[1] = 5);
} else
{var statearr_11700_11736 = state_11695__$1;(statearr_11700_11736[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 5))
{var inst_11644 = cljs.core.async.close_BANG_.call(null,out);var state_11695__$1 = state_11695;var statearr_11701_11737 = state_11695__$1;(statearr_11701_11737[2] = inst_11644);
(statearr_11701_11737[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 6))
{var inst_11641 = (state_11695[7]);var inst_11646 = f.call(null,inst_11641);var inst_11651 = cljs.core.seq.call(null,inst_11646);var inst_11652 = inst_11651;var inst_11653 = null;var inst_11654 = 0;var inst_11655 = 0;var state_11695__$1 = (function (){var statearr_11702 = state_11695;(statearr_11702[8] = inst_11654);
(statearr_11702[9] = inst_11655);
(statearr_11702[10] = inst_11653);
(statearr_11702[11] = inst_11652);
return statearr_11702;
})();var statearr_11703_11738 = state_11695__$1;(statearr_11703_11738[2] = null);
(statearr_11703_11738[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 7))
{var inst_11691 = (state_11695[2]);var state_11695__$1 = state_11695;var statearr_11704_11739 = state_11695__$1;(statearr_11704_11739[2] = inst_11691);
(statearr_11704_11739[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 8))
{var inst_11654 = (state_11695[8]);var inst_11655 = (state_11695[9]);var inst_11657 = (inst_11655 < inst_11654);var inst_11658 = inst_11657;var state_11695__$1 = state_11695;if(cljs.core.truth_(inst_11658))
{var statearr_11705_11740 = state_11695__$1;(statearr_11705_11740[1] = 10);
} else
{var statearr_11706_11741 = state_11695__$1;(statearr_11706_11741[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 9))
{var inst_11688 = (state_11695[2]);var state_11695__$1 = (function (){var statearr_11707 = state_11695;(statearr_11707[12] = inst_11688);
return statearr_11707;
})();var statearr_11708_11742 = state_11695__$1;(statearr_11708_11742[2] = null);
(statearr_11708_11742[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 10))
{var inst_11655 = (state_11695[9]);var inst_11653 = (state_11695[10]);var inst_11660 = cljs.core._nth.call(null,inst_11653,inst_11655);var state_11695__$1 = state_11695;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11695__$1,13,out,inst_11660);
} else
{if((state_val_11696 === 11))
{var inst_11652 = (state_11695[11]);var inst_11666 = (state_11695[13]);var inst_11666__$1 = cljs.core.seq.call(null,inst_11652);var state_11695__$1 = (function (){var statearr_11712 = state_11695;(statearr_11712[13] = inst_11666__$1);
return statearr_11712;
})();if(inst_11666__$1)
{var statearr_11713_11743 = state_11695__$1;(statearr_11713_11743[1] = 14);
} else
{var statearr_11714_11744 = state_11695__$1;(statearr_11714_11744[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 12))
{var inst_11686 = (state_11695[2]);var state_11695__$1 = state_11695;var statearr_11715_11745 = state_11695__$1;(statearr_11715_11745[2] = inst_11686);
(statearr_11715_11745[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 13))
{var inst_11654 = (state_11695[8]);var inst_11655 = (state_11695[9]);var inst_11653 = (state_11695[10]);var inst_11652 = (state_11695[11]);var inst_11662 = (state_11695[2]);var inst_11663 = (inst_11655 + 1);var tmp11709 = inst_11654;var tmp11710 = inst_11653;var tmp11711 = inst_11652;var inst_11652__$1 = tmp11711;var inst_11653__$1 = tmp11710;var inst_11654__$1 = tmp11709;var inst_11655__$1 = inst_11663;var state_11695__$1 = (function (){var statearr_11716 = state_11695;(statearr_11716[8] = inst_11654__$1);
(statearr_11716[9] = inst_11655__$1);
(statearr_11716[14] = inst_11662);
(statearr_11716[10] = inst_11653__$1);
(statearr_11716[11] = inst_11652__$1);
return statearr_11716;
})();var statearr_11717_11746 = state_11695__$1;(statearr_11717_11746[2] = null);
(statearr_11717_11746[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 14))
{var inst_11666 = (state_11695[13]);var inst_11668 = cljs.core.chunked_seq_QMARK_.call(null,inst_11666);var state_11695__$1 = state_11695;if(inst_11668)
{var statearr_11718_11747 = state_11695__$1;(statearr_11718_11747[1] = 17);
} else
{var statearr_11719_11748 = state_11695__$1;(statearr_11719_11748[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 15))
{var state_11695__$1 = state_11695;var statearr_11720_11749 = state_11695__$1;(statearr_11720_11749[2] = null);
(statearr_11720_11749[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 16))
{var inst_11684 = (state_11695[2]);var state_11695__$1 = state_11695;var statearr_11721_11750 = state_11695__$1;(statearr_11721_11750[2] = inst_11684);
(statearr_11721_11750[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 17))
{var inst_11666 = (state_11695[13]);var inst_11670 = cljs.core.chunk_first.call(null,inst_11666);var inst_11671 = cljs.core.chunk_rest.call(null,inst_11666);var inst_11672 = cljs.core.count.call(null,inst_11670);var inst_11652 = inst_11671;var inst_11653 = inst_11670;var inst_11654 = inst_11672;var inst_11655 = 0;var state_11695__$1 = (function (){var statearr_11722 = state_11695;(statearr_11722[8] = inst_11654);
(statearr_11722[9] = inst_11655);
(statearr_11722[10] = inst_11653);
(statearr_11722[11] = inst_11652);
return statearr_11722;
})();var statearr_11723_11751 = state_11695__$1;(statearr_11723_11751[2] = null);
(statearr_11723_11751[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 18))
{var inst_11666 = (state_11695[13]);var inst_11675 = cljs.core.first.call(null,inst_11666);var state_11695__$1 = state_11695;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11695__$1,20,out,inst_11675);
} else
{if((state_val_11696 === 19))
{var inst_11681 = (state_11695[2]);var state_11695__$1 = state_11695;var statearr_11724_11752 = state_11695__$1;(statearr_11724_11752[2] = inst_11681);
(statearr_11724_11752[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11696 === 20))
{var inst_11666 = (state_11695[13]);var inst_11677 = (state_11695[2]);var inst_11678 = cljs.core.next.call(null,inst_11666);var inst_11652 = inst_11678;var inst_11653 = null;var inst_11654 = 0;var inst_11655 = 0;var state_11695__$1 = (function (){var statearr_11725 = state_11695;(statearr_11725[8] = inst_11654);
(statearr_11725[9] = inst_11655);
(statearr_11725[10] = inst_11653);
(statearr_11725[11] = inst_11652);
(statearr_11725[15] = inst_11677);
return statearr_11725;
})();var statearr_11726_11753 = state_11695__$1;(statearr_11726_11753[2] = null);
(statearr_11726_11753[1] = 8);
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
});})(c__6319__auto__))
;return ((function (switch__6304__auto__,c__6319__auto__){
return (function() {
var state_machine__6305__auto__ = null;
var state_machine__6305__auto____0 = (function (){var statearr_11730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11730[0] = state_machine__6305__auto__);
(statearr_11730[1] = 1);
return statearr_11730;
});
var state_machine__6305__auto____1 = (function (state_11695){while(true){
var ret_value__6306__auto__ = (function (){try{while(true){
var result__6307__auto__ = switch__6304__auto__.call(null,state_11695);if(cljs.core.keyword_identical_QMARK_.call(null,result__6307__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6307__auto__;
}
break;
}
}catch (e11731){if((e11731 instanceof Object))
{var ex__6308__auto__ = e11731;var statearr_11732_11754 = state_11695;(statearr_11732_11754[5] = ex__6308__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11695);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11731;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6306__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11755 = state_11695;
state_11695 = G__11755;
continue;
}
} else
{return ret_value__6306__auto__;
}
break;
}
});
state_machine__6305__auto__ = function(state_11695){
switch(arguments.length){
case 0:
return state_machine__6305__auto____0.call(this);
case 1:
return state_machine__6305__auto____1.call(this,state_11695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6305__auto____0;
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6305__auto____1;
return state_machine__6305__auto__;
})()
;})(switch__6304__auto__,c__6319__auto__))
})();var state__6321__auto__ = (function (){var statearr_11733 = f__6320__auto__.call(null);(statearr_11733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6319__auto__);
return statearr_11733;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6321__auto__);
});})(c__6319__auto__))
);
return c__6319__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6319__auto___11836 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6319__auto___11836){
return (function (){var f__6320__auto__ = (function (){var switch__6304__auto__ = ((function (c__6319__auto___11836){
return (function (state_11815){var state_val_11816 = (state_11815[1]);if((state_val_11816 === 1))
{var state_11815__$1 = state_11815;var statearr_11817_11837 = state_11815__$1;(statearr_11817_11837[2] = null);
(statearr_11817_11837[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11816 === 2))
{var state_11815__$1 = state_11815;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11815__$1,4,from);
} else
{if((state_val_11816 === 3))
{var inst_11813 = (state_11815[2]);var state_11815__$1 = state_11815;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11815__$1,inst_11813);
} else
{if((state_val_11816 === 4))
{var inst_11798 = (state_11815[7]);var inst_11798__$1 = (state_11815[2]);var inst_11799 = (inst_11798__$1 == null);var state_11815__$1 = (function (){var statearr_11818 = state_11815;(statearr_11818[7] = inst_11798__$1);
return statearr_11818;
})();if(cljs.core.truth_(inst_11799))
{var statearr_11819_11838 = state_11815__$1;(statearr_11819_11838[1] = 5);
} else
{var statearr_11820_11839 = state_11815__$1;(statearr_11820_11839[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11816 === 5))
{var state_11815__$1 = state_11815;if(cljs.core.truth_(close_QMARK_))
{var statearr_11821_11840 = state_11815__$1;(statearr_11821_11840[1] = 8);
} else
{var statearr_11822_11841 = state_11815__$1;(statearr_11822_11841[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11816 === 6))
{var inst_11798 = (state_11815[7]);var state_11815__$1 = state_11815;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11815__$1,11,to,inst_11798);
} else
{if((state_val_11816 === 7))
{var inst_11811 = (state_11815[2]);var state_11815__$1 = state_11815;var statearr_11823_11842 = state_11815__$1;(statearr_11823_11842[2] = inst_11811);
(statearr_11823_11842[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11816 === 8))
{var inst_11802 = cljs.core.async.close_BANG_.call(null,to);var state_11815__$1 = state_11815;var statearr_11824_11843 = state_11815__$1;(statearr_11824_11843[2] = inst_11802);
(statearr_11824_11843[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11816 === 9))
{var state_11815__$1 = state_11815;var statearr_11825_11844 = state_11815__$1;(statearr_11825_11844[2] = null);
(statearr_11825_11844[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11816 === 10))
{var inst_11805 = (state_11815[2]);var state_11815__$1 = state_11815;var statearr_11826_11845 = state_11815__$1;(statearr_11826_11845[2] = inst_11805);
(statearr_11826_11845[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11816 === 11))
{var inst_11808 = (state_11815[2]);var state_11815__$1 = (function (){var statearr_11827 = state_11815;(statearr_11827[8] = inst_11808);
return statearr_11827;
})();var statearr_11828_11846 = state_11815__$1;(statearr_11828_11846[2] = null);
(statearr_11828_11846[1] = 2);
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
});})(c__6319__auto___11836))
;return ((function (switch__6304__auto__,c__6319__auto___11836){
return (function() {
var state_machine__6305__auto__ = null;
var state_machine__6305__auto____0 = (function (){var statearr_11832 = [null,null,null,null,null,null,null,null,null];(statearr_11832[0] = state_machine__6305__auto__);
(statearr_11832[1] = 1);
return statearr_11832;
});
var state_machine__6305__auto____1 = (function (state_11815){while(true){
var ret_value__6306__auto__ = (function (){try{while(true){
var result__6307__auto__ = switch__6304__auto__.call(null,state_11815);if(cljs.core.keyword_identical_QMARK_.call(null,result__6307__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6307__auto__;
}
break;
}
}catch (e11833){if((e11833 instanceof Object))
{var ex__6308__auto__ = e11833;var statearr_11834_11847 = state_11815;(statearr_11834_11847[5] = ex__6308__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11815);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11833;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6306__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11848 = state_11815;
state_11815 = G__11848;
continue;
}
} else
{return ret_value__6306__auto__;
}
break;
}
});
state_machine__6305__auto__ = function(state_11815){
switch(arguments.length){
case 0:
return state_machine__6305__auto____0.call(this);
case 1:
return state_machine__6305__auto____1.call(this,state_11815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6305__auto____0;
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6305__auto____1;
return state_machine__6305__auto__;
})()
;})(switch__6304__auto__,c__6319__auto___11836))
})();var state__6321__auto__ = (function (){var statearr_11835 = f__6320__auto__.call(null);(statearr_11835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6319__auto___11836);
return statearr_11835;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6321__auto__);
});})(c__6319__auto___11836))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6319__auto___11935 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6319__auto___11935,tc,fc){
return (function (){var f__6320__auto__ = (function (){var switch__6304__auto__ = ((function (c__6319__auto___11935,tc,fc){
return (function (state_11913){var state_val_11914 = (state_11913[1]);if((state_val_11914 === 1))
{var state_11913__$1 = state_11913;var statearr_11915_11936 = state_11913__$1;(statearr_11915_11936[2] = null);
(statearr_11915_11936[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 2))
{var state_11913__$1 = state_11913;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11913__$1,4,ch);
} else
{if((state_val_11914 === 3))
{var inst_11911 = (state_11913[2]);var state_11913__$1 = state_11913;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11913__$1,inst_11911);
} else
{if((state_val_11914 === 4))
{var inst_11894 = (state_11913[7]);var inst_11894__$1 = (state_11913[2]);var inst_11895 = (inst_11894__$1 == null);var state_11913__$1 = (function (){var statearr_11916 = state_11913;(statearr_11916[7] = inst_11894__$1);
return statearr_11916;
})();if(cljs.core.truth_(inst_11895))
{var statearr_11917_11937 = state_11913__$1;(statearr_11917_11937[1] = 5);
} else
{var statearr_11918_11938 = state_11913__$1;(statearr_11918_11938[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 5))
{var inst_11897 = cljs.core.async.close_BANG_.call(null,tc);var inst_11898 = cljs.core.async.close_BANG_.call(null,fc);var state_11913__$1 = (function (){var statearr_11919 = state_11913;(statearr_11919[8] = inst_11897);
return statearr_11919;
})();var statearr_11920_11939 = state_11913__$1;(statearr_11920_11939[2] = inst_11898);
(statearr_11920_11939[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 6))
{var inst_11894 = (state_11913[7]);var inst_11900 = p.call(null,inst_11894);var state_11913__$1 = state_11913;if(cljs.core.truth_(inst_11900))
{var statearr_11921_11940 = state_11913__$1;(statearr_11921_11940[1] = 9);
} else
{var statearr_11922_11941 = state_11913__$1;(statearr_11922_11941[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 7))
{var inst_11909 = (state_11913[2]);var state_11913__$1 = state_11913;var statearr_11923_11942 = state_11913__$1;(statearr_11923_11942[2] = inst_11909);
(statearr_11923_11942[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 8))
{var inst_11906 = (state_11913[2]);var state_11913__$1 = (function (){var statearr_11924 = state_11913;(statearr_11924[9] = inst_11906);
return statearr_11924;
})();var statearr_11925_11943 = state_11913__$1;(statearr_11925_11943[2] = null);
(statearr_11925_11943[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 9))
{var state_11913__$1 = state_11913;var statearr_11926_11944 = state_11913__$1;(statearr_11926_11944[2] = tc);
(statearr_11926_11944[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 10))
{var state_11913__$1 = state_11913;var statearr_11927_11945 = state_11913__$1;(statearr_11927_11945[2] = fc);
(statearr_11927_11945[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11914 === 11))
{var inst_11894 = (state_11913[7]);var inst_11904 = (state_11913[2]);var state_11913__$1 = state_11913;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11913__$1,8,inst_11904,inst_11894);
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
});})(c__6319__auto___11935,tc,fc))
;return ((function (switch__6304__auto__,c__6319__auto___11935,tc,fc){
return (function() {
var state_machine__6305__auto__ = null;
var state_machine__6305__auto____0 = (function (){var statearr_11931 = [null,null,null,null,null,null,null,null,null,null];(statearr_11931[0] = state_machine__6305__auto__);
(statearr_11931[1] = 1);
return statearr_11931;
});
var state_machine__6305__auto____1 = (function (state_11913){while(true){
var ret_value__6306__auto__ = (function (){try{while(true){
var result__6307__auto__ = switch__6304__auto__.call(null,state_11913);if(cljs.core.keyword_identical_QMARK_.call(null,result__6307__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6307__auto__;
}
break;
}
}catch (e11932){if((e11932 instanceof Object))
{var ex__6308__auto__ = e11932;var statearr_11933_11946 = state_11913;(statearr_11933_11946[5] = ex__6308__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11913);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11932;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6306__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11947 = state_11913;
state_11913 = G__11947;
continue;
}
} else
{return ret_value__6306__auto__;
}
break;
}
});
state_machine__6305__auto__ = function(state_11913){
switch(arguments.length){
case 0:
return state_machine__6305__auto____0.call(this);
case 1:
return state_machine__6305__auto____1.call(this,state_11913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6305__auto____0;
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6305__auto____1;
return state_machine__6305__auto__;
})()
;})(switch__6304__auto__,c__6319__auto___11935,tc,fc))
})();var state__6321__auto__ = (function (){var statearr_11934 = f__6320__auto__.call(null);(statearr_11934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6319__auto___11935);
return statearr_11934;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6321__auto__);
});})(c__6319__auto___11935,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6319__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6319__auto__){
return (function (){var f__6320__auto__ = (function (){var switch__6304__auto__ = ((function (c__6319__auto__){
return (function (state_11994){var state_val_11995 = (state_11994[1]);if((state_val_11995 === 7))
{var inst_11990 = (state_11994[2]);var state_11994__$1 = state_11994;var statearr_11996_12012 = state_11994__$1;(statearr_11996_12012[2] = inst_11990);
(statearr_11996_12012[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11995 === 6))
{var inst_11983 = (state_11994[7]);var inst_11980 = (state_11994[8]);var inst_11987 = f.call(null,inst_11980,inst_11983);var inst_11980__$1 = inst_11987;var state_11994__$1 = (function (){var statearr_11997 = state_11994;(statearr_11997[8] = inst_11980__$1);
return statearr_11997;
})();var statearr_11998_12013 = state_11994__$1;(statearr_11998_12013[2] = null);
(statearr_11998_12013[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11995 === 5))
{var inst_11980 = (state_11994[8]);var state_11994__$1 = state_11994;var statearr_11999_12014 = state_11994__$1;(statearr_11999_12014[2] = inst_11980);
(statearr_11999_12014[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11995 === 4))
{var inst_11983 = (state_11994[7]);var inst_11983__$1 = (state_11994[2]);var inst_11984 = (inst_11983__$1 == null);var state_11994__$1 = (function (){var statearr_12000 = state_11994;(statearr_12000[7] = inst_11983__$1);
return statearr_12000;
})();if(cljs.core.truth_(inst_11984))
{var statearr_12001_12015 = state_11994__$1;(statearr_12001_12015[1] = 5);
} else
{var statearr_12002_12016 = state_11994__$1;(statearr_12002_12016[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11995 === 3))
{var inst_11992 = (state_11994[2]);var state_11994__$1 = state_11994;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11994__$1,inst_11992);
} else
{if((state_val_11995 === 2))
{var state_11994__$1 = state_11994;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11994__$1,4,ch);
} else
{if((state_val_11995 === 1))
{var inst_11980 = init;var state_11994__$1 = (function (){var statearr_12003 = state_11994;(statearr_12003[8] = inst_11980);
return statearr_12003;
})();var statearr_12004_12017 = state_11994__$1;(statearr_12004_12017[2] = null);
(statearr_12004_12017[1] = 2);
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
});})(c__6319__auto__))
;return ((function (switch__6304__auto__,c__6319__auto__){
return (function() {
var state_machine__6305__auto__ = null;
var state_machine__6305__auto____0 = (function (){var statearr_12008 = [null,null,null,null,null,null,null,null,null];(statearr_12008[0] = state_machine__6305__auto__);
(statearr_12008[1] = 1);
return statearr_12008;
});
var state_machine__6305__auto____1 = (function (state_11994){while(true){
var ret_value__6306__auto__ = (function (){try{while(true){
var result__6307__auto__ = switch__6304__auto__.call(null,state_11994);if(cljs.core.keyword_identical_QMARK_.call(null,result__6307__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6307__auto__;
}
break;
}
}catch (e12009){if((e12009 instanceof Object))
{var ex__6308__auto__ = e12009;var statearr_12010_12018 = state_11994;(statearr_12010_12018[5] = ex__6308__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11994);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12009;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6306__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12019 = state_11994;
state_11994 = G__12019;
continue;
}
} else
{return ret_value__6306__auto__;
}
break;
}
});
state_machine__6305__auto__ = function(state_11994){
switch(arguments.length){
case 0:
return state_machine__6305__auto____0.call(this);
case 1:
return state_machine__6305__auto____1.call(this,state_11994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6305__auto____0;
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6305__auto____1;
return state_machine__6305__auto__;
})()
;})(switch__6304__auto__,c__6319__auto__))
})();var state__6321__auto__ = (function (){var statearr_12011 = f__6320__auto__.call(null);(statearr_12011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6319__auto__);
return statearr_12011;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6321__auto__);
});})(c__6319__auto__))
);
return c__6319__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6319__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6319__auto__){
return (function (){var f__6320__auto__ = (function (){var switch__6304__auto__ = ((function (c__6319__auto__){
return (function (state_12081){var state_val_12082 = (state_12081[1]);if((state_val_12082 === 1))
{var inst_12061 = cljs.core.seq.call(null,coll);var inst_12062 = inst_12061;var state_12081__$1 = (function (){var statearr_12083 = state_12081;(statearr_12083[7] = inst_12062);
return statearr_12083;
})();var statearr_12084_12102 = state_12081__$1;(statearr_12084_12102[2] = null);
(statearr_12084_12102[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12082 === 2))
{var inst_12062 = (state_12081[7]);var state_12081__$1 = state_12081;if(cljs.core.truth_(inst_12062))
{var statearr_12085_12103 = state_12081__$1;(statearr_12085_12103[1] = 4);
} else
{var statearr_12086_12104 = state_12081__$1;(statearr_12086_12104[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12082 === 3))
{var inst_12079 = (state_12081[2]);var state_12081__$1 = state_12081;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12081__$1,inst_12079);
} else
{if((state_val_12082 === 4))
{var inst_12062 = (state_12081[7]);var inst_12065 = cljs.core.first.call(null,inst_12062);var state_12081__$1 = state_12081;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12081__$1,7,ch,inst_12065);
} else
{if((state_val_12082 === 5))
{var state_12081__$1 = state_12081;if(cljs.core.truth_(close_QMARK_))
{var statearr_12087_12105 = state_12081__$1;(statearr_12087_12105[1] = 8);
} else
{var statearr_12088_12106 = state_12081__$1;(statearr_12088_12106[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12082 === 6))
{var inst_12077 = (state_12081[2]);var state_12081__$1 = state_12081;var statearr_12089_12107 = state_12081__$1;(statearr_12089_12107[2] = inst_12077);
(statearr_12089_12107[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12082 === 7))
{var inst_12062 = (state_12081[7]);var inst_12067 = (state_12081[2]);var inst_12068 = cljs.core.next.call(null,inst_12062);var inst_12062__$1 = inst_12068;var state_12081__$1 = (function (){var statearr_12090 = state_12081;(statearr_12090[8] = inst_12067);
(statearr_12090[7] = inst_12062__$1);
return statearr_12090;
})();var statearr_12091_12108 = state_12081__$1;(statearr_12091_12108[2] = null);
(statearr_12091_12108[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12082 === 8))
{var inst_12072 = cljs.core.async.close_BANG_.call(null,ch);var state_12081__$1 = state_12081;var statearr_12092_12109 = state_12081__$1;(statearr_12092_12109[2] = inst_12072);
(statearr_12092_12109[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12082 === 9))
{var state_12081__$1 = state_12081;var statearr_12093_12110 = state_12081__$1;(statearr_12093_12110[2] = null);
(statearr_12093_12110[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12082 === 10))
{var inst_12075 = (state_12081[2]);var state_12081__$1 = state_12081;var statearr_12094_12111 = state_12081__$1;(statearr_12094_12111[2] = inst_12075);
(statearr_12094_12111[1] = 6);
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
});})(c__6319__auto__))
;return ((function (switch__6304__auto__,c__6319__auto__){
return (function() {
var state_machine__6305__auto__ = null;
var state_machine__6305__auto____0 = (function (){var statearr_12098 = [null,null,null,null,null,null,null,null,null];(statearr_12098[0] = state_machine__6305__auto__);
(statearr_12098[1] = 1);
return statearr_12098;
});
var state_machine__6305__auto____1 = (function (state_12081){while(true){
var ret_value__6306__auto__ = (function (){try{while(true){
var result__6307__auto__ = switch__6304__auto__.call(null,state_12081);if(cljs.core.keyword_identical_QMARK_.call(null,result__6307__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6307__auto__;
}
break;
}
}catch (e12099){if((e12099 instanceof Object))
{var ex__6308__auto__ = e12099;var statearr_12100_12112 = state_12081;(statearr_12100_12112[5] = ex__6308__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12081);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12099;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6306__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12113 = state_12081;
state_12081 = G__12113;
continue;
}
} else
{return ret_value__6306__auto__;
}
break;
}
});
state_machine__6305__auto__ = function(state_12081){
switch(arguments.length){
case 0:
return state_machine__6305__auto____0.call(this);
case 1:
return state_machine__6305__auto____1.call(this,state_12081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6305__auto____0;
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6305__auto____1;
return state_machine__6305__auto__;
})()
;})(switch__6304__auto__,c__6319__auto__))
})();var state__6321__auto__ = (function (){var statearr_12101 = f__6320__auto__.call(null);(statearr_12101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6319__auto__);
return statearr_12101;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6321__auto__);
});})(c__6319__auto__))
);
return c__6319__auto__;
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
cljs.core.async.Mux = (function (){var obj12115 = {};return obj12115;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3529__auto__ = _;if(and__3529__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4168__auto__ = (((_ == null))?null:_);return (function (){var or__3541__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12117 = {};return obj12117;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12341 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12341 = (function (cs,ch,mult,meta12342){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12342 = meta12342;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12341.cljs$lang$type = true;
cljs.core.async.t12341.cljs$lang$ctorStr = "cljs.core.async/t12341";
cljs.core.async.t12341.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t12341");
});})(cs))
;
cljs.core.async.t12341.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12341.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12341.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12341.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12341.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12341.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12341.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12343){var self__ = this;
var _12343__$1 = this;return self__.meta12342;
});})(cs))
;
cljs.core.async.t12341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12343,meta12342__$1){var self__ = this;
var _12343__$1 = this;return (new cljs.core.async.t12341(self__.cs,self__.ch,self__.mult,meta12342__$1));
});})(cs))
;
cljs.core.async.__GT_t12341 = ((function (cs){
return (function __GT_t12341(cs__$1,ch__$1,mult__$1,meta12342){return (new cljs.core.async.t12341(cs__$1,ch__$1,mult__$1,meta12342));
});})(cs))
;
}
return (new cljs.core.async.t12341(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6319__auto___12564 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6319__auto___12564,cs,m,dchan,dctr,done){
return (function (){var f__6320__auto__ = (function (){var switch__6304__auto__ = ((function (c__6319__auto___12564,cs,m,dchan,dctr,done){
return (function (state_12478){var state_val_12479 = (state_12478[1]);if((state_val_12479 === 32))
{var inst_12346 = (state_12478[7]);var inst_12422 = (state_12478[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12478,31,Object,null,30);var inst_12429 = cljs.core.async.put_BANG_.call(null,inst_12422,inst_12346,done);var state_12478__$1 = state_12478;var statearr_12480_12565 = state_12478__$1;(statearr_12480_12565[2] = inst_12429);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12478__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 1))
{var state_12478__$1 = state_12478;var statearr_12481_12566 = state_12478__$1;(statearr_12481_12566[2] = null);
(statearr_12481_12566[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 33))
{var inst_12435 = (state_12478[9]);var inst_12437 = cljs.core.chunked_seq_QMARK_.call(null,inst_12435);var state_12478__$1 = state_12478;if(inst_12437)
{var statearr_12482_12567 = state_12478__$1;(statearr_12482_12567[1] = 36);
} else
{var statearr_12483_12568 = state_12478__$1;(statearr_12483_12568[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 2))
{var state_12478__$1 = state_12478;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12478__$1,4,ch);
} else
{if((state_val_12479 === 34))
{var state_12478__$1 = state_12478;var statearr_12484_12569 = state_12478__$1;(statearr_12484_12569[2] = null);
(statearr_12484_12569[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 3))
{var inst_12476 = (state_12478[2]);var state_12478__$1 = state_12478;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12478__$1,inst_12476);
} else
{if((state_val_12479 === 35))
{var inst_12460 = (state_12478[2]);var state_12478__$1 = state_12478;var statearr_12485_12570 = state_12478__$1;(statearr_12485_12570[2] = inst_12460);
(statearr_12485_12570[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 4))
{var inst_12346 = (state_12478[7]);var inst_12346__$1 = (state_12478[2]);var inst_12347 = (inst_12346__$1 == null);var state_12478__$1 = (function (){var statearr_12486 = state_12478;(statearr_12486[7] = inst_12346__$1);
return statearr_12486;
})();if(cljs.core.truth_(inst_12347))
{var statearr_12487_12571 = state_12478__$1;(statearr_12487_12571[1] = 5);
} else
{var statearr_12488_12572 = state_12478__$1;(statearr_12488_12572[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 36))
{var inst_12435 = (state_12478[9]);var inst_12439 = cljs.core.chunk_first.call(null,inst_12435);var inst_12440 = cljs.core.chunk_rest.call(null,inst_12435);var inst_12441 = cljs.core.count.call(null,inst_12439);var inst_12414 = inst_12440;var inst_12415 = inst_12439;var inst_12416 = inst_12441;var inst_12417 = 0;var state_12478__$1 = (function (){var statearr_12489 = state_12478;(statearr_12489[10] = inst_12414);
(statearr_12489[11] = inst_12415);
(statearr_12489[12] = inst_12416);
(statearr_12489[13] = inst_12417);
return statearr_12489;
})();var statearr_12490_12573 = state_12478__$1;(statearr_12490_12573[2] = null);
(statearr_12490_12573[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 5))
{var inst_12353 = cljs.core.deref.call(null,cs);var inst_12354 = cljs.core.seq.call(null,inst_12353);var inst_12355 = inst_12354;var inst_12356 = null;var inst_12357 = 0;var inst_12358 = 0;var state_12478__$1 = (function (){var statearr_12491 = state_12478;(statearr_12491[14] = inst_12357);
(statearr_12491[15] = inst_12356);
(statearr_12491[16] = inst_12355);
(statearr_12491[17] = inst_12358);
return statearr_12491;
})();var statearr_12492_12574 = state_12478__$1;(statearr_12492_12574[2] = null);
(statearr_12492_12574[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 37))
{var inst_12435 = (state_12478[9]);var inst_12444 = cljs.core.first.call(null,inst_12435);var state_12478__$1 = (function (){var statearr_12493 = state_12478;(statearr_12493[18] = inst_12444);
return statearr_12493;
})();var statearr_12494_12575 = state_12478__$1;(statearr_12494_12575[2] = null);
(statearr_12494_12575[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 6))
{var inst_12406 = (state_12478[19]);var inst_12405 = cljs.core.deref.call(null,cs);var inst_12406__$1 = cljs.core.keys.call(null,inst_12405);var inst_12407 = cljs.core.count.call(null,inst_12406__$1);var inst_12408 = cljs.core.reset_BANG_.call(null,dctr,inst_12407);var inst_12413 = cljs.core.seq.call(null,inst_12406__$1);var inst_12414 = inst_12413;var inst_12415 = null;var inst_12416 = 0;var inst_12417 = 0;var state_12478__$1 = (function (){var statearr_12495 = state_12478;(statearr_12495[19] = inst_12406__$1);
(statearr_12495[20] = inst_12408);
(statearr_12495[10] = inst_12414);
(statearr_12495[11] = inst_12415);
(statearr_12495[12] = inst_12416);
(statearr_12495[13] = inst_12417);
return statearr_12495;
})();var statearr_12496_12576 = state_12478__$1;(statearr_12496_12576[2] = null);
(statearr_12496_12576[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 38))
{var inst_12457 = (state_12478[2]);var state_12478__$1 = state_12478;var statearr_12497_12577 = state_12478__$1;(statearr_12497_12577[2] = inst_12457);
(statearr_12497_12577[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 7))
{var inst_12474 = (state_12478[2]);var state_12478__$1 = state_12478;var statearr_12498_12578 = state_12478__$1;(statearr_12498_12578[2] = inst_12474);
(statearr_12498_12578[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 39))
{var inst_12435 = (state_12478[9]);var inst_12453 = (state_12478[2]);var inst_12454 = cljs.core.next.call(null,inst_12435);var inst_12414 = inst_12454;var inst_12415 = null;var inst_12416 = 0;var inst_12417 = 0;var state_12478__$1 = (function (){var statearr_12499 = state_12478;(statearr_12499[10] = inst_12414);
(statearr_12499[11] = inst_12415);
(statearr_12499[12] = inst_12416);
(statearr_12499[13] = inst_12417);
(statearr_12499[21] = inst_12453);
return statearr_12499;
})();var statearr_12500_12579 = state_12478__$1;(statearr_12500_12579[2] = null);
(statearr_12500_12579[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 8))
{var inst_12357 = (state_12478[14]);var inst_12358 = (state_12478[17]);var inst_12360 = (inst_12358 < inst_12357);var inst_12361 = inst_12360;var state_12478__$1 = state_12478;if(cljs.core.truth_(inst_12361))
{var statearr_12501_12580 = state_12478__$1;(statearr_12501_12580[1] = 10);
} else
{var statearr_12502_12581 = state_12478__$1;(statearr_12502_12581[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 40))
{var inst_12444 = (state_12478[18]);var inst_12445 = (state_12478[2]);var inst_12446 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12447 = cljs.core.async.untap_STAR_.call(null,m,inst_12444);var state_12478__$1 = (function (){var statearr_12503 = state_12478;(statearr_12503[22] = inst_12446);
(statearr_12503[23] = inst_12445);
return statearr_12503;
})();var statearr_12504_12582 = state_12478__$1;(statearr_12504_12582[2] = inst_12447);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12478__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 9))
{var inst_12403 = (state_12478[2]);var state_12478__$1 = state_12478;var statearr_12505_12583 = state_12478__$1;(statearr_12505_12583[2] = inst_12403);
(statearr_12505_12583[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 41))
{var inst_12346 = (state_12478[7]);var inst_12444 = (state_12478[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12478,40,Object,null,39);var inst_12451 = cljs.core.async.put_BANG_.call(null,inst_12444,inst_12346,done);var state_12478__$1 = state_12478;var statearr_12506_12584 = state_12478__$1;(statearr_12506_12584[2] = inst_12451);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12478__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 10))
{var inst_12356 = (state_12478[15]);var inst_12358 = (state_12478[17]);var inst_12364 = cljs.core._nth.call(null,inst_12356,inst_12358);var inst_12365 = cljs.core.nth.call(null,inst_12364,0,null);var inst_12366 = cljs.core.nth.call(null,inst_12364,1,null);var state_12478__$1 = (function (){var statearr_12507 = state_12478;(statearr_12507[24] = inst_12365);
return statearr_12507;
})();if(cljs.core.truth_(inst_12366))
{var statearr_12508_12585 = state_12478__$1;(statearr_12508_12585[1] = 13);
} else
{var statearr_12509_12586 = state_12478__$1;(statearr_12509_12586[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 42))
{var state_12478__$1 = state_12478;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12478__$1,45,dchan);
} else
{if((state_val_12479 === 11))
{var inst_12355 = (state_12478[16]);var inst_12375 = (state_12478[25]);var inst_12375__$1 = cljs.core.seq.call(null,inst_12355);var state_12478__$1 = (function (){var statearr_12510 = state_12478;(statearr_12510[25] = inst_12375__$1);
return statearr_12510;
})();if(inst_12375__$1)
{var statearr_12511_12587 = state_12478__$1;(statearr_12511_12587[1] = 16);
} else
{var statearr_12512_12588 = state_12478__$1;(statearr_12512_12588[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 43))
{var state_12478__$1 = state_12478;var statearr_12513_12589 = state_12478__$1;(statearr_12513_12589[2] = null);
(statearr_12513_12589[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 12))
{var inst_12401 = (state_12478[2]);var state_12478__$1 = state_12478;var statearr_12514_12590 = state_12478__$1;(statearr_12514_12590[2] = inst_12401);
(statearr_12514_12590[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 44))
{var inst_12471 = (state_12478[2]);var state_12478__$1 = (function (){var statearr_12515 = state_12478;(statearr_12515[26] = inst_12471);
return statearr_12515;
})();var statearr_12516_12591 = state_12478__$1;(statearr_12516_12591[2] = null);
(statearr_12516_12591[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 13))
{var inst_12365 = (state_12478[24]);var inst_12368 = cljs.core.async.close_BANG_.call(null,inst_12365);var state_12478__$1 = state_12478;var statearr_12517_12592 = state_12478__$1;(statearr_12517_12592[2] = inst_12368);
(statearr_12517_12592[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 45))
{var inst_12468 = (state_12478[2]);var state_12478__$1 = state_12478;var statearr_12521_12593 = state_12478__$1;(statearr_12521_12593[2] = inst_12468);
(statearr_12521_12593[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 14))
{var state_12478__$1 = state_12478;var statearr_12522_12594 = state_12478__$1;(statearr_12522_12594[2] = null);
(statearr_12522_12594[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 15))
{var inst_12357 = (state_12478[14]);var inst_12356 = (state_12478[15]);var inst_12355 = (state_12478[16]);var inst_12358 = (state_12478[17]);var inst_12371 = (state_12478[2]);var inst_12372 = (inst_12358 + 1);var tmp12518 = inst_12357;var tmp12519 = inst_12356;var tmp12520 = inst_12355;var inst_12355__$1 = tmp12520;var inst_12356__$1 = tmp12519;var inst_12357__$1 = tmp12518;var inst_12358__$1 = inst_12372;var state_12478__$1 = (function (){var statearr_12523 = state_12478;(statearr_12523[14] = inst_12357__$1);
(statearr_12523[15] = inst_12356__$1);
(statearr_12523[16] = inst_12355__$1);
(statearr_12523[17] = inst_12358__$1);
(statearr_12523[27] = inst_12371);
return statearr_12523;
})();var statearr_12524_12595 = state_12478__$1;(statearr_12524_12595[2] = null);
(statearr_12524_12595[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 16))
{var inst_12375 = (state_12478[25]);var inst_12377 = cljs.core.chunked_seq_QMARK_.call(null,inst_12375);var state_12478__$1 = state_12478;if(inst_12377)
{var statearr_12525_12596 = state_12478__$1;(statearr_12525_12596[1] = 19);
} else
{var statearr_12526_12597 = state_12478__$1;(statearr_12526_12597[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 17))
{var state_12478__$1 = state_12478;var statearr_12527_12598 = state_12478__$1;(statearr_12527_12598[2] = null);
(statearr_12527_12598[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 18))
{var inst_12399 = (state_12478[2]);var state_12478__$1 = state_12478;var statearr_12528_12599 = state_12478__$1;(statearr_12528_12599[2] = inst_12399);
(statearr_12528_12599[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 19))
{var inst_12375 = (state_12478[25]);var inst_12379 = cljs.core.chunk_first.call(null,inst_12375);var inst_12380 = cljs.core.chunk_rest.call(null,inst_12375);var inst_12381 = cljs.core.count.call(null,inst_12379);var inst_12355 = inst_12380;var inst_12356 = inst_12379;var inst_12357 = inst_12381;var inst_12358 = 0;var state_12478__$1 = (function (){var statearr_12529 = state_12478;(statearr_12529[14] = inst_12357);
(statearr_12529[15] = inst_12356);
(statearr_12529[16] = inst_12355);
(statearr_12529[17] = inst_12358);
return statearr_12529;
})();var statearr_12530_12600 = state_12478__$1;(statearr_12530_12600[2] = null);
(statearr_12530_12600[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 20))
{var inst_12375 = (state_12478[25]);var inst_12385 = cljs.core.first.call(null,inst_12375);var inst_12386 = cljs.core.nth.call(null,inst_12385,0,null);var inst_12387 = cljs.core.nth.call(null,inst_12385,1,null);var state_12478__$1 = (function (){var statearr_12531 = state_12478;(statearr_12531[28] = inst_12386);
return statearr_12531;
})();if(cljs.core.truth_(inst_12387))
{var statearr_12532_12601 = state_12478__$1;(statearr_12532_12601[1] = 22);
} else
{var statearr_12533_12602 = state_12478__$1;(statearr_12533_12602[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 21))
{var inst_12396 = (state_12478[2]);var state_12478__$1 = state_12478;var statearr_12534_12603 = state_12478__$1;(statearr_12534_12603[2] = inst_12396);
(statearr_12534_12603[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 22))
{var inst_12386 = (state_12478[28]);var inst_12389 = cljs.core.async.close_BANG_.call(null,inst_12386);var state_12478__$1 = state_12478;var statearr_12535_12604 = state_12478__$1;(statearr_12535_12604[2] = inst_12389);
(statearr_12535_12604[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 23))
{var state_12478__$1 = state_12478;var statearr_12536_12605 = state_12478__$1;(statearr_12536_12605[2] = null);
(statearr_12536_12605[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 24))
{var inst_12375 = (state_12478[25]);var inst_12392 = (state_12478[2]);var inst_12393 = cljs.core.next.call(null,inst_12375);var inst_12355 = inst_12393;var inst_12356 = null;var inst_12357 = 0;var inst_12358 = 0;var state_12478__$1 = (function (){var statearr_12537 = state_12478;(statearr_12537[14] = inst_12357);
(statearr_12537[15] = inst_12356);
(statearr_12537[16] = inst_12355);
(statearr_12537[29] = inst_12392);
(statearr_12537[17] = inst_12358);
return statearr_12537;
})();var statearr_12538_12606 = state_12478__$1;(statearr_12538_12606[2] = null);
(statearr_12538_12606[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 25))
{var inst_12416 = (state_12478[12]);var inst_12417 = (state_12478[13]);var inst_12419 = (inst_12417 < inst_12416);var inst_12420 = inst_12419;var state_12478__$1 = state_12478;if(cljs.core.truth_(inst_12420))
{var statearr_12539_12607 = state_12478__$1;(statearr_12539_12607[1] = 27);
} else
{var statearr_12540_12608 = state_12478__$1;(statearr_12540_12608[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 26))
{var inst_12406 = (state_12478[19]);var inst_12464 = (state_12478[2]);var inst_12465 = cljs.core.seq.call(null,inst_12406);var state_12478__$1 = (function (){var statearr_12541 = state_12478;(statearr_12541[30] = inst_12464);
return statearr_12541;
})();if(inst_12465)
{var statearr_12542_12609 = state_12478__$1;(statearr_12542_12609[1] = 42);
} else
{var statearr_12543_12610 = state_12478__$1;(statearr_12543_12610[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 27))
{var inst_12415 = (state_12478[11]);var inst_12417 = (state_12478[13]);var inst_12422 = cljs.core._nth.call(null,inst_12415,inst_12417);var state_12478__$1 = (function (){var statearr_12544 = state_12478;(statearr_12544[8] = inst_12422);
return statearr_12544;
})();var statearr_12545_12611 = state_12478__$1;(statearr_12545_12611[2] = null);
(statearr_12545_12611[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 28))
{var inst_12414 = (state_12478[10]);var inst_12435 = (state_12478[9]);var inst_12435__$1 = cljs.core.seq.call(null,inst_12414);var state_12478__$1 = (function (){var statearr_12549 = state_12478;(statearr_12549[9] = inst_12435__$1);
return statearr_12549;
})();if(inst_12435__$1)
{var statearr_12550_12612 = state_12478__$1;(statearr_12550_12612[1] = 33);
} else
{var statearr_12551_12613 = state_12478__$1;(statearr_12551_12613[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 29))
{var inst_12462 = (state_12478[2]);var state_12478__$1 = state_12478;var statearr_12552_12614 = state_12478__$1;(statearr_12552_12614[2] = inst_12462);
(statearr_12552_12614[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 30))
{var inst_12414 = (state_12478[10]);var inst_12415 = (state_12478[11]);var inst_12416 = (state_12478[12]);var inst_12417 = (state_12478[13]);var inst_12431 = (state_12478[2]);var inst_12432 = (inst_12417 + 1);var tmp12546 = inst_12414;var tmp12547 = inst_12415;var tmp12548 = inst_12416;var inst_12414__$1 = tmp12546;var inst_12415__$1 = tmp12547;var inst_12416__$1 = tmp12548;var inst_12417__$1 = inst_12432;var state_12478__$1 = (function (){var statearr_12553 = state_12478;(statearr_12553[31] = inst_12431);
(statearr_12553[10] = inst_12414__$1);
(statearr_12553[11] = inst_12415__$1);
(statearr_12553[12] = inst_12416__$1);
(statearr_12553[13] = inst_12417__$1);
return statearr_12553;
})();var statearr_12554_12615 = state_12478__$1;(statearr_12554_12615[2] = null);
(statearr_12554_12615[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 31))
{var inst_12422 = (state_12478[8]);var inst_12423 = (state_12478[2]);var inst_12424 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12425 = cljs.core.async.untap_STAR_.call(null,m,inst_12422);var state_12478__$1 = (function (){var statearr_12555 = state_12478;(statearr_12555[32] = inst_12424);
(statearr_12555[33] = inst_12423);
return statearr_12555;
})();var statearr_12556_12616 = state_12478__$1;(statearr_12556_12616[2] = inst_12425);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12478__$1);
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
});})(c__6319__auto___12564,cs,m,dchan,dctr,done))
;return ((function (switch__6304__auto__,c__6319__auto___12564,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6305__auto__ = null;
var state_machine__6305__auto____0 = (function (){var statearr_12560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12560[0] = state_machine__6305__auto__);
(statearr_12560[1] = 1);
return statearr_12560;
});
var state_machine__6305__auto____1 = (function (state_12478){while(true){
var ret_value__6306__auto__ = (function (){try{while(true){
var result__6307__auto__ = switch__6304__auto__.call(null,state_12478);if(cljs.core.keyword_identical_QMARK_.call(null,result__6307__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6307__auto__;
}
break;
}
}catch (e12561){if((e12561 instanceof Object))
{var ex__6308__auto__ = e12561;var statearr_12562_12617 = state_12478;(statearr_12562_12617[5] = ex__6308__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12478);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12561;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6306__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12618 = state_12478;
state_12478 = G__12618;
continue;
}
} else
{return ret_value__6306__auto__;
}
break;
}
});
state_machine__6305__auto__ = function(state_12478){
switch(arguments.length){
case 0:
return state_machine__6305__auto____0.call(this);
case 1:
return state_machine__6305__auto____1.call(this,state_12478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6305__auto____0;
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6305__auto____1;
return state_machine__6305__auto__;
})()
;})(switch__6304__auto__,c__6319__auto___12564,cs,m,dchan,dctr,done))
})();var state__6321__auto__ = (function (){var statearr_12563 = f__6320__auto__.call(null);(statearr_12563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6319__auto___12564);
return statearr_12563;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6321__auto__);
});})(c__6319__auto___12564,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj12620 = {};return obj12620;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t12730 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12730 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12731){
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
this.meta12731 = meta12731;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12730.cljs$lang$type = true;
cljs.core.async.t12730.cljs$lang$ctorStr = "cljs.core.async/t12730";
cljs.core.async.t12730.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t12730");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12730.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12730.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12730.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12730.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12730.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12730.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12730.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12730.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12730.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12732){var self__ = this;
var _12732__$1 = this;return self__.meta12731;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12732,meta12731__$1){var self__ = this;
var _12732__$1 = this;return (new cljs.core.async.t12730(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12731__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12730 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12730(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12731){return (new cljs.core.async.t12730(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12731));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12730(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6319__auto___12839 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6319__auto___12839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6320__auto__ = (function (){var switch__6304__auto__ = ((function (c__6319__auto___12839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12797){var state_val_12798 = (state_12797[1]);if((state_val_12798 === 1))
{var inst_12736 = (state_12797[7]);var inst_12736__$1 = calc_state.call(null);var inst_12737 = cljs.core.seq_QMARK_.call(null,inst_12736__$1);var state_12797__$1 = (function (){var statearr_12799 = state_12797;(statearr_12799[7] = inst_12736__$1);
return statearr_12799;
})();if(inst_12737)
{var statearr_12800_12840 = state_12797__$1;(statearr_12800_12840[1] = 2);
} else
{var statearr_12801_12841 = state_12797__$1;(statearr_12801_12841[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12798 === 2))
{var inst_12736 = (state_12797[7]);var inst_12739 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12736);var state_12797__$1 = state_12797;var statearr_12802_12842 = state_12797__$1;(statearr_12802_12842[2] = inst_12739);
(statearr_12802_12842[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12798 === 3))
{var inst_12736 = (state_12797[7]);var state_12797__$1 = state_12797;var statearr_12803_12843 = state_12797__$1;(statearr_12803_12843[2] = inst_12736);
(statearr_12803_12843[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12798 === 4))
{var inst_12736 = (state_12797[7]);var inst_12742 = (state_12797[2]);var inst_12743 = cljs.core.get.call(null,inst_12742,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12744 = cljs.core.get.call(null,inst_12742,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12745 = cljs.core.get.call(null,inst_12742,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12746 = inst_12736;var state_12797__$1 = (function (){var statearr_12804 = state_12797;(statearr_12804[8] = inst_12743);
(statearr_12804[9] = inst_12744);
(statearr_12804[10] = inst_12745);
(statearr_12804[11] = inst_12746);
return statearr_12804;
})();var statearr_12805_12844 = state_12797__$1;(statearr_12805_12844[2] = null);
(statearr_12805_12844[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12798 === 5))
{var inst_12746 = (state_12797[11]);var inst_12749 = cljs.core.seq_QMARK_.call(null,inst_12746);var state_12797__$1 = state_12797;if(inst_12749)
{var statearr_12806_12845 = state_12797__$1;(statearr_12806_12845[1] = 7);
} else
{var statearr_12807_12846 = state_12797__$1;(statearr_12807_12846[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12798 === 6))
{var inst_12795 = (state_12797[2]);var state_12797__$1 = state_12797;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12797__$1,inst_12795);
} else
{if((state_val_12798 === 7))
{var inst_12746 = (state_12797[11]);var inst_12751 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12746);var state_12797__$1 = state_12797;var statearr_12808_12847 = state_12797__$1;(statearr_12808_12847[2] = inst_12751);
(statearr_12808_12847[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12798 === 8))
{var inst_12746 = (state_12797[11]);var state_12797__$1 = state_12797;var statearr_12809_12848 = state_12797__$1;(statearr_12809_12848[2] = inst_12746);
(statearr_12809_12848[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12798 === 9))
{var inst_12754 = (state_12797[12]);var inst_12754__$1 = (state_12797[2]);var inst_12755 = cljs.core.get.call(null,inst_12754__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12756 = cljs.core.get.call(null,inst_12754__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12757 = cljs.core.get.call(null,inst_12754__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12797__$1 = (function (){var statearr_12810 = state_12797;(statearr_12810[12] = inst_12754__$1);
(statearr_12810[13] = inst_12756);
(statearr_12810[14] = inst_12757);
return statearr_12810;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12797__$1,10,inst_12755);
} else
{if((state_val_12798 === 10))
{var inst_12762 = (state_12797[15]);var inst_12761 = (state_12797[16]);var inst_12760 = (state_12797[2]);var inst_12761__$1 = cljs.core.nth.call(null,inst_12760,0,null);var inst_12762__$1 = cljs.core.nth.call(null,inst_12760,1,null);var inst_12763 = (inst_12761__$1 == null);var inst_12764 = cljs.core._EQ_.call(null,inst_12762__$1,change);var inst_12765 = (inst_12763) || (inst_12764);var state_12797__$1 = (function (){var statearr_12811 = state_12797;(statearr_12811[15] = inst_12762__$1);
(statearr_12811[16] = inst_12761__$1);
return statearr_12811;
})();if(cljs.core.truth_(inst_12765))
{var statearr_12812_12849 = state_12797__$1;(statearr_12812_12849[1] = 11);
} else
{var statearr_12813_12850 = state_12797__$1;(statearr_12813_12850[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12798 === 11))
{var inst_12761 = (state_12797[16]);var inst_12767 = (inst_12761 == null);var state_12797__$1 = state_12797;if(cljs.core.truth_(inst_12767))
{var statearr_12814_12851 = state_12797__$1;(statearr_12814_12851[1] = 14);
} else
{var statearr_12815_12852 = state_12797__$1;(statearr_12815_12852[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12798 === 12))
{var inst_12776 = (state_12797[17]);var inst_12762 = (state_12797[15]);var inst_12757 = (state_12797[14]);var inst_12776__$1 = inst_12757.call(null,inst_12762);var state_12797__$1 = (function (){var statearr_12816 = state_12797;(statearr_12816[17] = inst_12776__$1);
return statearr_12816;
})();if(cljs.core.truth_(inst_12776__$1))
{var statearr_12817_12853 = state_12797__$1;(statearr_12817_12853[1] = 17);
} else
{var statearr_12818_12854 = state_12797__$1;(statearr_12818_12854[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12798 === 13))
{var inst_12793 = (state_12797[2]);var state_12797__$1 = state_12797;var statearr_12819_12855 = state_12797__$1;(statearr_12819_12855[2] = inst_12793);
(statearr_12819_12855[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12798 === 14))
{var inst_12762 = (state_12797[15]);var inst_12769 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12762);var state_12797__$1 = state_12797;var statearr_12820_12856 = state_12797__$1;(statearr_12820_12856[2] = inst_12769);
(statearr_12820_12856[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12798 === 15))
{var state_12797__$1 = state_12797;var statearr_12821_12857 = state_12797__$1;(statearr_12821_12857[2] = null);
(statearr_12821_12857[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12798 === 16))
{var inst_12772 = (state_12797[2]);var inst_12773 = calc_state.call(null);var inst_12746 = inst_12773;var state_12797__$1 = (function (){var statearr_12822 = state_12797;(statearr_12822[11] = inst_12746);
(statearr_12822[18] = inst_12772);
return statearr_12822;
})();var statearr_12823_12858 = state_12797__$1;(statearr_12823_12858[2] = null);
(statearr_12823_12858[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12798 === 17))
{var inst_12776 = (state_12797[17]);var state_12797__$1 = state_12797;var statearr_12824_12859 = state_12797__$1;(statearr_12824_12859[2] = inst_12776);
(statearr_12824_12859[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12798 === 18))
{var inst_12756 = (state_12797[13]);var inst_12762 = (state_12797[15]);var inst_12757 = (state_12797[14]);var inst_12779 = cljs.core.empty_QMARK_.call(null,inst_12757);var inst_12780 = inst_12756.call(null,inst_12762);var inst_12781 = cljs.core.not.call(null,inst_12780);var inst_12782 = (inst_12779) && (inst_12781);var state_12797__$1 = state_12797;var statearr_12825_12860 = state_12797__$1;(statearr_12825_12860[2] = inst_12782);
(statearr_12825_12860[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12798 === 19))
{var inst_12784 = (state_12797[2]);var state_12797__$1 = state_12797;if(cljs.core.truth_(inst_12784))
{var statearr_12826_12861 = state_12797__$1;(statearr_12826_12861[1] = 20);
} else
{var statearr_12827_12862 = state_12797__$1;(statearr_12827_12862[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12798 === 20))
{var inst_12761 = (state_12797[16]);var state_12797__$1 = state_12797;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12797__$1,23,out,inst_12761);
} else
{if((state_val_12798 === 21))
{var state_12797__$1 = state_12797;var statearr_12828_12863 = state_12797__$1;(statearr_12828_12863[2] = null);
(statearr_12828_12863[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12798 === 22))
{var inst_12754 = (state_12797[12]);var inst_12790 = (state_12797[2]);var inst_12746 = inst_12754;var state_12797__$1 = (function (){var statearr_12829 = state_12797;(statearr_12829[11] = inst_12746);
(statearr_12829[19] = inst_12790);
return statearr_12829;
})();var statearr_12830_12864 = state_12797__$1;(statearr_12830_12864[2] = null);
(statearr_12830_12864[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12798 === 23))
{var inst_12787 = (state_12797[2]);var state_12797__$1 = state_12797;var statearr_12831_12865 = state_12797__$1;(statearr_12831_12865[2] = inst_12787);
(statearr_12831_12865[1] = 22);
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
});})(c__6319__auto___12839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6304__auto__,c__6319__auto___12839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6305__auto__ = null;
var state_machine__6305__auto____0 = (function (){var statearr_12835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12835[0] = state_machine__6305__auto__);
(statearr_12835[1] = 1);
return statearr_12835;
});
var state_machine__6305__auto____1 = (function (state_12797){while(true){
var ret_value__6306__auto__ = (function (){try{while(true){
var result__6307__auto__ = switch__6304__auto__.call(null,state_12797);if(cljs.core.keyword_identical_QMARK_.call(null,result__6307__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6307__auto__;
}
break;
}
}catch (e12836){if((e12836 instanceof Object))
{var ex__6308__auto__ = e12836;var statearr_12837_12866 = state_12797;(statearr_12837_12866[5] = ex__6308__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12797);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12836;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6306__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12867 = state_12797;
state_12797 = G__12867;
continue;
}
} else
{return ret_value__6306__auto__;
}
break;
}
});
state_machine__6305__auto__ = function(state_12797){
switch(arguments.length){
case 0:
return state_machine__6305__auto____0.call(this);
case 1:
return state_machine__6305__auto____1.call(this,state_12797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6305__auto____0;
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6305__auto____1;
return state_machine__6305__auto__;
})()
;})(switch__6304__auto__,c__6319__auto___12839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6321__auto__ = (function (){var statearr_12838 = f__6320__auto__.call(null);(statearr_12838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6319__auto___12839);
return statearr_12838;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6321__auto__);
});})(c__6319__auto___12839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj12869 = {};return obj12869;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
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
return (function (topic){var or__3541__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3541__auto__,mults){
return (function (p1__12870_SHARP_){if(cljs.core.truth_(p1__12870_SHARP_.call(null,topic)))
{return p1__12870_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12870_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3541__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12995 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12995 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12996){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12996 = meta12996;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12995.cljs$lang$type = true;
cljs.core.async.t12995.cljs$lang$ctorStr = "cljs.core.async/t12995";
cljs.core.async.t12995.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t12995");
});})(mults,ensure_mult))
;
cljs.core.async.t12995.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12995.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12995.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12995.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12995.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12995.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12995.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12995.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12997){var self__ = this;
var _12997__$1 = this;return self__.meta12996;
});})(mults,ensure_mult))
;
cljs.core.async.t12995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12997,meta12996__$1){var self__ = this;
var _12997__$1 = this;return (new cljs.core.async.t12995(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12996__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12995 = ((function (mults,ensure_mult){
return (function __GT_t12995(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12996){return (new cljs.core.async.t12995(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12996));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12995(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6319__auto___13119 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6319__auto___13119,mults,ensure_mult,p){
return (function (){var f__6320__auto__ = (function (){var switch__6304__auto__ = ((function (c__6319__auto___13119,mults,ensure_mult,p){
return (function (state_13071){var state_val_13072 = (state_13071[1]);if((state_val_13072 === 1))
{var state_13071__$1 = state_13071;var statearr_13073_13120 = state_13071__$1;(statearr_13073_13120[2] = null);
(statearr_13073_13120[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13072 === 2))
{var state_13071__$1 = state_13071;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13071__$1,4,ch);
} else
{if((state_val_13072 === 3))
{var inst_13069 = (state_13071[2]);var state_13071__$1 = state_13071;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13071__$1,inst_13069);
} else
{if((state_val_13072 === 4))
{var inst_13000 = (state_13071[7]);var inst_13000__$1 = (state_13071[2]);var inst_13001 = (inst_13000__$1 == null);var state_13071__$1 = (function (){var statearr_13074 = state_13071;(statearr_13074[7] = inst_13000__$1);
return statearr_13074;
})();if(cljs.core.truth_(inst_13001))
{var statearr_13075_13121 = state_13071__$1;(statearr_13075_13121[1] = 5);
} else
{var statearr_13076_13122 = state_13071__$1;(statearr_13076_13122[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13072 === 5))
{var inst_13007 = cljs.core.deref.call(null,mults);var inst_13008 = cljs.core.vals.call(null,inst_13007);var inst_13009 = cljs.core.seq.call(null,inst_13008);var inst_13010 = inst_13009;var inst_13011 = null;var inst_13012 = 0;var inst_13013 = 0;var state_13071__$1 = (function (){var statearr_13077 = state_13071;(statearr_13077[8] = inst_13012);
(statearr_13077[9] = inst_13013);
(statearr_13077[10] = inst_13010);
(statearr_13077[11] = inst_13011);
return statearr_13077;
})();var statearr_13078_13123 = state_13071__$1;(statearr_13078_13123[2] = null);
(statearr_13078_13123[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13072 === 6))
{var inst_13048 = (state_13071[12]);var inst_13000 = (state_13071[7]);var inst_13050 = (state_13071[13]);var inst_13048__$1 = topic_fn.call(null,inst_13000);var inst_13049 = cljs.core.deref.call(null,mults);var inst_13050__$1 = cljs.core.get.call(null,inst_13049,inst_13048__$1);var state_13071__$1 = (function (){var statearr_13079 = state_13071;(statearr_13079[12] = inst_13048__$1);
(statearr_13079[13] = inst_13050__$1);
return statearr_13079;
})();if(cljs.core.truth_(inst_13050__$1))
{var statearr_13080_13124 = state_13071__$1;(statearr_13080_13124[1] = 19);
} else
{var statearr_13081_13125 = state_13071__$1;(statearr_13081_13125[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13072 === 7))
{var inst_13067 = (state_13071[2]);var state_13071__$1 = state_13071;var statearr_13082_13126 = state_13071__$1;(statearr_13082_13126[2] = inst_13067);
(statearr_13082_13126[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13072 === 8))
{var inst_13012 = (state_13071[8]);var inst_13013 = (state_13071[9]);var inst_13015 = (inst_13013 < inst_13012);var inst_13016 = inst_13015;var state_13071__$1 = state_13071;if(cljs.core.truth_(inst_13016))
{var statearr_13086_13127 = state_13071__$1;(statearr_13086_13127[1] = 10);
} else
{var statearr_13087_13128 = state_13071__$1;(statearr_13087_13128[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13072 === 9))
{var inst_13046 = (state_13071[2]);var state_13071__$1 = state_13071;var statearr_13088_13129 = state_13071__$1;(statearr_13088_13129[2] = inst_13046);
(statearr_13088_13129[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13072 === 10))
{var inst_13012 = (state_13071[8]);var inst_13013 = (state_13071[9]);var inst_13010 = (state_13071[10]);var inst_13011 = (state_13071[11]);var inst_13018 = cljs.core._nth.call(null,inst_13011,inst_13013);var inst_13019 = cljs.core.async.muxch_STAR_.call(null,inst_13018);var inst_13020 = cljs.core.async.close_BANG_.call(null,inst_13019);var inst_13021 = (inst_13013 + 1);var tmp13083 = inst_13012;var tmp13084 = inst_13010;var tmp13085 = inst_13011;var inst_13010__$1 = tmp13084;var inst_13011__$1 = tmp13085;var inst_13012__$1 = tmp13083;var inst_13013__$1 = inst_13021;var state_13071__$1 = (function (){var statearr_13089 = state_13071;(statearr_13089[8] = inst_13012__$1);
(statearr_13089[9] = inst_13013__$1);
(statearr_13089[10] = inst_13010__$1);
(statearr_13089[11] = inst_13011__$1);
(statearr_13089[14] = inst_13020);
return statearr_13089;
})();var statearr_13090_13130 = state_13071__$1;(statearr_13090_13130[2] = null);
(statearr_13090_13130[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13072 === 11))
{var inst_13010 = (state_13071[10]);var inst_13024 = (state_13071[15]);var inst_13024__$1 = cljs.core.seq.call(null,inst_13010);var state_13071__$1 = (function (){var statearr_13091 = state_13071;(statearr_13091[15] = inst_13024__$1);
return statearr_13091;
})();if(inst_13024__$1)
{var statearr_13092_13131 = state_13071__$1;(statearr_13092_13131[1] = 13);
} else
{var statearr_13093_13132 = state_13071__$1;(statearr_13093_13132[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13072 === 12))
{var inst_13044 = (state_13071[2]);var state_13071__$1 = state_13071;var statearr_13094_13133 = state_13071__$1;(statearr_13094_13133[2] = inst_13044);
(statearr_13094_13133[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13072 === 13))
{var inst_13024 = (state_13071[15]);var inst_13026 = cljs.core.chunked_seq_QMARK_.call(null,inst_13024);var state_13071__$1 = state_13071;if(inst_13026)
{var statearr_13095_13134 = state_13071__$1;(statearr_13095_13134[1] = 16);
} else
{var statearr_13096_13135 = state_13071__$1;(statearr_13096_13135[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13072 === 14))
{var state_13071__$1 = state_13071;var statearr_13097_13136 = state_13071__$1;(statearr_13097_13136[2] = null);
(statearr_13097_13136[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13072 === 15))
{var inst_13042 = (state_13071[2]);var state_13071__$1 = state_13071;var statearr_13098_13137 = state_13071__$1;(statearr_13098_13137[2] = inst_13042);
(statearr_13098_13137[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13072 === 16))
{var inst_13024 = (state_13071[15]);var inst_13028 = cljs.core.chunk_first.call(null,inst_13024);var inst_13029 = cljs.core.chunk_rest.call(null,inst_13024);var inst_13030 = cljs.core.count.call(null,inst_13028);var inst_13010 = inst_13029;var inst_13011 = inst_13028;var inst_13012 = inst_13030;var inst_13013 = 0;var state_13071__$1 = (function (){var statearr_13099 = state_13071;(statearr_13099[8] = inst_13012);
(statearr_13099[9] = inst_13013);
(statearr_13099[10] = inst_13010);
(statearr_13099[11] = inst_13011);
return statearr_13099;
})();var statearr_13100_13138 = state_13071__$1;(statearr_13100_13138[2] = null);
(statearr_13100_13138[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13072 === 17))
{var inst_13024 = (state_13071[15]);var inst_13033 = cljs.core.first.call(null,inst_13024);var inst_13034 = cljs.core.async.muxch_STAR_.call(null,inst_13033);var inst_13035 = cljs.core.async.close_BANG_.call(null,inst_13034);var inst_13036 = cljs.core.next.call(null,inst_13024);var inst_13010 = inst_13036;var inst_13011 = null;var inst_13012 = 0;var inst_13013 = 0;var state_13071__$1 = (function (){var statearr_13101 = state_13071;(statearr_13101[16] = inst_13035);
(statearr_13101[8] = inst_13012);
(statearr_13101[9] = inst_13013);
(statearr_13101[10] = inst_13010);
(statearr_13101[11] = inst_13011);
return statearr_13101;
})();var statearr_13102_13139 = state_13071__$1;(statearr_13102_13139[2] = null);
(statearr_13102_13139[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13072 === 18))
{var inst_13039 = (state_13071[2]);var state_13071__$1 = state_13071;var statearr_13103_13140 = state_13071__$1;(statearr_13103_13140[2] = inst_13039);
(statearr_13103_13140[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13072 === 19))
{var state_13071__$1 = state_13071;var statearr_13104_13141 = state_13071__$1;(statearr_13104_13141[2] = null);
(statearr_13104_13141[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13072 === 20))
{var state_13071__$1 = state_13071;var statearr_13105_13142 = state_13071__$1;(statearr_13105_13142[2] = null);
(statearr_13105_13142[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13072 === 21))
{var inst_13064 = (state_13071[2]);var state_13071__$1 = (function (){var statearr_13106 = state_13071;(statearr_13106[17] = inst_13064);
return statearr_13106;
})();var statearr_13107_13143 = state_13071__$1;(statearr_13107_13143[2] = null);
(statearr_13107_13143[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13072 === 22))
{var inst_13061 = (state_13071[2]);var state_13071__$1 = state_13071;var statearr_13108_13144 = state_13071__$1;(statearr_13108_13144[2] = inst_13061);
(statearr_13108_13144[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13072 === 23))
{var inst_13048 = (state_13071[12]);var inst_13052 = (state_13071[2]);var inst_13053 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13048);var state_13071__$1 = (function (){var statearr_13109 = state_13071;(statearr_13109[18] = inst_13052);
return statearr_13109;
})();var statearr_13110_13145 = state_13071__$1;(statearr_13110_13145[2] = inst_13053);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13071__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13072 === 24))
{var inst_13000 = (state_13071[7]);var inst_13050 = (state_13071[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13071,23,Object,null,22);var inst_13057 = cljs.core.async.muxch_STAR_.call(null,inst_13050);var state_13071__$1 = state_13071;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13071__$1,25,inst_13057,inst_13000);
} else
{if((state_val_13072 === 25))
{var inst_13059 = (state_13071[2]);var state_13071__$1 = state_13071;var statearr_13111_13146 = state_13071__$1;(statearr_13111_13146[2] = inst_13059);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13071__$1);
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
});})(c__6319__auto___13119,mults,ensure_mult,p))
;return ((function (switch__6304__auto__,c__6319__auto___13119,mults,ensure_mult,p){
return (function() {
var state_machine__6305__auto__ = null;
var state_machine__6305__auto____0 = (function (){var statearr_13115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13115[0] = state_machine__6305__auto__);
(statearr_13115[1] = 1);
return statearr_13115;
});
var state_machine__6305__auto____1 = (function (state_13071){while(true){
var ret_value__6306__auto__ = (function (){try{while(true){
var result__6307__auto__ = switch__6304__auto__.call(null,state_13071);if(cljs.core.keyword_identical_QMARK_.call(null,result__6307__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6307__auto__;
}
break;
}
}catch (e13116){if((e13116 instanceof Object))
{var ex__6308__auto__ = e13116;var statearr_13117_13147 = state_13071;(statearr_13117_13147[5] = ex__6308__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13071);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13116;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6306__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13148 = state_13071;
state_13071 = G__13148;
continue;
}
} else
{return ret_value__6306__auto__;
}
break;
}
});
state_machine__6305__auto__ = function(state_13071){
switch(arguments.length){
case 0:
return state_machine__6305__auto____0.call(this);
case 1:
return state_machine__6305__auto____1.call(this,state_13071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6305__auto____0;
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6305__auto____1;
return state_machine__6305__auto__;
})()
;})(switch__6304__auto__,c__6319__auto___13119,mults,ensure_mult,p))
})();var state__6321__auto__ = (function (){var statearr_13118 = f__6320__auto__.call(null);(statearr_13118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6319__auto___13119);
return statearr_13118;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6321__auto__);
});})(c__6319__auto___13119,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6319__auto___13285 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6319__auto___13285,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6320__auto__ = (function (){var switch__6304__auto__ = ((function (c__6319__auto___13285,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13255){var state_val_13256 = (state_13255[1]);if((state_val_13256 === 1))
{var state_13255__$1 = state_13255;var statearr_13257_13286 = state_13255__$1;(statearr_13257_13286[2] = null);
(statearr_13257_13286[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 2))
{var inst_13218 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13219 = 0;var state_13255__$1 = (function (){var statearr_13258 = state_13255;(statearr_13258[7] = inst_13218);
(statearr_13258[8] = inst_13219);
return statearr_13258;
})();var statearr_13259_13287 = state_13255__$1;(statearr_13259_13287[2] = null);
(statearr_13259_13287[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 3))
{var inst_13253 = (state_13255[2]);var state_13255__$1 = state_13255;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13255__$1,inst_13253);
} else
{if((state_val_13256 === 4))
{var inst_13219 = (state_13255[8]);var inst_13221 = (inst_13219 < cnt);var state_13255__$1 = state_13255;if(cljs.core.truth_(inst_13221))
{var statearr_13260_13288 = state_13255__$1;(statearr_13260_13288[1] = 6);
} else
{var statearr_13261_13289 = state_13255__$1;(statearr_13261_13289[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 5))
{var inst_13239 = (state_13255[2]);var state_13255__$1 = (function (){var statearr_13262 = state_13255;(statearr_13262[9] = inst_13239);
return statearr_13262;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13255__$1,12,dchan);
} else
{if((state_val_13256 === 6))
{var state_13255__$1 = state_13255;var statearr_13263_13290 = state_13255__$1;(statearr_13263_13290[2] = null);
(statearr_13263_13290[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 7))
{var state_13255__$1 = state_13255;var statearr_13264_13291 = state_13255__$1;(statearr_13264_13291[2] = null);
(statearr_13264_13291[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 8))
{var inst_13237 = (state_13255[2]);var state_13255__$1 = state_13255;var statearr_13265_13292 = state_13255__$1;(statearr_13265_13292[2] = inst_13237);
(statearr_13265_13292[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 9))
{var inst_13219 = (state_13255[8]);var inst_13232 = (state_13255[2]);var inst_13233 = (inst_13219 + 1);var inst_13219__$1 = inst_13233;var state_13255__$1 = (function (){var statearr_13266 = state_13255;(statearr_13266[10] = inst_13232);
(statearr_13266[8] = inst_13219__$1);
return statearr_13266;
})();var statearr_13267_13293 = state_13255__$1;(statearr_13267_13293[2] = null);
(statearr_13267_13293[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 10))
{var inst_13223 = (state_13255[2]);var inst_13224 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13255__$1 = (function (){var statearr_13268 = state_13255;(statearr_13268[11] = inst_13223);
return statearr_13268;
})();var statearr_13269_13294 = state_13255__$1;(statearr_13269_13294[2] = inst_13224);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13255__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 11))
{var inst_13219 = (state_13255[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13255,10,Object,null,9);var inst_13228 = chs__$1.call(null,inst_13219);var inst_13229 = done.call(null,inst_13219);var inst_13230 = cljs.core.async.take_BANG_.call(null,inst_13228,inst_13229);var state_13255__$1 = state_13255;var statearr_13270_13295 = state_13255__$1;(statearr_13270_13295[2] = inst_13230);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13255__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 12))
{var inst_13241 = (state_13255[12]);var inst_13241__$1 = (state_13255[2]);var inst_13242 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13241__$1);var state_13255__$1 = (function (){var statearr_13271 = state_13255;(statearr_13271[12] = inst_13241__$1);
return statearr_13271;
})();if(cljs.core.truth_(inst_13242))
{var statearr_13272_13296 = state_13255__$1;(statearr_13272_13296[1] = 13);
} else
{var statearr_13273_13297 = state_13255__$1;(statearr_13273_13297[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 13))
{var inst_13244 = cljs.core.async.close_BANG_.call(null,out);var state_13255__$1 = state_13255;var statearr_13274_13298 = state_13255__$1;(statearr_13274_13298[2] = inst_13244);
(statearr_13274_13298[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 14))
{var inst_13241 = (state_13255[12]);var inst_13246 = cljs.core.apply.call(null,f,inst_13241);var state_13255__$1 = state_13255;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13255__$1,16,out,inst_13246);
} else
{if((state_val_13256 === 15))
{var inst_13251 = (state_13255[2]);var state_13255__$1 = state_13255;var statearr_13275_13299 = state_13255__$1;(statearr_13275_13299[2] = inst_13251);
(statearr_13275_13299[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 16))
{var inst_13248 = (state_13255[2]);var state_13255__$1 = (function (){var statearr_13276 = state_13255;(statearr_13276[13] = inst_13248);
return statearr_13276;
})();var statearr_13277_13300 = state_13255__$1;(statearr_13277_13300[2] = null);
(statearr_13277_13300[1] = 2);
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
});})(c__6319__auto___13285,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6304__auto__,c__6319__auto___13285,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6305__auto__ = null;
var state_machine__6305__auto____0 = (function (){var statearr_13281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13281[0] = state_machine__6305__auto__);
(statearr_13281[1] = 1);
return statearr_13281;
});
var state_machine__6305__auto____1 = (function (state_13255){while(true){
var ret_value__6306__auto__ = (function (){try{while(true){
var result__6307__auto__ = switch__6304__auto__.call(null,state_13255);if(cljs.core.keyword_identical_QMARK_.call(null,result__6307__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6307__auto__;
}
break;
}
}catch (e13282){if((e13282 instanceof Object))
{var ex__6308__auto__ = e13282;var statearr_13283_13301 = state_13255;(statearr_13283_13301[5] = ex__6308__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13255);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13282;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6306__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13302 = state_13255;
state_13255 = G__13302;
continue;
}
} else
{return ret_value__6306__auto__;
}
break;
}
});
state_machine__6305__auto__ = function(state_13255){
switch(arguments.length){
case 0:
return state_machine__6305__auto____0.call(this);
case 1:
return state_machine__6305__auto____1.call(this,state_13255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6305__auto____0;
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6305__auto____1;
return state_machine__6305__auto__;
})()
;})(switch__6304__auto__,c__6319__auto___13285,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6321__auto__ = (function (){var statearr_13284 = f__6320__auto__.call(null);(statearr_13284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6319__auto___13285);
return statearr_13284;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6321__auto__);
});})(c__6319__auto___13285,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6319__auto___13410 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6319__auto___13410,out){
return (function (){var f__6320__auto__ = (function (){var switch__6304__auto__ = ((function (c__6319__auto___13410,out){
return (function (state_13386){var state_val_13387 = (state_13386[1]);if((state_val_13387 === 1))
{var inst_13357 = cljs.core.vec.call(null,chs);var inst_13358 = inst_13357;var state_13386__$1 = (function (){var statearr_13388 = state_13386;(statearr_13388[7] = inst_13358);
return statearr_13388;
})();var statearr_13389_13411 = state_13386__$1;(statearr_13389_13411[2] = null);
(statearr_13389_13411[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 2))
{var inst_13358 = (state_13386[7]);var inst_13360 = cljs.core.count.call(null,inst_13358);var inst_13361 = (inst_13360 > 0);var state_13386__$1 = state_13386;if(cljs.core.truth_(inst_13361))
{var statearr_13390_13412 = state_13386__$1;(statearr_13390_13412[1] = 4);
} else
{var statearr_13391_13413 = state_13386__$1;(statearr_13391_13413[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 3))
{var inst_13384 = (state_13386[2]);var state_13386__$1 = state_13386;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13386__$1,inst_13384);
} else
{if((state_val_13387 === 4))
{var inst_13358 = (state_13386[7]);var state_13386__$1 = state_13386;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13386__$1,7,inst_13358);
} else
{if((state_val_13387 === 5))
{var inst_13380 = cljs.core.async.close_BANG_.call(null,out);var state_13386__$1 = state_13386;var statearr_13392_13414 = state_13386__$1;(statearr_13392_13414[2] = inst_13380);
(statearr_13392_13414[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 6))
{var inst_13382 = (state_13386[2]);var state_13386__$1 = state_13386;var statearr_13393_13415 = state_13386__$1;(statearr_13393_13415[2] = inst_13382);
(statearr_13393_13415[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 7))
{var inst_13366 = (state_13386[8]);var inst_13365 = (state_13386[9]);var inst_13365__$1 = (state_13386[2]);var inst_13366__$1 = cljs.core.nth.call(null,inst_13365__$1,0,null);var inst_13367 = cljs.core.nth.call(null,inst_13365__$1,1,null);var inst_13368 = (inst_13366__$1 == null);var state_13386__$1 = (function (){var statearr_13394 = state_13386;(statearr_13394[10] = inst_13367);
(statearr_13394[8] = inst_13366__$1);
(statearr_13394[9] = inst_13365__$1);
return statearr_13394;
})();if(cljs.core.truth_(inst_13368))
{var statearr_13395_13416 = state_13386__$1;(statearr_13395_13416[1] = 8);
} else
{var statearr_13396_13417 = state_13386__$1;(statearr_13396_13417[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 8))
{var inst_13367 = (state_13386[10]);var inst_13366 = (state_13386[8]);var inst_13365 = (state_13386[9]);var inst_13358 = (state_13386[7]);var inst_13370 = (function (){var c = inst_13367;var v = inst_13366;var vec__13363 = inst_13365;var cs = inst_13358;return ((function (c,v,vec__13363,cs,inst_13367,inst_13366,inst_13365,inst_13358,state_val_13387,c__6319__auto___13410,out){
return (function (p1__13303_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13303_SHARP_);
});
;})(c,v,vec__13363,cs,inst_13367,inst_13366,inst_13365,inst_13358,state_val_13387,c__6319__auto___13410,out))
})();var inst_13371 = cljs.core.filterv.call(null,inst_13370,inst_13358);var inst_13358__$1 = inst_13371;var state_13386__$1 = (function (){var statearr_13397 = state_13386;(statearr_13397[7] = inst_13358__$1);
return statearr_13397;
})();var statearr_13398_13418 = state_13386__$1;(statearr_13398_13418[2] = null);
(statearr_13398_13418[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 9))
{var inst_13366 = (state_13386[8]);var state_13386__$1 = state_13386;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13386__$1,11,out,inst_13366);
} else
{if((state_val_13387 === 10))
{var inst_13378 = (state_13386[2]);var state_13386__$1 = state_13386;var statearr_13400_13419 = state_13386__$1;(statearr_13400_13419[2] = inst_13378);
(statearr_13400_13419[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 11))
{var inst_13358 = (state_13386[7]);var inst_13375 = (state_13386[2]);var tmp13399 = inst_13358;var inst_13358__$1 = tmp13399;var state_13386__$1 = (function (){var statearr_13401 = state_13386;(statearr_13401[7] = inst_13358__$1);
(statearr_13401[11] = inst_13375);
return statearr_13401;
})();var statearr_13402_13420 = state_13386__$1;(statearr_13402_13420[2] = null);
(statearr_13402_13420[1] = 2);
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
});})(c__6319__auto___13410,out))
;return ((function (switch__6304__auto__,c__6319__auto___13410,out){
return (function() {
var state_machine__6305__auto__ = null;
var state_machine__6305__auto____0 = (function (){var statearr_13406 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13406[0] = state_machine__6305__auto__);
(statearr_13406[1] = 1);
return statearr_13406;
});
var state_machine__6305__auto____1 = (function (state_13386){while(true){
var ret_value__6306__auto__ = (function (){try{while(true){
var result__6307__auto__ = switch__6304__auto__.call(null,state_13386);if(cljs.core.keyword_identical_QMARK_.call(null,result__6307__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6307__auto__;
}
break;
}
}catch (e13407){if((e13407 instanceof Object))
{var ex__6308__auto__ = e13407;var statearr_13408_13421 = state_13386;(statearr_13408_13421[5] = ex__6308__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13386);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13407;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6306__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13422 = state_13386;
state_13386 = G__13422;
continue;
}
} else
{return ret_value__6306__auto__;
}
break;
}
});
state_machine__6305__auto__ = function(state_13386){
switch(arguments.length){
case 0:
return state_machine__6305__auto____0.call(this);
case 1:
return state_machine__6305__auto____1.call(this,state_13386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6305__auto____0;
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6305__auto____1;
return state_machine__6305__auto__;
})()
;})(switch__6304__auto__,c__6319__auto___13410,out))
})();var state__6321__auto__ = (function (){var statearr_13409 = f__6320__auto__.call(null);(statearr_13409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6319__auto___13410);
return statearr_13409;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6321__auto__);
});})(c__6319__auto___13410,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6319__auto___13515 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6319__auto___13515,out){
return (function (){var f__6320__auto__ = (function (){var switch__6304__auto__ = ((function (c__6319__auto___13515,out){
return (function (state_13492){var state_val_13493 = (state_13492[1]);if((state_val_13493 === 1))
{var inst_13469 = 0;var state_13492__$1 = (function (){var statearr_13494 = state_13492;(statearr_13494[7] = inst_13469);
return statearr_13494;
})();var statearr_13495_13516 = state_13492__$1;(statearr_13495_13516[2] = null);
(statearr_13495_13516[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13493 === 2))
{var inst_13469 = (state_13492[7]);var inst_13471 = (inst_13469 < n);var state_13492__$1 = state_13492;if(cljs.core.truth_(inst_13471))
{var statearr_13496_13517 = state_13492__$1;(statearr_13496_13517[1] = 4);
} else
{var statearr_13497_13518 = state_13492__$1;(statearr_13497_13518[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13493 === 3))
{var inst_13489 = (state_13492[2]);var inst_13490 = cljs.core.async.close_BANG_.call(null,out);var state_13492__$1 = (function (){var statearr_13498 = state_13492;(statearr_13498[8] = inst_13489);
return statearr_13498;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13492__$1,inst_13490);
} else
{if((state_val_13493 === 4))
{var state_13492__$1 = state_13492;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13492__$1,7,ch);
} else
{if((state_val_13493 === 5))
{var state_13492__$1 = state_13492;var statearr_13499_13519 = state_13492__$1;(statearr_13499_13519[2] = null);
(statearr_13499_13519[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13493 === 6))
{var inst_13487 = (state_13492[2]);var state_13492__$1 = state_13492;var statearr_13500_13520 = state_13492__$1;(statearr_13500_13520[2] = inst_13487);
(statearr_13500_13520[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13493 === 7))
{var inst_13474 = (state_13492[9]);var inst_13474__$1 = (state_13492[2]);var inst_13475 = (inst_13474__$1 == null);var inst_13476 = cljs.core.not.call(null,inst_13475);var state_13492__$1 = (function (){var statearr_13501 = state_13492;(statearr_13501[9] = inst_13474__$1);
return statearr_13501;
})();if(inst_13476)
{var statearr_13502_13521 = state_13492__$1;(statearr_13502_13521[1] = 8);
} else
{var statearr_13503_13522 = state_13492__$1;(statearr_13503_13522[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13493 === 8))
{var inst_13474 = (state_13492[9]);var state_13492__$1 = state_13492;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13492__$1,11,out,inst_13474);
} else
{if((state_val_13493 === 9))
{var state_13492__$1 = state_13492;var statearr_13504_13523 = state_13492__$1;(statearr_13504_13523[2] = null);
(statearr_13504_13523[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13493 === 10))
{var inst_13484 = (state_13492[2]);var state_13492__$1 = state_13492;var statearr_13505_13524 = state_13492__$1;(statearr_13505_13524[2] = inst_13484);
(statearr_13505_13524[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13493 === 11))
{var inst_13469 = (state_13492[7]);var inst_13479 = (state_13492[2]);var inst_13480 = (inst_13469 + 1);var inst_13469__$1 = inst_13480;var state_13492__$1 = (function (){var statearr_13506 = state_13492;(statearr_13506[10] = inst_13479);
(statearr_13506[7] = inst_13469__$1);
return statearr_13506;
})();var statearr_13507_13525 = state_13492__$1;(statearr_13507_13525[2] = null);
(statearr_13507_13525[1] = 2);
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
});})(c__6319__auto___13515,out))
;return ((function (switch__6304__auto__,c__6319__auto___13515,out){
return (function() {
var state_machine__6305__auto__ = null;
var state_machine__6305__auto____0 = (function (){var statearr_13511 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13511[0] = state_machine__6305__auto__);
(statearr_13511[1] = 1);
return statearr_13511;
});
var state_machine__6305__auto____1 = (function (state_13492){while(true){
var ret_value__6306__auto__ = (function (){try{while(true){
var result__6307__auto__ = switch__6304__auto__.call(null,state_13492);if(cljs.core.keyword_identical_QMARK_.call(null,result__6307__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6307__auto__;
}
break;
}
}catch (e13512){if((e13512 instanceof Object))
{var ex__6308__auto__ = e13512;var statearr_13513_13526 = state_13492;(statearr_13513_13526[5] = ex__6308__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13492);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13512;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6306__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13527 = state_13492;
state_13492 = G__13527;
continue;
}
} else
{return ret_value__6306__auto__;
}
break;
}
});
state_machine__6305__auto__ = function(state_13492){
switch(arguments.length){
case 0:
return state_machine__6305__auto____0.call(this);
case 1:
return state_machine__6305__auto____1.call(this,state_13492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6305__auto____0;
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6305__auto____1;
return state_machine__6305__auto__;
})()
;})(switch__6304__auto__,c__6319__auto___13515,out))
})();var state__6321__auto__ = (function (){var statearr_13514 = f__6320__auto__.call(null);(statearr_13514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6319__auto___13515);
return statearr_13514;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6321__auto__);
});})(c__6319__auto___13515,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6319__auto___13624 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6319__auto___13624,out){
return (function (){var f__6320__auto__ = (function (){var switch__6304__auto__ = ((function (c__6319__auto___13624,out){
return (function (state_13599){var state_val_13600 = (state_13599[1]);if((state_val_13600 === 1))
{var inst_13576 = null;var state_13599__$1 = (function (){var statearr_13601 = state_13599;(statearr_13601[7] = inst_13576);
return statearr_13601;
})();var statearr_13602_13625 = state_13599__$1;(statearr_13602_13625[2] = null);
(statearr_13602_13625[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13600 === 2))
{var state_13599__$1 = state_13599;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13599__$1,4,ch);
} else
{if((state_val_13600 === 3))
{var inst_13596 = (state_13599[2]);var inst_13597 = cljs.core.async.close_BANG_.call(null,out);var state_13599__$1 = (function (){var statearr_13603 = state_13599;(statearr_13603[8] = inst_13596);
return statearr_13603;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13599__$1,inst_13597);
} else
{if((state_val_13600 === 4))
{var inst_13579 = (state_13599[9]);var inst_13579__$1 = (state_13599[2]);var inst_13580 = (inst_13579__$1 == null);var inst_13581 = cljs.core.not.call(null,inst_13580);var state_13599__$1 = (function (){var statearr_13604 = state_13599;(statearr_13604[9] = inst_13579__$1);
return statearr_13604;
})();if(inst_13581)
{var statearr_13605_13626 = state_13599__$1;(statearr_13605_13626[1] = 5);
} else
{var statearr_13606_13627 = state_13599__$1;(statearr_13606_13627[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13600 === 5))
{var inst_13579 = (state_13599[9]);var inst_13576 = (state_13599[7]);var inst_13583 = cljs.core._EQ_.call(null,inst_13579,inst_13576);var state_13599__$1 = state_13599;if(inst_13583)
{var statearr_13607_13628 = state_13599__$1;(statearr_13607_13628[1] = 8);
} else
{var statearr_13608_13629 = state_13599__$1;(statearr_13608_13629[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13600 === 6))
{var state_13599__$1 = state_13599;var statearr_13610_13630 = state_13599__$1;(statearr_13610_13630[2] = null);
(statearr_13610_13630[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13600 === 7))
{var inst_13594 = (state_13599[2]);var state_13599__$1 = state_13599;var statearr_13611_13631 = state_13599__$1;(statearr_13611_13631[2] = inst_13594);
(statearr_13611_13631[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13600 === 8))
{var inst_13576 = (state_13599[7]);var tmp13609 = inst_13576;var inst_13576__$1 = tmp13609;var state_13599__$1 = (function (){var statearr_13612 = state_13599;(statearr_13612[7] = inst_13576__$1);
return statearr_13612;
})();var statearr_13613_13632 = state_13599__$1;(statearr_13613_13632[2] = null);
(statearr_13613_13632[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13600 === 9))
{var inst_13579 = (state_13599[9]);var state_13599__$1 = state_13599;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13599__$1,11,out,inst_13579);
} else
{if((state_val_13600 === 10))
{var inst_13591 = (state_13599[2]);var state_13599__$1 = state_13599;var statearr_13614_13633 = state_13599__$1;(statearr_13614_13633[2] = inst_13591);
(statearr_13614_13633[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13600 === 11))
{var inst_13579 = (state_13599[9]);var inst_13588 = (state_13599[2]);var inst_13576 = inst_13579;var state_13599__$1 = (function (){var statearr_13615 = state_13599;(statearr_13615[10] = inst_13588);
(statearr_13615[7] = inst_13576);
return statearr_13615;
})();var statearr_13616_13634 = state_13599__$1;(statearr_13616_13634[2] = null);
(statearr_13616_13634[1] = 2);
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
});})(c__6319__auto___13624,out))
;return ((function (switch__6304__auto__,c__6319__auto___13624,out){
return (function() {
var state_machine__6305__auto__ = null;
var state_machine__6305__auto____0 = (function (){var statearr_13620 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13620[0] = state_machine__6305__auto__);
(statearr_13620[1] = 1);
return statearr_13620;
});
var state_machine__6305__auto____1 = (function (state_13599){while(true){
var ret_value__6306__auto__ = (function (){try{while(true){
var result__6307__auto__ = switch__6304__auto__.call(null,state_13599);if(cljs.core.keyword_identical_QMARK_.call(null,result__6307__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6307__auto__;
}
break;
}
}catch (e13621){if((e13621 instanceof Object))
{var ex__6308__auto__ = e13621;var statearr_13622_13635 = state_13599;(statearr_13622_13635[5] = ex__6308__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13599);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13621;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6306__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13636 = state_13599;
state_13599 = G__13636;
continue;
}
} else
{return ret_value__6306__auto__;
}
break;
}
});
state_machine__6305__auto__ = function(state_13599){
switch(arguments.length){
case 0:
return state_machine__6305__auto____0.call(this);
case 1:
return state_machine__6305__auto____1.call(this,state_13599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6305__auto____0;
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6305__auto____1;
return state_machine__6305__auto__;
})()
;})(switch__6304__auto__,c__6319__auto___13624,out))
})();var state__6321__auto__ = (function (){var statearr_13623 = f__6320__auto__.call(null);(statearr_13623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6319__auto___13624);
return statearr_13623;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6321__auto__);
});})(c__6319__auto___13624,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6319__auto___13771 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6319__auto___13771,out){
return (function (){var f__6320__auto__ = (function (){var switch__6304__auto__ = ((function (c__6319__auto___13771,out){
return (function (state_13741){var state_val_13742 = (state_13741[1]);if((state_val_13742 === 1))
{var inst_13704 = (new Array(n));var inst_13705 = inst_13704;var inst_13706 = 0;var state_13741__$1 = (function (){var statearr_13743 = state_13741;(statearr_13743[7] = inst_13705);
(statearr_13743[8] = inst_13706);
return statearr_13743;
})();var statearr_13744_13772 = state_13741__$1;(statearr_13744_13772[2] = null);
(statearr_13744_13772[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13742 === 2))
{var state_13741__$1 = state_13741;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13741__$1,4,ch);
} else
{if((state_val_13742 === 3))
{var inst_13739 = (state_13741[2]);var state_13741__$1 = state_13741;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13741__$1,inst_13739);
} else
{if((state_val_13742 === 4))
{var inst_13709 = (state_13741[9]);var inst_13709__$1 = (state_13741[2]);var inst_13710 = (inst_13709__$1 == null);var inst_13711 = cljs.core.not.call(null,inst_13710);var state_13741__$1 = (function (){var statearr_13745 = state_13741;(statearr_13745[9] = inst_13709__$1);
return statearr_13745;
})();if(inst_13711)
{var statearr_13746_13773 = state_13741__$1;(statearr_13746_13773[1] = 5);
} else
{var statearr_13747_13774 = state_13741__$1;(statearr_13747_13774[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13742 === 5))
{var inst_13714 = (state_13741[10]);var inst_13705 = (state_13741[7]);var inst_13706 = (state_13741[8]);var inst_13709 = (state_13741[9]);var inst_13713 = (inst_13705[inst_13706] = inst_13709);var inst_13714__$1 = (inst_13706 + 1);var inst_13715 = (inst_13714__$1 < n);var state_13741__$1 = (function (){var statearr_13748 = state_13741;(statearr_13748[11] = inst_13713);
(statearr_13748[10] = inst_13714__$1);
return statearr_13748;
})();if(cljs.core.truth_(inst_13715))
{var statearr_13749_13775 = state_13741__$1;(statearr_13749_13775[1] = 8);
} else
{var statearr_13750_13776 = state_13741__$1;(statearr_13750_13776[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13742 === 6))
{var inst_13706 = (state_13741[8]);var inst_13727 = (inst_13706 > 0);var state_13741__$1 = state_13741;if(cljs.core.truth_(inst_13727))
{var statearr_13752_13777 = state_13741__$1;(statearr_13752_13777[1] = 12);
} else
{var statearr_13753_13778 = state_13741__$1;(statearr_13753_13778[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13742 === 7))
{var inst_13737 = (state_13741[2]);var state_13741__$1 = state_13741;var statearr_13754_13779 = state_13741__$1;(statearr_13754_13779[2] = inst_13737);
(statearr_13754_13779[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13742 === 8))
{var inst_13714 = (state_13741[10]);var inst_13705 = (state_13741[7]);var tmp13751 = inst_13705;var inst_13705__$1 = tmp13751;var inst_13706 = inst_13714;var state_13741__$1 = (function (){var statearr_13755 = state_13741;(statearr_13755[7] = inst_13705__$1);
(statearr_13755[8] = inst_13706);
return statearr_13755;
})();var statearr_13756_13780 = state_13741__$1;(statearr_13756_13780[2] = null);
(statearr_13756_13780[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13742 === 9))
{var inst_13705 = (state_13741[7]);var inst_13719 = cljs.core.vec.call(null,inst_13705);var state_13741__$1 = state_13741;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13741__$1,11,out,inst_13719);
} else
{if((state_val_13742 === 10))
{var inst_13725 = (state_13741[2]);var state_13741__$1 = state_13741;var statearr_13757_13781 = state_13741__$1;(statearr_13757_13781[2] = inst_13725);
(statearr_13757_13781[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13742 === 11))
{var inst_13721 = (state_13741[2]);var inst_13722 = (new Array(n));var inst_13705 = inst_13722;var inst_13706 = 0;var state_13741__$1 = (function (){var statearr_13758 = state_13741;(statearr_13758[12] = inst_13721);
(statearr_13758[7] = inst_13705);
(statearr_13758[8] = inst_13706);
return statearr_13758;
})();var statearr_13759_13782 = state_13741__$1;(statearr_13759_13782[2] = null);
(statearr_13759_13782[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13742 === 12))
{var inst_13705 = (state_13741[7]);var inst_13729 = cljs.core.vec.call(null,inst_13705);var state_13741__$1 = state_13741;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13741__$1,15,out,inst_13729);
} else
{if((state_val_13742 === 13))
{var state_13741__$1 = state_13741;var statearr_13760_13783 = state_13741__$1;(statearr_13760_13783[2] = null);
(statearr_13760_13783[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13742 === 14))
{var inst_13734 = (state_13741[2]);var inst_13735 = cljs.core.async.close_BANG_.call(null,out);var state_13741__$1 = (function (){var statearr_13761 = state_13741;(statearr_13761[13] = inst_13734);
return statearr_13761;
})();var statearr_13762_13784 = state_13741__$1;(statearr_13762_13784[2] = inst_13735);
(statearr_13762_13784[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13742 === 15))
{var inst_13731 = (state_13741[2]);var state_13741__$1 = state_13741;var statearr_13763_13785 = state_13741__$1;(statearr_13763_13785[2] = inst_13731);
(statearr_13763_13785[1] = 14);
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
});})(c__6319__auto___13771,out))
;return ((function (switch__6304__auto__,c__6319__auto___13771,out){
return (function() {
var state_machine__6305__auto__ = null;
var state_machine__6305__auto____0 = (function (){var statearr_13767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13767[0] = state_machine__6305__auto__);
(statearr_13767[1] = 1);
return statearr_13767;
});
var state_machine__6305__auto____1 = (function (state_13741){while(true){
var ret_value__6306__auto__ = (function (){try{while(true){
var result__6307__auto__ = switch__6304__auto__.call(null,state_13741);if(cljs.core.keyword_identical_QMARK_.call(null,result__6307__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6307__auto__;
}
break;
}
}catch (e13768){if((e13768 instanceof Object))
{var ex__6308__auto__ = e13768;var statearr_13769_13786 = state_13741;(statearr_13769_13786[5] = ex__6308__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13741);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13768;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6306__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13787 = state_13741;
state_13741 = G__13787;
continue;
}
} else
{return ret_value__6306__auto__;
}
break;
}
});
state_machine__6305__auto__ = function(state_13741){
switch(arguments.length){
case 0:
return state_machine__6305__auto____0.call(this);
case 1:
return state_machine__6305__auto____1.call(this,state_13741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6305__auto____0;
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6305__auto____1;
return state_machine__6305__auto__;
})()
;})(switch__6304__auto__,c__6319__auto___13771,out))
})();var state__6321__auto__ = (function (){var statearr_13770 = f__6320__auto__.call(null);(statearr_13770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6319__auto___13771);
return statearr_13770;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6321__auto__);
});})(c__6319__auto___13771,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6319__auto___13930 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6319__auto___13930,out){
return (function (){var f__6320__auto__ = (function (){var switch__6304__auto__ = ((function (c__6319__auto___13930,out){
return (function (state_13900){var state_val_13901 = (state_13900[1]);if((state_val_13901 === 1))
{var inst_13859 = [];var inst_13860 = inst_13859;var inst_13861 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13900__$1 = (function (){var statearr_13902 = state_13900;(statearr_13902[7] = inst_13861);
(statearr_13902[8] = inst_13860);
return statearr_13902;
})();var statearr_13903_13931 = state_13900__$1;(statearr_13903_13931[2] = null);
(statearr_13903_13931[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13901 === 2))
{var state_13900__$1 = state_13900;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13900__$1,4,ch);
} else
{if((state_val_13901 === 3))
{var inst_13898 = (state_13900[2]);var state_13900__$1 = state_13900;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13900__$1,inst_13898);
} else
{if((state_val_13901 === 4))
{var inst_13864 = (state_13900[9]);var inst_13864__$1 = (state_13900[2]);var inst_13865 = (inst_13864__$1 == null);var inst_13866 = cljs.core.not.call(null,inst_13865);var state_13900__$1 = (function (){var statearr_13904 = state_13900;(statearr_13904[9] = inst_13864__$1);
return statearr_13904;
})();if(inst_13866)
{var statearr_13905_13932 = state_13900__$1;(statearr_13905_13932[1] = 5);
} else
{var statearr_13906_13933 = state_13900__$1;(statearr_13906_13933[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13901 === 5))
{var inst_13868 = (state_13900[10]);var inst_13864 = (state_13900[9]);var inst_13861 = (state_13900[7]);var inst_13868__$1 = f.call(null,inst_13864);var inst_13869 = cljs.core._EQ_.call(null,inst_13868__$1,inst_13861);var inst_13870 = cljs.core.keyword_identical_QMARK_.call(null,inst_13861,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13871 = (inst_13869) || (inst_13870);var state_13900__$1 = (function (){var statearr_13907 = state_13900;(statearr_13907[10] = inst_13868__$1);
return statearr_13907;
})();if(cljs.core.truth_(inst_13871))
{var statearr_13908_13934 = state_13900__$1;(statearr_13908_13934[1] = 8);
} else
{var statearr_13909_13935 = state_13900__$1;(statearr_13909_13935[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13901 === 6))
{var inst_13860 = (state_13900[8]);var inst_13885 = inst_13860.length;var inst_13886 = (inst_13885 > 0);var state_13900__$1 = state_13900;if(cljs.core.truth_(inst_13886))
{var statearr_13911_13936 = state_13900__$1;(statearr_13911_13936[1] = 12);
} else
{var statearr_13912_13937 = state_13900__$1;(statearr_13912_13937[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13901 === 7))
{var inst_13896 = (state_13900[2]);var state_13900__$1 = state_13900;var statearr_13913_13938 = state_13900__$1;(statearr_13913_13938[2] = inst_13896);
(statearr_13913_13938[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13901 === 8))
{var inst_13868 = (state_13900[10]);var inst_13864 = (state_13900[9]);var inst_13860 = (state_13900[8]);var inst_13873 = inst_13860.push(inst_13864);var tmp13910 = inst_13860;var inst_13860__$1 = tmp13910;var inst_13861 = inst_13868;var state_13900__$1 = (function (){var statearr_13914 = state_13900;(statearr_13914[11] = inst_13873);
(statearr_13914[7] = inst_13861);
(statearr_13914[8] = inst_13860__$1);
return statearr_13914;
})();var statearr_13915_13939 = state_13900__$1;(statearr_13915_13939[2] = null);
(statearr_13915_13939[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13901 === 9))
{var inst_13860 = (state_13900[8]);var inst_13876 = cljs.core.vec.call(null,inst_13860);var state_13900__$1 = state_13900;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13900__$1,11,out,inst_13876);
} else
{if((state_val_13901 === 10))
{var inst_13883 = (state_13900[2]);var state_13900__$1 = state_13900;var statearr_13916_13940 = state_13900__$1;(statearr_13916_13940[2] = inst_13883);
(statearr_13916_13940[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13901 === 11))
{var inst_13868 = (state_13900[10]);var inst_13864 = (state_13900[9]);var inst_13878 = (state_13900[2]);var inst_13879 = [];var inst_13880 = inst_13879.push(inst_13864);var inst_13860 = inst_13879;var inst_13861 = inst_13868;var state_13900__$1 = (function (){var statearr_13917 = state_13900;(statearr_13917[12] = inst_13878);
(statearr_13917[13] = inst_13880);
(statearr_13917[7] = inst_13861);
(statearr_13917[8] = inst_13860);
return statearr_13917;
})();var statearr_13918_13941 = state_13900__$1;(statearr_13918_13941[2] = null);
(statearr_13918_13941[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13901 === 12))
{var inst_13860 = (state_13900[8]);var inst_13888 = cljs.core.vec.call(null,inst_13860);var state_13900__$1 = state_13900;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13900__$1,15,out,inst_13888);
} else
{if((state_val_13901 === 13))
{var state_13900__$1 = state_13900;var statearr_13919_13942 = state_13900__$1;(statearr_13919_13942[2] = null);
(statearr_13919_13942[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13901 === 14))
{var inst_13893 = (state_13900[2]);var inst_13894 = cljs.core.async.close_BANG_.call(null,out);var state_13900__$1 = (function (){var statearr_13920 = state_13900;(statearr_13920[14] = inst_13893);
return statearr_13920;
})();var statearr_13921_13943 = state_13900__$1;(statearr_13921_13943[2] = inst_13894);
(statearr_13921_13943[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13901 === 15))
{var inst_13890 = (state_13900[2]);var state_13900__$1 = state_13900;var statearr_13922_13944 = state_13900__$1;(statearr_13922_13944[2] = inst_13890);
(statearr_13922_13944[1] = 14);
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
});})(c__6319__auto___13930,out))
;return ((function (switch__6304__auto__,c__6319__auto___13930,out){
return (function() {
var state_machine__6305__auto__ = null;
var state_machine__6305__auto____0 = (function (){var statearr_13926 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13926[0] = state_machine__6305__auto__);
(statearr_13926[1] = 1);
return statearr_13926;
});
var state_machine__6305__auto____1 = (function (state_13900){while(true){
var ret_value__6306__auto__ = (function (){try{while(true){
var result__6307__auto__ = switch__6304__auto__.call(null,state_13900);if(cljs.core.keyword_identical_QMARK_.call(null,result__6307__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6307__auto__;
}
break;
}
}catch (e13927){if((e13927 instanceof Object))
{var ex__6308__auto__ = e13927;var statearr_13928_13945 = state_13900;(statearr_13928_13945[5] = ex__6308__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13900);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13927;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6306__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13946 = state_13900;
state_13900 = G__13946;
continue;
}
} else
{return ret_value__6306__auto__;
}
break;
}
});
state_machine__6305__auto__ = function(state_13900){
switch(arguments.length){
case 0:
return state_machine__6305__auto____0.call(this);
case 1:
return state_machine__6305__auto____1.call(this,state_13900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6305__auto____0;
state_machine__6305__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6305__auto____1;
return state_machine__6305__auto__;
})()
;})(switch__6304__auto__,c__6319__auto___13930,out))
})();var state__6321__auto__ = (function (){var statearr_13929 = f__6320__auto__.call(null);(statearr_13929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6319__auto___13930);
return statearr_13929;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6321__auto__);
});})(c__6319__auto___13930,out))
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