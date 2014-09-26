// Compiled by ClojureScript 0.0-2227
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_15186 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_15187 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_15188 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",2558708147),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_15188,opt_wrapper_15186,table_section_wrapper_15187,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),opt_wrapper_15186,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),table_section_wrapper_15187,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_15187,cell_wrapper_15188,table_section_wrapper_15187,table_section_wrapper_15187]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3545__auto__ = div.firstChild;if(cljs.core.truth_(and__3545__auto__))
{return div.firstChild.childNodes;
} else
{return and__3545__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__15193 = cljs.core.seq.call(null,tbody);var chunk__15194 = null;var count__15195 = 0;var i__15196 = 0;while(true){
if((i__15196 < count__15195))
{var child = cljs.core._nth.call(null,chunk__15194,i__15196);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__15197 = seq__15193;
var G__15198 = chunk__15194;
var G__15199 = count__15195;
var G__15200 = (i__15196 + 1);
seq__15193 = G__15197;
chunk__15194 = G__15198;
count__15195 = G__15199;
i__15196 = G__15200;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__15193);if(temp__4126__auto__)
{var seq__15193__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15193__$1))
{var c__4313__auto__ = cljs.core.chunk_first.call(null,seq__15193__$1);{
var G__15201 = cljs.core.chunk_rest.call(null,seq__15193__$1);
var G__15202 = c__4313__auto__;
var G__15203 = cljs.core.count.call(null,c__4313__auto__);
var G__15204 = 0;
seq__15193 = G__15201;
chunk__15194 = G__15202;
count__15195 = G__15203;
i__15196 = G__15204;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__15193__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__15205 = cljs.core.next.call(null,seq__15193__$1);
var G__15206 = null;
var G__15207 = 0;
var G__15208 = 0;
seq__15193 = G__15205;
chunk__15194 = G__15206;
count__15195 = G__15207;
i__15196 = G__15208;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__15210 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__15210,0,null);var start_wrap = cljs.core.nth.call(null,vec__15210,1,null);var end_wrap = cljs.core.nth.call(null,vec__15210,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__15211 = wrapper.lastChild;
var G__15212 = (level - 1);
wrapper = G__15211;
level = G__15212;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3545__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3545__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3545__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj15214 = {};return obj15214;
})();
domina.nodes = (function nodes(content){if((function (){var and__3545__auto__ = content;if(and__3545__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3545__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4184__auto__ = (((content == null))?null:content);return (function (){var or__3557__auto__ = (domina.nodes[goog.typeOf(x__4184__auto__)]);if(or__3557__auto__)
{return or__3557__auto__;
} else
{var or__3557__auto____$1 = (domina.nodes["_"]);if(or__3557__auto____$1)
{return or__3557__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3545__auto__ = nodeseq;if(and__3545__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3545__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4184__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3557__auto__ = (domina.single_node[goog.typeOf(x__4184__auto__)]);if(or__3557__auto__)
{return or__3557__auto__;
} else
{var or__3557__auto____$1 = (domina.single_node["_"]);if(or__3557__auto____$1)
{return or__3557__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3545__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3545__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3545__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__15215){
var mesg = cljs.core.seq(arglist__15215);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__15216){
var mesg = cljs.core.seq(arglist__15216);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__15217){
var contents = cljs.core.seq(arglist__15217);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__15218_SHARP_){return p1__15218_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__15219_SHARP_,p2__15220_SHARP_){return goog.dom.insertChildAt(p1__15219_SHARP_,p2__15220_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__15222_SHARP_,p2__15221_SHARP_){return goog.dom.insertSiblingBefore(p2__15221_SHARP_,p1__15222_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__15224_SHARP_,p2__15223_SHARP_){return goog.dom.insertSiblingAfter(p2__15223_SHARP_,p1__15224_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__15226_SHARP_,p2__15225_SHARP_){return goog.dom.replaceNode(p2__15225_SHARP_,p1__15226_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__15231_15235 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15232_15236 = null;var count__15233_15237 = 0;var i__15234_15238 = 0;while(true){
if((i__15234_15238 < count__15233_15237))
{var n_15239 = cljs.core._nth.call(null,chunk__15232_15236,i__15234_15238);goog.style.setStyle(n_15239,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15240 = seq__15231_15235;
var G__15241 = chunk__15232_15236;
var G__15242 = count__15233_15237;
var G__15243 = (i__15234_15238 + 1);
seq__15231_15235 = G__15240;
chunk__15232_15236 = G__15241;
count__15233_15237 = G__15242;
i__15234_15238 = G__15243;
continue;
}
} else
{var temp__4126__auto___15244 = cljs.core.seq.call(null,seq__15231_15235);if(temp__4126__auto___15244)
{var seq__15231_15245__$1 = temp__4126__auto___15244;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15231_15245__$1))
{var c__4313__auto___15246 = cljs.core.chunk_first.call(null,seq__15231_15245__$1);{
var G__15247 = cljs.core.chunk_rest.call(null,seq__15231_15245__$1);
var G__15248 = c__4313__auto___15246;
var G__15249 = cljs.core.count.call(null,c__4313__auto___15246);
var G__15250 = 0;
seq__15231_15235 = G__15247;
chunk__15232_15236 = G__15248;
count__15233_15237 = G__15249;
i__15234_15238 = G__15250;
continue;
}
} else
{var n_15251 = cljs.core.first.call(null,seq__15231_15245__$1);goog.style.setStyle(n_15251,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15252 = cljs.core.next.call(null,seq__15231_15245__$1);
var G__15253 = null;
var G__15254 = 0;
var G__15255 = 0;
seq__15231_15235 = G__15252;
chunk__15232_15236 = G__15253;
count__15233_15237 = G__15254;
i__15234_15238 = G__15255;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15256){
var content = cljs.core.first(arglist__15256);
arglist__15256 = cljs.core.next(arglist__15256);
var name = cljs.core.first(arglist__15256);
var value = cljs.core.rest(arglist__15256);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__15261_15265 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15262_15266 = null;var count__15263_15267 = 0;var i__15264_15268 = 0;while(true){
if((i__15264_15268 < count__15263_15267))
{var n_15269 = cljs.core._nth.call(null,chunk__15262_15266,i__15264_15268);n_15269.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15270 = seq__15261_15265;
var G__15271 = chunk__15262_15266;
var G__15272 = count__15263_15267;
var G__15273 = (i__15264_15268 + 1);
seq__15261_15265 = G__15270;
chunk__15262_15266 = G__15271;
count__15263_15267 = G__15272;
i__15264_15268 = G__15273;
continue;
}
} else
{var temp__4126__auto___15274 = cljs.core.seq.call(null,seq__15261_15265);if(temp__4126__auto___15274)
{var seq__15261_15275__$1 = temp__4126__auto___15274;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15261_15275__$1))
{var c__4313__auto___15276 = cljs.core.chunk_first.call(null,seq__15261_15275__$1);{
var G__15277 = cljs.core.chunk_rest.call(null,seq__15261_15275__$1);
var G__15278 = c__4313__auto___15276;
var G__15279 = cljs.core.count.call(null,c__4313__auto___15276);
var G__15280 = 0;
seq__15261_15265 = G__15277;
chunk__15262_15266 = G__15278;
count__15263_15267 = G__15279;
i__15264_15268 = G__15280;
continue;
}
} else
{var n_15281 = cljs.core.first.call(null,seq__15261_15275__$1);n_15281.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15282 = cljs.core.next.call(null,seq__15261_15275__$1);
var G__15283 = null;
var G__15284 = 0;
var G__15285 = 0;
seq__15261_15265 = G__15282;
chunk__15262_15266 = G__15283;
count__15263_15267 = G__15284;
i__15264_15268 = G__15285;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__15286){
var content = cljs.core.first(arglist__15286);
arglist__15286 = cljs.core.next(arglist__15286);
var name = cljs.core.first(arglist__15286);
var value = cljs.core.rest(arglist__15286);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__15291_15295 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15292_15296 = null;var count__15293_15297 = 0;var i__15294_15298 = 0;while(true){
if((i__15294_15298 < count__15293_15297))
{var n_15299 = cljs.core._nth.call(null,chunk__15292_15296,i__15294_15298);n_15299.removeAttribute(cljs.core.name.call(null,name));
{
var G__15300 = seq__15291_15295;
var G__15301 = chunk__15292_15296;
var G__15302 = count__15293_15297;
var G__15303 = (i__15294_15298 + 1);
seq__15291_15295 = G__15300;
chunk__15292_15296 = G__15301;
count__15293_15297 = G__15302;
i__15294_15298 = G__15303;
continue;
}
} else
{var temp__4126__auto___15304 = cljs.core.seq.call(null,seq__15291_15295);if(temp__4126__auto___15304)
{var seq__15291_15305__$1 = temp__4126__auto___15304;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15291_15305__$1))
{var c__4313__auto___15306 = cljs.core.chunk_first.call(null,seq__15291_15305__$1);{
var G__15307 = cljs.core.chunk_rest.call(null,seq__15291_15305__$1);
var G__15308 = c__4313__auto___15306;
var G__15309 = cljs.core.count.call(null,c__4313__auto___15306);
var G__15310 = 0;
seq__15291_15295 = G__15307;
chunk__15292_15296 = G__15308;
count__15293_15297 = G__15309;
i__15294_15298 = G__15310;
continue;
}
} else
{var n_15311 = cljs.core.first.call(null,seq__15291_15305__$1);n_15311.removeAttribute(cljs.core.name.call(null,name));
{
var G__15312 = cljs.core.next.call(null,seq__15291_15305__$1);
var G__15313 = null;
var G__15314 = 0;
var G__15315 = 0;
seq__15291_15295 = G__15312;
chunk__15292_15296 = G__15313;
count__15293_15297 = G__15314;
i__15294_15298 = G__15315;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__15317 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__15317,0,null);var v = cljs.core.nth.call(null,vec__15317,1,null);if(cljs.core.truth_((function (){var and__3545__auto__ = k;if(cljs.core.truth_(and__3545__auto__))
{return v;
} else
{return and__3545__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__15318_SHARP_){var attr = attrs__$1.item(p1__15318_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__15325_15331 = cljs.core.seq.call(null,styles);var chunk__15326_15332 = null;var count__15327_15333 = 0;var i__15328_15334 = 0;while(true){
if((i__15328_15334 < count__15327_15333))
{var vec__15329_15335 = cljs.core._nth.call(null,chunk__15326_15332,i__15328_15334);var name_15336 = cljs.core.nth.call(null,vec__15329_15335,0,null);var value_15337 = cljs.core.nth.call(null,vec__15329_15335,1,null);domina.set_style_BANG_.call(null,content,name_15336,value_15337);
{
var G__15338 = seq__15325_15331;
var G__15339 = chunk__15326_15332;
var G__15340 = count__15327_15333;
var G__15341 = (i__15328_15334 + 1);
seq__15325_15331 = G__15338;
chunk__15326_15332 = G__15339;
count__15327_15333 = G__15340;
i__15328_15334 = G__15341;
continue;
}
} else
{var temp__4126__auto___15342 = cljs.core.seq.call(null,seq__15325_15331);if(temp__4126__auto___15342)
{var seq__15325_15343__$1 = temp__4126__auto___15342;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15325_15343__$1))
{var c__4313__auto___15344 = cljs.core.chunk_first.call(null,seq__15325_15343__$1);{
var G__15345 = cljs.core.chunk_rest.call(null,seq__15325_15343__$1);
var G__15346 = c__4313__auto___15344;
var G__15347 = cljs.core.count.call(null,c__4313__auto___15344);
var G__15348 = 0;
seq__15325_15331 = G__15345;
chunk__15326_15332 = G__15346;
count__15327_15333 = G__15347;
i__15328_15334 = G__15348;
continue;
}
} else
{var vec__15330_15349 = cljs.core.first.call(null,seq__15325_15343__$1);var name_15350 = cljs.core.nth.call(null,vec__15330_15349,0,null);var value_15351 = cljs.core.nth.call(null,vec__15330_15349,1,null);domina.set_style_BANG_.call(null,content,name_15350,value_15351);
{
var G__15352 = cljs.core.next.call(null,seq__15325_15343__$1);
var G__15353 = null;
var G__15354 = 0;
var G__15355 = 0;
seq__15325_15331 = G__15352;
chunk__15326_15332 = G__15353;
count__15327_15333 = G__15354;
i__15328_15334 = G__15355;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__15362_15368 = cljs.core.seq.call(null,attrs);var chunk__15363_15369 = null;var count__15364_15370 = 0;var i__15365_15371 = 0;while(true){
if((i__15365_15371 < count__15364_15370))
{var vec__15366_15372 = cljs.core._nth.call(null,chunk__15363_15369,i__15365_15371);var name_15373 = cljs.core.nth.call(null,vec__15366_15372,0,null);var value_15374 = cljs.core.nth.call(null,vec__15366_15372,1,null);domina.set_attr_BANG_.call(null,content,name_15373,value_15374);
{
var G__15375 = seq__15362_15368;
var G__15376 = chunk__15363_15369;
var G__15377 = count__15364_15370;
var G__15378 = (i__15365_15371 + 1);
seq__15362_15368 = G__15375;
chunk__15363_15369 = G__15376;
count__15364_15370 = G__15377;
i__15365_15371 = G__15378;
continue;
}
} else
{var temp__4126__auto___15379 = cljs.core.seq.call(null,seq__15362_15368);if(temp__4126__auto___15379)
{var seq__15362_15380__$1 = temp__4126__auto___15379;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15362_15380__$1))
{var c__4313__auto___15381 = cljs.core.chunk_first.call(null,seq__15362_15380__$1);{
var G__15382 = cljs.core.chunk_rest.call(null,seq__15362_15380__$1);
var G__15383 = c__4313__auto___15381;
var G__15384 = cljs.core.count.call(null,c__4313__auto___15381);
var G__15385 = 0;
seq__15362_15368 = G__15382;
chunk__15363_15369 = G__15383;
count__15364_15370 = G__15384;
i__15365_15371 = G__15385;
continue;
}
} else
{var vec__15367_15386 = cljs.core.first.call(null,seq__15362_15380__$1);var name_15387 = cljs.core.nth.call(null,vec__15367_15386,0,null);var value_15388 = cljs.core.nth.call(null,vec__15367_15386,1,null);domina.set_attr_BANG_.call(null,content,name_15387,value_15388);
{
var G__15389 = cljs.core.next.call(null,seq__15362_15380__$1);
var G__15390 = null;
var G__15391 = 0;
var G__15392 = 0;
seq__15362_15368 = G__15389;
chunk__15363_15369 = G__15390;
count__15364_15370 = G__15391;
i__15365_15371 = G__15392;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__15397_15401 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15398_15402 = null;var count__15399_15403 = 0;var i__15400_15404 = 0;while(true){
if((i__15400_15404 < count__15399_15403))
{var node_15405 = cljs.core._nth.call(null,chunk__15398_15402,i__15400_15404);goog.dom.classes.add(node_15405,class$);
{
var G__15406 = seq__15397_15401;
var G__15407 = chunk__15398_15402;
var G__15408 = count__15399_15403;
var G__15409 = (i__15400_15404 + 1);
seq__15397_15401 = G__15406;
chunk__15398_15402 = G__15407;
count__15399_15403 = G__15408;
i__15400_15404 = G__15409;
continue;
}
} else
{var temp__4126__auto___15410 = cljs.core.seq.call(null,seq__15397_15401);if(temp__4126__auto___15410)
{var seq__15397_15411__$1 = temp__4126__auto___15410;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15397_15411__$1))
{var c__4313__auto___15412 = cljs.core.chunk_first.call(null,seq__15397_15411__$1);{
var G__15413 = cljs.core.chunk_rest.call(null,seq__15397_15411__$1);
var G__15414 = c__4313__auto___15412;
var G__15415 = cljs.core.count.call(null,c__4313__auto___15412);
var G__15416 = 0;
seq__15397_15401 = G__15413;
chunk__15398_15402 = G__15414;
count__15399_15403 = G__15415;
i__15400_15404 = G__15416;
continue;
}
} else
{var node_15417 = cljs.core.first.call(null,seq__15397_15411__$1);goog.dom.classes.add(node_15417,class$);
{
var G__15418 = cljs.core.next.call(null,seq__15397_15411__$1);
var G__15419 = null;
var G__15420 = 0;
var G__15421 = 0;
seq__15397_15401 = G__15418;
chunk__15398_15402 = G__15419;
count__15399_15403 = G__15420;
i__15400_15404 = G__15421;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__15426_15430 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15427_15431 = null;var count__15428_15432 = 0;var i__15429_15433 = 0;while(true){
if((i__15429_15433 < count__15428_15432))
{var node_15434 = cljs.core._nth.call(null,chunk__15427_15431,i__15429_15433);goog.dom.classes.remove(node_15434,class$);
{
var G__15435 = seq__15426_15430;
var G__15436 = chunk__15427_15431;
var G__15437 = count__15428_15432;
var G__15438 = (i__15429_15433 + 1);
seq__15426_15430 = G__15435;
chunk__15427_15431 = G__15436;
count__15428_15432 = G__15437;
i__15429_15433 = G__15438;
continue;
}
} else
{var temp__4126__auto___15439 = cljs.core.seq.call(null,seq__15426_15430);if(temp__4126__auto___15439)
{var seq__15426_15440__$1 = temp__4126__auto___15439;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15426_15440__$1))
{var c__4313__auto___15441 = cljs.core.chunk_first.call(null,seq__15426_15440__$1);{
var G__15442 = cljs.core.chunk_rest.call(null,seq__15426_15440__$1);
var G__15443 = c__4313__auto___15441;
var G__15444 = cljs.core.count.call(null,c__4313__auto___15441);
var G__15445 = 0;
seq__15426_15430 = G__15442;
chunk__15427_15431 = G__15443;
count__15428_15432 = G__15444;
i__15429_15433 = G__15445;
continue;
}
} else
{var node_15446 = cljs.core.first.call(null,seq__15426_15440__$1);goog.dom.classes.remove(node_15446,class$);
{
var G__15447 = cljs.core.next.call(null,seq__15426_15440__$1);
var G__15448 = null;
var G__15449 = 0;
var G__15450 = 0;
seq__15426_15430 = G__15447;
chunk__15427_15431 = G__15448;
count__15428_15432 = G__15449;
i__15429_15433 = G__15450;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__15455_15459 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15456_15460 = null;var count__15457_15461 = 0;var i__15458_15462 = 0;while(true){
if((i__15458_15462 < count__15457_15461))
{var node_15463 = cljs.core._nth.call(null,chunk__15456_15460,i__15458_15462);goog.dom.classes.toggle(node_15463,class$);
{
var G__15464 = seq__15455_15459;
var G__15465 = chunk__15456_15460;
var G__15466 = count__15457_15461;
var G__15467 = (i__15458_15462 + 1);
seq__15455_15459 = G__15464;
chunk__15456_15460 = G__15465;
count__15457_15461 = G__15466;
i__15458_15462 = G__15467;
continue;
}
} else
{var temp__4126__auto___15468 = cljs.core.seq.call(null,seq__15455_15459);if(temp__4126__auto___15468)
{var seq__15455_15469__$1 = temp__4126__auto___15468;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15455_15469__$1))
{var c__4313__auto___15470 = cljs.core.chunk_first.call(null,seq__15455_15469__$1);{
var G__15471 = cljs.core.chunk_rest.call(null,seq__15455_15469__$1);
var G__15472 = c__4313__auto___15470;
var G__15473 = cljs.core.count.call(null,c__4313__auto___15470);
var G__15474 = 0;
seq__15455_15459 = G__15471;
chunk__15456_15460 = G__15472;
count__15457_15461 = G__15473;
i__15458_15462 = G__15474;
continue;
}
} else
{var node_15475 = cljs.core.first.call(null,seq__15455_15469__$1);goog.dom.classes.toggle(node_15475,class$);
{
var G__15476 = cljs.core.next.call(null,seq__15455_15469__$1);
var G__15477 = null;
var G__15478 = 0;
var G__15479 = 0;
seq__15455_15459 = G__15476;
chunk__15456_15460 = G__15477;
count__15457_15461 = G__15478;
i__15458_15462 = G__15479;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_15488__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__15484_15489 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15485_15490 = null;var count__15486_15491 = 0;var i__15487_15492 = 0;while(true){
if((i__15487_15492 < count__15486_15491))
{var node_15493 = cljs.core._nth.call(null,chunk__15485_15490,i__15487_15492);goog.dom.classes.set(node_15493,classes_15488__$1);
{
var G__15494 = seq__15484_15489;
var G__15495 = chunk__15485_15490;
var G__15496 = count__15486_15491;
var G__15497 = (i__15487_15492 + 1);
seq__15484_15489 = G__15494;
chunk__15485_15490 = G__15495;
count__15486_15491 = G__15496;
i__15487_15492 = G__15497;
continue;
}
} else
{var temp__4126__auto___15498 = cljs.core.seq.call(null,seq__15484_15489);if(temp__4126__auto___15498)
{var seq__15484_15499__$1 = temp__4126__auto___15498;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15484_15499__$1))
{var c__4313__auto___15500 = cljs.core.chunk_first.call(null,seq__15484_15499__$1);{
var G__15501 = cljs.core.chunk_rest.call(null,seq__15484_15499__$1);
var G__15502 = c__4313__auto___15500;
var G__15503 = cljs.core.count.call(null,c__4313__auto___15500);
var G__15504 = 0;
seq__15484_15489 = G__15501;
chunk__15485_15490 = G__15502;
count__15486_15491 = G__15503;
i__15487_15492 = G__15504;
continue;
}
} else
{var node_15505 = cljs.core.first.call(null,seq__15484_15499__$1);goog.dom.classes.set(node_15505,classes_15488__$1);
{
var G__15506 = cljs.core.next.call(null,seq__15484_15499__$1);
var G__15507 = null;
var G__15508 = 0;
var G__15509 = 0;
seq__15484_15489 = G__15506;
chunk__15485_15490 = G__15507;
count__15486_15491 = G__15508;
i__15487_15492 = G__15509;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__15514_15518 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15515_15519 = null;var count__15516_15520 = 0;var i__15517_15521 = 0;while(true){
if((i__15517_15521 < count__15516_15520))
{var node_15522 = cljs.core._nth.call(null,chunk__15515_15519,i__15517_15521);goog.dom.setTextContent(node_15522,value);
{
var G__15523 = seq__15514_15518;
var G__15524 = chunk__15515_15519;
var G__15525 = count__15516_15520;
var G__15526 = (i__15517_15521 + 1);
seq__15514_15518 = G__15523;
chunk__15515_15519 = G__15524;
count__15516_15520 = G__15525;
i__15517_15521 = G__15526;
continue;
}
} else
{var temp__4126__auto___15527 = cljs.core.seq.call(null,seq__15514_15518);if(temp__4126__auto___15527)
{var seq__15514_15528__$1 = temp__4126__auto___15527;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15514_15528__$1))
{var c__4313__auto___15529 = cljs.core.chunk_first.call(null,seq__15514_15528__$1);{
var G__15530 = cljs.core.chunk_rest.call(null,seq__15514_15528__$1);
var G__15531 = c__4313__auto___15529;
var G__15532 = cljs.core.count.call(null,c__4313__auto___15529);
var G__15533 = 0;
seq__15514_15518 = G__15530;
chunk__15515_15519 = G__15531;
count__15516_15520 = G__15532;
i__15517_15521 = G__15533;
continue;
}
} else
{var node_15534 = cljs.core.first.call(null,seq__15514_15528__$1);goog.dom.setTextContent(node_15534,value);
{
var G__15535 = cljs.core.next.call(null,seq__15514_15528__$1);
var G__15536 = null;
var G__15537 = 0;
var G__15538 = 0;
seq__15514_15518 = G__15535;
chunk__15515_15519 = G__15536;
count__15516_15520 = G__15537;
i__15517_15521 = G__15538;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__15543_15547 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15544_15548 = null;var count__15545_15549 = 0;var i__15546_15550 = 0;while(true){
if((i__15546_15550 < count__15545_15549))
{var node_15551 = cljs.core._nth.call(null,chunk__15544_15548,i__15546_15550);goog.dom.forms.setValue(node_15551,value);
{
var G__15552 = seq__15543_15547;
var G__15553 = chunk__15544_15548;
var G__15554 = count__15545_15549;
var G__15555 = (i__15546_15550 + 1);
seq__15543_15547 = G__15552;
chunk__15544_15548 = G__15553;
count__15545_15549 = G__15554;
i__15546_15550 = G__15555;
continue;
}
} else
{var temp__4126__auto___15556 = cljs.core.seq.call(null,seq__15543_15547);if(temp__4126__auto___15556)
{var seq__15543_15557__$1 = temp__4126__auto___15556;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15543_15557__$1))
{var c__4313__auto___15558 = cljs.core.chunk_first.call(null,seq__15543_15557__$1);{
var G__15559 = cljs.core.chunk_rest.call(null,seq__15543_15557__$1);
var G__15560 = c__4313__auto___15558;
var G__15561 = cljs.core.count.call(null,c__4313__auto___15558);
var G__15562 = 0;
seq__15543_15547 = G__15559;
chunk__15544_15548 = G__15560;
count__15545_15549 = G__15561;
i__15546_15550 = G__15562;
continue;
}
} else
{var node_15563 = cljs.core.first.call(null,seq__15543_15557__$1);goog.dom.forms.setValue(node_15563,value);
{
var G__15564 = cljs.core.next.call(null,seq__15543_15557__$1);
var G__15565 = null;
var G__15566 = 0;
var G__15567 = 0;
seq__15543_15547 = G__15564;
chunk__15544_15548 = G__15565;
count__15545_15549 = G__15566;
i__15546_15550 = G__15567;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3545__auto__ = allows_inner_html_QMARK_;if(and__3545__auto__)
{var and__3545__auto____$1 = (function (){var or__3557__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3557__auto__))
{return or__3557__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3545__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3545__auto____$1;
}
} else
{return and__3545__auto__;
}
})()))
{var value_15578 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__15574_15579 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15575_15580 = null;var count__15576_15581 = 0;var i__15577_15582 = 0;while(true){
if((i__15577_15582 < count__15576_15581))
{var node_15583 = cljs.core._nth.call(null,chunk__15575_15580,i__15577_15582);node_15583.innerHTML = value_15578;
{
var G__15584 = seq__15574_15579;
var G__15585 = chunk__15575_15580;
var G__15586 = count__15576_15581;
var G__15587 = (i__15577_15582 + 1);
seq__15574_15579 = G__15584;
chunk__15575_15580 = G__15585;
count__15576_15581 = G__15586;
i__15577_15582 = G__15587;
continue;
}
} else
{var temp__4126__auto___15588 = cljs.core.seq.call(null,seq__15574_15579);if(temp__4126__auto___15588)
{var seq__15574_15589__$1 = temp__4126__auto___15588;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15574_15589__$1))
{var c__4313__auto___15590 = cljs.core.chunk_first.call(null,seq__15574_15589__$1);{
var G__15591 = cljs.core.chunk_rest.call(null,seq__15574_15589__$1);
var G__15592 = c__4313__auto___15590;
var G__15593 = cljs.core.count.call(null,c__4313__auto___15590);
var G__15594 = 0;
seq__15574_15579 = G__15591;
chunk__15575_15580 = G__15592;
count__15576_15581 = G__15593;
i__15577_15582 = G__15594;
continue;
}
} else
{var node_15595 = cljs.core.first.call(null,seq__15574_15589__$1);node_15595.innerHTML = value_15578;
{
var G__15596 = cljs.core.next.call(null,seq__15574_15589__$1);
var G__15597 = null;
var G__15598 = 0;
var G__15599 = 0;
seq__15574_15579 = G__15596;
chunk__15575_15580 = G__15597;
count__15576_15581 = G__15598;
i__15577_15582 = G__15599;
continue;
}
}
} else
{}
}
break;
}
}catch (e15573){if((e15573 instanceof Error))
{var e_15600 = e15573;domina.replace_children_BANG_.call(null,content,value_15578);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15573;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3545__auto__ = bubble;if(cljs.core.truth_(and__3545__auto__))
{return (value == null);
} else
{return and__3545__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3557__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3557__auto__))
{return or__3557__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__15607_15611 = cljs.core.seq.call(null,children);var chunk__15608_15612 = null;var count__15609_15613 = 0;var i__15610_15614 = 0;while(true){
if((i__15610_15614 < count__15609_15613))
{var child_15615 = cljs.core._nth.call(null,chunk__15608_15612,i__15610_15614);frag.appendChild(child_15615);
{
var G__15616 = seq__15607_15611;
var G__15617 = chunk__15608_15612;
var G__15618 = count__15609_15613;
var G__15619 = (i__15610_15614 + 1);
seq__15607_15611 = G__15616;
chunk__15608_15612 = G__15617;
count__15609_15613 = G__15618;
i__15610_15614 = G__15619;
continue;
}
} else
{var temp__4126__auto___15620 = cljs.core.seq.call(null,seq__15607_15611);if(temp__4126__auto___15620)
{var seq__15607_15621__$1 = temp__4126__auto___15620;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15607_15621__$1))
{var c__4313__auto___15622 = cljs.core.chunk_first.call(null,seq__15607_15621__$1);{
var G__15623 = cljs.core.chunk_rest.call(null,seq__15607_15621__$1);
var G__15624 = c__4313__auto___15622;
var G__15625 = cljs.core.count.call(null,c__4313__auto___15622);
var G__15626 = 0;
seq__15607_15611 = G__15623;
chunk__15608_15612 = G__15624;
count__15609_15613 = G__15625;
i__15610_15614 = G__15626;
continue;
}
} else
{var child_15627 = cljs.core.first.call(null,seq__15607_15621__$1);frag.appendChild(child_15627);
{
var G__15628 = cljs.core.next.call(null,seq__15607_15621__$1);
var G__15629 = null;
var G__15630 = 0;
var G__15631 = 0;
seq__15607_15611 = G__15628;
chunk__15608_15612 = G__15629;
count__15609_15613 = G__15630;
i__15610_15614 = G__15631;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__15601_SHARP_,p2__15602_SHARP_){return f.call(null,p1__15601_SHARP_,p2__15602_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3545__auto__ = obj;if(cljs.core.truth_(and__3545__auto__))
{var and__3545__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3545__auto____$1)
{return obj.length;
} else
{return and__3545__auto____$1;
}
} else
{return and__3545__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__15633 = list_thing;if(G__15633)
{var bit__4207__auto__ = (G__15633.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4207__auto__) || (G__15633.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15633.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15633);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15633);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__15634 = content;if(G__15634)
{var bit__4207__auto__ = (G__15634.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4207__auto__) || (G__15634.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15634.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15634);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15634);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__15635 = content;if(G__15635)
{var bit__4207__auto__ = (G__15635.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4207__auto__) || (G__15635.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15635.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15635);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15635);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}

//# sourceMappingURL=domina.js.map