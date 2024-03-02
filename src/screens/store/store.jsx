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

const ProductDetails = () => {
  const { slug } = useParams(); // Use destructuring to extract slug from useParams
  const { homeProducts } = useContext(ProductContext); // Use destructuring to extract homeProducts from context
  const productData = homeProducts.find((prod) => prod.product_slug === slug); // Use find instead of filter since you're expecting one item

  return (
    <div className="w-full mb-6">
      <div className="container flex justify-between mx-auto">
        <div className="w-1/2 flex">
          <img
            src={productData.product_img}
            alt=""
            className="rounded-lg h-64 my-4 mx-auto"
          />
        </div>
        <div className="w-1/2">
          {productData && (
            <ProdTitleandDescrip
              title={productData.product_name} // Remove quotes around variable
              desc="Men White And Blue Memory Foam Technology Running Shoes"
              rating=""
              review=""
              mrp={productData.product_price} // Remove quotes around variable
              discount={productData.product_discount} // Remove quotes around variable
              price={Math.round(productData.product_finalPrice)} // Remove quotes around variable and fix the Math.round syntax
            />
          )}
          <div className="text-green-500 font-semibold text-sm cursor-pointer">
            inclusive of all taxes
          </div>
          <div className="flex gap-8 border-b pb-5 border-gray-800 mt-8">
            <button className="px-14 py-4 uppercase text-sm flex gap-1 items-center rounded-sm hover:bg-orange-500 bg-orange-400 text-black font-semibold">
              <GiElectric /> Buy Now
            </button>
            <button className="px-14 py-4 uppercase text-sm flex gap-1 items-center rounded-sm bg-yellow-600 hover:bg-yellow-500 text-black font-semibold">
              <IoBagCheck /> Add to Bag
            </button>
          </div>
          <DeleiveryOption />
          <RatingShoes rating="4.2" />
          <ReviewShoes />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
