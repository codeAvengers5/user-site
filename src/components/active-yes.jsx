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
  propMinWidth
}) => {
  const activeYes1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      padding: propPadding,
      height: propHeight,
      width: propWidth
    };
  }, [propAlignSelf, propFlex, propPadding, propHeight, propWidth]);

  const text2Style = useMemo(() => {
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
      className="bg-darkslategray-100 flex flex-1 flex-row items-start justify-start self-stretch rounded px-[0.531rem] py-[0.343rem] text-center font-inter text-[0.688rem] text-white"
      style={activeYes1Style}>
      <div
        className="relative flex flex-1 items-center justify-center self-stretch font-extralight"
        style={text2Style}>
        {text}
      </div>
    </div>
  );
};

export default ActiveYes;
