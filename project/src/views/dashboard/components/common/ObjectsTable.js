import { Card, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import Badge from "./Badge";
import { Link } from "react-router-dom";
import IconsSet from "../../../../assets/front/icons/Icons";
import EditObjectModal from "../modal/Object/EditObjectModal";
import AddObjectModal from "../modal/Object/AddObjectModal";
import DeleteObjectModal from "../modal/Object/DeleteObjectModal";

import AddUserModal from "../modal/Event/EditEventModal";
import DeleteEventModal from "../modal/Event/DeleteEventModal";

export function ObjectsTable({
  head,
  rows,
  onRowClick,
  handleClose: handleCloseModal,
}) {
  const [openModal, setOpenModal] = useState({
    editobject: false,
    deleteobject: false,
    addUser: false,
    editUser: false,
    deleteUser: false,
    id: null,
  });
  const [selectedObject, setSelectedObject] = useState([null]);
  const handleOpen = (modalType, object = null, id) => {
    setOpenModal({ ...openModal, [modalType]: true, id: id });
    setSelectedObject(object);
  };

  const handleClose = (modalType) => {
    setOpenModal({ ...openModal, [modalType]: false, id: null });
    handleCloseModal();
  };

  const handleDelete = (id) => {
    console.log("Deleting object with id:", id);
  };
  const onUpdateHandler = (data, index) => {
    rows[index] = {
      ...rows[index],
      name: data.name,
      amount: data.amount,
      date: data.date,
    };
    console.log(rows[index]);
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
            {/* { id, title, objectImagePath, price, type, action } */}
            {rows.map((row, index) => (
              <tr key={row.title} className="even:bg-blue-gray-50/50">
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
                  <img
                    src={row.file}
                    alt="image"
                    className="w-[30px] h-[30px]  rounded-full"
                  ></img>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {row.title}
                  </Typography>
                </td>
                {row.price && (
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {row.price}
                    </Typography>
                  </td>
                )}
                <td className="p-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {row.type}
                  </Typography>
                </td>
                <td className="p-4">
                  <div className="flex">
                    <Link
                      to="#"
                      onClick={() =>
                        handleOpen(
                          "editobject",
                          row,
                          row._id,
                          onUpdateHandler,
                          index
                        )
                      }
                      className=""
                    >
                      <IconsSet.EditIcon />
                    </Link>
                    <Link
                      to="#"
                      onClick={(e) => handleOpen("deleteobject", row, row._id)}
                      className="px-2"
                    >
                      <IconsSet.TrashIcon />
                    </Link>
                  </div>
                </td>
                {/* {action === "objects" && (
                    <td className="p-4">
                      <div className="flex">
                        <Link
                          to="#"
                          onClick={() => handleOpen("editobject")}
                          className=""
                        >
                          <IconsSet.EditIcon />
                        </Link>
                        <Link
                          to="#"
                          onClick={() => handleOpen("deleteobject")}
                          className="px-2"
                        >
                          <IconsSet.TrashIcon />
                        </Link>
                      </div>
                    </td>
                  )} */}
                {/* {action === "event" && (
                    <td className="p-4">
                      <div className="flex">
                        <Link
                          to="#"
                          onClick={() => handleOpen("editEvent")}
                          className=""
                        >
                          <IconsSet.EditIcon />
                        </Link>
                        <Link
                          to="#"
                          onClick={() => handleOpen("deleteEvent")}
                          className="px-2"
                        >
                          <IconsSet.TrashIcon />
                        </Link>
                      </div>
                    </td>
                  )}
                  {action === "users" && (
                    <td className="p-4">
                      <div className="flex">
                        <Link
                          to="#"
                          onClick={() => handleOpen("editUser")}
                          className=""
                        >
                          <IconsSet.EditIcon />
                        </Link>
                        <Link
                          to="#"
                          onClick={() => handleOpen("deleteUser")}
                          className="px-2"
                        >
                          <IconsSet.TrashIcon />
                        </Link>
                      </div>
                    </td>
                  )} */}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <EditObjectModal
        ModalHeader="Edit Object Details"
        open={openModal.editobject}
        handleClose={() => handleClose("editobject")}
        objectDetails={selectedObject}
      />
      <DeleteObjectModal
        ModalHeader="Confirmation"
        ModalMessageBody="Are You sure you want to delete this Object ?"
        open={openModal.deleteobject}
        onDelete={selectedObject._id}
        handleClose={() => handleClose("deleteobject")}
      />
    </>
  );
}
