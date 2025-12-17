"use client"
import React from "react"
import adminAPI from "../api/adminApi.js"
import toast from "react-hot-toast";
export default function ProjectList({ projects, fetchProjects }) {
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      await adminAPI.delete(`/admin/projects/${id}`)
      fetchProjects()
    }
  }

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <div
          key={project._id}
          className="bg-[#0D1A18] border border-[#10B981]/20 p-4 rounded-lg flex justify-between items-start hover:border-[#10B981]/40 transition-colors"
        >
          <div className="flex-1 pr-4">
            <h3 className="font-semibold text-[#F1F5F9] text-lg mb-2">{project.title}</h3>
            <p className="text-[#F1F5F9]/70 text-sm leading-relaxed">{project.description}</p>
          </div>
          <button
            onClick={() => handleDelete(project._id)}
            className="bg-red-900/30 border border-red-600/50 px-4 py-2 rounded-md text-red-400 hover:bg-red-900/50 hover:border-red-500 hover:text-red-300 transition-all duration-200 text-sm font-medium whitespace-nowrap"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}
