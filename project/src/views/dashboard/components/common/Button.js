import React from 'react'

const Button = ({ label, size, type, icon, onClick, className, ...props }) => {
  var btnSize = size;
  if (btnSize === "sm") {
    btnSize = "";
  } else if (btnSize === "md") {
    btnSize = "text-white";
  } 
  return (
    <>
      <button
        type={type}
        className={`button  px-5 py-2 rounded-md text-[#fff] mx-1 uppercase cursor-pointer flex items-center gap-1 justify-center relative overflow-hidden transition duration-200 ease-in-out bg-[#265253] border-2 border-[#265253] ${
          {btnSize}
        }`}
        onClick={onClick}
      >
        {label ? <span>{label}</span> : null}
        {icon ? icon : ""}
      </button>
    </>
  );
};

export default Button