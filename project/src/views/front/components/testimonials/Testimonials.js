import React from 'react'
import Testimonial from '../common/Testimonial'
import logo from "../../../../assets/front/logo.png";
import vp from "../../../../assets/front/images/vp.jpeg";
import president from "../../../../assets/front/images/president.jpeg";
import vicepresident from "../../../../assets/front/images/vp.jpeg";
import Slider from "react-slick";


const Testimonials = () => {
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
      logo: vp,
      Content: `InnoVista Designers exceeded all expectations in planning my birthday event! Their attention to detail,
                      creative ideas, and flawless execution made my day truly
                      special. I highly recommend them for any celebration!`,
      ClientName: `Jalisa Hope`,
    },
    {
      logo: president,
      Content: `InnoVista Designers exceeded all expectations in planning my birthday event! Their attention to detail,
                      creative ideas, and flawless execution made my day truly
                      special. I highly recommend them for any celebration!`,
      ClientName: `Jalisa`,
    },
    {
      logo: vicepresident,
      Content: `InnoVista Designers exceeded all expectations in planning my birthday event! Their attention to detail,
                      creative ideas, and flawless execution made my day truly
                      special. I highly recommend them for any celebration!`,
      ClientName: `Hope`,
    },
  ];
  return (
    <>
      <div className="">
        <h6 className="text-[#000] text-[14px] uppercase font-[500] text-center">
          Testimonial
        </h6>
        <h4 className="text-center font-dancing text-[26px] text-[#000] capitalize">
          Client Love
        </h4>
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
    </>
  );
}

export default Testimonials