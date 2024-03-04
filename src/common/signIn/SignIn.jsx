import React, { useState } from "react";
import "./index.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignIn = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="w-[100%] py-10 bg-white">
      <div className="w-[500px] bg-gray-100 overflow-hidden rounded-lg mx-auto">
        <div className="w-[100%]  h-[30vh] relative signinBanner  ">
          <div className="signin-overlay text-orange-500 text-[35px] font-bold flex justify-center items-center w-full h-full absolute">
            <p>JMD MAGNETS</p>
          </div>
        </div>
        <div className="w-[90%] h-[50vh] mx-auto">
          <div className="text-[18px] text-center font-[600] pb-3 pt-8">
            Sign Up to view products
          </div>
          <div className="py-3 mx-auto w-[67%]">
            <PhoneInput
              country={"in"}
              value={phone}
              onChange={setPhone}
              containerClass=""
            />
          </div>
          <div className="mx-auto w-[67%]">
            <button className="bg-orange-500 w-[100%] my-2 rounded-md text-white py-2 text-[18px] font-semibold">
              Send Otp
            </button>
          </div>
        </div>
        <div className="w-[50%] text-[12px] mb-3 mx-auto text-center">
          By continuing, you agree to JMD Magnets’s
          <div className="text-center">
            <span className="text-orange-500">Terms & Conditions</span> and
            Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;