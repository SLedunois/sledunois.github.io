(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+sEy":function(e,t,n){},"4BXb":function(e,t,n){},"8k0H":function(e,t,n){"use strict";n("a1Th"),n("Btvt"),n("I5cv");var r=n("gBsp"),a=n("q1tI"),o=n.n(a),c=n("Wbzz");var i=function(e){var t,n;n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a;a=i;function i(){return e.apply(this,arguments)||this}var l=i.prototype;return l.componentDidMount=function(){"/"===this.props.location.pathname?document.getElementsByTagName("html")[0].classList.add("homepage"):document.getElementsByTagName("html")[0].classList.remove("homepage")},l.render=function(){var e=this.props.children;return o.a.createElement(c.StaticQuery,{query:"1044757290",render:function(t){return o.a.createElement("div",{className:"layout container mx-auto text-black mb-8 pr-6 pl-6 pt-8"},o.a.createElement("div",null,o.a.createElement("main",null,e)))},data:r})},i}(o.a.Component);t.a=i},"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},GZxu:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return E}));var r=n("q1tI"),a=n.n(r),o=n("7ljp"),c=n("A2+M"),i=n("8k0H"),l=(n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("Wbzz")),u=n("Kfvu"),s=(n("4BXb"),n("I70B")),f=n("1Cm5"),m=n.n(f),p=function(){return a.a.createElement("header",{className:"mb-12"},a.a.createElement("nav",{className:"justify-between flex items-center"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(l.Link,{to:"/"},a.a.createElement("img",{src:m.a,alt:"Go back home"})))),a.a.createElement("ul",{className:"flex items-center justify-center"},Object.keys(s).map((function(e){var t=n("OgWq")("./"+e+".svg");return a.a.createElement("li",{className:"mr-4 ml-4",key:e},a.a.createElement(u.OutboundLink,{href:s[e],target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{src:t,alt:e,className:"w-5"})))})))))},y=(n("+sEy"),function(e){var t=e.headings;return a.a.createElement("div",null,t&&a.a.createElement("div",{className:"table-of-contents mt-8 mb-8"},a.a.createElement("h2",{className:"text-lg font-extrabold"},"Table of contents"),a.a.createElement("ul",null,t.map((function(e){return a.a.createElement("li",{key:e.url},a.a.createElement("a",{href:e.url},e.title))})))))}),d=(n("Hzmp"),n("qC78")),b=n.n(d),v=function(e){var t=e.title,n=e.description;return a.a.createElement("div",{className:"post-header pt-6"},a.a.createElement("img",{src:b.a,alt:"background",className:"background"}),a.a.createElement("h1",{className:"text-4xl font-extrabold"},t),a.a.createElement("p",null,n))},h=n("HbE6"),E="2436016337";t.default=function(e){var t=e.location,n=e.data.mdx,r=n.tableOfContents,l=n.headings,u=n.body,s=n.frontmatter;return a.a.createElement(i.a,{location:t},a.a.createElement(p,null),a.a.createElement(v,{title:s.title,description:s.description}),a.a.createElement(y,{headings:r.items}),a.a.createElement("div",{className:"post-content"},a.a.createElement(o.MDXProvider,{components:h.a},a.a.createElement(c.MDXRenderer,{headings:l},u))))}},Hzmp:function(e,t,n){},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),o=n("hswa").f,c=n("kJMx").f,i=n("quPj"),l=n("C/va"),u=r.RegExp,s=u,f=u.prototype,m=/a/g,p=/a/g,y=new u(m)!==m;if(n("nh4g")&&(!y||n("eeVq")((function(){return p[n("K0xU")("match")]=!1,u(m)!=m||u(p)==p||"/a/i"!=u(m,"i")})))){u=function(e,t){var n=this instanceof u,r=i(e),o=void 0===t;return!n&&r&&e.constructor===u&&o?e:a(y?new s(r&&!o?e.source:e,t):s((r=e instanceof u)?e.source:e,r&&o?l.call(e):t),n?this:f,u)};for(var d=function(e){e in u||o(u,e,{configurable:!0,get:function(){return s[e]},set:function(t){s[e]=t}})},b=c(s),v=0;b.length>v;)d(b[v++]);f.constructor=u,u.prototype=f,n("KroJ")(r,"RegExp",u)}n("elZq")("RegExp")},X8hv:function(e,t,n){function r(e,t,n){return(r=a()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&o(a,n.prototype),a}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("jm62"),n("yt8O"),n("RW0V"),n("rGqo"),n("rE2o"),n("ioFf"),n("XfO3"),n("HEwt"),n("f3/d"),n("a1Th"),n("Btvt"),n("I5cv"),n("I5cv"),n("f3/d"),n("a1Th"),n("XfO3"),n("HEwt"),n("rE2o"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var f=n("q1tI"),m=n("7ljp"),p=m.useMDXComponents,y=m.mdx,d=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,a=e.children,o=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["scope","components","children"]),i=p(n),l=d(t),s=f.useMemo((function(){if(!a)return null;var e=u({React:f,mdx:y},l),t=Object.keys(e),n=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(c(t),[""+a])).apply(void 0,[{}].concat(c(n)))}),[a,t]);return f.createElement(s,u({components:i},o))}},gBsp:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Simon LEDUNOIS"}}}}')}}]);
//# sourceMappingURL=component---src-components-post-post-js-efd47bd99340553f2de6.js.map