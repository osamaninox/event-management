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
import placeholder from "../../../../../assets/front/images/placeholderimg.png";
import axios from "axios";

export default function AddUserModal({
  open,
  handleClose,
  ModalHeader,
  handleAddUser,
  ...props
}) {
  const [userData, setUserData] = useState({
    name: "",
    active: "active",
    file: placeholder,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    formData.append("active", userData.active);
    formData.append("fileBase64", userData.file);
    console.log("formData>>>>", userData);
    axios
      .post("http://localhost:8000/api/user/register", formData)
      .then((response) => {
        console.log(response.data);
        handleClose();
        setUserData({
          name: "",
          active: "active",
          file: placeholder,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserData({ ...userData, file: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogHeader>{ModalHeader ? ModalHeader : ""}</DialogHeader>
        <DialogBody className="">
          <div className="flex my-[20px]">
            <div className="relative m-auto">
              <div className="mt-[-60px] rounded-full shadow w-[150px] h-[150px]">
                <img
                  src={userData.file}
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
                <input
                  id="file-upload"
                  type="file"
                  onChange={handleFileChange}
                  hidden
                />
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
                htmlFor="user_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="user_name"
                className="placeholder-[#000] bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter User Name"
                value={userData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="user_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="user_name"
                className="placeholder-[#000] bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter User Name"
                value={userData.password}
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
                name="active"
                value={userData.active}
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
          <Button
            onClick={handleSubmit}
            className="shadow-md mx-3 flex items-center bg-[#265253] text-white px-4 py-3 rounded-lg hover:bg-[#265253] focus:outline-none focus:bg-[#265253]"
          >
            <span>Add</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
