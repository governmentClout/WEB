(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{6025:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=(n(339),n(342)),c=n(343),l=n(378),i=n(97),s=n.n(i),u=n(545),f=n(346),m=n(51),p=n(347),d=n(348);function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function E(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=E(this,b(t).call(this,e))).state={friends:[]},n}var n,i,h;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,a["Component"]),n=t,(i=[{key:"componentWillMount",value:function(){this.fetchFriends()}},{key:"fetchFriends",value:function(){var e=this,t=sessionStorage.getItem("uuid"),n=sessionStorage.getItem("token");s()({method:"get",url:"http://api.gclout.com:3000/users",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8",token:n,uuid:t}}).then(function(t){e.setState({friends:t.data})})}},{key:"searchHandler",value:function(e){e.preventDefault()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,function(e){var t=e.logout;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{logout:t}),r.a.createElement(p.a,{logout:t}))}),r.a.createElement("div",{className:"app-wrapper"},r.a.createElement("div",{className:"container app-container mx-auto d-flex"},r.a.createElement("div",{className:"page-70"},r.a.createElement("div",{className:"d-flex"},r.a.createElement(l.a,null),r.a.createElement("div",{className:"friends-list-container"},r.a.createElement("div",{className:"friends-list-header d-flex"},r.a.createElement("h5",null,r.a.createElement("strong",null,"300 Friends"))),r.a.createElement("div",{className:"friends-search-container"},r.a.createElement("form",{className:"searchContainer",onSubmit:this.searchHandler},r.a.createElement("input",{className:"searchBox",type:"search",placeholder:"Type in to search..."}),r.a.createElement("span",{className:"searchIconContainer"},r.a.createElement("i",{className:"fas fa-search searchIcon"})))),r.a.createElement("div",{className:"friends-list"},this.state.friends.map(function(e){return r.a.createElement(u.a,{friend:e})}))))),r.a.createElement("div",{className:"page-30 d-none d-md-block",style:{padding:"0px"}},r.a.createElement(o.a,null),r.a.createElement(c.a,null)))),r.a.createElement(f.a,null))}}])&&y(n.prototype,i),h&&y(n,h),t}();t.default=g}}]);
//# sourceMappingURL=Friends.dbcad90c.chunk.js.map