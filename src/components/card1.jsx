import React from "react";

const Card1 = ({ imageUrl, header, place }) => {
  const imageStyle = {
    width: "426px",
    height: "426px",
    objectFit: "cover"
  };

  return (
    <div className="max-w-[500px] rounded-lg shadow-lg flex flex-col jjustify-center items-center bg-[#FFF8F8]"
    style= {{ boxShadow: "0px 10px 40px 0px #FF00001A"}}>

      <div className="flex flex-col items-center md:w-[400px]  md:h-[548px] mb-5 mt-10 w-full">
        <img src={imageUrl} alt="pho" className="w-full h-full object-cover" />
        <div
          className="mt-[30px] flex flex-shrink-0 flex-col items-center justify-center w-[200px] md:w-[404px] h-[40px] md:h-[56px]"
        >
          <p
            className="font-roboto  font-bold  text-black text-[18px] md:text-[24px]"
            style={{ color: "#000" }}>
            {header}
          </p>
          <p
            className="mb-3 font-roboto font-light text-black text-[20px]"
            style={{ color: "#000" }}>
            {place}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card1;
