(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{333:function(e,t,n){},336:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(508),s=(n(347),n(93)),c=n.n(s);function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,m(t).call(this,e))).state={friends:[]},n}var n,s,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a["Component"]),n=t,(s=[{key:"componentDidMount",value:function(){this.fetchFriends()}},{key:"fetchFriends",value:function(){var e=this,t=sessionStorage.getItem("uuid"),n=sessionStorage.getItem("token");c()({method:"get",url:"http://api.gclout.com:3000/users",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8",token:n,uuid:t}}).then(function(t){e.setState({friends:t.data})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"suggestions"},r.a.createElement("div",{className:"suggestions-header"},r.a.createElement("h5",null,"GClout friends suggestions")),r.a.createElement("div",{className:"suggestions-content"},r.a.createElement("p",{className:"tagline"},"These are people you may know"),r.a.createElement("div",{className:"single-suggestion dashed-border-bottom"},r.a.createElement("div",{className:"suggestion-image-wrapper"},r.a.createElement("img",{src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",className:"suggestion-image",alt:"suggested1"})),r.a.createElement("span",{className:"suggested-name"},"Markus Anthony")," ",r.a.createElement("button",{className:"btn btn-gclout-blue-outline"},"Add Friend"))),r.a.createElement("div",{className:"suggestion-footer"},r.a.createElement(o.a,{to:"/friends/suggested",className:"suggestion-footer-link"},"View More")))}}])&&l(n.prototype,s),i&&l(n,i),t}();t.a=f},337:function(e,t,n){"use strict";var a=n(1),r=n.n(a);n(349);function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=c(this,i(t).call(this,e))).state={liked:!1},n}var n,o,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,a["Component"]),n=t,(o=[{key:"render",value:function(){return r.a.createElement("div",{className:"trending-section"},r.a.createElement("div",{className:"trending-section-header"},r.a.createElement("h5",null,"Trending post")),r.a.createElement("div",{className:"trending-section-content"},r.a.createElement("div",{className:"trending-post"},r.a.createElement("div",{className:"d-flex align-content-center"},r.a.createElement("div",{className:"trending-image-wrapper"},r.a.createElement("img",{className:"trending-image",alt:"trending1",src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"})),r.a.createElement("div",{className:"trending-name"},r.a.createElement("p",null,"Mark Anthony"))),r.a.createElement("div",{className:"trending-text"},r.a.createElement("p",null,"Alternative answers to the question, \u201cWhat are you going to do with your life?\u201d")),r.a.createElement("div",{className:"d-flex no-gutters"},r.a.createElement("div",{className:"col-6 d-flex"},r.a.createElement("button",{className:"like-btn"},this.state.liked?r.a.createElement("i",{className:"fas fa-thumbs-up"}):r.a.createElement("i",{className:"far fa-thumbs-up"})," ","10 Likes"," ")),r.a.createElement("div",{className:"col-6 d-flex"},r.a.createElement("button",{className:"like-btn"},r.a.createElement("i",{className:"far fa-comment"})," 7 comments")))),r.a.createElement("div",{className:"trending-post"},r.a.createElement("div",{className:"d-flex align-content-center"},r.a.createElement("div",{className:"trending-image-wrapper"},r.a.createElement("img",{className:"trending-image",alt:"trending2",src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"})),r.a.createElement("div",{className:"trending-name"},r.a.createElement("p",null,"Mark Anthony"))),r.a.createElement("div",{className:"trending-text"},r.a.createElement("p",null,"Alternative answers to the question, \u201cWhat are you going to do with your life?\u201d")),r.a.createElement("div",{className:"d-flex no-gutters"},r.a.createElement("div",{className:"col-6 d-flex"},r.a.createElement("button",{className:"like-btn"},this.state.liked?r.a.createElement("i",{className:"fas fa-thumbs-up"}):r.a.createElement("i",{className:"far fa-thumbs-up"})," ","10 Likes"," ")),r.a.createElement("div",{className:"col-6 d-flex"},r.a.createElement("button",{className:"like-btn"},r.a.createElement("i",{className:"far fa-comment"})," 7 comments")))),r.a.createElement("div",{className:"trending-post"},r.a.createElement("div",{className:"d-flex align-content-center"},r.a.createElement("div",{className:"trending-image-wrapper"},r.a.createElement("img",{className:"trending-image",alt:"trending3",src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg"})),r.a.createElement("div",{className:"trending-name"},r.a.createElement("p",null,"Mark Anthony"))),r.a.createElement("div",{className:"trending-text"},r.a.createElement("p",null,"Alternative answers to the question, \u201cWhat are you going to do with your life?\u201d")),r.a.createElement("div",{className:"d-flex no-gutters"},r.a.createElement("div",{className:"col-6 d-flex"},r.a.createElement("button",{className:"like-btn"},this.state.liked?r.a.createElement("i",{className:"fas fa-thumbs-up"}):r.a.createElement("i",{className:"far fa-thumbs-up"})," ","10 Likes"," ")),r.a.createElement("div",{className:"col-6 d-flex"},r.a.createElement("button",{className:"like-btn"},r.a.createElement("i",{className:"far fa-comment"})," 7 comments"))))))}}])&&s(n.prototype,o),u&&s(n,u),t}();t.a=u},338:function(e,t,n){"use strict";var a=n(1),r=n.n(a);t.a=function(){var e=new Date("Feb 16, 2019 12:00:00").getTime()-Date.now(),t=Math.floor(e/864e5);return r.a.createElement("div",{className:"bg-gclout-blue mb-4 p-4 text-center countdown"},r.a.createElement("h3",null,t," Days"),r.a.createElement("p",{className:"mb-0 pb-0"},"to the general elections"))}},347:function(e,t,n){},349:function(e,t,n){},357:function(e,t,n){},371:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=(n(372),n(93)),s=n.n(o);function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,r=l(t).call(this,e),n=!r||"object"!==c(r)&&"function"!==typeof r?m(a):r,p(m(m(n)),"onKeyPress",function(e){if(13===e.which){n.setState({disable:!0});var t=sessionStorage.getItem("uuid"),a=sessionStorage.getItem("token"),r={comment:n.state.comment,ref:n.props.postID};console.log(r),s()({method:"POST",url:"http://api.gclout.com:3000/comments",data:r,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8",token:a,uuid:t}}).then(function(e){console.log(e.data),n.loadComments(),n.setState({comment:"",disable:!1})}).catch(function(e){n.setState({disable:!1})})}}),n.state={comment:"",ref:"",comments:"",disable:!1},n.onChange=n.onChange.bind(m(m(n))),n.onKeyPress=n.onKeyPress.bind(m(m(n))),n}var n,o,f;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,a["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){this.loadComments()}},{key:"loadComments",value:function(){var e=this,t=sessionStorage.getItem("uuid"),n=sessionStorage.getItem("token"),a=this.props.postID;s()({method:"get",url:"http://api.gclout.com:3000/comments/"+a,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8",token:n,uuid:t}}).then(function(t){console.log(t.data),e.setState({comments:t.data})})}},{key:"onChange",value:function(e){this.setState(p({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.props.show?"comment-wrapper":"comment-wrapper hidden"},r.a.createElement("div",{className:"comment-input-wrapper"},r.a.createElement("div",{className:"comment-owner-wrapper"},r.a.createElement("img",{className:"comment-owner",src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",alt:"comment-owner"})),r.a.createElement("input",{onKeyPress:this.onKeyPress,type:"text",onSubmit:this.onSubmit,name:"comment",className:"form-control",placeholder:"write a comment here...",value:this.state.comment,onChange:this.onChange,disabled:this.state.disable,onClick:function(){return e.props.postID}})),r.a.createElement("div",{className:"previous-comments"},this.state.comments?this.state.comments.map(function(e){return r.a.createElement("div",{className:"single-comment"},r.a.createElement("div",{className:"comment-owner-wrapper"},void 0!==e.user[0]?r.a.createElement("img",{className:"comment-owner",src:e.user[0].photo,alt:"comment-owner"}):r.a.createElement("p",null,"lol")),r.a.createElement("div",null,void 0!==e.user[0]?r.a.createElement("strong",null,e.user[0].firstName+" "+e.user[0].lastName):"lol",r.a.createElement("p",null,e.comment.comment)))}):""))}}])&&i(n.prototype,o),f&&i(n,f),t}();t.a=f},372:function(e,t,n){},399:function(e,t,n){"use strict";n.d(t,"a",function(){return w});var a=n(1),r=n.n(a),o=(n(357),n(93)),s=n.n(o),c=n(331),i=n(429),l=n.n(i),u=n(430),m=n.n(u),p=n(400),f=n.n(p),d=n(358);function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(e){function t(){var e,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=g(t).call(this),e=!a||"object"!==h(a)&&"function"!==typeof a?v(n):a,E(v(v(e)),"openDropup",function(){var t=e.state.showDropup;e.setState({showDropup:!t})}),E(v(v(e)),"showComment",function(){e.props.showComment()}),E(v(v(e)),"likePost",function(){var t=sessionStorage.getItem("uuid"),n=sessionStorage.getItem("token"),a=e.state.reactions;if(e.state.liked){var r=e.props.postID,o={post:e.props.postID},c="http://api.gclout.com:3000/reactions/"+r;s()({method:"delete",url:c,data:o,mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8",token:n,uuid:t}}).then(function(t){a-=1,e.setState({reactions:a,liked:!1})})}else{a+=1,e.setState({reactions:a,liked:!0});var i=e.props.postID,l={post:e.props.postID},u="http://api.gclout.com:3000/reactions/"+i;s()({method:"post",url:u,data:l,mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8",token:n,uuid:t}}).then(function(e){}).catch(console.log("an error occured"))}var m=e.props.postID,p={post:e.props.postID},f="http://api.gclout.com:3000/reactions/"+m;s()({method:"get",url:f,data:p,mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8",token:n,uuid:t}}).then(function(e){})}),e.state={reactions:[],comments:[],shares:[],comment:[],liked:!1,showDropup:!1},e}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,a["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){this.setState({reactions:this.props.reactions.length,comments:this.props.comments,shares:this.props.shares});var e=sessionStorage.getItem("uuid"),t=[];this.props.reactions.forEach(function(e){return t.push(e.user),t}),t.indexOf(e)>-1?this.setState({liked:!0}):this.setState({liked:!1})}},{key:"registerShare",value:function(){var e=this,t=this.props.postID,n="".concat(c.a,"/shares/").concat(t),a={post:t},r=sessionStorage.getItem("uuid"),o={"Content-Type":"application/x-www-form-urlencoded;charset=utf-8",token:sessionStorage.getItem("token"),uuid:r};s()({method:"post",url:n,data:a,mode:"no-cors",headers:o}).then(function(t){var n={created_at:Date.now(),id:XPathExpression,post:e.props.postID,status:1,user:sessionStorage.getItem("uuid")},a=e.state.reactions.push(n);e.setState({shares:a})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.reactions,a=t.comments,o=t.shares,s=t.liked;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"post-actions-container"},r.a.createElement("button",{className:s?"post-action active":"post-action",onClick:function(){return e.likePost(e.props.postID)}},r.a.createElement(l.a,null),n>0&&n," ","  ","  like",n<=1?"":"s"),r.a.createElement("button",{className:"post-action",onClick:this.showComment},r.a.createElement(m.a,null),0!==a.length&&a.length," "," "," comment",a.length<=1?"":"s"),r.a.createElement(d.a,null,r.a.createElement(d.c,null,function(t){var n=t.ref;return r.a.createElement("button",{type:"button",ref:n,className:"post-action",onClick:e.openDropup},r.a.createElement(f.a,{className:"flipped-reply"}),0!==o.length&&o.length," "," "," share",o.length<=1?"":"s")}),r.a.createElement(d.b,{placement:"bootom-end"},function(t){var n=t.ref,a=t.style,o=t.placement,s=t.arrowProps;return r.a.createElement("div",{ref:n,style:a,"data-placement":o},r.a.createElement("div",{className:e.state.showDropup?"dropup show":"dropup"},r.a.createElement("ul",{className:"dropup-list"},r.a.createElement("li",{className:"dropup-list-item",onClick:e.openDropup},r.a.createElement("button",{onClick:function(){return e.registerShare(e.props.postID)}},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/sharer/sharer.php?u=https://dev.gclout.com/activity/".concat(e.props.postID)},r.a.createElement("i",{className:"fab fa-facebook-f"})))),r.a.createElement("li",{className:"dropup-list-item",onClick:e.openDropup},r.a.createElement("button",{onClick:function(){return e.registerShare(e.props.postID)}},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/shareArticle?mini=true&url=https://www.dev.gclout.com/activity/".concat(e.props.postID,"&title=").concat(e.props.post)},r.a.createElement("i",{className:"fab fa-linkedin"})))),r.a.createElement("li",{className:"dropup-list-item",onClick:e.openDropup},r.a.createElement("button",{onClick:function(){return e.registerShare(e.props.postID)}},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/intent/tweet?text=".concat(e.props.post,"&url=https://www.dev.gclout.com/activity/").concat(e.props.postID)},r.a.createElement("i",{className:"fab fa-twitter"})))))),r.a.createElement("div",{ref:s.ref,style:s.style}))}))))}}])&&y(n.prototype,o),i&&y(n,i),t}()},413:function(e,t,n){"use strict";var a=n(1),r=function(){return Math.random().toString(36).substring(2)},o=function(e){var t=e.uniquekey?e.uniquekey+"-idClip":r(),n=e.uniquekey?e.uniquekey+"-idGradient":r(),o=e.rtl?["1; -3","2; -2","3; -1"]:["-3; 1","-2; 2","-1; 3"];return Object(a.createElement)("svg",{viewBox:"0 0 "+e.width+" "+e.height,style:e.style,preserveAspectRatio:e.preserveAspectRatio,className:e.className},Object(a.createElement)("rect",{style:{fill:"url(#"+n+")"},clipPath:"url(#"+t+")",x:"0",y:"0",width:e.width,height:e.height}),Object(a.createElement)("defs",null,Object(a.createElement)("clipPath",{id:t},e.children),Object(a.createElement)("linearGradient",{id:n},Object(a.createElement)("stop",{offset:"0%",stopColor:e.primaryColor,stopOpacity:e.primaryOpacity},e.animate&&Object(a.createElement)("animate",{attributeName:"offset",values:o[0],dur:e.speed+"s",repeatCount:"indefinite"})),Object(a.createElement)("stop",{offset:"50%",stopColor:e.secondaryColor,stopOpacity:e.secondaryOpacity},e.animate&&Object(a.createElement)("animate",{attributeName:"offset",values:o[1],dur:e.speed+"s",repeatCount:"indefinite"})),Object(a.createElement)("stop",{offset:"100%",stopColor:e.primaryColor,stopOpacity:e.primaryOpacity},e.animate&&Object(a.createElement)("animate",{attributeName:"offset",values:o[2],dur:e.speed+"s",repeatCount:"indefinite"})))))},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c={animate:!0,height:130,preserveAspectRatio:"xMidYMid meet",primaryColor:"#f0f0f0",primaryOpacity:1,rtl:!1,secondaryColor:"#e0e0e0",secondaryOpacity:1,speed:2,width:400},i=function(e){return Object(a.createElement)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:e.width,height:e.height})},l=function(e){var t=s({},c,e),n=e.children?e.children:Object(a.createElement)(i,t);return Object(a.createElement)(o,t,n)};t.a=l},429:function(e,t,n){"use strict";var a=n(332);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1)),o=(0,a(n(354)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.default.createElement("path",{d:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"})),"ThumbUp");t.default=o},430:function(e,t,n){"use strict";var a=n(332);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1)),o=(0,a(n(354)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.default.createElement("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"})),"ChatBubbleOutline");t.default=o},495:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(413);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}t.a=function(e){return r.a.createElement("div",{style:{background:"#ffffff",padding:"20px",marginBottom:"1em"}},r.a.createElement(o.a,s({height:100,width:400,primaryColor:"#f3f3f3",secondaryColor:"#CCCCCC",speed:3},e),r.a.createElement("rect",{x:"50",y:"5",rx:"4",ry:"4",width:"140",height:"6.4"}),r.a.createElement("rect",{x:"50",y:"20",rx:"4",ry:"4",width:"89",height:"6.4"}),r.a.createElement("rect",{x:"0",y:"50",rx:"3",ry:"3",width:"350",height:"6.4"}),r.a.createElement("rect",{x:"0",y:"65",rx:"3",ry:"3",width:"380",height:"6.4"}),r.a.createElement("rect",{x:"0",y:"80",rx:"3",ry:"3",width:"201",height:"6.4"}),r.a.createElement("circle",{cx:"20",cy:"20",r:"20"})))}},914:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=(n(333),n(336)),s=n(337),c=n(338),i=n(351),l=n(51),u=n(352),m=n(353),p=n(93),f=n.n(p),d=n(495),h=n(399),y=n(371);function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var N=function(e){function t(){var e,n,a,r,o,s,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,l=new Array(i),u=0;u<i;u++)l[u]=arguments[u];return a=this,n=!(r=(e=v(t)).call.apply(e,[this].concat(l)))||"object"!==g(r)&&"function"!==typeof r?w(a):r,o=w(w(n)),c={post:"",error:null,loading:!0},(s="state")in o?Object.defineProperty(o,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[s]=c,n}var n,p,N;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,a["Component"]),n=t,(p=[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id,n=sessionStorage.getItem("uuid"),a=sessionStorage.getItem("token"),r="http://api.gclout.com:3000/posts/".concat(t);f()({method:"GET",url:r,headers:{uuid:n,token:a}}).then(function(t){e.setState({post:t.data.posts[0].post,loading:!1,comments:t.data.posts[0].comments,shares:t.data.posts[0].shares,reactions:t.data.posts[0].reactions,user:t.data.posts[0].user[0]})}).catch(function(t){return e.setState({error:"lol"})})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,function(e){var t=e.logout;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{logout:t}),r.a.createElement(u.a,{logout:t}))}),r.a.createElement("div",{className:"app-wrapper"},r.a.createElement("div",{className:"container app-container mx-auto d-flex"},r.a.createElement("div",{className:"col-md-9"},r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:"sidebar",style:{width:"250px"}}),r.a.createElement("div",{className:"flex-1"},this.state.loading?r.a.createElement(d.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"post-container"},r.a.createElement("div",{className:"post-owner"},r.a.createElement("div",{className:"post-owner-image-wrapper"},this.state.user?r.a.createElement("img",{src:this.state.user.photo,alt:"lol",className:"post-owner-image"}):r.a.createElement("p",null,"lol")),r.a.createElement("div",{className:"post-owner-details"},r.a.createElement("p",null,this.state.user?this.state.user.firstName+" "+this.state.user.lastName:"undefined"),"sponsored"===this.state.postType?r.a.createElement("p",{className:"post-type"},"Sponsored"):"")),r.a.createElement("div",{className:"post-content"},r.a.createElement("p",null,this.state.post.post))),r.a.createElement(h.a,{showComment:this.showComment,comments:this.state.comments,postID:this.state.post.uuid,reactions:this.state.reactions,shares:this.state.shares}),r.a.createElement(y.a,{postID:this.state.post.uuid,comments:this.state.comments,show:!0}))))),r.a.createElement("div",{className:"col-md-3 d-none d-md-block",style:{padding:"0px"}},r.a.createElement(c.a,null),r.a.createElement(o.a,null),r.a.createElement(s.a,null)))),r.a.createElement(i.a,null))}}])&&b(n.prototype,p),N&&b(n,N),t}();t.default=N}}]);
//# sourceMappingURL=SinglePost.b2e1fe8f.chunk.js.map