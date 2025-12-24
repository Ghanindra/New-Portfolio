// "use client"

// import React,{ useState, useEffect } from "react"
// import profileImage from '../assets/profile.jpeg'
// import {Link} from "react-router-dom"
// export default function About() {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     setIsVisible(true)
//   }, [])

//   const skills = [
//     { name: "MongoDB", level: 90 },
//     { name: "Express.js", level: 85 },
//     { name: "React.js", level: 95 },
//     { name: "Node.js", level: 88 },
//     { name: "Tailwind CSS", level: 92 },
//     { name: "JavaScript", level: 93 },
//   ]

//   const stats = [
//     { label: "Projects Completed", value: "50+", icon: CheckCircleIcon },
//     { label: "Years Experience", value: "3+", icon: StarIcon },
//     { label: "Happy Clients", value: "30+", icon: UserIcon },
//     { label: "Code Commits", value: "2000+", icon: CodeIcon },
//   ]

//   const values = [
//     {
//       title: "Clean Code",
//       description: "Writing maintainable, readable, and scalable code that follows best practices.",
//       icon: CodeBracketIcon,
//     },
//     {
//       title: "User-Centric",
//       description: "Designing applications with the end-user experience as the top priority.",
//       icon: HeartIcon,
//     },
//     {
//       title: "Continuous Learning",
//       description: "Always exploring new technologies and improving my skill set.",
//       icon: LightbulbIcon,
//     },
//     {
//       title: "Problem Solving",
//       description: "Tackling complex challenges with creative and efficient solutions.",
//       icon: PuzzleIcon,
//     },
//   ]

//   return (
//     <div className="bg-[#050A09] text-[#F1F5F9] min-h-screen">
//       {/* Hero Section */}
//       <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div
//             className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//           >
//             {/* Profile Image */}
//             <div className="w-full lg:w-5/12 flex-shrink-0">
//               <div className="relative group">
//                 <div className="absolute -inset-1 bg-gradient-to-r from-[#10B981] to-[#D1FAE5] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
//                 <div className="relative">
//                   <img
//                     src={profileImage}
//                     alt="Ghanindra Bohora"
//                     className="rounded-2xl shadow-2xl border-2 border-[#10B981] w-full object-cover aspect-[4/5]"
//                   />
//                   <div className="absolute -bottom-6 -right-6 bg-[#0D1A18] border-2 border-[#10B981] rounded-xl p-4 shadow-xl">
//                     <div className="flex items-center gap-2">
//                       <div className="w-3 h-3 bg-[#10B981] rounded-full animate-pulse"></div>
//                       <span className="text-[#D1FAE5] font-medium">Available for work</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* About Text */}
//             <div className="w-full lg:w-7/12">
//               <div className="inline-block mb-4 px-4 py-2 bg-[#0D1A18] border border-[#10B981] rounded-full">
//                 <span className="text-[#10B981] font-semibold text-sm">Full Stack Developer</span>
//               </div>

//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#F1F5F9] leading-tight">
//                 Hi, I'm <span className="text-[#10B981]">Ghanindra Bohora</span>
//               </h1>

//               <div className="space-y-4 text-[#D1FAE5] leading-relaxed text-base sm:text-lg">
//                 <p>
//                   A passionate <span className="text-[#10B981] font-semibold">MERN stack developer</span> dedicated to
//                   building high-quality, real-world web applications. I specialize in creating functional, scalable, and
//                   maintainable solutions using <span className="text-[#10B981]">MongoDB</span>,{" "}
//                   <span className="text-[#10B981]">Express</span>, <span className="text-[#10B981]">React</span>, and{" "}
//                   <span className="text-[#10B981]">Node.js</span>.
//                 </p>

//                 <p>
//                   With a strong focus on clean code, performance optimization, and user-centric design, I strive to
//                   deliver web applications that not only meet business requirements but also provide a seamless
//                   experience for users. I enjoy tackling challenging problems, learning new technologies, and
//                   contributing to open-source projects.
//                 </p>

//                 <p>
//                   Outside of coding, I'm constantly exploring the latest trends in web development, experimenting with
//                   new frameworks, and improving my skills in UI/UX design. My goal is to blend creativity with technical
//                   expertise to build modern, efficient, and visually appealing applications.
//                 </p>
//               </div>

