goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39174 = arguments.length;
var i__4737__auto___39175 = (0);
while(true){
if((i__4737__auto___39175 < len__4736__auto___39174)){
args__4742__auto__.push((arguments[i__4737__auto___39175]));

var G__39176 = (i__4737__auto___39175 + (1));
i__4737__auto___39175 = G__39176;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38894){
var G__38896 = cljs.core.first(seq38894);
var seq38894__$1 = cljs.core.next(seq38894);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38896,seq38894__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38901 = cljs.core.seq(sources);
var chunk__38902 = null;
var count__38903 = (0);
var i__38904 = (0);
while(true){
if((i__38904 < count__38903)){
var map__38916 = chunk__38902.cljs$core$IIndexed$_nth$arity$2(null,i__38904);
var map__38916__$1 = (((((!((map__38916 == null))))?(((((map__38916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38916):map__38916);
var src = map__38916__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38916__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38916__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38916__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38916__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38918){var e_39177 = e38918;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39177);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39177.message)].join('')));
}

var G__39178 = seq__38901;
var G__39179 = chunk__38902;
var G__39180 = count__38903;
var G__39181 = (i__38904 + (1));
seq__38901 = G__39178;
chunk__38902 = G__39179;
count__38903 = G__39180;
i__38904 = G__39181;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38901);
if(temp__5735__auto__){
var seq__38901__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38901__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38901__$1);
var G__39182 = cljs.core.chunk_rest(seq__38901__$1);
var G__39183 = c__4556__auto__;
var G__39184 = cljs.core.count(c__4556__auto__);
var G__39185 = (0);
seq__38901 = G__39182;
chunk__38902 = G__39183;
count__38903 = G__39184;
i__38904 = G__39185;
continue;
} else {
var map__38919 = cljs.core.first(seq__38901__$1);
var map__38919__$1 = (((((!((map__38919 == null))))?(((((map__38919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38919):map__38919);
var src = map__38919__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38919__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38919__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38919__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38919__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38921){var e_39186 = e38921;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39186);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39186.message)].join('')));
}

var G__39187 = cljs.core.next(seq__38901__$1);
var G__39188 = null;
var G__39189 = (0);
var G__39190 = (0);
seq__38901 = G__39187;
chunk__38902 = G__39188;
count__38903 = G__39189;
i__38904 = G__39190;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__38922 = cljs.core.seq(js_requires);
var chunk__38923 = null;
var count__38924 = (0);
var i__38925 = (0);
while(true){
if((i__38925 < count__38924)){
var js_ns = chunk__38923.cljs$core$IIndexed$_nth$arity$2(null,i__38925);
var require_str_39194 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39194);


var G__39195 = seq__38922;
var G__39196 = chunk__38923;
var G__39197 = count__38924;
var G__39198 = (i__38925 + (1));
seq__38922 = G__39195;
chunk__38923 = G__39196;
count__38924 = G__39197;
i__38925 = G__39198;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38922);
if(temp__5735__auto__){
var seq__38922__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38922__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38922__$1);
var G__39202 = cljs.core.chunk_rest(seq__38922__$1);
var G__39203 = c__4556__auto__;
var G__39204 = cljs.core.count(c__4556__auto__);
var G__39205 = (0);
seq__38922 = G__39202;
chunk__38923 = G__39203;
count__38924 = G__39204;
i__38925 = G__39205;
continue;
} else {
var js_ns = cljs.core.first(seq__38922__$1);
var require_str_39206 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39206);


var G__39207 = cljs.core.next(seq__38922__$1);
var G__39208 = null;
var G__39209 = (0);
var G__39210 = (0);
seq__38922 = G__39207;
chunk__38923 = G__39208;
count__38924 = G__39209;
i__38925 = G__39210;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__38933){
var map__38934 = p__38933;
var map__38934__$1 = (((((!((map__38934 == null))))?(((((map__38934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38934):map__38934);
var msg = map__38934__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38934__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38934__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38936(s__38937){
return (new cljs.core.LazySeq(null,(function (){
var s__38937__$1 = s__38937;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38937__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__38942 = cljs.core.first(xs__6292__auto__);
var map__38942__$1 = (((((!((map__38942 == null))))?(((((map__38942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38942):map__38942);
var src = map__38942__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38942__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38942__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__38937__$1,map__38942,map__38942__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38934,map__38934__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38936_$_iter__38938(s__38939){
return (new cljs.core.LazySeq(null,((function (s__38937__$1,map__38942,map__38942__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38934,map__38934__$1,msg,info,reload_info){
return (function (){
var s__38939__$1 = s__38939;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38939__$1);
if(temp__5735__auto____$1){
var s__38939__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38939__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__38939__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__38941 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__38940 = (0);
while(true){
if((i__38940 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__38940);
cljs.core.chunk_append(b__38941,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39212 = (i__38940 + (1));
i__38940 = G__39212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38941),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38936_$_iter__38938(cljs.core.chunk_rest(s__38939__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38941),null);
}
} else {
var warning = cljs.core.first(s__38939__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38936_$_iter__38938(cljs.core.rest(s__38939__$2)));
}
} else {
return null;
}
break;
}
});})(s__38937__$1,map__38942,map__38942__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38934,map__38934__$1,msg,info,reload_info))
,null,null));
});})(s__38937__$1,map__38942,map__38942__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38934,map__38934__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38936(cljs.core.rest(s__38937__$1)));
} else {
var G__39213 = cljs.core.rest(s__38937__$1);
s__38937__$1 = G__39213;
continue;
}
} else {
var G__39214 = cljs.core.rest(s__38937__$1);
s__38937__$1 = G__39214;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__38954_39215 = cljs.core.seq(warnings);
var chunk__38955_39216 = null;
var count__38956_39217 = (0);
var i__38957_39218 = (0);
while(true){
if((i__38957_39218 < count__38956_39217)){
var map__39004_39219 = chunk__38955_39216.cljs$core$IIndexed$_nth$arity$2(null,i__38957_39218);
var map__39004_39220__$1 = (((((!((map__39004_39219 == null))))?(((((map__39004_39219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39004_39219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39004_39219):map__39004_39219);
var w_39221 = map__39004_39220__$1;
var msg_39222__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39004_39220__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39004_39220__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39004_39220__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39004_39220__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39225)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39223),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39224),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39222__$1)].join(''));


var G__39227 = seq__38954_39215;
var G__39228 = chunk__38955_39216;
var G__39229 = count__38956_39217;
var G__39230 = (i__38957_39218 + (1));
seq__38954_39215 = G__39227;
chunk__38955_39216 = G__39228;
count__38956_39217 = G__39229;
i__38957_39218 = G__39230;
continue;
} else {
var temp__5735__auto___39231 = cljs.core.seq(seq__38954_39215);
if(temp__5735__auto___39231){
var seq__38954_39232__$1 = temp__5735__auto___39231;
if(cljs.core.chunked_seq_QMARK_(seq__38954_39232__$1)){
var c__4556__auto___39233 = cljs.core.chunk_first(seq__38954_39232__$1);
var G__39234 = cljs.core.chunk_rest(seq__38954_39232__$1);
var G__39235 = c__4556__auto___39233;
var G__39236 = cljs.core.count(c__4556__auto___39233);
var G__39237 = (0);
seq__38954_39215 = G__39234;
chunk__38955_39216 = G__39235;
count__38956_39217 = G__39236;
i__38957_39218 = G__39237;
continue;
} else {
var map__39012_39238 = cljs.core.first(seq__38954_39232__$1);
var map__39012_39239__$1 = (((((!((map__39012_39238 == null))))?(((((map__39012_39238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39012_39238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39012_39238):map__39012_39238);
var w_39240 = map__39012_39239__$1;
var msg_39241__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39012_39239__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39012_39239__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39012_39239__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39012_39239__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39244)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39242),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39243),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39241__$1)].join(''));


var G__39245 = cljs.core.next(seq__38954_39232__$1);
var G__39246 = null;
var G__39247 = (0);
var G__39248 = (0);
seq__38954_39215 = G__39245;
chunk__38955_39216 = G__39246;
count__38956_39217 = G__39247;
i__38957_39218 = G__39248;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__38932_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38932_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__39050){
var map__39052 = p__39050;
var map__39052__$1 = (((((!((map__39052 == null))))?(((((map__39052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39052):map__39052);
var msg = map__39052__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39052__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__39054 = cljs.core.seq(updates);
var chunk__39057 = null;
var count__39058 = (0);
var i__39059 = (0);
while(true){
if((i__39059 < count__39058)){
var path = chunk__39057.cljs$core$IIndexed$_nth$arity$2(null,i__39059);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39090_39249 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39094_39250 = null;
var count__39095_39251 = (0);
var i__39096_39252 = (0);
while(true){
if((i__39096_39252 < count__39095_39251)){
var node_39253 = chunk__39094_39250.cljs$core$IIndexed$_nth$arity$2(null,i__39096_39252);
if(cljs.core.not(node_39253.shadow$old)){
var path_match_39254 = shadow.cljs.devtools.client.browser.match_paths(node_39253.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39254)){
var new_link_39255 = (function (){var G__39102 = node_39253.cloneNode(true);
G__39102.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39254),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39102;
})();
(node_39253.shadow$old = true);

(new_link_39255.onload = ((function (seq__39090_39249,chunk__39094_39250,count__39095_39251,i__39096_39252,seq__39054,chunk__39057,count__39058,i__39059,new_link_39255,path_match_39254,node_39253,path,map__39052,map__39052__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39253);
});})(seq__39090_39249,chunk__39094_39250,count__39095_39251,i__39096_39252,seq__39054,chunk__39057,count__39058,i__39059,new_link_39255,path_match_39254,node_39253,path,map__39052,map__39052__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39254], 0));

goog.dom.insertSiblingAfter(new_link_39255,node_39253);


var G__39257 = seq__39090_39249;
var G__39258 = chunk__39094_39250;
var G__39259 = count__39095_39251;
var G__39260 = (i__39096_39252 + (1));
seq__39090_39249 = G__39257;
chunk__39094_39250 = G__39258;
count__39095_39251 = G__39259;
i__39096_39252 = G__39260;
continue;
} else {
var G__39261 = seq__39090_39249;
var G__39262 = chunk__39094_39250;
var G__39263 = count__39095_39251;
var G__39264 = (i__39096_39252 + (1));
seq__39090_39249 = G__39261;
chunk__39094_39250 = G__39262;
count__39095_39251 = G__39263;
i__39096_39252 = G__39264;
continue;
}
} else {
var G__39265 = seq__39090_39249;
var G__39266 = chunk__39094_39250;
var G__39267 = count__39095_39251;
var G__39268 = (i__39096_39252 + (1));
seq__39090_39249 = G__39265;
chunk__39094_39250 = G__39266;
count__39095_39251 = G__39267;
i__39096_39252 = G__39268;
continue;
}
} else {
var temp__5735__auto___39269 = cljs.core.seq(seq__39090_39249);
if(temp__5735__auto___39269){
var seq__39090_39270__$1 = temp__5735__auto___39269;
if(cljs.core.chunked_seq_QMARK_(seq__39090_39270__$1)){
var c__4556__auto___39271 = cljs.core.chunk_first(seq__39090_39270__$1);
var G__39272 = cljs.core.chunk_rest(seq__39090_39270__$1);
var G__39273 = c__4556__auto___39271;
var G__39274 = cljs.core.count(c__4556__auto___39271);
var G__39275 = (0);
seq__39090_39249 = G__39272;
chunk__39094_39250 = G__39273;
count__39095_39251 = G__39274;
i__39096_39252 = G__39275;
continue;
} else {
var node_39276 = cljs.core.first(seq__39090_39270__$1);
if(cljs.core.not(node_39276.shadow$old)){
var path_match_39277 = shadow.cljs.devtools.client.browser.match_paths(node_39276.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39277)){
var new_link_39278 = (function (){var G__39105 = node_39276.cloneNode(true);
G__39105.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39277),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39105;
})();
(node_39276.shadow$old = true);

(new_link_39278.onload = ((function (seq__39090_39249,chunk__39094_39250,count__39095_39251,i__39096_39252,seq__39054,chunk__39057,count__39058,i__39059,new_link_39278,path_match_39277,node_39276,seq__39090_39270__$1,temp__5735__auto___39269,path,map__39052,map__39052__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39276);
});})(seq__39090_39249,chunk__39094_39250,count__39095_39251,i__39096_39252,seq__39054,chunk__39057,count__39058,i__39059,new_link_39278,path_match_39277,node_39276,seq__39090_39270__$1,temp__5735__auto___39269,path,map__39052,map__39052__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39277], 0));

goog.dom.insertSiblingAfter(new_link_39278,node_39276);


var G__39279 = cljs.core.next(seq__39090_39270__$1);
var G__39280 = null;
var G__39281 = (0);
var G__39282 = (0);
seq__39090_39249 = G__39279;
chunk__39094_39250 = G__39280;
count__39095_39251 = G__39281;
i__39096_39252 = G__39282;
continue;
} else {
var G__39283 = cljs.core.next(seq__39090_39270__$1);
var G__39284 = null;
var G__39285 = (0);
var G__39286 = (0);
seq__39090_39249 = G__39283;
chunk__39094_39250 = G__39284;
count__39095_39251 = G__39285;
i__39096_39252 = G__39286;
continue;
}
} else {
var G__39287 = cljs.core.next(seq__39090_39270__$1);
var G__39288 = null;
var G__39289 = (0);
var G__39290 = (0);
seq__39090_39249 = G__39287;
chunk__39094_39250 = G__39288;
count__39095_39251 = G__39289;
i__39096_39252 = G__39290;
continue;
}
}
} else {
}
}
break;
}


var G__39291 = seq__39054;
var G__39292 = chunk__39057;
var G__39293 = count__39058;
var G__39294 = (i__39059 + (1));
seq__39054 = G__39291;
chunk__39057 = G__39292;
count__39058 = G__39293;
i__39059 = G__39294;
continue;
} else {
var G__39295 = seq__39054;
var G__39296 = chunk__39057;
var G__39297 = count__39058;
var G__39298 = (i__39059 + (1));
seq__39054 = G__39295;
chunk__39057 = G__39296;
count__39058 = G__39297;
i__39059 = G__39298;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39054);
if(temp__5735__auto__){
var seq__39054__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39054__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39054__$1);
var G__39299 = cljs.core.chunk_rest(seq__39054__$1);
var G__39300 = c__4556__auto__;
var G__39301 = cljs.core.count(c__4556__auto__);
var G__39302 = (0);
seq__39054 = G__39299;
chunk__39057 = G__39300;
count__39058 = G__39301;
i__39059 = G__39302;
continue;
} else {
var path = cljs.core.first(seq__39054__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39106_39303 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39110_39304 = null;
var count__39111_39305 = (0);
var i__39112_39306 = (0);
while(true){
if((i__39112_39306 < count__39111_39305)){
var node_39307 = chunk__39110_39304.cljs$core$IIndexed$_nth$arity$2(null,i__39112_39306);
if(cljs.core.not(node_39307.shadow$old)){
var path_match_39308 = shadow.cljs.devtools.client.browser.match_paths(node_39307.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39308)){
var new_link_39309 = (function (){var G__39122 = node_39307.cloneNode(true);
G__39122.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39308),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39122;
})();
(node_39307.shadow$old = true);

(new_link_39309.onload = ((function (seq__39106_39303,chunk__39110_39304,count__39111_39305,i__39112_39306,seq__39054,chunk__39057,count__39058,i__39059,new_link_39309,path_match_39308,node_39307,path,seq__39054__$1,temp__5735__auto__,map__39052,map__39052__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39307);
});})(seq__39106_39303,chunk__39110_39304,count__39111_39305,i__39112_39306,seq__39054,chunk__39057,count__39058,i__39059,new_link_39309,path_match_39308,node_39307,path,seq__39054__$1,temp__5735__auto__,map__39052,map__39052__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39308], 0));

goog.dom.insertSiblingAfter(new_link_39309,node_39307);


var G__39310 = seq__39106_39303;
var G__39311 = chunk__39110_39304;
var G__39312 = count__39111_39305;
var G__39313 = (i__39112_39306 + (1));
seq__39106_39303 = G__39310;
chunk__39110_39304 = G__39311;
count__39111_39305 = G__39312;
i__39112_39306 = G__39313;
continue;
} else {
var G__39314 = seq__39106_39303;
var G__39315 = chunk__39110_39304;
var G__39316 = count__39111_39305;
var G__39317 = (i__39112_39306 + (1));
seq__39106_39303 = G__39314;
chunk__39110_39304 = G__39315;
count__39111_39305 = G__39316;
i__39112_39306 = G__39317;
continue;
}
} else {
var G__39318 = seq__39106_39303;
var G__39319 = chunk__39110_39304;
var G__39320 = count__39111_39305;
var G__39321 = (i__39112_39306 + (1));
seq__39106_39303 = G__39318;
chunk__39110_39304 = G__39319;
count__39111_39305 = G__39320;
i__39112_39306 = G__39321;
continue;
}
} else {
var temp__5735__auto___39322__$1 = cljs.core.seq(seq__39106_39303);
if(temp__5735__auto___39322__$1){
var seq__39106_39323__$1 = temp__5735__auto___39322__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39106_39323__$1)){
var c__4556__auto___39324 = cljs.core.chunk_first(seq__39106_39323__$1);
var G__39325 = cljs.core.chunk_rest(seq__39106_39323__$1);
var G__39326 = c__4556__auto___39324;
var G__39327 = cljs.core.count(c__4556__auto___39324);
var G__39328 = (0);
seq__39106_39303 = G__39325;
chunk__39110_39304 = G__39326;
count__39111_39305 = G__39327;
i__39112_39306 = G__39328;
continue;
} else {
var node_39329 = cljs.core.first(seq__39106_39323__$1);
if(cljs.core.not(node_39329.shadow$old)){
var path_match_39330 = shadow.cljs.devtools.client.browser.match_paths(node_39329.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39330)){
var new_link_39331 = (function (){var G__39125 = node_39329.cloneNode(true);
G__39125.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39330),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39125;
})();
(node_39329.shadow$old = true);

(new_link_39331.onload = ((function (seq__39106_39303,chunk__39110_39304,count__39111_39305,i__39112_39306,seq__39054,chunk__39057,count__39058,i__39059,new_link_39331,path_match_39330,node_39329,seq__39106_39323__$1,temp__5735__auto___39322__$1,path,seq__39054__$1,temp__5735__auto__,map__39052,map__39052__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39329);
});})(seq__39106_39303,chunk__39110_39304,count__39111_39305,i__39112_39306,seq__39054,chunk__39057,count__39058,i__39059,new_link_39331,path_match_39330,node_39329,seq__39106_39323__$1,temp__5735__auto___39322__$1,path,seq__39054__$1,temp__5735__auto__,map__39052,map__39052__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39330], 0));

goog.dom.insertSiblingAfter(new_link_39331,node_39329);


var G__39333 = cljs.core.next(seq__39106_39323__$1);
var G__39334 = null;
var G__39335 = (0);
var G__39336 = (0);
seq__39106_39303 = G__39333;
chunk__39110_39304 = G__39334;
count__39111_39305 = G__39335;
i__39112_39306 = G__39336;
continue;
} else {
var G__39337 = cljs.core.next(seq__39106_39323__$1);
var G__39338 = null;
var G__39339 = (0);
var G__39340 = (0);
seq__39106_39303 = G__39337;
chunk__39110_39304 = G__39338;
count__39111_39305 = G__39339;
i__39112_39306 = G__39340;
continue;
}
} else {
var G__39341 = cljs.core.next(seq__39106_39323__$1);
var G__39342 = null;
var G__39343 = (0);
var G__39344 = (0);
seq__39106_39303 = G__39341;
chunk__39110_39304 = G__39342;
count__39111_39305 = G__39343;
i__39112_39306 = G__39344;
continue;
}
}
} else {
}
}
break;
}


var G__39345 = cljs.core.next(seq__39054__$1);
var G__39346 = null;
var G__39347 = (0);
var G__39348 = (0);
seq__39054 = G__39345;
chunk__39057 = G__39346;
count__39058 = G__39347;
i__39059 = G__39348;
continue;
} else {
var G__39349 = cljs.core.next(seq__39054__$1);
var G__39350 = null;
var G__39351 = (0);
var G__39352 = (0);
seq__39054 = G__39349;
chunk__39057 = G__39350;
count__39058 = G__39351;
i__39059 = G__39352;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__39126){
var map__39127 = p__39126;
var map__39127__$1 = (((((!((map__39127 == null))))?(((((map__39127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39127):map__39127);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39127__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__39132){
var map__39133 = p__39132;
var map__39133__$1 = (((((!((map__39133 == null))))?(((((map__39133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39133):map__39133);
var _ = map__39133__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39133__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39135,done,error){
var map__39136 = p__39135;
var map__39136__$1 = (((((!((map__39136 == null))))?(((((map__39136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39136):map__39136);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39136__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39138,done,error){
var map__39139 = p__39138;
var map__39139__$1 = (((((!((map__39139 == null))))?(((((map__39139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39139):map__39139);
var msg = map__39139__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39139__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39139__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39139__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39142){
var map__39143 = p__39142;
var map__39143__$1 = (((((!((map__39143 == null))))?(((((map__39143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39143):map__39143);
var src = map__39143__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39143__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39147 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39147) : done.call(null,G__39147));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39152){
var map__39153 = p__39152;
var map__39153__$1 = (((((!((map__39153 == null))))?(((((map__39153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39153):map__39153);
var msg__$1 = map__39153__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39153__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39155){var ex = e39155;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39156){
var map__39157 = p__39156;
var map__39157__$1 = (((((!((map__39157 == null))))?(((((map__39157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39157):map__39157);
var env = map__39157__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39157__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__39161){
var map__39162 = p__39161;
var map__39162__$1 = (((((!((map__39162 == null))))?(((((map__39162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39162):map__39162);
var msg = map__39162__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39162__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39165){
var map__39166 = p__39165;
var map__39166__$1 = (((((!((map__39166 == null))))?(((((map__39166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39166):map__39166);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39166__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39166__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__39170){
var map__39171 = p__39170;
var map__39171__$1 = (((((!((map__39171 == null))))?(((((map__39171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39171):map__39171);
var svc = map__39171__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39171__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
