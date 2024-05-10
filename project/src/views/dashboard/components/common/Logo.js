import React from 'react'
import logo from '../../../../assets/front/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img
          src={logo}
          className="w-[50px] h-auto rounded-[50px]"
          alt="logo"
        />
      </Link>
    </div>
  );
}

export default Logo