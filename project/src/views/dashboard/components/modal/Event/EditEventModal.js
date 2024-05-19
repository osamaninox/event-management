import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
 
export default function EditEventModal ({open, handleClose,ModalHeader, ModalMessageBody, ...props}) {
  // const [open, setOpen] = React.useState(false);
 
  // const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogHeader>{ModalHeader ? ModalHeader : ''}</DialogHeader>
        <DialogBody>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-3">
                <label
                  for="event_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                   Event Name
                </label>
                  <input
                    type="text"
                    name="event_name"
                    id="event_name"
                    class={`placeholder-[#000] bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    placeholder="Enter Event Name"
                    required=""
              
                  />
              </div>
              <div className="mb-3">
                <label
                  for="amount"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Enter Amount
                </label>
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    class={`placeholder-[#000] bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    placeholder="Enter Amount"
                    required=""
              
                  />
              </div>
              <div className="mb-3">
              <label
                for="payment type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
               Select Event type
              </label>
              <select
                id="eventtype"
                // value={selectedGender}
                // onChange={handleChange}
                // disabled={!isEditing}
                class={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              >
                <option value="wed">Wedding</option>
                <option value="birthday">Birthday</option>
              </select>
            </div>
            <div className="mb-3">
              <label
                for="eventstatus"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
               Select Event Status
              </label>
              <select
                id="eventstatus"
                // value={selectedGender}
                // onChange={handleChange}
                // disabled={!isEditing}
                class={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              >
                <option value="cmp">Completed</option>
                <option value="pending">Pending</option>
                <option value="canceled">Cancelled</option>
              </select>
            </div>
            <div className="mb-3">
              <label
                for="payment type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
               Select Payment type
              </label>
              <select
                id="paymenttype"
                // value={selectedGender}
                // onChange={handleChange}
                // disabled={!isEditing}
                class={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              >
                <option value="cr">Credit Card</option>
                <option value="cash">Cash</option>
                <option value="ot">Online Transaction</option>
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
          <Button  className="shadow-md mx-3 flex items-center bg-[#265253] text-white px-4 py-3 rounded-lg hover:bg-[#265253] focus:outline-none focus:bg-[#265253]" onClick={handleClose}>
            <span>Update</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}