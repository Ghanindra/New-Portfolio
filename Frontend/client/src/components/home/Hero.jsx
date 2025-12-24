

// "use client"

// import React,{ useState, useEffect } from "react"
// import {Link} from "react-router-dom"
// export default function Hero() {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     setIsVisible(true)
//   }, [])

//   return (
//     <section className="relative min-h-[90vh] flex items-center bg-[#050A09] text-[#F1F5F9] overflow-hidden">
//       {/* Animated background grid */}
//       <div className="absolute inset-0 opacity-10">
//         <div
//           className="absolute inset-0 "
//           style={{
//             backgroundImage: `linear-gradient(#10B981 1px, transparent 1px), linear-gradient(90deg, #10B981 1px, transparent 1px)`,
//             backgroundSize: "50px 50px",
//           }}
//         />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="text-center">
//           {/* Badge with animation */}
//           <div
//             className={`inline-flex items-center gap-2 bg-[#0D1A18] border border-[#10B981]/30 rounded-full px-4 py-2 mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
//           >
//             <span className="relative flex h-3 w-3">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10B981]"></span>
//             </span>
//             <span className="text-[#D1FAE5] text-sm font-medium">Available for Freelance</span>
//           </div>

//           {/* Main heading with staggered animation */}
//           <h1
//             className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
//           >
//             <span className="bg-gradient-to-r from-[#F1F5F9] to-[#D1FAE5] bg-clip-text text-transparent">
//               Full-Stack
//             </span>
//             <br />
//             <span className="text-[#10B981]">MERN Developer</span>
//           </h1>

//           {/* Description */}
//           <p
//             className={`text-[#D1FAE5] text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
//           >
//             I craft scalable, high-performance web applications using{" "}
//             <span className="text-[#10B981] font-semibold">MongoDB</span>,{" "}
//             <span className="text-[#10B981] font-semibold">Express</span>,{" "}
//             <span className="text-[#10B981] font-semibold">React</span>, and{" "}
//             <span className="text-[#10B981] font-semibold">Node.js</span>.
//             <br />
//             Turning ideas into reality, one line of code at a time.
//           </p>

//           {/* CTA Buttons */}
//           <div
//             className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
//           >
//             <Link
//               to="/projects"
//               className="group inline-flex items-center gap-2 bg-[#10B981] hover:bg-[#0D9668] text-[#050A09] px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-[#10B981]/40 hover:scale-105"
//             >
//               View My Work
//               <svg
//                 className="w-5 h-5 group-hover:translate-x-1 transition-transform"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//               </svg>
//             </Link>
//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-2 bg-[#0D1A18] hover:bg-[#0D1A18]/80 border-2 border-[#10B981] text-[#10B981] px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
//             >
//               Get In Touch
//             </Link>
//           </div>

//           {/* Tech stack icons */}
//           <div
//             className={`mt-16 flex flex-wrap justify-center items-center gap-8 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
//           >
//             <div className="text-[#D1FAE5]/60 text-sm font-medium">Tech Stack</div>
//             {["MongoDB", "Express", "React", "Node.js"].map((tech) => (
//               <div
//                 key={tech}
//                 className="px-4 py-2 bg-[#0D1A18] border border-[#10B981]/20 rounded-lg text-[#10B981] text-sm font-medium hover:border-[#10B981] transition-colors"
//               >
//                 {tech}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Decorative elements */}
//       <div className="absolute top-20 right-10 w-72 h-72 bg-[#10B981]/5 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl animate-pulse delay-1000" />
//     </section>
//   )
// }


"use client"

import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#050A09] text-[#F1F5F9] overflow-hidden">
      
      {/* Animated background grid (FIXED) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#10B981 1px, transparent 1px), linear-gradient(90deg, #10B981 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-[#0D1A18] border border-[#10B981]/30 rounded-full px-4 py-2 mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10B981]"></span>
            </span>
            <span className="text-[#D1FAE5] text-sm font-medium">
              Available for Freelance
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="bg-gradient-to-r from-[#F1F5F9] to-[#D1FAE5] bg-clip-text text-transparent">
              Full-Stack
            </span>
            <br />
            <span className="text-[#10B981]">MERN Developer</span>
          </h1>

          {/* Description */}
          <p
            className={`text-[#D1FAE5] text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            I craft scalable, high-performance web applications using{" "}
            <span className="text-[#10B981] font-semibold">MongoDB</span>,{" "}
            <span className="text-[#10B981] font-semibold">Express</span>,{" "}
            <span className="text-[#10B981] font-semibold">React</span>, and{" "}
            <span className="text-[#10B981] font-semibold">Node.js</span>.
            <br />
            Turning ideas into reality, one line of code at a time.
          </p>

          {/* CTA Buttons (z-10 safety) */}
          <div
            className={`relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 bg-[#10B981] hover:bg-[#0D9668] text-[#050A09] px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-[#10B981]/40 hover:scale-105"
            >
              View My Work
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#0D1A18] hover:bg-[#0D1A18]/80 border-2 border-[#10B981] text-[#10B981] px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>

          {/* Tech Stack */}
          <div
            className={`mt-16 flex flex-wrap justify-center items-center gap-8 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="text-[#D1FAE5]/60 text-sm font-medium">
              Tech Stack
            </div>
            {["MongoDB", "Express", "React", "Node.js"].map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 bg-[#0D1A18] border border-[#10B981]/20 rounded-lg text-[#10B981] text-sm font-medium hover:border-[#10B981] transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements (FIXED) */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#10B981]/5 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none" />
    </section>
  )
}
