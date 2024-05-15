import { useMemo } from "react";

const DataFlow = ({ group90, signalProcessor, propLeft }) => {
  const groupIconStyle = useMemo(() => {
    return {
      left: propLeft
    };
  }, [propLeft]);

  return (
    <div className="flex flex-col items-start justify-start gap-[50px] text-left font-roboto text-17xl text-black">
      <div className="relative flex flex-row items-start justify-start">
        <img
          className="absolute left-[calc(50%_-_60px)] top-[calc(50%_-_60px)] !m-[0] h-[120px] w-[120px] object-cover"
          loading="lazy"
          alt=""
          src="images/group-90-1@2x.png"
          style={groupIconStyle}
        />
        <div className="relative z-[1] inline-block min-w-[68px] text-heading_2 font-medium mq800:text-10xl mq450:text-3xl">
          {signalProcessor}
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0  pr-2.5 text-base">
        <div className="relative inline-block min-w-[47px] font-medium">
          for sth
        </div>
      </div>
    </div>
  );
};

export default DataFlow;