//               <div className="mt-8 flex flex-wrap gap-4">
//                 <Link
//                   to="/contact"
//                   className="px-6 py-3 bg-[#10B981] text-[#050A09] font-semibold rounded-lg hover:bg-[#0EA371] transition-all duration-300 hover:shadow-lg hover:shadow-[#10B981]/30 hover:-translate-y-1"
//                 >
//                   Get In Touch
//                 </Link>
//                 <Link
//                   to="/projects"
//                   className="px-6 py-3 bg-[#0D1A18] text-[#10B981] font-semibold rounded-lg border-2 border-[#10B981] hover:bg-[#10B981] hover:text-[#050A09] transition-all duration-300 hover:-translate-y-1"
//                 >
//                   View My Work
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0D1A18]/50">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//             {stats.map((stat, index) => (
//               <div
//                 key={index}
//                 className="bg-[#0D1A18] border border-[#10B981]/20 rounded-xl p-6 text-center hover:border-[#10B981] transition-all duration-300 hover:-translate-y-2 group"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <div className="flex justify-center mb-3">
//                   <stat.icon className="w-8 h-8 text-[#10B981] group-hover:scale-110 transition-transform duration-300" />
//                 </div>
//                 <div className="text-3xl sm:text-4xl font-bold text-[#10B981] mb-2">{stat.value}</div>
//                 <div className="text-[#D1FAE5] text-sm sm:text-base">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] mb-4">
//               Technical <span className="text-[#10B981]">Skills</span>
//             </h2>
//             <p className="text-[#D1FAE5] text-lg max-w-2xl mx-auto">
//               My expertise spans across the full MERN stack with a focus on modern web technologies.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
//             {skills.map((skill, index) => (
//               <div
//                 key={index}
//                 className="bg-[#0D1A18] border border-[#10B981]/20 rounded-xl p-6 hover:border-[#10B981] transition-all duration-300"
//               >
//                 <div className="flex justify-between items-center mb-3">
//                   <span className="text-[#F1F5F9] font-semibold text-lg">{skill.name}</span>
//                   <span className="text-[#10B981] font-bold">{skill.level}%</span>
//                 </div>
//                 <div className="w-full bg-[#050A09] rounded-full h-3 overflow-hidden">
//                   <div
//                     className="bg-gradient-to-r from-[#10B981] to-[#D1FAE5] h-full rounded-full transition-all duration-1000 ease-out"
//                     style={{ width: isVisible ? `${skill.level}%` : "0%" }}
//                   ></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0D1A18]/50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] mb-4">
//               My Core <span className="text-[#10B981]">Values</span>
//             </h2>
//             <p className="text-[#D1FAE5] text-lg max-w-2xl mx-auto">
//               The principles that guide my work and drive me to create exceptional web applications.
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {values.map((value, index) => (
//               <div
//                 key={index}
//                 className="bg-[#0D1A18] border border-[#10B981]/20 rounded-xl p-6 hover:border-[#10B981] transition-all duration-300 hover:-translate-y-2 group"
//               >
//                 <div className="w-12 h-12 bg-[#10B981]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#10B981]/20 transition-colors duration-300">
//                   <value.icon className="w-6 h-6 text-[#10B981]" />
//                 </div>
//                 <h3 className="text-xl font-bold text-[#F1F5F9] mb-3">{value.title}</h3>
//                 <p className="text-[#D1FAE5] leading-relaxed">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="bg-gradient-to-r from-[#10B981]/10 to-[#D1FAE5]/10 border border-[#10B981] rounded-2xl p-8 sm:p-12">
//             <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] mb-4">
//               Let's Build Something <span className="text-[#10B981]">Amazing</span> Together
//             </h2>
//             <p className="text-[#D1FAE5] text-lg mb-8 max-w-2xl mx-auto">
//               I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
//             </p>
//             <Link
//               to="/contact"
//               className="inline-block px-8 py-4 bg-[#10B981] text-[#050A09] font-bold rounded-lg hover:bg-[#0EA371] transition-all duration-300 hover:shadow-xl hover:shadow-[#10B981]/30 hover:-translate-y-1"
//             >
//               Start a Conversation
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// // Custom SVG Icons as Components
// function CheckCircleIcon({ className }) {
//   return (
//     <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//       />
//     </svg>
//   )
// }

// function StarIcon({ className }) {
//   return (
//     <svg className={className} fill="currentColor" viewBox="0 0 24 24">
//       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//     </svg>
//   )
// }

// function UserIcon({ className }) {
//   return (
//     <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//       />
//     </svg>
//   )
// }

// function CodeIcon({ className }) {
//   return (
//     <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//     </svg>
//   )
// }

// function CodeBracketIcon({ className }) {
//   return (
//     <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//     </svg>
//   )
// }

// function HeartIcon({ className }) {
//   return (
//     <svg className={className} fill="currentColor" viewBox="0 0 24 24">
//       <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//     </svg>
//   )
// }

// function LightbulbIcon({ className }) {
//   return (
//     <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
//       />
//     </svg>
//   )
// }

// function PuzzleIcon({ className }) {
//   return (
//     <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
//       />
//     </svg>
//   )
// }


"use client"

import React, { useState, useEffect } from "react"
import profileImage from "../assets/profile.jpeg"
import { Link } from "react-router-dom"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = [
    { name: "MongoDB", level: 90 },
    { name: "Express.js", level: 85 },
    { name: "React.js", level: 95 },
    { name: "Node.js", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "JavaScript", level: 93 },
  ]

  const stats = [
    { label: "Projects Completed", value: "50+", icon: CheckCircleIcon },
    { label: "Years Experience", value: "3+", icon: StarIcon },
    { label: "Happy Clients", value: "30+", icon: UserIcon },
    { label: "Code Commits", value: "2000+", icon: CodeIcon },
  ]

  const values = [
    {
      title: "Clean Code",
      description: "Writing maintainable, readable, and scalable code that follows best practices.",
      icon: CodeBracketIcon,
    },
    {
      title: "User-Centric",
      description: "Designing applications with the end-user experience as the top priority.",
      icon: HeartIcon,
    },
    {
      title: "Continuous Learning",
      description: "Always exploring new technologies and improving my skill set.",
      icon: LightbulbIcon,
    },
    {
      title: "Problem Solving",
      description: "Tackling complex challenges with creative and efficient solutions.",
      icon: PuzzleIcon,
    },
  ]

  return (
    <div className="bg-[#050A09] text-[#F1F5F9] min-h-screen overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Profile Image */}
            <div className="w-full lg:w-5/12 flex-shrink-0">
              <div className="relative group overflow-hidden">
                
                <div className="absolute -inset-1 bg-gradient-to-r from-[#10B981] to-[#D1FAE5] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500 pointer-events-none"></div>

                <div className="relative">
                  <img
                    src={profileImage}
                    alt="Ghanindra Bohora"
                    className="rounded-2xl shadow-2xl border-2 border-[#10B981] w-full object-cover aspect-[4/5]"
                  />

                  {/* Badge (mobile safe, desktop same) */}
                  <div className="absolute bottom-4 right-4 sm:-bottom-6 sm:-right-6 bg-[#0D1A18] border-2 border-[#10B981] rounded-xl p-4 shadow-xl">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#10B981] rounded-full animate-pulse"></div>
                      <span className="text-[#D1FAE5] font-medium">Available for work</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* About Text */}
            <div className="w-full lg:w-7/12">
              <div className="inline-block mb-4 px-4 py-2 bg-[#0D1A18] border border-[#10B981] rounded-full">
                <span className="text-[#10B981] font-semibold text-sm">Full Stack Developer</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Hi, I'm <span className="text-[#10B981]">Ghanindra Bohora</span>
              </h1>

              <div className="space-y-4 text-[#D1FAE5] leading-relaxed text-base sm:text-lg">
                <p>
                  A passionate <span className="text-[#10B981] font-semibold">MERN stack developer</span> dedicated to
                  building high-quality, real-world web applications.
                </p>
                <p>
                  Strong focus on clean code, performance optimization, and user-centric design.
                </p>
                <p>
                  Always exploring new technologies and improving my skills.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-[#10B981] text-[#050A09] font-semibold rounded-lg hover:bg-[#0EA371] transition-all duration-300 hover:-translate-y-1"
                >
                  Get In Touch
                </Link>
                <Link
                  to="/projects"
                  className="px-6 py-3 bg-[#0D1A18] text-[#10B981] font-semibold rounded-lg border-2 border-[#10B981] hover:bg-[#10B981] hover:text-[#050A09] transition-all duration-300 hover:-translate-y-1"
                >
                  View My Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0D1A18]/50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#0D1A18] border border-[#10B981]/20 rounded-xl p-6 text-center hover:border-[#10B981] transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-[#10B981] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-[#10B981] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#D1FAE5] text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

/* ICONS (UNCHANGED) */
function CheckCircleIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function StarIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function UserIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  )
}

function CodeIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  )
}

function CodeBracketIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}

function HeartIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )
}

function LightbulbIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0z" />
    </svg>
  )
}

function PuzzleIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
  )
}
