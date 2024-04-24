import React from "react";

const Newscard = ({ imageUrl, header, place, date, handleClick }) => {
  const cardStyle = {
    height: "450",
    width: "400",
    marginLeft: "2px",
    marginRight: "2px",
    marginTop: "2px",
    marginBottom: "2px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F5F8FF"
  };
  const imageStyle = {
    width: "300px",
    height: "300px",
    objectFit: "cover",
    marginTop: "20px"
  };

  return (
    <div className="rounded-lg shadow-lg" style={cardStyle}>
      <img src={imageUrl} alt="Card Image" style={imageStyle} />
      <div
        className=" m-[20px] flex flex-shrink-0 flex-col items-center justify-center"
        style={{ width: "400px" }}>
        <p
          className="font-roboto text-2xl font-bold  text-black"
          style={{ color: "#000", fontSize: "32px", fontWeight: "bold" }}>
          {header}
        </p>
        <p
          className="font-roboto text-base font-light text-black"
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
