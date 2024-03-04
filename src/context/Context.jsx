import React, { createContext } from "react";
import dhoklamagnet from "./allProductsImg/dhoklamagnet.jpg";
import biryanimagnet from "./allProductsImg/biryanimagnet.jpg";
import burgermagnet from "./allProductsImg/burgermagnet.jpg";
import chaikettlemagnet from "./allProductsImg/chaikettlemagnet.jpg";
import cholebhaturemagnet from "./allProductsImg/cholebhaturemagnet.jpg";
import cutecupcakemagnet from "./allProductsImg/cutecupcakemagnet.jpg";
import dosamagnet from "./allProductsImg/dosamagnet.jpg";
import fivestarchocolatemagnet from "./allProductsImg/fivestarchocolatemagnet.jpg";
import grilledsandwichmagnet from "./allProductsImg/grilledsandwichmagnet.jpg";
import idlisambharmagnet from "./allProductsImg/idlisambharmagnet.jpg";
import jalebimagnet from "./allProductsImg/jalebimagnet.jpg";
import kaajukatlimagnet from "./allProductsImg/kaajukatlimagnet.jpg";
import kfcmagnet from "./allProductsImg/kfcmagnet.jpg";
import mangocratemagnet from "./allProductsImg/mangocratemagnet.jpg";
import momosmagnet from "./allProductsImg/momosmagnet.jpg";
import nescafemagnet from "./allProductsImg/nescafemagnet.jpg";
import omlettemagnet from "./allProductsImg/omlettemagnet.jpg";
import paneertikkamagnet from "./allProductsImg/paneertikkamagnet.jpg";
import panipuri from "./allProductsImg/panipuri.jpg";
import parlegmagnet from "./allProductsImg/parlegmagnet.jpg";
import pavbhaajimagnet from "./allProductsImg/pavbhaajimagnet.png";
import pizzamagnet from "./allProductsImg/pizzamagnet.png";
import samosamagnet from "./allProductsImg/samosamagnet.jpg";
import seekhkebabmagnet from "./allProductsImg/seekhkebabmagnet.jpg";
import silknutellamagnet from "./allProductsImg/silknutellamagnet.jpg";
import starbucksmagnet from "./allProductsImg/starbucksmagnet.png";
import vadamagnet from "./allProductsImg/vadamagnet.jpg";

const ProductContext = createContext();

