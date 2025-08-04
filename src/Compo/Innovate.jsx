import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import bgImg from "/7.png";
import phoneImg from "/PhoneImg.png"
gsap.registerPlugin(ScrollTrigger);

const Innovate = () => {
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const wrapperRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current || !sectionRef.current) return;

    gsap.to(wrapperRef.current, {
      scale: 0.65,
      y: -150,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        ease: "power2.inOut",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const headingInView = useInView(headingRef, {
    triggerOnce: true,
    margin: "0px 0px -10% 0px",
  });
  const contentInView = useInView(contentRef, {
    triggerOnce: true,
    margin: "0px 0px -10% 0px",
  });
  const imageInView = useInView(imageRef, {
    triggerOnce: true,
    margin: "0px 0px -10% 0px",
  });

  const fromBottom = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 1 },
  };

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div
        ref={wrapperRef}
        className="min-h-screen px-6 md:px-20 py-12 flex flex-col md:flex-row items-start justify-between relative"
      >
        {/* Left: Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="md:w-1/2 text-center md:text-left space-y-6 mt-14"
        >
          {/* Heading */}
          <motion.h1
            ref={headingRef}
            className="text-4xl md:text-7xl font-semibold md:leading-snug mb-10"
            variants={fromBottom}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Innovate.
            <br />
            Build.
            <br />
            Elevate.
          </motion.h1>

          {/* Paragraph and Button */}
          <motion.div
            ref={contentRef}
            variants={fromBottom}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <p className="text-xl max-w-lg text-white mb-4">
              We deliver future-ready digital solutions tailored for your
              business growth.
            </p>

            <button className="mt-6 px-20 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:scale-105 transition w-fit mx-auto md:mx-0">
              Contact Us
            </button>
          </motion.div>
        </motion.div>

        {/* Right: Phone Image */}
        <motion.div
          ref={imageRef}
          className="w-full flex justify-center md:w-1/3 md:absolute md:top-12 md:right-6 mt-10 md:mt-14"
          variants={fromBottom}
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={phoneImg}
            alt="Phone Mockup"
            className="w-[300px] md:w-[400px] drop-shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Innovate;
