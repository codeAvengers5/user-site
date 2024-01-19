// eslint-disable-next-line import/no-unresolved
import React from "react";

function InputField({ width, type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ width: `${width}px`, height: "51px" }}
      className={`bg-F5F8FA rounded-small border-2 border-br_primary px-4 py-2 text-sm text-tx_secondary placeholder-tx_addtional focus:outline-none`}
    />
  );
}
export default InputField;
