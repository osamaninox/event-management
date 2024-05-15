import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
 
export default function TemplateModal ({open, handleClose,ModalHeader, ModalMessageBody, price,imageUrl, ...props}) {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(!open);
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogHeader>{ModalHeader ? ModalHeader : ''}</DialogHeader>
        <DialogBody>
           <div className="m-auto d-flex justify-center h-[300px]">
                <img src={imageUrl} alt={imageUrl} className="max-w-full max-h-full" />
           </div>
        </DialogBody>
        <DialogFooter>
          <Button  variant="gradient" color="green" onClick={handleClose}>
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}