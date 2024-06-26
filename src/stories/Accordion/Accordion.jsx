import { useState, useCallback, forwardRef } from "react";

import styles from "./Accordion.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const Accordion = forwardRef(function Accordion(
  { title, content, onFocusChange },
  ref,
) {
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordionKeydown = useCallback(
    (event) => {
      switch (event.code) {
        case "ArrowDown":
          event.preventDefault();
          /* 7. 초점을 다음 Accordion 헤더로 이동 */
          onFocusChange("next");

          break;

        case "ArrowUp":
          event.preventDefault();
          /* 8. 초점을 이전 Accordion 헤더로 이동 */
          onFocusChange("prev");

          break;

        case "Home":
          event.preventDefault();
          /* 9. 초점을 첫 번째 Accordion 헤더로 이동 */
          onFocusChange("first");

          break;

        case "End":
          event.preventDefault();
          /* 10. 초점을 마지막 Accordion 헤더로 이동 */
          onFocusChange("last");

          break;

        default:
          break;
      }
    },
    [onFocusChange],
  );

  return (
    <>
      {/* 1. 버튼 태그 사용 */}
      <button
        type="button"
        className={cx("header")}
        /* Accordion 상태 변경 */
        onClick={() => setIsOpen((prevOpen) => !prevOpen)}
        /* 2. Accordion 상태에 따라 aria-expanded 속성값 변경 */
        aria-expanded={isOpen}
        /* 3. 노출되는 Accordion 패널 요소 id 참조 */
        aria-controls={`accordion-panel-${title}-id`}
        /* 4. Accordion 헤더의 id 정의 */
        id={`accordion-header-${title}-id`}
        /* 8. ~ 11. 키보드 컨트롤 */
        onKeyDown={(event) => handleAccordionKeydown(event)}
        ref={ref}
      >
        {title}
      </button>
      <div
        /* 3. Accordion 패널의 id 정의 */
        id={`accordion-panel-${title}-id`}
        className={cx("panel")}
        /* 4. 연관된 Accordion 헤더 요소 id 참조 */
        aria-labelledby={`accordion-header-${title}-id`}
        /* 5. role="region" 명시 */
        role="region"
      >
        {content}
      </div>
    </>
  );
});
