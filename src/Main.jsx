import React from 'react';
import Navbar from './common/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './common/footer/Footer';
import { MdCall, MdOutlineWhatsapp } from "react-icons/md";

const Main = () => {
  return (
    <div className="bg-white ">
    <div className="fixed z-[9999] bottom-2  right-2 ">
      <div className=" rounded-full mb-3 shadow-2xl  flex justify-center items-center h-[45px] w-[45px] bg-orange-500 text-white">
        <a href="tel:+919876543210">
          <MdCall className="text-[24px]" />
        </a>
      </div>
      <div className=" rounded-full shadow-2xl flex justify-center items-center h-[45px] w-[45px] bg-orange-500 text-white">
        <a href="https://wa.me/+919876543210">
          <MdOutlineWhatsapp className="text-[24px]" />
        </a>
      </div>
    </div>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </div>
  );
}

export default Main;
