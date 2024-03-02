import React from "react";
import AboutTopBanner from "./aboutTopBanner/page";
import OurMissions from "./ourMissions/page";
import CardSlider from "../../common/cardSlider/CardSlider";

const About = () => {
  return (
    <div className="">
      <AboutTopBanner title="Get to Know About Us" bgBanner="" />
      <OurMissions />
      <CardSlider/>
    </div>
  );
};

export default About;
