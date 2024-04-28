import { useMemo } from "react";

const WeekendYesActiveYesFill = ({
  text,
  propBackgroundColor,
  propPadding,
  propHeight,
  propWidth,
  propFlex,
  propBorder,
  propMinWidth,
  propColor,
  propDisplay,
  propMinWidth1,
  propAlignSelf,
  propFlex1,
  propWidth1,
}) => {
  const weekendYesActiveYesFillStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      padding: propPadding,
      height: propHeight,
      width: propWidth,
      flex: propFlex,
      border: propBorder,
      minWidth: propMinWidth,
    };
  }, [
    propBackgroundColor,
    propPadding,
    propHeight,
    propWidth,
    propFlex,
    propBorder,
    propMinWidth,
  ]);

  const textStyle = useMemo(() => {
    return {
      color: propColor,
      display: propDisplay,
      minWidth: propMinWidth1,
      alignSelf: propAlignSelf,
      flex: propFlex1,
      width: propWidth1,
    };
  }, [
    propColor,
    propDisplay,
    propMinWidth1,
    propAlignSelf,
    propFlex1,
    propWidth1,
  ]);

  return (
    <div
      className="rounded bg-cornflowerblue flex flex-row items-start justify-start py-[0.343rem] px-[0.312rem] text-center text-[0.688rem] text-white font-inter"
      style={weekendYesActiveYesFillStyle}
    >
      <div className="relative inline-block min-w-[0.875rem]" style={textStyle}>
        {text}
      </div>
    </div>
  );
};

export default WeekendYesActiveYesFill;
