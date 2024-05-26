import React,{useState} from 'react'
import Banner from '../components/common/Banner';
import galleryBanner from '../../../assets/front/images/Bannergallery.png';
import premadeTemplate from "../../../assets/front/images/12.jpg";
import weddingEvent1 from "../../../assets/front/images/1.jpg";
import weddingEvent2 from "../../../assets/front/images/2.jpg";
import weddingEvent3 from "../../../assets/front/images/3.jpg";
import weddingEvent4 from "../../../assets/front/images/4.jpg";
import weddingEvent5 from "../../../assets/front/images/5.jpg";
import weddingEvent6 from "../../../assets/front/images/6.jpg";
import weddingEvent7 from "../../../assets/front/images/7.jpg";
import weddingEvent8 from "../../../assets/front/images/9.jpg";

import birthdayEvent1 from "../../../assets/front/images/12.jpg";
import birthdayEvent2 from "../../../assets/front/images/13.jpg";
import birthdayEvent3 from "../../../assets/front/images/15.jpg";
import birthdayEvent4 from "../../../assets/front/images/16.jpg";
import birthdayEvent5 from "../../../assets/front/images/17.jpg";
import birthdayEvent6 from "../../../assets/front/images/19.jpg";
import birthdayEvent7 from "../../../assets/front/images/20.jpg";
import { Link } from 'react-router-dom';
import TemplateModal from '../components/common/TemplateModal';

const Gallery = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = (imgUrl) => {
    setOpenModal(true);
    setSelectedImage(imgUrl);
  
  };

  const handleCloseModal = () => {
    setSelectedImage('');
    setOpenModal(false);
  };
  const birthdayData = [
    {
      img: birthdayEvent1,
      event: "Birthday",
    },
    {
      img: birthdayEvent2,
      event: "Birthday",
    },
    {
      img: birthdayEvent3,
      event: "Birthday",
    },
    {
      img: birthdayEvent4,
      event: "Birthday",
    },
    {
      img: birthdayEvent5,
      event: "Birthday",
    },
    {
      img: birthdayEvent6,
      event: "Birthday",
    },
    {
      img: birthdayEvent7,
      event: "Birthday",
    },
  ];
  const weddingData = [
    {
      img: weddingEvent1,
      event: "Wedding",
    },
    {
      img: weddingEvent2,
      event: "Wedding",
    },
    {
      img: weddingEvent3,
      event: "Wedding",
    },
    {
      img: weddingEvent4,
      event: "Wedding",
    },
    {
      img: weddingEvent5,
      event: "Wedding",
    },
    {
      img: weddingEvent6,
      event: "Wedding",
    },
    {
      img: weddingEvent7,
      event: "Wedding",
    },
    {
      img: weddingEvent8,
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
                    <div className="w-[220px] h-[180px] mx-[10px] hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer" >
                      <img
                        src={data.img}
                        alt={data.event}
                        className="w-full h-full"
                          onClick={(e) => {
                          handleOpenModal(data.img);
                          e.stopPropagation(); // Stop event propagation if needed
                        }}
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
                    <div className="w-[220px] h-[180px] mx-[10px] hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                      <img
                        src={data.img}
                        alt={data.event}
                        className="w-full h-full object-cover"
                          onClick={(e) => {
                          handleOpenModal(data.img);
                          e.stopPropagation(); // Stop event propagation if needed
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <TemplateModal open={openModal}  handleClose={handleCloseModal} imageUrl={selectedImage}/>
    </>
  );
}

export default Gallery