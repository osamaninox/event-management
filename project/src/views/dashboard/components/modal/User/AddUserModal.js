import React, {useState,useEffect} from "react";
import IconsSet from "../../../../../assets/front/icons/Icons";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import vp from '../../../../../assets/front/images/vp.jpeg'
import president from '../../../../../assets/front/images/president.jpeg'
import director from '../../../../../assets/front/images/director.jpeg'
 
export default function AddUserModal ({open, handleClose,ModalHeader, ModalMessageBody, ...props}) {
  // const [open, setOpen] = React.useState(false);
 
  // const handleOpen = () => setOpen(!open);
  const [userData, setUserData] = useState({
    fname: "John",
    lname: "Doe",
    email: "johndoe@example.com",
    address: "123 Main St",
    profilePic: vp,
  });
  return (
    <>
       <Dialog open={open} onClose={handleClose}>
        <DialogHeader>{ModalHeader ? ModalHeader : ''}</DialogHeader>
        <DialogBody>
          <div className="flex my-[20px]">
            <div className="relative  m-auto">
              <div className="mt-[-60px] rounded-full shadow w-[150px] h-[150px]">
                <img
                  src={userData.profilePic}
                  alt="Profile Pic"
                  className="object-center object-cover  rounded-full w-[150px] h-[150px]"
                />
              </div>
           
                <div className="">
                  <label
                    for="file-upload"
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
                  for="user_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  User Name
                </label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    class={`placeholder-[#000] bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    placeholder="Enter User Name"
                    required=""
              
                  />
              </div>
          
              <div className="mb-3">
              <label
                for="Status type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
               Select Status
              </label>
              <select
                id="statustype"
                // value={selectedGender}
                // onChange={handleChange}
                // disabled={!isEditing}
                class={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              >
                <option value="active">Active</option>
                <option value="inactive">InActive</option>
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
          <Button  variant="gradient" color="green" onClick={handleClose}>
            <span>Update</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}