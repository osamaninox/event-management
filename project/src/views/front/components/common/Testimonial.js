import React from 'react'


const Testimonial = ({imgUrl, Content , ClientName}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[500px] mx-auto mt-[25px]">
        <div className=" mb-[15px] text-center m-auto ">
          <img
            src={imgUrl}
            alt="testimonial img"
            className="w-[150px] h-[150px] rounded-full shadow-md  object-center object-cover"
          />
        </div>
        <p className="text-center text-[14px] text-[#000] py-[20px]">
          {Content}
        </p>
        <h6 className="text-center text-[14px] capitalize font-bold">{ClientName}</h6>
      </div>
    </>
  );
}

export default Testimonial