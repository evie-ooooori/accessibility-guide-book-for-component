/*! For license information please see stories-Accordion-index-stories.b26c956c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkaccessibility_guide_book_for_component=self.webpackChunkaccessibility_guide_book_for_component||[]).push([[920],{"./src/stories/Accordion/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicAccordionGroup:()=>BasicAccordionGroup,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./.yarn/cache/react-npm-18.2.0-1eae08fee2-b9214a9bd7.zip/node_modules/react/index.js"),jsx_runtime=__webpack_require__("./.yarn/cache/react-npm-18.2.0-1eae08fee2-b9214a9bd7.zip/node_modules/react/jsx-runtime.js");const Accordion_Accordion=(0,react.forwardRef)((function Accordion(_ref,ref){let{title,content,onFocusChange}=_ref;const[isOpen,setIsOpen]=(0,react.useState)(!1),handleAccordionKeydown=(0,react.useCallback)((event=>{switch(event.code){case"ArrowDown":event.preventDefault(),onFocusChange("next");break;case"ArrowUp":event.preventDefault(),onFocusChange("prev");break;case"Home":event.preventDefault(),onFocusChange("first");break;case"End":event.preventDefault(),onFocusChange("last")}}),[onFocusChange]);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("button",{type:"button",className:"accordion-header",onClick:()=>setIsOpen((prevOpen=>!prevOpen)),"aria-expanded":isOpen,"aria-controls":"accordion-panel-".concat(title,"-id"),id:"accordion-header-".concat(title,"-id"),onKeyDown:event=>handleAccordionKeydown(event),ref,children:title}),(0,jsx_runtime.jsx)("div",{id:"accordion-panel-".concat(title,"-id"),className:"accordion-panel","aria-labelledby":"accordion-header-".concat(title,"-id"),role:"region",children:content})]})}));Accordion_Accordion.__docgenInfo={description:"",methods:[],displayName:"Accordion"};const ACCORDION_CONTENTS=[{title:"회원가입은 어떻게 해야하나요?",content:"회원유형은 통합회원, 간편회원, 법인회원 3가지가 있습니다..."},{title:"회원탈퇴는 어떻게 하나요?",content:"사이트에서 회원탈퇴 유의사항 확인 후 회원탈퇴를 직접하실 수 있습니다..."},{title:"휴면회원 복원은 어떻게 하나요?",content:"최근 1년 이상 서비스를 이용하지 않은 경우 소중한 개인정보 보호를 위해 휴면회원으로 자동 전환됩니다..."}];const index_stories={title:"Part1/AccordionGroup",component:function AccordionGroup(){const accordionHeaderRefs=(0,react.useRef)([]),handleFocusChange=direction=>{let focusIndex;const currentIndex=accordionHeaderRefs.current.findIndex((ref=>ref===document.activeElement));switch(direction){case"next":focusIndex=currentIndex<ACCORDION_CONTENTS.length-1?currentIndex+1:0;break;case"prev":focusIndex=currentIndex>0?currentIndex-1:ACCORDION_CONTENTS.length-1;break;case"first":focusIndex=0;break;case"last":focusIndex=ACCORDION_CONTENTS.length-1;break;default:return}accordionHeaderRefs.current[focusIndex].focus()};return ACCORDION_CONTENTS.map(((_ref,index)=>{let{title,content}=_ref;return(0,jsx_runtime.jsx)(Accordion_Accordion,{id:index,title,content,ref:el=>accordionHeaderRefs.current[index]=el,onFocusChange:handleFocusChange},index)}))}},BasicAccordionGroup={};BasicAccordionGroup.parameters={...BasicAccordionGroup.parameters,docs:{...BasicAccordionGroup.parameters?.docs,source:{originalSource:"{}",...BasicAccordionGroup.parameters?.docs?.source}}};const __namedExportsOrder=["BasicAccordionGroup"]},"./.yarn/cache/react-npm-18.2.0-1eae08fee2-b9214a9bd7.zip/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./.yarn/cache/react-npm-18.2.0-1eae08fee2-b9214a9bd7.zip/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./.yarn/cache/react-npm-18.2.0-1eae08fee2-b9214a9bd7.zip/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./.yarn/cache/react-npm-18.2.0-1eae08fee2-b9214a9bd7.zip/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);