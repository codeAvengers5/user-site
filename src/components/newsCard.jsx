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
    <div className="p-[5px] md:p-[20px] rounded-lg shadow-lg w-full h-full md:max-w-[500px] min-h-[450px]" style={cardStyle}>
      <img src={imageUrl} alt="Card Image" className="max-w-[200px] h-full md:max-w-[400px] min-h-[300px]" style={imageStyle} />
      <div
        className="h-full w-full mt-[10px] max-h-[400px] flex flex-col items-center place-content-evenly">
        <p
          className="font-roboto text-[20px] md:text-[32px] font-bold  text-black"
          style={{ color: "#000", fontWeight: "bold" }}>
          {header}
        </p>
        <p
          className="font-roboto text-base font-light text-black text-center"
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
