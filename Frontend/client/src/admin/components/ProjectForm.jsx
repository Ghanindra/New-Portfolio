"use client"

import React,{ useState,useEffect } from "react"
import adminAPI from '../api/adminApi.js'; // Uncomment when ready to use
import { setAdminToken } from "../api/adminApi.js";
import toast from "react-hot-toast";
export default function ProjectForm({ fetchProjects }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [techStack, setTechStack] = useState("")
  const [githubLink, setGithubLink] = useState("")
  const [liveLink, setLiveLink] = useState("")
  const [image, setImage] = useState("")
  const [featured, setFeatured] = useState(false)
  const [loading, setLoading] = useState(false)
  
useEffect(() => {
  const token = localStorage.getItem("adminToken");
  if (token) setAdminToken(token); // attach token to axios headers
}, [])
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      // Convert techStack string to array
      const techArray = techStack.split(",").map((tech) => tech.trim())

      await adminAPI.post("api/admin/projects", {
        title,
        description,
        techStack: techArray,
        githubLink,
        liveLink,
        image,
        featured,
      });

      // Mock success for demo
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Reset form
      setTitle("")
      setDescription("")
      setTechStack("")
      setGithubLink("")
      setLiveLink("")
      setImage("")
      setFeatured(false)

      if (fetchProjects) fetchProjects() // refresh project list
      toast.success("Project added successfully!")
    } catch (err) {
      toast.error("Error adding project")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-[#0D1A18] border border-[#10B981]/20 rounded-2xl p-6 md:p-8 shadow-2xl animate-fade-in">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-[#10B981]/10 rounded-lg">
              <svg className="w-6 h-6 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#F1F5F9]">Add New Project</h2>
          </div>
          <p className="text-[#F1F5F9]/60 ml-14">Fill in the details to add a new project to your portfolio</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div className="group">
            <label className="block text-sm font-medium text-[#D1FAE5] mb-2">
              Project Title <span className="text-[#10B981]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="My Awesome Project"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-[#050A09] border border-[#10B981]/30 rounded-xl px-4 py-3 text-[#F1F5F9] placeholder-[#F1F5F9]/40 focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20 transition-all duration-300"
                required
              />
            </div>
          </div>

          {/* Description Textarea */}
          <div className="group">
            <label className="block text-sm font-medium text-[#D1FAE5] mb-2">
              Description <span className="text-[#10B981]">*</span>
            </label>
            <textarea
              placeholder="Describe your project in detail..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-[#050A09] border border-[#10B981]/30 rounded-xl px-4 py-3 text-[#F1F5F9] placeholder-[#F1F5F9]/40 focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20 transition-all duration-300 resize-none"
              rows={4}
              required
            />
          </div>

          {/* Tech Stack Input */}
          <div className="group">
            <label className="block text-sm font-medium text-[#D1FAE5] mb-2">
              Tech Stack
              <span className="text-[#F1F5F9]/40 text-xs ml-2">(comma separated)</span>
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#10B981]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="React, Node.js, MongoDB, Tailwind"
                value={techStack}
                onChange={(e) => setTechStack(e.target.value)}
                className="w-full bg-[#050A09] border border-[#10B981]/30 rounded-xl pl-11 pr-4 py-3 text-[#F1F5F9] placeholder-[#F1F5F9]/40 focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20 transition-all duration-300"
              />
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* GitHub Link */}
            <div className="group">
              <label className="block text-sm font-medium text-[#D1FAE5] mb-2">GitHub Repository</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#10B981]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <input
                  type="url"
                  placeholder="https://github.com/username/repo"
                  value={githubLink}
                  onChange={(e) => setGithubLink(e.target.value)}
                  className="w-full bg-[#050A09] border border-[#10B981]/30 rounded-xl pl-11 pr-4 py-3 text-[#F1F5F9] placeholder-[#F1F5F9]/40 focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20 transition-all duration-300"
                />
              </div>
            </div>

            {/* Live Link */}
            <div className="group">
              <label className="block text-sm font-medium text-[#D1FAE5] mb-2">Live Demo URL</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#10B981]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
                <input
                  type="url"
                  placeholder="https://myproject.com"
                  value={liveLink}
                  onChange={(e) => setLiveLink(e.target.value)}
                  className="w-full bg-[#050A09] border border-[#10B981]/30 rounded-xl pl-11 pr-4 py-3 text-[#F1F5F9] placeholder-[#F1F5F9]/40 focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Image URL */}
          <div className="group">
            <label className="block text-sm font-medium text-[#D1FAE5] mb-2">Project Image URL</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#10B981]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="https://example.com/image.jpg"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full bg-[#050A09] border border-[#10B981]/30 rounded-xl pl-11 pr-4 py-3 text-[#F1F5F9] placeholder-[#F1F5F9]/40 focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20 transition-all duration-300"
              />
            </div>
          </div>

          {/* Featured Checkbox */}
          <div className="flex items-start gap-3 p-4 bg-[#050A09] border border-[#10B981]/20 rounded-xl">
            <div className="relative flex items-center h-6">
              <input
                type="checkbox"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="w-5 h-5 rounded border-[#10B981]/50 bg-[#0D1A18] checked:bg-[#10B981] checked:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20 focus:ring-offset-0 cursor-pointer transition-all duration-300"
                id="featured"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="featured" className="block text-[#D1FAE5] font-medium cursor-pointer">
                Featured Project
              </label>
              <p className="text-sm text-[#F1F5F9]/50 mt-1">
                Display this project prominently on your portfolio homepage
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="group relative bg-[#10B981] hover:bg-[#10B981]/90 text-[#050A09] font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#10B981]/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center gap-3"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Adding Project...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <span>Add Project</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
