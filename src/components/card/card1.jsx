import React from "react";

const Card1 = ({ imageUrl, header, place }) => {
  const imageStyle = {
    width: "426px",
    height: "426px",
    objectFit: "cover"
  };

  return (
    <div
      className="jjustify-center flex max-w-[500px] flex-col items-center rounded-lg bg-[#FFF8F8] shadow-lg"
      style={{ boxShadow: "0px 10px 40px 0px #FF00001A" }}>
      <div className="mb-5 mt-10 flex w-full  flex-col items-center md:h-[548px] md:w-[400px]">
        <img src={imageUrl} alt="pho" className="h-full w-full object-cover" />
        <div className="mt-[30px] flex h-[40px] w-[200px] flex-shrink-0 flex-col items-center justify-center md:h-[56px] md:w-[404px]">
          <p
            className="font-primary  text-medium  font-bold text-black md:text-heading_2"
            style={{ color: "#000" }}>
            {header}
          </p>
          <p
            className="mb-3 font-secondary text-base font-light text-black"
            style={{ color: "#000" }}>
            {place}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card1;
