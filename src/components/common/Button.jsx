import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { motion } from "motion/react";

const Button = ({ title = "Get Started" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="w-60 px-3 py-2 bg-blue-50 text-black rounded-full text-center flex items-center justify-center"
    >
      <span className="text-lg font-medium mr-2">{title}</span>
      <FaLocationArrow />
    </motion.div>
  );
};

export default Button;
