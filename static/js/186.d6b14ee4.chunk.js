"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,t,n){n.r(t);var r=n(885),a=n(791),c=n(739),u=n(364),o=n(184);t.default=function(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],s=t[1],i=(0,c.UO)().movieId;return(0,a.useEffect)((function(){return i&&(0,u.Xm)(i).then((function(e){return s(e.results)})),function(){}}),[]),(0,o.jsx)("div",{children:n.length?(0,o.jsx)("ul",{children:n.map((function(e){var t=e.author,n=e.content,r=e.id;return(0,o.jsxs)("li",{children:[(0,o.jsxs)("h3",{children:["Author:",t]}),(0,o.jsx)("p",{children:n})]},r)}))}):(0,o.jsx)("h2",{children:"Reviews"})})}},364:function(e,t,n){n.d(t,{Df:function(){return o},V0:function(){return s},Xm:function(){return l},in:function(){return p},sJ:function(){return i}});var r=n(165),a=n(861),c=n(44);c.Z.defaults.baseURL="https://api.themoviedb.org/";var u="6fe1e9d5fbaeb01db6cc1b91ad7172fe",o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n,a,o=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:1,e.prev=1,n="3/trending/movie/day?api_key=".concat(u,"&language=ru-US&page=").concat(t),e.next=5,c.Z.get(n);case 5:return a=e.sent,e.abrupt("return",a.data);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,o,s=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:1,e.prev=1,a="3/search/movie?api_key=".concat(u,"&language=ru-US&query=").concat(t,"&page=").concat(n,"&include_adult=false"),e.next=5,c.Z.get(a);case 5:return o=e.sent,e.abrupt("return",o.data);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="3/movie/".concat(t,"?api_key=").concat(u,"&language=ru-US"),e.next=4,c.Z.get(n);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="3/movie/".concat(t,"/credits?api_key=").concat(u,"&language=ru-US"),e.next=4,c.Z.get(n);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="3/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=ru-US"),e.next=4,c.Z.get(n);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.d6b14ee4.chunk.js.map