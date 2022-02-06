goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33398 = arguments.length;
switch (G__33398) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33402 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33402 = (function (f,blockable,meta33403){
this.f = f;
this.blockable = blockable;
this.meta33403 = meta33403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33404,meta33403__$1){
var self__ = this;
var _33404__$1 = this;
return (new cljs.core.async.t_cljs$core$async33402(self__.f,self__.blockable,meta33403__$1));
}));

(cljs.core.async.t_cljs$core$async33402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33404){
var self__ = this;
var _33404__$1 = this;
return self__.meta33403;
}));

(cljs.core.async.t_cljs$core$async33402.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33402.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33402.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33402.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33402.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33403","meta33403",-1502296912,null)], null);
}));

(cljs.core.async.t_cljs$core$async33402.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33402");

(cljs.core.async.t_cljs$core$async33402.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33402");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33402.
 */
cljs.core.async.__GT_t_cljs$core$async33402 = (function cljs$core$async$__GT_t_cljs$core$async33402(f__$1,blockable__$1,meta33403){
return (new cljs.core.async.t_cljs$core$async33402(f__$1,blockable__$1,meta33403));
});

}

return (new cljs.core.async.t_cljs$core$async33402(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33418 = arguments.length;
switch (G__33418) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33424 = arguments.length;
switch (G__33424) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33427 = arguments.length;
switch (G__33427) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35901 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35901) : fn1.call(null,val_35901));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35901) : fn1.call(null,val_35901));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33432 = arguments.length;
switch (G__33432) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___35904 = n;
var x_35905 = (0);
while(true){
if((x_35905 < n__4613__auto___35904)){
(a[x_35905] = x_35905);

var G__35906 = (x_35905 + (1));
x_35905 = G__35906;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33488 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33488 = (function (flag,meta33489){
this.flag = flag;
this.meta33489 = meta33489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33490,meta33489__$1){
var self__ = this;
var _33490__$1 = this;
return (new cljs.core.async.t_cljs$core$async33488(self__.flag,meta33489__$1));
}));

(cljs.core.async.t_cljs$core$async33488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33490){
var self__ = this;
var _33490__$1 = this;
return self__.meta33489;
}));

(cljs.core.async.t_cljs$core$async33488.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33488.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33488.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33488.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33488.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33489","meta33489",1617694680,null)], null);
}));

(cljs.core.async.t_cljs$core$async33488.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33488");

(cljs.core.async.t_cljs$core$async33488.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33488");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33488.
 */
cljs.core.async.__GT_t_cljs$core$async33488 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33488(flag__$1,meta33489){
return (new cljs.core.async.t_cljs$core$async33488(flag__$1,meta33489));
});

}

return (new cljs.core.async.t_cljs$core$async33488(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33491 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33491 = (function (flag,cb,meta33492){
this.flag = flag;
this.cb = cb;
this.meta33492 = meta33492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33493,meta33492__$1){
var self__ = this;
var _33493__$1 = this;
return (new cljs.core.async.t_cljs$core$async33491(self__.flag,self__.cb,meta33492__$1));
}));

(cljs.core.async.t_cljs$core$async33491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33493){
var self__ = this;
var _33493__$1 = this;
return self__.meta33492;
}));

(cljs.core.async.t_cljs$core$async33491.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33491.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33491.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33491.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33491.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33492","meta33492",-302871587,null)], null);
}));

(cljs.core.async.t_cljs$core$async33491.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33491");

(cljs.core.async.t_cljs$core$async33491.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33491");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33491.
 */
cljs.core.async.__GT_t_cljs$core$async33491 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33491(flag__$1,cb__$1,meta33492){
return (new cljs.core.async.t_cljs$core$async33491(flag__$1,cb__$1,meta33492));
});

}

