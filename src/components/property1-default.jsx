import { useMemo } from "react";

const Property1Default = ({
  home,
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultPosition,
  homeFontSize
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
      position: property1DefaultPosition
    };
  }, [property1DefaultWidth, property1DefaultHeight, property1DefaultPosition]);

  const homeStyle = useMemo(() => {
    return {
      fontSize: homeFontSize
    };
  }, [homeFontSize]);

  return (
    <div
      className="h-[23px] w-[54px] text-left font-roboto text-xl text-black"
      style={property1DefaultStyle}>
      <div className="absolute left-[0%] top-[0%]" style={homeStyle}>
        {home}
      </div>
    </div>
  );
};

export default Property1Default;
