import { useMemo } from "react";

const FillYes1 = ({
  text,
  propBorder,
  propBackgroundColor,
  propHeight,
  propAlignSelf,
  propFlex,
  propWidth,
  propColor,
  propAlignSelf1,
  propFlex1,
  propDisplay,
  propMinWidth
}) => {
  const fillYesStyle = useMemo(() => {
    return {
      border: propBorder,
      backgroundColor: propBackgroundColor,
      height: propHeight,
      alignSelf: propAlignSelf,
      flex: propFlex,
      width: propWidth
    };
  }, [
    propBorder,
    propBackgroundColor,
    propHeight,
    propAlignSelf,
    propFlex,
    propWidth
  ]);

  const text4Style = useMemo(() => {
    return {
      color: propColor,
      alignSelf: propAlignSelf1,
      flex: propFlex1,
      display: propDisplay,
      minWidth: propMinWidth
    };
  }, [propColor, propAlignSelf1, propFlex1, propDisplay, propMinWidth]);

  return (
    <button
      className="hover:bg-darkslategray-100 box-border flex h-[1.5rem] flex-1 cursor-pointer flex-row items-start justify-start rounded bg-black px-[0.5rem] py-[0.343rem] [border:none]"
      style={fillYesStyle}>
      <div
        className="relative flex flex-1 items-center justify-center self-stretch text-center font-inter text-[0.688rem] text-white"
        style={text4Style}>
        {text}
      </div>
    </button>
  );
};

export default FillYes1;
