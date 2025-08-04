import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Startup screens
import Loading from "./Loading";
import Intro from "./Intro";

// Main sections
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Innovate from "./Innovate";
import EarthCanvas from "./Location";
import FloatingCards from "./FloatingCards";
import GradientHeading from "./GradientHeading";
import Services from "./Services";
import Projects from "./Projects";
import Footer from "./Footer";

// Conditionally rendered sections
import ServicesHero from "./ServicesHero";
import SmartSolutions from "./SmartSolutions";

const Sequence = () => {
  const [index, setIndex] = useState(0);
  const [showMain, setShowMain] = useState(false);
  const [hasStartedMain, setHasStartedMain] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // "services", "projects", "smart", ""
  
  const components = [
    { component: (props) => <Loading onComplete={props.next} /> },
    { component: (props) => <Intro next={props.next} /> },
  ];

  const Current = components[index]?.component;

  const next = () => {
    if (index < components.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setHasStartedMain(true);
      setTimeout(() => setShowMain(true), 50);
    }
  };

  return (
    <>
      {/* Loading/Intro screens */}
      {!showMain && Current && (
        <motion.div
          key={index}
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-full z-50"
        >
          <Current next={next} />
        </motion.div>
      )}

      {/* Main Content */}
      {hasStartedMain && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 font-kodchasan"
        >
          <Navbar
            onHomeClick={() => setActiveSection("")}
            onServiceClick={() => setActiveSection("services")}
            onProjectClick={() => setActiveSection("projects")}
            onSmartSolutionClick={() => setActiveSection("smart")}
          />

          <AnimatePresence mode="wait">
            {/* Default full landing page */}
            {activeSection === "" && (
              <motion.div
                // key="main"
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // exit={{ opacity: 0 }}
                // transition={{ duration: 0.6 }}
              >
                <HeroSection />
                <Innovate />
                <Services />
                <GradientHeading />
                <FloatingCards />
                <EarthCanvas />
                <Projects />
                <Footer />
              </motion.div>
            )}

            {/* Services Section */}
            {activeSection === "services" && (
              <motion.div
                key="services"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <ServicesHero />
                <SmartSolutions />
              </motion.div>
            )}

            {/* Projects Section */}
            {activeSection === "projects" && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-20"
              >
                <Projects />
              </motion.div>
            )}

            {/* Smart Solutions Section */}
            {activeSection === "smart" && (
              <motion.div
                key="smart"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-20"
              >
                <SmartSolutions />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
};

export default Sequence;
