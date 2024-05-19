import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import IconsSet from "../../../../../assets/front/icons/Icons";

import frame1 from "../../../../../assets/tool/Shapes/Frames/FRAME1.png";
import frame2 from "../../../../../assets/tool/Shapes/Frames/FRAME2.png";
import frame3 from "../../../../../assets/tool/Shapes/Frames/FRAME3.png";
import frame4 from "../../../../../assets/tool/Shapes/Frames/FRAME4.png";
import frame5 from "../../../../../assets/tool/Shapes/Frames/FRAME5.png";
import frame6 from "../../../../../assets/tool/Shapes/Frames/FRAME6.png";
import frame7 from "../../../../../assets/tool/Shapes/Frames/FRAME7.png";
import frame8 from "../../../../../assets/tool/Shapes/Frames/FRAME8.png";

import l1 from "../../../../../assets/tool/Shapes/Lines/L1.png";
import l2 from "../../../../../assets/tool/Shapes/Lines/L2.png";
import l3 from "../../../../../assets/tool/Shapes/Lines/L3.png";
import l4 from "../../../../../assets/tool/Shapes/Lines/L4.png";
import l5 from "../../../../../assets/tool/Shapes/Lines/L5.png";
import l6 from "../../../../../assets/tool/Shapes/Lines/L6.png";
import l7 from "../../../../../assets/tool/Shapes/Lines/L7.png";

import rec1 from "../../../../../assets/tool/Shapes/Rectangle/REC1.png";
import rec2 from "../../../../../assets/tool/Shapes/Rectangle/REC2.png";
import rec3 from "../../../../../assets/tool/Shapes/Rectangle/REC3.png";
import rec4 from "../../../../../assets/tool/Shapes/Rectangle/REC4.png";
import rec5 from "../../../../../assets/tool/Shapes/Rectangle/REC5.png";

import wimg1 from "../../../../../assets/tool/Wedding/Chairsandsofas/CHAIR-1.png";
import wimg2 from "../../../../../assets/tool/Wedding/Chairsandsofas/CHAIR2.png";
import wimg3 from "../../../../../assets/tool/Wedding/Chairsandsofas/CHAIR3.png";
import wimg4 from "../../../../../assets/tool/Wedding/Chairsandsofas/CHAIR4.png";
import wimg5 from "../../../../../assets/tool/Wedding/Chairsandsofas/CHAIR5.png";
import wimg6 from "../../../../../assets/tool/Wedding/Chairsandsofas/CHAIR6.png";
import wimg7 from "../../../../../assets/tool/Wedding/Chairsandsofas/CHAIR7.png";
import wimg8 from "../../../../../assets/tool/Wedding/Chairsandsofas/CHAIR8.png";
import wimg9 from "../../../../../assets/tool/Wedding/Chairsandsofas/CHAIR9.png";
import wimg10 from "../../../../../assets/tool/Wedding/Chairsandsofas/CHAIR10.png";
import wimg11 from "../../../../../assets/tool/Wedding/Chairsandsofas/CHAIR11.png";

import std1 from "../../../../../assets/tool/Wedding/DecorationVaseorflowerstands/STAND1.png";
import std2 from "../../../../../assets/tool/Wedding/DecorationVaseorflowerstands/STAND2.png";
import std3 from "../../../../../assets/tool/Wedding/DecorationVaseorflowerstands/STAND3.png";
import std4 from "../../../../../assets/tool/Wedding/DecorationVaseorflowerstands/STAND4.png";
import std5 from "../../../../../assets/tool/Wedding/DecorationVaseorflowerstands/STAND5.png";
import std6 from "../../../../../assets/tool/Wedding/DecorationVaseorflowerstands/STAND6.png";
import std7 from "../../../../../assets/tool/Wedding/DecorationVaseorflowerstands/STAND7.png";
import std8 from "../../../../../assets/tool/Wedding/DecorationVaseorflowerstands/STAND8.png";

import vse1 from "../../../../../assets/tool/Wedding/DecorationVaseorflowerstands/VASE1.png";
import vse2 from "../../../../../assets/tool/Wedding/DecorationVaseorflowerstands/VASE2.png";
import vse3 from "../../../../../assets/tool/Wedding/DecorationVaseorflowerstands/VASE3.png";
import vse4 from "../../../../../assets/tool/Wedding/DecorationVaseorflowerstands/VASE4.png";
import vse5 from "../../../../../assets/tool/Wedding/DecorationVaseorflowerstands/VASE5.png";

