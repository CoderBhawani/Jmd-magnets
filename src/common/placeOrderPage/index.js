// import React from "react";
// import phonepay from "./image/phnpay.jpg";
// import cash from "./image/money.png";

// const PlaceOrder = () => {
//   return (
//     <div className="checkout-container w-[100%] bg-white rounded-lg shadow-md p-8 flex justify-center gap-[12rem]">
//       {/* Address Form */}
//       <div className="address-form w-1/3 shadow-2xl px-12 py-4">
//         <div className="flex justify-start">
//           {" "}
//           <h2 className="text-lg font-semibold text-orange-500 mb-4">
//             Contact
//           </h2>
//         </div>

//         <div className="form-group mb-4">
//           <label
//             htmlFor="username"
//             className="block text-sm font-medium text-gray-700">
//             Username:
//           </label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//             placeholder="Enter Username"
//           />
//         </div>
//         <div className="form-group mb-4">
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium text-gray-700">
//             Email:
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//             placeholder="Enter Email"
//           />
//         </div>
//         <h2 className="text-lg font-semibold text-orange-500 mb-4">Address</h2>
//         <div className="form-group mb-4">
//           <label
//             htmlFor="pincode"
//             className="block text-sm font-medium text-gray-700">
//             Pin Code:
//           </label>
//           <input
//             type="text"
//             id="pincode"
//             name="pincode"
//             className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//             placeholder="Enter Pin Code"
//           />
//         </div>
//         <div className="form-group mb-4">
//           <label
//             htmlFor="city"
//             className="block text-sm font-medium text-gray-700">
//             City/Town Name:
//           </label>
//           <input
//             type="text"
//             id="city"
//             name="city"
//             className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//             placeholder="Enter City/Town Name"
//           />
//         </div>

//         <div className="form-group mb-4">
//           <label
//             htmlFor="phone"
//             className="block text-sm font-medium text-gray-700">
//             Phone Number:
//           </label>
//           <input
//             type="text"
//             id="phone"
//             name="phone"
//             className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//             placeholder="Enter Phone Number"
//           />
//         </div>
//         <div className="form-group mb-4">
//           <label
//             htmlFor="address"
//             className="block text-sm font-medium text-gray-700">
//             Building No./Flat/Street:
//           </label>
//           <input
//             type="text"
//             id="address"
//             name="address"
//             className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//             placeholder="Enter Building No./Flat/Street"
//           />
//         </div>
//         <div className="place-order w-1/3 flex items-center justify-center">
//           <button
//             className="place-order-btn bg-orange-500 text-white px-4 py-2
//          rounded-md shadow-md hover:bg-orange-600 transition duration-300 ease-in-out">
//             Add Address
//           </button>
//         </div>
//       </div>

//       {/* Payment Details */}
//       <div className="payment-details w-1/3 pt-8 shadow-2xl px-8">
//         <h2 className="text-lg font-semibold text-orange-500 mb-4">
//           Payment Details
//         </h2>

//         <div className="payment-item mb-2 flex justify-between">
//           <p>Total MRP </p>
//           <p>$100</p>
//         </div>
//         <div className="payment-item mb-2 flex justify-between">
//           <p>Discount on MRP</p>
//           <p> $20</p>
//         </div>
//         <div className="payment-item mb-2 ">
          
//             <p className="mb-2 font-bold">Payment Method</p>
//             <div className="  px-4 py-4 shadow-2xl">
//               <div className="flex justify-between">
//                <div className="flex flex-col">
//                <label className="radio-label">
//                   <input
//                   name="val"
//                     type="radio"
//                     value="cashOnDelivery"
//                     // checked={selectedOption === 'cashOnDelivery'}
//                     // onChange={handleOptionChange}
//                   />
//                 Cash on Delivery
//                 </label>
//                </div>
              
//                 <img src={cash} alt="" className="w-[30px] h-[30px]" />
//               </div>
//               <div className="flex justify-between mt-2">
//                 <div>
//                 <label className="radio-label gap-2">
//                   <input
//                     type="radio"
//                     value="payWithQR"
//                     className=""
//                     // checked={selectedOption === 'payWithQR'}
//                     // onChange={handleOptionChange}
//                   />
//                   Pay with QR
//                 </label>
//                 </div>
                
//                 <img src={phonepay} className="w-[30px] h-[30px]" alt="" />
//               </div>
//             </div>
        