const ProductHolder = (props) => {
  const homeProducts = [
    {
      product_name: "Dhokla Magnet",
      product_decs: "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: dhoklamagnet,
      product_slug: "dhokla-magnet",
      product_price : "999",
      product_finalPrice: "599",
      product_discount : "40%",
    },
    {
      product_name: "Biryani Magnet",
      product_decs: "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: biryanimagnet,
      product_slug: "briyani-magnet",
      product_price : "999",
      product_finalPrice: "599",
      product_discount : "40%",
    },
    {
      product_name: "Burger Magnet",
      product_decs: "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: burgermagnet,
      product_slug: "burger-magnet",
      product_price : "999",
      product_finalPrice: "599",
      product_discount : "40%",
    },
    {
      product_name: "Chai Kettle Magnet",
      product_decs: "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: chaikettlemagnet,
      product_slug: "chai-kettle-magnet",
      product_price : "999",
      product_finalPrice: "599",
      product_discount : "40%",
    },
    {
      product_name: "Chole Bhature Magnet",
      product_decs: "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: cholebhaturemagnet,
      product_slug: "chole-bhature-magnet",
      product_price : "999",
      product_finalPrice: "599",
      product_discount : "40%",
    },
    {
      product_name: "Cute Cupcake Magnet",
      product_decs: "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: cutecupcakemagnet,
      product_slug: "cute-cupcake-magnet",
      product_price : "999",
      product_finalPrice: "599",
      product_discount : "40%",
    },
    {
      product_name: "Dosa Magnet",
      product_decs: "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: dosamagnet,
      product_slug: "dosa-magnet",
      product_price : "999",
      product_finalPrice: "599",
      product_discount : "40%",
    },
    {
      product_name: "Five Star Chocolate Magnet",
      product_decs: "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: fivestarchocolatemagnet,
      product_slug: "fivestar-chocolate-magnet",
      product_price : "999",
      product_finalPrice: "599",
      product_discount : "40%",
    },
    {
      product_name: "Grilled Sandwich Magnet",
      product_decs: "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: grilledsandwichmagnet,
      product_slug: "grilled-sandwich-magnet",
      product_price : "999",
      product_finalPrice: "599",
      product_discount : "40%",
    },
    {
      product_name: "Idli Sambhar Magnet",
      product_decs: "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: idlisambharmagnet,
      product_slug: "idli-sambhar-magnet",
      product_price : "999",
      product_finalPrice: "599",
      product_discount : "40%",
    },
    {
      product_name: "Jalebi Magnet",
      product_decs: "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: jalebimagnet,
      product_slug: "jalebi-magnet",
      product_price : "999",
      product_finalPrice: "599",
      product_discount : "40%",
    },
    {
      product_name: "Kaaju Katli Magnet",
      product_decs: "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: kaajukatlimagnet,
      product_slug: "kaaju-katli-magnet",
      product_price : "999",
      product_finalPrice: "599",
      product_discount : "40%",
    },
    {
      product_name: "KFC Magnet",
      product_decs: "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: kfcmagnet,
      product_slug: "kfc-magnet",
      product_price : "999",
      product_finalPrice: "599",
      product_discount : "40%",
    },
    {
      product_name: "Mango Crate Magnet",
      product_decs: "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: mangocratemagnet,
      product_slug: "mango-crate-magnet",
      product_price : "999",
      product_finalPrice: "599",
      product_discount : "40%",
    },
    {
      product_name: "Momos Magnet",
      product_decs: "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: momosmagnet,
      product_slug: "momos-magnet",
      product_price : "999",
      product_finalPrice: "599",
      product_discount : "40%",
    },
    {
      product_name: "Nescafe Magnet",
      product_decs: "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: nescafemagnet,
      product_slug: "nescafe-magnet",
      product_price : "999",
      product_finalPrice: "599",
      product_discount : "40%",
    },
    {
      product_name: "Omlette Magnet",
      product_decs: "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: omlettemagnet,
      product_slug: "omlette-magnet",
      product_price : "999",
      product_finalPrice: "599",
      product_discount : "40%",
    },
    {
      product_name: "Paneer Tikka Magnet",
      product_decs: "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: paneertikkamagnet,
      product_slug: "paneer-tikka-magnet",
      product_price : "999",
      product_finalPrice: "599",
      product_discount : "40%",
    },
    {
      product_name: "Panipuri Magnet",
      product_decs: "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: panipuri,
      product_slug: "panipuri-magnet",
      product_price : "999",
      product_finalPrice: "599",
      product_discount : "40%",
    },
    {
      product_name: "Parle-G Magnet",
      product_decs: "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: parlegmagnet,
      product_slug: "parleg-magnet",
      product_price : "999",
      product_finalPrice: "599",
      product_discount : "40%",
    },
    {
      product_name: "Pav Bhaaji Magnet",
      product_decs: "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: pavbhaajimagnet,
      product_slug: "pav-bhaaji-magnet",
      product_price : "999",
      product_finalPrice: "599",
      product_discount : "40%",
    },
    {
      product_name: "Pizza Magnet",
      product_decs: "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: pizzamagnet,
      product_slug: "pizza-magnet",
      product_price : "999",
      product_finalPrice: "599",
      product_discount : "40%",
    },
    {
      product_name: "Samosa Magnet",
      product_decs: "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: samosamagnet,
      product_slug: " samosa-magnet",
      product_price : "999",
      product_finalPrice: "599",
      product_discount : "40%",
    },
    {
      product_name: "Seekh Kebab Magnet",
      product_decs: "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: seekhkebabmagnet,
      product_slug: " seekh-kebab-magnet",
      product_price : "999",
      product_finalPrice: "599",
      product_discount : "40%",
    },
    {
      product_name: "Silk Nutella Magnet",
      product_decs: "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: silknutellamagnet,
      product_slug: " silk-nutella-magnet",
      product_price : "999",
      product_finalPrice: "599",
      product_discount : "40%",
    },
    {
      product_name: "Starbucks Magnet",
      product_decs: "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: starbucksmagnet,
      product_slug: "starbucks-magnet",
      product_price : "999",
      product_finalPrice: "599",
      product_discount : "40%",
    },
    {
      product_name: "Vada Magnet",
      product_decs: "How absolutely adorable is this fridge magnet? Make your boring fridge look cool with these lovely fridge magnets! Bring out the inner foodie in you and add some fun to your kitchen with these magnets!",
      product_img: vadamagnet,
      product_slug: "Vada-magnet",
      product_price : "999",
      product_finalPrice: "599",
      product_discount : "40%",
    },
  ];
  return (
    <ProductContext.Provider value={{ homeProducts }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductHolder;
export { ProductContext };
