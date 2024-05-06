import React from "react";

const Newscard = ({ imageUrl, header, place, date, handleClick }) => {
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F5F8FF"
  };
  const imageStyle = {
    objectFit: "cover",
    marginTop: "20px"
  };

  return (
    <div
      className="h-full min-h-[450px] w-full rounded-lg p-[5px] shadow-lg md:max-w-[500px] md:p-[20px]"
      style={cardStyle}>
      <img
        src={imageUrl}
        alt="Card Image"
        className="h-full min-h-[300px] max-w-[200px] md:max-w-[400px]"
        style={imageStyle}
      />
      <div className="mt-[10px] flex h-full max-h-[400px] w-full flex-col place-content-evenly items-center">
        <p
          className="font-roboto text-[20px] font-bold text-black  md:text-[32px]"
          style={{ color: "#000", fontWeight: "bold" }}>
          {header}
        </p>
        <p
          className="text-center font-roboto text-base font-light text-black"
          style={{ color: "#000", fontSize: "20px" }}>
          {place}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "50px",
            marginTop: "20px"
          }}>
          <p
            className="font-roboto text-base font-light text-black"
            style={{ color: "#000", fontSize: "20px", marginRight: "10px" }}>
            Date: {date}
          </p>
          <button
            className="bg-blue-500 font-semibold"
            onClick={handleClick}
            style={{ color: "#f44336" }}>
            See Detail{" >>>>"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newscard;
