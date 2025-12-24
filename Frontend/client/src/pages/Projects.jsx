"use client"

import React, { useEffect, useState } from "react"
// import axios from "axios"
import api from "../services/api"
import {Link} from 'react-router-dom'
export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const res = await api.get("api/projects")
      setProjects(res.data)
      setError(null)
    } catch (err) {
      console.error("Failed to load projects", err)
      setError("Failed to load projects. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050A09] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-[#0D1A18] border-t-[#10B981] rounded-full animate-spin mx-auto"></div>
          <p className="text-[#D1FAE5] text-lg">Loading projects...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#050A09] pb-16">
      {/* Hero Section */}
      <div className="text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-[#F1F5F9] mb-4">
          Featured <span className="text-[#10B981]">Projects</span>
        </h1>
        <p className="text-[#D1FAE5] max-w-2xl mx-auto text-lg md:text-xl">
          Explore my latest work showcasing innovative solutions and creative designs.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {error ? (
          <p className="text-[#D1FAE5] text-center col-span-full">{error}</p>
        ) : projects.length === 0 ? (
          <p className="text-[#D1FAE5] text-center col-span-full">No projects found</p>
        ) : (
          projects.map((project) => (
            <div
              key={project._id}
              className="relative bg-[#0D1A18] rounded-xl border border-[#10B981]/20 overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Featured badge */}
              {project.featured && (
                <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[#10B981] text-[#050A09] text-xs font-semibold shadow-md">
                  Featured
                </span>
              )}

              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-semibold text-[#F1F5F9]">{project.title}</h2>
                <p className="text-[#D1FAE5] text-sm leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-md bg-[#050A09] border border-[#10B981] text-[#10B981] text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-1 rounded-md bg-[#050A09] border border-[#10B981] text-[#10B981] text-xs font-medium">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-2">
                  {project.githubLink && (
                    <Link
                      to={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#10B981] text-[#10B981] text-sm font-medium hover:bg-[#10B981] hover:text-[#050A09] transition-colors"
                    >
                      {/* GitHub Icon */}
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Code
                    </Link>
                  )}
                  {project.liveLink && (
                    <Link
                      to={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#10B981] text-[#050A09] text-sm font-medium hover:bg-[#0D6B4E] transition-colors"
                    >
                      {/* External Link Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 3h7v7m0 0L10 21H3V3h7m7-7v7"
                        />
                      </svg>
                      Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
