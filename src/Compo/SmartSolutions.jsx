// (All imports remain the same)
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation wrapper
const AnimatedGroup = ({ children, delay = 0, y = 100 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 1.5,
          delay,
          ease: "easeOut",
        },
      });
    }
  }, [inView, controls, delay]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y }} animate={controls}>
      {children}
    </motion.div>
  );
};

const SmartSolutions = () => {
  const controlsService = useAnimation();
  const [refService, inViewService] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inViewService) {
      controlsService.start({
        scale: 1,
        y: 0,
        opacity: 1,
        transition: {
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
        },
      });
    }
  }, [inViewService, controlsService]);

  return (
    <div className="bg-black text-center font-kodchasan py-16 px-4 overflow-hidden">
      {/* SERVICES Title */}
      <div ref={refService}>
        <motion.h1
          initial={{ scale: 4, y: 300, opacity: 0 }}
          animate={controlsService}
          className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] font-black text-transparent bg-center bg-cover bg-no-repeat [background-image:url('/Group%202.png')] [background-clip:text] [webkit-background-clip:text] [webkit-text-fill-color:transparent] leading-none mb-24 tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] [text-shadow:2px_2px_0_rgba(0,0,0,0.2)] flex justify-center items-center"
        >
          SERVICES
        </motion.h1>
      </div>

      {/* Section: Heading */}
      <AnimatedGroup>
        <h2 className="text-white text-3xl sm:text-4xl font-semibold mb-4">
          Smart Solutions
        </h2>
        <p className="text-white mb-12 text-base sm:text-lg">
          Accelerate your growth with customized
          <br className="hidden sm:block" />
          software services designed for success.
        </p>
      </AnimatedGroup>

      {/* === SCROLL STEP 1 === */}
      <AnimatedGroup>
        <div className="relative w-full max-w-[95%] sm:max-w-[90%] md:w-[60%] mx-auto mb-10 rounded-3xl overflow-hidden shadow-lg border border-white/20">
          <img
            src="/Rectangle 4.png"
            alt="Web Development"
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white rounded-3xl p-4 w-[90%] sm:w-[290px] shadow-md text-left">
            <h3 className="font-bold text-lg mb-1">Web Development</h3>
            <p className="text-sm leading-relaxed">
              Designing responsive and user-
              <br />
              friendly websites that align with
              <br />
              your brand and business objectives.
            </p>
          </div>
        </div>
      </AnimatedGroup>

      {/* === SCROLL STEP 2 === */}
      <AnimatedGroup delay={0.2}>
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {/* Digital Marketing */}
          <div className="relative w-full sm:w-[350px] h-[350px] rounded-3xl overflow-hidden shadow-lg border border-white/20">
            <img
              src="/Frame 12.png"
              alt="Digital Marketing"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-white rounded-3xl p-4 w-[90%] sm:w-[70%] shadow-md text-left">
              <h3 className="font-bold text-lg mb-1">Digital Marketing</h3>
              <p className="text-[13px] leading-snug">
                Implementing data-driven digital
                <br />
                marketing strategies to increase
                <br />
                your online presence and reach
                <br />
                your target audience.
              </p>
            </div>
          </div>

          {/* App Development */}
          <div className="relative w-full sm:w-[500px] h-[350px] rounded-3xl overflow-hidden shadow-lg border border-white/20">
            <img
              src="/Frame 12 (1).png"
              alt="App Development"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-white rounded-3xl p-4 w-[90%] sm:w-[60%] shadow-md text-left">
              <h3 className="font-bold text-lg mb-1">App Development</h3>
              <p className="text-[13px] leading-snug">
                Creating high-performance
                <br />
                mobile applications for Android
                <br />
                and iOS platforms to enhance
                <br />
                user engagement.
              </p>
            </div>
          </div>
        </div>
      </AnimatedGroup>

      {/* === SCROLL STEP 3 === */}
      <AnimatedGroup delay={0.3}>
        <div className="flex flex-wrap justify-center gap-8 ml-6 ">
          {/* Software Dev */}
          <div className="relative w-full sm:w-[500px] h-[350px] rounded-3xl overflow-hidden shadow-lg border border-white/20">
            <img
              src="/Frame 13 (1).png"
              alt="Software Development"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-white rounded-3xl p-3 w-[90%] sm:w-[60%] shadow-md text-left">
              <h3 className="font-bold text-lg mb-1">Software Development</h3>
              <p className="text-[13px] leading-snug">
                Developing customized software
                <br />
                solutions to streamline
                <br />
                operations and improve
                <br />
                efficiency.
              </p>
            </div>
          </div>

          {/* UI/UX */}
          <div className="relative w-full sm:w-[330px] h-[350px] rounded-3xl overflow-hidden shadow-lg border border-white/20">
            <img
              src="/Frame 12 (2).png"
              alt="UI/UX Design"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-white rounded-3xl p-3 w-[90%] sm:w-[80%] shadow-md text-left">
              <h3 className="font-bold text-lg mb-1">UI/UX Design</h3>
              <p className="text-[13px] leading-snug">
                Crafting intuitive and engaging
                <br />
                user interfaces to enhance user
                <br />
                experience and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </AnimatedGroup>

      {/* CTA */}
      <AnimatedGroup delay={0.2}>
        <div className="space-y-8 mt-14 ml-4 mr-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-[40px] font-bold">
            Transform Your Idea into Reality
          </h1>
          <button className="bg-white px-10 sm:px-14 py-3 sm:py-4 rounded-full font-semibold text-xl sm:text-[25px]">
            Start Your Project
          </button>
        </div>
      </AnimatedGroup>
    </div>
  );
};

export default SmartSolutions;
