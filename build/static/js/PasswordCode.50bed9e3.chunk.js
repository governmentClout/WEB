(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{337:function(e,t,o){},339:function(e,t,o){"use strict";var n=o(1),r=o.n(n);o(340);function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s=function(e){function t(e){var o,n,r,l,c,s;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=!(r=u(t).call(this,e))||"object"!==a(r)&&"function"!==typeof r?i(n):r,l=i(i(o)),s=function(e){if(Array.isArray(e)||e.length>0){for(var t=e.slice(),o=0;o<t.length;o++){var n=Math.trunc(Math.random()*t.length),r=t[n];t[n]=t[o],t[o]=r}return t}return[]},(c="rearrangeArray")in l?Object.defineProperty(l,c,{value:s,enumerable:!0,configurable:!0,writable:!0}):l[c]=s,o.state={imagesList:[],shuffleList:["https://res.cloudinary.com/plushdeveloper/image/upload/v1538884672/gclout/1.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884671/gclout/2.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884668/gclout/16.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884667/gclout/15.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884664/gclout/13.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884663/gclout/12.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884661/gclout/11.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884660/gclout/9.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884663/gclout/12.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884655/gclout/7.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884654/gclout/4.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884655/gclout/5.png"],bottomImages:["https://res.cloudinary.com/plushdeveloper/image/upload/v1538884671/gclout/3.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884666/gclout/14.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884661/gclout/10.png","https://res.cloudinary.com/plushdeveloper/image/upload/v1538884655/gclout/6.png"]},o}var o,s,p;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,n["Component"]),o=t,(s=[{key:"componentDidMount",value:function(){var e=this.rearrangeArray(this.state.shuffleList);this.setState({imagesList:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"d-flex align-items-stretch flex-wrap no-gutters auth-bg"},r.a.createElement("div",{className:"auth-bg-overlay"}),this.state.imagesList.map(function(e,t){return r.a.createElement("div",{className:"col-md-3 col-sm-4 col-6 authBg",key:"key-"+t},r.a.createElement("img",{src:e,alt:"bg-image-"+t,className:"img-fluid"}))}))}}])&&l(o.prototype,s),p&&l(o,p),t}();t.a=s},340:function(e,t,o){},616:function(e,t,o){"use strict";o.r(t);var n=o(1),r=o.n(n),a=(o(337),o(339));function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(){var e,o,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(e=!(n=c(t).call(this))||"object"!==l(n)&&"function"!==typeof n?s(o):n).state={code:""},e.onChange=e.onChange.bind(s(s(e))),e.onSubmit=e.onSubmit.bind(s(s(e))),e}var o,p,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,n["Component"]),o=t,(p=[{key:"onChange",value:function(e){var t,o,n;this.setState((t={},o=e.target.name,n=e.target.value,o in t?Object.defineProperty(t,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[o]=n,t))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={code:this.state.email};console.log(t)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"auth-page d-flex"},r.a.createElement(a.a,null),r.a.createElement("div",{className:"authy"},r.a.createElement("div",{className:"m-auto bg-white auth-page-card col-lg-7 col-md-8"},r.a.createElement("h2",{className:"auth-card-title text-center mb-3"},"Reset Your Password"),r.a.createElement("p",{className:"auth-card-subtitle mb-3 text-center col-12 col-md-8 offset-md-2"},"We have sent a code to your email. Once you receive the code, enter it below to reset your password."),r.a.createElement("div",{className:"col-md-8 offset-md-2 mb-4"},r.a.createElement("form",{className:"auth-form my-4",onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group my-4"},r.a.createElement("label",{htmlFor:"email"},"Enter code"),r.a.createElement("input",{className:"form-control",type:"code",placeholder:"Enter code",name:"email",onChange:this.onChange,value:this.state.code,required:!0})),r.a.createElement("button",{className:"btn btn-block btn-gclout-blue mb-3"},"RESET")))))))}}])&&u(o.prototype,p),m&&u(o,m),t}();t.default=p}}]);
//# sourceMappingURL=PasswordCode.50bed9e3.chunk.js.map