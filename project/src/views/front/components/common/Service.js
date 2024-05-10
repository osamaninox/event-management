import React from 'react'
import { Link } from 'react-router-dom';

const Service = ({ imgUrl, Title, Details, link }) => {
  return (
    <div className="md:max-w-[300px] mx-[20px] my-[20px]">
      <Link to={link} className="flex justify-center flex-col items-center">
        <img
          src={imgUrl}
          alt="img"
          className="w-[100px] h-[100px] rounded-[50px] shadow-md"
        />
        <h6 className="font-[500] text-[#000] text-[18px] font-poppins py-[10px]">
          {Title}
        </h6>
        <p className="font-[500] text-[#000] text-[18px] font-dancing text-center">
          {Details}
        </p>
      </Link>
    </div>
  );
};

export default Service