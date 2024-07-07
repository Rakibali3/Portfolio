import React from "react";

const IconContainer = ({ SVG }) => {
  return (
    <div className="h-28 w-48 border-[#8A4CA8] border-2 tex shadow-[#8A4CA8] shadow-md flex items-center justify-center cursor-pointer text-white rounded-md dark:bg-[#1E3851] dark:border-white ease-in duration-200 hover:scale-105">
      {SVG}
    </div>
  );
};

export default IconContainer;
