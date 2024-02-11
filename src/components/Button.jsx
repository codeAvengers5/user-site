import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, color, size, ...props }) => {
  let buttonSizeClass = "";

  if (size === "small") {
    buttonSizeClass = "h-[26px] w-[74px] px-4 text-sm rounded-small";
  } else if (size === "large") {
    buttonSizeClass = " w-[470px] h-12 px-10 rounded-large";
  } else {
    buttonSizeClass = "h-[60px] w-[206px] px-15 rounded-small";
  }

  return (
    <button
      className={`inline-flex items-center justify-center ${buttonSizeClass} flex-shrink-0 flex-wrap gap-4 border border-none bg-${color}
       text-white hover:${color} hover:opacity-80 focus:outline-none  focus:ring-meke-500 focus:ring-offset-0`}
      {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["small", "default", "large"])
};

Button.defaultProps = {
  size: "default"
};

export default Button;
