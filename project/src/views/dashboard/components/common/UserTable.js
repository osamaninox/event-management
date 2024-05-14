import { Card, Typography } from "@material-tailwind/react";
import React,{useState} from "react";
import Badge from "./Badge";
import { Link } from "react-router-dom";
import IconsSet from "../../../../assets/front/icons/Icons";
import EditUserModal from "../modal/User/EditUserModal";
import AddUserModal from "../modal/User/AddUserModal";
import DeleteUserModal from "../modal/User/DeleteUserModal";


export function UserTable({head, rows}) {
 const [openModal, setOpenModal] = useState({ addUser: false, editUser: false, deleteUser:false });

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
            ({ id, name,user_image,Status,action }, index) => (
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
                   <div className="flex items-center">
                    <img src={user_image} alt="image" className="w-[30px] h-[30px] object-center object-cover rounded-full"></img>
                  
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal px-2"
                      >{name}</Typography>
                  
                   </div>
                </td>
                
                <td className="p-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {Status}
                  </Typography>
                </td>
                {
                  action === 'user' && (
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
    <EditUserModal ModalHeader="Edit User Details"   open={openModal.editUser}
        handleClose={() => handleClose('editUser')}
         />
    <DeleteUserModal ModalHeader="Confirmation" ModalMessageBody="Are You sure you want to delete this User ?"
        open={openModal.deleteUser}
        handleClose={() => handleClose('deleteUser')}/>
     <AddUserModal ModalHeader="Confirmation" ModalMessageBody="Are You sure you want to delete this User ?"
        open={openModal.addUser}
        handleClose={() => handleClose('addUser')}/>
    </>

    
  );
}
