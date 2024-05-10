import React from 'react'
import Header from '../views/front/components/header/Header'
import Footer from '../views/front/components/footer/Footer'
import { Outlet } from "react-router-dom";


const SiteLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default SiteLayout