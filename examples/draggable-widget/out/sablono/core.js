// Compiled by ClojureScript 0.0-2227
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__14673__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__14672 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__14672,0,null);var body = cljs.core.nthnext.call(null,vec__14672,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__14673 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14673__delegate.call(this,args);};
G__14673.cljs$lang$maxFixedArity = 0;
G__14673.cljs$lang$applyTo = (function (arglist__14674){
var args = cljs.core.seq(arglist__14674);
return G__14673__delegate(args);
});
G__14673.cljs$core$IFn$_invoke$arity$variadic = G__14673__delegate;
return G__14673;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4282__auto__ = (function iter__14679(s__14680){return (new cljs.core.LazySeq(null,(function (){var s__14680__$1 = s__14680;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14680__$1);if(temp__4126__auto__)
{var s__14680__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14680__$2))
{var c__4280__auto__ = cljs.core.chunk_first.call(null,s__14680__$2);var size__4281__auto__ = cljs.core.count.call(null,c__4280__auto__);var b__14682 = cljs.core.chunk_buffer.call(null,size__4281__auto__);if((function (){var i__14681 = 0;while(true){
if((i__14681 < size__4281__auto__))
{var args = cljs.core._nth.call(null,c__4280__auto__,i__14681);cljs.core.chunk_append.call(null,b__14682,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__14683 = (i__14681 + 1);
i__14681 = G__14683;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14682),iter__14679.call(null,cljs.core.chunk_rest.call(null,s__14680__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14682),null);
}
} else
{var args = cljs.core.first.call(null,s__14680__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__14679.call(null,cljs.core.rest.call(null,s__14680__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4282__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4282__auto__ = (function iter__14688(s__14689){return (new cljs.core.LazySeq(null,(function (){var s__14689__$1 = s__14689;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14689__$1);if(temp__4126__auto__)
{var s__14689__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14689__$2))
{var c__4280__auto__ = cljs.core.chunk_first.call(null,s__14689__$2);var size__4281__auto__ = cljs.core.count.call(null,c__4280__auto__);var b__14691 = cljs.core.chunk_buffer.call(null,size__4281__auto__);if((function (){var i__14690 = 0;while(true){
if((i__14690 < size__4281__auto__))
{var style = cljs.core._nth.call(null,c__4280__auto__,i__14690);cljs.core.chunk_append.call(null,b__14691,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__14692 = (i__14690 + 1);
i__14690 = G__14692;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14691),iter__14688.call(null,cljs.core.chunk_rest.call(null,s__14689__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14691),null);
}
} else
{var style = cljs.core.first.call(null,s__14689__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__14688.call(null,cljs.core.rest.call(null,s__14689__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4282__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__14693){
var styles = cljs.core.seq(arglist__14693);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to14694 = (function() { 
var link_to14694__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to14694 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to14694__delegate.call(this,url,content);};
link_to14694.cljs$lang$maxFixedArity = 1;
link_to14694.cljs$lang$applyTo = (function (arglist__14695){
var url = cljs.core.first(arglist__14695);
var content = cljs.core.rest(arglist__14695);
return link_to14694__delegate(url,content);
});
link_to14694.cljs$core$IFn$_invoke$arity$variadic = link_to14694__delegate;
return link_to14694;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to14694);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to14696 = (function() { 
var mail_to14696__delegate = function (e_mail,p__14697){var vec__14699 = p__14697;var content = cljs.core.nth.call(null,vec__14699,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3557__auto__ = content;if(cljs.core.truth_(or__3557__auto__))
{return or__3557__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to14696 = function (e_mail,var_args){
var p__14697 = null;if (arguments.length > 1) {
  p__14697 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to14696__delegate.call(this,e_mail,p__14697);};
mail_to14696.cljs$lang$maxFixedArity = 1;
mail_to14696.cljs$lang$applyTo = (function (arglist__14700){
var e_mail = cljs.core.first(arglist__14700);
var p__14697 = cljs.core.rest(arglist__14700);
return mail_to14696__delegate(e_mail,p__14697);
});
mail_to14696.cljs$core$IFn$_invoke$arity$variadic = mail_to14696__delegate;
return mail_to14696;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to14696);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list14701 = (function unordered_list14701(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4282__auto__ = (function iter__14706(s__14707){return (new cljs.core.LazySeq(null,(function (){var s__14707__$1 = s__14707;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14707__$1);if(temp__4126__auto__)
{var s__14707__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14707__$2))
{var c__4280__auto__ = cljs.core.chunk_first.call(null,s__14707__$2);var size__4281__auto__ = cljs.core.count.call(null,c__4280__auto__);var b__14709 = cljs.core.chunk_buffer.call(null,size__4281__auto__);if((function (){var i__14708 = 0;while(true){
if((i__14708 < size__4281__auto__))
{var x = cljs.core._nth.call(null,c__4280__auto__,i__14708);cljs.core.chunk_append.call(null,b__14709,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__14710 = (i__14708 + 1);
i__14708 = G__14710;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14709),iter__14706.call(null,cljs.core.chunk_rest.call(null,s__14707__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14709),null);
}
} else
{var x = cljs.core.first.call(null,s__14707__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__14706.call(null,cljs.core.rest.call(null,s__14707__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4282__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list14701);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list14711 = (function ordered_list14711(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4282__auto__ = (function iter__14716(s__14717){return (new cljs.core.LazySeq(null,(function (){var s__14717__$1 = s__14717;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14717__$1);if(temp__4126__auto__)
{var s__14717__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14717__$2))
{var c__4280__auto__ = cljs.core.chunk_first.call(null,s__14717__$2);var size__4281__auto__ = cljs.core.count.call(null,c__4280__auto__);var b__14719 = cljs.core.chunk_buffer.call(null,size__4281__auto__);if((function (){var i__14718 = 0;while(true){
if((i__14718 < size__4281__auto__))
{var x = cljs.core._nth.call(null,c__4280__auto__,i__14718);cljs.core.chunk_append.call(null,b__14719,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__14720 = (i__14718 + 1);
i__14718 = G__14720;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14719),iter__14716.call(null,cljs.core.chunk_rest.call(null,s__14717__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14719),null);
}
} else
{var x = cljs.core.first.call(null,s__14717__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__14716.call(null,cljs.core.rest.call(null,s__14717__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4282__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list14711);
/**
* Create an image element.
*/
sablono.core.image14721 = (function() {
var image14721 = null;
var image14721__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image14721__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image14721 = function(src,alt){
switch(arguments.length){
case 1:
return image14721__1.call(this,src);
case 2:
return image14721__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image14721.cljs$core$IFn$_invoke$arity$1 = image14721__1;
image14721.cljs$core$IFn$_invoke$arity$2 = image14721__2;
return image14721;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image14721);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__14722_SHARP_,p2__14723_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14722_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__14723_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__14724_SHARP_,p2__14725_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14724_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__14725_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field14726 = (function() {
var color_field14726 = null;
var color_field14726__1 = (function (name__5032__auto__){return color_field14726.call(null,name__5032__auto__,null);
});
var color_field14726__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1545688804,null))),name__5032__auto__,value__5033__auto__);
});
color_field14726 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return color_field14726__1.call(this,name__5032__auto__);
case 2:
return color_field14726__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field14726.cljs$core$IFn$_invoke$arity$1 = color_field14726__1;
color_field14726.cljs$core$IFn$_invoke$arity$2 = color_field14726__2;
return color_field14726;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field14726);
/**
* Creates a date input field.
*/
sablono.core.date_field14727 = (function() {
var date_field14727 = null;
var date_field14727__1 = (function (name__5032__auto__){return date_field14727.call(null,name__5032__auto__,null);
});
var date_field14727__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",-1637455513,null))),name__5032__auto__,value__5033__auto__);
});
date_field14727 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return date_field14727__1.call(this,name__5032__auto__);
case 2:
return date_field14727__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field14727.cljs$core$IFn$_invoke$arity$1 = date_field14727__1;
date_field14727.cljs$core$IFn$_invoke$arity$2 = date_field14727__2;
return date_field14727;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field14727);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field14728 = (function() {
var datetime_field14728 = null;
var datetime_field14728__1 = (function (name__5032__auto__){return datetime_field14728.call(null,name__5032__auto__,null);
});
var datetime_field14728__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))),name__5032__auto__,value__5033__auto__);
});
datetime_field14728 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return datetime_field14728__1.call(this,name__5032__auto__);
case 2:
return datetime_field14728__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field14728.cljs$core$IFn$_invoke$arity$1 = datetime_field14728__1;
datetime_field14728.cljs$core$IFn$_invoke$arity$2 = datetime_field14728__2;
return datetime_field14728;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field14728);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field14729 = (function() {
var datetime_local_field14729 = null;
var datetime_local_field14729__1 = (function (name__5032__auto__){return datetime_local_field14729.call(null,name__5032__auto__,null);
});
var datetime_local_field14729__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))),name__5032__auto__,value__5033__auto__);
});
datetime_local_field14729 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return datetime_local_field14729__1.call(this,name__5032__auto__);
case 2:
return datetime_local_field14729__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field14729.cljs$core$IFn$_invoke$arity$1 = datetime_local_field14729__1;
datetime_local_field14729.cljs$core$IFn$_invoke$arity$2 = datetime_local_field14729__2;
return datetime_local_field14729;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field14729);
/**
* Creates a email input field.
*/
sablono.core.email_field14730 = (function() {
var email_field14730 = null;
var email_field14730__1 = (function (name__5032__auto__){return email_field14730.call(null,name__5032__auto__,null);
});
var email_field14730__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1543912107,null))),name__5032__auto__,value__5033__auto__);
});
email_field14730 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return email_field14730__1.call(this,name__5032__auto__);
case 2:
return email_field14730__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field14730.cljs$core$IFn$_invoke$arity$1 = email_field14730__1;
email_field14730.cljs$core$IFn$_invoke$arity$2 = email_field14730__2;
return email_field14730;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field14730);
/**
* Creates a file input field.
*/
sablono.core.file_field14731 = (function() {
var file_field14731 = null;
var file_field14731__1 = (function (name__5032__auto__){return file_field14731.call(null,name__5032__auto__,null);
});
var file_field14731__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",-1637388491,null))),name__5032__auto__,value__5033__auto__);
});
file_field14731 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return file_field14731__1.call(this,name__5032__auto__);
case 2:
return file_field14731__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field14731.cljs$core$IFn$_invoke$arity$1 = file_field14731__1;
file_field14731.cljs$core$IFn$_invoke$arity$2 = file_field14731__2;
return file_field14731;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field14731);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field14732 = (function() {
var hidden_field14732 = null;
var hidden_field14732__1 = (function (name__5032__auto__){return hidden_field14732.call(null,name__5032__auto__,null);
});
var hidden_field14732__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))),name__5032__auto__,value__5033__auto__);
});
hidden_field14732 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return hidden_field14732__1.call(this,name__5032__auto__);
case 2:
return hidden_field14732__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field14732.cljs$core$IFn$_invoke$arity$1 = hidden_field14732__1;
hidden_field14732.cljs$core$IFn$_invoke$arity$2 = hidden_field14732__2;
return hidden_field14732;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field14732);
/**
* Creates a month input field.
*/
sablono.core.month_field14733 = (function() {
var month_field14733 = null;
var month_field14733__1 = (function (name__5032__auto__){return month_field14733.call(null,name__5032__auto__,null);
});
var month_field14733__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-1536451527,null))),name__5032__auto__,value__5033__auto__);
});
month_field14733 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return month_field14733__1.call(this,name__5032__auto__);
case 2:
return month_field14733__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field14733.cljs$core$IFn$_invoke$arity$1 = month_field14733__1;
month_field14733.cljs$core$IFn$_invoke$arity$2 = month_field14733__2;
return month_field14733;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field14733);
/**
* Creates a number input field.
*/
sablono.core.number_field14734 = (function() {
var number_field14734 = null;
var number_field14734__1 = (function (name__5032__auto__){return number_field14734.call(null,name__5032__auto__,null);
});
var number_field14734__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",1620071682,null))),name__5032__auto__,value__5033__auto__);
});
number_field14734 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return number_field14734__1.call(this,name__5032__auto__);
case 2:
return number_field14734__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field14734.cljs$core$IFn$_invoke$arity$1 = number_field14734__1;
number_field14734.cljs$core$IFn$_invoke$arity$2 = number_field14734__2;
return number_field14734;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field14734);
/**
* Creates a password input field.
*/
sablono.core.password_field14735 = (function() {
var password_field14735 = null;
var password_field14735__1 = (function (name__5032__auto__){return password_field14735.call(null,name__5032__auto__,null);
});
var password_field14735__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",-423545772,null))),name__5032__auto__,value__5033__auto__);
});
password_field14735 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return password_field14735__1.call(this,name__5032__auto__);
case 2:
return password_field14735__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field14735.cljs$core$IFn$_invoke$arity$1 = password_field14735__1;
password_field14735.cljs$core$IFn$_invoke$arity$2 = password_field14735__2;
return password_field14735;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field14735);
/**
* Creates a range input field.
*/
sablono.core.range_field14736 = (function() {
var range_field14736 = null;
var range_field14736__1 = (function (name__5032__auto__){return range_field14736.call(null,name__5032__auto__,null);
});
var range_field14736__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1532251402,null))),name__5032__auto__,value__5033__auto__);
});
range_field14736 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return range_field14736__1.call(this,name__5032__auto__);
case 2:
return range_field14736__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field14736.cljs$core$IFn$_invoke$arity$1 = range_field14736__1;
range_field14736.cljs$core$IFn$_invoke$arity$2 = range_field14736__2;
return range_field14736;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field14736);
/**
* Creates a search input field.
*/
sablono.core.search_field14737 = (function() {
var search_field14737 = null;
var search_field14737__1 = (function (name__5032__auto__){return search_field14737.call(null,name__5032__auto__,null);
});
var search_field14737__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",1748098913,null))),name__5032__auto__,value__5033__auto__);
});
search_field14737 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return search_field14737__1.call(this,name__5032__auto__);
case 2:
return search_field14737__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field14737.cljs$core$IFn$_invoke$arity$1 = search_field14737__1;
search_field14737.cljs$core$IFn$_invoke$arity$2 = search_field14737__2;
return search_field14737;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field14737);
/**
* Creates a tel input field.
*/
sablono.core.tel_field14738 = (function() {
var tel_field14738 = null;
var tel_field14738__1 = (function (name__5032__auto__){return tel_field14738.call(null,name__5032__auto__,null);
});
var tel_field14738__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))),name__5032__auto__,value__5033__auto__);
});
tel_field14738 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return tel_field14738__1.call(this,name__5032__auto__);
case 2:
return tel_field14738__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field14738.cljs$core$IFn$_invoke$arity$1 = tel_field14738__1;
tel_field14738.cljs$core$IFn$_invoke$arity$2 = tel_field14738__2;
return tel_field14738;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field14738);
/**
* Creates a text input field.
*/
sablono.core.text_field14739 = (function() {
var text_field14739 = null;
var text_field14739__1 = (function (name__5032__auto__){return text_field14739.call(null,name__5032__auto__,null);
});
var text_field14739__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-1636974874,null))),name__5032__auto__,value__5033__auto__);
});
text_field14739 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return text_field14739__1.call(this,name__5032__auto__);
case 2:
return text_field14739__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field14739.cljs$core$IFn$_invoke$arity$1 = text_field14739__1;
text_field14739.cljs$core$IFn$_invoke$arity$2 = text_field14739__2;
return text_field14739;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field14739);
/**
* Creates a time input field.
*/
sablono.core.time_field14740 = (function() {
var time_field14740 = null;
var time_field14740__1 = (function (name__5032__auto__){return time_field14740.call(null,name__5032__auto__,null);
});
var time_field14740__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1636971386,null))),name__5032__auto__,value__5033__auto__);
});
time_field14740 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return time_field14740__1.call(this,name__5032__auto__);
case 2:
return time_field14740__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field14740.cljs$core$IFn$_invoke$arity$1 = time_field14740__1;
time_field14740.cljs$core$IFn$_invoke$arity$2 = time_field14740__2;
return time_field14740;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field14740);
/**
* Creates a url input field.
*/
sablono.core.url_field14741 = (function() {
var url_field14741 = null;
var url_field14741__1 = (function (name__5032__auto__){return url_field14741.call(null,name__5032__auto__,null);
});
var url_field14741__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",-1640415448,null))),name__5032__auto__,value__5033__auto__);
});
url_field14741 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return url_field14741__1.call(this,name__5032__auto__);
case 2:
return url_field14741__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field14741.cljs$core$IFn$_invoke$arity$1 = url_field14741__1;
url_field14741.cljs$core$IFn$_invoke$arity$2 = url_field14741__2;
return url_field14741;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field14741);
/**
* Creates a week input field.
*/
sablono.core.week_field14742 = (function() {
var week_field14742 = null;
var week_field14742__1 = (function (name__5032__auto__){return week_field14742.call(null,name__5032__auto__,null);
});
var week_field14742__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",-1636886099,null))),name__5032__auto__,value__5033__auto__);
});
week_field14742 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return week_field14742__1.call(this,name__5032__auto__);
case 2:
return week_field14742__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field14742.cljs$core$IFn$_invoke$arity$1 = week_field14742__1;
week_field14742.cljs$core$IFn$_invoke$arity$2 = week_field14742__2;
return week_field14742;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field14742);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box14743 = (function() {
var check_box14743 = null;
var check_box14743__1 = (function (name){return check_box14743.call(null,name,null);
});
var check_box14743__2 = (function (name,checked_QMARK_){return check_box14743.call(null,name,checked_QMARK_,"true");
});
var check_box14743__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box14743 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box14743__1.call(this,name);
case 2:
return check_box14743__2.call(this,name,checked_QMARK_);
case 3:
return check_box14743__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box14743.cljs$core$IFn$_invoke$arity$1 = check_box14743__1;
check_box14743.cljs$core$IFn$_invoke$arity$2 = check_box14743__2;
check_box14743.cljs$core$IFn$_invoke$arity$3 = check_box14743__3;
return check_box14743;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box14743);
/**
* Creates a radio button.
*/
sablono.core.radio_button14744 = (function() {
var radio_button14744 = null;
var radio_button14744__1 = (function (group){return radio_button14744.call(null,group,null);
});
var radio_button14744__2 = (function (group,checked_QMARK_){return radio_button14744.call(null,group,checked_QMARK_,"true");
});
var radio_button14744__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button14744 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button14744__1.call(this,group);
case 2:
return radio_button14744__2.call(this,group,checked_QMARK_);
case 3:
return radio_button14744__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button14744.cljs$core$IFn$_invoke$arity$1 = radio_button14744__1;
radio_button14744.cljs$core$IFn$_invoke$arity$2 = radio_button14744__2;
radio_button14744.cljs$core$IFn$_invoke$arity$3 = radio_button14744__3;
return radio_button14744;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button14744);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options14745 = (function() {
var select_options14745 = null;
var select_options14745__1 = (function (coll){return select_options14745.call(null,coll,null);
});
var select_options14745__2 = (function (coll,selected){var iter__4282__auto__ = (function iter__14754(s__14755){return (new cljs.core.LazySeq(null,(function (){var s__14755__$1 = s__14755;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14755__$1);if(temp__4126__auto__)
{var s__14755__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14755__$2))
{var c__4280__auto__ = cljs.core.chunk_first.call(null,s__14755__$2);var size__4281__auto__ = cljs.core.count.call(null,c__4280__auto__);var b__14757 = cljs.core.chunk_buffer.call(null,size__4281__auto__);if((function (){var i__14756 = 0;while(true){
if((i__14756 < size__4281__auto__))
{var x = cljs.core._nth.call(null,c__4280__auto__,i__14756);cljs.core.chunk_append.call(null,b__14757,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__14760 = x;var text = cljs.core.nth.call(null,vec__14760,0,null);var val = cljs.core.nth.call(null,vec__14760,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__14760,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options14745.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__14762 = (i__14756 + 1);
i__14756 = G__14762;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14757),iter__14754.call(null,cljs.core.chunk_rest.call(null,s__14755__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14757),null);
}
} else
{var x = cljs.core.first.call(null,s__14755__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__14761 = x;var text = cljs.core.nth.call(null,vec__14761,0,null);var val = cljs.core.nth.call(null,vec__14761,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__14761,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options14745.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__14754.call(null,cljs.core.rest.call(null,s__14755__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4282__auto__.call(null,coll);
});
select_options14745 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options14745__1.call(this,coll);
case 2:
return select_options14745__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options14745.cljs$core$IFn$_invoke$arity$1 = select_options14745__1;
select_options14745.cljs$core$IFn$_invoke$arity$2 = select_options14745__2;
return select_options14745;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options14745);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down14763 = (function() {
var drop_down14763 = null;
var drop_down14763__2 = (function (name,options){return drop_down14763.call(null,name,options,null);
});
var drop_down14763__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down14763 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down14763__2.call(this,name,options);
case 3:
return drop_down14763__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down14763.cljs$core$IFn$_invoke$arity$2 = drop_down14763__2;
drop_down14763.cljs$core$IFn$_invoke$arity$3 = drop_down14763__3;
return drop_down14763;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down14763);
/**
* Creates a text area element.
*/
sablono.core.text_area14764 = (function() {
var text_area14764 = null;
var text_area14764__1 = (function (name){return text_area14764.call(null,name,null);
});
var text_area14764__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area14764 = function(name,value){
switch(arguments.length){
case 1:
return text_area14764__1.call(this,name);
case 2:
return text_area14764__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area14764.cljs$core$IFn$_invoke$arity$1 = text_area14764__1;
text_area14764.cljs$core$IFn$_invoke$arity$2 = text_area14764__2;
return text_area14764;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area14764);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label14765 = (function label14765(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label14765);
/**
* Creates a submit button.
*/
sablono.core.submit_button14766 = (function submit_button14766(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button14766);
/**
* Creates a form reset button.
*/
sablono.core.reset_button14767 = (function reset_button14767(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button14767);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to14768 = (function() { 
var form_to14768__delegate = function (p__14769,body){var vec__14771 = p__14769;var method = cljs.core.nth.call(null,vec__14771,0,null);var action = cljs.core.nth.call(null,vec__14771,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to14768 = function (p__14769,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to14768__delegate.call(this,p__14769,body);};
form_to14768.cljs$lang$maxFixedArity = 1;
form_to14768.cljs$lang$applyTo = (function (arglist__14772){
var p__14769 = cljs.core.first(arglist__14772);
var body = cljs.core.rest(arglist__14772);
return form_to14768__delegate(p__14769,body);
});
form_to14768.cljs$core$IFn$_invoke$arity$variadic = form_to14768__delegate;
return form_to14768;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to14768);

//# sourceMappingURL=core.js.map