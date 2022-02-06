goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__37935__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37935 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37943__i = 0, G__37943__a = new Array(arguments.length -  0);
while (G__37943__i < G__37943__a.length) {G__37943__a[G__37943__i] = arguments[G__37943__i + 0]; ++G__37943__i;}
  args = new cljs.core.IndexedSeq(G__37943__a,0,null);
} 
return G__37935__delegate.call(this,args);};
G__37935.cljs$lang$maxFixedArity = 0;
G__37935.cljs$lang$applyTo = (function (arglist__37944){
var args = cljs.core.seq(arglist__37944);
return G__37935__delegate(args);
});
G__37935.cljs$core$IFn$_invoke$arity$variadic = G__37935__delegate;
return G__37935;
})()
);

(o.error = (function() { 
var G__37945__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37945 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37946__i = 0, G__37946__a = new Array(arguments.length -  0);
while (G__37946__i < G__37946__a.length) {G__37946__a[G__37946__i] = arguments[G__37946__i + 0]; ++G__37946__i;}
  args = new cljs.core.IndexedSeq(G__37946__a,0,null);
} 
return G__37945__delegate.call(this,args);};
G__37945.cljs$lang$maxFixedArity = 0;
G__37945.cljs$lang$applyTo = (function (arglist__37947){
var args = cljs.core.seq(arglist__37947);
return G__37945__delegate(args);
});
G__37945.cljs$core$IFn$_invoke$arity$variadic = G__37945__delegate;
return G__37945;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
