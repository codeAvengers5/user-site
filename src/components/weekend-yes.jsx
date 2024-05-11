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
  propMinWidth
}) => {
  const weekendYesStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      padding: propPadding,
      height: propHeight,
      width: propWidth
    };
  }, [propAlignSelf, propFlex, propPadding, propHeight, propWidth]);

  const text3Style = useMemo(() => {
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
      className="flex flex-1 flex-row items-start justify-start self-stretch rounded px-[0.093rem] py-[0.343rem] text-center font-inter text-[0.688rem] text-cornflowerblue"
      style={weekendYesStyle}>
      <div
        className="relative flex flex-1 items-center justify-center self-stretch"
        style={text3Style}>
        {text}
      </div>
    </div>
  );
};

export default WeekendYes;
