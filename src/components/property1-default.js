import { useMemo } from "react";

const Property1Default = ({
  home,
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultPosition,
  homeFontSize,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
      position: property1DefaultPosition,
    };
  }, [property1DefaultWidth, property1DefaultHeight, property1DefaultPosition]);

  const homeStyle = useMemo(() => {
    return {
      fontSize: homeFontSize,
    };
  }, [homeFontSize]);

  return (
    <div
      className="w-[54px] h-[23px] text-left text-xl text-black font-roboto"
      style={property1DefaultStyle}
    >
      <div className="absolute top-[0%] left-[0%]" style={homeStyle}>
        {home}
      </div>
    </div>
  );
};

export default Property1Default;
