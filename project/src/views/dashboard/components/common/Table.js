import { Card, Typography } from "@material-tailwind/react";
import React,{useState} from "react";
import Badge from "./Badge";
import { Link } from "react-router-dom";
import IconsSet from "../../../../assets/front/icons/Icons";
import EditTransactionModal from "../modal/Transaction/EditTransactionModal";
import DeleteTransactionModal from "../modal/Transaction/DeleteTransactionModal";
import EditEventModal from "../modal/Event/EditEventModal";
import DeleteEventModal from "../modal/Event/DeleteEventModal";

// import AddUserModal from "../modal/Event/EditEventModal";
// import DeleteEventModal from "../modal/Event/DeleteEventModal";

export function Table({head, rows}) {
 const [openModal, setOpenModal] = useState({ editTransaction: false, deleteTransaction: false,editEvent: false, DeleteEvent: false,addUser: false, editUser: false, deleteUser:false });

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
            ({ id, name, Amount, date, Status, Payment_Type,success,action,type,comment,email }, index) => (
              <tr key={name} className="even:bg-blue-gray-50/50">
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
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                {type && 
                   <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {type}
                  </Typography>
                </td>
                }
                { email && 

                  <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {email}
                  </Typography>
                </td>

                }
                { comment && 
                  <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {comment}
                  </Typography>
                </td>

               }
               { Amount && 
                  <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Amount}
                  </Typography>
                </td>

               }
               {
                Payment_Type &&
                  <td className="p-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {Payment_Type}
                  </Typography>
                </td>
               }
                {
                  success && 
                  <td className="p-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    <Badge
                      label={Status}
                      className={Status}
                      variant={success ? 'success' : 'pending'}
                    />
                  </Typography>
                </td>
                }
                {date && 
                    <td className="p-4">
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {date}
                      </Typography>
                    </td>
                }
                {
                  action === 'transaction' && (
                    <td className="p-4">
                      <div className="flex">
                        <Link to="#" onClick={() => handleOpen('editTransaction')} className=""><IconsSet.EditIcon /></Link>
                        <Link to="#" onClick={() => handleOpen('deleteTransaction')} className="px-2"><IconsSet.TrashIcon /></Link>
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
                {
                  action === 'feedbacks' && (
                    <td className="p-4">
                      <div className="flex">
                        <Link to="#" className="">Aprroved</Link>
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
    <EditTransactionModal ModalHeader="Edit Payment Details"   open={openModal.editTransaction}
        handleClose={() => handleClose('editTransaction')}
         />
    <DeleteTransactionModal ModalHeader="Confirmation" ModalMessageBody="Are You sure you want to delete this Transaction Details ?"
        open={openModal.deleteTransaction}
        handleClose={() => handleClose('deleteTransaction')}/>


    <EditEventModal ModalHeader="Edit Event Details"   open={openModal.editEvent}
        handleClose={() => handleClose('editEvent')}
         />
    <DeleteEventModal ModalHeader="Confirmation" ModalMessageBody="Are You sure you want to delete this Event ?"
        open={openModal.deleteEvent}
        handleClose={() => handleClose('deleteEvent')}/>

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
