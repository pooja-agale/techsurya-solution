import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";

import robotImg from "/1.png";
import earthImg from "/2.png";

import logo1 from "/4.png";
import logo2 from "/5.png";
import logo3 from "/4.png";
import logo4 from "/5.png";
import logo5 from "/4.png";
import logo6 from "/5.png";

const HeroSection = () => {
  const [scrollStage, setScrollStage] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  const ref = useRef(null);
  const secondRef = useRef(null);
  const paragraphRef = useRef(null);

  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  const isParagraphInView = useInView(paragraphRef, {
    once: false,
    threshold: 0.5,
  });
  const paragraphControls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isParagraphInView) {
      paragraphControls.start({ opacity: 1, y: 0 });
    } else {
      paragraphControls.start({ opacity: 0, y: -100 });
    }
  }, [isParagraphInView, paragraphControls]);

  useEffect(() => {
    const handleScroll = () => {
      const secondTop = secondRef.current?.getBoundingClientRect().top;
      if (secondTop < window.innerHeight / 1.2) {
        setScrollStage(2);
      } else if (window.scrollY > 30) {
        setScrollStage(1);
      } else {
        setScrollStage(0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1 });
    }
  }, [isInView, controls]);

  const robotVariants = isLargeScreen
    ? {
        0: { y: -200, x: -13, scale: 1 }, // Stage 0
        1: { y: 40, x: -13, scale: 1 }, // Stage 1
        2: { y: 600, x: -400, scale: 1 }, // Stage 2
      }
    : {
        0: { y: -50, x: -180, scale: 0.95 },
        1: { y: 120, x: -180, scale: 0.95 },
        2: { y: 40, x: 0, scale: 1 },
      };

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 10 });
  const springY = useSpring(y, { stiffness: 200, damping: 10 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX * 0.1);
    y.set(offsetY * 0.1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative text-white overflow-hidden font-kodchasan pt-32 bg-black">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-80"
        style={{
          backgroundImage: `
            radial-gradient(circle at 40% 45%, #1e3a8a 0%, transparent 60%),
            linear-gradient(to bottom, transparent 100%, black 100%)`,
        }}
      ></div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 1, ease: "easeOut" }}
        className="min-h-screen relative z-10"
      >
        <div className="max-w-7xl mx-auto px-6 pt-6 ">
          <div className="text-center md:text-left leading-[3rem] md:leading-[4rem] ">
            <h1 className="text-2xl md:text-6xl font-bold ml-0 md:ml-8">
              <motion.div
                className="leading-[3.2rem] md:leading-[4.2rem]"
                initial={{ x: -1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                Empowering the Future
              </motion.div>

              <motion.span
                className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-4"
                initial={{ x: 1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <button className="bg-white text-black p-2 lg:px-7 lg:py-4 rounded-full text-sm shadow-md hover:scale-105 transition lg:ml-12 ml-4">
                  Explore Services
                </button>
                <p className="text-blue-400 text-xl lg:text-6xl">
                  <span className="text-white text-xl lg:text-6xl">With </span>
                  AI-Driven Technology
                </p>
              </motion.span>
            </h1>
          </div>

          <div className="relative flex flex-col justify-center items-center mt-20 md:mt-40">
            {/* ✅ Logos for large screens (as-is) */}
            {isLargeScreen && (
              <>
                <div className="absolute inset-30 flex justify-center items-center mt-[-120px] z-0 pointer-events-none">
                  {[logo1, logo2, logo3, logo4, logo5, logo6].map(
                    (logo, index) => (
                      <motion.img
                        key={`lg-mid-${index}`}
                        src={logo}
                        alt={`Logo${index + 1}`}
                        className={`w-20 absolute ${
                          [
                            "top-[50%] left-[20%]",
                            "top-[30%] right-[20%]",
                            "top-1/2 left-[10%] transform -translate-y-1/2",
                            "top-1/2 right-[10%] transform -translate-y-1/2",
                            "bottom-[15%] right-[20%]",
                            "bottom-[15%] left-[20%]",
                          ][index]
                        }`}
                        initial={{ opacity: 0, y: 100, scale: 0.6 }}
                        animate={
                          scrollStage >= 1
                            ? {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: {
                                  duration: 1,
                                  delay: index * 0.2,
                                  ease: "easeOut",
                                },
                              }
                            : { opacity: 0, y: 100, scale: 0.6 }
                        }
                        style={{
                          zIndex: scrollStage >= 1 ? 10 : 0,
                        }}
                      />
                    )
                  )}
                </div>

                <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
                  {[logo1, logo2, logo3, logo4, logo5, logo6].map(
                    (logo, index) => (
                      <motion.img
                        key={`lg-low-${index}`}
                        src={logo}
                        alt={`Logo${index + 1}`}
                        className={`w-16 sm:w-20 absolute ${
                          [
                            "top-[-2%] left-[15%] lg:top-[-4%] lg:left-[19%]",
                            "top-[-1%] right-[20%] lg:top-[-3%] lg:right-[28%]",
                            "top-1/3 left-[-2%] lg:top-[200px] lg:left-[8%] transform -translate-y-1/2",
                            "top-1/3 right-[4%] lg:top-[200px] lg:right-[18%] transform -translate-y-1/2",
                            "bottom-[20%] right-[15%] lg:bottom-[14%] lg:right-[26%]",
                            "bottom-[20%] left-[9%] lg:bottom-[15%] lg:left-[16%]",
                          ][index]
                        }`}
                        initial={{ opacity: 0, y: 100, scale: 0.6 }}
                        animate={
                          scrollStage >= 1
                            ? {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                zIndex: 20,
                                transition: {
                                  duration: 1,
                                  delay: index * 0.2,
                                  ease: "easeOut",
                                },
                              }
                            : { opacity: 0, y: 100, scale: 0.6 }
                        }
                      />
                    )
                  )}
                </div>
              </>
            )}

            {/* ✅ Logos for small screens: below Earth in grid */}
            <div className="">
              {!isLargeScreen && (
                <div className="grid grid-cols-2 gap-6 mt-72 mb-[-15px] z-10 relative">
                  {[logo1, logo2, logo3, logo4, logo5, logo6].map(
                    (logo, index) => (
                      <motion.img
                        key={`sm-${index}`}
                        src={logo}
                        alt={`Logo${index + 1}`}
                        className="w-20 mx-auto"
                        initial={{ opacity: 0, y: 40, scale: 0.6 }}
                        animate={
                          scrollStage >= 1
                            ? {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: {
                                  duration: 0.8,
                                  delay: index * 0.1,
                                  ease: "easeOut",
                                },
                              }
                            : { opacity: 0, y: 40, scale: 0.6 }
                        }
                      />
                    )
                  )}
                </div>
              )}
            </div>

            {/* Earth image */}
            <motion.img
              src={earthImg}
              alt="Earth"
              className={`
                w-[340px] sm:w-[400px] md:w-[600px] lg:w-[660px] 
                z-10 mx-4 sm:mx-12 relative 
                top-[-590px]  sm:top-[-20px] lg:top-[-20px] 
                left-[10px] sm:left-1/2 lg:left-[-5%] 
                transform -translate-x-1/2 lg:translate-x-[-50%]
                ${
                  scrollStage === 0
                    ? "[filter:drop-shadow(0_-40px_40px_white)]"
                    : scrollStage === 1
                    ? "[filter:drop-shadow(0_40px_40px_white)]"
                    : ""
                }
              `}
              animate={{
                scale: scrollStage >= 1 ? 0.9 : 1,
                y: scrollStage >= 1 ? -30 : 0,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            {/* Robot image */}
            <motion.img
              src={robotImg}
              alt="Robot"
              className={`
    absolute z-20
    ${
      isLargeScreen
        ? "w-[700px] top-[10px] left-[18%]"
        : "w-[350px] sm:w-[280px] top-[170px] left-[30px] -translate-x-1/2"
    }
  `}
              animate={
                isLargeScreen
                  ? robotVariants[scrollStage]
                  : scrollStage === 0
                  ? { y: -250, opacity: 1 }
                  : scrollStage === 1
                  ? { y: -170, opacity: 1 }
                  : { opacity: 0 } // Hide completely in stage 2
              }
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>

      <div
        ref={secondRef}
        className="mx-auto px-6 flex flex-col md:flex-row items-center justify-between lg:pb-20 bg-black text-center md:text-left"
      >
        {isLargeScreen && (
          <div className="md:w-1/2 mb-6 md:mb-8 bg-black"></div>
        )}

        <div className="mt-[-240px] md:mt-0">
          {" "}
          {/* 👈 Push up on small screens */}
          <motion.p
            ref={paragraphRef}
            animate={paragraphControls}
            className="lg:text-[38px] lg:max-w-4xl text-white cursor-pointer leading-relaxed"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            We empower Businesses and
            <br /> individuals with cutting-edge digital
            <br />
            solutions. With a strong focus on
            <br /> innovation and quality, our expert team
            <br /> delivers reliable, scalable, and result-driven services
            across various domains.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
