import { useMemo } from "react";

const ErrorHandler = ({ propPadding }) => {
  const errorHandlerStyle = useMemo(() => {
    return {
      padding: propPadding
    };
  }, [propPadding]);

  return (
    <div
      className=" flex h-full w-full flex-col items-start justify-start gap-[20px]  px-0 pb-[10px] pt-0 text-left font-roboto text-heading_1 text-black"
      style={errorHandlerStyle}>
      <h1 className="h-full w-full  text-inherit font-normal leading-[50px] mq800:text-19xl mq800:leading-[40px] mq450:text-10xl mq450:leading-[30px]">
        Building Our New Home
      </h1>
      <div className="flex h-full w-full flex-wrap items-start justify-start gap-[10px] font-inter text-base">
        <div className="flex h-full w-full flex-col flex-wrap items-start justify-start gap-[13px] md:min-w-[300px] 2xl:w-[800px] mq800:min-w-full">
          <div className=" flex  flex-wrap items-center  mq450:text-base">{`Lorem ipsum dolor sit amet consectetur. Tellus velit ultrices bibendum mollis eu sit tempor eu pulvinar. In feugiat morbi integer penatibus consequat felis. `}</div>
          <div className=" flex  flex-wrap items-center  mq450:text-base">{`Lorem ipsum dolor sit amet consectetur. Tellus velit ultrices bibendum mollis eu sit tempor eu pulvinar. In feugiat morbi integer penatibus consequat felis. `}</div>
        </div>
      </div>
    </div>
  );
};

export default ErrorHandler;
