import React from 'react'
import IconsSet from "../../../../assets/front/icons/Icons";

const ContactCard = ({contactType, contactNo}) => {
   const renderIcon = () => {
     if (contactType === "phone") {
       return <IconsSet.ContactIcon />;
     } else if (contactType === "email") {
       return <IconsSet.EnvelopIcon />;
     } else if (contactType === "address") {
       return <IconsSet.AddressIcon />;
     } else if (contactType === "twitter") {
       return <IconsSet.TwitterIcon />;
     } else if (contactType === "facebook") {
       return <IconsSet.FacebookIcon />;
     } else if (contactType === "instagram") {
       return <IconsSet.InstagramIcon />;
     } else {
       return null; // Or render a default icon or placeholder if needed
     }
   };
  return (
    <div className=" border-[2px] border-[#F2D2BD] flex flex-col w-[300px] max-h-[300px] h-[200px] mx-auto rounded-md  hover:shadow-md cursor-pointer justify-center items-center px-[10px] py-[20px] ">
      <div className="text-[#000]  border border-[#000] p-[5px] border-1 rounded-[50px]">
        {renderIcon()}
      </div>
      <h6 className="text-[26px] text-[#000] font-[600] py-[5px] capitalize">
        {contactType}
      </h6>
      <p className="text-[14px] text-[#000] text-center">{contactNo}</p>
    </div>
  );
}

export default ContactCard