(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{142:function(e,t,a){},173:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=(a(162),a(172)),l=a(278),i=a(96),s=a.n(i);function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=p(this,m(t).call(this,e))).state={profile:[],friends:[]},a}var a,i,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,n["Component"]),a=t,(i=[{key:"componentDidMount",value:function(){var e=this;this.getFriends();var t=sessionStorage.getItem("uuid"),a=sessionStorage.getItem("token");if(this.state.profile!==[]){var n="http://api.gclout.com:3000/profiles/".concat(t);s()({method:"GET",url:n,headers:{uuid:t,token:a}}).then(function(t){e.setState({profile:t.data.profile[0],loading:!1})})}}},{key:"getFriends",value:function(){var e=this;s()({method:"get",url:"http://api.gclout.com:3000/friends",headers:{token:sessionStorage.getItem("token"),uuid:sessionStorage.getItem("uuid")}}).then(function(t){e.setState({friends:t.data.friends.length})})}},{key:"render",value:function(){var e=this.state.friends,t=this.state.profile;return r.a.createElement("div",{className:"sidebar  d-none d-md-block"},r.a.createElement("div",{className:"sidebar-top"},r.a.createElement("div",{className:"sidebar-cover-image-wrapper"},r.a.createElement("img",{className:"sidebar-cover-image",src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540948129/background-pine-texture-82256_w2aimd.jpg",alt:"cover"})),r.a.createElement("div",{className:"sidebar-section --lift-up"},r.a.createElement("div",{className:"sidebar-profile-image-wrapper"},r.a.createElement("img",{className:"sidebar-profile-image",src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",alt:"profile"})),r.a.createElement(l.a,{to:"/profile"},r.a.createElement("h5",{className:"text-center"},t.firstName," ",t.lastName)),r.a.createElement("div",{className:"d-flex justify-content-between friends-details"},r.a.createElement("div",{className:"text-center col-6"},r.a.createElement("p",null,"Following"),r.a.createElement("h5",{className:"text-gclout-blue"},"300")),r.a.createElement("div",{className:"text-center col-6"},r.a.createElement("p",null,"Friends"),r.a.createElement("h5",{className:"text-gclout-blue"},e)))),r.a.createElement("div",{className:"sidebar-section --no-border"},r.a.createElement("p",{className:"text-gclout-blue"},"Political Office Holders"),r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:"section-half"},r.a.createElement("div",{className:"text-center sidebar-politician"},r.a.createElement(l.a,{to:"/profile/executive"},r.a.createElement("div",{className:"politician-profile-image-wrapper"},r.a.createElement("img",{className:"politician-profile-image",src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",alt:"friend profile"})),r.a.createElement("p",null,"Marks Webber"),r.a.createElement("small",null,"President"))),r.a.createElement("div",{className:"text-center sidebar-politician"},r.a.createElement(l.a,{to:"/profile/executive"},r.a.createElement("div",{className:"politician-profile-image-wrapper"},r.a.createElement("img",{className:"politician-profile-image",src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",alt:"friend profile"})),r.a.createElement("p",null,"Marks Webber"),r.a.createElement("small",null,"Council Chairman"))),r.a.createElement("div",{className:"text-center sidebar-politician"},r.a.createElement(l.a,{to:"/profile/executive"},r.a.createElement("div",{className:"politician-profile-image-wrapper"},r.a.createElement("img",{className:"politician-profile-image",src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",alt:"friend profile"})),r.a.createElement("p",null,"Marks Webber"),r.a.createElement("small",null,"Federal Rep"))),r.a.createElement("div",{className:"text-center sidebar-politician"},r.a.createElement(l.a,{to:"/profile/executive"},r.a.createElement("div",{className:"politician-profile-image-wrapper"},r.a.createElement("img",{className:"politician-profile-image",src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",alt:"friend profile"})),r.a.createElement("p",null,"Marks Webber"),r.a.createElement("small",null,"Councilor")))),r.a.createElement("div",{className:"section-half"},r.a.createElement("div",{className:"text-center sidebar-politician"},r.a.createElement(l.a,{to:"/profile/executive"},r.a.createElement("div",{className:"politician-profile-image-wrapper"},r.a.createElement("img",{className:"politician-profile-image",src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",alt:"friend profile"})),r.a.createElement("p",null,"Marks Webber"),r.a.createElement("small",null,"Governor"))),r.a.createElement("div",{className:"text-center sidebar-politician"},r.a.createElement(l.a,{to:"/profile/executive"},r.a.createElement("div",{className:"politician-profile-image-wrapper"},r.a.createElement("img",{className:"politician-profile-image",src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",alt:"friend profile"})),r.a.createElement("p",null,"Marks Webber"),r.a.createElement("small",null,"Senator"))),r.a.createElement("div",{className:"text-center sidebar-politician"},r.a.createElement(l.a,{to:"/profile/executive"},r.a.createElement("div",{className:"politician-profile-image-wrapper"},r.a.createElement("img",{className:"politician-profile-image",src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",alt:"friend profile"})),r.a.createElement("p",null,"Marks Webber"),r.a.createElement("small",null,"State Rep"))))))),r.a.createElement(o.a,null))}}])&&u(a.prototype,i),c&&u(a,c),t}();t.a=d},191:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=(a(167),a(266));function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var m=function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=s(t).call(this,e),a=!r||"object"!==l(r)&&"function"!==typeof r?u(n):r,p(u(u(a)),"onPreviewDrop",function(e){a.setState({files:a.state.files.concat(e)})}),p(u(u(a)),"deletePicture",function(){console.log("lol")}),a.state={files:[]},a}var a,m,f;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,n["Component"]),a=t,(m=[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.props.showUploader?"d-flex flex-wrap":"d-none"},r.a.createElement(o.a,{accept:"image/*",onDrop:this.onPreviewDrop,className:"dropzone"},"Click here to upload Image"),this.state.files.length>0&&r.a.createElement(r.a.Fragment,null,this.state.files.map(function(t){return r.a.createElement("div",null,r.a.createElement("div",{className:"image-preview-wrapper"},r.a.createElement("img",{alt:"Preview",key:t.name,src:t.preview})),r.a.createElement("div",{className:"preview-overlay"},r.a.createElement("button",{type:"button",onClick:e.deletePicture(),className:"preview-delete"},"Delete")))})))}}])&&i(a.prototype,m),f&&i(a,f),t}();t.a=m},194:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=(a(195),a(96)),l=a.n(o);function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var f=function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=c(t).call(this,e),a=!r||"object"!==i(r)&&"function"!==typeof r?p(n):r,m(p(p(a)),"onKeyPress",function(e){if(13===e.which){var t=sessionStorage.getItem("uuid"),n=sessionStorage.getItem("token"),r={comment:a.state.comment,ref:a.props.postID};console.log(r),l()({method:"POST",url:"http://api.gclout.com:3000/comments",data:r,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8",token:n,uuid:t}}).then(function(e){console.log(e.data),a.setState({comment:""})})}}),a.state={comment:"",ref:""},a.onChange=a.onChange.bind(p(p(a))),a.onKeyPress=a.onKeyPress.bind(p(p(a))),a}var a,o,f;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,n["Component"]),a=t,(o=[{key:"onChange",value:function(e){this.setState(m({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.props.show?"comment-input-wrapper":"comment-input-wrapper hidden"},r.a.createElement("div",{className:"comment-owner-wrapper"},r.a.createElement("img",{className:"comment-owner",src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",alt:"comment-owner"})),r.a.createElement("input",{onKeyPress:this.onKeyPress,type:"text",onSubmit:this.onSubmit,name:"comment",className:"form-control",placeholder:"write a comment here...",value:this.state.comment,onChange:this.onChange,onClick:function(){return e.props.postID}}))}}])&&s(a.prototype,o),f&&s(a,f),t}();t.a=f},195:function(e,t,a){},229:function(e,t,a){"use strict";var n=a(1);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o=function(){return Math.random().toString(36).substring(2)},l=function(e){var t=e.animate,a=e.ariaLabel,l=e.children,i=e.className,s=e.height,c=e.preserveAspectRatio,u=e.primaryColor,p=e.primaryOpacity,m=e.rtl,f=e.secondaryColor,d=e.secondaryOpacity,h=e.speed,y=e.style,b=e.uniquekey,v=e.width,g=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["animate","ariaLabel","children","className","height","preserveAspectRatio","primaryColor","primaryOpacity","rtl","secondaryColor","secondaryOpacity","speed","style","uniquekey","width"]),E=b?b+"-idClip":o(),w=b?b+"-idGradient":o(),N=m?["1; -3","2; -2","3; -1"]:["-3; 1","-2; 2","-1; 3"];return Object(n.createElement)("svg",r({role:"img",style:y,className:i,"aria-labelledby":a,viewBox:"0 0 "+v+" "+s,preserveAspectRatio:c},g),Object(n.createElement)("title",null,a),Object(n.createElement)("rect",{x:"0",y:"0",width:v,height:s,clipPath:"url(#"+E+")",style:{fill:"url(#"+w+")"}}),Object(n.createElement)("defs",null,Object(n.createElement)("clipPath",{id:E},l),Object(n.createElement)("linearGradient",{id:w},Object(n.createElement)("stop",{offset:"0%",stopColor:u,stopOpacity:p},t&&Object(n.createElement)("animate",{attributeName:"offset",values:N[0],dur:h+"s",repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"50%",stopColor:f,stopOpacity:d},t&&Object(n.createElement)("animate",{attributeName:"offset",values:N[1],dur:h+"s",repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"100%",stopColor:u,stopOpacity:p},t&&Object(n.createElement)("animate",{attributeName:"offset",values:N[2],dur:h+"s",repeatCount:"indefinite"})))))},i={animate:!0,ariaLabel:"Loading interface...",height:130,preserveAspectRatio:"xMidYMid meet",primaryColor:"#f0f0f0",primaryOpacity:1,rtl:!1,secondaryColor:"#e0e0e0",secondaryOpacity:1,speed:2,width:400},s=function(e){return Object(n.createElement)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:e.width,height:e.height})},c=function(e){var t=r({},i,e),a=e.children?e.children:Object(n.createElement)(s,t);return Object(n.createElement)(l,t,a)};t.a=c},254:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=(a(167),a(191)),l=a(96),i=a.n(l),s=a(170),c=a(255),u=a.n(c),p=a(259),m=a.n(p),f=a(260),d=a.n(f);function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t,a){return t&&b(e.prototype,t),a&&b(e,a),e}function g(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?O(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var C=function(e){function t(e){var a;return y(this,t),S(O(O(a=g(this,E(t).call(this,e)))),"showFilters",function(){var e=a.state.showFilters;a.setState({showFilters:!e})}),S(O(O(a)),"updatePosts",function(){return a.props.updatePosts()}),a.state={showNewPost:!1,showFilters:!1},a.newPostToggle=a.newPostToggle.bind(O(O(a))),a}return w(t,n["Component"]),v(t,[{key:"newPostToggle",value:function(){var e=this.state.showNewPost;this.setState({showNewPost:!e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"make-post"},r.a.createElement("div",{className:"make-post-header d-flex"},r.a.createElement("button",{className:"btn btn-tab",onClick:this.newPostToggle},r.a.createElement(u.a,{className:"text-gclout-blue"}),"Post"),r.a.createElement("div",{className:"ml-auto align-self-center"},r.a.createElement(s.a,null,r.a.createElement(s.c,null,function(t){var a=t.ref;return r.a.createElement("button",{type:"button",ref:a,onClick:e.showFilters,className:"btn btn-white"},r.a.createElement(m.a,null)," ","Filters")}),r.a.createElement(s.b,{placement:"bottom"},function(t){var a=t.ref,n=t.style,o=t.placement,l=t.arrowProps;return r.a.createElement("div",{ref:a,style:n,"data-placement":o},r.a.createElement("div",{className:e.state.showFilters?"button-dropdown show":"button-dropdown"},r.a.createElement("ul",{className:"button-dropdown-list"},r.a.createElement("li",{className:"profile-dropdown-list-item",onClick:e.showFilters},r.a.createElement("button",{className:"button-dropdown-list-button"},"All")),r.a.createElement("li",{className:"profile-dropdown-list-item",onClick:e.showFilters},r.a.createElement("button",{className:"button-dropdown-list-button"},"Ministry")),r.a.createElement("li",{className:"profile-dropdown-list-item",onClick:e.showFilters},r.a.createElement("button",{className:"button-dropdown-list-button"},"Department")),r.a.createElement("li",{className:"profile-dropdown-list-item",onClick:e.showFilters},r.a.createElement("button",{className:"button-dropdown-list-button"},"Agency")))),r.a.createElement("div",{ref:l.ref,style:l.style}))})))),r.a.createElement(P,{updatePosts:this.updatePosts,show:this.state.showNewPost}))}}]),t}();t.a=C;var P=function(e){function t(e){var a;return y(this,t),S(O(O(a=g(this,E(t).call(this,e)))),"handleChange",function(e){a.setState(S({},e.target.name,e.target.value))}),S(O(O(a)),"updatePostsNow",function(){return a.props.updatePosts()}),S(O(O(a)),"updateWordCount",function(e){if(a.setState({post:e.target.value}),""===a.state.post)a.setState({wordCount:0});else{var t=a.state.post.split(" ").length;a.setState({wordCount:t})}0===a.state.wordCount?a.setState({disable:!1}):a.setState({disable:!0})}),S(O(O(a)),"showImageUploader",function(e){e.preventDefault();var t=a.state.uploadImages;a.setState({uploadImages:!t})}),a.state={wordCount:0,post:"",uploadImages:!1,toProfile:!1,disable:!1,loading:!1,class:"",department:""},a.updateWordCount=a.updateWordCount.bind(O(O(a))),a.onSubmit=a.onSubmit.bind(O(O(a))),a}return w(t,n["Component"]),v(t,[{key:"onSubmit",value:function(e){var t=this;this.setState({loading:!0});var a=sessionStorage.getItem("uuid"),n=sessionStorage.getItem("token");e.preventDefault();var r={post:this.state.post};i()({method:"post",url:"http://api.gclout.com:3000/posts",data:r,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8",token:n,uuid:a}}).then(function(e){t.setState({loading:!1,post:""}),t.updatePostsNow(),e.data.Success?sessionStorage.setItem("message",e.data.Success):console.log("login error"),console.log(e.data.Success)}).catch(function(e){t.setState({loading:!1,post:""}),console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:this.props.show?"new-post-container show":"new-post-container"},r.a.createElement("div",{className:"pt-4 px-4 pb-5"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md"},r.a.createElement("label",{htmlFor:"class"},"Pick a class"),r.a.createElement("select",{name:"class",className:"form-control",onChange:this.handleChange,required:!0},r.a.createElement("option",{value:"Economy"},"Economy"),r.a.createElement("option",{value:"Infrastructure"},"Infrastructure"),r.a.createElement("option",{value:"Education"},"Education"),r.a.createElement("option",{value:"Politics"},"Politics"),r.a.createElement("option",{value:"Security"},"Security"),r.a.createElement("option",{value:"Agriculture"},"Agriculture"),r.a.createElement("option",{value:"Technology"},"Technology"),r.a.createElement("option",{value:"Economy"},"Economy"))),r.a.createElement("div",{className:"form-group col-md"},r.a.createElement("label",{htmlFor:"department"},"State"),r.a.createElement("select",{name:"department",className:"form-control",onChange:this.handleChange,required:!0},r.a.createElement("option",{value:"ministry"},"Ministry"),r.a.createElement("option",{value:"department"},"Department"),r.a.createElement("option",{value:"agency"},"Agency")))),r.a.createElement("h6",null,"Post"),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{className:"form-control",rows:"4",name:"post",onChange:this.updateWordCount,onCut:this.updateWordCount,onBlur:this.updateWordCount,onPaste:this.updateWordCount,value:this.state.post,placeholder:"Type post here...",required:!0})),r.a.createElement("p",{className:"text-right mb-0"},this.state.wordCount," ",""," words"),r.a.createElement(o.a,{showUploader:this.state.uploadImages}),r.a.createElement("div",{className:"d-flex"},r.a.createElement("button",{className:"btn btn-gclout-blue mr-2",style:{marginBottom:"0"},disabled:!this.state.disable},this.state.loading?r.a.createElement("i",{className:"fas fa-circle-notch fa-spin"}):"Share post"),r.a.createElement("button",{className:"btn btn-gclout-blue-outline",style:{marginBottom:"0"},onClick:this.showImageUploader,type:"button"},r.a.createElement(d.a,{className:"text-gclout-blue"}),"Photo & Video")))))}}]),t}()},259:function(e,t,a){"use strict";var n=a(141);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(1)),o=(0,n(a(163)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"FilterList");t.default=o},261:function(e,t,a){"use strict";var n=a(141);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(1)),o=(0,n(a(163)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.default.createElement("path",{d:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"})),"ThumbUp");t.default=o},262:function(e,t,a){"use strict";var n=a(141);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(1)),o=(0,n(a(163)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.default.createElement("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"})),"ChatBubbleOutline");t.default=o},267:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=a(2),l=a.n(o),i=(a(169),a(96)),s=a.n(i),c=a(144),u=a(261),p=a.n(u),m=a(262),f=a.n(m),d=a(263),h=a.n(d),y=a(170);function b(e){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var O=function(e){function t(){var e,a,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,n=g(t).call(this),e=!n||"object"!==b(n)&&"function"!==typeof n?w(a):n,N(w(w(e)),"openDropup",function(){var t=e.state.showDropup;e.setState({showDropup:!t})}),N(w(w(e)),"showComment",function(){e.props.showComment()}),N(w(w(e)),"likePost",function(){var t=sessionStorage.getItem("uuid"),a=sessionStorage.getItem("token");e.setState({liked:!0});var n=e.props.postID,r={post:e.props.postID},o="http://api.gclout.com:3000/reactions/"+n;s()({method:"post",url:o,data:r,mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8",token:a,uuid:t}}).then(function(e){console.log(e)})}),e.state={reactions:[],comments:[],shares:[],comment:[],liked:!1,showDropup:!1},e}var a,o,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,n["Component"]),a=t,(o=[{key:"componentDidMount",value:function(){var e=this;this.setState({reactions:this.props.reactions,comments:this.props.comments,shares:this.props.shares});var t=sessionStorage.getItem("uuid");this.props.reactions.forEach(function(a){return a.user===t?e.setState({liked:!0}):e.setState({liked:!1})})}},{key:"registerShare",value:function(){var e=this,t=this.props.postID,a="".concat(c.a,"/shares/").concat(t),n={post:t},r=sessionStorage.getItem("uuid"),o={"Content-Type":"application/x-www-form-urlencoded;charset=utf-8",token:sessionStorage.getItem("token"),uuid:r};s()({method:"post",url:a,data:n,mode:"no-cors",headers:o}).then(function(t){var a={created_at:Date.now(),id:XPathExpression,post:e.props.postID,status:1,user:sessionStorage.getItem("uuid")},n=e.state.reactions.push(a);e.setState({reactions:n})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.reactions,n=t.comments,o=t.shares,l=t.liked;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"post-actions-container"},r.a.createElement("button",{className:l?"post-action active":"post-action",onClick:function(){return e.likePost(e.props.postID)}},r.a.createElement(p.a,null),a.length," ","  ","  like",1===a.length?"":"s"),r.a.createElement("button",{className:"post-action",onClick:this.showComment},r.a.createElement(f.a,null),n.length," "," "," comment",1===n.length?"":"s"),r.a.createElement(y.a,null,r.a.createElement(y.c,null,function(t){var a=t.ref;return r.a.createElement("button",{type:"button",ref:a,className:"post-action",onClick:e.openDropup},r.a.createElement(h.a,{className:"flipped-reply"}),o.length," "," "," share",1===o.length?"":"s")}),r.a.createElement(y.b,{placement:"bootom-end"},function(t){var a=t.ref,n=t.style,o=t.placement,l=t.arrowProps;return r.a.createElement("div",{ref:a,style:n,"data-placement":o},r.a.createElement("div",{className:e.state.showDropup?"dropup show":"dropup"},r.a.createElement("ul",{className:"dropup-list"},r.a.createElement("li",{className:"dropup-list-item",onClick:e.openDropup},r.a.createElement("button",{onClick:function(){return e.registerShare(e.props.postID)}},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/sharer/sharer.php?u=https://dev.gclout.com/activity/".concat(e.props.postID)},r.a.createElement("i",{className:"fab fa-facebook-f"})))),r.a.createElement("li",{className:"dropup-list-item",onClick:e.openDropup},r.a.createElement("button",{onClick:function(){return e.registerShare(e.props.postID)}},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/shareArticle?mini=true&url=https://www.dev.gclout.com/activity/".concat(e.props.postID,"&title=").concat(e.props.post)},r.a.createElement("i",{className:"fab fa-linkedin"})))),r.a.createElement("li",{className:"dropup-list-item",onClick:e.openDropup},r.a.createElement("button",{onClick:function(){return e.registerShare(e.props.postID)}},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/intent/tweet?text=".concat(e.props.post,"&url=https://www.dev.gclout.com/activity/").concat(e.props.postID)},r.a.createElement("i",{className:"fab fa-twitter"})))))),r.a.createElement("div",{ref:l.ref,style:l.style}))}))))}}])&&v(a.prototype,o),l&&v(a,l),t}(),S=a(194),C=a(278);function P(e){return(P="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",function(){return D});var D=function(e){function t(){var e,a,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,l=new Array(o),i=0;i<o;i++)l[i]=arguments[i];return n=this,r=(e=k(t)).call.apply(e,[this].concat(l)),a=!r||"object"!==P(r)&&"function"!==typeof r?x(n):r,I(x(x(a)),"state",{showComment:!1}),I(x(x(a)),"showComment",function(){var e=a.state.showComment;a.setState({showComment:!e})}),a}var a,o,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,n["Component"]),a=t,(o=[{key:"render",value:function(){return r.a.createElement("div",{style:{marginBottom:"1em"}},r.a.createElement(C.a,{to:"/activity/".concat(this.props.post.post.uuid),className:"post-link"},r.a.createElement("div",{className:"post-container"},r.a.createElement("div",{className:"post-owner"},r.a.createElement("div",{className:"post-owner-image-wrapper"},this.props.post.user[0]?r.a.createElement("img",{src:this.props.post.user[0].photo,alt:"lol",className:"post-owner-image"}):r.a.createElement("p",null,"lol")),r.a.createElement("div",{className:"post-owner-details"},r.a.createElement("p",null,this.props.post.user[0]?this.props.post.user[0].firstName+" "+this.props.post.user[0].lastName:"undefined"),"sponsored"===this.props.postType?r.a.createElement("p",{className:"post-type"},"Sponsored"):"")),r.a.createElement("div",{className:"post-content"},r.a.createElement("p",null,this.props.post.post.post)))),r.a.createElement(O,{showComment:this.showComment,comments:this.props.post.comments,post:this.props.post.post.post,postID:this.props.post.post.uuid,reactions:this.props.post.reactions,shares:this.props.post.shares}),r.a.createElement(S.a,{postID:this.props.post.post.uuid,show:this.state.showComment})," ")}}])&&j(a.prototype,o),l&&j(a,l),t}();I(D,"propTypes",{postType:l.a.string,media:l.a.bool}),I(D,"defaultProps",{postType:"simple-post",media:!1})},831:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=(a(142),a(154)),l=a(155),i=a(173),s=a(213),c=a(267),u=a(96),p=a.n(u),m=a(229);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var d=function(e){return r.a.createElement("div",{style:{background:"#ffffff",padding:"20px",marginBottom:"1em"}},r.a.createElement(m.a,f({height:100,width:400,primaryColor:"#f3f3f3",secondaryColor:"#CCCCCC",speed:3},e),r.a.createElement("rect",{x:"50",y:"5",rx:"4",ry:"4",width:"140",height:"6.4"}),r.a.createElement("rect",{x:"50",y:"20",rx:"4",ry:"4",width:"89",height:"6.4"}),r.a.createElement("rect",{x:"0",y:"50",rx:"3",ry:"3",width:"350",height:"6.4"}),r.a.createElement("rect",{x:"0",y:"65",rx:"3",ry:"3",width:"380",height:"6.4"}),r.a.createElement("rect",{x:"0",y:"80",rx:"3",ry:"3",width:"201",height:"6.4"}),r.a.createElement("circle",{cx:"20",cy:"20",r:"20"})))},h=a(254),y=a(156),b=a(835),v=a(164),g=a(50),E=a(165),w=a(166);function N(e){return(N="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var j=function(e){function t(e){var a,n,r,o,l,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=S(t).call(this,e),a=!r||"object"!==N(r)&&"function"!==typeof r?P(n):r,o=P(P(a)),i=function(){a.loadPosts()},(l="loadNow")in o?Object.defineProperty(o,l,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[l]=i,a.state={posts:[],userId:"",loading:!0,days:0,hasProfile:!0},a}var a,u,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,n["Component"]),a=t,(u=[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;this.setState({userId:t});var a=sessionStorage.getItem("uuid"),n=sessionStorage.getItem("token"),r="http://api.gclout.com:3000/profiles/".concat(a);p()({method:"GET",url:r,headers:{uuid:a,token:n}}).then(function(t){e.setState({hasProfile:!0})}).catch(function(t){return e.setState({hasProfile:!1})})}},{key:"componentWillMount",value:function(){this.loadPosts()}},{key:"loadPosts",value:function(){var e=this,t=sessionStorage.getItem("uuid"),a={token:sessionStorage.getItem("token"),uuid:t};p()({method:"get",url:"http://api.gclout.com:3000/posts?page=1&limit=10&sort=DESC",headers:a}).then(function(t){var a=t.data.posts;e.setState({posts:a,loading:!1})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return!1===this.state.hasProfile?r.a.createElement(b.a,{to:"/profile/create"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null,function(e){var t=e.logout;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{logout:t}),r.a.createElement(E.a,{logout:t}))}),r.a.createElement("div",{className:"app-wrapper"},r.a.createElement("div",{className:"container app-container mx-auto d-flex"},r.a.createElement("div",{className:"col-md-9"},r.a.createElement("div",{className:"d-flex"},r.a.createElement(i.a,null),r.a.createElement("div",{className:"flex-1"},"executive"===this.state.userId.id?r.a.createElement(h.a,{updatePosts:this.loadNow}):r.a.createElement(s.a,{updatePosts:this.loadNow}),this.state.loading?r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(d,null),r.a.createElement(d,null)):this.state.posts.map(function(e){return r.a.createElement(c.a,{key:e.post.id.toString(),post:e})})))),r.a.createElement("div",{className:"col-md-3 d-none d-md-block",style:{padding:"0px"}},r.a.createElement(y.a,null),r.a.createElement(o.a,null),r.a.createElement(l.a,null)))),r.a.createElement(v.a,null))}}])&&O(a.prototype,u),m&&O(a,m),t}();t.default=j}}]);
//# sourceMappingURL=Activity.7c8a4422.chunk.js.map