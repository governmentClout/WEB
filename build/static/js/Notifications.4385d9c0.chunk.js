(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{333:function(e,t,a){},337:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=a(512),l=(a(350),a(93)),c=a.n(l);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=m(this,u(t).call(this,e))).state={friends:[]},a}var a,l,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,n["Component"]),a=t,(l=[{key:"componentDidMount",value:function(){this.fetchFriends()}},{key:"fetchFriends",value:function(){var e=this,t=sessionStorage.getItem("uuid"),a=sessionStorage.getItem("token");c()({method:"get",url:"http://api.gclout.com:3000/users",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8",token:a,uuid:t}}).then(function(t){e.setState({friends:t.data})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"suggestions"},r.a.createElement("div",{className:"suggestions-header"},r.a.createElement("h5",null,"People you may know")),r.a.createElement("div",{className:"suggestions-content"},r.a.createElement("div",{className:"single-suggestion dashed-border-bottom"},r.a.createElement("div",{className:"suggestion-image-wrapper"},r.a.createElement("img",{src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",className:"suggestion-image",alt:"suggested1"})),r.a.createElement("div",{className:"px-2"},r.a.createElement(o.a,{className:"text-gclout-blue",to:"/profile/id"},"David Benjamin"),r.a.createElement("p",{className:"text-muted"},"3 mutual Friends")),r.a.createElement("div",{className:"suggested-friend-actions"},r.a.createElement("button",{className:"btn btn-accept"},"Add"),r.a.createElement("button",{className:"btn btn-reject"},"Remove"))),r.a.createElement("div",{className:"single-suggestion dashed-border-bottom"},r.a.createElement("div",{className:"suggestion-image-wrapper"},r.a.createElement("img",{src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",className:"suggestion-image",alt:"suggested1"})),r.a.createElement("div",{className:"px-2"},r.a.createElement(o.a,{className:"text-gclout-blue",to:"/profile/id"},"David Benjamin"),r.a.createElement("p",{className:"text-muted"},"3 mutual Friends")),r.a.createElement("div",{className:"suggested-friend-actions"},r.a.createElement("button",{className:"btn btn-accept"},"Add"),r.a.createElement("button",{className:"btn btn-reject"},"Remove"))),r.a.createElement("div",{className:"single-suggestion dashed-border-bottom"},r.a.createElement("div",{className:"suggestion-image-wrapper"},r.a.createElement("img",{src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",className:"suggestion-image",alt:"suggested1"})),r.a.createElement("div",{className:"px-2"},r.a.createElement(o.a,{className:"text-gclout-blue",to:"/profile/id"},"David Benjamin"),r.a.createElement("p",{className:"text-muted"},"3 mutual Friends")),r.a.createElement("div",{className:"suggested-friend-actions"},r.a.createElement("button",{className:"btn btn-accept"},"Add"),r.a.createElement("button",{className:"btn btn-reject"},"Remove"))),r.a.createElement("div",{className:"single-suggestion dashed-border-bottom"},r.a.createElement("div",{className:"suggestion-image-wrapper"},r.a.createElement("img",{src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",className:"suggestion-image",alt:"suggested1"})),r.a.createElement("div",{className:"px-2"},r.a.createElement(o.a,{className:"text-gclout-blue",to:"/profile/id"},"David Benjamin"),r.a.createElement("p",{className:"text-muted"},"3 mutual Friends")),r.a.createElement("div",{className:"suggested-friend-actions"},r.a.createElement("button",{className:"btn btn-accept"},"Add"),r.a.createElement("button",{className:"btn btn-reject"},"Remove")))),r.a.createElement("div",{className:"suggestion-footer"},r.a.createElement(o.a,{to:"/friends/suggested",className:"suggestion-footer-link"},"View More")))}}])&&i(a.prototype,l),s&&i(a,s),t}();t.a=p},338:function(e,t,a){"use strict";var n=a(1),r=a.n(n);a(352);function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=c(this,s(t).call(this,e))).state={liked:!1},a}var a,o,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,n["Component"]),a=t,(o=[{key:"render",value:function(){return r.a.createElement("div",{className:"trending-section"},r.a.createElement("div",{className:"trending-section-header"},r.a.createElement("h5",null,"Trending for you")),r.a.createElement("div",{className:"trending-section-content"},r.a.createElement("div",{className:"trending-post"},r.a.createElement("div",{className:"d-flex align-content-center"},r.a.createElement("div",{className:"trending-image-wrapper"},r.a.createElement("img",{className:"trending-image",alt:"trending1",src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"})),r.a.createElement("div",{className:"trending-name"},r.a.createElement("p",null,"Mark Anthony"))),r.a.createElement("div",{className:"trending-text"},r.a.createElement("p",null,"Alternative answers to the question, \u201cWhat are you going to do with your life?\u201d")),r.a.createElement("div",{className:"d-flex no-gutters"},r.a.createElement("div",{className:"col-6 d-flex"},r.a.createElement("button",{className:"like-btn"},this.state.liked?r.a.createElement("i",{className:"fas fa-thumbs-up"}):r.a.createElement("i",{className:"far fa-thumbs-up"})," ","10 Likes"," ")),r.a.createElement("div",{className:"col-6 d-flex"},r.a.createElement("button",{className:"like-btn"},r.a.createElement("i",{className:"far fa-comment"})," 7 comments")))),r.a.createElement("div",{className:"trending-post"},r.a.createElement("div",{className:"d-flex align-content-center"},r.a.createElement("div",{className:"trending-image-wrapper"},r.a.createElement("img",{className:"trending-image",alt:"trending2",src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"})),r.a.createElement("div",{className:"trending-name"},r.a.createElement("p",null,"Mark Anthony"))),r.a.createElement("div",{className:"trending-text"},r.a.createElement("p",null,"Alternative answers to the question, \u201cWhat are you going to do with your life?\u201d")),r.a.createElement("div",{className:"d-flex no-gutters"},r.a.createElement("div",{className:"col-6 d-flex"},r.a.createElement("button",{className:"like-btn"},this.state.liked?r.a.createElement("i",{className:"fas fa-thumbs-up"}):r.a.createElement("i",{className:"far fa-thumbs-up"})," ","10 Likes"," ")),r.a.createElement("div",{className:"col-6 d-flex"},r.a.createElement("button",{className:"like-btn"},r.a.createElement("i",{className:"far fa-comment"})," 7 comments")))),r.a.createElement("div",{className:"trending-post"},r.a.createElement("div",{className:"d-flex align-content-center"},r.a.createElement("div",{className:"trending-image-wrapper"},r.a.createElement("img",{className:"trending-image",alt:"trending3",src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"})),r.a.createElement("div",{className:"trending-name"},r.a.createElement("p",null,"Mark Anthony"))),r.a.createElement("div",{className:"trending-text"},r.a.createElement("p",null,"Alternative answers to the question, \u201cWhat are you going to do with your life?\u201d")),r.a.createElement("div",{className:"d-flex no-gutters"},r.a.createElement("div",{className:"col-6 d-flex"},r.a.createElement("button",{className:"like-btn"},this.state.liked?r.a.createElement("i",{className:"fas fa-thumbs-up"}):r.a.createElement("i",{className:"far fa-thumbs-up"})," ","10 Likes"," ")),r.a.createElement("div",{className:"col-6 d-flex"},r.a.createElement("button",{className:"like-btn"},r.a.createElement("i",{className:"far fa-comment"})," 7 comments"))))))}}])&&l(a.prototype,o),m&&l(a,m),t}();t.a=m},350:function(e,t,a){},352:function(e,t,a){},6118:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=(a(333),a(337)),l=a(338),c=a(512),s=a(341),i=a(51),m=a(342),u=a(343);function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==d(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,g(t).apply(this,arguments))}var a,c,d;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,n["Component"]),a=t,(c=[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,function(e){var t=e.logout;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{logout:t}),r.a.createElement(m.a,{logout:t}))}),r.a.createElement("div",{className:"app-wrapper"},r.a.createElement("div",{className:"container app-container mx-auto d-flex"},r.a.createElement("div",{className:"page-70"},r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:"sidebar",style:{width:"250px"}}),r.a.createElement("div",{className:"flex-1"},r.a.createElement("div",{className:"notifications-container"},r.a.createElement("div",{className:"notifications-page-header"},r.a.createElement("h5",{className:"text-bold"},"Notifications")),r.a.createElement(y,{type:"comment"}),r.a.createElement(y,{type:"share"}),r.a.createElement(y,{type:"comment"}),r.a.createElement(y,{type:"share"}),r.a.createElement(y,{type:"comment"}),r.a.createElement(y,{type:"share"}),r.a.createElement(y,{type:"comment"}),r.a.createElement(y,{type:"share"}),r.a.createElement(y,{type:"comment"}),r.a.createElement(y,{type:"share"}))))),r.a.createElement("div",{className:"page-30 d-none d-md-block",style:{padding:"0px"}},r.a.createElement(o.a,null),r.a.createElement(l.a,null)))),r.a.createElement(s.a,null))}}])&&p(a.prototype,c),d&&p(a,d),t}(),y=function(e){return r.a.createElement("div",{className:"single-notification"},r.a.createElement(c.a,{className:"single-notification-link",to:"#"},r.a.createElement("div",{className:"d-flex align-content-center"},r.a.createElement("div",{className:"notification-owner-wrapper mr-3"},r.a.createElement("img",{className:"notification-owner",src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",alt:"notifiction-owner"})),r.a.createElement("p",{className:"flex-1 mr-3"},r.a.createElement("strong",null,"Michelle Heston")," ","comment"===e.type?"commented on  your recent post":"reshared a post:Vous \xeates une soci\xe9t\xe9  Vous cherchez des jeunes passionn\xe9s par le domaine de la technologie? Rejoignez nous \xe0 DevFest "))),r.a.createElement("span",{className:"text-muted"},"12h"))};t.default=b}}]);
//# sourceMappingURL=Notifications.4385d9c0.chunk.js.map