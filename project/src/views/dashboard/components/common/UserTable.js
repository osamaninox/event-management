// UserTable.js

import { Card, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconsSet from "../../../../assets/front/icons/Icons";
import EditUserModal from "../modal/User/EditUserModal";
import AddUserModal from "../modal/User/AddUserModal";
import DeleteUserModal from "../modal/User/DeleteUserModal";

export function UserTable({ head, rows }) {
  const [openModal, setOpenModal] = useState({ addUser: false, editUser: false, deleteUser: false });
  const [selectedUser, setSelectedUser] = useState(null);

  const handleOpen = (modalType, user = null, id) => {
    setSelectedUser(user);
    setOpenModal({ ...openModal, [modalType]: true ,id:id });
  };

  const handleClose = (modalType) => {
    setOpenModal({ ...openModal, [modalType]: false });
    setSelectedUser(null);
  };
  const onUpdateHandler = (data,index) => {
     rows[index] = {
         ...rows[index],
         name: data.name,
        //  id: data.id,
         role:data.role
     }
  };

  // const handleDeleteUser = () => {
  //   // Implement deletion logic here
  //   // For example, if rows is an array of users, you can filter out the deleted user
  //   const updatedRows = rows.filter(user => user.id !== selectedUser.id);
  //   // Update the rows state with the new array
  //   // setRows(updatedRows);
  //   // Close the delete modal
  //   handleClose('deleteUser');
  // };

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
            
            {rows.map(({ id, name, user_image, role, action }, index) => (
              <tr key={id} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {index + 1}
                  </Typography>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <img src={user_image} alt="image" className="w-[30px] h-[30px] object-center object-cover rounded-full" />
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal px-2"
                    >
                      {name}
                    </Typography>
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
                    {role}
                  </Typography>
                </td>
                {action === 'user' && (
                  <td className="p-4">
                    <div className="flex">
                      <Link to="#" onClick={() => handleOpen('editUser', { id, name, user_image, role, action, onUpdateHandler,index })} className="">
                        <IconsSet.EditIcon />
                      </Link>
                      <Link to="#" onClick={() => handleOpen('deleteUser', {id} )} className="px-2">
                        <IconsSet.TrashIcon />
                      </Link>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <EditUserModal
        ModalHeader="Edit User Details"
        open={openModal.editUser}
        selectedUserData={selectedUser}
        handleClose={() => handleClose('editUser')}
      />
      <DeleteUserModal
        ModalHeader="Confirmation"
        ModalMessageBody="Are you sure you want to delete this User?"
        open={openModal.deleteUser}
        selectedUserData={selectedUser}
        handleClose={() => handleClose('deleteUser')}
        // handleDelete={handleDeleteUser} 
      />
   
    </>
  );
}
