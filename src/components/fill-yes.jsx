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
  propMinWidth
}) => {
  const fillYes1Style = useMemo(() => {
    return {
      height: propHeight,
      backgroundColor: propBackgroundColor,
      alignSelf: propAlignSelf,
      flex: propFlex,
      debugCommit: propDebugCommit
    };
  }, [
    propHeight,
    propBackgroundColor,
    propAlignSelf,
    propFlex,
    propDebugCommit
  ]);

  const text5Style = useMemo(() => {
    return {
      color: propColor,
      alignSelf: propAlignSelf1,
      flex: propFlex1,
      display: propDisplay,
      minWidth: propMinWidth
    };
  }, [propColor, propAlignSelf1, propFlex1, propDisplay, propMinWidth]);

  return (
    <div
      className="box-border flex h-[1.5rem] flex-1 flex-row items-start justify-start rounded bg-black px-[0.5rem] py-[0.343rem] text-center font-inter text-[0.688rem] text-white"
      style={fillYes1Style}>
      <div
        className="relative flex flex-1 items-center justify-center self-stretch"
        style={text5Style}>
        {text}
      </div>
    </div>
  );
};

export default FillYes;
