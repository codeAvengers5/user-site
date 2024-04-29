import React from "react";

const Card1 = ({ imageUrl, header, place }) => {
  const imageStyle = {
    width: "100%",
    height: "426px",
    objectFit: "cover"
  };

  return (
    <div className="rounded-lg shadow-lg">
      <img src={imageUrl} alt="Card Image" style={imageStyle} />
      <div className="md:w-364 w-100 md:h-548 mb-5 ml-5 mr-11 mt-10 w-full rounded-lg shadow-lg">
        <img src={imageUrl} alt="pho" style={imageStyle} />
        <div
          className="mt-[30px] flex flex-shrink-0 flex-col items-center justify-center"
          style={{ width: "404px", height: "56px" }}>
          <p
            className="font-roboto text-2xl font-bold  text-black"
            style={{ color: "#000", fontSize: "24px" }}>
            {header}
          </p>
          <p
            className="mb-3 font-roboto text-base font-light text-black"
            style={{ color: "#000", fontSize: "20px" }}>
            {place}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card1;
