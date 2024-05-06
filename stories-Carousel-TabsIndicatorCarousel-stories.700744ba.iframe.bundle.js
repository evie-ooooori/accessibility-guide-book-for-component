/*! For license information please see stories-Carousel-TabsIndicatorCarousel-stories.700744ba.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkaccessibility_guide_book_for_component=self.webpackChunkaccessibility_guide_book_for_component||[]).push([[807],{"./src/stories/Carousel/TabsIndicatorCarousel.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Tabs_Indicator_Carousel:()=>Tabs_Indicator_Carousel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TabsIndicatorCarousel_stories});var react=__webpack_require__("./.yarn/cache/react-npm-18.2.0-1eae08fee2-b9214a9bd7.zip/node_modules/react/index.js");var bind=__webpack_require__("./.yarn/cache/classnames-npm-2.5.1-c7273f3423-58eb394e88.zip/node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),jsx_runtime=__webpack_require__("./.yarn/cache/react-npm-18.2.0-1eae08fee2-b9214a9bd7.zip/node_modules/react/jsx-runtime.js");const cx=bind_default().bind({"slide-item":"TabsIndicatorCarousel_slide-item__7E6Tk",active:"TabsIndicatorCarousel_active__dYcNh","slide-container":"TabsIndicatorCarousel_slide-container__PdnjC",controls:"TabsIndicatorCarousel_controls__XgyGC",previous:"TabsIndicatorCarousel_previous__sGtk2",next:"TabsIndicatorCarousel_next__KxT6o",rotation:"TabsIndicatorCarousel_rotation__RCpsV",paused:"TabsIndicatorCarousel_paused__nJDO-",indicators:"TabsIndicatorCarousel_indicators__l3h9U"}),SLIDE_CONTENTS=[{title:"초대할 때마다 포인트 5천원",description:"친구 초대하고 최대 5만원 받으세요!",imageUrl:"https://via.placeholder.com/2400x1200/eee/000?text="},{title:"역시즌 세일",description:"인기브랜드 미리 준비하는 역시즌 특가!",imageUrl:"https://via.placeholder.com/2400x1200/eee/000?text="},{title:"여름 디저트 대전",description:"시원한 디저트를 먹으면 여름 바캉스 경품까지!",imageUrl:"https://via.placeholder.com/2400x1200/eee/000?text="}],SLIDE_LENGTH=SLIDE_CONTENTS.length,LAST_INDEX=SLIDE_LENGTH-1;function Carousel(){const[activeIndex,setActiveIndex]=(0,react.useState)(0),[isAutoPlay,setIsAutoPlay]=(0,react.useState)(!0),[isRotation,setIsRotation]=(0,react.useState)(isAutoPlay),intervalRef=(0,react.useRef)(null),indicatorButtonRefs=(0,react.useRef)(Array.from({length:SLIDE_LENGTH})),playCarousel=(0,react.useCallback)((()=>{isRotation&&setIsAutoPlay(!0)}),[isRotation]),moveToNextSlide=(0,react.useCallback)((()=>{setActiveIndex(activeIndex<LAST_INDEX?activeIndex+1:0)}),[activeIndex]);(0,react.useEffect)((()=>{if(isAutoPlay)return intervalRef.current=setInterval(moveToNextSlide,5e3),()=>clearInterval(intervalRef.current)}),[isAutoPlay,moveToNextSlide]);const handleClickControls=(0,react.useCallback)(((direction,index)=>{switch(clearInterval(intervalRef.current),direction){case"prev":setActiveIndex(activeIndex>0?activeIndex-1:LAST_INDEX);break;case"next":moveToNextSlide();break;default:setActiveIndex(index)}isAutoPlay&&(intervalRef.current=setInterval(moveToNextSlide,5e3))}),[activeIndex,isAutoPlay,moveToNextSlide]),handleIndicatorKeydown=(0,react.useCallback)((event=>{let nextIndex;const currentIndex=indicatorButtonRefs.current.findIndex((ref=>ref===document.activeElement));switch(event.code){case"ArrowLeft":event.preventDefault(),nextIndex=currentIndex>0?currentIndex-1:LAST_INDEX;break;case"ArrowRight":event.preventDefault(),nextIndex=currentIndex<LAST_INDEX?currentIndex+1:0;break;case"Home":event.preventDefault(),nextIndex=0;break;case"End":event.preventDefault(),nextIndex=LAST_INDEX}null!=nextIndex&&(setActiveIndex(nextIndex),indicatorButtonRefs.current[nextIndex].focus())}),[]);return(0,jsx_runtime.jsxs)("div",{role:"region","aria-label":"이달의 이벤트",children:[(0,jsx_runtime.jsxs)("div",{className:cx("controls"),children:[(0,jsx_runtime.jsx)("button",{type:"button",className:cx("rotation",{paused:!isRotation}),onClick:()=>{setIsAutoPlay((prev=>!prev)),setIsRotation((prev=>!prev))},"aria-label":isRotation?"일시정지":"재생"}),(0,jsx_runtime.jsx)("button",{type:"button",className:cx("previous"),onClick:()=>handleClickControls("prev"),"aria-controls":"slide-conatainer-id",onMouseOver:()=>setIsAutoPlay(!1),onMouseOut:playCarousel,onFocus:()=>setIsAutoPlay(!1),onBlur:playCarousel,children:"이전 슬라이드"}),(0,jsx_runtime.jsx)("button",{type:"button",className:cx("next"),onClick:()=>handleClickControls("next"),"aria-controls":"slide-conatainer-id",onMouseOver:()=>setIsAutoPlay(!1),onMouseOut:playCarousel,onFocus:()=>setIsAutoPlay(!1),onBlur:playCarousel,children:"다음 슬라이드"}),(0,jsx_runtime.jsx)("div",{className:cx("indicators"),role:"tablist","aria-label":"이미지 슬라이드",children:Array.from({length:SLIDE_LENGTH},((_,index)=>(0,jsx_runtime.jsxs)("button",{type:"button",role:"tab","aria-controls":"slide-item-".concat(index+1),"aria-selected":index===activeIndex,onClick:()=>handleClickControls(_,index),onMouseOver:()=>setIsAutoPlay(!1),onMouseOut:playCarousel,onFocus:()=>setIsAutoPlay(!1),onBlur:playCarousel,ref:el=>indicatorButtonRefs.current[index]=el,onKeyDown:event=>handleIndicatorKeydown(event),tabIndex:activeIndex===index?void 0:-1,children:["슬라이드 ",index+1]},index)))})]}),(0,jsx_runtime.jsx)("div",{className:cx("slide-container"),id:"slide-conatainer-id","aria-live":isAutoPlay?"off":"polite","aria-label":"7월 주요 이벤트",children:SLIDE_CONTENTS.map(((item,index)=>index===activeIndex&&(0,jsx_runtime.jsx)("div",{className:cx("slide-item",{active:index===activeIndex}),id:"slide-item-".concat(index+1),"aria-label":"총 ".concat(SLIDE_LENGTH,"개의 슬라이드 중 ").concat(index+1,"번째 슬라이드"),role:"tabpanel",children:(0,jsx_runtime.jsxs)("a",{href:"/",onMouseOver:()=>setIsAutoPlay(!1),onMouseOut:playCarousel,onFocus:()=>setIsAutoPlay(!1),onBlur:playCarousel,children:[(0,jsx_runtime.jsx)("img",{src:item.imageUrl,alt:""}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)("strong",{children:item.title}),(0,jsx_runtime.jsx)("span",{children:item.description})]})]})},index)))})]})}const TabsIndicatorCarousel=Carousel;Carousel.__docgenInfo={description:"",methods:[],displayName:"Carousel"};const TabsIndicatorCarousel_stories={title:"Part2/Carousel",component:TabsIndicatorCarousel},Tabs_Indicator_Carousel={};Tabs_Indicator_Carousel.parameters={...Tabs_Indicator_Carousel.parameters,docs:{...Tabs_Indicator_Carousel.parameters?.docs,source:{originalSource:"{}",...Tabs_Indicator_Carousel.parameters?.docs?.source}}};const __namedExportsOrder=["Tabs_Indicator_Carousel"]},"./.yarn/cache/classnames-npm-2.5.1-c7273f3423-58eb394e88.zip/node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue.call(this,arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return this&&this[arg]||arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(this,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,this&&this[key]||key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./.yarn/cache/react-npm-18.2.0-1eae08fee2-b9214a9bd7.zip/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./.yarn/cache/react-npm-18.2.0-1eae08fee2-b9214a9bd7.zip/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./.yarn/cache/react-npm-18.2.0-1eae08fee2-b9214a9bd7.zip/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./.yarn/cache/react-npm-18.2.0-1eae08fee2-b9214a9bd7.zip/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);