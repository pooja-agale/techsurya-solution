// // components/AnimatedSection.jsx
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const AnimatedSection = ({ children }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: false,
//     threshold: 0.2,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 100 }}
//       animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default AnimatedSection;
