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
  propFlex,
}) => {
  const activeYesStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      padding: propPadding,
    };
  }, [propHeight, propWidth, propPadding]);

  const text1Style = useMemo(() => {
    return {
      color: propColor,
      display: propDisplay,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propColor, propDisplay, propMinWidth, propAlignSelf, propFlex]);

  return (
    <div
      className="rounded flex flex-row items-start justify-start py-[0.343rem] px-[0.312rem] text-center text-[0.688rem] text-white font-inter"
      style={activeYesStyle}
    >
      <div
        className="relative font-extralight inline-block min-w-[0.875rem]"
        style={text1Style}
      >
        {text}
      </div>
    </div>
  );
};

export default ActiveYes1;
