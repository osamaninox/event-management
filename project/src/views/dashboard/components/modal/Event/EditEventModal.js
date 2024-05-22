import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";

export default function EditEventModal({ open, handleClose, ModalHeader, ModalMessageBody, eventDetails, ...props }) {
  console.log('eventDetails' , eventDetails);
  // console.log('eventDetailsId' , eventDetails.id);
  const [isEditing, setIsEditing] = useState(false);
  const [eventData, setEventData] = useState({
    id: "",
    name: "",
    Amount: "",
    // type: "",
  });
  console.log('eventData' , eventData);

  useEffect(() => {
    if (eventDetails && eventDetails.id) {
      setEventData({
        id: eventDetails.id,
        name: eventDetails.name,
        Amount: eventDetails.Amount,
        // type: eventDetails.type,
      });
      setIsEditing(true);
    }
  }, [eventDetails]);
  console.log('eventDetailsUseEffect' ,eventDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = async () => {
    if (isEditing) {
      await updateEvent();
    } else {
      handleClose();
    }
  };

  const updateEvent = async () => {
    try {
      await axios.put(
        `http://localhost:8000/api/event/${eventDetails.id}`,
        { 
          id: eventData.id,
          title: eventData.name,
          totalAmount: eventData.Amount,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (eventDetails.onUpdateHandler) {
        eventDetails.onUpdateHandler(eventData, eventDetails.index);
      }
      handleClose();
    } catch (error) {
      console.error("Error updating event:", error);
      alert("Failed to update event. Please check your credentials and try again.");
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogHeader>{ModalHeader || ''}</DialogHeader>
        <DialogBody>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-3">
              <label
                htmlFor="event_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Client Name
              </label>
              <input
                type="text"
                name="name"
                id="event_name"
                className="placeholder-[#000] bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Event Name"
                required
                onChange={handleChange}
                value={eventData.name}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="amount"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Amount
              </label>
              <input
                type="number"
                name="Amount"
                id="amount"
                onChange={handleChange}
                className="placeholder-[#000] bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Amount"
                required
                value={eventData.Amount}
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
          <Button
            className="shadow-md mx-3 flex items-center bg-[#265253] text-white px-4 py-3 rounded-lg hover:bg-[#265253] focus:outline-none focus:bg-[#265253]"
            onClick={handleSubmit}
          >
            <span>Update</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
