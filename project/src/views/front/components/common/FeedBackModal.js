import React from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

import IconsSet from '../../../../assets/front/icons/Icons';

export default function FeedBackModal ({open, handleClose,ModalHeader, ModalMessageBody, ...props}) {
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogHeader>{ModalHeader ? ModalHeader : ''}</DialogHeader>
        <DialogBody>
          <div className=''>
             {
              ModalMessageBody ? <Typography className='text-center text-[28px] text-[#000] font-bold' variant="paragraph">{ModalMessageBody}</Typography> : ''
            }
          </div>
          <p className='text-[#000]'>Please Give Your FeedBack Related To Event</p>
           <div className='pt-[60px] pb-[20px]'>
            <div className="flex my-[20px]">
              <div className="relative m-auto">
                <div className="mt-[-60px] rounded-full shadow w-[150px] h-[150px]">
                  <img
                    src="https://placehold.co/600x400"
                    alt="user_pic"
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
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="placeholder-[#000] bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
               Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="placeholder-[#000] bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Your Email"
                required
              />
            </div>
           </div>  
           <div className='grid grid-cols-1 gap-4'>
            <div className="mb-3">
              <label
                htmlFor="CommentBox"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
               Comment Box
              </label>
             <textarea className="resize-none rounded-md border-[#000] border w-full min-h-[120px] text-[#000] p-[20px]"></textarea>
            </div>
           </div> 
           </div>
        </DialogBody>
        <DialogFooter className=''>
          <Button
            variant="text"
            color="red"
            onClick={handleClose}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button className='shadow-md mx-3 flex items-center bg-[#265253] text-white px-4 py-3 rounded-lg hover:bg-[#265253] focus:outline-none focus:bg-[#265253]'  onClick={handleClose}>
            <span>Submit</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
