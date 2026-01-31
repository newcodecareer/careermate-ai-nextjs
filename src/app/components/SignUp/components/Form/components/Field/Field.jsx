import React from "react";

const Field = ({label, placeholder}) => {
  return (
    <div className="">
      <div className="mb-2">
        <label className="text-[#5c5c5c]">{label}</label>
      </div>
      <div >
          <input
            placeholder={placeholder}
            className="border-2 border-gray-200 rounded-full px-4 w-full h-12"
          />
      </div>
    </div>
  );
};

export default Field;
