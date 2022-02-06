goog.provide('todo.app.core');
if((typeof todo !== 'undefined') && (typeof todo.app !== 'undefined') && (typeof todo.app.core !== 'undefined') && (typeof todo.app.core.db !== 'undefined')){
} else {
todo.app.core.db = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.sorted_map(),new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"all","all",892129742)], null));
}
if((typeof todo !== 'undefined') && (typeof todo.app !== 'undefined') && (typeof todo.app.core !== 'undefined') && (typeof todo.app.core.todos !== 'undefined')){
} else {
todo.app.core.todos = reagent.core.cursor(todo.app.core.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868)], null));
}
if((typeof todo !== 'undefined') && (typeof todo.app !== 'undefined') && (typeof todo.app.core !== 'undefined') && (typeof todo.app.core.showing !== 'undefined')){
} else {
todo.app.core.showing = reagent.core.cursor(todo.app.core.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"showing","showing",798009604)], null));
}
todo.app.core.local_store_key = "todo-app";
todo.app.core.todos__GT_local_store = (function todo$app$core$todos__GT_local_store(){
return localStorage.setItem(todo.app.core.local_store_key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(todo.app.core.todos)));
});
todo.app.core.local_store__GT_todos = (function todo$app$core$local_store__GT_todos(){
var edn_map_todos = localStorage.getItem(todo.app.core.local_store_key);
var unsorted_todos = (function (){var G__33877 = edn_map_todos;
if((G__33877 == null)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__33877);
}
})();
var sorted_todos = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),unsorted_todos);
return cljs.core.reset_BANG_(todo.app.core.todos,sorted_todos);
});
cljs.core.add_watch(todo.app.core.todos,new cljs.core.Keyword(null,"todos","todos",630308868),(function (key,_atom,_old_state,new_state){
todo.app.core.todos__GT_local_store();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["---",key,"atom changed ---"], 0));

return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new_state);
}));
todo.app.core.allocate_next_id = (function todo$app$core$allocate_next_id(todos){
return cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))(cljs.core.last(cljs.core.keys(todos)));
});
todo.app.core.set_showing = (function todo$app$core$set_showing(kw){
return cljs.core.reset_BANG_(todo.app.core.showing,kw);
});
todo.app.core.add_todo = (function todo$app$core$add_todo(text){
var id = todo.app.core.allocate_next_id(cljs.core.deref(todo.app.core.todos));
var new_todo = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),text,new cljs.core.Keyword(null,"done","done",-889844188),false], null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(todo.app.core.todos,cljs.core.assoc,id,new_todo);
});
todo.app.core.toggle_done = (function todo$app$core$toggle_done(id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(todo.app.core.todos,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"done","done",-889844188)], null),cljs.core.not);
});
todo.app.core.save_todo = (function todo$app$core$save_todo(id,title){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(todo.app.core.todos,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null),title);
});
todo.app.core.delete_todo = (function todo$app$core$delete_todo(id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(todo.app.core.todos,cljs.core.dissoc,id);
});
todo.app.core.complete_all_toggle = (function todo$app$core$complete_all_toggle(){
var b = cljs.core.not_every_QMARK_(new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.vals(cljs.core.deref(todo.app.core.todos)));
var g = (function (m,id){
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"done","done",-889844188)], null),b);
});
var ids = cljs.core.keys(cljs.core.deref(todo.app.core.todos));
var updated_todos = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(g,cljs.core.deref(todo.app.core.todos),ids);
return cljs.core.reset_BANG_(todo.app.core.todos,updated_todos);
});
todo.app.core.clear_completed = (function todo$app$core$clear_completed(){
var done_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.vals(cljs.core.deref(todo.app.core.todos))));
var updated_todos = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,cljs.core.deref(todo.app.core.todos),done_ids);
return cljs.core.reset_BANG_(todo.app.core.todos,updated_todos);
});
todo.app.core.hook_browser_navigation_BANG_ = (function todo$app$core$hook_browser_navigation_BANG_(){
var G__33878 = (new goog.history.Html5History());
goog.events.listen(G__33878,goog.history.EventType.NAVIGATE,(function (event){
return secretary.core.dispatch_BANG_(event.token);
}));

G__33878.setEnabled(true);

return G__33878;
});
todo.app.core.app_routes = (function todo$app$core$app_routes(){
secretary.core.set_config_BANG_(new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__27635__auto___33909 = (function (params__27636__auto__){
if(cljs.core.map_QMARK_(params__27636__auto__)){
var map__33879 = params__27636__auto__;
var map__33879__$1 = (((((!((map__33879 == null))))?(((((map__33879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33879):map__33879);
return todo.app.core.set_showing(new cljs.core.Keyword(null,"all","all",892129742));
} else {
if(cljs.core.vector_QMARK_(params__27636__auto__)){
var vec__33881 = params__27636__auto__;
return todo.app.core.set_showing(new cljs.core.Keyword(null,"all","all",892129742));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__27635__auto___33909);


var action__27635__auto___33910 = (function (params__27636__auto__){
if(cljs.core.map_QMARK_(params__27636__auto__)){
var map__33884 = params__27636__auto__;
var map__33884__$1 = (((((!((map__33884 == null))))?(((((map__33884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33884):map__33884);
var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33884__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
return todo.app.core.set_showing(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(filter));
} else {
if(cljs.core.vector_QMARK_(params__27636__auto__)){
var vec__33886 = params__27636__auto__;
var filter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33886,(0),null);
return todo.app.core.set_showing(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(filter));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:filter",action__27635__auto___33910);


return todo.app.core.hook_browser_navigation_BANG_();
});
todo.app.core.todo_input = (function todo$app$core$todo_input(p__33893){
var map__33894 = p__33893;
var map__33894__$1 = (((((!((map__33894 == null))))?(((((map__33894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33894):map__33894);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33894__$1,new cljs.core.Keyword(null,"title","title",636505583));
var on_save = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33894__$1,new cljs.core.Keyword(null,"on-save","on-save",1618176266));
var on_stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33894__$1,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));
var input_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(title);
var update_text = (function (p1__33889_SHARP_){
return cljs.core.reset_BANG_(input_text,p1__33889_SHARP_);
});
var stop = (function (){
cljs.core.reset_BANG_(input_text,"");

if(cljs.core.truth_(on_stop)){
return (on_stop.cljs$core$IFn$_invoke$arity$0 ? on_stop.cljs$core$IFn$_invoke$arity$0() : on_stop.call(null));
} else {
return null;
}
});
var save = (function (){
var trimmed_text = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(input_text)));
if((!(cljs.core.empty_QMARK_(trimmed_text)))){
(on_save.cljs$core$IFn$_invoke$arity$1 ? on_save.cljs$core$IFn$_invoke$arity$1(trimmed_text) : on_save.call(null,trimmed_text));
} else {
}

return stop();
});
var key_pressed = (function (p1__33890_SHARP_){
var G__33896 = p1__33890_SHARP_;
switch (G__33896) {
case "Enter":
return save();

break;
case "Esc":
return stop();

break;
case "Escape":
return stop();

break;
default:
return null;

}
});
return (function (p__33897){
var map__33898 = p__33897;
var map__33898__$1 = (((((!((map__33898 == null))))?(((((map__33898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33898):map__33898);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33898__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33898__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(input_text),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),save,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__33891_SHARP_){
return update_text(p1__33891_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__33892_SHARP_){
return key_pressed(p1__33892_SHARP_.key);
})], null)], null);
});
});
todo.app.core.task_entry = (function todo$app$core$task_entry(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.header","header.header",1073294241),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"todos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.app.core.todo_input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"new-todo",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs to be done?",new cljs.core.Keyword(null,"on-save","on-save",1618176266),todo.app.core.add_todo], null)], null)], null);
});
todo.app.core.todo_item = (function todo$app$core$todo_item(){
var editing = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (p__33900){
var map__33901 = p__33900;
var map__33901__$1 = (((((!((map__33901 == null))))?(((((map__33901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33901):map__33901);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33901__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33901__$1,new cljs.core.Keyword(null,"title","title",636505583));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33901__$1,new cljs.core.Keyword(null,"done","done",-889844188));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[(cljs.core.truth_(done)?"completed":null),(cljs.core.truth_(cljs.core.deref(editing))?"editing":null)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.views","div.views",-1481909428),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),done,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return todo.app.core.toggle_done(id);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),(function (){
return cljs.core.reset_BANG_(editing,true);
})], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.destroy","button.destroy",1044866871),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return todo.app.core.delete_todo(id);
})], null)], null)], null),(cljs.core.truth_(cljs.core.deref(editing))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.app.core.todo_input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"edit",new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"on-save","on-save",1618176266),(function (text){
return todo.app.core.save_todo(id,text);
}),new cljs.core.Keyword(null,"on-stop","on-stop",1520114515),(function (){
return cljs.core.reset_BANG_(editing,false);
})], null)], null):null)], null);
});
});
todo.app.core.task_list = (function todo$app$core$task_list(){
var items = cljs.core.vals(cljs.core.deref(todo.app.core.todos));
var filter_fn = (function (){var G__33903 = cljs.core.deref(todo.app.core.showing);
var G__33903__$1 = (((G__33903 instanceof cljs.core.Keyword))?G__33903.fqn:null);
switch (G__33903__$1) {
case "done":
return new cljs.core.Keyword(null,"done","done",-889844188);

break;
case "active":
return cljs.core.complement(new cljs.core.Keyword(null,"done","done",-889844188));

break;
case "all":
return cljs.core.identity;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33903__$1)].join('')));

}
})();
var visible_items = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,items);
var all_complete_QMARK_ = cljs.core.every_QMARK_(new cljs.core.Keyword(null,"done","done",-889844188),items);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.main","section.main",548517124),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"toggle-all",new cljs.core.Keyword(null,"class","class",-2030961996),"toggle-all",new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),all_complete_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),todo.app.core.complete_all_toggle], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all"], null),"Mark all as complete"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.todo-list","ul.todo-list",461840379),(function (){var iter__4529__auto__ = (function todo$app$core$task_list_$_iter__33904(s__33905){
return (new cljs.core.LazySeq(null,(function (){
var s__33905__$1 = s__33905;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__33905__$1);
if(temp__5735__auto__){
var s__33905__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33905__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__33905__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__33907 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__33906 = (0);
while(true){
if((i__33906 < size__4528__auto__)){
var todo__$1 = cljs.core._nth(c__4527__auto__,i__33906);
cljs.core.chunk_append(b__33907,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.app.core.todo_item,todo__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo__$1)], null)));

var G__33913 = (i__33906 + (1));
i__33906 = G__33913;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33907),todo$app$core$task_list_$_iter__33904(cljs.core.chunk_rest(s__33905__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33907),null);
}
} else {
var todo__$1 = cljs.core.first(s__33905__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.app.core.todo_item,todo__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo__$1)], null)),todo$app$core$task_list_$_iter__33904(cljs.core.rest(s__33905__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(visible_items);
})()], null)], null);
});
todo.app.core.footer_controls = (function todo$app$core$footer_controls(){
var items = cljs.core.vals(cljs.core.deref(todo.app.core.todos));
var done_count = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"done","done",-889844188),items));
var active_count = (cljs.core.count(items) - done_count);
var props_for = (function (kw){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kw,cljs.core.deref(todo.app.core.showing)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(todo.app.core.showing,kw);
}),new cljs.core.Keyword(null,"href","href",-793805698),["#/",cljs.core.name(kw)].join('')], null);
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.footer","footer.footer",1361475645),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.todo-count","span.todo-count",-324934453),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),active_count], null)," ",(function (){var G__33908 = active_count;
switch (G__33908) {
case (1):
return "item";

break;
default:
return "items";

}
})()," left"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filters","ul.filters",698823245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),props_for(new cljs.core.Keyword(null,"all","all",892129742)),"All"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),props_for(new cljs.core.Keyword(null,"active","active",1895962068)),"Active"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),props_for(new cljs.core.Keyword(null,"done","done",-889844188)),"Completd"], null)], null)], null),(((done_count > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.clear-completed","button.clear-completed",1293834241),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),todo.app.core.clear_completed], null),"Clear completed"], null):null)], null);
});
todo.app.core.todo_app = (function todo$app$core$todo_app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.todoapp","section.todoapp",61469282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.app.core.task_entry], null),((cljs.core.seq(cljs.core.deref(todo.app.core.todos)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.app.core.task_list], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.app.core.footer_controls], null)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.info","footer.info",-868940546),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Double-click to edit a todo"], null)], null)], null);
});
todo.app.core.render = (function todo$app$core$render(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.app.core.todo_app], null),document.getElementById("root"));
});
todo.app.core.main = (function todo$app$core$main(){
todo.app.core.local_store__GT_todos();

todo.app.core.app_routes();

return todo.app.core.render();
});
goog.exportSymbol('todo.app.core.main', todo.app.core.main);
todo.app.core.reload_BANG_ = (function todo$app$core$reload_BANG_(){
return todo.app.core.render();
});

//# sourceMappingURL=todo.app.core.js.map
