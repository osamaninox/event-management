import React, { useState, useEffect } from "react";
import SearchInput from "../components/common/SearchInput";
import { UserTable } from "../components/common/UserTable";
import axios from "axios";
import vp from "../../../../src/assets/front/images/vp.jpeg";
import president from "../../../../src/assets/front/images/president.jpeg";
import director from "../../../../src/assets/front/images/director.jpeg";
import { Link } from "react-router-dom";
import AddUserModal from "../../dashboard/components/modal/User/AddUserModal";
import EditUserModal from "../../dashboard/components/modal/User/EditUserModal";

const Users = () => {
  const [openModal, setOpenModal] = useState({ addUser: false });
  const [users, setUsers] = useState([]);

  const handleOpen = (modalType) => {
    setOpenModal({ ...openModal, [modalType]: true });
  };

  const handleClose = (modalType) => {
    setOpenModal({ ...openModal, [modalType]: false });
    axios
      .get(`http://localhost:8000/api/user/all`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const onCreateHandler = (user) => {
    setUsers({ ...users, user });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/user/all`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const role = localStorage.getItem("role");
  if (!role || role.toLowerCase() !== "admin") {
    window.location.href = "/";
    return;
  }

  const TABLE_HEAD = ["id", "name", "role", "status", "Action"];

  const formatTableRows = (users) => {
    let _return = users.map((user, index) => ({
      id: user._id,
      user_image: user.image,
      name: user.name,
      role: user.role,
      active: user.active,
      file: user.file,
    }));
    console.log(_return);
    return _return;
  };

  return (
    <div>
      <div className="flex justify-between mb-[20px]">
        <h2 className="text-[26px] text-[#000] font-[600] font-poppins">
          User Listing
        </h2>
        <Link
          to="#"
          onClick={() => handleOpen("addUser")}
          className="shadow-md mx-3 flex items-center bg-[#265253] text-white px-4 py-2 rounded-lg hover:bg-[#265253] focus:outline-none focus:bg-[#265253]"
        >
          Add User
        </Link>
      </div>
      <div className="flex justify-end">
        <SearchInput />
      </div>
      <div className="my-[20px]">
        <UserTable
          head={TABLE_HEAD}
          rows={formatTableRows(users)}
          handleClose={() => handleClose("addObj")}
        />
      </div>
      <AddUserModal
        ModalHeader="Add User"
        open={openModal.addUser}
        handleClose={() => handleClose("addUser")}
      />
      <EditUserModal
        ModalHeader="Update User"
        open={openModal.editUser}
        selectedUserData={{ onCreateHandler }}
        handleClose={() => handleClose("editUser")}
      />
    </div>
  );
};

export default Users;
