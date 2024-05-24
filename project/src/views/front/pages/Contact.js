import React from 'react'
import Banner from "../components/common/Banner";
import Bannerimg from "../../../assets/front/images/contactus.jpeg";
import ContactCard from '../components/common/ContactCard';
import { Link } from 'react-router-dom';

const Contact = () => {
  var contactData = [
    {
      contactType: "phone",
      contactNo: "0345-1234-567",
      src: "tel:0345-1234-567",
    },
    {
      contactType: "email",
      contactNo: "innovista.designers@gmail.com",
      src: "mailto:innovista.designers@gmail.com",
    },
    {
      contactType: "address",
      contactNo: "Nazimabad Road N0. 1, Nazimabad 1 Block 3 Nazimabad, Karachi Karachi City, Sindh 74600",
      src:"https://www.google.com/maps/place/1,+1+Nazimabad+Rd+Number+3,+Nazimabad+3+Block+3+Nazimabad,+Karachi,+Karachi+City,+Sindh+74600,+Pakistan/@24.9153486,67.0272546,17z/data=!3m1!4b1!4m5!3m4!1s0x3eb33f2d7f11b1b3:0x1516045415827431!8m2!3d24.9153438!4d67.0298349?entry=ttu",
    },
  ];
   var followData = [
     {
       contactType: "twitter",
       contactNo: "iv.designers@twitter.com",
       src: "mailto:iv.designers@twitter.com"
     },
     {
       contactType: "facebook",
       contactNo: "iv.designers@yahoo.com",
       src: "mailto:iv.designers@yahoo.com",
     },
     {
       contactType: "instagram",
       contactNo: "@innovista_designers",
       src: "https://www.instagram.com/@innovista_designers/",
     },
   ];
  return (
    <div>
      <Banner
        imgUrl={Bannerimg}
        btn="true"
        btnText="Feel free to contact Us"
        link=""
      />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 py-[50px]">
          {contactData.map((data, i) => {
            return (
              <ContactCard
                contactType={data.contactType}
                contactNo={data.contactNo}
                src={data.src}
              />
            );
          })}
        </div>
        <h2 className="text-[32px] text-center font-dancing font-bold">
          Follow Us On
        </h2>
        <div className="grid grid-cols-3 py-[50px]">
          {followData.map((data, i) => {
            return (
              <ContactCard
                contactType={data.contactType}
                contactNo={data.contactNo}
                src={data.src}
              />
            );
          })}
        </div>
        {/* <h2 className="text-[32px] text-center font-dancing font-bold">
          FIND US ON GOOGLE MAPS
        </h2> */}
        
      </div>
    </div>
  );
}

export default Contact