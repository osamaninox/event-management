import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import IconsSet from "../../../assets/front/icons/Icons";
import placeholder from "../../../assets/front/images/placeholderimg.png";
import axios from "axios";

const UserProfile = () => {
  const role = localStorage.getItem("role");
  if (!role || role.toLowerCase() !== "admin") {
    window.location.href = "/";
    return;
  }
  const [selectedCountry, setSelectedCountry] = useState("AUS");
  const [selectedGender, setSelectedGender] = useState("male");
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState({});

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
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleSaveClick = () => {
    setIsEditing(false);
    // Make API call to update user data
    // Reset profile picture upload state if needed
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleProfilePicChange = (e) => {
    // Handle profile picture upload
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <form className="space-y-4 md:space-y-6" action="#">
      <div className="flex justify-center py-16">
        <Card className="mt-6 w-96 shadow">
          <div className="relative  m-auto">
            <div className="mt-[-60px] rounded-full shadow w-[150px] h-[150px]">
              <img
                src={userData.profilePic}
                alt="Profile Pic"
                className="object-center object-cover  rounded-full w-[150px] h-[150px]"
              />
            </div>
            {/* {
            isEditing && (
              <div className=''>
                  <label
                  htmlFor="file-upload"
                  className="absolute border-[3px] py-[1px] px-[2px] shadow-md bottom-0 w-[35px] h-[35px] bg-[#265253] text-[#fff] rounded-full right-[0px]"
                >
                  <span className='text-center'>
                      <IconsSet.CameraIcon/>
                  </span>
                </label> 
                <input id="file-upload" type="file" hidden/>
              </div>
            )
          } */}
          </div>
          {/* <div className='absolute right-[10px] top-[10px]'>
          <button
            onClick={handleEditClick}
            className="bg-[#265253] text-[#fff] text-[12px] d-inline-block text-center p-[4px] font-bold  rounded focus:outline-none focus:shadow-outline"
          >
            <IconsSet.EditIcon/>
          </button>
       </div> */}
          <CardBody>
            <div className="mb-3">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                onChange={handleChange}
                disabled={!isEditing}
                type="text"
                name="name"
                id="name"
                className={`${
                  isEditing ? "text-[#000]" : "text-gray-400"
                } bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="Enter Your Name"
                required=""
                value={userData.name}
              />
            </div>
            {/* <div className="mb-3">
          <label htmlFor="lname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
          <input onChange={handleChange} disabled={!isEditing}  type="text" name="lname" id="lname" className={`${isEditing ? "text-[#000]" : "text-gray-400"} bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="Enter Your Last Name" required=""  value={userData.lname} />
        </div> */}
            <div className="mb-3">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                onChange={handleChange}
                disabled={!isEditing}
                type="email"
                name="email"
                id="email"
                className={`${
                  isEditing ? "text-[#000]" : "text-gray-400"
                } bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="Enter Your Email Id"
                required=""
                value={userData.email}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Contact Number
              </label>
              <input
                onChange={handleChange}
                disabled={!isEditing}
                type="email"
                name="email"
                id="email"
                className={`${
                  isEditing ? "text-[#000]" : "text-gray-400"
                } bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="Enter Your Email Id"
                required=""
                value={userData.contactNumber}
              />
            </div>
            {/* <div className="mb-3">
          <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
          <select value={selectedCountry}  onChange={handleChange} disabled={!isEditing} id="countries" className={`${isEditing ? "text-[#000]" : "text-gray-400"} bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}>
             <option value="AUS" disabled selected>
              Australia
            </option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
          <select id="gender" value={selectedGender}  onChange={handleChange} disabled={!isEditing} className={`${isEditing ? "text-[#000]" : "text-gray-400"} bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}>
             <option value="male" disabled selected>
               Male
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div> */}
          </CardBody>
          {isEditing && (
            <CardFooter className="pt-0">
              <button
                onClick={handleSaveClick}
                type="submit"
                className="w-full text-white bg-[#265253] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Update
              </button>
            </CardFooter>
          )}
        </Card>
      </div>
    </form>
  );
};

export default UserProfile;
