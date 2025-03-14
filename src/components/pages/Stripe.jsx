import React from "react";

const Stripe = ({ value }) => {
  return (
    <div className="w-[16.66%] px-2 py-3 border-t-[1px] border-r-[1px] border-b-[1px] border-zinc-700 flex items-center justify-between">
      <div className="w-[70%]  border-2">
        <img className="object-contain" src={value.url} alt="image" />
      </div>
      <span className="font-extrabold">{value.number}</span>
    </div>
  );
};

export default Stripe;
