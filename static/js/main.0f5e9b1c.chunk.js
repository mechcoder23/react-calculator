(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{15:function(e,t,n){e.exports=n(25)},20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(8),l=n.n(o),r=(n(20),n(9)),u=n(13),s=n(12),m=(n(21),n(27)),i=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).changeNum=function(e){a.setState({res:a.state.res+e.target.textContent})},a.clearLed=function(){a.setState({res:""})},a.handleEqual=function(){a.setState({res:m.a(a.state.res)}),console.log(a.state.res)},a.handleMultiply=function(){a.setState({res:a.state.res+"*"})},a.render=function(){return c.a.createElement("div",{className:"main-cont"},c.a.createElement("div",{className:"led"},c.a.createElement("h3",null,a.state.res)),c.a.createElement("div",{className:"calc-btn"},c.a.createElement("button",{onClick:a.changeNum},"1"),c.a.createElement("button",{onClick:a.changeNum},"2"),c.a.createElement("button",{onClick:a.changeNum},"3"),c.a.createElement("button",{className:"opr",onClick:a.changeNum},"+"),c.a.createElement("button",{onClick:a.changeNum},"4"),c.a.createElement("button",{onClick:a.changeNum},"5"),c.a.createElement("button",{onClick:a.changeNum},"6"),c.a.createElement("button",{className:"opr",onClick:a.changeNum},"-"),c.a.createElement("button",{onClick:a.changeNum},"7"),c.a.createElement("button",{onClick:a.changeNum},"8"),c.a.createElement("button",{onClick:a.changeNum},"9"),c.a.createElement("button",{className:"opr",onClick:a.handleMultiply},"x"),c.a.createElement("button",{className:"opr",onClick:a.clearLed},"C"),c.a.createElement("button",{onClick:a.changeNum},"0"),c.a.createElement("button",{className:"opr",onClick:a.changeNum},"."),c.a.createElement("button",{className:"opr",onClick:a.changeNum},"/"),c.a.createElement("button",{className:"answer",onClick:a.handleEqual},"=")))},a.state={res:""},a}return n}(c.a.Component),h=(n(23),function(){return c.a.createElement(i,null)});n(24);var E=function(){return c.a.createElement(h,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.0f5e9b1c.chunk.js.map