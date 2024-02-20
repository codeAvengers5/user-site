import React from "react";

const Button = ({ children, color, size = "default", ...props }) => {
  let buttonSizeClass = "";

  if (size === "small") {
    buttonSizeClass = "h-[26px] w-full px-4 text-sm rounded-small";
  } else if (size === "large") {
    buttonSizeClass = " w-full h-12 px-10 rounded-large";
  } else {
    buttonSizeClass = "h-[60px] w-full px-15 rounded-small";
  }

  return (
    <button
      className={`inline-flex items-center justify-center ${buttonSizeClass} flex-shrink-0 flex-wrap gap-3 border border-none bg-${color}
       text-white hover:${color} hover:opacity-80 focus:outline-none  focus:ring-meke-500 focus:ring-offset-0`}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
