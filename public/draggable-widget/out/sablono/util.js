// Compiled by ClojureScript 0.0-2227
goog.provide('sablono.util');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('goog.Uri');
sablono.util._STAR_base_url_STAR_ = null;
sablono.util.ToString = (function (){var obj34282 = {};return obj34282;
})();
sablono.util.to_str = (function to_str(x){if((function (){var and__3545__auto__ = x;if(and__3545__auto__)
{return x.sablono$util$ToString$to_str$arity$1;
} else
{return and__3545__auto__;
}
})())
{return x.sablono$util$ToString$to_str$arity$1(x);
} else
{var x__4184__auto__ = (((x == null))?null:x);return (function (){var or__3557__auto__ = (sablono.util.to_str[goog.typeOf(x__4184__auto__)]);if(or__3557__auto__)
{return or__3557__auto__;
} else
{var or__3557__auto____$1 = (sablono.util.to_str["_"]);if(or__3557__auto____$1)
{return or__3557__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ToString.to-str",x);
}
}
})().call(null,x);
}
});
sablono.util.ToURI = (function (){var obj34284 = {};return obj34284;
})();
sablono.util.to_uri = (function to_uri(x){if((function (){var and__3545__auto__ = x;if(and__3545__auto__)
{return x.sablono$util$ToURI$to_uri$arity$1;
} else
{return and__3545__auto__;
}
})())
{return x.sablono$util$ToURI$to_uri$arity$1(x);
} else
{var x__4184__auto__ = (((x == null))?null:x);return (function (){var or__3557__auto__ = (sablono.util.to_uri[goog.typeOf(x__4184__auto__)]);if(or__3557__auto__)
{return or__3557__auto__;
} else
{var or__3557__auto____$1 = (sablono.util.to_uri["_"]);if(or__3557__auto____$1)
{return or__3557__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ToURI.to-uri",x);
}
}
})().call(null,x);
}
});
/**
* Converts its arguments into a string using to-str.
* @param {...*} var_args
*/
sablono.util.as_str = (function() { 
var as_str__delegate = function (xs){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,sablono.util.to_str,xs));
};
var as_str = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return as_str__delegate.call(this,xs);};
as_str.cljs$lang$maxFixedArity = 0;
as_str.cljs$lang$applyTo = (function (arglist__34285){
var xs = cljs.core.seq(arglist__34285);
return as_str__delegate(xs);
});
as_str.cljs$core$IFn$_invoke$arity$variadic = as_str__delegate;
return as_str;
})()
;
/**
* Returns camel case version of the key, e.g. :http-equiv becomes :httpEquiv.
*/
sablono.util.camel_case = (function camel_case(k){if(cljs.core.truth_(k))
{var vec__34287 = clojure.string.split.call(null,cljs.core.name.call(null,k),/-/);var first_word = cljs.core.nth.call(null,vec__34287,0,null);var words = cljs.core.nthnext.call(null,vec__34287,1);if((cljs.core.empty_QMARK_.call(null,words)) || (cljs.core._EQ_.call(null,"aria",first_word)) || (cljs.core._EQ_.call(null,"data",first_word)))
{return k;
} else
{return cljs.core.keyword.call(null,clojure.string.join.call(null,cljs.core.conj.call(null,cljs.core.map.call(null,clojure.string.capitalize,words),first_word)));
}
} else
{return null;
}
});
/**
* Recursively transforms all map keys into camel case.
*/
sablono.util.camel_case_keys = (function camel_case_keys(m){var f = (function (p__34290){var vec__34291 = p__34290;var k = cljs.core.nth.call(null,vec__34291,0,null);var v = cljs.core.nth.call(null,vec__34291,1,null);if((k instanceof cljs.core.Keyword))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.util.camel_case.call(null,k),v], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});return clojure.walk.postwalk.call(null,((function (f){
return (function (x){if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,f,x));
} else
{return x;
}
});})(f))
,m);
});
/**
* Converts all HTML attributes to their DOM equivalents.
*/
sablono.util.html_to_dom_attrs = (function html_to_dom_attrs(attrs){return clojure.set.rename_keys.call(null,sablono.util.camel_case_keys.call(null,attrs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.Keyword(null,"className","className",1004015509),new cljs.core.Keyword(null,"for","for",1014005819),new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112)], null));
});
/**
* Removes all map entries where the value of the entry is empty.
*/
sablono.util.compact_map = (function compact_map(m){return cljs.core.reduce.call(null,(function (m__$1,k){var v = cljs.core.get.call(null,m__$1,k);if(cljs.core.empty_QMARK_.call(null,v))
{return cljs.core.dissoc.call(null,m__$1,k);
} else
{return m__$1;
}
}),m,cljs.core.keys.call(null,m));
});
/**
* Like clojure.core/merge but concatenate :class entries.
* @param {...*} var_args
*/
sablono.util.merge_with_class = (function() { 
var merge_with_class__delegate = function (maps){var classes = cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.mapcat.call(null,(function (p1__34292_SHARP_){if(cljs.core.list_QMARK_.call(null,p1__34292_SHARP_))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34292_SHARP_], null);
} else
{if(cljs.core.sequential_QMARK_.call(null,p1__34292_SHARP_))
{return p1__34292_SHARP_;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34292_SHARP_], null);
} else
{return null;
}
}
}
}),cljs.core.map.call(null,new cljs.core.Keyword(null,"class","class",1108647146),maps))));var maps__$1 = cljs.core.apply.call(null,cljs.core.merge,maps);if(cljs.core.empty_QMARK_.call(null,classes))
{return maps__$1;
} else
{return cljs.core.assoc.call(null,maps__$1,new cljs.core.Keyword(null,"class","class",1108647146),classes);
}
};
var merge_with_class = function (var_args){
var maps = null;if (arguments.length > 0) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return merge_with_class__delegate.call(this,maps);};
merge_with_class.cljs$lang$maxFixedArity = 0;
merge_with_class.cljs$lang$applyTo = (function (arglist__34293){
var maps = cljs.core.seq(arglist__34293);
return merge_with_class__delegate(maps);
});
merge_with_class.cljs$core$IFn$_invoke$arity$variadic = merge_with_class__delegate;
return merge_with_class;
})()
;
/**
* Strip the # and . characters from the beginning of `s`.
*/
sablono.util.strip_css = (function strip_css(s){if(cljs.core.truth_(s))
{return clojure.string.replace.call(null,s,/^[.#]/,"");
} else
{return null;
}
});
/**
* Match `s` as a CSS tag and return a vector of tag name, CSS id and
* CSS classes.
*/
sablono.util.match_tag = (function match_tag(s){var matches = cljs.core.re_seq.call(null,/[#.]?[^#.]+/,cljs.core.name.call(null,s));var vec__34297 = ((cljs.core.empty_QMARK_.call(null,matches))?(function(){throw cljs.core.ex_info.call(null,("Can't match CSS tag: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",1014018828),s], null))})():(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["#",null,".",null], null), null).call(null,cljs.core.ffirst.call(null,matches)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["div",matches], null):((new cljs.core.Keyword(null,"default","default",2558708147))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,matches),cljs.core.rest.call(null,matches)], null):null)));var tag_name = cljs.core.nth.call(null,vec__34297,0,null);var names = cljs.core.nth.call(null,vec__34297,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_name,cljs.core.first.call(null,cljs.core.map.call(null,sablono.util.strip_css,cljs.core.filter.call(null,((function (matches,vec__34297,tag_name,names){
return (function (p1__34294_SHARP_){return cljs.core._EQ_.call(null,"#",cljs.core.first.call(null,p1__34294_SHARP_));
});})(matches,vec__34297,tag_name,names))
,names))),cljs.core.vec.call(null,cljs.core.map.call(null,sablono.util.strip_css,cljs.core.filter.call(null,((function (matches,vec__34297,tag_name,names){
return (function (p1__34295_SHARP_){return cljs.core._EQ_.call(null,".",cljs.core.first.call(null,p1__34295_SHARP_));
});})(matches,vec__34297,tag_name,names))
,names)))], null);
});
/**
* Ensure an element vector is of the form [tag-name attrs content].
*/
sablono.util.normalize_element = (function normalize_element(p__34298){var vec__34301 = p__34298;var tag = cljs.core.nth.call(null,vec__34301,0,null);var content = cljs.core.nthnext.call(null,vec__34301,1);if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string')))
{throw cljs.core.ex_info.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+" is not a valid element name."),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",1014018828),tag,new cljs.core.Keyword(null,"content","content",1965434859),content], null));
} else
{}
var vec__34302 = sablono.util.match_tag.call(null,tag);var tag__$1 = cljs.core.nth.call(null,vec__34302,0,null);var id = cljs.core.nth.call(null,vec__34302,1,null);var class$ = cljs.core.nth.call(null,vec__34302,2,null);var tag_attrs = sablono.util.compact_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"class","class",1108647146),class$], null));var map_attrs = cljs.core.first.call(null,content);if(cljs.core.map_QMARK_.call(null,map_attrs))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.util.merge_with_class.call(null,tag_attrs,map_attrs),cljs.core.next.call(null,content)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,tag_attrs,content], null);
}
});
/**
* Join the `classes` with a whitespace.
*/
sablono.util.join_classes = (function join_classes(classes){return clojure.string.join.call(null," ",cljs.core.flatten.call(null,classes));
});
/**
* Returns the React function to render `tag` as a symbol.
*/
sablono.util.react_symbol = (function react_symbol(tag){return cljs.core.symbol.call(null,"js",("React.DOM."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,tag))));
});
/**
* Same as `react-symbol` but wrap input and text elements.
*/
sablono.util.react_fn = (function react_fn(tag){if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),null,new cljs.core.Keyword(null,"option","option",4298734567),null,new cljs.core.Keyword(null,"input","input",1114262332),null], null), null),cljs.core.keyword.call(null,tag)))
{return cljs.core.symbol.call(null,"sablono.interpreter",cljs.core.name.call(null,tag));
} else
{return sablono.util.react_symbol.call(null,tag);
}
});
/**
* Returns a regular expression that matches the HTML attribute `attr`
* and it's value.
*/
sablono.util.attr_pattern = (function attr_pattern(attr){return cljs.core.re_pattern.call(null,("\\s+"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,attr))+"\\s*=\\s*['\"][^\"']+['\"]"));
});
/**
* Strip the HTML attribute `attr` and it's value from the string `s`.
*/
sablono.util.strip_attr = (function strip_attr(s,attr){if(cljs.core.truth_(s))
{return clojure.string.replace.call(null,s,sablono.util.attr_pattern.call(null,attr),"");
} else
{return null;
}
});
/**
* Strip the outer HTML tag from the string `s`.
*/
sablono.util.strip_outer = (function strip_outer(s){if(cljs.core.truth_(s))
{return clojure.string.replace.call(null,clojure.string.replace.call(null,s,/^\s*<[^>]+>\s*/,""),/\s*<\/[^>]+>\s*$/,"");
} else
{return null;
}
});
(sablono.util.ToString["_"] = true);
(sablono.util.to_str["_"] = (function (x){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
}));
(sablono.util.ToString["number"] = true);
(sablono.util.to_str["number"] = (function (x){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
}));
(sablono.util.ToString["null"] = true);
(sablono.util.to_str["null"] = (function (_){return "";
}));
goog.Uri.prototype.sablono$util$ToString$ = true;
goog.Uri.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){var x__$1 = this;if(cljs.core.truth_((function (){var or__3557__auto__ = x__$1.hasDomain();if(cljs.core.truth_(or__3557__auto__))
{return or__3557__auto__;
} else
{return ((x__$1.getPath() == null)) || (cljs.core.not.call(null,cljs.core.re_matches.call(null,/^\/.*/,x__$1.getPath())));
}
})()))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1));
} else
{var base = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util._STAR_base_url_STAR_));if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*\/$/,base)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,base,0,(cljs.core.count.call(null,base) - 1)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1));
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(base)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1));
}
}
});
cljs.core.Keyword.prototype.sablono$util$ToString$ = true;
cljs.core.Keyword.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){var x__$1 = this;return cljs.core.name.call(null,x__$1);
});
(sablono.util.ToURI["_"] = true);
(sablono.util.to_uri["_"] = (function (x){return (new goog.Uri((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))));
}));
goog.Uri.prototype.sablono$util$ToURI$ = true;
goog.Uri.prototype.sablono$util$ToURI$to_uri$arity$1 = (function (x){var x__$1 = this;return x__$1;
});

//# sourceMappingURL=util.js.map