import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = ({
  onHomeClick,
  onServiceClick,
  onProjectClick,
  onSmartSolutionClick,
  isFadingOut = false,
}) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [fadeOutOverlay, setFadeOutOverlay] = useState(false);

  const categories = [
    "Web Development",
    "App Development",
    "Software Development",
    "Digital Marketing",
    "Cloud Hosting",
  ];

  const handleLinkClick = (link) => {
    setFadeOutOverlay(true);

    setTimeout(() => {
      setShowOverlay(false);
      setFadeOutOverlay(false);

      switch (link.toLowerCase()) {
        case "services":
          onServiceClick();
          break;
        case "projects":
          onProjectClick();
          break;
        case "smartsolutions":
          onSmartSolutionClick();
          break;
        case "about":
        default:
          onHomeClick();
          const section = document.getElementById(
            `${link.toLowerCase()}-section`
          );
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
          break;
      }
    }, 1200); // matches overlay fade out duration
  };

  const links = ["About", "Services", "Career", "Contact"];

  return (
    <>
      {/* Navbar Container (visible only when overlay is closed) */}
      {!showOverlay && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed top-0 left-0 w-full flex justify-between px-6 md:px-20 py-8 z-50 bg-transparent pointer-events-auto"
          style={{ backgroundColor: "transparent" }} // <-- explicit fallback
        >
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2.5, ease: [0.25, 0.8, 0.25, 1] }}
            src="/tech_surya_logo-removebg-preview 3.png"
            alt="Tech Surya Logo"
            className="h-[60px]"
          />

          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2.5,
              ease: [0.25, 0.8, 0.25, 1],
              delay: 0.3,
            }}
            className="border border-white px-4 rounded-lg h-[35px] pt-1 cursor-pointer mr-2"
            onClick={() => setShowOverlay(true)}
          >
            <RxHamburgerMenu className="text-white " size={24} />
          </motion.div>
        </motion.div>
      )}

      {/* Fullscreen Overlay */}
      {showOverlay && (
  <motion.div
    initial={{ opacity: 1 }}
    animate={{ opacity: fadeOutOverlay ? 0 : 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="fixed inset-0 bg-black text-white z-40 flex flex-col md:flex-row justify-between px-6 md:px-16 py-8 overflow-y-auto"
    style={{ pointerEvents: fadeOutOverlay ? "none" : "auto" }}
  >
    <div className="flex flex-col justify-between w-full md:w-3/2 space-y-10 font-kodchasan">
      {/* Overlay Top Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <img
          src="/tech_surya_logo-removebg-preview 3.png"
          alt="Tech Surya Logo"
          className="h-28 sm:h-36"
        />
        <div className="flex items-center gap-4">
          <button className="bg-white text-black font-medium px-8 sm:px-12 py-3 sm:py-4 text-xl sm:text-2xl hover:bg-gray-100 rounded-3xl transition">
            Let's Work
          </button>
          <button
            onClick={() => setShowOverlay(false)}
            className="bg-white p-3 sm:p-4 rounded-full"
          >
            <FiX className="text-black text-xl sm:text-2xl font-bold" />
          </button>
        </div>
      </div>

      {/* Overlay Content */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between">
        {/* Category Buttons (responsive grid for small screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full md:w-[550px]">
          {categories.map((category, index) => (
            <button
              key={index}
              className="border border-white rounded-full px-6 py-4 bg-[#D9D9D926] text-base sm:text-lg"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex flex-col justify-center items-end space-y-6 text-right text-4xl font-semibold tracking-wide font-kodchasan">
          {links.map((link, index) => (
            <a
              key={index}
              className="hover:text-gray-300 cursor-pointer"
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Small screen links */}
        <div className="flex md:hidden flex-col items-center space-y-4 mt-6 text-2xl font-semibold tracking-wide">
          {links.map((link, index) => (
            <a
              key={index}
              className="hover:text-gray-300 cursor-pointer"
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
)}

    </>
  );
};

export default Navbar;
