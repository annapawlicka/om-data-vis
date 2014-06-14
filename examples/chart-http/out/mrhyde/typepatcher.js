// Compiled by ClojureScript 0.0-2227
goog.provide('mrhyde.typepatcher');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('mrhyde.mrhyde');
goog.require('mrhyde.guts');
goog.require('clojure.set');
goog.require('mrhyde.guts');
goog.require('mrhyde.mrhyde');
/**
* @param {...*} var_args
*/
mrhyde.typepatcher.dp = (function() { 
var dp__delegate = function (args){return console.log(cljs.core.apply.call(null,cljs.core.str,args));
};
var dp = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dp__delegate.call(this,args);};
dp.cljs$lang$maxFixedArity = 0;
dp.cljs$lang$applyTo = (function (arglist__10961){
var args = cljs.core.seq(arglist__10961);
return dp__delegate(args);
});
dp.cljs$core$IFn$_invoke$arity$variadic = dp__delegate;
return dp;
})()
;
mrhyde.typepatcher.install_js_get_prop = (function (){var reusable_descriptor = (function (){var obj10963 = {};return obj10963;
})();(reusable_descriptor["configurable"] = true);
(reusable_descriptor["enumerable"] = true);
return ((function (reusable_descriptor){
return (function internal_js_getset_prop(obj,nam,getfn){(reusable_descriptor["get"] = getfn);
return Object.defineProperty(obj,nam,reusable_descriptor);
});
;})(reusable_descriptor))
}).call(null);
mrhyde.typepatcher.install_js_hidden_get_prop = (function (){var reusable_descriptor = (function (){var obj10965 = {};return obj10965;
})();(reusable_descriptor["configurable"] = true);
(reusable_descriptor["enumerable"] = false);
return ((function (reusable_descriptor){
return (function internal_js_getset_prop(obj,nam,getfn){(reusable_descriptor["get"] = getfn);
return Object.defineProperty(obj,nam,reusable_descriptor);
});
;})(reusable_descriptor))
}).call(null);
mrhyde.typepatcher.hide_js_props = (function (){var reusable_descriptor = (function (){var obj10967 = {};return obj10967;
})();(reusable_descriptor["enumerable"] = false);
return ((function (reusable_descriptor){
return (function internal_js_getset_prop(obj,s){var seq__10972 = cljs.core.seq.call(null,s);var chunk__10973 = null;var count__10974 = 0;var i__10975 = 0;while(true){
if((i__10975 < count__10974))
{var nam = cljs.core._nth.call(null,chunk__10973,i__10975);Object.defineProperty(obj,nam,reusable_descriptor);
{
var G__10976 = seq__10972;
var G__10977 = chunk__10973;
var G__10978 = count__10974;
var G__10979 = (i__10975 + 1);
seq__10972 = G__10976;
chunk__10973 = G__10977;
count__10974 = G__10978;
i__10975 = G__10979;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10972);if(temp__4092__auto__)
{var seq__10972__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10972__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__10972__$1);{
var G__10980 = cljs.core.chunk_rest.call(null,seq__10972__$1);
var G__10981 = c__4297__auto__;
var G__10982 = cljs.core.count.call(null,c__4297__auto__);
var G__10983 = 0;
seq__10972 = G__10980;
chunk__10973 = G__10981;
count__10974 = G__10982;
i__10975 = G__10983;
continue;
}
} else
{var nam = cljs.core.first.call(null,seq__10972__$1);Object.defineProperty(obj,nam,reusable_descriptor);
{
var G__10984 = cljs.core.next.call(null,seq__10972__$1);
var G__10985 = null;
var G__10986 = 0;
var G__10987 = 0;
seq__10972 = G__10984;
chunk__10973 = G__10985;
count__10974 = G__10986;
i__10975 = G__10987;
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
;})(reusable_descriptor))
}).call(null);
mrhyde.typepatcher.install_js_getset_prop = (function (){var reusable_descriptor = (function (){var obj10989 = {};return obj10989;
})();(reusable_descriptor["configurable"] = true);
(reusable_descriptor["enumerable"] = true);
return ((function (reusable_descriptor){
return (function internal_js_getset_prop(obj,nam,getfn,setfn){(reusable_descriptor["get"] = getfn);
(reusable_descriptor["set"] = setfn);
return Object.defineProperty(obj,nam,reusable_descriptor);
});
;})(reusable_descriptor))
}).call(null);
mrhyde.typepatcher.install_js_hidden_getset_prop = (function (){var reusable_descriptor = (function (){var obj10991 = {};return obj10991;
})();(reusable_descriptor["configurable"] = true);
(reusable_descriptor["enumerable"] = false);
return ((function (reusable_descriptor){
return (function internal_js_getset_prop(obj,nam,getfn,setfn){(reusable_descriptor["get"] = getfn);
(reusable_descriptor["set"] = setfn);
return Object.defineProperty(obj,nam,reusable_descriptor);
});
;})(reusable_descriptor))
}).call(null);
mrhyde.typepatcher.aset_hidden = (function aset_hidden(o,nam,p){(o[nam] = p);
return mrhyde.typepatcher.hide_js_props.call(null,o,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nam], null));
});
mrhyde.typepatcher.hyde_cache_key = "$cljs$mrhyde$cache";
mrhyde.typepatcher.hyde_access_key = "$cljs$mrhyde$acccess";
mrhyde.typepatcher.hyde_keylist_key = "$cljs$mrhyde$keylist";
mrhyde.typepatcher.hyde_keyset_key = "$cljs$mrhyde$keyset";
mrhyde.typepatcher.cljs_partition_key = "cljs$lang$protocol_mask$partition0$";
mrhyde.typepatcher.hyde_parition_key = ("$cljs$mrhyde$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(mrhyde.typepatcher.cljs_partition_key));
mrhyde.typepatcher.hyde_array_ensure_cached = (function hyde_array_ensure_cached(h){if(cljs.core.not.call(null,goog.object.containsKey(h,mrhyde.typepatcher.hyde_cache_key)))
{return mrhyde.typepatcher.aset_hidden.call(null,h,mrhyde.typepatcher.hyde_cache_key,cljs.core.apply.call(null,cljs.core.array,h));
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
mrhyde.typepatcher.hyde_array_pop = (function() { 
var hyde_array_pop__delegate = function (args){return console.log("WARNING: someone has called unsupported hyde-array method pop");
};
var hyde_array_pop = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_pop__delegate.call(this,args);};
hyde_array_pop.cljs$lang$maxFixedArity = 0;
hyde_array_pop.cljs$lang$applyTo = (function (arglist__10992){
var args = cljs.core.seq(arglist__10992);
return hyde_array_pop__delegate(args);
});
hyde_array_pop.cljs$core$IFn$_invoke$arity$variadic = hyde_array_pop__delegate;
return hyde_array_pop;
})()
;
/**
* @param {...*} var_args
*/
mrhyde.typepatcher.hyde_array_push = (function() { 
var hyde_array_push__delegate = function (args){return console.log("WARNING: someone has called unsupported hyde-array method push");
};
var hyde_array_push = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_push__delegate.call(this,args);};
hyde_array_push.cljs$lang$maxFixedArity = 0;
hyde_array_push.cljs$lang$applyTo = (function (arglist__10993){
var args = cljs.core.seq(arglist__10993);
return hyde_array_push__delegate(args);
});
hyde_array_push.cljs$core$IFn$_invoke$arity$variadic = hyde_array_push__delegate;
return hyde_array_push;
})()
;
/**
* @param {...*} var_args
*/
mrhyde.typepatcher.hyde_array_reverse = (function() { 
var hyde_array_reverse__delegate = function (args){var t = this;mrhyde.typepatcher.hyde_array_ensure_cached.call(null,t);
var c = (t[mrhyde.typepatcher.hyde_cache_key]);c.reverse();
return t;
};
var hyde_array_reverse = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_reverse__delegate.call(this,args);};
hyde_array_reverse.cljs$lang$maxFixedArity = 0;
hyde_array_reverse.cljs$lang$applyTo = (function (arglist__10994){
var args = cljs.core.seq(arglist__10994);
return hyde_array_reverse__delegate(args);
});
hyde_array_reverse.cljs$core$IFn$_invoke$arity$variadic = hyde_array_reverse__delegate;
return hyde_array_reverse;
})()
;
/**
* @param {...*} var_args
*/
mrhyde.typepatcher.hyde_array_shift = (function() { 
var hyde_array_shift__delegate = function (args){var t = this;mrhyde.typepatcher.hyde_array_ensure_cached.call(null,t);
var c = (t[mrhyde.typepatcher.hyde_cache_key]);return c.shift();
};
var hyde_array_shift = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_shift__delegate.call(this,args);};
hyde_array_shift.cljs$lang$maxFixedArity = 0;
hyde_array_shift.cljs$lang$applyTo = (function (arglist__10995){
var args = cljs.core.seq(arglist__10995);
return hyde_array_shift__delegate(args);
});
hyde_array_shift.cljs$core$IFn$_invoke$arity$variadic = hyde_array_shift__delegate;
return hyde_array_shift;
})()
;
/**
* @param {...*} var_args
*/
mrhyde.typepatcher.hyde_array_sort = (function() { 
var hyde_array_sort__delegate = function (args){var t = this;mrhyde.typepatcher.hyde_array_ensure_cached.call(null,t);
var c = (t[mrhyde.typepatcher.hyde_cache_key]);c.sort();
return t;
};
var hyde_array_sort = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_sort__delegate.call(this,args);};
hyde_array_sort.cljs$lang$maxFixedArity = 0;
hyde_array_sort.cljs$lang$applyTo = (function (arglist__10996){
var args = cljs.core.seq(arglist__10996);
return hyde_array_sort__delegate(args);
});
hyde_array_sort.cljs$core$IFn$_invoke$arity$variadic = hyde_array_sort__delegate;
return hyde_array_sort;
})()
;
/**
* @param {...*} var_args
*/
mrhyde.typepatcher.hyde_array_splice = (function() { 
var hyde_array_splice__delegate = function (args){return console.log("WARNING: someone has called unsupported hyde-array method splice");
};
var hyde_array_splice = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_splice__delegate.call(this,args);};
hyde_array_splice.cljs$lang$maxFixedArity = 0;
hyde_array_splice.cljs$lang$applyTo = (function (arglist__10997){
var args = cljs.core.seq(arglist__10997);
return hyde_array_splice__delegate(args);
});
hyde_array_splice.cljs$core$IFn$_invoke$arity$variadic = hyde_array_splice__delegate;
return hyde_array_splice;
})()
;
/**
* @param {...*} var_args
*/
mrhyde.typepatcher.hyde_array_unshift = (function() { 
var hyde_array_unshift__delegate = function (args){return console.log("WARNING: someone has called unsupported hyde-array method unshift");
};
var hyde_array_unshift = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_unshift__delegate.call(this,args);};
hyde_array_unshift.cljs$lang$maxFixedArity = 0;
hyde_array_unshift.cljs$lang$applyTo = (function (arglist__10998){
var args = cljs.core.seq(arglist__10998);
return hyde_array_unshift__delegate(args);
});
hyde_array_unshift.cljs$core$IFn$_invoke$arity$variadic = hyde_array_unshift__delegate;
return hyde_array_unshift;
})()
;
/**
* @param {...*} var_args
*/
mrhyde.typepatcher.hyde_array_concat = (function() { 
var hyde_array_concat__delegate = function (args){return console.log("WARNING: someone has called unsupported hyde-array method concat");
};
var hyde_array_concat = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_concat__delegate.call(this,args);};
hyde_array_concat.cljs$lang$maxFixedArity = 0;
hyde_array_concat.cljs$lang$applyTo = (function (arglist__10999){
var args = cljs.core.seq(arglist__10999);
return hyde_array_concat__delegate(args);
});
hyde_array_concat.cljs$core$IFn$_invoke$arity$variadic = hyde_array_concat__delegate;
return hyde_array_concat;
})()
;
/**
* @param {...*} var_args
*/
mrhyde.typepatcher.hyde_array_join = (function() { 
var hyde_array_join__delegate = function (args){return console.log("WARNING: someone has called unsupported hyde-array method join");
};
var hyde_array_join = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_join__delegate.call(this,args);};
hyde_array_join.cljs$lang$maxFixedArity = 0;
hyde_array_join.cljs$lang$applyTo = (function (arglist__11000){
var args = cljs.core.seq(arglist__11000);
return hyde_array_join__delegate(args);
});
hyde_array_join.cljs$core$IFn$_invoke$arity$variadic = hyde_array_join__delegate;
return hyde_array_join;
})()
;
/**
* @param {...*} var_args
*/
mrhyde.typepatcher.hyde_array_concat = (function() { 
var hyde_array_concat__delegate = function (args){return console.log("WARNING: someone has called unsupported hyde-array method concat");
};
var hyde_array_concat = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_concat__delegate.call(this,args);};
hyde_array_concat.cljs$lang$maxFixedArity = 0;
hyde_array_concat.cljs$lang$applyTo = (function (arglist__11001){
var args = cljs.core.seq(arglist__11001);
return hyde_array_concat__delegate(args);
});
hyde_array_concat.cljs$core$IFn$_invoke$arity$variadic = hyde_array_concat__delegate;
return hyde_array_concat;
})()
;
/**
* @param {...*} var_args
*/
mrhyde.typepatcher.hyde_array_concat = (function() { 
var hyde_array_concat__delegate = function (args){return console.log("WARNING: someone has called unsupported hyde-array method concat");
};
var hyde_array_concat = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_concat__delegate.call(this,args);};
hyde_array_concat.cljs$lang$maxFixedArity = 0;
hyde_array_concat.cljs$lang$applyTo = (function (arglist__11002){
var args = cljs.core.seq(arglist__11002);
return hyde_array_concat__delegate(args);
});
hyde_array_concat.cljs$core$IFn$_invoke$arity$variadic = hyde_array_concat__delegate;
return hyde_array_concat;
})()
;
/**
* @param {...*} var_args
*/
mrhyde.typepatcher.hyde_array_concat = (function() { 
var hyde_array_concat__delegate = function (args){return console.log("WARNING: someone has called unsupported hyde-array method concat");
};
var hyde_array_concat = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_concat__delegate.call(this,args);};
hyde_array_concat.cljs$lang$maxFixedArity = 0;
hyde_array_concat.cljs$lang$applyTo = (function (arglist__11003){
var args = cljs.core.seq(arglist__11003);
return hyde_array_concat__delegate(args);
});
hyde_array_concat.cljs$core$IFn$_invoke$arity$variadic = hyde_array_concat__delegate;
return hyde_array_concat;
})()
;
/**
* @param {...*} var_args
*/
mrhyde.typepatcher.hyde_array_concat = (function() { 
var hyde_array_concat__delegate = function (args){return console.log("WARNING: someone has called unsupported hyde-array method concat");
};
var hyde_array_concat = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_concat__delegate.call(this,args);};
hyde_array_concat.cljs$lang$maxFixedArity = 0;
hyde_array_concat.cljs$lang$applyTo = (function (arglist__11004){
var args = cljs.core.seq(arglist__11004);
return hyde_array_concat__delegate(args);
});
hyde_array_concat.cljs$core$IFn$_invoke$arity$variadic = hyde_array_concat__delegate;
return hyde_array_concat;
})()
;
/**
* @param {...*} var_args
*/
mrhyde.typepatcher.hyde_array_slice = (function() { 
var hyde_array_slice__delegate = function (args){var this$ = this;var begin = cljs.core.first.call(null,args);var end = cljs.core.second.call(null,args);if((end == null))
{return cljs.core.drop.call(null,begin,this$);
} else
{return cljs.core.take.call(null,(end - begin),cljs.core.drop.call(null,begin,this$));
}
};
var hyde_array_slice = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_slice__delegate.call(this,args);};
hyde_array_slice.cljs$lang$maxFixedArity = 0;
hyde_array_slice.cljs$lang$applyTo = (function (arglist__11005){
var args = cljs.core.seq(arglist__11005);
return hyde_array_slice__delegate(args);
});
hyde_array_slice.cljs$core$IFn$_invoke$arity$variadic = hyde_array_slice__delegate;
return hyde_array_slice;
})()
;
/**
* @param {...*} var_args
*/
mrhyde.typepatcher.hyde_array_vector_slice = (function() { 
var hyde_array_vector_slice__delegate = function (args){console.log("note: calling untested hyde-array vector-slice");
var this$ = this;return cljs.core.apply.call(null,cljs.core.subvec,this$,args);
};
var hyde_array_vector_slice = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_vector_slice__delegate.call(this,args);};
hyde_array_vector_slice.cljs$lang$maxFixedArity = 0;
hyde_array_vector_slice.cljs$lang$applyTo = (function (arglist__11006){
var args = cljs.core.seq(arglist__11006);
return hyde_array_vector_slice__delegate(args);
});
hyde_array_vector_slice.cljs$core$IFn$_invoke$arity$variadic = hyde_array_vector_slice__delegate;
return hyde_array_vector_slice;
})()
;
/**
* @param {...*} var_args
*/
mrhyde.typepatcher.hyde_array_to_source = (function() { 
var hyde_array_to_source__delegate = function (args){return console.log("WARNING: someone has called unsupported hyde-array method toSource");
};
var hyde_array_to_source = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_to_source__delegate.call(this,args);};
hyde_array_to_source.cljs$lang$maxFixedArity = 0;
hyde_array_to_source.cljs$lang$applyTo = (function (arglist__11007){
var args = cljs.core.seq(arglist__11007);
return hyde_array_to_source__delegate(args);
});
hyde_array_to_source.cljs$core$IFn$_invoke$arity$variadic = hyde_array_to_source__delegate;
return hyde_array_to_source;
})()
;
/**
* @param {...*} var_args
*/
mrhyde.typepatcher.hyde_array_to_string = (function() { 
var hyde_array_to_string__delegate = function (args){var this$ = this;return clojure.string.join.call(null,", ",this$);
};
var hyde_array_to_string = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_to_string__delegate.call(this,args);};
hyde_array_to_string.cljs$lang$maxFixedArity = 0;
hyde_array_to_string.cljs$lang$applyTo = (function (arglist__11008){
var args = cljs.core.seq(arglist__11008);
return hyde_array_to_string__delegate(args);
});
hyde_array_to_string.cljs$core$IFn$_invoke$arity$variadic = hyde_array_to_string__delegate;
return hyde_array_to_string;
})()
;
/**
* @param {...*} var_args
*/
mrhyde.typepatcher.hyde_array_index_of = (function() { 
var hyde_array_index_of__delegate = function (args){return console.log("WARNING: someone has called unsupported hyde-array method indexOf");
};
var hyde_array_index_of = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_index_of__delegate.call(this,args);};
hyde_array_index_of.cljs$lang$maxFixedArity = 0;
hyde_array_index_of.cljs$lang$applyTo = (function (arglist__11009){
var args = cljs.core.seq(arglist__11009);
return hyde_array_index_of__delegate(args);
});
hyde_array_index_of.cljs$core$IFn$_invoke$arity$variadic = hyde_array_index_of__delegate;
return hyde_array_index_of;
})()
;
/**
* @param {...*} var_args
*/
mrhyde.typepatcher.hyde_array_last_index_of = (function() { 
var hyde_array_last_index_of__delegate = function (args){return console.log("WARNING: someone has called unsupported hyde-array method lastIndexOf");
};
var hyde_array_last_index_of = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_last_index_of__delegate.call(this,args);};
hyde_array_last_index_of.cljs$lang$maxFixedArity = 0;
hyde_array_last_index_of.cljs$lang$applyTo = (function (arglist__11010){
var args = cljs.core.seq(arglist__11010);
return hyde_array_last_index_of__delegate(args);
});
hyde_array_last_index_of.cljs$core$IFn$_invoke$arity$variadic = hyde_array_last_index_of__delegate;
return hyde_array_last_index_of;
})()
;
/**
* @param {...*} var_args
*/
mrhyde.typepatcher.hyde_array_every = (function() { 
var hyde_array_every__delegate = function (args){return console.log("WARNING: someone has called unsupported hyde-array method every");
};
var hyde_array_every = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_every__delegate.call(this,args);};
hyde_array_every.cljs$lang$maxFixedArity = 0;
hyde_array_every.cljs$lang$applyTo = (function (arglist__11011){
var args = cljs.core.seq(arglist__11011);
return hyde_array_every__delegate(args);
});
hyde_array_every.cljs$core$IFn$_invoke$arity$variadic = hyde_array_every__delegate;
return hyde_array_every;
})()
;
/**
* @param {...*} var_args
*/
mrhyde.typepatcher.hyde_array_some = (function() { 
var hyde_array_some__delegate = function (args){return console.log("WARNING: someone has called unsupported hyde-array method some");
};
var hyde_array_some = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_some__delegate.call(this,args);};
hyde_array_some.cljs$lang$maxFixedArity = 0;
hyde_array_some.cljs$lang$applyTo = (function (arglist__11012){
var args = cljs.core.seq(arglist__11012);
return hyde_array_some__delegate(args);
});
hyde_array_some.cljs$core$IFn$_invoke$arity$variadic = hyde_array_some__delegate;
return hyde_array_some;
})()
;
/**
* @param {...*} var_args
*/
mrhyde.typepatcher.hyde_array_filter = (function() { 
var hyde_array_filter__delegate = function (args){var ct = this;var v = cljs.core.vec.call(null,args);var f = cljs.core.get.call(null,v,0,cljs.core.identity);var t = cljs.core.get.call(null,v,1,undefined);return cljs.core.vec.call(null,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (v,f,t,ct){
return (function (p1__11013_SHARP_){return f.call(t,p1__11013_SHARP_);
});})(v,f,t,ct))
,cljs.core.seq.call(null,ct))));
};
var hyde_array_filter = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_filter__delegate.call(this,args);};
hyde_array_filter.cljs$lang$maxFixedArity = 0;
hyde_array_filter.cljs$lang$applyTo = (function (arglist__11014){
var args = cljs.core.seq(arglist__11014);
return hyde_array_filter__delegate(args);
});
hyde_array_filter.cljs$core$IFn$_invoke$arity$variadic = hyde_array_filter__delegate;
return hyde_array_filter;
})()
;
/**
* @param {...*} var_args
*/
mrhyde.typepatcher.hyde_array_map = (function() { 
var hyde_array_map__delegate = function (args){var ct = this;var v = cljs.core.vec.call(null,args);var f = cljs.core.get.call(null,v,0,cljs.core.identity);var t = cljs.core.get.call(null,v,1,undefined);return cljs.core.doall.call(null,cljs.core.map.call(null,((function (v,f,t,ct){
return (function (p1__11015_SHARP_,p2__11016_SHARP_){return f.call(t,p1__11015_SHARP_,p2__11016_SHARP_,ct);
});})(v,f,t,ct))
,cljs.core.seq.call(null,ct),cljs.core.range.call(null)));
};
var hyde_array_map = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_map__delegate.call(this,args);};
hyde_array_map.cljs$lang$maxFixedArity = 0;
hyde_array_map.cljs$lang$applyTo = (function (arglist__11017){
var args = cljs.core.seq(arglist__11017);
return hyde_array_map__delegate(args);
});
hyde_array_map.cljs$core$IFn$_invoke$arity$variadic = hyde_array_map__delegate;
return hyde_array_map;
})()
;
/**
* @param {...*} var_args
*/
mrhyde.typepatcher.hyde_array_for_each = (function() { 
var hyde_array_for_each__delegate = function (args){var ct_11018 = this;mrhyde.typepatcher.hyde_array_map.call(ct_11018,cljs.core.first.call(null,args),cljs.core.second.call(null,args));
return null;
};
var hyde_array_for_each = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_for_each__delegate.call(this,args);};
hyde_array_for_each.cljs$lang$maxFixedArity = 0;
hyde_array_for_each.cljs$lang$applyTo = (function (arglist__11019){
var args = cljs.core.seq(arglist__11019);
return hyde_array_for_each__delegate(args);
});
hyde_array_for_each.cljs$core$IFn$_invoke$arity$variadic = hyde_array_for_each__delegate;
return hyde_array_for_each;
})()
;
/**
* @param {...*} var_args
*/
mrhyde.typepatcher.hyde_array_reduce = (function() { 
var hyde_array_reduce__delegate = function (args){return console.log("WARNING: someone has called unsupported hyde-array method reduce");
};
var hyde_array_reduce = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_reduce__delegate.call(this,args);};
hyde_array_reduce.cljs$lang$maxFixedArity = 0;
hyde_array_reduce.cljs$lang$applyTo = (function (arglist__11020){
var args = cljs.core.seq(arglist__11020);
return hyde_array_reduce__delegate(args);
});
hyde_array_reduce.cljs$core$IFn$_invoke$arity$variadic = hyde_array_reduce__delegate;
return hyde_array_reduce;
})()
;
/**
* @param {...*} var_args
*/
mrhyde.typepatcher.hyde_array_reduce_right = (function() { 
var hyde_array_reduce_right__delegate = function (args){return console.log("WARNING: someone has called unsupported hyde-array method reduce-Right");
};
var hyde_array_reduce_right = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_reduce_right__delegate.call(this,args);};
hyde_array_reduce_right.cljs$lang$maxFixedArity = 0;
hyde_array_reduce_right.cljs$lang$applyTo = (function (arglist__11021){
var args = cljs.core.seq(arglist__11021);
return hyde_array_reduce_right__delegate(args);
});
hyde_array_reduce_right.cljs$core$IFn$_invoke$arity$variadic = hyde_array_reduce_right__delegate;
return hyde_array_reduce_right;
})()
;
mrhyde.typepatcher.strkey = (function strkey(x){if((x instanceof cljs.core.Keyword))
{return cljs.core.name.call(null,x);
} else
{return x;
}
});
mrhyde.typepatcher.gen_map_getter = (function gen_map_getter(k){return (function (){var t = this;return cljs.core.get.call(null,(t[mrhyde.typepatcher.hyde_access_key]),k);
});
});
mrhyde.typepatcher.gen_map_setter = (function gen_map_setter(k){return (function (v){var t = this;if(cljs.core.not.call(null,goog.object.containsKey(t,mrhyde.typepatcher.hyde_cache_key)))
{var c_11022 = cljs.core.transient$.call(null,t);mrhyde.typepatcher.aset_hidden.call(null,t,mrhyde.typepatcher.hyde_access_key,c_11022);
mrhyde.typepatcher.aset_hidden.call(null,t,mrhyde.typepatcher.hyde_cache_key,c_11022);
} else
{}
var c = (t[mrhyde.typepatcher.hyde_cache_key]);return cljs.core.assoc_BANG_.call(null,c,k,v);
});
});
mrhyde.typepatcher.patch_map = (function patch_map(m){mrhyde.typepatcher.aset_hidden.call(null,m,mrhyde.typepatcher.hyde_access_key,m);
mrhyde.typepatcher.hide_js_props.call(null,m,Object.keys(m));
var seq__11027_11031 = cljs.core.seq.call(null,cljs.core.keys.call(null,m));var chunk__11028_11032 = null;var count__11029_11033 = 0;var i__11030_11034 = 0;while(true){
if((i__11030_11034 < count__11029_11033))
{var k_11035 = cljs.core._nth.call(null,chunk__11028_11032,i__11030_11034);if(((k_11035 instanceof cljs.core.Keyword)) && (cljs.core.not.call(null,goog.object.containsKey(m,cljs.core.name.call(null,k_11035)))))
{mrhyde.typepatcher.install_js_getset_prop.call(null,m,cljs.core.name.call(null,k_11035),mrhyde.typepatcher.gen_map_getter.call(null,k_11035),mrhyde.typepatcher.gen_map_setter.call(null,k_11035));
} else
{}
{
var G__11036 = seq__11027_11031;
var G__11037 = chunk__11028_11032;
var G__11038 = count__11029_11033;
var G__11039 = (i__11030_11034 + 1);
seq__11027_11031 = G__11036;
chunk__11028_11032 = G__11037;
count__11029_11033 = G__11038;
i__11030_11034 = G__11039;
continue;
}
} else
{var temp__4092__auto___11040 = cljs.core.seq.call(null,seq__11027_11031);if(temp__4092__auto___11040)
{var seq__11027_11041__$1 = temp__4092__auto___11040;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11027_11041__$1))
{var c__4297__auto___11042 = cljs.core.chunk_first.call(null,seq__11027_11041__$1);{
var G__11043 = cljs.core.chunk_rest.call(null,seq__11027_11041__$1);
var G__11044 = c__4297__auto___11042;
var G__11045 = cljs.core.count.call(null,c__4297__auto___11042);
var G__11046 = 0;
seq__11027_11031 = G__11043;
chunk__11028_11032 = G__11044;
count__11029_11033 = G__11045;
i__11030_11034 = G__11046;
continue;
}
} else
{var k_11047 = cljs.core.first.call(null,seq__11027_11041__$1);if(((k_11047 instanceof cljs.core.Keyword)) && (cljs.core.not.call(null,goog.object.containsKey(m,cljs.core.name.call(null,k_11047)))))
{mrhyde.typepatcher.install_js_getset_prop.call(null,m,cljs.core.name.call(null,k_11047),mrhyde.typepatcher.gen_map_getter.call(null,k_11047),mrhyde.typepatcher.gen_map_setter.call(null,k_11047));
} else
{}
{
var G__11048 = cljs.core.next.call(null,seq__11027_11041__$1);
var G__11049 = null;
var G__11050 = 0;
var G__11051 = 0;
seq__11027_11031 = G__11048;
chunk__11028_11032 = G__11049;
count__11029_11033 = G__11050;
i__11030_11034 = G__11051;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,m))))
{mrhyde.typepatcher.aset_hidden.call(null,m,mrhyde.typepatcher.hyde_keylist_key,false);
mrhyde.typepatcher.aset_hidden.call(null,m,mrhyde.typepatcher.hyde_keyset_key,false);
mrhyde.typepatcher.aset_hidden.call(null,m,mrhyde.typepatcher.hyde_keylist_key,Object.keys(m));
} else
{}
return m;
});
mrhyde.typepatcher.have_patched_js_with_key_lookup = cljs.core.atom.call(null,false);
mrhyde.typepatcher.patch_js_with_key_lookup = (function patch_js_with_key_lookup(){if(cljs.core.not.call(null,cljs.core.deref.call(null,mrhyde.typepatcher.have_patched_js_with_key_lookup)))
{cljs.core.reset_BANG_.call(null,mrhyde.typepatcher.have_patched_js_with_key_lookup,true);
(cljs.core.ILookup["object"] = true);
return (cljs.core._lookup["object"] = (function() {
var G__11052 = null;
var G__11052__2 = (function (o,k){return (o[mrhyde.typepatcher.strkey.call(null,k)]);
});
var G__11052__3 = (function (o,k,not_found){var s = mrhyde.typepatcher.strkey.call(null,k);if(cljs.core.truth_(goog.object.containsKey(o,s)))
{return (o[s]);
} else
{return not_found;
}
});
G__11052 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__11052__2.call(this,o,k);
case 3:
return G__11052__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__11052;
})()
);
} else
{return null;
}
});
mrhyde.typepatcher.MAXLEN = (function (){var or__3541__auto__ = (function (){var ct = this;return (ct["mrhyde_maxseqlen"]);
})();if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return 5000;
}
})();
mrhyde.typepatcher.patch_seq_object = (function patch_seq_object(o){return null;
});
mrhyde.typepatcher.patch_map_object = (function patch_map_object(o){mrhyde.typepatcher.patch_map.call(null,o);
return null;
});
mrhyde.typepatcher.patch_core_seq_type = (function patch_core_seq_type(s){var orig_fn = (cljs.core[s]);var orig_keys = Object.keys(orig_fn);var new_fn = ((function (orig_fn,orig_keys){
return (function() { 
var G__11061__delegate = function (args){var nargs = cljs.core.apply.call(null,cljs.core.array,cljs.core.cons.call(null,null,args));var binder = Function.prototype.bind.apply(orig_fn,nargs);var that = (new binder());mrhyde.typepatcher.patch_seq_object.call(null,that);
return that;
};
var G__11061 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11061__delegate.call(this,args);};
G__11061.cljs$lang$maxFixedArity = 0;
G__11061.cljs$lang$applyTo = (function (arglist__11062){
var args = cljs.core.seq(arglist__11062);
return G__11061__delegate(args);
});
G__11061.cljs$core$IFn$_invoke$arity$variadic = G__11061__delegate;
return G__11061;
})()
;})(orig_fn,orig_keys))
;var seq__11057_11063 = cljs.core.seq.call(null,orig_keys);var chunk__11058_11064 = null;var count__11059_11065 = 0;var i__11060_11066 = 0;while(true){
if((i__11060_11066 < count__11059_11065))
{var k_11067 = cljs.core._nth.call(null,chunk__11058_11064,i__11060_11066);(new_fn[k_11067] = (orig_fn[k_11067]));
{
var G__11068 = seq__11057_11063;
var G__11069 = chunk__11058_11064;
var G__11070 = count__11059_11065;
var G__11071 = (i__11060_11066 + 1);
seq__11057_11063 = G__11068;
chunk__11058_11064 = G__11069;
count__11059_11065 = G__11070;
i__11060_11066 = G__11071;
continue;
}
} else
{var temp__4092__auto___11072 = cljs.core.seq.call(null,seq__11057_11063);if(temp__4092__auto___11072)
{var seq__11057_11073__$1 = temp__4092__auto___11072;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11057_11073__$1))
{var c__4297__auto___11074 = cljs.core.chunk_first.call(null,seq__11057_11073__$1);{
var G__11075 = cljs.core.chunk_rest.call(null,seq__11057_11073__$1);
var G__11076 = c__4297__auto___11074;
var G__11077 = cljs.core.count.call(null,c__4297__auto___11074);
var G__11078 = 0;
seq__11057_11063 = G__11075;
chunk__11058_11064 = G__11076;
count__11059_11065 = G__11077;
i__11060_11066 = G__11078;
continue;
}
} else
{var k_11079 = cljs.core.first.call(null,seq__11057_11073__$1);(new_fn[k_11079] = (orig_fn[k_11079]));
{
var G__11080 = cljs.core.next.call(null,seq__11057_11073__$1);
var G__11081 = null;
var G__11082 = 0;
var G__11083 = 0;
seq__11057_11063 = G__11080;
chunk__11058_11064 = G__11081;
count__11059_11065 = G__11082;
i__11060_11066 = G__11083;
continue;
}
}
} else
{}
}
break;
}
return (cljs.core[s] = new_fn);
});
mrhyde.typepatcher.patch_core_map_type = (function patch_core_map_type(s){var orig_fn = (cljs.core[s]);var orig_keys = Object.keys(orig_fn);var new_fn = ((function (orig_fn,orig_keys){
return (function() { 
var G__11092__delegate = function (args){var nargs = cljs.core.apply.call(null,cljs.core.array,cljs.core.cons.call(null,null,args));var binder = Function.prototype.bind.apply(orig_fn,nargs);var that = (new binder());mrhyde.typepatcher.patch_map_object.call(null,that);
return that;
};
var G__11092 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11092__delegate.call(this,args);};
G__11092.cljs$lang$maxFixedArity = 0;
G__11092.cljs$lang$applyTo = (function (arglist__11093){
var args = cljs.core.seq(arglist__11093);
return G__11092__delegate(args);
});
G__11092.cljs$core$IFn$_invoke$arity$variadic = G__11092__delegate;
return G__11092;
})()
;})(orig_fn,orig_keys))
;var seq__11088_11094 = cljs.core.seq.call(null,orig_keys);var chunk__11089_11095 = null;var count__11090_11096 = 0;var i__11091_11097 = 0;while(true){
if((i__11091_11097 < count__11090_11096))
{var k_11098 = cljs.core._nth.call(null,chunk__11089_11095,i__11091_11097);(new_fn[k_11098] = (orig_fn[k_11098]));
{
var G__11099 = seq__11088_11094;
var G__11100 = chunk__11089_11095;
var G__11101 = count__11090_11096;
var G__11102 = (i__11091_11097 + 1);
seq__11088_11094 = G__11099;
chunk__11089_11095 = G__11100;
count__11090_11096 = G__11101;
i__11091_11097 = G__11102;
continue;
}
} else
{var temp__4092__auto___11103 = cljs.core.seq.call(null,seq__11088_11094);if(temp__4092__auto___11103)
{var seq__11088_11104__$1 = temp__4092__auto___11103;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11088_11104__$1))
{var c__4297__auto___11105 = cljs.core.chunk_first.call(null,seq__11088_11104__$1);{
var G__11106 = cljs.core.chunk_rest.call(null,seq__11088_11104__$1);
var G__11107 = c__4297__auto___11105;
var G__11108 = cljs.core.count.call(null,c__4297__auto___11105);
var G__11109 = 0;
seq__11088_11094 = G__11106;
chunk__11089_11095 = G__11107;
count__11090_11096 = G__11108;
i__11091_11097 = G__11109;
continue;
}
} else
{var k_11110 = cljs.core.first.call(null,seq__11088_11104__$1);(new_fn[k_11110] = (orig_fn[k_11110]));
{
var G__11111 = cljs.core.next.call(null,seq__11088_11104__$1);
var G__11112 = null;
var G__11113 = 0;
var G__11114 = 0;
seq__11088_11094 = G__11111;
chunk__11089_11095 = G__11112;
count__11090_11096 = G__11113;
i__11091_11097 = G__11114;
continue;
}
}
} else
{}
}
break;
}
return (cljs.core[s] = new_fn);
});
mrhyde.typepatcher.gen_seq_getter = (function gen_seq_getter(n){return (function (){var t = this;var src = (cljs.core.truth_(goog.object.containsKey(t,mrhyde.typepatcher.hyde_cache_key))?(t[mrhyde.typepatcher.hyde_cache_key]):t);return cljs.core.nth.call(null,src,n,undefined);
});
});
mrhyde.typepatcher.gen_seq_setter = (function gen_seq_setter(n){return (function (v){var t = this;mrhyde.typepatcher.hyde_array_ensure_cached.call(null,t);
var c = (t[mrhyde.typepatcher.hyde_cache_key]);return (c[n] = v);
});
});
mrhyde.typepatcher.patch_prototype_as_array = (function patch_prototype_as_array(p,o,is_vect){mrhyde.typepatcher.aset_hidden.call(null,p,mrhyde.guts.hyde_proto_array_marker,true);
mrhyde.typepatcher.install_js_hidden_get_prop.call(null,p,"length",(function (){var t = this;return cljs.core.count.call(null,cljs.core.take.call(null,mrhyde.typepatcher.MAXLEN,t));
}));
var n__4397__auto___11115 = mrhyde.typepatcher.MAXLEN;var n_11116 = 0;while(true){
if((n_11116 < n__4397__auto___11115))
{mrhyde.typepatcher.install_js_hidden_getset_prop.call(null,p,n_11116,mrhyde.typepatcher.gen_seq_getter.call(null,n_11116),mrhyde.typepatcher.gen_seq_setter.call(null,n_11116));
{
var G__11117 = (n_11116 + 1);
n_11116 = G__11117;
continue;
}
} else
{}
break;
}
mrhyde.typepatcher.aset_hidden.call(null,p,"__ArrayLike",true);
mrhyde.typepatcher.aset_hidden.call(null,p,"toCljString",p.toString);
mrhyde.typepatcher.aset_hidden.call(null,p,"pop",mrhyde.typepatcher.hyde_array_pop);
mrhyde.typepatcher.aset_hidden.call(null,p,"push",mrhyde.typepatcher.hyde_array_push);
mrhyde.typepatcher.aset_hidden.call(null,p,"reverse",mrhyde.typepatcher.hyde_array_reverse);
mrhyde.typepatcher.aset_hidden.call(null,p,"shift",mrhyde.typepatcher.hyde_array_shift);
mrhyde.typepatcher.aset_hidden.call(null,p,"sort",mrhyde.typepatcher.hyde_array_sort);
mrhyde.typepatcher.aset_hidden.call(null,p,"splice",mrhyde.typepatcher.hyde_array_splice);
mrhyde.typepatcher.aset_hidden.call(null,p,"unshift",mrhyde.typepatcher.hyde_array_unshift);
mrhyde.typepatcher.aset_hidden.call(null,p,"concat",mrhyde.typepatcher.hyde_array_concat);
mrhyde.typepatcher.aset_hidden.call(null,p,"join",mrhyde.typepatcher.hyde_array_pop);
mrhyde.typepatcher.aset_hidden.call(null,p,"slice",(cljs.core.truth_(is_vect)?mrhyde.typepatcher.hyde_array_vector_slice:mrhyde.typepatcher.hyde_array_slice));
mrhyde.typepatcher.aset_hidden.call(null,p,"toSource",mrhyde.typepatcher.hyde_array_to_source);
mrhyde.typepatcher.aset_hidden.call(null,p,"toString",mrhyde.typepatcher.hyde_array_to_string);
mrhyde.typepatcher.aset_hidden.call(null,p,"indexOf",mrhyde.typepatcher.hyde_array_index_of);
mrhyde.typepatcher.aset_hidden.call(null,p,"lastIndexOf",mrhyde.typepatcher.hyde_array_last_index_of);
mrhyde.typepatcher.aset_hidden.call(null,p,"forEach",mrhyde.typepatcher.hyde_array_for_each);
mrhyde.typepatcher.aset_hidden.call(null,p,"every",mrhyde.typepatcher.hyde_array_every);
mrhyde.typepatcher.aset_hidden.call(null,p,"some",mrhyde.typepatcher.hyde_array_some);
mrhyde.typepatcher.aset_hidden.call(null,p,"filter",mrhyde.typepatcher.hyde_array_filter);
mrhyde.typepatcher.aset_hidden.call(null,p,"map",mrhyde.typepatcher.hyde_array_map);
mrhyde.typepatcher.aset_hidden.call(null,p,"reduce",mrhyde.typepatcher.hyde_array_reduce);
return mrhyde.typepatcher.aset_hidden.call(null,p,"reduceRight",mrhyde.typepatcher.hyde_array_reduce_right);
});
mrhyde.typepatcher.patch_prototype_as_map = (function patch_prototype_as_map(p,o){return mrhyde.typepatcher.aset_hidden.call(null,p,mrhyde.guts.hyde_proto_object_marker,true);
});
mrhyde.typepatcher.add_hyde_protocol_to_seq = (function add_hyde_protocol_to_seq(s){s.prototype.mrhyde$mrhyde$IHyde$ = true;
s.prototype.mrhyde$mrhyde$IHyde$has_cache_QMARK_$arity$1 = (function (this$){var this$__$1 = this;return goog.object.containsKey(this$__$1,mrhyde.typepatcher.hyde_cache_key);
});
return s.prototype.mrhyde$mrhyde$IHyde$from_cache$arity$1 = (function (this$){var this$__$1 = this;var temp__4090__auto__ = (this$__$1[mrhyde.typepatcher.hyde_cache_key]);if(cljs.core.truth_(temp__4090__auto__))
{var c = temp__4090__auto__;return cljs.core.vec.call(null,c);
} else
{return this$__$1;
}
});
});
mrhyde.typepatcher.filtered_keylist_set = (function filtered_keylist_set(l){return cljs.core.set.call(null,cljs.core.remove.call(null,(function (p1__11118_SHARP_){return cljs.core.re_find.call(null,/cljs\$/,p1__11118_SHARP_);
}),l));
});
mrhyde.typepatcher.lazy_init_hyde_setset = (function lazy_init_hyde_setset(m){if(cljs.core.truth_((function (){var and__3529__auto__ = cljs.core.not.call(null,(m[mrhyde.typepatcher.hyde_keyset_key]));if(and__3529__auto__)
{return (m[mrhyde.typepatcher.hyde_keylist_key]);
} else
{return and__3529__auto__;
}
})()))
{return mrhyde.typepatcher.aset_hidden.call(null,m,mrhyde.typepatcher.hyde_keyset_key,mrhyde.typepatcher.filtered_keylist_set.call(null,(m[mrhyde.typepatcher.hyde_keylist_key])));
} else
{return null;
}
});
mrhyde.typepatcher.add_hyde_protocol_to_map = (function add_hyde_protocol_to_map(m){m.prototype.mrhyde$mrhyde$IHyde$ = true;
m.prototype.mrhyde$mrhyde$IHyde$has_cache_QMARK_$arity$1 = (function (this$){var this$__$1 = this;mrhyde.typepatcher.lazy_init_hyde_setset.call(null,this$__$1);
var or__3541__auto__ = goog.object.containsKey(this$__$1,mrhyde.typepatcher.hyde_cache_key);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.not_EQ_.call(null,(this$__$1[mrhyde.typepatcher.hyde_keyset_key]),mrhyde.typepatcher.filtered_keylist_set.call(null,Object.keys(this$__$1)));
}
});
m.prototype.mrhyde$mrhyde$IHyde$from_cache$arity$1 = (function (this$){var this$__$1 = this;mrhyde.typepatcher.lazy_init_hyde_setset.call(null,this$__$1);
var cur_keyset = clojure.set.difference.call(null,mrhyde.typepatcher.filtered_keylist_set.call(null,Object.keys(this$__$1)),cljs.core.PersistentHashSet.fromArray([mrhyde.typepatcher.hyde_cache_key], true));var new_keys = clojure.set.difference.call(null,cur_keyset,(this$__$1[mrhyde.typepatcher.hyde_keyset_key]));var new_map = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4266__auto__ = ((function (cur_keyset,new_keys,this$__$1){
return (function iter__11123(s__11124){return (new cljs.core.LazySeq(null,((function (cur_keyset,new_keys,this$__$1){
return (function (){var s__11124__$1 = s__11124;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11124__$1);if(temp__4092__auto__)
{var s__11124__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11124__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__11124__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__11126 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__11125 = 0;while(true){
if((i__11125 < size__4265__auto__))
{var k = cljs.core._nth.call(null,c__4264__auto__,i__11125);cljs.core.chunk_append.call(null,b__11126,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),(this$__$1[k])], null));
{
var G__11127 = (i__11125 + 1);
i__11125 = G__11127;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11126),iter__11123.call(null,cljs.core.chunk_rest.call(null,s__11124__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11126),null);
}
} else
{var k = cljs.core.first.call(null,s__11124__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),(this$__$1[k])], null),iter__11123.call(null,cljs.core.rest.call(null,s__11124__$2)));
}
} else
{return null;
}
break;
}
});})(cur_keyset,new_keys,this$__$1))
,null,null));
});})(cur_keyset,new_keys,this$__$1))
;return iter__4266__auto__.call(null,new_keys);
})());var cache = (this$__$1[mrhyde.typepatcher.hyde_cache_key]);if(cljs.core.truth_(cache))
{var p = cljs.core.persistent_BANG_.call(null,cache);mrhyde.typepatcher.aset_hidden.call(null,this$__$1,mrhyde.typepatcher.hyde_cache_key,cljs.core.transient$.call(null,p));
return cljs.core.merge.call(null,p,new_map);
} else
{return cljs.core.merge.call(null,this$__$1,new_map);
}
});
var p = (m["prototype"]);return mrhyde.typepatcher.hide_js_props.call(null,p,Object.keys(p));
});
mrhyde.typepatcher.from_cache_if_has_cache = (function from_cache_if_has_cache(x){if(cljs.core.truth_((function (){var and__3529__auto__ = mrhyde.mrhyde.hyde_QMARK_.call(null,x);if(and__3529__auto__)
{return mrhyde.mrhyde.has_cache_QMARK_.call(null,x);
} else
{return and__3529__auto__;
}
})()))
{return mrhyde.mrhyde.from_cache.call(null,x);
} else
{return x;
}
});
/**
* Recursively transforms any cached hyde objects to new persistent versions.
* @param {...*} var_args
*/
mrhyde.typepatcher.recurse_from_hyde_cache = (function() { 
var recurse_from_hyde_cache__delegate = function (xo,opts){var opts_map = cljs.core.apply.call(null,cljs.core.array_map,opts);var skippers = cljs.core.get.call(null,opts_map,new cljs.core.Keyword(null,"skip","skip",1017436401),cljs.core.PersistentVector.EMPTY);var skiplist = (((skippers instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [skippers], null):skippers);var skipset = cljs.core.set.call(null,skiplist);return ((function (opts_map,skippers,skiplist,skipset){
return (function internal_recurse(x){if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,internal_recurse,x));
} else
{if(cljs.core.map_QMARK_.call(null,x))
{var c = mrhyde.typepatcher.from_cache_if_has_cache.call(null,x);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4266__auto__ = ((function (c,opts_map,skippers,skiplist,skipset){
return (function iter__11152(s__11153){return (new cljs.core.LazySeq(null,((function (c,opts_map,skippers,skiplist,skipset){
return (function (){var s__11153__$1 = s__11153;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11153__$1);if(temp__4092__auto__)
{var s__11153__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11153__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__11153__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__11155 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__11154 = 0;while(true){
if((i__11154 < size__4265__auto__))
{var vec__11158 = cljs.core._nth.call(null,c__4264__auto__,i__11154);var k = cljs.core.nth.call(null,vec__11158,0,null);var v = cljs.core.nth.call(null,vec__11158,1,null);cljs.core.chunk_append.call(null,b__11155,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [internal_recurse.call(null,k),(cljs.core.truth_(skipset.call(null,k))?v:internal_recurse.call(null,v))], null));
{
var G__11160 = (i__11154 + 1);
i__11154 = G__11160;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11155),iter__11152.call(null,cljs.core.chunk_rest.call(null,s__11153__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11155),null);
}
} else
{var vec__11159 = cljs.core.first.call(null,s__11153__$2);var k = cljs.core.nth.call(null,vec__11159,0,null);var v = cljs.core.nth.call(null,vec__11159,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [internal_recurse.call(null,k),(cljs.core.truth_(skipset.call(null,k))?v:internal_recurse.call(null,v))], null),iter__11152.call(null,cljs.core.rest.call(null,s__11153__$2)));
}
} else
{return null;
}
break;
}
});})(c,opts_map,skippers,skiplist,skipset))
,null,null));
});})(c,opts_map,skippers,skiplist,skipset))
;return iter__4266__auto__.call(null,c);
})());
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{var c = mrhyde.typepatcher.from_cache_if_has_cache.call(null,x);return cljs.core.into.call(null,cljs.core.empty.call(null,c),cljs.core.map.call(null,internal_recurse,c));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return mrhyde.typepatcher.from_cache_if_has_cache.call(null,x);
} else
{return null;
}
}
}
}
});})(opts_map,skippers,skiplist,skipset))
.call(null,xo);
};
var recurse_from_hyde_cache = function (xo,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return recurse_from_hyde_cache__delegate.call(this,xo,opts);};
recurse_from_hyde_cache.cljs$lang$maxFixedArity = 1;
recurse_from_hyde_cache.cljs$lang$applyTo = (function (arglist__11161){
var xo = cljs.core.first(arglist__11161);
var opts = cljs.core.rest(arglist__11161);
return recurse_from_hyde_cache__delegate(xo,opts);
});
recurse_from_hyde_cache.cljs$core$IFn$_invoke$arity$variadic = recurse_from_hyde_cache__delegate;
return recurse_from_hyde_cache;
})()
;
/**
* @param {...*} var_args
*/
mrhyde.typepatcher.repersist = (function() { 
var repersist__delegate = function (x,opts){if(cljs.core.truth_(goog.isFunction(x)))
{return (function() { 
var G__11162__delegate = function (args){return cljs.core.apply.call(null,repersist,(function (){var t = this;return x.apply(t,cljs.core.apply.call(null,cljs.core.array,args));
})(),opts);
};
var G__11162 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11162__delegate.call(this,args);};
G__11162.cljs$lang$maxFixedArity = 0;
G__11162.cljs$lang$applyTo = (function (arglist__11163){
var args = cljs.core.seq(arglist__11163);
return G__11162__delegate(args);
});
G__11162.cljs$core$IFn$_invoke$arity$variadic = G__11162__delegate;
return G__11162;
})()
;
} else
{return cljs.core.apply.call(null,mrhyde.typepatcher.recurse_from_hyde_cache,x,opts);
}
};
var repersist = function (x,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return repersist__delegate.call(this,x,opts);};
repersist.cljs$lang$maxFixedArity = 1;
repersist.cljs$lang$applyTo = (function (arglist__11164){
var x = cljs.core.first(arglist__11164);
var opts = cljs.core.rest(arglist__11164);
return repersist__delegate(x,opts);
});
repersist.cljs$core$IFn$_invoke$arity$variadic = repersist__delegate;
return repersist;
})()
;
mrhyde.typepatcher.have_patched_arrayish_flag = cljs.core.atom.call(null,false);
mrhyde.typepatcher.have_patched_mappish_flag = cljs.core.atom.call(null,false);
mrhyde.typepatcher.patch_sequential_type = (function patch_sequential_type(t){if(mrhyde.mrhyde.hyde_array_QMARK_.call(null,(t["prototype"])))
{return null;
} else
{mrhyde.typepatcher.patch_prototype_as_array.call(null,(t["prototype"]),t,false);
return mrhyde.typepatcher.add_hyde_protocol_to_seq.call(null,t);
}
});
mrhyde.typepatcher.patch_vector_type = (function patch_vector_type(t){if(mrhyde.mrhyde.hyde_array_QMARK_.call(null,(t["prototype"])))
{return null;
} else
{mrhyde.typepatcher.patch_prototype_as_array.call(null,(t["prototype"]),t,true);
return mrhyde.typepatcher.add_hyde_protocol_to_seq.call(null,t);
}
});
mrhyde.typepatcher.patch_map_type = (function patch_map_type(p__11165){var vec__11167 = p__11165;var t = cljs.core.nth.call(null,vec__11167,0,null);var s = cljs.core.nth.call(null,vec__11167,1,null);if(mrhyde.mrhyde.hyde_object_QMARK_.call(null,(t["prototype"])))
{return mrhyde.typepatcher.dp.call(null,("already a hyde-object: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)));
} else
{mrhyde.typepatcher.patch_prototype_as_map.call(null,(t["prototype"]),t);
mrhyde.typepatcher.add_hyde_protocol_to_map.call(null,t);
return mrhyde.typepatcher.patch_core_map_type.call(null,s);
}
});
mrhyde.typepatcher.patch_known_sequential_types = (function patch_known_sequential_types(){var seq__11172 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.List,cljs.core.LazySeq,cljs.core.IndexedSeq,cljs.core.Cons,cljs.core.Range,cljs.core.ArrayNodeSeq,cljs.core.ChunkedSeq], null));var chunk__11173 = null;var count__11174 = 0;var i__11175 = 0;while(true){
if((i__11175 < count__11174))
{var t = cljs.core._nth.call(null,chunk__11173,i__11175);mrhyde.typepatcher.patch_sequential_type.call(null,t);
{
var G__11176 = seq__11172;
var G__11177 = chunk__11173;
var G__11178 = count__11174;
var G__11179 = (i__11175 + 1);
seq__11172 = G__11176;
chunk__11173 = G__11177;
count__11174 = G__11178;
i__11175 = G__11179;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11172);if(temp__4092__auto__)
{var seq__11172__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11172__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__11172__$1);{
var G__11180 = cljs.core.chunk_rest.call(null,seq__11172__$1);
var G__11181 = c__4297__auto__;
var G__11182 = cljs.core.count.call(null,c__4297__auto__);
var G__11183 = 0;
seq__11172 = G__11180;
chunk__11173 = G__11181;
count__11174 = G__11182;
i__11175 = G__11183;
continue;
}
} else
{var t = cljs.core.first.call(null,seq__11172__$1);mrhyde.typepatcher.patch_sequential_type.call(null,t);
{
var G__11184 = cljs.core.next.call(null,seq__11172__$1);
var G__11185 = null;
var G__11186 = 0;
var G__11187 = 0;
seq__11172 = G__11184;
chunk__11173 = G__11185;
count__11174 = G__11186;
i__11175 = G__11187;
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
mrhyde.typepatcher.patch_known_vector_types = (function patch_known_vector_types(){var seq__11192 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector,cljs.core.Subvec], null));var chunk__11193 = null;var count__11194 = 0;var i__11195 = 0;while(true){
if((i__11195 < count__11194))
{var t = cljs.core._nth.call(null,chunk__11193,i__11195);mrhyde.typepatcher.patch_vector_type.call(null,t);
{
var G__11196 = seq__11192;
var G__11197 = chunk__11193;
var G__11198 = count__11194;
var G__11199 = (i__11195 + 1);
seq__11192 = G__11196;
chunk__11193 = G__11197;
count__11194 = G__11198;
i__11195 = G__11199;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11192);if(temp__4092__auto__)
{var seq__11192__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11192__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__11192__$1);{
var G__11200 = cljs.core.chunk_rest.call(null,seq__11192__$1);
var G__11201 = c__4297__auto__;
var G__11202 = cljs.core.count.call(null,c__4297__auto__);
var G__11203 = 0;
seq__11192 = G__11200;
chunk__11193 = G__11201;
count__11194 = G__11202;
i__11195 = G__11203;
continue;
}
} else
{var t = cljs.core.first.call(null,seq__11192__$1);mrhyde.typepatcher.patch_vector_type.call(null,t);
{
var G__11204 = cljs.core.next.call(null,seq__11192__$1);
var G__11205 = null;
var G__11206 = 0;
var G__11207 = 0;
seq__11192 = G__11204;
chunk__11193 = G__11205;
count__11194 = G__11206;
i__11195 = G__11207;
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
mrhyde.typepatcher.patch_known_mappish_types = (function patch_known_mappish_types(){mrhyde.typepatcher.patch_sequential_type.call(null,cljs.core.LazySeq);
var seq__11212_11216 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ObjMap,"ObjMap"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap,"PersistentHashMap"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap,"PersistentArrayMap"], null)], null));var chunk__11213_11217 = null;var count__11214_11218 = 0;var i__11215_11219 = 0;while(true){
if((i__11215_11219 < count__11214_11218))
{var t_11220 = cljs.core._nth.call(null,chunk__11213_11217,i__11215_11219);if(cljs.core._EQ_.call(null,cljs.core.first.call(null,t_11220),(cljs.core[cljs.core.second.call(null,t_11220)])))
{mrhyde.typepatcher.patch_map_type.call(null,t_11220);
} else
{}
{
var G__11221 = seq__11212_11216;
var G__11222 = chunk__11213_11217;
var G__11223 = count__11214_11218;
var G__11224 = (i__11215_11219 + 1);
seq__11212_11216 = G__11221;
chunk__11213_11217 = G__11222;
count__11214_11218 = G__11223;
i__11215_11219 = G__11224;
continue;
}
} else
{var temp__4092__auto___11225 = cljs.core.seq.call(null,seq__11212_11216);if(temp__4092__auto___11225)
{var seq__11212_11226__$1 = temp__4092__auto___11225;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11212_11226__$1))
{var c__4297__auto___11227 = cljs.core.chunk_first.call(null,seq__11212_11226__$1);{
var G__11228 = cljs.core.chunk_rest.call(null,seq__11212_11226__$1);
var G__11229 = c__4297__auto___11227;
var G__11230 = cljs.core.count.call(null,c__4297__auto___11227);
var G__11231 = 0;
seq__11212_11216 = G__11228;
chunk__11213_11217 = G__11229;
count__11214_11218 = G__11230;
i__11215_11219 = G__11231;
continue;
}
} else
{var t_11232 = cljs.core.first.call(null,seq__11212_11226__$1);if(cljs.core._EQ_.call(null,cljs.core.first.call(null,t_11232),(cljs.core[cljs.core.second.call(null,t_11232)])))
{mrhyde.typepatcher.patch_map_type.call(null,t_11232);
} else
{}
{
var G__11233 = cljs.core.next.call(null,seq__11212_11226__$1);
var G__11234 = null;
var G__11235 = 0;
var G__11236 = 0;
seq__11212_11216 = G__11233;
chunk__11213_11217 = G__11234;
count__11214_11218 = G__11235;
i__11215_11219 = G__11236;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.ObjMap.EMPTY = mrhyde.typepatcher.patch_map.call(null,cljs.core.ObjMap.EMPTY);
});
mrhyde.typepatcher.get_partition_key = (function get_partition_key(){var t = this;return (t[mrhyde.typepatcher.hyde_parition_key]);
});
mrhyde.typepatcher.set_partition_key = (function set_partition_key(k){var t = this;mrhyde.typepatcher.aset_hidden.call(null,t,mrhyde.typepatcher.hyde_parition_key,k);
(window["side"] = "effect");
if(cljs.core._EQ_.call(null,16123663,k))
{console.log("matches");
} else
{}
console.log(k);
return console.log(t);
});
mrhyde.typepatcher.patch_obj_spy_on_partition = (function patch_obj_spy_on_partition(){console.log(mrhyde.typepatcher.set_partition_key);
return mrhyde.typepatcher.install_js_hidden_getset_prop.call(null,cljs.core.PersistentHashMap.prototype,mrhyde.typepatcher.cljs_partition_key,mrhyde.typepatcher.get_partition_key,mrhyde.typepatcher.set_partition_key);
});

//# sourceMappingURL=typepatcher.js.map