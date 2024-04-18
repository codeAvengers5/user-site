import { useMemo } from "react";

const FrameComponent = ({ propAlignSelf }) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div
      className="self-stretch rounded-8xs bg-aliceblue shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start p-[30px] gap-[28px] z-[2] text-left text-41xl text-crimson-200 font-roboto"
      style={frameDivStyle}
    >
      <div className="relative mq800:text-29xl mq450:text-17xl">1206</div>
      <div className="flex flex-row items-start justify-start py-0 px-[34px] text-5xl text-darkslategray">
        <div className="relative inline-block min-w-[67px] mq450:text-lgi">
          Elders
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
