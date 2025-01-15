import React from "react";

const Button = ({ label, className, onClick, width, ...props }) => {
  return (
    <div className="">
      <button
        style={{ width }}
        onClick={onClick}
        className={` md:py-1 border border-[#2F80ED] rounded-sm h-[40px] md:h-[40px] text-[14px] md:text-[15px]  items-center ${className}`}
        {...props}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
