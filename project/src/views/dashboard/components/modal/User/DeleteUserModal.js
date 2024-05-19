// DeleteUserModal.js

import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";

export default function DeleteUserModal ({open, handleClose, ModalHeader, ModalMessageBody, handleDelete,selectedUserData, ...props}) {
  const userId = selectedUserData?.id;
  console.log(userId);
   const [userData, setUserData] = useState([]);
  const handleDeleteUser  = (obj) => {
    //objectId
    //debugger;
    axios
      .create({})
      .delete(`http://localhost:8000/api/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log("useEffect objects API response", response.data);
        console.log(response.data);
        setUserData((prevData) => prevData.filter((user) => user.id !== selectedUserData));
         handleClose();
       
      })
      .catch((error) => {
        console.log("useEffect objects API error", error);
        console.error(error);
      });
  }
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogHeader>{ModalHeader ? ModalHeader : ''}</DialogHeader>
        <DialogBody>
          {ModalMessageBody && <Typography variant="paragraph">{ModalMessageBody}</Typography>}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleClose}
            className="mr-1"
          >
            <span>No</span>
          </Button>
          <Button onClick={handleDeleteUser} className="shadow-md mx-3 flex items-center bg-[#265253] text-white px-4 py-3 rounded-lg hover:bg-[#265253] focus:outline-none focus:bg-[#265253]">
            <span>Yes</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
