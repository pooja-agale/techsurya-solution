import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMiniArrowLongRight } from "react-icons/hi2";

const Intro = ({ next }) => {
  const [moveHeading, setMoveHeading] = useState(false);
  const [hideButton, setHideButton] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [shouldExit, setShouldExit] = useState(false);

  useEffect(() => {
    const startSequence = setTimeout(() => {
      setMoveHeading(true);
      setHideButton(true);

      const imgTimeout = setTimeout(() => {
        setShowImages(true);

        const exitTimeout = setTimeout(() => {
          setShouldExit(true);
        }, 2500); // Time to display images

        return () => clearTimeout(exitTimeout);
      }, 1500); // Delay before showing images

      return () => clearTimeout(imgTimeout);
    }, 2500); // Initial delay

    return () => clearTimeout(startSequence);
  }, []);

  const handleExitComplete = () => {
    if (shouldExit) {
      next(); // Move to the next section after exit animation
    }
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {!shouldExit && (
        <motion.div
          key="intro"
          className="relative h-screen w-screen overflow-hidden"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -200 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >
          {/* Background */}
          <img
            className="h-full w-full object-cover object-bottom"
            src="/HomeBg.png"
            alt="Background"
          />

          {/* Heading */}
          <motion.div
            className="absolute z-10 text-white font-kodchasan text-center"
            initial={{
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
              position: "absolute",
            }}
            animate={
              moveHeading
                ? {
                    top: "6rem",
                    left: "50%", // Centered on small screens
                    x: "-50%",
                    y: "0%",
                    // Large screen override
                    ...(typeof window !== "undefined" &&
                    window.innerWidth >= 1024
                      ? { left: "15rem", x: "-25%" }
                      : {}),
                  }
                : {}
            }
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1
                className={`lg:text-6xl text-[30px] leading-tight lg:leading-[5.5rem] transition-all duration-1000 ${
                  moveHeading ? "ml-10 text-left" : "w-full text-center"
                }`}
              >
                Revolutionizing Business
                <br />
                with AI-Driven Solutions
              </motion.h1>
            </div>
          </motion.div>

          {/* Continue Button */}
          <AnimatePresence>
            {!hideButton && (
              <motion.button
                key="continue-button"
                onClick={() => setShouldExit(true)}
                className="absolute left-1/2 transform -translate-x-1/2 px-14 py-3 bg-white bg-opacity-20 text-white font-semibold rounded text-lg flex items-center justify-center gap-2 border border-white z-20"
                style={{
                  top: moveHeading ? "17rem" : "calc(50% + 6rem)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                Continue <HiMiniArrowLongRight className="text-xl" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Animated Images */}
          {showImages && (
            <>
              {/* Small screen - Intro1 (centered at bottom, larger size) */}
              <motion.img
                src="/Intro1.png"
                alt="Intro 1 small"
                className="absolute bottom-[-5px] left-23 transform -translate-x-1/2 h-[500px] w-[330px] block lg:hidden"
                initial={{ opacity: 0, y: 100, scale: 2 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />

              {/* Large screen - Intro1 */}
              <motion.img
                src="/Intro1.png"
                alt="Intro 1 large"
                className="absolute top-20 right-10 transform -translate-x-1/2 -translate-y-1/2 lg:h-[630px] lg:w-[500px] hidden lg:block"
                initial={{ opacity: 0, x: 500, scale: 2 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />

              {/* Large screen - Intro2 */}
              <motion.img
                src="/Intro2.png"
                alt="Intro 2"
                className="absolute top-72 left-12 transform translate-x-1/2 -translate-y-1/6 h-50 w-50 hidden lg:block"
                initial={{ opacity: 0, y: 300 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;
