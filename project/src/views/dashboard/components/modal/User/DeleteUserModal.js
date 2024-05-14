import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
 
export default function DeleteTransactionModal ({open, handleClose,ModalHeader, ModalMessageBody, ...props}) {
  // const [open, setOpen] = React.useState(false);
 
  // const handleOpen = () => setOpen(!open);
 
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
          <Button  variant="gradient" color="green" onClick={handleClose}>
            <span>Yes</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}