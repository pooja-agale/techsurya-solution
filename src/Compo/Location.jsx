import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { motion, useAnimation, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 3D Earth Component
const Earth = () => {
  const earthRef = useRef();
  const texture = useLoader(THREE.TextureLoader, "/earthmap1k.jpg");

  const getScale = () => {
    const width = window.innerWidth;
    if (width < 640) return 0.6;
    if (width < 768) return 1.1;
    return 1.6;
  };

  const [scale, setScale] = useState(getScale());

  useEffect(() => {
    const handleResize = () => setScale(getScale());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame(() => {
    if (earthRef.current) earthRef.current.rotation.y += 0.0009;
  });

  return (
    <mesh ref={earthRef} scale={scale}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

// Dot component
const Dot = () => (
  <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
    <span className="absolute w-6 h-6 rounded-full border border-white opacity-20"></span>
    <span className="absolute w-4 h-4 rounded-full border border-white opacity-40"></span>
    <span className="absolute w-2 h-2 rounded-full bg-white z-10"></span>
  </div>
);

// Line component
const Line = () => (
  <div className="w-20 h-[1px] bg-white opacity-80 shrink-0"></div>
);

// Animated Marker
const Marker = ({ name, left, right, top, bottom, lineAfterText }) => {
  const ref = useRef();
  const isInView = useInView(ref, { triggerOnce: false, margin: "-20% 0px" });

  const variant = {
    hidden: { opacity: 0, x: lineAfterText ? -30 : 30 },
    visible: { opacity: 1, x: 0 },
  };

  const positionStyle = { left, right, top, bottom };

  return (
    <motion.div
      ref={ref}
      className="absolute overflow-x-hidden flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white whitespace-nowrap"
      style={positionStyle}
      variants={variant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {lineAfterText ? (
        <>
          <p>{name}</p>
          <Line />
          <Dot />
        </>
      ) : (
        <>
          <Dot />
          <Line />
          <p>{name}</p>
        </>
      )}
    </motion.div>
  );
};

// Earth Section
const EarthSection = () => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { threshold: 0.3, triggerOnce: true });

  const [cityMarkers, setCityMarkers] = useState([]);

  useEffect(() => {
    const isSmall = window.innerWidth < 640;
    const markers = isSmall
      ? [
          {
            name: "Chhatrapati Sambhajinagar",
            left: "0%",
            top: "37%",
            lineAfterText: true,
          },
          {
            name: "Pune",
            right: "3%",
            top: "45%",
            lineAfterText: false,
          },
          {
            name: "Nagpur",
            right: "18%",
            bottom: "40%",
            lineAfterText: false,
          },
          {
            name: "Nashik",
            left: "5%",
            bottom: "45%",
            lineAfterText: true,
          },
        ]
      : [
          {
            name: "Chhatrapati Sambhajinagar",
            left: "23%",
            top: "28%",
            lineAfterText: true,
          },
          { name: "Pune", right: "28%", top: "40%", lineAfterText: false },
          {
            name: "Nagpur",
            right: "30%",
            bottom: "20%",
            lineAfterText: false,
          },
          { name: "Nashik", left: "26%", bottom: "35%", lineAfterText: true },
        ];

    setCityMarkers(markers);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(wrapperRef.current, {
        y: -150,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          ease: "power2.inOut",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 100, scale: 1.2 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className="relative w-full bg-black font-kodchasan"
      style={{
        height:
          typeof window !== "undefined"
            ? window.innerWidth < 640
              ? "130vh" // for small screens
              : window.innerWidth < 768
              ? "160vh"
              : "200vh"
            : "200vh",
      }}
    >
      <div
        ref={wrapperRef}
        className="sticky  top-0 h-screen w-full overflow-hidden will-change-transform [transform-origin:center]"
      >
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          className="w-full h-full"
        >
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Earth />
        </Canvas>

        {cityMarkers.map((city, index) => (
          <Marker key={index} {...city} />
        ))}

        <h2 className="absolute bottom-1 w-full text-center text-2xl text-white font-semibold lg:mt-12">
          Our Office Branch Locations
        </h2>
      </div>
    </motion.div>
  );
};

export default EarthSection;
