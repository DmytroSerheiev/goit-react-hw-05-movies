/*! For license information please see 630.55b5b9dd.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[630],{630:function(r,e,t){t.r(e),t.d(e,{default:function(){return ir}});var o=t(885),a=t(444),i=t(725),n=t.n(i),s=function(r,e){var t=n()({},r,e);for(var o in r){var a;r[o]&&"object"===typeof e[o]&&n()(t,((a={})[o]=n()(r[o],e[o]),a))}return t},d={breakpoints:[40,52,64].map((function(r){return r+"em"}))},p=function(r){return"@media screen and (min-width: "+r+")"},c=function(r,e){return l(e,r,r)},l=function(r,e,t,o,a){for(e=e&&e.split?e.split("."):[e],o=0;o<e.length;o++)r=r?r[e[o]]:a;return r===a?t:r},g=function r(e){var t={},o=function(r){var o={},a=!1,i=r.theme&&r.theme.disableStyledSystemCache;for(var c in r)if(e[c]){var g=e[c],m=r[c],b=l(r.theme,g.scale,g.defaults);if("object"!==typeof m)n()(o,g(m,b,r));else{if(t.breakpoints=!i&&t.breakpoints||l(r.theme,"breakpoints",d.breakpoints),Array.isArray(m)){t.media=!i&&t.media||[null].concat(t.breakpoints.map(p)),o=s(o,u(t.media,g,b,m,r));continue}null!==m&&(o=s(o,f(t.breakpoints,g,b,m,r)),a=!0)}}return a&&(o=function(r){var e={};return Object.keys(r).sort((function(r,e){return r.localeCompare(e,void 0,{numeric:!0,sensitivity:"base"})})).forEach((function(t){e[t]=r[t]})),e}(o)),o};o.config=e,o.propNames=Object.keys(e),o.cache=t;var a=Object.keys(e).filter((function(r){return"config"!==r}));return a.length>1&&a.forEach((function(t){var a;o[t]=r(((a={})[t]=e[t],a))})),o},u=function(r,e,t,o,a){var i={};return o.slice(0,r.length).forEach((function(o,s){var d,p=r[s],c=e(o,t,a);p?n()(i,((d={})[p]=n()({},i[p],c),d)):n()(i,c)})),i},f=function(r,e,t,o,a){var i={};for(var s in o){var d=r[s],c=e(o[s],t,a);if(d){var l,g=p(d);n()(i,((l={})[g]=n()({},i[g],c),l))}else n()(i,c)}return i},m=function(r){var e=r.properties,t=r.property,o=r.scale,a=r.transform,i=void 0===a?c:a,n=r.defaultScale;e=e||[t];var s=function(r,t,o){var a={},n=i(r,t,o);if(null!==n)return e.forEach((function(r){a[r]=n})),a};return s.scale=o,s.defaults=n,s},b=function(r){void 0===r&&(r={});var e={};return Object.keys(r).forEach((function(t){var o=r[t];e[t]=!0!==o?"function"!==typeof o?m(o):o:m({property:t,scale:t})})),g(e)},h=b({width:{property:"width",scale:"sizes",transform:function(r,e){return l(e,r,!function(r){return"number"===typeof r&&!isNaN(r)}(r)||r>1?r:100*r+"%")}},height:{property:"height",scale:"sizes"},minWidth:{property:"minWidth",scale:"sizes"},minHeight:{property:"minHeight",scale:"sizes"},maxWidth:{property:"maxWidth",scale:"sizes"},maxHeight:{property:"maxHeight",scale:"sizes"},size:{properties:["width","height"],scale:"sizes"},overflow:!0,overflowX:!0,overflowY:!0,display:!0,verticalAlign:!0}),y=h,v={color:{property:"color",scale:"colors"},backgroundColor:{property:"backgroundColor",scale:"colors"},opacity:!0};v.bg=v.backgroundColor;var S=b(v),R=S,x=b({fontFamily:{property:"fontFamily",scale:"fonts"},fontSize:{property:"fontSize",scale:"fontSizes",defaultScale:[12,14,16,20,24,32,48,64,72]},fontWeight:{property:"fontWeight",scale:"fontWeights"},lineHeight:{property:"lineHeight",scale:"lineHeights"},letterSpacing:{property:"letterSpacing",scale:"letterSpacings"},textAlign:!0,fontStyle:!0}),w=x,k=b({alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:!0,flex:!0,flexGrow:!0,flexShrink:!0,flexBasis:!0,justifySelf:!0,alignSelf:!0,order:!0}),j=k,T={space:[0,4,8,16,32,64,128,256,512]},B=b({gridGap:{property:"gridGap",scale:"space",defaultScale:T.space},gridColumnGap:{property:"gridColumnGap",scale:"space",defaultScale:T.space},gridRowGap:{property:"gridRowGap",scale:"space",defaultScale:T.space},gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridAutoRows:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0}),C={border:{property:"border",scale:"borders"},borderWidth:{property:"borderWidth",scale:"borderWidths"},borderStyle:{property:"borderStyle",scale:"borderStyles"},borderColor:{property:"borderColor",scale:"colors"},borderRadius:{property:"borderRadius",scale:"radii"},borderTop:{property:"borderTop",scale:"borders"},borderTopLeftRadius:{property:"borderTopLeftRadius",scale:"radii"},borderTopRightRadius:{property:"borderTopRightRadius",scale:"radii"},borderRight:{property:"borderRight",scale:"borders"},borderBottom:{property:"borderBottom",scale:"borders"},borderBottomLeftRadius:{property:"borderBottomLeftRadius",scale:"radii"},borderBottomRightRadius:{property:"borderBottomRightRadius",scale:"radii"},borderLeft:{property:"borderLeft",scale:"borders"},borderX:{properties:["borderLeft","borderRight"],scale:"borders"},borderY:{properties:["borderTop","borderBottom"],scale:"borders"},borderTopWidth:{property:"borderTopWidth",scale:"borderWidths"},borderTopColor:{property:"borderTopColor",scale:"colors"},borderTopStyle:{property:"borderTopStyle",scale:"borderStyles"}};C.borderTopLeftRadius={property:"borderTopLeftRadius",scale:"radii"},C.borderTopRightRadius={property:"borderTopRightRadius",scale:"radii"},C.borderBottomWidth={property:"borderBottomWidth",scale:"borderWidths"},C.borderBottomColor={property:"borderBottomColor",scale:"colors"},C.borderBottomStyle={property:"borderBottomStyle",scale:"borderStyles"},C.borderBottomLeftRadius={property:"borderBottomLeftRadius",scale:"radii"},C.borderBottomRightRadius={property:"borderBottomRightRadius",scale:"radii"},C.borderLeftWidth={property:"borderLeftWidth",scale:"borderWidths"},C.borderLeftColor={property:"borderLeftColor",scale:"colors"},C.borderLeftStyle={property:"borderLeftStyle",scale:"borderStyles"},C.borderRightWidth={property:"borderRightWidth",scale:"borderWidths"},C.borderRightColor={property:"borderRightColor",scale:"colors"},C.borderRightStyle={property:"borderRightStyle",scale:"borderStyles"};var W=b(C),L={background:!0,backgroundImage:!0,backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0};L.bgImage=L.backgroundImage,L.bgSize=L.backgroundSize,L.bgPosition=L.backgroundPosition,L.bgRepeat=L.backgroundRepeat;var z=b(L),_={space:[0,4,8,16,32,64,128,256,512]},O=b({position:!0,zIndex:{property:"zIndex",scale:"zIndices"},top:{property:"top",scale:"space",defaultScale:_.space},right:{property:"right",scale:"space",defaultScale:_.space},bottom:{property:"bottom",scale:"space",defaultScale:_.space},left:{property:"left",scale:"space",defaultScale:_.space}}),Z={space:[0,4,8,16,32,64,128,256,512]},A=function(r){return"number"===typeof r&&!isNaN(r)},G=function(r,e){if(!A(r))return l(e,r,r);var t=r<0,o=Math.abs(r),a=l(e,o,o);return A(a)?a*(t?-1:1):t?"-"+a:a},I={};I.margin={margin:{property:"margin",scale:"space",transform:G,defaultScale:Z.space},marginTop:{property:"marginTop",scale:"space",transform:G,defaultScale:Z.space},marginRight:{property:"marginRight",scale:"space",transform:G,defaultScale:Z.space},marginBottom:{property:"marginBottom",scale:"space",transform:G,defaultScale:Z.space},marginLeft:{property:"marginLeft",scale:"space",transform:G,defaultScale:Z.space},marginX:{properties:["marginLeft","marginRight"],scale:"space",transform:G,defaultScale:Z.space},marginY:{properties:["marginTop","marginBottom"],scale:"space",transform:G,defaultScale:Z.space}},I.margin.m=I.margin.margin,I.margin.mt=I.margin.marginTop,I.margin.mr=I.margin.marginRight,I.margin.mb=I.margin.marginBottom,I.margin.ml=I.margin.marginLeft,I.margin.mx=I.margin.marginX,I.margin.my=I.margin.marginY,I.padding={padding:{property:"padding",scale:"space",defaultScale:Z.space},paddingTop:{property:"paddingTop",scale:"space",defaultScale:Z.space},paddingRight:{property:"paddingRight",scale:"space",defaultScale:Z.space},paddingBottom:{property:"paddingBottom",scale:"space",defaultScale:Z.space},paddingLeft:{property:"paddingLeft",scale:"space",defaultScale:Z.space},paddingX:{properties:["paddingLeft","paddingRight"],scale:"space",defaultScale:Z.space},paddingY:{properties:["paddingTop","paddingBottom"],scale:"space",defaultScale:Z.space}},I.padding.p=I.padding.padding,I.padding.pt=I.padding.paddingTop,I.padding.pr=I.padding.paddingRight,I.padding.pb=I.padding.paddingBottom,I.padding.pl=I.padding.paddingLeft,I.padding.px=I.padding.paddingX,I.padding.py=I.padding.paddingY;var H=function(){for(var r={},e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];t.forEach((function(e){e&&e.config&&n()(r,e.config)}));var a=g(r);return a}(b(I.margin),b(I.padding));b({boxShadow:{property:"boxShadow",scale:"shadows"},textShadow:{property:"textShadow",scale:"shadows"}});function N(){return N=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},N.apply(this,arguments)}var X,Y=function(r,e,t,o,a){for(e=e&&e.split?e.split("."):[e],o=0;o<e.length;o++)r=r?r[e[o]]:a;return r===a?t:r},P=[40,52,64].map((function(r){return r+"em"})),U={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},E={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},F={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},q={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},D=function(r,e){if("number"!==typeof e||e>=0)return Y(r,e,e);var t=Math.abs(e),o=Y(r,t,t);return"string"===typeof o?"-"+o:-1*o},J=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce((function(r,e){var t;return N({},r,((t={})[e]=D,t))}),{}),M=function r(e){return function(t){void 0===t&&(t={});var o=N({},U,{},t.theme||t),a={},i=function(r){return function(e){var t={},o=Y(e,"breakpoints",P),a=[null].concat(o.map((function(r){return"@media screen and (min-width: "+r+")"})));for(var i in r){var n="function"===typeof r[i]?r[i](e):r[i];if(null!=n)if(Array.isArray(n))for(var s=0;s<n.slice(0,a.length).length;s++){var d=a[s];d?(t[d]=t[d]||{},null!=n[s]&&(t[d][i]=n[s])):t[i]=n[s]}else t[i]=n}return t}}("function"===typeof e?e(o):e)(o);for(var n in i){var s=i[n],d="function"===typeof s?s(o):s;if("variant"!==n)if(d&&"object"===typeof d)a[n]=r(d)(o);else{var p=Y(E,n,n),c=Y(q,p),l=Y(o,c,Y(o,p,{})),g=Y(J,p,Y)(l,d,d);if(F[p])for(var u=F[p],f=0;f<u.length;f++)a[u[f]]=g;else a[p]=g}else a=N({},a,{},r(Y(o,d))(o))}return a}},V=function(r){var e,t,o=r.scale,a=r.prop,i=void 0===a?"variant":a,n=r.variants,s=void 0===n?{}:n,d=r.key;t=Object.keys(s).length?function(r,e,t){return M(l(e,r,null))(t.theme)}:function(r,e){return l(e,r,null)},t.scale=o||d,t.defaults=s;var p=((e={})[i]=t,e);return g(p)},K=(V({key:"buttons"}),V({key:"textStyles",prop:"textStyle"}),V({key:"colorStyles",prop:"colors"}),y.width,y.height,y.minWidth,y.minHeight,y.maxWidth,y.maxHeight,y.size,y.verticalAlign,y.display,y.overflow,y.overflowX,y.overflowY,R.opacity,w.fontSize,w.fontFamily,w.fontWeight,w.lineHeight,w.textAlign,w.fontStyle,w.letterSpacing,j.alignItems,j.alignContent,j.justifyItems,j.justifyContent,j.flexWrap,j.flexDirection,j.flex,j.flexGrow,j.flexShrink,j.flexBasis,j.justifySelf,j.alignSelf,j.order,B.gridGap,B.gridColumnGap,B.gridRowGap,B.gridColumn,B.gridRow,B.gridAutoFlow,B.gridAutoColumns,B.gridAutoRows,B.gridTemplateColumns,B.gridTemplateRows,B.gridTemplateAreas,B.gridArea,W.borderWidth,W.borderStyle,W.borderColor,W.borderTop,W.borderRight,W.borderBottom,W.borderLeft,W.borderRadius,z.backgroundImage,z.backgroundSize,z.backgroundPosition,z.backgroundRepeat,O.zIndex,O.top,O.right,O.bottom,O.left,(0,a.ZP)("div")(H,h,S,x,k)),Q=t(791),$=t(739),rr=t(731),er=t(364),tr=t(168),or=a.ZP.div(X||(X=(0,tr.Z)(["\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 16px;\n"]))),ar=t(184),ir=function(){var r,e,t,a,i,n,s=(0,Q.useState)({}),d=(0,o.Z)(s,2),p=d[0],c=d[1],l=(0,$.UO)().movieId,g=(0,$.TH)();(0,Q.useEffect)((function(){l&&(0,er.sJ)(l).then((function(r){return c(r)}))}),[l]);var u=null!==(r=null===(e=g.state)||void 0===e?void 0:e.from)&&void 0!==r?r:"/movie",f=p.title,m=p.genres,b=void 0===m?[]:m,h=p.poster_path,y=p.overview,v=p.vote_average,S=void 0===v?1:v,R=p.release_date,x=void 0===R?"":R,w=b.map((function(r){return r.name})).join(", "),k=x.split("-").slice(0,1).join("");return(0,ar.jsxs)(or,{children:[(0,ar.jsx)(rr.rU,{to:u,children:"Back to "}),(0,ar.jsxs)(K,{display:"flex",p:4,children:[(0,ar.jsx)("div",{className:"modal-film__img",children:(0,ar.jsx)("img",{src:h&&"".concat("https://image.tmdb.org/t/p/").concat("w300").concat(h),alt:f,className:"modal-film__poster",loading:"lazy"})}),(0,ar.jsxs)(K,{p:2,className:"modal-film__description",children:[(0,ar.jsxs)("h2",{className:"modal-film__title",children:[f,"(",k,")"]}),(0,ar.jsxs)("p",{children:["User Score ",10*S.toFixed(1),"%"]}),(0,ar.jsx)("h3",{className:"modal-film__about",children:"About"}),(0,ar.jsx)("p",{className:"modal-film__abot-text",children:y}),(0,ar.jsx)("h3",{className:"modal-film__about",children:"Genres"}),(0,ar.jsx)("p",{className:"modal-film__abot-text",children:w})]})]}),(0,ar.jsx)("p",{children:"Additional Information"}),(0,ar.jsxs)("ul",{children:[(0,ar.jsx)("li",{children:(0,ar.jsx)(rr.rU,{to:"cast",state:{from:null!==(t=null===(a=g.state)||void 0===a?void 0:a.from)&&void 0!==t?t:"/"},children:"Cast"})}),(0,ar.jsx)("li",{children:(0,ar.jsx)(rr.rU,{to:"reviews",state:{from:null!==(i=null===(n=g.state)||void 0===n?void 0:n.from)&&void 0!==i?i:"/"},children:"Reviews"})})]}),(0,ar.jsx)($.j3,{})]})}},364:function(r,e,t){t.d(e,{Df:function(){return s},V0:function(){return d},Xm:function(){return l},in:function(){return c},sJ:function(){return p}});var o=t(165),a=t(861),i=t(44);i.Z.defaults.baseURL="https://api.themoviedb.org/";var n="6fe1e9d5fbaeb01db6cc1b91ad7172fe",s=function(){var r=(0,a.Z)((0,o.Z)().mark((function r(){var e,t,a,s=arguments;return(0,o.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=s.length>0&&void 0!==s[0]?s[0]:1,r.prev=1,t="3/trending/movie/day?api_key=".concat(n,"&language=ru-US&page=").concat(e),r.next=5,i.Z.get(t);case 5:return a=r.sent,r.abrupt("return",a.data);case 9:r.prev=9,r.t0=r.catch(1),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(){return r.apply(this,arguments)}}(),d=function(){var r=(0,a.Z)((0,o.Z)().mark((function r(e){var t,a,s,d=arguments;return(0,o.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=d.length>1&&void 0!==d[1]?d[1]:1,r.prev=1,a="3/search/movie?api_key=".concat(n,"&language=ru-US&query=").concat(e,"&page=").concat(t,"&include_adult=false"),r.next=5,i.Z.get(a);case 5:return s=r.sent,r.abrupt("return",s.data);case 9:r.prev=9,r.t0=r.catch(1),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,a.Z)((0,o.Z)().mark((function r(e){var t,a;return(0,o.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t="3/movie/".concat(e,"?api_key=").concat(n,"&language=ru-US"),r.next=4,i.Z.get(t);case 4:return a=r.sent,r.abrupt("return",a.data);case 8:r.prev=8,r.t0=r.catch(0),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),c=function(){var r=(0,a.Z)((0,o.Z)().mark((function r(e){var t,a;return(0,o.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t="3/movie/".concat(e,"/credits?api_key=").concat(n,"&language=ru-US"),r.next=4,i.Z.get(t);case 4:return a=r.sent,r.abrupt("return",a.data);case 8:r.prev=8,r.t0=r.catch(0),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,a.Z)((0,o.Z)().mark((function r(e){var t,a;return(0,o.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t="3/movie/".concat(e,"/reviews?api_key=").concat(n,"&language=ru-US"),r.next=4,i.Z.get(t);case 4:return a=r.sent,r.abrupt("return",a.data);case 8:r.prev=8,r.t0=r.catch(0),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()},725:function(r){var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(r){if(null===r||void 0===r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}r.exports=function(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(r){return e[r]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(r){o[r]=r})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(a){return!1}}()?Object.assign:function(r,i){for(var n,s,d=a(r),p=1;p<arguments.length;p++){for(var c in n=Object(arguments[p]))t.call(n,c)&&(d[c]=n[c]);if(e){s=e(n);for(var l=0;l<s.length;l++)o.call(n,s[l])&&(d[s[l]]=n[s[l]])}}return d}}}]);
//# sourceMappingURL=630.55b5b9dd.chunk.js.map