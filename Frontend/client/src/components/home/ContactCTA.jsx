
"use client"
import React from 'react'
import {Link} from "react-router-dom"
export default function ContactCTA() {
  return (
    <section className="relative py-20 sm:py-24 bg-gradient-to-b from-[#050A09] to-[#0D1A18] overflow-hidden">
      {/* Animated background elements */}
      {/* Animated background elements */}
<div className="absolute inset-0 pointer-events-none">
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-[#10B981]/10 rounded-full blur-3xl animate-pulse" />
</div>


      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#0D1A18] border border-[#10B981]/30 rounded-full px-4 py-2 mb-8 animate-fadeInUp">
          <svg className="w-4 h-4 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span className="text-[#D1FAE5] text-sm font-medium">Let's Collaborate</span>
        </div>

        {/* Main heading */}
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F1F5F9] mb-6 animate-fadeInUp"
          style={{ animationDelay: "100ms" }}
        >
          Have a Project in Mind?
        </h2>

        {/* Description */}
        <p
          className="text-[#D1FAE5] text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed animate-fadeInUp"
          style={{ animationDelay: "200ms" }}
        >
          I'm always excited to work on new projects and collaborate with innovative teams. Let's discuss how I can help
          bring your ideas to life.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp"
          style={{ animationDelay: "300ms" }}
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-[#10B981] hover:bg-[#0D9668] text-[#050A09] px-10 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-[#10B981]/50 hover:scale-105"
          >
            Start a Conversation
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
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </Link>
      <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=bohoraghanindra@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-transparent border-2 border-[#10B981] text-[#10B981] hover:bg-[#10B981] hover:text-[#050A09] px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
>
  Send an Email
</a>



        </div>

        {/* Social proof or additional info */}
        <div
          className="mt-12 flex flex-wrap justify-center items-center gap-8 text-[#D1FAE5]/60 text-sm animate-fadeInUp"
          style={{ animationDelay: "400ms" }}
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Quick Response</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Professional Service</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Quality Results</span>
          </div>
        </div>
      </div>
    </section>
  )
}
