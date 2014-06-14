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
dp.cljs$lang$applyTo = (function (arglist__10921){
var args = cljs.core.seq(arglist__10921);
return dp__delegate(args);
});
dp.cljs$core$IFn$_invoke$arity$variadic = dp__delegate;
return dp;
})()
;
mrhyde.typepatcher.install_js_get_prop = (function (){var reusable_descriptor = (function (){var obj10923 = {};return obj10923;
})();(reusable_descriptor["configurable"] = true);
(reusable_descriptor["enumerable"] = true);
return ((function (reusable_descriptor){
return (function internal_js_getset_prop(obj,nam,getfn){(reusable_descriptor["get"] = getfn);
return Object.defineProperty(obj,nam,reusable_descriptor);
});
;})(reusable_descriptor))
}).call(null);
mrhyde.typepatcher.install_js_hidden_get_prop = (function (){var reusable_descriptor = (function (){var obj10925 = {};return obj10925;
})();(reusable_descriptor["configurable"] = true);
(reusable_descriptor["enumerable"] = false);
return ((function (reusable_descriptor){
return (function internal_js_getset_prop(obj,nam,getfn){(reusable_descriptor["get"] = getfn);
return Object.defineProperty(obj,nam,reusable_descriptor);
});
;})(reusable_descriptor))
}).call(null);
mrhyde.typepatcher.hide_js_props = (function (){var reusable_descriptor = (function (){var obj10927 = {};return obj10927;
})();(reusable_descriptor["enumerable"] = false);
return ((function (reusable_descriptor){
return (function internal_js_getset_prop(obj,s){var seq__10932 = cljs.core.seq.call(null,s);var chunk__10933 = null;var count__10934 = 0;var i__10935 = 0;while(true){
if((i__10935 < count__10934))
{var nam = cljs.core._nth.call(null,chunk__10933,i__10935);Object.defineProperty(obj,nam,reusable_descriptor);
{
var G__10936 = seq__10932;
var G__10937 = chunk__10933;
var G__10938 = count__10934;
var G__10939 = (i__10935 + 1);
seq__10932 = G__10936;
chunk__10933 = G__10937;
count__10934 = G__10938;
i__10935 = G__10939;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10932);if(temp__4092__auto__)
{var seq__10932__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10932__$1))
{var c__4313__auto__ = cljs.core.chunk_first.call(null,seq__10932__$1);{
var G__10940 = cljs.core.chunk_rest.call(null,seq__10932__$1);
var G__10941 = c__4313__auto__;
var G__10942 = cljs.core.count.call(null,c__4313__auto__);
var G__10943 = 0;
seq__10932 = G__10940;
chunk__10933 = G__10941;
count__10934 = G__10942;
i__10935 = G__10943;
continue;
}
} else
{var nam = cljs.core.first.call(null,seq__10932__$1);Object.defineProperty(obj,nam,reusable_descriptor);
{
var G__10944 = cljs.core.next.call(null,seq__10932__$1);
var G__10945 = null;
var G__10946 = 0;
var G__10947 = 0;
seq__10932 = G__10944;
chunk__10933 = G__10945;
count__10934 = G__10946;
i__10935 = G__10947;
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
mrhyde.typepatcher.install_js_getset_prop = (function (){var reusable_descriptor = (function (){var obj10949 = {};return obj10949;
})();(reusable_descriptor["configurable"] = true);
(reusable_descriptor["enumerable"] = true);
return ((function (reusable_descriptor){
return (function internal_js_getset_prop(obj,nam,getfn,setfn){(reusable_descriptor["get"] = getfn);
(reusable_descriptor["set"] = setfn);
return Object.defineProperty(obj,nam,reusable_descriptor);
});
;})(reusable_descriptor))
}).call(null);
mrhyde.typepatcher.install_js_hidden_getset_prop = (function (){var reusable_descriptor = (function (){var obj10951 = {};return obj10951;
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
hyde_array_pop.cljs$lang$applyTo = (function (arglist__10952){
var args = cljs.core.seq(arglist__10952);
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
hyde_array_push.cljs$lang$applyTo = (function (arglist__10953){
var args = cljs.core.seq(arglist__10953);
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
hyde_array_reverse.cljs$lang$applyTo = (function (arglist__10954){
var args = cljs.core.seq(arglist__10954);
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
hyde_array_shift.cljs$lang$applyTo = (function (arglist__10955){
var args = cljs.core.seq(arglist__10955);
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
hyde_array_sort.cljs$lang$applyTo = (function (arglist__10956){
var args = cljs.core.seq(arglist__10956);
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
hyde_array_splice.cljs$lang$applyTo = (function (arglist__10957){
var args = cljs.core.seq(arglist__10957);
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
hyde_array_unshift.cljs$lang$applyTo = (function (arglist__10958){
var args = cljs.core.seq(arglist__10958);
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
hyde_array_concat.cljs$lang$applyTo = (function (arglist__10959){
var args = cljs.core.seq(arglist__10959);
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
hyde_array_join.cljs$lang$applyTo = (function (arglist__10960){
var args = cljs.core.seq(arglist__10960);
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
hyde_array_concat.cljs$lang$applyTo = (function (arglist__10961){
var args = cljs.core.seq(arglist__10961);
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
hyde_array_concat.cljs$lang$applyTo = (function (arglist__10962){
var args = cljs.core.seq(arglist__10962);
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
hyde_array_concat.cljs$lang$applyTo = (function (arglist__10963){
var args = cljs.core.seq(arglist__10963);
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
hyde_array_concat.cljs$lang$applyTo = (function (arglist__10964){
var args = cljs.core.seq(arglist__10964);
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
hyde_array_slice.cljs$lang$applyTo = (function (arglist__10965){
var args = cljs.core.seq(arglist__10965);
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
hyde_array_vector_slice.cljs$lang$applyTo = (function (arglist__10966){
var args = cljs.core.seq(arglist__10966);
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
hyde_array_to_source.cljs$lang$applyTo = (function (arglist__10967){
var args = cljs.core.seq(arglist__10967);
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
hyde_array_to_string.cljs$lang$applyTo = (function (arglist__10968){
var args = cljs.core.seq(arglist__10968);
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
hyde_array_index_of.cljs$lang$applyTo = (function (arglist__10969){
var args = cljs.core.seq(arglist__10969);
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
hyde_array_last_index_of.cljs$lang$applyTo = (function (arglist__10970){
var args = cljs.core.seq(arglist__10970);
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
hyde_array_every.cljs$lang$applyTo = (function (arglist__10971){
var args = cljs.core.seq(arglist__10971);
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
hyde_array_some.cljs$lang$applyTo = (function (arglist__10972){
var args = cljs.core.seq(arglist__10972);
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
return (function (p1__10973_SHARP_){return f.call(t,p1__10973_SHARP_);
});})(v,f,t,ct))
,cljs.core.seq.call(null,ct))));
};
var hyde_array_filter = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_filter__delegate.call(this,args);};
hyde_array_filter.cljs$lang$maxFixedArity = 0;
hyde_array_filter.cljs$lang$applyTo = (function (arglist__10974){
var args = cljs.core.seq(arglist__10974);
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
return (function (p1__10975_SHARP_,p2__10976_SHARP_){return f.call(t,p1__10975_SHARP_,p2__10976_SHARP_,ct);
});})(v,f,t,ct))
,cljs.core.seq.call(null,ct),cljs.core.range.call(null)));
};
var hyde_array_map = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_map__delegate.call(this,args);};
hyde_array_map.cljs$lang$maxFixedArity = 0;
hyde_array_map.cljs$lang$applyTo = (function (arglist__10977){
var args = cljs.core.seq(arglist__10977);
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
var hyde_array_for_each__delegate = function (args){var ct_10978 = this;mrhyde.typepatcher.hyde_array_map.call(ct_10978,cljs.core.first.call(null,args),cljs.core.second.call(null,args));
return null;
};
var hyde_array_for_each = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hyde_array_for_each__delegate.call(this,args);};
hyde_array_for_each.cljs$lang$maxFixedArity = 0;
hyde_array_for_each.cljs$lang$applyTo = (function (arglist__10979){
var args = cljs.core.seq(arglist__10979);
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
hyde_array_reduce.cljs$lang$applyTo = (function (arglist__10980){
var args = cljs.core.seq(arglist__10980);
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
hyde_array_reduce_right.cljs$lang$applyTo = (function (arglist__10981){
var args = cljs.core.seq(arglist__10981);
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
{var c_10982 = cljs.core.transient$.call(null,t);mrhyde.typepatcher.aset_hidden.call(null,t,mrhyde.typepatcher.hyde_access_key,c_10982);
mrhyde.typepatcher.aset_hidden.call(null,t,mrhyde.typepatcher.hyde_cache_key,c_10982);
} else
{}
var c = (t[mrhyde.typepatcher.hyde_cache_key]);return cljs.core.assoc_BANG_.call(null,c,k,v);
});
});
mrhyde.typepatcher.patch_map = (function patch_map(m){mrhyde.typepatcher.aset_hidden.call(null,m,mrhyde.typepatcher.hyde_access_key,m);
mrhyde.typepatcher.hide_js_props.call(null,m,Object.keys(m));
var seq__10987_10991 = cljs.core.seq.call(null,cljs.core.keys.call(null,m));var chunk__10988_10992 = null;var count__10989_10993 = 0;var i__10990_10994 = 0;while(true){
if((i__10990_10994 < count__10989_10993))
{var k_10995 = cljs.core._nth.call(null,chunk__10988_10992,i__10990_10994);if(((k_10995 instanceof cljs.core.Keyword)) && (cljs.core.not.call(null,goog.object.containsKey(m,cljs.core.name.call(null,k_10995)))))
{mrhyde.typepatcher.install_js_getset_prop.call(null,m,cljs.core.name.call(null,k_10995),mrhyde.typepatcher.gen_map_getter.call(null,k_10995),mrhyde.typepatcher.gen_map_setter.call(null,k_10995));
} else
{}
{
var G__10996 = seq__10987_10991;
var G__10997 = chunk__10988_10992;
var G__10998 = count__10989_10993;
var G__10999 = (i__10990_10994 + 1);
seq__10987_10991 = G__10996;
chunk__10988_10992 = G__10997;
count__10989_10993 = G__10998;
i__10990_10994 = G__10999;
continue;
}
} else
{var temp__4092__auto___11000 = cljs.core.seq.call(null,seq__10987_10991);if(temp__4092__auto___11000)
{var seq__10987_11001__$1 = temp__4092__auto___11000;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10987_11001__$1))
{var c__4313__auto___11002 = cljs.core.chunk_first.call(null,seq__10987_11001__$1);{
var G__11003 = cljs.core.chunk_rest.call(null,seq__10987_11001__$1);
var G__11004 = c__4313__auto___11002;
var G__11005 = cljs.core.count.call(null,c__4313__auto___11002);
var G__11006 = 0;
seq__10987_10991 = G__11003;
chunk__10988_10992 = G__11004;
count__10989_10993 = G__11005;
i__10990_10994 = G__11006;
continue;
}
} else
{var k_11007 = cljs.core.first.call(null,seq__10987_11001__$1);if(((k_11007 instanceof cljs.core.Keyword)) && (cljs.core.not.call(null,goog.object.containsKey(m,cljs.core.name.call(null,k_11007)))))
{mrhyde.typepatcher.install_js_getset_prop.call(null,m,cljs.core.name.call(null,k_11007),mrhyde.typepatcher.gen_map_getter.call(null,k_11007),mrhyde.typepatcher.gen_map_setter.call(null,k_11007));
} else
{}
{
var G__11008 = cljs.core.next.call(null,seq__10987_11001__$1);
var G__11009 = null;
var G__11010 = 0;
var G__11011 = 0;
seq__10987_10991 = G__11008;
chunk__10988_10992 = G__11009;
count__10989_10993 = G__11010;
i__10990_10994 = G__11011;
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
var G__11012 = null;
var G__11012__2 = (function (o,k){return (o[mrhyde.typepatcher.strkey.call(null,k)]);
});
var G__11012__3 = (function (o,k,not_found){var s = mrhyde.typepatcher.strkey.call(null,k);if(cljs.core.truth_(goog.object.containsKey(o,s)))
{return (o[s]);
} else
{return not_found;
}
});
G__11012 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__11012__2.call(this,o,k);
case 3:
return G__11012__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__11012;
})()
);
} else
{return null;
}
});
mrhyde.typepatcher.MAXLEN = (function (){var or__3557__auto__ = (function (){var ct = this;return (ct["mrhyde_maxseqlen"]);
})();if(cljs.core.truth_(or__3557__auto__))
{return or__3557__auto__;
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
var G__11021__delegate = function (args){var nargs = cljs.core.apply.call(null,cljs.core.array,cljs.core.cons.call(null,null,args));var binder = Function.prototype.bind.apply(orig_fn,nargs);var that = (new binder());mrhyde.typepatcher.patch_seq_object.call(null,that);
return that;
};
var G__11021 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11021__delegate.call(this,args);};
G__11021.cljs$lang$maxFixedArity = 0;
G__11021.cljs$lang$applyTo = (function (arglist__11022){
var args = cljs.core.seq(arglist__11022);
return G__11021__delegate(args);
});
G__11021.cljs$core$IFn$_invoke$arity$variadic = G__11021__delegate;
return G__11021;
})()
;})(orig_fn,orig_keys))
;var seq__11017_11023 = cljs.core.seq.call(null,orig_keys);var chunk__11018_11024 = null;var count__11019_11025 = 0;var i__11020_11026 = 0;while(true){
if((i__11020_11026 < count__11019_11025))
{var k_11027 = cljs.core._nth.call(null,chunk__11018_11024,i__11020_11026);(new_fn[k_11027] = (orig_fn[k_11027]));
{
var G__11028 = seq__11017_11023;
var G__11029 = chunk__11018_11024;
var G__11030 = count__11019_11025;
var G__11031 = (i__11020_11026 + 1);
seq__11017_11023 = G__11028;
chunk__11018_11024 = G__11029;
count__11019_11025 = G__11030;
i__11020_11026 = G__11031;
continue;
}
} else
{var temp__4092__auto___11032 = cljs.core.seq.call(null,seq__11017_11023);if(temp__4092__auto___11032)
{var seq__11017_11033__$1 = temp__4092__auto___11032;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11017_11033__$1))
{var c__4313__auto___11034 = cljs.core.chunk_first.call(null,seq__11017_11033__$1);{
var G__11035 = cljs.core.chunk_rest.call(null,seq__11017_11033__$1);
var G__11036 = c__4313__auto___11034;
var G__11037 = cljs.core.count.call(null,c__4313__auto___11034);
var G__11038 = 0;
seq__11017_11023 = G__11035;
chunk__11018_11024 = G__11036;
count__11019_11025 = G__11037;
i__11020_11026 = G__11038;
continue;
}
} else
{var k_11039 = cljs.core.first.call(null,seq__11017_11033__$1);(new_fn[k_11039] = (orig_fn[k_11039]));
{
var G__11040 = cljs.core.next.call(null,seq__11017_11033__$1);
var G__11041 = null;
var G__11042 = 0;
var G__11043 = 0;
seq__11017_11023 = G__11040;
chunk__11018_11024 = G__11041;
count__11019_11025 = G__11042;
i__11020_11026 = G__11043;
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
var G__11052__delegate = function (args){var nargs = cljs.core.apply.call(null,cljs.core.array,cljs.core.cons.call(null,null,args));var binder = Function.prototype.bind.apply(orig_fn,nargs);var that = (new binder());mrhyde.typepatcher.patch_map_object.call(null,that);
return that;
};
var G__11052 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11052__delegate.call(this,args);};
G__11052.cljs$lang$maxFixedArity = 0;
G__11052.cljs$lang$applyTo = (function (arglist__11053){
var args = cljs.core.seq(arglist__11053);
return G__11052__delegate(args);
});
G__11052.cljs$core$IFn$_invoke$arity$variadic = G__11052__delegate;
return G__11052;
})()
;})(orig_fn,orig_keys))
;var seq__11048_11054 = cljs.core.seq.call(null,orig_keys);var chunk__11049_11055 = null;var count__11050_11056 = 0;var i__11051_11057 = 0;while(true){
if((i__11051_11057 < count__11050_11056))
{var k_11058 = cljs.core._nth.call(null,chunk__11049_11055,i__11051_11057);(new_fn[k_11058] = (orig_fn[k_11058]));
{
var G__11059 = seq__11048_11054;
var G__11060 = chunk__11049_11055;
var G__11061 = count__11050_11056;
var G__11062 = (i__11051_11057 + 1);
seq__11048_11054 = G__11059;
chunk__11049_11055 = G__11060;
count__11050_11056 = G__11061;
i__11051_11057 = G__11062;
continue;
}
} else
{var temp__4092__auto___11063 = cljs.core.seq.call(null,seq__11048_11054);if(temp__4092__auto___11063)
{var seq__11048_11064__$1 = temp__4092__auto___11063;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11048_11064__$1))
{var c__4313__auto___11065 = cljs.core.chunk_first.call(null,seq__11048_11064__$1);{
var G__11066 = cljs.core.chunk_rest.call(null,seq__11048_11064__$1);
var G__11067 = c__4313__auto___11065;
var G__11068 = cljs.core.count.call(null,c__4313__auto___11065);
var G__11069 = 0;
seq__11048_11054 = G__11066;
chunk__11049_11055 = G__11067;
count__11050_11056 = G__11068;
i__11051_11057 = G__11069;
continue;
}
} else
{var k_11070 = cljs.core.first.call(null,seq__11048_11064__$1);(new_fn[k_11070] = (orig_fn[k_11070]));
{
var G__11071 = cljs.core.next.call(null,seq__11048_11064__$1);
var G__11072 = null;
var G__11073 = 0;
var G__11074 = 0;
seq__11048_11054 = G__11071;
chunk__11049_11055 = G__11072;
count__11050_11056 = G__11073;
i__11051_11057 = G__11074;
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
var n__4413__auto___11075 = mrhyde.typepatcher.MAXLEN;var n_11076 = 0;while(true){
if((n_11076 < n__4413__auto___11075))
{mrhyde.typepatcher.install_js_hidden_getset_prop.call(null,p,n_11076,mrhyde.typepatcher.gen_seq_getter.call(null,n_11076),mrhyde.typepatcher.gen_seq_setter.call(null,n_11076));
{
var G__11077 = (n_11076 + 1);
n_11076 = G__11077;
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
mrhyde.typepatcher.filtered_keylist_set = (function filtered_keylist_set(l){return cljs.core.set.call(null,cljs.core.remove.call(null,(function (p1__11078_SHARP_){return cljs.core.re_find.call(null,/cljs\$/,p1__11078_SHARP_);
}),l));
});
mrhyde.typepatcher.lazy_init_hyde_setset = (function lazy_init_hyde_setset(m){if(cljs.core.truth_((function (){var and__3545__auto__ = cljs.core.not.call(null,(m[mrhyde.typepatcher.hyde_keyset_key]));if(and__3545__auto__)
{return (m[mrhyde.typepatcher.hyde_keylist_key]);
} else
{return and__3545__auto__;
}
})()))
{return mrhyde.typepatcher.aset_hidden.call(null,m,mrhyde.typepatcher.hyde_keyset_key,mrhyde.typepatcher.filtered_keylist_set.call(null,(m[mrhyde.typepatcher.hyde_keylist_key])));
} else
{return null;
}
});
mrhyde.typepatcher.add_hyde_protocol_to_map = (function add_hyde_protocol_to_map(m){m.prototype.mrhyde$mrhyde$IHyde$ = true;
m.prototype.mrhyde$mrhyde$IHyde$has_cache_QMARK_$arity$1 = (function (this$){var this$__$1 = this;mrhyde.typepatcher.lazy_init_hyde_setset.call(null,this$__$1);
var or__3557__auto__ = goog.object.containsKey(this$__$1,mrhyde.typepatcher.hyde_cache_key);if(cljs.core.truth_(or__3557__auto__))
{return or__3557__auto__;
} else
{return cljs.core.not_EQ_.call(null,(this$__$1[mrhyde.typepatcher.hyde_keyset_key]),mrhyde.typepatcher.filtered_keylist_set.call(null,Object.keys(this$__$1)));
}
});
m.prototype.mrhyde$mrhyde$IHyde$from_cache$arity$1 = (function (this$){var this$__$1 = this;mrhyde.typepatcher.lazy_init_hyde_setset.call(null,this$__$1);
var cur_keyset = clojure.set.difference.call(null,mrhyde.typepatcher.filtered_keylist_set.call(null,Object.keys(this$__$1)),cljs.core.PersistentHashSet.fromArray([mrhyde.typepatcher.hyde_cache_key], true));var new_keys = clojure.set.difference.call(null,cur_keyset,(this$__$1[mrhyde.typepatcher.hyde_keyset_key]));var new_map = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4282__auto__ = ((function (cur_keyset,new_keys,this$__$1){
return (function iter__11083(s__11084){return (new cljs.core.LazySeq(null,((function (cur_keyset,new_keys,this$__$1){
return (function (){var s__11084__$1 = s__11084;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11084__$1);if(temp__4092__auto__)
{var s__11084__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11084__$2))
{var c__4280__auto__ = cljs.core.chunk_first.call(null,s__11084__$2);var size__4281__auto__ = cljs.core.count.call(null,c__4280__auto__);var b__11086 = cljs.core.chunk_buffer.call(null,size__4281__auto__);if((function (){var i__11085 = 0;while(true){
if((i__11085 < size__4281__auto__))
{var k = cljs.core._nth.call(null,c__4280__auto__,i__11085);cljs.core.chunk_append.call(null,b__11086,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),(this$__$1[k])], null));
{
var G__11087 = (i__11085 + 1);
i__11085 = G__11087;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11086),iter__11083.call(null,cljs.core.chunk_rest.call(null,s__11084__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11086),null);
}
} else
{var k = cljs.core.first.call(null,s__11084__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),(this$__$1[k])], null),iter__11083.call(null,cljs.core.rest.call(null,s__11084__$2)));
}
} else
{return null;
}
break;
}
});})(cur_keyset,new_keys,this$__$1))
,null,null));
});})(cur_keyset,new_keys,this$__$1))
;return iter__4282__auto__.call(null,new_keys);
})());var cache = (this$__$1[mrhyde.typepatcher.hyde_cache_key]);if(cljs.core.truth_(cache))
{var p = cljs.core.persistent_BANG_.call(null,cache);mrhyde.typepatcher.aset_hidden.call(null,this$__$1,mrhyde.typepatcher.hyde_cache_key,cljs.core.transient$.call(null,p));
return cljs.core.merge.call(null,p,new_map);
} else
{return cljs.core.merge.call(null,this$__$1,new_map);
}
});
var p = (m["prototype"]);return mrhyde.typepatcher.hide_js_props.call(null,p,Object.keys(p));
});
mrhyde.typepatcher.from_cache_if_has_cache = (function from_cache_if_has_cache(x){if(cljs.core.truth_((function (){var and__3545__auto__ = mrhyde.mrhyde.hyde_QMARK_.call(null,x);if(and__3545__auto__)
{return mrhyde.mrhyde.has_cache_QMARK_.call(null,x);
} else
{return and__3545__auto__;
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
{var c = mrhyde.typepatcher.from_cache_if_has_cache.call(null,x);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4282__auto__ = ((function (c,opts_map,skippers,skiplist,skipset){
return (function iter__11112(s__11113){return (new cljs.core.LazySeq(null,((function (c,opts_map,skippers,skiplist,skipset){
return (function (){var s__11113__$1 = s__11113;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11113__$1);if(temp__4092__auto__)
{var s__11113__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11113__$2))
{var c__4280__auto__ = cljs.core.chunk_first.call(null,s__11113__$2);var size__4281__auto__ = cljs.core.count.call(null,c__4280__auto__);var b__11115 = cljs.core.chunk_buffer.call(null,size__4281__auto__);if((function (){var i__11114 = 0;while(true){
if((i__11114 < size__4281__auto__))
{var vec__11118 = cljs.core._nth.call(null,c__4280__auto__,i__11114);var k = cljs.core.nth.call(null,vec__11118,0,null);var v = cljs.core.nth.call(null,vec__11118,1,null);cljs.core.chunk_append.call(null,b__11115,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [internal_recurse.call(null,k),(cljs.core.truth_(skipset.call(null,k))?v:internal_recurse.call(null,v))], null));
{
var G__11120 = (i__11114 + 1);
i__11114 = G__11120;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11115),iter__11112.call(null,cljs.core.chunk_rest.call(null,s__11113__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11115),null);
}
} else
{var vec__11119 = cljs.core.first.call(null,s__11113__$2);var k = cljs.core.nth.call(null,vec__11119,0,null);var v = cljs.core.nth.call(null,vec__11119,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [internal_recurse.call(null,k),(cljs.core.truth_(skipset.call(null,k))?v:internal_recurse.call(null,v))], null),iter__11112.call(null,cljs.core.rest.call(null,s__11113__$2)));
}
} else
{return null;
}
break;
}
});})(c,opts_map,skippers,skiplist,skipset))
,null,null));
});})(c,opts_map,skippers,skiplist,skipset))
;return iter__4282__auto__.call(null,c);
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
recurse_from_hyde_cache.cljs$lang$applyTo = (function (arglist__11121){
var xo = cljs.core.first(arglist__11121);
var opts = cljs.core.rest(arglist__11121);
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
var G__11122__delegate = function (args){return cljs.core.apply.call(null,repersist,(function (){var t = this;return x.apply(t,cljs.core.apply.call(null,cljs.core.array,args));
})(),opts);
};
var G__11122 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11122__delegate.call(this,args);};
G__11122.cljs$lang$maxFixedArity = 0;
G__11122.cljs$lang$applyTo = (function (arglist__11123){
var args = cljs.core.seq(arglist__11123);
return G__11122__delegate(args);
});
G__11122.cljs$core$IFn$_invoke$arity$variadic = G__11122__delegate;
return G__11122;
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
repersist.cljs$lang$applyTo = (function (arglist__11124){
var x = cljs.core.first(arglist__11124);
var opts = cljs.core.rest(arglist__11124);
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
mrhyde.typepatcher.patch_map_type = (function patch_map_type(p__11125){var vec__11127 = p__11125;var t = cljs.core.nth.call(null,vec__11127,0,null);var s = cljs.core.nth.call(null,vec__11127,1,null);if(mrhyde.mrhyde.hyde_object_QMARK_.call(null,(t["prototype"])))
{return mrhyde.typepatcher.dp.call(null,("already a hyde-object: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)));
} else
{mrhyde.typepatcher.patch_prototype_as_map.call(null,(t["prototype"]),t);
mrhyde.typepatcher.add_hyde_protocol_to_map.call(null,t);
return mrhyde.typepatcher.patch_core_map_type.call(null,s);
}
});
mrhyde.typepatcher.patch_known_sequential_types = (function patch_known_sequential_types(){var seq__11132 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.List,cljs.core.LazySeq,cljs.core.IndexedSeq,cljs.core.Cons,cljs.core.Range,cljs.core.ArrayNodeSeq,cljs.core.ChunkedSeq], null));var chunk__11133 = null;var count__11134 = 0;var i__11135 = 0;while(true){
if((i__11135 < count__11134))
{var t = cljs.core._nth.call(null,chunk__11133,i__11135);mrhyde.typepatcher.patch_sequential_type.call(null,t);
{
var G__11136 = seq__11132;
var G__11137 = chunk__11133;
var G__11138 = count__11134;
var G__11139 = (i__11135 + 1);
seq__11132 = G__11136;
chunk__11133 = G__11137;
count__11134 = G__11138;
i__11135 = G__11139;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11132);if(temp__4092__auto__)
{var seq__11132__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11132__$1))
{var c__4313__auto__ = cljs.core.chunk_first.call(null,seq__11132__$1);{
var G__11140 = cljs.core.chunk_rest.call(null,seq__11132__$1);
var G__11141 = c__4313__auto__;
var G__11142 = cljs.core.count.call(null,c__4313__auto__);
var G__11143 = 0;
seq__11132 = G__11140;
chunk__11133 = G__11141;
count__11134 = G__11142;
i__11135 = G__11143;
continue;
}
} else
{var t = cljs.core.first.call(null,seq__11132__$1);mrhyde.typepatcher.patch_sequential_type.call(null,t);
{
var G__11144 = cljs.core.next.call(null,seq__11132__$1);
var G__11145 = null;
var G__11146 = 0;
var G__11147 = 0;
seq__11132 = G__11144;
chunk__11133 = G__11145;
count__11134 = G__11146;
i__11135 = G__11147;
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
mrhyde.typepatcher.patch_known_vector_types = (function patch_known_vector_types(){var seq__11152 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector,cljs.core.Subvec], null));var chunk__11153 = null;var count__11154 = 0;var i__11155 = 0;while(true){
if((i__11155 < count__11154))
{var t = cljs.core._nth.call(null,chunk__11153,i__11155);mrhyde.typepatcher.patch_vector_type.call(null,t);
{
var G__11156 = seq__11152;
var G__11157 = chunk__11153;
var G__11158 = count__11154;
var G__11159 = (i__11155 + 1);
seq__11152 = G__11156;
chunk__11153 = G__11157;
count__11154 = G__11158;
i__11155 = G__11159;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11152);if(temp__4092__auto__)
{var seq__11152__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11152__$1))
{var c__4313__auto__ = cljs.core.chunk_first.call(null,seq__11152__$1);{
var G__11160 = cljs.core.chunk_rest.call(null,seq__11152__$1);
var G__11161 = c__4313__auto__;
var G__11162 = cljs.core.count.call(null,c__4313__auto__);
var G__11163 = 0;
seq__11152 = G__11160;
chunk__11153 = G__11161;
count__11154 = G__11162;
i__11155 = G__11163;
continue;
}
} else
{var t = cljs.core.first.call(null,seq__11152__$1);mrhyde.typepatcher.patch_vector_type.call(null,t);
{
var G__11164 = cljs.core.next.call(null,seq__11152__$1);
var G__11165 = null;
var G__11166 = 0;
var G__11167 = 0;
seq__11152 = G__11164;
chunk__11153 = G__11165;
count__11154 = G__11166;
i__11155 = G__11167;
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
var seq__11172_11176 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ObjMap,"ObjMap"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap,"PersistentHashMap"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap,"PersistentArrayMap"], null)], null));var chunk__11173_11177 = null;var count__11174_11178 = 0;var i__11175_11179 = 0;while(true){
if((i__11175_11179 < count__11174_11178))
{var t_11180 = cljs.core._nth.call(null,chunk__11173_11177,i__11175_11179);if(cljs.core._EQ_.call(null,cljs.core.first.call(null,t_11180),(cljs.core[cljs.core.second.call(null,t_11180)])))
{mrhyde.typepatcher.patch_map_type.call(null,t_11180);
} else
{}
{
var G__11181 = seq__11172_11176;
var G__11182 = chunk__11173_11177;
var G__11183 = count__11174_11178;
var G__11184 = (i__11175_11179 + 1);
seq__11172_11176 = G__11181;
chunk__11173_11177 = G__11182;
count__11174_11178 = G__11183;
i__11175_11179 = G__11184;
continue;
}
} else
{var temp__4092__auto___11185 = cljs.core.seq.call(null,seq__11172_11176);if(temp__4092__auto___11185)
{var seq__11172_11186__$1 = temp__4092__auto___11185;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11172_11186__$1))
{var c__4313__auto___11187 = cljs.core.chunk_first.call(null,seq__11172_11186__$1);{
var G__11188 = cljs.core.chunk_rest.call(null,seq__11172_11186__$1);
var G__11189 = c__4313__auto___11187;
var G__11190 = cljs.core.count.call(null,c__4313__auto___11187);
var G__11191 = 0;
seq__11172_11176 = G__11188;
chunk__11173_11177 = G__11189;
count__11174_11178 = G__11190;
i__11175_11179 = G__11191;
continue;
}
} else
{var t_11192 = cljs.core.first.call(null,seq__11172_11186__$1);if(cljs.core._EQ_.call(null,cljs.core.first.call(null,t_11192),(cljs.core[cljs.core.second.call(null,t_11192)])))
{mrhyde.typepatcher.patch_map_type.call(null,t_11192);
} else
{}
{
var G__11193 = cljs.core.next.call(null,seq__11172_11186__$1);
var G__11194 = null;
var G__11195 = 0;
var G__11196 = 0;
seq__11172_11176 = G__11193;
chunk__11173_11177 = G__11194;
count__11174_11178 = G__11195;
i__11175_11179 = G__11196;
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