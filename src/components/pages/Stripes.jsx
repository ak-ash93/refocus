import React from "react";
import Stripe from "./Stripe";

const Stripes = () => {
  const data = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYpz8RV3VsApj4Ax8KryKn9Cw3PJiOqQoHxA&s",
      number: 48,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbuqxI3f_7fczAjY6oAYsOX9XI6i9Mhku4Xw&s",
      number: 2,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpkqguWmA6A4uh7Sb8r1TeMNnazziPPZ3MyA&s",
      number: 11,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYpz8RV3VsApj4Ax8KryKn9Cw3PJiOqQoHxA&s",
      number: 48,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbuqxI3f_7fczAjY6oAYsOX9XI6i9Mhku4Xw&s",
      number: 2,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpkqguWmA6A4uh7Sb8r1TeMNnazziPPZ3MyA&s",
      number: 11,
    },
  ];
  return (
    <div className="flex  mt-42">
      {data.map((item, index) => (
        <Stripe value={item} key={index} />
      ))}
    </div>
  );
};

export default Stripes;
