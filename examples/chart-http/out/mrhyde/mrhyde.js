// Compiled by ClojureScript 0.0-2227
goog.provide('mrhyde.mrhyde');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('mrhyde.guts');
goog.require('mrhyde.guts');
goog.require('cljs.reader');
goog.require('clojure.string');
mrhyde.mrhyde.IHyde = (function (){var obj11268 = {};return obj11268;
})();
mrhyde.mrhyde.has_cache_QMARK_ = (function has_cache_QMARK_(this$){if((function (){var and__3529__auto__ = this$;if(and__3529__auto__)
{return this$.mrhyde$mrhyde$IHyde$has_cache_QMARK_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return this$.mrhyde$mrhyde$IHyde$has_cache_QMARK_$arity$1(this$);
} else
{var x__4168__auto__ = (((this$ == null))?null:this$);return (function (){var or__3541__auto__ = (mrhyde.mrhyde.has_cache_QMARK_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (mrhyde.mrhyde.has_cache_QMARK_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHyde.has-cache?",this$);
}
}
})().call(null,this$);
}
});
mrhyde.mrhyde.from_cache = (function from_cache(this$){if((function (){var and__3529__auto__ = this$;if(and__3529__auto__)
{return this$.mrhyde$mrhyde$IHyde$from_cache$arity$1;
} else
{return and__3529__auto__;
}
})())
{return this$.mrhyde$mrhyde$IHyde$from_cache$arity$1(this$);
} else
{var x__4168__auto__ = (((this$ == null))?null:this$);return (function (){var or__3541__auto__ = (mrhyde.mrhyde.from_cache[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (mrhyde.mrhyde.from_cache["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHyde.from-cache",this$);
}
}
})().call(null,this$);
}
});
/**
* Returns true if coll satisfies IHyde
*/
mrhyde.mrhyde.hyde_QMARK_ = (function hyde_QMARK_(x){var G__11270 = x;if(G__11270)
{var bit__4191__auto__ = null;if(cljs.core.truth_((function (){var or__3541__auto__ = bit__4191__auto__;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return G__11270.mrhyde$mrhyde$IHyde$;
}
})()))
{return true;
} else
{if((!G__11270.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,mrhyde.mrhyde.IHyde,G__11270);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,mrhyde.mrhyde.IHyde,G__11270);
}
});
/**
* Returns true if coll satisfies IHyde
*/
mrhyde.mrhyde.hyde_array_QMARK_ = (function hyde_array_QMARK_(x){var and__3529__auto__ = (function (){var G__11274 = x;if(G__11274)
{var bit__4191__auto__ = null;if(cljs.core.truth_((function (){var or__3541__auto__ = bit__4191__auto__;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return G__11274.mrhyde$mrhyde$IHyde$;
}
})()))
{return true;
} else
{if((!G__11274.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,mrhyde.mrhyde.IHyde,G__11274);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,mrhyde.mrhyde.IHyde,G__11274);
}
})();if(and__3529__auto__)
{return (x[mrhyde.guts.hyde_proto_array_marker]);
} else
{return and__3529__auto__;
}
});
/**
* Returns true if coll satisfies IHyde
*/
mrhyde.mrhyde.hyde_object_QMARK_ = (function hyde_object_QMARK_(x){var and__3529__auto__ = (function (){var G__11278 = x;if(G__11278)
{var bit__4191__auto__ = null;if(cljs.core.truth_((function (){var or__3541__auto__ = bit__4191__auto__;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return G__11278.mrhyde$mrhyde$IHyde$;
}
})()))
{return true;
} else
{if((!G__11278.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,mrhyde.mrhyde.IHyde,G__11278);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,mrhyde.mrhyde.IHyde,G__11278);
}
})();if(and__3529__auto__)
{return (x[mrhyde.guts.hyde_proto_object_marker]);
} else
{return and__3529__auto__;
}
});
/**
* Convert js object to cljs equivalent
*/
mrhyde.mrhyde.toclj = (function toclj(x){return cljs.core.js__GT_clj.call(null,x,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
goog.exportSymbol('mrhyde.mrhyde.toclj', mrhyde.mrhyde.toclj);
/**
* Convert cljs object to js equivalent
*/
mrhyde.mrhyde.tojs = (function tojs(x){return cljs.core.clj__GT_js.call(null,x);
});
goog.exportSymbol('mrhyde.mrhyde.tojs', mrhyde.mrhyde.tojs);
/**
* Pass a string through the cljs reader and return the result
*/
mrhyde.mrhyde.cljread = (function cljread(x){return cljs.reader.read_string.call(null,x);
});
goog.exportSymbol('mrhyde.mrhyde.cljread', mrhyde.mrhyde.cljread);

//# sourceMappingURL=mrhyde.js.map