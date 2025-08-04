import React, { useEffect } from "react";
import img from "/EarthImage.png";

const HeroSection = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 overflow-hidden font-kodchasan">
      {/* Text Section */}
      <div className="z-10 max-w-xl text-center md:text-left mt-20 md:mt-0">
        <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[64px] font-bold leading-[1.2]">
          <span className="bg-gradient-to-r from-[#C1D4FD] to-[#0655FF] bg-clip-text text-transparent">
            Designed
          </span>{" "}
          to grow
          <br />
          with your vision
        </h1>

        <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed">
          We build powerful digital products that solve
          <br className="hidden sm:block" />
          real business challenges — with cutting-edge
          <br className="hidden sm:block" />
          tech and tailor-made strategies.
        </p>

        <div className="mt-10 text-2xl sm:text-3xl font-semibold flex justify-center md:justify-start items-center gap-x-4">
          <span className="text-white text-[48px] sm:text-[60px] md:text-[72px]">2k+</span>
          <span className="text-[16px] sm:text-[18px] md:text-[20px] font-normal block">
            Satisfied
            <br /> Customers
          </span>
        </div>
      </div>

      {/* Right Side Icons */}
      <div className="relative w-full md:w-1/2 h-[500px] flex items-center justify-center md:justify-end z-10 pr-0 md:pr-8 mt-16 md:mt-0">
        <div className="absolute top-[20px] right-[70%] sm:right-[300px] md:right-[450px] rounded-xl animate-bounce-slow">
          <img src="/Image1.png" className="h-[100px] sm:h-[110px] md:h-[130px]" />
        </div>

        <div className="absolute top-[50px] right-[20%] sm:right-[150px] md:top-[20px] md:right-[200px] rounded-xl animate-bounce-slow delay-[400ms]">
          <img src="/Image2.png" className="h-[90px] sm:h-[100px] md:h-[110px]" />
        </div>

        <div className="absolute top-[200px] right-[-20px] sm:right-[-20px] md:right-[-60px] rounded-xl animate-bounce-slow delay-[800ms]">
          <img src="/Image3.png" className="h-[90px] sm:h-[100px] md:h-[110px]" />
        </div>
      </div>

      {/* Globe Image */}
      <img
        src={img}
        alt="Globe"
        className="absolute top-[500px] sm:top-[400px] md:top-36 right-0 w-[600px] sm:w-[700px] md:w-[750px] lg:w-[800px] max-w-none drop-shadow-[0_0_20px_rgba(0,153,255,0.5)] pointer-events-none animate-bounce-slow"
      />
    </section>
  );
};

export default HeroSection;
