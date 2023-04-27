(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var k;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=da(this);function n(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ca(c,a,{configurable:!0,writable:!0,value:b})}}
n("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ca(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
n("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ca(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ia(a){return a.raw=a}
function t(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ja(a){if(!(a instanceof Array)){a=t(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ka(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var la="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ka(d,e)&&(a[e]=d[e])}return a};
n("Object.assign",function(a){return a||la});
var ma="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},na=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ma(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),pa;
if("function"==typeof Object.setPrototypeOf)pa=Object.setPrototypeOf;else{var qa;a:{var ta={a:!0},ua={};try{ua.__proto__=ta;qa=ua.a;break a}catch(a){}qa=!1}pa=qa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var va=pa;
function v(a,b){a.prototype=ma(b.prototype);a.prototype.constructor=a;if(va)va(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ya=b.prototype}
function wa(){this.u=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.o=0;this.ea=this.j=null}
function xa(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
wa.prototype.U=function(a){this.i=a};
function ya(a,b){a.j={exception:b,Ad:!0};a.h=a.o||a.m}
wa.prototype.return=function(a){this.j={return:a};this.h=this.m};
wa.prototype.yield=function(a,b){this.h=b;return{value:a}};
wa.prototype.A=function(a){this.h=a};
function Aa(a,b,c){a.o=b;void 0!=c&&(a.m=c)}
function Ba(a,b){a.h=b;a.o=0}
function Ca(a){a.o=0;var b=a.j.exception;a.j=null;return b}
function Da(a){a.ea=[a.j];a.o=0;a.m=0}
function Ga(a){var b=a.ea.splice(0)[0];(b=a.j=a.j||b)?b.Ad?a.h=a.o||a.m:void 0!=b.A&&a.m<b.A?(a.h=b.A,a.j=null):a.h=a.m:a.h=0}
function Ha(a){this.h=new wa;this.i=a}
function Ia(a,b){xa(a.h);var c=a.h.l;if(c)return Ja(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ka(a)}
function Ja(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.u=!1,e;var f=e.value}catch(g){return a.h.l=null,ya(a.h,g),Ka(a)}a.h.l=null;d.call(a.h,f);return Ka(a)}
function Ka(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.u=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ya(a.h,c)}a.h.u=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Ad)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function La(a){this.next=function(b){xa(a.h);a.h.l?b=Ja(a,a.h.l.next,b,a.h.U):(a.h.U(b),b=Ka(a));return b};
this.throw=function(b){xa(a.h);a.h.l?b=Ja(a,a.h.l["throw"],b,a.h.U):(ya(a.h,b),b=Ka(a));return b};
this.return=function(b){return Ia(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ma(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function w(a){return Ma(new La(new Ha(a)))}
function Na(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
n("Reflect",function(a){return a?a:{}});
n("Reflect.construct",function(){return na});
n("Reflect.setPrototypeOf",function(a){return a?a:va?function(b,c){try{return va(b,c),!0}catch(d){return!1}}:null});
n("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.u=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(l){h.reject(l)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var l=g[h];g[h]=null;try{l()}catch(m){this.l(m)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(m){return function(p){l||(l=!0,m.call(h,p))}}
var h=this,l=!1;return{resolve:g(this.R),reject:g(this.m)}};
b.prototype.R=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ba(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.M(g):this.o(g)}};
b.prototype.M=function(g){var h=void 0;try{h=g.then}catch(l){this.m(l);return}"function"==typeof h?this.fa(h,g):this.o(g)};
b.prototype.m=function(g){this.U(2,g)};
b.prototype.o=function(g){this.U(1,g)};
b.prototype.U=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.aa();this.ea()};
b.prototype.aa=function(){var g=this;e(function(){if(g.F()){var h=ea.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.F=function(){if(this.u)return!1;var g=ea.CustomEvent,h=ea.Event,l=ea.dispatchEvent;if("undefined"===typeof l)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return l(g)};
b.prototype.ea=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ba=function(g){var h=this.l();g.hc(h.resolve,h.reject)};
b.prototype.fa=function(g,h){var l=this.l();try{g.call(h,l.resolve,l.reject)}catch(m){l.reject(m)}};
b.prototype.then=function(g,h){function l(z,u){return"function"==typeof z?function(A){try{m(z(A))}catch(C){p(C)}}:u}
var m,p,r=new b(function(z,u){m=z;p=u});
this.hc(l(g,m),l(h,p));return r};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.hc=function(g,h){function l(){switch(m.h){case 1:g(m.j);break;case 2:h(m.j);break;default:throw Error("Unexpected state: "+m.h);}}
var m=this;null==this.i?f.i(l):this.i.push(l);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,l){l(g)})};
b.race=function(g){return new b(function(h,l){for(var m=t(g),p=m.next();!p.done;p=m.next())d(p.value).hc(h,l)})};
b.all=function(g){var h=t(g),l=h.next();return l.done?d([]):new b(function(m,p){function r(A){return function(C){z[A]=C;u--;0==u&&m(z)}}
var z=[],u=0;do z.push(void 0),u++,d(l.value).hc(r(z.length-1),p),l=h.next();while(!l.done)})};
return b});
n("WeakMap",function(a){function b(l){this.h=(h+=Math.random()+1).toString();if(l){l=t(l);for(var m;!(m=l.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(l){var m=typeof l;return"object"===m&&null!==l||"function"===m}
function e(l){if(!ka(l,g)){var m=new c;ca(l,g,{value:m})}}
function f(l){var m=Object[l];m&&(Object[l]=function(p){if(p instanceof c)return p;Object.isExtensible(p)&&e(p);return m(p)})}
if(function(){if(!a||!Object.seal)return!1;try{var l=Object.seal({}),m=Object.seal({}),p=new a([[l,2],[m,3]]);if(2!=p.get(l)||3!=p.get(m))return!1;p.delete(l);p.set(m,4);return!p.has(l)&&4==p.get(m)}catch(r){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(l,m){if(!d(l))throw Error("Invalid WeakMap key");e(l);if(!ka(l,g))throw Error("WeakMap key fail: "+l);l[g][this.h]=m;return this};
b.prototype.get=function(l){return d(l)&&ka(l,g)?l[g][this.h]:void 0};
b.prototype.has=function(l){return d(l)&&ka(l,g)&&ka(l[g],this.h)};
b.prototype.delete=function(l){return d(l)&&ka(l,g)&&ka(l[g],this.h)?delete l[g][this.h]:!1};
return b});
n("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,l){var m=h.h;return fa(function(){if(m){for(;m.head!=h.h;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:l(m)};m=null}return{done:!0,value:void 0}})}
function d(h,l){var m=l&&typeof l;"object"==m||"function"==m?f.has(l)?m=f.get(l):(m=""+ ++g,f.set(l,m)):m="p_"+l;var p=h.data_[m];if(p&&ka(h.data_,m))for(h=0;h<p.length;h++){var r=p[h];if(l!==l&&r.key!==r.key||l===r.key)return{id:m,list:p,index:h,entry:r}}return{id:m,list:p,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=t(h);for(var l;!(l=h.next()).done;)l=l.value,this.set(l[0],l[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),l=new a(t([[h,"s"]]));if("s"!=l.get(h)||1!=l.size||l.get({x:4})||l.set({x:4},"t")!=l||2!=l.size)return!1;var m=l.entries(),p=m.next();if(p.done||p.value[0]!=h||"s"!=p.value[1])return!1;p=m.next();return p.done||4!=p.value[0].x||"t"!=p.value[1]||!m.next().done?!1:!0}catch(r){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,l){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=l:(m.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:l},m.list.push(m.entry),this.h.previous.next=m.entry,this.h.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,l){for(var m=this.entries(),p;!(p=m.next()).done;)p=p.value,h.call(l,p[1],p[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Oa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
n("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Oa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
n("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
n("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Oa(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
n("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
n("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
n("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Pa(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
n("Array.prototype.entries",function(a){return a?a:function(){return Pa(this,function(b,c){return[b,c]})}});
n("Array.prototype.keys",function(a){return a?a:function(){return Pa(this,function(b){return b})}});
n("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
n("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
n("Array.prototype.values",function(a){return a?a:function(){return Pa(this,function(b,c){return c})}});
n("Object.setPrototypeOf",function(a){return a||va});
n("Set",function(a){function b(c){this.h=new Map;if(c){c=t(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(t([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
n("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push([d,b[d]]);return c}});
n("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
n("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
n("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Oa(this,b,"includes").indexOf(b,c||0)}});
n("globalThis",function(a){return a||ea});
n("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push(b[d]);return c}});
var Qa=Qa||{},x=this||self;function y(a,b,c){a=a.split(".");c=c||x;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function B(a,b){a=a.split(".");b=b||x;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ra(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ta(a){var b=Ra(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ua(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Va(a){return Object.prototype.hasOwnProperty.call(a,Wa)&&a[Wa]||(a[Wa]=++Xa)}
var Wa="closure_uid_"+(1E9*Math.random()>>>0),Xa=0;function Ya(a,b,c){return a.call.apply(a.bind,arguments)}
function Za(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function $a(a,b,c){$a=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ya:Za;return $a.apply(null,arguments)}
function ab(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function bb(a,b){function c(){}
c.prototype=b.prototype;a.ya=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function cb(a){return a}
;function db(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,db);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
bb(db,Error);db.prototype.name="CustomError";function eb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function fb(){}
function gb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var hb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ib=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},jb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},kb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},lb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
ib(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function mb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function nb(a,b){b=hb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function ob(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ta(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function pb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function qb(a){var b=rb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function sb(a){for(var b in a)return!1;return!0}
function tb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function ub(a){return null!==a&&"privembed"in a?a.privembed:!1}
function vb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function wb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function xb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=xb(a[c]);return b}
var yb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<yb.length;f++)c=yb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Ab;function Bb(){if(void 0===Ab){var a=null,b=x.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:cb,createScript:cb,createScriptURL:cb})}catch(c){x.console&&x.console.error(c.message)}Ab=a}else Ab=a}return Ab}
;function Cb(a,b){this.j=a===Db&&b||""}
Cb.prototype.i=!0;Cb.prototype.h=function(){return this.j};
function Eb(a){return new Cb(Db,a)}
var Db={};Eb("");var Fb={};function Gb(a,b){this.j=b===Fb?a:"";this.i=!0}
Gb.prototype.toString=function(){return this.j.toString()};
Gb.prototype.h=function(){return this.j.toString()};function Hb(a,b){this.j=b===Ib?a:""}
Hb.prototype.toString=function(){return this.j+""};
Hb.prototype.i=!0;Hb.prototype.h=function(){return this.j.toString()};
function Jb(a){if(a instanceof Hb&&a.constructor===Hb)return a.j;Ra(a);return"type_error:TrustedResourceUrl"}
var Ib={};function Kb(a){var b=Bb();a=b?b.createScriptURL(a):a;return new Hb(a,Ib)}
;var Lb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Mb(a,b){return-1!=a.toLowerCase().indexOf(b.toLowerCase())}
function Nb(a,b){return a<b?-1:a>b?1:0}
;function Ob(a,b){this.j=b===Pb?a:""}
Ob.prototype.toString=function(){return this.j.toString()};
Ob.prototype.i=!0;Ob.prototype.h=function(){return this.j.toString()};
function Qb(a){if(a instanceof Ob&&a.constructor===Ob)return a.j;Ra(a);return"type_error:SafeUrl"}
var Rb;try{new URL("s://g"),Rb=!0}catch(a){Rb=!1}var Sb=Rb;function Tb(a){if(a instanceof Ob)return a;a="object"==typeof a&&a.i?a.h():String(a);a:{var b=a;if(Sb){try{var c=new URL(b)}catch(d){b="https:";break a}b=c.protocol}else b:{c=document.createElement("a");try{c.href=b}catch(d){b=void 0;break b}b=c.protocol;b=":"===b||""===b?"https:":b}}"javascript:"!==b||(a="about:invalid#zClosurez");return new Ob(a,Pb)}
var Pb={},Ub=new Ob("about:invalid#zClosurez",Pb);var Xb,Yb=B("CLOSURE_FLAGS"),Zb=Yb&&Yb[610401301];Xb=null!=Zb?Zb:!1;function $b(){var a=x.navigator;return a&&(a=a.userAgent)?a:""}
var ac,bc=x.navigator;ac=bc?bc.userAgentData||null:null;function cc(a){return Xb?ac?ac.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function E(a){return-1!=$b().indexOf(a)}
;function dc(){return Xb?!!ac&&0<ac.brands.length:!1}
function ec(){return dc()?!1:E("Opera")}
function fc(){return dc()?!1:E("Trident")||E("MSIE")}
function hc(){return dc()?!1:E("Edge")}
function ic(){return dc()?cc("Microsoft Edge"):E("Edg/")}
function jc(){return E("Firefox")||E("FxiOS")}
function kc(){return E("Safari")&&!(lc()||(dc()?0:E("Coast"))||ec()||hc()||ic()||(dc()?cc("Opera"):E("OPR"))||jc()||E("Silk")||E("Android"))}
function lc(){return dc()?cc("Chromium"):(E("Chrome")||E("CriOS"))&&!hc()||E("Silk")}
function mc(){return E("Android")&&!(lc()||jc()||ec()||E("Silk"))}
function nc(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function oc(a){var b=$b();if("Internet Explorer"===a){if(fc())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);b=nc(c);
switch(a){case "Opera":if(ec())return b(["Version","Opera"]);if(dc()?cc("Opera"):E("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if(hc())return b(["Edge"]);if(ic())return b(["Edg"]);break;case "Chromium":if(lc())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&jc()||"Safari"===a&&kc()||"Android Browser"===a&&mc()||"Silk"===a&&E("Silk")?(b=c[2])&&b[1]||"":""}
function pc(a){if(dc()&&"Silk"!==a){var b=ac.brands.find(function(c){return c.brand===a});
if(!b||!b.version)return NaN;b=b.version.split(".")}else{b=oc(a);if(""===b)return NaN;b=b.split(".")}return 0===b.length?NaN:Number(b[0])}
;var qc={};function rc(a){this.j=qc===qc?a:"";this.i=!0}
rc.prototype.h=function(){return this.j.toString()};
rc.prototype.toString=function(){return this.j.toString()};function sc(a,b){b=b instanceof Ob?b:Tb(b);a.href=Qb(b)}
function tc(a,b){a.rel="stylesheet";Mb("stylesheet","stylesheet")?(a.href=Jb(b).toString(),(b=vc('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)):a.href=b instanceof Hb?Jb(b).toString():b instanceof Ob?Qb(b):Qb(Tb(b))}
function wc(){return vc("script[nonce]")}
var xc=/^[\w+/_-]+[=]{0,2}$/;function vc(a,b){b=(b||x).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&xc.test(a)?a:"":""}
;function yc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var zc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ac(a){return a?decodeURI(a):a}
function Bc(a,b){return b.match(zc)[a]||null}
function Cc(a){return Ac(Bc(3,a))}
function Dc(a){var b=a.match(zc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function Ec(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function Fc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Fc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Gc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)Fc(a[b],a[b+1],c);return c.join("&")}
function Hc(a){var b=[],c;for(c in a)Fc(c,a[c],b);return b.join("&")}
function Ic(a,b){var c=2==arguments.length?Gc(arguments[1],0):Gc(arguments,1);return Ec(a,c)}
function Jc(a,b){b=Hc(b);return Ec(a,b)}
function Kc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return Ec(a,b+c)}
function Lc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var Mc=/#|$/,Nc=/[?&]($|#)/;function Oc(a,b){for(var c=a.search(Mc),d=0,e,f=[];0<=(e=Lc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Nc,"$1")}
;function Pc(a){x.setTimeout(function(){throw a;},0)}
;function Qc(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
;function Rc(){return Xb?!!ac&&!!ac.platform:!1}
function Sc(){return Rc()?"Android"===ac.platform:E("Android")}
function Tc(){return E("iPhone")&&!E("iPod")&&!E("iPad")}
function Uc(){return Tc()||E("iPad")||E("iPod")}
function Vc(){return Rc()?"macOS"===ac.platform:E("Macintosh")}
function Wc(){return Rc()?"Windows"===ac.platform:E("Windows")}
function bd(){return Rc()?"Chrome OS"===ac.platform:E("CrOS")}
function cd(){var a=$b(),b="";Wc()?(b=/Windows (?:NT|Phone) ([0-9.]+)/,b=(a=b.exec(a))?a[1]:"0.0"):Uc()?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,b=(a=b.exec(a))&&a[1].replace(/_/g,".")):Vc()?(b=/Mac OS X ([0-9_.]+)/,b=(a=b.exec(a))?a[1].replace(/_/g,"."):"10"):Mb($b(),"KaiOS")?(b=/(?:KaiOS)\/(\S+)/i,b=(a=b.exec(a))&&a[1]):Sc()?(b=/Android\s+([^\);]+)(\)|;)/,b=(a=b.exec(a))&&a[1]):bd()&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,b=(a=b.exec(a))&&a[1]);a=0;b=Lb(String(b||"")).split(".");for(var c=
Lb("12").split("."),d=Math.max(b.length,c.length),e=0;0==a&&e<d;e++){var f=b[e]||"",g=c[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;a=Nb(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Nb(0==f[2].length,0==g[2].length)||Nb(f[2],g[2]);f=f[3];g=g[3]}while(0==a)}}
;function dd(a){dd[" "](a);return a}
dd[" "]=function(){};var ed=ec(),fd=fc(),gd=E("Edge"),hd=E("Gecko")&&!(Mb($b(),"WebKit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),id=Mb($b(),"WebKit")&&!E("Edge");id&&E("Mobile");Vc();Wc();(Rc()?"Linux"===ac.platform:E("Linux"))||bd();var jd=x.navigator||null;jd&&(jd.appVersion||"").indexOf("X11");var kd=Sc();Tc();E("iPad");E("iPod");Uc();Mb($b(),"KaiOS");function ld(){var a=x.document;return a?a.documentMode:void 0}
var md;a:{var nd="",od=function(){var a=$b();if(hd)return/rv:([^\);]+)(\)|;)/.exec(a);if(gd)return/Edge\/([\d\.]+)/.exec(a);if(fd)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(id)return/WebKit\/(\S+)/.exec(a);if(ed)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
od&&(nd=od?od[1]:"");if(fd){var pd=ld();if(null!=pd&&pd>parseFloat(nd)){md=String(pd);break a}}md=nd}var qd=md,rd;if(x.document&&fd){var sd=ld();rd=sd?sd:parseInt(qd,10)||void 0}else rd=void 0;var td=rd;jc();var ud=Tc()||E("iPod"),vd=E("iPad");mc();lc();var wd=kc()&&!Uc();var xd={},yd=null;function zd(a,b){Ta(a);void 0===b&&(b=0);Ad();b=xd[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],l=a[e+2],m=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|l>>6];l=b[l&63];c[f++]=""+m+g+h+l}m=0;l=d;switch(a.length-e){case 2:m=a[e+1],l=b[(m&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|m>>4]+l+d}return c.join("")}
function Bd(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Cd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Cd(a,b){function c(l){for(;d<a.length;){var m=a.charAt(d++),p=yd[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}
Ad();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function Ad(){if(!yd){yd={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));xd[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===yd[f]&&(yd[f]=e)}}}}
;var Dd="undefined"!==typeof Uint8Array,Ed=!fd&&"function"===typeof btoa;function Fd(a){if(!Ed)return zd(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var Gd=/[-_.]/g,Hd={"-":"+",_:"/",".":"="};function Id(a){return Hd[a]||""}
function Jd(a){return Dd&&null!=a&&a instanceof Uint8Array}
var Kd={};var Ld;function Md(a){if(a!==Kd)throw Error("illegal external caller");}
function Nd(a,b){Md(b);this.h=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Nd.prototype.isEmpty=function(){return null==this.h};
Nd.prototype.sizeBytes=function(){Md(Kd);var a=this.h;if(null!=a&&!Jd(a))if("string"===typeof a)if(Ed){Gd.test(a)&&(a=a.replace(Gd,Id));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=Bd(a);else Ra(a),a=null;return(a=null==a?a:this.h=a)?a.length:0};var Od="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function Pd(a,b){if(Od)return a[Od]|=b;if(void 0!==a.Ga)return a.Ga|=b;Object.defineProperties(a,{Ga:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}
function Qd(a,b){var c=F(a);(c&b)!==b&&(Object.isFrozen(a)&&(a=Array.prototype.slice.call(a)),Rd(a,c|b));return a}
function Sd(a,b){Od?a[Od]&&(a[Od]&=~b):void 0!==a.Ga&&(a.Ga&=~b)}
function F(a){var b;Od?b=a[Od]:b=a.Ga;return null==b?0:b}
function Rd(a,b){Od?a[Od]=b:void 0!==a.Ga?a.Ga=b:Object.defineProperties(a,{Ga:{value:b,configurable:!0,writable:!0,enumerable:!1}});return a}
function Td(a){Pd(a,1);return a}
function Ud(a,b){Rd(b,(a|0)&-51)}
function Vd(a,b){Rd(b,(a|18)&-41)}
;var Zd={};function $d(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var ae,be=Object.freeze(Rd([],23));function ce(a){if(F(a.X)&2)throw Error();}
;function de(a){if(null!=a&&"number"!==typeof a)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof a+": "+a);return a}
function ee(a){return a.displayName||a.name||"unknown type name"}
function fe(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+ee(b)+" but got "+(a&&ee(a.constructor)));return a}
function ge(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.Rc===Zd)return a;if(d){var e=d=F(a);0===e&&(e|=c&16);e|=c&2;e!==d&&Rd(a,e);return new b(a)}}
;function he(a){var b=a.i+a.fb;return a.Pa||(a.Pa=a.X[b]={})}
function ie(a,b,c){return-1===b?null:b>=a.i?a.Pa?a.Pa[b]:void 0:c&&a.Pa&&(c=a.Pa[b],null!=c)?c:a.X[b+a.fb]}
function G(a,b,c,d){ce(a);return je(a,b,c,d)}
function je(a,b,c,d){a.j&&(a.j=void 0);if(b>=a.i||d)return he(a)[b]=c,a;a.X[b+a.fb]=c;(c=a.Pa)&&b in c&&delete c[b];return a}
function ke(a){return void 0!==le(a,me,11,!1)}
function ne(a,b,c,d,e){var f=ie(a,b,d);Array.isArray(f)||(f=be);var g=F(f);g&1||Td(f);if(e)g&2||Pd(f,18),c&1||Object.freeze(f);else{e=!(c&2);var h=g&2;c&1||!h?e&&g&16&&!h&&Sd(f,16):(f=Td(Array.prototype.slice.call(f)),je(a,b,f,d))}return f}
function oe(a,b,c,d){ce(a);(c=pe(a,c))&&c!==b&&null!=d&&je(a,c,void 0,!1);return je(a,b,d)}
function pe(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=ie(a,e)&&(0!==c&&je(a,c,void 0,!1),c=e)}return c}
function le(a,b,c,d){var e=ie(a,c,d);b=ge(e,b,F(a.X));b!==e&&null!=b&&je(a,c,b,d);return b}
function qe(a,b,c,d){d=void 0===d?!1:d;b=le(a,b,c,d);if(null==b)return b;if(!(F(a.X)&2)){var e=re(b);e!==b&&(b=e,je(a,c,b,d))}return b}
function se(a,b,c,d,e){var f=!!(e&2),g=ne(a,c,1,void 0,f);if(g===be||!(F(g)&4)){var h=g;g=!!(e&2);var l=!!(F(h)&2);f=h;!g&&l&&(h=Array.prototype.slice.call(h));e|=l?2:0;for(var m=0,p=0;m<h.length;m++){var r=ge(h[m],b,e);void 0!==r&&(l=l||!!(2&F(r.X)),h[p++]=r)}p<m&&(h.length=p);b=h;e=!l;l=F(b);h=l|5;h=e?h|8:h&-9;l!=h&&(Object.isFrozen(b)&&(b=Array.prototype.slice.call(b)),Rd(b,h));h=b;f!==h&&je(a,c,h);(g||1===d)&&Object.freeze(h);return h}if(3===d)return g;f||(f=Object.isFrozen(g),1===d?f||Object.freeze(g):
(d=F(g),b=d&-19,f&&(g=Array.prototype.slice.call(g),d=0,je(a,c,g)),d!==b&&Rd(g,b)));return g}
function H(a,b,c,d){ce(a);null!=d?fe(d,b):d=void 0;return je(a,c,d)}
function te(a,b,c,d,e){ce(a);null!=e?fe(e,b):e=void 0;oe(a,c,d,e)}
function ue(a,b,c,d){ce(a);var e=null==d?be:d;if(null!=d){for(var f=!!d.length,g=0;g<d.length;g++){var h=d[g];fe(h,b);f=f&&!(F(h.X)&2)}e=Qd(e,(f?8:0)|5)}return je(a,c,e)}
function ve(a,b,c,d){var e=F(a.X);if(e&2)throw Error();a=se(a,c,b,2,e);c=null!=d?fe(d,c):new c;a.push(c);F(c.X)&2&&Sd(a,8)}
function we(a,b,c){Ra(c);return G(a,b,c)}
function xe(){var a=new ye;return G(a,1,1)}
function ze(a,b){return null==a?b:a}
function Ae(a,b){return ze(ie(a,b),"")}
;var Be;function Ce(a,b){return De(b)}
function De(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(Jd(a))return Fd(a);if(a instanceof Nd){var b=a.h;return null==b?"":"string"===typeof b?b:a.h=Fd(b)}}}return a}
;function Ee(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&F(a)&1?void 0:f&&F(a)&2?a:Fe(a,b,c,void 0!==d,e,f);else if($d(a)){var g={},h;for(h in a)g[h]=Ee(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function Fe(a,b,c,d,e,f){var g=F(a);d=d?!!(g&16):void 0;a=Array.prototype.slice.call(a);for(var h=0;h<a.length;h++)a[h]=Ee(a[h],b,c,d,e,f);c&&c(g,a);return a}
function Ge(a){return a.Rc===Zd?a.toJSON():De(a)}
;function He(a,b,c){c=void 0===c?Vd:c;if(null!=a){if(Dd&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=F(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return Rd(a,d|18),a;a=Fe(a,He,d&4?Vd:c,!0,!1,!0);b=F(a);b&4&&b&2&&Object.freeze(a);return a}a.Rc===Zd&&(F(a.X)&2||(a=Ie(a,!0),Pd(a.X,18)));return a}}
function Ie(a,b){var c=a.X,d=[];Pd(d,16);var e=a.constructor.h;e&&d.push(e);e=a.Pa;if(e){d.length=c.length;var f={};d[d.length-1]=f}b=b||F(a.X)&2?Vd:Ud;f=a.constructor;F(d);Be=d;d=new f(d);Be=void 0;a.zd&&(d.zd=a.zd.slice());f=!!(F(c)&16);for(var g=e?c.length-1:c.length,h=0;h<g;h++)G(d,h-a.fb,He(c[h],f,b),!1);if(e)for(var l in e)a=e[l],c=+l,Number.isNaN(c),G(d,c,He(a,f,b),!0);return d}
function re(a){if(!(F(a.X)&2))return a;var b=Ie(a,!1);b.j=a;return b}
;function I(a,b,c){null==a&&(a=Be);Be=void 0;var d=this.constructor.h;if(null==a){a=d?[d]:[];var e=!0;Rd(a,48)}else{if(!Array.isArray(a))throw Error();if(d&&d!==a[0])throw Error();var f=Pd(a,0)|32;e=0!==(16&f);Rd(a,f)}this.fb=d?0:-1;this.X=a;a:{f=this.X.length;d=f-1;if(f&&(f=this.X[d],$d(f))){this.Pa=f;this.i=d-this.fb;break a}void 0!==b&&-1<b?(this.i=Math.max(b,d+1-this.fb),this.Pa=void 0):this.i=Number.MAX_VALUE}if(c){b=e&&!0;e=this.i;var g;for(d=0;d<c.length;d++)if(f=c[d],f<e){f+=this.fb;var h=
a[f];h?Je(h,b):a[f]=be}else g||(g=he(this)),(h=g[f])?Je(h,b):g[f]=be}F(this.X)}
k=I.prototype;k.toJSON=function(){var a=this.X,b;ae?b=a:b=Fe(a,Ge,void 0,void 0,!1,!1);return b};
k.serialize=function(){ae=!0;try{return JSON.stringify(this.toJSON(),Ce)}finally{ae=!1}};
k.clone=function(){return Ie(this,!1)};
function Je(a,b){if(Array.isArray(a)){var c=F(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&Rd(a,c|d)}}
k.Rc=Zd;k.toString=function(){return this.X.toString()};function Ke(a){this.nd=a}
;function Le(a,b,c){this.i=a;this.l=b;this.h=c||[];this.vb=new Map}
k=Le.prototype;k.ee=function(a){var b=Na.apply(1,arguments),c=this.Fc(b);c?c.push(new Ke(a)):this.Nd(a,b)};
k.Nd=function(a){var b=this.sd(Na.apply(1,arguments));this.vb.set(b,[new Ke(a)])};
k.Fc=function(){var a=this.sd(Na.apply(0,arguments));return this.vb.has(a)?this.vb.get(a):void 0};
k.xe=function(){var a=this.Fc(Na.apply(0,arguments));return a&&a.length?a[0]:void 0};
k.clear=function(){this.vb.clear()};
k.sd=function(){var a=Na.apply(0,arguments);return a?a.join(","):"key"};function Me(a,b){Le.call(this,a,3,b)}
v(Me,Le);Me.prototype.j=function(a){var b=Na.apply(1,arguments),c=0,d=this.xe(b);d&&(c=d.nd);this.Nd(c+a,b)};function Ne(a,b){Le.call(this,a,2,b)}
v(Ne,Le);Ne.prototype.record=function(a){this.ee(a,Na.apply(1,arguments))};function Oe(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Pe(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ta(d)?Pe.apply(null,d):Oe(d)}}
;function J(){this.ea=this.ea;this.U=this.U}
J.prototype.ea=!1;J.prototype.h=function(){return this.ea};
J.prototype.dispose=function(){this.ea||(this.ea=!0,this.P())};
function Qe(a,b){Re(a,ab(Oe,b))}
function Re(a,b){a.ea?b():(a.U||(a.U=[]),a.U.push(b))}
J.prototype.P=function(){if(this.U)for(;this.U.length;)this.U.shift()()};function Se(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Se.prototype.stopPropagation=function(){this.j=!0};
Se.prototype.preventDefault=function(){this.defaultPrevented=!0};function Te(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||x.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Ue(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ve[c])c=Ve[c];else{c=String(c);if(!Ve[c]){var f=/function\s+([^\(]+)/m.exec(c);Ve[c]=f?f[1]:"[Anonymous]"}c=Ve[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Ue(a,b){b||(b={});b[We(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[We(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Ue(a,b));return c}
function We(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Ve={};var Xe=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
x.addEventListener("test",c,b);x.removeEventListener("test",c,b)}catch(d){}return a}();function Ye(a,b){Se.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
bb(Ye,Se);var Ze={2:"touch",3:"pen",4:"mouse"};
Ye.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(hd){a:{try{dd(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Ze[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Ye.ya.preventDefault.call(this)};
Ye.prototype.stopPropagation=function(){Ye.ya.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Ye.prototype.preventDefault=function(){Ye.ya.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $e="closure_listenable_"+(1E6*Math.random()|0);var af=0;function bf(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.lc=e;this.key=++af;this.Ub=this.fc=!1}
function cf(a){a.Ub=!0;a.listener=null;a.proxy=null;a.src=null;a.lc=null}
;function df(a){this.src=a;this.listeners={};this.h=0}
df.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=ef(a,b,d,e);-1<g?(b=a[g],c||(b.fc=!1)):(b=new bf(b,this.src,f,!!d,e),b.fc=c,a.push(b));return b};
df.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ef(e,b,c,d);return-1<b?(cf(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function ff(a,b){var c=b.type;c in a.listeners&&nb(a.listeners[c],b)&&(cf(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function ef(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ub&&f.listener==b&&f.capture==!!c&&f.lc==d)return e}return-1}
;var gf="closure_lm_"+(1E6*Math.random()|0),hf={},jf=0;function kf(a,b,c,d,e){if(d&&d.once)lf(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)kf(a,b[f],c,d,e);else c=mf(c),a&&a[$e]?a.listen(b,c,Ua(d)?!!d.capture:!!d,e):nf(a,b,c,!1,d,e)}
function nf(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ua(e)?!!e.capture:!!e,h=of(a);h||(a[gf]=h=new df(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=pf();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Xe||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(qf(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");jf++}}
function pf(){function a(c){return b.call(a.src,a.listener,c)}
var b=rf;return a}
function lf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)lf(a,b[f],c,d,e);else c=mf(c),a&&a[$e]?a.l.add(String(b),c,!0,Ua(d)?!!d.capture:!!d,e):nf(a,b,c,!0,d,e)}
function sf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)sf(a,b[f],c,d,e);else(d=Ua(d)?!!d.capture:!!d,c=mf(c),a&&a[$e])?a.l.remove(String(b),c,d,e):a&&(a=of(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ef(b,c,d,e)),(c=-1<a?b[a]:null)&&tf(c))}
function tf(a){if("number"!==typeof a&&a&&!a.Ub){var b=a.src;if(b&&b[$e])ff(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(qf(c),d):b.addListener&&b.removeListener&&b.removeListener(d);jf--;(c=of(b))?(ff(c,a),0==c.h&&(c.src=null,b[gf]=null)):cf(a)}}}
function qf(a){return a in hf?hf[a]:hf[a]="on"+a}
function rf(a,b){if(a.Ub)a=!0;else{b=new Ye(b,this);var c=a.listener,d=a.lc||a.src;a.fc&&tf(a);a=c.call(d,b)}return a}
function of(a){a=a[gf];return a instanceof df?a:null}
var zf="__closure_events_fn_"+(1E9*Math.random()>>>0);function mf(a){if("function"===typeof a)return a;a[zf]||(a[zf]=function(b){return a.handleEvent(b)});
return a[zf]}
;function Af(){J.call(this);this.l=new df(this);this.ae=this;this.Da=null}
bb(Af,J);Af.prototype[$e]=!0;k=Af.prototype;k.addEventListener=function(a,b,c,d){kf(this,a,b,c,d)};
k.removeEventListener=function(a,b,c,d){sf(this,a,b,c,d)};
function Bf(a,b){var c=a.Da;if(c){var d=[];for(var e=1;c;c=c.Da)d.push(c),++e}a=a.ae;c=b.type||b;"string"===typeof b?b=new Se(b,a):b instanceof Se?b.target=b.target||a:(e=b,b=new Se(c,a),zb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Cf(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Cf(g,c,!0,b)&&e,b.j||(e=Cf(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Cf(g,c,!1,b)&&e}
k.P=function(){Af.ya.P.call(this);this.removeAllListeners();this.Da=null};
k.listen=function(a,b,c,d){return this.l.add(String(a),b,!1,c,d)};
k.removeAllListeners=function(a){if(this.l){var b=this.l;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,cf(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function Cf(a,b,c,d){b=a.l.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Ub&&g.capture==c){var h=g.listener,l=g.lc||g.src;g.fc&&ff(a.l,g);e=!1!==h.call(l,d)&&e}}return e&&!d.defaultPrevented}
;function Df(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Df.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Ef(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function Ff(a,b){return a+Math.random()*(b-a)}
;function Gf(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
k=Gf.prototype;k.clone=function(){return new Gf(this.x,this.y)};
k.equals=function(a){return a instanceof Gf&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
k.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
k.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
k.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
k.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Hf(a,b){this.width=a;this.height=b}
k=Hf.prototype;k.clone=function(){return new Hf(this.width,this.height)};
k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
k.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function If(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Jf(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Kf(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Lf;function Mf(){var a=x.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var e=Jf("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=$a(function(l){if(("*"==h||l.origin==h)&&l.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!fc()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.md;c.md=null;e()}};
return function(e){d.next={md:e};d=d.next;b.port2.postMessage(0)}}return function(e){x.setTimeout(e,0)}}
;function Nf(){this.i=this.h=null}
Nf.prototype.add=function(a,b){var c=Of.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Nf.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Of=new Df(function(){return new Pf},function(a){return a.reset()});
function Pf(){this.next=this.scope=this.fn=null}
Pf.prototype.set=function(a,b){this.fn=a;this.scope=b;this.next=null};
Pf.prototype.reset=function(){this.next=this.scope=this.fn=null};var Qf,Rf=!1,Sf=new Nf;function Tf(a,b){Qf||Uf();Rf||(Qf(),Rf=!0);Sf.add(a,b)}
function Uf(){if(x.Promise&&x.Promise.resolve){var a=x.Promise.resolve(void 0);Qf=function(){a.then(Vf)}}else Qf=function(){var b=Vf;
"function"!==typeof x.setImmediate||x.Window&&x.Window.prototype&&!hc()&&x.Window.prototype.setImmediate==x.setImmediate?(Lf||(Lf=Mf()),Lf(b)):x.setImmediate(b)}}
function Vf(){for(var a;a=Sf.remove();){try{a.fn.call(a.scope)}catch(b){Pc(b)}Ef(Of,a)}Rf=!1}
;function Wf(a){this.h=0;this.u=void 0;this.l=this.i=this.j=null;this.m=this.o=!1;if(a!=fb)try{var b=this;a.call(void 0,function(c){Xf(b,2,c)},function(c){Xf(b,3,c)})}catch(c){Xf(this,3,c)}}
function Yf(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Yf.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Zf=new Df(function(){return new Yf},function(a){a.reset()});
function $f(a,b,c){var d=Zf.get();d.i=a;d.h=b;d.context=c;return d}
function ag(a){if(a instanceof Wf)return a;var b=new Wf(fb);Xf(b,2,a);return b}
function bg(a){return new Wf(function(b,c){c(a)})}
function cg(a,b,c){dg(a,b,c,null)||Tf(ab(b,a))}
function eg(a){return new Wf(function(b){var c=a.length,d=[];if(c)for(var e=function(h,l,m){c--;d[h]=l?{fulfilled:!0,value:m}:{fulfilled:!1,reason:m};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],cg(g,ab(e,f,!0),ab(e,f,!1));
else b(d)})}
Wf.prototype.then=function(a,b,c){return fg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Wf.prototype.$goog_Thenable=!0;k=Wf.prototype;k.xc=function(a,b){return fg(this,null,a,b)};
k.catch=Wf.prototype.xc;k.cancel=function(a){if(0==this.h){var b=new gg(a);Tf(function(){hg(this,b)},this)}};
function hg(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?hg(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):ig(c),jg(c,e,3,b)))}a.j=null}else Xf(a,3,b)}
function kg(a,b){a.i||2!=a.h&&3!=a.h||lg(a);a.l?a.l.next=b:a.i=b;a.l=b}
function fg(a,b,c,d){var e=$f(null,null,null);e.child=new Wf(function(f,g){e.i=b?function(h){try{var l=b.call(d,h);f(l)}catch(m){g(m)}}:f;
e.h=c?function(h){try{var l=c.call(d,h);void 0===l&&h instanceof gg?g(h):f(l)}catch(m){g(m)}}:g});
e.child.j=a;kg(a,e);return e.child}
k.qf=function(a){this.h=0;Xf(this,2,a)};
k.rf=function(a){this.h=0;Xf(this,3,a)};
function Xf(a,b,c){0==a.h&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.h=1,dg(c,a.qf,a.rf,a)||(a.u=c,a.h=b,a.j=null,lg(a),3!=b||c instanceof gg||mg(a,c)))}
function dg(a,b,c,d){if(a instanceof Wf)return kg(a,$f(b||fb,c||null,d)),!0;if(a)try{var e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),!0;if(Ua(a))try{var f=a.then;if("function"===typeof f)return ng(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1}
function ng(a,b,c,d,e){function f(l){h||(h=!0,d.call(e,l))}
function g(l){h||(h=!0,c.call(e,l))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function lg(a){a.o||(a.o=!0,Tf(a.re,a))}
function ig(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
k.re=function(){for(var a;a=ig(this);)jg(this,a,this.h,this.u);this.o=!1};
function jg(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.child)b.child.j=null,og(b,c,d);else try{b.j?b.i.call(b.context):og(b,c,d)}catch(e){pg.call(null,e)}Ef(Zf,b)}
function og(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function mg(a,b){a.m=!0;Tf(function(){a.m&&pg.call(null,b)})}
var pg=Pc;function gg(a){db.call(this,a)}
bb(gg,db);gg.prototype.name="cancel";function qg(a,b){Af.call(this);this.j=a||1;this.i=b||x;this.m=$a(this.pf,this);this.o=Date.now()}
bb(qg,Af);k=qg.prototype;k.enabled=!1;k.Ca=null;k.setInterval=function(a){this.j=a;this.Ca&&this.enabled?(this.stop(),this.start()):this.Ca&&this.stop()};
k.pf=function(){if(this.enabled){var a=Date.now()-this.o;0<a&&a<.8*this.j?this.Ca=this.i.setTimeout(this.m,this.j-a):(this.Ca&&(this.i.clearTimeout(this.Ca),this.Ca=null),Bf(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
k.start=function(){this.enabled=!0;this.Ca||(this.Ca=this.i.setTimeout(this.m,this.j),this.o=Date.now())};
k.stop=function(){this.enabled=!1;this.Ca&&(this.i.clearTimeout(this.Ca),this.Ca=null)};
k.P=function(){qg.ya.P.call(this);this.stop();delete this.i};
function rg(a,b,c){if("function"===typeof a)c&&(a=$a(a,c));else if(a&&"function"==typeof a.handleEvent)a=$a(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:x.setTimeout(a,b||0)}
;function sg(a){J.call(this);this.F=a;this.j=new Map;this.u=new Set;this.l=0;this.m=100;this.flushInterval=3E4;this.i=new qg(this.flushInterval);this.i.listen("tick",this.sb,!1,this);Qe(this,this.i);this.o=!1}
v(sg,J);k=sg.prototype;k.sendIsolatedPayload=function(a){this.o=a;this.m=1};
function tg(a){a.i.enabled||a.i.start();a.l++;a.l>=a.m&&a.sb()}
k.sb=function(){var a=this.j.values();a=[].concat(ja(a)).filter(function(b){return b.vb.size});
a.length&&this.F.flush(a,this.o);ug(a);this.l=0;this.i.enabled&&this.i.stop()};
k.hd=function(a){var b=Na.apply(1,arguments);this.j.has(a)||this.j.set(a,new Me(a,b))};
k.jd=function(a){var b=Na.apply(1,arguments);this.j.has(a)||this.j.set(a,new Ne(a,b))};
function vg(a,b){return a.u.has(b)?void 0:a.j.get(b)}
k.yc=function(a){this.Zd.apply(this,[a,1].concat(ja(Na.apply(1,arguments))))};
k.Zd=function(a,b){var c=Na.apply(2,arguments),d=vg(this,a);d&&d instanceof Me&&(d.j(b,c),tg(this))};
k.record=function(a,b){var c=Na.apply(2,arguments),d=vg(this,a);d&&d instanceof Ne&&(d.record(b,c),tg(this))};
function ug(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function wg(a){this.h=a;this.h.hd("/client_streamz/bg/fiec",{Rb:3,Qb:"rk"},{Rb:2,Qb:"ec"})}
function xg(a,b,c){a.h.yc("/client_streamz/bg/fiec",b,c)}
function yg(a){this.h=a;this.h.jd("/client_streamz/bg/fil",{Rb:3,Qb:"rk"})}
yg.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fil",a,b)};
function zg(a){this.h=a;this.h.hd("/client_streamz/bg/fsc",{Rb:3,Qb:"rk"})}
function Ag(a){this.h=a;this.h.jd("/client_streamz/bg/fsl",{Rb:3,Qb:"rk"})}
Ag.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fsl",a,b)};var Bg={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function Cg(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=Dg(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=Eg(a,h),d+=Eg(a,h+4),e+=Eg(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return Bg.toString(e)}
function Dg(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function Eg(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;function Fg(a){I.call(this,a)}
v(Fg,I);var Gg=[1,2,3];function Hg(a){I.call(this,a)}
v(Hg,I);var Ig=[1,2,3];function Jg(a){I.call(this,a,-1,Kg)}
v(Jg,I);var Kg=[1];function Lg(a){I.call(this,a,-1,Mg)}
v(Lg,I);var Mg=[3,6,4];function Ng(a){I.call(this,a,-1,Og)}
v(Ng,I);var Og=[1];function Pg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Qg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=m=0}
function b(r){for(var z=g,u=0;64>u;u+=4)z[u/4]=r[u]<<24|r[u+1]<<16|r[u+2]<<8|r[u+3];for(u=16;80>u;u++)r=z[u-3]^z[u-8]^z[u-14]^z[u-16],z[u]=(r<<1|r>>>31)&4294967295;r=e[0];var A=e[1],C=e[2],D=e[3],N=e[4];for(u=0;80>u;u++){if(40>u)if(20>u){var R=D^A&(C^D);var T=1518500249}else R=A^C^D,T=1859775393;else 60>u?(R=A&C|D&(A|C),T=2400959708):(R=A^C^D,T=3395469782);R=((r<<5|r>>>27)&4294967295)+R+N+T+z[u]&4294967295;N=D;D=C;C=(A<<30|A>>>2)&4294967295;A=r;r=R}e[0]=e[0]+r&4294967295;e[1]=e[1]+A&4294967295;e[2]=
e[2]+C&4294967295;e[3]=e[3]+D&4294967295;e[4]=e[4]+N&4294967295}
function c(r,z){if("string"===typeof r){r=unescape(encodeURIComponent(r));for(var u=[],A=0,C=r.length;A<C;++A)u.push(r.charCodeAt(A));r=u}z||(z=r.length);u=0;if(0==m)for(;u+64<z;)b(r.slice(u,u+64)),u+=64,p+=64;for(;u<z;)if(f[m++]=r[u++],p++,64==m)for(m=0,b(f);u+64<z;)b(r.slice(u,u+64)),u+=64,p+=64}
function d(){var r=[],z=8*p;56>m?c(h,56-m):c(h,64-(m-56));for(var u=63;56<=u;u--)f[u]=z&255,z>>>=8;b(f);for(u=z=0;5>u;u++)for(var A=24;0<=A;A-=8)r[z++]=e[u]>>A&255;return r}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,p;a();return{reset:a,update:c,digest:d,ne:function(){for(var r=d(),z="",u=0;u<r.length;u++)z+="0123456789ABCDEF".charAt(Math.floor(r[u]/16))+"0123456789ABCDEF".charAt(r[u]%16);return z}}}
;function Rg(a,b,c){var d=String(x.location.href);return d&&a&&b?[b,Sg(Pg(d),a,c||null)].join(" "):null}
function Sg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],ib(d,function(h){e.push(h)}),Tg(e.join(" "));
var f=[],g=[];ib(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];ib(d,function(h){e.push(h)});
a=Tg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Tg(a){var b=Qg();b.update(a);return b.ne().toLowerCase()}
;var Ug={};function Vg(a){this.h=a||{cookie:""}}
k=Vg.prototype;k.isEnabled=function(){if(!x.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{oc:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
k.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Hg;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.oc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
k.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Lb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{oc:0,path:b,domain:c});return d};
k.Ic=function(){return Wg(this).keys};
k.isEmpty=function(){return!this.h.cookie};
k.clear=function(){for(var a=Wg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Wg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Lb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Xg=new Vg("undefined"==typeof document?null:document);function Yg(a){return!!Ug.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Zg(a){a=void 0===a?!1:a;var b=x.__SAPISID||x.__APISID||x.__3PSAPISID||x.__OVERRIDE_SID;Yg(a)&&(b=b||x.__1PSAPISID);if(b)return!0;var c=new Vg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");Yg(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function $g(a,b,c,d){(a=x[a])||(a=(new Vg(document)).get(b));return a?Rg(a,c,d):null}
function ah(a,b){b=void 0===b?!1:b;var c=Pg(String(x.location.href)),d=[];if(Zg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?x.__SAPISID:x.__APISID;e||(e=new Vg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Rg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Yg(b)&&((b=$g("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=$g("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function bh(a){I.call(this,a,-1,ch)}
v(bh,I);var ch=[2];function dh(a){this.h=this.i=this.j=a}
dh.prototype.reset=function(){this.h=this.i=this.j};
dh.prototype.getValue=function(){return this.i};function eh(){}
eh.prototype.serialize=function(a){var b=[];fh(this,a,b);return b.join("")};
function fh(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),fh(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),gh(d,c),c.push(":"),fh(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":gh(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var hh={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},ih=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function gh(a,b){b.push('"',a.replace(ih,function(c){var d=hh[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),hh[c]=d);return d}),'"')}
;function jh(){}
jh.prototype.h=null;jh.prototype.getOptions=function(){var a;(a=this.h)||(a={},kh(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var lh;function mh(){}
bb(mh,jh);function nh(a){return(a=kh(a))?new ActiveXObject(a):new XMLHttpRequest}
function kh(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
lh=new mh;function oh(a){Af.call(this);this.headers=new Map;this.R=a||null;this.i=!1;this.M=this.H=null;this.m=this.fa="";this.j=this.ba=this.u=this.aa=!1;this.o=0;this.F=null;this.za="";this.ma=this.na=!1}
bb(oh,Af);var ph=/^https?$/i,qh=["POST","PUT"],rh=[];function sh(a,b,c,d,e,f,g){var h=new oh;rh.push(h);b&&h.listen("complete",b);h.l.add("ready",h.le,!0,void 0,void 0);f&&(h.o=Math.max(0,f));g&&(h.na=g);h.send(a,c,d,e)}
k=oh.prototype;k.le=function(){this.dispose();nb(rh,this)};
k.send=function(a,b,c,d){if(this.H)throw Error("[goog.net.XhrIo] Object is active with another request="+this.fa+"; newUri="+a);b=b?b.toUpperCase():"GET";this.fa=a;this.m="";this.aa=!1;this.i=!0;this.H=this.R?nh(this.R):nh(lh);this.M=this.R?this.R.getOptions():lh.getOptions();this.H.onreadystatechange=$a(this.Ed,this);try{this.getStatus(),this.ba=!0,this.H.open(b,String(a),!0),this.ba=!1}catch(g){this.getStatus();th(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===
Object.prototype)for(var e in d)c.set(e,d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=t(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=x.FormData&&a instanceof x.FormData;!(0<=hb(qh,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=t(c);for(d=b.next();!d.done;d=b.next())c=t(d.value),d=c.next().value,c=c.next().value,this.H.setRequestHeader(d,c);this.za&&(this.H.responseType=this.za);"withCredentials"in this.H&&this.H.withCredentials!==this.na&&(this.H.withCredentials=this.na);try{uh(this),0<this.o&&(this.ma=vh(this.H),this.getStatus(),this.ma?(this.H.timeout=this.o,this.H.ontimeout=$a(this.Sd,
this)):this.F=rg(this.Sd,this.o,this)),this.getStatus(),this.u=!0,this.H.send(a),this.u=!1}catch(g){this.getStatus(),th(this,g)}};
function vh(a){return fd&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
k.Sd=function(){"undefined"!=typeof Qa&&this.H&&(this.m="Timed out after "+this.o+"ms, aborting",this.getStatus(),Bf(this,"timeout"),this.abort(8))};
function th(a,b){a.i=!1;a.H&&(a.j=!0,a.H.abort(),a.j=!1);a.m=b;wh(a);xh(a)}
function wh(a){a.aa||(a.aa=!0,Bf(a,"complete"),Bf(a,"error"))}
k.abort=function(){this.H&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.H.abort(),this.j=!1,Bf(this,"complete"),Bf(this,"abort"),xh(this))};
k.P=function(){this.H&&(this.i&&(this.i=!1,this.j=!0,this.H.abort(),this.j=!1),xh(this,!0));oh.ya.P.call(this)};
k.Ed=function(){this.h()||(this.ba||this.u||this.j?yh(this):this.Ne())};
k.Ne=function(){yh(this)};
function yh(a){if(a.i&&"undefined"!=typeof Qa)if(a.M[1]&&4==zh(a)&&2==a.getStatus())a.getStatus();else if(a.u&&4==zh(a))rg(a.Ed,0,a);else if(Bf(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(Ah(a))Bf(a,"complete"),Bf(a,"success");else{try{var b=2<zh(a)?a.H.statusText:""}catch(c){b=""}a.m=b+" ["+a.getStatus()+"]";wh(a)}}finally{xh(a)}}}
function xh(a,b){if(a.H){uh(a);var c=a.H,d=a.M[0]?function(){}:null;
a.H=null;a.M=null;b||Bf(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function uh(a){a.H&&a.ma&&(a.H.ontimeout=null);a.F&&(x.clearTimeout(a.F),a.F=null)}
k.isActive=function(){return!!this.H};
k.isComplete=function(){return 4==zh(this)};
function Ah(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=Bc(1,String(a.fa)),!a&&x.self&&x.self.location&&(a=x.self.location.protocol.slice(0,-1)),b=!ph.test(a?a.toLowerCase():"");c=b}return c}
function zh(a){return a.H?a.H.readyState:0}
k.getStatus=function(){try{return 2<zh(this)?this.H.status:-1}catch(a){return-1}};
k.getLastError=function(){return"string"===typeof this.m?this.m:String(this.m)};function Bh(a){I.call(this,a)}
v(Bh,I);function Ch(a){I.call(this,a,-1,Dh)}
v(Ch,I);var Dh=[1];function me(a){I.call(this,a)}
v(me,I);var Eh=["platform","platformVersion","architecture","model","uaFullVersion"];new Ch;function ye(a){I.call(this,a)}
v(ye,I);function Fh(a){I.call(this,a,33,Gh)}
v(Fh,I);var Gh=[3,20,27];function Hh(a){I.call(this,a,19,Ih)}
v(Hh,I);var Ih=[3,5];function Jh(a){I.call(this,a,6,Kh)}
v(Jh,I);var Kh=[5];function Lh(a){I.call(this,a)}
v(Lh,I);var Mh;Mh=new function(a,b,c){this.h=a;this.fieldName=b;this.ctor=c;this.isRepeated=0;this.i=qe;this.defaultValue=void 0}(175237375,{zg:0},Lh);function Nh(a,b,c,d,e,f,g,h,l,m,p){Af.call(this);var r=this;this.componentId="";this.j=[];this.ac="";this.cc=this.za=-1;this.Kb=!1;this.R=this.m=null;this.F=this.M=0;this.ce=1;this.timeoutMillis=0;this.na=!1;Af.call(this);this.logSource=a;this.Zb=b||function(){};
this.o=new Oh(a,f);this.be=d;this.network=p;this.bufferSize=1E3;this.de=ab(Ff,0,1);this.ba=e||null;this.sessionIndex=c||null;this.fa=g||!1;this.pageId=l||null;this.logger=null;this.withCredentials=!h;this.tb=f||!1;!this.tb&&(65<=pc("Chromium")||45<=pc("Firefox")||12<=pc("Safari")||Uc()&&cd());a=xe();Sh(this.o,a);this.u=new dh(1E4);this.i=new qg(this.u.getValue());Qe(this,this.i);m=Th(this,m);kf(this.i,"tick",m,!1,this);this.aa=new qg(6E5);Qe(this,this.aa);kf(this.aa,"tick",m,!1,this);this.fa||this.aa.start();
this.tb||(kf(document,"visibilitychange",function(){"hidden"===document.visibilityState&&r.ma()}),kf(document,"pagehide",this.ma,!1,this))}
v(Nh,Af);function Th(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
Nh.prototype.P=function(){this.ma();Af.prototype.P.call(this)};
function Uh(a){a.ba||(a.ba=.01>a.de()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.ba}
function Vh(a,b){a.u=new dh(1>b?1:b);a.i.setInterval(a.u.getValue())}
Nh.prototype.log=function(a){a=a.clone();var b=this.ce++;G(a,21,b);this.componentId&&G(a,26,this.componentId);if(!ie(a,1)){b=a;var c=Date.now().toString();G(b,1,c)}null==ie(a,15)&&G(a,15,60*(new Date).getTimezoneOffset());this.m&&(b=this.m.clone(),H(a,bh,16,b));for(;this.j.length>=this.bufferSize;)this.j.shift(),++this.M;this.j.push(a);Bf(this,new Wh(a));this.fa||this.i.enabled||this.i.start()};
Nh.prototype.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else if(this.na)Xh(this.o,3),Yh(this);else{var d=Date.now();if(this.cc>d&&this.za<d)b&&b("throttled");else{Xh(this.o,1);var e=Zh(this.o,this.j,this.M,this.F);d={};var f=this.Zb();f&&(d.Authorization=f);var g=Uh(this);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,g=Kc(g,"authuser",this.sessionIndex));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=Kc(g,"pageId",this.pageId));if(f&&this.ac===f)b&&b("stale-auth-token");
else{this.j=[];this.i.enabled&&this.i.stop();this.M=0;var h=e.serialize(),l;this.R&&this.R.isSupported(h.length)&&(l=this.R.compress(h));var m={url:g,body:h,je:1,Wc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},p=function(u){c.u.reset();c.i.setInterval(c.u.getValue());if(u){var A=null;try{var C=JSON.parse(u.replace(")]}'\n",""));A=new Jh(C)}catch(D){}A&&(u=Number(ze(ie(A,1),"-1")),0<u&&(c.za=Date.now(),c.cc=c.za+u),A=Mh.ctor?Mh.i(A,Mh.ctor,Mh.h,!0):Mh.isRepeated?
Mh.i(A,Mh.h,!0):Mh.i(A,Mh.h,Mh.defaultValue,!0))&&(A=ze(ie(A,1),-1),-1!=A&&(c.Kb||Vh(c,A)))}a&&a();c.F=0},r=function(u,A){var C=F(e.X),D=!!(C&2);
C=se(e,Fh,3,D?1:2,C);if(!(D||F(C)&8)){for(D=0;D<C.length;D++){var N=C[D],R=re(N);N!==R&&(C[D]=R)}Pd(C,8)}D=c.u;D.h=Math.min(3E5,2*D.h);D.i=Math.min(3E5,D.h+Math.round(.2*(Math.random()-.5)*D.h));c.i.setInterval(c.u.getValue());401===u&&f&&(c.ac=f);void 0===A&&(A=500<=u&&600>u||401===u||0===u);A&&(c.j=C.concat(c.j),c.fa||c.i.enabled||c.i.start());b&&b("net-send-failed",u);++c.F},z=function(){c.network?c.network.send(m,p,r):c.be(m,p,r)};
l?l.then(function(u){m.Wc["Content-Encoding"]="gzip";m.Wc["Content-Type"]="application/binary";m.body=u;m.je=2;z()},function(){z()}):z()}}}};
Nh.prototype.ma=function(){$h(this.o,!0);this.flush();$h(this.o,!1)};
function Yh(a){ai(a,function(b,c){b=Kc(b,"format","json");var d=!1;try{d=window.navigator.sendBeacon(b,c.serialize())}catch(e){}a.na&&!d&&(a.na=!1);return d})}
function ai(a,b){if(0!==a.j.length){var c=Oc(Uh(a),"format");c=Ic(c,"auth",a.Zb(),"authuser",a.sessionIndex||"0");for(var d=0;10>d&&a.j.length;++d){var e=a.j.slice(0,32),f=Zh(a.o,e,a.M,a.F);if(!b(c,f)){++a.F;break}a.M=0;a.F=0;a.j=a.j.slice(e.length)}a.i.enabled&&a.i.stop()}}
function Wh(){Se.call(this,"event-logged",void 0)}
v(Wh,Se);function Oh(a,b){this.i=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new Hh;G(this.h,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));Sh(this,new ye)}
function Sh(a,b){H(a.h,ye,1,b);ie(b,1)||G(b,1,1);a.i||(b=bi(a),ie(b,5)||G(b,5,a.locale));a.uach&&(b=bi(a),qe(b,Ch,9)||H(b,Ch,9,a.uach))}
function Xh(a,b){ke(qe(a.h,ye,1))&&(a=ci(a),G(a,1,b))}
function $h(a,b){ke(qe(a.h,ye,1))&&(a=ci(a),G(a,2,b))}
function di(a,b){var c=void 0===c?Eh:c;b(window,c).then(function(d){a.uach=d;d=bi(a);H(d,Ch,9,a.uach);return!0}).catch(function(){return!1})}
function bi(a){a=qe(a.h,ye,1);var b=qe(a,me,11);b||(b=new me,H(a,me,11,b));return b}
function ci(a){a=bi(a);var b=qe(a,Bh,10);b||(b=new Bh,G(b,2,!1),H(a,Bh,10,b));return b}
function Zh(a,b,c,d){c=void 0===c?0:c;d=void 0===d?0:d;if(ke(qe(a.h,ye,1))){var e=ci(a);we(e,3,d)}a=a.h.clone();d=Date.now().toString();a=G(a,4,d);b=ue(a,Fh,3,b);c&&G(b,14,c);return b}
;function ei(a,b,c){sh(a.url,function(d){d=d.target;if(Ah(d)){try{var e=d.H?d.H.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Wc,a.timeoutMillis,a.withCredentials)}
;function fi(a,b){J.call(this);this.o=a;this.Da=b;this.l="https://play.google.com/log?format=json&hasfast=true";this.m=!1;this.ba=ei;this.i=""}
bb(fi,J);function gi(a,b,c,d,e,f){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;J.call(this);f?a=f:(a=new fi(a,"0"),a.i=b,Qe(this,a),""!=c&&(a.l=c),d&&(a.m=!0),e&&(a.j=e),b=new Nh(a.o,a.R?a.R:ah,a.Da,a.ba,a.l,a.m,!1,a.za,void 0,void 0,a.fa?a.fa:void 0),Qe(a,b),a.F&&Sh(b.o,a.F),a.j&&(c=a.j,d=bi(b.o),G(d,7,c)),a.aa&&(b.R=a.aa),a.i&&(b.componentId=a.i),a.u&&((c=a.u)?(b.m||(b.m=new bh),c=c.serialize(),G(b.m,4,c)):b.m&&G(b.m,4,void 0,!1)),a.ma&&(d=a.ma,b.m||(b.m=new bh),
c=b.m,d=null==d?be:Qd(d,1),G(c,2,d)),a.M&&(c=a.M,b.Kb=!0,Vh(b,c)),a.na&&di(b.o,a.na),a=b);this.i=a}
v(gi,J);
gi.prototype.flush=function(a){var b=a||[];if(b.length){a=new Ng;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e,g=new Lg;var h=G(g,1,f.i);var l=f;g=[];for(var m=0;m<l.h.length;m++)g.push(l.h[m].Qb);if(null==g)g=G(h,3,be);else{l=F(g);if(!(l&4)){if(l&2||Object.isFrozen(g))g=Array.prototype.slice.call(g);for(m=0;m<g.length;m++)g[m]=g[m];Rd(g,l|5)}g=G(h,3,g)}h=[];l=[];m=t(f.vb.keys());for(var p=m.next();!p.done;p=m.next())l.push(p.value.split(","));for(m=0;m<l.length;m++){p=l[m];var r=f.l;for(var z=f.Fc(p)||
[],u=[],A=0;A<z.length;A++){var C=z[A];C=C&&C.nd;var D=new Hg;switch(r){case 3:oe(D,1,Ig,Number(C));break;case 2:oe(D,2,Ig,de(Number(C)))}u.push(D)}r=u;for(z=0;z<r.length;z++){u=r[z];A=new Jg;u=H(A,Hg,2,u);A=p;C=[];D=f;for(var N=[],R=0;R<D.h.length;R++)N.push(D.h[R].Rb);D=N;for(N=0;N<D.length;N++){var T=D[N],ha=A[N];R=new Fg;switch(T){case 3:oe(R,1,Gg,String(ha));break;case 2:T=R;ha=Number(ha);Ra(ha);oe(T,2,Gg,ha);break;case 1:oe(R,3,Gg,"true"==ha)}C.push(R)}ue(u,Fg,1,C);h.push(u)}}ue(g,Jg,4,h);c.push(g);
e.clear()}ue(a,Lg,1,c);b=this.i;a instanceof Fh?b.log(a):(c=new Fh,a=a.serialize(),a=G(c,8,a),b.log(a));this.i.flush()}};function hi(a){this.u=ii();this.m=new gi(1828);this.h=new sg(this.m);this.o=new yg(this.h);this.j=new zg(this.h);this.l=new Ag(this.h);this.i=new wg(this.h);this.Ia=Cg(a)}
function ii(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function ji(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function ki(a){function b(A,C){Promise.resolve().then(function(){var D;null!=(D=c.oa)&&D.o.record(ii()-D.u,D.Ia);g.resolve({ge:A,kf:C})})}
var c=this;this.i=!1;var d=a.program;var e=a.ze;if(a.Se){var f;this.oa=null!=(f=a.oa)?f:new hi(e)}var g=new ji;this.j=g.promise;if(x[e])if(x[e].a){var h;null!=(h=this.oa)&&xg(h.i,h.Ia,3)}else{var l;null!=(l=this.oa)&&xg(l.i,l.Ia,2);var m;null!=(m=this.oa)&&m.h.sb()}else{var p;null!=(p=this.oa)&&xg(p.i,p.Ia,1);var r;null!=(r=this.oa)&&r.h.sb()}try{this.l=t((0,x[e].a)(d,b,!0)).next().value,this.jf=g.promise.then(function(){})}catch(A){var z;
null!=(z=this.oa)&&xg(z.i,z.Ia,4);var u;null!=(u=this.oa)&&u.h.sb();throw A;}}
ki.prototype.snapshot=function(a){var b=this;if(this.i)throw Error("Already disposed");var c=ii(),d;null!=(d=this.oa)&&d.j.h.yc("/client_streamz/bg/fsc",d.Ia);return this.j.then(function(e){var f=e.ge;return new Promise(function(g){f(function(h){var l;null!=(l=b.oa)&&l.l.record(ii()-c,l.Ia);g(h)},[a.od,
a.lf])})})};
ki.prototype.Pd=function(a){if(this.i)throw Error("Already disposed");var b=ii(),c;null!=(c=this.oa)&&c.j.h.yc("/client_streamz/bg/fsc",c.Ia);a=this.l([a.od,a.lf]);var d;null!=(d=this.oa)&&d.l.record(ii()-b,d.Ia);return a};
ki.prototype.dispose=function(){var a;null!=(a=this.oa)&&a.h.sb();this.i=!0;this.j.then(function(b){(b=b.kf)&&b()})};
ki.prototype.h=function(){return this.i};var li=window;Eb("csi.gstatic.com");Eb("googleads.g.doubleclick.net");Eb("partner.googleadservices.com");Eb("pubads.g.doubleclick.net");Eb("securepubads.g.doubleclick.net");Eb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var mi;try{new URL("s://g"),mi=!0}catch(a){mi=!1}var ni=mi;function oi(a){if(a instanceof Ob)a=Qb(a);else{b:if(ni){try{var b=new URL(a)}catch(c){b="https:";break b}b=b.protocol}else c:{b=document.createElement("a");try{b.href=a}catch(c){b=void 0;break c}b=b.protocol;b=":"===b||""===b?"https:":b}a="javascript:"!==b?a:void 0}return a}
;var pi={};function qi(){}
function ri(a){this.h=a}
v(ri,qi);ri.prototype.toString=function(){return this.h};function si(a){var b="true".toString(),c=[new ri(ti[0].toLowerCase(),pi)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof ri)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function ui(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)}
function vi(a,b){a.src=Jb(b);ui(a)}
;function wi(a){this.Ge=a}
function xi(a){return new wi(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var yi=[xi("data"),xi("http"),xi("https"),xi("mailto"),xi("ftp"),new wi(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function zi(a){var b=Ai;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Bi(){var a=[];zi(function(b){a.push(b)});
return a}
var Ai={tf:"allow-forms",uf:"allow-modals",vf:"allow-orientation-lock",wf:"allow-pointer-lock",xf:"allow-popups",yf:"allow-popups-to-escape-sandbox",zf:"allow-presentation",Af:"allow-same-origin",Bf:"allow-scripts",Cf:"allow-top-navigation",Df:"allow-top-navigation-by-user-activation"},Ci=gb(function(){return Bi()});
function Di(){var a=Ei(),b={};ib(Ci(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Ei(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Fi(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Gi=(new Date).getTime();var Hi="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ja(Hi),["client_dev_set_cookie"]);"undefined"!==typeof TextDecoder&&new TextDecoder;var Ii="undefined"!==typeof TextEncoder?new TextEncoder:null,Ji=Ii?function(a){return Ii.encode(a)}:function(a){a=Qc(a);
for(var b=new Uint8Array(a.length),c=0;c<b.length;c++)b[c]=a[c];return b};function Ki(a){Af.call(this);var b=this;this.u=this.j=0;this.Ba=null!=a?a:{ja:function(e,f){return setTimeout(e,f)},
Fa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return w(function(e){return e.yield(Li(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.u||Mi(this)}
v(Ki,Af);function Ni(){var a=Oi;Ki.h||(Ki.h=new Ki(a));return Ki.h}
Ki.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.Ba.Fa(this.u);delete Ki.h};
Ki.prototype.ta=function(){return this.i};
function Mi(a){a.u=a.Ba.ja(function(){var b;return w(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.A(3):c.yield(Li(a),3):c.yield(Li(a),3);Mi(a);c.h=0})},3E4)}
function Li(a,b){return a.o?a.o:a.o=new Promise(function(c){var d,e,f,g;return w(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,Aa(h,2,3),d&&(a.j=a.Ba.ja(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Da(h);a.o=void 0;a.j&&(a.Ba.Fa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?Bf(a,"networkstatus-online"):Bf(a,"networkstatus-offline"));c(g);Ga(h);break;case 2:Ca(h),g=!1,h.A(3)}})})}
;function Pi(){this.data_=[];this.h=-1}
Pi.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.h=-1)};
Pi.prototype.get=function(a){return!!this.data_[a]};
function Qi(a){-1===a.h&&(a.h=lb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function Ri(a,b){this.h=a[x.Symbol.iterator]();this.i=b}
Ri.prototype[Symbol.iterator]=function(){return this};
Ri.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function Si(a,b){return new Ri(a,b)}
;function Ti(){this.blockSize=-1}
;function Ui(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.o=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
bb(Ui,Ti);Ui.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Vi(a,b,c){c||(c=0);var d=a.o;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],l=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+l&4294967295}
Ui.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)Vi(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Vi(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Vi(this,e);f=0;break}}this.i=f;this.l+=b}};
Ui.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;Vi(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Wi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Xi(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Yi(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Wi(a).match(/\S+/g)||[],b=0<=hb(a,b));return b}
function Zi(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Yi(a,"inverted-hdpi")&&Xi(a,Array.prototype.filter.call(a.classList?a.classList:Wi(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function $i(){}
$i.prototype.next=function(){return aj};
var aj={done:!0,value:void 0};function bj(a){return{value:a,done:!1}}
$i.prototype.Ea=function(){return this};function cj(a){if(a instanceof dj||a instanceof ej||a instanceof fj)return a;if("function"==typeof a.next)return new dj(function(){return a});
if("function"==typeof a[Symbol.iterator])return new dj(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Ea)return new dj(function(){return a.Ea()});
throw Error("Not an iterator or iterable.");}
function dj(a){this.i=a}
dj.prototype.Ea=function(){return new ej(this.i())};
dj.prototype[Symbol.iterator]=function(){return new fj(this.i())};
dj.prototype.h=function(){return new fj(this.i())};
function ej(a){this.i=a}
v(ej,$i);ej.prototype.next=function(){return this.i.next()};
ej.prototype[Symbol.iterator]=function(){return new fj(this.i)};
ej.prototype.h=function(){return new fj(this.i)};
function fj(a){dj.call(this,function(){return a});
this.j=a}
v(fj,dj);fj.prototype.next=function(){return this.j.next()};function gj(a,b){this.i={};this.h=[];this.Ya=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof gj)for(c=a.Ic(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
k=gj.prototype;k.Ic=function(){hj(this);return this.h.concat()};
k.has=function(a){return ij(this.i,a)};
k.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||jj;hj(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function jj(a,b){return a===b}
k.isEmpty=function(){return 0==this.size};
k.clear=function(){this.i={};this.Ya=this.size=this.h.length=0};
k.remove=function(a){return this.delete(a)};
k.delete=function(a){return ij(this.i,a)?(delete this.i[a],--this.size,this.Ya++,this.h.length>2*this.size&&hj(this),!0):!1};
function hj(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];ij(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],ij(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
k.get=function(a,b){return ij(this.i,a)?this.i[a]:b};
k.set=function(a,b){ij(this.i,a)||(this.size+=1,this.h.push(a),this.Ya++);this.i[a]=b};
k.forEach=function(a,b){for(var c=this.Ic(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
k.clone=function(){return new gj(this)};
k.keys=function(){return cj(this.Ea(!0)).h()};
k.values=function(){return cj(this.Ea(!1)).h()};
k.entries=function(){var a=this;return Si(this.keys(),function(b){return[b,a.get(b)]})};
k.Ea=function(a){hj(this);var b=0,c=this.Ya,d=this,e=new $i;e.next=function(){if(c!=d.Ya)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return aj;var f=d.h[b++];return bj(a?f:d.i[f])};
return e};
function ij(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function kj(a){J.call(this);this.o=1;this.l=[];this.m=0;this.i=[];this.j={};this.u=!!a}
bb(kj,J);k=kj.prototype;k.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.o;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.o=e+3;d.push(e);return e};
function lj(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Jb(b)}}
k.Jb=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=function(){}):(c&&nb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
k.eb=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];mj(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h();e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.Jb(c)}}return 0!=e}return!1};
function mj(a,b,c){Tf(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.Jb,this),delete this.j[a])}else this.i.length=0,this.j={}};
k.P=function(){kj.ya.P.call(this);this.clear();this.l.length=0};function nj(a){this.h=a}
nj.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new eh).serialize(b))};
nj.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
nj.prototype.remove=function(a){this.h.remove(a)};function oj(a){this.h=a}
bb(oj,nj);function pj(a){this.data=a}
function qj(a){return void 0===a||a instanceof pj?a:new pj(a)}
oj.prototype.set=function(a,b){oj.ya.set.call(this,a,qj(b))};
oj.prototype.i=function(a){a=oj.ya.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
oj.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function rj(a){this.h=a}
bb(rj,oj);rj.prototype.set=function(a,b,c){if(b=qj(b)){if(c){if(c<Date.now()){rj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}rj.ya.set.call(this,a,b)};
rj.prototype.i=function(a){var b=rj.ya.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())rj.prototype.remove.call(this,a);else return b}};function sj(){}
;function tj(){}
bb(tj,sj);tj.prototype[Symbol.iterator]=function(){return cj(this.Ea(!0)).h()};
tj.prototype.clear=function(){var a=Array.from(this);a=t(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function uj(a){this.h=a}
bb(uj,tj);k=uj.prototype;k.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.h.removeItem(a)};
k.Ea=function(a){var b=0,c=this.h,d=new $i;d.next=function(){if(b>=c.length)return aj;var e=c.key(b++);if(a)return bj(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return bj(e)};
return d};
k.clear=function(){this.h.clear()};
k.key=function(a){return this.h.key(a)};function vj(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
bb(vj,uj);function wj(a,b){this.i=a;this.h=null;var c;if(c=fd)c=!(9<=Number(td));if(c){xj||(xj=new gj);this.h=xj.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),xj.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
bb(wj,tj);var yj={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},xj=null;function zj(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return yj[b]})}
k=wj.prototype;k.isAvailable=function(){return!!this.h};
k.set=function(a,b){this.h.setAttribute(zj(a),b);Aj(this)};
k.get=function(a){a=this.h.getAttribute(zj(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.h.removeAttribute(zj(a));Aj(this)};
k.Ea=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new $i;d.next=function(){if(b>=c.length)return aj;var e=c[b++];if(a)return bj(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return bj(e)};
return d};
k.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Aj(this)};
function Aj(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Bj(a,b){this.i=a;this.h=b+"::"}
bb(Bj,tj);Bj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Bj.prototype.get=function(a){return this.i.get(this.h+a)};
Bj.prototype.remove=function(a){this.i.remove(this.h+a)};
Bj.prototype.Ea=function(a){var b=this.i[Symbol.iterator](),c=this,d=new $i;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return bj(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var K={},Cj="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;K.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
K.Zc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Dj={ub:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
rd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Ej={ub:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
rd:function(a){return[].concat.apply([],a)}};
K.hf=function(){Cj?(K.rb=Uint8Array,K.Ja=Uint16Array,K.Yd=Int32Array,K.assign(K,Dj)):(K.rb=Array,K.Ja=Array,K.Yd=Array,K.assign(K,Ej))};
K.hf();var Fj=!0;try{new Uint8Array(1)}catch(a){Fj=!1}
function Gj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new K.rb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Hj={};Hj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Ij={},Jj,Kj=[],Lj=0;256>Lj;Lj++){Jj=Lj;for(var Mj=0;8>Mj;Mj++)Jj=Jj&1?3988292384^Jj>>>1:Jj>>>1;Kj[Lj]=Jj}Ij=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Kj[(a^b[d])&255];return a^-1};var Nj={};Nj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Oj(a){for(var b=a.length;0<=--b;)a[b]=0}
var Pj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Qj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Rj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Sj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Tj=Array(576);Oj(Tj);var Uj=Array(60);Oj(Uj);var Vj=Array(512);Oj(Vj);var Wj=Array(256);Oj(Wj);var Xj=Array(29);Oj(Xj);var Yj=Array(30);Oj(Yj);function Zj(a,b,c,d,e){this.Qd=a;this.te=b;this.se=c;this.oe=d;this.Ke=e;this.vd=a&&a.length}
var ak,bk,ck;function dk(a,b){this.qd=a;this.Bb=0;this.Xa=b}
function ek(a,b){a.V[a.pending++]=b&255;a.V[a.pending++]=b>>>8&255}
function fk(a,b,c){a.da>16-c?(a.la|=b<<a.da&65535,ek(a,a.la),a.la=b>>16-a.da,a.da+=c-16):(a.la|=b<<a.da&65535,a.da+=c)}
function gk(a,b,c){fk(a,c[2*b],c[2*b+1])}
function hk(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function ik(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=hk(d[e]++,e))}
function jk(a){var b;for(b=0;286>b;b++)a.qa[2*b]=0;for(b=0;30>b;b++)a.gb[2*b]=0;for(b=0;19>b;b++)a.ga[2*b]=0;a.qa[512]=1;a.Qa=a.Fb=0;a.wa=a.matches=0}
function kk(a){8<a.da?ek(a,a.la):0<a.da&&(a.V[a.pending++]=a.la);a.la=0;a.da=0}
function lk(a,b,c){kk(a);ek(a,c);ek(a,~c);K.ub(a.V,a.window,b,c,a.pending);a.pending+=c}
function mk(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function nk(a,b,c){for(var d=a.W[c],e=c<<1;e<=a.Na;){e<a.Na&&mk(b,a.W[e+1],a.W[e],a.depth)&&e++;if(mk(b,d,a.W[e],a.depth))break;a.W[c]=a.W[e];c=e;e<<=1}a.W[c]=d}
function ok(a,b,c){var d=0;if(0!==a.wa){do{var e=a.V[a.Nb+2*d]<<8|a.V[a.Nb+2*d+1];var f=a.V[a.Oc+d];d++;if(0===e)gk(a,f,b);else{var g=Wj[f];gk(a,g+256+1,b);var h=Pj[g];0!==h&&(f-=Xj[g],fk(a,f,h));e--;g=256>e?Vj[e]:Vj[256+(e>>>7)];gk(a,g,c);h=Qj[g];0!==h&&(e-=Yj[g],fk(a,e,h))}}while(d<a.wa)}gk(a,256,b)}
function pk(a,b){var c=b.qd,d=b.Xa.Qd,e=b.Xa.vd,f=b.Xa.oe,g,h=-1;a.Na=0;a.yb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.W[++a.Na]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Na;){var l=a.W[++a.Na]=2>h?++h:0;c[2*l]=1;a.depth[l]=0;a.Qa--;e&&(a.Fb-=d[2*l+1])}b.Bb=h;for(g=a.Na>>1;1<=g;g--)nk(a,c,g);l=f;do g=a.W[1],a.W[1]=a.W[a.Na--],nk(a,c,1),d=a.W[1],a.W[--a.yb]=g,a.W[--a.yb]=d,c[2*l]=c[2*g]+c[2*d],a.depth[l]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=l,a.W[1]=l++,nk(a,c,1);while(2<=a.Na);a.W[--a.yb]=
a.W[1];g=b.qd;l=b.Bb;d=b.Xa.Qd;e=b.Xa.vd;f=b.Xa.te;var m=b.Xa.se,p=b.Xa.Ke,r,z=0;for(r=0;15>=r;r++)a.Ka[r]=0;g[2*a.W[a.yb]+1]=0;for(b=a.yb+1;573>b;b++){var u=a.W[b];r=g[2*g[2*u+1]+1]+1;r>p&&(r=p,z++);g[2*u+1]=r;if(!(u>l)){a.Ka[r]++;var A=0;u>=m&&(A=f[u-m]);var C=g[2*u];a.Qa+=C*(r+A);e&&(a.Fb+=C*(d[2*u+1]+A))}}if(0!==z){do{for(r=p-1;0===a.Ka[r];)r--;a.Ka[r]--;a.Ka[r+1]+=2;a.Ka[p]--;z-=2}while(0<z);for(r=p;0!==r;r--)for(u=a.Ka[r];0!==u;)d=a.W[--b],d>l||(g[2*d+1]!==r&&(a.Qa+=(r-g[2*d+1])*g[2*d],g[2*
d+1]=r),u--)}ik(c,h,a.Ka)}
function qk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;0===f&&(h=138,l=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var m=f;f=b[2*(d+1)+1];++g<h&&m===f||(g<l?a.ga[2*m]+=g:0!==m?(m!==e&&a.ga[2*m]++,a.ga[32]++):10>=g?a.ga[34]++:a.ga[36]++,g=0,e=m,0===f?(h=138,l=3):m===f?(h=6,l=3):(h=7,l=4))}}
function rk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;0===f&&(h=138,l=3);for(d=0;d<=c;d++){var m=f;f=b[2*(d+1)+1];if(!(++g<h&&m===f)){if(g<l){do gk(a,m,a.ga);while(0!==--g)}else 0!==m?(m!==e&&(gk(a,m,a.ga),g--),gk(a,16,a.ga),fk(a,g-3,2)):10>=g?(gk(a,17,a.ga),fk(a,g-3,3)):(gk(a,18,a.ga),fk(a,g-11,7));g=0;e=m;0===f?(h=138,l=3):m===f?(h=6,l=3):(h=7,l=4)}}}
function sk(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.qa[2*c])return 0;if(0!==a.qa[18]||0!==a.qa[20]||0!==a.qa[26])return 1;for(c=32;256>c;c++)if(0!==a.qa[2*c])return 1;return 0}
var tk=!1;function uk(a,b,c){a.V[a.Nb+2*a.wa]=b>>>8&255;a.V[a.Nb+2*a.wa+1]=b&255;a.V[a.Oc+a.wa]=c&255;a.wa++;0===b?a.qa[2*c]++:(a.matches++,b--,a.qa[2*(Wj[c]+256+1)]++,a.gb[2*(256>b?Vj[b]:Vj[256+(b>>>7)])]++);return a.wa===a.Sb-1}
;function vk(a,b){a.msg=Nj[b];return b}
function wk(a){for(var b=a.length;0<=--b;)a[b]=0}
function xk(a){var b=a.state,c=b.pending;c>a.J&&(c=a.J);0!==c&&(K.ub(a.output,b.V,b.Tb,c,a.Cb),a.Cb+=c,b.Tb+=c,a.bd+=c,a.J-=c,b.pending-=c,0===b.pending&&(b.Tb=0))}
function yk(a,b){var c=0<=a.sa?a.sa:-1,d=a.s-a.sa,e=0;if(0<a.level){2===a.G.Dc&&(a.G.Dc=sk(a));pk(a,a.nc);pk(a,a.jc);qk(a,a.qa,a.nc.Bb);qk(a,a.gb,a.jc.Bb);pk(a,a.kd);for(e=18;3<=e&&0===a.ga[2*Sj[e]+1];e--);a.Qa+=3*(e+1)+14;var f=a.Qa+3+7>>>3;var g=a.Fb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)fk(a,b?1:0,3),lk(a,c,d);else if(4===a.strategy||g===f)fk(a,2+(b?1:0),3),ok(a,Tj,Uj);else{fk(a,4+(b?1:0),3);c=a.nc.Bb+1;d=a.jc.Bb+1;e+=1;fk(a,c-257,5);fk(a,d-1,5);fk(a,e-4,4);for(f=0;f<e;f++)fk(a,a.ga[2*
Sj[f]+1],3);rk(a,a.qa,c-1);rk(a,a.gb,d-1);ok(a,a.qa,a.gb)}jk(a);b&&kk(a);a.sa=a.s;xk(a.G)}
function M(a,b){a.V[a.pending++]=b}
function zk(a,b){a.V[a.pending++]=b>>>8&255;a.V[a.pending++]=b&255}
function Ak(a,b){var c=a.Bd,d=a.s,e=a.va,f=a.Dd,g=a.s>a.ia-262?a.s-(a.ia-262):0,h=a.window,l=a.Za,m=a.Ha,p=a.s+258,r=h[d+e-1],z=h[d+e];a.va>=a.ud&&(c>>=2);f>a.v&&(f=a.v);do{var u=b;if(h[u+e]===z&&h[u+e-1]===r&&h[u]===h[d]&&h[++u]===h[d+1]){d+=2;for(u++;h[++d]===h[++u]&&h[++d]===h[++u]&&h[++d]===h[++u]&&h[++d]===h[++u]&&h[++d]===h[++u]&&h[++d]===h[++u]&&h[++d]===h[++u]&&h[++d]===h[++u]&&d<p;);u=258-(p-d);d=p-258;if(u>e){a.Ab=b;e=u;if(u>=f)break;r=h[d+e-1];z=h[d+e]}}}while((b=m[b&l])>g&&0!==--c);return e<=
a.v?e:a.v}
function Bk(a){var b=a.ia,c;do{var d=a.Wd-a.v-a.s;if(a.s>=b+(b-262)){K.ub(a.window,a.window,b,b,0);a.Ab-=b;a.s-=b;a.sa-=b;var e=c=a.mc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ha[--e],a.Ha[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.G.ka)break;e=a.G;c=a.window;f=a.s+a.v;var g=e.ka;g>d&&(g=d);0===g?c=0:(e.ka-=g,K.ub(c,e.input,e.kb,g,f),1===e.state.wrap?e.D=Hj(e.D,c,g,f):2===e.state.wrap&&(e.D=Ij(e.D,c,g,f)),e.kb+=g,e.ob+=g,c=g);a.v+=c;if(3<=a.v+a.ra)for(d=a.s-a.ra,a.I=a.window[d],
a.I=(a.I<<a.Ma^a.window[d+1])&a.La;a.ra&&!(a.I=(a.I<<a.Ma^a.window[d+3-1])&a.La,a.Ha[d&a.Za]=a.head[a.I],a.head[a.I]=d,d++,a.ra--,3>a.v+a.ra););}while(262>a.v&&0!==a.G.ka)}
function Ck(a,b){for(var c;;){if(262>a.v){Bk(a);if(262>a.v&&0===b)return 1;if(0===a.v)break}c=0;3<=a.v&&(a.I=(a.I<<a.Ma^a.window[a.s+3-1])&a.La,c=a.Ha[a.s&a.Za]=a.head[a.I],a.head[a.I]=a.s);0!==c&&a.s-c<=a.ia-262&&(a.K=Ak(a,c));if(3<=a.K)if(c=uk(a,a.s-a.Ab,a.K-3),a.v-=a.K,a.K<=a.Pc&&3<=a.v){a.K--;do a.s++,a.I=(a.I<<a.Ma^a.window[a.s+3-1])&a.La,a.Ha[a.s&a.Za]=a.head[a.I],a.head[a.I]=a.s;while(0!==--a.K);a.s++}else a.s+=a.K,a.K=0,a.I=a.window[a.s],a.I=(a.I<<a.Ma^a.window[a.s+1])&a.La;else c=uk(a,0,
a.window[a.s]),a.v--,a.s++;if(c&&(yk(a,!1),0===a.G.J))return 1}a.ra=2>a.s?a.s:2;return 4===b?(yk(a,!0),0===a.G.J?3:4):a.wa&&(yk(a,!1),0===a.G.J)?1:2}
function Dk(a,b){for(var c,d;;){if(262>a.v){Bk(a);if(262>a.v&&0===b)return 1;if(0===a.v)break}c=0;3<=a.v&&(a.I=(a.I<<a.Ma^a.window[a.s+3-1])&a.La,c=a.Ha[a.s&a.Za]=a.head[a.I],a.head[a.I]=a.s);a.va=a.K;a.Gd=a.Ab;a.K=2;0!==c&&a.va<a.Pc&&a.s-c<=a.ia-262&&(a.K=Ak(a,c),5>=a.K&&(1===a.strategy||3===a.K&&4096<a.s-a.Ab)&&(a.K=2));if(3<=a.va&&a.K<=a.va){d=a.s+a.v-3;c=uk(a,a.s-1-a.Gd,a.va-3);a.v-=a.va-1;a.va-=2;do++a.s<=d&&(a.I=(a.I<<a.Ma^a.window[a.s+3-1])&a.La,a.Ha[a.s&a.Za]=a.head[a.I],a.head[a.I]=a.s);
while(0!==--a.va);a.ib=0;a.K=2;a.s++;if(c&&(yk(a,!1),0===a.G.J))return 1}else if(a.ib){if((c=uk(a,0,a.window[a.s-1]))&&yk(a,!1),a.s++,a.v--,0===a.G.J)return 1}else a.ib=1,a.s++,a.v--}a.ib&&(uk(a,0,a.window[a.s-1]),a.ib=0);a.ra=2>a.s?a.s:2;return 4===b?(yk(a,!0),0===a.G.J?3:4):a.wa&&(yk(a,!1),0===a.G.J)?1:2}
function Ek(a,b){for(var c,d,e,f=a.window;;){if(258>=a.v){Bk(a);if(258>=a.v&&0===b)return 1;if(0===a.v)break}a.K=0;if(3<=a.v&&0<a.s&&(d=a.s-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.s+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.K=258-(e-d);a.K>a.v&&(a.K=a.v)}3<=a.K?(c=uk(a,1,a.K-3),a.v-=a.K,a.s+=a.K,a.K=0):(c=uk(a,0,a.window[a.s]),a.v--,a.s++);if(c&&(yk(a,!1),0===a.G.J))return 1}a.ra=0;return 4===b?(yk(a,!0),0===a.G.J?3:4):
a.wa&&(yk(a,!1),0===a.G.J)?1:2}
function Fk(a,b){for(var c;;){if(0===a.v&&(Bk(a),0===a.v)){if(0===b)return 1;break}a.K=0;c=uk(a,0,a.window[a.s]);a.v--;a.s++;if(c&&(yk(a,!1),0===a.G.J))return 1}a.ra=0;return 4===b?(yk(a,!0),0===a.G.J?3:4):a.wa&&(yk(a,!1),0===a.G.J)?1:2}
function Gk(a,b,c,d,e){this.Ae=a;this.Je=b;this.Me=c;this.Ie=d;this.we=e}
var Hk;Hk=[new Gk(0,0,0,0,function(a,b){var c=65535;for(c>a.xa-5&&(c=a.xa-5);;){if(1>=a.v){Bk(a);if(0===a.v&&0===b)return 1;if(0===a.v)break}a.s+=a.v;a.v=0;var d=a.sa+c;if(0===a.s||a.s>=d)if(a.v=a.s-d,a.s=d,yk(a,!1),0===a.G.J)return 1;if(a.s-a.sa>=a.ia-262&&(yk(a,!1),0===a.G.J))return 1}a.ra=0;if(4===b)return yk(a,!0),0===a.G.J?3:4;a.s>a.sa&&yk(a,!1);return 1}),
new Gk(4,4,8,4,Ck),new Gk(4,5,16,8,Ck),new Gk(4,6,32,32,Ck),new Gk(4,4,16,16,Dk),new Gk(8,16,32,32,Dk),new Gk(8,16,128,128,Dk),new Gk(8,32,128,256,Dk),new Gk(32,128,258,1024,Dk),new Gk(32,258,258,4096,Dk)];
function Ik(){this.G=null;this.status=0;this.V=null;this.wrap=this.pending=this.Tb=this.xa=0;this.B=null;this.Aa=0;this.method=8;this.zb=-1;this.Za=this.dd=this.ia=0;this.window=null;this.Wd=0;this.head=this.Ha=null;this.Dd=this.ud=this.strategy=this.level=this.Pc=this.Bd=this.va=this.v=this.Ab=this.s=this.ib=this.Gd=this.K=this.sa=this.Ma=this.La=this.Kc=this.mc=this.I=0;this.qa=new K.Ja(1146);this.gb=new K.Ja(122);this.ga=new K.Ja(78);wk(this.qa);wk(this.gb);wk(this.ga);this.kd=this.jc=this.nc=
null;this.Ka=new K.Ja(16);this.W=new K.Ja(573);wk(this.W);this.yb=this.Na=0;this.depth=new K.Ja(573);wk(this.depth);this.da=this.la=this.ra=this.matches=this.Fb=this.Qa=this.Nb=this.wa=this.Sb=this.Oc=0}
function Jk(a,b){if(!a||!a.state||5<b||0>b)return a?vk(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.ka||666===c.status&&4!==b)return vk(a,0===a.J?-5:-2);c.G=a;var d=c.zb;c.zb=b;if(42===c.status)if(2===c.wrap)a.D=0,M(c,31),M(c,139),M(c,8),c.B?(M(c,(c.B.text?1:0)+(c.B.Ua?2:0)+(c.B.Ta?4:0)+(c.B.name?8:0)+(c.B.comment?16:0)),M(c,c.B.time&255),M(c,c.B.time>>8&255),M(c,c.B.time>>16&255),M(c,c.B.time>>24&255),M(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),M(c,c.B.os&255),c.B.Ta&&c.B.Ta.length&&
(M(c,c.B.Ta.length&255),M(c,c.B.Ta.length>>8&255)),c.B.Ua&&(a.D=Ij(a.D,c.V,c.pending,0)),c.Aa=0,c.status=69):(M(c,0),M(c,0),M(c,0),M(c,0),M(c,0),M(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),M(c,3),c.status=113);else{var e=8+(c.dd-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.s&&(e|=32);c.status=113;zk(c,e+(31-e%31));0!==c.s&&(zk(c,a.D>>>16),zk(c,a.D&65535));a.D=1}if(69===c.status)if(c.B.Ta){for(e=c.pending;c.Aa<(c.B.Ta.length&65535)&&(c.pending!==c.xa||(c.B.Ua&&
c.pending>e&&(a.D=Ij(a.D,c.V,c.pending-e,e)),xk(a),e=c.pending,c.pending!==c.xa));)M(c,c.B.Ta[c.Aa]&255),c.Aa++;c.B.Ua&&c.pending>e&&(a.D=Ij(a.D,c.V,c.pending-e,e));c.Aa===c.B.Ta.length&&(c.Aa=0,c.status=73)}else c.status=73;if(73===c.status)if(c.B.name){e=c.pending;do{if(c.pending===c.xa&&(c.B.Ua&&c.pending>e&&(a.D=Ij(a.D,c.V,c.pending-e,e)),xk(a),e=c.pending,c.pending===c.xa)){var f=1;break}f=c.Aa<c.B.name.length?c.B.name.charCodeAt(c.Aa++)&255:0;M(c,f)}while(0!==f);c.B.Ua&&c.pending>e&&(a.D=Ij(a.D,
c.V,c.pending-e,e));0===f&&(c.Aa=0,c.status=91)}else c.status=91;if(91===c.status)if(c.B.comment){e=c.pending;do{if(c.pending===c.xa&&(c.B.Ua&&c.pending>e&&(a.D=Ij(a.D,c.V,c.pending-e,e)),xk(a),e=c.pending,c.pending===c.xa)){f=1;break}f=c.Aa<c.B.comment.length?c.B.comment.charCodeAt(c.Aa++)&255:0;M(c,f)}while(0!==f);c.B.Ua&&c.pending>e&&(a.D=Ij(a.D,c.V,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.B.Ua?(c.pending+2>c.xa&&xk(a),c.pending+2<=c.xa&&(M(c,a.D&255),M(c,a.D>>
8&255),a.D=0,c.status=113)):c.status=113);if(0!==c.pending){if(xk(a),0===a.J)return c.zb=-1,0}else if(0===a.ka&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return vk(a,-5);if(666===c.status&&0!==a.ka)return vk(a,-5);if(0!==a.ka||0!==c.v||0!==b&&666!==c.status){d=2===c.strategy?Fk(c,b):3===c.strategy?Ek(c,b):Hk[c.level].we(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.J&&(c.zb=-1),0;if(2===d&&(1===b?(fk(c,2,3),gk(c,256,Tj),16===c.da?(ek(c,c.la),c.la=0,c.da=0):8<=c.da&&(c.V[c.pending++]=
c.la&255,c.la>>=8,c.da-=8)):5!==b&&(fk(c,0,3),lk(c,0,0),3===b&&(wk(c.head),0===c.v&&(c.s=0,c.sa=0,c.ra=0))),xk(a),0===a.J))return c.zb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(M(c,a.D&255),M(c,a.D>>8&255),M(c,a.D>>16&255),M(c,a.D>>24&255),M(c,a.ob&255),M(c,a.ob>>8&255),M(c,a.ob>>16&255),M(c,a.ob>>24&255)):(zk(c,a.D>>>16),zk(c,a.D&65535));xk(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var Kk={};Kk=function(){this.input=null;this.ob=this.ka=this.kb=0;this.output=null;this.bd=this.J=this.Cb=0;this.msg="";this.state=null;this.Dc=2;this.D=0};var Lk=Object.prototype.toString;
function Mk(a){if(!(this instanceof Mk))return new Mk(a);a=this.options=K.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.G=new Kk;this.G.J=0;var b=this.G;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=vk(b,-2);else{8===e&&(e=9);var l=new Ik;b.state=l;l.G=b;l.wrap=h;l.B=null;l.dd=e;l.ia=1<<l.dd;l.Za=l.ia-1;l.Kc=f+7;l.mc=1<<l.Kc;l.La=l.mc-1;l.Ma=~~((l.Kc+3-1)/3);l.window=new K.rb(2*l.ia);l.head=new K.Ja(l.mc);l.Ha=new K.Ja(l.ia);l.Sb=1<<f+6;l.xa=4*l.Sb;l.V=new K.rb(l.xa);l.Nb=1*l.Sb;l.Oc=3*l.Sb;l.level=c;l.strategy=g;l.method=d;if(b&&b.state){b.ob=b.bd=0;b.Dc=2;c=b.state;c.pending=0;c.Tb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.D=2===c.wrap?
0:1;c.zb=0;if(!tk){d=Array(16);for(f=g=0;28>f;f++)for(Xj[f]=g,e=0;e<1<<Pj[f];e++)Wj[g++]=f;Wj[g-1]=f;for(f=g=0;16>f;f++)for(Yj[f]=g,e=0;e<1<<Qj[f];e++)Vj[g++]=f;for(g>>=7;30>f;f++)for(Yj[f]=g<<7,e=0;e<1<<Qj[f]-7;e++)Vj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)Tj[2*e+1]=8,e++,d[8]++;for(;255>=e;)Tj[2*e+1]=9,e++,d[9]++;for(;279>=e;)Tj[2*e+1]=7,e++,d[7]++;for(;287>=e;)Tj[2*e+1]=8,e++,d[8]++;ik(Tj,287,d);for(e=0;30>e;e++)Uj[2*e+1]=5,Uj[2*e]=hk(e,5);ak=new Zj(Tj,Pj,257,286,15);bk=new Zj(Uj,
Qj,0,30,15);ck=new Zj([],Rj,0,19,7);tk=!0}c.nc=new dk(c.qa,ak);c.jc=new dk(c.gb,bk);c.kd=new dk(c.ga,ck);c.la=0;c.da=0;jk(c);c=0}else c=vk(b,-2);0===c&&(b=b.state,b.Wd=2*b.ia,wk(b.head),b.Pc=Hk[b.level].Je,b.ud=Hk[b.level].Ae,b.Dd=Hk[b.level].Me,b.Bd=Hk[b.level].Ie,b.s=0,b.sa=0,b.v=0,b.ra=0,b.K=b.va=2,b.ib=0,b.I=0);b=c}}else b=-2;if(0!==b)throw Error(Nj[b]);a.header&&(b=this.G)&&b.state&&2===b.state.wrap&&(b.state.B=a.header);if(a.dictionary){var m;"string"===typeof a.dictionary?m=Gj(a.dictionary):
"[object ArrayBuffer]"===Lk.call(a.dictionary)?m=new Uint8Array(a.dictionary):m=a.dictionary;a=this.G;f=m;g=f.length;if(a&&a.state)if(m=a.state,b=m.wrap,2===b||1===b&&42!==m.status||m.v)b=-2;else{1===b&&(a.D=Hj(a.D,f,g,0));m.wrap=0;g>=m.ia&&(0===b&&(wk(m.head),m.s=0,m.sa=0,m.ra=0),c=new K.rb(m.ia),K.ub(c,f,g-m.ia,m.ia,0),f=c,g=m.ia);c=a.ka;d=a.kb;e=a.input;a.ka=g;a.kb=0;a.input=f;for(Bk(m);3<=m.v;){f=m.s;g=m.v-2;do m.I=(m.I<<m.Ma^m.window[f+3-1])&m.La,m.Ha[f&m.Za]=m.head[m.I],m.head[m.I]=f,f++;while(--g);
m.s=f;m.v=2;Bk(m)}m.s+=m.v;m.sa=m.s;m.ra=m.v;m.v=0;m.K=m.va=2;m.ib=0;a.kb=d;a.input=e;a.ka=c;m.wrap=b;b=0}else b=-2;if(0!==b)throw Error(Nj[b]);this.sg=!0}}
Mk.prototype.push=function(a,b){var c=this.G,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=Gj(a):"[object ArrayBuffer]"===Lk.call(a)?c.input=new Uint8Array(a):c.input=a;c.kb=0;c.ka=c.input.length;do{0===c.J&&(c.output=new K.rb(d),c.Cb=0,c.J=d);a=Jk(c,e);if(1!==a&&0!==a)return Nk(this,a),this.ended=!0,!1;if(0===c.J||0===c.ka&&(4===e||2===e))if("string"===this.options.to){var f=K.Zc(c.output,c.Cb);b=f;f=f.length;if(65537>f&&(b.subarray&&Fj||!b.subarray))b=
String.fromCharCode.apply(null,K.Zc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=K.Zc(c.output,c.Cb),this.chunks.push(b)}while((0<c.ka||0===c.J)&&1!==a);if(4===e)return(c=this.G)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=vk(c,-2):(c.state=null,a=113===d?vk(c,-3):0)):a=-2,Nk(this,a),this.ended=!0,0===a;2===e&&(Nk(this,0),c.J=0);return!0};
function Nk(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):K.rd(a.chunks));a.chunks=[];a.err=b;a.msg=a.G.msg}
function Ok(a){var b=b||{};b.gzip=!0;b=new Mk(b);b.push(a,!0);if(b.err)throw b.msg||Nj[b.err];return b.result}
;function Pk(a){return Kb(null===a?"null":void 0===a?"undefined":a)}
;function Qk(a){this.name=a}
;var Rk=new Qk("rawColdConfigGroup");var Sk=new Qk("rawHotConfigGroup");var Tk=new Qk("commandExecutorCommand");function Uk(a){I.call(this,a)}
v(Uk,I);function Vk(a,b){return we(a,1,b)}
;function Wk(a){I.call(this,a,-1,Xk)}
v(Wk,I);var Xk=[1];function Yk(a){I.call(this,a)}
v(Yk,I);function Zk(a){I.call(this,a)}
v(Zk,I);function $k(a){I.call(this,a)}
v($k,I);function al(a){I.call(this,a,-1,bl)}
v(al,I);var bl=[2];function cl(a){I.call(this,a,-1,dl)}
v(cl,I);cl.prototype.getPlayerType=function(){return ze(ie(this,36),0)};
cl.prototype.setHomeGroupInfo=function(a){return H(this,al,81,a)};
cl.prototype.clearLocationPlayabilityToken=function(){return G(this,89,void 0,!1)};
var dl=[9,66,24,32,86,100,101];function el(a){I.call(this,a)}
v(el,I);el.prototype.getKey=function(){return Ae(this,1)};
el.prototype.getValue=function(){return Ae(this,2===pe(this,fl)?2:-1)};
var fl=[2,3,4,5,6];function gl(a){I.call(this,a,-1,hl)}
v(gl,I);var hl=[15,26,28];function il(a){I.call(this,a,-1,jl)}
v(il,I);var jl=[5];function kl(a){I.call(this,a)}
v(kl,I);function ll(a){I.call(this,a,-1,ml)}
v(ll,I);ll.prototype.setSafetyMode=function(a){return G(this,5,a)};
var ml=[12];function nl(a){I.call(this,a,-1,ol)}
v(nl,I);nl.prototype.Eb=function(a){return H(this,cl,1,a)};
var ol=[12];var pl=new Qk("continuationCommand");var ql=new Qk("signalAction");var rl=new Qk("webCommandMetadata");var sl=new Qk("signalServiceEndpoint");var tl={Lf:"EMBEDDED_PLAYER_MODE_UNKNOWN",If:"EMBEDDED_PLAYER_MODE_DEFAULT",Kf:"EMBEDDED_PLAYER_MODE_PFP",Jf:"EMBEDDED_PLAYER_MODE_PFL"};var ul=new Qk("feedbackEndpoint");var vl={rg:"WEB_DISPLAY_MODE_UNKNOWN",ng:"WEB_DISPLAY_MODE_BROWSER",pg:"WEB_DISPLAY_MODE_MINIMAL_UI",qg:"WEB_DISPLAY_MODE_STANDALONE",og:"WEB_DISPLAY_MODE_FULLSCREEN"};function wl(a){I.call(this,a)}
v(wl,I);wl.prototype.getKey=function(){return Ae(this,1)};
wl.prototype.getValue=function(){return Ae(this,2)};function xl(a){I.call(this,a,-1,yl)}
v(xl,I);var yl=[4,5];function Pl(a){I.call(this,a)}
v(Pl,I);Pl.prototype.getLineNumber=function(){return ze(ie(this,2),0)};
Pl.prototype.getColumnNumber=function(){return ze(ie(this,3),0)};function Ql(a){I.call(this,a)}
v(Ql,I);var Rl=[2,3,4,5];function Sl(a){I.call(this,a)}
v(Sl,I);Sl.prototype.getMessage=function(){return Ae(this,1)};
Sl.prototype.getLevel=function(){return ze(ie(this,2),0)};function Tl(a){I.call(this,a)}
v(Tl,I);function Ul(a){I.call(this,a)}
v(Ul,I);function Vl(a){I.call(this,a,-1,Wl)}
v(Vl,I);var Wl=[10,17];function Xl(a){I.call(this,a)}
v(Xl,I);function Yl(a){I.call(this,a)}
v(Yl,I);function Zl(a){I.call(this,a)}
v(Zl,I);function $l(a){I.call(this,a)}
v($l,I);function am(a){I.call(this,a)}
v(am,I);function bm(a){I.call(this,a,-1,cm)}
v(bm,I);bm.prototype.getVideoData=function(){return qe(this,am,15)};
var cm=[4];function dm(a){I.call(this,a)}
v(dm,I);function em(a,b){H(a,Zl,1,b)}
;function fm(a){I.call(this,a)}
v(fm,I);function gm(a,b){return H(a,Zl,1,b)}
fm.prototype.h=function(a){return G(this,2,a)};function hm(a){I.call(this,a,-1,im)}
v(hm,I);hm.prototype.h=function(a){return G(this,1,a)};
function jm(a,b){return H(a,Zl,2,b)}
var im=[3];function km(a){I.call(this,a)}
v(km,I);km.prototype.h=function(a){return G(this,1,a)};function lm(a){I.call(this,a)}
v(lm,I);lm.prototype.h=function(a){return G(this,1,a)};function mm(a){I.call(this,a)}
v(mm,I);mm.prototype.h=function(a){return G(this,1,a)};function nm(a){I.call(this,a)}
v(nm,I);nm.prototype.h=function(a){return G(this,1,a)};function om(a){I.call(this,a)}
v(om,I);function pm(a){I.call(this,a)}
v(pm,I);function qm(a){var b=new pm;return G(b,1,a)}
pm.prototype.getId=function(){return Ae(this,2)};
function rm(a,b){return G(a,2,b)}
;function sm(a){I.call(this,a)}
v(sm,I);function tm(a){I.call(this,a,-1,um)}
v(tm,I);tm.prototype.getPlayerType=function(){return ze(ie(this,7),0)};
tm.prototype.setVideoId=function(a){return G(this,19,a)};
function wm(a,b){ve(a,68,pm,b)}
var um=[112,83,68];function xm(a){I.call(this,a)}
v(xm,I);function ym(a){I.call(this,a)}
v(ym,I);function zm(a){I.call(this,a)}
v(zm,I);function Am(a){I.call(this,a,475)}
v(Am,I);
var Bm=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474];var Cm={gg:0,Mf:1,Sf:2,Tf:4,Zf:8,Uf:16,Vf:32,fg:64,eg:128,Of:256,Qf:512,Xf:1024,Pf:2048,Rf:4096,Nf:8192,Wf:16384,ag:32768,Yf:65536,cg:131072,dg:262144};function Dm(a){I.call(this,a)}
v(Dm,I);function Em(a){I.call(this,a)}
v(Em,I);Em.prototype.setVideoId=function(a){return oe(this,1,Fm,a)};
Em.prototype.getPlaylistId=function(){var a=2===pe(this,Fm)?2:-1;return ie(this,a)};
var Fm=[1,2];function Gm(a){I.call(this,a,-1,Hm)}
v(Gm,I);var Hm=[3];var Im=new Qk("webPlayerShareEntityServiceEndpoint");var Jm=new Qk("playlistEditEndpoint");var Km=new Qk("modifyChannelNotificationPreferenceEndpoint");var Lm=new Qk("unsubscribeEndpoint");var Mm=new Qk("subscribeEndpoint");function Nm(){var a=Om;B("yt.ads.biscotti.getId_")||y("yt.ads.biscotti.getId_",a)}
function Pm(a){y("yt.ads.biscotti.lastId_",a)}
;function Qm(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Rm=x.window,Sm,Tm,Um=(null==Rm?void 0:null==(Sm=Rm.yt)?void 0:Sm.config_)||(null==Rm?void 0:null==(Tm=Rm.ytcfg)?void 0:Tm.data_)||{};y("yt.config_",Um);function Vm(){Qm(Um,arguments)}
function O(a,b){return a in Um?Um[a]:b}
function Wm(){var a=Um.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Xm=[];function Ym(a){Xm.forEach(function(b){return b(a)})}
function Zm(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){$m(b)}}:a}
function $m(a){var b=B("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Vm("ERRORS",b));Ym(a)}
function an(a,b,c,d,e){var f=B("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=O("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Vm("ERRORS",f))}
;var bn=/^[\w.]*$/,cn={q:!0,search_query:!0};function dn(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=en(f[0]||""),h=en(f[1]||"");g in c?Array.isArray(c[g])?ob(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(r){var l=r,m=f[0],p=String(dn);l.args=[{key:m,value:f[1],query:a,method:fn==p?"unchanged":p}];cn.hasOwnProperty(m)||an(l)}}return c}
var fn=String(dn);function gn(a){var b=[];pb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];ib(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function hn(a){"?"==a.charAt(0)&&(a=a.substr(1));return dn(a,"&")}
function jn(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),hn(1<a.length?a[1]:a[0])):{}}
function kn(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=hn(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Jc(a,e)+d}
function ln(a){if(!b)var b=window.location.href;var c=Bc(1,a),d=Cc(a);c&&d?(a=a.match(zc),b=b.match(zc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Cc(b)==d&&(Number(Bc(4,b))||null)==(Number(Bc(4,a))||null):!0;return a}
function en(a){return a&&a.match(bn)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function mn(a){var b=nn;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Gi;e.flash="0";a:{try{var f=b.h.top.location.href}catch(ra){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?li:g;try{var h=g.history.length}catch(ra){h=0}e.u_his=h;var l;e.u_h=null==(l=li.screen)?void 0:l.height;var m;e.u_w=null==(m=li.screen)?void 0:m.width;var p;e.u_ah=null==(p=li.screen)?void 0:p.availHeight;var r;e.u_aw=
null==(r=li.screen)?void 0:r.availWidth;var z;e.u_cd=null==(z=li.screen)?void 0:z.colorDepth}catch(ra){}h=b.h;try{var u=h.screenX;var A=h.screenY}catch(ra){}try{var C=h.outerWidth;var D=h.outerHeight}catch(ra){}try{var N=h.innerWidth;var R=h.innerHeight}catch(ra){}try{var T=h.screenLeft;var ha=h.screenTop}catch(ra){}try{N=h.innerWidth,R=h.innerHeight}catch(ra){}try{var ba=h.screen.availWidth;var sa=h.screen.availTop}catch(ra){}u=[T,ha,u,A,ba,sa,C,D,N,R];try{var Sa=(b.h.top||window).document,Ea="CSS1Compat"==
Sa.compatMode?Sa.documentElement:Sa.body;var Fa=(new Hf(Ea.clientWidth,Ea.clientHeight)).round()}catch(ra){Fa=new Hf(-12245933,-12245933)}Sa=Fa;Fa={};var za=void 0===za?x:za;Ea=new Pi;"SVGElement"in za&&"createElementNS"in za.document&&Ea.set(0);A=Di();A["allow-top-navigation-by-user-activation"]&&Ea.set(1);A["allow-popups-to-escape-sandbox"]&&Ea.set(2);za.crypto&&za.crypto.subtle&&Ea.set(3);"TextDecoder"in za&&"TextEncoder"in za&&Ea.set(4);za=Qi(Ea);Fa.bc=za;Fa.bih=Sa.height;Fa.biw=Sa.width;Fa.brdim=
u.join();b=b.i;b=(Fa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Fa.wgl=!!li.WebGLRenderingContext,Fa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var nn=new function(){var a=window.document;this.h=window;this.i=a};
y("yt.ads_.signals_.getAdSignalsString",function(a){return gn(mn(a))});Date.now();navigator.userAgent.indexOf(" (CrKey ");function P(a){a=on(a);return"string"===typeof a&&"false"===a?!1:!!a}
function pn(a,b){a=on(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function qn(){return O("EXPERIMENTS_TOKEN","")}
function on(a){var b=O("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:O("EXPERIMENT_FLAGS",{})[a]}
function rn(){for(var a=[],b=O("EXPERIMENTS_FORCED_FLAGS",{}),c=t(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=O("EXPERIMENT_FLAGS",{});var e=t(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var sn="XMLHttpRequest"in x?function(){return new XMLHttpRequest}:null;
function tn(){if(!sn)return null;var a=sn();return"open"in a?a:null}
function un(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function vn(a,b){"function"===typeof a&&(a=Zm(a));return window.setTimeout(a,b)}
;var wn={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},xn="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ja(Hi)),yn=!1;
function zn(a,b){b=void 0===b?{}:b;var c=ln(a),d=P("web_ajax_ignore_global_headers_if_set"),e;for(e in wn){var f=O(wn[e]);"X-Goog-Visitor-Id"!==e||f||(f=O("VISITOR_DATA"));!f||!c&&Cc(a)||d&&void 0!==b[e]||!(P("move_vss_away_from_login_info_cookie")||"X-Goog-AuthUser"!==e&&"X-Goog-PageId"!==e)||(b[e]=f)}P("move_vss_away_from_login_info_cookie")&&c&&O("SESSION_INDEX")&&(b["X-Yt-Auth-Test"]="test");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Cc(a))b["X-YouTube-Utc-Offset"]=
String(-(new Date).getTimezoneOffset());if(c||!Cc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&Cc(a)||(b["X-YouTube-Ad-Signals"]=gn(mn()));return b}
function An(a){var b=window.location.search,c=Cc(a);P("debug_handle_relative_url_for_query_forward_killswitch")||!c&&ln(a)&&(c=document.location.hostname);var d=Ac(Bc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=hn(b),f={};ib(xn,function(g){e[g]&&(f[g]=e[g])});
return kn(a,f||{},!1)}
function Bn(a,b){var c=b.format||"JSON";a=Cn(a,b);var d=Dn(a,b),e=!1,f=En(a,function(l){if(!e){e=!0;h&&window.clearTimeout(h);var m=un(l),p=null,r=400<=l.status&&500>l.status,z=500<=l.status&&600>l.status;if(m||r||z)p=Fn(a,c,l,b.convertToSafeHtml);if(m)a:if(l&&204==l.status)m=!0;else{switch(c){case "XML":m=0==parseInt(p&&p.return_code,10);break a;case "RAW":m=!0;break a}m=!!p}p=p||{};r=b.context||x;m?b.onSuccess&&b.onSuccess.call(r,l,p):b.onError&&b.onError.call(r,l,p);b.onFinish&&b.onFinish.call(r,
l,p)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=vn(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||x,f))},d)}return f}
function Cn(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=O("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=kn(a,b||{},!0);return a}
function Dn(a,b){var c=O("XSRF_FIELD_NAME"),d=O("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=O("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Cc(a)&&!b.withCredentials&&Cc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(P("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=hn(e),zb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):Hc(e));f=e||f&&!sb(f);!yn&&f&&"POST"!=b.method&&(yn=!0,$m(Error("AJAX request with postData should use POST")));return e}
function Fn(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,an(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Gn(a):null)e={},ib(a.getElementsByTagName("*"),function(g){e[g.tagName]=Hn(g)})}d&&In(e);
return e}
function In(a){if(Ua(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=Bb();d=e?e.createHTML(d):d;a[c]=new rc(d)}else In(a[b])}}
function Gn(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Hn(a){var b="";ib(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Jn(a,b){b.method="POST";b.postParams||(b.postParams={});return Bn(a,b)}
function En(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Zm(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=tn();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;P("debug_forward_web_query_parameters")&&(a=An(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=zn(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);
return l}
;var Kn=[{Qc:function(a){return"Cannot read property '"+a.key+"'"},
pc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Qc:function(a){return"Cannot call '"+a.key+"'"},
pc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Qc:function(a){return a.key+" is not defined"},
pc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Mn={Wa:[],Sa:[{callback:Ln,weight:500}]};function Ln(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Nn(){this.Sa=[];this.Wa=[]}
var On;function Pn(){if(!On){var a=On=new Nn;a.Wa.length=0;a.Sa.length=0;Mn.Wa&&a.Wa.push.apply(a.Wa,Mn.Wa);Mn.Sa&&a.Sa.push.apply(a.Sa,Mn.Sa)}return On}
;var Qn=new kj;function Rn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Sn(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Sn(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Sn(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Sn(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Tn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Un(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Rn(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Un(e+".ve",f,g,h):0;d+=g;d+=Un(e,a[e],b,c);if(500<d)break}}else c[b]=Vn(a),d+=c[b].length;else c[b]=Vn(a),d+=c[b].length;return d}
function Un(a,b,c,d){c+="."+a;a=Vn(b);d[c]=a;return c.length+a.length}
function Vn(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Wn(){this.mf=!0}
function Xn(){Wn.h||(Wn.h=new Wn);return Wn.h}
function Yn(a,b){a={};var c=ah([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(O("SESSION_INDEX",0)),c=isNaN(c)?0:c),P("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Um||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in Um&&(a["X-Goog-PageId"]=O("DELEGATED_SESSION_ID")));return a}
;var Zn={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function $n(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function ao(){if(!x.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return x.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":x.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":x.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":x.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function bo(a,b,c,d,e){Xg.set(""+a,b,{oc:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function co(a,b,c){Xg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function eo(){if(!Xg.isEnabled())return!1;if(!Xg.isEmpty())return!0;Xg.set("TESTCOOKIESENABLED","1",{oc:60});if("1"!==Xg.get("TESTCOOKIESENABLED"))return!1;Xg.remove("TESTCOOKIESENABLED");return!0}
;var fo=B("ytglobal.prefsUserPrefsPrefs_")||{};y("ytglobal.prefsUserPrefsPrefs_",fo);function go(){this.h=O("ALT_PREF_COOKIE_NAME","PREF");this.i=O("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Xg.get(""+this.h,void 0);a&&this.parse(a)}
var ho;function io(){ho||(ho=new go);return ho}
k=go.prototype;k.get=function(a,b){jo(a);ko(a);a=void 0!==fo[a]?fo[a].toString():null;return null!=a?a:b?b:""};
k.set=function(a,b){jo(a);ko(a);if(null==b)throw Error("ExpectedNotNull");fo[a]=b.toString()};
function lo(a){return!!((mo("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
k.remove=function(a){jo(a);ko(a);delete fo[a]};
k.clear=function(){for(var a in fo)delete fo[a]};
function ko(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function jo(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function mo(a){a=void 0!==fo[a]?fo[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
k.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(fo[d]=c.toString())}};var no={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},oo={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},po={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},qo={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function ro(){var a=x.navigator;return a?a.connection:void 0}
function so(){var a=ro();if(a){var b=no[a.type||"unknown"]||"CONN_UNKNOWN";a=no[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function to(){var a=ro();if(null!=a&&a.effectiveType)return qo.hasOwnProperty(a.effectiveType)?qo[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function S(a){var b=Na.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ja(b))}
v(S,Error);function uo(){try{return vo(),!0}catch(a){return!1}}
function vo(a){if(void 0!==O("DATASYNC_ID"))return O("DATASYNC_ID");throw new S("Datasync ID not set",void 0===a?"unknown":a);}
;function wo(){}
function xo(a,b){return yo(a,0,b)}
wo.prototype.ja=function(a,b){return yo(a,1,b)};
function zo(a){var b=B("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function Ao(){wo.apply(this,arguments)}
v(Ao,wo);function Bo(){Ao.h||(Ao.h=new Ao);return Ao.h}
function yo(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):vn(a,c||0)}
Ao.prototype.Fa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Ao.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
Ao.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};
var Oi=Bo();function Co(a){var b=new vj;(b=b.isAvailable()?a?new Bj(b,a):b:null)||(a=new wj(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new rj(a):null;this.i=document.domain||window.location.hostname}
Co.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new eh).serialize(b))}catch(f){return}else e=escape(b);bo(a,e,c,this.i)};
Co.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Xg.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Co.prototype.remove=function(a){this.h&&this.h.remove(a);co(a,"/",this.i)};var Do=function(){var a;return function(){a||(a=new Co("ytidb"));return a}}();
function Eo(){var a;return null==(a=Do())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Fo=[],Go,Ho=!1;function Io(){var a={};for(Go=new Jo(void 0===a.handleError?Ko:a.handleError,void 0===a.logEvent?Lo:a.logEvent);0<Fo.length;)switch(a=Fo.shift(),a.type){case "ERROR":Go.handleError(a.payload);break;case "EVENT":Go.logEvent(a.eventType,a.payload)}}
function Mo(a){Ho||(Go?Go.handleError(a):(Fo.push({type:"ERROR",payload:a}),10<Fo.length&&Fo.shift()))}
function No(a,b){Ho||(Go?Go.logEvent(a,b):(Fo.push({type:"EVENT",eventType:a,payload:b}),10<Fo.length&&Fo.shift()))}
;function Oo(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Po(a){return a.substr(0,a.indexOf(":"))||a}
;var Qo=ud||vd;function Ro(a){var b=$b();return b?0<=b.toLowerCase().indexOf(a):!1}
;var So={},To=(So.AUTH_INVALID="No user identifier specified.",So.EXPLICIT_ABORT="Transaction was explicitly aborted.",So.IDB_NOT_SUPPORTED="IndexedDB is not supported.",So.MISSING_INDEX="Index not created.",So.MISSING_OBJECT_STORES="Object stores not created.",So.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",So.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",So.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
So.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",So.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",So.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",So.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",So),Uo={},Vo=(Uo.AUTH_INVALID="ERROR",Uo.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Uo.EXPLICIT_ABORT="IGNORED",Uo.IDB_NOT_SUPPORTED="ERROR",Uo.MISSING_INDEX=
"WARNING",Uo.MISSING_OBJECT_STORES="ERROR",Uo.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Uo.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Uo.QUOTA_EXCEEDED="WARNING",Uo.QUOTA_MAYBE_EXCEEDED="WARNING",Uo.UNKNOWN_ABORT="WARNING",Uo.INCOMPATIBLE_DB_VERSION="WARNING",Uo),Wo={},Xo=(Wo.AUTH_INVALID=!1,Wo.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Wo.EXPLICIT_ABORT=!1,Wo.IDB_NOT_SUPPORTED=!1,Wo.MISSING_INDEX=!1,Wo.MISSING_OBJECT_STORES=!1,Wo.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Wo.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Wo.QUOTA_EXCEEDED=!1,Wo.QUOTA_MAYBE_EXCEEDED=!0,Wo.UNKNOWN_ABORT=!0,Wo.INCOMPATIBLE_DB_VERSION=!1,Wo);function Yo(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?To[a]:c;d=void 0===d?Vo[a]:d;e=void 0===e?Xo[a]:e;S.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Yo.prototype)}
v(Yo,S);function Zo(a,b){Yo.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},To.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Zo.prototype)}
v(Zo,Yo);function $o(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,$o.prototype)}
v($o,Error);var ap=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function bp(a,b,c,d){b=Po(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Yo)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Yo("QUOTA_EXCEEDED",a);if(wd&&"UnknownError"===e.name)return new Yo("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof $o)return new Yo("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&ap.some(function(f){return e.message.includes(f)}))return new Yo("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Yo("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Fd:e.name})];e.level="WARNING";return e}
function cp(a,b,c){var d=Eo();return new Yo("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function dp(a){if(!a)throw Error();throw a;}
function ep(a){return a}
function fp(a){this.h=a}
function gp(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=t(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=t(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
gp.all=function(a){return new gp(new fp(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={pb:0};f.pb<a.length;f={pb:f.pb},++f.pb)gp.resolve(a[f.pb]).then(function(g){return function(h){d[g.pb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
gp.resolve=function(a){return new gp(new fp(function(b,c){a instanceof gp?a.then(b,c):b(a)}))};
gp.reject=function(a){return new gp(new fp(function(b,c){c(a)}))};
gp.prototype.then=function(a,b){var c=this,d=null!=a?a:ep,e=null!=b?b:dp;return new gp(new fp(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){hp(c,c,d,f,g)}),c.i.push(function(){ip(c,c,e,f,g)})):"FULFILLED"===c.state.status?hp(c,c,d,f,g):"REJECTED"===c.state.status&&ip(c,c,e,f,g)}))};
gp.prototype.catch=function(a){return this.then(void 0,a)};
function hp(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof gp?jp(a,b,f,d,e):d(f)}catch(g){e(g)}}
function ip(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof gp?jp(a,b,f,d,e):d(f)}catch(g){e(g)}}
function jp(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof gp?jp(a,b,f,d,e):d(f)},function(f){e(f)})}
;function kp(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function lp(a){return new Promise(function(b,c){kp(a,b,c)})}
function mp(a){return new gp(new fp(function(b,c){kp(a,b,c)}))}
;function np(a,b){return new gp(new fp(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var op=window,U=op.ytcsi&&op.ytcsi.now?op.ytcsi.now:op.performance&&op.performance.timing&&op.performance.now&&op.performance.timing.navigationStart?function(){return op.performance.timing.navigationStart+op.performance.now()}:function(){return(new Date).getTime()};function pp(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(U());this.i=!1}
k=pp.prototype;k.add=function(a,b,c){return qp(this,[a],{mode:"readwrite",ha:!0},function(d){return d.objectStore(a).add(b,c)})};
k.clear=function(a){return qp(this,[a],{mode:"readwrite",ha:!0},function(b){return b.objectStore(a).clear()})};
k.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
k.count=function(a,b){return qp(this,[a],{mode:"readonly",ha:!0},function(c){return c.objectStore(a).count(b)})};
function rp(a,b,c){a=a.h.createObjectStore(b,c);return new sp(a)}
k.delete=function(a,b){return qp(this,[a],{mode:"readwrite",ha:!0},function(c){return c.objectStore(a).delete(b)})};
k.get=function(a,b){return qp(this,[a],{mode:"readonly",ha:!0},function(c){return c.objectStore(a).get(b)})};
function tp(a,b,c){return qp(a,[b],{mode:"readwrite",ha:!0},function(d){d=d.objectStore(b);return mp(d.h.put(c,void 0))})}
k.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function qp(a,b,c,d){var e,f,g,h,l,m,p,r,z,u,A,C;return w(function(D){switch(D.h){case 1:var N={mode:"readonly",ha:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?N.mode=c:Object.assign(N,c);e=N;a.transactionCount++;f=e.ha?3:1;g=0;case 2:if(h){D.A(3);break}g++;l=Math.round(U());Aa(D,4);m=a.h.transaction(b,e.mode);N=D.yield;var R=new up(m);R=vp(R,d);return N.call(D,R,6);case 6:return p=D.i,r=Math.round(U()),wp(a,l,r,g,void 0,b.join(),e),D.return(p);case 4:z=Ca(D);u=Math.round(U());A=bp(z,
a.h.name,b.join(),a.h.version);if((C=A instanceof Yo&&!A.h)||g>=f)wp(a,l,u,g,A,b.join(),e),h=A;D.A(2);break;case 3:return D.return(Promise.reject(h))}})}
function wp(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Yo&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&No("QUOTA_EXCEEDED",{dbName:Po(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Yo&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),No("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),xp(a,!1,d,f,b,g.tag),Mo(e)):xp(a,!0,d,f,b,g.tag)}
function xp(a,b,c,d,e,f){No("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
k.getName=function(){return this.h.name};
function sp(a){this.h=a}
k=sp.prototype;k.add=function(a,b){return mp(this.h.add(a,b))};
k.autoIncrement=function(){return this.h.autoIncrement};
k.clear=function(){return mp(this.h.clear()).then(function(){})};
function yp(a,b,c){a.h.createIndex(b,c,{unique:!1})}
k.count=function(a){return mp(this.h.count(a))};
function zp(a,b){return Ap(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
k.delete=function(a){return a instanceof IDBKeyRange?zp(this,a):mp(this.h.delete(a))};
k.get=function(a){return mp(this.h.get(a))};
k.index=function(a){try{return new Bp(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new $o(a,this.h.name);throw b;}};
k.getName=function(){return this.h.name};
k.keyPath=function(){return this.h.keyPath};
function Ap(a,b,c){a=a.h.openCursor(b.query,b.direction);return Cp(a).then(function(d){return np(d,c)})}
function up(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Yo;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var l=f.item(h);if(null===l)throw Error("Invariant: item in DOMStringList is null");g.push(l)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function vp(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return t(d).next().value})}
up.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Yo("EXPLICIT_ABORT");};
up.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new sp(a),this.i.set(a,b));return b};
function Bp(a){this.h=a}
k=Bp.prototype;k.count=function(a){return mp(this.h.count(a))};
k.delete=function(a){return Dp(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
k.get=function(a){return mp(this.h.get(a))};
k.getKey=function(a){return mp(this.h.getKey(a))};
k.keyPath=function(){return this.h.keyPath};
k.unique=function(){return this.h.unique};
function Dp(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Cp(a).then(function(d){return np(d,c)})}
function Ep(a,b){this.request=a;this.cursor=b}
function Cp(a){return mp(a).then(function(b){return b?new Ep(a,b):null})}
k=Ep.prototype;k.advance=function(a){this.cursor.advance(a);return Cp(this.request)};
k.continue=function(a){this.cursor.continue(a);return Cp(this.request)};
k.delete=function(){return mp(this.cursor.delete()).then(function(){})};
k.getKey=function(){return this.cursor.key};
k.getValue=function(){return this.cursor.value};
k.update=function(a){return mp(this.cursor.update(a))};function Fp(a,b,c){return new Promise(function(d,e){function f(){z||(z=new pp(g.result,{closed:r}));return z}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.he,l=c.blocking,m=c.nf,p=c.upgrade,r=c.closed,z;g.addEventListener("upgradeneeded",function(u){try{if(null===u.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");u.dataLoss&&"none"!==u.dataLoss&&No("IDB_DATA_CORRUPTED",{reason:u.dataLossMessage||"unknown reason",dbName:Po(a)});var A=f(),C=new up(g.transaction);
p&&p(A,function(D){return u.oldVersion<D&&u.newVersion>=D},C);
C.done.catch(function(D){e(D)})}catch(D){e(D)}});
g.addEventListener("success",function(){var u=g.result;l&&u.addEventListener("versionchange",function(){l(f())});
u.addEventListener("close",function(){No("IDB_UNEXPECTEDLY_CLOSED",{dbName:Po(a),dbVersion:u.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Gp(a,b,c){c=void 0===c?{}:c;return Fp(a,b,c)}
function Hp(a,b){b=void 0===b?{}:b;var c,d,e,f;return w(function(g){if(1==g.h)return Aa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.he)&&c.addEventListener("blocked",function(){e()}),g.yield(lp(c),4);
if(2!=g.h)return Ba(g,0);f=Ca(g);throw bp(f,a,"",-1);})}
;function Ip(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}
Ip.prototype.i=function(a,b,c){c=void 0===c?{}:c;return Gp(a,b,c)};
Ip.prototype.delete=function(a){a=void 0===a?{}:a;return Hp(this.name,a)};
function Jp(a,b){return new Yo("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Kp(a,b){if(!b)throw cp("openWithToken",Po(a.name));return a.open()}
Ip.prototype.open=function(){function a(){var f,g,h,l,m,p,r,z,u,A;return w(function(C){switch(C.h){case 1:return g=null!=(f=Error().stack)?f:"",Aa(C,2),C.yield(c.i(c.name,c.options.version,e),4);case 4:h=C.i;for(var D=c.options,N=[],R=t(Object.keys(D.Db)),T=R.next();!T.done;T=R.next()){T=T.value;var ha=D.Db[T],ba=void 0===ha.Te?Number.MAX_VALUE:ha.Te;!(h.h.version>=ha.Lb)||h.h.version>=ba||h.h.objectStoreNames.contains(T)||N.push(T)}l=N;if(0===l.length){C.A(5);break}m=Object.keys(c.options.Db);p=
h.objectStoreNames();if(c.m<pn("ytidb_reopen_db_retries",0))return c.m++,h.close(),Mo(new Yo("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:m,foundObjectStores:p})),C.return(a());if(!(c.l<pn("ytidb_remake_db_retries",1))){C.A(6);break}c.l++;return C.yield(c.delete(),7);case 7:return Mo(new Yo("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:m,foundObjectStores:p})),C.return(a());case 6:throw new Zo(p,m);case 5:return C.return(h);case 2:r=Ca(C);
if(r instanceof DOMException?"VersionError"!==r.name:"DOMError"in self&&r instanceof DOMError?"VersionError"!==r.name:!(r instanceof Object&&"message"in r)||"An attempt was made to open a database using a lower version than the existing version."!==r.message){C.A(8);break}return C.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:z=C.i;u=z.h.version;if(void 0!==c.options.version&&u>c.options.version+1)throw z.close(),c.j=!1,Jp(c,u);return C.return(z);case 8:throw b(),r instanceof
Error&&!P("ytidb_async_stack_killswitch")&&(r.stack=r.stack+"\n"+g.substring(g.indexOf("\n")+1)),bp(r,c.name,"",null!=(A=c.options.version)?A:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw Jp(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,nf:b,upgrade:this.options.upgrade};return this.h=d=a()};var Lp=new Ip("YtIdbMeta",{Db:{databases:{Lb:1}},upgrade:function(a,b){b(1)&&rp(a,"databases",{keyPath:"actualName"})}});
function Mp(a,b){var c;return w(function(d){if(1==d.h)return d.yield(Kp(Lp,b),2);c=d.i;return d.return(qp(c,["databases"],{ha:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return mp(f.h.put(a,void 0)).then(function(){})})}))})}
function Np(a,b){var c;return w(function(d){if(1==d.h)return a?d.yield(Kp(Lp,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Op(a,b){var c,d;return w(function(e){return 1==e.h?(c=[],e.yield(Kp(Lp,b),2)):3!=e.h?(d=e.i,e.yield(qp(d,["databases"],{ha:!0,mode:"readonly"},function(f){c.length=0;return Ap(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function Pp(a){return Op(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function Qp(a,b,c){return Op(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function Rp(a){var b,c;return w(function(d){if(1==d.h)return b=vo("YtIdbMeta hasAnyMeta other"),d.yield(Op(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var Sp,Tp=new function(){}(new function(){});
function Up(){var a,b,c,d;return w(function(e){switch(e.h){case 1:a=Eo();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Qo)f=/WebKit\/([0-9]+)/.exec($b()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec($b()),f=!(f&&602<=parseInt(f[1],10)));if(f||gd)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
Aa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(Mp(d,Tp),4);case 4:return e.yield(Np("yt-idb-test-do-not-use",Tp),5);case 5:return e.return(!0);case 2:return Ca(e),e.return(!1)}})}
function Vp(){if(void 0!==Sp)return Sp;Ho=!0;return Sp=Up().then(function(a){Ho=!1;var b;if(null!=(b=Do())&&b.h){var c;b={hasSucceededOnce:(null==(c=Eo())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Do())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Wp(){return B("ytglobal.idbToken_")||void 0}
function Xp(){var a=Wp();return a?Promise.resolve(a):Vp().then(function(b){(b=b?Tp:void 0)&&y("ytglobal.idbToken_",b);return b})}
;var Yp=0;function Zp(a,b){Yp||(Yp=Oi.ja(function(){var c,d,e,f,g;return w(function(h){switch(h.h){case 1:return h.yield(Xp(),2);case 2:c=h.i;if(!c)return h.return();d=!0;Aa(h,3);return h.yield(Qp(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.A(6);break}f=e[0];return h.yield(Hp(f.actualName),7);case 7:return h.yield(Np(f.actualName,c),6);case 6:Ba(h,4);break;case 3:g=Ca(h),Mo(g),d=!1;case 4:Oi.Fa(Yp),Yp=0,d&&Zp(a,b),h.h=0}})}))}
function $p(){var a;return w(function(b){return 1==b.h?b.yield(Xp(),2):(a=b.i)?b.return(Rp(a)):b.return(!1)})}
new ji;function aq(a){if(!uo())throw a=new Yo("AUTH_INVALID",{dbName:a}),Mo(a),a;var b=vo();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function bq(a,b,c,d){var e,f,g,h,l,m;return w(function(p){switch(p.h){case 1:return f=null!=(e=Error().stack)?e:"",p.yield(Xp(),2);case 2:g=p.i;if(!g)throw h=cp("openDbImpl",a,b),P("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Mo(h),h;Oo(a);l=c?{actualName:a,publicName:a,userIdentifier:void 0}:aq(a);Aa(p,3);return p.yield(Mp(l,g),5);case 5:return p.yield(Gp(l.actualName,b,d),6);case 6:return p.return(p.i);case 3:return m=Ca(p),Aa(p,7),p.yield(Np(l.actualName,
g),9);case 9:Ba(p,8);break;case 7:Ca(p);case 8:throw m;}})}
function cq(a,b,c){c=void 0===c?{}:c;return bq(a,b,!1,c)}
function dq(a,b,c){c=void 0===c?{}:c;return bq(a,b,!0,c)}
function eq(a,b){b=void 0===b?{}:b;var c,d;return w(function(e){if(1==e.h)return e.yield(Xp(),2);if(3!=e.h){c=e.i;if(!c)return e.return();Oo(a);d=aq(a);return e.yield(Hp(d.actualName,b),3)}return e.yield(Np(d.actualName,c),0)})}
function fq(a,b,c){a=a.map(function(d){return w(function(e){return 1==e.h?e.yield(Hp(d.actualName,b),2):e.yield(Np(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function gq(){var a=void 0===a?{}:a;var b,c;return w(function(d){if(1==d.h)return d.yield(Xp(),2);if(3!=d.h){b=d.i;if(!b)return d.return();Oo("LogsDatabaseV2");return d.yield(Pp(b),3)}c=d.i;return d.yield(fq(c,a,b),0)})}
function hq(a,b){b=void 0===b?{}:b;var c;return w(function(d){if(1==d.h)return d.yield(Xp(),2);if(3!=d.h){c=d.i;if(!c)return d.return();Oo(a);return d.yield(Hp(a,b),3)}return d.yield(Np(a,c),0)})}
;function iq(a,b){Ip.call(this,a,b);this.options=b;Oo(a)}
v(iq,Ip);function jq(a,b){var c;return function(){c||(c=new iq(a,b));return c}}
iq.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.wc?dq:cq)(a,b,Object.assign({},c))};
iq.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.wc?hq:eq)(this.name,a)};
function kq(a,b){return jq(a,b)}
;var lq={},mq=kq("ytGcfConfig",{Db:(lq.coldConfigStore={Lb:1},lq.hotConfigStore={Lb:1},lq),wc:!1,upgrade:function(a,b){b(1)&&(yp(rp(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),yp(rp(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function nq(a){return Kp(mq(),a)}
function oq(a,b,c){var d,e,f;return w(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:U()},g.yield(nq(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(tp(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function pq(a,b,c,d){var e,f,g;return w(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:U()},h.yield(nq(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(tp(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function qq(a){var b,c;return w(function(d){return 1==d.h?d.yield(nq(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(qp(b,["coldConfigStore"],{mode:"readwrite",ha:!0},function(e){return Dp(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function rq(a){var b,c;return w(function(d){return 1==d.h?d.yield(nq(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(qp(b,["hotConfigStore"],{mode:"readwrite",ha:!0},function(e){return Dp(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function sq(){this.h=0}
function tq(a,b,c){var d,e,f;return w(function(g){if(1==g.h){if(!P("update_log_event_config"))return g.A(0);c&&(a.i=c,y("yt.gcf.config.hotConfigGroup",a.i));a.hotHashData=b;y("yt.gcf.config.hotHashData",a.hotHashData);return(d=Wp())?c?g.A(4):g.yield(rq(d),5):g.A(0)}4!=g.h&&(e=g.i,c=null==(f=e)?void 0:f.config);return g.yield(oq(c,b,d),0)})}
function uq(a,b,c){var d,e,f,g;return w(function(h){if(1==h.h){if(!P("update_log_event_config"))return h.A(0);a.coldHashData=b;y("yt.gcf.config.coldHashData",a.coldHashData);return(d=Wp())?c?h.A(4):h.yield(qq(d),5):h.A(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.A(0);g=c.configData;return h.yield(pq(c,b,g,d),0)})}
;function vq(){return"INNERTUBE_API_KEY"in Um&&"INNERTUBE_API_VERSION"in Um}
function wq(){return{innertubeApiKey:O("INNERTUBE_API_KEY"),innertubeApiVersion:O("INNERTUBE_API_VERSION"),Lc:O("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),wd:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Ce:O("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:O("INNERTUBE_CONTEXT_CLIENT_VERSION"),yd:O("INNERTUBE_CONTEXT_HL"),xd:O("INNERTUBE_CONTEXT_GL"),De:O("INNERTUBE_HOST_OVERRIDE")||"",Fe:!!O("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Ee:!!O("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:O("SERIALIZED_CLIENT_CONFIG_DATA")}}
function xq(a){var b={client:{hl:a.yd,gl:a.xd,clientName:a.wd,clientVersion:a.innertubeContextClientVersion,configInfo:a.Lc}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=x.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=qn();""!==c&&(b.client.experimentsToken=c);c=rn();0<c.length&&(b.request={internalExperimentFlags:c});yq(a,void 0,b);zq(void 0,b);Aq(void 0,b);Bq(a,void 0,b);Cq(void 0,b);P("start_sending_config_hash")&&Dq(void 0,b);O("DELEGATED_SESSION_ID")&&
!P("pageid_as_header_web")&&(b.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=t(Object.entries(hn(O("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=t(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Eq(a){var b=new nl,c=new cl;G(c,1,a.yd);G(c,2,a.xd);G(c,16,a.Ce);G(c,17,a.innertubeContextClientVersion);if(a.Lc){var d=a.Lc,e=new Zk;d.coldConfigData&&G(e,1,d.coldConfigData);d.appInstallData&&G(e,6,d.appInstallData);d.coldHashData&&G(e,3,d.coldHashData);d.hotHashData&&G(e,5,d.hotHashData);H(c,Zk,62,e)}(d=x.devicePixelRatio)&&1!=d&&G(c,65,de(d));d=qn();""!==d&&G(c,54,d);d=rn();if(0<d.length){e=new gl;for(var f=0;f<d.length;f++){var g=new el;G(g,1,d[f].key);oe(g,2,fl,d[f].value);ve(e,15,
el,g)}H(b,gl,5,e)}yq(a,c);zq(b);Aq(c);Bq(a,c);Cq(c);P("start_sending_config_hash")&&Dq(c);O("DELEGATED_SESSION_ID")&&!P("pageid_as_header_web")&&(a=new ll,G(a,3,O("DELEGATED_SESSION_ID")));a=t(Object.entries(hn(O("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=t(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?G(c,12,e):"cmodel"===d?G(c,13,e):"cbr"===d?G(c,87,e):"cbrver"===d?G(c,88,e):"cos"===d?G(c,18,e):"cosver"===d?G(c,19,e):"cplatform"===d&&G(c,42,e);b.Eb(c);return b}
function yq(a,b,c){a=a.wd;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=qe(b,$k,96)||new $k;var d=ao();d=Object.keys(vl).indexOf(d);d=-1===d?null:d;null!==d&&G(c,3,d);H(b,$k,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=ao())}
function zq(a,b){var c=B("yt.embedded_player.embed_url");c&&(a?(b=qe(a,il,7)||new il,G(b,4,c),H(a,il,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function Aq(a,b){var c;if(P("web_log_memory_total_kbytes")&&(null==(c=x.navigator)?0:c.deviceMemory)){var d;c=null==(d=x.navigator)?void 0:d.deviceMemory;a?G(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Bq(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=qe(b,Zk,62))?d:new Zk;G(c,6,a.appInstallData);H(b,Zk,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Cq(a,b){var c=so();c&&(a?G(a,61,oo[c]):b&&(b.client.connectionType=c));P("web_log_effective_connection_type")&&(c=to())&&(a?G(a,94,po[c]):b&&(b.client.effectiveConnectionType=c))}
function Fq(a,b,c){c=void 0===c?{}:c;var d={};O("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":O("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||O("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||O("AUTHORIZATION");b||(a?b="Bearer "+B("gapi.auth.getToken")().tg:(a=Yn(Xn()),P("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
function Dq(a,b){sq.h||(sq.h=new sq);var c=sq.h;var d=U()-c.h;if(0!==c.h&&d<pn("send_config_hash_timer"))c=void 0;else{d=B("yt.gcf.config.coldConfigData");var e=B("yt.gcf.config.hotHashData"),f=B("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=U());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=qe(a,Zk,62))?g:new Zk;G(b,1,c);G(b,3,d);G(b,5,e);H(a,Zk,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},
b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;function Gq(a,b){this.version=a;this.args=b}
Gq.prototype.serialize=function(){return{version:this.version,args:this.args}};function Hq(a,b){this.topic=a;this.h=b}
Hq.prototype.toString=function(){return this.topic};var Iq=B("ytPubsub2Pubsub2Instance")||new kj;kj.prototype.subscribe=kj.prototype.subscribe;kj.prototype.unsubscribeByKey=kj.prototype.Jb;kj.prototype.publish=kj.prototype.eb;kj.prototype.clear=kj.prototype.clear;y("ytPubsub2Pubsub2Instance",Iq);var Jq=B("ytPubsub2Pubsub2SubscribedKeys")||{};y("ytPubsub2Pubsub2SubscribedKeys",Jq);var Kq=B("ytPubsub2Pubsub2TopicToKeys")||{};y("ytPubsub2Pubsub2TopicToKeys",Kq);var Lq=B("ytPubsub2Pubsub2IsAsync")||{};y("ytPubsub2Pubsub2IsAsync",Lq);
y("ytPubsub2Pubsub2SkipSubKey",null);function Mq(a,b){var c=Nq();c&&c.publish.call(c,a.toString(),a,b)}
function Oq(a){var b=Pq,c=Nq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Jq[d])try{if(f&&b instanceof Hq&&b!=e)try{var h=b.h,l=f;if(!l.args||!l.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Ya){var m=new h;h.Ya=m.version}var p=h.Ya}catch(D){}if(!p||l.version!=p)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{p=Reflect;var r=p.construct;
var z=l.args,u=z.length;if(0<u){var A=Array(u);for(l=0;l<u;l++)A[l]=z[l];var C=A}else C=[];f=r.call(p,h,C)}catch(D){throw D.message="yt.pubsub2.Data.deserialize(): "+D.message,D;}}catch(D){throw D.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+D.message,D;}a.call(window,f)}catch(D){$m(D)}},Lq[b.toString()]?B("yt.scheduler.instance")?Oi.ja(g):vn(g,0):g())});
Jq[d]=!0;Kq[b.toString()]||(Kq[b.toString()]=[]);Kq[b.toString()].push(d);return d}
function Qq(){var a=Rq,b=Oq(function(c){a.apply(void 0,arguments);Sq(b)});
return b}
function Sq(a){var b=Nq();b&&("number"===typeof a&&(a=[a]),ib(a,function(c){b.unsubscribeByKey(c);delete Jq[c]}))}
function Nq(){return B("ytPubsub2Pubsub2Instance")}
;function Tq(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&Mq("meta_logging_csi_event",{timerName:a,Ng:b})}
;var Uq=pn("max_body_size_to_compress",5E5),Vq=pn("min_body_size_to_compress",500),Wq=!0,Xq=0,Yq=0,Zq=pn("compression_performance_threshold",250),$q=pn("slow_compressions_before_abandon_count",10);
function ar(a,b,c,d){var e=U(),f={startTime:e,ticks:{},infos:{}};if(Wq)try{var g=br(b);if(!(g>Uq||g<Vq)){var h=Ok(Ji(b)),l=U();f.ticks.gelc=l;Yq++;P("disable_compression_due_to_performance_degredation")&&l-e>=Zq&&(Xq++,P("abandon_compression_after_N_slow_zips")?Yq===pn("compression_disable_point")&&Xq>$q&&(Wq=!1):Wq=!1);cr(f);if(dr(h,b)||!P("only_compress_gel_if_smaller"))c.headers||(c.headers={}),c.headers["Content-Encoding"]="gzip",c.postBody=h,c.postParams=void 0}d(a,c)}catch(m){an(m),d(a,c)}else d(a,
c)}
function er(a){var b=void 0===b?!1:b;var c=U(),d={startTime:c,ticks:{},infos:{}};if(Wq){if(!a.body)return a;try{var e="string"===typeof a.body?a.body:JSON.stringify(a.body),f=br(e);if(f>Uq||f<Vq)return a;var g=Ok(Ji(e)),h=U();d.ticks.gelc=h;if(!dr(g,e)&&P("only_compress_gel_if_smaller"))return a;if(b){Yq++;if(P("disable_compression_due_to_performance_degredation")&&h-c>=Zq)if(Xq++,P("abandon_compression_after_N_slow_zips")){b=Xq/Yq;var l=$q/pn("compression_disable_point");0<Yq&&0===Yq%pn("compression_disable_point")&&
b>=l&&(Wq=!1)}else Wq=!1;cr(d)}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=g;return a}catch(m){return an(m),a}}else return a}
function dr(a,b){if(!window.Blob)return!0;var c=a.length<br(b);c||an(new S("Compressed req body is larger than uncompressed","original size: "+br(b),"compressed size: "+a.length));return c}
function br(a){return(new Blob(a.split(""))).size}
function cr(a){P("gel_compression_csi_killswitch")||!P("log_gel_compression_latency")&&!P("log_gel_compression_latency_lr")||Tq("gel_compression",a,{sampleRate:.1})}
;function fr(a){a=Object.assign({},a);delete a.Authorization;var b=ah();if(b){var c=new Ui;c.update(O("INNERTUBE_API_KEY"));c.update(b);a.hash=zd(c.digest(),3)}return a}
;var gr;function hr(){gr||(gr=new Co("yt.innertube"));return gr}
function ir(a,b,c,d){if(d)return null;d=hr().get("nextId",!0)||1;var e=hr().get("requests",!0)||{};e[d]={method:a,request:b,authState:fr(c),requestTime:Math.round(U())};hr().set("nextId",d+1,86400,!0);hr().set("requests",e,86400,!0);return d}
function jr(a){var b=hr().get("requests",!0)||{};delete b[a];hr().set("requests",b,86400,!0)}
function kr(a){var b=hr().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(U())-d.requestTime)){var e=d.authState,f=fr(Fq(!1));vb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),lr(a,d.method,e,{}));delete b[c]}}hr().set("requests",b,86400,!0)}}
;function mr(a){this.ec=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.xb=function(){};
this.now=Date.now;this.Pb=!1;var b;this.Rd=null!=(b=a.Rd)?b:100;var c;this.Ld=null!=(c=a.Ld)?c:1;var d;this.Jd=null!=(d=a.Jd)?d:2592E6;var e;this.Hd=null!=(e=a.Hd)?e:12E4;var f;this.Kd=null!=(f=a.Kd)?f:5E3;var g;this.S=null!=(g=a.S)?g:void 0;this.kc=!!a.kc;var h;this.ic=null!=(h=a.ic)?h:.1;var l;this.qc=null!=(l=a.qc)?l:10;a.handleError&&(this.handleError=a.handleError);a.xb&&(this.xb=a.xb);a.Pb&&(this.Pb=a.Pb);a.ec&&(this.ec=a.ec);this.T=a.T;this.Ba=a.Ba;this.Z=a.Z;this.Y=a.Y;this.Ra=a.Ra;this.Tc=
a.Tc;this.Sc=a.Sc;nr(this)&&(!this.T||this.T("networkless_logging"))&&or(this)}
function or(a){nr(a)&&!a.Pb&&(a.h=!0,a.kc&&Math.random()<=a.ic&&a.Z.ke(a.S),pr(a),a.Y.ta()&&a.Vb(),a.Y.listen(a.Tc,a.Vb.bind(a)),a.Y.listen(a.Sc,a.ld.bind(a)))}
k=mr.prototype;k.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(nr(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.Z.set(d,this.S).then(function(e){d.id=e;c.Y.ta()&&qr(c,d)}).catch(function(e){qr(c,d);
rr(c,e)})}else this.Ra(a,b)};
k.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(nr(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.T&&this.T("nwl_skip_retry")&&(e.skipRetry=c);if(this.Y.ta()||this.T&&this.T("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return w(function(l){if(1==l.h)return l.yield(d.Z.set(e,d.S).catch(function(m){rr(d,m)}),2);
f(g,h);l.h=0})}}this.Ra(a,b,e.skipRetry)}else this.Z.set(e,this.S).catch(function(g){d.Ra(a,b,e.skipRetry);
rr(d,g)})}else this.Ra(a,b,this.T&&this.T("nwl_skip_retry")&&c)};
k.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(nr(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.Z.wb(d.id,c.S):e=!0;c.Y.jb&&c.T&&c.T("vss_network_hint")&&c.Y.jb(!0);f(g,h)};
this.Ra(d.url,d.options);this.Z.set(d,this.S).then(function(g){d.id=g;e&&c.Z.wb(d.id,c.S)}).catch(function(g){rr(c,g)})}else this.Ra(a,b)};
k.Vb=function(){var a=this;if(!nr(this))throw cp("throttleSend");this.i||(this.i=this.Ba.ja(function(){var b;return w(function(c){if(1==c.h)return c.yield(a.Z.td("NEW",a.S),2);if(3!=c.h)return b=c.i,b?c.yield(qr(a,b),3):(a.ld(),c.return());a.i&&(a.i=0,a.Vb());c.h=0})},this.Rd))};
k.ld=function(){this.Ba.Fa(this.i);this.i=0};
function qr(a,b){var c,d;return w(function(e){switch(e.h){case 1:if(!nr(a))throw c=cp("immediateSend"),c;if(void 0===b.id){e.A(2);break}return e.yield(a.Z.He(b.id,a.S),3);case 3:(d=e.i)||a.xb(Error("The request cannot be found in the database."));case 2:if(sr(a,b,a.Jd)){e.A(4);break}a.xb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.A(5);break}return e.yield(a.Z.wb(b.id,a.S),5);case 5:return e.return();case 4:b.skipRetry||(b=tr(a,b));if(!b){e.A(0);break}if(!b.skipRetry||
void 0===b.id){e.A(8);break}return e.yield(a.Z.wb(b.id,a.S),8);case 8:a.Ra(b.url,b.options,!!b.skipRetry),e.h=0}})}
function tr(a,b){if(!nr(a))throw cp("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,l,m;return w(function(p){switch(p.h){case 1:g=ur(f);(h=vr(f))&&a.T&&a.T("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.T&&a.T("nwl_consider_error_code")&&g||a.T&&!a.T("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.qc)){p.A(2);break}if(!a.Y.vc){p.A(3);break}return p.yield(a.Y.vc(),3);case 3:if(a.Y.ta()){p.A(2);break}c(e,f);if(!a.T||!a.T("nwl_consider_error_code")||void 0===(null==(l=b)?void 0:l.id)){p.A(6);
break}return p.yield(a.Z.Xc(b.id,a.S,!1),6);case 6:return p.return();case 2:if(a.T&&a.T("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.qc)return p.return();a.potentialEsfErrorCounter++;if(void 0===(null==(m=b)?void 0:m.id)){p.A(8);break}return b.sendCount<a.Ld?p.yield(a.Z.Xc(b.id,a.S,!0,h?!1:void 0),12):p.yield(a.Z.wb(b.id,a.S),8);case 12:a.Ba.ja(function(){a.Y.ta()&&a.Vb()},a.Kd);
case 8:c(e,f),p.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.A(2):h.yield(a.Z.wb(b.id,a.S),2);a.Y.jb&&a.T&&a.T("vss_network_hint")&&a.Y.jb(!0);d(e,f);h.h=0})};
return b}
function sr(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function pr(a){if(!nr(a))throw cp("retryQueuedRequests");a.Z.td("QUEUED",a.S).then(function(b){b&&!sr(a,b,a.Hd)?a.Ba.ja(function(){return w(function(c){if(1==c.h)return void 0===b.id?c.A(2):c.yield(a.Z.Xc(b.id,a.S),2);pr(a);c.h=0})}):a.Y.ta()&&a.Vb()})}
function rr(a,b){a.Xd&&!a.Y.ta()?a.Xd(b):a.handleError(b)}
function nr(a){return!!a.S||a.ec}
function ur(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function vr(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var wr;
function xr(){if(wr)return wr();var a={};wr=kq("LogsDatabaseV2",{Db:(a.LogsRequestsStore={Lb:2},a),wc:!1,upgrade:function(b,c,d){c(2)&&rp(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),yp(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return wr()}
;function yr(a){return Kp(xr(),a)}
function zr(a,b){var c,d,e,f;return w(function(g){if(1==g.h)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(yr(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:O("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(tp(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=U();Ar(c);return g.return(f)})}
function Br(a,b){var c,d,e,f,g,h,l;return w(function(m){if(1==m.h)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},m.yield(yr(b),2);if(3!=m.h)return d=m.i,e=O("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,U()],h=IDBKeyRange.bound(f,g),l=void 0,m.yield(qp(d,["LogsRequestsStore"],{mode:"readwrite",ha:!0},function(p){return Dp(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(r){r.getValue()&&(l=r.getValue(),"NEW"===
a&&(l.status="QUEUED",r.update(l)))})}),3);
c.ticks.tc=U();Ar(c);return m.return(l)})}
function Cr(a,b){var c;return w(function(d){if(1==d.h)return d.yield(yr(b),2);c=d.i;return d.return(qp(c,["LogsRequestsStore"],{mode:"readwrite",ha:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",mp(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Dr(a,b,c,d){c=void 0===c?!0:c;var e;return w(function(f){if(1==f.h)return f.yield(yr(b),2);e=f.i;return f.return(qp(e,["LogsRequestsStore"],{mode:"readwrite",ha:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(l){return l?(l.status="NEW",c&&(l.sendCount+=1),void 0!==d&&(l.options.compress=d),mp(h.h.put(l,void 0)).then(function(){return l})):gp.resolve(void 0)})}))})}
function Er(a,b){var c;return w(function(d){if(1==d.h)return d.yield(yr(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Fr(a){var b,c;return w(function(d){if(1==d.h)return d.yield(yr(a),2);b=d.i;c=U()-2592E6;return d.yield(qp(b,["LogsRequestsStore"],{mode:"readwrite",ha:!0},function(e){return Ap(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Gr(){w(function(a){return a.yield(gq(),0)})}
function Ar(a){P("nwl_csi_killswitch")||Tq("networkless_performance",a,{sampleRate:1})}
;var Hr={},Ir=kq("ServiceWorkerLogsDatabase",{Db:(Hr.SWHealthLog={Lb:1},Hr),wc:!0,upgrade:function(a,b){b(1)&&yp(rp(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Jr(a){return Kp(Ir(),a)}
function Kr(a){var b,c;w(function(d){if(1==d.h)return d.yield(Jr(a),2);b=d.i;c=U()-2592E6;return d.yield(qp(b,["SWHealthLog"],{mode:"readwrite",ha:!0},function(e){return Ap(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Lr(a){var b;return w(function(c){if(1==c.h)return c.yield(Jr(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Mr={},Nr=0;function Or(a){var b=new Image,c=""+Nr++;Mr[c]=b;b.onload=b.onerror=function(){delete Mr[c]};
b.src=a}
;function Pr(){this.h=new Map;this.i=!1}
function Xr(){if(!Pr.h){var a=B("yt.networkRequestMonitor.instance")||new Pr;y("yt.networkRequestMonitor.instance",a);Pr.h=a}return Pr.h}
Pr.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Pr.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Pr.prototype.removeParams=function(a){return a.split("?")[0]};
Pr.prototype.removeParams=Pr.prototype.removeParams;Pr.prototype.isEndpointCFR=Pr.prototype.isEndpointCFR;Pr.prototype.requestComplete=Pr.prototype.requestComplete;Pr.getInstance=Xr;var as;function vs(){as||(as=new Co("yt.offline"));return as}
function ws(a){if(P("offline_error_handling")){var b=vs().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);vs().set("errors",b,2592E3,!0)}}
;function xs(){Af.call(this);var a=this;this.j=!1;this.i=Ni();this.i.listen("networkstatus-online",function(){if(a.j&&P("offline_error_handling")){var b=vs().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new S(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;$m(d)}vs().set("errors",{},2592E3,!0)}}})}
v(xs,Af);function ys(){if(!xs.h){var a=B("yt.networkStatusManager.instance")||new xs;y("yt.networkStatusManager.instance",a);xs.h=a}return xs.h}
k=xs.prototype;k.ta=function(){return this.i.ta()};
k.jb=function(a){this.i.i=a};
k.ye=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
k.pe=function(){this.j=!0};
k.listen=function(a,b){return this.i.listen(a,b)};
k.vc=function(a){a=Li(this.i,a);a.then(function(b){P("use_cfr_monitor")&&Xr().requestComplete("generate_204",b)});
return a};
xs.prototype.sendNetworkCheckRequest=xs.prototype.vc;xs.prototype.listen=xs.prototype.listen;xs.prototype.enableErrorFlushing=xs.prototype.pe;xs.prototype.getWindowStatus=xs.prototype.ye;xs.prototype.networkStatusHint=xs.prototype.jb;xs.prototype.isNetworkAvailable=xs.prototype.ta;xs.getInstance=ys;function zs(a){a=void 0===a?{}:a;Af.call(this);var b=this;this.i=this.o=0;this.j=ys();var c=B("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.uc?(this.uc=a.uc,c("networkstatus-online",function(){As(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){As(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Bf(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Bf(b,"publicytnetworkstatus-offline")})))}
v(zs,Af);zs.prototype.ta=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
zs.prototype.jb=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
zs.prototype.vc=function(a){var b=this,c;return w(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return P("skip_network_check_if_cfr")&&Xr().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.jb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ta())})):c?d.return(c(a)):d.return(!0)})};
function As(a,b){a.uc?a.i?(Oi.Fa(a.o),a.o=Oi.ja(function(){a.m!==b&&(Bf(a,b),a.m=b,a.i=U())},a.uc-(U()-a.i))):(Bf(a,b),a.m=b,a.i=U()):Bf(a,b)}
;var Bs;function Cs(){var a=mr.call;Bs||(Bs=new zs({Cg:!0,xg:!0}));a.call(mr,this,{Z:{ke:Fr,wb:Er,td:Br,He:Cr,Xc:Dr,set:zr},Y:Bs,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;an(new S(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else $m(b)},
xb:an,Ra:Ds,now:U,Xd:ws,Ba:Bo(),Tc:"publicytnetworkstatus-online",Sc:"publicytnetworkstatus-offline",kc:!0,ic:.1,qc:pn("potential_esf_error_limit",10),T:P,Pb:!(uo()&&Es())});this.j=new ji;P("networkless_immediately_drop_all_requests")&&Gr();hq("LogsDatabaseV2")}
v(Cs,mr);function Fs(){var a=B("yt.networklessRequestController.instance");a||(a=new Cs,y("yt.networklessRequestController.instance",a),P("networkless_logging")&&Xp().then(function(b){a.S=b;or(a);a.j.resolve();a.kc&&Math.random()<=a.ic&&a.S&&Kr(a.S);P("networkless_immediately_drop_sw_health_store")&&Gs(a)}));
return a}
Cs.prototype.writeThenSend=function(a,b){b||(b={});uo()||(this.h=!1);mr.prototype.writeThenSend.call(this,a,b)};
Cs.prototype.sendThenWrite=function(a,b,c){b||(b={});uo()||(this.h=!1);mr.prototype.sendThenWrite.call(this,a,b,c)};
Cs.prototype.sendAndWrite=function(a,b){b||(b={});uo()||(this.h=!1);mr.prototype.sendAndWrite.call(this,a,b)};
Cs.prototype.awaitInitialization=function(){return this.j.promise};
function Gs(a){var b;w(function(c){if(!a.S)throw b=cp("clearSWHealthLogsDb"),b;return c.return(Lr(a.S).catch(function(d){a.handleError(d)}))})}
function Ds(a,b,c){P("use_cfr_monitor")&&Hs(a,b);if(P("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(U())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;if(a)if(e)En(a,void 0,"POST",e);else if(O("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))En(a,void 0,"GET","",void 0,void 0,f);else{b:{try{var g=new eb({url:a});if(g.j&&g.i||
g.l){var h=Ac(Bc(5,a)),l;if(!(l=!h||!h.endsWith("/aclk"))){var m=a.search(Mc),p=Lc(a,0,"ri",m);if(0>p)var r=null;else{var z=a.indexOf("&",p);if(0>z||z>m)z=m;r=decodeURIComponent(a.slice(p+3,-1!==z?z:0).replace(/\+/g," "))}l="1"!==r}var u=!l;break b}}catch(C){}u=!1}if(u){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var A=!0;break b}}catch(C){}A=!1}c=A?!0:!1}else c=!1;c||Or(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),
ar(a,b.postBody,b,Bn)):ar(a,JSON.stringify(b.postParams),b,Jn):Bn(a,b)}
function Hs(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Xr().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Xr().requestComplete(a,!0);d(e,f)}}
function Es(){return"www.youtube-nocookie.com"!==Cc(document.location.toString())}
;var Is=!1,Js=x.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Is};y("ytNetworklessLoggingInitializationOptions",Js);function Ks(){var a;w(function(b){if(1==b.h)return b.yield(Xp(),2);a=b.i;if(!a||!uo()&&!P("nwl_init_require_datasync_id_killswitch")||!Es())return b.A(0);Is=!0;Js.isNwlInitialized=Is;return b.yield(Fs().awaitInitialization(),0)})}
;function Ls(a){var b=this;this.config_=null;a?this.config_=a:vq()&&(this.config_=wq());xo(function(){kr(b)},5E3)}
Ls.prototype.isReady=function(){!this.config_&&vq()&&(this.config_=wq());return!!this.config_};
function lr(a,b,c,d){function e(A){A=void 0===A?!1:A;var C;if(d.retry&&"www.youtube-nocookie.com"!=h&&(A||P("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(C=ir(b,c,m,l)),C)){var D=g.onSuccess,N=g.onFetchSuccess;g.onSuccess=function(T,ha){jr(C);D(T,ha)};
c.onFetchSuccess=function(T,ha){jr(C);N(T,ha)}}try{if(A&&d.retry&&!d.Cd.bypassNetworkless)g.method="POST",d.Cd.writeThenSend?Fs().writeThenSend(u,g):Fs().sendAndWrite(u,g);
else if(d.compress)if(g.postBody){var R=g.postBody;"string"!==typeof R&&(R=JSON.stringify(g.postBody));ar(u,R,g,Bn)}else ar(u,JSON.stringify(g.postParams),g,Jn);else P("web_all_payloads_via_jspb")?Bn(u,g):Jn(u,g)}catch(T){if("InvalidAccessError"==T.name)C&&(jr(C),C=0),an(Error("An extension is blocking network request."));else throw T;}C&&xo(function(){kr(a)},5E3)}
!O("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&an(new S("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new S("innertube xhrclient not ready",b,c,d);$m(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(A,C){if(d.onSuccess)d.onSuccess(C)},
onFetchSuccess:function(A){if(d.onSuccess)d.onSuccess(A)},
onError:function(A,C){if(d.onError)d.onError(C)},
onFetchError:function(A){if(d.onError)d.onError(A)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.De)&&(h=f);var l=a.config_.Fe||!1,m=Fq(l,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&l&&(g.headers["x-origin"]=window.location.origin);var p="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,r={alt:"json"},z=a.config_.Ee&&f;z=z&&f.startsWith("Bearer");z||(r.key=a.config_.innertubeApiKey);var u=kn(""+h+p,r||{},!0);(B("ytNetworklessLoggingInitializationOptions")?
Js.isNwlInitialized:Is)?Vp().then(function(A){e(A)}):e(!1)}
;var Ms=0,Ns=id?"webkit":hd?"moz":fd?"ms":ed?"o":"";y("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++Ms});var Os={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Ps(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Os||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Qs(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Ps.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Ps.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Ps.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var rb=x.ytEventsEventsListeners||{};y("ytEventsEventsListeners",rb);var Rs=x.ytEventsEventsCounter||{count:0};y("ytEventsEventsCounter",Rs);
function Ss(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return qb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ua(e[4])&&Ua(d)&&vb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Ts=gb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Us(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Ss(a,b,c,d);if(e)return e;e=++Rs.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Ps(h);if(!Kf(h.relatedTarget,function(l){return l==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Ps(h);
h.currentTarget=a;return c.call(a,h)};
g=Zm(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Ts()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);rb[e]=[a,b,c,g,d];return e}
function Vs(a){a&&("string"==typeof a&&(a=[a]),ib(a,function(b){if(b in rb){var c=rb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Ts()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete rb[b]}}))}
;function Ws(a){this.F=a;this.i=null;this.m=0;this.u=null;this.o=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.R=Us(window,"mousemove",$a(this.aa,this));a=$a(this.M,this);"function"===typeof a&&(a=Zm(a));this.ba=window.setInterval(a,25)}
bb(Ws,J);Ws.prototype.aa=function(a){void 0===a.h&&Qs(a);var b=a.h;void 0===a.i&&Qs(a);this.i=new Gf(b,a.i)};
Ws.prototype.M=function(){if(this.i){var a=U();if(0!=this.m){var b=this.u,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.o)/this.o)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.F();this.o=d}this.m=a;this.u=this.i;this.l=(this.l+1)%4}};
Ws.prototype.P=function(){window.clearInterval(this.ba);Vs(this.R)};var Xs=new Set([174,173,175]),Ys={};
function Zs(a){var b=void 0===a?{}:a;a=void 0===b.Qe?!1:b.Qe;b=void 0===b.qe?!0:b.qe;if(null==B("_lact",window)){var c=parseInt(O("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;y("_lact",c,window);y("_fact",c,window);-1==c&&$s();Us(document,"keydown",$s);Us(document,"keyup",$s);Us(document,"mousedown",$s);Us(document,"mouseup",$s);a?Us(window,"touchmove",function(){at("touchmove",200)},{passive:!0}):(Us(window,"resize",function(){at("resize",200)}),b&&Us(window,"scroll",function(){at("scroll",
200)}));
new Ws(function(){at("mouse",100)});
Us(document,"touchstart",$s,{passive:!0});Us(document,"touchend",$s,{passive:!0})}}
function at(a,b){Ys[a]||(Ys[a]=!0,Oi.ja(function(){$s();Ys[a]=!1},b))}
function $s(a){var b;if(null!=(b=B("experiment.flags",window))&&b.enable_lact_reset_by_volume_buttons||!Xs.has(null==a?void 0:a.keyCode))null==B("_lact",window)&&Zs(),a=Date.now(),y("_lact",a,window),-1==B("_fact",window)&&y("_fact",a,window),(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function bt(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var ct=x.ytPubsubPubsubInstance||new kj,dt=x.ytPubsubPubsubSubscribedKeys||{},et=x.ytPubsubPubsubTopicToKeys||{},ft=x.ytPubsubPubsubIsSynchronous||{};function gt(a,b){var c=ht();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){dt[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{ft[a]?f():vn(f,0)}catch(g){$m(g)}},void 0);
dt[d]=!0;et[a]||(et[a]=[]);et[a].push(d);return d}return 0}
function jt(a){var b=ht();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),ib(a,function(c){b.unsubscribeByKey(c);delete dt[c]}))}
function kt(a,b){var c=ht();c&&c.publish.apply(c,arguments)}
function lt(a){var b=ht();if(b)if(b.clear(a),a)mt(a);else for(var c in et)mt(c)}
function ht(){return x.ytPubsubPubsubInstance}
function mt(a){et[a]&&(a=et[a],ib(a,function(b){dt[b]&&delete dt[b]}),a.length=0)}
kj.prototype.subscribe=kj.prototype.subscribe;kj.prototype.unsubscribeByKey=kj.prototype.Jb;kj.prototype.publish=kj.prototype.eb;kj.prototype.clear=kj.prototype.clear;y("ytPubsubPubsubInstance",ct);y("ytPubsubPubsubTopicToKeys",et);y("ytPubsubPubsubIsSynchronous",ft);y("ytPubsubPubsubSubscribedKeys",dt);var nt=Symbol("injectionDeps");function ot(a){this.name=a}
ot.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function pt(a){this.key=a}
function qt(){this.h=new Map;this.i=new Map}
qt.prototype.resolve=function(a){return a instanceof pt?rt(this,a.key,[],!0):rt(this,a,[])};
function rt(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Ud)var e=d.Ud;else if(d.sf)e=d[nt]?st(a,d[nt],c):[],e=d.sf.apply(d,ja(e));else if(d.Td){e=d.Td;var f=e[nt]?st(a,e[nt],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ja(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Lg||a.i.set(b,e);return e}
function st(a,b,c){return b?b.map(function(d){return d instanceof pt?rt(a,d.key,c,!0):rt(a,d,c)}):[]}
;var tt;function ut(){tt||(tt=new qt);return tt}
;function vt(){this.store={};this.h={}}
vt.prototype.storePayload=function(a,b){a=wt(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
vt.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=xt(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ja(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ja(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ja(this.smartExtractMatchingEntries(a))));return c};
vt.prototype.extractMatchingEntries=function(a){a=xt(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ja(this.store[a[c]])),delete this.store[a[c]]);return b};
vt.prototype.getSequenceCount=function(a){a=xt(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function xt(a,b){var c=wt(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&wt(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(zt(b.auth,g[0])){var h=b.isJspb;zt(void 0===h?"undefined":h?"true":"false",g[1])&&zt(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),zt(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function zt(a,b){return void 0===a||"undefined"===a?!0:a===b}
vt.prototype.getSequenceCount=vt.prototype.getSequenceCount;vt.prototype.extractMatchingEntries=vt.prototype.extractMatchingEntries;vt.prototype.smartExtractMatchingEntries=vt.prototype.smartExtractMatchingEntries;vt.prototype.storePayload=vt.prototype.storePayload;function wt(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function At(a,b){if(a)return a[b.name]}
;var Bt=pn("initial_gel_batch_timeout",2E3),Ct=pn("gel_queue_timeout_max_ms",6E4),Dt=Math.pow(2,16)-1,Et=void 0;function Ft(){this.j=this.h=this.i=0}
var Gt=new Ft,Ht=new Ft,It,Jt=!0,Kt=x.ytLoggingTransportTokensToCttTargetIds_||{};y("ytLoggingTransportTokensToCttTargetIds_",Kt);var Lt=x.ytLoggingTransportTokensToJspbCttTargetIds_||{};y("ytLoggingTransportTokensToJspbCttTargetIds_",Lt);var Mt={};function Nt(){var a=B("yt.logging.ims");a||(a=new vt,y("yt.logging.ims",a));return a}
function Ot(a,b){if("log_event"===a.endpoint){Pt(a);var c=Qt(a);Mt[c]=!0;var d={cttAuthInfo:c,isJspb:!1};Nt().storePayload(d,a.payload);Rt(b,c,!1,d)}}
function St(a,b){if("log_event"===a.endpoint){Pt(void 0,a);var c=Qt(a,!0);Mt[c]=!0;var d={cttAuthInfo:c,isJspb:!0};Nt().storePayload(d,a.payload.toJSON());Rt(b,c,!0,d)}}
function Rt(a,b,c,d){c=void 0===c?!1:c;a&&(Et=new a);a=pn("tvhtml5_logging_max_batch_ads_fork")||pn("web_logging_max_batch")||100;var e=U(),f=c?Ht.j:Gt.j,g=0;d&&(g=Nt().getSequenceCount(d));g>=a?It||(It=Tt(function(){Ut({writeThenSend:!0},P("flush_only_full_queue")?b:void 0,c);It=void 0},0)):10<=e-f&&(Vt(c),c?Ht.j=e:Gt.j=e)}
function Wt(a,b){if("log_event"===a.endpoint){Pt(a);var c=Qt(a),d=new Map;d.set(c,[a.payload]);b&&(Et=new b);return new Wf(function(e,f){Et&&Et.isReady()?Xt(d,Et,e,f,{bypassNetworkless:!0},!0):e()})}}
function Yt(a,b){if("log_event"===a.endpoint){Pt(void 0,a);var c=Qt(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(Et=new b);return new Wf(function(e){Et&&Et.isReady()?Zt(d,Et,e,{bypassNetworkless:!0},!0):e()})}}
function Qt(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Em;c.videoId?d.setVideoId(c.videoId):c.playlistId&&oe(d,2,Fm,c.playlistId);Lt[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Kt[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Ut(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new Wf(function(d,e){c?($t(Ht.i),$t(Ht.h),Ht.h=0):($t(Gt.i),$t(Gt.h),Gt.h=0);if(Et&&Et.isReady()){var f=a,g=c,h=Et;f=void 0===f?{}:f;g=void 0===g?!1:g;var l=new Map,m=new Map;if(void 0!==b)g?(e=Nt().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),l.set(b,e),Zt(l,h,d,f)):(l=Nt().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),m.set(b,l),Xt(m,h,d,e,f));else if(g){e=t(Object.keys(Mt));for(g=e.next();!g.done;g=e.next())m=g.value,g=Nt().extractMatchingEntries({isJspb:!0,
cttAuthInfo:m}),0<g.length&&l.set(m,g),delete Mt[m];Zt(l,h,d,f)}else{l=t(Object.keys(Mt));for(g=l.next();!g.done;g=l.next()){g=g.value;var p=Nt().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0<p.length&&m.set(g,p);delete Mt[g]}Xt(m,h,d,e,f)}}else Vt(c),d()})}
function Vt(a){a=void 0===a?!1:a;if(P("web_gel_timeout_cap")&&(!a&&!Gt.h||a&&!Ht.h)){var b=Tt(function(){Ut({writeThenSend:!0},void 0,a)},Ct);
a?Ht.h=b:Gt.h=b}$t(a?Ht.i:Gt.i);b=O("LOGGING_BATCH_TIMEOUT",pn("web_gel_debounce_ms",1E4));P("shorten_initial_gel_batch_timeout")&&Jt&&(b=Bt);b=Tt(function(){Ut({writeThenSend:!0},void 0,a)},b);
a?Ht.i=b:Gt.i=b}
function Xt(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(U()),h=a.size,l={};a=t(a);for(var m=a.next();!m.done;l={Wb:l.Wb,ab:l.ab,Hb:l.Hb,Yb:l.Yb,Xb:l.Xb},m=a.next()){var p=t(m.value);m=p.next().value;p=p.next().value;l.ab=xb({context:xq(b.config_||wq())});if(!Ta(p)&&!P("throw_err_when_logevent_malformed_killswitch")){d();break}l.ab.events=p;(p=Kt[m])&&au(l.ab,m,p);delete Kt[m];l.Hb="visitorOnlyApprovedKey"===m;bu(l.ab,g,l.Hb);cu(e);l.Yb=function(r){P("update_log_event_config")&&Oi.ja(function(){return w(function(z){return z.yield(du(r),
0)})});
h--;h||c()};
l.Wb=0;l.Xb=function(r){return function(){r.Wb++;if(e.bypassNetworkless&&1===r.Wb)try{lr(b,"log_event",r.ab,eu({writeThenSend:!0},r.Hb,r.Yb,r.Xb,f)),Jt=!1}catch(z){$m(z),d()}h--;h||c()}}(l);
try{lr(b,"log_event",l.ab,eu(e,l.Hb,l.Yb,l.Xb,f)),Jt=!1}catch(r){$m(r),d()}}}
function Zt(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(U()),g=a.size,h=new Map([].concat(ja(a)));h=t(h);for(var l=h.next();!l.done;l=h.next()){var m=t(l.value).next().value,p=a.get(m);l=new Gm;var r=Eq(b.config_||wq());H(l,nl,1,r);p=p?fu(p):[];p=t(p);for(r=p.next();!r.done;r=p.next())ve(l,3,Am,r.value);(p=Lt[m])&&gu(l,m,p);delete Lt[m];m="visitorOnlyApprovedKey"===m;hu(l,f,m);cu(d);p={startTime:U(),ticks:{},infos:{}};l=l.serialize();p.ticks.geljspc=U();P("log_jspb_serialize_latency")&&Tq("gel_jspb_serialize",
p,{sampleRate:.1});m=eu(d,m,function(z){P("update_log_event_config")&&Oi.ja(function(){return w(function(u){return u.yield(du(z),0)})});
g--;g||c()},function(){g--;
g||c()},e);
m.headers["Content-Type"]="application/json+protobuf";m.postBodyFormat="JSPB";m.postBody=l;lr(b,"log_event","",m);Jt=!1}}
function cu(a){P("always_send_and_write")&&(a.writeThenSend=!1)}
function eu(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,Cd:a,dangerousLogToVisitorSession:b,ug:!!e,headers:{},postBodyFormat:"",postBody:"",compress:P("compress_gel")||P("compress_gel_lr")};iu()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));return a}
function bu(a,b,c){iu()||(a.requestTimeMs=String(b));P("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=O("EVENT_ID"))&&(c=ju(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function hu(a,b,c){iu()||G(a,2,b);if(!c&&(b=O("EVENT_ID"))){c=ju();var d=new Dm;G(d,1,b);G(d,2,c);H(a,Dm,5,d)}}
function ju(){var a=O("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Dt/2));a++;a>Dt&&(a=1);Vm("BATCH_CLIENT_COUNTER",a);return a}
function au(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function gu(a,b,c){var d=1===pe(c,Fm)?1:-1;if(ie(c,d))d=1;else if(c.getPlaylistId())d=2;else return;H(a,Em,4,c);a=qe(a,nl,1)||new nl;c=qe(a,ll,3)||new ll;var e=new kl;G(e,2,b);G(e,1,d);ve(c,12,kl,e);H(a,ll,3,c)}
function fu(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new Am(a[c]))}catch(d){$m(new S("Transport failed to deserialize "+String(a[c])))}return b}
function Pt(a,b){if(B("yt.logging.transport.enableScrapingForTest")){var c=B("yt.logging.transport.scrapedPayloadsForTesting"),d=B("yt.logging.transport.payloadToScrape");b&&(b=B("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);if(d&&1<=d.length)for(b=0;b<d.length;b++)if(a&&a.payload[d[b]]){var e=void 0;c.push((null==(e=a)?void 0:e.payload)[d[b]])}y("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function iu(){return P("use_request_time_ms_header")||P("lr_use_request_time_ms_header")}
function Tt(a,b){return P("transport_use_scheduler")?xo(a,b):vn(a,b)}
function $t(a){P("transport_use_scheduler")?Oi.Fa(a):window.clearTimeout(a)}
function du(a){var b,c,d,e,f,g,h,l,m,p;return w(function(r){return 1==r.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=At(d,Sk),g=null==(f=d)?void 0:f.hotHashData,h=At(d,Rk),m=null==(l=d)?void 0:l.coldHashData,(p=ut().resolve(new pt(sq)))?g?e?r.yield(tq(p,g,e),2):r.yield(tq(p,g),2):r.A(2):r.return()):m?h?r.yield(uq(p,m,h),0):r.yield(uq(p,m),0):r.A(0)})}
;var ku=x.ytLoggingGelSequenceIdObj_||{};y("ytLoggingGelSequenceIdObj_",ku);
function lu(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||U());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;P("enable_unknown_lact_fix_on_html5")&&Zs();a=bt();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};P("log_sequence_info_on_gel_web")&&d.sequenceGroup&&(a=e.context,b=d.sequenceGroup,b={index:mu(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete ku[d.sequenceGroup]);(d.sendIsolatedPayload?Wt:Ot)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)}
function nu(a){Ut(void 0,void 0,void 0===a?!1:a)}
function mu(a){ku[a]=a in ku?ku[a]+1:0;return ku[a]}
;var ou=[];function Lo(a,b,c){c=void 0===c?{}:c;var d=Ls;O("ytLoggingEventsDefaultDisabled",!1)&&Ls===Ls&&(d=null);P("web_all_payloads_via_jspb")?(c.timestamp||(c.timestamp=U()),ou.push({payloadName:a,payload:b,options:c})):lu(a,b,d,c)}
;var pu=x.ytLoggingGelSequenceIdObj_||{};y("ytLoggingGelSequenceIdObj_",pu);
function qu(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||U());G(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=bt();d=new zm;G(d,1,c.timestamp||!isFinite(e)?-1:e);if(P("log_sequence_info_on_gel_web")&&c.sequenceGroup){e=c.sequenceGroup;var f=mu(e),g=new ym;G(g,2,f);G(g,1,e);H(d,ym,3,g);c.endOfSequence&&delete pu[c.sequenceGroup]}H(a,zm,33,d);(c.sendIsolatedPayload?Yt:St)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},b)}
;function ru(a,b){b=void 0===b?{}:b;var c=!1;O("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);qu(a,c?null:Ls,b)}
;function su(a,b,c){var d=new Am;te(d,mm,72,Bm,a);c?qu(d,c,b):ru(d,b)}
function tu(a,b,c){var d=new Am;te(d,lm,73,Bm,a);c?qu(d,c,b):ru(d,b)}
function uu(a,b,c){var d=new Am;te(d,km,78,Bm,a);c?qu(d,c,b):ru(d,b)}
function vu(a,b,c){var d=new Am;te(d,nm,208,Bm,a);c?qu(d,c,b):ru(d,b)}
function wu(a,b,c){var d=new Am;te(d,fm,156,Bm,a);c?qu(d,c,b):ru(d,b)}
function xu(a,b,c){var d=new Am;te(d,hm,215,Bm,a);c?qu(d,c,b):ru(d,b)}
;var yu=new Set,zu=0,Au=0,Bu=0,Cu=[],Du=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Ko(a){Eu(a)}
function Fu(a){Eu(a,"WARNING")}
function Eu(a,b,c,d,e,f,g){f=void 0===f?{}:f;f.name=c||O("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||O("INNERTUBE_CONTEXT_CLIENT_VERSION");var h=f,l=void 0===b?"ERROR":b,m=void 0===g?!1:g;l=void 0===l?"ERROR":l;m=void 0===m?!1:m;if(a){a.hasOwnProperty("level")&&a.level&&(l=a.level);if(P("console_log_js_exceptions")){var p=[];p.push("Name: "+a.name);p.push("Message: "+a.message);a.hasOwnProperty("params")&&p.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&p.push("Error args: "+
JSON.stringify(a.args));p.push("File name: "+a.fileName);p.push("Stacktrace: "+a.stack);var r=p.join("\n");window.console.log(r,a)}if(!(5<=zu)){var z=Cu,u=Te(a),A=u.message||"Unknown Error",C=u.name||"UnknownError",D=u.stack||a.i||"Not available";if(D.startsWith(C+": "+A)){var N=D.split("\n");N.shift();D=N.join("\n")}var R=u.lineNumber||"Not available",T=u.fileName||"Not available",ha=D,ba=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var sa=0;sa<a.args.length&&!(ba=Tn(a.args[sa],"params."+
sa,h,ba),500<=ba);sa++);else if(a.hasOwnProperty("params")&&a.params){var Sa=a.params;if("object"===typeof a.params)for(var Ea in Sa){if(Sa[Ea]){var Fa="params."+Ea,za=Vn(Sa[Ea]);h[Fa]=za;ba+=Fa.length+za.length;if(500<ba)break}}else h.params=Vn(Sa)}if(z.length)for(var ra=0;ra<z.length&&!(ba=Tn(z[ra],"params.context."+ra,h,ba),500<=ba);ra++);navigator.vendor&&!h.hasOwnProperty("vendor")&&(h["device.vendor"]=navigator.vendor);var L={message:A,name:C,lineNumber:R,fileName:T,stack:ha,params:h,sampleWeight:1},
uf=Number(a.columnNumber);isNaN(uf)||(L.lineNumber=L.lineNumber+":"+uf);if("IGNORED"===a.level)var Xc=0;else a:{for(var vf=Pn(),oa=t(vf.Wa),wf=oa.next();!wf.done;wf=oa.next()){var Ph=wf.value;if(L.message&&L.message.match(Ph.Dg)){Xc=Ph.weight;break a}}for(var Qr=t(vf.Sa),zl=Qr.next();!zl.done;zl=Qr.next()){var Rr=zl.value;if(Rr.callback(L)){Xc=Rr.weight;break a}}Xc=1}L.sampleWeight=Xc;for(var Sr=t(Kn),Al=Sr.next();!Al.done;Al=Sr.next()){var Bl=Al.value;if(Bl.pc[L.name])for(var Tr=t(Bl.pc[L.name]),
Cl=Tr.next();!Cl.done;Cl=Tr.next()){var Ur=Cl.value,Qh=L.message.match(Ur.regexp);if(Qh){L.params["params.error.original"]=Qh[0];for(var Dl=Ur.groups,Vr={},Wd=0;Wd<Dl.length;Wd++)Vr[Dl[Wd]]=Qh[Wd+1],L.params["params.error."+Dl[Wd]]=Qh[Wd+1];L.message=Bl.Qc(Vr);break}}}L.params||(L.params={});var Wr=Pn();L.params["params.errorServiceSignature"]="msg="+Wr.Wa.length+"&cb="+Wr.Sa.length;L.params["params.serviceWorker"]="false";x.document&&x.document.querySelectorAll&&(L.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));
Eb("sample").constructor!==Cb&&(L.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(L);if(0!==L.sampleWeight&&!yu.has(L.message)){if(m&&P("web_enable_error_204"))Gu(void 0===l?"ERROR":l,L);else{var Yc=l;Yc=void 0===Yc?"ERROR":Yc;if("ERROR"===Yc){Qn.eb("handleError",L);if(P("record_app_crashed_web")&&0===Bu&&1===L.sampleWeight)if(Bu++,P("errors_via_jspb")){var Xy=new Xl;var Yr=G(Xy,1,1);if(!P("report_client_error_with_app_crash_ks")){var Yy=new Vl,Zy=new Ul,
$y=new Tl,az=new Sl;var bz=G(az,1,L.message);var cz=H($y,Sl,3,bz);var dz=H(Zy,Tl,5,cz);var ez=H(Yy,Ul,9,dz);H(Yr,Vl,4,ez)}var Zr=new Am;te(Zr,Xl,20,Bm,Yr);ru(Zr)}else{var $r={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};P("report_client_error_with_app_crash_ks")||($r.systemHealth={crashData:{clientError:{logMessage:{message:L.message}}}});Lo("appCrashed",$r)}Au++}else"WARNING"===Yc&&Qn.eb("handleWarning",L);if(P("kevlar_gel_error_routing"))a:{var xf=Yc;if(P("errors_via_jspb")){if(Hu())var bs=void 0;else{var Xd=
new Pl;G(Xd,1,L.stack);L.fileName&&G(Xd,4,L.fileName);var Vb=L.lineNumber&&L.lineNumber.split?L.lineNumber.split(":"):[];0!==Vb.length&&(1!==Vb.length||isNaN(Number(Vb[0]))?2!==Vb.length||isNaN(Number(Vb[0]))||isNaN(Number(Vb[1]))||(we(Xd,2,Number(Vb[0])),we(Xd,3,Number(Vb[1]))):we(Xd,2,Number(Vb[0])));var Zc=new Sl;G(Zc,1,L.message);G(Zc,3,L.name);we(Zc,6,L.sampleWeight);"ERROR"===xf?G(Zc,2,2):"WARNING"===xf?G(Zc,2,1):G(Zc,2,0);var El=new Ql;G(El,1,!0);te(El,Pl,3,Rl,Xd);var uc=new xl;G(uc,3,window.location.href);
for(var cs=O("FEXP_EXPERIMENTS",[]),Fl=0;Fl<cs.length;Fl++){var fz=cs[Fl];ce(uc);ne(uc,5,2,!1,!1).push(fz)}var Gl=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Wm()&&Gl)for(var ds=t(Object.keys(Gl)),$c=ds.next();!$c.done;$c=ds.next()){var es=$c.value,Hl=new wl;G(Hl,1,es);G(Hl,2,String(Gl[es]));ve(uc,4,wl,Hl)}var Il=L.params;if(Il){var gs=t(Object.keys(Il));for($c=gs.next();!$c.done;$c=gs.next()){var hs=$c.value,Jl=new wl;G(Jl,1,"client."+hs);G(Jl,2,String(Il[hs]));ve(uc,4,wl,Jl)}}var is=O("SERVER_NAME"),
js=O("SERVER_VERSION");if(is&&js){var Kl=new wl;G(Kl,1,"server.name");G(Kl,2,is);ve(uc,4,wl,Kl);var Ll=new wl;G(Ll,1,"server.version");G(Ll,2,js);ve(uc,4,wl,Ll)}var Rh=new Tl;H(Rh,xl,1,uc);H(Rh,Ql,2,El);H(Rh,Sl,3,Zc);bs=Rh}var ks=bs;if(!ks)break a;var ls=new Am;te(ls,Tl,163,Bm,ks);ru(ls)}else{if(Hu())var ms=void 0;else{var yf={stackTrace:L.stack};L.fileName&&(yf.filename=L.fileName);var Wb=L.lineNumber&&L.lineNumber.split?L.lineNumber.split(":"):[];0!==Wb.length&&(1!==Wb.length||isNaN(Number(Wb[0]))?
2!==Wb.length||isNaN(Number(Wb[0]))||isNaN(Number(Wb[1]))||(yf.lineNumber=Number(Wb[0]),yf.columnNumber=Number(Wb[1])):yf.lineNumber=Number(Wb[0]));var Ml={level:"ERROR_LEVEL_UNKNOWN",message:L.message,errorClassName:L.name,sampleWeight:L.sampleWeight};"ERROR"===xf?Ml.level="ERROR_LEVEL_ERROR":"WARNING"===xf&&(Ml.level="ERROR_LEVEL_WARNNING");var gz={isObfuscated:!0,browserStackInfo:yf},Yd={pageUrl:window.location.href,kvPairs:[]};O("FEXP_EXPERIMENTS")&&(Yd.experimentIds=O("FEXP_EXPERIMENTS"));var Nl=
O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Wm()&&Nl)for(var ns=t(Object.keys(Nl)),ad=ns.next();!ad.done;ad=ns.next()){var ps=ad.value;Yd.kvPairs.push({key:ps,value:String(Nl[ps])})}var Ol=L.params;if(Ol){var qs=t(Object.keys(Ol));for(ad=qs.next();!ad.done;ad=qs.next()){var rs=ad.value;Yd.kvPairs.push({key:"client."+rs,value:String(Ol[rs])})}}var ss=O("SERVER_NAME"),ts=O("SERVER_VERSION");ss&&ts&&(Yd.kvPairs.push({key:"server.name",value:ss}),Yd.kvPairs.push({key:"server.version",value:ts}));
ms={errorMetadata:Yd,stackTrace:gz,logMessage:Ml}}var us=ms;if(!us)break a;Lo("clientError",us)}if("ERROR"===xf||P("errors_flush_gel_always_killswitch"))b:{if(P("web_fp_via_jspb")&&(nu(!0),!P("web_fp_via_jspb_and_json")))break b;nu()}}P("suppress_error_204_logging")||Gu(Yc,L)}try{yu.add(L.message)}catch(YA){}zu++}}}}
function Hu(){for(var a=t(Du),b=a.next();!b.done;b=a.next())if(Ro(b.value.toLowerCase()))return!0;return!1}
function Gu(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:O("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=t(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=t(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=O("SERVER_NAME");b=O("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Bn(O("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function Iu(a){var b=Na.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ja(b))}
;function Ju(){this.register=new Map}
function Ku(a){a=t(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Gg("ABORTED")}
Ju.prototype.clear=function(){Ku(this);this.register.clear()};
var Lu=new Ju;var Mu=Date.now().toString();function Nu(){for(var a=Array(16),b=0;16>b;b++){for(var c=Date.now(),d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(256*Math.random())}if(Mu)for(b=1,c=0;c<Mu.length;c++)a[b%16]=a[b%16]^a[(b-1)%16]/4^Mu.charCodeAt(c),b++;return a}
function Ou(){if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];return a}catch(d){}return Nu()}
function Pu(){for(var a=Ou(),b=[],c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")}
;var Qu=x.ytLoggingDocDocumentNonce_;Qu||(Qu=Pu(),y("ytLoggingDocDocumentNonce_",Qu));var Ru=Qu;var Su={Gf:0,Ef:1,Ff:2,hg:3,Hf:4,mg:5,ig:6,lg:7,jg:8,kg:9,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH"};function Tu(a){this.h=a}
function Uu(a){return new Tu({trackingParams:a})}
Tu.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
Tu.prototype.getAsJspb=function(){var a=new Zl;if(void 0!==this.h.trackingParams){var b=this.h.trackingParams;if(null!=b)if("string"===typeof b)b=b?new Nd(b,Kd):Ld||(Ld=new Nd(null,Kd));else if(b.constructor!==Nd)if(Jd(b))b instanceof Uint8Array||Array.isArray(b),b=b.length?new Nd(new Uint8Array(b),Kd):Ld||(Ld=new Nd(null,Kd));else throw Error();G(a,1,b)}else void 0!==this.h.veType&&we(a,2,this.h.veType),void 0!==this.h.veCounter&&we(a,6,this.h.veCounter),void 0!==this.h.elementIndex&&we(a,3,this.h.elementIndex),
this.h.isCounterfactual&&G(a,5,!0);void 0!==this.h.dataElement&&(b=this.h.dataElement.getAsJspb(),H(a,Zl,7,b));void 0!==this.h.youtubeData&&H(a,Yk,8,this.h.jspbYoutubeData);return a};
Tu.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Tu.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function Vu(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function Wu(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Xu(a){return O(Wu(void 0===a?0:a))}
y("yt_logging_screen.getRootVeType",Xu);function Yu(a){return(a=Xu(void 0===a?0:a))?new Tu({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function Zu(){var a=O("csn-to-ctt-auth-info");a||(a={},Vm("csn-to-ctt-auth-info",a));return a}
function $u(a){a=O(Vu(void 0===a?0:a));if(!a&&!O("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
y("yt_logging_screen.getCurrentCsn",$u);function av(a){for(var b=t(Object.values(Su)),c=b.next();!c.done;c=b.next())if($u(c.value)===a)return!0;return!1}
function bv(a,b,c){var d=Zu();(c=$u(c))&&delete d[c];b&&(d[a]=b)}
function cv(a){return Zu()[a]}
y("yt_logging_screen.getCttAuthInfo",cv);function dv(a,b,c,d){c=void 0===c?0:c;if(a!==O(Vu(c))||b!==O(Wu(c)))if(bv(a,d,c),Vm(Vu(c),a),Vm(Wu(c),b),b=function(){setTimeout(function(){if(a)if(P("web_time_via_jspb")){var e=new $l;G(e,1,Ru);G(e,2,a);var f=new Am;te(f,$l,111,Bm,e);ru(f)}else Lo("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Ru,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()}
y("yt_logging_screen.setCurrentScreen",dv);var ev=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};y("yt.msgs_",ev);function fv(a){Qm(ev,arguments)}
;var gv=[3611,27686,85013,23462,157557,42016,26926,51236,79148,50160,77504,153587,87907,18630,177018,177023,54445,80935,152172,105675,150723,37521,147285,47786,98349,168271,168954,168277,168273,168270,123695,6827,29434,171388,7282,124448,32276,76278,147868,147869,93911,106531,177843,27259,27262,27263,21759,160866,177957,171243,160789,171244,171241,171245,171242,177958,177565,175492,175493,175494,175495,175496,175497,38408,175498,175503,175504,175505,175506,175507,175508,80637,68727,68728,80353,80356,
74610,45707,83962,83970,46713,166591,89711,74612,179607,155792,93265,74611,131380,128979,139311,128978,131391,105350,139312,134800,131392,113533,93252,99357,94521,114252,113532,94522,94583,88E3,139580,93253,93254,94387,94388,93255,97424,72502,110111,76019,117092,117093,89431,110466,77240,60508,148123,148124,137401,137402,137046,73393,113534,92098,131381,84517,83759,162711,162712,80357,86113,72598,168413,72733,107349,124275,118203,133275,160157,152569,156651,133274,160159,160158,133272,133273,133276,
144507,143247,175994,156652,143248,143249,143250,143251,156653,144401,117431,133797,153964,128572,133405,117429,117430,177950,174734,177951,117432,173996,173995,174953,173994,173997,120080,117259,178546,156655,156654,121692,145656,156656,145655,145653,145654,145657,132972,133051,133658,132971,97615,143359,143356,143361,143358,143360,143357,142303,143353,172859,143354,144479,143355,31402,133624,146477,133623,133622,133621,84774,160801,95117,172721,150497,98930,98931,98932,153320,153321,43347,129889,
149123,45474,100352,98443,117985,74613,155911,74614,64502,136032,74615,74616,122224,74617,77820,74618,93278,93274,93275,93276,22110,29433,133798,132295,120541,82047,113550,75836,75837,42352,84512,76065,75989,51879,16623,32594,27240,32633,74858,156999,3945,16989,45520,25488,25492,25494,55760,14057,18451,57204,57203,17897,18198,17898,17909,43980,46220,11721,147994,49954,96369,3854,151633,56251,159108,25624,152036,16906,99999,68172,47973,72773,26970,26971,96805,17752,73233,109512,22256,14115,22696,89278,
89277,109513,43278,43459,43464,89279,43717,55764,22255,147912,89281,40963,43277,43442,91824,120137,96367,36850,72694,37414,36851,124863,121343,73491,54473,166861,43375,46674,143815,139095,144402,149968,149969,32473,72901,72906,50612,50613,50942,84938,84943,84939,84941,84944,84940,84942,35585,51926,79983,18921,57893,41182,135732,33424,22207,36229,22206,22205,44763,33427,67793,22182,37091,34650,50617,22287,25144,97917,62397,150871,150874,125598,137935,36961,108035,27426,27857,27846,27854,69692,61411,
39299,38696,62520,36382,108701,50663,36387,14908,37533,105443,61635,62274,161670,133818,65702,65703,65701,76256,166382,37671,49953,179556,36216,28237,173718,39553,29222,26107,38050,26108,120745,26109,26110,66881,28236,14586,160598,57929,74723,44098,173689,44099,23528,61699,134104,134103,59149,173191,173192,173193,101951,171502,97346,118051,95102,64882,119505,63595,63349,95101,75240,27039,68823,21537,83464,75707,170215,83113,101952,101953,79610,125755,24402,24400,32925,57173,156421,122502,145268,138480,
64423,64424,33986,100828,129089,21409,135155,135156,135157,135158,158225,135159,135160,167651,135161,135162,135163,158226,158227,135164,135165,135166,11070,11074,17880,30709,30707,30711,30710,30708,146143,63648,63649,111059,5754,20445,151308,151152,130975,130976,167637,110386,113746,66557,17310,28631,21589,164817,168011,154946,68012,162617,60480,138664,141121,164502,31571,141978,150105,150106,150107,150108,76980,41577,45469,38669,13768,13777,141842,62985,4724,59369,43927,43928,12924,100355,56219,
27669,10337,47896,122629,139723,139722,121258,107598,127991,96639,107536,130169,96661,145188,96658,116646,159428,168611,168612,121122,96660,127738,127083,155281,162959,163566,147842,104443,96659,147595,106442,162776,134840,63667,63668,63669,130686,147036,78314,147799,174049,148649,55761,127098,134841,96368,67374,48992,146176,176105,49956,31961,26388,23811,5E4,126250,96370,47355,47356,37935,45521,21760,83769,49977,49974,93497,93498,34325,140759,115803,123707,100081,35309,68314,25602,100339,170873,
143516,178921,59018,18248,50625,9729,37168,37169,21667,16749,18635,39305,18046,53969,8213,93926,102852,110099,22678,69076,137575,139224,100856,154430,17736,3832,147111,55759,64031,93044,93045,170701,170702,34388,167841,170419,17657,17655,39579,39578,170412,77448,8196,11357,69877,8197,168501,156512,161613,156509,161612,161614,82039];function hv(){var a=wb(iv),b;return(new Wf(function(c,d){a.onSuccess=function(e){un(e)?c(new jv(e)):d(new kv("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new kv("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new kv("Request timed out","net.timeout",e))};
b=Bn("//googleads.g.doubleclick.net/pagead/id",a)})).xc(function(c){c instanceof gg&&b.abort();
return bg(c)})}
function kv(a,b,c){db.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(kv,db);function jv(a){this.xhr=a}
;function lv(){this.h=0;this.i=null}
lv.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.i))&&"function"===typeof a.then?a:mv(a):2===this.h&&b?(a=b.call(c,this.i))&&"function"===typeof a.then?a:nv(a):this};
lv.prototype.getValue=function(){return this.i};
lv.prototype.isRejected=function(){return 2==this.h};
lv.prototype.$goog_Thenable=!0;function nv(a){var b=new lv;a=void 0===a?null:a;b.h=2;b.i=void 0===a?null:a;return b}
function mv(a){var b=new lv;a=void 0===a?null:a;b.h=1;b.i=void 0===a?null:a;return b}
;function ov(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:ln(a)?"same-origin":"cors",credentials:ln(a)?"same-origin":"include"};b={};for(var d=t(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function pv(){return Zg()||(ud||vd)&&Ro("applewebkit")&&!Ro("version")&&(!Ro("safari")||Ro("gsa/"))||kd&&Ro("version/")?!0:O("EOM_VISITOR_DATA")?!1:!0}
;function qv(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in tl)if(tl[d]==c.embeddedPlayerMode){b=tl[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function rv(a){db.call(this,a.message||a.description||a.name);this.isMissing=a instanceof sv;this.isTimeout=a instanceof kv&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof gg}
v(rv,db);rv.prototype.name="BiscottiError";function sv(){db.call(this,"Biscotti ID is missing from server")}
v(sv,db);sv.prototype.name="BiscottiMissingError";var iv={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},tv=null;function uv(){if(P("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!pv())return Error("User has not consented - not fetching biscotti id.");var a=O("PLAYER_VARS",{});if("1"==ub(a))return Error("Biscotti ID is not available in private embed mode");if(qv(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Om(){var a=uv();if(void 0!==a)return bg(a);tv||(tv=hv().then(vv).xc(function(b){return wv(2,b)}));
return tv}
function vv(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new sv;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new sv;a=a.id;Pm(a);tv=mv(a);xv(18E5,2);return a}
function wv(a,b){b=new rv(b);Pm("");tv=nv(b);0<a&&xv(12E4,a-1);throw b;}
function xv(a,b){vn(function(){hv().then(vv,function(c){return wv(b,c)}).xc(fb)},a)}
function yv(){try{var a=B("yt.ads.biscotti.getId_");return a?a():Om()}catch(b){return bg(b)}}
;function zv(a){if("1"!=ub(O("PLAYER_VARS",{}))){a&&Nm();try{yv().then(function(){},function(){}),vn(zv,18E5)}catch(b){$m(b)}}}
;function Av(){var a=io(),b=lo(119),c=1<window.devicePixelRatio;if(document.body&&Yi(document.body,"exp-invert-logo"))if(c&&!Yi(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Yi(d,"inverted-hdpi")){var e=Wi(d);Xi(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Yi(document.body,"inverted-hdpi")&&Zi();if(b!=c){b="f"+(Math.floor(119/31)+1);d=mo(b)||0;d=c?d|67108864:d&-67108865;0===d?delete fo[b]:(c=d.toString(16),fo[b]=c.toString());
c=!0;P("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in fo)fo.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(fo[f])));var f=d.join("&");bo(b,f,63072E3,a.i,c)}}
;var Bv=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Cv(){var a=void 0===a?window.location.href:a;if(P("kevlar_disable_theme_param"))return null;Ac(Bc(5,a));try{var b=jn(a).theme;return Bv.get(b)||null}catch(c){}return null}
;function Dv(){this.h={};if(this.i=eo()){var a=Xg.get("CONSISTENCY",void 0);a&&Ev(this,{encryptedTokenJarContents:a})}}
Dv.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Oa.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=t(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Ev(this,a)}};
function Ev(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&bo("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Fv=window.location.hostname.split(".").slice(-2).join(".");function Gv(){var a=O("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===O("INNERTUBE_CLIENT_NAME")&&(this.h=Hv(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Iv;function Jv(){Iv=B("yt.clientLocationService.instance");Iv||(Iv=new Gv,y("yt.clientLocationService.instance",Iv));return Iv}
k=Gv.prototype;k.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
k.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===O("INNERTUBE_CLIENT_NAME")?(this.h=Hv(this))&&this.h.set("yt-location-playability-token",a,15552E3):bo("YT_CL",JSON.stringify({loctok:a}),15552E3,Fv,!0))};
function Hv(a){return void 0===a.h?new Co("yt-client-location"):a.h}
k.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=Hv(this))&&this.h.remove("yt-location-playability-token"):co("YT_CL")};
k.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===O("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
k.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function Kv(a,b){if(!a)return!1;var c,d=null==(c=At(a,sl))?void 0:c.signal;if(d&&b.nb)return!!b.nb[d];var e;if((c=null==(e=At(a,pl))?void 0:e.request)&&b.Cc)return!!b.Cc[c];for(var f in a)if(b.Bc[f])return!0;return!1}
function Lv(a,b){var c,d=null==(c=At(a,sl))?void 0:c.signal;if(d&&b.nb&&(c=b.nb[d]))return c();var e;if((c=null==(e=At(a,pl))?void 0:e.request)&&b.Cc&&(e=b.Cc[c]))return e();for(var f in a)if(b.Bc[f]&&(a=b.Bc[f]))return a()}
;function Mv(a){return function(){return new a}}
;var Nv={},Ov=(Nv.WEB_UNPLUGGED="^unplugged/",Nv.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Nv.WEB_UNPLUGGED_OPS="^unplugged/",Nv.WEB_UNPLUGGED_PUBLIC="^unplugged/",Nv.WEB_CREATOR="^creator/",Nv.WEB_KIDS="^kids/",Nv.WEB_EXPERIMENTS="^experiments/",Nv.WEB_MUSIC="^music/",Nv.WEB_REMIX="^music/",Nv.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Nv.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Nv);
function Pv(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Ov[b];if(c){var d=new RegExp(c),e=t(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(Ov).forEach(function(g){var h=t(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=t(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function Qv(){}
Qv.prototype.m=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Zn:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=O("INNERTUBE_CONTEXT");if(g){g=xb(g);P("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=O("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var l=void 0===l?!1:l;io();var m="USER_INTERFACE_THEME_LIGHT";lo(165)?m="USER_INTERFACE_THEME_DARK":lo(174)?m="USER_INTERFACE_THEME_LIGHT":!P("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");l=l?m:Cv()||m;h.userInterfaceTheme=l;if(!f){if(l=so())h.connectionType=
l;P("web_log_effective_connection_type")&&(l=to())&&(g.client.effectiveConnectionType=l)}var p;if(P("web_log_memory_total_kbytes")&&(null==(p=x.navigator)?0:p.deviceMemory)){var r;p=null==(r=x.navigator)?void 0:r.deviceMemory;g.client.memoryTotalKbytes=""+1E6*p}r=jn(x.location.href);!P("web_populate_internal_geo_killswitch")&&r.internalcountrycode&&(h.internalGeo=r.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:x.location.href},P("kevlar_woffle")&&$n.h&&
(r=$n.h,h.mainAppWebInfo.pwaInstallabilityStatus=!r.h&&r.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=ao(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!P("web_lr_app_quality_killswitch")&&(r=O("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:r})),r=O("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:r}));
if(!P("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var z=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(sa){}z=void 0}z&&(h.timeZone=z)}(z=qn())?h.experimentsToken=z:delete h.experimentsToken;z=rn();Dv.h||(Dv.h=new Dv);h=Dv.h.h;r=[];p=0;for(var u in h)r[p++]=h[u];g.request=Object.assign({},g.request,{internalExperimentFlags:z,consistencyTokenJars:r});!P("web_prequest_context_killswitch")&&(u=O("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=
u);z=io();u=lo(58);z=z.get("gsml","");g.user=Object.assign({},g.user);u&&(g.user.enableSafetyMode=u);z&&(g.user.lockedSafetyMode=!0);P("warm_op_csn_cleanup")?e&&(f=$u())&&(g.clientScreenNonce=f):!f&&(f=$u())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=B("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Jv().setLocationOnInnerTubeContext(g);try{var A=mn(),C=A.bid;delete A.bid;g.adSignalsInfo={params:[],bid:C};var D=t(Object.entries(A));for(var N=D.next();!N.done;N=D.next()){var R=
t(N.value),T=R.next().value,ha=R.next().value;A=T;C=ha;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:A,value:""+C})}}catch(sa){Eu(sa)}D=g}else Eu(Error("Error: No InnerTubeContext shell provided in ytconfig.")),D={};D={context:D};if(N=this.h(a)){this.i(D,N,b);var ba;b="/youtubei/v1/"+Pv(this.j());(N=null==(ba=At(a.commandMetadata,rl))?void 0:ba.apiUrl)&&(b=N);ba=b;(b=O("INNERTUBE_HOST_OVERRIDE"))&&(ba=String(b)+String(Dc(ba)));b={};b.key=O("INNERTUBE_API_KEY");P("json_condensed_response")&&
(b.prettyPrint="false");ba=kn(ba,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:ba,lb:ov(ba),Oa:D,config:a};a.config.dc?a.config.dc.identity=c:a.config.dc={identity:c};return a}Eu(new S("Error: Failed to create Request from Command.",a))};
ea.Object.defineProperties(Qv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function Rv(){}
v(Rv,Qv);Rv.prototype.m=function(){return{input:"/getDatasyncIdsEndpoint",lb:ov("/getDatasyncIdsEndpoint","GET"),Oa:{}}};
Rv.prototype.j=function(){return[]};
Rv.prototype.h=function(){};
Rv.prototype.i=function(){};var Sv={},Tv=(Sv.GET_DATASYNC_IDS=Mv(Rv),Sv);function Uv(a){var b=Na.apply(1,arguments);if(!Vv(a)||b.some(function(d){return!Vv(d)}))throw Error("Only objects may be merged.");
b=t(b);for(var c=b.next();!c.done;c=b.next())Wv(a,c.value);return a}
function Wv(a,b){for(var c in b)if(Vv(b[c])){if(c in a&&!Vv(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Wv(a[c],b[c])}else if(Xv(b[c])){if(c in a&&!Xv(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Yv(a[c],b[c])}else a[c]=b[c];return a}
function Yv(a,b){b=t(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Vv(c)?a.push(Wv({},c)):Xv(c)?a.push(Yv([],c)):a.push(c);return a}
function Vv(a){return"object"===typeof a&&!Array.isArray(a)}
function Xv(a){return"object"===typeof a&&Array.isArray(a)}
;function Zv(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},y("ytcsi."+(a||"")+"data_",b));return b}
function $v(){var a=Zv();a.info||(a.info={});return a.info}
function aw(a){a=Zv(a);a.metadata||(a.metadata={});return a.metadata}
function bw(a){a=Zv(a);a.tick||(a.tick={});return a.tick}
function cw(a){a=Zv(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function dw(a){a=cw(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function ew(a){var b=Zv(a).nonce;b||(b=Pu(),Zv(a).nonce=b);return b}
;function fw(){var a=B("ytcsi.debug");a||(a=[],y("ytcsi.debug",a),y("ytcsi.reference",{}));return a}
function gw(a){a=a||"";var b=B("ytcsi.reference");b||(fw(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=fw(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var V={},hw=(V.auto_search="LATENCY_ACTION_AUTO_SEARCH",V.ad_to_ad="LATENCY_ACTION_AD_TO_AD",V.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",V["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",V.app_startup="LATENCY_ACTION_APP_STARTUP",V["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",V["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",V["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",V["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
V["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",V["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",V["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",V["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",V["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",V["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",V["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",V["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",
V["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",V["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",V.browse="LATENCY_ACTION_BROWSE",V.cast_splash="LATENCY_ACTION_CAST_SPLASH",V.channels="LATENCY_ACTION_CHANNELS",V.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",V["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",V["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",V["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",
V["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",V["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",V["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",V["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",V["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",V["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",V["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",V["channel.translations"]=
"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",V["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",V["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",V.chips="LATENCY_ACTION_CHIPS",V["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",V["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",V["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",V.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",V.embed="LATENCY_ACTION_EMBED",
V.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",V.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",V.explore="LATENCY_ACTION_EXPLORE",V.home="LATENCY_ACTION_HOME",V.library="LATENCY_ACTION_LIBRARY",V.live="LATENCY_ACTION_LIVE",V.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",V.onboarding="LATENCY_ACTION_ONBOARDING",V.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",V["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",V["owner.analytics"]=
"LATENCY_ACTION_CREATOR_CMS_ANALYTICS",V["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",V["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",V["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",V["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",V["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",V["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",V["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",V["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",
V["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",V["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",V["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",V["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",V["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",V["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",V["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",V["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",V.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",
V.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",V.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",V.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",V["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",V["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",V.prebuffer="LATENCY_ACTION_PREBUFFER",V.prefetch="LATENCY_ACTION_PREFETCH",V.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",V.profile_switcher="LATENCY_ACTION_LOGIN",V.reel_watch="LATENCY_ACTION_REEL_WATCH",
V.results="LATENCY_ACTION_RESULTS",V["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",V.search_ui="LATENCY_ACTION_SEARCH_UI",V.search_suggest="LATENCY_ACTION_SUGGEST",V.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",V.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",V.seek="LATENCY_ACTION_PLAYER_SEEK",V.settings="LATENCY_ACTION_SETTINGS",V.store="LATENCY_ACTION_STORE",V.tenx="LATENCY_ACTION_TENX",V.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",V.watch="LATENCY_ACTION_WATCH",V.watch_it_again=
"LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",V["watch,watch7"]="LATENCY_ACTION_WATCH",V["watch,watch7_html5"]="LATENCY_ACTION_WATCH",V["watch,watch7ad"]="LATENCY_ACTION_WATCH",V["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",V.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",V.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",V["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",V["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",V["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",V["video.copyright"]=
"LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",V["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",V["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",V["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",V["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",V["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",V["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",V["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",V["video.rights_management"]=
"LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",V["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",V.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",V.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",V.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",V.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",V.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",V),W={},iw=(W.ad_allowed="adTypesAllowed",W.yt_abt="adBreakType",W.ad_cpn="adClientPlaybackNonce",
W.ad_docid="adVideoId",W.yt_ad_an="adNetworks",W.ad_at="adType",W.aida="appInstallDataAgeMs",W.browse_id="browseId",W.p="httpProtocol",W.t="transportProtocol",W.cs="commandSource",W.cpn="clientPlaybackNonce",W.ccs="creatorInfo.creatorCanaryState",W.ctop="creatorInfo.topEntityType",W.csn="clientScreenNonce",W.docid="videoId",W.GetHome_rid="requestIds",W.GetSearch_rid="requestIds",W.GetPlayer_rid="requestIds",W.GetWatchNext_rid="requestIds",W.GetBrowse_rid="requestIds",W.GetLibrary_rid="requestIds",
W.is_continuation="isContinuation",W.is_nav="isNavigation",W.b_p="kabukiInfo.browseParams",W.is_prefetch="kabukiInfo.isPrefetch",W.is_secondary_nav="kabukiInfo.isSecondaryNav",W.nav_type="kabukiInfo.navigationType",W.prev_browse_id="kabukiInfo.prevBrowseId",W.query_source="kabukiInfo.querySource",W.voz_type="kabukiInfo.vozType",W.yt_lt="loadType",W.mver="creatorInfo.measurementVersion",W.yt_ad="isMonetized",W.nr="webInfo.navigationReason",W.nrsu="navigationRequestedSameUrl",W.pnt="performanceNavigationTiming",
W.prt="playbackRequiresTap",W.plt="playerInfo.playbackType",W.pis="playerInfo.playerInitializedState",W.paused="playerInfo.isPausedOnLoad",W.yt_pt="playerType",W.fmt="playerInfo.itag",W.yt_pl="watchInfo.isPlaylist",W.yt_pre="playerInfo.preloadType",W.yt_ad_pr="prerollAllowed",W.pa="previousAction",W.yt_red="isRedSubscriber",W.rce="mwebInfo.responseContentEncoding",W.rc="resourceInfo.resourceCache",W.scrh="screenHeight",W.scrw="screenWidth",W.st="serverTimeMs",W.ssdm="shellStartupDurationMs",W.br_trs=
"tvInfo.bedrockTriggerState",W.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",W.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",W.label="tvInfo.label",W.is_mdx="tvInfo.isMdx",W.preloaded="tvInfo.isPreloaded",W.aac_type="tvInfo.authAccessCredentialType",W.upg_player_vis="playerInfo.visibilityState",W.query="unpluggedInfo.query",W.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",W.yt_vst="videoStreamType",W.vph="viewportHeight",W.vpw="viewportWidth",W.yt_vis="isVisible",W.rcl="mwebInfo.responseContentLength",
W.GetSettings_rid="requestIds",W.GetTrending_rid="requestIds",W.GetMusicSearchSuggestions_rid="requestIds",W.REQUEST_ID="requestIds",W),jw="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),kw={},lw=(kw.ccs="CANARY_STATE_",
kw.mver="MEASUREMENT_VERSION_",kw.pis="PLAYER_INITIALIZED_STATE_",kw.yt_pt="LATENCY_PLAYER_",kw.pa="LATENCY_ACTION_",kw.ctop="TOP_ENTITY_TYPE_",kw.yt_vst="VIDEO_STREAM_TYPE_",kw),mw="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function nw(a){return hw[a]||"LATENCY_ACTION_UNKNOWN"}
function ow(a,b,c){c=cw(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in iw){c=iw[a];0<=hb(jw,c)&&(b=!!b);a in lw&&"string"===typeof b&&(b=lw[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Uv({},d)}0<=hb(mw,a)||Fu(new S("Unknown label logged with GEL CSI",a))}
;var X={LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING:179,LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_MINI_APP_PLAY:249,LATENCY_ACTION_DMA_CONSENT_FLOW:247,LATENCY_ACTION_GEL_FETCH:248,LATENCY_ACTION_GEL_JSPB_SERIALIZE:243,
LATENCY_ACTION_GEL_COMPRESSION:215,LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE:204,LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC:203,LATENCY_ACTION_COMMERCE_TRANSACTION:184,LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC:173,LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC:172,LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC:171,LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC:170,LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC:169,LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC:168,LATENCY_ACTION_GET_OFFERS_RPC:167,LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC:166,
LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC:165,LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC:164,LATENCY_ACTION_GET_OFFER_DETAILS_RPC:163,LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC:162,LATENCY_ACTION_GET_TIP_MODULE_RPC:161,LATENCY_ACTION_HANDLE_TRANSACTION_RPC:160,LATENCY_ACTION_COMPLETE_TRANSACTION_RPC:159,LATENCY_ACTION_GET_CART_RPC:158,LATENCY_ACTION_THUMBNAIL_FETCH:156,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,
LATENCY_ACTION_PLAYER_ROTATION:150,LATENCY_ACTION_GENERIC_WEB_VIEW:183,LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_DOWNLOADS_DATA_ACCESS:180,LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN:244,
LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,
LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,
LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_CONNECT_TO_SESSION:190,LATENCY_ACTION_MDX_STREAM_TRANSFER:178,LATENCY_ACTION_MDX_CAST:120,LATENCY_ACTION_MDX_COMMAND:12,LATENCY_ACTION_MOBILE_LIVE_NAV_MDE:231,LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_SHORTS_LOAD_PROJECT:234,LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING:229,
LATENCY_ACTION_EDIT_AUDIO_GEN:182,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING:157,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_CAMERA_AUDIO_DOWNLOAD:240,LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,LATENCY_ACTION_NON_CREATION_MODES_GLOBAL_ENTRYPOINT:239,
LATENCY_ACTION_CREATION_MODES_MODE_SWITCH:236,LATENCY_ACTION_CREATION_MODES_GLOBAL_ENTRYPOINT:235,LATENCY_ACTION_SWITCH_CAMERA:246,LATENCY_ACTION_OPEN_CAMERA:245,LATENCY_ACTION_MEDIA_ENGINE_DISPLAY_FIRST_FRAME:242,LATENCY_ACTION_MEDIA_ENGINE_EXPORT:241,LATENCY_ACTION_PRODUCER_IMPORT_LOCAL_MEDIA:233,LATENCY_ACTION_PRODUCER_EXPORT_PROJECT:193,LATENCY_ACTION_PRODUCER_EDITOR:192,LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_OFFLINE_PLAYLIST_DETAIL:238,
LATENCY_ACTION_MUSIC_OFFLINE_ALBUM_DETAIL:237,LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_STORE:175,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,LATENCY_ACTION_KIDS_SECRET_CODE:91,
LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT:219,LATENCY_ACTION_CREATOR_VIDEO_POLICY:217,LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,
LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT:218,LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_CLAIMS:216,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,LATENCY_ACTION_CREATOR_SONG_ANALYTICS:176,LATENCY_ACTION_CREATOR_PROMOTION_LIST:186,LATENCY_ACTION_CREATOR_PROMOTION_EDIT:185,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,
LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT:174,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CMS_VIDEOS:202,LATENCY_ACTION_CREATOR_CMS_REPORTS:201,LATENCY_ACTION_CREATOR_CMS_RELEASES:226,LATENCY_ACTION_CREATOR_CMS_POLICIES:225,LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC:224,LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING:200,LATENCY_ACTION_CREATOR_CMS_LICENSES:223,LATENCY_ACTION_CREATOR_CMS_ISSUES:191,LATENCY_ACTION_CREATOR_CMS_DASHBOARD:199,
LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY:198,LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS:197,LATENCY_ACTION_CREATOR_CMS_CHANNELS:196,LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS:222,LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS:214,LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES:209,LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY:208,LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP:207,LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA:205,LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES:212,LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES:206,
LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS:221,LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS:210,LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION:213,LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS:211,LATENCY_ACTION_CREATOR_CMS_ASSETS:195,LATENCY_ACTION_CREATOR_CMS_ART_TRACKS:220,LATENCY_ACTION_CREATOR_CMS_ANALYTICS:194,LATENCY_ACTION_CREATOR_CMS_ALLOWLIST:227,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT:177,
LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_EXPERIMENTAL_WATCH_UI:181,
LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS:228,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,
LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_DIRECT_PLAYBACK:132,LATENCY_ACTION_PREBUFFER_VIDEO:144,LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_STARTUP:106,LATENCY_ACTION_INLINE_TO_WATCH:232,LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH:230,
LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_HOME:1,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_USER_ACTION:189,LATENCY_ACTION_INFRASTRUCTURE:188,LATENCY_ACTION_PAGE_NAVIGATION:187,LATENCY_ACTION_UNKNOWN:0};X[X.LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING";X[X.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";
X[X.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";X[X.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";X[X.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";X[X.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";X[X.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";X[X.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";
X[X.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";X[X.LATENCY_ACTION_MINI_APP_PLAY]="LATENCY_ACTION_MINI_APP_PLAY";X[X.LATENCY_ACTION_DMA_CONSENT_FLOW]="LATENCY_ACTION_DMA_CONSENT_FLOW";X[X.LATENCY_ACTION_GEL_FETCH]="LATENCY_ACTION_GEL_FETCH";X[X.LATENCY_ACTION_GEL_JSPB_SERIALIZE]="LATENCY_ACTION_GEL_JSPB_SERIALIZE";X[X.LATENCY_ACTION_GEL_COMPRESSION]="LATENCY_ACTION_GEL_COMPRESSION";X[X.LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE]="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE";
X[X.LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC]="LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC";X[X.LATENCY_ACTION_COMMERCE_TRANSACTION]="LATENCY_ACTION_COMMERCE_TRANSACTION";X[X.LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC]="LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC";X[X.LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC]="LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC";X[X.LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC]="LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC";
X[X.LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC]="LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC";X[X.LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC]="LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC";X[X.LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC]="LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC";X[X.LATENCY_ACTION_GET_OFFERS_RPC]="LATENCY_ACTION_GET_OFFERS_RPC";X[X.LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC";X[X.LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC";
X[X.LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC]="LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC";X[X.LATENCY_ACTION_GET_OFFER_DETAILS_RPC]="LATENCY_ACTION_GET_OFFER_DETAILS_RPC";X[X.LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC]="LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC";X[X.LATENCY_ACTION_GET_TIP_MODULE_RPC]="LATENCY_ACTION_GET_TIP_MODULE_RPC";X[X.LATENCY_ACTION_HANDLE_TRANSACTION_RPC]="LATENCY_ACTION_HANDLE_TRANSACTION_RPC";
X[X.LATENCY_ACTION_COMPLETE_TRANSACTION_RPC]="LATENCY_ACTION_COMPLETE_TRANSACTION_RPC";X[X.LATENCY_ACTION_GET_CART_RPC]="LATENCY_ACTION_GET_CART_RPC";X[X.LATENCY_ACTION_THUMBNAIL_FETCH]="LATENCY_ACTION_THUMBNAIL_FETCH";X[X.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";X[X.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";X[X.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";X[X.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";
X[X.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";X[X.LATENCY_ACTION_GENERIC_WEB_VIEW]="LATENCY_ACTION_GENERIC_WEB_VIEW";X[X.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";X[X.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";X[X.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";X[X.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";X[X.LATENCY_ACTION_DOWNLOADS_DATA_ACCESS]="LATENCY_ACTION_DOWNLOADS_DATA_ACCESS";
X[X.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";X[X.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";X[X.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";X[X.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";X[X.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";X[X.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN";
X[X.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";X[X.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";X[X.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";X[X.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";X[X.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";X[X.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";
X[X.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";X[X.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";X[X.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";X[X.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";X[X.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";X[X.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";X[X.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";
X[X.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";X[X.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";X[X.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";X[X.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";X[X.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";X[X.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";
X[X.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";X[X.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";X[X.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";X[X.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";X[X.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";X[X.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";X[X.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";
X[X.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";X[X.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";X[X.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";X[X.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";X[X.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";X[X.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";X[X.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";X[X.LATENCY_ACTION_MDX_CONNECT_TO_SESSION]="LATENCY_ACTION_MDX_CONNECT_TO_SESSION";
X[X.LATENCY_ACTION_MDX_STREAM_TRANSFER]="LATENCY_ACTION_MDX_STREAM_TRANSFER";X[X.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";X[X.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";X[X.LATENCY_ACTION_MOBILE_LIVE_NAV_MDE]="LATENCY_ACTION_MOBILE_LIVE_NAV_MDE";X[X.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";X[X.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";X[X.LATENCY_ACTION_SHORTS_LOAD_PROJECT]="LATENCY_ACTION_SHORTS_LOAD_PROJECT";
X[X.LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING]="LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING";X[X.LATENCY_ACTION_EDIT_AUDIO_GEN]="LATENCY_ACTION_EDIT_AUDIO_GEN";X[X.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";X[X.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING]="LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";X[X.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";X[X.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";
X[X.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";X[X.LATENCY_ACTION_SHORTS_CAMERA_AUDIO_DOWNLOAD]="LATENCY_ACTION_SHORTS_CAMERA_AUDIO_DOWNLOAD";X[X.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";X[X.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";X[X.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";X[X.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";X[X.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";
X[X.LATENCY_ACTION_NON_CREATION_MODES_GLOBAL_ENTRYPOINT]="LATENCY_ACTION_NON_CREATION_MODES_GLOBAL_ENTRYPOINT";X[X.LATENCY_ACTION_CREATION_MODES_MODE_SWITCH]="LATENCY_ACTION_CREATION_MODES_MODE_SWITCH";X[X.LATENCY_ACTION_CREATION_MODES_GLOBAL_ENTRYPOINT]="LATENCY_ACTION_CREATION_MODES_GLOBAL_ENTRYPOINT";X[X.LATENCY_ACTION_SWITCH_CAMERA]="LATENCY_ACTION_SWITCH_CAMERA";X[X.LATENCY_ACTION_OPEN_CAMERA]="LATENCY_ACTION_OPEN_CAMERA";X[X.LATENCY_ACTION_MEDIA_ENGINE_DISPLAY_FIRST_FRAME]="LATENCY_ACTION_MEDIA_ENGINE_DISPLAY_FIRST_FRAME";
X[X.LATENCY_ACTION_MEDIA_ENGINE_EXPORT]="LATENCY_ACTION_MEDIA_ENGINE_EXPORT";X[X.LATENCY_ACTION_PRODUCER_IMPORT_LOCAL_MEDIA]="LATENCY_ACTION_PRODUCER_IMPORT_LOCAL_MEDIA";X[X.LATENCY_ACTION_PRODUCER_EXPORT_PROJECT]="LATENCY_ACTION_PRODUCER_EXPORT_PROJECT";X[X.LATENCY_ACTION_PRODUCER_EDITOR]="LATENCY_ACTION_PRODUCER_EDITOR";X[X.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";X[X.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";
X[X.LATENCY_ACTION_MUSIC_OFFLINE_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_OFFLINE_PLAYLIST_DETAIL";X[X.LATENCY_ACTION_MUSIC_OFFLINE_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_OFFLINE_ALBUM_DETAIL";X[X.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";X[X.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";X[X.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";X[X.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";
X[X.LATENCY_ACTION_STORE]="LATENCY_ACTION_STORE";X[X.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";X[X.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";X[X.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";X[X.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";X[X.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";X[X.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";X[X.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";
X[X.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";X[X.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";X[X.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";X[X.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";X[X.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";X[X.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";
X[X.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";X[X.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";X[X.LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT";X[X.LATENCY_ACTION_CREATOR_VIDEO_POLICY]="LATENCY_ACTION_CREATOR_VIDEO_POLICY";X[X.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";X[X.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";
X[X.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";X[X.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";X[X.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";X[X.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";X[X.LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT";X[X.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";
X[X.LATENCY_ACTION_CREATOR_VIDEO_CLAIMS]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS";X[X.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";X[X.LATENCY_ACTION_CREATOR_SONG_ANALYTICS]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS";X[X.LATENCY_ACTION_CREATOR_PROMOTION_LIST]="LATENCY_ACTION_CREATOR_PROMOTION_LIST";X[X.LATENCY_ACTION_CREATOR_PROMOTION_EDIT]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT";X[X.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";
X[X.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";X[X.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";X[X.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";X[X.LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT";X[X.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";X[X.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";
X[X.LATENCY_ACTION_CREATOR_CMS_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_VIDEOS";X[X.LATENCY_ACTION_CREATOR_CMS_REPORTS]="LATENCY_ACTION_CREATOR_CMS_REPORTS";X[X.LATENCY_ACTION_CREATOR_CMS_RELEASES]="LATENCY_ACTION_CREATOR_CMS_RELEASES";X[X.LATENCY_ACTION_CREATOR_CMS_POLICIES]="LATENCY_ACTION_CREATOR_CMS_POLICIES";X[X.LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC";X[X.LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING";
X[X.LATENCY_ACTION_CREATOR_CMS_LICENSES]="LATENCY_ACTION_CREATOR_CMS_LICENSES";X[X.LATENCY_ACTION_CREATOR_CMS_ISSUES]="LATENCY_ACTION_CREATOR_CMS_ISSUES";X[X.LATENCY_ACTION_CREATOR_CMS_DASHBOARD]="LATENCY_ACTION_CREATOR_CMS_DASHBOARD";X[X.LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY";X[X.LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS";X[X.LATENCY_ACTION_CREATOR_CMS_CHANNELS]="LATENCY_ACTION_CREATOR_CMS_CHANNELS";
X[X.LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS";X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS";X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES";X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY";X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP";
X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA";X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES";X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES";X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS";X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS";X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION";
X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS";X[X.LATENCY_ACTION_CREATOR_CMS_ASSETS]="LATENCY_ACTION_CREATOR_CMS_ASSETS";X[X.LATENCY_ACTION_CREATOR_CMS_ART_TRACKS]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS";X[X.LATENCY_ACTION_CREATOR_CMS_ANALYTICS]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS";X[X.LATENCY_ACTION_CREATOR_CMS_ALLOWLIST]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST";X[X.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";
X[X.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";X[X.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";X[X.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT";X[X.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";X[X.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";
X[X.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";X[X.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";X[X.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";X[X.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";X[X.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";X[X.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";
X[X.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";X[X.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";X[X.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";X[X.LATENCY_ACTION_EXPERIMENTAL_WATCH_UI]="LATENCY_ACTION_EXPERIMENTAL_WATCH_UI";X[X.LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS]="LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS";X[X.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";
X[X.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";X[X.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";X[X.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";X[X.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";X[X.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";X[X.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";X[X.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";X[X.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";
X[X.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";X[X.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";X[X.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";X[X.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";X[X.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";X[X.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";X[X.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";
X[X.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";X[X.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";X[X.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";X[X.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";X[X.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";X[X.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";X[X.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";X[X.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";
X[X.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";X[X.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";X[X.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";X[X.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";X[X.LATENCY_ACTION_INLINE_TO_WATCH]="LATENCY_ACTION_INLINE_TO_WATCH";X[X.LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH]="LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH";X[X.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";X[X.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";
X[X.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";X[X.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";X[X.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";X[X.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";X[X.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";X[X.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";X[X.LATENCY_ACTION_USER_ACTION]="LATENCY_ACTION_USER_ACTION";X[X.LATENCY_ACTION_INFRASTRUCTURE]="LATENCY_ACTION_INFRASTRUCTURE";X[X.LATENCY_ACTION_PAGE_NAVIGATION]="LATENCY_ACTION_PAGE_NAVIGATION";
X[X.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var pw={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};pw[pw.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";pw[pw.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";pw[pw.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";
var Y={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};Y[Y.CONN_INVALID]="CONN_INVALID";Y[Y.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";Y[Y.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";Y[Y.CONN_WIFI_METERED]="CONN_WIFI_METERED";Y[Y.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";Y[Y.CONN_DISCO]="CONN_DISCO";
Y[Y.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";Y[Y.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";Y[Y.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";Y[Y.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";Y[Y.CONN_WIFI]="CONN_WIFI";Y[Y.CONN_NONE]="CONN_NONE";Y[Y.CONN_UNKNOWN]="CONN_UNKNOWN";Y[Y.CONN_DEFAULT]="CONN_DEFAULT";
var Z={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Z[Z.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Z[Z.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Z[Z.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Z[Z.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Z[Z.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Z[Z.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Z[Z.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Z[Z.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Z[Z.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Z[Z.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Z[Z.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Z[Z.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Z[Z.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Z[Z.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Z[Z.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Z[Z.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Z[Z.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Z[Z.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Z[Z.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Z[Z.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Z[Z.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Z[Z.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Z[Z.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Z[Z.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Z[Z.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Z[Z.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Z[Z.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var qw={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};qw[qw.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
qw[qw.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";qw[qw.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";qw[qw.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";qw[qw.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";qw[qw.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";qw[qw.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";qw[qw.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var rw={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};rw[rw.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";rw[rw.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";rw[rw.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";rw[rw.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var sw={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
sw[sw.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";sw[sw.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var tw={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};tw[tw.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";tw[tw.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";tw[tw.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
tw[tw.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";tw[tw.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";tw[tw.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var uw={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};uw[uw.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";uw[uw.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";uw[uw.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";uw[uw.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var vw={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};vw[vw.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";vw[vw.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";vw[vw.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var ww={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};ww[ww.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
ww[ww.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";ww[ww.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var xw="actionVisualElement spinnerInfo cacheAttempts resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo webViewInfo prefetchInfo accelerationSession commerceInfo inlineToWatchInfo mediaEngineMetadata miniAppInfo webInfo tvInfo kabukiInfo mwebInfo musicInfo transcodingContext creationModesContext cameraMetadata producerMediaAssetMetadata".split(" ");function yw(a,b){Gq.call(this,1,arguments);this.timer=b}
v(yw,Gq);var zw=new Hq("aft-recorded",yw);var Aw=x.ytLoggingLatencyUsageStats_||{};y("ytLoggingLatencyUsageStats_",Aw);function Bw(){this.h=0}
function Cw(){Bw.h||(Bw.h=new Bw);return Bw.h}
Bw.prototype.tick=function(a,b,c,d){Dw(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},P("web_csi_via_jspb")?(d=new xm,G(d,1,a),G(d,2,b),a=new Am,te(a,xm,5,Bm,d),ru(a,c)):Lo("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
Bw.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Dw(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Lo("latencyActionInfo",a,{cttAuthInfo:c}))};
Bw.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));Dw(this,"info_"+d+"_"+b)||(G(a,2,b),b={cttAuthInfo:c},c=new Am,te(c,tm,7,Bm,a),ru(c,b))};
Bw.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Dw(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,Lo("latencyActionSpan",a,{cttAuthInfo:c}))};
function Dw(a,b){Aw[b]=Aw[b]||{count:0};var c=Aw[b];c.count++;c.time=U();a.h||(a.h=xo(function(){var d=U(),e;for(e in Aw)Aw[e]&&6E4<d-Aw[e].time&&delete Aw[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new S("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Fu(c)),!0):!1}
;var Ew=window;function Fw(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Gw(){var a;if(P("csi_use_performance_navigation_timing")||P("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Hw?void 0:null==(a=Hw.getEntriesByType)?void 0:null==(b=a.call(Hw,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=Iw(e.requestStart),e.responseEnd=Iw(e.responseEnd),e.redirectStart=Iw(e.redirectStart),e.redirectEnd=Iw(e.redirectEnd),e.domainLookupEnd=Iw(e.domainLookupEnd),e.connectStart=Iw(e.connectStart),e.connectEnd=
Iw(e.connectEnd),e.responseStart=Iw(e.responseStart),e.secureConnectionStart=Iw(e.secureConnectionStart),e.domainLookupStart=Iw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Hw.timing}else a=Hw.timing;return a}
function Iw(a){return Math.round(Jw()+a)}
function Jw(){return(P("csi_use_time_origin")||P("csi_use_time_origin_tvhtml5"))&&Hw.timeOrigin?Math.floor(Hw.timeOrigin):Hw.timing.navigationStart}
var Hw=Ew.performance||Ew.mozPerformance||Ew.msPerformance||Ew.webkitPerformance||new Fw;var Kw=!1,Lw={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
$a(Hw.clearResourceTimings||Hw.webkitClearResourceTimings||Hw.mozClearResourceTimings||Hw.msClearResourceTimings||Hw.oClearResourceTimings||fb,Hw);function Mw(a,b,c,d){if(null!==b){if("yt_lt"===a){var e="string"===typeof b?b:""+b;aw(c).loadType=e}(a=ow(a,b,c))&&Nw(a,c,d)}}
function Nw(a,b,c){if(!P("web_csi_via_jspb")||(void 0===c?0:c))c=gw(b||""),Uv(c.info,a),a.loadType&&(c=a.loadType,aw(b).loadType=c),Uv(dw(b),a),c=ew(b),b=Zv(b).cttAuthInfo,Cw().info(a,c,b);else{c=new tm;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":G(c,1,X[a[e]]);break;case "clientActionNonce":G(c,2,a[e]);break;case "clientScreenNonce":G(c,4,a[e]);break;case "loadType":G(c,3,a[e]);break;case "isPrewarmedLaunch":G(c,92,a[e]);break;case "isFirstInstall":G(c,
55,a[e]);break;case "networkType":G(c,5,pw[a[e]]);break;case "connectionType":G(c,26,Y[a[e]]);break;case "detailedConnectionType":G(c,27,Z[a[e]]);break;case "isVisible":G(c,6,a[e]);break;case "playerType":G(c,7,qw[a[e]]);break;case "clientPlaybackNonce":G(c,8,a[e]);break;case "adClientPlaybackNonce":G(c,28,a[e]);break;case "previousCpn":G(c,77,a[e]);break;case "targetCpn":G(c,76,a[e]);break;case "isMonetized":G(c,9,a[e]);break;case "isPrerollAllowed":G(c,16,a[e]);break;case "isPrerollShown":G(c,17,
a[e]);break;case "adType":G(c,12,a[e]);break;case "adTypesAllowed":G(c,36,a[e]);break;case "adNetworks":G(c,37,a[e]);break;case "previousAction":G(c,13,X[a[e]]);break;case "isRedSubscriber":G(c,14,a[e]);break;case "serverTimeMs":we(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":G(c,20,a[e]);break;case "targetVideoId":G(c,78,a[e]);break;case "adBreakType":G(c,21,rw[a[e]]);break;case "isNavigation":G(c,25,a[e]);break;case "viewportHeight":we(c,29,a[e]);break;case "viewportWidth":we(c,
30,a[e]);break;case "screenHeight":we(c,84,a[e]);break;case "screenWidth":we(c,85,a[e]);break;case "browseId":G(c,31,a[e]);break;case "isCacheHit":G(c,32,a[e]);break;case "httpProtocol":G(c,33,a[e]);break;case "transportProtocol":G(c,34,a[e]);break;case "searchQuery":G(c,41,a[e]);break;case "isContinuation":G(c,42,a[e]);break;case "availableProcessors":we(c,43,a[e]);break;case "sdk":G(c,44,a[e]);break;case "isLocalStream":G(c,45,a[e]);break;case "navigationRequestedSameUrl":G(c,64,a[e]);break;case "shellStartupDurationMs":we(c,
70,a[e]);break;case "appInstallDataAgeMs":we(c,73,a[e]);break;case "latencyActionError":G(c,71,sw[a[e]]);break;case "actionStep":we(c,79,a[e]);break;case "jsHeapSizeLimit":G(c,80,a[e]);break;case "totalJsHeapSize":G(c,81,a[e]);break;case "usedJsHeapSize":G(c,82,a[e]);break;case "sourceVideoDurationMs":G(c,90,a[e]);break;case "videoOutputFrames":G(c,93,a[e]);break;case "isResume":G(c,104,a[e]);break;case "debugTicksExcluded":G(c,105,a[e]);break;case "abandonedPing":G(c,113,a[e]);break;case "adPrebufferedTimeSecs":we(c,
39,a[e]);break;case "isLivestream":G(c,47,a[e]);break;case "liveStreamMode":G(c,91,tw[a[e]]);break;case "adCpn2":G(c,48,a[e]);break;case "adDaiDriftMillis":G(c,49,a[e]);break;case "videoStreamType":G(c,53,uw[a[e]]);break;case "playbackRequiresTap":G(c,56,a[e]);break;case "performanceNavigationTiming":G(c,67,a[e]);break;case "transactionType":G(c,74,vw[a[e]]);break;case "playerRotationType":G(c,101,ww[a[e]]);break;case "allowedPreroll":G(c,10,a[e]);break;case "shownPreroll":G(c,11,a[e]);break;case "getHomeRequestId":G(c,
57,a[e]);break;case "getSearchRequestId":G(c,60,a[e]);break;case "getPlayerRequestId":G(c,61,a[e]);break;case "getWatchNextRequestId":G(c,62,a[e]);break;case "getBrowseRequestId":G(c,63,a[e]);break;case "getLibraryRequestId":G(c,66,a[e]);break;case "isTransformerEnabledForFeature":G(c,106,a[e]);break;case "sourceVideoFrameCount":G(c,109,a[e]);break;default:xw.includes(f)&&$m(new S("Codegen laipb translator asked to translate message field",""+f))}}catch(g){$m(Error("Codegen laipb translator failed to set "+
f))}}Ow(c,b)}}
function Ow(a,b){var c=Ae(a,3);c&&(aw(b).loadType=c);gw(b||"").jspbInfo.push(a);c=ew(b);b=Zv(b).cttAuthInfo;Cw().jspbInfo(a,c,b)}
function Pw(a,b,c){if(!b&&"_"!==a[0]){var d=a;Hw.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),Hw.mark(d))}d=gw(c||"");d.tick[a]=b||U();if(d.callback&&d.callback[a]){d=t(d.callback[a]);for(var e=d.next();!e.done;e=d.next())e=e.value,e()}d=cw(c);d.gelTicks&&(d.gelTicks[a]=!0);e=bw(c);d=b||U();P("log_repeated_ytcsi_ticks")?a in e||(e[a]=d):e[a]=d;e=ew(c);var f=Zv(c).cttAuthInfo;"_start"===a?(a=Cw(),Dw(a,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},P("web_csi_via_jspb")?(a=new om,
G(a,1,e),e=new Am,te(e,om,6,Bm,a),ru(e,b)):Lo("latencyActionBaselined",{clientActionNonce:e},b))):Cw().tick(a,e,b,f);Qw(c);return d}
function Rw(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Ns+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Sw(a){var b=Gw(),c=Jw(),d=O("CSI_START_TIMESTAMP_MILLIS",0);0<d&&!P("embeds_web_enable_csi_start_override_killswitch")&&(c=d);c&&(Pw("srt",b.responseStart),1!==a.prerender&&Pw("_start",c,void 0));a=Tw();0<a&&Pw("fpt",a);a=Gw();a.isPerformanceNavigationTiming&&Nw({performanceNavigationTiming:!0},void 0);Pw("nreqs",a.requestStart,void 0);Pw("nress",a.responseStart,void 0);Pw("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(Pw("nrs",a.redirectStart,void 0),Pw("nre",a.redirectEnd,
void 0));0<a.domainLookupEnd-a.domainLookupStart&&(Pw("ndnss",a.domainLookupStart,void 0),Pw("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(Pw("ntcps",a.connectStart,void 0),Pw("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=Jw()&&0<a.connectEnd-a.secureConnectionStart&&(Pw("nstcps",a.secureConnectionStart,void 0),Pw("ntcpe",a.connectEnd,void 0));Hw&&"getEntriesByType"in Hw&&Uw()}
function Vw(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);wc()&&a.setAttribute("nonce",wc());return c?(a=Hw.getEntriesByName(c))&&a[0]&&(a=a[0],c=Jw(),Pw("rsf_"+b,c+Math.round(a.fetchStart)),Pw("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Ww(){var a=[];if(document.querySelector&&Hw&&Hw.getEntriesByName)for(var b in Lw)if(Lw.hasOwnProperty(b)){var c=Lw[b];Vw(b,c)&&a.push(c)}return a}
function Uw(){var a=window.location.protocol,b=Hw.getEntriesByType("resource");b=jb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=lb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Pw("wffs",Iw(b.startTime)),Pw("wffe",Iw(b.responseEnd)))}
function Xw(a){var b=Yw("aft",a);if(b)return b;b=O((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Yw(b[d],a);if(e)return e}return NaN}
function Yw(a,b){if(a=bw(b)[a])return"number"===typeof a?a:a[a.length-1]}
function Qw(a){var b=Yw("_start",a),c=Xw(a);b&&c&&!Kw&&(Mq(zw,new yw(Math.round(c-b),a)),Kw=!0)}
function Zw(a,b){for(var c=t(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!Zw(a[d],b[d]))return!1;return!0}
function Tw(){if(Hw.getEntriesByType){var a=Hw.getEntriesByType("paint");if(a=mb(a,function(b){return"first-paint"===b.name}))return Iw(a.startTime)}a=Hw.timing;
return a.Le?Math.max(0,a.Le):0}
;function $w(a,b){Zm(function(){gw("").info.actionType=a;b&&Vm("TIMING_AFT_KEYS",b);Vm("TIMING_ACTION",a);if(P("web_csi_via_jspb")){var c=O("TIMING_INFO",{}),d=new tm;c=t(Object.entries(c));for(var e=c.next();!e.done;e=c.next()){var f=t(e.value);e=f.next().value;f=f.next().value;switch(e){case "GetBrowse_rid":wm(d,rm(qm(e),String(f)));break;case "GetGuide_rid":wm(d,rm(qm(e),String(f)));break;case "GetHome_rid":wm(d,rm(qm(e),String(f)));break;case "GetPlayer_rid":wm(d,rm(qm(e),String(f)));break;case "GetSearch_rid":wm(d,
rm(qm(e),String(f)));break;case "GetSettings_rid":wm(d,rm(qm(e),String(f)));break;case "GetTrending_rid":wm(d,rm(qm(e),String(f)));break;case "GetWatchNext_rid":wm(d,rm(qm(e),String(f)));break;case "yt_red":G(d,14,!!f);break;case "yt_ad":G(d,9,!!f)}}Ow(d);d=new tm;d=G(d,25,!0);d=G(d,1,X[nw(O("TIMING_ACTION"))]);(c=O("PREVIOUS_ACTION"))&&G(d,13,X[nw(c)]);(c=O("CLIENT_PROTOCOL"))&&G(d,33,c);(c=O("CLIENT_TRANSPORT"))&&G(d,34,c);(c=$u())&&"UNDEFINED_CSN"!==c&&G(d,4,c);c=Rw();1!==c&&-1!==c||G(d,6,!0);
c=$v();aw();G(d,3,"cold");Sw(c);c=Ww();if(0<c.length)for(c=t(c),e=c.next();!e.done;e=c.next())e=e.value,f=new sm,G(f,1,e),ve(d,83,sm,f);Ow(d)}else{d=O("TIMING_INFO",{});for(c in d)d.hasOwnProperty(c)&&Mw(c,d[c]);d={isNavigation:!0,actionType:nw(O("TIMING_ACTION"))};if(c=O("PREVIOUS_ACTION"))d.previousAction=nw(c);if(c=O("CLIENT_PROTOCOL"))d.httpProtocol=c;if(c=O("CLIENT_TRANSPORT"))d.transportProtocol=c;(c=$u())&&"UNDEFINED_CSN"!==c&&(d.clientScreenNonce=c);c=Rw();if(1===c||-1===c)d.isVisible=!0;
aw();$v();d.loadType="cold";Sw($v());c=Ww();if(0<c.length)for(d.resourceInfo=[],c=t(c),e=c.next();!e.done;e=c.next())d.resourceInfo.push({resourceCache:e.value});Nw(d)}d=$v();c=dw();if("cold"===aw().loadType&&("cold"===d.yt_lt||"cold"===c.loadType)){e=bw();f=cw();f=f.gelTicks?f.gelTicks:f.gelTicks={};for(var g in e)if(!(g in f))if("number"===typeof e[g])Pw(g,Yw(g));else if(P("log_repeated_ytcsi_ticks"))for(var h=t(e[g]),l=h.next();!l.done;l=h.next())l=l.value,Pw(g.slice(1),l);g={};e=!1;f=t(Object.keys(d));
for(h=f.next();!h.done;h=f.next())h=h.value,(h=ow(h,d[h]))&&!Zw(dw(),h)&&(Uv(c,h),Uv(g,h),e=!0);e&&Nw(g)}y("ytglobal.timingready_",!0);g=O("TIMING_ACTION");B("ytglobal.timingready_")&&g&&ax()&&Xw()&&Qw()})()}
function bx(a,b,c,d){Zm(Mw)(a,b,c,d)}
function cx(a,b,c){return Zm(Pw)(a,b,c)}
function ax(){return Zm(function(){return"_start"in bw()})()}
function dx(){Zm(function(){var a=ew();requestAnimationFrame(function(){setTimeout(function(){a===ew()&&cx("ol",void 0,void 0)},0)})})()}
var ex=window;ex.ytcsi&&(ex.ytcsi.info=bx,ex.ytcsi.tick=cx);var fx="tokens consistency mss client_location entities response_received_commands store PLAYER_PRELOAD".split(" "),gx=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function hx(a,b,c,d){this.j=a;this.Y=b;this.m=c;this.l=d;this.i=void 0;this.h=new Map;a.nb||(a.nb={});a.nb=Object.assign({},Tv,a.nb)}
function ix(a,b,c,d){if(void 0!==hx.h){if(d=hx.h,a=[a!==d.j,b!==d.Y,c!==d.m,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new S("InnerTubeTransportService is already initialized",a);
}else hx.h=new hx(a,b,c,d)}
function jx(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Zn:c;var d=Lv(b,a.j);if(!d)return bg(new S("Error: No request builder found for command.",b));var e=d.m(b,void 0,c);return e?new Wf(function(f){var g,h,l;return w(function(m){if(1==m.h){h="cors"===(null==(g=e.lb)?void 0:g.mode)?"cors":void 0;if(a.m.mf){var p=e.config,r;p=null==p?void 0:null==(r=p.dc)?void 0:r.sessionIndex;r=Yn(0,{sessionIndex:p});l=Object.assign({},kx(h),r);return m.A(2)}return m.yield(lx(e.config,
h),3)}2!=m.h&&(l=m.i);f(mx(a,e,l));m.h=0})}):bg(new S("Error: Failed to build request for command.",b))}
function nx(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.Ig)?0:d.Mg)&&a.l){d=t(fx);for(var e=d.next();!e.done;e=d.next())e=e.value,a.l[e]&&a.l[e].handleResponse(b,c)}}
function mx(a,b,c){var d,e,f,g,h,l,m,p,r,z,u,A,C,D,N,R,T,ha,ba,sa,Sa,Ea,Fa,za,ra,L,uf,Xc,vf;return w(function(oa){switch(oa.h){case 1:oa.A(2);break;case 3:if((d=oa.i)&&!d.isExpired())return oa.return(Promise.resolve(d.h()));case 2:if(!(null==(e=b)?0:null==(f=e.Oa)?0:f.context)){oa.A(4);break}g=b.Oa.context;if(!P("web_async_context_processor")){h=t([]);for(l=h.next();!l.done;l=h.next())m=l.value,m.Fg(g);oa.A(4);break}return oa.yield([].reduce(function(wf,Ph){return wf.then(function(){return Ph.Eg(g)})},
Promise.resolve()),4);
case 4:if(null==(p=a.i)||!p.Jg(b.input,b.Oa)){oa.A(7);break}return oa.yield(a.i.Bg(b.input,b.Oa),8);case 8:return r=oa.i,P("kevlar_process_local_innertube_responses_killswitch")||nx(a,r,b),oa.return(r);case 7:return(A=null==(u=b.config)?void 0:u.Ia)&&a.h.has(A)&&P("web_memoize_inflight_requests")?z=a.h.get(A):(C=JSON.stringify(b.Oa),R=null!=(N=null==(D=b.lb)?void 0:D.headers)?N:{},b.lb=Object.assign({},b.lb,{headers:Object.assign({},R,c)}),T=Object.assign({},b.lb),"POST"===b.lb.method&&(T=Object.assign({},
T,{body:C})),(null==(ha=b.config)?0:ha.Ue)&&cx(b.config.Ue),ba=function(){return a.Y.fetch(b.input,T,b.config)},z=ba(),A&&a.h.set(A,z)),oa.yield(z,9);
case 9:if((sa=oa.i)&&"error"in sa&&(null==(Sa=sa)?0:null==(Ea=Sa.error)?0:Ea.details))for(Fa=sa.error.details,za=t(Fa),ra=za.next();!ra.done;ra=za.next())L=ra.value,(uf=L["@type"])&&-1<gx.indexOf(uf)&&(delete L["@type"],sa=L);A&&a.h.has(A)&&a.h.delete(A);(null==(Xc=b.config)?0:Xc.Ve)&&cx(b.config.Ve);if(sa||null==(vf=a.i)||!vf.vg(b.input,b.Oa)){oa.A(10);break}return oa.yield(a.i.Ag(b.input,b.Oa),11);case 11:sa=oa.i;case 10:return nx(a,sa,b),oa.return(sa||void 0)}})}
function lx(a,b){var c,d,e,f;return w(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.dc)?void 0:d.sessionIndex;var h=g.yield;var l=ag(Yn(0,{sessionIndex:e}));return h.call(g,l,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},kx(b),f)))})}
function kx(a){var b={"Content-Type":"application/json"};O("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=O("EOM_VISITOR_DATA"):O("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=O("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=O("LOGGED_IN",!1);"cors"!==a&&((a=O("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=O("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=O("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=O("DOMAIN_ADMIN_STATE"))&&
(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var ox=new ot("INNERTUBE_TRANSPORT_TOKEN");var px=["share/get_web_player_share_panel"],qx=["feedback"],rx=["notification/modify_channel_preference"],sx=["browse/edit_playlist"],tx=["subscription/subscribe"],ux=["subscription/unsubscribe"];function vx(){}
v(vx,Qv);vx.prototype.j=function(){return tx};
vx.prototype.h=function(a){return At(a,Mm)||void 0};
vx.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
ea.Object.defineProperties(vx.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function wx(){}
v(wx,Qv);wx.prototype.j=function(){return ux};
wx.prototype.h=function(a){return At(a,Lm)||void 0};
wx.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
ea.Object.defineProperties(wx.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function xx(){}
v(xx,Qv);xx.prototype.j=function(){return qx};
xx.prototype.h=function(a){return At(a,ul)||void 0};
xx.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
ea.Object.defineProperties(xx.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function yx(){}
v(yx,Qv);yx.prototype.j=function(){return rx};
yx.prototype.h=function(a){return At(a,Km)||void 0};
yx.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function zx(){}
v(zx,Qv);zx.prototype.j=function(){return sx};
zx.prototype.h=function(a){return At(a,Jm)||void 0};
zx.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Ax(){}
v(Ax,Qv);Ax.prototype.j=function(){return px};
Ax.prototype.h=function(a){return At(a,Im)};
Ax.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Bx=new ot("NETWORK_SLI_TOKEN");function Cx(a){this.h=a}
Cx.prototype.fetch=function(a,b){var c=this,d,e,f;return w(function(g){c.h&&(d=Ac(Bc(5,Oc(a,"key")))||"/UNKNOWN_PATH",c.h.start(d));e=b;P("wug_networking_gzip_request")&&(e=er(b));f=new window.Request(a,e);return P("web_fetch_promise_cleanup_killswitch")?g.return(Promise.resolve(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){Fu(h)}))):g.return(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){Fu(h)}))})};
Cx.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.yg(),b=b.then(function(c){Fu(new S("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
Cx[nt]=[new pt(Bx)];var Dx=new ot("NETWORK_MANAGER_TOKEN");var Ex;function Fx(){var a=Gx,b=Hx,c=Ix;this.l=Jx;this.navigate=a;this.i=b;this.j=c;this.h=new Set}
function Kx(a,b,c){if(Lx(b))Mx(a,b,c);else{var d=a.l(b,c);if(null==c?0:c.Ac)d.Ac=c.Ac;0===d.type?a.navigate?Nx(d.command)?Ox(a,d.command)||(b=a.navigate(d)||[],eg(b).then(function(){a.h.delete(d.command)})):Eu(Error("Error: Command handler page requests need to specify a url.")):Eu(Error("Error: Command handler navigate function was called but not set.")):1===d.type?a.i?Ox(a,d.command)||(b=a.i(d),eg(b).then(function(){a.h.delete(d.command)})):Eu(Error("Error: Command handler handle service request function was called but not set.")):
2===d.type&&(a.j?a.j(d):Eu(Error("Error: Command handler send action was called but not set.")))}}
function Ox(a,b){if(a.h.has(b))return!0;a.h.add(b);return!1}
function Lx(a){var b=!!At(a,Tk),c;a="CLIENT_SIGNAL"===(null==(c=At(a,sl))?void 0:c.signal);return b||a}
function Mx(a,b,c){var d=At(b,Tk);if(d)var e=(null==d?void 0:d.commands)||[];else{var f;if("CLIENT_SIGNAL"===(null==(f=At(b,sl))?void 0:f.signal)){var g;e=(null==(g=At(b,sl))?void 0:g.actions)||[]}}if(e)for(b=t(e),e=b.next();!e.done;e=b.next()){e=e.value;try{Kx(a,e,c)}catch(h){h instanceof Error&&Eu(h)}}else Eu(Error("Could not handle the meta command."))}
function Nx(a){var b;return!(null==(b=At(null==a?void 0:a.commandMetadata,rl))||!b.url)}
;function Px(a){a=void 0===a||a?Ou():Nu();for(var b=[],c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")}
;function Qx(a){Gq.call(this,1,arguments);this.csn=a}
v(Qx,Gq);var Pq=new Hq("screen-created",Qx),Rx=[],Tx=Sx,Ux=0;function Vx(a,b,c,d,e,f,g,h){function l(){Fu(new S("newScreen() parent element does not have a VE - rootVe",b))}
var m=Tx(),p=new Tu({veType:b,youtubeData:f,jspbYoutubeData:void 0});f={sequenceGroup:m};e&&(f.cttAuthInfo=e);if(P("il_via_jspb")){e=gm((new fm).h(m),p.getAsJspb());c&&c.visualElement?(p=new dm,c.clientScreenNonce&&G(p,2,c.clientScreenNonce),em(p,c.visualElement.getAsJspb()),g&&G(p,4,Cm[g]),H(e,dm,5,p)):c&&l();d&&G(e,3,d);if(P("expectation_logging")&&h&&h.screenCreatedLoggingExpectations){c=new Wk;h=t(h.screenCreatedLoggingExpectations.expectedParentScreens||[]);for(d=h.next();!d.done;d=h.next())d=
d.value,d.screenVeType&&(d=Vk(new Uk,d.screenVeType),ve(c,1,Uk,d));H(e,Wk,7,c)}wu(e,f,a)}else e={csn:m,pageVe:p.getAsJson()},P("expectation_logging")&&h&&h.screenCreatedLoggingExpectations&&(e.screenCreatedLoggingExpectations=h.screenCreatedLoggingExpectations),c&&c.visualElement?(e.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(e.implicitGesture.gestureType=g)):c&&l(),d&&(e.cloneCsn=d),a?lu("screenCreated",e,a,f):Lo("screenCreated",e,f);Mq(Pq,new Qx(m));
return m}
function Wx(a,b,c,d){var e=d.filter(function(l){l.csn!==b?(l.csn=b,l=!0):l=!1;return l}),f={cttAuthInfo:cv(b)||void 0,
sequenceGroup:b};d=t(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(sb(g)||!g.trackingParams&&!g.veType)&&Fu(Error("Child VE logged with no data"));if(P("il_via_jspb")){var h=jm((new hm).h(b),c.getAsJspb());kb(e,function(l){l=l.getAsJspb();ve(h,3,Zl,l)});
"UNDEFINED_CSN"===b?Xx("visualElementAttached",f,void 0,h):xu(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:kb(e,function(l){return l.getAsJson()})},"UNDEFINED_CSN"===b?Xx("visualElementAttached",f,c):a?lu("visualElementAttached",c,a,f):Lo("visualElementAttached",c,f)}
function Yx(a,b,c,d,e,f){d={cttAuthInfo:cv(b)||void 0,sequenceGroup:b};P("il_via_jspb")?(e=(new mm).h(b),c=c.getAsJspb(),c=H(e,Zl,2,c),c=G(c,4,1),f&&H(c,bm,3,f),"UNDEFINED_CSN"===b?Xx("visualElementShown",d,void 0,c):su(c,d,a)):(f={csn:b,ve:c.getAsJson(),eventType:1},e&&(f.clientData=e),"UNDEFINED_CSN"===b?Xx("visualElementShown",d,f):a?lu("visualElementShown",f,a,d):Lo("visualElementShown",f,d))}
function Zx(a,b,c){var d=!0,e=(d=void 0===d?!1:d)?16:8,f={cttAuthInfo:cv(b)||void 0,sequenceGroup:b,endOfSequence:d};P("il_via_jspb")?(e=(new lm).h(b),c=c.getAsJspb(),c=H(e,Zl,2,c),G(c,4,d?16:8),"UNDEFINED_CSN"===b?Xx("visualElementHidden",f,void 0,c):tu(c,f,a)):(d={csn:b,ve:c.getAsJson(),eventType:e},"UNDEFINED_CSN"===b?Xx("visualElementHidden",f,d):a?lu("visualElementHidden",d,a,f):Lo("visualElementHidden",d,f))}
function $x(a,b,c,d){var e={cttAuthInfo:cv(b)||void 0,sequenceGroup:b};P("il_via_jspb")?(d=(new km).h(b),c=c.getAsJspb(),c=H(d,Zl,2,c),G(c,4,Cm.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK),"UNDEFINED_CSN"===b?Xx("visualElementGestured",e,void 0,c):uu(c,e,a)):(c={csn:b,ve:c.getAsJson(),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},d&&(c.clientData=d),"UNDEFINED_CSN"===b?Xx("visualElementGestured",e,c):a?lu("visualElementGestured",c,a,e):Lo("visualElementGestured",c,e))}
function ay(a,b,c,d){var e={cttAuthInfo:cv(b)||void 0,sequenceGroup:b};P("il_via_jspb")?(d=new nm,d.h(b),c=c.getAsJspb(),H(d,Zl,2,c),"UNDEFINED_CSN"===b?Xx("visualElementStateChanged",e,void 0,d):vu(d,e,a)):(c={csn:b,ve:c.getAsJson(),clientData:d},"UNDEFINED_CSN"===b?Xx("visualElementStateChanged",e,c):a?lu("visualElementStateChanged",c,a,e):Lo("visualElementStateChanged",c,e))}
function Sx(){var a;P("enable_web_96_bit_csn")?a=Px():P("enable_web_96_bit_csn_no_crypto")?a=Px(!1):a=zd(Qc(Math.random()+""),3);return a}
function Xx(a,b,c,d){Rx.push({payloadName:a,payload:c,Va:d,options:b});Ux||(Ux=Qq())}
function Rq(a){if(Rx){for(var b=t(Rx),c=b.next();!c.done;c=b.next())if(c=c.value,P("il_via_jspb")&&c.Va)switch(c.Va.h(a.csn),c.payloadName){case "screenCreated":wu(c.Va,c.options);break;case "visualElementAttached":xu(c.Va,c.options);break;case "visualElementShown":su(c.Va,c.options);break;case "visualElementHidden":tu(c.Va,c.options);break;case "visualElementGestured":uu(c.Va,c.options);break;case "visualElementStateChanged":vu(c.Va,c.options);break;default:Fu(new S("flushQueue unable to map payloadName to JSPB setter"))}else c.payload&&
(c.payload.csn=a.csn,Lo(c.payloadName,c.payload,c.options));Rx.length=0}Ux=0}
;function by(a,b){Zm(Yx)(void 0,a,b,void 0,void 0,void 0)}
;function cy(){this.j=new Set;this.i=new Set;this.l=new Map;this.client=void 0;this.csn=null}
function dy(){cy.h||(cy.h=new cy);return cy.h}
cy.prototype.Eb=function(a){this.client=a};
cy.prototype.h=function(){this.clear();this.csn=$u()};
cy.prototype.clear=function(){this.j.clear();this.i.clear();this.l.clear();this.csn=null};function ey(){}
ey.prototype.Eb=function(a){Zm(dy().Eb).bind(dy())(a)};
function fy(){ey.h||(ey.h=new ey);Zm(dy().h).bind(dy())()}
ey.prototype.clear=function(){Zm(dy().clear).bind(dy())()};function gy(){this.u=[];this.U=[];this.h=[];this.M=[];this.m=[];this.ea=[];this.j=new Map;this.o=new Map;this.i=new Set;this.R=new Map}
k=gy.prototype;k.Eb=function(a){this.client=a};
k.pd=function(a){var b=this;var c=void 0===c?{}:c;Zm(function(){gv.includes(a)||(Fu(new S("createClientScreen() called with a non-page VE",a)),a=83769);c.isHistoryNavigation||(b.M=[],b.h.push({rootVe:a,key:c.key||""}));b.u=[];b.U=[];c.Ob?hy(b,a,c):iy(b,a,c)})()};
k.Jc=function(a,b){var c=this;b=void 0===b?0:b;Zm(function(){a.then(function(d){c.i.has(b)&&c.l&&c.l();var e=$u(b),f=Yu(b);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&Wx(c.client,e,f,[Uu(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&Wx(c.client,e,f,[Uu(d.playerResponse.trackingParams)])}})})()};
k.hb=function(a,b,c){var d=this;c=void 0===c?0:c;Zm(function(){if(d.i.has(c))return d.u.push([a,b]),!0;var e=$u(c),f=b||Yu(c);if(e&&f){if(P("combine_ve_grafts")){var g=d.j.get(f.toString());g?g.push(a):(d.o.set(f.toString(),f),d.j.set(f.toString(),[a]));d.F||(d.F=xo(function(){jy(d,e)},1200))}else Wx(d.client,e,f,[a]);
return!0}return!1})()};
k.zc=function(a,b,c){if(!a)return!1;c=$u(void 0===c?0:c);if(!c)return!1;$x(this.client,c,Uu(a),b);return!0};
k.clickCommand=function(a,b,c){return this.zc(a.clickTrackingParams,b,void 0===c?0:c)};
k.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;0===c&&this.i.has(c)?this.U.push([a,b]):ky(this,a,b,c)};
function ky(a,b,c,d){d=void 0===d?0:d;var e=$u(d);b=b||Yu(d);e&&b&&ay(a.client,e,b,c)}
function hy(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.l=function(){iy(a,b,c);var f=Yu(c.layer);if(f){for(var g=t(a.u),h=g.next();!h.done;h=g.next())h=h.value,a.hb(h[0],h[1]||f,c.layer);f=t(a.U);for(g=f.next();!g.done;g=f.next())g=g.value,ky(a,g[0],g[1])}};
$u(c.layer)||a.l();if(c.Ob)for(var d=t(c.Ob),e=d.next();!e.done;e=d.next())a.Jc(e.value,c.layer);else Eu(Error("Delayed screen needs a data promise."))}
function iy(a,b,c){c=void 0===c?{}:c;var d=void 0;c.layer||(c.layer=0);d=void 0!==c.Uc?c.Uc:c.layer;var e=$u(d);d=Yu(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=O("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});P("combine_ve_grafts")&&e&&jy(a,e);try{var l=Vx(a.client,b,f,c.Mb,c.cttAuthInfo,g,c.Be,c.loggingExpectations)}catch(r){Iu(r,{We:b,rootVe:d,Pe:void 0,
me:e,Oe:f,Mb:c.Mb});Eu(r);return}dv(l,b,c.layer,c.cttAuthInfo);e&&"UNDEFINED_CSN"!==e&&d&&!av(e)&&Zx(a.client,e,d);a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=l||"");Zm(Nw)({clientScreenNonce:l},void 0,!1);fy();var m=Yu(c.layer);e&&"UNDEFINED_CSN"!==e&&m&&(P("web_mark_root_visible")||P("music_web_mark_root_visible"))&&by(l,m);a.i.delete(c.layer||0);a.l=void 0;var p;null==(p=a.R.get(c.layer))||p.forEach(function(r,z){r?a.hb(z,r,c.layer):m&&a.hb(z,m,c.layer)});
ly(a)}
function ly(a){for(var b=0;b<a.m.length;b++){var c=a.m[b];try{c()}catch(d){Eu(d)}}for(b=a.m.length=0;b<a.ea.length;b++){c=a.ea[b];try{c()}catch(d){Eu(d)}}}
function jy(a,b){a.j.forEach(function(c,d){(d=a.o.get(d))&&Wx(a.client,b,d,c)});
a.j.clear();a.o.clear();a.F=void 0}
;function my(){this.u=[];this.U=[];this.h=[];this.M=[];this.m=[];this.ea=[];this.j=new Map;this.o=new Map;this.i=new Set;this.R=new Map}
k=my.prototype;k.Eb=function(a){this.client=a};
k.pd=function(a){var b=this;var c=void 0===c?{}:c;Zm(function(){gv.includes(a)||(Fu(new S("createClientScreen() called with a non-page VE",a)),a=83769);c.isHistoryNavigation||(b.M=[],b.h.push({rootVe:a,key:c.key||""}));b.u=[];b.U=[];c.Ob?ny(b,a,c):oy(b,a,c)})()};
k.Jc=function(a,b){var c=this;b=void 0===b?0:b;Zm(function(){a.then(function(d){c.i.has(b)&&c.l&&c.l();var e=$u(b),f=Yu(b);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&Wx(c.client,e,f,[Uu(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&Wx(c.client,e,f,[Uu(d.playerResponse.trackingParams)])}})})()};
k.hb=function(a,b,c){var d=this;c=void 0===c?0:c;Zm(function(){if(d.i.has(c))return d.u.push([a,b]),!0;var e=$u(c),f=b||Yu(c);if(e&&f){if(P("combine_ve_grafts")){var g=d.j.get(f.toString());g?g.push(a):(d.o.set(f.toString(),f),d.j.set(f.toString(),[a]));d.F||(d.F=xo(function(){py(d,e)},1200))}else Wx(d.client,e,f,[a]);
return!0}return!1})()};
k.zc=function(a,b,c){if(!a)return!1;c=$u(void 0===c?0:c);if(!c)return!1;$x(this.client,c,Uu(a),b);return!0};
k.clickCommand=function(a,b,c){return this.zc(a.clickTrackingParams,b,void 0===c?0:c)};
k.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;0===c&&this.i.has(c)?this.U.push([a,b]):qy(this,a,b,c)};
function qy(a,b,c,d){d=void 0===d?0:d;var e=$u(d);b=b||Yu(d);e&&b&&ay(a.client,e,b,c)}
function ny(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.l=function(){oy(a,b,c);var f=Yu(c.layer);if(f){for(var g=t(a.u),h=g.next();!h.done;h=g.next())h=h.value,a.hb(h[0],h[1]||f,c.layer);f=t(a.U);for(g=f.next();!g.done;g=f.next())g=g.value,qy(a,g[0],g[1])}};
$u(c.layer)||a.l();if(c.Ob)for(var d=t(c.Ob),e=d.next();!e.done;e=d.next())a.Jc(e.value,c.layer);else Eu(Error("Delayed screen needs a data promise."))}
function oy(a,b,c){c=void 0===c?{}:c;var d=void 0;c.layer||(c.layer=0);d=void 0!==c.Uc?c.Uc:c.layer;var e=$u(d);d=Yu(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=O("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});P("combine_ve_grafts")&&e&&py(a,e);try{var l=Vx(a.client,b,f,c.Mb,c.cttAuthInfo,g,c.Be,c.loggingExpectations)}catch(r){Iu(r,{We:b,rootVe:d,Pe:void 0,
me:e,Oe:f,Mb:c.Mb});Eu(r);return}dv(l,b,c.layer,c.cttAuthInfo);e&&"UNDEFINED_CSN"!==e&&d&&!av(e)&&Zx(a.client,e,d);a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=l||"");Zm(Nw)({clientScreenNonce:l},void 0,!1);fy();var m=Yu(c.layer);e&&"UNDEFINED_CSN"!==e&&m&&(P("web_mark_root_visible")||P("music_web_mark_root_visible"))&&by(l,m);a.i.delete(c.layer||0);a.l=void 0;var p;null==(p=a.R.get(c.layer))||p.forEach(function(r,z){r?a.hb(z,r,c.layer):m&&a.hb(z,m,c.layer)});
ry(a)}
function ry(a){for(var b=0;b<a.m.length;b++){var c=a.m[b];try{c()}catch(d){Eu(d)}}for(b=a.m.length=0;b<a.ea.length;b++){c=a.ea[b];try{c()}catch(d){Eu(d)}}}
function py(a,b){a.j.forEach(function(c,d){(d=a.o.get(d))&&Wx(a.client,b,d,c)});
a.j.clear();a.o.clear();a.F=void 0}
;function sy(){var a,b,c;return w(function(d){if(1==d.h)return a=ut().resolve(ox),a?d.yield(jx(a),2):(Fu(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return Fu(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.wg;return d.return(c)}Fu(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var ty=x.caches,uy;function vy(a){var b=a.indexOf(":");return-1===b?{Fd:a}:{Fd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function wy(){return w(function(a){if(void 0!==uy)return a.return(uy);uy=new Promise(function(b){var c;return w(function(d){switch(d.h){case 1:return Aa(d,2),d.yield(ty.open("test-only"),4);case 4:return d.yield(ty.delete("test-only"),5);case 5:Ba(d,3);break;case 2:if(c=Ca(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(uy)})}
function xy(a){var b,c,d,e,f,g,h;w(function(l){if(1==l.h)return l.yield(wy(),2);if(3!=l.h){if(!l.i)return l.return(!1);b=[];return l.yield(ty.keys(),3)}c=l.i;d=t(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=vy(f),h=g.datasyncId,!h||a.includes(h)||b.push(ty.delete(f));return l.return(Promise.all(b).then(function(m){return m.some(function(p){return p})}))})}
function yy(){var a,b,c,d,e,f,g;return w(function(h){if(1==h.h)return h.yield(wy(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=vo("cache contains other");return h.yield(ty.keys(),3)}b=h.i;c=t(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=vy(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function zy(){try{return!!self.localStorage}catch(a){return!1}}
;function Ay(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function By(a){if(zy()){var b=Object.keys(window.localStorage);b=t(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Ay(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Cy(){if(!zy())return!1;var a=vo(),b=Object.keys(window.localStorage);b=t(b);for(var c=b.next();!c.done;c=b.next())if(c=Ay(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Dy(){sy().then(function(a){a&&(Zp(a),xy(a),By(a))})}
function Ey(){var a=new zs;Oi.ja(function(){var b,c,d,e;return w(function(f){switch(f.h){case 1:if(P("ytidb_clear_optimizations_killswitch")){f.A(2);break}b=vo("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];Zp(g);xy(g);By(g);return f.return()}c=Cy();return f.yield(yy(),3);case 3:return d=f.i,f.yield($p(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.ta()?Dy():a.l.add("publicytnetworkstatus-online",Dy,!0,void 0,void 0),f.h=0}})})}
;var ti=ia(["data-"]);function Fy(a){a&&(a.dataset?a.dataset[Gy("loaded")]="true":si(a))}
function Hy(a,b){return a?a.dataset?a.dataset[Gy(b)]:a.getAttribute("data-"+b):null}
var Iy={};function Gy(a){return Iy[a]||(Iy[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Jy=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Ky=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Ly(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Jy,""),c=c.replace(Ky,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else My(a,b,c)}
function My(a,b,c){c=void 0===c?null:c;var d=Ny(a),e=document.getElementById(d),f=e&&Hy(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=gt(d,b),b=""+Va(b),Oy[b]=f),g||(e=Py(a,d,function(){if(!Hy(e,"loaded")){Fy(e);kt(d);var h=ab(lt,d);vn(h,0)}},c)))}
function Py(a,b,c,d){d=void 0===d?null:d;var e=Jf("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);vi(e,Pk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Qy(a){a=Ny(a);var b=document.getElementById(a);b&&(lt(a),b.parentNode.removeChild(b))}
function Ry(a,b){a&&b&&(a=""+Va(b),(a=Oy[a])&&jt(a))}
function Ny(a){var b=document.createElement("a");sc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+yc(a)}
var Oy={};var Sy=[],Ty=!1;function Uy(){if(!P("disable_biscotti_fetch_for_ad_blocker_detection")&&!P("disable_biscotti_fetch_entirely_for_all_web_clients")&&pv()){var a=O("PLAYER_VARS",{});if("1"!=ub(a)&&!qv(a)){var b=function(){Ty=!0;"google_ad_status"in window?Vm("DCLKSTAT",1):Vm("DCLKSTAT",2)};
try{Ly("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Sy.push(Oi.ja(function(){if(!(Ty||"google_ad_status"in window)){try{Ry("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Ty=!0;Vm("DCLKSTAT",3)}},5E3))}}}
function Vy(){var a=Number(O("DCLKSTAT",0));return isNaN(a)?0:a}
;var Wy=window,hz,iz=P("web_enable_lifecycle_monitoring")&&(null==(hz=Wy.performance)?void 0:hz.measure);function jz(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Bo():d;this.j=c;this.scheduler=d;this.i=new ji;this.h=a;for(a={bb:0};a.bb<this.h.length;a={Ib:a.Ib,bb:a.bb},a.bb++)a.Ib=this.h[a.bb],c=function(e){return function(){e.Ib.Nc();b.h[e.bb].sc=!0;b.h.every(function(f){return!0===f.sc})&&b.i.resolve()}}(a),d=this.getPriority(a.Ib),d=yo(c,d),this.h[a.bb]=Object.assign({},a.Ib,{Nc:c,
jobId:d})}
function kz(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=t(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.sc||(a.scheduler.Fa(c.jobId),yo(c.Nc,10))}
jz.prototype.cancel=function(){for(var a=t(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.sc||this.scheduler.Fa(b.jobId),b.sc=!0;this.i.resolve()};
jz.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function lz(a){this.state=a;this.plugins=[];this.o=void 0;this.u={};iz&&window.performance.mark(this.state+"-start")}
k=lz.prototype;k.install=function(a){this.plugins.push(a);return this};
k.uninstall=function(){var a=this;Na.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
k.transition=function(a,b){var c=this;mz(this);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(kz(this.j),this.j=void 0);nz(this,a,b);this.state=a;iz&&window.performance.mark(this.state+"-start");d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(oz(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function oz(a,b){var c=b.filter(function(e){return 10===pz(a,e)}),d=b.filter(function(e){return 10!==pz(a,e)});
return a.u.Kg?function(){var e=Na.apply(0,arguments);return w(function(f){if(1==f.h)return f.yield(a.Xe.apply(a,[c].concat(ja(e))),2);a.Od.apply(a,[d].concat(ja(e)));f.h=0})}:function(){var e=Na.apply(0,arguments);
a.Ye.apply(a,[c].concat(ja(e)));a.Od.apply(a,[d].concat(ja(e)))}}
k.Ye=function(a){var b=Na.apply(1,arguments);Bo();for(var c={},d=t(a),e=d.next();!e.done;c={qb:c.qb},e=d.next())c.qb=e.value,zo(function(f){return function(){qz(f.qb.name);f.qb.callback.apply(f.qb,ja(b));rz(f.qb.name)}}(c))};
k.Xe=function(a){var b=Na.apply(1,arguments),c,d,e,f;return w(function(g){1==g.h&&(Bo(),c={},d=t(a),e=d.next());if(3!=g.h){if(e.done)return g.A(0);c.cb=e.value;c.Gb=void 0;f=function(h){return function(){qz(h.cb.name);var l=h.cb.callback.apply(h.cb,ja(b));"function"===typeof(null==l?void 0:l.then)?h.Gb=l.then(function(){rz(h.cb.name)}):rz(h.cb.name)}}(c);
zo(f);return c.Gb?g.yield(c.Gb,3):g.A(3)}c={cb:c.cb,Gb:c.Gb};e=d.next();return g.A(2)})};
k.Od=function(a){var b=Na.apply(1,arguments),c=this,d=a.map(function(e){return{Nc:function(){qz(e.name);e.callback.apply(e,ja(b));rz(e.name)},
priority:pz(c,e)}});
d.length&&(this.j=new jz(d))};
function pz(a,b){var c,d;return null!=(d=null!=(c=a.o)?c:b.priority)?d:0}
function mz(a){if(iz){var b=a.state+"-start",c=a.state+"-end";window.performance.mark(c);window.performance.measure(a.state,b,c)}}
function qz(a){iz&&a&&window.performance.mark(a+"-start")}
function rz(a){if(iz&&a){var b=a+"-start",c=a+"-end";window.performance.mark(c);window.performance.measure(a,b,c)}}
function nz(a,b,c){iz&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
ea.Object.defineProperties(lz.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function sz(a){lz.call(this,void 0===a?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.U},{from:"document_active",to:"document_disposed",action:this.l},{from:"document_disposed_preventable",to:"document_disposed",action:this.l},{from:"document_disposed_preventable",to:"flush_logs",action:this.m},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.m},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
v(sz,lz);sz.prototype.U=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
sz.prototype.l=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
sz.prototype.m=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
sz.prototype.i=function(){this.h=new Map};function tz(a){lz.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.m},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.l},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.m},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.m},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.l},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.l},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
P("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
v(tz,lz);tz.prototype.i=function(a,b){a(null==b?void 0:b.event);P("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
tz.prototype.h=function(a,b){a(null==b?void 0:b.event);P("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
tz.prototype.l=function(a,b){a(null==b?void 0:b.event)};
tz.prototype.m=function(a,b){a(null==b?void 0:b.event)};function uz(){this.j=new sz;this.l=new tz}
uz.prototype.install=function(){var a=Na.apply(0,arguments),b=this;a.forEach(function(c){b.j.install(c)});
a.forEach(function(c){b.l.install(c)})};function vz(){uz.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));a={};this.install((a.flush_logs={callback:this.i},a))}
v(vz,uz);vz.prototype.i=function(){if(P("web_fp_via_jspb")){var a=new Yl,b=$u();b&&G(a,1,b);b=new Am;te(b,Yl,380,Bm,a);ru(b);P("web_fp_via_jspb_and_json")&&Lo("finalPayload",{csn:$u()})}else Lo("finalPayload",{csn:$u()})};
vz.prototype.h=function(){Ku(Lu)};function wz(){}
function xz(){var a=B("ytglobal.storage_");a||(a=new wz,y("ytglobal.storage_",a));return a}
wz.prototype.estimate=function(){var a,b,c;return w(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(yz()):d.return()})};
function yz(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
y("ytglobal.storageClass_",wz);function Jo(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=pn("ytidb_transaction_ended_event_rate_limit_session",.2)}
Jo.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":P("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":P("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":zz(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=pn("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function zz(a,b){xz().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Az(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Az(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Az(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function Bz(a){this.args=void 0===a?null:a;this.returnValue=[]}
;var Cz=new Map;function Dz(a,b){if(!a)return null;a=Object.keys(a);a=t(a);for(var c=a.next();!c.done;c=a.next()){c=c.value;var d=c.toLowerCase();if(-1<d.indexOf(b,d.length-b.length))return c}return null}
;function Ez(a,b,c){var d;d||(d={bubbles:!0,cancelable:!1,composed:!0});null!==c&&void 0!==c&&(d.detail=c);b=new CustomEvent(b,d);a.dispatchEvent(b)}
;function Fz(a,b){b=new Bz(b);Ez(a,"yt-action",b);return b.returnValue}
function Gz(a,b,c,d){b&&b.length&&b.forEach(function(e){var f=Dz(e,"action")||Dz(e,"command")||Dz(e,"endpoint");if(f){var g="yt"+f;var h=Cz.get(g);h?g=h:(f="yt-"+f.replace(/([A-Z])/g,"-$1").toLowerCase(),Cz.set(g,f),g=f);At(e,ql)&&(g+="-"+At(e,ql).signal.toLowerCase().replace(/_/g,"-"))}else g=null;g&&(P("handle_service_request_actions")&&e.commandMetadata&&e.commandMetadata.webCommandMetadata&&e.commandMetadata.webCommandMetadata.sendPost?c&&P("use_source_element_if_present_for_actions")?Hz(c,[e]):
Hz(a,[e]):Fz(a,[e,c,d]))})}
function Hz(a,b){var c=[a];b&&c.push.apply(c,b);b=Fz(a,c);return 0<b.length&&(b=b[0],Ez(a,"yt-service-request-sent",b),b&&b.ajaxPromise)?(b.ajaxPromise.then(function(d){Ez(a,"yt-service-request-completed",d)},function(d){Ez(a,"yt-service-request-error",{error:d,
params:c})},a),b.ajaxPromise):ag()}
;function Jx(a,b,c){b=void 0===b?{}:b;var d,e=null==(d=At(a.commandMetadata,rl))?void 0:d.url;d=b.form||{};!c||d.element||d.skipDefaultElement||(b.form=b.form||{},b.form.element=c);if(e&&"/service_ajax"!==e)return{type:0,command:a,form:b.form};if(P("kevlar_service_command_check")){if(c=ut().resolve(ox),Kv(a,c.j))return Object.assign({},{type:1,command:a},b)}else{var f;if(null==(f=At(a.commandMetadata,rl))?0:f.apiUrl)return Object.assign({},{type:1,command:a},b)}return{type:2,command:a,form:b.form}}
function Hx(a){if(a.form){var b=a.form,c=Object.assign({},b);b=b.element;c=(delete c.element,c);if(b)return[Hz(b,[a.command,c,a.Ac])]}return[]}
function Ix(a){if(a.form){var b=a.form,c=Object.assign({},b);b=b.element;c=(delete c.element,c);b&&Gz(b,[a.command],b,c)}}
;function Iz(a,b,c){J.call(this);var d=this;c=c||O("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.targetOrigin="*";this.l=c;this.sessionId=null;this.channel="widget";this.F=!!a;this.u=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.F&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.targetOrigin=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.o||0<=hb(d.o,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.o=this.i=this.m=null;window.addEventListener("message",this.u)}
v(Iz,J);Iz.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){an(d)}}};
Iz.prototype.P=function(){window.removeEventListener("message",this.u);J.prototype.P.call(this)};function Jz(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Iz(!!O("WIDGET_ID_ENFORCE")),b=this.Re.bind(this);a.m=b;a.o=null;this.h.channel="widget";if(a=O("WIDGET_ID"))this.h.sessionId=a}
k=Jz.prototype;k.Re=function(a,b,c){"addEventListener"===a&&b?this.Mc(b[0],c):this.ed(a,b,c)};
k.ed=function(){};
k.Ec=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
k.Mc=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.Ec(a,b)),this.j[a]=!0)};
k.addEventListener=function(){};
k.ue=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Hc());this.sendMessage("onReady");ib(this.i,this.Md,this);this.i=[]};
k.Hc=function(){return null};
function Kz(a,b){a.sendMessage("infoDelivery",b)}
k.Md=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
k.sendMessage=function(a,b){this.Md({event:a,info:void 0===b?null:b})};
k.dispose=function(){this.h=null};var Lz={},Mz=(Lz["api.invalidparam"]=2,Lz.auth=150,Lz["drm.auth"]=150,Lz["heartbeat.net"]=150,Lz["heartbeat.servererror"]=150,Lz["heartbeat.stop"]=150,Lz["html5.unsupportedads"]=5,Lz["fmt.noneavailable"]=5,Lz["fmt.decode"]=5,Lz["fmt.unplayable"]=5,Lz["html5.missingapi"]=5,Lz["html5.unsupportedlive"]=5,Lz["drm.unavailable"]=5,Lz["mrm.blocked"]=151,Lz);var Nz=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Oz(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Pz(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=t(Nz);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Qz(a,b,c,d){if(Ua(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Rz(a){Jz.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.ef.bind(this));this.addEventListener("onVolumeChange",this.ff.bind(this));this.addEventListener("onApiChange",this.Ze.bind(this));this.addEventListener("onPlaybackQualityChange",this.bf.bind(this));this.addEventListener("onPlaybackRateChange",this.cf.bind(this));this.addEventListener("onStateChange",this.df.bind(this));this.addEventListener("onWebglSettingsChanged",
this.gf.bind(this))}
v(Rz,Jz);k=Rz.prototype;
k.ed=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Oz(a)){var d=b;if(Ua(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Pz(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Pz(e);break;case "loadPlaylist":case "cuePlaylist":e=Qz(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Oz(a)&&Kz(this,this.Hc())}};
k.Mc=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);Jz.prototype.Mc.call(this,a,b)};
k.Ec=function(a,b){var c=this,d=Jz.prototype.Ec.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
k.onReady=function(){var a=this.ue.bind(this);this.h.i=a;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var b=void 0===b?5:b;this.errorCode=a?Mz[a]||b:b;this.sendMessage("onError",this.errorCode.toString())}};
k.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
k.Hc=function(){if(!this.api)return null;var a=this.api.getApiInterface();nb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
k.df=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Kz(this,a)};
k.bf=function(a){Kz(this,{playbackQuality:a})};
k.cf=function(a){Kz(this,{playbackRate:a})};
k.Ze=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var l=f[g],m=this.api.getOption(e,l);b[e][l]=m}}this.sendMessage("apiInfoDelivery",b)};
k.ff=function(){Kz(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
k.ef=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Kz(this,a)};
k.gf=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Kz(this,a)};
k.dispose=function(){Jz.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Sz(a){J.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.Id,this)}
v(Sz,J);k=Sz.prototype;k.start=function(){this.started||this.h()||(this.started=!0,this.connection.mb("RECEIVING"))};
k.mb=function(a,b){this.started&&!this.h()&&this.connection.mb(a,b)};
k.Id=function(a,b,c){if(this.started&&!this.h()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Tz(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Uz(a,c))&&this.mb(a,c))}}};
k.addListener=function(a){if(!(a in this.i)){var b=this.af.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
k.af=function(a,b){this.started&&!this.h()&&this.connection.mb(a,this.Gc(a,b))};
k.Gc=function(a,b){if(null!=b)return{value:b}};
k.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
k.P=function(){var a=this.connection;a.h()||lj(a.i,"command",this.Id,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);J.prototype.P.call(this)};function Vz(a,b){Sz.call(this,b);this.api=a;this.start()}
v(Vz,Sz);Vz.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Vz.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Tz(a,b){switch(a){case "loadVideoById":return a=Pz(b),[a];case "cueVideoById":return a=Pz(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Qz(b),[a];case "cuePlaylist":return a=Qz(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Uz(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Vz.prototype.Gc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Sz.prototype.Gc.call(this,a,b)};
Vz.prototype.P=function(){Sz.prototype.P.call(this);delete this.api};function Wz(a){a=void 0===a?!1:a;J.call(this);this.i=new kj(a);Qe(this,this.i)}
bb(Wz,J);Wz.prototype.subscribe=function(a,b,c){return this.h()?0:this.i.subscribe(a,b,c)};
Wz.prototype.m=function(a,b){this.h()||this.i.eb.apply(this.i,arguments)};function Xz(a,b,c){Wz.call(this);this.l=a;this.j=b;this.id=c}
v(Xz,Wz);Xz.prototype.mb=function(a,b){this.h()||this.l.mb(this.j,this.id,a,b)};
Xz.prototype.P=function(){this.j=this.l=null;Wz.prototype.P.call(this)};function Yz(a,b,c){J.call(this);this.i=a;this.origin=c;this.j=Us(window,"message",this.l.bind(this));this.connection=new Xz(this,a,b);Qe(this,this.connection)}
v(Yz,J);Yz.prototype.mb=function(a,b,c,d){this.h()||a!==this.i||(a={id:b,command:c},d&&(a.data=d),this.i.postMessage(JSON.stringify(a),this.origin))};
Yz.prototype.l=function(a){if(!this.h()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.h()||c.m("command",b.command,b.data,a.origin)}}}};
Yz.prototype.P=function(){Vs(this.j);this.i=null;J.prototype.P.call(this)};function Zz(){this.state=1;this.h=null}
k=Zz.prototype;k.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){d=a.interpreterSafeScript.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var f=Bb();d=f?f.createScript(d):d;d=new Gb(d,Fb)}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=a.interpreterSafeUrl,Eb("From proto message. b/166824318"),e=Kb(e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());$z(this,d,e,a.program,b,c)}else Fu(Error("Cannot initialize botguard without program"))};
function $z(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,Ly(c,function(){window[g]?aA(a,d,g,e):(a.state=3,Qy(c),Fu(new S("Unable to load Botguard","from "+c)))},f)):b?(f=Jf("SCRIPT"),b instanceof Gb?(b instanceof Gb&&b.constructor===Gb?b=b.j:(Ra(b),b="type_error:SafeScript"),f.textContent=b,ui(f)):f.textContent=b,f.nonce=wc(),document.head.appendChild(f),document.head.removeChild(f),window[g]?aA(a,d,g,e):(a.state=4,Fu(new S("Unable to load Botguard from JS")))):Fu(new S("Unable to load VM; no url or JS provided"))}
function aA(a,b,c,d){a.state=5;try{var e=new ki({program:b,ze:c,Se:P("att_web_record_metrics")});e.jf.then(function(){a.state=6;d&&d(b)});
a.Yc(e)}catch(f){a.state=7,f instanceof Error&&Fu(f)}}
k.invoke=function(a){a=void 0===a?{}:a;return this.cd()?this.Vd({od:a}):null};
k.dispose=function(){this.gd()};
k.gd=function(){this.Yc(null);this.state=8};
k.cd=function(){return!!this.h};
k.Vd=function(a){return this.h.Pd(a)};
k.Yc=function(a){Oe(this.h);this.h=a};function bA(){var a=B("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function cA(){Zz.apply(this,arguments)}
v(cA,Zz);cA.prototype.gd=function(){this.state=8};
cA.prototype.Yc=function(a){var b;null==(b=bA())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Pd.bind(a)},y("yt.abuse.playerAttLoader",b),y("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(y("yt.abuse.playerAttLoader",null),y("yt.abuse.playerAttLoaderRun",null))};
cA.prototype.cd=function(){return!!bA()};
cA.prototype.Vd=function(a){return bA().bgvmc(a)};var dA=new cA;function eA(){return dA.cd()}
function fA(a){a=void 0===a?{}:a;return dA.invoke(a)}
;function gA(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||wb(b);this.assets=a.assets||{};this.attrs=a.attrs||wb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
gA.prototype.clone=function(){var a=new gA,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ra(c)?a[b]=wb(c):a[b]=c}return a};var hA=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function iA(a){a=a||"";if(window.spf){var b=a.match(hA);spf.style.load(a,b?b[1]:"",void 0)}else jA(a)}
function jA(a){var b=kA(a),c=document.getElementById(b),d=c&&Hy(c,"loaded");d||c&&!d||(c=lA(a,b,function(){if(!Hy(c,"loaded")){Fy(c);kt(b);var e=ab(lt,b);vn(e,0)}}))}
function lA(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Pk(a);tc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function kA(a){var b=Jf("A");sc(b,new Ob(a,Pb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+yc(a)}
;function mA(){J.call(this);this.i=[]}
v(mA,J);mA.prototype.P=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.callback,void 0)}J.prototype.P.call(this)};function nA(){mA.apply(this,arguments)}
v(nA,mA);function oA(a,b,c,d,e){J.call(this);var f=this;this.u=b;this.webPlayerContextConfig=d;this.Zb=e;this.za=!1;this.api={};this.ma=this.o=null;this.R=new kj;this.i={};this.ba=this.Da=this.elementId=this.tb=this.config=null;this.aa=!1;this.l=this.F=null;this.na={};this.ac=["onReady"];this.lastError=null;this.Kb=NaN;this.M={};this.cc=new nA(this);this.fa=0;this.j=this.m=a;Qe(this,this.R);pA(this);qA(this);Qe(this,this.cc);c?this.fa=vn(function(){f.loadNewVideoConfig(c)},0):d&&(rA(this),sA(this))}
v(oA,J);k=oA.prototype;k.getId=function(){return this.u};
k.loadNewVideoConfig=function(a){if(!this.h()){this.fa&&(window.clearTimeout(this.fa),this.fa=0);var b=a||{};b instanceof gA||(b=new gA(b));this.config=b;this.setConfig(a);sA(this);this.isReady()&&tA(this)}};
function rA(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.u,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.u:a.config.attrs.id=a.u);var c;(null==(c=a.j)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
k.setConfig=function(a){this.tb=a;this.config=uA(a);rA(this);if(!this.Da){var b;this.Da=vA(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.j&&(this.j.style.width=Fi(Number(b)||b)),(a=a.height)&&this.j&&(this.j.style.height=Fi(Number(a)||a))};
function tA(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function wA(a){var b=!0,c=xA(a);c&&a.config&&(a=yA(a),b=Hy(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function sA(a){if(!a.h()&&!a.aa){var b=wA(a);if(b&&"html5"===(xA(a)?"html5":null))a.ba="html5",a.isReady()||zA(a);else if(AA(a),a.ba="html5",b&&a.l&&a.m)a.m.appendChild(a.l),zA(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.F=function(){c=!0;var d=BA(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.config?uA(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig,a.Zb);zA(a)};
a.aa=!0;b?a.F():(Ly(yA(a),a.F),(b=CA(a))&&iA(b),DA(a)&&!c&&y("yt.player.Application.create",null))}}}
function xA(a){var b=If(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function zA(a){if(!a.h()){var b=xA(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.aa=!1;if(!BA(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}EA(a)}else a.Kb=vn(function(){zA(a)},50)}}
function EA(a){pA(a);a.za=!0;var b=xA(a);if(b){a.o=FA(a,b,"addEventListener");a.ma=FA(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=FA(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.o&&a.o(g,a.i[g]);tA(a);a.Da&&a.Da(a.api);a.R.eb("onReady",a.api)}
function FA(a,b,c){var d=b[c];return function(){var e=Na.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,Fu(f))}}}
function pA(a){a.za=!1;if(a.ma)for(var b in a.i)a.i.hasOwnProperty(b)&&a.ma(b,a.i[b]);for(var c in a.M)a.M.hasOwnProperty(c)&&window.clearTimeout(Number(c));a.M={};a.o=null;a.ma=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.tb};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
k.isReady=function(){return this.za};
function qA(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){kt("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){kt("WATCH_LATER_VIDEO_REMOVED",b)})}
k.addEventListener=function(a,b){var c=this,d=vA(this,b);d&&(0<=hb(this.ac,a)||this.i[a]||(b=GA(this,a),this.o&&this.o(a,b)),this.R.subscribe(a,d),"onReady"===a&&this.isReady()&&vn(function(){d(c.api)},0))};
k.removeEventListener=function(a,b){this.h()||(b=vA(this,b))&&lj(this.R,a,b)};
function vA(a,b){var c=b;if("string"===typeof b){if(a.na[b])return a.na[b];c=function(){var d=Na.apply(0,arguments),e=B(b);if(e)try{e.apply(x,d)}catch(f){Eu(f)}};
a.na[b]=c}return c?c:null}
function GA(a,b){var c="ytPlayer"+b+a.u;a.i[b]=c;x[c]=function(d){var e=vn(function(){if(!a.h()){try{a.R.eb(b,null!=d?d:void 0)}catch(h){Fu(new S("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.u,data:d}))}var f=a.M,g=String(e);g in f&&delete f[g]}},0);
tb(a.M,String(e))};
return c}
k.getPlayerType=function(){return this.ba||(xA(this)?"html5":null)};
k.getLastError=function(){return this.lastError};
function AA(a){a.cancel();pA(a);a.ba=null;a.config&&(a.config.loaded=!1);var b=xA(a);b&&(wA(a)||!DA(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
k.cancel=function(){this.F&&Ry(yA(this),this.F);window.clearTimeout(this.Kb);this.aa=!1};
k.P=function(){AA(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){Eu(b)}this.na=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(x[this.i[a]]=null);this.tb=this.config=this.api=null;delete this.m;delete this.j;J.prototype.P.call(this)};
function DA(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function yA(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function CA(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function BA(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===dn(c||"","&")[b]}
function uA(a){for(var b={},c=t(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?wb(e):e}return b}
;var HA={},IA="player_uid_"+(1E9*Math.random()>>>0);function JA(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?If(c):c;var e=IA+"_"+Va(c),f=HA[e];if(f&&d)return KA(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new oA(c,e,a,b,void 0);HA[e]=f;kt("player-added",f.api);Re(f,function(){delete HA[f.getId()]});
return f.api}
function KA(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var LA=null,MA=null,NA=null;function OA(){PA()}
function QA(){PA()}
function PA(){var a=LA.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Gx(a){var b,c;if(a=null==(b=a.command)?void 0:null==(c=b.urlEndpoint)?void 0:c.url)b=window,c=oi(a),void 0!==c&&b.open(c,void 0,void 0);return[]}
function RA(){LA&&LA.sendAbandonmentPing&&LA.sendAbandonmentPing();O("PL_ATT")&&dA.dispose();for(var a=Oi,b=0,c=Sy.length;b<c;b++)a.Fa(Sy[b]);Sy.length=0;Qy("//static.doubleclick.net/instream/ad_status.js");Ty=!1;Vm("DCLKSTAT",0);Pe(NA,MA);LA&&(LA.removeEventListener("onVideoDataChange",OA),LA.destroy())}
;function SA(a,b,c){a="ST-"+yc(a).toString(36);b=b?Hc(b):"";c=c||5;pv()&&bo(a,b,c)}
;function TA(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=O("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=O("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=Cc(window.location.href);g&&f.push(g);g=Cc(d);if(0<=hb(f,g)||!g&&0==d.lastIndexOf("/",0))if(P("autoescape_tempdata_url")&&(f=document.createElement("a"),sc(f,d),d=f.href),d&&(d=Dc(d),f=d.indexOf("#"),d=0>f?d:d.slice(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:$u()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
SA(d,b,h)}else SA(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var p=void 0===p?window:p;c=p.location;a=Jc(a,l)+m;var r=void 0===r?yi:r;a:{r=void 0===r?yi:r;for(l=0;l<r.length;++l)if(m=r[l],m instanceof wi&&m.Ge(a)){r=new Ob(a,Pb);break a}r=void 0}r=oi(r||Ub);void 0!==r&&(c.href=r)}return!0}
;y("yt.setConfig",Vm);y("yt.config.set",Vm);y("yt.setMsg",fv);y("yt.msgs.set",fv);y("yt.logging.errors.log",Eu);
y("writeEmbed",function(){var a=O("PLAYER_CONFIG");if(!a){var b=O("PLAYER_VARS");b&&(a={args:b})}zv(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=O("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);$w("embed",["ol"]);c=O("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=jn(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&$w("watch",["pbs","pbu","pbp"]);LA=JA(a,c);P("embeds_enable_server_driven_watch_again_on_youtube")&&!Fx.h&&(Fx.h=new Fx);LA.addEventListener("onVideoDataChange",OA);LA.addEventListener("onReady",QA);P("embeds_enable_server_driven_watch_again_on_youtube")&&LA.addEventListener("innertubeCommand",function(f){Kx(Fx.h,f)});
a=O("POST_MESSAGE_ID","player");O("ENABLE_JS_API")?NA=new Rz(LA):O("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(MA=new Yz(window.parent,a,b),NA=new Vz(LA,MA.connection));Uy();P("ytidb_create_logger_embed_killswitch")||Io();a={};vz.h||(vz.h=new vz);vz.h.install((a.flush_logs={callback:function(){Ut()}},a));
Ks();P("ytidb_clear_embedded_player")&&Oi.ja(function(){var f,g;if(!Ex){var h=ut(),l={Vc:Dx,Td:Cx};h.h.set(l.Vc,l);l={Bc:{feedbackEndpoint:Mv(xx),modifyChannelNotificationPreferenceEndpoint:Mv(yx),playlistEditEndpoint:Mv(zx),subscribeEndpoint:Mv(vx),unsubscribeEndpoint:Mv(wx),webPlayerShareEntityServiceEndpoint:Mv(Ax)}};var m=Jv(),p={};m&&(p.client_location=m);void 0===f&&(f=Xn());void 0===g&&(g=h.resolve(Dx));ix(l,g,f,p);f={Vc:ox,Ud:hx.h};h.h.set(f.Vc,f);Ex=h.resolve(ox)}Ey()})});
var UA=Zm(function(){dx();Av();if(!P("embeds_web_enable_ve_logging_unification")){if(P("use_core_sm")){gy.h||(gy.h=new gy);var a=gy.h}else my.h||(my.h=new my),a=my.h;a.pd(16623)}}),VA=Zm(function(a){a.persisted||(dx(),Av())}),WA=Zm(function(a){P("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?RA():a.persisted||RA()}),XA=Zm(RA);
window.addEventListener?(window.addEventListener("load",UA),window.addEventListener("pageshow",VA),window.addEventListener("pagehide",WA)):window.attachEvent&&(window.attachEvent("onload",UA),window.attachEvent("onunload",XA));y("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||eA);y("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||fA);y("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||Vy);
y("yt.player.exports.navigate",B("yt.player.exports.navigate")||TA);y("yt.util.activity.init",B("yt.util.activity.init")||Zs);y("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||bt);y("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||$s);}).call(this);
