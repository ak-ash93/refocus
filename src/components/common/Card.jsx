import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { motion } from "motion/react";

const Card = ({ width, start, para, hover }) => {
  if (hover) {
    return (
      <div
        className={`${width} hover:bg-violet-500 bg-zinc-800 p-5 rounded-xl min-h-[35rem] flex flex-col justify-between`}
      >
        <div className="w-full">
          <div className="w-full flex justify-between">
            <h3>one heading</h3>
            <MdArrowRightAlt />
          </div>
          <h1 className="text-3xl font-medium mt-10">second heading</h1>
        </div>
        <div className="down-elem w-full">
          {start && (
            <>
              <h1 className="text-6xl font-semibold tracking-tight leading-none mt-60">
                Start Project
              </h1>
              <button className="rounded-full py-3 px-6 mt-7 border-blue-50 border-[1px] cursor-pointer hover:text-black hover:bg-blue-50">
                Contact-Us
              </button>
            </>
          )}
          {para && (
            <p className="text-sm text-zinc-400">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`${width} bg-zinc-800 p-5 rounded-xl min-h-[35rem] flex flex-col justify-between`}
      >
        <div className="w-full">
          <div className="w-full flex justify-between">
            <h3>one heading</h3>
            <MdArrowRightAlt />
          </div>
          <h1 className="text-3xl font-medium mt-10">second heading</h1>
        </div>
        <div className="down-elem w-full">
          {start && (
            <>
              <h1 className="text-6xl font-semibold tracking-tight leading-none mt-60">
                Start Project
              </h1>
              <button className="rounded-full py-3 px-6 mt-7 border-blue-50 border-[1px] cursor-pointer hover:text-black hover:bg-blue-50">
                Contact-Us
              </button>
            </>
          )}
          {para && (
            <p className="text-sm text-zinc-400">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          )}
        </div>
      </div>
    );
  }
};

export default Card;
