parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}var a=function(){function t(n){var a=n.selector,o=n.targetDate;e(this,t),this.selector=a,this.targetDate=o,this.referens=document.querySelector(this.selector),this.days=document.querySelector("".concat(this.selector,' [data-value="days"]')),this.hours=document.querySelector("".concat(this.selector,' [data-value="hours"]')),this.mins=document.querySelector("".concat(this.selector,' [data-value="mins"]')),this.secs=document.querySelector("".concat(this.selector,' [data-value="secs"]'))}return n(t,[{key:"start",value:function(){var e=this;this.referens.style.display="inline-flex",setInterval(function(){var t=Date.now();console.log(e.targetDate.getTime());var n=e.targetDate.getTime()-t,a=e.getTimeComponents(n);console.log(a),e.updateTime(a)},1e3)}},{key:"updateTime",value:function(e){var t=e.days,n=e.hours,a=e.mins,o=e.secs;this.days.textContent="".concat(t),this.hours.textContent="".concat(n),this.mins.textContent="".concat(a),this.secs.textContent="".concat(o)}},{key:"getTimeComponents",value:function(e){return{days:this.pad(Math.floor(e/864e5)),hours:this.pad(Math.floor(e%864e5/36e5)),mins:this.pad(Math.floor(e%36e5/6e4)),secs:this.pad(Math.floor(e%6e4/1e3))}}},{key:"pad",value:function(e){return String(e).padStart(2,"0")}}]),t}(),o=new a({selector:"#timer-1",targetDate:new Date("Jun 18, 2021")});o.start();
},{}]},{},["Focm"], null)
//# sourceMappingURL=/parcel-project-template/src.979287c3.js.map