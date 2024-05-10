import React from 'react'

const PlanEvent = ({ imgUrl, eventType, eventDetails, imgPositionSec }) => {
  return (
    <>
      {imgPositionSec ? (
        <div class="grid grid-cols-2 gap-4">
          <div className="flex flex-col justify-center items-center md:w-[400px] mx-auto  ">
            <h6 className="uppercase text-[#000] font-[500] pb-[5px]">
              Plan Your
            </h6>
            <h4 className="text-[#000] font-[500] text-[26px] pb-[5px]">
              {eventType}
            </h4>
            <div className="w-[3px] h-[60px] bg-[#000]"></div>
            <p className="text-center text-[26px] font-dancing w-[400px] mx-auto">
              {eventDetails}
            </p>
          </div>
          <div className="w-[400px] mr-0">
            <img src={imgUrl} alt="about img" className="h-auto w-full" />
          </div>
        </div>
      ) : (
        <div class="grid grid-cols-2 gap-4">
          <div className="w-[400px]  mx-auto">
            <img src={imgUrl} alt="about img" className="h-auto w-full" />
          </div>
          <div className="flex flex-col justify-center items-center md:w-[400px] mr-0">
            <h6 className="uppercase text-[#000] font-[500] pb-[5px]">
              Plan Your
            </h6>
            <h4 className="text-[#000] font-[500] text-[26px] pb-[5px]">
              {eventType}
            </h4>
            <div className="w-[3px] h-[60px] bg-[#000]"></div>
            <p className="text-center text-[26px] font-dancing w-[400px] mx-auto">
              {eventDetails}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PlanEvent