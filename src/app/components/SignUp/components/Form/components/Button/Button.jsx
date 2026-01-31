import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-linear-[98deg,#504ffd_12%,#40c3fb_91%] border rounded-full w-full h-12">
      {children}
    </button>
  );
};

export default Button;
