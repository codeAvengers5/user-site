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
  propMinWidth,
}) => {
  const fillYesStyle = useMemo(() => {
    return {
      border: propBorder,
      backgroundColor: propBackgroundColor,
      height: propHeight,
      alignSelf: propAlignSelf,
      flex: propFlex,
      width: propWidth,
    };
  }, [
    propBorder,
    propBackgroundColor,
    propHeight,
    propAlignSelf,
    propFlex,
    propWidth,
  ]);

  const text4Style = useMemo(() => {
    return {
      color: propColor,
      alignSelf: propAlignSelf1,
      flex: propFlex1,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propColor, propAlignSelf1, propFlex1, propDisplay, propMinWidth]);

  return (
    <button
      className="cursor-pointer [border:none] py-[0.343rem] px-[0.5rem] bg-black h-[1.5rem] flex-1 rounded flex flex-row items-start justify-start box-border hover:bg-darkslategray-100"
      style={fillYesStyle}
    >
      <div
        className="self-stretch flex-1 relative text-[0.688rem] font-inter text-white text-center flex items-center justify-center"
        style={text4Style}
      >
        {text}
      </div>
    </button>
  );
};

export default FillYes1;
