import React from 'react'
import Banner from "../components/common/Banner";
import Bannerimg from "../../../assets/front/images/contactus.jpeg";
import ContactCard from '../components/common/ContactCard';

const Contact = () => {
  var contactData = [
    {
      contactType: "phone",
      contactNo: "0900-78601",
    },
    {
      contactType: "email",
      contactNo: "innovista.designers@gmail.com",
    },
    {
      contactType: "address",
      contactNo: "Nazimabad Road N0. 1, Nazimabad 1 Block 3 Nazimabad, Karachi Karachi City, Sindh 74600",
    },
  ];
   var followData = [
     {
       contactType: "twitter",
       contactNo: "iv.designers@twitter.com",
     },
     {
       contactType: "facebook",
       contactNo: "iv.designers@yahoo.com",
     },
     {
       contactType: "instagram",
       contactNo: "@innovista_designers",
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
              />
            );
          })}
        </div>
        <h2 className="text-[32px] text-center font-dancing font-bold">
          FIND US ON GOOGLE MAPS
        </h2>
        
      </div>
    </div>
  );
}

export default Contact