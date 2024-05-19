import React,{useState} from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import IconsSet from '../../../assets/front/icons/Icons'; 
import placeholder from '../../../assets/front/images/placeholderimg.png'


const UserProfile = () => {
  const [selectedCountry, setSelectedCountry] = useState('AUS');
  const [selectedGender, setSelectedGender] = useState('male');
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    fname: 'John',
    lname: 'Doe',
    email: 'johndoe@example.com',
    address: '123 Main St',
    profilePic: placeholder,
  });
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
  
  return (
<form class="space-y-4 md:space-y-6" action="#">
  <div className="flex justify-center py-16">
    <Card className="mt-6 w-96 shadow">
      <div className="relative  m-auto">
          <div className='mt-[-60px] rounded-full shadow w-[150px] h-[150px]'>
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
                  for="file-upload"
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
          <label for="lname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
          <input onChange={handleChange} disabled={!isEditing}  type="text" name="fname" id="fname" class={`${isEditing ? "text-[#000]" : "text-gray-400"} bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="Enter Your First Name" required="" value={userData.fname} />
        </div>
        <div className="mb-3">
          <label for="lname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
          <input onChange={handleChange} disabled={!isEditing}  type="text" name="lname" id="lname" class={`${isEditing ? "text-[#000]" : "text-gray-400"} bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="Enter Your Last Name" required=""  value={userData.lname} />
        </div>
        <div className="mb-3">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input onChange={handleChange} disabled={!isEditing}  type="email" name="email" id="email" class={`${isEditing ? "text-[#000]" : "text-gray-400"} bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="Enter Your Email Id" required=""  value={userData.email}/>
        </div>
        <div className="mb-3">
          <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
          <select value={selectedCountry}  onChange={handleChange} disabled={!isEditing} id="countries" class={`${isEditing ? "text-[#000]" : "text-gray-400"} bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}>
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
          <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
          <select id="gender" value={selectedGender}  onChange={handleChange} disabled={!isEditing} class={`${isEditing ? "text-[#000]" : "text-gray-400"} bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}>
             <option value="male" disabled selected>
               Male
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </CardBody>
      {
        isEditing && (
           <CardFooter className="pt-0">
              <button  onClick={handleSaveClick} type="submit" class="w-full text-white bg-[#265253] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Update</button>
          </CardFooter>
        )
      }
    </Card>
  </div>
</form>
  )
}

export default UserProfile