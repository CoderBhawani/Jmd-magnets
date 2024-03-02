import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import momosmagnet from "./image/momosmagnet.png";
import kajukatlimagnet from "./image/kajukatlimagnet.png";
import omlettemagnet from "./image/omlettemagnet.png";
import pizzamagnet from "./image/pizzamagnet.png";
import idlisambharmagnet from "./image/idlisambharmagnet.png";
import vadamagnet from "./image/vadamagnet.png";
import kfcmagnet from "./image/kfcmagnet.png";

import "./styles.css";
import { Autoplay, EffectFade } from "swiper/modules";
const bestseller = [
  {
    name: "Momos Magnet",
    decs: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam laudantium incidunt earum ipsa voluptates doloribus deleniti.",
    img: momosmagnet,
    slug: "momos-magnet",
  },
  {
    name: "Kaju Katli Magnet",
    decs: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam laudantium incidunt earum ipsa voluptates doloribus deleniti.",
    img: kajukatlimagnet,
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
];
export default function HomeSlider() {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Autoplay]}
      className="mySwiper w-[100%]"
    >
      {bestseller.map((prod, i) => {
        return (
          <SwiperSlide>
            <div className="w-full bg-gray-100">
            <div className="  w-full md:w-[80%] relative  flex justify-between bg-gray-100 mx-auto h-[35vh] md:h-[70vh] ">
              <div className="w-[45%] flex flex-col  md:justify-end justify-center h-[80%] items-start">
                <div className="md:text-[30px] text-[18px] pb-2 font-semibold uppercase tracking-widest text-orange-500">
                  {prod.name}
                </div>
                <p className=" text-black-400 text-[14px]">{prod.decs}</p>
              </div>
              <div className="w-[45%] flex  justify-center items-center h-[100%]">
                <img src={prod.img} alt="" />
              </div>
            </div>
            </div>
            
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
