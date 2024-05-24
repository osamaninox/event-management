import React from "react";
import Header from "../views/dashboard/components/header/Header";
import Footer from "../views/dashboard/components/footer/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "../views/dashboard/components/common/Sidebar";

const DashboardLayout = ({}) => {
  const userName = localStorage.getItem("userName");
  return (
    <div className="dashboard-body flex h-screen  w-full bg-[#f3f4f6]">
      <Sidebar />
      <div className="ml-[300px] w-full">
        <div className="sticky top-0 z-20">
          <Header />
          <div className="shadow-sm bg-[#fff]  top-20 py-[10px] px-[10px] mb-[10px]">
            <h2 className="flex items-center justify-between gap-5 flex-wrap font-[500] text-[#000] text-[18px]">
              Welcome! {userName}
            </h2>
          </div>
        </div>
        <main className="">
          <div className="px-[20px] py-[20px]">
            <Outlet />
          </div>
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default DashboardLayout;
