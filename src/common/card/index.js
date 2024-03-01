import React from 'react'
import kkjj from "./image/kajukatlimagnet.png"
import momo from "./image/momosmagnet.png"
import amlet from "./image/omlettemagnet.png"

const Card = () => {
  return (
    <div className="flex justify-around  items-center flex-wrap gap-[5px] my-[30px]">
   
    <div className="w-[320px]   py-6 hidden lg:flex shadow-md hover:shadow-xl rounded-md scale-100 hover:scale-110 duration-500 justify-between">
      <img
        src={amlet}
        alt=""
        className="w-[152px] border m-2 h-[112px] "
      />
      <div className=" text-[14px] w-[190px]  flex justify-center  flex-col">
        <h4 className="font-[550]">
          Omlette magnet
        </h4>
        
        <div>
          <span className="text-[#FF4858]">215Rs</span>
          <span className="px-2 line-through text-[#C1C8CE]">$599</span>
        </div>
      </div>
    </div>
    <div className="w-[320px]  flex py-6  shadow-md hover:shadow-xl rounded-md scale-100 hover:scale-110 duration-500  justify-between ">
      <img
        src={kkjj}
        alt=""
        className="w-[152px] border m-2 h-[112px] "
      />
      <div className=" text-[14px] w-[190px] flex justify-center  flex-col">
        <h4 className="font-[550]">Kajukatli magnet</h4>
        
        <div>
          <span className="text-[#FF4858]">499 Rs</span>
          <span className="px-2 line-through text-[#C1C8CE]">$599</span>
        </div>
      </div>
    </div>
    <div className="w-[320px]  hidden lg:flex  py-6  shadow-md hover:shadow-xl rounded-md scale-100 hover:scale-110 duration-500  justify-between ">
      <img
        src={momo}
        alt=""
        className=" p-2 w-[152px] border m-2 h-[112px] "
      />
      <div className=" text-[14px] w-[190px] flex justify-center  flex-col">
        <h4 className="font-[550]">momos magnet</h4>
       
        <div>
          <span className="text-[#FF4858]">499Rs</span>
          <span className="px-2 line-through text-[#C1C8CE]">$599</span>
        </div>
      </div>
    </div>
   
  </div>
  )
}

export default Card