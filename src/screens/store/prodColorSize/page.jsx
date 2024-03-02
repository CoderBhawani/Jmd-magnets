import React from "react";

const ProdColorSize = ({ color1, color2, color3, color4 }) => {
  return (
    <div className="mt-4 border-b pb-5 border-gray-800">
      <h1 className="uppercase font-[600]">More Colors</h1>
      <div className="flex gap-2 py-5">
        <img src={color1} alt="" className="h-[110px]" />
        <img src={color2} alt="" className="h-[110px]" />
        <img src={color3} alt="" className="h-[110px]" />
        <img src={color4} alt="" className="h-[110px]" />
      </div>
      <div className="flex gap-2">
        <div className="flex h-[45px] justify-center items-center w-[45px] cursor-pointer hover:border-yellow-600 duration-300 hover:text-yellow-600 rounded-full border">
          <div>6</div>
        </div>
        <div className="flex h-[45px] justify-center items-center w-[45px] cursor-pointer hover:border-yellow-600 duration-300 hover:text-yellow-600 rounded-full border">
          <div>7</div>
        </div>
        <div className="flex h-[45px] justify-center items-center w-[45px] cursor-pointer hover:border-yellow-600 duration-300 hover:text-yellow-600 rounded-full border">
          <div>8</div>
        </div>
        <div className="flex h-[45px] justify-center items-center w-[45px] cursor-pointer hover:border-yellow-600 duration-300 hover:text-yellow-600 rounded-full border">
          <div>9</div>
        </div>
        <div className="flex h-[45px] justify-center items-center w-[45px] cursor-pointer hover:border-yellow-600 duration-300 hover:text-yellow-600 rounded-full border">
          <div>10</div>
        </div>
      </div>
    </div>
  );
};

export default ProdColorSize;
