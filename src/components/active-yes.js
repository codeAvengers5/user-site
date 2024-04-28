import { useMemo } from "react";

const ActiveYes = ({
  text,
  propAlignSelf,
  propFlex,
  propPadding,
  propHeight,
  propWidth,
  propColor,
  propAlignSelf1,
  propFlex1,
  propDisplay,
  propMinWidth,
}) => {
  const activeYes1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      padding: propPadding,
      height: propHeight,
      width: propWidth,
    };
  }, [propAlignSelf, propFlex, propPadding, propHeight, propWidth]);

  const text2Style = useMemo(() => {
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
      className="self-stretch flex-1 rounded bg-darkslategray-100 flex flex-row items-start justify-start py-[0.343rem] px-[0.531rem] text-center text-[0.688rem] text-white font-inter"
      style={activeYes1Style}
    >
      <div
        className="self-stretch flex-1 relative font-extralight flex items-center justify-center"
        style={text2Style}
      >
        {text}
      </div>
    </div>
  );
};

export default ActiveYes;
