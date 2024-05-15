import React,{useState} from 'react'
import Banner from '../components/common/Banner'
import galleryBanner from '../../../assets/front/images/Bannergallery.png'
import TemplateCard from '../components/common/TemplateCard';


const PreMadeTemplate = () => {
 
  const templateData = [
    {
      templateName: galleryBanner,
      price: "50,000",
    },
    {
      templateName: galleryBanner,
      price: "40,000",
    },
    {
      templateName: galleryBanner,
      price: "90,000",
    },
    {
      templateName: galleryBanner,
      price: "50,000",
    },
    {
      templateName: galleryBanner,
      price: "100,000",
    },
  ];
  return (
    <>
      <Banner imgUrl={galleryBanner} btn="true" btnText="The Way You Want" />
      <div className='flex flex-wrap justify-center items-center py-[50px]'>
         {templateData.map((data,i) => {
           return <TemplateCard   imgUrl={data.templateName} price={data.price} />; 
         })}
      </div>  
    </>
  );
}

export default PreMadeTemplate