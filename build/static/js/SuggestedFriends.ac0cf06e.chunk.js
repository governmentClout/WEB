(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{902:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=(n(333),n(336)),l=n(337),c=n(374),s=n(579),i=n(93),u=n.n(i),f=n(338),m=n(351),d=n(51),p=n(352),g=n(353);function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var w=function(e){function t(e){var n,a,r,o,l,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,r=b(t).call(this,e),n=!r||"object"!==h(r)&&"function"!==typeof r?E(a):r,o=E(E(n)),c=function(e){var t=e.target.value;if(""!==t){var a=n.state.suggesteds.filter(function(e){return-1!==e.lastName.indexOf(t)?e:null});n.setState({filtered:a})}else n.setState({filtered:n.state.suggesteds,keyword:t})},(l="searchUser")in o?Object.defineProperty(o,l,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[l]=c,n.state={suggesteds:[],filtered:[],keyword:"",loading:!1},n}var n,i,w;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,a["Component"]),n=t,(i=[{key:"componentWillMount",value:function(){this.fetchFriends()}},{key:"fetchFriends",value:function(){var e=this;this.setState({loading:!0});var t=sessionStorage.getItem("uuid"),n=sessionStorage.getItem("token");u()({method:"get",url:"http://api.gclout.com:3000/users",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8",token:n,uuid:t}}).then(function(t){console.log(t.data),e.setState({suggesteds:t.data,filtered:t.data,loading:!1})})}},{key:"render",value:function(){var e=this;return this.state.loading?r.a.createElement("img",{src:"https://i.gifer.com/8ZFL.gif",alt:"fake loader"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,function(e){var t=e.logout;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{logout:t}),r.a.createElement(p.a,{logout:t}))}),r.a.createElement("div",{className:"app-wrapper"},r.a.createElement("div",{className:"container app-container mx-auto d-flex"},r.a.createElement("div",{className:"page-70"},r.a.createElement("div",{className:"d-flex"},r.a.createElement(c.a,null),r.a.createElement("div",{className:"friends-list-container"},r.a.createElement("div",{className:"friends-list-header"},r.a.createElement("h5",null,"GClout Friends Suggestion"),r.a.createElement("p",null,"These are people you may know")),r.a.createElement("div",{className:"friends-search-container"},r.a.createElement("input",{className:"searchBox",type:"text",value:this.state.keyword,placeholder:"Type in to search...",onChange:function(t){return e.searchUser(t)}}),r.a.createElement("span",{className:"searchIconContainer"},r.a.createElement("i",{className:"fas fa-search searchIcon"}))),r.a.createElement("div",{className:"friends-list"},this.state.filtered.map(function(e){return r.a.createElement(s.a,{friend:e,type:"suggested"})}))))),r.a.createElement("div",{className:"page-30 d-none d-md-block",style:{padding:"0px"}},r.a.createElement(f.a,null),r.a.createElement(o.a,null),r.a.createElement(l.a,null)))),r.a.createElement(m.a,null))}}])&&y(n.prototype,i),w&&y(n,w),t}();t.default=w}}]);
//# sourceMappingURL=SuggestedFriends.ac0cf06e.chunk.js.map