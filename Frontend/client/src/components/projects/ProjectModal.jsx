"use client"

import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import {Link} from 'react-router-dom'
import api from "../../services/api"
export default function ProjectModal() {
  const { id } = useParams() // get project ID from route
  const navigate = useNavigate()
  const [project, setProject] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setIsLoading(true)
        const res = await api.get(`api/projects/${id}`)
        setProject(res.data)
        setError(null)
      } catch (err) {
        console.error(err)
        setError("Failed to load project details")
      } finally {
        setIsLoading(false)
      }
    }
    if (id) fetchProject()
  }, [id])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#050A09] flex items-center justify-center px-6">
        <div className="text-center animate-fade-in">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#10B981] border-r-transparent mb-4"></div>
          <p className="text-[#D1FAE5] text-lg">Loading project details...</p>
        </div>
      </div>
    )
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-[#050A09] flex items-center justify-center px-6">
        <div className="text-center animate-fade-in">
          <div className="mb-4">
            <svg className="w-16 h-16 mx-auto text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#F1F5F9] mb-2">Oops!</h2>
          <p className="text-[#D1FAE5]">{error || "Project not found"}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#050A09] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)} // navigate back
          className="mb-8 flex items-center gap-2 text-[#10B981] hover:text-[#D1FAE5] transition-colors duration-300 group animate-fade-in"
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-medium">Back to Projects</span>
        </button>

        {/* Main Content */}
        <div className="bg-[#0D1A18] border border-[#10B981]/20 rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up">
          {/* Project Image */}
          {project.image && (
            <div className="relative h-64 md:h-96 overflow-hidden bg-[#050A09]">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A09] via-transparent to-transparent"></div>
            </div>
          )}

          {/* Content */}
          <div className="p-6 md:p-10">
            {/* Title & Status */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-1.5 bg-[#10B981]/10 border border-[#10B981] text-[#10B981] text-sm font-medium rounded-full animate-pulse-slow">
                  Featured Project
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-[#F1F5F9] mb-4 leading-tight">{project.title}</h1>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-[#D1FAE5] text-lg leading-relaxed">{project.description}</p>
            </div>

            {/* Tech Stack */}
            {project.techStack && project.techStack.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-[#10B981] mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-[#050A09] border border-[#10B981]/40 text-[#10B981] rounded-lg font-medium hover:bg-[#10B981] hover:text-[#050A09] transition-all duration-300 cursor-default animate-fade-in-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Project Details Grid */}
            {(project.features || project.challenges) && (
              <div className="mb-8 grid md:grid-cols-2 gap-6">
                {project.features && (
                  <div className="bg-[#050A09] border border-[#10B981]/20 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-[#10B981] mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Key Features
                    </h3>
                    <p className="text-[#D1FAE5] leading-relaxed">{project.features}</p>
                  </div>
                )}
                {project.challenges && (
                  <div className="bg-[#050A09] border border-[#10B981]/20 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-[#10B981] mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      Challenges
                    </h3>
                    <p className="text-[#D1FAE5] leading-relaxed">{project.challenges}</p>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-[#10B981]/20">
              {project.githubLink && (
                <Link
                  to={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-[#050A09] border-2 border-[#10B981] text-[#10B981] rounded-xl font-semibold hover:bg-[#10B981] hover:text-[#050A09] transition-all duration-300 group"
                >
                  View on GitHub
                </Link>
              )}
              {project.liveLink && (
                <Link
                  to={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-[#10B981] text-[#050A09] rounded-xl font-semibold hover:bg-[#0D9668] hover:shadow-lg hover:shadow-[#10B981]/50 transition-all duration-300 group"
                >
                  View Live Demo
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
