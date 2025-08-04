import React from "react";
import { motion } from "framer-motion";

const Who = () => {
  return (
    <div className="bg-black w-screen h-screen overflow-hidden text-white text-2xl font-jura flex flex-col items-center">
      {/* Heading */}
      <motion.div
        className="text-white text-center mt-32 text-5xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        Who We Are
      </motion.div>

      {/* Paragraph */}
      <motion.div
        className="text-center mt-14"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut", delay: 1.0 }}
      >
        <div className="flex justify-center gap-1 text-2xl">
          At
          <div className="text-[#FF9500]">Techsurya</div>
          <div className="text-[#4B9ECE] flex">It Solution</div>
        </div>
        <div className="opacity-40 mt-2">
          we specialize in delivering cutting-edge AI solutions tailored
        </div>
        <div className="opacity-40">
          to your business needs. Our team of experts is dedicated to transforming
        </div>
        <div className="opacity-40">
          challenges into opportunities through innovative technology
        </div>
      </motion.div>

      {/* Button */}
      <motion.button
        className="text-white font-light bg-transparent border border-white hover:bg-white hover:text-black cursor-pointer rounded-tr-md px-6 py-2 mt-8 text-lg transition duration-300 ease-in-out"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 2.2 }}
      >
        Let's get Started
      </motion.button>
    </div>
  );
};

export default Who;
