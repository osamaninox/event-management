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
 
export default function DeleteEventModal ({open, handleClose,ModalHeader, ModalMessageBody,eventId, ...props}) {
  const [eventData, setEventData] = useState([]);
  console.log(eventId);
  const eventIdData = eventId?.id;
  console.log(eventIdData);
  // const handleOpen = () => setOpen(!open);
  const handleDelete  = (obj) => {
    axios
      .create({})
      .delete(`http://localhost:8000/api/event/${eventIdData}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log("useEffect objects API response", response.data);
        console.log(response.data);
        setEventData((prevData) => prevData.filter((object) => object.id !== eventIdData));
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
          {
              ModalMessageBody ? <Typography variant="paragraph">{ModalMessageBody}</Typography> : ''
          }
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
          <Button  className="shadow-md mx-3 flex items-center bg-[#265253] text-white px-4 py-3 rounded-lg hover:bg-[#265253] focus:outline-none focus:bg-[#265253]" onClick={handleDelete}>
            <span>Yes</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}