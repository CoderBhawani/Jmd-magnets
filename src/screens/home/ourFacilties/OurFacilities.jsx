import React from "react";
import { RiRefund2Fill } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

const OurFacilities = () => {
  return (
    <div className="flex  justify-around  mx-auto container text-black flex-wrap gap-[30px] py-20">
      <div className="flex flex-col justify-center w-[330px]  items-center">
        <FaShippingFast className="text-[60px]" />
        <h1 className="text-[24px] font-[600] py-2 text-center">
          FREE SHIPPING
        </h1>
        <p className="text-[14px] py-2 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur
        </p>
      </div>
      <div className="flex flex-col justify-center w-[330px]  items-center">
        <RiRefund2Fill className="text-[60px]" />
        <h1 className="text-[24px] py-2 font-[600] text-center">
          100% Best Quality{" "}
        </h1>
        <p className="text-[14px] py-2 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur
        </p>
      </div>
      <div className="flex flex-col justify-center w-[330px]  items-center">
        <BiSupport className="text-[60px]" />
        <h1 className="text-[24px] py-2 font-[600] text-center">
          SUPPORT 24/7
        </h1>
        <p className="text-[14px] py-2 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur
        </p>
      </div>
    </div>
  );
};

export default OurFacilities;
