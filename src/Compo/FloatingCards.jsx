import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Expert Team",
    description:
      "Our skilled professionals bring cutting-edge expertise in web, mobile, and AI-driven technologies.",
    image: "techsurya-solution/public/Vector (14).png",
    style: "top-[80px] left-[260px] rotate-[4deg] z-30",
  },
  {
    title: "Customized Solutions",
    description:
      "We don’t believe in one-size-fits-all. Every solution is crafted specifically for your business goals.",
    image: "techsurya-solution/public/hugeicons_puzzle.png",
    style: "top-[360px] left-[150px] rotate-[-6deg] z-20",
  },
  {
    title: "Quality-First Approach",
    description:
      "From UI/UX design to backend logic, we ensure high-performance, scalable, and bug-free products.",
    image: "techsurya-solution/public/Group (3).png",
    style: "top-[260px] left-[450px] rotate-[5deg] z-10",
  },
  {
    title: "Transparent Process",
    description:
      "Stay updated with every phase of the project—we believe in full transparency and clear communication.",
    image: "techsurya-solution/public/stash_payment-link-light.png",
    style: "top-[150px] right-[300px] z-20",
  },
];

const FloatingCards = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const imageRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Global shrink and lift effect for all elements together
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

      cardsRef.current.filter(Boolean).forEach((card, index) => {
        const xOffset = index <= 2 ? -200 : 100;

        gsap.fromTo(
          card,
          { opacity: 0, x: xOffset },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Initial entry for the notepad image
      gsap.fromTo(
        imageRef.current,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative h-screen bg-black overflow-hidden text-white"
    >
      {/* Wrapper for global transform */}
      <div ref={wrapperRef} className="w-full h-full relative">
        {/* Notepad Image */}
        <div
          ref={imageRef}
          className="hidden lg:flex absolute right-10 bottom-20 w-[400px] h-[320px] rounded-2xl border border-[#ffffff33] bg-[#111827] shadow-inner items-center justify-center opacity-0"
        >
          <div className="w-[350px] h-[220px] rounded-xl shadow-lg mt-12 mx-auto">
            <img
              src="/notepad.png"
              alt="Folder"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Floating Cards for Large Screens (unchanged) */}
        {features.map((feature, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className={`hidden lg:block absolute w-[280px] bg-white/10 p-6 border border-white/80 text-white/90 rounded-[20px] backdrop-blur-md shadow-md opacity-0 ${feature.style}`}
          >
            <div className="w-10 h-10 mb-4 ml-12">
              <img
                src={`/${feature.image.replace(
                  "techsurya-solution/public/",
                  ""
                )}`}
                alt={feature.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-semibold text-lg text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-white/40 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}

        {/* Floating Cards for Small Screens */}
        <div className="flex flex-col gap-6 pt-4 px-4 lg:hidden">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="w-full max-w-sm bg-white/10 p-6 border border-white/80 text-white/90 rounded-[20px] backdrop-blur-md shadow-md"
            >
              <div className="w-10 h-10 mb-4">
                <img
                  src={`/${feature.image.replace(
                    "techsurya-solution/public/",
                    ""
                  )}`}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingCards;
