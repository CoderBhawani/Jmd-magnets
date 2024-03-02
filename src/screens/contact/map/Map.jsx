import React from "react";
import Image from "./image/mapbanner.png";

const Map = () => {
  return (
    <div className="w-full py-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5264434000705!2d77.31046807457085!3d28.583979686285485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45f034a4f99%3A0xd83a9eaf55532853!2sb%2C%20136%2C%20B%20Block%2C%20Sector%202%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1709375315654!5m2!1sen!2sin"
        className="w-[95%] mx-auto  lg:h-[600px] h-[350px] md:h-[500px]"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
