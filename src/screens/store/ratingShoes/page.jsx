import React from "react";
import { BsStarFill } from "react-icons/bs";

const RatingShoes = ({ rating }) => {
  return (
    <div className="border-b border-gray-800 pb-5">
      <div className="text-[18px]  flex gap-2 tracking-wider items-center uppercase mt-7 ">
        Rating <BsStarFill className=" mt-[2px]  text-[14px]" />
      </div>
      <div className="w-[100%] flex py-2">
        <div className="w-[170px] border-r border-gray-800 ">
          <div className=" text-[50px] gap-2 flex items-center">
            {rating}{" "}
            <BsStarFill className=" mt-[2px]  text-[22px] text-yellow-500" />
          </div>
          <div>5.7k Verified Buyers</div>
        </div>
        <div className="px-3">
          <div className="flex gap-2 items-center">
           <div> 5</div> <BsStarFill className="text-[12px]" />
            <div className="w-[200px] bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
              <div
                className="bg-yellow-600 h-1.5 rounded-full"
                style={{ width: "44%" }}
              ></div>
            </div>
            <div>
              44%
            </div>
          </div>
          <div className="flex gap-2 items-center">
           <div> 4</div> <BsStarFill className="text-[12px]" />
            <div className="w-[200px] bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
              <div
                className="bg-yellow-600 h-1.5 rounded-full"
                style={{ width: "26%" }}
              ></div>
            </div>
            <div>
              26%
            </div>
          </div>
          <div className="flex gap-2 items-center">
           <div> 3</div> <BsStarFill className="text-[12px]" />
            <div className="w-[200px] bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
              <div
                className="bg-yellow-600 h-1.5 rounded-full"
                style={{ width: "15%" }}
              ></div>
            </div>
            <div>
              15%
            </div>
          </div>
          <div className="flex gap-2 items-center">
           <div> 3</div> <BsStarFill className="text-[12px]" />
            <div className="w-[200px] bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
              <div
                className="bg-orange-600 h-1.5 rounded-full"
                style={{ width: "5%" }}
              ></div>
            </div>
            <div>
              5%
            </div>
          </div>
          <div className="flex gap-2 items-center">
           <div> 1</div> <BsStarFill className="text-[12px]" />
            <div className="w-[200px] bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
              <div
                className="bg-red-600 h-1.5 rounded-full"
                style={{ width: "5%" }}
              ></div>
            </div>
            <div>
              5%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingShoes;
