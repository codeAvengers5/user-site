import { useMemo } from "react";

const ErrorHandler = ({ propPadding }) => {
  const errorHandlerStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[2.8421709430404014e-14px] box-border gap-[46.89999999999998px] max-w-full text-left text-29xl text-black font-roboto"
      style={errorHandlerStyle}
    >
      <h1 className="m-0 h-[65.1px] relative text-inherit leading-[50px] font-normal font-inherit inline-block shrink-0 max-w-full mq800:text-19xl mq800:leading-[40px] mq450:text-10xl mq450:leading-[30px]">
        Building Our New Home
      </h1>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[53px] max-w-full text-xl font-inter">
        <div className="flex-1 flex flex-col items-start justify-start gap-[13px] min-w-[382px] max-w-full mq800:min-w-full">
          <div className="self-stretch h-[93.8px] relative flex items-center shrink-0 mq450:text-base">{`Lorem ipsum dolor sit amet consectetur. Tellus velit ultrices bibendum mollis eu sit tempor eu pulvinar. In feugiat morbi integer penatibus consequat felis. `}</div>
          <div className="self-stretch h-[93.8px] relative flex items-center shrink-0 mq450:text-base">{`Lorem ipsum dolor sit amet consectetur. Tellus velit ultrices bibendum mollis eu sit tempor eu pulvinar. In feugiat morbi integer penatibus consequat felis. `}</div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[53.80000000000001px] px-0 pb-0">
          <button className="cursor-pointer [border:none] py-[12.5px] px-[30.5px] bg-orangered-100 rounded-3xs flex flex-row items-start justify-start hover:bg-tomato">
            <div className="relative text-base leading-[28px] font-semibold font-inter text-white text-left inline-block min-w-[56px]">
              Donate
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorHandler;
