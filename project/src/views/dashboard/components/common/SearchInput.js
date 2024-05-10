import React from 'react'
import IconsSet from '../../../../assets/front/icons/Icons';

const SearchInput = () => {
  return (
    <>
      <div className="">
        <div className="flex">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 shadow-md rounded-lg border focus:outline-none focus:border-[#265253] focus:ring-[#265253]"
          />
          <button className="shadow-md mx-3 flex items-center bg-[#265253] text-white px-4 py-2 rounded-lg hover:bg-[#265253] focus:outline-none focus:bg-[#265253]">
            <IconsSet.SearchIcon /> Search
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchInput