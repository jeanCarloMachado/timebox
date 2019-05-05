// Compiled by ClojureScript 1.10.238 {}
goog.provide('timebox.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"console.log");
if(typeof timebox.core.seconds_counter !== 'undefined'){
} else {
timebox.core.seconds_counter = reagent.core.atom.call(null,(0));
}
if(typeof timebox.core.timer_running !== 'undefined'){
} else {
timebox.core.timer_running = reagent.core.atom.call(null,false);
}
if(typeof timebox.core.timebox_in_minutes !== 'undefined'){
} else {
timebox.core.timebox_in_minutes = reagent.core.atom.call(null,(0));
}
if(typeof timebox.core.time_updater !== 'undefined'){
} else {
timebox.core.time_updater = setInterval((function (){
return cljs.core.swap_BANG_.call(null,timebox.core.seconds_counter,cljs.core.inc);
}),(1000));
}
timebox.core.create_notification = (function timebox$core$create_notification(title,msg){
return (new Notification(title,({"body": msg})));
});
timebox.core.show_desktop_notification = (function timebox$core$show_desktop_notification(title,msg){
if(cljs.core._EQ_.call(null,Notification.permission,"granted")){
return timebox.core.create_notification.call(null,title,msg);
} else {
return Notification.requestPermission((function (permission){
if(cljs.core._EQ_.call(null,permission,"granted")){
return timebox.core.create_notification.call(null,title,msg);
} else {
return null;
}
}));
}
});
timebox.core.timer_start = (function timebox$core$timer_start(){
cljs.core.reset_BANG_.call(null,timebox.core.timer_running,true);

return cljs.core.reset_BANG_.call(null,timebox.core.seconds_counter,(0));
});
timebox.core.timer_stop = (function timebox$core$timer_stop(){
return cljs.core.reset_BANG_.call(null,timebox.core.timer_running,false);
});
timebox.core.minutes_to_seconds = (function timebox$core$minutes_to_seconds(p1__21910_SHARP_){
return (p1__21910_SHARP_ * (60));
});
timebox.core.percentage_ellapsed = (function timebox$core$percentage_ellapsed(seconds_ellapsed,timebox_in_minutes){
return ((((100) * seconds_ellapsed) / timebox.core.minutes_to_seconds.call(null,timebox_in_minutes)) | (0));
});
timebox.core.change_timebox = (function timebox$core$change_timebox(e){
cljs.core.reset_BANG_.call(null,timebox.core.timebox_in_minutes,e.target.value);

return timebox.core.timer_stop.call(null);
});
timebox.core.manage_end = (function timebox$core$manage_end(percentage_ellapsed){
if((percentage_ellapsed > (100))){
timebox.core.show_desktop_notification.call(null,"Timebox is over","");
} else {
}

if((percentage_ellapsed > (100))){
(new Audio("bell.mp3")).play();
} else {
}

return percentage_ellapsed;
});
timebox.core.style_input = (function timebox$core$style_input(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"200px"], null);
});
timebox.core.button_style = (function timebox$core$button_style(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"25px",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"150px",new cljs.core.Keyword(null,"height","height",1025178622),"50px",new cljs.core.Keyword(null,"margin","margin",-995903681),"25px"], null);
});
timebox.core.root = (function timebox$core$root(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),"#cccccc",new cljs.core.Keyword(null,"min-height","min-height",398480837),"400px",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"400px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Timebox size in minutes",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,timebox.core.timebox_in_minutes),new cljs.core.Keyword(null,"on-change","on-change",-732046149),timebox.core.change_timebox,new cljs.core.Keyword(null,"style","style",-496642736),timebox.core.style_input.call(null)], null)], null),((cljs.core.not.call(null,cljs.core.deref.call(null,timebox.core.timer_running)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),timebox.core.button_style.call(null),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Start",new cljs.core.Keyword(null,"on-click","on-click",1632826543),timebox.core.timer_start], null)], null):null),((cljs.core._EQ_.call(null,true,cljs.core.deref.call(null,timebox.core.timer_running)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),timebox.core.button_style.call(null),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Stop",new cljs.core.Keyword(null,"on-click","on-click",1632826543),timebox.core.timer_stop], null)], null):null),((cljs.core._EQ_.call(null,true,cljs.core.deref.call(null,timebox.core.timer_running)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Percentage ellapsed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(timebox.core.manage_end.call(null,timebox.core.percentage_ellapsed.call(null,cljs.core.deref.call(null,timebox.core.seconds_counter),cljs.core.deref.call(null,timebox.core.timebox_in_minutes))))," %"].join('')], null):null)], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [timebox.core.root], null),document.getElementById("app"));
timebox.core.on_js_reload = (function timebox$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1557068514430
