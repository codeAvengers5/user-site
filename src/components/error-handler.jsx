import { useMemo } from "react";

const ErrorHandler = ({ propPadding }) => {
  const errorHandlerStyle = useMemo(() => {
    return {
      padding: propPadding
    };
  }, [propPadding]);

  return (
    <div
      className="box-border flex max-w-full flex-col items-start justify-start gap-[46.89999999999998px] self-stretch px-0 pb-[2.8421709430404014e-14px] pt-0 text-left font-roboto text-29xl text-black"
      style={errorHandlerStyle}>
      <h1 className="font-inherit relative m-0 inline-block h-[65.1px] max-w-full shrink-0 text-inherit font-normal leading-[50px] mq800:text-19xl mq800:leading-[40px] mq450:text-10xl mq450:leading-[30px]">
        Building Our New Home
      </h1>
      <div className="flex max-w-full flex-row flex-wrap items-start justify-start gap-[53px] self-stretch font-inter text-xl">
        <div className="flex min-w-[382px] max-w-full flex-1 flex-col items-start justify-start gap-[13px] mq800:min-w-full">
          <div className="relative flex h-[93.8px] shrink-0 items-center self-stretch mq450:text-base">{`Lorem ipsum dolor sit amet consectetur. Tellus velit ultrices bibendum mollis eu sit tempor eu pulvinar. In feugiat morbi integer penatibus consequat felis. `}</div>
          <div className="relative flex h-[93.8px] shrink-0 items-center self-stretch mq450:text-base">{`Lorem ipsum dolor sit amet consectetur. Tellus velit ultrices bibendum mollis eu sit tempor eu pulvinar. In feugiat morbi integer penatibus consequat felis. `}</div>
        </div>
        <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[53.80000000000001px]">
          <button className="flex cursor-pointer flex-row items-start justify-start rounded-3xs bg-orangered-100 px-[30.5px] py-[12.5px] [border:none] hover:bg-tomato">
            <div className="relative inline-block min-w-[56px] text-left font-inter text-base font-semibold leading-[28px] text-white">
              Donate
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorHandler;
