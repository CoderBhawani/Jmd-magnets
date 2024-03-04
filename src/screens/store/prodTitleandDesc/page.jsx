import React from "react";
import { FaStar } from "react-icons/fa";

const ProdTitleandDescrip = ({ title, desc, discount, mrp, price }) => {
  return (
    <>
      <div className="text-[30px] font-bold text-orange-500 pt-10">{title}</div>
      <div className="text-[16px] py-4">{desc}</div>
      <div className=" border-b  py-2 border-gray-800"></div>

      <div className="flex py-2 gap-2 items-center">
        <div className="text-[20px] cursor-pointer font-[600]">Rs. {price}</div>
        <div className="text-[13px]">
          MRP{" "}
          <span className="line-through text-[13px] text-gray-400">
            Rs. {mrp}
          </span>
        </div>
        <div className="text-[13px] text-[red]">{discount} % OFF</div>
      </div>
    </>
  );
};

export default ProdTitleandDescrip;
