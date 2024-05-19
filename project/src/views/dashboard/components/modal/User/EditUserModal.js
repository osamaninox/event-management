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
import vp from "../../../../../assets/front/images/vp.jpeg";
import placeholder from '../../../../../assets/front/images/placeholderimg.png'
import axios from "axios";

export default function EditUserModal({
  open,
  handleClose,
  ModalHeader,
  selectedUserData,
  ModalMessageBody,
  onUpdateHandler,
  index,
  ...props
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    profilePic: placeholder,
    role: "",
  });
  //  const [selectedUserData, setSelectedUserData] = useState(selectedUserData1);

  useEffect(() => {
    if (selectedUserData && selectedUserData .id) {
      setUserData({
        id: selectedUserData.id,
        name: selectedUserData.name,
        profilePic: selectedUserData.user_image || vp,
        role: selectedUserData.role,
      });
      setIsEditing(true);
    }
  }, [selectedUserData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserData({ ...userData, profilePic: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (data) => {
    if(isEditing){
      await updateUser ();
    }
    else{
      await createUser()
    }  
    handleClose();
  };
  
  const updateUser = async() => {
    try {
       await axios.post(
        "http://localhost:8000/api/user/update",
        {
          _id: selectedUserData.id,
          name: userData.name,
          role: userData.role,
          img: userData.profilePic
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
       selectedUserData.onUpdateHandler(userData,  selectedUserData.index);
      } catch (error) {
      // Show invalid credentials error to user
      console.error(error);
    }
  }
  const createUser = async() => {
    try {
       const response = await axios.post(
        "http://localhost:8000/api/user/",
        {
          _id: selectedUserData.id,
          name: userData.name,
          role: userData.role,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
       selectedUserData.onCreateHandler(response.data);
       
      } catch (error) {
      // Show invalid credentials error to user
      console.error(error);
    }
  }
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogHeader>{ModalHeader ? ModalHeader : ""}</DialogHeader>
        <DialogBody>
          <div className="flex my-[20px]">
            <div className="relative m-auto">
              <div className="mt-[-60px] rounded-full shadow w-[150px] h-[150px]">
                <img
                  src={userData.profilePic}
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
                  hidden
                  onChange={handleFileChange}
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
                value={userData.name}
                onChange={handleChange}
                className="placeholder-[#000] bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter User Name"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="status"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Status
              </label>
              <select
                name="role"
                id="status"
                value={userData.role}
                onChange={handleChange}
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
            <span>Update</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
