var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const t=document.querySelector(".feedback-form");var n={},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var o,i,r,a,f,u,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function S(e){return l=e,f=setTimeout(O,t),c?y(e):a}function x(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=r}function O(){var e=v();if(x(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-u);return s?m(n,r-(e-l)):n}(e))}function T(e){return f=void 0,g&&o?y(e):(o=i=void 0,a)}function j(){var e=v(),n=x(e);if(o=arguments,i=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),j.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=i=f=void 0},j.flush=function(){return void 0===f?a:T(v())},j}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}n=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})};const y={};var S,x;t.addEventListener("input",n((()=>{y.text=t.message.value,y.mailText=t.email.value,localStorage.setItem("feedback-form-state",JSON.stringify(y)),console.log(localStorage.getItem("feedback-form-state"))}),500)),t.email.value=(null===(S=JSON.parse(localStorage.getItem("feedback-form-state")))||void 0===S?void 0:S.mailText)?JSON.parse(localStorage.getItem("feedback-form-state")).mailText:"",t.message.value=(null===(x=JSON.parse(localStorage.getItem("feedback-form-state")))||void 0===x?void 0:x.text)?JSON.parse(localStorage.getItem("feedback-form-state")).text:"",t.addEventListener("submit",(()=>{localStorage.removeItem("feedback-form-state"),t.email.value="",t.message.value=""}));
//# sourceMappingURL=03-feedback.1046f085.js.map
