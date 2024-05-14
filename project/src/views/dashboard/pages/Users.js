import React, { useState, useEffect } from 'react'
import SearchInput from "../components/common/SearchInput";
import { Table } from "../components/common/Table";
import axios from "axios";
import vp from '../../../../src/assets/front/images/vp.jpeg'
import president from '../../../../src/assets/front/images/president.jpeg'
import director from '../../../../src/assets/front/images/director.jpeg'
import { UserTable } from '../components/common/UserTable';
import { Link } from 'react-router-dom';
import AddUserModal from '../../dashboard/components/modal/User/AddUserModal'

const Users = () => {
  const [openModal, setOpenModal] = useState({ addUser: false });

  const handleOpen = (modalType) => {
    setOpenModal({ ...openModal, [modalType]: true });
  };

  const handleClose = (modalType) => {
    setOpenModal({ ...openModal, [modalType]: false });
  };
  useEffect(() => {
    axios.create({
    }).get(`http://localhost:8000/api/event/all`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then((response) => {
      console.log(response.data);
      // SET USER PORFILE DATA TO STATE
    }).catch((error) => {
      console.error(error);
    });
  });

  const TABLE_HEAD = [
    "id",
    "name",
    "status",
    "Action",
  ];

  const TABLE_ROWS = [
    {
      id: "1",
      user_image: vp,
      name: "John Michael",
      Status: "Active",
      action: "user",
      
      
    },
    {
      id: "2",
      user_image: president,
      name: "John Michael",
      Status: "Active",
      action: "user",
    },
    {
      id: "3",
      user_image: director,
      name: "John Michael",
      Status: "Active",
      action: "user",
    },
  ];
  return (
    <div>
      <div className='flex justify-between mb-[20px]'>
        <h2 className="text-[26px] text-[#000] font-[600] font-poppins ">
            User Listing
        </h2>
        <Link to="#" onClick={() => handleOpen('AddUser')} className='shadow-md mx-3 flex items-center bg-[#265253] text-white px-4 py-2 rounded-lg hover:bg-[#265253] focus:outline-none focus:bg-[#265253]'>Add User</Link>
      </div>
      <div className="flex justify-end">
        <SearchInput />
      </div>
      <div className="my-[20px]">
        <UserTable head={TABLE_HEAD} rows={TABLE_ROWS} />
      </div>
      <AddUserModal ModalHeader="Add User " open={openModal.AddUser}  handleClose={() => handleClose('AddUser')}
         />
    </div>
  );
}

export default Users