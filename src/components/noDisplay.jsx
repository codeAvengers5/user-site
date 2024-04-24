import React from "react";

const NumberEldersComponent = ({ number, text }) => {
  return (
    <div className="mt-0 flex flex-row">
      <div className="flex flex-col items-start justify-start gap-[1px] self-stretch bg-aliceblue px-[39px] text-left font-roboto text-41xl text-crimson-200">
        <div
          className="relative mb-1 mq800:text-29xl mq450:text-17xl"
          style={{ alignSelf: "unset" }}>
          {number}
        </div>
        <div className="flex flex-row items-start justify-start px-[34px] py-0 text-5xl text-darkslategray">
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
