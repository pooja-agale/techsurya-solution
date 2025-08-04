// import React from "react";
// import { motion } from "framer-motion";

// const Intro = ({ next }) => {
//   return (
//     <div className="relative h-screen w-screen overflow-hidden">
//       {/* Background Image */}
//       <img
//         className="h-full w-full object-cover object-bottom max-[640px]:w-96"
//         src="/HomeBg.png"
//         alt="Background"
//       />

//       <div className="max-[640px]:flex max-[640px]:flex-col">
//         {/* Animated Text */}
//         <motion.div
//           className="absolute text-white font-jura text-5xl max-[640px]:text-3xl"
//           initial={{
//             left: "50%",
//             top: "50%",
//             x: "-50%",
//             y: "-50%",
//             scale: 1.5,
//           }}
//           animate={{
//             left: "20.3333%",
//             top: "33.3333%",
//             x: "-33.3333%",
//             y: "-33.3333%",
//             scale: 1.0,
//           }}
//           transition={{ duration: 1.2, ease: "easeInOut" }}
//         >
//           <p className="text-center font-kodchasan">Revolutionizing Business</p>
//           <p className="text-center mt-2 font-kodchasan">
//             with AI-Driven Solutions
//           </p>
//         </motion.div>

//         {/* Animated Image 1 */}
//         <motion.img
//           src="/Intro1.png"
//           className="absolute left-1/3 transform -translate-x-1/3 top-16 
//                      max-[640px]:-translate-x-2/4 max-[640px]:mt-[600px] 
//                      max-[640px]:left-auto min-[641px]:max-[1004px]:mt-80 
//                      h-48 w-48" // ⬅️ Reduced size
//           initial={{ opacity: 0, x: 100, y: 100, scale: 0.5 }}
//           animate={{ opacity: 1, x: -300, y: 0, scale: 1 }}
//           transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
//           alt="Intro1"
//         />

//         {/* Animated Image 2 */}
//         <motion.img
//           src="/Intro2.png"
//           className="absolute left-44 transform -translate-x-1/3 top-96 h-64 w-64 
//                      max-[640px]:mt-10 max-[640px]:-translate-x-3/4 
//                      max-[640px]:left-2/4 max-[640px]:mb-32 
//                      min-[641px]:max-[1004px]:mt-32 min-[641px]:max-[1004px]:left-1/4"
//           initial={{ opacity: 0, x: 100, y: 100, scale: 0.5 }}
//           animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
//           transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
//           alt="Intro2"
//         />
//       </div>
//     </div>
//   );
// };

// export default Intro;




// import React from 'react'

// const Intro2 = () => {
//   return (
//     <div>
//        <img
//         className="h-full w-full object-cover object-bottom max-[640px]:w-96"
//         src="/HomeBg.png"
//         alt="Background"
//       />
//     </div>
//   )
// }

// export default Intro2



// import React from 'react';

// const Intro2 = () => {
//   return (
//     <div className="relative h-screen w-screen overflow-hidden">
//       {/* Background Image */}
//       <img
//         className="h-full w-full object-cover object-bottom max-[640px]:w-96"
//         src="/HomeBg.png"
//         alt="Background"
//       />

//       {/* Overlay Heading */}
//       <h1 className="absolute top-1/4 left-60 transform -translate-x-1/4 text-white text-4xl font-bold  font-kodchasan max-[640px]:text-xl">
//         Revolutionizing Business with AI-Driven Solutions
//       </h1>

//       {/* Overlay Image 1 */}
//       <img
//         src="/Intro1.png"
//         alt="Intro 1"
//         className="absolute top-1/2 -right-48 transform -translate-x-1/2 -translate-y-1/2 h-[630px] w-[500px] mt-6"
//       />

//       {/* Overlay Image 2 */}
//       <img
//         src="/Intro2.png"
//         alt="Intro 2"
//         className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 h-48 w-48 max-[640px]:h-32 max-[640px]:w-32"
//       />
//     </div>
//   );
// };

// export default Intro2;