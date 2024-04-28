import { useMemo } from "react";

const FillYes = ({
  text,
  propHeight,
  propBackgroundColor,
  propAlignSelf,
  propFlex,
  propDebugCommit,
  propColor,
  propAlignSelf1,
  propFlex1,
  propDisplay,
  propMinWidth,
}) => {
  const fillYes1Style = useMemo(() => {
    return {
      height: propHeight,
      backgroundColor: propBackgroundColor,
      alignSelf: propAlignSelf,
      flex: propFlex,
      debugCommit: propDebugCommit,
    };
  }, [
    propHeight,
    propBackgroundColor,
    propAlignSelf,
    propFlex,
    propDebugCommit,
  ]);

  const text5Style = useMemo(() => {
    return {
      color: propColor,
      alignSelf: propAlignSelf1,
      flex: propFlex1,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propColor, propAlignSelf1, propFlex1, propDisplay, propMinWidth]);

  return (
    <div
      className="h-[1.5rem] flex-1 rounded bg-black flex flex-row items-start justify-start py-[0.343rem] px-[0.5rem] box-border text-center text-[0.688rem] text-white font-inter"
      style={fillYes1Style}
    >
      <div
        className="self-stretch flex-1 relative flex items-center justify-center"
        style={text5Style}
      >
        {text}
      </div>
    </div>
  );
};

export default FillYes;
