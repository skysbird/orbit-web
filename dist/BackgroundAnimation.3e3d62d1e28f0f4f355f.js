(this.webpackJsonp=this.webpackJsonp||[]).push([[3],{543:function(t,a,e){"use strict";e.r(a),function(t){var n,i=e(10),o=e.n(i),r=e(18),s=e.n(r);e(544);function m(){return(m=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}).apply(this,arguments)}function c(t,a){if(null==t)return{};var e,n,i=function(t,a){if(null==t)return{};var e,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)e=o[n],a.indexOf(e)>=0||(i[e]=t[e]);return i}(t,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)e=o[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(t);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function f(t){var a=t.circleSize,e=void 0===a?2:a,n=t.size,i=void 0===n?Math.min(window.innerWidth,window.innerHeight)/2:n,r=t.startX,s=t.startY,f=t.delay,l=void 0===f?.2:f,p=t.theme,y=t.style,d=c(t,["circleSize","size","startX","startY","delay","theme","style"]),u=i/2,b=i/256*32,k=["rgba(50, 32, 56, 1)","rgba(62, 32, 76, 1)","rgba(87, 32, 110, 1)","rgba(118, 32, 154, 1)","rgba(156, 56, 203, 1)","rgba(188, 84, 238, 1)","rgba(225, 170, 253, 1)"].reverse(),g=(u-b)/6,h=[0,1,2,3,4,5,6],w=h.reverse().map((function(t){var a=b+t*g,e=k[t];return o.a.createElement("circle",{cx:r||i/2,cy:s||i/2,r:a,fill:e,key:"circle"+t,style:{animationDelay:l+.1*t+"s"}})})),x=h.map((function(t){var a=9.80665*(t+1)/.5,n=Math.max(212-16*t,0),m="rgba(".concat(n,", ").concat(n,", ").concat(n,", ").concat(.5-.01*(t+1),")"),c=Math.random()<.5?-1:1,f=(b+t*g)*c,l=e*(2*Math.random())+1,p=Math.floor(360*Math.random()),y="@keyframes rot".concat(t," {\n        0%   { transform: rotate(").concat(p,"deg) translate(").concat(f,"px) rotate(-").concat(p,"deg) }\n        100% { transform: rotate(").concat(p+360,"deg) translate(").concat(f,"px) rotate(-").concat(p+360,"deg) }\n      }"),d=document.styleSheets[0];return d.insertRule(y,d.cssRules.length),o.a.createElement("circle",{cx:r||i/2,cy:s||i/2,r:t===h.length-1?e:l,fill:m,style:{animation:"rot".concat(t," linear"),animationDuration:"".concat(a,"s"),animationIterationCount:"infinite"},key:"dot"+t})})),I=2*x[0].props.r,Y=i/(i+I),v=I/2*Y,X="scale(".concat(Y,",").concat(Y,"),");return X+="translate(".concat(v,",").concat(v,")"),o.a.createElement("div",m({className:"BackgroundAnimation",style:y},d),o.a.createElement("svg",{className:"Rings",width:i,height:i,key:"circles",style:p},o.a.createElement("g",{className:"transparent",transform:X},w)),o.a.createElement("svg",{className:"Planets opaque",width:i,height:i,key:"dots",style:p},o.a.createElement("g",{transform:X},x)))}f.propTypes={circleSize:s.a.number,size:s.a.number,startX:s.a.number,startY:s.a.number,delay:s.a.number,theme:s.a.object,style:s.a.object};var l,p,y=f;a.default=y,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(.2,"defaultDelay","/Users/skysbird/workspace/orbit-web/src/components/BackgroundAnimation.js"),l.register(f,"BackgroundAnimation","/Users/skysbird/workspace/orbit-web/src/components/BackgroundAnimation.js"),l.register(y,"default","/Users/skysbird/workspace/orbit-web/src/components/BackgroundAnimation.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(t)}.call(this,e(52)(t))},544:function(t,a,e){var n=e(46),i=e(545);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1};n(i,o);t.exports=i.locals||{}},545:function(t,a,e){(a=e(47)(!1)).push([t.i,"@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeIn06{0%{opacity:0}100%{opacity:0.6}}@keyframes fadeIn06{0%{opacity:0}100%{opacity:0.6}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;transform:translateY(-5px)}100%{opacity:1;transform:translateY(0)}}@keyframes fadeInFromBottom{0%{opacity:0;transform:translateY(-5px)}100%{opacity:1;transform:translateY(0)}}@-webkit-keyframes fadeInCircles{0%{opacity:0.2;transform:translate(-20px, 0)}10%{opacity:1}90%{opacity:1}100%{opacity:0.2;transform:translate(20px, 0)}}@keyframes fadeInCircles{0%{opacity:0.2;transform:translate(-20px, 0)}10%{opacity:1}90%{opacity:1}100%{opacity:0.2;transform:translate(20px, 0)}}@-webkit-keyframes fadeInCirclesLoop{0%{opacity:0.2}40%{opacity:0.4}50%{opacity:1}80%{opacity:0.4}100%{opacity:0.2}}@keyframes fadeInCirclesLoop{0%{opacity:0.2}40%{opacity:0.4}50%{opacity:1}80%{opacity:0.4}100%{opacity:0.2}}@-webkit-keyframes pulse1{0%{opacity:0.3}50%{opacity:0.5}100%{opacity:0.3}}@keyframes pulse1{0%{opacity:0.3}50%{opacity:0.5}100%{opacity:0.3}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes fadeOutWithHeight{0%{opacity:1}80%{height:100%}100%{opacity:0;height:0%}}@keyframes fadeOutWithHeight{0%{opacity:1}80%{height:100%}100%{opacity:0;height:0%}}@-webkit-keyframes fadeOutUp{0%{opacity:1}100%{opacity:0;height:0}}@keyframes fadeOutUp{0%{opacity:1}100%{opacity:0;height:0}}@-webkit-keyframes fadeOutDown{0%{opacity:1;transform:translateY(0)}100%{opacity:0;transform:translateY(20px)}}@keyframes fadeOutDown{0%{opacity:1;transform:translateY(0)}100%{opacity:0;transform:translateY(20px)}}@-webkit-keyframes fadeInDown{0%{opacity:0;transform:translateY(-20px)}100%{opacity:1;transform:translateY(0)}}@keyframes fadeInDown{0%{opacity:0;transform:translateY(-20px)}100%{opacity:1;transform:translateY(0)}}@-webkit-keyframes fadeInUp{0%{opacity:0;transform:translateY(20px)}100%{opacity:1;transform:translateY(0)}}@keyframes fadeInUp{0%{opacity:0;transform:translateY(20px)}100%{opacity:1;transform:translateY(0)}}@-webkit-keyframes fadeInUp2{0%{opacity:0;transform:translateY(20px)}50%{opacity:0.3}100%{opacity:1;transform:translateY(0)}}@keyframes fadeInUp2{0%{opacity:0;transform:translateY(20px)}50%{opacity:0.3}100%{opacity:1;transform:translateY(0)}}@-webkit-keyframes bounceInLeft{0%{opacity:0;transform:translateX(-200px)}60%{transform:translateX(2px)}80%{transform:translateX(-2px)}100%{opacity:1;transform:translateX(0)}}@keyframes bounceInLeft{0%{opacity:0;transform:translateX(-200px)}60%{transform:translateX(2px)}80%{transform:translateX(-2px)}100%{opacity:1;transform:translateX(0)}}@-webkit-keyframes bounceInRight{0%{opacity:0;transform:translateX(200px)}60%{transform:translateX(2px)}80%{transform:translateX(-2px)}100%{opacity:1;transform:translateX(0)}}@keyframes bounceInRight{0%{opacity:0;transform:translateX(200px)}60%{transform:translateX(2px)}80%{transform:translateX(-2px)}100%{opacity:1;transform:translateX(0)}}@-webkit-keyframes bounceInDown{0%{opacity:0;transform:translateY(-200px)}60%{transform:translateY(2px)}80%{transform:translateY(-2px)}100%{opacity:1;transform:translateY(0)}}@keyframes bounceInDown{0%{opacity:0;transform:translateY(-200px)}60%{transform:translateY(2px)}80%{transform:translateY(-2px)}100%{opacity:1;transform:translateY(0)}}@-webkit-keyframes slideFromRight{0%{opacity:0;transform:translateX(200px)}100%{opacity:1;transform:translateX(0)}}@keyframes slideFromRight{0%{opacity:0;transform:translateX(200px)}100%{opacity:1;transform:translateX(0)}}@-webkit-keyframes slideFromLeft{0%{opacity:0;transform:translateX(-200px)}100%{opacity:1;transform:translateX(0)}}@keyframes slideFromLeft{0%{opacity:0;transform:translateX(-200px)}100%{opacity:1;transform:translateX(0)}}@-webkit-keyframes appearFromTop{0%{opacity:0;transform:translateY(-10px)}100%{opacity:1;transform:translateY(0)}}@keyframes appearFromTop{0%{opacity:0;transform:translateY(-10px)}100%{opacity:1;transform:translateY(0)}}@-webkit-keyframes fadeOutRight{0%{opacity:1}100%{opacity:0}}@keyframes fadeOutRight{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}@keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}@-webkit-keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}.fadeInAnimation{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:0.3s;animation-duration:0.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}.slideInAnimation.left{-webkit-animation:slideFromLeft;animation:slideFromLeft;-webkit-animation-duration:0.3s;animation-duration:0.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}.slideInAnimation.right{-webkit-animation:slideFromRight;animation:slideFromRight;-webkit-animation-duration:0.3s;animation-duration:0.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}.bounceInAnimation.left{-webkit-animation:bounceInLeft;animation:bounceInLeft;-webkit-animation-duration:0.6s;animation-duration:0.6s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}.bounceInAnimation.right{-webkit-animation:bounceInRight;animation:bounceInRight;-webkit-animation-duration:0.6s;animation-duration:0.6s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}.BackgroundAnimation{position:absolute;width:100%;height:100%;margin:auto;display:flex;justify-content:center;align-items:center;transform-style:preserve-3d;-webkit-backface-visibility:hidden;backface-visibility:hidden}.BackgroundAnimation .transparent{opacity:0.75}.BackgroundAnimation .Rings{position:absolute}.BackgroundAnimation .Planets{opacity:1.0;position:absolute}.BackgroundAnimation .circle{transform-style:preserve-3d;transform:translate3D(0, 0, 0);-webkit-animation:fadeIn;animation:fadeIn;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:linear;animation-timing-function:linear}\n",""]),t.exports=a}}]);