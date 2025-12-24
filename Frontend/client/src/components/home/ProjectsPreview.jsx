"use client"

import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import api from "../../services/api"
export default function ProjectsPreview() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [projects, setProjects] = useState([])

  // Fetch projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await api.get("/projects")
        const featuredProjects = res.data.filter((project) => project.featured)
        setProjects(featuredProjects)
      } catch (err) {
        console.error("Failed to load projects", err)
      }
    }
    fetchProjects()
  }, [])

  return (
    <section className="bg-[#050A09] py-20 sm:py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#10B981] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#10B981] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#10B981] text-sm font-semibold uppercase tracking-wider mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] mb-4">
            Featured Projects
          </h2>
          <p className="text-[#D1FAE5] text-lg max-w-2xl mx-auto">
            Showcasing my best work in full-stack web development
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project._id}
              className="group relative bg-[#0D1A18] border border-[#10B981]/20 rounded-2xl overflow-hidden hover:border-[#10B981] transition-all duration-500 hover:shadow-xl hover:shadow-[#10B981]/20 animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(project._id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Card content */}
              <div className="p-8">
                {/* Project icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#10B981] to-[#0D9668] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7 text-[#050A09]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>

                {/* Project title */}
                <h3 className="text-2xl font-bold text-[#F1F5F9] mb-4 group-hover:text-[#10B981] transition-colors">
                  {project.title}
                </h3>

                {/* Project description */}
                <p className="text-[#D1FAE5] mb-6 leading-relaxed">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#050A09] border border-[#10B981]/30 rounded-lg text-[#10B981] text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Details Link */}
                <Link
                  to={`/projects/${project._id}`} // Navigate to single project page
                  className="inline-flex items-center gap-2 text-[#10B981] font-semibold group-hover:gap-3 transition-all cursor-pointer"
                >
                  View Details
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>

              {/* Hover overlay (pointer-events-none fixes click issue) */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-[#10B981]/10 to-transparent transition-opacity duration-300 pointer-events-none ${
                  hoveredProject === project._id ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-[#0D1A18] hover:bg-[#10B981] border-2 border-[#10B981] text-[#10B981] hover:text-[#050A09] px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            View All Projects
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
