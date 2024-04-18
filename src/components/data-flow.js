import { useMemo } from "react";

const DataFlow = ({ group90, signalProcessor, propLeft }) => {
  const groupIconStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="flex flex-col items-start justify-start gap-[64px] text-left text-17xl text-black font-roboto">
      <div className="flex flex-row items-start justify-start relative">
        <img
          className="h-[120px] w-[120px] absolute !m-[0] top-[calc(50%_-_60px)] left-[calc(50%_-_60px)] object-cover"
          loading="lazy"
          alt=""
          src="images/group-90-1@2x.png"
          style={groupIconStyle}
        />
        <div className="relative font-medium inline-block min-w-[68px] z-[1] mq800:text-10xl mq450:text-3xl">
          {signalProcessor}
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-2.5 pl-[11px] text-base">
        <div className="relative font-medium inline-block min-w-[47px]">
          for sth
        </div>
      </div>
    </div>
  );
};

export default DataFlow;
