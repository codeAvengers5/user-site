import { useMemo } from "react";

const Property1Default1 = ({
  home,
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultPosition,
  homeFontSize,
}) => {
  const property1Default1Style = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
      position: property1DefaultPosition,
    };
  }, [property1DefaultWidth, property1DefaultHeight, property1DefaultPosition]);

  const home1Style = useMemo(() => {
    return {
      fontSize: homeFontSize,
    };
  }, [homeFontSize]);

  return (
    <div
      className="w-[55px] h-6 text-left text-xl text-white font-inter"
      style={property1Default1Style}
    >
      <div
        className="absolute top-[0%] left-[0%] font-extralight"
        style={home1Style}
      >
        {home}
      </div>
    </div>
  );
};

export default Property1Default1;
