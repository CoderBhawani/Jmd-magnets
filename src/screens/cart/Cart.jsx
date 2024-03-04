import React, { useState } from "react";
import burgermagnet from "./cartImg/burgermagnet.jpg";
import starbucksmagnet from "./cartImg/starbucksmagnet.png";
import vadamagnet from "./cartImg/vadamagnet.jpg";

const CartPage = () => {
  const [cart, setCart] = useState([
    {
      product_name: "Burger Magnet",
      product_decs:
        "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: burgermagnet,
      product_slug: "burger-magnet",
      product_price: 999,
      quantity: 1,
      product_finalPrice: 599,
      product_discount: "40%",
    },
    {
      product_name: "Starbucks Magnet",
      product_decs:
        "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: starbucksmagnet,
      product_slug: "starbucks-magnet",
      product_price: 999,
      quantity: 1,
      product_finalPrice: 599,
      product_discount: "40%",
    },
    {
      product_name: "Vada Magnet",
      product_decs:
        "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: vadamagnet,
      product_slug: "Vada-magnet",
      product_price: 999,
      quantity: 1,
      product_finalPrice: 599,
      product_discount: "40%",
    },
  ]);

  // Function to calculate total price including tax and discount
  const getTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.product_finalPrice * item.quantity;
    });
    return totalPrice;
  };

  // Function to handle quantity change
  const handleQuantityChange = (slug, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.product_slug === slug) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Function to remove product from cart
  const handleRemoveProduct = (slug) => {
    const updatedCart = cart.filter((item) => item.product_slug !== slug);
    setCart(updatedCart);
  };

  return (
    <>
      <div>
        <div
          style={{
            minHeight: "100vh",
          }}
          className="text-black pt-20"
        >
          <div className="mx-auto justify-evenly px-6 flex ">
            <div className="w-[55%]">
              {cart.map((prod, i) => (
                <div
                  key={i}
                  className="justify-between mb-6 items-center flex rounded-lg bg-gray-200 shadow-lg"
                >
                  <div className="w-[150px] p-2 rounded-lg">
                    <img
                      src={prod.product_img}
                      alt="product-image"
                      className="w-[100%] cursor-pointer rounded-xl overflow-hidden"
                    />
                  </div>
                  <div className="flex justify-between pe-3 w-[80%]">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-[24px] font-bold text-gray-900">
                        {prod.product_name}
                      </h2>
                      <p className="mt-1 text-sm font-bold text-gray-900">
                        Rs.{prod.product_finalPrice}{" "}
                        <span className=" text-xs font-normal text-gray-500 line-through">
                          Rs.{prod.product_price}
                        </span>
                      </p>
                      <p className="text-orange-500">In stock</p>
                      <p className="text-green-600"> inclusive of all taxes</p>
                      <p className="text-semibold text-[12px]">
                        Return Policy Available
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      {/* Quantity Selector */}
                      <div className="flex items-center border-gray-100">
                        <span
                          className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-orange-500 hover:text-blue-50"
                          onClick={() =>
                            handleQuantityChange(
                              prod.product_slug,
                              Math.max(prod.quantity - 1, 1)
                            )
                          }
                        >
                          {" "}
                          -{" "}
                        </span>
                        <input
                          className="h-8 w-8 border bg-white text-center text-xs outline-none"
                          type="number"
                          value={prod.quantity}
                          min={1}
                          onChange={(e) =>
                            handleQuantityChange(
                              prod.product_slug,
                              parseInt(e.target.value)
                            )
                          }
                        />
                        <span
                          className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-orange-500 hover:text-blue-50"
                          onClick={() =>
                            handleQuantityChange(
                              prod.product_slug,
                              prod.quantity + 1
                            )
                          }
                        >
                          {" "}
                          +{" "}
                        </span>
                      </div>
                      {/* Total Price */}
                      <div className="flex items-center  space-x-4">
                        <p className="text-sm">
                          {prod.quantity * prod.product_finalPrice} Rs.
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6 cursor-pointer duration-150 font-bold hover:text-[red]"
                          onClick={() => handleRemoveProduct(prod.product_slug)}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Sub total */}
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total Pay</p>
                <div className="">
                  <p className="mb-1 text-[25px] font-bold">
                    {" "}
                    {getTotalPrice()} Rs.
                  </p>
                  <p className="text-[12px] text-red-500">
                    <span className="">Total Discount:</span>40%off{" "}
                  </p>
                  <p className="text-sm text-gray-700">Including VAT</p>
                </div>
              </div>
              <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
