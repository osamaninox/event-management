import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../../assets/front/logo.png';
import { useAuth } from '../../../auth/AuthContext';

const Navigation = () => {
  const { isLoggedIn, logout, login } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    logout(); // Call logout function from AuthContext
    navigate("/");
  };

  const handleLogin = () => {
    // Call login function from AuthContext
    login(); // Assuming login function sets isLoggedIn to true
  };

  useEffect(() => {
    // When the component mounts, check if the user is logged in
    // If the user is logged in, set isLoggedIn to false
    const token = localStorage.getItem('token');
    if (token) {
      handleLogin(); // Assuming login function sets isLoggedIn to true
    }
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <nav className="bg-[#265253] py-[10px]">
      <div className="flex justify-between items-center">
        <ul className='logo mb-0'>
          <li>
            <Link to="/">
              <img
                src={logo}
                className="w-[100px] h-auto rounded-[50px] mx-[30px]"
                alt="logo"
              />
            </Link>
          </li>
        </ul>
        <ul className="flex mb-0 items-center">
          <li className="px-[15px] text-[#fff]">
            <Link to="/">Home</Link>
          </li>
          <li className="px-[15px] text-[#fff]">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-[15px] text-[#fff]">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-[15px] text-[#fff]">
            <Link to="/services">Services</Link>
          </li>
          <li className="px-[15px] text-[#fff]">
            <Link to="/gallery">Gallery</Link>
          </li>
          {!isLoggedIn ? (
            <li className="px-[15px] text-[#fff]">
              <Link to="/auth/login">Sign In</Link>
            </li>
          ) : (
            <>
              <li className="px-[15px] text-[#fff]">
                <Link to="/profile">User Profile</Link>
              </li>
              <li className="px-[15px] text-[#fff]">
                <Link to="/eventtool">Create Your Event</Link>
              </li>
              <li className="px-[15px] text-[#fff]">
                <button onClick={handleLogout}>Sign Out</button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
