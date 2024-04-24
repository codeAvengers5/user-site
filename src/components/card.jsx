import React from "react";

const Card = ({
  height,
  width,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  imageUrl
}) => {
  const cardStyle = {
    height: height,
    width: width,
    marginLeft: marginLeft,
    marginRight: marginRight,
    marginTop: marginTop,
    marginBottom: marginBottom
  };
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  };

  return (
    <div className="rounded-lg shadow-lg" style={cardStyle}>
      <img src={imageUrl} alt="Card Image" style={imageStyle} />
    </div>
  );
};

export default Card;