return (new cljs.core.async.t_cljs$core$async33491(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33498_SHARP_){
var G__33500 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33498_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33500) : fret.call(null,G__33500));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33499_SHARP_){
var G__33501 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33499_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33501) : fret.call(null,G__33501));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35916 = (i + (1));
i = G__35916;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35917 = arguments.length;
var i__4737__auto___35918 = (0);
while(true){
if((i__4737__auto___35918 < len__4736__auto___35917)){
args__4742__auto__.push((arguments[i__4737__auto___35918]));

var G__35919 = (i__4737__auto___35918 + (1));
i__4737__auto___35918 = G__35919;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33504){
var map__33505 = p__33504;
var map__33505__$1 = (((((!((map__33505 == null))))?(((((map__33505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33505):map__33505);
var opts = map__33505__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33502){
var G__33503 = cljs.core.first(seq33502);
var seq33502__$1 = cljs.core.next(seq33502);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33503,seq33502__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33509 = arguments.length;
switch (G__33509) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33321__auto___35926 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33322__auto__ = (function (){var switch__32924__auto__ = (function (state_33536){
var state_val_33541 = (state_33536[(1)]);
if((state_val_33541 === (7))){
var inst_33532 = (state_33536[(2)]);
var state_33536__$1 = state_33536;
var statearr_33547_35928 = state_33536__$1;
(statearr_33547_35928[(2)] = inst_33532);

(statearr_33547_35928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (1))){
var state_33536__$1 = state_33536;
var statearr_33555_35930 = state_33536__$1;
(statearr_33555_35930[(2)] = null);

(statearr_33555_35930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (4))){
var inst_33515 = (state_33536[(7)]);
var inst_33515__$1 = (state_33536[(2)]);
var inst_33516 = (inst_33515__$1 == null);
var state_33536__$1 = (function (){var statearr_33560 = state_33536;
(statearr_33560[(7)] = inst_33515__$1);

return statearr_33560;
})();
if(cljs.core.truth_(inst_33516)){
var statearr_33561_35931 = state_33536__$1;
(statearr_33561_35931[(1)] = (5));

} else {
var statearr_33562_35932 = state_33536__$1;
(statearr_33562_35932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (13))){
var state_33536__$1 = state_33536;
var statearr_33571_35933 = state_33536__$1;
(statearr_33571_35933[(2)] = null);

(statearr_33571_35933[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (6))){
var inst_33515 = (state_33536[(7)]);
var state_33536__$1 = state_33536;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33536__$1,(11),to,inst_33515);
} else {
if((state_val_33541 === (3))){
var inst_33534 = (state_33536[(2)]);
var state_33536__$1 = state_33536;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33536__$1,inst_33534);
} else {
if((state_val_33541 === (12))){
var state_33536__$1 = state_33536;
var statearr_33573_35945 = state_33536__$1;
(statearr_33573_35945[(2)] = null);

(statearr_33573_35945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (2))){
var state_33536__$1 = state_33536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33536__$1,(4),from);
} else {
if((state_val_33541 === (11))){
var inst_33525 = (state_33536[(2)]);
var state_33536__$1 = state_33536;
if(cljs.core.truth_(inst_33525)){
var statearr_33574_35946 = state_33536__$1;
(statearr_33574_35946[(1)] = (12));

} else {
var statearr_33575_35947 = state_33536__$1;
(statearr_33575_35947[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (9))){
var state_33536__$1 = state_33536;
var statearr_33576_35948 = state_33536__$1;
(statearr_33576_35948[(2)] = null);

(statearr_33576_35948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (5))){
var state_33536__$1 = state_33536;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33577_35953 = state_33536__$1;
(statearr_33577_35953[(1)] = (8));

} else {
var statearr_33578_35954 = state_33536__$1;
(statearr_33578_35954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (14))){
var inst_33530 = (state_33536[(2)]);
var state_33536__$1 = state_33536;
var statearr_33579_35955 = state_33536__$1;
(statearr_33579_35955[(2)] = inst_33530);

(statearr_33579_35955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (10))){
var inst_33522 = (state_33536[(2)]);
var state_33536__$1 = state_33536;
var statearr_33580_35958 = state_33536__$1;
(statearr_33580_35958[(2)] = inst_33522);

(statearr_33580_35958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (8))){
var inst_33519 = cljs.core.async.close_BANG_(to);
var state_33536__$1 = state_33536;
var statearr_33581_35959 = state_33536__$1;
(statearr_33581_35959[(2)] = inst_33519);

(statearr_33581_35959[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32925__auto__ = null;
var cljs$core$async$state_machine__32925__auto____0 = (function (){
var statearr_33590 = [null,null,null,null,null,null,null,null];
(statearr_33590[(0)] = cljs$core$async$state_machine__32925__auto__);

(statearr_33590[(1)] = (1));

return statearr_33590;
});
var cljs$core$async$state_machine__32925__auto____1 = (function (state_33536){
while(true){
var ret_value__32926__auto__ = (function (){try{while(true){
var result__32927__auto__ = switch__32924__auto__(state_33536);
if(cljs.core.keyword_identical_QMARK_(result__32927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32927__auto__;
}
break;
}
}catch (e33592){var ex__32928__auto__ = e33592;
var statearr_33593_35967 = state_33536;
(statearr_33593_35967[(2)] = ex__32928__auto__);


if(cljs.core.seq((state_33536[(4)]))){
var statearr_33595_35968 = state_33536;
(statearr_33595_35968[(1)] = cljs.core.first((state_33536[(4)])));

} else {
throw ex__32928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35976 = state_33536;
state_33536 = G__35976;
continue;
} else {
return ret_value__32926__auto__;
}
break;
}
});
cljs$core$async$state_machine__32925__auto__ = function(state_33536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32925__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32925__auto____1.call(this,state_33536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32925__auto____0;
cljs$core$async$state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32925__auto____1;
return cljs$core$async$state_machine__32925__auto__;
})()
})();
var state__33323__auto__ = (function (){var statearr_33598 = f__33322__auto__();
(statearr_33598[(6)] = c__33321__auto___35926);

return statearr_33598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33323__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__33604){
var vec__33606 = p__33604;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33606,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33606,(1),null);
var job = vec__33606;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33321__auto___35982 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33322__auto__ = (function (){var switch__32924__auto__ = (function (state_33614){
var state_val_33615 = (state_33614[(1)]);
if((state_val_33615 === (1))){
var state_33614__$1 = state_33614;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33614__$1,(2),res,v);
} else {
if((state_val_33615 === (2))){
var inst_33611 = (state_33614[(2)]);
var inst_33612 = cljs.core.async.close_BANG_(res);
var state_33614__$1 = (function (){var statearr_33620 = state_33614;
(statearr_33620[(7)] = inst_33611);

return statearr_33620;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33614__$1,inst_33612);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____0 = (function (){
var statearr_33621 = [null,null,null,null,null,null,null,null];
(statearr_33621[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__);

(statearr_33621[(1)] = (1));

return statearr_33621;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____1 = (function (state_33614){
while(true){
var ret_value__32926__auto__ = (function (){try{while(true){
var result__32927__auto__ = switch__32924__auto__(state_33614);
if(cljs.core.keyword_identical_QMARK_(result__32927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32927__auto__;
}
break;
}
}catch (e33622){var ex__32928__auto__ = e33622;
var statearr_33623_35983 = state_33614;
(statearr_33623_35983[(2)] = ex__32928__auto__);


if(cljs.core.seq((state_33614[(4)]))){
var statearr_33624_35984 = state_33614;
(statearr_33624_35984[(1)] = cljs.core.first((state_33614[(4)])));

} else {
throw ex__32928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35985 = state_33614;
state_33614 = G__35985;
continue;
} else {
return ret_value__32926__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__ = function(state_33614){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____1.call(this,state_33614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__;
})()
})();
var state__33323__auto__ = (function (){var statearr_33625 = f__33322__auto__();
(statearr_33625[(6)] = c__33321__auto___35982);

return statearr_33625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33323__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33626){
var vec__33631 = p__33626;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33631,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33631,(1),null);
var job = vec__33631;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___35991 = n;
var __35992 = (0);
while(true){
if((__35992 < n__4613__auto___35991)){
var G__33640_35993 = type;
var G__33640_35994__$1 = (((G__33640_35993 instanceof cljs.core.Keyword))?G__33640_35993.fqn:null);
switch (G__33640_35994__$1) {
case "compute":
var c__33321__auto___35996 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35992,c__33321__auto___35996,G__33640_35993,G__33640_35994__$1,n__4613__auto___35991,jobs,results,process,async){
return (function (){
var f__33322__auto__ = (function (){var switch__32924__auto__ = ((function (__35992,c__33321__auto___35996,G__33640_35993,G__33640_35994__$1,n__4613__auto___35991,jobs,results,process,async){
return (function (state_33654){
var state_val_33655 = (state_33654[(1)]);
if((state_val_33655 === (1))){
var state_33654__$1 = state_33654;
var statearr_33656_36002 = state_33654__$1;
(statearr_33656_36002[(2)] = null);

(statearr_33656_36002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33655 === (2))){
var state_33654__$1 = state_33654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33654__$1,(4),jobs);
} else {
if((state_val_33655 === (3))){
var inst_33652 = (state_33654[(2)]);
var state_33654__$1 = state_33654;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33654__$1,inst_33652);
} else {
if((state_val_33655 === (4))){
var inst_33644 = (state_33654[(2)]);
var inst_33645 = process(inst_33644);
var state_33654__$1 = state_33654;
if(cljs.core.truth_(inst_33645)){
var statearr_33661_36003 = state_33654__$1;
(statearr_33661_36003[(1)] = (5));

} else {
var statearr_33662_36004 = state_33654__$1;
(statearr_33662_36004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33655 === (5))){
var state_33654__$1 = state_33654;
var statearr_33663_36005 = state_33654__$1;
(statearr_33663_36005[(2)] = null);

(statearr_33663_36005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33655 === (6))){
var state_33654__$1 = state_33654;
var statearr_33664_36006 = state_33654__$1;
(statearr_33664_36006[(2)] = null);

(statearr_33664_36006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33655 === (7))){
var inst_33650 = (state_33654[(2)]);
var state_33654__$1 = state_33654;
var statearr_33670_36007 = state_33654__$1;
(statearr_33670_36007[(2)] = inst_33650);

(statearr_33670_36007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35992,c__33321__auto___35996,G__33640_35993,G__33640_35994__$1,n__4613__auto___35991,jobs,results,process,async))
;
return ((function (__35992,switch__32924__auto__,c__33321__auto___35996,G__33640_35993,G__33640_35994__$1,n__4613__auto___35991,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____0 = (function (){
var statearr_33671 = [null,null,null,null,null,null,null];
(statearr_33671[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__);

(statearr_33671[(1)] = (1));

return statearr_33671;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____1 = (function (state_33654){
while(true){
var ret_value__32926__auto__ = (function (){try{while(true){
var result__32927__auto__ = switch__32924__auto__(state_33654);
if(cljs.core.keyword_identical_QMARK_(result__32927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32927__auto__;
}
break;
}
}catch (e33672){var ex__32928__auto__ = e33672;
var statearr_33673_36010 = state_33654;
(statearr_33673_36010[(2)] = ex__32928__auto__);


if(cljs.core.seq((state_33654[(4)]))){
var statearr_33675_36012 = state_33654;
(statearr_33675_36012[(1)] = cljs.core.first((state_33654[(4)])));

} else {
throw ex__32928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36013 = state_33654;
state_33654 = G__36013;
continue;
} else {
return ret_value__32926__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__ = function(state_33654){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____1.call(this,state_33654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__;
})()
;})(__35992,switch__32924__auto__,c__33321__auto___35996,G__33640_35993,G__33640_35994__$1,n__4613__auto___35991,jobs,results,process,async))
})();
var state__33323__auto__ = (function (){var statearr_33676 = f__33322__auto__();
(statearr_33676[(6)] = c__33321__auto___35996);

return statearr_33676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33323__auto__);
});})(__35992,c__33321__auto___35996,G__33640_35993,G__33640_35994__$1,n__4613__auto___35991,jobs,results,process,async))
);


break;
case "async":
var c__33321__auto___36014 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35992,c__33321__auto___36014,G__33640_35993,G__33640_35994__$1,n__4613__auto___35991,jobs,results,process,async){
return (function (){
var f__33322__auto__ = (function (){var switch__32924__auto__ = ((function (__35992,c__33321__auto___36014,G__33640_35993,G__33640_35994__$1,n__4613__auto___35991,jobs,results,process,async){
return (function (state_33693){
var state_val_33694 = (state_33693[(1)]);
if((state_val_33694 === (1))){
var state_33693__$1 = state_33693;
var statearr_33695_36016 = state_33693__$1;
(statearr_33695_36016[(2)] = null);

(statearr_33695_36016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33694 === (2))){
var state_33693__$1 = state_33693;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33693__$1,(4),jobs);
} else {
if((state_val_33694 === (3))){
var inst_33691 = (state_33693[(2)]);
var state_33693__$1 = state_33693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33693__$1,inst_33691);
} else {
if((state_val_33694 === (4))){
var inst_33682 = (state_33693[(2)]);
var inst_33684 = async(inst_33682);
var state_33693__$1 = state_33693;
if(cljs.core.truth_(inst_33684)){
var statearr_33707_36018 = state_33693__$1;
(statearr_33707_36018[(1)] = (5));

} else {
var statearr_33708_36019 = state_33693__$1;
(statearr_33708_36019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33694 === (5))){
var state_33693__$1 = state_33693;
var statearr_33710_36020 = state_33693__$1;
(statearr_33710_36020[(2)] = null);

(statearr_33710_36020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33694 === (6))){
var state_33693__$1 = state_33693;
var statearr_33711_36026 = state_33693__$1;
(statearr_33711_36026[(2)] = null);

(statearr_33711_36026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33694 === (7))){
var inst_33689 = (state_33693[(2)]);
var state_33693__$1 = state_33693;
var statearr_33712_36028 = state_33693__$1;
(statearr_33712_36028[(2)] = inst_33689);

(statearr_33712_36028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35992,c__33321__auto___36014,G__33640_35993,G__33640_35994__$1,n__4613__auto___35991,jobs,results,process,async))
;
return ((function (__35992,switch__32924__auto__,c__33321__auto___36014,G__33640_35993,G__33640_35994__$1,n__4613__auto___35991,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____0 = (function (){
var statearr_33713 = [null,null,null,null,null,null,null];
(statearr_33713[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__);

(statearr_33713[(1)] = (1));

return statearr_33713;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____1 = (function (state_33693){
while(true){
var ret_value__32926__auto__ = (function (){try{while(true){
var result__32927__auto__ = switch__32924__auto__(state_33693);
if(cljs.core.keyword_identical_QMARK_(result__32927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32927__auto__;
}
break;
}
}catch (e33720){var ex__32928__auto__ = e33720;
var statearr_33721_36030 = state_33693;
(statearr_33721_36030[(2)] = ex__32928__auto__);


if(cljs.core.seq((state_33693[(4)]))){
var statearr_33723_36031 = state_33693;
(statearr_33723_36031[(1)] = cljs.core.first((state_33693[(4)])));

} else {
throw ex__32928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36032 = state_33693;
state_33693 = G__36032;
continue;
} else {
return ret_value__32926__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__ = function(state_33693){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____1.call(this,state_33693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__;
})()
;})(__35992,switch__32924__auto__,c__33321__auto___36014,G__33640_35993,G__33640_35994__$1,n__4613__auto___35991,jobs,results,process,async))
})();
var state__33323__auto__ = (function (){var statearr_33726 = f__33322__auto__();
(statearr_33726[(6)] = c__33321__auto___36014);

return statearr_33726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33323__auto__);
});})(__35992,c__33321__auto___36014,G__33640_35993,G__33640_35994__$1,n__4613__auto___35991,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33640_35994__$1)].join('')));

}

var G__36033 = (__35992 + (1));
__35992 = G__36033;
continue;
} else {
}
break;
}

var c__33321__auto___36034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33322__auto__ = (function (){var switch__32924__auto__ = (function (state_33750){
var state_val_33751 = (state_33750[(1)]);
if((state_val_33751 === (7))){
var inst_33746 = (state_33750[(2)]);
var state_33750__$1 = state_33750;
var statearr_33755_36036 = state_33750__$1;
(statearr_33755_36036[(2)] = inst_33746);

(statearr_33755_36036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (1))){
var state_33750__$1 = state_33750;
var statearr_33757_36040 = state_33750__$1;
(statearr_33757_36040[(2)] = null);

(statearr_33757_36040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (4))){
var inst_33729 = (state_33750[(7)]);
var inst_33729__$1 = (state_33750[(2)]);
var inst_33730 = (inst_33729__$1 == null);
var state_33750__$1 = (function (){var statearr_33772 = state_33750;
(statearr_33772[(7)] = inst_33729__$1);

return statearr_33772;
})();
if(cljs.core.truth_(inst_33730)){
var statearr_33773_36042 = state_33750__$1;
(statearr_33773_36042[(1)] = (5));

} else {
var statearr_33774_36043 = state_33750__$1;
(statearr_33774_36043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (6))){
var inst_33734 = (state_33750[(8)]);
var inst_33729 = (state_33750[(7)]);
var inst_33734__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33735 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33738 = [inst_33729,inst_33734__$1];
var inst_33739 = (new cljs.core.PersistentVector(null,2,(5),inst_33735,inst_33738,null));
var state_33750__$1 = (function (){var statearr_33779 = state_33750;
(statearr_33779[(8)] = inst_33734__$1);

return statearr_33779;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33750__$1,(8),jobs,inst_33739);
} else {
if((state_val_33751 === (3))){
var inst_33748 = (state_33750[(2)]);
var state_33750__$1 = state_33750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33750__$1,inst_33748);
} else {
if((state_val_33751 === (2))){
var state_33750__$1 = state_33750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33750__$1,(4),from);
} else {
if((state_val_33751 === (9))){
var inst_33743 = (state_33750[(2)]);
var state_33750__$1 = (function (){var statearr_33781 = state_33750;
(statearr_33781[(9)] = inst_33743);

return statearr_33781;
})();
var statearr_33782_36051 = state_33750__$1;
(statearr_33782_36051[(2)] = null);

(statearr_33782_36051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (5))){
var inst_33732 = cljs.core.async.close_BANG_(jobs);
var state_33750__$1 = state_33750;
var statearr_33783_36052 = state_33750__$1;
(statearr_33783_36052[(2)] = inst_33732);

(statearr_33783_36052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (8))){
var inst_33734 = (state_33750[(8)]);
var inst_33741 = (state_33750[(2)]);
var state_33750__$1 = (function (){var statearr_33787 = state_33750;
(statearr_33787[(10)] = inst_33741);

return statearr_33787;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33750__$1,(9),results,inst_33734);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____0 = (function (){
var statearr_33788 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33788[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__);

(statearr_33788[(1)] = (1));

return statearr_33788;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____1 = (function (state_33750){
while(true){
var ret_value__32926__auto__ = (function (){try{while(true){
var result__32927__auto__ = switch__32924__auto__(state_33750);
if(cljs.core.keyword_identical_QMARK_(result__32927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32927__auto__;
}
break;
}
}catch (e33789){var ex__32928__auto__ = e33789;
var statearr_33790_36060 = state_33750;
(statearr_33790_36060[(2)] = ex__32928__auto__);


if(cljs.core.seq((state_33750[(4)]))){
var statearr_33791_36061 = state_33750;
(statearr_33791_36061[(1)] = cljs.core.first((state_33750[(4)])));

} else {
throw ex__32928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36062 = state_33750;
state_33750 = G__36062;
continue;
} else {
return ret_value__32926__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__ = function(state_33750){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____1.call(this,state_33750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__;
})()
})();
var state__33323__auto__ = (function (){var statearr_33795 = f__33322__auto__();
(statearr_33795[(6)] = c__33321__auto___36034);

return statearr_33795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33323__auto__);
}));


var c__33321__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33322__auto__ = (function (){var switch__32924__auto__ = (function (state_33837){
var state_val_33838 = (state_33837[(1)]);
if((state_val_33838 === (7))){
var inst_33833 = (state_33837[(2)]);
var state_33837__$1 = state_33837;
var statearr_33839_36063 = state_33837__$1;
(statearr_33839_36063[(2)] = inst_33833);

(statearr_33839_36063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (20))){
var state_33837__$1 = state_33837;
var statearr_33840_36064 = state_33837__$1;
(statearr_33840_36064[(2)] = null);

(statearr_33840_36064[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (1))){
var state_33837__$1 = state_33837;
var statearr_33841_36065 = state_33837__$1;
(statearr_33841_36065[(2)] = null);

(statearr_33841_36065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (4))){
var inst_33801 = (state_33837[(7)]);
var inst_33801__$1 = (state_33837[(2)]);
var inst_33802 = (inst_33801__$1 == null);
var state_33837__$1 = (function (){var statearr_33842 = state_33837;
(statearr_33842[(7)] = inst_33801__$1);

return statearr_33842;
})();
if(cljs.core.truth_(inst_33802)){
var statearr_33844_36069 = state_33837__$1;
(statearr_33844_36069[(1)] = (5));

} else {
var statearr_33845_36070 = state_33837__$1;
(statearr_33845_36070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (15))){
var inst_33814 = (state_33837[(8)]);
var state_33837__$1 = state_33837;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33837__$1,(18),to,inst_33814);
} else {
if((state_val_33838 === (21))){
var inst_33828 = (state_33837[(2)]);
var state_33837__$1 = state_33837;
var statearr_33846_36071 = state_33837__$1;
(statearr_33846_36071[(2)] = inst_33828);

(statearr_33846_36071[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (13))){
var inst_33830 = (state_33837[(2)]);
var state_33837__$1 = (function (){var statearr_33847 = state_33837;
(statearr_33847[(9)] = inst_33830);

return statearr_33847;
})();
var statearr_33848_36072 = state_33837__$1;
(statearr_33848_36072[(2)] = null);

(statearr_33848_36072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (6))){
var inst_33801 = (state_33837[(7)]);
var state_33837__$1 = state_33837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33837__$1,(11),inst_33801);
} else {
if((state_val_33838 === (17))){
var inst_33823 = (state_33837[(2)]);
var state_33837__$1 = state_33837;
if(cljs.core.truth_(inst_33823)){
var statearr_33849_36074 = state_33837__$1;
(statearr_33849_36074[(1)] = (19));

} else {
var statearr_33850_36076 = state_33837__$1;
(statearr_33850_36076[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (3))){
var inst_33835 = (state_33837[(2)]);
var state_33837__$1 = state_33837;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33837__$1,inst_33835);
} else {
if((state_val_33838 === (12))){
var inst_33811 = (state_33837[(10)]);
var state_33837__$1 = state_33837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33837__$1,(14),inst_33811);
} else {
if((state_val_33838 === (2))){
var state_33837__$1 = state_33837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33837__$1,(4),results);
} else {
if((state_val_33838 === (19))){
var state_33837__$1 = state_33837;
var statearr_33852_36077 = state_33837__$1;
(statearr_33852_36077[(2)] = null);

(statearr_33852_36077[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (11))){
var inst_33811 = (state_33837[(2)]);
var state_33837__$1 = (function (){var statearr_33853 = state_33837;
(statearr_33853[(10)] = inst_33811);

return statearr_33853;
})();
var statearr_33854_36078 = state_33837__$1;
(statearr_33854_36078[(2)] = null);

(statearr_33854_36078[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (9))){
var state_33837__$1 = state_33837;
var statearr_33855_36079 = state_33837__$1;
(statearr_33855_36079[(2)] = null);

(statearr_33855_36079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (5))){
var state_33837__$1 = state_33837;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33856_36080 = state_33837__$1;
(statearr_33856_36080[(1)] = (8));

} else {
var statearr_33857_36081 = state_33837__$1;
(statearr_33857_36081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (14))){
var inst_33814 = (state_33837[(8)]);
var inst_33814__$1 = (state_33837[(2)]);
var inst_33816 = (inst_33814__$1 == null);
var inst_33817 = cljs.core.not(inst_33816);
var state_33837__$1 = (function (){var statearr_33858 = state_33837;
(statearr_33858[(8)] = inst_33814__$1);

return statearr_33858;
})();
if(inst_33817){
var statearr_33859_36082 = state_33837__$1;
(statearr_33859_36082[(1)] = (15));

} else {
var statearr_33860_36083 = state_33837__$1;
(statearr_33860_36083[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (16))){
var state_33837__$1 = state_33837;
var statearr_33861_36084 = state_33837__$1;
(statearr_33861_36084[(2)] = false);

(statearr_33861_36084[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (10))){
var inst_33808 = (state_33837[(2)]);
var state_33837__$1 = state_33837;
var statearr_33862_36085 = state_33837__$1;
(statearr_33862_36085[(2)] = inst_33808);

(statearr_33862_36085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (18))){
var inst_33820 = (state_33837[(2)]);
var state_33837__$1 = state_33837;
var statearr_33863_36090 = state_33837__$1;
(statearr_33863_36090[(2)] = inst_33820);

(statearr_33863_36090[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (8))){
var inst_33805 = cljs.core.async.close_BANG_(to);
var state_33837__$1 = state_33837;
var statearr_33864_36094 = state_33837__$1;
(statearr_33864_36094[(2)] = inst_33805);

(statearr_33864_36094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____0 = (function (){
var statearr_33865 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33865[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__);

(statearr_33865[(1)] = (1));

return statearr_33865;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____1 = (function (state_33837){
while(true){
var ret_value__32926__auto__ = (function (){try{while(true){
var result__32927__auto__ = switch__32924__auto__(state_33837);
if(cljs.core.keyword_identical_QMARK_(result__32927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32927__auto__;
}
break;
}
}catch (e33866){var ex__32928__auto__ = e33866;
var statearr_33867_36098 = state_33837;
(statearr_33867_36098[(2)] = ex__32928__auto__);


if(cljs.core.seq((state_33837[(4)]))){
var statearr_33868_36099 = state_33837;
(statearr_33868_36099[(1)] = cljs.core.first((state_33837[(4)])));

} else {
throw ex__32928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36103 = state_33837;
state_33837 = G__36103;
continue;
} else {
return ret_value__32926__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__ = function(state_33837){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____1.call(this,state_33837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32925__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32925__auto__;
})()
})();
var state__33323__auto__ = (function (){var statearr_33870 = f__33322__auto__();
(statearr_33870[(6)] = c__33321__auto__);

return statearr_33870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33323__auto__);
}));

return c__33321__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33872 = arguments.length;
switch (G__33872) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33875 = arguments.length;
switch (G__33875) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33886 = arguments.length;
switch (G__33886) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33321__auto___36127 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33322__auto__ = (function (){var switch__32924__auto__ = (function (state_33929){
var state_val_33930 = (state_33929[(1)]);
if((state_val_33930 === (7))){
var inst_33925 = (state_33929[(2)]);
var state_33929__$1 = state_33929;
var statearr_33931_36128 = state_33929__$1;
(statearr_33931_36128[(2)] = inst_33925);

(statearr_33931_36128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33930 === (1))){
var state_33929__$1 = state_33929;
var statearr_33933_36132 = state_33929__$1;
(statearr_33933_36132[(2)] = null);

(statearr_33933_36132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33930 === (4))){
var inst_33906 = (state_33929[(7)]);
var inst_33906__$1 = (state_33929[(2)]);
var inst_33907 = (inst_33906__$1 == null);
var state_33929__$1 = (function (){var statearr_33934 = state_33929;
(statearr_33934[(7)] = inst_33906__$1);

return statearr_33934;
})();
if(cljs.core.truth_(inst_33907)){
var statearr_33935_36136 = state_33929__$1;
(statearr_33935_36136[(1)] = (5));

} else {
var statearr_33936_36137 = state_33929__$1;
(statearr_33936_36137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33930 === (13))){
var state_33929__$1 = state_33929;
var statearr_33937_36138 = state_33929__$1;
(statearr_33937_36138[(2)] = null);

(statearr_33937_36138[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33930 === (6))){
var inst_33906 = (state_33929[(7)]);
var inst_33912 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33906) : p.call(null,inst_33906));
var state_33929__$1 = state_33929;
if(cljs.core.truth_(inst_33912)){
var statearr_33942_36139 = state_33929__$1;
(statearr_33942_36139[(1)] = (9));

} else {
var statearr_33943_36141 = state_33929__$1;
(statearr_33943_36141[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33930 === (3))){
var inst_33927 = (state_33929[(2)]);
var state_33929__$1 = state_33929;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33929__$1,inst_33927);
} else {
if((state_val_33930 === (12))){
var state_33929__$1 = state_33929;
var statearr_33951_36142 = state_33929__$1;
(statearr_33951_36142[(2)] = null);

(statearr_33951_36142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33930 === (2))){
var state_33929__$1 = state_33929;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33929__$1,(4),ch);
} else {
if((state_val_33930 === (11))){
var inst_33906 = (state_33929[(7)]);
var inst_33916 = (state_33929[(2)]);
var state_33929__$1 = state_33929;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33929__$1,(8),inst_33916,inst_33906);
} else {
if((state_val_33930 === (9))){
var state_33929__$1 = state_33929;
var statearr_33965_36143 = state_33929__$1;
(statearr_33965_36143[(2)] = tc);

(statearr_33965_36143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33930 === (5))){
var inst_33909 = cljs.core.async.close_BANG_(tc);
var inst_33910 = cljs.core.async.close_BANG_(fc);
var state_33929__$1 = (function (){var statearr_33966 = state_33929;
(statearr_33966[(8)] = inst_33909);

return statearr_33966;
})();
var statearr_33967_36144 = state_33929__$1;
(statearr_33967_36144[(2)] = inst_33910);

(statearr_33967_36144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33930 === (14))){
var inst_33923 = (state_33929[(2)]);
var state_33929__$1 = state_33929;
var statearr_33968_36145 = state_33929__$1;
(statearr_33968_36145[(2)] = inst_33923);

(statearr_33968_36145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33930 === (10))){
var state_33929__$1 = state_33929;
var statearr_33969_36146 = state_33929__$1;
(statearr_33969_36146[(2)] = fc);

(statearr_33969_36146[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33930 === (8))){
var inst_33918 = (state_33929[(2)]);
var state_33929__$1 = state_33929;
if(cljs.core.truth_(inst_33918)){
var statearr_33970_36147 = state_33929__$1;
(statearr_33970_36147[(1)] = (12));

} else {
var statearr_33971_36148 = state_33929__$1;
(statearr_33971_36148[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32925__auto__ = null;
var cljs$core$async$state_machine__32925__auto____0 = (function (){
var statearr_33972 = [null,null,null,null,null,null,null,null,null];
(statearr_33972[(0)] = cljs$core$async$state_machine__32925__auto__);

(statearr_33972[(1)] = (1));

return statearr_33972;
});
var cljs$core$async$state_machine__32925__auto____1 = (function (state_33929){
while(true){
var ret_value__32926__auto__ = (function (){try{while(true){
var result__32927__auto__ = switch__32924__auto__(state_33929);
if(cljs.core.keyword_identical_QMARK_(result__32927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32927__auto__;
}
break;
}
}catch (e33974){var ex__32928__auto__ = e33974;
var statearr_33975_36150 = state_33929;
(statearr_33975_36150[(2)] = ex__32928__auto__);


if(cljs.core.seq((state_33929[(4)]))){
var statearr_33976_36151 = state_33929;
(statearr_33976_36151[(1)] = cljs.core.first((state_33929[(4)])));

} else {
throw ex__32928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36152 = state_33929;
state_33929 = G__36152;
continue;
} else {
return ret_value__32926__auto__;
}
break;
}
});
cljs$core$async$state_machine__32925__auto__ = function(state_33929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32925__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32925__auto____1.call(this,state_33929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32925__auto____0;
cljs$core$async$state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32925__auto____1;
return cljs$core$async$state_machine__32925__auto__;
})()
})();
var state__33323__auto__ = (function (){var statearr_33977 = f__33322__auto__();
(statearr_33977[(6)] = c__33321__auto___36127);

return statearr_33977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33323__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33321__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33322__auto__ = (function (){var switch__32924__auto__ = (function (state_34001){
var state_val_34002 = (state_34001[(1)]);
if((state_val_34002 === (7))){
var inst_33997 = (state_34001[(2)]);
var state_34001__$1 = state_34001;
var statearr_34005_36153 = state_34001__$1;
(statearr_34005_36153[(2)] = inst_33997);

(statearr_34005_36153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (1))){
var inst_33980 = init;
var inst_33981 = inst_33980;
var state_34001__$1 = (function (){var statearr_34007 = state_34001;
(statearr_34007[(7)] = inst_33981);

return statearr_34007;
})();
var statearr_34020_36158 = state_34001__$1;
(statearr_34020_36158[(2)] = null);

(statearr_34020_36158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (4))){
var inst_33984 = (state_34001[(8)]);
var inst_33984__$1 = (state_34001[(2)]);
var inst_33985 = (inst_33984__$1 == null);
var state_34001__$1 = (function (){var statearr_34025 = state_34001;
(statearr_34025[(8)] = inst_33984__$1);

return statearr_34025;
})();
if(cljs.core.truth_(inst_33985)){
var statearr_34034_36163 = state_34001__$1;
(statearr_34034_36163[(1)] = (5));

} else {
var statearr_34035_36164 = state_34001__$1;
(statearr_34035_36164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (6))){
var inst_33988 = (state_34001[(9)]);
var inst_33981 = (state_34001[(7)]);
var inst_33984 = (state_34001[(8)]);
var inst_33988__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33981,inst_33984) : f.call(null,inst_33981,inst_33984));
var inst_33989 = cljs.core.reduced_QMARK_(inst_33988__$1);
var state_34001__$1 = (function (){var statearr_34042 = state_34001;
(statearr_34042[(9)] = inst_33988__$1);

return statearr_34042;
})();
if(inst_33989){
var statearr_34049_36165 = state_34001__$1;
(statearr_34049_36165[(1)] = (8));

} else {
var statearr_34050_36166 = state_34001__$1;
(statearr_34050_36166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (3))){
var inst_33999 = (state_34001[(2)]);
var state_34001__$1 = state_34001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34001__$1,inst_33999);
} else {
if((state_val_34002 === (2))){
var state_34001__$1 = state_34001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34001__$1,(4),ch);
} else {
if((state_val_34002 === (9))){
var inst_33988 = (state_34001[(9)]);
var inst_33981 = inst_33988;
var state_34001__$1 = (function (){var statearr_34057 = state_34001;
(statearr_34057[(7)] = inst_33981);

return statearr_34057;
})();
var statearr_34058_36167 = state_34001__$1;
(statearr_34058_36167[(2)] = null);

(statearr_34058_36167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (5))){
var inst_33981 = (state_34001[(7)]);
var state_34001__$1 = state_34001;
var statearr_34075_36168 = state_34001__$1;
(statearr_34075_36168[(2)] = inst_33981);

(statearr_34075_36168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (10))){
var inst_33995 = (state_34001[(2)]);
var state_34001__$1 = state_34001;
var statearr_34082_36169 = state_34001__$1;
(statearr_34082_36169[(2)] = inst_33995);

(statearr_34082_36169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34002 === (8))){
var inst_33988 = (state_34001[(9)]);
var inst_33991 = cljs.core.deref(inst_33988);
var state_34001__$1 = state_34001;
var statearr_34083_36170 = state_34001__$1;
(statearr_34083_36170[(2)] = inst_33991);

(statearr_34083_36170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32925__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32925__auto____0 = (function (){
var statearr_34088 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34088[(0)] = cljs$core$async$reduce_$_state_machine__32925__auto__);

(statearr_34088[(1)] = (1));

return statearr_34088;
});
var cljs$core$async$reduce_$_state_machine__32925__auto____1 = (function (state_34001){
while(true){
var ret_value__32926__auto__ = (function (){try{while(true){
var result__32927__auto__ = switch__32924__auto__(state_34001);
if(cljs.core.keyword_identical_QMARK_(result__32927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32927__auto__;
}
break;
}
}catch (e34094){var ex__32928__auto__ = e34094;
var statearr_34097_36171 = state_34001;
(statearr_34097_36171[(2)] = ex__32928__auto__);


if(cljs.core.seq((state_34001[(4)]))){
var statearr_34104_36172 = state_34001;
(statearr_34104_36172[(1)] = cljs.core.first((state_34001[(4)])));

} else {
throw ex__32928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36173 = state_34001;
state_34001 = G__36173;
continue;
} else {
return ret_value__32926__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32925__auto__ = function(state_34001){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32925__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32925__auto____1.call(this,state_34001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32925__auto____0;
cljs$core$async$reduce_$_state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32925__auto____1;
return cljs$core$async$reduce_$_state_machine__32925__auto__;
})()
})();
var state__33323__auto__ = (function (){var statearr_34110 = f__33322__auto__();
(statearr_34110[(6)] = c__33321__auto__);

return statearr_34110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33323__auto__);
}));

return c__33321__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33321__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33322__auto__ = (function (){var switch__32924__auto__ = (function (state_34118){
var state_val_34119 = (state_34118[(1)]);
if((state_val_34119 === (1))){
var inst_34113 = cljs.core.async.reduce(f__$1,init,ch);
var state_34118__$1 = state_34118;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34118__$1,(2),inst_34113);
} else {
if((state_val_34119 === (2))){
var inst_34115 = (state_34118[(2)]);
var inst_34116 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34115) : f__$1.call(null,inst_34115));
var state_34118__$1 = state_34118;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34118__$1,inst_34116);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32925__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32925__auto____0 = (function (){
var statearr_34120 = [null,null,null,null,null,null,null];
(statearr_34120[(0)] = cljs$core$async$transduce_$_state_machine__32925__auto__);

(statearr_34120[(1)] = (1));

return statearr_34120;
});
var cljs$core$async$transduce_$_state_machine__32925__auto____1 = (function (state_34118){
while(true){
var ret_value__32926__auto__ = (function (){try{while(true){
var result__32927__auto__ = switch__32924__auto__(state_34118);
if(cljs.core.keyword_identical_QMARK_(result__32927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32927__auto__;
}
break;
}
}catch (e34121){var ex__32928__auto__ = e34121;
var statearr_34123_36174 = state_34118;
(statearr_34123_36174[(2)] = ex__32928__auto__);


if(cljs.core.seq((state_34118[(4)]))){
var statearr_34124_36175 = state_34118;
(statearr_34124_36175[(1)] = cljs.core.first((state_34118[(4)])));

} else {
throw ex__32928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36176 = state_34118;
state_34118 = G__36176;
continue;
} else {
return ret_value__32926__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32925__auto__ = function(state_34118){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32925__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32925__auto____1.call(this,state_34118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32925__auto____0;
cljs$core$async$transduce_$_state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32925__auto____1;
return cljs$core$async$transduce_$_state_machine__32925__auto__;
})()
})();
var state__33323__auto__ = (function (){var statearr_34125 = f__33322__auto__();
(statearr_34125[(6)] = c__33321__auto__);

return statearr_34125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33323__auto__);
}));

return c__33321__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__34127 = arguments.length;
switch (G__34127) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33321__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33322__auto__ = (function (){var switch__32924__auto__ = (function (state_34165){
var state_val_34167 = (state_34165[(1)]);
if((state_val_34167 === (7))){
var inst_34147 = (state_34165[(2)]);
var state_34165__$1 = state_34165;
var statearr_34169_36178 = state_34165__$1;
(statearr_34169_36178[(2)] = inst_34147);

(statearr_34169_36178[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (1))){
var inst_34141 = cljs.core.seq(coll);
var inst_34142 = inst_34141;
var state_34165__$1 = (function (){var statearr_34170 = state_34165;
(statearr_34170[(7)] = inst_34142);

return statearr_34170;
})();
var statearr_34171_36179 = state_34165__$1;
(statearr_34171_36179[(2)] = null);

(statearr_34171_36179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (4))){
var inst_34142 = (state_34165[(7)]);
var inst_34145 = cljs.core.first(inst_34142);
var state_34165__$1 = state_34165;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34165__$1,(7),ch,inst_34145);
} else {
if((state_val_34167 === (13))){
var inst_34159 = (state_34165[(2)]);
var state_34165__$1 = state_34165;
var statearr_34172_36180 = state_34165__$1;
(statearr_34172_36180[(2)] = inst_34159);

(statearr_34172_36180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (6))){
var inst_34150 = (state_34165[(2)]);
var state_34165__$1 = state_34165;
if(cljs.core.truth_(inst_34150)){
var statearr_34173_36181 = state_34165__$1;
(statearr_34173_36181[(1)] = (8));

} else {
var statearr_34174_36182 = state_34165__$1;
(statearr_34174_36182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (3))){
var inst_34163 = (state_34165[(2)]);
var state_34165__$1 = state_34165;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34165__$1,inst_34163);
} else {
if((state_val_34167 === (12))){
var state_34165__$1 = state_34165;
var statearr_34175_36183 = state_34165__$1;
(statearr_34175_36183[(2)] = null);

(statearr_34175_36183[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (2))){
var inst_34142 = (state_34165[(7)]);
var state_34165__$1 = state_34165;
if(cljs.core.truth_(inst_34142)){
var statearr_34176_36184 = state_34165__$1;
(statearr_34176_36184[(1)] = (4));

} else {
var statearr_34177_36185 = state_34165__$1;
(statearr_34177_36185[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (11))){
var inst_34156 = cljs.core.async.close_BANG_(ch);
var state_34165__$1 = state_34165;
var statearr_34178_36186 = state_34165__$1;
(statearr_34178_36186[(2)] = inst_34156);

(statearr_34178_36186[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (9))){
var state_34165__$1 = state_34165;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34180_36187 = state_34165__$1;
(statearr_34180_36187[(1)] = (11));

} else {
var statearr_34181_36188 = state_34165__$1;
(statearr_34181_36188[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (5))){
var inst_34142 = (state_34165[(7)]);
var state_34165__$1 = state_34165;
var statearr_34182_36189 = state_34165__$1;
(statearr_34182_36189[(2)] = inst_34142);

(statearr_34182_36189[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (10))){
var inst_34161 = (state_34165[(2)]);
var state_34165__$1 = state_34165;
var statearr_34183_36190 = state_34165__$1;
(statearr_34183_36190[(2)] = inst_34161);

(statearr_34183_36190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (8))){
var inst_34142 = (state_34165[(7)]);
var inst_34152 = cljs.core.next(inst_34142);
var inst_34142__$1 = inst_34152;
var state_34165__$1 = (function (){var statearr_34184 = state_34165;
(statearr_34184[(7)] = inst_34142__$1);

return statearr_34184;
})();
var statearr_34185_36191 = state_34165__$1;
(statearr_34185_36191[(2)] = null);

(statearr_34185_36191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32925__auto__ = null;
var cljs$core$async$state_machine__32925__auto____0 = (function (){
var statearr_34186 = [null,null,null,null,null,null,null,null];
(statearr_34186[(0)] = cljs$core$async$state_machine__32925__auto__);

(statearr_34186[(1)] = (1));

return statearr_34186;
});
var cljs$core$async$state_machine__32925__auto____1 = (function (state_34165){
while(true){
var ret_value__32926__auto__ = (function (){try{while(true){
var result__32927__auto__ = switch__32924__auto__(state_34165);
if(cljs.core.keyword_identical_QMARK_(result__32927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32927__auto__;
}
break;
}
}catch (e34187){var ex__32928__auto__ = e34187;
var statearr_34188_36193 = state_34165;
(statearr_34188_36193[(2)] = ex__32928__auto__);


if(cljs.core.seq((state_34165[(4)]))){
var statearr_34189_36195 = state_34165;
(statearr_34189_36195[(1)] = cljs.core.first((state_34165[(4)])));

} else {
throw ex__32928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36196 = state_34165;
state_34165 = G__36196;
continue;
} else {
return ret_value__32926__auto__;
}
break;
}
});
cljs$core$async$state_machine__32925__auto__ = function(state_34165){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32925__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32925__auto____1.call(this,state_34165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32925__auto____0;
cljs$core$async$state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32925__auto____1;
return cljs$core$async$state_machine__32925__auto__;
})()
})();
var state__33323__auto__ = (function (){var statearr_34190 = f__33322__auto__();
(statearr_34190[(6)] = c__33321__auto__);

return statearr_34190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33323__auto__);
}));

return c__33321__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34193 = arguments.length;
switch (G__34193) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_36198 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_36198(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_36199 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_36199(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_36200 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_36200(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_36201 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_36201(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34200 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34200 = (function (ch,cs,meta34201){
this.ch = ch;
this.cs = cs;
this.meta34201 = meta34201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34202,meta34201__$1){
var self__ = this;
var _34202__$1 = this;
return (new cljs.core.async.t_cljs$core$async34200(self__.ch,self__.cs,meta34201__$1));
}));

(cljs.core.async.t_cljs$core$async34200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34202){
var self__ = this;
var _34202__$1 = this;
return self__.meta34201;
}));

(cljs.core.async.t_cljs$core$async34200.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34200.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34200.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34200.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34200.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34200.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34200.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34201","meta34201",-985685800,null)], null);
}));

(cljs.core.async.t_cljs$core$async34200.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34200");

(cljs.core.async.t_cljs$core$async34200.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34200");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34200.
 */
cljs.core.async.__GT_t_cljs$core$async34200 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34200(ch__$1,cs__$1,meta34201){
return (new cljs.core.async.t_cljs$core$async34200(ch__$1,cs__$1,meta34201));
});

}

return (new cljs.core.async.t_cljs$core$async34200(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33321__auto___36202 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33322__auto__ = (function (){var switch__32924__auto__ = (function (state_34342){
var state_val_34343 = (state_34342[(1)]);
if((state_val_34343 === (7))){
var inst_34338 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
var statearr_34344_36203 = state_34342__$1;
(statearr_34344_36203[(2)] = inst_34338);

(statearr_34344_36203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (20))){
var inst_34239 = (state_34342[(7)]);
var inst_34253 = cljs.core.first(inst_34239);
var inst_34254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34253,(0),null);
var inst_34255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34253,(1),null);
var state_34342__$1 = (function (){var statearr_34345 = state_34342;
(statearr_34345[(8)] = inst_34254);

return statearr_34345;
})();
if(cljs.core.truth_(inst_34255)){
var statearr_34346_36204 = state_34342__$1;
(statearr_34346_36204[(1)] = (22));

} else {
var statearr_34347_36205 = state_34342__$1;
(statearr_34347_36205[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (27))){
var inst_34292 = (state_34342[(9)]);
var inst_34283 = (state_34342[(10)]);
var inst_34207 = (state_34342[(11)]);
var inst_34285 = (state_34342[(12)]);
var inst_34292__$1 = cljs.core._nth(inst_34283,inst_34285);
var inst_34293 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34292__$1,inst_34207,done);
var state_34342__$1 = (function (){var statearr_34348 = state_34342;
(statearr_34348[(9)] = inst_34292__$1);

return statearr_34348;
})();
if(cljs.core.truth_(inst_34293)){
var statearr_34349_36206 = state_34342__$1;
(statearr_34349_36206[(1)] = (30));

} else {
var statearr_34350_36207 = state_34342__$1;
(statearr_34350_36207[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (1))){
var state_34342__$1 = state_34342;
var statearr_34351_36208 = state_34342__$1;
(statearr_34351_36208[(2)] = null);

(statearr_34351_36208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (24))){
var inst_34239 = (state_34342[(7)]);
var inst_34260 = (state_34342[(2)]);
var inst_34261 = cljs.core.next(inst_34239);
var inst_34216 = inst_34261;
var inst_34217 = null;
var inst_34218 = (0);
var inst_34219 = (0);
var state_34342__$1 = (function (){var statearr_34352 = state_34342;
(statearr_34352[(13)] = inst_34218);

(statearr_34352[(14)] = inst_34216);

(statearr_34352[(15)] = inst_34217);

(statearr_34352[(16)] = inst_34260);

(statearr_34352[(17)] = inst_34219);

return statearr_34352;
})();
var statearr_34353_36209 = state_34342__$1;
(statearr_34353_36209[(2)] = null);

(statearr_34353_36209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (39))){
var state_34342__$1 = state_34342;
var statearr_34357_36210 = state_34342__$1;
(statearr_34357_36210[(2)] = null);

(statearr_34357_36210[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (4))){
var inst_34207 = (state_34342[(11)]);
var inst_34207__$1 = (state_34342[(2)]);
var inst_34208 = (inst_34207__$1 == null);
var state_34342__$1 = (function (){var statearr_34358 = state_34342;
(statearr_34358[(11)] = inst_34207__$1);

return statearr_34358;
})();
if(cljs.core.truth_(inst_34208)){
var statearr_34359_36211 = state_34342__$1;
(statearr_34359_36211[(1)] = (5));

} else {
var statearr_34360_36212 = state_34342__$1;
(statearr_34360_36212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (15))){
var inst_34218 = (state_34342[(13)]);
var inst_34216 = (state_34342[(14)]);
var inst_34217 = (state_34342[(15)]);
var inst_34219 = (state_34342[(17)]);
var inst_34235 = (state_34342[(2)]);
var inst_34236 = (inst_34219 + (1));
var tmp34354 = inst_34218;
var tmp34355 = inst_34216;
var tmp34356 = inst_34217;
var inst_34216__$1 = tmp34355;
var inst_34217__$1 = tmp34356;
var inst_34218__$1 = tmp34354;
var inst_34219__$1 = inst_34236;
var state_34342__$1 = (function (){var statearr_34362 = state_34342;
(statearr_34362[(13)] = inst_34218__$1);

(statearr_34362[(18)] = inst_34235);

(statearr_34362[(14)] = inst_34216__$1);

(statearr_34362[(15)] = inst_34217__$1);

(statearr_34362[(17)] = inst_34219__$1);

return statearr_34362;
})();
var statearr_34363_36213 = state_34342__$1;
(statearr_34363_36213[(2)] = null);

(statearr_34363_36213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (21))){
var inst_34264 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
var statearr_34367_36214 = state_34342__$1;
(statearr_34367_36214[(2)] = inst_34264);

(statearr_34367_36214[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (31))){
var inst_34292 = (state_34342[(9)]);
var inst_34296 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34292);
var state_34342__$1 = state_34342;
var statearr_34369_36215 = state_34342__$1;
(statearr_34369_36215[(2)] = inst_34296);

(statearr_34369_36215[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (32))){
var inst_34284 = (state_34342[(19)]);
var inst_34283 = (state_34342[(10)]);
var inst_34282 = (state_34342[(20)]);
var inst_34285 = (state_34342[(12)]);
var inst_34298 = (state_34342[(2)]);
var inst_34299 = (inst_34285 + (1));
var tmp34364 = inst_34284;
var tmp34365 = inst_34283;
var tmp34366 = inst_34282;
var inst_34282__$1 = tmp34366;
var inst_34283__$1 = tmp34365;
var inst_34284__$1 = tmp34364;
var inst_34285__$1 = inst_34299;
var state_34342__$1 = (function (){var statearr_34370 = state_34342;
(statearr_34370[(19)] = inst_34284__$1);

(statearr_34370[(10)] = inst_34283__$1);

(statearr_34370[(20)] = inst_34282__$1);

(statearr_34370[(21)] = inst_34298);

(statearr_34370[(12)] = inst_34285__$1);

return statearr_34370;
})();
var statearr_34371_36216 = state_34342__$1;
(statearr_34371_36216[(2)] = null);

(statearr_34371_36216[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (40))){
var inst_34311 = (state_34342[(22)]);
var inst_34315 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34311);
var state_34342__$1 = state_34342;
var statearr_34372_36217 = state_34342__$1;
(statearr_34372_36217[(2)] = inst_34315);

(statearr_34372_36217[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (33))){
var inst_34302 = (state_34342[(23)]);
var inst_34304 = cljs.core.chunked_seq_QMARK_(inst_34302);
var state_34342__$1 = state_34342;
if(inst_34304){
var statearr_34376_36218 = state_34342__$1;
(statearr_34376_36218[(1)] = (36));

} else {
var statearr_34377_36219 = state_34342__$1;
(statearr_34377_36219[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (13))){
var inst_34228 = (state_34342[(24)]);
var inst_34232 = cljs.core.async.close_BANG_(inst_34228);
var state_34342__$1 = state_34342;
var statearr_34378_36220 = state_34342__$1;
(statearr_34378_36220[(2)] = inst_34232);

(statearr_34378_36220[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (22))){
var inst_34254 = (state_34342[(8)]);
var inst_34257 = cljs.core.async.close_BANG_(inst_34254);
var state_34342__$1 = state_34342;
var statearr_34385_36221 = state_34342__$1;
(statearr_34385_36221[(2)] = inst_34257);

(statearr_34385_36221[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (36))){
var inst_34302 = (state_34342[(23)]);
var inst_34306 = cljs.core.chunk_first(inst_34302);
var inst_34307 = cljs.core.chunk_rest(inst_34302);
var inst_34308 = cljs.core.count(inst_34306);
var inst_34282 = inst_34307;
var inst_34283 = inst_34306;
var inst_34284 = inst_34308;
var inst_34285 = (0);
var state_34342__$1 = (function (){var statearr_34386 = state_34342;
(statearr_34386[(19)] = inst_34284);

(statearr_34386[(10)] = inst_34283);

(statearr_34386[(20)] = inst_34282);

(statearr_34386[(12)] = inst_34285);

return statearr_34386;
})();
var statearr_34387_36222 = state_34342__$1;
(statearr_34387_36222[(2)] = null);

(statearr_34387_36222[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (41))){
var inst_34302 = (state_34342[(23)]);
var inst_34317 = (state_34342[(2)]);
var inst_34318 = cljs.core.next(inst_34302);
var inst_34282 = inst_34318;
var inst_34283 = null;
var inst_34284 = (0);
var inst_34285 = (0);
var state_34342__$1 = (function (){var statearr_34388 = state_34342;
(statearr_34388[(25)] = inst_34317);

(statearr_34388[(19)] = inst_34284);

(statearr_34388[(10)] = inst_34283);

(statearr_34388[(20)] = inst_34282);

(statearr_34388[(12)] = inst_34285);

return statearr_34388;
})();
var statearr_34389_36223 = state_34342__$1;
(statearr_34389_36223[(2)] = null);

(statearr_34389_36223[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (43))){
var state_34342__$1 = state_34342;
var statearr_34390_36224 = state_34342__$1;
(statearr_34390_36224[(2)] = null);

(statearr_34390_36224[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (29))){
var inst_34326 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
var statearr_34392_36225 = state_34342__$1;
(statearr_34392_36225[(2)] = inst_34326);

(statearr_34392_36225[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (44))){
var inst_34335 = (state_34342[(2)]);
var state_34342__$1 = (function (){var statearr_34393 = state_34342;
(statearr_34393[(26)] = inst_34335);

return statearr_34393;
})();
var statearr_34396_36226 = state_34342__$1;
(statearr_34396_36226[(2)] = null);

(statearr_34396_36226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (6))){
var inst_34274 = (state_34342[(27)]);
var inst_34273 = cljs.core.deref(cs);
var inst_34274__$1 = cljs.core.keys(inst_34273);
var inst_34275 = cljs.core.count(inst_34274__$1);
var inst_34276 = cljs.core.reset_BANG_(dctr,inst_34275);
var inst_34281 = cljs.core.seq(inst_34274__$1);
var inst_34282 = inst_34281;
var inst_34283 = null;
var inst_34284 = (0);
var inst_34285 = (0);
var state_34342__$1 = (function (){var statearr_34398 = state_34342;
(statearr_34398[(27)] = inst_34274__$1);

(statearr_34398[(19)] = inst_34284);

(statearr_34398[(10)] = inst_34283);

(statearr_34398[(20)] = inst_34282);

(statearr_34398[(28)] = inst_34276);

(statearr_34398[(12)] = inst_34285);

return statearr_34398;
})();
var statearr_34400_36227 = state_34342__$1;
(statearr_34400_36227[(2)] = null);

(statearr_34400_36227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (28))){
var inst_34302 = (state_34342[(23)]);
var inst_34282 = (state_34342[(20)]);
var inst_34302__$1 = cljs.core.seq(inst_34282);
var state_34342__$1 = (function (){var statearr_34401 = state_34342;
(statearr_34401[(23)] = inst_34302__$1);

return statearr_34401;
})();
if(inst_34302__$1){
var statearr_34404_36228 = state_34342__$1;
(statearr_34404_36228[(1)] = (33));

} else {
var statearr_34405_36229 = state_34342__$1;
(statearr_34405_36229[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (25))){
var inst_34284 = (state_34342[(19)]);
var inst_34285 = (state_34342[(12)]);
var inst_34287 = (inst_34285 < inst_34284);
var inst_34288 = inst_34287;
var state_34342__$1 = state_34342;
if(cljs.core.truth_(inst_34288)){
var statearr_34407_36230 = state_34342__$1;
(statearr_34407_36230[(1)] = (27));

} else {
var statearr_34408_36231 = state_34342__$1;
(statearr_34408_36231[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (34))){
var state_34342__$1 = state_34342;
var statearr_34410_36232 = state_34342__$1;
(statearr_34410_36232[(2)] = null);

(statearr_34410_36232[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (17))){
var state_34342__$1 = state_34342;
var statearr_34411_36233 = state_34342__$1;
(statearr_34411_36233[(2)] = null);

(statearr_34411_36233[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (3))){
var inst_34340 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34342__$1,inst_34340);
} else {
if((state_val_34343 === (12))){
var inst_34269 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
var statearr_34420_36234 = state_34342__$1;
(statearr_34420_36234[(2)] = inst_34269);

(statearr_34420_36234[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (2))){
var state_34342__$1 = state_34342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34342__$1,(4),ch);
} else {
if((state_val_34343 === (23))){
var state_34342__$1 = state_34342;
var statearr_34423_36235 = state_34342__$1;
(statearr_34423_36235[(2)] = null);

(statearr_34423_36235[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (35))){
var inst_34324 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
var statearr_34425_36236 = state_34342__$1;
(statearr_34425_36236[(2)] = inst_34324);

(statearr_34425_36236[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (19))){
var inst_34239 = (state_34342[(7)]);
var inst_34243 = cljs.core.chunk_first(inst_34239);
var inst_34245 = cljs.core.chunk_rest(inst_34239);
var inst_34246 = cljs.core.count(inst_34243);
var inst_34216 = inst_34245;
var inst_34217 = inst_34243;
var inst_34218 = inst_34246;
var inst_34219 = (0);
var state_34342__$1 = (function (){var statearr_34427 = state_34342;
(statearr_34427[(13)] = inst_34218);

(statearr_34427[(14)] = inst_34216);

(statearr_34427[(15)] = inst_34217);

(statearr_34427[(17)] = inst_34219);

return statearr_34427;
})();
var statearr_34428_36237 = state_34342__$1;
(statearr_34428_36237[(2)] = null);

(statearr_34428_36237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (11))){
var inst_34216 = (state_34342[(14)]);
var inst_34239 = (state_34342[(7)]);
var inst_34239__$1 = cljs.core.seq(inst_34216);
var state_34342__$1 = (function (){var statearr_34432 = state_34342;
(statearr_34432[(7)] = inst_34239__$1);

return statearr_34432;
})();
if(inst_34239__$1){
var statearr_34433_36238 = state_34342__$1;
(statearr_34433_36238[(1)] = (16));

} else {
var statearr_34434_36239 = state_34342__$1;
(statearr_34434_36239[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (9))){
var inst_34271 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
var statearr_34436_36240 = state_34342__$1;
(statearr_34436_36240[(2)] = inst_34271);

(statearr_34436_36240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (5))){
var inst_34214 = cljs.core.deref(cs);
var inst_34215 = cljs.core.seq(inst_34214);
var inst_34216 = inst_34215;
var inst_34217 = null;
var inst_34218 = (0);
var inst_34219 = (0);
var state_34342__$1 = (function (){var statearr_34437 = state_34342;
(statearr_34437[(13)] = inst_34218);

(statearr_34437[(14)] = inst_34216);

(statearr_34437[(15)] = inst_34217);

(statearr_34437[(17)] = inst_34219);

return statearr_34437;
})();
var statearr_34440_36245 = state_34342__$1;
(statearr_34440_36245[(2)] = null);

(statearr_34440_36245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (14))){
var state_34342__$1 = state_34342;
var statearr_34442_36246 = state_34342__$1;
(statearr_34442_36246[(2)] = null);

(statearr_34442_36246[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (45))){
var inst_34332 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
var statearr_34443_36247 = state_34342__$1;
(statearr_34443_36247[(2)] = inst_34332);

(statearr_34443_36247[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (26))){
var inst_34274 = (state_34342[(27)]);
var inst_34328 = (state_34342[(2)]);
var inst_34329 = cljs.core.seq(inst_34274);
var state_34342__$1 = (function (){var statearr_34445 = state_34342;
(statearr_34445[(29)] = inst_34328);

return statearr_34445;
})();
if(inst_34329){
var statearr_34446_36248 = state_34342__$1;
(statearr_34446_36248[(1)] = (42));

} else {
var statearr_34447_36249 = state_34342__$1;
(statearr_34447_36249[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (16))){
var inst_34239 = (state_34342[(7)]);
var inst_34241 = cljs.core.chunked_seq_QMARK_(inst_34239);
var state_34342__$1 = state_34342;
if(inst_34241){
var statearr_34451_36250 = state_34342__$1;
(statearr_34451_36250[(1)] = (19));

} else {
var statearr_34452_36251 = state_34342__$1;
(statearr_34452_36251[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (38))){
var inst_34321 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
var statearr_34453_36252 = state_34342__$1;
(statearr_34453_36252[(2)] = inst_34321);

(statearr_34453_36252[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (30))){
var state_34342__$1 = state_34342;
var statearr_34455_36253 = state_34342__$1;
(statearr_34455_36253[(2)] = null);

(statearr_34455_36253[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (10))){
var inst_34217 = (state_34342[(15)]);
var inst_34219 = (state_34342[(17)]);
var inst_34227 = cljs.core._nth(inst_34217,inst_34219);
var inst_34228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34227,(0),null);
var inst_34229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34227,(1),null);
var state_34342__$1 = (function (){var statearr_34459 = state_34342;
(statearr_34459[(24)] = inst_34228);

return statearr_34459;
})();
if(cljs.core.truth_(inst_34229)){
var statearr_34460_36254 = state_34342__$1;
(statearr_34460_36254[(1)] = (13));

} else {
var statearr_34461_36255 = state_34342__$1;
(statearr_34461_36255[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (18))){
var inst_34267 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
var statearr_34463_36256 = state_34342__$1;
(statearr_34463_36256[(2)] = inst_34267);

(statearr_34463_36256[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (42))){
var state_34342__$1 = state_34342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34342__$1,(45),dchan);
} else {
if((state_val_34343 === (37))){
var inst_34302 = (state_34342[(23)]);
var inst_34207 = (state_34342[(11)]);
var inst_34311 = (state_34342[(22)]);
var inst_34311__$1 = cljs.core.first(inst_34302);
var inst_34312 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34311__$1,inst_34207,done);
var state_34342__$1 = (function (){var statearr_34467 = state_34342;
(statearr_34467[(22)] = inst_34311__$1);

return statearr_34467;
})();
if(cljs.core.truth_(inst_34312)){
var statearr_34468_36258 = state_34342__$1;
(statearr_34468_36258[(1)] = (39));

} else {
var statearr_34470_36259 = state_34342__$1;
(statearr_34470_36259[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (8))){
var inst_34218 = (state_34342[(13)]);
var inst_34219 = (state_34342[(17)]);
var inst_34221 = (inst_34219 < inst_34218);
var inst_34222 = inst_34221;
var state_34342__$1 = state_34342;
if(cljs.core.truth_(inst_34222)){
var statearr_34472_36260 = state_34342__$1;
(statearr_34472_36260[(1)] = (10));

} else {
var statearr_34473_36261 = state_34342__$1;
(statearr_34473_36261[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32925__auto__ = null;
var cljs$core$async$mult_$_state_machine__32925__auto____0 = (function (){
var statearr_34474 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34474[(0)] = cljs$core$async$mult_$_state_machine__32925__auto__);

(statearr_34474[(1)] = (1));

return statearr_34474;
});
var cljs$core$async$mult_$_state_machine__32925__auto____1 = (function (state_34342){
while(true){
var ret_value__32926__auto__ = (function (){try{while(true){
var result__32927__auto__ = switch__32924__auto__(state_34342);
if(cljs.core.keyword_identical_QMARK_(result__32927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32927__auto__;
}
break;
}
}catch (e34475){var ex__32928__auto__ = e34475;
var statearr_34476_36267 = state_34342;
(statearr_34476_36267[(2)] = ex__32928__auto__);


if(cljs.core.seq((state_34342[(4)]))){
var statearr_34477_36268 = state_34342;
(statearr_34477_36268[(1)] = cljs.core.first((state_34342[(4)])));

} else {
throw ex__32928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36269 = state_34342;
state_34342 = G__36269;
continue;
} else {
return ret_value__32926__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32925__auto__ = function(state_34342){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32925__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32925__auto____1.call(this,state_34342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32925__auto____0;
cljs$core$async$mult_$_state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32925__auto____1;
return cljs$core$async$mult_$_state_machine__32925__auto__;
})()
})();
var state__33323__auto__ = (function (){var statearr_34482 = f__33322__auto__();
(statearr_34482[(6)] = c__33321__auto___36202);

return statearr_34482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33323__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34485 = arguments.length;
switch (G__34485) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_36271 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_36271(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_36275 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_36275(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_36277 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_36277(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_36278 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_36278(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_36279 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_36279(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36281 = arguments.length;
var i__4737__auto___36282 = (0);
while(true){
if((i__4737__auto___36282 < len__4736__auto___36281)){
args__4742__auto__.push((arguments[i__4737__auto___36282]));

var G__36283 = (i__4737__auto___36282 + (1));
i__4737__auto___36282 = G__36283;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34532){
var map__34533 = p__34532;
var map__34533__$1 = (((((!((map__34533 == null))))?(((((map__34533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34533):map__34533);
var opts = map__34533__$1;
var statearr_34536_36285 = state;
(statearr_34536_36285[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34537_36286 = state;
(statearr_34537_36286[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_34541_36287 = state;
(statearr_34541_36287[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34524){
var G__34525 = cljs.core.first(seq34524);
var seq34524__$1 = cljs.core.next(seq34524);
var G__34526 = cljs.core.first(seq34524__$1);
var seq34524__$2 = cljs.core.next(seq34524__$1);
var G__34527 = cljs.core.first(seq34524__$2);
var seq34524__$3 = cljs.core.next(seq34524__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34525,G__34526,G__34527,seq34524__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34555 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34555 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34556){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34556 = meta34556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34557,meta34556__$1){
var self__ = this;
var _34557__$1 = this;
return (new cljs.core.async.t_cljs$core$async34555(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34556__$1));
}));

(cljs.core.async.t_cljs$core$async34555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34557){
var self__ = this;
var _34557__$1 = this;
return self__.meta34556;
}));

(cljs.core.async.t_cljs$core$async34555.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34555.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34555.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34555.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34555.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34555.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34555.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34555.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34556","meta34556",1151891271,null)], null);
}));

(cljs.core.async.t_cljs$core$async34555.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34555");

(cljs.core.async.t_cljs$core$async34555.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34555");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34555.
 */
cljs.core.async.__GT_t_cljs$core$async34555 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34555(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34556){
return (new cljs.core.async.t_cljs$core$async34555(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34556));
});

}

return (new cljs.core.async.t_cljs$core$async34555(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33321__auto___36295 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33322__auto__ = (function (){var switch__32924__auto__ = (function (state_34698){
var state_val_34699 = (state_34698[(1)]);
if((state_val_34699 === (7))){
var inst_34592 = (state_34698[(2)]);
var state_34698__$1 = state_34698;
var statearr_34705_36296 = state_34698__$1;
(statearr_34705_36296[(2)] = inst_34592);

(statearr_34705_36296[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (20))){
var inst_34606 = (state_34698[(7)]);
var state_34698__$1 = state_34698;
var statearr_34712_36297 = state_34698__$1;
(statearr_34712_36297[(2)] = inst_34606);

(statearr_34712_36297[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (27))){
var state_34698__$1 = state_34698;
var statearr_34715_36298 = state_34698__$1;
(statearr_34715_36298[(2)] = null);

(statearr_34715_36298[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (1))){
var inst_34578 = (state_34698[(8)]);
var inst_34578__$1 = calc_state();
var inst_34580 = (inst_34578__$1 == null);
var inst_34581 = cljs.core.not(inst_34580);
var state_34698__$1 = (function (){var statearr_34717 = state_34698;
(statearr_34717[(8)] = inst_34578__$1);

return statearr_34717;
})();
if(inst_34581){
var statearr_34719_36299 = state_34698__$1;
(statearr_34719_36299[(1)] = (2));

} else {
var statearr_34720_36300 = state_34698__$1;
(statearr_34720_36300[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (24))){
var inst_34632 = (state_34698[(9)]);
var inst_34658 = (state_34698[(10)]);
var inst_34641 = (state_34698[(11)]);
var inst_34658__$1 = (inst_34632.cljs$core$IFn$_invoke$arity$1 ? inst_34632.cljs$core$IFn$_invoke$arity$1(inst_34641) : inst_34632.call(null,inst_34641));
var state_34698__$1 = (function (){var statearr_34722 = state_34698;
(statearr_34722[(10)] = inst_34658__$1);

return statearr_34722;
})();
if(cljs.core.truth_(inst_34658__$1)){
var statearr_34724_36301 = state_34698__$1;
(statearr_34724_36301[(1)] = (29));

} else {
var statearr_34726_36302 = state_34698__$1;
(statearr_34726_36302[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (4))){
var inst_34595 = (state_34698[(2)]);
var state_34698__$1 = state_34698;
if(cljs.core.truth_(inst_34595)){
var statearr_34727_36303 = state_34698__$1;
(statearr_34727_36303[(1)] = (8));

} else {
var statearr_34728_36304 = state_34698__$1;
(statearr_34728_36304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (15))){
var inst_34625 = (state_34698[(2)]);
var state_34698__$1 = state_34698;
if(cljs.core.truth_(inst_34625)){
var statearr_34734_36305 = state_34698__$1;
(statearr_34734_36305[(1)] = (19));

} else {
var statearr_34735_36306 = state_34698__$1;
(statearr_34735_36306[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (21))){
var inst_34630 = (state_34698[(12)]);
var inst_34630__$1 = (state_34698[(2)]);
var inst_34632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34630__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34630__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34630__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34698__$1 = (function (){var statearr_34742 = state_34698;
(statearr_34742[(9)] = inst_34632);

(statearr_34742[(13)] = inst_34633);

(statearr_34742[(12)] = inst_34630__$1);

return statearr_34742;
})();
return cljs.core.async.ioc_alts_BANG_(state_34698__$1,(22),inst_34634);
} else {
if((state_val_34699 === (31))){
var inst_34667 = (state_34698[(2)]);
var state_34698__$1 = state_34698;
if(cljs.core.truth_(inst_34667)){
var statearr_34744_36307 = state_34698__$1;
(statearr_34744_36307[(1)] = (32));

} else {
var statearr_34745_36308 = state_34698__$1;
(statearr_34745_36308[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (32))){
var inst_34640 = (state_34698[(14)]);
var state_34698__$1 = state_34698;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34698__$1,(35),out,inst_34640);
} else {
if((state_val_34699 === (33))){
var inst_34630 = (state_34698[(12)]);
var inst_34606 = inst_34630;
var state_34698__$1 = (function (){var statearr_34758 = state_34698;
(statearr_34758[(7)] = inst_34606);

return statearr_34758;
})();
var statearr_34761_36311 = state_34698__$1;
(statearr_34761_36311[(2)] = null);

(statearr_34761_36311[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (13))){
var inst_34606 = (state_34698[(7)]);
var inst_34614 = inst_34606.cljs$lang$protocol_mask$partition0$;
var inst_34615 = (inst_34614 & (64));
var inst_34616 = inst_34606.cljs$core$ISeq$;
var inst_34617 = (cljs.core.PROTOCOL_SENTINEL === inst_34616);
var inst_34618 = ((inst_34615) || (inst_34617));
var state_34698__$1 = state_34698;
if(cljs.core.truth_(inst_34618)){
var statearr_34764_36312 = state_34698__$1;
(statearr_34764_36312[(1)] = (16));

} else {
var statearr_34765_36313 = state_34698__$1;
(statearr_34765_36313[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (22))){
var inst_34641 = (state_34698[(11)]);
var inst_34640 = (state_34698[(14)]);
var inst_34639 = (state_34698[(2)]);
var inst_34640__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34639,(0),null);
var inst_34641__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34639,(1),null);
var inst_34643 = (inst_34640__$1 == null);
var inst_34644 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34641__$1,change);
var inst_34645 = ((inst_34643) || (inst_34644));
var state_34698__$1 = (function (){var statearr_34770 = state_34698;
(statearr_34770[(11)] = inst_34641__$1);

(statearr_34770[(14)] = inst_34640__$1);

return statearr_34770;
})();
if(cljs.core.truth_(inst_34645)){
var statearr_34773_36314 = state_34698__$1;
(statearr_34773_36314[(1)] = (23));

} else {
var statearr_34775_36315 = state_34698__$1;
(statearr_34775_36315[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (36))){
var inst_34630 = (state_34698[(12)]);
var inst_34606 = inst_34630;
var state_34698__$1 = (function (){var statearr_34777 = state_34698;
(statearr_34777[(7)] = inst_34606);

return statearr_34777;
})();
var statearr_34778_36323 = state_34698__$1;
(statearr_34778_36323[(2)] = null);

(statearr_34778_36323[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (29))){
var inst_34658 = (state_34698[(10)]);
var state_34698__$1 = state_34698;
var statearr_34781_36324 = state_34698__$1;
(statearr_34781_36324[(2)] = inst_34658);

(statearr_34781_36324[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (6))){
var state_34698__$1 = state_34698;
var statearr_34783_36325 = state_34698__$1;
(statearr_34783_36325[(2)] = false);

(statearr_34783_36325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (28))){
var inst_34654 = (state_34698[(2)]);
var inst_34655 = calc_state();
var inst_34606 = inst_34655;
var state_34698__$1 = (function (){var statearr_34787 = state_34698;
(statearr_34787[(15)] = inst_34654);

(statearr_34787[(7)] = inst_34606);

return statearr_34787;
})();
var statearr_34788_36326 = state_34698__$1;
(statearr_34788_36326[(2)] = null);

(statearr_34788_36326[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (25))){
var inst_34681 = (state_34698[(2)]);
var state_34698__$1 = state_34698;
var statearr_34789_36327 = state_34698__$1;
(statearr_34789_36327[(2)] = inst_34681);

(statearr_34789_36327[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (34))){
var inst_34679 = (state_34698[(2)]);
var state_34698__$1 = state_34698;
var statearr_34803_36328 = state_34698__$1;
(statearr_34803_36328[(2)] = inst_34679);

(statearr_34803_36328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (17))){
var state_34698__$1 = state_34698;
var statearr_34814_36329 = state_34698__$1;
(statearr_34814_36329[(2)] = false);

(statearr_34814_36329[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (3))){
var state_34698__$1 = state_34698;
var statearr_34818_36330 = state_34698__$1;
(statearr_34818_36330[(2)] = false);

(statearr_34818_36330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (12))){
var inst_34683 = (state_34698[(2)]);
var state_34698__$1 = state_34698;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34698__$1,inst_34683);
} else {
if((state_val_34699 === (2))){
var inst_34578 = (state_34698[(8)]);
var inst_34584 = inst_34578.cljs$lang$protocol_mask$partition0$;
var inst_34585 = (inst_34584 & (64));
var inst_34586 = inst_34578.cljs$core$ISeq$;
var inst_34587 = (cljs.core.PROTOCOL_SENTINEL === inst_34586);
var inst_34588 = ((inst_34585) || (inst_34587));
var state_34698__$1 = state_34698;
if(cljs.core.truth_(inst_34588)){
var statearr_34820_36337 = state_34698__$1;
(statearr_34820_36337[(1)] = (5));

} else {
var statearr_34821_36338 = state_34698__$1;
(statearr_34821_36338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (23))){
var inst_34640 = (state_34698[(14)]);
var inst_34648 = (inst_34640 == null);
var state_34698__$1 = state_34698;
if(cljs.core.truth_(inst_34648)){
var statearr_34824_36339 = state_34698__$1;
(statearr_34824_36339[(1)] = (26));

} else {
var statearr_34825_36340 = state_34698__$1;
(statearr_34825_36340[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (35))){
var inst_34670 = (state_34698[(2)]);
var state_34698__$1 = state_34698;
if(cljs.core.truth_(inst_34670)){
var statearr_34826_36341 = state_34698__$1;
(statearr_34826_36341[(1)] = (36));

} else {
var statearr_34827_36342 = state_34698__$1;
(statearr_34827_36342[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (19))){
var inst_34606 = (state_34698[(7)]);
var inst_34627 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34606);
var state_34698__$1 = state_34698;
var statearr_34828_36343 = state_34698__$1;
(statearr_34828_36343[(2)] = inst_34627);

(statearr_34828_36343[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (11))){
var inst_34606 = (state_34698[(7)]);
var inst_34611 = (inst_34606 == null);
var inst_34612 = cljs.core.not(inst_34611);
var state_34698__$1 = state_34698;
if(inst_34612){
var statearr_34837_36344 = state_34698__$1;
(statearr_34837_36344[(1)] = (13));

} else {
var statearr_34838_36345 = state_34698__$1;
(statearr_34838_36345[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (9))){
var inst_34578 = (state_34698[(8)]);
var state_34698__$1 = state_34698;
var statearr_34839_36346 = state_34698__$1;
(statearr_34839_36346[(2)] = inst_34578);

(statearr_34839_36346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (5))){
var state_34698__$1 = state_34698;
var statearr_34840_36347 = state_34698__$1;
(statearr_34840_36347[(2)] = true);

(statearr_34840_36347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (14))){
var state_34698__$1 = state_34698;
var statearr_34842_36348 = state_34698__$1;
(statearr_34842_36348[(2)] = false);

(statearr_34842_36348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (26))){
var inst_34641 = (state_34698[(11)]);
var inst_34651 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34641);
var state_34698__$1 = state_34698;
var statearr_34850_36349 = state_34698__$1;
(statearr_34850_36349[(2)] = inst_34651);

(statearr_34850_36349[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (16))){
var state_34698__$1 = state_34698;
var statearr_34851_36350 = state_34698__$1;
(statearr_34851_36350[(2)] = true);

(statearr_34851_36350[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (38))){
var inst_34675 = (state_34698[(2)]);
var state_34698__$1 = state_34698;
var statearr_34852_36351 = state_34698__$1;
(statearr_34852_36351[(2)] = inst_34675);

(statearr_34852_36351[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (30))){
var inst_34632 = (state_34698[(9)]);
var inst_34633 = (state_34698[(13)]);
var inst_34641 = (state_34698[(11)]);
var inst_34662 = cljs.core.empty_QMARK_(inst_34632);
var inst_34663 = (inst_34633.cljs$core$IFn$_invoke$arity$1 ? inst_34633.cljs$core$IFn$_invoke$arity$1(inst_34641) : inst_34633.call(null,inst_34641));
var inst_34664 = cljs.core.not(inst_34663);
var inst_34665 = ((inst_34662) && (inst_34664));
var state_34698__$1 = state_34698;
var statearr_34859_36352 = state_34698__$1;
(statearr_34859_36352[(2)] = inst_34665);

(statearr_34859_36352[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (10))){
var inst_34578 = (state_34698[(8)]);
var inst_34600 = (state_34698[(2)]);
var inst_34601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34600,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34600,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34600,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34606 = inst_34578;
var state_34698__$1 = (function (){var statearr_34860 = state_34698;
(statearr_34860[(16)] = inst_34601);

(statearr_34860[(17)] = inst_34603);

(statearr_34860[(18)] = inst_34602);

(statearr_34860[(7)] = inst_34606);

return statearr_34860;
})();
var statearr_34861_36353 = state_34698__$1;
(statearr_34861_36353[(2)] = null);

(statearr_34861_36353[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (18))){
var inst_34622 = (state_34698[(2)]);
var state_34698__$1 = state_34698;
var statearr_34862_36357 = state_34698__$1;
(statearr_34862_36357[(2)] = inst_34622);

(statearr_34862_36357[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (37))){
var state_34698__$1 = state_34698;
var statearr_34863_36358 = state_34698__$1;
(statearr_34863_36358[(2)] = null);

(statearr_34863_36358[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34699 === (8))){
var inst_34578 = (state_34698[(8)]);
var inst_34597 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34578);
var state_34698__$1 = state_34698;
var statearr_34871_36359 = state_34698__$1;
(statearr_34871_36359[(2)] = inst_34597);

(statearr_34871_36359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32925__auto__ = null;
var cljs$core$async$mix_$_state_machine__32925__auto____0 = (function (){
var statearr_34873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34873[(0)] = cljs$core$async$mix_$_state_machine__32925__auto__);

(statearr_34873[(1)] = (1));

return statearr_34873;
});
var cljs$core$async$mix_$_state_machine__32925__auto____1 = (function (state_34698){
while(true){
var ret_value__32926__auto__ = (function (){try{while(true){
var result__32927__auto__ = switch__32924__auto__(state_34698);
if(cljs.core.keyword_identical_QMARK_(result__32927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32927__auto__;
}
break;
}
}catch (e34877){var ex__32928__auto__ = e34877;
var statearr_34879_36360 = state_34698;
(statearr_34879_36360[(2)] = ex__32928__auto__);


if(cljs.core.seq((state_34698[(4)]))){
var statearr_34880_36363 = state_34698;
(statearr_34880_36363[(1)] = cljs.core.first((state_34698[(4)])));

} else {
throw ex__32928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36368 = state_34698;
state_34698 = G__36368;
continue;
} else {
return ret_value__32926__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32925__auto__ = function(state_34698){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32925__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32925__auto____1.call(this,state_34698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32925__auto____0;
cljs$core$async$mix_$_state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32925__auto____1;
return cljs$core$async$mix_$_state_machine__32925__auto__;
})()
})();
var state__33323__auto__ = (function (){var statearr_34884 = f__33322__auto__();
(statearr_34884[(6)] = c__33321__auto___36295);

return statearr_34884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33323__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_36369 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_36369(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_36370 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_36370(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_36377 = (function() {
var G__36378 = null;
var G__36378__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__36378__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__36378 = function(p,v){
switch(arguments.length){
case 1:
return G__36378__1.call(this,p);
case 2:
return G__36378__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36378.cljs$core$IFn$_invoke$arity$1 = G__36378__1;
G__36378.cljs$core$IFn$_invoke$arity$2 = G__36378__2;
return G__36378;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34897 = arguments.length;
switch (G__34897) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36377(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36377(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34901 = arguments.length;
switch (G__34901) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34899_SHARP_){
if(cljs.core.truth_((p1__34899_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34899_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34899_SHARP_.call(null,topic)))){
return p1__34899_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34899_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34902 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34902 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34903){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34903 = meta34903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34904,meta34903__$1){
var self__ = this;
var _34904__$1 = this;
return (new cljs.core.async.t_cljs$core$async34902(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34903__$1));
}));

(cljs.core.async.t_cljs$core$async34902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34904){
var self__ = this;
var _34904__$1 = this;
return self__.meta34903;
}));

(cljs.core.async.t_cljs$core$async34902.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34902.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34902.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34902.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34902.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34902.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34902.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34903","meta34903",1032352852,null)], null);
}));

(cljs.core.async.t_cljs$core$async34902.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34902.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34902");

(cljs.core.async.t_cljs$core$async34902.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34902");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34902.
 */
cljs.core.async.__GT_t_cljs$core$async34902 = (function cljs$core$async$__GT_t_cljs$core$async34902(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34903){
return (new cljs.core.async.t_cljs$core$async34902(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34903));
});

}

return (new cljs.core.async.t_cljs$core$async34902(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33321__auto___36387 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33322__auto__ = (function (){var switch__32924__auto__ = (function (state_34980){
var state_val_34981 = (state_34980[(1)]);
if((state_val_34981 === (7))){
var inst_34976 = (state_34980[(2)]);
var state_34980__$1 = state_34980;
var statearr_34982_36388 = state_34980__$1;
(statearr_34982_36388[(2)] = inst_34976);

(statearr_34982_36388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (20))){
var state_34980__$1 = state_34980;
var statearr_34983_36389 = state_34980__$1;
(statearr_34983_36389[(2)] = null);

(statearr_34983_36389[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (1))){
var state_34980__$1 = state_34980;
var statearr_34984_36390 = state_34980__$1;
(statearr_34984_36390[(2)] = null);

(statearr_34984_36390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (24))){
var inst_34959 = (state_34980[(7)]);
var inst_34968 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34959);
var state_34980__$1 = state_34980;
var statearr_34985_36391 = state_34980__$1;
(statearr_34985_36391[(2)] = inst_34968);

(statearr_34985_36391[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (4))){
var inst_34909 = (state_34980[(8)]);
var inst_34909__$1 = (state_34980[(2)]);
var inst_34910 = (inst_34909__$1 == null);
var state_34980__$1 = (function (){var statearr_34986 = state_34980;
(statearr_34986[(8)] = inst_34909__$1);

return statearr_34986;
})();
if(cljs.core.truth_(inst_34910)){
var statearr_34987_36392 = state_34980__$1;
(statearr_34987_36392[(1)] = (5));

} else {
var statearr_34988_36393 = state_34980__$1;
(statearr_34988_36393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (15))){
var inst_34953 = (state_34980[(2)]);
var state_34980__$1 = state_34980;
var statearr_34989_36395 = state_34980__$1;
(statearr_34989_36395[(2)] = inst_34953);

(statearr_34989_36395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (21))){
var inst_34973 = (state_34980[(2)]);
var state_34980__$1 = (function (){var statearr_34990 = state_34980;
(statearr_34990[(9)] = inst_34973);

return statearr_34990;
})();
var statearr_34991_36397 = state_34980__$1;
(statearr_34991_36397[(2)] = null);

(statearr_34991_36397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (13))){
var inst_34935 = (state_34980[(10)]);
var inst_34937 = cljs.core.chunked_seq_QMARK_(inst_34935);
var state_34980__$1 = state_34980;
if(inst_34937){
var statearr_34992_36399 = state_34980__$1;
(statearr_34992_36399[(1)] = (16));

} else {
var statearr_34993_36400 = state_34980__$1;
(statearr_34993_36400[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (22))){
var inst_34965 = (state_34980[(2)]);
var state_34980__$1 = state_34980;
if(cljs.core.truth_(inst_34965)){
var statearr_34994_36401 = state_34980__$1;
(statearr_34994_36401[(1)] = (23));

} else {
var statearr_34995_36402 = state_34980__$1;
(statearr_34995_36402[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (6))){
var inst_34959 = (state_34980[(7)]);
var inst_34909 = (state_34980[(8)]);
var inst_34961 = (state_34980[(11)]);
var inst_34959__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34909) : topic_fn.call(null,inst_34909));
var inst_34960 = cljs.core.deref(mults);
var inst_34961__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34960,inst_34959__$1);
var state_34980__$1 = (function (){var statearr_34996 = state_34980;
(statearr_34996[(7)] = inst_34959__$1);

(statearr_34996[(11)] = inst_34961__$1);

return statearr_34996;
})();
if(cljs.core.truth_(inst_34961__$1)){
var statearr_34997_36403 = state_34980__$1;
(statearr_34997_36403[(1)] = (19));

} else {
var statearr_34998_36404 = state_34980__$1;
(statearr_34998_36404[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (25))){
var inst_34970 = (state_34980[(2)]);
var state_34980__$1 = state_34980;
var statearr_34999_36405 = state_34980__$1;
(statearr_34999_36405[(2)] = inst_34970);

(statearr_34999_36405[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (17))){
var inst_34935 = (state_34980[(10)]);
var inst_34944 = cljs.core.first(inst_34935);
var inst_34945 = cljs.core.async.muxch_STAR_(inst_34944);
var inst_34946 = cljs.core.async.close_BANG_(inst_34945);
var inst_34947 = cljs.core.next(inst_34935);
var inst_34920 = inst_34947;
var inst_34921 = null;
var inst_34922 = (0);
var inst_34923 = (0);
var state_34980__$1 = (function (){var statearr_35000 = state_34980;
(statearr_35000[(12)] = inst_34946);

(statearr_35000[(13)] = inst_34923);

(statearr_35000[(14)] = inst_34920);

(statearr_35000[(15)] = inst_34921);

(statearr_35000[(16)] = inst_34922);

return statearr_35000;
})();
var statearr_35001_36406 = state_34980__$1;
(statearr_35001_36406[(2)] = null);

(statearr_35001_36406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (3))){
var inst_34978 = (state_34980[(2)]);
var state_34980__$1 = state_34980;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34980__$1,inst_34978);
} else {
if((state_val_34981 === (12))){
var inst_34955 = (state_34980[(2)]);
var state_34980__$1 = state_34980;
var statearr_35003_36407 = state_34980__$1;
(statearr_35003_36407[(2)] = inst_34955);

(statearr_35003_36407[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (2))){
var state_34980__$1 = state_34980;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34980__$1,(4),ch);
} else {
if((state_val_34981 === (23))){
var state_34980__$1 = state_34980;
var statearr_35005_36408 = state_34980__$1;
(statearr_35005_36408[(2)] = null);

(statearr_35005_36408[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (19))){
var inst_34909 = (state_34980[(8)]);
var inst_34961 = (state_34980[(11)]);
var inst_34963 = cljs.core.async.muxch_STAR_(inst_34961);
var state_34980__$1 = state_34980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34980__$1,(22),inst_34963,inst_34909);
} else {
if((state_val_34981 === (11))){
var inst_34920 = (state_34980[(14)]);
var inst_34935 = (state_34980[(10)]);
var inst_34935__$1 = cljs.core.seq(inst_34920);
var state_34980__$1 = (function (){var statearr_35006 = state_34980;
(statearr_35006[(10)] = inst_34935__$1);

return statearr_35006;
})();
if(inst_34935__$1){
var statearr_35007_36409 = state_34980__$1;
(statearr_35007_36409[(1)] = (13));

} else {
var statearr_35008_36410 = state_34980__$1;
(statearr_35008_36410[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (9))){
var inst_34957 = (state_34980[(2)]);
var state_34980__$1 = state_34980;
var statearr_35009_36411 = state_34980__$1;
(statearr_35009_36411[(2)] = inst_34957);

(statearr_35009_36411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (5))){
var inst_34917 = cljs.core.deref(mults);
var inst_34918 = cljs.core.vals(inst_34917);
var inst_34919 = cljs.core.seq(inst_34918);
var inst_34920 = inst_34919;
var inst_34921 = null;
var inst_34922 = (0);
var inst_34923 = (0);
var state_34980__$1 = (function (){var statearr_35010 = state_34980;
(statearr_35010[(13)] = inst_34923);

(statearr_35010[(14)] = inst_34920);

(statearr_35010[(15)] = inst_34921);

(statearr_35010[(16)] = inst_34922);

return statearr_35010;
})();
var statearr_35011_36412 = state_34980__$1;
(statearr_35011_36412[(2)] = null);

(statearr_35011_36412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (14))){
var state_34980__$1 = state_34980;
var statearr_35015_36413 = state_34980__$1;
(statearr_35015_36413[(2)] = null);

(statearr_35015_36413[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (16))){
var inst_34935 = (state_34980[(10)]);
var inst_34939 = cljs.core.chunk_first(inst_34935);
var inst_34940 = cljs.core.chunk_rest(inst_34935);
var inst_34941 = cljs.core.count(inst_34939);
var inst_34920 = inst_34940;
var inst_34921 = inst_34939;
var inst_34922 = inst_34941;
var inst_34923 = (0);
var state_34980__$1 = (function (){var statearr_35016 = state_34980;
(statearr_35016[(13)] = inst_34923);

(statearr_35016[(14)] = inst_34920);

(statearr_35016[(15)] = inst_34921);

(statearr_35016[(16)] = inst_34922);

return statearr_35016;
})();
var statearr_35017_36419 = state_34980__$1;
(statearr_35017_36419[(2)] = null);

(statearr_35017_36419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (10))){
var inst_34923 = (state_34980[(13)]);
var inst_34920 = (state_34980[(14)]);
var inst_34921 = (state_34980[(15)]);
var inst_34922 = (state_34980[(16)]);
var inst_34928 = cljs.core._nth(inst_34921,inst_34923);
var inst_34929 = cljs.core.async.muxch_STAR_(inst_34928);
var inst_34930 = cljs.core.async.close_BANG_(inst_34929);
var inst_34932 = (inst_34923 + (1));
var tmp35012 = inst_34920;
var tmp35013 = inst_34921;
var tmp35014 = inst_34922;
var inst_34920__$1 = tmp35012;
var inst_34921__$1 = tmp35013;
var inst_34922__$1 = tmp35014;
var inst_34923__$1 = inst_34932;
var state_34980__$1 = (function (){var statearr_35018 = state_34980;
(statearr_35018[(13)] = inst_34923__$1);

(statearr_35018[(14)] = inst_34920__$1);

(statearr_35018[(15)] = inst_34921__$1);

(statearr_35018[(17)] = inst_34930);

(statearr_35018[(16)] = inst_34922__$1);

return statearr_35018;
})();
var statearr_35019_36420 = state_34980__$1;
(statearr_35019_36420[(2)] = null);

(statearr_35019_36420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (18))){
var inst_34950 = (state_34980[(2)]);
var state_34980__$1 = state_34980;
var statearr_35020_36421 = state_34980__$1;
(statearr_35020_36421[(2)] = inst_34950);

(statearr_35020_36421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (8))){
var inst_34923 = (state_34980[(13)]);
var inst_34922 = (state_34980[(16)]);
var inst_34925 = (inst_34923 < inst_34922);
var inst_34926 = inst_34925;
var state_34980__$1 = state_34980;
if(cljs.core.truth_(inst_34926)){
var statearr_35021_36422 = state_34980__$1;
(statearr_35021_36422[(1)] = (10));

} else {
var statearr_35022_36423 = state_34980__$1;
(statearr_35022_36423[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32925__auto__ = null;
var cljs$core$async$state_machine__32925__auto____0 = (function (){
var statearr_35023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35023[(0)] = cljs$core$async$state_machine__32925__auto__);

(statearr_35023[(1)] = (1));

return statearr_35023;
});
var cljs$core$async$state_machine__32925__auto____1 = (function (state_34980){
while(true){
var ret_value__32926__auto__ = (function (){try{while(true){
var result__32927__auto__ = switch__32924__auto__(state_34980);
if(cljs.core.keyword_identical_QMARK_(result__32927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32927__auto__;
}
break;
}
}catch (e35024){var ex__32928__auto__ = e35024;
var statearr_35025_36424 = state_34980;
(statearr_35025_36424[(2)] = ex__32928__auto__);


if(cljs.core.seq((state_34980[(4)]))){
var statearr_35026_36425 = state_34980;
(statearr_35026_36425[(1)] = cljs.core.first((state_34980[(4)])));

} else {
throw ex__32928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36426 = state_34980;
state_34980 = G__36426;
continue;
} else {
return ret_value__32926__auto__;
}
break;
}
});
cljs$core$async$state_machine__32925__auto__ = function(state_34980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32925__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32925__auto____1.call(this,state_34980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32925__auto____0;
cljs$core$async$state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32925__auto____1;
return cljs$core$async$state_machine__32925__auto__;
})()
})();
var state__33323__auto__ = (function (){var statearr_35028 = f__33322__auto__();
(statearr_35028[(6)] = c__33321__auto___36387);

return statearr_35028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33323__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35031 = arguments.length;
switch (G__35031) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35038 = arguments.length;
switch (G__35038) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35045 = arguments.length;
switch (G__35045) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__33321__auto___36442 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33322__auto__ = (function (){var switch__32924__auto__ = (function (state_35123){
var state_val_35124 = (state_35123[(1)]);
if((state_val_35124 === (7))){
var state_35123__$1 = state_35123;
var statearr_35129_36443 = state_35123__$1;
(statearr_35129_36443[(2)] = null);

(statearr_35129_36443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (1))){
var state_35123__$1 = state_35123;
var statearr_35130_36444 = state_35123__$1;
(statearr_35130_36444[(2)] = null);

(statearr_35130_36444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (4))){
var inst_35070 = (state_35123[(7)]);
var inst_35072 = (state_35123[(8)]);
var inst_35077 = (inst_35072 < inst_35070);
var state_35123__$1 = state_35123;
if(cljs.core.truth_(inst_35077)){
var statearr_35131_36445 = state_35123__$1;
(statearr_35131_36445[(1)] = (6));

} else {
var statearr_35132_36446 = state_35123__$1;
(statearr_35132_36446[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (15))){
var inst_35109 = (state_35123[(9)]);
var inst_35114 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35109);
var state_35123__$1 = state_35123;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35123__$1,(17),out,inst_35114);
} else {
if((state_val_35124 === (13))){
var inst_35109 = (state_35123[(9)]);
var inst_35109__$1 = (state_35123[(2)]);
var inst_35110 = cljs.core.some(cljs.core.nil_QMARK_,inst_35109__$1);
var state_35123__$1 = (function (){var statearr_35133 = state_35123;
(statearr_35133[(9)] = inst_35109__$1);

return statearr_35133;
})();
if(cljs.core.truth_(inst_35110)){
var statearr_35134_36448 = state_35123__$1;
(statearr_35134_36448[(1)] = (14));

} else {
var statearr_35135_36450 = state_35123__$1;
(statearr_35135_36450[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (6))){
var state_35123__$1 = state_35123;
var statearr_35137_36451 = state_35123__$1;
(statearr_35137_36451[(2)] = null);

(statearr_35137_36451[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (17))){
var inst_35116 = (state_35123[(2)]);
var state_35123__$1 = (function (){var statearr_35146 = state_35123;
(statearr_35146[(10)] = inst_35116);

return statearr_35146;
})();
var statearr_35147_36452 = state_35123__$1;
(statearr_35147_36452[(2)] = null);

(statearr_35147_36452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (3))){
var inst_35121 = (state_35123[(2)]);
var state_35123__$1 = state_35123;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35123__$1,inst_35121);
} else {
if((state_val_35124 === (12))){
var _ = (function (){var statearr_35148 = state_35123;
(statearr_35148[(4)] = cljs.core.rest((state_35123[(4)])));

return statearr_35148;
})();
var state_35123__$1 = state_35123;
var ex35144 = (state_35123__$1[(2)]);
var statearr_35149_36453 = state_35123__$1;
(statearr_35149_36453[(5)] = ex35144);


if((ex35144 instanceof Object)){
var statearr_35150_36455 = state_35123__$1;
(statearr_35150_36455[(1)] = (11));

(statearr_35150_36455[(5)] = null);

} else {
throw ex35144;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (2))){
var inst_35069 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35070 = cnt;
var inst_35072 = (0);
var state_35123__$1 = (function (){var statearr_35151 = state_35123;
(statearr_35151[(7)] = inst_35070);

(statearr_35151[(8)] = inst_35072);

(statearr_35151[(11)] = inst_35069);

return statearr_35151;
})();
var statearr_35152_36456 = state_35123__$1;
(statearr_35152_36456[(2)] = null);

(statearr_35152_36456[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (11))){
var inst_35088 = (state_35123[(2)]);
var inst_35089 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35123__$1 = (function (){var statearr_35154 = state_35123;
(statearr_35154[(12)] = inst_35088);

return statearr_35154;
})();
var statearr_35156_36458 = state_35123__$1;
(statearr_35156_36458[(2)] = inst_35089);

(statearr_35156_36458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (9))){
var inst_35072 = (state_35123[(8)]);
var _ = (function (){var statearr_35157 = state_35123;
(statearr_35157[(4)] = cljs.core.cons((12),(state_35123[(4)])));

return statearr_35157;
})();
var inst_35095 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35072) : chs__$1.call(null,inst_35072));
var inst_35096 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35072) : done.call(null,inst_35072));
var inst_35097 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35095,inst_35096);
var ___$1 = (function (){var statearr_35158 = state_35123;
(statearr_35158[(4)] = cljs.core.rest((state_35123[(4)])));

return statearr_35158;
})();
var state_35123__$1 = state_35123;
var statearr_35159_36460 = state_35123__$1;
(statearr_35159_36460[(2)] = inst_35097);

(statearr_35159_36460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (5))){
var inst_35107 = (state_35123[(2)]);
var state_35123__$1 = (function (){var statearr_35160 = state_35123;
(statearr_35160[(13)] = inst_35107);

return statearr_35160;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35123__$1,(13),dchan);
} else {
if((state_val_35124 === (14))){
var inst_35112 = cljs.core.async.close_BANG_(out);
var state_35123__$1 = state_35123;
var statearr_35161_36461 = state_35123__$1;
(statearr_35161_36461[(2)] = inst_35112);

(statearr_35161_36461[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (16))){
var inst_35119 = (state_35123[(2)]);
var state_35123__$1 = state_35123;
var statearr_35162_36462 = state_35123__$1;
(statearr_35162_36462[(2)] = inst_35119);

(statearr_35162_36462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (10))){
var inst_35072 = (state_35123[(8)]);
var inst_35100 = (state_35123[(2)]);
var inst_35101 = (inst_35072 + (1));
var inst_35072__$1 = inst_35101;
var state_35123__$1 = (function (){var statearr_35163 = state_35123;
(statearr_35163[(8)] = inst_35072__$1);

(statearr_35163[(14)] = inst_35100);

return statearr_35163;
})();
var statearr_35164_36464 = state_35123__$1;
(statearr_35164_36464[(2)] = null);

(statearr_35164_36464[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (8))){
var inst_35105 = (state_35123[(2)]);
var state_35123__$1 = state_35123;
var statearr_35166_36465 = state_35123__$1;
(statearr_35166_36465[(2)] = inst_35105);

(statearr_35166_36465[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32925__auto__ = null;
var cljs$core$async$state_machine__32925__auto____0 = (function (){
var statearr_35171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35171[(0)] = cljs$core$async$state_machine__32925__auto__);

(statearr_35171[(1)] = (1));

return statearr_35171;
});
var cljs$core$async$state_machine__32925__auto____1 = (function (state_35123){
while(true){
var ret_value__32926__auto__ = (function (){try{while(true){
var result__32927__auto__ = switch__32924__auto__(state_35123);
if(cljs.core.keyword_identical_QMARK_(result__32927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32927__auto__;
}
break;
}
}catch (e35172){var ex__32928__auto__ = e35172;
var statearr_35173_36468 = state_35123;
(statearr_35173_36468[(2)] = ex__32928__auto__);


if(cljs.core.seq((state_35123[(4)]))){
var statearr_35174_36469 = state_35123;
(statearr_35174_36469[(1)] = cljs.core.first((state_35123[(4)])));

} else {
throw ex__32928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36471 = state_35123;
state_35123 = G__36471;
continue;
} else {
return ret_value__32926__auto__;
}
break;
}
});
cljs$core$async$state_machine__32925__auto__ = function(state_35123){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32925__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32925__auto____1.call(this,state_35123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32925__auto____0;
cljs$core$async$state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32925__auto____1;
return cljs$core$async$state_machine__32925__auto__;
})()
})();
var state__33323__auto__ = (function (){var statearr_35175 = f__33322__auto__();
(statearr_35175[(6)] = c__33321__auto___36442);

return statearr_35175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33323__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35178 = arguments.length;
switch (G__35178) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33321__auto___36478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33322__auto__ = (function (){var switch__32924__auto__ = (function (state_35210){
var state_val_35211 = (state_35210[(1)]);
if((state_val_35211 === (7))){
var inst_35189 = (state_35210[(7)]);
var inst_35190 = (state_35210[(8)]);
var inst_35189__$1 = (state_35210[(2)]);
var inst_35190__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35189__$1,(0),null);
var inst_35191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35189__$1,(1),null);
var inst_35192 = (inst_35190__$1 == null);
var state_35210__$1 = (function (){var statearr_35216 = state_35210;
(statearr_35216[(7)] = inst_35189__$1);

(statearr_35216[(8)] = inst_35190__$1);

(statearr_35216[(9)] = inst_35191);

return statearr_35216;
})();
if(cljs.core.truth_(inst_35192)){
var statearr_35218_36479 = state_35210__$1;
(statearr_35218_36479[(1)] = (8));

} else {
var statearr_35219_36481 = state_35210__$1;
(statearr_35219_36481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (1))){
var inst_35179 = cljs.core.vec(chs);
var inst_35180 = inst_35179;
var state_35210__$1 = (function (){var statearr_35220 = state_35210;
(statearr_35220[(10)] = inst_35180);

return statearr_35220;
})();
var statearr_35221_36484 = state_35210__$1;
(statearr_35221_36484[(2)] = null);

(statearr_35221_36484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (4))){
var inst_35180 = (state_35210[(10)]);
var state_35210__$1 = state_35210;
return cljs.core.async.ioc_alts_BANG_(state_35210__$1,(7),inst_35180);
} else {
if((state_val_35211 === (6))){
var inst_35206 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
var statearr_35223_36485 = state_35210__$1;
(statearr_35223_36485[(2)] = inst_35206);

(statearr_35223_36485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (3))){
var inst_35208 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35210__$1,inst_35208);
} else {
if((state_val_35211 === (2))){
var inst_35180 = (state_35210[(10)]);
var inst_35182 = cljs.core.count(inst_35180);
var inst_35183 = (inst_35182 > (0));
var state_35210__$1 = state_35210;
if(cljs.core.truth_(inst_35183)){
var statearr_35226_36486 = state_35210__$1;
(statearr_35226_36486[(1)] = (4));

} else {
var statearr_35227_36487 = state_35210__$1;
(statearr_35227_36487[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (11))){
var inst_35180 = (state_35210[(10)]);
var inst_35199 = (state_35210[(2)]);
var tmp35225 = inst_35180;
var inst_35180__$1 = tmp35225;
var state_35210__$1 = (function (){var statearr_35228 = state_35210;
(statearr_35228[(10)] = inst_35180__$1);

(statearr_35228[(11)] = inst_35199);

return statearr_35228;
})();
var statearr_35229_36488 = state_35210__$1;
(statearr_35229_36488[(2)] = null);

(statearr_35229_36488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (9))){
var inst_35190 = (state_35210[(8)]);
var state_35210__$1 = state_35210;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35210__$1,(11),out,inst_35190);
} else {
if((state_val_35211 === (5))){
var inst_35204 = cljs.core.async.close_BANG_(out);
var state_35210__$1 = state_35210;
var statearr_35234_36490 = state_35210__$1;
(statearr_35234_36490[(2)] = inst_35204);

(statearr_35234_36490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (10))){
var inst_35202 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
var statearr_35235_36492 = state_35210__$1;
(statearr_35235_36492[(2)] = inst_35202);

(statearr_35235_36492[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (8))){
var inst_35180 = (state_35210[(10)]);
var inst_35189 = (state_35210[(7)]);
var inst_35190 = (state_35210[(8)]);
var inst_35191 = (state_35210[(9)]);
var inst_35194 = (function (){var cs = inst_35180;
var vec__35185 = inst_35189;
var v = inst_35190;
var c = inst_35191;
return (function (p1__35176_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35176_SHARP_);
});
})();
var inst_35195 = cljs.core.filterv(inst_35194,inst_35180);
var inst_35180__$1 = inst_35195;
var state_35210__$1 = (function (){var statearr_35239 = state_35210;
(statearr_35239[(10)] = inst_35180__$1);

return statearr_35239;
})();
var statearr_35240_36493 = state_35210__$1;
(statearr_35240_36493[(2)] = null);

(statearr_35240_36493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32925__auto__ = null;
var cljs$core$async$state_machine__32925__auto____0 = (function (){
var statearr_35241 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35241[(0)] = cljs$core$async$state_machine__32925__auto__);

(statearr_35241[(1)] = (1));

return statearr_35241;
});
var cljs$core$async$state_machine__32925__auto____1 = (function (state_35210){
while(true){
var ret_value__32926__auto__ = (function (){try{while(true){
var result__32927__auto__ = switch__32924__auto__(state_35210);
if(cljs.core.keyword_identical_QMARK_(result__32927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32927__auto__;
}
break;
}
}catch (e35242){var ex__32928__auto__ = e35242;
var statearr_35243_36495 = state_35210;
(statearr_35243_36495[(2)] = ex__32928__auto__);


if(cljs.core.seq((state_35210[(4)]))){
var statearr_35244_36500 = state_35210;
(statearr_35244_36500[(1)] = cljs.core.first((state_35210[(4)])));

} else {
throw ex__32928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36501 = state_35210;
state_35210 = G__36501;
continue;
} else {
return ret_value__32926__auto__;
}
break;
}
});
cljs$core$async$state_machine__32925__auto__ = function(state_35210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32925__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32925__auto____1.call(this,state_35210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32925__auto____0;
cljs$core$async$state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32925__auto____1;
return cljs$core$async$state_machine__32925__auto__;
})()
})();
var state__33323__auto__ = (function (){var statearr_35245 = f__33322__auto__();
(statearr_35245[(6)] = c__33321__auto___36478);

return statearr_35245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33323__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35247 = arguments.length;
switch (G__35247) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33321__auto___36506 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33322__auto__ = (function (){var switch__32924__auto__ = (function (state_35279){
var state_val_35280 = (state_35279[(1)]);
if((state_val_35280 === (7))){
var inst_35257 = (state_35279[(7)]);
var inst_35257__$1 = (state_35279[(2)]);
var inst_35258 = (inst_35257__$1 == null);
var inst_35259 = cljs.core.not(inst_35258);
var state_35279__$1 = (function (){var statearr_35281 = state_35279;
(statearr_35281[(7)] = inst_35257__$1);

return statearr_35281;
})();
if(inst_35259){
var statearr_35282_36507 = state_35279__$1;
(statearr_35282_36507[(1)] = (8));

} else {
var statearr_35283_36508 = state_35279__$1;
(statearr_35283_36508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (1))){
var inst_35252 = (0);
var state_35279__$1 = (function (){var statearr_35284 = state_35279;
(statearr_35284[(8)] = inst_35252);

return statearr_35284;
})();
var statearr_35285_36510 = state_35279__$1;
(statearr_35285_36510[(2)] = null);

(statearr_35285_36510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (4))){
var state_35279__$1 = state_35279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35279__$1,(7),ch);
} else {
if((state_val_35280 === (6))){
var inst_35270 = (state_35279[(2)]);
var state_35279__$1 = state_35279;
var statearr_35286_36511 = state_35279__$1;
(statearr_35286_36511[(2)] = inst_35270);

(statearr_35286_36511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (3))){
var inst_35272 = (state_35279[(2)]);
var inst_35277 = cljs.core.async.close_BANG_(out);
var state_35279__$1 = (function (){var statearr_35287 = state_35279;
(statearr_35287[(9)] = inst_35272);

return statearr_35287;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35279__$1,inst_35277);
} else {
if((state_val_35280 === (2))){
var inst_35252 = (state_35279[(8)]);
var inst_35254 = (inst_35252 < n);
var state_35279__$1 = state_35279;
if(cljs.core.truth_(inst_35254)){
var statearr_35288_36515 = state_35279__$1;
(statearr_35288_36515[(1)] = (4));

} else {
var statearr_35289_36516 = state_35279__$1;
(statearr_35289_36516[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (11))){
var inst_35252 = (state_35279[(8)]);
var inst_35262 = (state_35279[(2)]);
var inst_35263 = (inst_35252 + (1));
var inst_35252__$1 = inst_35263;
var state_35279__$1 = (function (){var statearr_35290 = state_35279;
(statearr_35290[(8)] = inst_35252__$1);

(statearr_35290[(10)] = inst_35262);

return statearr_35290;
})();
var statearr_35291_36518 = state_35279__$1;
(statearr_35291_36518[(2)] = null);

(statearr_35291_36518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (9))){
var state_35279__$1 = state_35279;
var statearr_35292_36522 = state_35279__$1;
(statearr_35292_36522[(2)] = null);

(statearr_35292_36522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (5))){
var state_35279__$1 = state_35279;
var statearr_35293_36523 = state_35279__$1;
(statearr_35293_36523[(2)] = null);

(statearr_35293_36523[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (10))){
var inst_35267 = (state_35279[(2)]);
var state_35279__$1 = state_35279;
var statearr_35295_36524 = state_35279__$1;
(statearr_35295_36524[(2)] = inst_35267);

(statearr_35295_36524[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (8))){
var inst_35257 = (state_35279[(7)]);
var state_35279__$1 = state_35279;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35279__$1,(11),out,inst_35257);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32925__auto__ = null;
var cljs$core$async$state_machine__32925__auto____0 = (function (){
var statearr_35297 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35297[(0)] = cljs$core$async$state_machine__32925__auto__);

(statearr_35297[(1)] = (1));

return statearr_35297;
});
var cljs$core$async$state_machine__32925__auto____1 = (function (state_35279){
while(true){
var ret_value__32926__auto__ = (function (){try{while(true){
var result__32927__auto__ = switch__32924__auto__(state_35279);
if(cljs.core.keyword_identical_QMARK_(result__32927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32927__auto__;
}
break;
}
}catch (e35298){var ex__32928__auto__ = e35298;
var statearr_35299_36533 = state_35279;
(statearr_35299_36533[(2)] = ex__32928__auto__);


if(cljs.core.seq((state_35279[(4)]))){
var statearr_35300_36537 = state_35279;
(statearr_35300_36537[(1)] = cljs.core.first((state_35279[(4)])));

} else {
throw ex__32928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36538 = state_35279;
state_35279 = G__36538;
continue;
} else {
return ret_value__32926__auto__;
}
break;
}
});
cljs$core$async$state_machine__32925__auto__ = function(state_35279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32925__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32925__auto____1.call(this,state_35279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32925__auto____0;
cljs$core$async$state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32925__auto____1;
return cljs$core$async$state_machine__32925__auto__;
})()
})();
var state__33323__auto__ = (function (){var statearr_35304 = f__33322__auto__();
(statearr_35304[(6)] = c__33321__auto___36506);

return statearr_35304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33323__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35306 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35306 = (function (f,ch,meta35307){
this.f = f;
this.ch = ch;
this.meta35307 = meta35307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35308,meta35307__$1){
var self__ = this;
var _35308__$1 = this;
return (new cljs.core.async.t_cljs$core$async35306(self__.f,self__.ch,meta35307__$1));
}));

(cljs.core.async.t_cljs$core$async35306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35308){
var self__ = this;
var _35308__$1 = this;
return self__.meta35307;
}));

(cljs.core.async.t_cljs$core$async35306.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35306.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35306.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35306.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35306.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35309 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35309 = (function (f,ch,meta35307,_,fn1,meta35310){
this.f = f;
this.ch = ch;
this.meta35307 = meta35307;
this._ = _;
this.fn1 = fn1;
this.meta35310 = meta35310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35311,meta35310__$1){
var self__ = this;
var _35311__$1 = this;
return (new cljs.core.async.t_cljs$core$async35309(self__.f,self__.ch,self__.meta35307,self__._,self__.fn1,meta35310__$1));
}));

(cljs.core.async.t_cljs$core$async35309.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35311){
var self__ = this;
var _35311__$1 = this;
return self__.meta35310;
}));

(cljs.core.async.t_cljs$core$async35309.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35309.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35309.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35309.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__35305_SHARP_){
var G__35312 = (((p1__35305_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35305_SHARP_) : self__.f.call(null,p1__35305_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35312) : f1.call(null,G__35312));
});
}));

(cljs.core.async.t_cljs$core$async35309.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35307","meta35307",-1432114123,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35306","cljs.core.async/t_cljs$core$async35306",-1214631473,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35310","meta35310",1614665404,null)], null);
}));

(cljs.core.async.t_cljs$core$async35309.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35309.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35309");

(cljs.core.async.t_cljs$core$async35309.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35309");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35309.
 */
cljs.core.async.__GT_t_cljs$core$async35309 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35309(f__$1,ch__$1,meta35307__$1,___$2,fn1__$1,meta35310){
return (new cljs.core.async.t_cljs$core$async35309(f__$1,ch__$1,meta35307__$1,___$2,fn1__$1,meta35310));
});

}

return (new cljs.core.async.t_cljs$core$async35309(self__.f,self__.ch,self__.meta35307,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35313 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35313) : self__.f.call(null,G__35313));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35306.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35306.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35306.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35307","meta35307",-1432114123,null)], null);
}));

(cljs.core.async.t_cljs$core$async35306.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35306");

(cljs.core.async.t_cljs$core$async35306.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35306");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35306.
 */
cljs.core.async.__GT_t_cljs$core$async35306 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35306(f__$1,ch__$1,meta35307){
return (new cljs.core.async.t_cljs$core$async35306(f__$1,ch__$1,meta35307));
});

}

return (new cljs.core.async.t_cljs$core$async35306(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35314 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35314 = (function (f,ch,meta35315){
this.f = f;
this.ch = ch;
this.meta35315 = meta35315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35316,meta35315__$1){
var self__ = this;
var _35316__$1 = this;
return (new cljs.core.async.t_cljs$core$async35314(self__.f,self__.ch,meta35315__$1));
}));

(cljs.core.async.t_cljs$core$async35314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35316){
var self__ = this;
var _35316__$1 = this;
return self__.meta35315;
}));

(cljs.core.async.t_cljs$core$async35314.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35314.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35314.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35314.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35314.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35314.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async35314.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35315","meta35315",62534737,null)], null);
}));

(cljs.core.async.t_cljs$core$async35314.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35314.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35314");

(cljs.core.async.t_cljs$core$async35314.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35314");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35314.
 */
cljs.core.async.__GT_t_cljs$core$async35314 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35314(f__$1,ch__$1,meta35315){
return (new cljs.core.async.t_cljs$core$async35314(f__$1,ch__$1,meta35315));
});

}

return (new cljs.core.async.t_cljs$core$async35314(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35318 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35318 = (function (p,ch,meta35319){
this.p = p;
this.ch = ch;
this.meta35319 = meta35319;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35320,meta35319__$1){
var self__ = this;
var _35320__$1 = this;
return (new cljs.core.async.t_cljs$core$async35318(self__.p,self__.ch,meta35319__$1));
}));

(cljs.core.async.t_cljs$core$async35318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35320){
var self__ = this;
var _35320__$1 = this;
return self__.meta35319;
}));

(cljs.core.async.t_cljs$core$async35318.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35318.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35318.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35318.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35318.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35318.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35318.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35318.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35319","meta35319",-1068105565,null)], null);
}));

(cljs.core.async.t_cljs$core$async35318.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35318.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35318");

(cljs.core.async.t_cljs$core$async35318.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35318");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35318.
 */
cljs.core.async.__GT_t_cljs$core$async35318 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35318(p__$1,ch__$1,meta35319){
return (new cljs.core.async.t_cljs$core$async35318(p__$1,ch__$1,meta35319));
});

}

return (new cljs.core.async.t_cljs$core$async35318(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35329 = arguments.length;
switch (G__35329) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33321__auto___36636 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33322__auto__ = (function (){var switch__32924__auto__ = (function (state_35370){
var state_val_35371 = (state_35370[(1)]);
if((state_val_35371 === (7))){
var inst_35366 = (state_35370[(2)]);
var state_35370__$1 = state_35370;
var statearr_35386_36641 = state_35370__$1;
(statearr_35386_36641[(2)] = inst_35366);

(statearr_35386_36641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35371 === (1))){
var state_35370__$1 = state_35370;
var statearr_35393_36645 = state_35370__$1;
(statearr_35393_36645[(2)] = null);

(statearr_35393_36645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35371 === (4))){
var inst_35346 = (state_35370[(7)]);
var inst_35346__$1 = (state_35370[(2)]);
var inst_35353 = (inst_35346__$1 == null);
var state_35370__$1 = (function (){var statearr_35394 = state_35370;
(statearr_35394[(7)] = inst_35346__$1);

return statearr_35394;
})();
if(cljs.core.truth_(inst_35353)){
var statearr_35395_36650 = state_35370__$1;
(statearr_35395_36650[(1)] = (5));

} else {
var statearr_35396_36651 = state_35370__$1;
(statearr_35396_36651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35371 === (6))){
var inst_35346 = (state_35370[(7)]);
var inst_35357 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35346) : p.call(null,inst_35346));
var state_35370__$1 = state_35370;
if(cljs.core.truth_(inst_35357)){
var statearr_35397_36658 = state_35370__$1;
(statearr_35397_36658[(1)] = (8));

} else {
var statearr_35398_36660 = state_35370__$1;
(statearr_35398_36660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35371 === (3))){
var inst_35368 = (state_35370[(2)]);
var state_35370__$1 = state_35370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35370__$1,inst_35368);
} else {
if((state_val_35371 === (2))){
var state_35370__$1 = state_35370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35370__$1,(4),ch);
} else {
if((state_val_35371 === (11))){
var inst_35360 = (state_35370[(2)]);
var state_35370__$1 = state_35370;
var statearr_35401_36669 = state_35370__$1;
(statearr_35401_36669[(2)] = inst_35360);

(statearr_35401_36669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35371 === (9))){
var state_35370__$1 = state_35370;
var statearr_35402_36670 = state_35370__$1;
(statearr_35402_36670[(2)] = null);

(statearr_35402_36670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35371 === (5))){
var inst_35355 = cljs.core.async.close_BANG_(out);
var state_35370__$1 = state_35370;
var statearr_35404_36679 = state_35370__$1;
(statearr_35404_36679[(2)] = inst_35355);

(statearr_35404_36679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35371 === (10))){
var inst_35363 = (state_35370[(2)]);
var state_35370__$1 = (function (){var statearr_35405 = state_35370;
(statearr_35405[(8)] = inst_35363);

return statearr_35405;
})();
var statearr_35406_36680 = state_35370__$1;
(statearr_35406_36680[(2)] = null);

(statearr_35406_36680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35371 === (8))){
var inst_35346 = (state_35370[(7)]);
var state_35370__$1 = state_35370;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35370__$1,(11),out,inst_35346);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32925__auto__ = null;
var cljs$core$async$state_machine__32925__auto____0 = (function (){
var statearr_35407 = [null,null,null,null,null,null,null,null,null];
(statearr_35407[(0)] = cljs$core$async$state_machine__32925__auto__);

(statearr_35407[(1)] = (1));

return statearr_35407;
});
var cljs$core$async$state_machine__32925__auto____1 = (function (state_35370){
while(true){
var ret_value__32926__auto__ = (function (){try{while(true){
var result__32927__auto__ = switch__32924__auto__(state_35370);
if(cljs.core.keyword_identical_QMARK_(result__32927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32927__auto__;
}
break;
}
}catch (e35408){var ex__32928__auto__ = e35408;
var statearr_35409_36681 = state_35370;
(statearr_35409_36681[(2)] = ex__32928__auto__);


if(cljs.core.seq((state_35370[(4)]))){
var statearr_35410_36682 = state_35370;
(statearr_35410_36682[(1)] = cljs.core.first((state_35370[(4)])));

} else {
throw ex__32928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36683 = state_35370;
state_35370 = G__36683;
continue;
} else {
return ret_value__32926__auto__;
}
break;
}
});
cljs$core$async$state_machine__32925__auto__ = function(state_35370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32925__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32925__auto____1.call(this,state_35370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32925__auto____0;
cljs$core$async$state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32925__auto____1;
return cljs$core$async$state_machine__32925__auto__;
})()
})();
var state__33323__auto__ = (function (){var statearr_35411 = f__33322__auto__();
(statearr_35411[(6)] = c__33321__auto___36636);

return statearr_35411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33323__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35416 = arguments.length;
switch (G__35416) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33321__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33322__auto__ = (function (){var switch__32924__auto__ = (function (state_35489){
var state_val_35490 = (state_35489[(1)]);
if((state_val_35490 === (7))){
var inst_35485 = (state_35489[(2)]);
var state_35489__$1 = state_35489;
var statearr_35497_36695 = state_35489__$1;
(statearr_35497_36695[(2)] = inst_35485);

(statearr_35497_36695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (20))){
var inst_35444 = (state_35489[(7)]);
var inst_35455 = (state_35489[(2)]);
var inst_35467 = cljs.core.next(inst_35444);
var inst_35430 = inst_35467;
var inst_35431 = null;
var inst_35432 = (0);
var inst_35433 = (0);
var state_35489__$1 = (function (){var statearr_35498 = state_35489;
(statearr_35498[(8)] = inst_35431);

(statearr_35498[(9)] = inst_35455);

(statearr_35498[(10)] = inst_35430);

(statearr_35498[(11)] = inst_35432);

(statearr_35498[(12)] = inst_35433);

return statearr_35498;
})();
var statearr_35499_36696 = state_35489__$1;
(statearr_35499_36696[(2)] = null);

(statearr_35499_36696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (1))){
var state_35489__$1 = state_35489;
var statearr_35503_36698 = state_35489__$1;
(statearr_35503_36698[(2)] = null);

(statearr_35503_36698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (4))){
var inst_35419 = (state_35489[(13)]);
var inst_35419__$1 = (state_35489[(2)]);
var inst_35420 = (inst_35419__$1 == null);
var state_35489__$1 = (function (){var statearr_35504 = state_35489;
(statearr_35504[(13)] = inst_35419__$1);

return statearr_35504;
})();
if(cljs.core.truth_(inst_35420)){
var statearr_35505_36699 = state_35489__$1;
(statearr_35505_36699[(1)] = (5));

} else {
var statearr_35506_36700 = state_35489__$1;
(statearr_35506_36700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (15))){
var state_35489__$1 = state_35489;
var statearr_35510_36701 = state_35489__$1;
(statearr_35510_36701[(2)] = null);

(statearr_35510_36701[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (21))){
var state_35489__$1 = state_35489;
var statearr_35511_36702 = state_35489__$1;
(statearr_35511_36702[(2)] = null);

(statearr_35511_36702[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (13))){
var inst_35431 = (state_35489[(8)]);
var inst_35430 = (state_35489[(10)]);
var inst_35432 = (state_35489[(11)]);
var inst_35433 = (state_35489[(12)]);
var inst_35440 = (state_35489[(2)]);
var inst_35441 = (inst_35433 + (1));
var tmp35507 = inst_35431;
var tmp35508 = inst_35430;
var tmp35509 = inst_35432;
var inst_35430__$1 = tmp35508;
var inst_35431__$1 = tmp35507;
var inst_35432__$1 = tmp35509;
var inst_35433__$1 = inst_35441;
var state_35489__$1 = (function (){var statearr_35512 = state_35489;
(statearr_35512[(8)] = inst_35431__$1);

(statearr_35512[(10)] = inst_35430__$1);

(statearr_35512[(11)] = inst_35432__$1);

(statearr_35512[(14)] = inst_35440);

(statearr_35512[(12)] = inst_35433__$1);

return statearr_35512;
})();
var statearr_35513_36704 = state_35489__$1;
(statearr_35513_36704[(2)] = null);

(statearr_35513_36704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (22))){
var state_35489__$1 = state_35489;
var statearr_35514_36706 = state_35489__$1;
(statearr_35514_36706[(2)] = null);

(statearr_35514_36706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (6))){
var inst_35419 = (state_35489[(13)]);
var inst_35428 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35419) : f.call(null,inst_35419));
var inst_35429 = cljs.core.seq(inst_35428);
var inst_35430 = inst_35429;
var inst_35431 = null;
var inst_35432 = (0);
var inst_35433 = (0);
var state_35489__$1 = (function (){var statearr_35515 = state_35489;
(statearr_35515[(8)] = inst_35431);

(statearr_35515[(10)] = inst_35430);

(statearr_35515[(11)] = inst_35432);

(statearr_35515[(12)] = inst_35433);

return statearr_35515;
})();
var statearr_35516_36708 = state_35489__$1;
(statearr_35516_36708[(2)] = null);

(statearr_35516_36708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (17))){
var inst_35444 = (state_35489[(7)]);
var inst_35448 = cljs.core.chunk_first(inst_35444);
var inst_35449 = cljs.core.chunk_rest(inst_35444);
var inst_35450 = cljs.core.count(inst_35448);
var inst_35430 = inst_35449;
var inst_35431 = inst_35448;
var inst_35432 = inst_35450;
var inst_35433 = (0);
var state_35489__$1 = (function (){var statearr_35517 = state_35489;
(statearr_35517[(8)] = inst_35431);

(statearr_35517[(10)] = inst_35430);

(statearr_35517[(11)] = inst_35432);

(statearr_35517[(12)] = inst_35433);

return statearr_35517;
})();
var statearr_35518_36714 = state_35489__$1;
(statearr_35518_36714[(2)] = null);

(statearr_35518_36714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (3))){
var inst_35487 = (state_35489[(2)]);
var state_35489__$1 = state_35489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35489__$1,inst_35487);
} else {
if((state_val_35490 === (12))){
var inst_35475 = (state_35489[(2)]);
var state_35489__$1 = state_35489;
var statearr_35519_36715 = state_35489__$1;
(statearr_35519_36715[(2)] = inst_35475);

(statearr_35519_36715[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (2))){
var state_35489__$1 = state_35489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35489__$1,(4),in$);
} else {
if((state_val_35490 === (23))){
var inst_35483 = (state_35489[(2)]);
var state_35489__$1 = state_35489;
var statearr_35520_36717 = state_35489__$1;
(statearr_35520_36717[(2)] = inst_35483);

(statearr_35520_36717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (19))){
var inst_35470 = (state_35489[(2)]);
var state_35489__$1 = state_35489;
var statearr_35524_36718 = state_35489__$1;
(statearr_35524_36718[(2)] = inst_35470);

(statearr_35524_36718[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (11))){
var inst_35444 = (state_35489[(7)]);
var inst_35430 = (state_35489[(10)]);
var inst_35444__$1 = cljs.core.seq(inst_35430);
var state_35489__$1 = (function (){var statearr_35525 = state_35489;
(statearr_35525[(7)] = inst_35444__$1);

return statearr_35525;
})();
if(inst_35444__$1){
var statearr_35526_36719 = state_35489__$1;
(statearr_35526_36719[(1)] = (14));

} else {
var statearr_35527_36720 = state_35489__$1;
(statearr_35527_36720[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (9))){
var inst_35477 = (state_35489[(2)]);
var inst_35478 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35489__$1 = (function (){var statearr_35528 = state_35489;
(statearr_35528[(15)] = inst_35477);

return statearr_35528;
})();
if(cljs.core.truth_(inst_35478)){
var statearr_35529_36723 = state_35489__$1;
(statearr_35529_36723[(1)] = (21));

} else {
var statearr_35530_36724 = state_35489__$1;
(statearr_35530_36724[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (5))){
var inst_35422 = cljs.core.async.close_BANG_(out);
var state_35489__$1 = state_35489;
var statearr_35531_36725 = state_35489__$1;
(statearr_35531_36725[(2)] = inst_35422);

(statearr_35531_36725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (14))){
var inst_35444 = (state_35489[(7)]);
var inst_35446 = cljs.core.chunked_seq_QMARK_(inst_35444);
var state_35489__$1 = state_35489;
if(inst_35446){
var statearr_35532_36726 = state_35489__$1;
(statearr_35532_36726[(1)] = (17));

} else {
var statearr_35533_36727 = state_35489__$1;
(statearr_35533_36727[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (16))){
var inst_35473 = (state_35489[(2)]);
var state_35489__$1 = state_35489;
var statearr_35537_36729 = state_35489__$1;
(statearr_35537_36729[(2)] = inst_35473);

(statearr_35537_36729[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (10))){
var inst_35431 = (state_35489[(8)]);
var inst_35433 = (state_35489[(12)]);
var inst_35438 = cljs.core._nth(inst_35431,inst_35433);
var state_35489__$1 = state_35489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35489__$1,(13),out,inst_35438);
} else {
if((state_val_35490 === (18))){
var inst_35444 = (state_35489[(7)]);
var inst_35453 = cljs.core.first(inst_35444);
var state_35489__$1 = state_35489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35489__$1,(20),out,inst_35453);
} else {
if((state_val_35490 === (8))){
var inst_35432 = (state_35489[(11)]);
var inst_35433 = (state_35489[(12)]);
var inst_35435 = (inst_35433 < inst_35432);
var inst_35436 = inst_35435;
var state_35489__$1 = state_35489;
if(cljs.core.truth_(inst_35436)){
var statearr_35548_36731 = state_35489__$1;
(statearr_35548_36731[(1)] = (10));

} else {
var statearr_35549_36732 = state_35489__$1;
(statearr_35549_36732[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32925__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32925__auto____0 = (function (){
var statearr_35550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35550[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32925__auto__);

(statearr_35550[(1)] = (1));

return statearr_35550;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32925__auto____1 = (function (state_35489){
while(true){
var ret_value__32926__auto__ = (function (){try{while(true){
var result__32927__auto__ = switch__32924__auto__(state_35489);
if(cljs.core.keyword_identical_QMARK_(result__32927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32927__auto__;
}
break;
}
}catch (e35551){var ex__32928__auto__ = e35551;
var statearr_35552_36737 = state_35489;
(statearr_35552_36737[(2)] = ex__32928__auto__);


if(cljs.core.seq((state_35489[(4)]))){
var statearr_35557_36738 = state_35489;
(statearr_35557_36738[(1)] = cljs.core.first((state_35489[(4)])));

} else {
throw ex__32928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36742 = state_35489;
state_35489 = G__36742;
continue;
} else {
return ret_value__32926__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32925__auto__ = function(state_35489){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32925__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32925__auto____1.call(this,state_35489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32925__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32925__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32925__auto__;
})()
})();
var state__33323__auto__ = (function (){var statearr_35564 = f__33322__auto__();
(statearr_35564[(6)] = c__33321__auto__);

return statearr_35564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33323__auto__);
}));

return c__33321__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35573 = arguments.length;
switch (G__35573) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35587 = arguments.length;
switch (G__35587) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35589 = arguments.length;
switch (G__35589) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33321__auto___36748 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33322__auto__ = (function (){var switch__32924__auto__ = (function (state_35613){
var state_val_35614 = (state_35613[(1)]);
if((state_val_35614 === (7))){
var inst_35608 = (state_35613[(2)]);
var state_35613__$1 = state_35613;
var statearr_35615_36749 = state_35613__$1;
(statearr_35615_36749[(2)] = inst_35608);

(statearr_35615_36749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35614 === (1))){
var inst_35590 = null;
var state_35613__$1 = (function (){var statearr_35616 = state_35613;
(statearr_35616[(7)] = inst_35590);

return statearr_35616;
})();
var statearr_35617_36750 = state_35613__$1;
(statearr_35617_36750[(2)] = null);

(statearr_35617_36750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35614 === (4))){
var inst_35593 = (state_35613[(8)]);
var inst_35593__$1 = (state_35613[(2)]);
var inst_35594 = (inst_35593__$1 == null);
var inst_35595 = cljs.core.not(inst_35594);
var state_35613__$1 = (function (){var statearr_35618 = state_35613;
(statearr_35618[(8)] = inst_35593__$1);

return statearr_35618;
})();
if(inst_35595){
var statearr_35619_36754 = state_35613__$1;
(statearr_35619_36754[(1)] = (5));

} else {
var statearr_35620_36755 = state_35613__$1;
(statearr_35620_36755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35614 === (6))){
var state_35613__$1 = state_35613;
var statearr_35621_36759 = state_35613__$1;
(statearr_35621_36759[(2)] = null);

(statearr_35621_36759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35614 === (3))){
var inst_35610 = (state_35613[(2)]);
var inst_35611 = cljs.core.async.close_BANG_(out);
var state_35613__$1 = (function (){var statearr_35622 = state_35613;
(statearr_35622[(9)] = inst_35610);

return statearr_35622;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35613__$1,inst_35611);
} else {
if((state_val_35614 === (2))){
var state_35613__$1 = state_35613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35613__$1,(4),ch);
} else {
if((state_val_35614 === (11))){
var inst_35593 = (state_35613[(8)]);
var inst_35602 = (state_35613[(2)]);
var inst_35590 = inst_35593;
var state_35613__$1 = (function (){var statearr_35625 = state_35613;
(statearr_35625[(10)] = inst_35602);

(statearr_35625[(7)] = inst_35590);

return statearr_35625;
})();
var statearr_35627_36763 = state_35613__$1;
(statearr_35627_36763[(2)] = null);

(statearr_35627_36763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35614 === (9))){
var inst_35593 = (state_35613[(8)]);
var state_35613__$1 = state_35613;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35613__$1,(11),out,inst_35593);
} else {
if((state_val_35614 === (5))){
var inst_35590 = (state_35613[(7)]);
var inst_35593 = (state_35613[(8)]);
var inst_35597 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35593,inst_35590);
var state_35613__$1 = state_35613;
if(inst_35597){
var statearr_35629_36770 = state_35613__$1;
(statearr_35629_36770[(1)] = (8));

} else {
var statearr_35630_36771 = state_35613__$1;
(statearr_35630_36771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35614 === (10))){
var inst_35605 = (state_35613[(2)]);
var state_35613__$1 = state_35613;
var statearr_35631_36772 = state_35613__$1;
(statearr_35631_36772[(2)] = inst_35605);

(statearr_35631_36772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35614 === (8))){
var inst_35590 = (state_35613[(7)]);
var tmp35628 = inst_35590;
var inst_35590__$1 = tmp35628;
var state_35613__$1 = (function (){var statearr_35632 = state_35613;
(statearr_35632[(7)] = inst_35590__$1);

return statearr_35632;
})();
var statearr_35633_36776 = state_35613__$1;
(statearr_35633_36776[(2)] = null);

(statearr_35633_36776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32925__auto__ = null;
var cljs$core$async$state_machine__32925__auto____0 = (function (){
var statearr_35635 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35635[(0)] = cljs$core$async$state_machine__32925__auto__);

(statearr_35635[(1)] = (1));

return statearr_35635;
});
var cljs$core$async$state_machine__32925__auto____1 = (function (state_35613){
while(true){
var ret_value__32926__auto__ = (function (){try{while(true){
var result__32927__auto__ = switch__32924__auto__(state_35613);
if(cljs.core.keyword_identical_QMARK_(result__32927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32927__auto__;
}
break;
}
}catch (e35647){var ex__32928__auto__ = e35647;
var statearr_35648_36779 = state_35613;
(statearr_35648_36779[(2)] = ex__32928__auto__);


if(cljs.core.seq((state_35613[(4)]))){
var statearr_35649_36781 = state_35613;
(statearr_35649_36781[(1)] = cljs.core.first((state_35613[(4)])));

} else {
throw ex__32928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36782 = state_35613;
state_35613 = G__36782;
continue;
} else {
return ret_value__32926__auto__;
}
break;
}
});
cljs$core$async$state_machine__32925__auto__ = function(state_35613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32925__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32925__auto____1.call(this,state_35613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32925__auto____0;
cljs$core$async$state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32925__auto____1;
return cljs$core$async$state_machine__32925__auto__;
})()
})();
var state__33323__auto__ = (function (){var statearr_35650 = f__33322__auto__();
(statearr_35650[(6)] = c__33321__auto___36748);

return statearr_35650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33323__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35654 = arguments.length;
switch (G__35654) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33321__auto___36788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33322__auto__ = (function (){var switch__32924__auto__ = (function (state_35692){
var state_val_35693 = (state_35692[(1)]);
if((state_val_35693 === (7))){
var inst_35688 = (state_35692[(2)]);
var state_35692__$1 = state_35692;
var statearr_35694_36790 = state_35692__$1;
(statearr_35694_36790[(2)] = inst_35688);

(statearr_35694_36790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (1))){
var inst_35655 = (new Array(n));
var inst_35656 = inst_35655;
var inst_35657 = (0);
var state_35692__$1 = (function (){var statearr_35695 = state_35692;
(statearr_35695[(7)] = inst_35657);

(statearr_35695[(8)] = inst_35656);

return statearr_35695;
})();
var statearr_35696_36791 = state_35692__$1;
(statearr_35696_36791[(2)] = null);

(statearr_35696_36791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (4))){
var inst_35660 = (state_35692[(9)]);
var inst_35660__$1 = (state_35692[(2)]);
var inst_35661 = (inst_35660__$1 == null);
var inst_35662 = cljs.core.not(inst_35661);
var state_35692__$1 = (function (){var statearr_35697 = state_35692;
(statearr_35697[(9)] = inst_35660__$1);

return statearr_35697;
})();
if(inst_35662){
var statearr_35698_36792 = state_35692__$1;
(statearr_35698_36792[(1)] = (5));

} else {
var statearr_35699_36793 = state_35692__$1;
(statearr_35699_36793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (15))){
var inst_35682 = (state_35692[(2)]);
var state_35692__$1 = state_35692;
var statearr_35700_36794 = state_35692__$1;
(statearr_35700_36794[(2)] = inst_35682);

(statearr_35700_36794[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (13))){
var state_35692__$1 = state_35692;
var statearr_35701_36795 = state_35692__$1;
(statearr_35701_36795[(2)] = null);

(statearr_35701_36795[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (6))){
var inst_35657 = (state_35692[(7)]);
var inst_35678 = (inst_35657 > (0));
var state_35692__$1 = state_35692;
if(cljs.core.truth_(inst_35678)){
var statearr_35702_36797 = state_35692__$1;
(statearr_35702_36797[(1)] = (12));

} else {
var statearr_35703_36798 = state_35692__$1;
(statearr_35703_36798[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (3))){
var inst_35690 = (state_35692[(2)]);
var state_35692__$1 = state_35692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35692__$1,inst_35690);
} else {
if((state_val_35693 === (12))){
var inst_35656 = (state_35692[(8)]);
var inst_35680 = cljs.core.vec(inst_35656);
var state_35692__$1 = state_35692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35692__$1,(15),out,inst_35680);
} else {
if((state_val_35693 === (2))){
var state_35692__$1 = state_35692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35692__$1,(4),ch);
} else {
if((state_val_35693 === (11))){
var inst_35672 = (state_35692[(2)]);
var inst_35673 = (new Array(n));
var inst_35656 = inst_35673;
var inst_35657 = (0);
var state_35692__$1 = (function (){var statearr_35706 = state_35692;
(statearr_35706[(7)] = inst_35657);

(statearr_35706[(10)] = inst_35672);

(statearr_35706[(8)] = inst_35656);

return statearr_35706;
})();
var statearr_35707_36803 = state_35692__$1;
(statearr_35707_36803[(2)] = null);

(statearr_35707_36803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (9))){
var inst_35656 = (state_35692[(8)]);
var inst_35670 = cljs.core.vec(inst_35656);
var state_35692__$1 = state_35692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35692__$1,(11),out,inst_35670);
} else {
if((state_val_35693 === (5))){
var inst_35657 = (state_35692[(7)]);
var inst_35660 = (state_35692[(9)]);
var inst_35665 = (state_35692[(11)]);
var inst_35656 = (state_35692[(8)]);
var inst_35664 = (inst_35656[inst_35657] = inst_35660);
var inst_35665__$1 = (inst_35657 + (1));
var inst_35666 = (inst_35665__$1 < n);
var state_35692__$1 = (function (){var statearr_35709 = state_35692;
(statearr_35709[(11)] = inst_35665__$1);

(statearr_35709[(12)] = inst_35664);

return statearr_35709;
})();
if(cljs.core.truth_(inst_35666)){
var statearr_35710_36810 = state_35692__$1;
(statearr_35710_36810[(1)] = (8));

} else {
var statearr_35711_36811 = state_35692__$1;
(statearr_35711_36811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (14))){
var inst_35685 = (state_35692[(2)]);
var inst_35686 = cljs.core.async.close_BANG_(out);
var state_35692__$1 = (function (){var statearr_35713 = state_35692;
(statearr_35713[(13)] = inst_35685);

return statearr_35713;
})();
var statearr_35714_36812 = state_35692__$1;
(statearr_35714_36812[(2)] = inst_35686);

(statearr_35714_36812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (10))){
var inst_35676 = (state_35692[(2)]);
var state_35692__$1 = state_35692;
var statearr_35715_36813 = state_35692__$1;
(statearr_35715_36813[(2)] = inst_35676);

(statearr_35715_36813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (8))){
var inst_35665 = (state_35692[(11)]);
var inst_35656 = (state_35692[(8)]);
var tmp35712 = inst_35656;
var inst_35656__$1 = tmp35712;
var inst_35657 = inst_35665;
var state_35692__$1 = (function (){var statearr_35716 = state_35692;
(statearr_35716[(7)] = inst_35657);

(statearr_35716[(8)] = inst_35656__$1);

return statearr_35716;
})();
var statearr_35717_36815 = state_35692__$1;
(statearr_35717_36815[(2)] = null);

(statearr_35717_36815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32925__auto__ = null;
var cljs$core$async$state_machine__32925__auto____0 = (function (){
var statearr_35727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35727[(0)] = cljs$core$async$state_machine__32925__auto__);

(statearr_35727[(1)] = (1));

return statearr_35727;
});
var cljs$core$async$state_machine__32925__auto____1 = (function (state_35692){
while(true){
var ret_value__32926__auto__ = (function (){try{while(true){
var result__32927__auto__ = switch__32924__auto__(state_35692);
if(cljs.core.keyword_identical_QMARK_(result__32927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32927__auto__;
}
break;
}
}catch (e35728){var ex__32928__auto__ = e35728;
var statearr_35729_36824 = state_35692;
(statearr_35729_36824[(2)] = ex__32928__auto__);


if(cljs.core.seq((state_35692[(4)]))){
var statearr_35730_36825 = state_35692;
(statearr_35730_36825[(1)] = cljs.core.first((state_35692[(4)])));

} else {
throw ex__32928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36826 = state_35692;
state_35692 = G__36826;
continue;
} else {
return ret_value__32926__auto__;
}
break;
}
});
cljs$core$async$state_machine__32925__auto__ = function(state_35692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32925__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32925__auto____1.call(this,state_35692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32925__auto____0;
cljs$core$async$state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32925__auto____1;
return cljs$core$async$state_machine__32925__auto__;
})()
})();
var state__33323__auto__ = (function (){var statearr_35732 = f__33322__auto__();
(statearr_35732[(6)] = c__33321__auto___36788);

return statearr_35732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33323__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35734 = arguments.length;
switch (G__35734) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33321__auto___36843 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33322__auto__ = (function (){var switch__32924__auto__ = (function (state_35784){
var state_val_35785 = (state_35784[(1)]);
if((state_val_35785 === (7))){
var inst_35778 = (state_35784[(2)]);
var state_35784__$1 = state_35784;
var statearr_35796_36852 = state_35784__$1;
(statearr_35796_36852[(2)] = inst_35778);

(statearr_35796_36852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (1))){
var inst_35735 = [];
var inst_35736 = inst_35735;
var inst_35737 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35784__$1 = (function (){var statearr_35797 = state_35784;
(statearr_35797[(7)] = inst_35737);

(statearr_35797[(8)] = inst_35736);

return statearr_35797;
})();
var statearr_35798_36853 = state_35784__$1;
(statearr_35798_36853[(2)] = null);

(statearr_35798_36853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (4))){
var inst_35740 = (state_35784[(9)]);
var inst_35740__$1 = (state_35784[(2)]);
var inst_35741 = (inst_35740__$1 == null);
var inst_35742 = cljs.core.not(inst_35741);
var state_35784__$1 = (function (){var statearr_35799 = state_35784;
(statearr_35799[(9)] = inst_35740__$1);

return statearr_35799;
})();
if(inst_35742){
var statearr_35800_36860 = state_35784__$1;
(statearr_35800_36860[(1)] = (5));

} else {
var statearr_35801_36864 = state_35784__$1;
(statearr_35801_36864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (15))){
var inst_35772 = (state_35784[(2)]);
var state_35784__$1 = state_35784;
var statearr_35804_36865 = state_35784__$1;
(statearr_35804_36865[(2)] = inst_35772);

(statearr_35804_36865[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (13))){
var state_35784__$1 = state_35784;
var statearr_35805_36866 = state_35784__$1;
(statearr_35805_36866[(2)] = null);

(statearr_35805_36866[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (6))){
var inst_35736 = (state_35784[(8)]);
var inst_35767 = inst_35736.length;
var inst_35768 = (inst_35767 > (0));
var state_35784__$1 = state_35784;
if(cljs.core.truth_(inst_35768)){
var statearr_35806_36867 = state_35784__$1;
(statearr_35806_36867[(1)] = (12));

} else {
var statearr_35807_36868 = state_35784__$1;
(statearr_35807_36868[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (3))){
var inst_35780 = (state_35784[(2)]);
var state_35784__$1 = state_35784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35784__$1,inst_35780);
} else {
if((state_val_35785 === (12))){
var inst_35736 = (state_35784[(8)]);
var inst_35770 = cljs.core.vec(inst_35736);
var state_35784__$1 = state_35784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35784__$1,(15),out,inst_35770);
} else {
if((state_val_35785 === (2))){
var state_35784__$1 = state_35784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35784__$1,(4),ch);
} else {
if((state_val_35785 === (11))){
var inst_35744 = (state_35784[(10)]);
var inst_35740 = (state_35784[(9)]);
var inst_35758 = (state_35784[(2)]);
var inst_35759 = [];
var inst_35762 = inst_35759.push(inst_35740);
var inst_35736 = inst_35759;
var inst_35737 = inst_35744;
var state_35784__$1 = (function (){var statearr_35809 = state_35784;
(statearr_35809[(7)] = inst_35737);

(statearr_35809[(11)] = inst_35762);

(statearr_35809[(8)] = inst_35736);

(statearr_35809[(12)] = inst_35758);

return statearr_35809;
})();
var statearr_35810_36869 = state_35784__$1;
(statearr_35810_36869[(2)] = null);

(statearr_35810_36869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (9))){
var inst_35736 = (state_35784[(8)]);
var inst_35756 = cljs.core.vec(inst_35736);
var state_35784__$1 = state_35784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35784__$1,(11),out,inst_35756);
} else {
if((state_val_35785 === (5))){
var inst_35737 = (state_35784[(7)]);
var inst_35744 = (state_35784[(10)]);
var inst_35740 = (state_35784[(9)]);
var inst_35744__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35740) : f.call(null,inst_35740));
var inst_35747 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35744__$1,inst_35737);
var inst_35748 = cljs.core.keyword_identical_QMARK_(inst_35737,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35749 = ((inst_35747) || (inst_35748));
var state_35784__$1 = (function (){var statearr_35811 = state_35784;
(statearr_35811[(10)] = inst_35744__$1);

return statearr_35811;
})();
if(cljs.core.truth_(inst_35749)){
var statearr_35812_36882 = state_35784__$1;
(statearr_35812_36882[(1)] = (8));

} else {
var statearr_35813_36888 = state_35784__$1;
(statearr_35813_36888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (14))){
var inst_35775 = (state_35784[(2)]);
var inst_35776 = cljs.core.async.close_BANG_(out);
var state_35784__$1 = (function (){var statearr_35815 = state_35784;
(statearr_35815[(13)] = inst_35775);

return statearr_35815;
})();
var statearr_35816_36895 = state_35784__$1;
(statearr_35816_36895[(2)] = inst_35776);

(statearr_35816_36895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (10))){
var inst_35765 = (state_35784[(2)]);
var state_35784__$1 = state_35784;
var statearr_35817_36896 = state_35784__$1;
(statearr_35817_36896[(2)] = inst_35765);

(statearr_35817_36896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (8))){
var inst_35736 = (state_35784[(8)]);
var inst_35744 = (state_35784[(10)]);
var inst_35740 = (state_35784[(9)]);
var inst_35753 = inst_35736.push(inst_35740);
var tmp35814 = inst_35736;
var inst_35736__$1 = tmp35814;
var inst_35737 = inst_35744;
var state_35784__$1 = (function (){var statearr_35818 = state_35784;
(statearr_35818[(7)] = inst_35737);

(statearr_35818[(14)] = inst_35753);

(statearr_35818[(8)] = inst_35736__$1);

return statearr_35818;
})();
var statearr_35819_36897 = state_35784__$1;
(statearr_35819_36897[(2)] = null);

(statearr_35819_36897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32925__auto__ = null;
var cljs$core$async$state_machine__32925__auto____0 = (function (){
var statearr_35820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35820[(0)] = cljs$core$async$state_machine__32925__auto__);

(statearr_35820[(1)] = (1));

return statearr_35820;
});
var cljs$core$async$state_machine__32925__auto____1 = (function (state_35784){
while(true){
var ret_value__32926__auto__ = (function (){try{while(true){
var result__32927__auto__ = switch__32924__auto__(state_35784);
if(cljs.core.keyword_identical_QMARK_(result__32927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32927__auto__;
}
break;
}
}catch (e35821){var ex__32928__auto__ = e35821;
var statearr_35822_36908 = state_35784;
(statearr_35822_36908[(2)] = ex__32928__auto__);


if(cljs.core.seq((state_35784[(4)]))){
var statearr_35823_36909 = state_35784;
(statearr_35823_36909[(1)] = cljs.core.first((state_35784[(4)])));

} else {
throw ex__32928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36915 = state_35784;
state_35784 = G__36915;
continue;
} else {
return ret_value__32926__auto__;
}
break;
}
});
cljs$core$async$state_machine__32925__auto__ = function(state_35784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32925__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32925__auto____1.call(this,state_35784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32925__auto____0;
cljs$core$async$state_machine__32925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32925__auto____1;
return cljs$core$async$state_machine__32925__auto__;
})()
})();
var state__33323__auto__ = (function (){var statearr_35824 = f__33322__auto__();
(statearr_35824[(6)] = c__33321__auto___36843);

return statearr_35824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33323__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
