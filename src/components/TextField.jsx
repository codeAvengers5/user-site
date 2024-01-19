import React from "react";

const Text = ({ content, fontSize, fontFamily, fontWeight, className }) => {
  const textStyle = {
    fontSize: fontSize,
    fontWeight: fontWeight,
    fontFamily: fontFamily
  };

  return (
    <p className={className} style={textStyle}>
      {content}
    </p>
  );
};

export default Text;
