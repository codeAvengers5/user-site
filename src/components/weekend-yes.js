import { useMemo } from "react";

const WeekendYes = ({
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
  const weekendYesStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      padding: propPadding,
      height: propHeight,
      width: propWidth,
    };
  }, [propAlignSelf, propFlex, propPadding, propHeight, propWidth]);

  const text3Style = useMemo(() => {
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
      className="self-stretch flex-1 rounded flex flex-row items-start justify-start py-[0.343rem] px-[0.093rem] text-center text-[0.688rem] text-cornflowerblue font-inter"
      style={weekendYesStyle}
    >
      <div
        className="self-stretch flex-1 relative flex items-center justify-center"
        style={text3Style}
      >
        {text}
      </div>
    </div>
  );
};

export default WeekendYes;
