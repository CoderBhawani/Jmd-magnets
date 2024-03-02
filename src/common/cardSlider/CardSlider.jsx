import React, { useContext, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import biryanimagnet from "./images/biryanimagnet.jpg";
import burgermagnet from "./images/burgermagnet.jpg";
import chaikettlemagnet from "./images/chaikettlemagnet.jpg";
import cholebhaturemagnet from "./images/cholebhaturemagnet.jpg";
import cutecupmagnet from "./images/cutecupmagnet.jpg";
import dhoklamagnet from "./images/dhoklamagnet.jpg";
import dosamagnet from "./images/dosamagnet.jpg";
import fivestarmegnet from "./images/fivestarmegnet.jpg";
import grilledsandwichmagent from "./images/grilledsandwichmagent.jpg";
import idlisambharmagnet from "./images/idlisambhar magnet.jpg";
import jalebimagnet from "./images/jalebimagnet.jpg";
import kaajukatlimagnet from "./images/kaajukatlimagnet.jpg";
import kfcmagnet from "./images/kfcmagnet.jpg";
import mangocratemagnet from "./images/mangocratemagnet.jpg";
import panipurimagnet from "./images/panipurimagnet.jpg";
import samosamagnet from "./images/samosamagnet.jpg";
import teamagnet from "./images/teamagnet.jpg";
const ProductDesSlider = () => {
  const allProducts = [
    {
      name: "Biryani Magnet",
      img: biryanimagnet,
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quod maiores laborum veniam sed maxime hic consequatur unde. Magni unde fuga sequi.",
      slug: "briyani-magnet",
    },
    {
      name: "Burger Magnet",
      img: burgermagnet,
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quod maiores laborum veniam sed maxime hic consequatur unde. Magni unde fuga sequi.",
      slug: "burger-magnet",
    },
    {
      name: "Chai Kettle Magnet",
      img: chaikettlemagnet,
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quod maiores laborum veniam sed maxime hic consequatur unde. Magni unde fuga sequi.",
      slug: "chai-kettle-magnet",
    },
    {
      name: "Chole Bhature Magnet",
      img: cholebhaturemagnet,
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quod maiores laborum veniam sed maxime hic consequatur unde. Magni unde fuga sequi.",
      slug: "chole-bhature-magnet",
    },
    {
      name: "Cute Cup Magnet",
      img: cutecupmagnet,
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quod maiores laborum veniam sed maxime hic consequatur unde. Magni unde fuga sequi.",
      slug: "cute-cup-magnet",
    },
    {
      name: "Dhokla Magnet",
      img: dhoklamagnet,
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quod maiores laborum veniam sed maxime hic consequatur unde. Magni unde fuga sequi.",
      slug: "dhokla-magnet",
    },
  ];
  return (
    <div className="container mx-auto py-[4rem]">
      <Swiper
        slidesPerView={3}
        centeredSlides={false}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        spaceBetween={80}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {allProducts.map((data, i) => {
          return (
            <SwiperSlide
              key={i}
              className="w-[240px] flex rounded-lg justify-center items-center flex-col   text-black my-4 bg-gray-100   shadow-xl scale-100 hover:scale-105  duration-500"
            >
              <div className="flex ">
                <div className="w-[40%] py-3 rounded-full overflow-hidden px-3">
                  <img
                    src={data.img}
                    alt="Image not found"
                    className=" w-[200px] rounded-full"
                  />
                </div>
                <div className="w-[50%] flex items-start flex-col justify-center">
                  <div className="font-[600] text-[15px]">{data.name}</div>
                  <div className=" text-[11px]">{data.des}</div>

                  <div className="text-[12px] font-[600] ">
                    Rs. 300{" "}
                    <span className="text-[red] line-through">Rs. 500</span>
                  </div>
                </div>
              </div>
              <div className="bg-orange-500 mb-2 w-[65%] mx-auto text-center py-2 text-white ">
                Add to Cart
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductDesSlider;
