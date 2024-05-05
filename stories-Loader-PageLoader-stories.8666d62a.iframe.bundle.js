/*! For license information please see stories-Loader-PageLoader-stories.8666d62a.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkaccessibility_guide_book_for_component=self.webpackChunkaccessibility_guide_book_for_component||[]).push([[599],{"./src/stories/Loader/PageLoader.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicPageLoader:()=>BasicPageLoader,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PageLoader_stories});var react=__webpack_require__("./.yarn/cache/react-npm-18.2.0-1eae08fee2-b9214a9bd7.zip/node_modules/react/index.js"),bind=__webpack_require__("./.yarn/cache/classnames-npm-2.5.1-c7273f3423-58eb394e88.zip/node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind);var jsx_runtime=__webpack_require__("./.yarn/cache/react-npm-18.2.0-1eae08fee2-b9214a9bd7.zip/node_modules/react/jsx-runtime.js");const cx=bind_default().bind({button:"PageLoader_button__yRViO",page:"PageLoader_page__9bRU1","loading-ui":"PageLoader_loading-ui__h2FGR",loading:"PageLoader_loading__PSPUV"});function PageLoader(){const[isLoading,setIsLoading]=(0,react.useState)(!1),[showLoadingMessage,setShowLoadingMessage]=(0,react.useState)(!1),[showCompleteMessage,setShowCompleteMessage]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{if(isLoading){setShowLoadingMessage(!0);const showLoadingTimer=setTimeout((()=>{setIsLoading(!1)}),3e3);return()=>{clearTimeout(showLoadingTimer)}}setShowLoadingMessage(!1),setShowCompleteMessage(!0);const showCompleteMessageTimer=setTimeout((()=>{setShowCompleteMessage(!1)}),500);return()=>{clearTimeout(showCompleteMessageTimer)}}),[isLoading]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("button",{type:"button",className:cx("button"),onClick:()=>setIsLoading(!0),children:"로딩(3초) 시작"}),!isLoading&&(0,jsx_runtime.jsx)("main",{className:cx("page"),children:"로딩 완료 후 렌더링 되는 페이지"}),(0,jsx_runtime.jsxs)("div",{"aria-live":"assertive","aria-atomic":"true",className:cx("loader"),children:[showLoadingMessage&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:cx("loading-ui")}),(0,jsx_runtime.jsx)("span",{className:"visually-hidden",children:"로딩 중"})]}),showCompleteMessage&&(0,jsx_runtime.jsx)("span",{className:"visually-hidden",children:"로딩 완료"})]})]})}const Loader_PageLoader=PageLoader;PageLoader.__docgenInfo={description:"",methods:[],displayName:"PageLoader"};const PageLoader_stories={title:"Part1/Loader",component:Loader_PageLoader},BasicPageLoader={name:"PageLoader"};BasicPageLoader.parameters={...BasicPageLoader.parameters,docs:{...BasicPageLoader.parameters?.docs,source:{originalSource:'{\n  name: "PageLoader"\n}',...BasicPageLoader.parameters?.docs?.source}}};const __namedExportsOrder=["BasicPageLoader"]},"./.yarn/cache/classnames-npm-2.5.1-c7273f3423-58eb394e88.zip/node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue.call(this,arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return this&&this[arg]||arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(this,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,this&&this[key]||key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./.yarn/cache/react-npm-18.2.0-1eae08fee2-b9214a9bd7.zip/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./.yarn/cache/react-npm-18.2.0-1eae08fee2-b9214a9bd7.zip/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./.yarn/cache/react-npm-18.2.0-1eae08fee2-b9214a9bd7.zip/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./.yarn/cache/react-npm-18.2.0-1eae08fee2-b9214a9bd7.zip/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);