//         </div>
//         <div className="payment-item mb-2 w-[100%] border-b border-gray-400 pb-2"></div>
//         <div className="payment-item mb-2 w-[100%] border-b border-gray-400 pb-2">
//           <p className="font-bold">Total Amount: $80</p>
//         </div>

//         <div className="place-order w-[100%] flex items-center justify-center mt-12">
//           <button
//             className="place-order-btn bg-orange-500 text-white  py-2 px-12 w-[60%]
//             rounded-md shadow-md hover:bg-orange-600 transition duration-300 ease-in-out">
//             Place Order
//           </button>
//         </div>
//       </div>

     
//     </div>
//   );
// };

// export default PlaceOrder;




import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import phonepay from "./image/phnpay.jpg";
import cash from "./image/money.png";

const PlaceOrder = () => {
  const navigate = useNavigate(); // Using useNavigate instead of useHistory
  const [paymentMethod, setPaymentMethod] = useState("cashOnDelivery");

  const handlePaymentMethodChange =(event)=>{
    setPaymentMethod(event.target.value)
    if(paymentMethod==="cashOnDelivery"){
      navigate("/Qrcodecomponent")
    }

  }
 

  return (
    <div className="checkout-container w-full bg-white rounded-lg shadow-md p-8 flex justify-center gap-12rem">
       <div className="address-form w-1/3 shadow-2xl px-12 py-4">
        <div className="flex justify-start">
          {" "}
          <h2 className="text-lg font-semibold text-orange-500 mb-4">
            Contact
          </h2>
        </div>

        <div className="form-group mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter Username"
          />
        </div>
        <div className="form-group mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter Email"
          />
        </div>
        <h2 className="text-lg font-semibold text-orange-500 mb-4">Address</h2>
        <div className="form-group mb-4">
          <label
            htmlFor="pincode"
            className="block text-sm font-medium text-gray-700">
            Pin Code:
          </label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter Pin Code"
          />
        </div>
        <div className="form-group mb-4">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700">
            City/Town Name:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter City/Town Name"
          />
        </div>

        <div className="form-group mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700">
            Phone Number:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter Phone Number"
          />
        </div>
        <div className="form-group mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700">
            Building No./Flat/Street:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter Building No./Flat/Street"
          />
        </div>
        <div className="place-order w-1/3 flex items-center justify-center">
          <button
            className="place-order-btn bg-orange-500 text-white px-4 py-2
         rounded-md shadow-md hover:bg-orange-600 transition duration-300 ease-in-out">
            Add Address
          </button>
        </div>
      </div>

      {/* Payment Details */}
      <div className="payment-details w-1/3 pt-8 shadow-2xl px-8">
        {/* Payment details content */}
        <h2 className="text-lg font-semibold text-orange-500 mb-4">
          Payment Details
        </h2>

        <div className="payment-item mb-2 flex justify-between">
          <p>Total MRP </p>
          <p>$100</p>
        </div>
        <div className="payment-item mb-2 flex justify-between">
          <p>Discount on MRP</p>
          <p> $20</p>
        </div>
        <div className="payment-item mb-2 "></div>
        <div className="payment-item mb-2">
          <p className="mb-2 font-bold">Payment Method</p>
          <div className="px-4 py-4 shadow-2xl">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <label className="radio-label">
                  <input
                    name="val"
                    type="radio"
                    value="cashOnDelivery"
                    checked={paymentMethod === "cashOnDelivery"}
                    onChange={handlePaymentMethodChange}
                  />
                  Cash on Delivery
                </label>
              </div>
              <img src={cash} alt="" className="w-6 h-6" />
            </div>
            <div className="flex justify-between mt-2">
              <div>
                <label className="radio-label gap-2">
                  <input
                    name="val"
                    type="radio"
                    value="payWithQR"
                    checked={paymentMethod === "payWithQR"}
                    onChange={handlePaymentMethodChange}
                  />
                  Pay with QR
                </label>
              </div>
              <img src={phonepay} className="w-6 h-6" alt=""/>
            </div>
          </div>
        </div>
        <div className="payment-item mb-2 w-full border-b border-gray-400 pb-2"></div>
        <div className="payment-item mb-2 w-full border-b border-gray-400 pb-2">
          <p className="font-bold">Total Amount: $80</p>
        </div>
        <div className="place-order w-full flex items-center justify-center mt-12" >
          <button className="place-order-btn bg-orange-500 text-white py-2 px-12 w-60 rounded-md
           shadow-md hover:bg-orange-600 transition duration-300 ease-in-out">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;

