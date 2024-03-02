import { useState } from "react";
import kajukatli from "./image/kajukatlimagnet.png";
import momosmagnet from "./image/momosmagnet.png";
import omlettemagnet from "./image/omlettemagnet.png";
import pizzamagnet from "./image/pizzamagnet.png";
import idlisambharmagnet from "./image/bg-banner5.png";
import kfcmagnet from "./image/bg-banner7.png";
import vadamagnet from "./image/bg-banner6.png";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Fragment } from "react";
// import { Menu, Transition } from '@headlessui/react';
import { IoMdArrowDropdown } from "react-icons/io";

const ProductList = () => {
  const HomeAllProducts = [
    {
      name: "Momos Magnet",
      decs: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam laudantium incidunt earum ipsa voluptates doloribus deleniti.",
      img: momosmagnet,
      slug: "momos-magnet",
    },
    {
      name: "Kaju Katli Magnet",
      decs: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam laudantium incidunt earum ipsa voluptates doloribus deleniti.",
      img: kajukatli,
      slug: "kajukatli-magnet",
    },
    {
      name: "Omlette Magnet",
      decs: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam laudantium incidunt earum ipsa voluptates doloribus deleniti.",
      img: omlettemagnet,
      slug: "omlette-magnet",
    },
    {
      name: "Pizza Magnet",
      decs: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam laudantium incidunt earum ipsa voluptates doloribus deleniti.",
      img: pizzamagnet,
      slug: "pizza-magnet",
    },
    {
      name: "Idli Sambhar Magnet",
      decs: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam laudantium incidunt earum ipsa voluptates doloribus deleniti.",
      img: idlisambharmagnet,
      slug: "idli-sambhar-magnet",
    },
    {
      name: "Vada Magnet",
      decs: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam laudantium incidunt earum ipsa voluptates doloribus deleniti.",
      img: vadamagnet,
      slug: "vada-magnet",
    },
    {
      name: "KFC Magnet",
      decs: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam laudantium incidunt earum ipsa voluptates doloribus deleniti.",
      img: kfcmagnet,
      slug: "kfc-magnet",
    },
    {
      name: "Idli Sambhar Magnet",
      decs: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam laudantium incidunt earum ipsa voluptates doloribus deleniti.",
      img: idlisambharmagnet,
      slug: "idli-sambhar-magnet",
    },
    {
      name: "Kaju Katli Magnet",
      decs: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam laudantium incidunt earum ipsa voluptates doloribus deleniti.",
      img: kajukatli,
      slug: "kajukatli-magnet",
    },
    {
      name: "Omlette Magnet",
      decs: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam laudantium incidunt earum ipsa voluptates doloribus deleniti.",
      img: omlettemagnet,
      slug: "omlette-magnet",
    },
    {
      name: "Pizza Magnet",
      decs: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam laudantium incidunt earum ipsa voluptates doloribus deleniti.",
      img: pizzamagnet,
      slug: "pizza-magnet",
    },
    {
      name: "KFC Magnet",
      decs: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam laudantium incidunt earum ipsa voluptates doloribus deleniti.",
      img: kfcmagnet,
      slug: "kfc-magnet",
    },
  ];

  return (
    <div className="flex justify-center">
      <div fluid className="flex  flex-wrap justify-around w-[80%]">
        {HomeAllProducts.map((pro, i) => {
          return (
            <div
              key={i}
              className="w-[260px] my-6 py-4 flex justify-center flex-col items-center shadow-xl hover:shadow-lg rounded-md scale-100 
              hover:scale-105 duration-500">
              <div
                className="w-[220px] rounded-2xl shadow-md hover:shadow-lg rounded- scale-100 
                hover:scale-105 duration-500">
                <img
                  src={pro.img}
                  alt=""
                  className="cursor-pointer p-4 w-full h-full"
                />
              </div>
              <div className=" w-[80%] flex justify-start flex-col items-start">
                <div className=" w-[100%] flex flex-col items-start">
                <h4 className="text-center py-2 font-[400] text-[14px] hover:cursor-pointer hover:text-black-500 hover:font-bold duration-500 hover:translate-x-2">
                  {pro.name}
                </h4>
              <div>
              
                <div className="text-[12px] font-[600] gap-4 w-[100%]">
                    Rs. 300{" "}
                    <span className="text-grey-400 line-through">Rs. 500</span>
                    <span className="text-red-400 ">(10% OFF)</span>
                  </div>
              </div>
                
                </div>
               
                <div className="flex justify-center w-full gap-4 pt-2">
               
                <div className="bg-orange-500 mb-2 w-[100%] mx-auto text-center py-2 rounded-md text-white ">
                Add to Cart
              </div>
              
               </div>
                
                
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className='flex justify-center py-7'>
                <h1 className='text-blue-600 font-[700]  text-center border-b-2 cursor-pointer border-blue-500 w-[90px]'>Load More</h1>
            </div> */}
    </div>
  );
};

export default ProductList;
