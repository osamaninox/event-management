import React from 'react'
import { Link } from 'react-router-dom'
 
const HomeBanner = ({ imgUrl, btn, btnText,link }) => {
  return (
    <div className="banner-sec">
      <img src={imgUrl} alt="banner" className="w-full" />
      {btn ? (
        <Link
          to={link}
          className="bg-[#F2D2BD] py-[#fff] text-center font-dancing block py-[20px] text-[26px] font-[500]"
        >
          {btnText}
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomeBanner