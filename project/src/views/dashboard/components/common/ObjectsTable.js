import { Card, Typography } from "@material-tailwind/react";
import React,{useState} from "react";
import Badge from "./Badge";
import { Link } from "react-router-dom";
import IconsSet from "../../../../assets/front/icons/Icons";
import EditObjectModal from "../modal/Object/EditObjectModal";
import AddObjectModal from "../modal/Object/AddObjectModal";
import DeleteObjectModal from "../modal/Object/DeleteObjectModal";

import AddUserModal from "../modal/Event/EditEventModal";
import DeleteEventModal from "../modal/Event/DeleteEventModal";

export function ObjectsTable({head, rows}) {
 const [openModal, setOpenModal] = useState({ editobject: false, deleteobject: false, addUser: false, editUser: false, deleteUser:false });

  const handleOpen = (modalType) => {
    setOpenModal({ ...openModal, [modalType]: true });
  };

  const handleClose = (modalType) => {
    setOpenModal({ ...openModal, [modalType]: false });
  };
  return (
    <>
    <Card className="h-full w-full">
      <table className="w-full min-w-max table-auto text-left rounded-t-sm">
        <thead className="">
          <tr>
            {head.map((thead) => (
              <th
                key={thead}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 capitalize"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {thead}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(
            ({ id, name,objectImage,price,type,action }, index) => (
              <tr key={name} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {id}
                  </Typography>
                </td>
                <td className="p-4">
                   <img src={objectImage} alt="image" className="w-[30px] h-[30px]  rounded-full"></img>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                {price && 
                   <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {price}
                  </Typography>
                </td>
                }
                <td className="p-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {type}
                  </Typography>
                </td>
                {
                  action === 'objects' && (
                    <td className="p-4">
                      <div className="flex">
                        <Link to="#" onClick={() => handleOpen('editobject')} className=""><IconsSet.EditIcon /></Link>
                        <Link to="#" onClick={() => handleOpen('deleteobject')} className="px-2"><IconsSet.TrashIcon /></Link>
                      </div>
                     </td>
                  )
                }
                 {
                  action === 'event' && (
                    <td className="p-4">
                      <div className="flex">
                        <Link to="#" onClick={() => handleOpen('editEvent')} className=""><IconsSet.EditIcon /></Link>
                        <Link to="#" onClick={() => handleOpen('deleteEvent')} className="px-2"><IconsSet.TrashIcon /></Link>
                      </div>
                     </td>
                  )
                }
                {
                  action === 'users' && (
                    <td className="p-4">
                      <div className="flex">
                        <Link to="#" onClick={() => handleOpen('editUser')} className=""><IconsSet.EditIcon /></Link>
                        <Link to="#" onClick={() => handleOpen('deleteUser')} className="px-2"><IconsSet.TrashIcon /></Link>
                      </div>
                     </td>
                  )
                }
              </tr>
            )
          )}
        </tbody>
      </table>
    </Card>
    <EditObjectModal ModalHeader="Edit Object Details"   open={openModal.editobject}
        handleClose={() => handleClose('editobject')}
         />
    <DeleteObjectModal ModalHeader="Confirmation" ModalMessageBody="Are You sure you want to delete this Object ?"
        open={openModal.deleteobject}
        handleClose={() => handleClose('deleteobject')}/>

    {/* <EditUserModal ModalHeader="Edit User Details"   open={openModal.editUser}
        handleClose={() => handleClose('editUser')}
         />
    <DeleteUserModal ModalHeader="Confirmation" ModalMessageBody="Are You sure you want to delete this Event Details ?"
        open={openModal.deleteUser}
        handleClose={() => handleClose('deleteUser')}/>
     <AddUserModal ModalHeader="Confirmation" ModalMessageBody="Are You sure you want to delete this Event Details ?"
        open={openModal.addUser}
        handleClose={() => handleClose('addUser')}/> */}
    </>

    
  );
}
