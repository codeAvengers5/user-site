import { useMemo } from "react";

const Property1Default1 = ({
  home,
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultPosition,
  homeFontSize
}) => {
  const property1Default1Style = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
      position: property1DefaultPosition
    };
  }, [property1DefaultWidth, property1DefaultHeight, property1DefaultPosition]);

  const home1Style = useMemo(() => {
    return {
      fontSize: homeFontSize
    };
  }, [homeFontSize]);

  return (
    <div
      className="h-6 w-[55px] text-left font-inter text-xl text-white"
      style={property1Default1Style}>
      <div
        className="absolute left-[0%] top-[0%] font-extralight"
        style={home1Style}>
        {home}
      </div>
    </div>
  );
};

export default Property1Default1;