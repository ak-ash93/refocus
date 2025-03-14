import React from "react";
import Button from "../common/Button";

const Product = ({ val, mover, count, setHoveredIndex }) => {
  return (
    <div
      className="w-full text-white hover:bg-purple-600 transition-all ease-in duration-500 relative cursor-pointer"
      onMouseEnter={() => setHoveredIndex(count)} // Set hovered index when mouse enters
      onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index when mouse leaves
    >
      <div
        onMouseEnter={() => {
          mover(count);
        }}
        className="max-w-screen h-[23rem] px-20 mx-auto flex items-center justify-between "
      >
        <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
        <div className="details w-1/2">
          <p className="mb-10">{val.description}</p>
          <div className="flex items-center gap-10">
            {val.live && <Button title="Go to live website" />}
            {val.case && <Button title="Case study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
