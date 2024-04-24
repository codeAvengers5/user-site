import React from "react";

const Card = ({ imageUrl }) => {
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  };

  return (

    <div className="mb-2 ml-0 mr-0 mt-[100px] h-auto w-full rounded-lg shadow-lg md:mb-1 md:ml-[170px] md:mr-[128px] md:mt-[218px] md:h-[592px] md:w-[770px]">
      <img src={imageUrl} alt="mekedoniya" style={imageStyle} />
    </div>
  );
};

export default Card;
