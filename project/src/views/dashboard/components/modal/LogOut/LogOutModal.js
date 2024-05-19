import React from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { useAuth } from '../../../../../../src/views/auth/AuthContext';
 
export default function LogOutModal ({open, handleClose,ModalHeader, ModalMessageBody, ...props}) {
  const { logout } = useAuth(); 

  const handleLogout = () => {
    logout(); 
  };
 
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogHeader>{ModalHeader ? ModalHeader : ''}</DialogHeader>
        <DialogBody>
          {
              ModalMessageBody ? <Typography className='text-center text-[28px] text-[#000] font-bold capitalize' variant="paragraph">{ModalMessageBody}</Typography> : ''
          }
        </DialogBody>
        <DialogFooter className=''>
          <Button
            variant="text"
            color="red"
            onClick={handleClose}
            className="mr-1"
          >
            <span>No</span>
          </Button>
          <Button  className="shadow-md mx-3 flex items-center bg-[#265253] text-white px-4 py-3 rounded-lg hover:bg-[#265253] focus:outline-none focus:bg-[#265253]" onClick={handleLogout}>
            <span>Yes</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
