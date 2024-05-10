import React from 'react'
import Banner from '../components/common/Banner';
import galleryBanner from '../../../assets/front/images/Bannergallery.png';
import premadeTemplate from "../../../assets/front/images/12.jpg";
import weddingEvent from "../../../assets/front/images/1.jpg";
import birthdayEvent from "../../../assets/front/images/20.jpg";
import { Link } from 'react-router-dom';

const Gallery = () => {

  const birthdayData = [
    {
      img: birthdayEvent,
      event: "Birthday",
    },
    {
      img: birthdayEvent,
      event: "Birthday",
    },
    {
      img: birthdayEvent,
      event: "Birthday",
    },
    {
      img: birthdayEvent,
      event: "Birthday",
    },
    {
      img: birthdayEvent,
      event: "Birthday",
    },
    {
      img: birthdayEvent,
      event: "Birthday",
    },
  ];
  const weddingData = [
    {
      img: weddingEvent,
      event: "Wedding",
    },
    {
      img: weddingEvent,
      event: "Wedding",
    },
    {
      img: weddingEvent,
      event: "Wedding",
    },
    {
      img: weddingEvent,
      event: "Wedding",
    },
    {
      img: weddingEvent,
      event: "Wedding",
    },
    {
      img: weddingEvent,
      event: "Wedding",
    },
  ];
  return (
    <>
      <Banner imgUrl={galleryBanner} btn="true" btnText="Moments of Impact" />
      <div className="flex flex-col items-center justify-center pt-[45px]">
        <img
          src={premadeTemplate}
          alt="img"
          className="w-[200px] h-[200px] rounded-[50%] m-auto "
        />
        <h6 className="text-[12px] font-[600] mt-[15px]">Pre-made Templates</h6>
        <Link
          to="/premadetemplates"
          className="text-red-800 text-[12px] font-[600]"
        >
          Click here
        </Link>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 py-[50px]">
          <div className="md:px-[100px] border-r-2 border-[#F2D2BD]">
            <div className="flex justify-center">
              <h6 className="font-dancing text-[18px] font-[600]">
                Birthday Events
              </h6>
            </div>
            <div className="grid grid-cols-2 gap-4 py-[50px]">
              {birthdayData.map((data, i) => {
                return (
                  <div className="flex justify-center">
                    <div className="w-[220px] h-[180px] mx-[10px]">
                      <img
                        src={data.img}
                        alt={data.event}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="md:px-[100px]">
            <div className="flex justify-center font-dancing">
              <h6 className="font-dancing text-[18px] font-[600]">
                Wedding Events
              </h6>
            </div>
            <div className="grid grid-cols-2 gap-4 py-[50px]">
              {weddingData.map((data, i) => {
                return (
                  <div className="flex justify-center">
                    <div className="w-[220px] h-[180px] mx-[10px]">
                      <img
                        src={data.img}
                        alt={data.event}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery