(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{395:function(e,t,a){"use strict";var o=a(1),n=a.n(o),l=(a(356),a(93)),r=a.n(l),s=a(331);function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t,a){return t&&u(e.prototype,t),a&&u(e,a),e}function p(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?g(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var b=function(e){function t(e){var a;return c(this,t),w(g(g(a=p(this,d(t).call(this,e)))),"updatePosts",function(){return a.props.updatePosts()}),a.state={showNewPost:!1,showNewArticle:!1,showNewPoll:!1},a.newPostToggle=a.newPostToggle.bind(g(g(a))),a.newArticleToggle=a.newArticleToggle.bind(g(g(a))),a.newPollToggle=a.newPollToggle.bind(g(g(a))),a.closeAll=a.closeAll.bind(g(g(a))),a}return f(t,o["Component"]),m(t,[{key:"newPostToggle",value:function(){(this.state.showNewArticle||this.state.showNewPoll)&&this.setState({showNewArticle:!1,showNewPoll:!1});var e=this.state.showNewPost;this.setState({showNewPost:!e})}},{key:"newPollToggle",value:function(){(this.state.showNewPost||this.state.showNewArticle)&&this.setState({showNewArticle:!1,showNewPost:!1});var e=this.state.showNewPoll;this.setState({showNewPoll:!e})}},{key:"newArticleToggle",value:function(){(this.state.showNewPost||this.state.showNewPoll)&&this.setState({showNewPost:!1,showNewPoll:!1});var e=this.state.showNewArticle;this.setState({showNewArticle:!e})}},{key:"closeAll",value:function(){this.setState({showNewPost:!1,showNewArticle:!1,showNewPoll:!1})}},{key:"render",value:function(){return n.a.createElement("div",{className:"poll"!==this.props.type?"make-post":"make-post not-rounded"},n.a.createElement("div",{className:"make-post-header d-flex"},"poll"!==this.props.type?n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{className:"btn btn-tab",onClick:this.newPostToggle},n.a.createElement("i",{className:"fas fa-file text-gclout-blue",style:{marginRight:"10px"}}),"Post"),n.a.createElement("button",{className:"btn btn-tab",onClick:this.newArticleToggle},n.a.createElement("i",{className:"fas fa-clipboard-list text-gclout-blue",style:{marginRight:"10px"}}),"Article")):n.a.createElement("button",{className:"btn btn-tab",onClick:this.newPollToggle},n.a.createElement("i",{className:"fas fa-poll text-gclout-blue",style:{marginRight:"10px"}}),"Poll"),this.state.showNewPost||this.state.showNewArticle||this.state.showNewPoll?n.a.createElement("p",{className:"text-right close-btn ml-auto align-self-center",onClick:this.closeAll},n.a.createElement("i",{className:"fas fa-times"})):""),"poll"!==this.props.type?n.a.createElement(n.a.Fragment,null,n.a.createElement(y,{updatePosts:this.updatePosts,show:this.state.showNewPost}),n.a.createElement(v,{updatePosts:this.updatePosts,show:this.state.showNewArticle})):n.a.createElement(E,{show:this.state.showNewPoll}))}}]),t}();t.a=b;var y=function(e){function t(e){var a;return c(this,t),w(g(g(a=p(this,d(t).call(this,e)))),"updatePostsNow",function(){return a.props.updatePosts()}),w(g(g(a)),"updateWordCount",function(e){if(a.setState({post:e.target.value}),""===a.state.post)a.setState({wordCount:0});else{var t=a.state.post.split(" ").length;a.setState({wordCount:t})}a.state.wordCount>100||0===a.state.wordCount?a.setState({disable:!1}):a.setState({disable:!0})}),w(g(g(a)),"showImageUploader",function(e){e.preventDefault();var t=a.state.uploadImages;a.setState({uploadImages:!t})}),w(g(g(a)),"onChange",function(e){switch(e.target.name){case"selectedFile":a.setState({selectedFile:e.target.files[0]});break;default:a.setState(w({},e.target.name,e.target.value))}}),w(g(g(a)),"fileSelected",function(e){a.setState({selectedFile:e.target.files[0],loaded:0,preview:URL.createObjectURL(e.target.files[0])})}),a.state={wordCount:0,post:"",uploadImages:!1,toProfile:!1,disable:!1,loading:!1,selectedFile:null,post_type:"",loaded:0,preview:""},a.updateWordCount=a.updateWordCount.bind(g(g(a))),a.onSubmit=a.onSubmit.bind(g(g(a))),a}return f(t,o["Component"]),m(t,[{key:"onSubmit",value:function(e){var t=this;this.setState({loading:!0});var a=sessionStorage.getItem("uuid"),o=sessionStorage.getItem("token");if(e.preventDefault(),null!==this.state.selectedFile){var n=this.state.selectedFile,l=new FormData;l.append("file",n),l.append("upload_preset","".concat(s.b)),r()({url:"".concat(s.c),method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:l,onUploadProgress:function(e){console.log(e.loaded/e.total),t.setState({loaded:ProgressEvent.loaded/ProgressEvent.total*1})}}).then(function(e){t.setState({preview:e.data.secure_url});var n={post:t.state.post,post_type:"post",attachment:e.data.secure_url};console.log(n),r()({method:"post",url:"".concat(s.a,"/posts"),data:n,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8",token:o,uuid:a}}).then(function(e){console.log(e.data),e.data.Success&&(t.setState({loading:!1,post:"",showNewPost:!1,selectedFile:null,loaded:0,preview:""}),t.updatePostsNow())})})}else{var i={post:this.state.post,post_type:"post"};console.log(i);var c="".concat(s.a,"/posts");r()({method:"post",url:c,data:i,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8",token:o,uuid:a}}).then(function(e){e.data.Success?(t.setState({loading:!1,post:""}),t.updatePostsNow(),sessionStorage.setItem("message",e.data.Success)):console.log("login error"),console.log(e.data.Success)}).catch(function(e){t.setState({loading:!1,post:""}),console.log(e)})}}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:this.props.show?"new-post-container show":"new-post-container"},n.a.createElement("div",{className:"pt-4 px-4 pb-5"},n.a.createElement("h5",null,"Post"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:this.state.wordCount<100?"form-control":"form-control border-red",rows:"4",name:"post",onChange:this.updateWordCount,onCut:this.updateWordCount,onBlur:this.updateWordCount,onPaste:this.updateWordCount,value:this.state.post,placeholder:"Type post here...",required:!0})),n.a.createElement("p",{className:"text-right mb-0"},100-this.state.wordCount," ",""," words left"),this.state.preview?n.a.createElement("div",null,n.a.createElement("img",{class:"img-thumbnail",src:this.state.preview,alt:"preview"})):"",n.a.createElement("div",{className:"d-flex"},n.a.createElement("button",{className:"btn btn-gclout-blue mr-2",style:{marginBottom:"0"},type:"submit"},this.state.loading?n.a.createElement("i",{className:"fas fa-circle-notch fa-spin"}):"Share post"),n.a.createElement("input",{type:"file",ref:function(t){return e.fileInput=t},onChange:this.fileSelected,style:{display:"none"}}),n.a.createElement("button",{className:"btn btn-gclout-blue-outline",style:{marginBottom:"0"},onClick:function(){return e.fileInput.click()},type:"button"},n.a.createElement("i",{className:"fas fa-camera mr-2"}),"Photo & Video")))))}}]),t}(),v=function(e){function t(e){var a;return c(this,t),w(g(g(a=p(this,d(t).call(this,e)))),"updatePostsNow",function(){return a.props.updatePosts()}),w(g(g(a)),"showImageUploader",function(e){e.preventDefault();var t=a.state.uploadImages;a.setState({uploadImages:!t})}),w(g(g(a)),"fileSelected",function(e){a.setState({selectedFile:e.target.files[0],loaded:0,preview:URL.createObjectURL(e.target.files[0])},function(){return console.log(a.state.selectedFile)})}),a.state={wordCount:0,article:"",title:"",uploadImages:!1,toProfile:!1,selectedFile:null,uploadedFileCloudinaryUrl:"",loaded:0,loading:!1,preview:""},a.updateWordCount=a.updateWordCount.bind(g(g(a))),a.onSubmit=a.onSubmit.bind(g(g(a))),a.onChange=a.onChange.bind(g(g(a))),a}return f(t,o["Component"]),m(t,[{key:"updateWordCount",value:function(e){if(this.setState({article:e.target.value}),""===this.state.article)this.setState({wordCount:0});else{var t=this.state.article.split(" ").length;this.setState({wordCount:t})}}},{key:"onChange",value:function(e){this.setState(w({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;this.setState({loading:!0});var a=sessionStorage.getItem("uuid"),o=sessionStorage.getItem("token");if(e.preventDefault(),null!==this.state.selectedFile){var n=this.state.selectedFile,l=new FormData;l.append("file",n),l.append("upload_preset","".concat(s.b)),r()({url:"".concat(s.c),method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:l,onUploadProgress:function(e){console.log(e.loaded/e.total),t.setState({loaded:ProgressEvent.loaded/ProgressEvent.total*1})}}).then(function(e){console.log(e.data.url),t.setState({preview:e.data.secure_url});var n={article:t.state.article,article_title:t.state.title,post_type:"article",attachment:e.data.secure_url};console.log(n),r()({method:"post",url:"".concat(s.a,"/articles"),data:n,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8",token:o,uuid:a}}).then(function(e){console.log(e.data),e.data.Success&&(t.setState({loading:!1,article:"",title:"",newArticleToggle:!1,selectedFile:null,loaded:0,preview:""}),t.updatePostsNow())})})}else{var i={article:this.state.article,article_title:this.state.title,post_type:"article"};console.log(i);var c="".concat(s.a,"/articles");console.log(c),r()({method:"post",url:c,data:i,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8",token:o,uuid:a}}).then(function(e){console.log(e.data),t.setState({loading:!1,article:"",title:""}),t.updatePostsNow(),e.data.Success?(t.setState({toProfile:!0,article:"",title:""}),sessionStorage.setItem("message",e.data.Success)):console.log("login error"),console.log(e.data.Success)}).catch(function(e){t.setState({loading:!1,post:""}),console.log(e)})}}},{key:"render",value:function(){var e=this,t=this.state.loading;return n.a.createElement("div",{className:this.props.show?"new-post-container show":"new-post-container"},n.a.createElement("div",{className:"pt-4 px-4 pb-5"},n.a.createElement("h5",null,"Article"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"article-title"},"Title"),n.a.createElement("input",{type:"text",className:"form-control",name:"title",placeholder:"Title of article ...",value:this.state.title,onChange:this.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"new_article"},"Article"),n.a.createElement("textarea",{className:"form-control",rows:"4",name:"article",onChange:this.updateWordCount,value:this.state.article,placeholder:"Type article here..."})),n.a.createElement("p",{className:"text-right mb-0"},this.state.wordCount," ",""," words"),this.state.preview?n.a.createElement("div",null,n.a.createElement("img",{class:"img-thumbnail",src:this.state.preview,alt:"preview"})):"",n.a.createElement("div",{className:"d-flex"},n.a.createElement("button",{className:"btn btn-gclout-blue mr-2",style:{marginBottom:"0"},type:"submit"},t?n.a.createElement("i",{className:"fas fa-circle-notch fa-spin"}):"Share Article"),n.a.createElement("input",{type:"file",ref:function(t){return e.fileInput=t},onChange:this.fileSelected,style:{display:"none"}}),n.a.createElement("button",{className:"btn btn-gclout-blue-outline",style:{marginBottom:"0"},onClick:function(){return e.fileInput.click()},type:"button"},n.a.createElement("i",{className:"fas fa-camera mr-2"}),"Photo & Video")))))}}]),t}(),E=function(e){function t(e){var a;return c(this,t),(a=p(this,d(t).call(this,e))).state={wordCount:0,opinion:"",sector:"",expiry:""},a.onSubmit=a.onSubmit.bind(g(g(a))),a.onChange=a.onChange.bind(g(g(a))),a}return f(t,o["Component"]),m(t,[{key:"onChange",value:function(e){this.setState(w({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a={opinion:this.state.opinion,sector:this.state.sector,expire_at:this.state.expiry};console.log(a);var o=sessionStorage.getItem("uuid"),n=sessionStorage.getItem("token");console.log(o,n),r()({method:"post",url:"http://api.gclout.com:3000/polls",data:a,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8",token:n,uuid:o}}).then(function(e){console.log(e.data),t.getPolls(),t.setState({opinion:"",date:"",sector:""})}).catch(function(e){console.log(e)})}},{key:"componentWillMount",value:function(){this.getPolls()}},{key:"getPolls",value:function(){var e=this;r()({method:"get",url:"http://api.gclout.com:3000/polls",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8",token:sessionStorage.getItem("token"),uuid:sessionStorage.getItem("uuid")}}).then(function(t){console.log(t.data),e.setState({polls:t.data})})}},{key:"render",value:function(){return n.a.createElement("div",{className:this.props.show?"new-post-container show":"new-post-container"},n.a.createElement("div",{className:"pt-4 px-4 pb-5"},n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Sector"),n.a.createElement("select",{name:"sector",className:"form-control",onChange:this.onChange,required:!0},n.a.createElement("option",{value:"economy"},"Economy"),n.a.createElement("option",{value:"infrastructure"},"Infrastructure"),n.a.createElement("option",{value:"education"},"Education"),n.a.createElement("option",{value:"politics"},"Politics"),n.a.createElement("option",{value:"security"},"Security"),n.a.createElement("option",{value:"agriculture"},"Agriculture"),n.a.createElement("option",{value:"technology"},"Technology"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Date"),n.a.createElement("input",{type:"date",className:"form-control",name:"expiry",value:this.state.expiry,onChange:this.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Opininion"),n.a.createElement("textarea",{className:"form-control",rows:"4",name:"opinion",value:this.state.opinion,onChange:this.onChange,placeholder:"Type opinion here..."})),n.a.createElement("div",{className:"d-flex"},n.a.createElement("button",{className:"btn btn-gclout-blue mr-2",style:{marginBottom:"0"}},"Share poll")))))}}]),t}()},918:function(e,t,a){"use strict";a.r(t);var o=a(1),n=a.n(o),l=(a(580),a(336)),r=a(358),s=a(337),i=a(374),c=a(395),u=a(2),m=a.n(u),p=(a(357),a(93)),d=a.n(p),f=a(331);function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var E=function(e){function t(e){var a,o,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,n=w(t).call(this,e),a=!n||"object"!==h(n)&&"function"!==typeof n?y(o):n,v(y(y(a)),"onChange",function(e){a.setState(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},o=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),o.forEach(function(t){v(e,t,a[t])})}return e}({},a.state,{option:e.target.value}))}),v(y(y(a)),"getInitialState",function(){return a.state.selectedOption}),v(y(y(a)),"showComment",function(){var e=a.state.showComment;a.setState({showComment:!e})}),v(y(y(a)),"handleOptionChange",function(e){a.setState({selectedOption:e.target.value})}),a.state={selectedOption:"yes",showComment:!1,polls:[],option:"",firstName:"",lastName:"",user:[],loading:!1},a}var a,l,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,o["Component"]),a=t,(l=[{key:"respond",value:function(e){var t=this,a={poll:e,status:this.state.option},o={token:sessionStorage.getItem("token"),uuid:sessionStorage.getItem("uuid")};d()({method:"post",data:a,url:"".concat(f.a,"/polls/response"),headers:o}).then(function(e){"response submitted"===e.data.Success&&(t.getPolls(),t.setState({option:""}))})}},{key:"componentWillMount",value:function(){this.getPolls()}},{key:"getPolls",value:function(){var e=this;this.setState({loading:!0}),d()({method:"get",url:"http://api.gclout.com:3000/polls",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8",token:sessionStorage.getItem("token"),uuid:sessionStorage.getItem("uuid")}}).then(function(t){console.log(t.data),t.data.map(function(a){return e.setState({user:a.user[0],polls:t.data,loading:!1})})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.polls,o=t.loading,l=t.user;return console.log(l),o?n.a.createElement("img",{src:"https://i.gifer.com/8ZFL.gif",alt:"fake loader"}):n.a.createElement("div",{style:{marginBottom:"1em"}},a.map(function(t,a){return n.a.createElement("div",{className:"post-container"},n.a.createElement("div",{className:"post-owner"},n.a.createElement("div",{className:"post-owner-image-wrapper"},n.a.createElement("img",{src:"https://res.cloudinary.com/plushdeveloper/image/upload/v1540898186/profile_eyjfnd.jpg",alt:"lol",className:"post-owner-image"})),n.a.createElement("div",{className:"post-owner-details"},t.user.map(function(e){return n.a.createElement("p",{onLoad:function(){return alert(t.polls.created_by)}}," ",e.firstName," ",e.lastName," ")}),n.a.createElement("p",{className:"post-type"},t.polls.sector))),n.a.createElement("div",{className:"post-content"},n.a.createElement("p",null,t.polls.opinion),n.a.createElement("form",{className:"poll-form"},n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{className:"form-check-i",type:"radio",name:"option",onClick:function(a){return e.respond(t.polls.uuid)},value:"1",onChange:e.onChange}),n.a.createElement("span",{className:"checkmark"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"pollOptions"},"Yes/Agree/True")),n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{className:"form-check-i",type:"radio",name:"option",onClick:function(a){return e.respond(t.polls.uuid)},value:"2",onChange:e.onChange}),n.a.createElement("span",{className:"checkmark"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"pollOptions"},"No/Disagree/False")),n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{className:"form-check-i",type:"radio",onClick:function(a){return e.respond(t.polls.uuid)},name:"option",value:"3",onChange:e.onChange}),n.a.createElement("span",{className:"checkmark"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"pollOptions"},"Undecided/Ambiguos")))),n.a.createElement("hr",null))}),"}")}}])&&g(a.prototype,l),r&&g(a,r),t}();v(E,"propTypes",{postType:m.a.string,media:m.a.bool});var N=E,S=a(338),C=a(351),P=a(51),k=a(352),O=a(353);function x(e){return(x="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var I=function(e){function t(){var e,a,o,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,r=new Array(l),s=0;s<l;s++)r[s]=arguments[s];return o=this,n=(e=T(t)).call.apply(e,[this].concat(r)),a=!n||"object"!==x(n)&&"function"!==typeof n?j(o):n,A(j(j(a)),"state",{showFilters:!1}),A(j(j(a)),"showFilters",function(){var e=a.state.showFilters;a.setState({showFilters:!e})}),a}var a,u,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(t,o["Component"]),a=t,(u=[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(P.a,null,function(e){var t=e.logout;return n.a.createElement(n.a.Fragment,null,n.a.createElement(O.a,{logout:t}),n.a.createElement(k.a,{logout:t}))}),n.a.createElement("div",{className:"app-wrapper"},n.a.createElement("div",{className:"container app-container mx-auto d-flex"},n.a.createElement("div",{className:"col-md-9"},n.a.createElement("div",{className:"d-flex"},n.a.createElement(i.a,null),n.a.createElement("div",{className:"flex-1"},n.a.createElement("div",{className:"tabs-header"},n.a.createElement("div",{className:"filter-tabs"},n.a.createElement("button",{className:"btn btn-tabs active"},"All"),n.a.createElement("button",{className:"btn btn-tabs"},"Participated")),n.a.createElement(r.a,null,n.a.createElement(r.c,null,function(t){var a=t.ref;return n.a.createElement("button",{onClick:e.showFilters,className:"filter-button",ref:a},n.a.createElement("span",{className:"mr-2"},n.a.createElement("svg",{width:"18",height:"12",viewBox:"0 0 18 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M10 12H8C7.45 12 7 11.55 7 11C7 10.45 7.45 10 8 10H10C10.55 10 11 10.45 11 11C11 11.55 10.55 12 10 12ZM18 1C18 1.55 17.55 2 17 2H1C0.450001 2 0 1.55 0 1C0 0.45 0.450001 0 1 0H17C17.55 0 18 0.45 18 1ZM14 7H4C3.45 7 3 6.55 3 6C3 5.45 3.45 5 4 5H14C14.55 5 15 5.45 15 6C15 6.55 14.55 7 14 7Z",fill:"#333333"}))),"Filter")}),n.a.createElement(r.b,{placement:"bottom"},function(t){var a=t.ref,o=t.style,l=t.placement,r=t.arrowProps;return n.a.createElement("div",{ref:a,style:o,"data-placement":l},n.a.createElement("div",{className:e.state.showFilters?"filter-dropdown show":"filter-dropdown"},n.a.createElement("ul",{className:"filter-dropdown-list"},n.a.createElement("li",{className:"filter-dropdown-list-item"},n.a.createElement("button",{className:"filter-dropdown-button"},"All")),n.a.createElement("li",{className:"filter-dropdown-list-item"},n.a.createElement("button",{className:"filter-dropdown-button"},"Infrastructure")),n.a.createElement("li",{className:"filter-dropdown-list-item"},n.a.createElement("button",{className:"filter-dropdown-button"},"Education")),n.a.createElement("li",{className:"filter-dropdown-list-item"},n.a.createElement("button",{className:"filter-dropdown-button"},"Politics")),n.a.createElement("li",{className:"filter-dropdown-list-item"},n.a.createElement("button",{className:"filter-dropdown-button"},"Security")),n.a.createElement("li",{className:"filter-dropdown-list-item"},n.a.createElement("button",{className:"filter-dropdown-button"},"Agriculture")),n.a.createElement("li",{className:"filter-dropdown-list-item"},n.a.createElement("button",{className:"filter-dropdown-button"},"Technology")),n.a.createElement("li",{className:"filter-dropdown-list-item"},n.a.createElement("button",{className:"filter-dropdown-button"},"Economy")))),n.a.createElement("div",{ref:r.ref,style:r.style}))}))),n.a.createElement(c.a,{type:"poll"}),n.a.createElement(N,null)))),n.a.createElement("div",{className:"col-md-3 d-none d-md-block",style:{padding:"0px"}},n.a.createElement(S.a,null),n.a.createElement(l.a,null),n.a.createElement(s.a,null)))),n.a.createElement(C.a,null))}}])&&_(a.prototype,u),m&&_(a,m),t}();t.default=I}}]);
//# sourceMappingURL=OpinionPoll.ae1e1d2d.chunk.js.map