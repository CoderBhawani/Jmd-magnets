import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { CiCamera } from "react-icons/ci";
import TopBar from "../../common/Topbar/TopBar";

const Profile = () => {
  return (
    <>
      <TopBar />
      <div className="w-[100%] flex justify-center bg-white sm:bg-red">
        <div className="w-[708px] ">
          <form>
            <div className="bg-gradient-to-r from-orange-400 to-yellow-400">
              <div
                className="w-full relative h-[8rem] px-3 border-tl-4 border-tr-4 
              bg-gradient-to-r from-orange-400 to-yellow-400"
              >
                <div className="flex text-center items-center gap-6">
                  <div
                    className={`bg-white border-2 flex justify-center 
       
                mt-4 w-[100px] h-[100px] 
                rounded-full relative`}
                  ></div>
                </div>
              </div>
            </div>

            <div className="w-full  pt-[36px] py-[64px] bg-white px-[10px] sm:px-[36px]">
              <div className=" ">
                <span className="text-[24px] font-[500]">Account details</span>
                <div className=" flex items-center justify-between px-5 mt-4 ">
                  <span className="w-[34%] sm:w-[25%] text-[14px] sm:text-[16px]">
                    Email Address
                  </span>
                  <div className="flex justify-between w-[65%]  items-center">
                    <input
                      name="email"
                      placeholder="Email"
                      required
                      className="border  border-grey-500 outline-none 
                    rounded-md p-1 sm:px-2 sm:py-2  w-[75%]"
                    />
                  </div>
                </div>
                <div className=" flex mt-4 items-center justify-between px-5 ">
                  <span className="w-[34%]  sm:w-[25%] text-[14px] sm:text-[16px]">
                    Mobile Number
                  </span>
                  <div className="flex  justify-between w-[65%] items-center">
                    <input
                      name="phone"
                      placeholder="Phone"
                      type="phone"
                      className="border  border-grey-500 outline-none 
                  rounded-md p-1 sm:px-2 sm:py-2  w-[75%]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-4 py-10  bg-white px-[10px] sm:px-[36px]">
              <div className="">
                <span className="text-[24px] font-[500]">Personal details</span>
                <div className="px-5">
                  <div className=" items-center gap-6 flex mt-6">
                    <span className="w-[34%] text-[14px] sm:text-[16px]">
                      Name
                    </span>
                    <input
                      placeholder="Name"
                      type="text"
                      name="name"
                      className="border outline-none border-grey-400 w-[70%]
                   rounded-md px-2 py-[6px] sm:py-2"
                    />
                  </div>
                  <div className="gap-6 items-center flex mt-6">
                    <span className="w-[34%] text-[14px] sm:text-[16px]">
                      Birthday
                    </span>
                    <input
                      type="date"
                      name="birthDate"
                      className="border w-[70%] outline-none
                   border-grey-400 rounded-md px-2 py-2 "
                    />
                  </div>
                  <div className="gap-6 flex items-center mt-6">
                    <span className="w-[34%] text-[14px] sm:text-[16px]">
                      Gender
                    </span>
                    <div className="flex gap-3  w-[70%]">
                      <input
                        type="text"
                        name="male"
                        id=""
                        className={`border rounded-md border-gray-200 py-2
                     w-[100px] outline-none hover:bg-blue-600 duration-300  hover:text-white cursor-pointer text-center`}
                        value="Male"
                        readOnly
                      />
                      <input
                        type="text"
                        name="female"
                        id=""
                        className="border  rounded-md border-gray-200 py-2
                      w-[100px] outline-none hover:bg-pink-500 duration-300  hover:text-white cursor-pointer text-center"
                        value="Female"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className=" items-center gap-6 flex mt-6">
                    <span className="w-[34%] text-[14px] sm:text-[16px]">
                      Alternative Number
                    </span>
                    <input
                      placeholder="Alternative Number"
                      type="text"
                      name="name"
                      className="border outline-none border-grey-400 w-[70%]
                   rounded-md px-2 py-[6px] sm:py-2"
                    />
                  </div>
                  <div className=" items-center gap-6 flex mt-6">
                    <span className="w-[34%] text-[14px] sm:text-[16px]">
                      Address
                    </span>
                    <input
                      placeholder=""
                      type="text"
                      name="name"
                      className="border outline-none border-grey-400 w-[70%]
                   rounded-md px-2 py-[6px] sm:py-2"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div
                  className="bg-orange-500 hover:bg-black duration-300 py-2 flex justify-center w-[35%] mt-12
              rounded-sm text-white cursor-pointer"
                >
                  Save Changes
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
