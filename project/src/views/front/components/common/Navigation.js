import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../../../assets/front/logo.png'

const Navigation = () => {
  return (
    <nav className="bg-[#265253] py-[10px]">
      <div className="flex justify-center items-center">
        <ul className="flex">
          <li className="px-[15px] text-[#fff]">
            <Link to="/">Home</Link>
          </li>
          <li className="px-[15px] text-[#fff]">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-[15px] text-[#fff]">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-[15px] text-[#fff]">
            <Link to="/services">Services</Link>
          </li>
        </ul>
        <Link to="/">
          <img
            src={logo}
            className="w-[100px] h-auto rounded-[50px] mx-[30px]"
            alt="logo"
          />
        </Link>
        <ul className="flex">
          <li className="px-[15px] text-[#fff]">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="px-[15px] text-[#fff]">
            <Link to="/profile">User Profile</Link>
          </li>
          <li className="px-[15px] text-[#fff]">
            <Link to="/eventtool">Create Your Event</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation