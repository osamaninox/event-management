import React, { useState, useEffect} from 'react';
import { Link, useNavigate  } from "react-router-dom";
import loginImg from '../../assets/front/images/loginbackground.jpeg'
import logo from '../../assets/front/logo.png';
import axios from 'axios';

const Login = () => {

  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const login = () => {
   
    axios.create({
    }).post(`http://localhost:8000/api/user/login`, {
      email: email,
      password: password
    }).then((response) => {
      console.log(response.data);
      setUser(response.data);
      saveTokenInLocalStorage(response.data.user.token);
    }).catch((error) => {
      // Show invalid crrdentials error to user
      console.error(error);
    });
  }

  const saveTokenInLocalStorage = (token) => {
    localStorage.setItem('token', token);
  }

  useEffect(() => {
    if (user) {
      console.log('User logged in, redirect to home page', user);
      navigate('/'); // Redirect to home page or any other page
    }
  }, [user, navigate]);
  return (
    <>
      <section class="bg-gray-50 dark:bg-gray-900 fixed w-full">
        <div className='flex justify-between w-full'>
            <div className='w-3/5'> 
              <img src={loginImg} alt={loginImg} className='w-full h-auto'/>
            </div>
            <div class="w-2/5 bg-white  rounded-lg shadow dark:border ml-0 md:mt-0  xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <div>
                      <div className='m-auto w-[100px] shadow-md rounded-full'>
                         <img src={logo} alt={logo} className='m-auto rounded-full'/>
                       </div>
                       <h2 className='text-[32px] py-[10px] text-[#000] font-dancing text-center font-bold'>Innovista Designers</h2>
                    </div>

                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                       Sign In To Your Account
                    </h1>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input value={email} onChange={handleEmailChange} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input value={password} onChange={handlePasswordChange} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                  <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                </div>
                                <div class="ml-3 text-sm">
                                  <label for="remember" class="text-gray-500 dark:text-gray-300 cursor-pointer">Remember me</label>
                                </div>
                            </div>
                            {/* <Link to="/auth/resetPassword" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link> */}
                        </div>
                        <button onClick={login} type="button" class="w-full text-white bg-[#265253] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <a href="/auth/signup" class="font-medium text-[#265253] hover:underline dark:text-[#265253]">Sign up</a>
                        </p>
                  
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Login