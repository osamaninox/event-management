import React from 'react'

const TeamMember = ({imgUrl, name, details, designation, designationWithName}) => {
  return (
    <>
      <div
        className={`flex justify-center flex-col items-center ${
          designationWithName ? "w-[500px]" : "w-full"
        } m-auto`}
      >
        {designationWithName ? (
          ""
        ) : (
          <h3 className="font-[500] text-[#000] text-[18px] font-poppins py-[10px] uppercase">
            {designation}
          </h3>
        )}

        <img
          src={imgUrl}
          alt="img"
          className="w-[200px] h-[200px] rounded-full m-auto object-cover object-center"
        />
        <h6 className="font-[600] text-[#000] text-[18px] font-poppins py-[10px] uppercase h-[50px]">
          {designationWithName ? (
            <span className="flex text-[#000]">
              {designation}: {name}
            </span>
          ) : (
            <span>{name}</span>
          )}
        </h6>
        <p
          className={`text-[#000] text-[14px] font-poppins text-center ${
            designationWithName ? "w-[500px]" : "w-full"
          } m-auto`}
        >
          {details}
        </p>
      </div>
    </>
  );
}

export default TeamMember