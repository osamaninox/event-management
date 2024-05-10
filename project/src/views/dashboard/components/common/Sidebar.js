import React from 'react'
import Navigation from '../../../dashboard/components/common/Navigation'
import Logo from "../../../dashboard/components/common/Logo";


const Sidebar = () => {
 
  return (
    <div className="fixed flex flex-col basis-[300px] w-[300px] bg-[#265253] h-full py-[20px] z-11">
      <div className="flex justify-center border-b border-[#fff] pb-[20px]">
        <Logo />
      </div>
      <Navigation />
    </div>
  );
}

export default Sidebar