import React from 'react';
import "./index.css";
const ContactHeader = () => {
  return (
    <div className={`w-full h-[25vh]  contactBgBanner`}>
    <div className="contact-overlay flex justify-center items-center h-[100%] w-[100%] ">
      <div className="flex justify-center text-white w-[60%]  mx-auto items-center flex-col">
        <div className="text-orange-500  text-[60px] font-bold">Contact</div>
      </div>
    </div>
  </div>
  );
}

export default ContactHeader;
