import React from "react";
import "./index.css";

const AboutTopBanner = ({ bgBanner, title }) => {
  return (
    <div className={`w-full h-[90vh] ${bgBanner ?? ""} aboutBgBanner`}>
      <div className="about-overlay flex justify-center items-center h-[100%] w-[100%] ">
        <div className="flex justify-center text-white w-[60%]  mx-auto items-center flex-col">
          <div className="text-orange-500  text-[60px] font-bold">{title}</div>
          <div className="text-[19px]">More than just magnets, they're mini masterpieces.</div>
        </div>
      </div>
    </div>
  );
};

export default AboutTopBanner;
