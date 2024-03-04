import React, { useContext, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductContext } from "../../context/Context";
import { Link } from "react-router-dom";
const CardSlider = () => {
  const { homeProducts } = useContext(ProductContext);

  return (
    <div className="container mx-auto py-[3rem]">
      <Swiper
        slidesPerView={3}
        centeredSlides={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={80}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {homeProducts.map((pro, i) => (
          <SwiperSlide
            key={i}
            className="w-[240px] cursor-pointer flex py-4 rounded-lg justify-center items-center flex-col   text-black my-4 bg-gray-100   shadow-xl scale-100 hover:scale-105  duration-500"
          >
            <div className="flex ">
              <Link
                to={`/store/${pro.product_slug}`}
                className="w-[40%] py-3 rounded-full overflow-hidden px-3"
              >
                <img
                  src={pro.product_img}
                  alt="Image not found"
                  className=" w-[200px] rounded-full"
                />
              </Link>
              <Link
                to={`/store/${pro.product_slug}`}
                className="w-[50%] flex items-start flex-col justify-center"
              >
                <div className="font-[600] mt-3 text-[17px]">
                  {pro.product_name}
                </div>
                <div className=" text-[11px] py-1 tracking-wider">
                  {pro.product_decs}
                </div>

                <div className="text-[14px] font-[600] ">
                  Rs. {pro.product_finalPrice}
                  <span className="text-[11px] ps-1 font-normal text-gray-400 line-through">
                    Rs.{pro.product_price}
                  </span>
                  <span className="text-[11px] font-normal text-[red] ps-1">
                    {pro.product_discount} Off
                  </span>
                </div>
              </Link>
            </div>
            <div className="bg-orange-500 hover:bg-black hover:text-white duration-300 my-2 w-[80%] mx-auto text-center py-2 text-white ">
              Add to Cart
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
