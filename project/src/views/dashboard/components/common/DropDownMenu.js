import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  ChevronDownIcon,
  User,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/20/solid";
import IconsSet from "../../../../assets/front/icons/Icons";
import avatar from "../../../../assets/dashboard/images/avatar.png";
import placeholder from "../../../../assets/front/images/placeholderimg.png";
import { Link } from "react-router-dom";
import LogOutModal from "../modal/LogOut/LogOutModal";
import axios from "axios";

export default function DropDownMenu() {
  const [openModal, setOpenModal] = useState({ logOut: false });
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    axios
      .create({})
      .get(`http://localhost:8000/api/user/profile/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setSelectedUser(response.data);
        // SET USER PORFILE DATA TO STATE
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleOpen = (modalType) => {
    setOpenModal({ ...openModal, [modalType]: true });
  };

  const handleClose = (modalType) => {
    setOpenModal({ ...openModal, [modalType]: false });
  };
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <div>
            {/* <div className="flex flex-col justify-center items-center   bg-[#cdcdcd] shadow-md rounded-full justify-center w-[50px] h-[50px]">
              <IconsSet.UserIcon />
            </div> */}
            <Menu.Button className="flex justify-center items-center text-[#000] px-[6px]">
              <div className="bg-[#cdcdcd] shadow-md rounded-full w-[50px] h-[50px] flex flex-col justify-center items-center">
                <img
                  src={selectedUser.file}
                  alt="placeholder"
                  className="w-auto object-center object-cover h-auto rounded-full"
                />
              </div>
              {/* <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5 text-[#000]"
                aria-hidden="true"
              /> */}
            </Menu.Button>
          </div>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-[10px] mt-2 w-48  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/dashboard/userprofile"
                    className={`${
                      active ? "bg-[#265253] text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-3 py-2 text-sm`}
                  >
                    <IconsSet.UserMenuIcon
                      className="mr-7 h-5 w-10"
                      aria-hidden="true"
                    />
                    Profile
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleOpen("logOut")}
                    className={`${
                      active ? "bg-[#265253] text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-3 py-2 text-sm`}
                  >
                    <ArrowRightStartOnRectangleIcon
                      className="mr-2 h-5"
                      aria-hidden="true"
                    />
                    Log Out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <LogOutModal
        ModalHeader=""
        ModalMessageBody="Are You sure you want to Logout ?"
        open={openModal.logOut}
        handleClose={() => handleClose("logOut")}
      />
    </>
  );
}
