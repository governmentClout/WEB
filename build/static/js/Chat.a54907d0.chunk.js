(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{333:function(e,t,a){},337:function(e,t,a){"use strict";var n=a(1),r=a.n(n),l=a(512),c=(a(350),a(93)),s=a.n(c);function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=m(this,u(t).call(this,e))).state={friends:[]},a}var a,c,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,n["Component"]),a=t,(c=[{key:"componentDidMount",value:function(){this.fetchFriends()}},{key:"fetchFriends",value:function(){var e=this,t=sessionStorage.getItem("uuid"),a=sessionStorage.getItem("token");s()({method:"get",url:"http://api.gclout.com:3000/users",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8",token:a,uuid:t}}).then(function(t){e.setState({friends:t.data})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"suggestions"},r.a.createElement("div",{className:"suggestions-header"},r.a.createElement("h5",null,"People you may know")),r.a.createElement("div",{className:"suggestions-content"},r.a.createElement("div",{className:"single-suggestion dashed-border-bottom"},r.a.createElement("div",{className:"suggestion-image-wrapper"},r.a.createElement("img",{src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",className:"suggestion-image",alt:"suggested1"})),r.a.createElement("div",{className:"px-2"},r.a.createElement(l.a,{className:"text-gclout-blue",to:"/profile/id"},"David Benjamin"),r.a.createElement("p",{className:"text-muted"},"3 mutual Friends")),r.a.createElement("div",{className:"suggested-friend-actions"},r.a.createElement("button",{className:"btn btn-accept"},"Add"),r.a.createElement("button",{className:"btn btn-reject"},"Remove"))),r.a.createElement("div",{className:"single-suggestion dashed-border-bottom"},r.a.createElement("div",{className:"suggestion-image-wrapper"},r.a.createElement("img",{src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",className:"suggestion-image",alt:"suggested1"})),r.a.createElement("div",{className:"px-2"},r.a.createElement(l.a,{className:"text-gclout-blue",to:"/profile/id"},"David Benjamin"),r.a.createElement("p",{className:"text-muted"},"3 mutual Friends")),r.a.createElement("div",{className:"suggested-friend-actions"},r.a.createElement("button",{className:"btn btn-accept"},"Add"),r.a.createElement("button",{className:"btn btn-reject"},"Remove"))),r.a.createElement("div",{className:"single-suggestion dashed-border-bottom"},r.a.createElement("div",{className:"suggestion-image-wrapper"},r.a.createElement("img",{src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",className:"suggestion-image",alt:"suggested1"})),r.a.createElement("div",{className:"px-2"},r.a.createElement(l.a,{className:"text-gclout-blue",to:"/profile/id"},"David Benjamin"),r.a.createElement("p",{className:"text-muted"},"3 mutual Friends")),r.a.createElement("div",{className:"suggested-friend-actions"},r.a.createElement("button",{className:"btn btn-accept"},"Add"),r.a.createElement("button",{className:"btn btn-reject"},"Remove"))),r.a.createElement("div",{className:"single-suggestion dashed-border-bottom"},r.a.createElement("div",{className:"suggestion-image-wrapper"},r.a.createElement("img",{src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",className:"suggestion-image",alt:"suggested1"})),r.a.createElement("div",{className:"px-2"},r.a.createElement(l.a,{className:"text-gclout-blue",to:"/profile/id"},"David Benjamin"),r.a.createElement("p",{className:"text-muted"},"3 mutual Friends")),r.a.createElement("div",{className:"suggested-friend-actions"},r.a.createElement("button",{className:"btn btn-accept"},"Add"),r.a.createElement("button",{className:"btn btn-reject"},"Remove")))),r.a.createElement("div",{className:"suggestion-footer"},r.a.createElement(l.a,{to:"/friends/suggested",className:"suggestion-footer-link"},"View More")))}}])&&i(a.prototype,c),o&&i(a,o),t}();t.a=p},338:function(e,t,a){"use strict";var n=a(1),r=a.n(n);a(352);function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=s(this,o(t).call(this,e))).state={liked:!1},a}var a,l,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,n["Component"]),a=t,(l=[{key:"render",value:function(){return r.a.createElement("div",{className:"trending-section"},r.a.createElement("div",{className:"trending-section-header"},r.a.createElement("h5",null,"Trending for you")),r.a.createElement("div",{className:"trending-section-content"},r.a.createElement("div",{className:"trending-post"},r.a.createElement("div",{className:"d-flex align-content-center"},r.a.createElement("div",{className:"trending-image-wrapper"},r.a.createElement("img",{className:"trending-image",alt:"trending1",src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"})),r.a.createElement("div",{className:"trending-name"},r.a.createElement("p",null,"Mark Anthony"))),r.a.createElement("div",{className:"trending-text"},r.a.createElement("p",null,"Alternative answers to the question, \u201cWhat are you going to do with your life?\u201d")),r.a.createElement("div",{className:"d-flex no-gutters"},r.a.createElement("div",{className:"col-6 d-flex"},r.a.createElement("button",{className:"like-btn"},this.state.liked?r.a.createElement("i",{className:"fas fa-thumbs-up"}):r.a.createElement("i",{className:"far fa-thumbs-up"})," ","10 Likes"," ")),r.a.createElement("div",{className:"col-6 d-flex"},r.a.createElement("button",{className:"like-btn"},r.a.createElement("i",{className:"far fa-comment"})," 7 comments")))),r.a.createElement("div",{className:"trending-post"},r.a.createElement("div",{className:"d-flex align-content-center"},r.a.createElement("div",{className:"trending-image-wrapper"},r.a.createElement("img",{className:"trending-image",alt:"trending2",src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"})),r.a.createElement("div",{className:"trending-name"},r.a.createElement("p",null,"Mark Anthony"))),r.a.createElement("div",{className:"trending-text"},r.a.createElement("p",null,"Alternative answers to the question, \u201cWhat are you going to do with your life?\u201d")),r.a.createElement("div",{className:"d-flex no-gutters"},r.a.createElement("div",{className:"col-6 d-flex"},r.a.createElement("button",{className:"like-btn"},this.state.liked?r.a.createElement("i",{className:"fas fa-thumbs-up"}):r.a.createElement("i",{className:"far fa-thumbs-up"})," ","10 Likes"," ")),r.a.createElement("div",{className:"col-6 d-flex"},r.a.createElement("button",{className:"like-btn"},r.a.createElement("i",{className:"far fa-comment"})," 7 comments")))),r.a.createElement("div",{className:"trending-post"},r.a.createElement("div",{className:"d-flex align-content-center"},r.a.createElement("div",{className:"trending-image-wrapper"},r.a.createElement("img",{className:"trending-image",alt:"trending3",src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"})),r.a.createElement("div",{className:"trending-name"},r.a.createElement("p",null,"Mark Anthony"))),r.a.createElement("div",{className:"trending-text"},r.a.createElement("p",null,"Alternative answers to the question, \u201cWhat are you going to do with your life?\u201d")),r.a.createElement("div",{className:"d-flex no-gutters"},r.a.createElement("div",{className:"col-6 d-flex"},r.a.createElement("button",{className:"like-btn"},this.state.liked?r.a.createElement("i",{className:"fas fa-thumbs-up"}):r.a.createElement("i",{className:"far fa-thumbs-up"})," ","10 Likes"," ")),r.a.createElement("div",{className:"col-6 d-flex"},r.a.createElement("button",{className:"like-btn"},r.a.createElement("i",{className:"far fa-comment"})," 7 comments"))))))}}])&&c(a.prototype,l),m&&c(a,m),t}();t.a=m},350:function(e,t,a){},352:function(e,t,a){},499:function(e,t,a){"use strict";var n=a(330);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(1)),l=(0,n(a(334)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Clear");t.default=l},6128:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=(a(333),a(337)),c=a(338),s=a(499),o=a.n(s);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,a){return t&&d(e.prototype,t),a&&d(e,a),e}function f(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){return u(this,t),f(this,h(t).apply(this,arguments))}return E(t,n["Component"]),p(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"chat-interface"},r.a.createElement(v,null),r.a.createElement(N,null),r.a.createElement(v,null),r.a.createElement(v,null),r.a.createElement(N,null),r.a.createElement(v,null),r.a.createElement(N,null),r.a.createElement(w,null))}}]),t}(),v=function(){return r.a.createElement("div",{className:"chat-message-wrapper"},r.a.createElement("div",{className:"message-owner"},r.a.createElement("img",{src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",alt:"chat head"})),r.a.createElement("div",{className:"message-wrapper"},r.a.createElement("p",{className:"other-chat-message"},"Lorem ipsum dolor sit amet"),r.a.createElement("p",null,"1 day ago")))},N=function(){return r.a.createElement("div",{className:"chat-message-wrapper owner"},r.a.createElement("div",{className:"message-wrapper"},r.a.createElement("p",{className:"owner-chat-message"},"Lorem ipsum dolor sit amet, consectetuer fid adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet do"),r.a.createElement("p",{className:"message-time"},"1 day ago")),r.a.createElement("div",{className:"message-owner"},r.a.createElement("img",{src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",alt:"chat head"})))},w=function(e){function t(e){var a;return u(this,t),i(g(g(a=f(this,h(t).call(this,e)))),"keyPress",function(e){13===e.keyCode&&alert(a.state.message)}),i(g(g(a)),"sendMessage",function(){alert(a.state.message)}),a.state={message:"",loading:!1},a}return E(t,n["Component"]),p(t,[{key:"dataChange",value:function(e){this.setState({message:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"chat-input-wrapper"},r.a.createElement("input",{className:"form-control",type:"text",value:this.state.message,onChange:this.dataChange.bind(this),name:"message",placeholder:"Enter message here...",onKeyDown:this.keyPress}),r.a.createElement("button",{className:"btn btn-gclout-blue",onClick:this.sendMessage},"SEND"))}}]),t}(),j=y,O=a(341),_=a(51),x=a(342),k=a(343);function S(e){return(S="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var T=function(e){function t(){var e,a,n,r,l,c,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),m=0;m<o;m++)i[m]=arguments[m];return n=this,a=!(r=(e=C(t)).call.apply(e,[this].concat(i)))||"object"!==S(r)&&"function"!==typeof r?M(n):r,l=M(M(a)),s=function(e){return e.preventDefault()},(c="searchHandler")in l?Object.defineProperty(l,c,{value:s,enumerable:!0,configurable:!0,writable:!0}):l[c]=s,a}var a,s,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,n["Component"]),a=t,(s=[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,null,function(e){var t=e.logout;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{logout:t}),r.a.createElement(x.a,{logout:t}))}),r.a.createElement("div",{className:"app-wrapper"},r.a.createElement("div",{className:"container app-container mx-auto d-flex"},r.a.createElement("div",{className:"page-70"},r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:"sidebar mr-0 "},r.a.createElement("div",{className:"friends-list-container"},r.a.createElement("div",{className:"friends-list-header d-flex"},r.a.createElement("h5",null,"Messages")),r.a.createElement("div",{className:"friends-search-container chatbox"},r.a.createElement("form",{className:"searchContainer",onSubmit:this.searchHandler},r.a.createElement("input",{className:"searchBox",type:"search",placeholder:"Type in to search..."}),r.a.createElement("span",{className:"searchIconContainer"},r.a.createElement("i",{className:"fas fa-search searchIcon"})))),r.a.createElement("div",{className:"chat-list"},r.a.createElement("div",{className:"chat-head chat-head-active"},r.a.createElement("div",{className:"chat-head-photo"},r.a.createElement("img",{src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",alt:"chat head"})),r.a.createElement("div",{className:"chat-head-content"},r.a.createElement("p",{className:"chat-head-user-and-time"},r.a.createElement("strong",null,"Oreoluwa Ojo"),r.a.createElement("span",null,"11:20pm")),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("p",{className:"previous-chat"},"Lorem ipsum hello, this shoyl be long"),r.a.createElement("p",{className:"message-count"},"2"))))))),r.a.createElement("div",{className:"flex-1"},r.a.createElement("div",{className:"main-chat-container"},r.a.createElement("div",{className:"chat-header"},r.a.createElement("div",{className:"chat-head-photo"},r.a.createElement("img",{src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",alt:"chat head"})),r.a.createElement("div",{className:"chat-head-content"},r.a.createElement("p",{className:"chat-head-user-and-time mb-0"},r.a.createElement("strong",null,"Oreoluwa Ojo")),r.a.createElement("span",null,"online")),r.a.createElement("button",{className:"close-chat"},r.a.createElement(o.a,null))),r.a.createElement(j,null))))),r.a.createElement("div",{className:"page-30 d-none d-md-block",style:{padding:"0px"}},r.a.createElement(l.a,null),r.a.createElement(c.a,null)))),r.a.createElement(O.a,null))}}])&&P(a.prototype,s),i&&P(a,i),t}();t.default=T}}]);
//# sourceMappingURL=Chat.a54907d0.chunk.js.map