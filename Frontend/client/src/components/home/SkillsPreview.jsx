

"use client"

import React,{ useState, useEffect, useRef } from "react"

export default function SkillsPreview() {
  const [visibleSkills, setVisibleSkills] = useState([])
  const sectionRef = useRef(null)

  const skills = [
    { name: "React", level: 90, icon: "⚛️" },
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "Express", level: 88, icon: "🚂" },
    { name: "MongoDB", level: 82, icon: "🍃" },
    { name: "Tailwind CSS", level: 95, icon: "💨" },
    { name: "JavaScript", level: 92, icon: "💛" },
    { name: "Git & GitHub", level: 87, icon: "🔀" },
    { name: "REST APIs", level: 90, icon: "🔌" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          skills.forEach((_, index) => {
            setTimeout(() => {
              setVisibleSkills((prev) => [...prev, index])
            }, index * 100)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 bg-[#050A09] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#10B981] to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#10B981] text-sm font-semibold uppercase tracking-wider mb-4">
            My Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] mb-4">Technical Skills</h2>
          <p className="text-[#D1FAE5] text-lg max-w-2xl mx-auto">
            Proficient in modern web technologies with a focus on building robust full-stack applications
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative bg-[#0D1A18] border border-[#10B981]/20 rounded-xl p-6 hover:border-[#10B981] transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#10B981]/20 ${
                visibleSkills.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Skill icon */}
              <div className="text-4xl mb-4">{skill.icon}</div>

              {/* Skill name */}
              <h3 className="text-xl font-semibold text-[#F1F5F9] mb-3">{skill.name}</h3>

              {/* Progress bar */}
              <div className="relative w-full h-2 bg-[#050A09] rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#10B981] to-[#0D9668] rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: visibleSkills.includes(index) ? `${skill.level}%` : "0%",
                  }}
                />
              </div>

              {/* Skill level */}
              <div className="mt-2 text-right">
                <span className="text-[#10B981] text-sm font-semibold">
                  {visibleSkills.includes(index) ? skill.level : 0}%
                </span>
              </div>

              {/* Hover effect glow */}
              <div className="absolute inset-0 rounded-xl bg-[#10B981]/0 group-hover:bg-[#10B981]/5 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
