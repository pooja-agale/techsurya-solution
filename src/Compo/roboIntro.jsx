// // RoboIntro.js
// import React, { useRef, forwardRef, useImperativeHandle } from 'react';
// import icon1 from "../assets/Frame3.png";
// import roboicon from "../assets/robo.png";

// const RoboIntro = forwardRef((props, ref) => {
//   const containerRef = useRef(null);

//   useImperativeHandle(ref, () => ({
//     container: containerRef,
//     fadeElements: containerRef.current.querySelectorAll('.fade-item'),
//     roboImages: containerRef.current.querySelectorAll('.robo-img'),
//   }));

//   return (
//     <div ref={containerRef} className="relative h-screen w-screen overflow-hidden">
//       <img src={icon1} className="h-full w-full object-cover object-bottom robo-img" alt="" />
//       <div className="text-white absolute justify-center text-center top-36 left-64 text-5xl whitespace-nowrap fade-item">
//         Empowering the Future
//       </div>
//       <button className="absolute left-48 top-52 rounded-3xl fade-item">
//         Explore Services
//       </button>
//       <div className="text-white flex gap-4 absolute justify-center text-center top-52 left-96 text-5xl fade-item">
//         With{" "}
//         <div className="bg-gradient-to-r from-[#53FAFE] to-[#004693] text-transparent bg-clip-text p-1">
//           AI-Driven Technology
//         </div>
//       </div>
//       <img src={roboicon} className="absolute bottom-0 left-80 h-96 robo-img" alt="Robo" />
//     </div>
//   );
// });

// export default RoboIntro;
