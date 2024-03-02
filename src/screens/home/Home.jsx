import React from "react";
import HomeSlider from "./homeSlider/homeSlider";
import OurFacilities from "./ourFacilties/OurFacilities";
import CardSlider from "../../common/cardSlider/CardSlider";
import ProductList from "./productList/ProductList";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <ProductList/>
      <OurFacilities/>
      <CardSlider/>
    </div>
  );
};

export default Home;
