import { useMemo } from "react";

const ActiveYes1 = ({
  text,
  propHeight,
  propWidth,
  propPadding,
  propColor,
  propDisplay,
  propMinWidth,
  propAlignSelf,
  propFlex
}) => {
  const activeYesStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      padding: propPadding
    };
  }, [propHeight, propWidth, propPadding]);

  const text1Style = useMemo(() => {
    return {
      color: propColor,
      display: propDisplay,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
      flex: propFlex
    };
  }, [propColor, propDisplay, propMinWidth, propAlignSelf, propFlex]);

  return (
    <div
      className="flex flex-row items-start justify-start rounded px-[0.312rem] py-[0.343rem] text-center font-inter text-[0.688rem] text-white"
      style={activeYesStyle}>
      <div
        className="relative inline-block min-w-[0.875rem] font-extralight"
        style={text1Style}>
        {text}
      </div>
    </div>
  );
};

export default ActiveYes1;
