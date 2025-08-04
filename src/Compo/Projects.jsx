import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ProjectCards = [
  {
    title: "Web Projects",
    img: "/projectImage1.jpg",
  },
  {
    title: "App Projects",
    img: "/projectImage2.jpg",
  },
  {
    title: "Software Projects",
    img: "/projectImage3.jpg",
  },
];

const Projects = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { triggerOnce: true });

  return (
    <div className="p-4 sm:p-6 lg:p-12 lg:pt-[100px] text-center bg-black min-h-screen font-kodchasan relative">
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: 50 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-xl sm:text-2xl lg:text-3xl mb-8 sm:mb-10 lg:mb-12 font-bold text-white text-left  sm:mt-10 lg:mt-12">
          Crafted with code
        </h1>
      </motion.div>

      <div className="relative">
        {ProjectCards.map((item, index) => {
          const cardRef = useRef(null);
          const cardInView = useInView(cardRef, { triggerOnce: true });
          const isLastCard = index === ProjectCards.length - 1;

          return (
            <motion.div
              key={index}
              ref={cardRef}
              initial={{ opacity: 0, y: 80 }}
              animate={cardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="sticky"
              style={{
                top: isLastCard ? "230px" : "130px",
                zIndex: index + 1,
                paddingTop: index === 0 ? "0px" : "100px",
              }}
            >
              <div className="w-full max-w-[1300px] mx-auto relative bg-white rounded-3xl shadow-xl text-left px-3 sm:px-4 lg:px-6 h-auto pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
                {/* Title */}
                <div className="relative group p-4 sm:p-6">
                  <h2 className="text-base sm:text-xl lg:text-3xl font-semibold">{item.title}</h2>
                  <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white font-semibold text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow text-xs sm:text-lg lg:text-2xl">
                      Open
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className="relative group">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[510px] object-cover rounded-3xl"
                  />
                  <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white font-semibold text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow text-xs sm:text-lg lg:text-2xl">
                      Open
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
        <div className="h-[100px]" />
      </div>
    </div>
  );
};

export default Projects;
