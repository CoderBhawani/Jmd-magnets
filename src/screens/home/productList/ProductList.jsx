import React, { useContext } from "react";
import { ProductContext } from "../../../context/Context";
import { Link  } from "react-router-dom";

const ProductList = () => {
  const { homeProducts } = useContext(ProductContext);

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-around gap-3 w-[90%]">
        {homeProducts.map((pro, i) => (
          <div
            key={i}
            className="w-[260px] my-6 py-4 flex justify-center flex-col items-center shadow-xl hover:shadow-lg rounded-md scale-100 hover:scale-105 duration-500"
          >
            <Link to={`/store/${pro.product_slug}`} className="w-[220px] rounded-2xl shadow-md hover:shadow-lg rounded- scale-100 hover:scale-105 duration-500">
              <img
                src={pro.product_img}
                alt={pro.product_name}
                className="cursor-pointer p-4 w-full h-full"
              />
            </Link>
            <div className="w-[80%] flex justify-start flex-col items-start">
              <div className="w-[100%] flex flex-col items-start">
                <Link to={`/${pro.product_slug}`} className="text-center py-2 font-[400] text-[14px] hover:cursor-pointer hover:text-black-500 hover:font-bold duration-500 hover:translate-x-2">
                  {pro.product_name}
                </Link>
                <Link to={`/store/${pro.product_slug}`}>
                  <div className="text-[12px] font-[600] gap-4 w-[100%]">
                    Rs. {pro.product_price}{" "}
                    <span className="text-grey-400 line-through">
                      Rs. {pro.product_finalPrice}
                    </span>
                    <span className="text-red-400">
                      ({pro.product_discount} OFF)
                    </span>
                  </div>
                </Link>
              </div>
              <div className="flex justify-center w-full gap-4 pt-2">
                <div className="bg-orange-500 mb-2 w-[100%] mx-auto text-center py-2 rounded-md text-white ">
                  Add to Cart
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
