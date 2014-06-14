// Compiled by ClojureScript 0.0-2227
goog.provide('mrhyde.core');
goog.require('cljs.core');
goog.require('mrhyde.typepatcher');
goog.require('mrhyde.typepatcher');
/**
* @param {...*} var_args
*/
mrhyde.core.bootstrap = (function() { 
var bootstrap__delegate = function (opts){mrhyde.typepatcher.patch_known_vector_types.call(null);
return mrhyde.typepatcher.patch_known_mappish_types.call(null);
};
var bootstrap = function (var_args){
var opts = null;if (arguments.length > 0) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bootstrap__delegate.call(this,opts);};
bootstrap.cljs$lang$maxFixedArity = 0;
bootstrap.cljs$lang$applyTo = (function (arglist__10960){
var opts = cljs.core.seq(arglist__10960);
return bootstrap__delegate(opts);
});
bootstrap.cljs$core$IFn$_invoke$arity$variadic = bootstrap__delegate;
return bootstrap;
})()
;
goog.exportSymbol('mrhyde.core.bootstrap', mrhyde.core.bootstrap);

//# sourceMappingURL=core.js.map