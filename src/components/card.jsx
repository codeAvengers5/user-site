import React from "react";

const Card = ({ imageUrl }) => {
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  };

  return (
    <div className="h-auto max-w-[400px] md:h-[400px] md:w-[530px]">
      <img src={imageUrl} alt="mekedoniya" style={imageStyle} />
    </div>
  );
};

export default Card;
