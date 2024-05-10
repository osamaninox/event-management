import React from 'react'
import DropDownMenu from '../common/DropDownMenu';


const Header = () => {
  return (
    <div className="w-full bg-[#265253] flex-1 h-[90px] flex items-center justify-end  shadow-sm">
      <DropDownMenu />
    </div>
  );
}

export default Header