import b1 from "../../../../../assets/tool/Birthday/Balloons/B1.png";
import b2 from "../../../../../assets/tool/Birthday/Balloons/B2.png";
import b3 from "../../../../../assets/tool/Birthday/Balloons/B3.png";
import b4 from "../../../../../assets/tool/Birthday/Balloons/B4.png";
import b5 from "../../../../../assets/tool/Birthday/Balloons/B5.png";
import b6 from "../../../../../assets/tool/Birthday/Balloons/B6.png";
import b7 from "../../../../../assets/tool/Birthday/Balloons/B7.png";
import b8 from "../../../../../assets/tool/Birthday/Balloons/B8.png";
import b9 from "../../../../../assets/tool/Birthday/Balloons/B9.png";
import b10 from "../../../../../assets/tool/Birthday/Balloons/B10.png";
import b11 from "../../../../../assets/tool/Birthday/Balloons/B11.png";
import b12 from "../../../../../assets/tool/Birthday/Balloons/B12.png";
import b13 from "../../../../../assets/tool/Birthday/Balloons/B13.png";
import b14 from "../../../../../assets/tool/Birthday/Balloons/B14.png";
import b15 from "../../../../../assets/tool/Birthday/Balloons/B15.png";
import b16 from "../../../../../assets/tool/Birthday/Balloons/B16.png";
import b17 from "../../../../../assets/tool/Birthday/Balloons/B17.png";
import b18 from "../../../../../assets/tool/Birthday/Balloons/B18.png";
import b19 from "../../../../../assets/tool/Birthday/Balloons/B19.png";
import b20 from "../../../../../assets/tool/Birthday/Balloons/B20.png";
import b21 from "../../../../../assets/tool/Birthday/Balloons/B21.png";
import b22 from "../../../../../assets/tool/Birthday/Balloons/B22.png";
import b23 from "../../../../../assets/tool/Birthday/Balloons/B23.png";
import b24 from "../../../../../assets/tool/Birthday/Balloons/B24.png";
import b25 from "../../../../../assets/tool/Birthday/Balloons/B25.png";
import b26 from "../../../../../assets/tool/Birthday/Balloons/B26.png";
import b27 from "../../../../../assets/tool/Birthday/Balloons/B27.png";
import b28 from "../../../../../assets/tool/Birthday/Balloons/B28.png";
import b29 from "../../../../../assets/tool/Birthday/Balloons/B29.png";
import b30 from "../../../../../assets/tool/Birthday/Balloons/B30.png";

import c1 from "../../../../../assets/tool/Birthday/Chairs/char-one.png";
import c2 from "../../../../../assets/tool/Birthday/Chairs/chair-two.png";
import c3 from "../../../../../assets/tool/Birthday/Chairs/chair-three.png";
import c4 from "../../../../../assets/tool/Birthday/Chairs/chair-four.png";
import axios from "axios";

const AddObjectModal = ({
  open,
  handleClose,
  ModalHeader,
  ModalMessageBody,
  ...props
}) => {
  const [objData, setObjData] = useState({
    objPic: b1,
  });

  const [title, setObjectName] = useState("");

  const handleObjectNameChange = (event) => {
    setObjectName(event.target.value);
  };

  const [type, setStatusType] = useState("Wedding");

  const handleStatusTypeChange = (event) => {
    setStatusType(event.target.value);
  };

  const [price, setPriceType] = useState("");

  const handlePriceChange = (event) => {
    setPriceType(event.target.value);
  };

  const createObject = async () => {
    console.log("useEffect objects API", type);
    const response = await axios.create({}).post(
      `http://localhost:8000/api/object-library`,
      {
        title,
        type,
        price,
        objectImagePath: objData.objPic,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (response.status === 201) {
      handleClose();
    } else {
      console.log("Error in creating object", response.data);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogHeader>{ModalHeader ? ModalHeader : ""}</DialogHeader>
      <DialogBody>
        <div className="flex my-[20px]">
          <div className="relative  m-auto">
            <div className="mt-[-60px] rounded-full shadow w-[150px] h-[150px]">
              <img
                src={objData.objPic}
                alt="Profile Pic"
                className="object-center object-cover  rounded-full w-[150px] h-[150px]"
              />
            </div>

            <div className="">
              <label
                htmlFor="file-upload"
                className="absolute border-[3px] py-[1px] px-[2px] shadow-md bottom-0 w-[35px] h-[35px] bg-[#265253] text-[#fff] rounded-full right-[0px]"
              >
                <span className="text-center">
                  <IconsSet.CameraIcon />
                </span>
              </label>
              <input id="file-upload" type="file" hidden />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-3">
            <label
              htmlFor="object_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Object Name
            </label>
            <input
              type="text"
              name="object_name"
              id="object_name"
              className={`placeholder-[#000] bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="Enter Object Name"
              required=""
              value={title}
              onChange={handleObjectNameChange}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="Status type"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select Type
            </label>
            <select
              value={type}
              onChange={handleStatusTypeChange}
              id="statustype"
              // value={selectedGender}
              // onChange={handleChange}
              // disabled={!isEditing}
              className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            >
              <option value="wedding">Wedding</option>
              <option value="birthday">Birthday</option>
              <option value="birthday">Shape</option>
            </select>
          </div>
          <div className="mb-3">
            <label
              htmlFor="object_price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Object Price
            </label>
            <input
              value={price}
              onChange={handlePriceChange}
              type="number"
              name="object_price"
              id="object_price"
              className={`placeholder-[#000] bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="Enter ObjectPrice"
              required=""
            />
          </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleClose}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button className="shadow-md mx-3 flex items-center bg-[#265253] text-white px-4 py-3 rounded-lg hover:bg-[#265253] focus:outline-none focus:bg-[#265253]" onClick={createObject}>
          <span>Update</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default AddObjectModal;
