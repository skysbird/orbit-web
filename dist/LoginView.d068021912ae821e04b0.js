(this.webpackJsonp=this.webpackJsonp||[]).push([[13],{359:function(e,t,n){"use strict";e.exports=n(360)},360:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i=(o=n(10))&&"object"==typeof o&&"default"in o?o.default:o;function r(e){return r.warnAboutHMRDisabled&&(r.warnAboutHMRDisabled=!0,console.error("React-Hot-Loader: misconfiguration detected, using production version in non-production environment."),console.error("React-Hot-Loader: Hot Module Replacement is not enabled.")),i.Children.only(e.children)}r.warnAboutHMRDisabled=!1;var a=function e(){return e.shouldWrapWithAppContainer?function(e){return function(t){return i.createElement(r,null,i.createElement(e,t))}}:function(e){return e}};a.shouldWrapWithAppContainer=!1;t.AppContainer=r,t.hot=a,t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){},t.cold=function(e){return e},t.configureComponent=function(){}},495:function(e,t,n){"use strict";n.r(t),function(e){var o,i=n(10),r=n.n(i),a=n(359),l=n(357),s=n(478),c=n(356),u=n(97),f=n(368),d=n(361);n(496);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,i=!1,r=void 0;try{for(var a,l=e[Symbol.iterator]();!(o=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{o||null==l.return||l.return()}finally{if(i)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},w=Object(i.lazy)((function(){return n.e(3).then(n.bind(null,371))})),y=Object(i.lazy)((function(){return n.e(12).then(n.bind(null,515))})),h=new f.a;function x(){var e=Object(l.g)(),t=r.a.useContext(d.a),n=t.uiStore,o=t.sessionStore,i=p(Object(c.b)(),1)[0],a=p(r.a.useState("/"),2),f=a[0],g=a[1];r.a.useEffect((function(){n.setTitle("Login | Orbit"),n.closeControlPanel()}),[]),r.a.useEffect((function(){var t=(e.state||{from:{pathname:"/"}}).from;g(t.pathname)}),[e.state]);var b=r.a.useRef(),x=r.a.useCallback((function(){b.current&&b.current.focus()}),[]),L=r.a.useCallback((function(e){if(e.preventDefault(),b.current){var t=b.current.value.trim();""!==t&&o.login({username:t}).catch((function(e){h.error(e)}))}}),[]);return Object(s.a)((function(){return o.isAuthenticated?r.a.createElement(l.a,{to:f}):r.a.createElement("div",{className:"LoginView"},r.a.createElement("h1",{className:"loginHeaderAnimation",onClick:x},"IPFS中文用户组"),r.a.createElement(y,{theme:m({},n.theme),onSubmit:L,usernameInputRef:b}),r.a.createElement("div",{className:"Version"},i("version"),": ",u.a),r.a.createElement(w,{size:480,theme:m({},n.theme),onClick:x}))}))}b(x,"useLocation{location}\nuseContext{{ uiStore, sessionStore }}\nuseTranslation{[t]}\nuseState{[next, setNext]('/')}\nuseEffect{}\nuseEffect{}\nuseRef{usernameInputRef}\nuseCallback{focusUsernameInput}\nuseCallback{handleSubmit}\nuseObserver{}",(function(){return[l.g,c.b,s.a]}));var L,v,V=Object(a.hot)(e)(x);t.default=V,(L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(L.register(w,"BackgroundAnimation","/Users/skysbird/workspace/orbit-web/src/views/LoginView.js"),L.register(y,"LoginForm","/Users/skysbird/workspace/orbit-web/src/views/LoginView.js"),L.register(h,"logger","/Users/skysbird/workspace/orbit-web/src/views/LoginView.js"),L.register(x,"LoginView","/Users/skysbird/workspace/orbit-web/src/views/LoginView.js"),L.register(V,"default","/Users/skysbird/workspace/orbit-web/src/views/LoginView.js")),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(e)}.call(this,n(52)(e))},496:function(e,t,n){var o=n(46),i=n(497);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);e.exports=i.locals||{}},497:function(e,t,n){(t=n(47)(!1)).push([e.i,'.LoginView{font-weight:bold;font-size:0.9em;padding:0.1em;color:gray;display:flex;justify-content:center;align-items:center;width:100%;height:100%;margin-top:0;box-sizing:border-box}.LoginView .Version{z-index:1;position:absolute;bottom:1.2em;left:1em;font-size:0.9em;color:rgba(220,220,220,0.4)}.LoginView .ConfigurationButton{z-index:1;position:absolute;bottom:1em;right:1em;font-size:0.9em}.LoginView .header{display:flex;flex-direction:row;justify-content:center;width:100%;flex:1 0 65%;align-items:flex-end}.LoginView .inputs{margin:0em 4em;display:flex;flex:1 0 50%;flex-direction:column}.LoginView .inputs ::-webkit-input-placeholder{color:#fff;font-style:italic}.LoginView .inputs ::-moz-placeholder{color:#fff;font-style:italic}.LoginView .inputs :-ms-input-placeholder{color:#fff;font-style:italic}.LoginView .inputs ::-ms-input-placeholder{color:#fff;font-style:italic}.LoginView .inputs ::placeholder{color:#fff;font-style:italic}.LoginView h1{font-size:2.5em;text-transform:uppercase;color:rgba(240,240,240,0.8);z-index:1;margin:0;padding:0}.LoginView form{top:46.666%;position:absolute;margin:0;margin-top:7em;z-index:1;display:flex;align-self:flex-start;width:100%;flex-direction:column;justify-content:center;max-width:32.5em}.LoginView form .usernameRow{display:flex;flex-direction:row;flex:1 0 0%;justify-content:center;align-items:flex-end;font-size:1.25em}.LoginView form .connectButtonRow{margin-top:3vh;display:flex;flex-direction:row;flex:0 1 15%;justify-content:center;align-items:flex-end;font-size:1em}.LoginView form .connectButtonRow .hint{color:rgba(196,196,196,0.8)}.LoginView form .lastRow{align-items:center;flex-direction:column;flex:1 0 20%;display:flex}.LoginView form .hidden{visibility:hidden;display:none}.LoginView form .centerrow{display:flex;flex-direction:row;margin-bottom:0.5em;justify-content:center;width:100%}.LoginView form .center{display:flex;justify-content:center}.LoginView form .logo{margin-top:0.5em;opacity:0.6;cursor:pointer}.LoginView form .logo:hover{opacity:1}.LoginView form .label{display:flex;flex:1 1 8%;min-width:5em;align-self:center;justify-content:flex-start}.LoginView form .nicknameLength{margin-top:0.5em;padding:0em 0.5em;font-size:0.8em;display:flex;align-self:center}.LoginView form .error{color:rgba(240,96,96,0.8);margin-top:1em;flex:1 1 auto;text-align:center}.LoginView form input[type="text"],.LoginView form input[type="password"]{border-bottom:1px solid #a951af;margin-bottom:0;width:100%;text-align:center}.LoginView form input[type="text"]:disabled{color:rgba(228,228,228,0.25);font-style:italic;cursor:not-allowed;width:96%}.LoginView .satellites{position:absolute;display:flex;margin-top:0.5em;justify-content:center;width:100%}.loginHeaderAnimation{-webkit-animation:bounceInDown;animation:bounceInDown;-webkit-animation-duration:0.5s;animation-duration:0.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}\n',""]),e.exports=t}}]);