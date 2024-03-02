import React from "react";
import BottomContact from "./BottomContact/BottomContact";
import Map from "./map/Map";
import ContactHeader from "./ContactHeader/ContactHeader";

const Contact = () => {
  return (
    <>
    <ContactHeader/>
      <BottomContact />
      <Map/>
    </>
  );
};

export default Contact;
