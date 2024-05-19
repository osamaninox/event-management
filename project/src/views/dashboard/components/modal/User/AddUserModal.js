// AddUserModal.js

import React, { useState } from "react";
import IconsSet from "../../../../../assets/front/icons/Icons";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import placeholder from '../../../../../assets/front/images/placeholderimg.png'

export default function AddUserModal ({ open, handleClose, ModalHeader, handleAddUser, ...props }) {
  const [userData, setUserData] = useState({
    name: "",
    Status: "active",
    user_image: placeholder,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const newUser = {
      id: Date.now(), // generate a unique ID
      ...userData,
      action: 'user'
    };
    handleAddUser(newUser);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogHeader>{ModalHeader ? ModalHeader : ''}</DialogHeader>
        <DialogBody className="">
          <div className="flex my-[20px]">
            <div className="relative m-auto">
              <div className="mt-[-60px] rounded-full shadow w-[150px] h-[150px]">
                <img
                  src={placeholder}
                  alt="Profile Pic"
                  className="object-center object-cover rounded-full w-[150px] h-[150px]"
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
                htmlFor="user_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                User Name
              </label>
              <input
                type="text"
                name="name"
                id="user_name"
                className="placeholder-[#000] bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter User Name"
                value={userData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="statustype"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Status
              </label>
              <select
                id="statustype"
                name="Status"
                value={userData.Status}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
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
          <Button className="shadow-md mx-3 flex items-center bg-[#265253] text-white px-4 py-3 rounded-lg hover:bg-[#265253] focus:outline-none focus:bg-[#265253]" onClick={handleSubmit}>
            <span>Add</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
