import React from 'react'
import { Link } from "react-router-dom";
import loginImg from '../../assets/front/images/loginbackground.jpeg'
import logo from '../../assets/front/logo.png';

const ResetPassword = () => {
  return (
   <section class="bg-gray-50 dark:bg-gray-900 fixed w-full">
        <div className='flex justify-between w-full'>
            <div className='w-3/5'> 
              <img src={loginImg} alt={loginImg} className='w-full h-auto'/>
            </div>
            <div class="w-2/5 bg-white  rounded-lg shadow dark:border ml-0 md:mt-0  xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-2 sm:p-8">
                    <div>
                      <div className='m-auto w-[100px] shadow-md rounded-full'>
                         <img src={logo} alt={logo} className='m-auto rounded-full'/>
                       </div>
                       {/* <h2 className='text-[32px] py-[10px] text-[#000] font-dancing text-center font-bold'>Innovista Desingers</h2> */}
                    </div>
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                     Reset Password
                  </h1>
                <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    <div>
                        <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                        <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    <button type="submit" class="w-full text-white bg-[#265253] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset Password</button>
                </form>
            </div>
                </div>
            </div>
        </div>
      </section>
  )
}

export default ResetPassword;