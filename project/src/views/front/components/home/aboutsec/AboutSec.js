import React from 'react'
import aboutImg from '../../../../../assets/front/images/view.PNG'


const AboutSec = ({content, imgUrl}) => {
  return (
    <div className="about-sec pt-[50px] pb-[200px] px-[20px]">
      <div className="flex m-auto justify-content-center">
        <img src={imgUrl} alt="about img" className="" />
          <div className="flex flex-column items-end ml-[-80px] mb-[-150px]">
            <div className="about-content relative  w-[450px] text-[16px] p-[30px] font-[400] font-poppins h-[250px] justify-center text-center  flex bg-[#F2D2BD] items-center">
              {content}
            </div>
          </div>
      </div>
    </div>
  );
}

export default AboutSec