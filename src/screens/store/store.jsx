import React, { useContext } from "react";
import ProdTitleandDescrip from "./prodTitleandDesc/page";
import { GiElectric } from "react-icons/gi";
import { IoBagCheck } from "react-icons/io5";
import DeleiveryOption from "./deleiveryOption/page";
import RatingShoes from "./ratingShoes/page";
import ReviewShoes from "./reviewShoes/page";
import img1 from "./images/biryanimagnet.jpg";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/Context";
import CardSlider from "../../common/cardSlider/CardSlider";

const ProductDetails = () => {
  const { slug } = useParams(); // Use destructuring to extract slug from useParams
  const { homeProducts } = useContext(ProductContext); // Use destructuring to extract homeProducts from context
  const productData = homeProducts.find((prod) => prod.product_slug === slug); // Use find instead of filter since you're expecting one item

  return (
    <div className="w-full mb-6">
      <div className="container pt-8 pb-14 flex justify-between mx-auto">
        <div className="flex w-[38%] mx-auto mt-12 h-[70vh]">
          <img src={productData.product_img} alt="" className="" />
        </div>
        <div className="w-1/2">
          {productData && (
            <ProdTitleandDescrip
              title={productData.product_name} // Remove quotes around variable
              desc={productData.product_decs}
              mrp={productData.product_price} // Remove quotes around variable
              discount={productData.product_discount} // Remove quotes around variable
              price={Math.round(productData.product_finalPrice)} // Remove quotes around variable and fix the Math.round syntax
            />
          )}
          <div className="text-green-500 font-semibold text-sm cursor-pointer">
            inclusive of all taxes
          </div>
          <DeleiveryOption />
          <button className="px-20 mt-7 py-4 uppercase text-sm flex gap-1 items-center bg-orange-600 hover:bg-black hover:text-white duration-500 rounded-md text-black font-semibold">
            <IoBagCheck /> Add to Bag
          </button>

          {/* <RatingShoes rating="4.2" /> */}
          {/* <ReviewShoes /> */}
        </div>
      </div>
      <div className="text-[22px] w-[95%] font-semibold mx-auto">
        Similar Products
      </div>
      <CardSlider />
    </div>
  );
};

export default ProductDetails;
