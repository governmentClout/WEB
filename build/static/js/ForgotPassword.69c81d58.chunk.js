(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{340:function(e,t,o){},342:function(e,t,o){"use strict";var n=o(1),r=o.n(n);o(343);function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s=function(e){function t(e){var o,n,r,l,c,s;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=!(r=u(t).call(this,e))||"object"!==a(r)&&"function"!==typeof r?i(n):r,l=i(i(o)),s=function(e){if(Array.isArray(e)||e.length>0){for(var t=e.slice(),o=0;o<t.length;o++){var n=Math.trunc(Math.random()*t.length),r=t[n];t[n]=t[o],t[o]=r}return t}return[]},(c="rearrangeArray")in l?Object.defineProperty(l,c,{value:s,enumerable:!0,configurable:!0,writable:!0}):l[c]=s,o.state={imagesList:[],shuffleList:["https://res.cloudinary.com/plushdeveloper/image/upload/v1538884672/gclout/1.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884671/gclout/2.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884668/gclout/16.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884667/gclout/15.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884664/gclout/13.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884663/gclout/12.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884661/gclout/11.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884660/gclout/9.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884663/gclout/12.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884655/gclout/7.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884654/gclout/4.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884655/gclout/5.png"],bottomImages:["https://res.cloudinary.com/plushdeveloper/image/upload/v1538884671/gclout/3.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884666/gclout/14.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884661/gclout/10.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884655/gclout/6.png"]},o}var o,s,p;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,n["Component"]),o=t,(s=[{key:"componentDidMount",value:function(){var e=this.rearrangeArray(this.state.shuffleList);this.setState({imagesList:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"d-flex align-items-stretch flex-wrap no-gutters auth-bg"},r.a.createElement("div",{className:"auth-bg-overlay"}),this.state.imagesList.map(function(e,t){return r.a.createElement("div",{className:"col-md-3 col-sm-4 col-6 authBg",key:"key-"+t},r.a.createElement("img",{src:e,alt:"bg-image-"+t,className:"img-fluid"}))}))}}])&&l(o.prototype,s),p&&l(o,p),t}();t.a=s},343:function(e,t,o){},624:function(e,t,o){"use strict";o.r(t);var n=o(1),r=o.n(n),a=(o(340),o(342)),l=o(93),u=o.n(l);function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f=function(e){function t(){var e,o,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(e=!(n=s(t).call(this))||"object"!==c(n)&&"function"!==typeof n?m(o):n).state={email:""},e.onChange=e.onChange.bind(m(m(e))),e.onSubmit=e.onSubmit.bind(m(m(e))),e}var o,l,f;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,n["Component"]),o=t,(l=[{key:"onChange",value:function(e){var t,o,n;this.setState((t={},o=e.target.name,n=e.target.value,o in t?Object.defineProperty(t,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[o]=n,t))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var o={email:this.state.email};u()({method:"post",url:"http://api.gclout.com:3000/resets",data:o}).then(function(e){console.log(e.data),e.data.Success&&t.setState({email:""})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"auth-page d-flex"},r.a.createElement(a.a,null),r.a.createElement("div",{className:"authy"},r.a.createElement("div",{className:"m-auto bg-white auth-page-card col-lg-7 col-md-8"},r.a.createElement("h2",{className:"auth-card-title text-center mb-3"},"Forgot Your Password"),r.a.createElement("p",{className:"auth-card-subtitle mb-3 text-center col-12 col-md-8 offset-md-2"},"Enter the email address that you used to register. We\u2019ll send you an email with a link to reset your password."),r.a.createElement("div",{className:"col-md-8 offset-md-2 mb-4"},r.a.createElement("form",{className:"auth-form my-4",onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group my-4"},r.a.createElement("label",{htmlFor:"email"},"Email address"),r.a.createElement("input",{className:"form-control",type:"email",placeholder:"Enter your email",name:"email",onChange:this.onChange,value:this.state.email,required:!0})),r.a.createElement("button",{className:"btn btn-block btn-gclout-blue mb-3"},"RESET")))))))}}])&&i(o.prototype,l),f&&i(o,f),t}();t.default=f}}]);
//# sourceMappingURL=ForgotPassword.69c81d58.chunk.js.map