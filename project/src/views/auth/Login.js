import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import loginImg from "../../assets/front/images/loginbackground.jpeg";
import logo from "../../assets/front/logo.png";
import axios from "axios";
import { useAuth } from "./AuthContext";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const handleLogin = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/login",
        {
          email: data.email,
          password: data.password,
        }
      );
      console.log(response.data);
      saveTokenInLocalStorage(response.data.user.token);
      saveUserIdInLocalStorage(response.data.user._id);
      navigate("/");
      // setLoginError('');
    } catch (error) {
      // Show invalid credentials error to user
      console.error(error);
      setLoginError("Invalid email or password. Please try again.");
    }
  };

  const saveTokenInLocalStorage = (token) => {
    localStorage.setItem("token", token);
  };
  const saveUserIdInLocalStorage = (userId) => {
    localStorage.setItem("userId", userId);
  };

  const logout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/"); // Redirect to home page if token exists
    }
  }, [navigate]);

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 fixed w-full">
        <div className="flex justify-between w-full">
          <div className="w-3/5">
            <img
              src={loginImg}
              alt="login background"
              className="w-full h-auto"
            />
          </div>
          <div className="w-2/5 bg-white rounded-lg shadow dark:border ml-0 md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div>
                <div className="m-auto w-[100px] shadow-md rounded-full">
                  <img src={logo} alt="logo" className="m-auto rounded-full" />
                </div>
                <h2 className="text-[32px] py-[10px] text-[#000] font-dancing text-center font-bold">
                  Innovista Designers
                </h2>
              </div>

              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign In To Your Account
              </h1>
              {loginError && (
                <p className="text-red-500 text-xs mt-1">{loginError}</p>
              )}
              <form onSubmit={handleSubmit(handleLogin)} noValidate>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    id="email"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    placeholder="name@company.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                      errors.password ? "border-red-500" : ""
                    }`}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300 cursor-pointer"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  {/* <Link to="/auth/resetPassword" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link> */}
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-[#265253] hover:bg-primary-700 mb-2 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/auth/signup"
                    className="font-medium text-[#265253] hover:underline dark:text-[#265253]"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
