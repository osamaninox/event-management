import React from "react";
import IconsSet from "../../../../assets/front/icons/Icons";
import logo from "../../../../assets/front/logo.png";
import { Link } from "react-router-dom";



function Footer() {
  return (
    <div className="bg-[#265253] w-full pt-[50px]">
      <div className="grid grid-cols-3 gap-10">
        <div className="infoSec flex flex-col justify-start items-center">
          <Link to="/">
            <img
              src={logo}
              className="w-[100px] h-auto rounded-[50px] mx-[30px] m-auto"
              alt="logo"
            />
          </Link>
          <h2 className="text-[#fff] text-[26px] font-[400] py-[20px] font-dancing">
            <i>Let's Make Magic</i>
          </h2>
          <p className="text-[#fff] text-[12px] text-center">
            Thank you for visiting! We're here to turn your vision into reality, providing seamless planning and execution for all your events.
          </p>
        </div>
        <div className="AboutSec px-[100px] border-l border-white border-r border-white mb-[50px]">
          <h6 className="text-white text-[20px] font-[500] uppercase pb-[20px]">
            Explore
          </h6>
          {/* <p className="text-[#fff] text-[12px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p> */}
          <ul className="pl-0">
            <li className="py-[10px]">
              <div className="flex items-center">
                <span className="text-[#fff] text-[16px] px-[10px]">
                  <IconsSet.ChevronIcon />
                </span>
                <Link
                  to="/about"
                  className="text-white text-[16px] font-[400] capitalize"
                >
                  About us
                </Link>
              </div>
            </li>
            <li className="py-[10px]">
              <div className="flex items-center">
                <span className="text-[#fff] text-[16px]  px-[10px]">
                  <IconsSet.ChevronIcon />
                </span>
                <Link
                  to="/services"
                  className="text-white text-[16px] font-[400] capitalize"
                >
                  Our Services
                </Link>
              </div>
            </li>
            <li className="py-[10px]">
              <div className="flex items-center">
                <span className="text-[#fff] text-[16px]  px-[10px]">
                  <IconsSet.ChevronIcon />
                </span>
                <Link
                  to="/eventtool"
                  className="text-white text-[16px] font-[400] capitalize"
                >
                  Creat your Event
                </Link>
              </div>
            </li>
            {/* <li className="py-[10px]">
              <div className="flex items-center">
                <span className="text-[#fff] text-[16px]  px-[10px]">
                  <IconsSet.ChevronIcon />
                </span>
                <Link
                  to="#"
                  className="text-white text-[16px] font-[400] capitalize"
                >
                  Blog
                </Link>
              </div>
            </li> */}
            <li className="py-[10px]">
              <div className="flex items-center">
                <span className="text-[#fff] text-[16px]  px-[10px]">
                  <IconsSet.ChevronIcon />
                </span>
                <Link
                  to="https://www.instagram.com/innovistadesigners?igsh=MWZ4bHpwYzZzODg3dg=="
                  className="text-white text-[16px] font-[400] capitalize"
                >
                  How To Use Tool
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="contactSec">
          <div className="flex items-start pb-[20px]">
            <div className="text-white border p-[5px] border-1 rounded-[50px]">
              <IconsSet.ContactIcon className="" />
            </div>
            <div className="pl-[15px]">
              <h6 className="text-white text-[20px] font-[500] uppercase">
                Contact
              </h6>
              <div className="content-sec items-center">
                <a
                  href="tel:0900-786-01"
                  className="text-[#fff] text-[12px]"
                >
                  0900-786-01
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-start pb-[20px]">
            <div className="text-white border p-[5px] border-1 rounded-[50px]">
              <IconsSet.AddressIcon className="" />
            </div>
            <div className="pl-[15px]">
              <h6 className="text-white text-[20px] font-[500] uppercase">
                Address
              </h6>
              <div className="content-sec items-center">
                <a
                  href="https://www.google.com/maps/place/1,+1+Nazimabad+Rd+Number+3,+Nazimabad+3+Block+3+Nazimabad,+Karachi,+Karachi+City,+Sindh+74600,+Pakistan/@24.9153486,67.0272546,17z/data=!3m1!4b1!4m5!3m4!1s0x3eb33f2d7f11b1b3:0x1516045415827431!8m2!3d24.9153438!4d67.0298349?entry=ttu"
                  className="text-[#fff] text-[12px]"
                >
                  Nazimabad Road N0. 1, Nazimabad 1 Block 3 Nazimabad, Karachi Karachi City, Sindh 74600
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-start pb-[20px]">
            <div className="text-white border p-[5px] border-1 rounded-[50px]">
              <IconsSet.EnvelopIcon className="" />
            </div>
            <div className="pl-[15px]">
              <h6 className="text-white text-[20px] font-[500] uppercase">
                Email Us
              </h6>
              <div className="content-sec items-center">
                <a
                  href="mailto:innovista.designers@gmail.com"
                  className="text-[#fff] text-[12px]"
                >
                  innovista.designers@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#dfdfdf] mx-[10px]">
        <div className="flex justify-between py-[25px] items-center">
          <div className="w-full text-center">
            <p className="mb-0 text-[#fff] text-[12px]">
              Copyright © 2024 Innovista Designers
            </p>
          </div>
          <div className="flex">
            <Link to="https://www.instagram.com/innovistadesigners?igsh=MWZ4bHpwYzZzODg3dg==" className="px-[5px] text-[#fff]">
              <IconsSet.InstagramIcon className="px-[5px]" />
            </Link>
            <Link to="" className="px-[5px] text-[#fff]">
              <IconsSet.FacebookIcon className="" />
            </Link>
            <Link to="" className="px-[5px] text-[#fff]">
              <IconsSet.TwitterIcon className="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
