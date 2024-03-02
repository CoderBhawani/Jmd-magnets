import React from "react";
import facebook from "./images/facebook.png";
import whatsapp from "./images/whatsapp.png";
import twitter from "./images/twitter.png";
import instagram from "./images/instagram.png";
import callimg2 from "./images/phone-call.png";
import mailImg from "./images/mail.png";
import locationImg from "./images/location.png";

function Footer() {
  return (
    <>
      <div className="w-full bg-gray-200 pt-7 pb-4 text-black ">
        <div className="container mx-auto flex flex-wrap md:flex-nowrap justify-between">
          {/* About Us Section Start */}
          <div className="w-full mb-4 sm:w-full md:w-48% lg:w-23%">
            <h2 className="ms-3 text-[35px] font-semibold">JMD Magnet</h2>
            <p className="text-black p-4">
              <span className="font-semibold">JMD Magnets</span> makes really
              good magnets for different industries. They want to be the best
              in the world at it.
            </p>
            <div className="flex gap-3 ms-3 py-2">
              <div className="flex items-center justify-center bg-opacity-60 bg-[#ffffff47] w-[36px] h-[36px] rounded-full hover:bg-red-400 py-1">
                <img src={instagram} alt="" className="w-[20px]" />
              </div>
              <div className="flex items-center justify-center bg-opacity-60 bg-[#ffffff47] w-[36px] h-[36px] rounded-full hover:bg-red-400 py-1">
                <img src={facebook} alt="" className="w-[20px]" />
              </div>
              <div className="flex items-center justify-center bg-opacity-60 bg-[#ffffff47] w-[36px] h-[36px] rounded-full hover:bg-red-400 py-1">
                <img src={whatsapp} alt="" className="w-[20px]" />
              </div>
              <div className="flex items-center justify-center bg-opacity-60 bg-[#ffffff47] w-[36px] h-[36px] rounded-full hover:bg-red-400 py-1">
                <img src={twitter} alt="" className="w-[20px]" />
              </div>
            </div>
          </div>
          {/* End About Us Section */}

          {/* Our Links Start*/}
          <div className="w-full mb-4 sm:w-full md:w-48% ps-4 md:ps-0 lg:w-23%">
            <h4 className="text-black py-2 border_orange font-bold">
              Our Links
            </h4>
            <ul className="pl-0">
              <li className="py-2">
                <a href="" className="text-black no-underline">
                  Home
                </a>
              </li>
              <li className="py-2">
                <a href="" className="text-black no-underline">
                  Privacy Policy
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-black no-underline">
                  Return & Refunds
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-black no-underline">
                  Terms & Condition
                </a>
              </li>
            </ul>
          </div>
          {/* Our Links End*/}
          {/* Contact Us Start */}
          <div className="w-full mb-4 sm:w-full ps-4 md:ps-0 md:w-48% lg:w-23%">
            <h4 className="text-black py-2 border_orange font-bold">
              Contact Us
            </h4>
            <a href="tel:+919257767661" className="flex items-center gap-3 py-2">
              <div className="flex items-center justify-center w-[38px] h-[38px] rounded-full">
                <img src={callimg2} alt="" className="w-[30px]" />
              </div>
              <div className="">
                <p>
                  <a href="tel:+919257767661" className="">
                    9257767661
                  </a>
                </p>
              </div>
            </a>
            <div className="flex items-center gap-3 pb-2">
              <div className="flex items-center justify-center  w-[38px] h-[38px] rounded-full">
                <img src={mailImg} alt="" className="w-[30px]" />
              </div>
              <div className="">jmdmagnet@offical.com</div>
            </div>

            <div className="flex items-center gap-3 pb-2">
              <div className="flex items-center justify-center w-[38px] h-[38px] rounded-full">
                <img src={locationImg} alt="" className="w-[30px]" />
              </div>
              <div>
                <p>
                  Gandhi Nagar Jaipur, <br />
                  Rajasthan
                </p>
              </div>
            </div>
          </div>
          {/* Contact Us End*/}

          {/* Subscribe Section Start */}
          <div className="w-[85%] mb-4  ps-4 md:ps-0  md:w-48% lg:w-23%">
            <h4 className="text-black py-2 border_orange font-bold">
              Subscribe
            </h4>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Your Email Address"
                className="bg-gray-100 border border-gray-300 rounded-l px-4 py-2 w-full focus:outline-none"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-r"
              >
                Subscribe
              </button>
            </form>
          </div>
          {/* Subscribe Section End */}
        </div>
      </div>
      <div className="w-[100%] bg-gray-600 text-white py-2 text-center text-[17px] ">
        © 2024 JMD Magnets. All rights reserved. ™ and ® Trademarks of JMD
        Magnets.
      </div>
    </>
  );
}

export default Footer;
