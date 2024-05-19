import React, { useState } from "react";
import Testimonial from '../common/Testimonial'
import logo from "../../../../assets/front/logo.png";
import placeholder from "../../../../assets/front/images/placeholderimg.png";
import vp from "../../../../assets/front/images/vp.jpeg";
import president from "../../../../assets/front/images/president.jpeg";
import vicepresident from "../../../../assets/front/images/vp.jpeg";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import FeedBackModal from '../common/FeedBackModal';


const Testimonials = () => {
  const [openModal, setOpenModal] = useState({ feedbackModal: false, });
  

  const handleOpen = (modalType) => {
    setOpenModal({ ...openModal, [modalType]: true });
  };

  const handleClose = (modalType) => {
    setOpenModal({ ...openModal, [modalType]: false });
  };
  var settings = {

    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    dots: true,
  };
  const dummyData = [
    {
      logo: placeholder,
      Content: `InnoVista Designers exceeded all expectations in planning my birthday event! Their attention to detail,
                      creative ideas, and flawless execution made my day truly
                      special. I highly recommend them for any celebration!`,
      ClientName: `Jalisa Hope`,
    },
    {
      logo: placeholder,
      Content: `InnoVista Designers exceeded all expectations in planning my birthday event! Their attention to detail,
                      creative ideas, and flawless execution made my day truly
                      special. I highly recommend them for any celebration!`,
      ClientName: `Jalisa`,
    },
    {
      logo: placeholder,
      Content: `InnoVista Designers exceeded all expectations in planning my birthday event! Their attention to detail,
                      creative ideas, and flawless execution made my day truly
                      special. I highly recommend them for any celebration!`,
      ClientName: `Hope`,
    },
  ];
  return (
    <>
      <div className="flex justify-center">
        <div className='relative w-full'>
           <h6 className="text-[#000] text-[14px] uppercase font-[500] text-center">
            Testimonial
          </h6>
          <h4 className="text-center font-dancing text-[26px] text-[#000] capitalize">
            Client Love
          </h4>
           <div className='absolute top-0 right-0 bottom-0 flex flex-column items-center justify-center'>
             <Link  onClick={() => handleOpen('feedbackModal')} className="shadow-md mx-3 flex items-center bg-[#265253] text-white px-4 py-2 rounded-lg hover:bg-[#265253] focus:outline-none focus:bg-[#265253]">Give FeedBack</Link>
           </div>
        </div>
       
      </div>
      <div className="slider-container pb-[50px]">
        <Slider {...settings} className="">
          {dummyData.map((item, i) => {
            return (
              <div className="flex">
                <Testimonial
                  imgUrl={item.logo}
                  Content={item.Content}
                  ClientName={item.ClientName}
                />
              </div>
            );
          })}
        </Slider>
      </div>
      <FeedBackModal  open={openModal.feedbackModal}  handleClose={() => handleClose('feedbackModal')} ModalHeader="FeedBack"/>
    </>
  );
}

export default Testimonials