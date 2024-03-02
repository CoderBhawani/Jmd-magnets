import React from "react";
import ourmissionImg from "./ourMissionsImg/ourmission.jpg";

const OurMissions = () => {
  return (
    <div className="w-[100%]  mt-10">
      <div className="w-[70%] mx-auto">
        <img src={ourmissionImg} alt="" className="w-[100%] h-[100%]" />
      </div>
      <div className="mt-10 mb-4 w-[30%] mx-auto">
        <h1 className="text-center text-orange-500 text-[40px]  tracking-widest font-[600]">
          Our Mission
        </h1>
        <p className="text-center text-xs">
          Personalize Your Space, Fridge Magnets Embrace!
        </p>
      </div>
      <div className="w-[60%] flex flex-col text-left  mx-auto text-[14px] ">
        <div className="my-3">
          <b className="text-[15px] ">About Us: More Than Just Magnets </b>{" "}
          We're passionate about bringing personality and joy to your home
          through the power of fridge magnets. We believe these little pieces
          are more than just decorations; they're conversation starters, memory
          keepers, and a way to express your unique style.
        </div>
        <div className="text-[22px] text-orange-500 font-bold">
          Here's what sets us apart:
        </div>
        <div className="my-3 ">
          <b className="text-[15px] "> Unbeatable selection : </b> We offer a
          diverse range of fridge magnets to cater to every taste and
          personality. From funny quotes and adorable animals to stunning
          artwork and personalized options, you're sure to find the perfect
          magnet (or two!) to add to your collection.
        </div>
        <div className="my-3">
          <b className="text-[15px]   "> High-quality materials: </b>
          We use durable materials and premium printing techniques to ensure
          your magnets stay vibrant and strong for years to come.
        </div>
        <div className="my-3">
          <b className="text-[15px]  "> Commitment to creativity: </b> We're
          constantly adding new designs and collaborating with talented artists
          to bring you the freshest and most unique magnets on the market.
        </div>
        <div className="my-3">
          <b className="text-[15px]  "> More than just a fridge : </b> Our magnets are versatile and can be used on any magnetic surface, from lockers and whiteboards to toolboxes and filing cabinets.
        </div>
      </div>
    </div>
  );
};

export default OurMissions;
