import React from 'react'
import { Link } from 'react-router-dom';

const TemplateCard = ({ imgUrl , price}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[350px] my-[20px]">
        <div className="border border-2 border-[#000] rounded-[10px] w-[200px] h-[200px]">
          <img
            src={imgUrl}
            alt="template"
            className="object-cover h-full rounded-[10px]"
          />
        </div>
        <h6 className="text-[#000] font-bold text-[18px] capitalize py-[10px]">
          Price:Rs {price}
        </h6>
        <Link
          className="bg-[#F2D2BD] text-[#000] font-bold uppercase py-[8px] px-[30px]"
          src="/#"
        >
          Edit
        </Link>
      </div>
    </>
  );
}

export default TemplateCard;