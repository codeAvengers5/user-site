import { useMemo } from "react";

const FrameComponent = ({ propAlignSelf }) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf
    };
  }, [propAlignSelf]);

  return (
    <div
      className="z-[2] flex flex-col items-start justify-start gap-[28px] self-stretch rounded-8xs bg-aliceblue p-[30px] text-left font-roboto text-41xl text-crimson-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
      style={frameDivStyle}>
      <div className="relative mq800:text-29xl mq450:text-17xl">1206</div>
      <div className="flex flex-row items-start justify-start px-[34px] py-0 text-5xl text-darkslategray">
        <div className="relative inline-block min-w-[67px] mq450:text-lgi">
          Elders
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
