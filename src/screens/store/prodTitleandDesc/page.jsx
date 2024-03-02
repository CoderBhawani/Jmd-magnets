import React from "react";
import { FaStar } from "react-icons/fa";

const ProdTitleandDescrip = ({
  title,
  desc,
  rating,
  review,
  discount,
  mrp,
  price,
}) => {
  return (
    <>
      <div className="text-[30px] font-bold text-red-400 pt-10">{title}</div>
      <div className="text-[20px] pb-2">{desc}</div>
      <div className=" border-b  py-2 border-gray-800"></div>

      <div className="flex gap-2 items-center">
        <div className="text-[20px] cursor-pointer font-[600]">Rs. {price}</div>
        <div className="text-[13px]">
          MRP{" "}
          <span className="line-through text-[13px] text-yellow-600">
            Rs. {mrp}
          </span>
        </div>
        <div className="text-[13px] text-[red]">{discount} % OFF</div>
      </div>
    </>
  );
};

export default ProdTitleandDescrip;
