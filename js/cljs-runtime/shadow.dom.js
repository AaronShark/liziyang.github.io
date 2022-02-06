goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_37148 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_37148(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_37149 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_37149(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35914 = coll;
var G__35915 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35914,G__35915) : shadow.dom.lazy_native_coll_seq.call(null,G__35914,G__35915));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__35941 = arguments.length;
switch (G__35941) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35957 = arguments.length;
switch (G__35957) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35975 = arguments.length;
switch (G__35975) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35979 = arguments.length;
switch (G__35979) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__36011 = arguments.length;
switch (G__36011) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__36029 = arguments.length;
switch (G__36029) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e36041){if((e36041 instanceof Object)){
var e = e36041;
return console.log("didnt support attachEvent",el,e);
} else {
throw e36041;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__36056 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__36057 = null;
var count__36058 = (0);
var i__36059 = (0);
while(true){
if((i__36059 < count__36058)){
var el = chunk__36057.cljs$core$IIndexed$_nth$arity$2(null,i__36059);
var handler_37173__$1 = ((function (seq__36056,chunk__36057,count__36058,i__36059,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36056,chunk__36057,count__36058,i__36059,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37173__$1);


var G__37175 = seq__36056;
var G__37176 = chunk__36057;
var G__37177 = count__36058;
var G__37178 = (i__36059 + (1));
seq__36056 = G__37175;
chunk__36057 = G__37176;
count__36058 = G__37177;
i__36059 = G__37178;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36056);
if(temp__5735__auto__){
var seq__36056__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36056__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36056__$1);
var G__37180 = cljs.core.chunk_rest(seq__36056__$1);
var G__37181 = c__4556__auto__;
var G__37182 = cljs.core.count(c__4556__auto__);
var G__37183 = (0);
seq__36056 = G__37180;
chunk__36057 = G__37181;
count__36058 = G__37182;
i__36059 = G__37183;
continue;
} else {
var el = cljs.core.first(seq__36056__$1);
var handler_37184__$1 = ((function (seq__36056,chunk__36057,count__36058,i__36059,el,seq__36056__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36056,chunk__36057,count__36058,i__36059,el,seq__36056__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37184__$1);


var G__37186 = cljs.core.next(seq__36056__$1);
var G__37187 = null;
var G__37188 = (0);
var G__37189 = (0);
seq__36056 = G__37186;
chunk__36057 = G__37187;
count__36058 = G__37188;
i__36059 = G__37189;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__36075 = arguments.length;
switch (G__36075) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__36086 = cljs.core.seq(events);
var chunk__36087 = null;
var count__36088 = (0);
var i__36089 = (0);
while(true){
if((i__36089 < count__36088)){
var vec__36100 = chunk__36087.cljs$core$IIndexed$_nth$arity$2(null,i__36089);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36100,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36100,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37193 = seq__36086;
var G__37195 = chunk__36087;
var G__37196 = count__36088;
var G__37197 = (i__36089 + (1));
seq__36086 = G__37193;
chunk__36087 = G__37195;
count__36088 = G__37196;
i__36089 = G__37197;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36086);
if(temp__5735__auto__){
var seq__36086__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36086__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36086__$1);
var G__37200 = cljs.core.chunk_rest(seq__36086__$1);
var G__37201 = c__4556__auto__;
var G__37202 = cljs.core.count(c__4556__auto__);
var G__37203 = (0);
seq__36086 = G__37200;
chunk__36087 = G__37201;
count__36088 = G__37202;
i__36089 = G__37203;
continue;
} else {
var vec__36104 = cljs.core.first(seq__36086__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36104,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36104,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37204 = cljs.core.next(seq__36086__$1);
var G__37205 = null;
var G__37206 = (0);
var G__37207 = (0);
seq__36086 = G__37204;
chunk__36087 = G__37205;
count__36088 = G__37206;
i__36089 = G__37207;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__36108 = cljs.core.seq(styles);
var chunk__36109 = null;
var count__36110 = (0);
var i__36111 = (0);
while(true){
if((i__36111 < count__36110)){
var vec__36124 = chunk__36109.cljs$core$IIndexed$_nth$arity$2(null,i__36111);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36124,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36124,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37208 = seq__36108;
var G__37209 = chunk__36109;
var G__37210 = count__36110;
var G__37211 = (i__36111 + (1));
seq__36108 = G__37208;
chunk__36109 = G__37209;
count__36110 = G__37210;
i__36111 = G__37211;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36108);
if(temp__5735__auto__){
var seq__36108__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36108__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36108__$1);
var G__37217 = cljs.core.chunk_rest(seq__36108__$1);
var G__37218 = c__4556__auto__;
var G__37219 = cljs.core.count(c__4556__auto__);
var G__37220 = (0);
seq__36108 = G__37217;
chunk__36109 = G__37218;
count__36110 = G__37219;
i__36111 = G__37220;
continue;
} else {
var vec__36129 = cljs.core.first(seq__36108__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36129,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36129,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37221 = cljs.core.next(seq__36108__$1);
var G__37222 = null;
var G__37223 = (0);
var G__37224 = (0);
seq__36108 = G__37221;
chunk__36109 = G__37222;
count__36110 = G__37223;
i__36111 = G__37224;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__36140_37225 = key;
var G__36140_37226__$1 = (((G__36140_37225 instanceof cljs.core.Keyword))?G__36140_37225.fqn:null);
switch (G__36140_37226__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_37229 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_37229,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_37229,"aria-");
}
})())){
el.setAttribute(ks_37229,value);
} else {
(el[ks_37229] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__36257){
var map__36262 = p__36257;
var map__36262__$1 = (((((!((map__36262 == null))))?(((((map__36262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36262):map__36262);
var props = map__36262__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36262__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__36272 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36272,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36272,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36272,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__36276 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__36276,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__36276;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__36284 = arguments.length;
switch (G__36284) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__36288){
var vec__36289 = p__36288;
var seq__36290 = cljs.core.seq(vec__36289);
var first__36291 = cljs.core.first(seq__36290);
var seq__36290__$1 = cljs.core.next(seq__36290);
var nn = first__36291;
var first__36291__$1 = cljs.core.first(seq__36290__$1);
var seq__36290__$2 = cljs.core.next(seq__36290__$1);
var np = first__36291__$1;
var nc = seq__36290__$2;
var node = vec__36289;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36293 = nn;
var G__36294 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36293,G__36294) : create_fn.call(null,G__36293,G__36294));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36309 = nn;
var G__36310 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36309,G__36310) : create_fn.call(null,G__36309,G__36310));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__36316 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36316,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36316,(1),null);
var seq__36319_37249 = cljs.core.seq(node_children);
var chunk__36320_37250 = null;
var count__36321_37251 = (0);
var i__36322_37253 = (0);
while(true){
if((i__36322_37253 < count__36321_37251)){
var child_struct_37254 = chunk__36320_37250.cljs$core$IIndexed$_nth$arity$2(null,i__36322_37253);
var children_37256 = shadow.dom.dom_node(child_struct_37254);
if(cljs.core.seq_QMARK_(children_37256)){
var seq__36371_37257 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37256));
var chunk__36373_37258 = null;
var count__36374_37259 = (0);
var i__36375_37260 = (0);
while(true){
if((i__36375_37260 < count__36374_37259)){
var child_37261 = chunk__36373_37258.cljs$core$IIndexed$_nth$arity$2(null,i__36375_37260);
if(cljs.core.truth_(child_37261)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37261);


var G__37262 = seq__36371_37257;
var G__37263 = chunk__36373_37258;
var G__37264 = count__36374_37259;
var G__37265 = (i__36375_37260 + (1));
seq__36371_37257 = G__37262;
chunk__36373_37258 = G__37263;
count__36374_37259 = G__37264;
i__36375_37260 = G__37265;
continue;
} else {
var G__37266 = seq__36371_37257;
var G__37267 = chunk__36373_37258;
var G__37268 = count__36374_37259;
var G__37269 = (i__36375_37260 + (1));
seq__36371_37257 = G__37266;
chunk__36373_37258 = G__37267;
count__36374_37259 = G__37268;
i__36375_37260 = G__37269;
continue;
}
} else {
var temp__5735__auto___37270 = cljs.core.seq(seq__36371_37257);
if(temp__5735__auto___37270){
var seq__36371_37271__$1 = temp__5735__auto___37270;
if(cljs.core.chunked_seq_QMARK_(seq__36371_37271__$1)){
var c__4556__auto___37272 = cljs.core.chunk_first(seq__36371_37271__$1);
var G__37275 = cljs.core.chunk_rest(seq__36371_37271__$1);
var G__37276 = c__4556__auto___37272;
var G__37277 = cljs.core.count(c__4556__auto___37272);
var G__37278 = (0);
seq__36371_37257 = G__37275;
chunk__36373_37258 = G__37276;
count__36374_37259 = G__37277;
i__36375_37260 = G__37278;
continue;
} else {
var child_37281 = cljs.core.first(seq__36371_37271__$1);
if(cljs.core.truth_(child_37281)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37281);


var G__37282 = cljs.core.next(seq__36371_37271__$1);
var G__37283 = null;
var G__37284 = (0);
var G__37285 = (0);
seq__36371_37257 = G__37282;
chunk__36373_37258 = G__37283;
count__36374_37259 = G__37284;
i__36375_37260 = G__37285;
continue;
} else {
var G__37287 = cljs.core.next(seq__36371_37271__$1);
var G__37288 = null;
var G__37289 = (0);
var G__37290 = (0);
seq__36371_37257 = G__37287;
chunk__36373_37258 = G__37288;
count__36374_37259 = G__37289;
i__36375_37260 = G__37290;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37256);
}


var G__37291 = seq__36319_37249;
var G__37292 = chunk__36320_37250;
var G__37293 = count__36321_37251;
var G__37294 = (i__36322_37253 + (1));
seq__36319_37249 = G__37291;
chunk__36320_37250 = G__37292;
count__36321_37251 = G__37293;
i__36322_37253 = G__37294;
continue;
} else {
var temp__5735__auto___37295 = cljs.core.seq(seq__36319_37249);
if(temp__5735__auto___37295){
var seq__36319_37296__$1 = temp__5735__auto___37295;
if(cljs.core.chunked_seq_QMARK_(seq__36319_37296__$1)){
var c__4556__auto___37298 = cljs.core.chunk_first(seq__36319_37296__$1);
var G__37299 = cljs.core.chunk_rest(seq__36319_37296__$1);
var G__37300 = c__4556__auto___37298;
var G__37301 = cljs.core.count(c__4556__auto___37298);
var G__37302 = (0);
seq__36319_37249 = G__37299;
chunk__36320_37250 = G__37300;
count__36321_37251 = G__37301;
i__36322_37253 = G__37302;
continue;
} else {
var child_struct_37303 = cljs.core.first(seq__36319_37296__$1);
var children_37304 = shadow.dom.dom_node(child_struct_37303);
if(cljs.core.seq_QMARK_(children_37304)){
var seq__36381_37305 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37304));
var chunk__36383_37306 = null;
var count__36384_37307 = (0);
var i__36385_37308 = (0);
while(true){
if((i__36385_37308 < count__36384_37307)){
var child_37312 = chunk__36383_37306.cljs$core$IIndexed$_nth$arity$2(null,i__36385_37308);
if(cljs.core.truth_(child_37312)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37312);


var G__37313 = seq__36381_37305;
var G__37314 = chunk__36383_37306;
var G__37315 = count__36384_37307;
var G__37316 = (i__36385_37308 + (1));
seq__36381_37305 = G__37313;
chunk__36383_37306 = G__37314;
count__36384_37307 = G__37315;
i__36385_37308 = G__37316;
continue;
} else {
var G__37317 = seq__36381_37305;
var G__37318 = chunk__36383_37306;
var G__37319 = count__36384_37307;
var G__37320 = (i__36385_37308 + (1));
seq__36381_37305 = G__37317;
chunk__36383_37306 = G__37318;
count__36384_37307 = G__37319;
i__36385_37308 = G__37320;
continue;
}
} else {
var temp__5735__auto___37322__$1 = cljs.core.seq(seq__36381_37305);
if(temp__5735__auto___37322__$1){
var seq__36381_37323__$1 = temp__5735__auto___37322__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36381_37323__$1)){
var c__4556__auto___37324 = cljs.core.chunk_first(seq__36381_37323__$1);
var G__37325 = cljs.core.chunk_rest(seq__36381_37323__$1);
var G__37326 = c__4556__auto___37324;
var G__37327 = cljs.core.count(c__4556__auto___37324);
var G__37328 = (0);
seq__36381_37305 = G__37325;
chunk__36383_37306 = G__37326;
count__36384_37307 = G__37327;
i__36385_37308 = G__37328;
continue;
} else {
var child_37330 = cljs.core.first(seq__36381_37323__$1);
if(cljs.core.truth_(child_37330)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37330);


var G__37331 = cljs.core.next(seq__36381_37323__$1);
var G__37332 = null;
var G__37333 = (0);
var G__37334 = (0);
seq__36381_37305 = G__37331;
chunk__36383_37306 = G__37332;
count__36384_37307 = G__37333;
i__36385_37308 = G__37334;
continue;
} else {
var G__37335 = cljs.core.next(seq__36381_37323__$1);
var G__37336 = null;
var G__37337 = (0);
var G__37338 = (0);
seq__36381_37305 = G__37335;
chunk__36383_37306 = G__37336;
count__36384_37307 = G__37337;
i__36385_37308 = G__37338;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37304);
}


var G__37340 = cljs.core.next(seq__36319_37296__$1);
var G__37341 = null;
var G__37342 = (0);
var G__37343 = (0);
seq__36319_37249 = G__37340;
chunk__36320_37250 = G__37341;
count__36321_37251 = G__37342;
i__36322_37253 = G__37343;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__36415 = cljs.core.seq(node);
var chunk__36416 = null;
var count__36417 = (0);
var i__36418 = (0);
while(true){
if((i__36418 < count__36417)){
var n = chunk__36416.cljs$core$IIndexed$_nth$arity$2(null,i__36418);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37350 = seq__36415;
var G__37351 = chunk__36416;
var G__37352 = count__36417;
var G__37353 = (i__36418 + (1));
seq__36415 = G__37350;
chunk__36416 = G__37351;
count__36417 = G__37352;
i__36418 = G__37353;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36415);
if(temp__5735__auto__){
var seq__36415__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36415__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36415__$1);
var G__37356 = cljs.core.chunk_rest(seq__36415__$1);
var G__37357 = c__4556__auto__;
var G__37358 = cljs.core.count(c__4556__auto__);
var G__37359 = (0);
seq__36415 = G__37356;
chunk__36416 = G__37357;
count__36417 = G__37358;
i__36418 = G__37359;
continue;
} else {
var n = cljs.core.first(seq__36415__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37360 = cljs.core.next(seq__36415__$1);
var G__37361 = null;
var G__37362 = (0);
var G__37363 = (0);
seq__36415 = G__37360;
chunk__36416 = G__37361;
count__36417 = G__37362;
i__36418 = G__37363;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__36428 = arguments.length;
switch (G__36428) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__36440 = arguments.length;
switch (G__36440) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__36449 = arguments.length;
switch (G__36449) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37375 = arguments.length;
var i__4737__auto___37376 = (0);
while(true){
if((i__4737__auto___37376 < len__4736__auto___37375)){
args__4742__auto__.push((arguments[i__4737__auto___37376]));

var G__37377 = (i__4737__auto___37376 + (1));
i__4737__auto___37376 = G__37377;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__36473_37378 = cljs.core.seq(nodes);
var chunk__36474_37379 = null;
var count__36475_37380 = (0);
var i__36476_37381 = (0);
while(true){
if((i__36476_37381 < count__36475_37380)){
var node_37382 = chunk__36474_37379.cljs$core$IIndexed$_nth$arity$2(null,i__36476_37381);
fragment.appendChild(shadow.dom._to_dom(node_37382));


var G__37383 = seq__36473_37378;
var G__37384 = chunk__36474_37379;
var G__37385 = count__36475_37380;
var G__37386 = (i__36476_37381 + (1));
seq__36473_37378 = G__37383;
chunk__36474_37379 = G__37384;
count__36475_37380 = G__37385;
i__36476_37381 = G__37386;
continue;
} else {
var temp__5735__auto___37387 = cljs.core.seq(seq__36473_37378);
if(temp__5735__auto___37387){
var seq__36473_37388__$1 = temp__5735__auto___37387;
if(cljs.core.chunked_seq_QMARK_(seq__36473_37388__$1)){
var c__4556__auto___37389 = cljs.core.chunk_first(seq__36473_37388__$1);
var G__37390 = cljs.core.chunk_rest(seq__36473_37388__$1);
var G__37391 = c__4556__auto___37389;
var G__37392 = cljs.core.count(c__4556__auto___37389);
var G__37393 = (0);
seq__36473_37378 = G__37390;
chunk__36474_37379 = G__37391;
count__36475_37380 = G__37392;
i__36476_37381 = G__37393;
continue;
} else {
var node_37394 = cljs.core.first(seq__36473_37388__$1);
fragment.appendChild(shadow.dom._to_dom(node_37394));


var G__37395 = cljs.core.next(seq__36473_37388__$1);
var G__37396 = null;
var G__37397 = (0);
var G__37398 = (0);
seq__36473_37378 = G__37395;
chunk__36474_37379 = G__37396;
count__36475_37380 = G__37397;
i__36476_37381 = G__37398;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq36466){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36466));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__36496_37401 = cljs.core.seq(scripts);
var chunk__36497_37402 = null;
var count__36498_37403 = (0);
var i__36499_37404 = (0);
while(true){
if((i__36499_37404 < count__36498_37403)){
var vec__36519_37405 = chunk__36497_37402.cljs$core$IIndexed$_nth$arity$2(null,i__36499_37404);
var script_tag_37406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36519_37405,(0),null);
var script_body_37407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36519_37405,(1),null);
eval(script_body_37407);


var G__37409 = seq__36496_37401;
var G__37410 = chunk__36497_37402;
var G__37411 = count__36498_37403;
var G__37412 = (i__36499_37404 + (1));
seq__36496_37401 = G__37409;
chunk__36497_37402 = G__37410;
count__36498_37403 = G__37411;
i__36499_37404 = G__37412;
continue;
} else {
var temp__5735__auto___37413 = cljs.core.seq(seq__36496_37401);
if(temp__5735__auto___37413){
var seq__36496_37414__$1 = temp__5735__auto___37413;
if(cljs.core.chunked_seq_QMARK_(seq__36496_37414__$1)){
var c__4556__auto___37415 = cljs.core.chunk_first(seq__36496_37414__$1);
var G__37416 = cljs.core.chunk_rest(seq__36496_37414__$1);
var G__37417 = c__4556__auto___37415;
var G__37418 = cljs.core.count(c__4556__auto___37415);
var G__37419 = (0);
seq__36496_37401 = G__37416;
chunk__36497_37402 = G__37417;
count__36498_37403 = G__37418;
i__36499_37404 = G__37419;
continue;
} else {
var vec__36529_37420 = cljs.core.first(seq__36496_37414__$1);
var script_tag_37421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36529_37420,(0),null);
var script_body_37422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36529_37420,(1),null);
eval(script_body_37422);


var G__37423 = cljs.core.next(seq__36496_37414__$1);
var G__37424 = null;
var G__37425 = (0);
var G__37426 = (0);
seq__36496_37401 = G__37423;
chunk__36497_37402 = G__37424;
count__36498_37403 = G__37425;
i__36499_37404 = G__37426;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__36532){
var vec__36534 = p__36532;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36534,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36534,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__36561 = arguments.length;
switch (G__36561) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__36610 = cljs.core.seq(style_keys);
var chunk__36611 = null;
var count__36612 = (0);
var i__36613 = (0);
while(true){
if((i__36613 < count__36612)){
var it = chunk__36611.cljs$core$IIndexed$_nth$arity$2(null,i__36613);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37442 = seq__36610;
var G__37443 = chunk__36611;
var G__37444 = count__36612;
var G__37445 = (i__36613 + (1));
seq__36610 = G__37442;
chunk__36611 = G__37443;
count__36612 = G__37444;
i__36613 = G__37445;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36610);
if(temp__5735__auto__){
var seq__36610__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36610__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36610__$1);
var G__37451 = cljs.core.chunk_rest(seq__36610__$1);
var G__37452 = c__4556__auto__;
var G__37453 = cljs.core.count(c__4556__auto__);
var G__37454 = (0);
seq__36610 = G__37451;
chunk__36611 = G__37452;
count__36612 = G__37453;
i__36613 = G__37454;
continue;
} else {
var it = cljs.core.first(seq__36610__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37455 = cljs.core.next(seq__36610__$1);
var G__37456 = null;
var G__37457 = (0);
var G__37458 = (0);
seq__36610 = G__37455;
chunk__36611 = G__37456;
count__36612 = G__37457;
i__36613 = G__37458;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k36647,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__36688 = k36647;
var G__36688__$1 = (((G__36688 instanceof cljs.core.Keyword))?G__36688.fqn:null);
switch (G__36688__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36647,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__36690){
var vec__36692 = p__36690;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36692,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36692,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36646){
var self__ = this;
var G__36646__$1 = this;
return (new cljs.core.RecordIter((0),G__36646__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36648,other36649){
var self__ = this;
var this36648__$1 = this;
return (((!((other36649 == null)))) && ((this36648__$1.constructor === other36649.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36648__$1.x,other36649.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36648__$1.y,other36649.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36648__$1.__extmap,other36649.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__36646){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__36739 = cljs.core.keyword_identical_QMARK_;
var expr__36740 = k__4388__auto__;
if(cljs.core.truth_((pred__36739.cljs$core$IFn$_invoke$arity$2 ? pred__36739.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__36740) : pred__36739.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__36740)))){
return (new shadow.dom.Coordinate(G__36646,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36739.cljs$core$IFn$_invoke$arity$2 ? pred__36739.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__36740) : pred__36739.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__36740)))){
return (new shadow.dom.Coordinate(self__.x,G__36646,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__36646),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__36646){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__36646,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__36661){
var extmap__4419__auto__ = (function (){var G__36769 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36661,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__36661)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36769);
} else {
return G__36769;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__36661),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__36661),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k36785,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__36800 = k36785;
var G__36800__$1 = (((G__36800 instanceof cljs.core.Keyword))?G__36800.fqn:null);
switch (G__36800__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36785,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__36806){
var vec__36807 = p__36806;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36807,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36807,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36784){
var self__ = this;
var G__36784__$1 = this;
return (new cljs.core.RecordIter((0),G__36784__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36786,other36787){
var self__ = this;
var this36786__$1 = this;
return (((!((other36787 == null)))) && ((this36786__$1.constructor === other36787.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36786__$1.w,other36787.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36786__$1.h,other36787.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36786__$1.__extmap,other36787.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__36784){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__36861 = cljs.core.keyword_identical_QMARK_;
var expr__36862 = k__4388__auto__;
if(cljs.core.truth_((pred__36861.cljs$core$IFn$_invoke$arity$2 ? pred__36861.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__36862) : pred__36861.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__36862)))){
return (new shadow.dom.Size(G__36784,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36861.cljs$core$IFn$_invoke$arity$2 ? pred__36861.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__36862) : pred__36861.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__36862)))){
return (new shadow.dom.Size(self__.w,G__36784,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__36784),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__36784){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__36784,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__36789){
var extmap__4419__auto__ = (function (){var G__36874 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36789,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__36789)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36874);
} else {
return G__36874;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__36789),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__36789),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__37538 = (i + (1));
var G__37539 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__37538;
ret = G__37539;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36971){
var vec__36972 = p__36971;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36972,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36972,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36977 = arguments.length;
switch (G__36977) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__37549 = ps;
var G__37550 = (i + (1));
el__$1 = G__37549;
i = G__37550;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__37000 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37000,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37000,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37000,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37004_37562 = cljs.core.seq(props);
var chunk__37005_37563 = null;
var count__37006_37564 = (0);
var i__37007_37565 = (0);
while(true){
if((i__37007_37565 < count__37006_37564)){
var vec__37020_37566 = chunk__37005_37563.cljs$core$IIndexed$_nth$arity$2(null,i__37007_37565);
var k_37567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37020_37566,(0),null);
var v_37568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37020_37566,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_37567);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37567),v_37568);


var G__37569 = seq__37004_37562;
var G__37570 = chunk__37005_37563;
var G__37571 = count__37006_37564;
var G__37572 = (i__37007_37565 + (1));
seq__37004_37562 = G__37569;
chunk__37005_37563 = G__37570;
count__37006_37564 = G__37571;
i__37007_37565 = G__37572;
continue;
} else {
var temp__5735__auto___37573 = cljs.core.seq(seq__37004_37562);
if(temp__5735__auto___37573){
var seq__37004_37574__$1 = temp__5735__auto___37573;
if(cljs.core.chunked_seq_QMARK_(seq__37004_37574__$1)){
var c__4556__auto___37575 = cljs.core.chunk_first(seq__37004_37574__$1);
var G__37576 = cljs.core.chunk_rest(seq__37004_37574__$1);
var G__37577 = c__4556__auto___37575;
var G__37578 = cljs.core.count(c__4556__auto___37575);
var G__37579 = (0);
seq__37004_37562 = G__37576;
chunk__37005_37563 = G__37577;
count__37006_37564 = G__37578;
i__37007_37565 = G__37579;
continue;
} else {
var vec__37024_37583 = cljs.core.first(seq__37004_37574__$1);
var k_37584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37024_37583,(0),null);
var v_37585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37024_37583,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_37584);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37584),v_37585);


var G__37586 = cljs.core.next(seq__37004_37574__$1);
var G__37587 = null;
var G__37588 = (0);
var G__37589 = (0);
seq__37004_37562 = G__37586;
chunk__37005_37563 = G__37587;
count__37006_37564 = G__37588;
i__37007_37565 = G__37589;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__37033 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37033,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37033,(1),null);
var seq__37036_37590 = cljs.core.seq(node_children);
var chunk__37038_37591 = null;
var count__37039_37592 = (0);
var i__37040_37593 = (0);
while(true){
if((i__37040_37593 < count__37039_37592)){
var child_struct_37594 = chunk__37038_37591.cljs$core$IIndexed$_nth$arity$2(null,i__37040_37593);
if((!((child_struct_37594 == null)))){
if(typeof child_struct_37594 === 'string'){
var text_37595 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37595),child_struct_37594].join(''));
} else {
var children_37596 = shadow.dom.svg_node(child_struct_37594);
if(cljs.core.seq_QMARK_(children_37596)){
var seq__37071_37597 = cljs.core.seq(children_37596);
var chunk__37073_37598 = null;
var count__37074_37599 = (0);
var i__37075_37600 = (0);
while(true){
if((i__37075_37600 < count__37074_37599)){
var child_37601 = chunk__37073_37598.cljs$core$IIndexed$_nth$arity$2(null,i__37075_37600);
if(cljs.core.truth_(child_37601)){
node.appendChild(child_37601);


var G__37602 = seq__37071_37597;
var G__37603 = chunk__37073_37598;
var G__37604 = count__37074_37599;
var G__37605 = (i__37075_37600 + (1));
seq__37071_37597 = G__37602;
chunk__37073_37598 = G__37603;
count__37074_37599 = G__37604;
i__37075_37600 = G__37605;
continue;
} else {
var G__37606 = seq__37071_37597;
var G__37607 = chunk__37073_37598;
var G__37608 = count__37074_37599;
var G__37609 = (i__37075_37600 + (1));
seq__37071_37597 = G__37606;
chunk__37073_37598 = G__37607;
count__37074_37599 = G__37608;
i__37075_37600 = G__37609;
continue;
}
} else {
var temp__5735__auto___37610 = cljs.core.seq(seq__37071_37597);
if(temp__5735__auto___37610){
var seq__37071_37611__$1 = temp__5735__auto___37610;
if(cljs.core.chunked_seq_QMARK_(seq__37071_37611__$1)){
var c__4556__auto___37612 = cljs.core.chunk_first(seq__37071_37611__$1);
var G__37613 = cljs.core.chunk_rest(seq__37071_37611__$1);
var G__37614 = c__4556__auto___37612;
var G__37615 = cljs.core.count(c__4556__auto___37612);
var G__37616 = (0);
seq__37071_37597 = G__37613;
chunk__37073_37598 = G__37614;
count__37074_37599 = G__37615;
i__37075_37600 = G__37616;
continue;
} else {
var child_37617 = cljs.core.first(seq__37071_37611__$1);
if(cljs.core.truth_(child_37617)){
node.appendChild(child_37617);


var G__37618 = cljs.core.next(seq__37071_37611__$1);
var G__37619 = null;
var G__37620 = (0);
var G__37621 = (0);
seq__37071_37597 = G__37618;
chunk__37073_37598 = G__37619;
count__37074_37599 = G__37620;
i__37075_37600 = G__37621;
continue;
} else {
var G__37622 = cljs.core.next(seq__37071_37611__$1);
var G__37623 = null;
var G__37624 = (0);
var G__37625 = (0);
seq__37071_37597 = G__37622;
chunk__37073_37598 = G__37623;
count__37074_37599 = G__37624;
i__37075_37600 = G__37625;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37596);
}
}


var G__37626 = seq__37036_37590;
var G__37627 = chunk__37038_37591;
var G__37628 = count__37039_37592;
var G__37629 = (i__37040_37593 + (1));
seq__37036_37590 = G__37626;
chunk__37038_37591 = G__37627;
count__37039_37592 = G__37628;
i__37040_37593 = G__37629;
continue;
} else {
var G__37630 = seq__37036_37590;
var G__37631 = chunk__37038_37591;
var G__37632 = count__37039_37592;
var G__37633 = (i__37040_37593 + (1));
seq__37036_37590 = G__37630;
chunk__37038_37591 = G__37631;
count__37039_37592 = G__37632;
i__37040_37593 = G__37633;
continue;
}
} else {
var temp__5735__auto___37634 = cljs.core.seq(seq__37036_37590);
if(temp__5735__auto___37634){
var seq__37036_37635__$1 = temp__5735__auto___37634;
if(cljs.core.chunked_seq_QMARK_(seq__37036_37635__$1)){
var c__4556__auto___37636 = cljs.core.chunk_first(seq__37036_37635__$1);
var G__37637 = cljs.core.chunk_rest(seq__37036_37635__$1);
var G__37638 = c__4556__auto___37636;
var G__37639 = cljs.core.count(c__4556__auto___37636);
var G__37640 = (0);
seq__37036_37590 = G__37637;
chunk__37038_37591 = G__37638;
count__37039_37592 = G__37639;
i__37040_37593 = G__37640;
continue;
} else {
var child_struct_37641 = cljs.core.first(seq__37036_37635__$1);
if((!((child_struct_37641 == null)))){
if(typeof child_struct_37641 === 'string'){
var text_37642 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37642),child_struct_37641].join(''));
} else {
var children_37643 = shadow.dom.svg_node(child_struct_37641);
if(cljs.core.seq_QMARK_(children_37643)){
var seq__37084_37644 = cljs.core.seq(children_37643);
var chunk__37086_37645 = null;
var count__37087_37646 = (0);
var i__37088_37647 = (0);
while(true){
if((i__37088_37647 < count__37087_37646)){
var child_37648 = chunk__37086_37645.cljs$core$IIndexed$_nth$arity$2(null,i__37088_37647);
if(cljs.core.truth_(child_37648)){
node.appendChild(child_37648);


var G__37652 = seq__37084_37644;
var G__37653 = chunk__37086_37645;
var G__37654 = count__37087_37646;
var G__37655 = (i__37088_37647 + (1));
seq__37084_37644 = G__37652;
chunk__37086_37645 = G__37653;
count__37087_37646 = G__37654;
i__37088_37647 = G__37655;
continue;
} else {
var G__37656 = seq__37084_37644;
var G__37657 = chunk__37086_37645;
var G__37658 = count__37087_37646;
var G__37659 = (i__37088_37647 + (1));
seq__37084_37644 = G__37656;
chunk__37086_37645 = G__37657;
count__37087_37646 = G__37658;
i__37088_37647 = G__37659;
continue;
}
} else {
var temp__5735__auto___37660__$1 = cljs.core.seq(seq__37084_37644);
if(temp__5735__auto___37660__$1){
var seq__37084_37661__$1 = temp__5735__auto___37660__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37084_37661__$1)){
var c__4556__auto___37662 = cljs.core.chunk_first(seq__37084_37661__$1);
var G__37663 = cljs.core.chunk_rest(seq__37084_37661__$1);
var G__37664 = c__4556__auto___37662;
var G__37665 = cljs.core.count(c__4556__auto___37662);
var G__37666 = (0);
seq__37084_37644 = G__37663;
chunk__37086_37645 = G__37664;
count__37087_37646 = G__37665;
i__37088_37647 = G__37666;
continue;
} else {
var child_37667 = cljs.core.first(seq__37084_37661__$1);
if(cljs.core.truth_(child_37667)){
node.appendChild(child_37667);


var G__37668 = cljs.core.next(seq__37084_37661__$1);
var G__37669 = null;
var G__37670 = (0);
var G__37671 = (0);
seq__37084_37644 = G__37668;
chunk__37086_37645 = G__37669;
count__37087_37646 = G__37670;
i__37088_37647 = G__37671;
continue;
} else {
var G__37672 = cljs.core.next(seq__37084_37661__$1);
var G__37673 = null;
var G__37674 = (0);
var G__37675 = (0);
seq__37084_37644 = G__37672;
chunk__37086_37645 = G__37673;
count__37087_37646 = G__37674;
i__37088_37647 = G__37675;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37643);
}
}


var G__37676 = cljs.core.next(seq__37036_37635__$1);
var G__37677 = null;
var G__37678 = (0);
var G__37679 = (0);
seq__37036_37590 = G__37676;
chunk__37038_37591 = G__37677;
count__37039_37592 = G__37678;
i__37040_37593 = G__37679;
continue;
} else {
var G__37680 = cljs.core.next(seq__37036_37635__$1);
var G__37681 = null;
var G__37682 = (0);
var G__37683 = (0);
seq__37036_37590 = G__37680;
chunk__37038_37591 = G__37681;
count__37039_37592 = G__37682;
i__37040_37593 = G__37683;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37686 = arguments.length;
var i__4737__auto___37687 = (0);
while(true){
if((i__4737__auto___37687 < len__4736__auto___37686)){
args__4742__auto__.push((arguments[i__4737__auto___37687]));

var G__37689 = (i__4737__auto___37687 + (1));
i__4737__auto___37687 = G__37689;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37109){
var G__37110 = cljs.core.first(seq37109);
var seq37109__$1 = cljs.core.next(seq37109);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37110,seq37109__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__37117 = arguments.length;
switch (G__37117) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__33321__auto___37697 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33322__auto__ = (function (){var switch__32924__auto__ = (function (state_37137){
var state_val_37138 = (state_37137[(1)]);
if((state_val_37138 === (1))){
var state_37137__$1 = state_37137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37137__$1,(2),once_or_cleanup);
} else {
if((state_val_37138 === (2))){
var inst_37131 = (state_37137[(2)]);
var inst_37132 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37137__$1 = (function (){var statearr_37139 = state_37137;
(statearr_37139[(7)] = inst_37131);

return statearr_37139;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37137__$1,inst_37132);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32925__auto__ = null;
var shadow$dom$state_machine__32925__auto____0 = (function (){
var statearr_37140 = [null,null,null,null,null,null,null,null];
(statearr_37140[(0)] = shadow$dom$state_machine__32925__auto__);

(statearr_37140[(1)] = (1));

return statearr_37140;
});
var shadow$dom$state_machine__32925__auto____1 = (function (state_37137){
while(true){
var ret_value__32926__auto__ = (function (){try{while(true){
var result__32927__auto__ = switch__32924__auto__(state_37137);
if(cljs.core.keyword_identical_QMARK_(result__32927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32927__auto__;
}
break;
}
}catch (e37141){var ex__32928__auto__ = e37141;
var statearr_37142_37702 = state_37137;
(statearr_37142_37702[(2)] = ex__32928__auto__);


if(cljs.core.seq((state_37137[(4)]))){
var statearr_37143_37703 = state_37137;
(statearr_37143_37703[(1)] = cljs.core.first((state_37137[(4)])));

} else {
throw ex__32928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37704 = state_37137;
state_37137 = G__37704;
continue;
} else {
return ret_value__32926__auto__;
}
break;
}
});
shadow$dom$state_machine__32925__auto__ = function(state_37137){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32925__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32925__auto____1.call(this,state_37137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32925__auto____0;
shadow$dom$state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32925__auto____1;
return shadow$dom$state_machine__32925__auto__;
})()
})();
var state__33323__auto__ = (function (){var statearr_37144 = f__33322__auto__();
(statearr_37144[(6)] = c__33321__auto___37697);

return statearr_37144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33323__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
