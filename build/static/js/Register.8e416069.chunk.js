(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{337:function(e,t,o){},339:function(e,t,o){"use strict";var a=o(1),n=o.n(a);o(340);function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=function(e){function t(e){var o,a,n,l,s,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,o=!(n=i(t).call(this,e))||"object"!==r(n)&&"function"!==typeof n?c(a):n,l=c(c(o)),u=function(e){if(Array.isArray(e)||e.length>0){for(var t=e.slice(),o=0;o<t.length;o++){var a=Math.trunc(Math.random()*t.length),n=t[a];t[a]=t[o],t[o]=n}return t}return[]},(s="rearrangeArray")in l?Object.defineProperty(l,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):l[s]=u,o.state={imagesList:[],shuffleList:["https://res.cloudinary.com/plushdeveloper/image/upload/v1538884672/gclout/1.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884671/gclout/2.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884668/gclout/16.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884667/gclout/15.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884664/gclout/13.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884663/gclout/12.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884661/gclout/11.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884660/gclout/9.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884663/gclout/12.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884655/gclout/7.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884654/gclout/4.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884655/gclout/5.png"],bottomImages:["https://res.cloudinary.com/plushdeveloper/image/upload/v1538884671/gclout/3.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884666/gclout/14.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884661/gclout/10.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884655/gclout/6.png"]},o}var o,u,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,a["Component"]),o=t,(u=[{key:"componentDidMount",value:function(){var e=this.rearrangeArray(this.state.shuffleList);this.setState({imagesList:e})}},{key:"render",value:function(){return n.a.createElement("div",{className:"d-flex align-items-stretch flex-wrap no-gutters auth-bg"},n.a.createElement("div",{className:"auth-bg-overlay"}),this.state.imagesList.map(function(e,t){return n.a.createElement("div",{className:"col-md-3 col-sm-4 col-6 authBg",key:"key-"+t},n.a.createElement("img",{src:e,alt:"bg-image-"+t,className:"img-fluid"}))}))}}])&&l(o.prototype,u),m&&l(o,m),t}();t.a=u},340:function(e,t,o){},570:function(e,t,o){"use strict";o.r(t);var a=o(1),n=o.n(a),r=(o(337),o(339)),l=o(914),i=o(500),s=o(571),c=o.n(s),u=o(494),m=o.n(u),p=o(601),d=o.n(p),f=o(93),g=o.n(f),h=o(428),b=(o(499),o(612)),v=o.n(b);function y(e){return(y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var O=function(e){function t(e){var o,a,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,n=E(t).call(this,e),o=!n||"object"!==y(n)&&"function"!==typeof n?k(a):n,S(k(k(o)),"linkedInLogin",function(){setTimeout(function(){this.getUserDetails()}.bind(k(k(o))),1e3),console.log("Loaded")}),S(k(k(o)),"onDateChange",function(e){return o.setState({date_of_birth:e})}),S(k(k(o)),"errorToast",null),S(k(k(o)),"notify",function(e){o.errorToast&&h.toast.dismiss(o.errorToast),o.errorToast=h.toast.error("Registration Failed: ",{position:h.toast.POSITION.TOP_LEFT,autoClose:!1})}),o.state={redirect:!1,password:"",email:"",phone:"",date_of_birth:new Date(1980,1,1),tosAgreement:"",provider:"email",user:null,token:"",loading:!1,isAuthenticated:!1},o.signup=o.signup.bind(k(k(o))),o.onChange=o.onChange.bind(k(k(o))),o.handleSubmit=o.handleSubmit.bind(k(k(o))),o}var o,s,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,a["Component"]),o=t,(s=[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.type="text/javascript",e.authorize=!0,e.src="http://platform.linkedin.com/in.js?async=true",e.api_key="77pb6qtint69q4",document.body.appendChild(e)}},{key:"getUserDetails",value:function(){window.IN.User.authorize(function(){window.IN.API.Profile("me").fields(["id","firstName","lastName","pictureUrl","publicProfileUrl"]).result(function(e){console.log(e),alert("Successfull login from linkedin : "+e.values[0].firstName+" "+e.values[0].lastName)}).error(function(e){console.log("Import error - Error occured while importing data")})})}},{key:"handleSubmit",value:function(e){var t=this;this.setState({loading:!0}),e.preventDefault();var o={phone:this.state.phone,email:this.state.email,dob:this.state.date_of_birth,password:this.state.password,tosAgreement:this.state.tosAgreement,provider:"email",redirect:!1};console.log(o),g()({method:"post",url:"http://api.gclout.com:3000/users",data:o,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"}}).then(function(e){var o=e;console.log(o),o.data&&(sessionStorage.setItem("data",JSON.stringify(o)),sessionStorage.setItem("token",o.data.Token),sessionStorage.setItem("uuid",o.data.uuid),t.props.login(o.data.user),t.setState({redirect:!0}))}).catch(function(e){console.log(e),t.setState({loading:!1})})}},{key:"onChange",value:function(e,t){this.setState(S({},e,t.target.value))}},{key:"signup",value:function(e,t){var o=this;if("facebook"===t&&e.email)return{email:e.email,provider:t,tosAgreement:!0};if("google"===t&&e.w3.U3){var a={provider:t,email:e.w3.U3,tosAgreement:!0,password:"password"};console.log(a);g()({method:"post",url:"http://api.gclout.com:3000/users",data:a,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"}}).then(function(e){console.log(e.data);var t=e.data;t&&(sessionStorage.setItem("data",JSON.stringify(t)),o.props.login(t.data.user))}).catch(function(e){console.log(e),o.notify(e),o.setState({loading:!1})})}if("twitter"===t&&e.email){console.log("twitter");var n={provider:t,email:e.email,tosAgreement:!0};console.log(n)}}},{key:"render",value:function(){var e=this,t=function(t){console.log(t),e.signup(t,"google")};function o(e){console.log(e),this.signup(e,"twitter")}var a=this.state,s=a.password,u=a.email,p=a.phone,f=a.redirect,g=a.tosAgreement;return f?n.a.createElement(l.a,{to:"/profile/create"}):n.a.createElement("div",null,n.a.createElement("div",{className:"auth-page d-flex"},n.a.createElement(r.a,null),n.a.createElement("div",{className:"authy"},n.a.createElement("div",{className:"m-auto bg-white auth-page-card col-lg-7 col-md-8"},n.a.createElement("h2",{className:"auth-card-title text-center mb-3"},"Create A GClout Account"),n.a.createElement("div",{className:"row --with-divider"},n.a.createElement("div",{className:"col-md-12 col-lg-6 mx-auto"},n.a.createElement("form",{className:"auth-form mb-4",onSubmit:this.handleSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"email"},"Email address"),n.a.createElement("input",{type:"email",className:"form-control",name:"email",onChange:function(t){return e.onChange("email",t)},value:u,placeholder:"Email address",required:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Password",onChange:function(t){return e.onChange("password",t)},value:s,required:!0})),n.a.createElement("div",{className:"form-row"},n.a.createElement("div",{className:"col-md left"},n.a.createElement("label",{htmlFor:"phone"},"Phone number"),n.a.createElement("input",{type:"phone",className:"form-control",name:"phone",placeholder:"Phone number",onChange:function(t){return e.onChange("phone",t)},value:p,required:!0})),n.a.createElement("div",{className:"col-md right"},n.a.createElement("label",null,"Date of birth"),n.a.createElement(c.a,{className:"form-date",onChange:this.onDateChange,value:this.state.date_of_birth,Calendar:null}))),n.a.createElement("div",{className:"form-group mt-2"},n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{className:"mr-2",type:"checkbox",ref:"check_me",value:g,onChange:function(t){e.setState({tosAgreement:t.target.checked})},required:!0}),n.a.createElement("label",{htmlFor:"agreement",className:"form-check-label",name:"tosAgreement"},"I agree with terms and conditions"))),n.a.createElement("button",{type:"submit",className:"btn btn-block btn-gclout-blue",onClick:this.handleSubmit},this.state.loading?n.a.createElement("i",{className:"fas fa-circle-notch fa-spin"}):"Register"," "))),n.a.createElement("div",{className:"vertical-divider"},"OR"),n.a.createElement("div",{className:"col-md-12 col-lg-6 mx-auto"},n.a.createElement("div",{className:"social-buttons"},n.a.createElement(m.a,{className:"social-button-google btn btn-block",clientId:"721177315518-ebi0q400rdhuvphrkff962s5encqd3b4.apps.googleusercontent.com",buttonText:"Google",onSuccess:t,onFailure:t},n.a.createElement("i",{className:"fab fa-google"})," Google"),n.a.createElement(v.a,{loginUrl:"http://api.gclout.com:3000/users",onSuccess:o,onFailure:o,forceLogin:!0,className:"social-button-twitter btn btn-block",clientKey:"JNjAaqePXPy5cXMjdlPYXuMWf",requestTokenUrl:"http://api.gclout.com:3000/users"},n.a.createElement("i",{className:"fab fa-twitter"})," Twitter"),n.a.createElement(d.a,{appId:"2171139129879186",autoLoad:!0,fields:"name,email,picture",callback:function(t){console.log(t),e.signup(t,"facebook")},cssClass:"social-button-facebook btn btn-block",icon:"fa-facebook",textButton:"Facebook"}),n.a.createElement("button",{disabled:!0,className:"social-button-linkedin btn btn-block"},n.a.createElement("i",{className:"fab fa-linkedin-in"}),"Linkedin")),n.a.createElement("p",{className:"text-center"},"Already have an account?"," ",n.a.createElement(i.a,{className:"auth-page-link",to:"/login"},"Sign in")," ")))))),n.a.createElement(h.ToastContainer,null))}}])&&w(o.prototype,s),u&&w(o,u),t}();t.default=O}}]);
//# sourceMappingURL=Register.8e416069.chunk.js.map