goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__37429,p__37430){
var map__37431 = p__37429;
var map__37431__$1 = (((((!((map__37431 == null))))?(((((map__37431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37431):map__37431);
var svc = map__37431__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37431__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37431__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37431__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37432 = p__37430;
var map__37432__$1 = (((((!((map__37432 == null))))?(((((map__37432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37432):map__37432);
var msg = map__37432__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37432__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37432__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37432__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37432__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__37459,p__37460){
var map__37462 = p__37459;
var map__37462__$1 = (((((!((map__37462 == null))))?(((((map__37462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37462):map__37462);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37462__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__37463 = p__37460;
var map__37463__$1 = (((((!((map__37463 == null))))?(((((map__37463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37463):map__37463);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37463__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__37473,p__37474){
var map__37475 = p__37473;
var map__37475__$1 = (((((!((map__37475 == null))))?(((((map__37475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37475):map__37475);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37475__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37475__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37476 = p__37474;
var map__37476__$1 = (((((!((map__37476 == null))))?(((((map__37476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37476):map__37476);
var msg = map__37476__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37476__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__37484,tid){
var map__37487 = p__37484;
var map__37487__$1 = (((((!((map__37487 == null))))?(((((map__37487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37487):map__37487);
var svc = map__37487__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37487__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__37495 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__37496 = null;
var count__37497 = (0);
var i__37498 = (0);
while(true){
if((i__37498 < count__37497)){
var vec__37512 = chunk__37496.cljs$core$IIndexed$_nth$arity$2(null,i__37498);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37512,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37512,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37545 = seq__37495;
var G__37546 = chunk__37496;
var G__37547 = count__37497;
var G__37548 = (i__37498 + (1));
seq__37495 = G__37545;
chunk__37496 = G__37546;
count__37497 = G__37547;
i__37498 = G__37548;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37495);
if(temp__5735__auto__){
var seq__37495__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37495__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37495__$1);
var G__37551 = cljs.core.chunk_rest(seq__37495__$1);
var G__37552 = c__4556__auto__;
var G__37553 = cljs.core.count(c__4556__auto__);
var G__37554 = (0);
seq__37495 = G__37551;
chunk__37496 = G__37552;
count__37497 = G__37553;
i__37498 = G__37554;
continue;
} else {
var vec__37516 = cljs.core.first(seq__37495__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37516,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37516,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37555 = cljs.core.next(seq__37495__$1);
var G__37556 = null;
var G__37557 = (0);
var G__37558 = (0);
seq__37495 = G__37555;
chunk__37496 = G__37556;
count__37497 = G__37557;
i__37498 = G__37558;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__37491_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__37491_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__37492_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__37492_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__37493_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__37493_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__37494_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__37494_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__37527){
var map__37529 = p__37527;
var map__37529__$1 = (((((!((map__37529 == null))))?(((((map__37529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37529):map__37529);
var svc = map__37529__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37529__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37529__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
