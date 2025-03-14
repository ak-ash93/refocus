import React from "react";
import Marquee from "react-fast-marquee";

const images = import.meta.glob("../../assets/images/*.{png,jpg,jpeg,webp}", {
  eager: true,
});
const imageArray = Object.values(images).map((img) => img.default);

const Marquees = () => {
  return (
    <div>
      {/* Marquee scrolling to the left */}
      <Marquee speed={100} gradient={false} direction="left" className="mt-20">
        {imageArray.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Marquee image ${index}`}
            style={{ height: "100px", marginRight: "5px" }}
          />
        ))}
      </Marquee>

      {/* Marquee scrolling to the right */}
      <Marquee speed={100} gradient={false} direction="right">
        {imageArray.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Marquee image ${index}`}
            style={{ height: "100px" }}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Marquees;
