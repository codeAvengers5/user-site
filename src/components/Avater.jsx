import React from "react";
import { FaUser } from "react-icons/fa6";

const Avatar = ({
  img,
  alt,
  square,
  border,
  initials,
  width = 50,
  height = 50
}) => {
  return (
    <ImageOptions
      initials={initials}
      square={square}
      border={border}
      width={width}
      height={height}
    />
  );
};

const ImageOptions = ({
  square,
  border,
  initials,
  width,
  height
}) => {
  if (initials) {
    return (
      <div
        className={`flex items-center justify-center bg-red-400 text-base font-extrabold uppercase text-tx_tertiary md:text-heading_2 ${
          square ? "rounded" : "rounded-full"
        } ${border ? "ring-2 ring-br_secondary" : ""}`}
        style={{ width, height }}>
        {initials}
      </div>
    );
  } else {
    return (
      <div
        className={`flex items-center justify-center bg-red-400 ${
          square ? "rounded" : "rounded-full"
        } ${border ? "ring-2 ring-bt_primary" : ""}`}
        style={{ width, height }}>
        <FaUser size={30} color="tx_secondary" />
      </div>
    );
  }
};

export default Avatar;
