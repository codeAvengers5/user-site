import React from "react";

const Card1 = ({
  height,
  width,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  imageUrl,
  header,
  place
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
    height: "426px",
    objectFit: "cover"
  };

  return (
    <div className="rounded-lg shadow-lg" style={cardStyle}>
      <img src={imageUrl} alt="Card Image" style={imageStyle} />
      <div
        className="mt-[30px] flex flex-shrink-0 flex-col items-center justify-center"
        style={{ width: "404px", height: "56px" }}>
        <p
          className="font-roboto text-2xl font-bold  text-black"
          style={{ color: "#000", fontSize: "24px" }}>
          {header}
        </p>
        <p
          className="font-roboto text-base font-light text-black"
          style={{ color: "#000", fontSize: "20px" }}>
          {place}
        </p>
      </div>
    </div>
  );
};

export default Card1;
