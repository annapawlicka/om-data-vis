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
var G__34169__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__34168 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__34168,0,null);var body = cljs.core.nthnext.call(null,vec__34168,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__34169 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__34169__delegate.call(this,args);};
G__34169.cljs$lang$maxFixedArity = 0;
G__34169.cljs$lang$applyTo = (function (arglist__34170){
var args = cljs.core.seq(arglist__34170);
return G__34169__delegate(args);
});
G__34169.cljs$core$IFn$_invoke$arity$variadic = G__34169__delegate;
return G__34169;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4282__auto__ = (function iter__34175(s__34176){return (new cljs.core.LazySeq(null,(function (){var s__34176__$1 = s__34176;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34176__$1);if(temp__4126__auto__)
{var s__34176__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34176__$2))
{var c__4280__auto__ = cljs.core.chunk_first.call(null,s__34176__$2);var size__4281__auto__ = cljs.core.count.call(null,c__4280__auto__);var b__34178 = cljs.core.chunk_buffer.call(null,size__4281__auto__);if((function (){var i__34177 = 0;while(true){
if((i__34177 < size__4281__auto__))
{var args = cljs.core._nth.call(null,c__4280__auto__,i__34177);cljs.core.chunk_append.call(null,b__34178,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__34179 = (i__34177 + 1);
i__34177 = G__34179;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34178),iter__34175.call(null,cljs.core.chunk_rest.call(null,s__34176__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34178),null);
}
} else
{var args = cljs.core.first.call(null,s__34176__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__34175.call(null,cljs.core.rest.call(null,s__34176__$2)));
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
var include_css__delegate = function (styles){var iter__4282__auto__ = (function iter__34184(s__34185){return (new cljs.core.LazySeq(null,(function (){var s__34185__$1 = s__34185;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34185__$1);if(temp__4126__auto__)
{var s__34185__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34185__$2))
{var c__4280__auto__ = cljs.core.chunk_first.call(null,s__34185__$2);var size__4281__auto__ = cljs.core.count.call(null,c__4280__auto__);var b__34187 = cljs.core.chunk_buffer.call(null,size__4281__auto__);if((function (){var i__34186 = 0;while(true){
if((i__34186 < size__4281__auto__))
{var style = cljs.core._nth.call(null,c__4280__auto__,i__34186);cljs.core.chunk_append.call(null,b__34187,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__34188 = (i__34186 + 1);
i__34186 = G__34188;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34187),iter__34184.call(null,cljs.core.chunk_rest.call(null,s__34185__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34187),null);
}
} else
{var style = cljs.core.first.call(null,s__34185__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__34184.call(null,cljs.core.rest.call(null,s__34185__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__34189){
var styles = cljs.core.seq(arglist__34189);
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
sablono.core.link_to34190 = (function() { 
var link_to34190__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to34190 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to34190__delegate.call(this,url,content);};
link_to34190.cljs$lang$maxFixedArity = 1;
link_to34190.cljs$lang$applyTo = (function (arglist__34191){
var url = cljs.core.first(arglist__34191);
var content = cljs.core.rest(arglist__34191);
return link_to34190__delegate(url,content);
});
link_to34190.cljs$core$IFn$_invoke$arity$variadic = link_to34190__delegate;
return link_to34190;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to34190);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to34192 = (function() { 
var mail_to34192__delegate = function (e_mail,p__34193){var vec__34195 = p__34193;var content = cljs.core.nth.call(null,vec__34195,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3557__auto__ = content;if(cljs.core.truth_(or__3557__auto__))
{return or__3557__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to34192 = function (e_mail,var_args){
var p__34193 = null;if (arguments.length > 1) {
  p__34193 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to34192__delegate.call(this,e_mail,p__34193);};
mail_to34192.cljs$lang$maxFixedArity = 1;
mail_to34192.cljs$lang$applyTo = (function (arglist__34196){
var e_mail = cljs.core.first(arglist__34196);
var p__34193 = cljs.core.rest(arglist__34196);
return mail_to34192__delegate(e_mail,p__34193);
});
mail_to34192.cljs$core$IFn$_invoke$arity$variadic = mail_to34192__delegate;
return mail_to34192;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to34192);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list34197 = (function unordered_list34197(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4282__auto__ = (function iter__34202(s__34203){return (new cljs.core.LazySeq(null,(function (){var s__34203__$1 = s__34203;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34203__$1);if(temp__4126__auto__)
{var s__34203__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34203__$2))
{var c__4280__auto__ = cljs.core.chunk_first.call(null,s__34203__$2);var size__4281__auto__ = cljs.core.count.call(null,c__4280__auto__);var b__34205 = cljs.core.chunk_buffer.call(null,size__4281__auto__);if((function (){var i__34204 = 0;while(true){
if((i__34204 < size__4281__auto__))
{var x = cljs.core._nth.call(null,c__4280__auto__,i__34204);cljs.core.chunk_append.call(null,b__34205,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__34206 = (i__34204 + 1);
i__34204 = G__34206;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34205),iter__34202.call(null,cljs.core.chunk_rest.call(null,s__34203__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34205),null);
}
} else
{var x = cljs.core.first.call(null,s__34203__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__34202.call(null,cljs.core.rest.call(null,s__34203__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list34197);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list34207 = (function ordered_list34207(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4282__auto__ = (function iter__34212(s__34213){return (new cljs.core.LazySeq(null,(function (){var s__34213__$1 = s__34213;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34213__$1);if(temp__4126__auto__)
{var s__34213__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34213__$2))
{var c__4280__auto__ = cljs.core.chunk_first.call(null,s__34213__$2);var size__4281__auto__ = cljs.core.count.call(null,c__4280__auto__);var b__34215 = cljs.core.chunk_buffer.call(null,size__4281__auto__);if((function (){var i__34214 = 0;while(true){
if((i__34214 < size__4281__auto__))
{var x = cljs.core._nth.call(null,c__4280__auto__,i__34214);cljs.core.chunk_append.call(null,b__34215,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__34216 = (i__34214 + 1);
i__34214 = G__34216;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34215),iter__34212.call(null,cljs.core.chunk_rest.call(null,s__34213__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34215),null);
}
} else
{var x = cljs.core.first.call(null,s__34213__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__34212.call(null,cljs.core.rest.call(null,s__34213__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list34207);
/**
* Create an image element.
*/
sablono.core.image34217 = (function() {
var image34217 = null;
var image34217__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image34217__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image34217 = function(src,alt){
switch(arguments.length){
case 1:
return image34217__1.call(this,src);
case 2:
return image34217__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image34217.cljs$core$IFn$_invoke$arity$1 = image34217__1;
image34217.cljs$core$IFn$_invoke$arity$2 = image34217__2;
return image34217;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image34217);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__34218_SHARP_,p2__34219_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34218_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__34219_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__34220_SHARP_,p2__34221_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34220_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__34221_SHARP_));
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
sablono.core.color_field34222 = (function() {
var color_field34222 = null;
var color_field34222__1 = (function (name__5032__auto__){return color_field34222.call(null,name__5032__auto__,null);
});
var color_field34222__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1545688804,null))),name__5032__auto__,value__5033__auto__);
});
color_field34222 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return color_field34222__1.call(this,name__5032__auto__);
case 2:
return color_field34222__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field34222.cljs$core$IFn$_invoke$arity$1 = color_field34222__1;
color_field34222.cljs$core$IFn$_invoke$arity$2 = color_field34222__2;
return color_field34222;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field34222);
/**
* Creates a date input field.
*/
sablono.core.date_field34223 = (function() {
var date_field34223 = null;
var date_field34223__1 = (function (name__5032__auto__){return date_field34223.call(null,name__5032__auto__,null);
});
var date_field34223__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",-1637455513,null))),name__5032__auto__,value__5033__auto__);
});
date_field34223 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return date_field34223__1.call(this,name__5032__auto__);
case 2:
return date_field34223__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field34223.cljs$core$IFn$_invoke$arity$1 = date_field34223__1;
date_field34223.cljs$core$IFn$_invoke$arity$2 = date_field34223__2;
return date_field34223;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field34223);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field34224 = (function() {
var datetime_field34224 = null;
var datetime_field34224__1 = (function (name__5032__auto__){return datetime_field34224.call(null,name__5032__auto__,null);
});
var datetime_field34224__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))),name__5032__auto__,value__5033__auto__);
});
datetime_field34224 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return datetime_field34224__1.call(this,name__5032__auto__);
case 2:
return datetime_field34224__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field34224.cljs$core$IFn$_invoke$arity$1 = datetime_field34224__1;
datetime_field34224.cljs$core$IFn$_invoke$arity$2 = datetime_field34224__2;
return datetime_field34224;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field34224);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field34225 = (function() {
var datetime_local_field34225 = null;
var datetime_local_field34225__1 = (function (name__5032__auto__){return datetime_local_field34225.call(null,name__5032__auto__,null);
});
var datetime_local_field34225__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))),name__5032__auto__,value__5033__auto__);
});
datetime_local_field34225 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return datetime_local_field34225__1.call(this,name__5032__auto__);
case 2:
return datetime_local_field34225__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field34225.cljs$core$IFn$_invoke$arity$1 = datetime_local_field34225__1;
datetime_local_field34225.cljs$core$IFn$_invoke$arity$2 = datetime_local_field34225__2;
return datetime_local_field34225;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field34225);
/**
* Creates a email input field.
*/
sablono.core.email_field34226 = (function() {
var email_field34226 = null;
var email_field34226__1 = (function (name__5032__auto__){return email_field34226.call(null,name__5032__auto__,null);
});
var email_field34226__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1543912107,null))),name__5032__auto__,value__5033__auto__);
});
email_field34226 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return email_field34226__1.call(this,name__5032__auto__);
case 2:
return email_field34226__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field34226.cljs$core$IFn$_invoke$arity$1 = email_field34226__1;
email_field34226.cljs$core$IFn$_invoke$arity$2 = email_field34226__2;
return email_field34226;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field34226);
/**
* Creates a file input field.
*/
sablono.core.file_field34227 = (function() {
var file_field34227 = null;
var file_field34227__1 = (function (name__5032__auto__){return file_field34227.call(null,name__5032__auto__,null);
});
var file_field34227__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",-1637388491,null))),name__5032__auto__,value__5033__auto__);
});
file_field34227 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return file_field34227__1.call(this,name__5032__auto__);
case 2:
return file_field34227__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field34227.cljs$core$IFn$_invoke$arity$1 = file_field34227__1;
file_field34227.cljs$core$IFn$_invoke$arity$2 = file_field34227__2;
return file_field34227;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field34227);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field34228 = (function() {
var hidden_field34228 = null;
var hidden_field34228__1 = (function (name__5032__auto__){return hidden_field34228.call(null,name__5032__auto__,null);
});
var hidden_field34228__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))),name__5032__auto__,value__5033__auto__);
});
hidden_field34228 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return hidden_field34228__1.call(this,name__5032__auto__);
case 2:
return hidden_field34228__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field34228.cljs$core$IFn$_invoke$arity$1 = hidden_field34228__1;
hidden_field34228.cljs$core$IFn$_invoke$arity$2 = hidden_field34228__2;
return hidden_field34228;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field34228);
/**
* Creates a month input field.
*/
sablono.core.month_field34229 = (function() {
var month_field34229 = null;
var month_field34229__1 = (function (name__5032__auto__){return month_field34229.call(null,name__5032__auto__,null);
});
var month_field34229__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-1536451527,null))),name__5032__auto__,value__5033__auto__);
});
month_field34229 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return month_field34229__1.call(this,name__5032__auto__);
case 2:
return month_field34229__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field34229.cljs$core$IFn$_invoke$arity$1 = month_field34229__1;
month_field34229.cljs$core$IFn$_invoke$arity$2 = month_field34229__2;
return month_field34229;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field34229);
/**
* Creates a number input field.
*/
sablono.core.number_field34230 = (function() {
var number_field34230 = null;
var number_field34230__1 = (function (name__5032__auto__){return number_field34230.call(null,name__5032__auto__,null);
});
var number_field34230__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",1620071682,null))),name__5032__auto__,value__5033__auto__);
});
number_field34230 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return number_field34230__1.call(this,name__5032__auto__);
case 2:
return number_field34230__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field34230.cljs$core$IFn$_invoke$arity$1 = number_field34230__1;
number_field34230.cljs$core$IFn$_invoke$arity$2 = number_field34230__2;
return number_field34230;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field34230);
/**
* Creates a password input field.
*/
sablono.core.password_field34231 = (function() {
var password_field34231 = null;
var password_field34231__1 = (function (name__5032__auto__){return password_field34231.call(null,name__5032__auto__,null);
});
var password_field34231__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",-423545772,null))),name__5032__auto__,value__5033__auto__);
});
password_field34231 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return password_field34231__1.call(this,name__5032__auto__);
case 2:
return password_field34231__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field34231.cljs$core$IFn$_invoke$arity$1 = password_field34231__1;
password_field34231.cljs$core$IFn$_invoke$arity$2 = password_field34231__2;
return password_field34231;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field34231);
/**
* Creates a range input field.
*/
sablono.core.range_field34232 = (function() {
var range_field34232 = null;
var range_field34232__1 = (function (name__5032__auto__){return range_field34232.call(null,name__5032__auto__,null);
});
var range_field34232__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1532251402,null))),name__5032__auto__,value__5033__auto__);
});
range_field34232 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return range_field34232__1.call(this,name__5032__auto__);
case 2:
return range_field34232__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field34232.cljs$core$IFn$_invoke$arity$1 = range_field34232__1;
range_field34232.cljs$core$IFn$_invoke$arity$2 = range_field34232__2;
return range_field34232;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field34232);
/**
* Creates a search input field.
*/
sablono.core.search_field34233 = (function() {
var search_field34233 = null;
var search_field34233__1 = (function (name__5032__auto__){return search_field34233.call(null,name__5032__auto__,null);
});
var search_field34233__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",1748098913,null))),name__5032__auto__,value__5033__auto__);
});
search_field34233 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return search_field34233__1.call(this,name__5032__auto__);
case 2:
return search_field34233__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field34233.cljs$core$IFn$_invoke$arity$1 = search_field34233__1;
search_field34233.cljs$core$IFn$_invoke$arity$2 = search_field34233__2;
return search_field34233;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field34233);
/**
* Creates a tel input field.
*/
sablono.core.tel_field34234 = (function() {
var tel_field34234 = null;
var tel_field34234__1 = (function (name__5032__auto__){return tel_field34234.call(null,name__5032__auto__,null);
});
var tel_field34234__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))),name__5032__auto__,value__5033__auto__);
});
tel_field34234 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return tel_field34234__1.call(this,name__5032__auto__);
case 2:
return tel_field34234__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field34234.cljs$core$IFn$_invoke$arity$1 = tel_field34234__1;
tel_field34234.cljs$core$IFn$_invoke$arity$2 = tel_field34234__2;
return tel_field34234;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field34234);
/**
* Creates a text input field.
*/
sablono.core.text_field34235 = (function() {
var text_field34235 = null;
var text_field34235__1 = (function (name__5032__auto__){return text_field34235.call(null,name__5032__auto__,null);
});
var text_field34235__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-1636974874,null))),name__5032__auto__,value__5033__auto__);
});
text_field34235 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return text_field34235__1.call(this,name__5032__auto__);
case 2:
return text_field34235__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field34235.cljs$core$IFn$_invoke$arity$1 = text_field34235__1;
text_field34235.cljs$core$IFn$_invoke$arity$2 = text_field34235__2;
return text_field34235;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field34235);
/**
* Creates a time input field.
*/
sablono.core.time_field34236 = (function() {
var time_field34236 = null;
var time_field34236__1 = (function (name__5032__auto__){return time_field34236.call(null,name__5032__auto__,null);
});
var time_field34236__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1636971386,null))),name__5032__auto__,value__5033__auto__);
});
time_field34236 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return time_field34236__1.call(this,name__5032__auto__);
case 2:
return time_field34236__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field34236.cljs$core$IFn$_invoke$arity$1 = time_field34236__1;
time_field34236.cljs$core$IFn$_invoke$arity$2 = time_field34236__2;
return time_field34236;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field34236);
/**
* Creates a url input field.
*/
sablono.core.url_field34237 = (function() {
var url_field34237 = null;
var url_field34237__1 = (function (name__5032__auto__){return url_field34237.call(null,name__5032__auto__,null);
});
var url_field34237__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",-1640415448,null))),name__5032__auto__,value__5033__auto__);
});
url_field34237 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return url_field34237__1.call(this,name__5032__auto__);
case 2:
return url_field34237__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field34237.cljs$core$IFn$_invoke$arity$1 = url_field34237__1;
url_field34237.cljs$core$IFn$_invoke$arity$2 = url_field34237__2;
return url_field34237;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field34237);
/**
* Creates a week input field.
*/
sablono.core.week_field34238 = (function() {
var week_field34238 = null;
var week_field34238__1 = (function (name__5032__auto__){return week_field34238.call(null,name__5032__auto__,null);
});
var week_field34238__2 = (function (name__5032__auto__,value__5033__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",-1636886099,null))),name__5032__auto__,value__5033__auto__);
});
week_field34238 = function(name__5032__auto__,value__5033__auto__){
switch(arguments.length){
case 1:
return week_field34238__1.call(this,name__5032__auto__);
case 2:
return week_field34238__2.call(this,name__5032__auto__,value__5033__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field34238.cljs$core$IFn$_invoke$arity$1 = week_field34238__1;
week_field34238.cljs$core$IFn$_invoke$arity$2 = week_field34238__2;
return week_field34238;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field34238);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box34239 = (function() {
var check_box34239 = null;
var check_box34239__1 = (function (name){return check_box34239.call(null,name,null);
});
var check_box34239__2 = (function (name,checked_QMARK_){return check_box34239.call(null,name,checked_QMARK_,"true");
});
var check_box34239__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box34239 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box34239__1.call(this,name);
case 2:
return check_box34239__2.call(this,name,checked_QMARK_);
case 3:
return check_box34239__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box34239.cljs$core$IFn$_invoke$arity$1 = check_box34239__1;
check_box34239.cljs$core$IFn$_invoke$arity$2 = check_box34239__2;
check_box34239.cljs$core$IFn$_invoke$arity$3 = check_box34239__3;
return check_box34239;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box34239);
/**
* Creates a radio button.
*/
sablono.core.radio_button34240 = (function() {
var radio_button34240 = null;
var radio_button34240__1 = (function (group){return radio_button34240.call(null,group,null);
});
var radio_button34240__2 = (function (group,checked_QMARK_){return radio_button34240.call(null,group,checked_QMARK_,"true");
});
var radio_button34240__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button34240 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button34240__1.call(this,group);
case 2:
return radio_button34240__2.call(this,group,checked_QMARK_);
case 3:
return radio_button34240__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button34240.cljs$core$IFn$_invoke$arity$1 = radio_button34240__1;
radio_button34240.cljs$core$IFn$_invoke$arity$2 = radio_button34240__2;
radio_button34240.cljs$core$IFn$_invoke$arity$3 = radio_button34240__3;
return radio_button34240;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button34240);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options34241 = (function() {
var select_options34241 = null;
var select_options34241__1 = (function (coll){return select_options34241.call(null,coll,null);
});
var select_options34241__2 = (function (coll,selected){var iter__4282__auto__ = (function iter__34250(s__34251){return (new cljs.core.LazySeq(null,(function (){var s__34251__$1 = s__34251;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34251__$1);if(temp__4126__auto__)
{var s__34251__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34251__$2))
{var c__4280__auto__ = cljs.core.chunk_first.call(null,s__34251__$2);var size__4281__auto__ = cljs.core.count.call(null,c__4280__auto__);var b__34253 = cljs.core.chunk_buffer.call(null,size__4281__auto__);if((function (){var i__34252 = 0;while(true){
if((i__34252 < size__4281__auto__))
{var x = cljs.core._nth.call(null,c__4280__auto__,i__34252);cljs.core.chunk_append.call(null,b__34253,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__34256 = x;var text = cljs.core.nth.call(null,vec__34256,0,null);var val = cljs.core.nth.call(null,vec__34256,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__34256,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options34241.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__34258 = (i__34252 + 1);
i__34252 = G__34258;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34253),iter__34250.call(null,cljs.core.chunk_rest.call(null,s__34251__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34253),null);
}
} else
{var x = cljs.core.first.call(null,s__34251__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__34257 = x;var text = cljs.core.nth.call(null,vec__34257,0,null);var val = cljs.core.nth.call(null,vec__34257,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__34257,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options34241.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__34250.call(null,cljs.core.rest.call(null,s__34251__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4282__auto__.call(null,coll);
});
select_options34241 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options34241__1.call(this,coll);
case 2:
return select_options34241__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options34241.cljs$core$IFn$_invoke$arity$1 = select_options34241__1;
select_options34241.cljs$core$IFn$_invoke$arity$2 = select_options34241__2;
return select_options34241;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options34241);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down34259 = (function() {
var drop_down34259 = null;
var drop_down34259__2 = (function (name,options){return drop_down34259.call(null,name,options,null);
});
var drop_down34259__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down34259 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down34259__2.call(this,name,options);
case 3:
return drop_down34259__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down34259.cljs$core$IFn$_invoke$arity$2 = drop_down34259__2;
drop_down34259.cljs$core$IFn$_invoke$arity$3 = drop_down34259__3;
return drop_down34259;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down34259);
/**
* Creates a text area element.
*/
sablono.core.text_area34260 = (function() {
var text_area34260 = null;
var text_area34260__1 = (function (name){return text_area34260.call(null,name,null);
});
var text_area34260__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area34260 = function(name,value){
switch(arguments.length){
case 1:
return text_area34260__1.call(this,name);
case 2:
return text_area34260__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area34260.cljs$core$IFn$_invoke$arity$1 = text_area34260__1;
text_area34260.cljs$core$IFn$_invoke$arity$2 = text_area34260__2;
return text_area34260;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area34260);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label34261 = (function label34261(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label34261);
/**
* Creates a submit button.
*/
sablono.core.submit_button34262 = (function submit_button34262(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button34262);
/**
* Creates a form reset button.
*/
sablono.core.reset_button34263 = (function reset_button34263(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button34263);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to34264 = (function() { 
var form_to34264__delegate = function (p__34265,body){var vec__34267 = p__34265;var method = cljs.core.nth.call(null,vec__34267,0,null);var action = cljs.core.nth.call(null,vec__34267,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to34264 = function (p__34265,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to34264__delegate.call(this,p__34265,body);};
form_to34264.cljs$lang$maxFixedArity = 1;
form_to34264.cljs$lang$applyTo = (function (arglist__34268){
var p__34265 = cljs.core.first(arglist__34268);
var body = cljs.core.rest(arglist__34268);
return form_to34264__delegate(p__34265,body);
});
form_to34264.cljs$core$IFn$_invoke$arity$variadic = form_to34264__delegate;
return form_to34264;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to34264);

//# sourceMappingURL=core.js.map