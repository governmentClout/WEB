(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{337:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"c",function(){return r}),a.d(t,"b",function(){return o});var n="http://api.gclout.com:3000",r="https://api.cloudinary.com/v1_1/xyluz/image/upload",o="bbhcijzf"},349:function(e,t,a){},351:function(e,t,a){"use strict";var n=a(1),r=a.n(n);a(352);function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=function(e){function t(e){var a,n,r,i,c,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=!(r=l(t).call(this,e))||"object"!==o(r)&&"function"!==typeof r?s(n):r,i=s(a),u=function(e){if(Array.isArray(e)||e.length>0){for(var t=e.slice(),a=0;a<t.length;a++){var n=Math.trunc(Math.random()*t.length),r=t[n];t[n]=t[a],t[a]=r}return t}return[]},(c="rearrangeArray")in i?Object.defineProperty(i,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):i[c]=u,a.state={imagesList:[],shuffleList:["https://res.cloudinary.com/plushdeveloper/image/upload/v1538884672/gclout/1.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884671/gclout/2.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884668/gclout/16.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884667/gclout/15.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884664/gclout/13.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884663/gclout/12.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884661/gclout/11.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884660/gclout/9.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884663/gclout/12.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884655/gclout/7.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884654/gclout/4.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884655/gclout/5.png"],bottomImages:["https://res.cloudinary.com/plushdeveloper/image/upload/v1538884671/gclout/3.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884666/gclout/14.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884661/gclout/10.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884655/gclout/6.png"]},a}var a,u,p;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,n["Component"]),a=t,(u=[{key:"componentDidMount",value:function(){var e=this.rearrangeArray(this.state.shuffleList);this.setState({imagesList:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"d-flex align-items-stretch flex-wrap no-gutters auth-bg"},r.a.createElement("div",{className:"auth-bg-overlay"}),this.state.imagesList.map(function(e,t){return r.a.createElement("div",{className:"col-md-3 col-sm-4 col-6 authBg",key:"key-"+t},r.a.createElement("img",{src:e,alt:"bg-image-"+t,className:"img-fluid"}))}))}}])&&i(a.prototype,u),p&&i(a,p),t}();t.a=u},352:function(e,t,a){},5799:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=(a(349),a(351)),i=a(6052),l=a(140),s=a(97),c=a.n(s),u=a(437),p=(a(485),a(481)),m=a.n(p),f=a(337);function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t,a,n,r,o,i){try{var l=e[o](i),s=l.value}catch(c){return void a(c)}l.done?t(s):Promise.resolve(s).then(n,r)}function g(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var o=e.apply(t,a);function i(e){h(o,n,r,i,l,"next",e)}function l(e){h(o,n,r,i,l,"throw",e)}i(void 0)})}}function b(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var N=function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=v(t).call(this,e),a=!r||"object"!==d(r)&&"function"!==typeof r?y(n):r,E(y(a),"errorToast",null),E(y(a),"notify",function(e){if(a.errorToast&&u.toast.dismiss(a.errorToast),404!==e.response.status)return e;e="invalid email or password",a.errorToast=u.toast.error("Login Failed: "+e,{position:u.toast.POSITION.TOP_LEFT,autoClose:!1})}),a.state={email:"",password:"",loading:!1,redirectToReferrer:!1},a.signin=a.signin.bind(y(a)),a}var a,s,p;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,n["Component"]),a=t,(s=[{key:"dataChange",value:function(e){this.setState(E({},e.target.name,e.target.value))}},{key:"postData",value:function(e){var t=this;e.preventDefault(),this.setState({loading:!0});var a={email:this.state.email,password:this.state.password,provider:"email"},n="".concat(f.a,"/login");c()({method:"post",url:n,data:a,headers:{"Content-Type":"text/plain;charset=utf-8"}}).then(function(e){var a=e;if(a.data){var n=function(){var e=g(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r.props.login(a.data.user);case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();sessionStorage.setItem("uuid",a.data.user.uuid),sessionStorage.setItem("token",a.data.user.token),sessionStorage.setItem("data",JSON.stringify(a));var r=t;n().then(r.setState(function(){return{redirectToReferrer:!0}}))}}).catch(function(e){t.notify(e),t.setState({loading:!1})})}},{key:"signin",value:function(e,t){var a=this;if("google"===t&&e.w3.U3){var n={provider:t,email:e.w3.U3};c()({method:"post",url:"http://api.gclout.com:3000/login",data:n,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"}}).then(function(e){if(e.data){var t=function(){var t=g(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.props.login(e.data.user);case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}();sessionStorage.setItem("data",JSON.stringify(e));var n=a;t().then(n.setState(function(){return{redirectToReferrer:!0}}))}}).catch(function(e){a.notify(e),a.setState({loading:!1})})}}},{key:"render",value:function(){var e=this,t=function(t){console.log(t),e.signin(t,"google")},a=(this.props.location.state||{from:{pathname:"/"}}).from;return!0===this.state.redirectToReferrer?r.a.createElement(i.a,{to:a}):r.a.createElement("div",{className:"auth-page d-flex"},r.a.createElement(o.a,null),r.a.createElement("div",{className:"authy"},r.a.createElement("div",{className:"m-auto bg-white auth-page-card col-lg-7 col-md-8"},r.a.createElement("h2",{className:"auth-card-title text-center mb-3"},"Sign Into Your GClout Account"),r.a.createElement("div",{className:"row --with-divider"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("form",{className:"auth-form mb-4",onSubmit:this.postData.bind(this)},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"Email address",onChange:this.dataChange.bind(this),value:this.state.email,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",onChange:this.dataChange.bind(this),value:this.state.password,placeholder:"Password",required:!0})),r.a.createElement("button",{className:"btn btn-block btn-gclout-blue"},this.state.loading?r.a.createElement("i",{className:"fas fa-circle-notch fa-spin"}):"Sign in"),r.a.createElement("div",{className:"form-group mt-2 d-flex"},r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"mr-2",type:"checkbox"}),r.a.createElement("label",{htmlFor:"remember",className:"form-check-label"},"Remember me")),r.a.createElement(l.a,{to:"/forgot-password",className:"auth-page-link text-right",style:{width:"55%"}},"Forgot password")))),r.a.createElement("div",{className:"vertical-divider"},"OR"),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"social-buttons"},r.a.createElement("button",{className:"social-button-facebook btn btn-block"},r.a.createElement("i",{className:"fab fa-facebook-f"}),"Facebook"),r.a.createElement("button",{className:"social-button-twitter btn btn-block"},r.a.createElement("i",{className:"fab fa-twitter"}),"Twitter"),r.a.createElement(m.a,{className:"social-button-google btn btn-block",clientId:"721177315518-ebi0q400rdhuvphrkff962s5encqd3b4.apps.googleusercontent.com",buttonText:"Google",onSuccess:t,onFailure:t},r.a.createElement("i",{className:"fab fa-google"})," Google"),r.a.createElement("button",{className:"social-button-linkedin btn btn-block"},r.a.createElement("i",{className:"fab fa-linkedin-in"}),"Linkedin")),r.a.createElement("p",{className:"text-center"},"Dont have an account?"," ",r.a.createElement(l.a,{className:"auth-page-link",to:"/register"},"Sign up")," "))))),r.a.createElement(u.ToastContainer,null))}}])&&b(a.prototype,s),p&&b(a,p),t}();t.default=N}}]);
//# sourceMappingURL=Login.25abb992.chunk.js.map