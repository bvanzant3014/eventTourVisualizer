(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(t,e,n){t.exports=n(53)},38:function(t,e,n){},40:function(t,e,n){},53:function(t,e,n){"use strict";n.r(e);var r=n(9),a=n.n(r),o=n(22),i=n.n(o),c=(n(38),n(40),n(12)),u=n(3),l=n(4),s=n(5),h=n(1),f=n(6),p=n(8),d=function(t){function e(){return Object(u.a)(this,e),Object(s.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"scrollBarWrapper"},this.props.items.map(function(e){return a.a.createElement(v,{ticketLink:e.url,zoomFunc:t.props.zoomFunc,date:e.datetime_local,venue:e.venue,key:e.id})}))}}]),e}(a.a.Component),v=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(s.a)(this,Object(h.a)(e).call(this,t))).openInNewTab=function(t){window.open(t,"_blank","noopener,noreferrer")},n.handleClick=n.handleClick.bind(Object(p.a)(Object(p.a)(n))),n}return Object(f.a)(e,t),Object(l.a)(e,[{key:"handleClick",value:function(){this.props.zoomFunc(this.props.venue.location.lat,this.props.venue.location.lon)}},{key:"render",value:function(){var t=this,e=new Date(this.props.date+"Z"),n=new Intl.DateTimeFormat("en-US",{month:"short"}).format,r=e.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}),o=n(e);return a.a.createElement("div",null,a.a.createElement("div",{className:"venueInfoBox",onClick:this.handleClick},a.a.createElement("span",null,this.props.venue.name," (",this.props.venue.city," - ",this.props.venue.state,")"),a.a.createElement("br",null),a.a.createElement("span",{className:"dateText"},o," ",e.getDay(),", ",r)),a.a.createElement("div",{onClick:function(){return t.openInNewTab(t.props.ticketLink)},className:"showTicketBox"},a.a.createElement("span",null,"Book Tickets")))}}]),e}(a.a.Component),m=n(25),y=n(2),g=function(t){function e(t){return Object(u.a)(this,e),Object(s.a)(this,Object(h.a)(e).call(this,t))}return Object(f.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=new y.H({color:"#EFDFDD",side:y.m});return a.a.createElement(m.a,{ref:this.props.worldRef,pathsData:this.props.points,showGlobe:!1,showAtmosphere:!1,polygonsData:this.props.polygons,polygonCapMaterial:t,pathPoints:"coords",pathPointLat:function(t){return t[0]},pathPointLng:function(t){return t[1]},pathDashGap:1,pathDashAnimateTime:6e4,pathDashLength:.02,pathStroke:3,pathPointAlt:.02,pathColor:function(t){return t.color},backgroundColor:"rgba(0,0,0,0)",polygonSideColor:function(){return"rgba(0, 0, 0, 0)"},labelsData:this.props.labels,labelLat:function(t){return t.lat},labelLng:function(t){return t.lng},labelText:function(t){return t.name},labelSize:function(){return.15},labelDotRadius:function(){return.25},labelResolution:2,labelAltitude:.018,labelColor:function(t){return t.color}})}}]),e}(a.a.Component),b=n(26);function w(){w=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(D){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var a=e&&e.prototype instanceof h?e:h,o=Object.create(a.prototype),i=new O(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return L()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,i),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(D){return{type:"throw",arg:D}}}t.wrap=u;var s={};function h(){}function f(){}function p(){}var d={};c(d,a,function(){return this});var v=Object.getPrototypeOf,m=v&&v(v(x([])));m&&m!==e&&n.call(m,a)&&(d=m);var y=p.prototype=h.prototype=Object.create(d);function g(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var r;this._invoke=function(a,o){function i(){return new e(function(r,i){!function r(a,o,i,c){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(h).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,c)})}c(u.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}}function E(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function x(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=p,c(y,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(b.prototype),c(b.prototype,o,function(){return this}),t.AsyncIterator=b,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new b(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},g(y),c(y,i,"Generator"),c(y,a,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=x,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:x(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var E=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(s.a)(this,Object(h.a)(e).call(this,t))).handleButtonPress=function(t){n.setState({text:t}),n.handleButtonSubmit(t)},n.state={events:[],eventsPathData:[],propsData:[],polygonData:[],eventsLabelData:[],resultErrorString:""},n.worldRef=a.a.createRef(),n.handleChange=n.handleChange.bind(Object(p.a)(Object(p.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(Object(p.a)(n))),n.zoomToVenue=n.zoomToVenue.bind(Object(p.a)(Object(p.a)(n))),n}return Object(f.a)(e,t),Object(l.a)(e,[{key:"zoomToVenue",value:function(t,e){var n={lat:t,lng:e,altitude:.25};this.worldRef.current.pointOfView(n,1e3)}},{key:"componentDidMount",value:function(){this.handlePolygonLoad()}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"visualSpace"},a.a.createElement(d,{zoomFunc:this.zoomToVenue,items:this.state.events}),a.a.createElement("div",{id:"searchSection"},a.a.createElement("h3",null,"Event Tour Visualizer"),a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("input",{id:"new-todo",onChange:this.handleChange,value:this.state.text,placeholder:"Search band/team!"}),a.a.createElement("button",null,"Search")),a.a.createElement("button",{onClick:function(){return t.handleButtonPress("Twenty One Pilots")}},"Twenty One Pilots"),a.a.createElement("button",{onClick:function(){return t.handleButtonPress("Panic at the Disco")}},"Panic At The Disco"),a.a.createElement("button",{onClick:function(){return t.handleButtonPress("FC Barcelona")}},"FC Barcelona"),a.a.createElement("button",{onClick:function(){return t.handleButtonPress("Seattle Mariners")}},"Seattle Mariners"),a.a.createElement("div",null,a.a.createElement("span",{className:"errorMessage"},this.state.resultErrorString))),a.a.createElement(g,{worldRef:this.worldRef,points:this.state.eventsPathData,labels:this.state.eventsLabelData,polygons:this.state.polygonData}))}},{key:"filterEventDataToGlobeData",value:function(t,e){for(var n,r=[],a=[],o=0,i=0,c=0;c<t.length;c++){var u=t[c].venue.location.lat,l=t[c].venue.location.lon;u===o&&l===i||(r.push([u,l]),a.push({lat:u,lng:l,name:t[c].venue.name,color:"#A239CA"}),o=u,i=l)}return n=[{coords:r,color:"#4717F6",name:e}],console.log(n),{pathData:n,labelData:a}}},{key:"handleChange",value:function(t){this.setState({text:t.target.value})}},{key:"handleSubmit",value:function(){var t=Object(c.a)(w().mark(function t(e){return w().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e&&e.preventDefault(),t.next=3,this.handleButtonSubmit(this.state.text);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"handleButtonSubmit",value:function(){var t=Object(c.a)(w().mark(function t(e){var n,r,a;return w().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==e.length){t.next=2;break}return t.abrupt("return");case 2:return n="https://api.seatgeek.com/2/events?performers.slug="+function(t){for(var e=t.toLowerCase().split(" "),n="",r=0;r<e.length;r++)0!==r&&(n+="-"),n+=e[r];return n}(e)+"&per_page=100&client_id=MTgzNjYzMjF8MTU2ODI1NTkzNS41OA",t.next=5,fetch(n).then(function(t){return t.json()}).then(function(t){return t.events}).catch(function(t){console.log(t)});case 5:if(r=t.sent,!(a=this.filterEventDataToGlobeData(r,e)).labelData[0]){t.next=11;break}this.zoomToVenue(a.labelData[0].lat,a.labelData[0].lng),t.next=13;break;case 11:return this.setState(function(t){return{resultErrorString:"no results for: "+e+" \ud83d\ude14"}}),t.abrupt("return");case 13:this.setState(function(t){return{events:r,eventsPathData:a.pathData,eventsLabelData:a.labelData,text:""}});case 14:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"handlePolygonLoad",value:function(){var t=Object(c.a)(w().mark(function t(){var e=this;return w().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("//unpkg.com/world-atlas/land-110m.json").then(function(t){return t.json()}).then(function(t){e.setState(function(e){return{polygonData:b.a(t,t.objects.land).features}})});case 2:t.sent;case 3:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()}]),e}(a.a.Component);var k=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(E,null),a.a.createElement("div",{className:"attribution"},"Made with"," ",a.a.createElement("a",{href:"https://platform.seatgeek.com/",className:"technology"},"Seatgeak API,")," "," ",a.a.createElement("a",{href:"https://threejs.org/",className:"technology"},"Three.js,")," ","and "," ",a.a.createElement("a",{href:"https://reactjs.org/",className:"technology"},"React.")))},j=function(t){t&&t instanceof Function&&n.e(1).then(n.bind(null,57)).then(function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),r(t),a(t),o(t),i(t)})};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(k,null))),j()}},[[30,3,2]]]);
//# sourceMappingURL=main.f225a85f.chunk.js.map