import React from "react";
import { Button } from "../button";
import { CaretCircleLeft, CaretCircleRight } from "@phosphor-icons/react";

const Tab = ({ currentTab, totalTabs, onTabChange, type }) => {
  const [translate, setTranslate] = React.useState(0);
  const [isLeftVisible, setIsLeftVisible] = React.useState(false);
  const [isRightVisible, setIsRightVisible] = React.useState(false);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    if (containerRef.current == null) return;

    const observer = new ResizeObserver((entries) => {
      const container = entries[0]?.target;
      if (container == null) return;

      setIsLeftVisible(translate > 0);
      setIsRightVisible(translate + container.clientWidth < container.scrollWidth);
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [totalTabs, translate, containerRef]);

  return (
    <div ref={containerRef} className="overflow-x-hidden relative">
      <div
        className="flex gap-4 whitespace-nowrap transition-transform"
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {totalTabs.map((item, index) => (
          <div key={index}>
            {type === "underline" ? (
              <Button
                onClick={() => onTabChange(item)}
                className={`${
                  index === currentTab ? "before:w-1/2 text-primary-3" : "before:w-0 text-gray-500"
                }`}
                intent="underline"
              >
                {item}
              </Button>
            ) : (
              <Button
                onClick={() => onTabChange(item)}
                className={`${index === currentTab ? "bg-primary-2" : "bg-primary-3"} rounded-sm`}
                intent="secondary"
              >
                {item}
              </Button>
            )}
          </div>
        ))}
      </div>
      {isLeftVisible && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
            onClick={() => {
              setTranslate((translate) => {
                const newTranslate = translate - 200;
                if (newTranslate <= 0) return 0;
                return newTranslate;
              });
            }}
          >
            <CaretCircleLeft />
          </Button>
        </div>
      )}
      {isRightVisible && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
            onClick={() => {
              setTranslate((translate) => {
                if (containerRef.current == null) {
                  return translate;
                }
                const newTranslate = translate + 200;
                const edge = containerRef.current.scrollWidth;
                const width = containerRef.current.clientWidth;
                if (newTranslate + width >= edge) {
                  return edge - width;
                }
                return newTranslate;
              });
            }}
          >
            <CaretCircleRight />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Tab;
