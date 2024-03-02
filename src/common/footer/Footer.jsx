import React from "react";
import { Link } from "react-router-dom";
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
          <div className="w-[29%]  ">
            <h2 className="ms-3 text-3xl font-semibold">JMD Magnet</h2>
            <p className="text-black p-4">
              <span className="font-semibold">JMD Magnets</span> makes really
              good magnets for different industries. They want to be the best in
              the world at it.
            </p>
            <div className="flex gap-3 ms-3 py-2">
              <div className="flex items-center justify-center bg-opacity-60 bg-[#ffffff47] w-[36px] h-[36px] rounded-full hover:bg-red-400 py-1">
                <img src={instagram} alt="" className="w-5" />
              </div>
              <div className="flex items-center justify-center bg-opacity-60 bg-[#ffffff47] w-[36px] h-[36px] rounded-full hover:bg-red-400 py-1">
                <img src={facebook} alt="" className="w-5" />
              </div>
              <div className="flex items-center justify-center bg-opacity-60 bg-[#ffffff47] w-[36px] h-[36px] rounded-full hover:bg-red-400 py-1">
                <img src={whatsapp} alt="" className="w-5" />
              </div>
              <div className="flex items-center justify-center bg-opacity-60 bg-[#ffffff47] w-[36px] h-[36px] rounded-full hover:bg-red-400 py-1">
                <img src={twitter} alt="" className="w-5" />
              </div>
            </div>
          </div>
          {/* End About Us Section */}

          {/* Our Links Start*/}
          <div className="w-[20%]  mx-auto">
            <h4 className="text-black py-2 border-orange-500 font-bold">
              Our Links
            </h4>
            <ul className="pl-0">
              <li className="py-2">
                <Link to="/" className="text-black no-underline">
                  Home
                </Link>
              </li>
              <li className="py-2">
                <Link to="/about" className="text-black no-underline">
                  About
                </Link>
              </li>
              <li className="py-2">
                <Link to="/contact" className="text-black no-underline">
                  Contact
                </Link>
              </li>
              <li className="py-2">
                <Link to="" className="text-black no-underline">
                  Return & Refunds
                </Link>
              </li>
              <li className="py-2">
                <Link to="/terms-condition" className="text-black no-underline">
                  Terms & Condition
                </Link>
              </li>
            </ul>
          </div>
          {/* Our Links End*/}
          {/* Contact Us Start */}
          <div className="w-[22%] ">
            <h4 className="text-black py-2 border-orange-500 font-bold">
              Contact Us
            </h4>
            <a
              href="tel:+919257767661"
              className="flex items-center gap-3 py-2"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full">
                <img src={callimg2} alt="" className="w-6" />
              </div>
              <div>
                <p>
                  <a href="tel:+919257767661" className="text-black">
                    9257767661
                  </a>
                </p>
              </div>
            </a>
            <div className="flex items-center gap-3 pb-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full">
                <img src={mailImg} alt="" className="w-6" />
              </div>
              <div className="text-black">jmdmagnet@offical.com</div>
            </div>

            <div className="flex items-center gap-3 pb-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full">
                <img src={locationImg} alt="" className="w-6" />
              </div>
              <div className="text-black">
                <p>Gandhi Nagar Jaipur,</p>
                <p>Rajasthan</p>
              </div>
            </div>
          </div>
          {/* Contact Us End*/}

          {/* Subscribe Section Start */}
          <div className="w-[23%]  ">
            <h4 className="text-black py-2 border-orange-500 font-bold">
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
      <div className="w-full bg-gray-600 text-white py-2 text-center text-sm ">
        © 2024 JMD Magnets. All rights reserved. ™ and ® Trademarks of JMD
        Magnets.
      </div>
    </>
  );
}

export default Footer;
