import { useEffect } from "react";
import { useRef } from "react";
import { useMemo } from "react";
import { useCountUp } from "react-countup";

const FrameComponent = ({ propAlignSelf, number, text }) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf
    };
  }, [propAlignSelf]);
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
    <div
      className="z-[2] flex w-[250px] flex-col items-center justify-center gap-[28px] self-stretch rounded-8xs bg-aliceblue p-[30px] font-secondary text-crimson-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
      style={frameDivStyle}>
      <p className="text-medium md:text-heading_1" ref={countUpRef} />
      <p className="text-small text-darkslategray md:text-base">{text}</p>
    </div>
  );
};

export default FrameComponent;
