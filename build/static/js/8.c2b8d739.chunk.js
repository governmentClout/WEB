(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{336:function(e,t,a){"use strict";var n=a(1),r=a.n(n),l=a(507),c=(a(346),a(93)),i=a.n(c);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=m(this,u(t).call(this,e))).state={friends:[]},a}var a,c,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,n["Component"]),a=t,(c=[{key:"componentDidMount",value:function(){this.fetchFriends()}},{key:"fetchFriends",value:function(){var e=this,t=sessionStorage.getItem("uuid"),a=sessionStorage.getItem("token");i()({method:"get",url:"http://api.gclout.com:3000/users",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8",token:a,uuid:t}}).then(function(t){e.setState({friends:t.data})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"suggestions"},r.a.createElement("div",{className:"suggestions-header"},r.a.createElement("h5",null,"People you may know")),r.a.createElement("div",{className:"suggestions-content"},r.a.createElement("div",{className:"single-suggestion dashed-border-bottom"},r.a.createElement("div",{className:"suggestion-image-wrapper"},r.a.createElement("img",{src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",className:"suggestion-image",alt:"suggested1"})),r.a.createElement("div",{className:"px-2"},r.a.createElement(l.a,{className:"text-gclout-blue",to:"/profile/id"},"David Benjamin"),r.a.createElement("p",{className:"text-muted"},"3 mutual Friends")),r.a.createElement("div",{className:"suggested-friend-actions"},r.a.createElement("button",{className:"btn btn-accept"},"Add"),r.a.createElement("button",{className:"btn btn-reject"},"Remove"))),r.a.createElement("div",{className:"single-suggestion dashed-border-bottom"},r.a.createElement("div",{className:"suggestion-image-wrapper"},r.a.createElement("img",{src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",className:"suggestion-image",alt:"suggested1"})),r.a.createElement("div",{className:"px-2"},r.a.createElement(l.a,{className:"text-gclout-blue",to:"/profile/id"},"David Benjamin"),r.a.createElement("p",{className:"text-muted"},"3 mutual Friends")),r.a.createElement("div",{className:"suggested-friend-actions"},r.a.createElement("button",{className:"btn btn-accept"},"Add"),r.a.createElement("button",{className:"btn btn-reject"},"Remove"))),r.a.createElement("div",{className:"single-suggestion dashed-border-bottom"},r.a.createElement("div",{className:"suggestion-image-wrapper"},r.a.createElement("img",{src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",className:"suggestion-image",alt:"suggested1"})),r.a.createElement("div",{className:"px-2"},r.a.createElement(l.a,{className:"text-gclout-blue",to:"/profile/id"},"David Benjamin"),r.a.createElement("p",{className:"text-muted"},"3 mutual Friends")),r.a.createElement("div",{className:"suggested-friend-actions"},r.a.createElement("button",{className:"btn btn-accept"},"Add"),r.a.createElement("button",{className:"btn btn-reject"},"Remove"))),r.a.createElement("div",{className:"single-suggestion dashed-border-bottom"},r.a.createElement("div",{className:"suggestion-image-wrapper"},r.a.createElement("img",{src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",className:"suggestion-image",alt:"suggested1"})),r.a.createElement("div",{className:"px-2"},r.a.createElement(l.a,{className:"text-gclout-blue",to:"/profile/id"},"David Benjamin"),r.a.createElement("p",{className:"text-muted"},"3 mutual Friends")),r.a.createElement("div",{className:"suggested-friend-actions"},r.a.createElement("button",{className:"btn btn-accept"},"Add"),r.a.createElement("button",{className:"btn btn-reject"},"Remove")))),r.a.createElement("div",{className:"suggestion-footer"},r.a.createElement(l.a,{to:"/friends/suggested",className:"suggestion-footer-link"},"View More")))}}])&&o(a.prototype,c),s&&o(a,s),t}();t.a=p},337:function(e,t,a){"use strict";var n=a(1),r=a.n(n);a(348);function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=i(this,s(t).call(this,e))).state={liked:!1},a}var a,l,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(t,n["Component"]),a=t,(l=[{key:"render",value:function(){return r.a.createElement("div",{className:"trending-section"},r.a.createElement("div",{className:"trending-section-header"},r.a.createElement("h5",null,"Trending for you")),r.a.createElement("div",{className:"trending-section-content"},r.a.createElement("div",{className:"trending-post"},r.a.createElement("div",{className:"d-flex align-content-center"},r.a.createElement("div",{className:"trending-image-wrapper"},r.a.createElement("img",{className:"trending-image",alt:"trending1",src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"})),r.a.createElement("div",{className:"trending-name"},r.a.createElement("p",null,"Mark Anthony"))),r.a.createElement("div",{className:"trending-text"},r.a.createElement("p",null,"Alternative answers to the question, \u201cWhat are you going to do with your life?\u201d")),r.a.createElement("div",{className:"d-flex no-gutters"},r.a.createElement("div",{className:"col-6 d-flex"},r.a.createElement("button",{className:"like-btn"},this.state.liked?r.a.createElement("i",{className:"fas fa-thumbs-up"}):r.a.createElement("i",{className:"far fa-thumbs-up"})," ","10 Likes"," ")),r.a.createElement("div",{className:"col-6 d-flex"},r.a.createElement("button",{className:"like-btn"},r.a.createElement("i",{className:"far fa-comment"})," 7 comments")))),r.a.createElement("div",{className:"trending-post"},r.a.createElement("div",{className:"d-flex align-content-center"},r.a.createElement("div",{className:"trending-image-wrapper"},r.a.createElement("img",{className:"trending-image",alt:"trending2",src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"})),r.a.createElement("div",{className:"trending-name"},r.a.createElement("p",null,"Mark Anthony"))),r.a.createElement("div",{className:"trending-text"},r.a.createElement("p",null,"Alternative answers to the question, \u201cWhat are you going to do with your life?\u201d")),r.a.createElement("div",{className:"d-flex no-gutters"},r.a.createElement("div",{className:"col-6 d-flex"},r.a.createElement("button",{className:"like-btn"},this.state.liked?r.a.createElement("i",{className:"fas fa-thumbs-up"}):r.a.createElement("i",{className:"far fa-thumbs-up"})," ","10 Likes"," ")),r.a.createElement("div",{className:"col-6 d-flex"},r.a.createElement("button",{className:"like-btn"},r.a.createElement("i",{className:"far fa-comment"})," 7 comments")))),r.a.createElement("div",{className:"trending-post"},r.a.createElement("div",{className:"d-flex align-content-center"},r.a.createElement("div",{className:"trending-image-wrapper"},r.a.createElement("img",{className:"trending-image",alt:"trending3",src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"})),r.a.createElement("div",{className:"trending-name"},r.a.createElement("p",null,"Mark Anthony"))),r.a.createElement("div",{className:"trending-text"},r.a.createElement("p",null,"Alternative answers to the question, \u201cWhat are you going to do with your life?\u201d")),r.a.createElement("div",{className:"d-flex no-gutters"},r.a.createElement("div",{className:"col-6 d-flex"},r.a.createElement("button",{className:"like-btn"},this.state.liked?r.a.createElement("i",{className:"fas fa-thumbs-up"}):r.a.createElement("i",{className:"far fa-thumbs-up"})," ","10 Likes"," ")),r.a.createElement("div",{className:"col-6 d-flex"},r.a.createElement("button",{className:"like-btn"},r.a.createElement("i",{className:"far fa-comment"})," 7 comments"))))))}}])&&c(a.prototype,l),m&&c(a,m),t}();t.a=m},346:function(e,t,a){},348:function(e,t,a){},355:function(e,t,a){},356:function(e,t,a){},358:function(e,t,a){},366:function(e,t,a){"use strict";var n=a(1),r=a.n(n),l=(a(358),a(507));function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,o(t).apply(this,arguments))}var a,c,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,n["Component"]),a=t,(c=[{key:"render",value:function(){return r.a.createElement("div",{className:"sidebar  d-none d-md-block"},r.a.createElement("div",{className:"sidebar-footer"},r.a.createElement("p",null,"\xa9 ",(new Date).getFullYear()," GClout | All copyrights rights reserved"),r.a.createElement("p",null,r.a.createElement(l.a,{to:"/faq"},"Help &FAQ")," | ",r.a.createElement(l.a,{to:"/terms"},"Terms Of Use")," |"," ",r.a.createElement(l.a,{to:"/privacy"},"Privacy Policy")),r.a.createElement("p",{className:"smaller-margin"},r.a.createElement("strong",null,"Contact Us")),r.a.createElement("p",{className:"smaller-margin"},"Email: gclout@gmail.com"),r.a.createElement("p",{className:"smaller-margin"},"Phone: 080 3333 3333"),r.a.createElement("div",{className:"advert-section"},r.a.createElement("p",{className:"smaller-margin"},r.a.createElement(l.a,{to:"/advert",className:"advert-link"},r.a.createElement("span",{className:"text-gclout-blue"},r.a.createElement("i",{className:"fas fa-external-link-alt"}))," ","Advertise with GClout")))))}}])&&i(a.prototype,c),u&&i(a,u),t}();t.a=u},373:function(e,t,a){"use strict";var n=a(1),r=a.n(n),l=(a(358),a(366)),c=a(507),i=a(93),s=a.n(i);function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=u(this,d(t).call(this,e))).state={profile:[],friends:[]},a}var a,i,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,n["Component"]),a=t,(i=[{key:"componentDidMount",value:function(){var e=this;this.getFriends();var t=sessionStorage.getItem("uuid"),a=sessionStorage.getItem("token");if(this.state.profile!==[]){var n="http://api.gclout.com:3000/profiles/".concat(t);s()({method:"GET",url:n,headers:{uuid:t,token:a}}).then(function(t){e.setState({profile:t.data.profile[0],loading:!1})})}}},{key:"getFriends",value:function(){var e=this;s()({method:"get",url:"http://api.gclout.com:3000/friends",headers:{token:sessionStorage.getItem("token"),uuid:sessionStorage.getItem("uuid")}}).then(function(t){e.setState({friends:t.data.friends.length})})}},{key:"render",value:function(){var e=this.state.friends,t=this.state.profile;return r.a.createElement("div",{className:"sidebar  d-none d-md-block"},r.a.createElement("div",{className:"sidebar-top"},r.a.createElement("div",{className:"sidebar-cover-image-wrapper"},r.a.createElement("img",{className:"sidebar-cover-image",src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540948129/background-pine-texture-82256_w2aimd.jpg",alt:"cover"})),r.a.createElement("div",{className:"sidebar-section --lift-up"},r.a.createElement("div",{className:"sidebar-profile-image-wrapper"},r.a.createElement("img",{className:"sidebar-profile-image",src:t.photo,alt:"profile"})),r.a.createElement(c.a,{to:"/profile"},r.a.createElement("h5",{className:"text-center"},t.firstName," ",t.lastName)),r.a.createElement("div",{className:"row d-flex justify-content-between friends-details text-gclout-blue"},r.a.createElement("div",{className:"text-center col-4 px-0"},r.a.createElement("p",null,r.a.createElement("strong",null,"Clouts")),r.a.createElement("h5",null,"300")),r.a.createElement("div",{className:"text-center col-4  px-0"},r.a.createElement("p",null,r.a.createElement("strong",null,"Leaders")),r.a.createElement("h5",null,"37")),r.a.createElement("div",{className:"text-center col-4  px-0"},r.a.createElement(c.a,{to:"/friends"},r.a.createElement("p",{className:"text-gclout-blue"},r.a.createElement("strong",null,"Friends"))),r.a.createElement("h5",null,e))))),r.a.createElement("div",{className:"sidebar-section mb-3"},r.a.createElement("h5",null,r.a.createElement("strong",null,"Political Office Holders")),r.a.createElement("div",{className:"sidebar-politician"},r.a.createElement(c.a,{to:"profile/executive"},r.a.createElement("div",{className:"sidebar-politician-wrapper"},r.a.createElement("img",{src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",alt:"Sidebar politician",className:"sidebar-politician-image"})),r.a.createElement("div",{className:"politician-details"},r.a.createElement("p",null,"Marks Weber"),r.a.createElement("p",{className:"text-muted"},"President"))),r.a.createElement(c.a,{to:"profile/executive"},r.a.createElement("div",{className:"sidebar-politician-wrapper"},r.a.createElement("img",{src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",alt:"Sidebar politician",className:"sidebar-politician-image"})),r.a.createElement("div",{className:"politician-details"},r.a.createElement("p",null,"Marks Weber"),r.a.createElement("p",{className:"text-muted"},"Governor"))),r.a.createElement(c.a,{to:"profile/executive"},r.a.createElement("div",{className:"sidebar-politician-wrapper"},r.a.createElement("img",{src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",alt:"Sidebar politician",className:"sidebar-politician-image"})),r.a.createElement("div",{className:"politician-details"},r.a.createElement("p",null,"Marks Weber"),r.a.createElement("p",{className:"text-muted"},"Senator"))),r.a.createElement(c.a,{to:"profile/executive"},r.a.createElement("div",{className:"sidebar-politician-wrapper"},r.a.createElement("img",{src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",alt:"Sidebar politician",className:"sidebar-politician-image"})),r.a.createElement("div",{className:"politician-details"},r.a.createElement("p",null,"Marks Weber"),r.a.createElement("p",{className:"text-muted"},"Federal Rep"))),r.a.createElement(c.a,{to:"profile/executive"},r.a.createElement("div",{className:"sidebar-politician-wrapper"},r.a.createElement("img",{src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",alt:"Sidebar politician",className:"sidebar-politician-image"})),r.a.createElement("div",{className:"politician-details"},r.a.createElement("p",null,"Marks Weber"),r.a.createElement("p",{className:"text-muted"},"State Rep"))),r.a.createElement(c.a,{to:"profile/executive"},r.a.createElement("div",{className:"sidebar-politician-wrapper"},r.a.createElement("img",{src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",alt:"Sidebar politician",className:"sidebar-politician-image"})),r.a.createElement("div",{className:"politician-details"},r.a.createElement("p",null,"Marks Weber"),r.a.createElement("p",{className:"text-muted"},"Council Chairman"))),r.a.createElement(c.a,{to:"profile/executive"},r.a.createElement("div",{className:"sidebar-politician-wrapper"},r.a.createElement("img",{src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",alt:"Sidebar politician",className:"sidebar-politician-image"})),r.a.createElement("div",{className:"politician-details"},r.a.createElement("p",null,"Marks Weber"),r.a.createElement("p",{className:"text-muted"},"Counsil"))))),r.a.createElement("div",{className:"sidebar-section mb-3"},r.a.createElement("h5",null,r.a.createElement("strong",null,"Shortcuts")),r.a.createElement("div",{className:"sidebar-shortcut d-flex align-content-center"},r.a.createElement("div",{className:"empty-icon"}),r.a.createElement("a",{href:"#"},"Governance Clout")),r.a.createElement("div",{className:"sidebar-shortcut d-flex align-content-center"},r.a.createElement("div",{className:"empty-icon"}),r.a.createElement("a",{href:"#"},"Governance Clout")),r.a.createElement("div",{className:"sidebar-shortcut d-flex align-content-center"},r.a.createElement("div",{className:"empty-icon"}),r.a.createElement("a",{href:"#"},"Governance Clout")),r.a.createElement("div",{className:"sidebar-shortcut d-flex align-content-center"},r.a.createElement("div",{className:"empty-icon"}),r.a.createElement("a",{href:"#"},"Governance Clout")),r.a.createElement("div",{className:"sidebar-shortcut d-flex align-content-center"},r.a.createElement("div",{className:"empty-icon"}),r.a.createElement("a",{href:"#"},"Governance Clout"))),r.a.createElement(l.a,null))}}])&&m(a.prototype,i),o&&m(a,o),t}();t.a=f},579:function(e,t,a){}}]);
//# sourceMappingURL=8.c2b8d739.chunk.js.map