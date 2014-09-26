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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t31511 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31511 = (function (f,fn_handler,meta31512){
this.f = f;
this.fn_handler = fn_handler;
this.meta31512 = meta31512;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31511.cljs$lang$type = true;
cljs.core.async.t31511.cljs$lang$ctorStr = "cljs.core.async/t31511";
cljs.core.async.t31511.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t31511");
});
cljs.core.async.t31511.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31511.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t31511.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t31511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31513){var self__ = this;
var _31513__$1 = this;return self__.meta31512;
});
cljs.core.async.t31511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31513,meta31512__$1){var self__ = this;
var _31513__$1 = this;return (new cljs.core.async.t31511(self__.f,self__.fn_handler,meta31512__$1));
});
cljs.core.async.__GT_t31511 = (function __GT_t31511(f__$1,fn_handler__$1,meta31512){return (new cljs.core.async.t31511(f__$1,fn_handler__$1,meta31512));
});
}
return (new cljs.core.async.t31511(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__31515 = buff;if(G__31515)
{var bit__4207__auto__ = null;if(cljs.core.truth_((function (){var or__3557__auto__ = bit__4207__auto__;if(cljs.core.truth_(or__3557__auto__))
{return or__3557__auto__;
} else
{return G__31515.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__31515.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31515);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31515);
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
{var val_31516 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_31516);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_31516,ret){
return (function (){return fn1.call(null,val_31516);
});})(val_31516,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4413__auto___31517 = n;var x_31518 = 0;while(true){
if((x_31518 < n__4413__auto___31517))
{(a[x_31518] = 0);
{
var G__31519 = (x_31518 + 1);
x_31518 = G__31519;
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
var G__31520 = (i + 1);
i = G__31520;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t31524 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31524 = (function (flag,alt_flag,meta31525){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31525 = meta31525;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31524.cljs$lang$type = true;
cljs.core.async.t31524.cljs$lang$ctorStr = "cljs.core.async/t31524";
cljs.core.async.t31524.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t31524");
});})(flag))
;
cljs.core.async.t31524.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31524.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t31524.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t31524.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31526){var self__ = this;
var _31526__$1 = this;return self__.meta31525;
});})(flag))
;
cljs.core.async.t31524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31526,meta31525__$1){var self__ = this;
var _31526__$1 = this;return (new cljs.core.async.t31524(self__.flag,self__.alt_flag,meta31525__$1));
});})(flag))
;
cljs.core.async.__GT_t31524 = ((function (flag){
return (function __GT_t31524(flag__$1,alt_flag__$1,meta31525){return (new cljs.core.async.t31524(flag__$1,alt_flag__$1,meta31525));
});})(flag))
;
}
return (new cljs.core.async.t31524(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t31530 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31530 = (function (cb,flag,alt_handler,meta31531){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta31531 = meta31531;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31530.cljs$lang$type = true;
cljs.core.async.t31530.cljs$lang$ctorStr = "cljs.core.async/t31530";
cljs.core.async.t31530.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t31530");
});
cljs.core.async.t31530.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31530.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t31530.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t31530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31532){var self__ = this;
var _31532__$1 = this;return self__.meta31531;
});
cljs.core.async.t31530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31532,meta31531__$1){var self__ = this;
var _31532__$1 = this;return (new cljs.core.async.t31530(self__.cb,self__.flag,self__.alt_handler,meta31531__$1));
});
cljs.core.async.__GT_t31530 = (function __GT_t31530(cb__$1,flag__$1,alt_handler__$1,meta31531){return (new cljs.core.async.t31530(cb__$1,flag__$1,alt_handler__$1,meta31531));
});
}
return (new cljs.core.async.t31530(cb,flag,alt_handler,null));
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
return (function (p1__31533_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31533_SHARP_,port], null));
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
var G__31534 = (i + 1);
i = G__31534;
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
var alts_BANG___delegate = function (ports,p__31535){var map__31537 = p__31535;var map__31537__$1 = ((cljs.core.seq_QMARK_.call(null,map__31537))?cljs.core.apply.call(null,cljs.core.hash_map,map__31537):map__31537);var opts = map__31537__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__31535 = null;if (arguments.length > 1) {
  p__31535 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__31535);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__31538){
var ports = cljs.core.first(arglist__31538);
var p__31535 = cljs.core.rest(arglist__31538);
return alts_BANG___delegate(ports,p__31535);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t31546 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31546 = (function (ch,f,map_LT_,meta31547){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31547 = meta31547;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31546.cljs$lang$type = true;
cljs.core.async.t31546.cljs$lang$ctorStr = "cljs.core.async/t31546";
cljs.core.async.t31546.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t31546");
});
cljs.core.async.t31546.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31546.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t31546.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31546.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t31549 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31549 = (function (fn1,_,meta31547,ch,f,map_LT_,meta31550){
this.fn1 = fn1;
this._ = _;
this.meta31547 = meta31547;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31550 = meta31550;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31549.cljs$lang$type = true;
cljs.core.async.t31549.cljs$lang$ctorStr = "cljs.core.async/t31549";
cljs.core.async.t31549.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t31549");
});})(___$1))
;
cljs.core.async.t31549.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31549.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t31549.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t31549.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__31539_SHARP_){return f1.call(null,(((p1__31539_SHARP_ == null))?null:self__.f.call(null,p1__31539_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t31549.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31551){var self__ = this;
var _31551__$1 = this;return self__.meta31550;
});})(___$1))
;
cljs.core.async.t31549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31551,meta31550__$1){var self__ = this;
var _31551__$1 = this;return (new cljs.core.async.t31549(self__.fn1,self__._,self__.meta31547,self__.ch,self__.f,self__.map_LT_,meta31550__$1));
});})(___$1))
;
cljs.core.async.__GT_t31549 = ((function (___$1){
return (function __GT_t31549(fn1__$1,___$2,meta31547__$1,ch__$2,f__$2,map_LT___$2,meta31550){return (new cljs.core.async.t31549(fn1__$1,___$2,meta31547__$1,ch__$2,f__$2,map_LT___$2,meta31550));
});})(___$1))
;
}
return (new cljs.core.async.t31549(fn1,___$1,self__.meta31547,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t31546.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31546.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31548){var self__ = this;
var _31548__$1 = this;return self__.meta31547;
});
cljs.core.async.t31546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31548,meta31547__$1){var self__ = this;
var _31548__$1 = this;return (new cljs.core.async.t31546(self__.ch,self__.f,self__.map_LT_,meta31547__$1));
});
cljs.core.async.__GT_t31546 = (function __GT_t31546(ch__$1,f__$1,map_LT___$1,meta31547){return (new cljs.core.async.t31546(ch__$1,f__$1,map_LT___$1,meta31547));
});
}
return (new cljs.core.async.t31546(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t31555 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31555 = (function (ch,f,map_GT_,meta31556){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta31556 = meta31556;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31555.cljs$lang$type = true;
cljs.core.async.t31555.cljs$lang$ctorStr = "cljs.core.async/t31555";
cljs.core.async.t31555.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t31555");
});
cljs.core.async.t31555.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31555.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t31555.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31555.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t31555.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31555.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31557){var self__ = this;
var _31557__$1 = this;return self__.meta31556;
});
cljs.core.async.t31555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31557,meta31556__$1){var self__ = this;
var _31557__$1 = this;return (new cljs.core.async.t31555(self__.ch,self__.f,self__.map_GT_,meta31556__$1));
});
cljs.core.async.__GT_t31555 = (function __GT_t31555(ch__$1,f__$1,map_GT___$1,meta31556){return (new cljs.core.async.t31555(ch__$1,f__$1,map_GT___$1,meta31556));
});
}
return (new cljs.core.async.t31555(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t31561 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31561 = (function (ch,p,filter_GT_,meta31562){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta31562 = meta31562;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31561.cljs$lang$type = true;
cljs.core.async.t31561.cljs$lang$ctorStr = "cljs.core.async/t31561";
cljs.core.async.t31561.cljs$lang$ctorPrWriter = (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t31561");
});
cljs.core.async.t31561.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31561.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t31561.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31561.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t31561.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31561.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31563){var self__ = this;
var _31563__$1 = this;return self__.meta31562;
});
cljs.core.async.t31561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31563,meta31562__$1){var self__ = this;
var _31563__$1 = this;return (new cljs.core.async.t31561(self__.ch,self__.p,self__.filter_GT_,meta31562__$1));
});
cljs.core.async.__GT_t31561 = (function __GT_t31561(ch__$1,p__$1,filter_GT___$1,meta31562){return (new cljs.core.async.t31561(ch__$1,p__$1,filter_GT___$1,meta31562));
});
}
return (new cljs.core.async.t31561(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6344__auto___31646 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___31646,out){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___31646,out){
return (function (state_31625){var state_val_31626 = (state_31625[1]);if((state_val_31626 === 7))
{var inst_31621 = (state_31625[2]);var state_31625__$1 = state_31625;var statearr_31627_31647 = state_31625__$1;(statearr_31627_31647[2] = inst_31621);
(statearr_31627_31647[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31626 === 1))
{var state_31625__$1 = state_31625;var statearr_31628_31648 = state_31625__$1;(statearr_31628_31648[2] = null);
(statearr_31628_31648[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31626 === 4))
{var inst_31607 = (state_31625[7]);var inst_31607__$1 = (state_31625[2]);var inst_31608 = (inst_31607__$1 == null);var state_31625__$1 = (function (){var statearr_31629 = state_31625;(statearr_31629[7] = inst_31607__$1);
return statearr_31629;
})();if(cljs.core.truth_(inst_31608))
{var statearr_31630_31649 = state_31625__$1;(statearr_31630_31649[1] = 5);
} else
{var statearr_31631_31650 = state_31625__$1;(statearr_31631_31650[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31626 === 6))
{var inst_31607 = (state_31625[7]);var inst_31612 = p.call(null,inst_31607);var state_31625__$1 = state_31625;if(cljs.core.truth_(inst_31612))
{var statearr_31632_31651 = state_31625__$1;(statearr_31632_31651[1] = 8);
} else
{var statearr_31633_31652 = state_31625__$1;(statearr_31633_31652[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31626 === 3))
{var inst_31623 = (state_31625[2]);var state_31625__$1 = state_31625;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31625__$1,inst_31623);
} else
{if((state_val_31626 === 2))
{var state_31625__$1 = state_31625;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31625__$1,4,ch);
} else
{if((state_val_31626 === 11))
{var inst_31615 = (state_31625[2]);var state_31625__$1 = state_31625;var statearr_31634_31653 = state_31625__$1;(statearr_31634_31653[2] = inst_31615);
(statearr_31634_31653[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31626 === 9))
{var state_31625__$1 = state_31625;var statearr_31635_31654 = state_31625__$1;(statearr_31635_31654[2] = null);
(statearr_31635_31654[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31626 === 5))
{var inst_31610 = cljs.core.async.close_BANG_.call(null,out);var state_31625__$1 = state_31625;var statearr_31636_31655 = state_31625__$1;(statearr_31636_31655[2] = inst_31610);
(statearr_31636_31655[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31626 === 10))
{var inst_31618 = (state_31625[2]);var state_31625__$1 = (function (){var statearr_31637 = state_31625;(statearr_31637[8] = inst_31618);
return statearr_31637;
})();var statearr_31638_31656 = state_31625__$1;(statearr_31638_31656[2] = null);
(statearr_31638_31656[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31626 === 8))
{var inst_31607 = (state_31625[7]);var state_31625__$1 = state_31625;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31625__$1,11,out,inst_31607);
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
});})(c__6344__auto___31646,out))
;return ((function (switch__6329__auto__,c__6344__auto___31646,out){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_31642 = [null,null,null,null,null,null,null,null,null];(statearr_31642[0] = state_machine__6330__auto__);
(statearr_31642[1] = 1);
return statearr_31642;
});
var state_machine__6330__auto____1 = (function (state_31625){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_31625);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e31643){if((e31643 instanceof Object))
{var ex__6333__auto__ = e31643;var statearr_31644_31657 = state_31625;(statearr_31644_31657[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31625);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31643;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31658 = state_31625;
state_31625 = G__31658;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_31625){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_31625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___31646,out))
})();var state__6346__auto__ = (function (){var statearr_31645 = f__6345__auto__.call(null);(statearr_31645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___31646);
return statearr_31645;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___31646,out))
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
return (function (state_31810){var state_val_31811 = (state_31810[1]);if((state_val_31811 === 7))
{var inst_31806 = (state_31810[2]);var state_31810__$1 = state_31810;var statearr_31812_31849 = state_31810__$1;(statearr_31812_31849[2] = inst_31806);
(statearr_31812_31849[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31811 === 20))
{var inst_31781 = (state_31810[7]);var inst_31792 = (state_31810[2]);var inst_31793 = cljs.core.next.call(null,inst_31781);var inst_31767 = inst_31793;var inst_31768 = null;var inst_31769 = 0;var inst_31770 = 0;var state_31810__$1 = (function (){var statearr_31813 = state_31810;(statearr_31813[8] = inst_31770);
(statearr_31813[9] = inst_31768);
(statearr_31813[10] = inst_31767);
(statearr_31813[11] = inst_31792);
(statearr_31813[12] = inst_31769);
return statearr_31813;
})();var statearr_31814_31850 = state_31810__$1;(statearr_31814_31850[2] = null);
(statearr_31814_31850[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31811 === 1))
{var state_31810__$1 = state_31810;var statearr_31815_31851 = state_31810__$1;(statearr_31815_31851[2] = null);
(statearr_31815_31851[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31811 === 4))
{var inst_31756 = (state_31810[13]);var inst_31756__$1 = (state_31810[2]);var inst_31757 = (inst_31756__$1 == null);var state_31810__$1 = (function (){var statearr_31819 = state_31810;(statearr_31819[13] = inst_31756__$1);
return statearr_31819;
})();if(cljs.core.truth_(inst_31757))
{var statearr_31820_31852 = state_31810__$1;(statearr_31820_31852[1] = 5);
} else
{var statearr_31821_31853 = state_31810__$1;(statearr_31821_31853[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31811 === 15))
{var state_31810__$1 = state_31810;var statearr_31822_31854 = state_31810__$1;(statearr_31822_31854[2] = null);
(statearr_31822_31854[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31811 === 13))
{var inst_31770 = (state_31810[8]);var inst_31768 = (state_31810[9]);var inst_31767 = (state_31810[10]);var inst_31769 = (state_31810[12]);var inst_31777 = (state_31810[2]);var inst_31778 = (inst_31770 + 1);var tmp31816 = inst_31768;var tmp31817 = inst_31767;var tmp31818 = inst_31769;var inst_31767__$1 = tmp31817;var inst_31768__$1 = tmp31816;var inst_31769__$1 = tmp31818;var inst_31770__$1 = inst_31778;var state_31810__$1 = (function (){var statearr_31823 = state_31810;(statearr_31823[8] = inst_31770__$1);
(statearr_31823[9] = inst_31768__$1);
(statearr_31823[10] = inst_31767__$1);
(statearr_31823[14] = inst_31777);
(statearr_31823[12] = inst_31769__$1);
return statearr_31823;
})();var statearr_31824_31855 = state_31810__$1;(statearr_31824_31855[2] = null);
(statearr_31824_31855[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31811 === 6))
{var inst_31756 = (state_31810[13]);var inst_31761 = f.call(null,inst_31756);var inst_31766 = cljs.core.seq.call(null,inst_31761);var inst_31767 = inst_31766;var inst_31768 = null;var inst_31769 = 0;var inst_31770 = 0;var state_31810__$1 = (function (){var statearr_31825 = state_31810;(statearr_31825[8] = inst_31770);
(statearr_31825[9] = inst_31768);
(statearr_31825[10] = inst_31767);
(statearr_31825[12] = inst_31769);
return statearr_31825;
})();var statearr_31826_31856 = state_31810__$1;(statearr_31826_31856[2] = null);
(statearr_31826_31856[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31811 === 17))
{var inst_31781 = (state_31810[7]);var inst_31785 = cljs.core.chunk_first.call(null,inst_31781);var inst_31786 = cljs.core.chunk_rest.call(null,inst_31781);var inst_31787 = cljs.core.count.call(null,inst_31785);var inst_31767 = inst_31786;var inst_31768 = inst_31785;var inst_31769 = inst_31787;var inst_31770 = 0;var state_31810__$1 = (function (){var statearr_31827 = state_31810;(statearr_31827[8] = inst_31770);
(statearr_31827[9] = inst_31768);
(statearr_31827[10] = inst_31767);
(statearr_31827[12] = inst_31769);
return statearr_31827;
})();var statearr_31828_31857 = state_31810__$1;(statearr_31828_31857[2] = null);
(statearr_31828_31857[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31811 === 3))
{var inst_31808 = (state_31810[2]);var state_31810__$1 = state_31810;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31810__$1,inst_31808);
} else
{if((state_val_31811 === 12))
{var inst_31801 = (state_31810[2]);var state_31810__$1 = state_31810;var statearr_31829_31858 = state_31810__$1;(statearr_31829_31858[2] = inst_31801);
(statearr_31829_31858[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31811 === 2))
{var state_31810__$1 = state_31810;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31810__$1,4,in$);
} else
{if((state_val_31811 === 19))
{var inst_31796 = (state_31810[2]);var state_31810__$1 = state_31810;var statearr_31830_31859 = state_31810__$1;(statearr_31830_31859[2] = inst_31796);
(statearr_31830_31859[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31811 === 11))
{var inst_31767 = (state_31810[10]);var inst_31781 = (state_31810[7]);var inst_31781__$1 = cljs.core.seq.call(null,inst_31767);var state_31810__$1 = (function (){var statearr_31831 = state_31810;(statearr_31831[7] = inst_31781__$1);
return statearr_31831;
})();if(inst_31781__$1)
{var statearr_31832_31860 = state_31810__$1;(statearr_31832_31860[1] = 14);
} else
{var statearr_31833_31861 = state_31810__$1;(statearr_31833_31861[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31811 === 9))
{var inst_31803 = (state_31810[2]);var state_31810__$1 = (function (){var statearr_31834 = state_31810;(statearr_31834[15] = inst_31803);
return statearr_31834;
})();var statearr_31835_31862 = state_31810__$1;(statearr_31835_31862[2] = null);
(statearr_31835_31862[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31811 === 5))
{var inst_31759 = cljs.core.async.close_BANG_.call(null,out);var state_31810__$1 = state_31810;var statearr_31836_31863 = state_31810__$1;(statearr_31836_31863[2] = inst_31759);
(statearr_31836_31863[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31811 === 14))
{var inst_31781 = (state_31810[7]);var inst_31783 = cljs.core.chunked_seq_QMARK_.call(null,inst_31781);var state_31810__$1 = state_31810;if(inst_31783)
{var statearr_31837_31864 = state_31810__$1;(statearr_31837_31864[1] = 17);
} else
{var statearr_31838_31865 = state_31810__$1;(statearr_31838_31865[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31811 === 16))
{var inst_31799 = (state_31810[2]);var state_31810__$1 = state_31810;var statearr_31839_31866 = state_31810__$1;(statearr_31839_31866[2] = inst_31799);
(statearr_31839_31866[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31811 === 10))
{var inst_31770 = (state_31810[8]);var inst_31768 = (state_31810[9]);var inst_31775 = cljs.core._nth.call(null,inst_31768,inst_31770);var state_31810__$1 = state_31810;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31810__$1,13,out,inst_31775);
} else
{if((state_val_31811 === 18))
{var inst_31781 = (state_31810[7]);var inst_31790 = cljs.core.first.call(null,inst_31781);var state_31810__$1 = state_31810;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31810__$1,20,out,inst_31790);
} else
{if((state_val_31811 === 8))
{var inst_31770 = (state_31810[8]);var inst_31769 = (state_31810[12]);var inst_31772 = (inst_31770 < inst_31769);var inst_31773 = inst_31772;var state_31810__$1 = state_31810;if(cljs.core.truth_(inst_31773))
{var statearr_31840_31867 = state_31810__$1;(statearr_31840_31867[1] = 10);
} else
{var statearr_31841_31868 = state_31810__$1;(statearr_31841_31868[1] = 11);
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
var state_machine__6330__auto____0 = (function (){var statearr_31845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31845[0] = state_machine__6330__auto__);
(statearr_31845[1] = 1);
return statearr_31845;
});
var state_machine__6330__auto____1 = (function (state_31810){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_31810);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e31846){if((e31846 instanceof Object))
{var ex__6333__auto__ = e31846;var statearr_31847_31869 = state_31810;(statearr_31847_31869[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31810);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31846;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31870 = state_31810;
state_31810 = G__31870;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_31810){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_31810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__))
})();var state__6346__auto__ = (function (){var statearr_31848 = f__6345__auto__.call(null);(statearr_31848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_31848;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6344__auto___31951 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___31951){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___31951){
return (function (state_31930){var state_val_31931 = (state_31930[1]);if((state_val_31931 === 7))
{var inst_31926 = (state_31930[2]);var state_31930__$1 = state_31930;var statearr_31932_31952 = state_31930__$1;(statearr_31932_31952[2] = inst_31926);
(statearr_31932_31952[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31931 === 1))
{var state_31930__$1 = state_31930;var statearr_31933_31953 = state_31930__$1;(statearr_31933_31953[2] = null);
(statearr_31933_31953[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31931 === 4))
{var inst_31913 = (state_31930[7]);var inst_31913__$1 = (state_31930[2]);var inst_31914 = (inst_31913__$1 == null);var state_31930__$1 = (function (){var statearr_31934 = state_31930;(statearr_31934[7] = inst_31913__$1);
return statearr_31934;
})();if(cljs.core.truth_(inst_31914))
{var statearr_31935_31954 = state_31930__$1;(statearr_31935_31954[1] = 5);
} else
{var statearr_31936_31955 = state_31930__$1;(statearr_31936_31955[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31931 === 6))
{var inst_31913 = (state_31930[7]);var state_31930__$1 = state_31930;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31930__$1,11,to,inst_31913);
} else
{if((state_val_31931 === 3))
{var inst_31928 = (state_31930[2]);var state_31930__$1 = state_31930;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31930__$1,inst_31928);
} else
{if((state_val_31931 === 2))
{var state_31930__$1 = state_31930;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31930__$1,4,from);
} else
{if((state_val_31931 === 11))
{var inst_31923 = (state_31930[2]);var state_31930__$1 = (function (){var statearr_31937 = state_31930;(statearr_31937[8] = inst_31923);
return statearr_31937;
})();var statearr_31938_31956 = state_31930__$1;(statearr_31938_31956[2] = null);
(statearr_31938_31956[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31931 === 9))
{var state_31930__$1 = state_31930;var statearr_31939_31957 = state_31930__$1;(statearr_31939_31957[2] = null);
(statearr_31939_31957[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31931 === 5))
{var state_31930__$1 = state_31930;if(cljs.core.truth_(close_QMARK_))
{var statearr_31940_31958 = state_31930__$1;(statearr_31940_31958[1] = 8);
} else
{var statearr_31941_31959 = state_31930__$1;(statearr_31941_31959[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31931 === 10))
{var inst_31920 = (state_31930[2]);var state_31930__$1 = state_31930;var statearr_31942_31960 = state_31930__$1;(statearr_31942_31960[2] = inst_31920);
(statearr_31942_31960[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31931 === 8))
{var inst_31917 = cljs.core.async.close_BANG_.call(null,to);var state_31930__$1 = state_31930;var statearr_31943_31961 = state_31930__$1;(statearr_31943_31961[2] = inst_31917);
(statearr_31943_31961[1] = 10);
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
});})(c__6344__auto___31951))
;return ((function (switch__6329__auto__,c__6344__auto___31951){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_31947 = [null,null,null,null,null,null,null,null,null];(statearr_31947[0] = state_machine__6330__auto__);
(statearr_31947[1] = 1);
return statearr_31947;
});
var state_machine__6330__auto____1 = (function (state_31930){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_31930);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e31948){if((e31948 instanceof Object))
{var ex__6333__auto__ = e31948;var statearr_31949_31962 = state_31930;(statearr_31949_31962[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31930);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31948;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31963 = state_31930;
state_31930 = G__31963;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_31930){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_31930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___31951))
})();var state__6346__auto__ = (function (){var statearr_31950 = f__6345__auto__.call(null);(statearr_31950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___31951);
return statearr_31950;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___31951))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6344__auto___32050 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___32050,tc,fc){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___32050,tc,fc){
return (function (state_32028){var state_val_32029 = (state_32028[1]);if((state_val_32029 === 7))
{var inst_32024 = (state_32028[2]);var state_32028__$1 = state_32028;var statearr_32030_32051 = state_32028__$1;(statearr_32030_32051[2] = inst_32024);
(statearr_32030_32051[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32029 === 1))
{var state_32028__$1 = state_32028;var statearr_32031_32052 = state_32028__$1;(statearr_32031_32052[2] = null);
(statearr_32031_32052[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32029 === 4))
{var inst_32009 = (state_32028[7]);var inst_32009__$1 = (state_32028[2]);var inst_32010 = (inst_32009__$1 == null);var state_32028__$1 = (function (){var statearr_32032 = state_32028;(statearr_32032[7] = inst_32009__$1);
return statearr_32032;
})();if(cljs.core.truth_(inst_32010))
{var statearr_32033_32053 = state_32028__$1;(statearr_32033_32053[1] = 5);
} else
{var statearr_32034_32054 = state_32028__$1;(statearr_32034_32054[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32029 === 6))
{var inst_32009 = (state_32028[7]);var inst_32015 = p.call(null,inst_32009);var state_32028__$1 = state_32028;if(cljs.core.truth_(inst_32015))
{var statearr_32035_32055 = state_32028__$1;(statearr_32035_32055[1] = 9);
} else
{var statearr_32036_32056 = state_32028__$1;(statearr_32036_32056[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32029 === 3))
{var inst_32026 = (state_32028[2]);var state_32028__$1 = state_32028;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32028__$1,inst_32026);
} else
{if((state_val_32029 === 2))
{var state_32028__$1 = state_32028;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32028__$1,4,ch);
} else
{if((state_val_32029 === 11))
{var inst_32009 = (state_32028[7]);var inst_32019 = (state_32028[2]);var state_32028__$1 = state_32028;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32028__$1,8,inst_32019,inst_32009);
} else
{if((state_val_32029 === 9))
{var state_32028__$1 = state_32028;var statearr_32037_32057 = state_32028__$1;(statearr_32037_32057[2] = tc);
(statearr_32037_32057[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32029 === 5))
{var inst_32012 = cljs.core.async.close_BANG_.call(null,tc);var inst_32013 = cljs.core.async.close_BANG_.call(null,fc);var state_32028__$1 = (function (){var statearr_32038 = state_32028;(statearr_32038[8] = inst_32012);
return statearr_32038;
})();var statearr_32039_32058 = state_32028__$1;(statearr_32039_32058[2] = inst_32013);
(statearr_32039_32058[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32029 === 10))
{var state_32028__$1 = state_32028;var statearr_32040_32059 = state_32028__$1;(statearr_32040_32059[2] = fc);
(statearr_32040_32059[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32029 === 8))
{var inst_32021 = (state_32028[2]);var state_32028__$1 = (function (){var statearr_32041 = state_32028;(statearr_32041[9] = inst_32021);
return statearr_32041;
})();var statearr_32042_32060 = state_32028__$1;(statearr_32042_32060[2] = null);
(statearr_32042_32060[1] = 2);
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
});})(c__6344__auto___32050,tc,fc))
;return ((function (switch__6329__auto__,c__6344__auto___32050,tc,fc){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_32046 = [null,null,null,null,null,null,null,null,null,null];(statearr_32046[0] = state_machine__6330__auto__);
(statearr_32046[1] = 1);
return statearr_32046;
});
var state_machine__6330__auto____1 = (function (state_32028){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_32028);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e32047){if((e32047 instanceof Object))
{var ex__6333__auto__ = e32047;var statearr_32048_32061 = state_32028;(statearr_32048_32061[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32028);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32047;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32062 = state_32028;
state_32028 = G__32062;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_32028){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_32028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___32050,tc,fc))
})();var state__6346__auto__ = (function (){var statearr_32049 = f__6345__auto__.call(null);(statearr_32049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___32050);
return statearr_32049;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___32050,tc,fc))
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
return (function (state_32109){var state_val_32110 = (state_32109[1]);if((state_val_32110 === 7))
{var inst_32105 = (state_32109[2]);var state_32109__$1 = state_32109;var statearr_32111_32127 = state_32109__$1;(statearr_32111_32127[2] = inst_32105);
(statearr_32111_32127[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32110 === 6))
{var inst_32098 = (state_32109[7]);var inst_32095 = (state_32109[8]);var inst_32102 = f.call(null,inst_32095,inst_32098);var inst_32095__$1 = inst_32102;var state_32109__$1 = (function (){var statearr_32112 = state_32109;(statearr_32112[8] = inst_32095__$1);
return statearr_32112;
})();var statearr_32113_32128 = state_32109__$1;(statearr_32113_32128[2] = null);
(statearr_32113_32128[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32110 === 5))
{var inst_32095 = (state_32109[8]);var state_32109__$1 = state_32109;var statearr_32114_32129 = state_32109__$1;(statearr_32114_32129[2] = inst_32095);
(statearr_32114_32129[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32110 === 4))
{var inst_32098 = (state_32109[7]);var inst_32098__$1 = (state_32109[2]);var inst_32099 = (inst_32098__$1 == null);var state_32109__$1 = (function (){var statearr_32115 = state_32109;(statearr_32115[7] = inst_32098__$1);
return statearr_32115;
})();if(cljs.core.truth_(inst_32099))
{var statearr_32116_32130 = state_32109__$1;(statearr_32116_32130[1] = 5);
} else
{var statearr_32117_32131 = state_32109__$1;(statearr_32117_32131[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32110 === 3))
{var inst_32107 = (state_32109[2]);var state_32109__$1 = state_32109;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32109__$1,inst_32107);
} else
{if((state_val_32110 === 2))
{var state_32109__$1 = state_32109;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32109__$1,4,ch);
} else
{if((state_val_32110 === 1))
{var inst_32095 = init;var state_32109__$1 = (function (){var statearr_32118 = state_32109;(statearr_32118[8] = inst_32095);
return statearr_32118;
})();var statearr_32119_32132 = state_32109__$1;(statearr_32119_32132[2] = null);
(statearr_32119_32132[1] = 2);
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
var state_machine__6330__auto____0 = (function (){var statearr_32123 = [null,null,null,null,null,null,null,null,null];(statearr_32123[0] = state_machine__6330__auto__);
(statearr_32123[1] = 1);
return statearr_32123;
});
var state_machine__6330__auto____1 = (function (state_32109){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_32109);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e32124){if((e32124 instanceof Object))
{var ex__6333__auto__ = e32124;var statearr_32125_32133 = state_32109;(statearr_32125_32133[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32109);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32124;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32134 = state_32109;
state_32109 = G__32134;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_32109){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_32109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__))
})();var state__6346__auto__ = (function (){var statearr_32126 = f__6345__auto__.call(null);(statearr_32126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_32126;
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
return (function (state_32196){var state_val_32197 = (state_32196[1]);if((state_val_32197 === 7))
{var inst_32177 = (state_32196[7]);var inst_32182 = (state_32196[2]);var inst_32183 = cljs.core.next.call(null,inst_32177);var inst_32177__$1 = inst_32183;var state_32196__$1 = (function (){var statearr_32198 = state_32196;(statearr_32198[7] = inst_32177__$1);
(statearr_32198[8] = inst_32182);
return statearr_32198;
})();var statearr_32199_32217 = state_32196__$1;(statearr_32199_32217[2] = null);
(statearr_32199_32217[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32197 === 1))
{var inst_32176 = cljs.core.seq.call(null,coll);var inst_32177 = inst_32176;var state_32196__$1 = (function (){var statearr_32200 = state_32196;(statearr_32200[7] = inst_32177);
return statearr_32200;
})();var statearr_32201_32218 = state_32196__$1;(statearr_32201_32218[2] = null);
(statearr_32201_32218[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32197 === 4))
{var inst_32177 = (state_32196[7]);var inst_32180 = cljs.core.first.call(null,inst_32177);var state_32196__$1 = state_32196;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32196__$1,7,ch,inst_32180);
} else
{if((state_val_32197 === 6))
{var inst_32192 = (state_32196[2]);var state_32196__$1 = state_32196;var statearr_32202_32219 = state_32196__$1;(statearr_32202_32219[2] = inst_32192);
(statearr_32202_32219[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32197 === 3))
{var inst_32194 = (state_32196[2]);var state_32196__$1 = state_32196;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32196__$1,inst_32194);
} else
{if((state_val_32197 === 2))
{var inst_32177 = (state_32196[7]);var state_32196__$1 = state_32196;if(cljs.core.truth_(inst_32177))
{var statearr_32203_32220 = state_32196__$1;(statearr_32203_32220[1] = 4);
} else
{var statearr_32204_32221 = state_32196__$1;(statearr_32204_32221[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32197 === 9))
{var state_32196__$1 = state_32196;var statearr_32205_32222 = state_32196__$1;(statearr_32205_32222[2] = null);
(statearr_32205_32222[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32197 === 5))
{var state_32196__$1 = state_32196;if(cljs.core.truth_(close_QMARK_))
{var statearr_32206_32223 = state_32196__$1;(statearr_32206_32223[1] = 8);
} else
{var statearr_32207_32224 = state_32196__$1;(statearr_32207_32224[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32197 === 10))
{var inst_32190 = (state_32196[2]);var state_32196__$1 = state_32196;var statearr_32208_32225 = state_32196__$1;(statearr_32208_32225[2] = inst_32190);
(statearr_32208_32225[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32197 === 8))
{var inst_32187 = cljs.core.async.close_BANG_.call(null,ch);var state_32196__$1 = state_32196;var statearr_32209_32226 = state_32196__$1;(statearr_32209_32226[2] = inst_32187);
(statearr_32209_32226[1] = 10);
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
var state_machine__6330__auto____0 = (function (){var statearr_32213 = [null,null,null,null,null,null,null,null,null];(statearr_32213[0] = state_machine__6330__auto__);
(statearr_32213[1] = 1);
return statearr_32213;
});
var state_machine__6330__auto____1 = (function (state_32196){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_32196);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e32214){if((e32214 instanceof Object))
{var ex__6333__auto__ = e32214;var statearr_32215_32227 = state_32196;(statearr_32215_32227[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32196);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32214;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32228 = state_32196;
state_32196 = G__32228;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_32196){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_32196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto__))
})();var state__6346__auto__ = (function (){var statearr_32216 = f__6345__auto__.call(null);(statearr_32216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto__);
return statearr_32216;
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
cljs.core.async.Mux = (function (){var obj32230 = {};return obj32230;
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
cljs.core.async.Mult = (function (){var obj32232 = {};return obj32232;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t32456 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32456 = (function (cs,ch,mult,meta32457){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32457 = meta32457;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32456.cljs$lang$type = true;
cljs.core.async.t32456.cljs$lang$ctorStr = "cljs.core.async/t32456";
cljs.core.async.t32456.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t32456");
});})(cs))
;
cljs.core.async.t32456.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t32456.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t32456.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t32456.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t32456.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32456.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t32456.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32458){var self__ = this;
var _32458__$1 = this;return self__.meta32457;
});})(cs))
;
cljs.core.async.t32456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32458,meta32457__$1){var self__ = this;
var _32458__$1 = this;return (new cljs.core.async.t32456(self__.cs,self__.ch,self__.mult,meta32457__$1));
});})(cs))
;
cljs.core.async.__GT_t32456 = ((function (cs){
return (function __GT_t32456(cs__$1,ch__$1,mult__$1,meta32457){return (new cljs.core.async.t32456(cs__$1,ch__$1,mult__$1,meta32457));
});})(cs))
;
}
return (new cljs.core.async.t32456(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6344__auto___32679 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___32679,cs,m,dchan,dctr,done){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___32679,cs,m,dchan,dctr,done){
return (function (state_32593){var state_val_32594 = (state_32593[1]);if((state_val_32594 === 7))
{var inst_32589 = (state_32593[2]);var state_32593__$1 = state_32593;var statearr_32595_32680 = state_32593__$1;(statearr_32595_32680[2] = inst_32589);
(statearr_32595_32680[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 20))
{var inst_32490 = (state_32593[7]);var inst_32500 = cljs.core.first.call(null,inst_32490);var inst_32501 = cljs.core.nth.call(null,inst_32500,0,null);var inst_32502 = cljs.core.nth.call(null,inst_32500,1,null);var state_32593__$1 = (function (){var statearr_32596 = state_32593;(statearr_32596[8] = inst_32501);
return statearr_32596;
})();if(cljs.core.truth_(inst_32502))
{var statearr_32597_32681 = state_32593__$1;(statearr_32597_32681[1] = 22);
} else
{var statearr_32598_32682 = state_32593__$1;(statearr_32598_32682[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 27))
{var inst_32532 = (state_32593[9]);var inst_32530 = (state_32593[10]);var inst_32537 = cljs.core._nth.call(null,inst_32530,inst_32532);var state_32593__$1 = (function (){var statearr_32599 = state_32593;(statearr_32599[11] = inst_32537);
return statearr_32599;
})();var statearr_32600_32683 = state_32593__$1;(statearr_32600_32683[2] = null);
(statearr_32600_32683[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 1))
{var state_32593__$1 = state_32593;var statearr_32601_32684 = state_32593__$1;(statearr_32601_32684[2] = null);
(statearr_32601_32684[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 24))
{var inst_32490 = (state_32593[7]);var inst_32507 = (state_32593[2]);var inst_32508 = cljs.core.next.call(null,inst_32490);var inst_32470 = inst_32508;var inst_32471 = null;var inst_32472 = 0;var inst_32473 = 0;var state_32593__$1 = (function (){var statearr_32602 = state_32593;(statearr_32602[12] = inst_32473);
(statearr_32602[13] = inst_32471);
(statearr_32602[14] = inst_32507);
(statearr_32602[15] = inst_32472);
(statearr_32602[16] = inst_32470);
return statearr_32602;
})();var statearr_32603_32685 = state_32593__$1;(statearr_32603_32685[2] = null);
(statearr_32603_32685[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 39))
{var inst_32550 = (state_32593[17]);var inst_32568 = (state_32593[2]);var inst_32569 = cljs.core.next.call(null,inst_32550);var inst_32529 = inst_32569;var inst_32530 = null;var inst_32531 = 0;var inst_32532 = 0;var state_32593__$1 = (function (){var statearr_32607 = state_32593;(statearr_32607[18] = inst_32568);
(statearr_32607[9] = inst_32532);
(statearr_32607[10] = inst_32530);
(statearr_32607[19] = inst_32531);
(statearr_32607[20] = inst_32529);
return statearr_32607;
})();var statearr_32608_32686 = state_32593__$1;(statearr_32608_32686[2] = null);
(statearr_32608_32686[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 4))
{var inst_32461 = (state_32593[21]);var inst_32461__$1 = (state_32593[2]);var inst_32462 = (inst_32461__$1 == null);var state_32593__$1 = (function (){var statearr_32609 = state_32593;(statearr_32609[21] = inst_32461__$1);
return statearr_32609;
})();if(cljs.core.truth_(inst_32462))
{var statearr_32610_32687 = state_32593__$1;(statearr_32610_32687[1] = 5);
} else
{var statearr_32611_32688 = state_32593__$1;(statearr_32611_32688[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 15))
{var inst_32473 = (state_32593[12]);var inst_32471 = (state_32593[13]);var inst_32472 = (state_32593[15]);var inst_32470 = (state_32593[16]);var inst_32486 = (state_32593[2]);var inst_32487 = (inst_32473 + 1);var tmp32604 = inst_32471;var tmp32605 = inst_32472;var tmp32606 = inst_32470;var inst_32470__$1 = tmp32606;var inst_32471__$1 = tmp32604;var inst_32472__$1 = tmp32605;var inst_32473__$1 = inst_32487;var state_32593__$1 = (function (){var statearr_32612 = state_32593;(statearr_32612[12] = inst_32473__$1);
(statearr_32612[13] = inst_32471__$1);
(statearr_32612[15] = inst_32472__$1);
(statearr_32612[22] = inst_32486);
(statearr_32612[16] = inst_32470__$1);
return statearr_32612;
})();var statearr_32613_32689 = state_32593__$1;(statearr_32613_32689[2] = null);
(statearr_32613_32689[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 21))
{var inst_32511 = (state_32593[2]);var state_32593__$1 = state_32593;var statearr_32614_32690 = state_32593__$1;(statearr_32614_32690[2] = inst_32511);
(statearr_32614_32690[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 31))
{var inst_32537 = (state_32593[11]);var inst_32538 = (state_32593[2]);var inst_32539 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_32540 = cljs.core.async.untap_STAR_.call(null,m,inst_32537);var state_32593__$1 = (function (){var statearr_32615 = state_32593;(statearr_32615[23] = inst_32539);
(statearr_32615[24] = inst_32538);
return statearr_32615;
})();var statearr_32616_32691 = state_32593__$1;(statearr_32616_32691[2] = inst_32540);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32593__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 32))
{var inst_32537 = (state_32593[11]);var inst_32461 = (state_32593[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32593,31,Object,null,30);var inst_32544 = cljs.core.async.put_BANG_.call(null,inst_32537,inst_32461,done);var state_32593__$1 = state_32593;var statearr_32617_32692 = state_32593__$1;(statearr_32617_32692[2] = inst_32544);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32593__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 40))
{var inst_32559 = (state_32593[25]);var inst_32560 = (state_32593[2]);var inst_32561 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_32562 = cljs.core.async.untap_STAR_.call(null,m,inst_32559);var state_32593__$1 = (function (){var statearr_32618 = state_32593;(statearr_32618[26] = inst_32560);
(statearr_32618[27] = inst_32561);
return statearr_32618;
})();var statearr_32619_32693 = state_32593__$1;(statearr_32619_32693[2] = inst_32562);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32593__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 33))
{var inst_32550 = (state_32593[17]);var inst_32552 = cljs.core.chunked_seq_QMARK_.call(null,inst_32550);var state_32593__$1 = state_32593;if(inst_32552)
{var statearr_32620_32694 = state_32593__$1;(statearr_32620_32694[1] = 36);
} else
{var statearr_32621_32695 = state_32593__$1;(statearr_32621_32695[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 13))
{var inst_32480 = (state_32593[28]);var inst_32483 = cljs.core.async.close_BANG_.call(null,inst_32480);var state_32593__$1 = state_32593;var statearr_32622_32696 = state_32593__$1;(statearr_32622_32696[2] = inst_32483);
(statearr_32622_32696[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 22))
{var inst_32501 = (state_32593[8]);var inst_32504 = cljs.core.async.close_BANG_.call(null,inst_32501);var state_32593__$1 = state_32593;var statearr_32623_32697 = state_32593__$1;(statearr_32623_32697[2] = inst_32504);
(statearr_32623_32697[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 36))
{var inst_32550 = (state_32593[17]);var inst_32554 = cljs.core.chunk_first.call(null,inst_32550);var inst_32555 = cljs.core.chunk_rest.call(null,inst_32550);var inst_32556 = cljs.core.count.call(null,inst_32554);var inst_32529 = inst_32555;var inst_32530 = inst_32554;var inst_32531 = inst_32556;var inst_32532 = 0;var state_32593__$1 = (function (){var statearr_32624 = state_32593;(statearr_32624[9] = inst_32532);
(statearr_32624[10] = inst_32530);
(statearr_32624[19] = inst_32531);
(statearr_32624[20] = inst_32529);
return statearr_32624;
})();var statearr_32625_32698 = state_32593__$1;(statearr_32625_32698[2] = null);
(statearr_32625_32698[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 41))
{var inst_32559 = (state_32593[25]);var inst_32461 = (state_32593[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32593,40,Object,null,39);var inst_32566 = cljs.core.async.put_BANG_.call(null,inst_32559,inst_32461,done);var state_32593__$1 = state_32593;var statearr_32626_32699 = state_32593__$1;(statearr_32626_32699[2] = inst_32566);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32593__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 43))
{var state_32593__$1 = state_32593;var statearr_32627_32700 = state_32593__$1;(statearr_32627_32700[2] = null);
(statearr_32627_32700[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 29))
{var inst_32577 = (state_32593[2]);var state_32593__$1 = state_32593;var statearr_32628_32701 = state_32593__$1;(statearr_32628_32701[2] = inst_32577);
(statearr_32628_32701[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 44))
{var inst_32586 = (state_32593[2]);var state_32593__$1 = (function (){var statearr_32629 = state_32593;(statearr_32629[29] = inst_32586);
return statearr_32629;
})();var statearr_32630_32702 = state_32593__$1;(statearr_32630_32702[2] = null);
(statearr_32630_32702[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 6))
{var inst_32521 = (state_32593[30]);var inst_32520 = cljs.core.deref.call(null,cs);var inst_32521__$1 = cljs.core.keys.call(null,inst_32520);var inst_32522 = cljs.core.count.call(null,inst_32521__$1);var inst_32523 = cljs.core.reset_BANG_.call(null,dctr,inst_32522);var inst_32528 = cljs.core.seq.call(null,inst_32521__$1);var inst_32529 = inst_32528;var inst_32530 = null;var inst_32531 = 0;var inst_32532 = 0;var state_32593__$1 = (function (){var statearr_32631 = state_32593;(statearr_32631[30] = inst_32521__$1);
(statearr_32631[9] = inst_32532);
(statearr_32631[10] = inst_32530);
(statearr_32631[31] = inst_32523);
(statearr_32631[19] = inst_32531);
(statearr_32631[20] = inst_32529);
return statearr_32631;
})();var statearr_32632_32703 = state_32593__$1;(statearr_32632_32703[2] = null);
(statearr_32632_32703[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 28))
{var inst_32550 = (state_32593[17]);var inst_32529 = (state_32593[20]);var inst_32550__$1 = cljs.core.seq.call(null,inst_32529);var state_32593__$1 = (function (){var statearr_32633 = state_32593;(statearr_32633[17] = inst_32550__$1);
return statearr_32633;
})();if(inst_32550__$1)
{var statearr_32634_32704 = state_32593__$1;(statearr_32634_32704[1] = 33);
} else
{var statearr_32635_32705 = state_32593__$1;(statearr_32635_32705[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 25))
{var inst_32532 = (state_32593[9]);var inst_32531 = (state_32593[19]);var inst_32534 = (inst_32532 < inst_32531);var inst_32535 = inst_32534;var state_32593__$1 = state_32593;if(cljs.core.truth_(inst_32535))
{var statearr_32636_32706 = state_32593__$1;(statearr_32636_32706[1] = 27);
} else
{var statearr_32637_32707 = state_32593__$1;(statearr_32637_32707[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 34))
{var state_32593__$1 = state_32593;var statearr_32638_32708 = state_32593__$1;(statearr_32638_32708[2] = null);
(statearr_32638_32708[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 17))
{var state_32593__$1 = state_32593;var statearr_32639_32709 = state_32593__$1;(statearr_32639_32709[2] = null);
(statearr_32639_32709[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 3))
{var inst_32591 = (state_32593[2]);var state_32593__$1 = state_32593;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32593__$1,inst_32591);
} else
{if((state_val_32594 === 12))
{var inst_32516 = (state_32593[2]);var state_32593__$1 = state_32593;var statearr_32640_32710 = state_32593__$1;(statearr_32640_32710[2] = inst_32516);
(statearr_32640_32710[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 2))
{var state_32593__$1 = state_32593;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32593__$1,4,ch);
} else
{if((state_val_32594 === 23))
{var state_32593__$1 = state_32593;var statearr_32641_32711 = state_32593__$1;(statearr_32641_32711[2] = null);
(statearr_32641_32711[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 35))
{var inst_32575 = (state_32593[2]);var state_32593__$1 = state_32593;var statearr_32642_32712 = state_32593__$1;(statearr_32642_32712[2] = inst_32575);
(statearr_32642_32712[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 19))
{var inst_32490 = (state_32593[7]);var inst_32494 = cljs.core.chunk_first.call(null,inst_32490);var inst_32495 = cljs.core.chunk_rest.call(null,inst_32490);var inst_32496 = cljs.core.count.call(null,inst_32494);var inst_32470 = inst_32495;var inst_32471 = inst_32494;var inst_32472 = inst_32496;var inst_32473 = 0;var state_32593__$1 = (function (){var statearr_32643 = state_32593;(statearr_32643[12] = inst_32473);
(statearr_32643[13] = inst_32471);
(statearr_32643[15] = inst_32472);
(statearr_32643[16] = inst_32470);
return statearr_32643;
})();var statearr_32644_32713 = state_32593__$1;(statearr_32644_32713[2] = null);
(statearr_32644_32713[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 11))
{var inst_32490 = (state_32593[7]);var inst_32470 = (state_32593[16]);var inst_32490__$1 = cljs.core.seq.call(null,inst_32470);var state_32593__$1 = (function (){var statearr_32645 = state_32593;(statearr_32645[7] = inst_32490__$1);
return statearr_32645;
})();if(inst_32490__$1)
{var statearr_32646_32714 = state_32593__$1;(statearr_32646_32714[1] = 16);
} else
{var statearr_32647_32715 = state_32593__$1;(statearr_32647_32715[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 9))
{var inst_32518 = (state_32593[2]);var state_32593__$1 = state_32593;var statearr_32648_32716 = state_32593__$1;(statearr_32648_32716[2] = inst_32518);
(statearr_32648_32716[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 5))
{var inst_32468 = cljs.core.deref.call(null,cs);var inst_32469 = cljs.core.seq.call(null,inst_32468);var inst_32470 = inst_32469;var inst_32471 = null;var inst_32472 = 0;var inst_32473 = 0;var state_32593__$1 = (function (){var statearr_32649 = state_32593;(statearr_32649[12] = inst_32473);
(statearr_32649[13] = inst_32471);
(statearr_32649[15] = inst_32472);
(statearr_32649[16] = inst_32470);
return statearr_32649;
})();var statearr_32650_32717 = state_32593__$1;(statearr_32650_32717[2] = null);
(statearr_32650_32717[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 14))
{var state_32593__$1 = state_32593;var statearr_32651_32718 = state_32593__$1;(statearr_32651_32718[2] = null);
(statearr_32651_32718[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 45))
{var inst_32583 = (state_32593[2]);var state_32593__$1 = state_32593;var statearr_32652_32719 = state_32593__$1;(statearr_32652_32719[2] = inst_32583);
(statearr_32652_32719[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 26))
{var inst_32521 = (state_32593[30]);var inst_32579 = (state_32593[2]);var inst_32580 = cljs.core.seq.call(null,inst_32521);var state_32593__$1 = (function (){var statearr_32653 = state_32593;(statearr_32653[32] = inst_32579);
return statearr_32653;
})();if(inst_32580)
{var statearr_32654_32720 = state_32593__$1;(statearr_32654_32720[1] = 42);
} else
{var statearr_32655_32721 = state_32593__$1;(statearr_32655_32721[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 16))
{var inst_32490 = (state_32593[7]);var inst_32492 = cljs.core.chunked_seq_QMARK_.call(null,inst_32490);var state_32593__$1 = state_32593;if(inst_32492)
{var statearr_32659_32722 = state_32593__$1;(statearr_32659_32722[1] = 19);
} else
{var statearr_32660_32723 = state_32593__$1;(statearr_32660_32723[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 38))
{var inst_32572 = (state_32593[2]);var state_32593__$1 = state_32593;var statearr_32661_32724 = state_32593__$1;(statearr_32661_32724[2] = inst_32572);
(statearr_32661_32724[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 30))
{var inst_32532 = (state_32593[9]);var inst_32530 = (state_32593[10]);var inst_32531 = (state_32593[19]);var inst_32529 = (state_32593[20]);var inst_32546 = (state_32593[2]);var inst_32547 = (inst_32532 + 1);var tmp32656 = inst_32530;var tmp32657 = inst_32531;var tmp32658 = inst_32529;var inst_32529__$1 = tmp32658;var inst_32530__$1 = tmp32656;var inst_32531__$1 = tmp32657;var inst_32532__$1 = inst_32547;var state_32593__$1 = (function (){var statearr_32662 = state_32593;(statearr_32662[33] = inst_32546);
(statearr_32662[9] = inst_32532__$1);
(statearr_32662[10] = inst_32530__$1);
(statearr_32662[19] = inst_32531__$1);
(statearr_32662[20] = inst_32529__$1);
return statearr_32662;
})();var statearr_32663_32725 = state_32593__$1;(statearr_32663_32725[2] = null);
(statearr_32663_32725[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 10))
{var inst_32473 = (state_32593[12]);var inst_32471 = (state_32593[13]);var inst_32479 = cljs.core._nth.call(null,inst_32471,inst_32473);var inst_32480 = cljs.core.nth.call(null,inst_32479,0,null);var inst_32481 = cljs.core.nth.call(null,inst_32479,1,null);var state_32593__$1 = (function (){var statearr_32664 = state_32593;(statearr_32664[28] = inst_32480);
return statearr_32664;
})();if(cljs.core.truth_(inst_32481))
{var statearr_32665_32726 = state_32593__$1;(statearr_32665_32726[1] = 13);
} else
{var statearr_32666_32727 = state_32593__$1;(statearr_32666_32727[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 18))
{var inst_32514 = (state_32593[2]);var state_32593__$1 = state_32593;var statearr_32667_32728 = state_32593__$1;(statearr_32667_32728[2] = inst_32514);
(statearr_32667_32728[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 42))
{var state_32593__$1 = state_32593;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32593__$1,45,dchan);
} else
{if((state_val_32594 === 37))
{var inst_32550 = (state_32593[17]);var inst_32559 = cljs.core.first.call(null,inst_32550);var state_32593__$1 = (function (){var statearr_32668 = state_32593;(statearr_32668[25] = inst_32559);
return statearr_32668;
})();var statearr_32669_32729 = state_32593__$1;(statearr_32669_32729[2] = null);
(statearr_32669_32729[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 8))
{var inst_32473 = (state_32593[12]);var inst_32472 = (state_32593[15]);var inst_32475 = (inst_32473 < inst_32472);var inst_32476 = inst_32475;var state_32593__$1 = state_32593;if(cljs.core.truth_(inst_32476))
{var statearr_32670_32730 = state_32593__$1;(statearr_32670_32730[1] = 10);
} else
{var statearr_32671_32731 = state_32593__$1;(statearr_32671_32731[1] = 11);
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
});})(c__6344__auto___32679,cs,m,dchan,dctr,done))
;return ((function (switch__6329__auto__,c__6344__auto___32679,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_32675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32675[0] = state_machine__6330__auto__);
(statearr_32675[1] = 1);
return statearr_32675;
});
var state_machine__6330__auto____1 = (function (state_32593){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_32593);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e32676){if((e32676 instanceof Object))
{var ex__6333__auto__ = e32676;var statearr_32677_32732 = state_32593;(statearr_32677_32732[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32593);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32676;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32733 = state_32593;
state_32593 = G__32733;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_32593){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_32593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___32679,cs,m,dchan,dctr,done))
})();var state__6346__auto__ = (function (){var statearr_32678 = f__6345__auto__.call(null);(statearr_32678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___32679);
return statearr_32678;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___32679,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj32735 = {};return obj32735;
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
;var m = (function (){if(typeof cljs.core.async.t32845 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32845 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32846){
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
this.meta32846 = meta32846;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32845.cljs$lang$type = true;
cljs.core.async.t32845.cljs$lang$ctorStr = "cljs.core.async/t32845";
cljs.core.async.t32845.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t32845");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32845.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t32845.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32845.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32845.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32845.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32845.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32845.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32845.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32845.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32847){var self__ = this;
var _32847__$1 = this;return self__.meta32846;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32847,meta32846__$1){var self__ = this;
var _32847__$1 = this;return (new cljs.core.async.t32845(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32846__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t32845 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t32845(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32846){return (new cljs.core.async.t32845(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32846));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t32845(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6344__auto___32954 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___32954,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___32954,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32912){var state_val_32913 = (state_32912[1]);if((state_val_32913 === 7))
{var inst_32861 = (state_32912[7]);var inst_32866 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32861);var state_32912__$1 = state_32912;var statearr_32914_32955 = state_32912__$1;(statearr_32914_32955[2] = inst_32866);
(statearr_32914_32955[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32913 === 20))
{var inst_32876 = (state_32912[8]);var state_32912__$1 = state_32912;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32912__$1,23,out,inst_32876);
} else
{if((state_val_32913 === 1))
{var inst_32851 = (state_32912[9]);var inst_32851__$1 = calc_state.call(null);var inst_32852 = cljs.core.seq_QMARK_.call(null,inst_32851__$1);var state_32912__$1 = (function (){var statearr_32915 = state_32912;(statearr_32915[9] = inst_32851__$1);
return statearr_32915;
})();if(inst_32852)
{var statearr_32916_32956 = state_32912__$1;(statearr_32916_32956[1] = 2);
} else
{var statearr_32917_32957 = state_32912__$1;(statearr_32917_32957[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32913 === 4))
{var inst_32851 = (state_32912[9]);var inst_32857 = (state_32912[2]);var inst_32858 = cljs.core.get.call(null,inst_32857,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_32859 = cljs.core.get.call(null,inst_32857,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_32860 = cljs.core.get.call(null,inst_32857,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_32861 = inst_32851;var state_32912__$1 = (function (){var statearr_32918 = state_32912;(statearr_32918[10] = inst_32859);
(statearr_32918[7] = inst_32861);
(statearr_32918[11] = inst_32860);
(statearr_32918[12] = inst_32858);
return statearr_32918;
})();var statearr_32919_32958 = state_32912__$1;(statearr_32919_32958[2] = null);
(statearr_32919_32958[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32913 === 15))
{var state_32912__$1 = state_32912;var statearr_32920_32959 = state_32912__$1;(statearr_32920_32959[2] = null);
(statearr_32920_32959[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32913 === 21))
{var state_32912__$1 = state_32912;var statearr_32921_32960 = state_32912__$1;(statearr_32921_32960[2] = null);
(statearr_32921_32960[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32913 === 13))
{var inst_32908 = (state_32912[2]);var state_32912__$1 = state_32912;var statearr_32922_32961 = state_32912__$1;(statearr_32922_32961[2] = inst_32908);
(statearr_32922_32961[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32913 === 22))
{var inst_32869 = (state_32912[13]);var inst_32905 = (state_32912[2]);var inst_32861 = inst_32869;var state_32912__$1 = (function (){var statearr_32923 = state_32912;(statearr_32923[7] = inst_32861);
(statearr_32923[14] = inst_32905);
return statearr_32923;
})();var statearr_32924_32962 = state_32912__$1;(statearr_32924_32962[2] = null);
(statearr_32924_32962[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32913 === 6))
{var inst_32910 = (state_32912[2]);var state_32912__$1 = state_32912;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32912__$1,inst_32910);
} else
{if((state_val_32913 === 17))
{var inst_32891 = (state_32912[15]);var state_32912__$1 = state_32912;var statearr_32925_32963 = state_32912__$1;(statearr_32925_32963[2] = inst_32891);
(statearr_32925_32963[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32913 === 3))
{var inst_32851 = (state_32912[9]);var state_32912__$1 = state_32912;var statearr_32926_32964 = state_32912__$1;(statearr_32926_32964[2] = inst_32851);
(statearr_32926_32964[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32913 === 12))
{var inst_32877 = (state_32912[16]);var inst_32872 = (state_32912[17]);var inst_32891 = (state_32912[15]);var inst_32891__$1 = inst_32872.call(null,inst_32877);var state_32912__$1 = (function (){var statearr_32927 = state_32912;(statearr_32927[15] = inst_32891__$1);
return statearr_32927;
})();if(cljs.core.truth_(inst_32891__$1))
{var statearr_32928_32965 = state_32912__$1;(statearr_32928_32965[1] = 17);
} else
{var statearr_32929_32966 = state_32912__$1;(statearr_32929_32966[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32913 === 2))
{var inst_32851 = (state_32912[9]);var inst_32854 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32851);var state_32912__$1 = state_32912;var statearr_32930_32967 = state_32912__$1;(statearr_32930_32967[2] = inst_32854);
(statearr_32930_32967[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32913 === 23))
{var inst_32902 = (state_32912[2]);var state_32912__$1 = state_32912;var statearr_32931_32968 = state_32912__$1;(statearr_32931_32968[2] = inst_32902);
(statearr_32931_32968[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32913 === 19))
{var inst_32899 = (state_32912[2]);var state_32912__$1 = state_32912;if(cljs.core.truth_(inst_32899))
{var statearr_32932_32969 = state_32912__$1;(statearr_32932_32969[1] = 20);
} else
{var statearr_32933_32970 = state_32912__$1;(statearr_32933_32970[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32913 === 11))
{var inst_32876 = (state_32912[8]);var inst_32882 = (inst_32876 == null);var state_32912__$1 = state_32912;if(cljs.core.truth_(inst_32882))
{var statearr_32934_32971 = state_32912__$1;(statearr_32934_32971[1] = 14);
} else
{var statearr_32935_32972 = state_32912__$1;(statearr_32935_32972[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32913 === 9))
{var inst_32869 = (state_32912[13]);var inst_32869__$1 = (state_32912[2]);var inst_32870 = cljs.core.get.call(null,inst_32869__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_32871 = cljs.core.get.call(null,inst_32869__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_32872 = cljs.core.get.call(null,inst_32869__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_32912__$1 = (function (){var statearr_32936 = state_32912;(statearr_32936[18] = inst_32871);
(statearr_32936[17] = inst_32872);
(statearr_32936[13] = inst_32869__$1);
return statearr_32936;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_32912__$1,10,inst_32870);
} else
{if((state_val_32913 === 5))
{var inst_32861 = (state_32912[7]);var inst_32864 = cljs.core.seq_QMARK_.call(null,inst_32861);var state_32912__$1 = state_32912;if(inst_32864)
{var statearr_32937_32973 = state_32912__$1;(statearr_32937_32973[1] = 7);
} else
{var statearr_32938_32974 = state_32912__$1;(statearr_32938_32974[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32913 === 14))
{var inst_32877 = (state_32912[16]);var inst_32884 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32877);var state_32912__$1 = state_32912;var statearr_32939_32975 = state_32912__$1;(statearr_32939_32975[2] = inst_32884);
(statearr_32939_32975[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32913 === 16))
{var inst_32887 = (state_32912[2]);var inst_32888 = calc_state.call(null);var inst_32861 = inst_32888;var state_32912__$1 = (function (){var statearr_32940 = state_32912;(statearr_32940[7] = inst_32861);
(statearr_32940[19] = inst_32887);
return statearr_32940;
})();var statearr_32941_32976 = state_32912__$1;(statearr_32941_32976[2] = null);
(statearr_32941_32976[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32913 === 10))
{var inst_32877 = (state_32912[16]);var inst_32876 = (state_32912[8]);var inst_32875 = (state_32912[2]);var inst_32876__$1 = cljs.core.nth.call(null,inst_32875,0,null);var inst_32877__$1 = cljs.core.nth.call(null,inst_32875,1,null);var inst_32878 = (inst_32876__$1 == null);var inst_32879 = cljs.core._EQ_.call(null,inst_32877__$1,change);var inst_32880 = (inst_32878) || (inst_32879);var state_32912__$1 = (function (){var statearr_32942 = state_32912;(statearr_32942[16] = inst_32877__$1);
(statearr_32942[8] = inst_32876__$1);
return statearr_32942;
})();if(cljs.core.truth_(inst_32880))
{var statearr_32943_32977 = state_32912__$1;(statearr_32943_32977[1] = 11);
} else
{var statearr_32944_32978 = state_32912__$1;(statearr_32944_32978[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32913 === 18))
{var inst_32877 = (state_32912[16]);var inst_32871 = (state_32912[18]);var inst_32872 = (state_32912[17]);var inst_32894 = cljs.core.empty_QMARK_.call(null,inst_32872);var inst_32895 = inst_32871.call(null,inst_32877);var inst_32896 = cljs.core.not.call(null,inst_32895);var inst_32897 = (inst_32894) && (inst_32896);var state_32912__$1 = state_32912;var statearr_32945_32979 = state_32912__$1;(statearr_32945_32979[2] = inst_32897);
(statearr_32945_32979[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32913 === 8))
{var inst_32861 = (state_32912[7]);var state_32912__$1 = state_32912;var statearr_32946_32980 = state_32912__$1;(statearr_32946_32980[2] = inst_32861);
(statearr_32946_32980[1] = 9);
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
});})(c__6344__auto___32954,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6329__auto__,c__6344__auto___32954,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_32950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32950[0] = state_machine__6330__auto__);
(statearr_32950[1] = 1);
return statearr_32950;
});
var state_machine__6330__auto____1 = (function (state_32912){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_32912);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e32951){if((e32951 instanceof Object))
{var ex__6333__auto__ = e32951;var statearr_32952_32981 = state_32912;(statearr_32952_32981[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32912);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32951;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32982 = state_32912;
state_32912 = G__32982;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_32912){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_32912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___32954,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6346__auto__ = (function (){var statearr_32953 = f__6345__auto__.call(null);(statearr_32953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___32954);
return statearr_32953;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___32954,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj32984 = {};return obj32984;
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
return (function (p1__32985_SHARP_){if(cljs.core.truth_(p1__32985_SHARP_.call(null,topic)))
{return p1__32985_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__32985_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3557__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t33110 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33110 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta33111){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta33111 = meta33111;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33110.cljs$lang$type = true;
cljs.core.async.t33110.cljs$lang$ctorStr = "cljs.core.async/t33110";
cljs.core.async.t33110.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4124__auto__,writer__4125__auto__,opt__4126__auto__){return cljs.core._write.call(null,writer__4125__auto__,"cljs.core.async/t33110");
});})(mults,ensure_mult))
;
cljs.core.async.t33110.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t33110.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t33110.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t33110.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t33110.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t33110.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33110.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t33110.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33112){var self__ = this;
var _33112__$1 = this;return self__.meta33111;
});})(mults,ensure_mult))
;
cljs.core.async.t33110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33112,meta33111__$1){var self__ = this;
var _33112__$1 = this;return (new cljs.core.async.t33110(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta33111__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t33110 = ((function (mults,ensure_mult){
return (function __GT_t33110(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33111){return (new cljs.core.async.t33110(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33111));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t33110(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6344__auto___33234 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___33234,mults,ensure_mult,p){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___33234,mults,ensure_mult,p){
return (function (state_33186){var state_val_33187 = (state_33186[1]);if((state_val_33187 === 7))
{var inst_33182 = (state_33186[2]);var state_33186__$1 = state_33186;var statearr_33188_33235 = state_33186__$1;(statearr_33188_33235[2] = inst_33182);
(statearr_33188_33235[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33187 === 20))
{var state_33186__$1 = state_33186;var statearr_33189_33236 = state_33186__$1;(statearr_33189_33236[2] = null);
(statearr_33189_33236[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33187 === 1))
{var state_33186__$1 = state_33186;var statearr_33190_33237 = state_33186__$1;(statearr_33190_33237[2] = null);
(statearr_33190_33237[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33187 === 24))
{var inst_33165 = (state_33186[7]);var inst_33115 = (state_33186[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33186,23,Object,null,22);var inst_33172 = cljs.core.async.muxch_STAR_.call(null,inst_33165);var state_33186__$1 = state_33186;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33186__$1,25,inst_33172,inst_33115);
} else
{if((state_val_33187 === 4))
{var inst_33115 = (state_33186[8]);var inst_33115__$1 = (state_33186[2]);var inst_33116 = (inst_33115__$1 == null);var state_33186__$1 = (function (){var statearr_33191 = state_33186;(statearr_33191[8] = inst_33115__$1);
return statearr_33191;
})();if(cljs.core.truth_(inst_33116))
{var statearr_33192_33238 = state_33186__$1;(statearr_33192_33238[1] = 5);
} else
{var statearr_33193_33239 = state_33186__$1;(statearr_33193_33239[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33187 === 15))
{var inst_33157 = (state_33186[2]);var state_33186__$1 = state_33186;var statearr_33194_33240 = state_33186__$1;(statearr_33194_33240[2] = inst_33157);
(statearr_33194_33240[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33187 === 21))
{var inst_33179 = (state_33186[2]);var state_33186__$1 = (function (){var statearr_33195 = state_33186;(statearr_33195[9] = inst_33179);
return statearr_33195;
})();var statearr_33196_33241 = state_33186__$1;(statearr_33196_33241[2] = null);
(statearr_33196_33241[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33187 === 13))
{var inst_33139 = (state_33186[10]);var inst_33141 = cljs.core.chunked_seq_QMARK_.call(null,inst_33139);var state_33186__$1 = state_33186;if(inst_33141)
{var statearr_33197_33242 = state_33186__$1;(statearr_33197_33242[1] = 16);
} else
{var statearr_33198_33243 = state_33186__$1;(statearr_33198_33243[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33187 === 22))
{var inst_33176 = (state_33186[2]);var state_33186__$1 = state_33186;var statearr_33199_33244 = state_33186__$1;(statearr_33199_33244[2] = inst_33176);
(statearr_33199_33244[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33187 === 6))
{var inst_33165 = (state_33186[7]);var inst_33115 = (state_33186[8]);var inst_33163 = (state_33186[11]);var inst_33163__$1 = topic_fn.call(null,inst_33115);var inst_33164 = cljs.core.deref.call(null,mults);var inst_33165__$1 = cljs.core.get.call(null,inst_33164,inst_33163__$1);var state_33186__$1 = (function (){var statearr_33200 = state_33186;(statearr_33200[7] = inst_33165__$1);
(statearr_33200[11] = inst_33163__$1);
return statearr_33200;
})();if(cljs.core.truth_(inst_33165__$1))
{var statearr_33201_33245 = state_33186__$1;(statearr_33201_33245[1] = 19);
} else
{var statearr_33202_33246 = state_33186__$1;(statearr_33202_33246[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33187 === 25))
{var inst_33174 = (state_33186[2]);var state_33186__$1 = state_33186;var statearr_33203_33247 = state_33186__$1;(statearr_33203_33247[2] = inst_33174);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33186__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33187 === 17))
{var inst_33139 = (state_33186[10]);var inst_33148 = cljs.core.first.call(null,inst_33139);var inst_33149 = cljs.core.async.muxch_STAR_.call(null,inst_33148);var inst_33150 = cljs.core.async.close_BANG_.call(null,inst_33149);var inst_33151 = cljs.core.next.call(null,inst_33139);var inst_33125 = inst_33151;var inst_33126 = null;var inst_33127 = 0;var inst_33128 = 0;var state_33186__$1 = (function (){var statearr_33204 = state_33186;(statearr_33204[12] = inst_33128);
(statearr_33204[13] = inst_33126);
(statearr_33204[14] = inst_33125);
(statearr_33204[15] = inst_33150);
(statearr_33204[16] = inst_33127);
return statearr_33204;
})();var statearr_33205_33248 = state_33186__$1;(statearr_33205_33248[2] = null);
(statearr_33205_33248[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33187 === 3))
{var inst_33184 = (state_33186[2]);var state_33186__$1 = state_33186;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33186__$1,inst_33184);
} else
{if((state_val_33187 === 12))
{var inst_33159 = (state_33186[2]);var state_33186__$1 = state_33186;var statearr_33206_33249 = state_33186__$1;(statearr_33206_33249[2] = inst_33159);
(statearr_33206_33249[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33187 === 2))
{var state_33186__$1 = state_33186;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33186__$1,4,ch);
} else
{if((state_val_33187 === 23))
{var inst_33163 = (state_33186[11]);var inst_33167 = (state_33186[2]);var inst_33168 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33163);var state_33186__$1 = (function (){var statearr_33207 = state_33186;(statearr_33207[17] = inst_33167);
return statearr_33207;
})();var statearr_33208_33250 = state_33186__$1;(statearr_33208_33250[2] = inst_33168);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33186__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33187 === 19))
{var state_33186__$1 = state_33186;var statearr_33209_33251 = state_33186__$1;(statearr_33209_33251[2] = null);
(statearr_33209_33251[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33187 === 11))
{var inst_33139 = (state_33186[10]);var inst_33125 = (state_33186[14]);var inst_33139__$1 = cljs.core.seq.call(null,inst_33125);var state_33186__$1 = (function (){var statearr_33210 = state_33186;(statearr_33210[10] = inst_33139__$1);
return statearr_33210;
})();if(inst_33139__$1)
{var statearr_33211_33252 = state_33186__$1;(statearr_33211_33252[1] = 13);
} else
{var statearr_33212_33253 = state_33186__$1;(statearr_33212_33253[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33187 === 9))
{var inst_33161 = (state_33186[2]);var state_33186__$1 = state_33186;var statearr_33213_33254 = state_33186__$1;(statearr_33213_33254[2] = inst_33161);
(statearr_33213_33254[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33187 === 5))
{var inst_33122 = cljs.core.deref.call(null,mults);var inst_33123 = cljs.core.vals.call(null,inst_33122);var inst_33124 = cljs.core.seq.call(null,inst_33123);var inst_33125 = inst_33124;var inst_33126 = null;var inst_33127 = 0;var inst_33128 = 0;var state_33186__$1 = (function (){var statearr_33214 = state_33186;(statearr_33214[12] = inst_33128);
(statearr_33214[13] = inst_33126);
(statearr_33214[14] = inst_33125);
(statearr_33214[16] = inst_33127);
return statearr_33214;
})();var statearr_33215_33255 = state_33186__$1;(statearr_33215_33255[2] = null);
(statearr_33215_33255[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33187 === 14))
{var state_33186__$1 = state_33186;var statearr_33219_33256 = state_33186__$1;(statearr_33219_33256[2] = null);
(statearr_33219_33256[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33187 === 16))
{var inst_33139 = (state_33186[10]);var inst_33143 = cljs.core.chunk_first.call(null,inst_33139);var inst_33144 = cljs.core.chunk_rest.call(null,inst_33139);var inst_33145 = cljs.core.count.call(null,inst_33143);var inst_33125 = inst_33144;var inst_33126 = inst_33143;var inst_33127 = inst_33145;var inst_33128 = 0;var state_33186__$1 = (function (){var statearr_33220 = state_33186;(statearr_33220[12] = inst_33128);
(statearr_33220[13] = inst_33126);
(statearr_33220[14] = inst_33125);
(statearr_33220[16] = inst_33127);
return statearr_33220;
})();var statearr_33221_33257 = state_33186__$1;(statearr_33221_33257[2] = null);
(statearr_33221_33257[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33187 === 10))
{var inst_33128 = (state_33186[12]);var inst_33126 = (state_33186[13]);var inst_33125 = (state_33186[14]);var inst_33127 = (state_33186[16]);var inst_33133 = cljs.core._nth.call(null,inst_33126,inst_33128);var inst_33134 = cljs.core.async.muxch_STAR_.call(null,inst_33133);var inst_33135 = cljs.core.async.close_BANG_.call(null,inst_33134);var inst_33136 = (inst_33128 + 1);var tmp33216 = inst_33126;var tmp33217 = inst_33125;var tmp33218 = inst_33127;var inst_33125__$1 = tmp33217;var inst_33126__$1 = tmp33216;var inst_33127__$1 = tmp33218;var inst_33128__$1 = inst_33136;var state_33186__$1 = (function (){var statearr_33222 = state_33186;(statearr_33222[12] = inst_33128__$1);
(statearr_33222[13] = inst_33126__$1);
(statearr_33222[14] = inst_33125__$1);
(statearr_33222[16] = inst_33127__$1);
(statearr_33222[18] = inst_33135);
return statearr_33222;
})();var statearr_33223_33258 = state_33186__$1;(statearr_33223_33258[2] = null);
(statearr_33223_33258[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33187 === 18))
{var inst_33154 = (state_33186[2]);var state_33186__$1 = state_33186;var statearr_33224_33259 = state_33186__$1;(statearr_33224_33259[2] = inst_33154);
(statearr_33224_33259[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33187 === 8))
{var inst_33128 = (state_33186[12]);var inst_33127 = (state_33186[16]);var inst_33130 = (inst_33128 < inst_33127);var inst_33131 = inst_33130;var state_33186__$1 = state_33186;if(cljs.core.truth_(inst_33131))
{var statearr_33225_33260 = state_33186__$1;(statearr_33225_33260[1] = 10);
} else
{var statearr_33226_33261 = state_33186__$1;(statearr_33226_33261[1] = 11);
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
});})(c__6344__auto___33234,mults,ensure_mult,p))
;return ((function (switch__6329__auto__,c__6344__auto___33234,mults,ensure_mult,p){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_33230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33230[0] = state_machine__6330__auto__);
(statearr_33230[1] = 1);
return statearr_33230;
});
var state_machine__6330__auto____1 = (function (state_33186){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_33186);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e33231){if((e33231 instanceof Object))
{var ex__6333__auto__ = e33231;var statearr_33232_33262 = state_33186;(statearr_33232_33262[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33186);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33231;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33263 = state_33186;
state_33186 = G__33263;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_33186){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_33186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___33234,mults,ensure_mult,p))
})();var state__6346__auto__ = (function (){var statearr_33233 = f__6345__auto__.call(null);(statearr_33233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___33234);
return statearr_33233;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___33234,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6344__auto___33400 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___33400,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___33400,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33370){var state_val_33371 = (state_33370[1]);if((state_val_33371 === 7))
{var state_33370__$1 = state_33370;var statearr_33372_33401 = state_33370__$1;(statearr_33372_33401[2] = null);
(statearr_33372_33401[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33371 === 1))
{var state_33370__$1 = state_33370;var statearr_33373_33402 = state_33370__$1;(statearr_33373_33402[2] = null);
(statearr_33373_33402[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33371 === 4))
{var inst_33334 = (state_33370[7]);var inst_33336 = (inst_33334 < cnt);var state_33370__$1 = state_33370;if(cljs.core.truth_(inst_33336))
{var statearr_33374_33403 = state_33370__$1;(statearr_33374_33403[1] = 6);
} else
{var statearr_33375_33404 = state_33370__$1;(statearr_33375_33404[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33371 === 15))
{var inst_33366 = (state_33370[2]);var state_33370__$1 = state_33370;var statearr_33376_33405 = state_33370__$1;(statearr_33376_33405[2] = inst_33366);
(statearr_33376_33405[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33371 === 13))
{var inst_33359 = cljs.core.async.close_BANG_.call(null,out);var state_33370__$1 = state_33370;var statearr_33377_33406 = state_33370__$1;(statearr_33377_33406[2] = inst_33359);
(statearr_33377_33406[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33371 === 6))
{var state_33370__$1 = state_33370;var statearr_33378_33407 = state_33370__$1;(statearr_33378_33407[2] = null);
(statearr_33378_33407[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33371 === 3))
{var inst_33368 = (state_33370[2]);var state_33370__$1 = state_33370;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33370__$1,inst_33368);
} else
{if((state_val_33371 === 12))
{var inst_33356 = (state_33370[8]);var inst_33356__$1 = (state_33370[2]);var inst_33357 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33356__$1);var state_33370__$1 = (function (){var statearr_33379 = state_33370;(statearr_33379[8] = inst_33356__$1);
return statearr_33379;
})();if(cljs.core.truth_(inst_33357))
{var statearr_33380_33408 = state_33370__$1;(statearr_33380_33408[1] = 13);
} else
{var statearr_33381_33409 = state_33370__$1;(statearr_33381_33409[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33371 === 2))
{var inst_33333 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_33334 = 0;var state_33370__$1 = (function (){var statearr_33382 = state_33370;(statearr_33382[7] = inst_33334);
(statearr_33382[9] = inst_33333);
return statearr_33382;
})();var statearr_33383_33410 = state_33370__$1;(statearr_33383_33410[2] = null);
(statearr_33383_33410[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33371 === 11))
{var inst_33334 = (state_33370[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33370,10,Object,null,9);var inst_33343 = chs__$1.call(null,inst_33334);var inst_33344 = done.call(null,inst_33334);var inst_33345 = cljs.core.async.take_BANG_.call(null,inst_33343,inst_33344);var state_33370__$1 = state_33370;var statearr_33384_33411 = state_33370__$1;(statearr_33384_33411[2] = inst_33345);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33370__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33371 === 9))
{var inst_33334 = (state_33370[7]);var inst_33347 = (state_33370[2]);var inst_33348 = (inst_33334 + 1);var inst_33334__$1 = inst_33348;var state_33370__$1 = (function (){var statearr_33385 = state_33370;(statearr_33385[7] = inst_33334__$1);
(statearr_33385[10] = inst_33347);
return statearr_33385;
})();var statearr_33386_33412 = state_33370__$1;(statearr_33386_33412[2] = null);
(statearr_33386_33412[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33371 === 5))
{var inst_33354 = (state_33370[2]);var state_33370__$1 = (function (){var statearr_33387 = state_33370;(statearr_33387[11] = inst_33354);
return statearr_33387;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33370__$1,12,dchan);
} else
{if((state_val_33371 === 14))
{var inst_33356 = (state_33370[8]);var inst_33361 = cljs.core.apply.call(null,f,inst_33356);var state_33370__$1 = state_33370;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33370__$1,16,out,inst_33361);
} else
{if((state_val_33371 === 16))
{var inst_33363 = (state_33370[2]);var state_33370__$1 = (function (){var statearr_33388 = state_33370;(statearr_33388[12] = inst_33363);
return statearr_33388;
})();var statearr_33389_33413 = state_33370__$1;(statearr_33389_33413[2] = null);
(statearr_33389_33413[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33371 === 10))
{var inst_33338 = (state_33370[2]);var inst_33339 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_33370__$1 = (function (){var statearr_33390 = state_33370;(statearr_33390[13] = inst_33338);
return statearr_33390;
})();var statearr_33391_33414 = state_33370__$1;(statearr_33391_33414[2] = inst_33339);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33370__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33371 === 8))
{var inst_33352 = (state_33370[2]);var state_33370__$1 = state_33370;var statearr_33392_33415 = state_33370__$1;(statearr_33392_33415[2] = inst_33352);
(statearr_33392_33415[1] = 5);
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
});})(c__6344__auto___33400,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6329__auto__,c__6344__auto___33400,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_33396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33396[0] = state_machine__6330__auto__);
(statearr_33396[1] = 1);
return statearr_33396;
});
var state_machine__6330__auto____1 = (function (state_33370){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_33370);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e33397){if((e33397 instanceof Object))
{var ex__6333__auto__ = e33397;var statearr_33398_33416 = state_33370;(statearr_33398_33416[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33370);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33397;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33417 = state_33370;
state_33370 = G__33417;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_33370){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_33370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___33400,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6346__auto__ = (function (){var statearr_33399 = f__6345__auto__.call(null);(statearr_33399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___33400);
return statearr_33399;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___33400,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6344__auto___33525 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___33525,out){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___33525,out){
return (function (state_33501){var state_val_33502 = (state_33501[1]);if((state_val_33502 === 7))
{var inst_33480 = (state_33501[7]);var inst_33481 = (state_33501[8]);var inst_33480__$1 = (state_33501[2]);var inst_33481__$1 = cljs.core.nth.call(null,inst_33480__$1,0,null);var inst_33482 = cljs.core.nth.call(null,inst_33480__$1,1,null);var inst_33483 = (inst_33481__$1 == null);var state_33501__$1 = (function (){var statearr_33503 = state_33501;(statearr_33503[7] = inst_33480__$1);
(statearr_33503[8] = inst_33481__$1);
(statearr_33503[9] = inst_33482);
return statearr_33503;
})();if(cljs.core.truth_(inst_33483))
{var statearr_33504_33526 = state_33501__$1;(statearr_33504_33526[1] = 8);
} else
{var statearr_33505_33527 = state_33501__$1;(statearr_33505_33527[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33502 === 1))
{var inst_33472 = cljs.core.vec.call(null,chs);var inst_33473 = inst_33472;var state_33501__$1 = (function (){var statearr_33506 = state_33501;(statearr_33506[10] = inst_33473);
return statearr_33506;
})();var statearr_33507_33528 = state_33501__$1;(statearr_33507_33528[2] = null);
(statearr_33507_33528[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33502 === 4))
{var inst_33473 = (state_33501[10]);var state_33501__$1 = state_33501;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_33501__$1,7,inst_33473);
} else
{if((state_val_33502 === 6))
{var inst_33497 = (state_33501[2]);var state_33501__$1 = state_33501;var statearr_33508_33529 = state_33501__$1;(statearr_33508_33529[2] = inst_33497);
(statearr_33508_33529[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33502 === 3))
{var inst_33499 = (state_33501[2]);var state_33501__$1 = state_33501;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33501__$1,inst_33499);
} else
{if((state_val_33502 === 2))
{var inst_33473 = (state_33501[10]);var inst_33475 = cljs.core.count.call(null,inst_33473);var inst_33476 = (inst_33475 > 0);var state_33501__$1 = state_33501;if(cljs.core.truth_(inst_33476))
{var statearr_33510_33530 = state_33501__$1;(statearr_33510_33530[1] = 4);
} else
{var statearr_33511_33531 = state_33501__$1;(statearr_33511_33531[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33502 === 11))
{var inst_33473 = (state_33501[10]);var inst_33490 = (state_33501[2]);var tmp33509 = inst_33473;var inst_33473__$1 = tmp33509;var state_33501__$1 = (function (){var statearr_33512 = state_33501;(statearr_33512[10] = inst_33473__$1);
(statearr_33512[11] = inst_33490);
return statearr_33512;
})();var statearr_33513_33532 = state_33501__$1;(statearr_33513_33532[2] = null);
(statearr_33513_33532[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33502 === 9))
{var inst_33481 = (state_33501[8]);var state_33501__$1 = state_33501;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33501__$1,11,out,inst_33481);
} else
{if((state_val_33502 === 5))
{var inst_33495 = cljs.core.async.close_BANG_.call(null,out);var state_33501__$1 = state_33501;var statearr_33514_33533 = state_33501__$1;(statearr_33514_33533[2] = inst_33495);
(statearr_33514_33533[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33502 === 10))
{var inst_33493 = (state_33501[2]);var state_33501__$1 = state_33501;var statearr_33515_33534 = state_33501__$1;(statearr_33515_33534[2] = inst_33493);
(statearr_33515_33534[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33502 === 8))
{var inst_33480 = (state_33501[7]);var inst_33473 = (state_33501[10]);var inst_33481 = (state_33501[8]);var inst_33482 = (state_33501[9]);var inst_33485 = (function (){var c = inst_33482;var v = inst_33481;var vec__33478 = inst_33480;var cs = inst_33473;return ((function (c,v,vec__33478,cs,inst_33480,inst_33473,inst_33481,inst_33482,state_val_33502,c__6344__auto___33525,out){
return (function (p1__33418_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__33418_SHARP_);
});
;})(c,v,vec__33478,cs,inst_33480,inst_33473,inst_33481,inst_33482,state_val_33502,c__6344__auto___33525,out))
})();var inst_33486 = cljs.core.filterv.call(null,inst_33485,inst_33473);var inst_33473__$1 = inst_33486;var state_33501__$1 = (function (){var statearr_33516 = state_33501;(statearr_33516[10] = inst_33473__$1);
return statearr_33516;
})();var statearr_33517_33535 = state_33501__$1;(statearr_33517_33535[2] = null);
(statearr_33517_33535[1] = 2);
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
});})(c__6344__auto___33525,out))
;return ((function (switch__6329__auto__,c__6344__auto___33525,out){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_33521 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33521[0] = state_machine__6330__auto__);
(statearr_33521[1] = 1);
return statearr_33521;
});
var state_machine__6330__auto____1 = (function (state_33501){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_33501);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e33522){if((e33522 instanceof Object))
{var ex__6333__auto__ = e33522;var statearr_33523_33536 = state_33501;(statearr_33523_33536[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33501);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33522;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33537 = state_33501;
state_33501 = G__33537;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_33501){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_33501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___33525,out))
})();var state__6346__auto__ = (function (){var statearr_33524 = f__6345__auto__.call(null);(statearr_33524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___33525);
return statearr_33524;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___33525,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6344__auto___33630 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___33630,out){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___33630,out){
return (function (state_33607){var state_val_33608 = (state_33607[1]);if((state_val_33608 === 7))
{var inst_33589 = (state_33607[7]);var inst_33589__$1 = (state_33607[2]);var inst_33590 = (inst_33589__$1 == null);var inst_33591 = cljs.core.not.call(null,inst_33590);var state_33607__$1 = (function (){var statearr_33609 = state_33607;(statearr_33609[7] = inst_33589__$1);
return statearr_33609;
})();if(inst_33591)
{var statearr_33610_33631 = state_33607__$1;(statearr_33610_33631[1] = 8);
} else
{var statearr_33611_33632 = state_33607__$1;(statearr_33611_33632[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33608 === 1))
{var inst_33584 = 0;var state_33607__$1 = (function (){var statearr_33612 = state_33607;(statearr_33612[8] = inst_33584);
return statearr_33612;
})();var statearr_33613_33633 = state_33607__$1;(statearr_33613_33633[2] = null);
(statearr_33613_33633[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33608 === 4))
{var state_33607__$1 = state_33607;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33607__$1,7,ch);
} else
{if((state_val_33608 === 6))
{var inst_33602 = (state_33607[2]);var state_33607__$1 = state_33607;var statearr_33614_33634 = state_33607__$1;(statearr_33614_33634[2] = inst_33602);
(statearr_33614_33634[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33608 === 3))
{var inst_33604 = (state_33607[2]);var inst_33605 = cljs.core.async.close_BANG_.call(null,out);var state_33607__$1 = (function (){var statearr_33615 = state_33607;(statearr_33615[9] = inst_33604);
return statearr_33615;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33607__$1,inst_33605);
} else
{if((state_val_33608 === 2))
{var inst_33584 = (state_33607[8]);var inst_33586 = (inst_33584 < n);var state_33607__$1 = state_33607;if(cljs.core.truth_(inst_33586))
{var statearr_33616_33635 = state_33607__$1;(statearr_33616_33635[1] = 4);
} else
{var statearr_33617_33636 = state_33607__$1;(statearr_33617_33636[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33608 === 11))
{var inst_33584 = (state_33607[8]);var inst_33594 = (state_33607[2]);var inst_33595 = (inst_33584 + 1);var inst_33584__$1 = inst_33595;var state_33607__$1 = (function (){var statearr_33618 = state_33607;(statearr_33618[8] = inst_33584__$1);
(statearr_33618[10] = inst_33594);
return statearr_33618;
})();var statearr_33619_33637 = state_33607__$1;(statearr_33619_33637[2] = null);
(statearr_33619_33637[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33608 === 9))
{var state_33607__$1 = state_33607;var statearr_33620_33638 = state_33607__$1;(statearr_33620_33638[2] = null);
(statearr_33620_33638[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33608 === 5))
{var state_33607__$1 = state_33607;var statearr_33621_33639 = state_33607__$1;(statearr_33621_33639[2] = null);
(statearr_33621_33639[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33608 === 10))
{var inst_33599 = (state_33607[2]);var state_33607__$1 = state_33607;var statearr_33622_33640 = state_33607__$1;(statearr_33622_33640[2] = inst_33599);
(statearr_33622_33640[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33608 === 8))
{var inst_33589 = (state_33607[7]);var state_33607__$1 = state_33607;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33607__$1,11,out,inst_33589);
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
});})(c__6344__auto___33630,out))
;return ((function (switch__6329__auto__,c__6344__auto___33630,out){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_33626 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_33626[0] = state_machine__6330__auto__);
(statearr_33626[1] = 1);
return statearr_33626;
});
var state_machine__6330__auto____1 = (function (state_33607){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_33607);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e33627){if((e33627 instanceof Object))
{var ex__6333__auto__ = e33627;var statearr_33628_33641 = state_33607;(statearr_33628_33641[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33607);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33627;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33642 = state_33607;
state_33607 = G__33642;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_33607){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_33607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___33630,out))
})();var state__6346__auto__ = (function (){var statearr_33629 = f__6345__auto__.call(null);(statearr_33629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___33630);
return statearr_33629;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___33630,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6344__auto___33739 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___33739,out){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___33739,out){
return (function (state_33714){var state_val_33715 = (state_33714[1]);if((state_val_33715 === 7))
{var inst_33709 = (state_33714[2]);var state_33714__$1 = state_33714;var statearr_33716_33740 = state_33714__$1;(statearr_33716_33740[2] = inst_33709);
(statearr_33716_33740[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33715 === 1))
{var inst_33691 = null;var state_33714__$1 = (function (){var statearr_33717 = state_33714;(statearr_33717[7] = inst_33691);
return statearr_33717;
})();var statearr_33718_33741 = state_33714__$1;(statearr_33718_33741[2] = null);
(statearr_33718_33741[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33715 === 4))
{var inst_33694 = (state_33714[8]);var inst_33694__$1 = (state_33714[2]);var inst_33695 = (inst_33694__$1 == null);var inst_33696 = cljs.core.not.call(null,inst_33695);var state_33714__$1 = (function (){var statearr_33719 = state_33714;(statearr_33719[8] = inst_33694__$1);
return statearr_33719;
})();if(inst_33696)
{var statearr_33720_33742 = state_33714__$1;(statearr_33720_33742[1] = 5);
} else
{var statearr_33721_33743 = state_33714__$1;(statearr_33721_33743[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33715 === 6))
{var state_33714__$1 = state_33714;var statearr_33722_33744 = state_33714__$1;(statearr_33722_33744[2] = null);
(statearr_33722_33744[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33715 === 3))
{var inst_33711 = (state_33714[2]);var inst_33712 = cljs.core.async.close_BANG_.call(null,out);var state_33714__$1 = (function (){var statearr_33723 = state_33714;(statearr_33723[9] = inst_33711);
return statearr_33723;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33714__$1,inst_33712);
} else
{if((state_val_33715 === 2))
{var state_33714__$1 = state_33714;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33714__$1,4,ch);
} else
{if((state_val_33715 === 11))
{var inst_33694 = (state_33714[8]);var inst_33703 = (state_33714[2]);var inst_33691 = inst_33694;var state_33714__$1 = (function (){var statearr_33724 = state_33714;(statearr_33724[7] = inst_33691);
(statearr_33724[10] = inst_33703);
return statearr_33724;
})();var statearr_33725_33745 = state_33714__$1;(statearr_33725_33745[2] = null);
(statearr_33725_33745[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33715 === 9))
{var inst_33694 = (state_33714[8]);var state_33714__$1 = state_33714;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33714__$1,11,out,inst_33694);
} else
{if((state_val_33715 === 5))
{var inst_33691 = (state_33714[7]);var inst_33694 = (state_33714[8]);var inst_33698 = cljs.core._EQ_.call(null,inst_33694,inst_33691);var state_33714__$1 = state_33714;if(inst_33698)
{var statearr_33727_33746 = state_33714__$1;(statearr_33727_33746[1] = 8);
} else
{var statearr_33728_33747 = state_33714__$1;(statearr_33728_33747[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33715 === 10))
{var inst_33706 = (state_33714[2]);var state_33714__$1 = state_33714;var statearr_33729_33748 = state_33714__$1;(statearr_33729_33748[2] = inst_33706);
(statearr_33729_33748[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33715 === 8))
{var inst_33691 = (state_33714[7]);var tmp33726 = inst_33691;var inst_33691__$1 = tmp33726;var state_33714__$1 = (function (){var statearr_33730 = state_33714;(statearr_33730[7] = inst_33691__$1);
return statearr_33730;
})();var statearr_33731_33749 = state_33714__$1;(statearr_33731_33749[2] = null);
(statearr_33731_33749[1] = 2);
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
});})(c__6344__auto___33739,out))
;return ((function (switch__6329__auto__,c__6344__auto___33739,out){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_33735 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_33735[0] = state_machine__6330__auto__);
(statearr_33735[1] = 1);
return statearr_33735;
});
var state_machine__6330__auto____1 = (function (state_33714){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_33714);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e33736){if((e33736 instanceof Object))
{var ex__6333__auto__ = e33736;var statearr_33737_33750 = state_33714;(statearr_33737_33750[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33714);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33736;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33751 = state_33714;
state_33714 = G__33751;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_33714){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_33714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___33739,out))
})();var state__6346__auto__ = (function (){var statearr_33738 = f__6345__auto__.call(null);(statearr_33738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___33739);
return statearr_33738;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___33739,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6344__auto___33886 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___33886,out){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___33886,out){
return (function (state_33856){var state_val_33857 = (state_33856[1]);if((state_val_33857 === 7))
{var inst_33852 = (state_33856[2]);var state_33856__$1 = state_33856;var statearr_33858_33887 = state_33856__$1;(statearr_33858_33887[2] = inst_33852);
(statearr_33858_33887[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33857 === 1))
{var inst_33819 = (new Array(n));var inst_33820 = inst_33819;var inst_33821 = 0;var state_33856__$1 = (function (){var statearr_33859 = state_33856;(statearr_33859[7] = inst_33820);
(statearr_33859[8] = inst_33821);
return statearr_33859;
})();var statearr_33860_33888 = state_33856__$1;(statearr_33860_33888[2] = null);
(statearr_33860_33888[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33857 === 4))
{var inst_33824 = (state_33856[9]);var inst_33824__$1 = (state_33856[2]);var inst_33825 = (inst_33824__$1 == null);var inst_33826 = cljs.core.not.call(null,inst_33825);var state_33856__$1 = (function (){var statearr_33861 = state_33856;(statearr_33861[9] = inst_33824__$1);
return statearr_33861;
})();if(inst_33826)
{var statearr_33862_33889 = state_33856__$1;(statearr_33862_33889[1] = 5);
} else
{var statearr_33863_33890 = state_33856__$1;(statearr_33863_33890[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33857 === 15))
{var inst_33846 = (state_33856[2]);var state_33856__$1 = state_33856;var statearr_33864_33891 = state_33856__$1;(statearr_33864_33891[2] = inst_33846);
(statearr_33864_33891[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33857 === 13))
{var state_33856__$1 = state_33856;var statearr_33865_33892 = state_33856__$1;(statearr_33865_33892[2] = null);
(statearr_33865_33892[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33857 === 6))
{var inst_33821 = (state_33856[8]);var inst_33842 = (inst_33821 > 0);var state_33856__$1 = state_33856;if(cljs.core.truth_(inst_33842))
{var statearr_33866_33893 = state_33856__$1;(statearr_33866_33893[1] = 12);
} else
{var statearr_33867_33894 = state_33856__$1;(statearr_33867_33894[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33857 === 3))
{var inst_33854 = (state_33856[2]);var state_33856__$1 = state_33856;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33856__$1,inst_33854);
} else
{if((state_val_33857 === 12))
{var inst_33820 = (state_33856[7]);var inst_33844 = cljs.core.vec.call(null,inst_33820);var state_33856__$1 = state_33856;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33856__$1,15,out,inst_33844);
} else
{if((state_val_33857 === 2))
{var state_33856__$1 = state_33856;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33856__$1,4,ch);
} else
{if((state_val_33857 === 11))
{var inst_33836 = (state_33856[2]);var inst_33837 = (new Array(n));var inst_33820 = inst_33837;var inst_33821 = 0;var state_33856__$1 = (function (){var statearr_33868 = state_33856;(statearr_33868[7] = inst_33820);
(statearr_33868[8] = inst_33821);
(statearr_33868[10] = inst_33836);
return statearr_33868;
})();var statearr_33869_33895 = state_33856__$1;(statearr_33869_33895[2] = null);
(statearr_33869_33895[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33857 === 9))
{var inst_33820 = (state_33856[7]);var inst_33834 = cljs.core.vec.call(null,inst_33820);var state_33856__$1 = state_33856;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33856__$1,11,out,inst_33834);
} else
{if((state_val_33857 === 5))
{var inst_33824 = (state_33856[9]);var inst_33820 = (state_33856[7]);var inst_33829 = (state_33856[11]);var inst_33821 = (state_33856[8]);var inst_33828 = (inst_33820[inst_33821] = inst_33824);var inst_33829__$1 = (inst_33821 + 1);var inst_33830 = (inst_33829__$1 < n);var state_33856__$1 = (function (){var statearr_33870 = state_33856;(statearr_33870[11] = inst_33829__$1);
(statearr_33870[12] = inst_33828);
return statearr_33870;
})();if(cljs.core.truth_(inst_33830))
{var statearr_33871_33896 = state_33856__$1;(statearr_33871_33896[1] = 8);
} else
{var statearr_33872_33897 = state_33856__$1;(statearr_33872_33897[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33857 === 14))
{var inst_33849 = (state_33856[2]);var inst_33850 = cljs.core.async.close_BANG_.call(null,out);var state_33856__$1 = (function (){var statearr_33874 = state_33856;(statearr_33874[13] = inst_33849);
return statearr_33874;
})();var statearr_33875_33898 = state_33856__$1;(statearr_33875_33898[2] = inst_33850);
(statearr_33875_33898[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33857 === 10))
{var inst_33840 = (state_33856[2]);var state_33856__$1 = state_33856;var statearr_33876_33899 = state_33856__$1;(statearr_33876_33899[2] = inst_33840);
(statearr_33876_33899[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33857 === 8))
{var inst_33820 = (state_33856[7]);var inst_33829 = (state_33856[11]);var tmp33873 = inst_33820;var inst_33820__$1 = tmp33873;var inst_33821 = inst_33829;var state_33856__$1 = (function (){var statearr_33877 = state_33856;(statearr_33877[7] = inst_33820__$1);
(statearr_33877[8] = inst_33821);
return statearr_33877;
})();var statearr_33878_33900 = state_33856__$1;(statearr_33878_33900[2] = null);
(statearr_33878_33900[1] = 2);
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
});})(c__6344__auto___33886,out))
;return ((function (switch__6329__auto__,c__6344__auto___33886,out){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_33882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33882[0] = state_machine__6330__auto__);
(statearr_33882[1] = 1);
return statearr_33882;
});
var state_machine__6330__auto____1 = (function (state_33856){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_33856);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e33883){if((e33883 instanceof Object))
{var ex__6333__auto__ = e33883;var statearr_33884_33901 = state_33856;(statearr_33884_33901[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33856);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33883;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33902 = state_33856;
state_33856 = G__33902;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_33856){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_33856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___33886,out))
})();var state__6346__auto__ = (function (){var statearr_33885 = f__6345__auto__.call(null);(statearr_33885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___33886);
return statearr_33885;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___33886,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6344__auto___34045 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6344__auto___34045,out){
return (function (){var f__6345__auto__ = (function (){var switch__6329__auto__ = ((function (c__6344__auto___34045,out){
return (function (state_34015){var state_val_34016 = (state_34015[1]);if((state_val_34016 === 7))
{var inst_34011 = (state_34015[2]);var state_34015__$1 = state_34015;var statearr_34017_34046 = state_34015__$1;(statearr_34017_34046[2] = inst_34011);
(statearr_34017_34046[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34016 === 1))
{var inst_33974 = [];var inst_33975 = inst_33974;var inst_33976 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_34015__$1 = (function (){var statearr_34018 = state_34015;(statearr_34018[7] = inst_33975);
(statearr_34018[8] = inst_33976);
return statearr_34018;
})();var statearr_34019_34047 = state_34015__$1;(statearr_34019_34047[2] = null);
(statearr_34019_34047[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34016 === 4))
{var inst_33979 = (state_34015[9]);var inst_33979__$1 = (state_34015[2]);var inst_33980 = (inst_33979__$1 == null);var inst_33981 = cljs.core.not.call(null,inst_33980);var state_34015__$1 = (function (){var statearr_34020 = state_34015;(statearr_34020[9] = inst_33979__$1);
return statearr_34020;
})();if(inst_33981)
{var statearr_34021_34048 = state_34015__$1;(statearr_34021_34048[1] = 5);
} else
{var statearr_34022_34049 = state_34015__$1;(statearr_34022_34049[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34016 === 15))
{var inst_34005 = (state_34015[2]);var state_34015__$1 = state_34015;var statearr_34023_34050 = state_34015__$1;(statearr_34023_34050[2] = inst_34005);
(statearr_34023_34050[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34016 === 13))
{var state_34015__$1 = state_34015;var statearr_34024_34051 = state_34015__$1;(statearr_34024_34051[2] = null);
(statearr_34024_34051[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34016 === 6))
{var inst_33975 = (state_34015[7]);var inst_34000 = inst_33975.length;var inst_34001 = (inst_34000 > 0);var state_34015__$1 = state_34015;if(cljs.core.truth_(inst_34001))
{var statearr_34025_34052 = state_34015__$1;(statearr_34025_34052[1] = 12);
} else
{var statearr_34026_34053 = state_34015__$1;(statearr_34026_34053[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34016 === 3))
{var inst_34013 = (state_34015[2]);var state_34015__$1 = state_34015;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34015__$1,inst_34013);
} else
{if((state_val_34016 === 12))
{var inst_33975 = (state_34015[7]);var inst_34003 = cljs.core.vec.call(null,inst_33975);var state_34015__$1 = state_34015;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34015__$1,15,out,inst_34003);
} else
{if((state_val_34016 === 2))
{var state_34015__$1 = state_34015;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34015__$1,4,ch);
} else
{if((state_val_34016 === 11))
{var inst_33983 = (state_34015[10]);var inst_33979 = (state_34015[9]);var inst_33993 = (state_34015[2]);var inst_33994 = [];var inst_33995 = inst_33994.push(inst_33979);var inst_33975 = inst_33994;var inst_33976 = inst_33983;var state_34015__$1 = (function (){var statearr_34027 = state_34015;(statearr_34027[7] = inst_33975);
(statearr_34027[11] = inst_33993);
(statearr_34027[8] = inst_33976);
(statearr_34027[12] = inst_33995);
return statearr_34027;
})();var statearr_34028_34054 = state_34015__$1;(statearr_34028_34054[2] = null);
(statearr_34028_34054[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34016 === 9))
{var inst_33975 = (state_34015[7]);var inst_33991 = cljs.core.vec.call(null,inst_33975);var state_34015__$1 = state_34015;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34015__$1,11,out,inst_33991);
} else
{if((state_val_34016 === 5))
{var inst_33983 = (state_34015[10]);var inst_33976 = (state_34015[8]);var inst_33979 = (state_34015[9]);var inst_33983__$1 = f.call(null,inst_33979);var inst_33984 = cljs.core._EQ_.call(null,inst_33983__$1,inst_33976);var inst_33985 = cljs.core.keyword_identical_QMARK_.call(null,inst_33976,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_33986 = (inst_33984) || (inst_33985);var state_34015__$1 = (function (){var statearr_34029 = state_34015;(statearr_34029[10] = inst_33983__$1);
return statearr_34029;
})();if(cljs.core.truth_(inst_33986))
{var statearr_34030_34055 = state_34015__$1;(statearr_34030_34055[1] = 8);
} else
{var statearr_34031_34056 = state_34015__$1;(statearr_34031_34056[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34016 === 14))
{var inst_34008 = (state_34015[2]);var inst_34009 = cljs.core.async.close_BANG_.call(null,out);var state_34015__$1 = (function (){var statearr_34033 = state_34015;(statearr_34033[13] = inst_34008);
return statearr_34033;
})();var statearr_34034_34057 = state_34015__$1;(statearr_34034_34057[2] = inst_34009);
(statearr_34034_34057[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34016 === 10))
{var inst_33998 = (state_34015[2]);var state_34015__$1 = state_34015;var statearr_34035_34058 = state_34015__$1;(statearr_34035_34058[2] = inst_33998);
(statearr_34035_34058[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34016 === 8))
{var inst_33975 = (state_34015[7]);var inst_33983 = (state_34015[10]);var inst_33979 = (state_34015[9]);var inst_33988 = inst_33975.push(inst_33979);var tmp34032 = inst_33975;var inst_33975__$1 = tmp34032;var inst_33976 = inst_33983;var state_34015__$1 = (function (){var statearr_34036 = state_34015;(statearr_34036[14] = inst_33988);
(statearr_34036[7] = inst_33975__$1);
(statearr_34036[8] = inst_33976);
return statearr_34036;
})();var statearr_34037_34059 = state_34015__$1;(statearr_34037_34059[2] = null);
(statearr_34037_34059[1] = 2);
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
});})(c__6344__auto___34045,out))
;return ((function (switch__6329__auto__,c__6344__auto___34045,out){
return (function() {
var state_machine__6330__auto__ = null;
var state_machine__6330__auto____0 = (function (){var statearr_34041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34041[0] = state_machine__6330__auto__);
(statearr_34041[1] = 1);
return statearr_34041;
});
var state_machine__6330__auto____1 = (function (state_34015){while(true){
var ret_value__6331__auto__ = (function (){try{while(true){
var result__6332__auto__ = switch__6329__auto__.call(null,state_34015);if(cljs.core.keyword_identical_QMARK_.call(null,result__6332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6332__auto__;
}
break;
}
}catch (e34042){if((e34042 instanceof Object))
{var ex__6333__auto__ = e34042;var statearr_34043_34060 = state_34015;(statearr_34043_34060[5] = ex__6333__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34015);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34042;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6331__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34061 = state_34015;
state_34015 = G__34061;
continue;
}
} else
{return ret_value__6331__auto__;
}
break;
}
});
state_machine__6330__auto__ = function(state_34015){
switch(arguments.length){
case 0:
return state_machine__6330__auto____0.call(this);
case 1:
return state_machine__6330__auto____1.call(this,state_34015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6330__auto____0;
state_machine__6330__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6330__auto____1;
return state_machine__6330__auto__;
})()
;})(switch__6329__auto__,c__6344__auto___34045,out))
})();var state__6346__auto__ = (function (){var statearr_34044 = f__6345__auto__.call(null);(statearr_34044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6344__auto___34045);
return statearr_34044;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6346__auto__);
});})(c__6344__auto___34045,out))
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