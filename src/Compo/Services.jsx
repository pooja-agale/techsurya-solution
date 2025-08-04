import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const servicesData = [
  {
    title: "Web Development",
    description:
      "We specialize in building dynamic, user-friendly websites that align with your business goals, Hwether youre're lunching a startup or scalling an enterprise, our websites are optimized for performance, SEO, and user engagement.",
    list: [
      "Business & Portfolio Websites",
      "E-Commerce Websites",
      "CMS-Based Development",
      "Web App UI/UX Design",
    ],
    image: "/10.png",
  },
  {
    title: "App Development",
    description:
      "Our mobile apps are built for performace and user experience across plaforms. We trun ideas into intuitive, high-quality apps that work smoothly on Android nd IOS devices.",
    list: [
      "Android & iOS Development",
      "Cross-Platform Apps",
      "UI/UX Optimized Design",
      "App Store Deployment",
    ],
    image: "/9.png",
  },
  {
    title: "Software Development",
    description:
      "We provide custom software solutions that fit your exact wrokflow and business operations, helping you work smarter and faster",
    list: [
      "Search Engine Optimization",
      "Social Media Management",
      "Content Creation",
      "Analytics & Reporting",
    ],
    image: "/8.png",
  },
];

// ⬇️ CARD COMPONENT (with INDIVIDUAL animation)
const ServiceCard = ({ data }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white text-black rounded-3xl shadow-xl overflow-hidden ml-8 mr-8 lg:ml-12 lg:mr-12"
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:h-[500px] border border-gray-200">
        {/* Left Text Section */}
        <div className="flex flex-col justify-start px-6 py-8 sm:px-10 md:px-12 w-full lg:w-[800px]">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-12 text-start lg:text-end lg:sticky top-10 bg-white z-20 py-2">
            {data.title}
          </h3>

          <div className="flex flex-col sm:flex-row justify-between gap-4 items-start">
            <p className="text-sm sm:text-base w-full sm:max-w-[48%] mb-4 sm:mb-0 mt-6 lg:mt-24 lg:leading-7">
              {data.description}
            </p>
            <ul className="text-md space-y-1 mt-6 lg:mt-24 lg:leading-10">
              {data.list.map((item, idx) => (
                <li
                  key={idx}
                  className="group relative cursor-pointer text-black transition-all duration-200"
                >
                  <span className="relative">
                    {item}
                    <span className="absolute left-0 -bottom-1.5 h-[1px] w-0 bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
                  </span>

                  {/* Tooltip visible only on lg+ */}
                  <span className="hidden lg:block absolute left-full top-1/2 -translate-y-1/2 px-4 w-60 bg-white text-black text-xl py-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                    Elegant, fast-loading websites to showcase your brand to
                    work
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="ml-0 lg:ml-20 flex items-center justify-center w-full h-64 sm:h-80 md:h-96 lg:h-full overflow-hidden">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.4 });

  return (
    <div className="bg-black text-white font-kodchasan min-h-screen relative z-0 py-10">
      {/* Scrolling heading */}
      <div
        className="relative w-full  mb-20 flex items-center justify-start overflow-hidden h-[240px] sm:h-[280px]"
        ref={headingRef}
      >
        {isHeadingInView && (
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <p className="text-[120px] sm:text-[180px] md:text-[220px] lg:text-[239px] font-bold bg-gradient-to-r from-white to-[#5E9FFF] bg-clip-text text-transparent whitespace-nowrap">
              OUR SERVICE OUR SERVICE OUR SERVICE OUR SERVICE
            </p>
          </motion.div>
        )}
      </div>
      {/* Content */}
      <motion.h2
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-left text-2xl sm:text-3xl md:text-5xl font-bold mb-20 ml-10 mr-10 lg:ml-20"
      >
        Digital Solution
        <div className="text-[18px] mt-10 leading-relaxed tracking-widest font-normal text-justify lg:text-left">
          <p>
            We help businesses grow with
            <span className="text-[#5E9FFF]">
              {" "}
              CUSTOME SOFTWARE DEVELOPMENT{" "}
            </span>
            tailored to their goals.
            {/* br only on large screens */}
            <span className="hidden lg:inline">
              <br />
            </span>
            <span className="text-[#FF9409]"> AGILE & SCALABLE SOLUTIONS </span>
            for evolving needs, and complete
            <span className="text-[#7657D5]"> END TO END </span> support.
          </p>
        </div>
      </motion.h2>
      {/* Sticky Cards with INDIVIDUAL animation */}
      {/* Sticky Cards with INDIVIDUAL animation */}
      <div className="space-y-[90px] ">
        {servicesData.map((service, index) => {
          const isLast = index === servicesData.length - 1;
          return (
            <div
              key={index}
              className="sticky"
              style={{
                top: isLast ? "230px" : "130px",
                zIndex: index + 1,
                paddingTop: index === 0 ? "0px" : "100px",
              }}
            >
              <ServiceCard data={service} />
            </div>
          );
        })}

        <div className="h-[50vh]" />
      </div>{" "}
      {/* ← CLOSE the sticky cards container here */}
      {/* ✅ View All Button — now OUTSIDE the sticky card container */}
      <div className="flex justify-center mt-12">
        <button className="bg-white text-black px-20 font-semibold py-4 rounded-full text-lg">
          View All
        </button>
      </div>
    </div>
  );
};

export default Services;
