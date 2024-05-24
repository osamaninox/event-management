import React from 'react'
import IconsSet from "../../../../assets/front/icons/Icons";
import { Link } from 'react-router-dom';
// import fb from "../../../../assets/front/images/fb.png";

const ContactCard = ({contactType, contactNo,src}) => {
   const renderIcon = () => {
     if (contactType === "phone") {
       return <IconsSet.ContactIconSolid />;
     } else if (contactType === "email") {
       return <IconsSet.EnvelopIconSolid />;
     } else if (contactType === "address") {
       return <IconsSet.AddressIconSolid />;
     } else if (contactType === "twitter") {
       return <IconsSet.TwitterIcon />;
     } else if (contactType === "facebook") {
       return  <IconsSet.FacebookIconSolid />;
     } else if (contactType === "instagram") {
       return <IconsSet.InstagramIconSolid />;
     } else {
       return null; // Or render a default icon or placeholder if needed
     }
   };
  return (
    <Link to={src} className=" border-[2px] border-[#F2D2BD] flex flex-col w-[300px] max-h-[300px] h-[200px] mx-auto rounded-md  hover:shadow-md cursor-pointer justify-center items-center px-[10px] py-[20px] ">
       <div>
          <div className="text-[#000] w-[40px] h-[40px] m-auto border border-[#000] p-[5px] border-1 rounded-[50px]">
             <div className='flex justify-center items-center flex-column'>
              {renderIcon()}
             </div>
          </div>
          <h6 className="text-[26px] text-[#000] font-[600] py-[5px] capitalize max-h-[50px] h-[50px]">
            {contactType}
          </h6>
       </div>
      <p className="text-[14px] text-[#000] text-center">{contactNo}</p>
    </Link>
  );
}

export default ContactCard