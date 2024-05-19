import React, { useState, useEffect } from "react";
import IconsSet from "../../../../assets/front/icons/Icons";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
 const [activeMenuItem, setActiveMenuItem] = useState("Dashboard"); 
 const location = useLocation();

 const setActiveMenuFromRoute = () => {
   const pathname = location.pathname;
   if (pathname === "/dashboard") {
     setActiveMenuItem("Dashboard");
   } else if (pathname === "/dashboard/events") {
     setActiveMenuItem("Events");
   } else if (pathname === "/dashboard/objects") {
     setActiveMenuItem("objects");
   } else if (pathname === "/dashboard/userprofile") {
     setActiveMenuItem("users");
   } else if (pathname === "/dashboard/users") {
     setActiveMenuItem("users");
   }
    else if (pathname === "/dashboard/feedbacks") {
     setActiveMenuItem("feedbacks");
   }
 };
 useEffect(() => {
   setActiveMenuFromRoute();
 }, [location.pathname]); 

  return (
    <nav className="py-[30px] flex flex-column pverflow-y-hidden ">
      <ul className="w-full">
        <li
          className={`px-[10px] py-[15px] text-[#fff] font-poppins ${
            activeMenuItem === "Dashboard" ? "bg-[#143738]" : ""
          }`}
          
        >
          <Link className="flex items-center justify-between" to="/dashboard">
            <span className="flex items-center">
              <span className="w-[30px] flex justify-center mr-[10px]">
                <IconsSet.DashboardIcon />
              </span>
              Dashboard
            </span>
            <IconsSet.ChevronIcon />
          </Link>
        </li>
        <li
          className={`px-[10px] py-[15px] text-[#fff] font-poppins ${
            activeMenuItem === "Events" ? "bg-[#143738]" : ""
          }`}
          
        >
          <Link
            className="flex items-center justify-between"
            to="/dashboard/events"
          >
            <span className="flex items-center">
              <span className="w-[30px] flex justify-center mr-[10px]">
                <IconsSet.CalendarIcon />
              </span>
              Events
            </span>
            <IconsSet.ChevronIcon />
          </Link>
        </li>
        <li
          className={`px-[10px] py-[15px] text-[#fff] font-poppins  ${
            activeMenuItem === "objects" ? "bg-[#143738]" : ""
          }`}
          
        >
          <Link
            className="flex items-center justify-between"
            to="/dashboard/objects"
          >
            <span className="flex items-center">
              <span className="w-[30px] flex justify-center mr-[10px]">
                <IconsSet.ObjectIcon />
              </span>
              Objects
            </span>
            <IconsSet.ChevronIcon />
          </Link>
        </li>
        <li
          className={`px-[10px] py-[15px] text-[#fff] font-poppins  ${
            activeMenuItem === "feedbacks" ? "bg-[#143738]" : ""
          }`}
          
        >
          <Link
            className="flex items-center justify-between"
            to="/dashboard/feedbacks"
          >
            <span className="flex items-center">
              <span className="w-[30px] flex justify-center mr-[10px]">
                <IconsSet.FeedBackIcon />
              </span>
              FeedBacks
            </span>
            <IconsSet.ChevronIcon />
          </Link>
        </li>
        <li
          className={`px-[10px] py-[15px] text-[#fff] font-poppins  ${
            activeMenuItem === "users" ? "bg-[#143738]" : ""
          }`}
          
        >
          <Link
            className="flex items-center justify-between"
            to="/dashboard/users"
          >
            <span className="flex items-center">
              <span className="w-[30px] flex justify-center mr-[10px]">
                <IconsSet.UserIcon />
              </span>
              Users
            </span>
            <IconsSet.ChevronIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation