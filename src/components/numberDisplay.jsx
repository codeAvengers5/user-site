import React, { useEffect, useRef } from "react";
import { useCountUp } from "react-countup";

const NumberEldersComponent = ({ number, text }) => {
  const countUpRef = useRef(null);

  const { start } = useCountUp({
    start: 1,
    end: number,
    duration: 2, // Adjust duration as needed
    useEasing: true,
    separator: ",",
    ref: countUpRef
  });

  useEffect(() => {
    start();
  }, [start]);

  return (
    <div className="mt-0 flex flex-row">
      <div
        className="fixed-size-box flex flex-col items-center justify-center gap-[1px] self-stretch bg-aliceblue px-[23px] text-left font-roboto text-41xl text-crimson-200"
        style={{ width: "243px" }}>
        <div
          className="relative mb-1 mq800:text-29xl mq450:text-17xl"
          style={{ alignSelf: "unset" }}>
          <span ref={countUpRef} />
        </div>
        <div
          className="flex flex-row items-center justify-center py-0 text-darkslategray md:px-[2px]"
          style={{ fontSize: "15px" }}>
          <div className="relative inline-block min-w-[67px] mq450:text-lgi">
            {text}
          </div>
        </div>
      </div>
      <svg
        width="8"
        height="190"
        viewBox="0 0 8 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.5 4C7.5 2.067 5.933 0.5 4 0.5C2.067 0.5 0.5 2.067 0.5 4L7.5 4ZM0.5 4L0.499995 118L7.5 118L7.5 4L0.5 4Z"
          fill="#2D3142"
        />
      </svg>
    </div>
  );
};

export default NumberEldersComponent;
