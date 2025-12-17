"use client"

import React,{ useState } from "react"
import axios from 'axios'
import {Link} from "react-router-dom"
export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess("")
    setError("")

    try {
      // Uncomment when API is ready
      const res = await axios.post('http://localhost:5000/api/contact', {
        name,
        email,
        message,
      })

      // Mock success for demo
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSuccess("Message sent successfully! I'll get back to you soon.")
      setName("")
      setEmail("")
      setMessage("")

      setTimeout(() => {
        setSuccess("")
      }, 5000)
    } catch (err) {
      console.error(err)
      setError("Failed to send message. Please try again later.")

      setTimeout(() => {
        setError("")
      }, 5000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#050A09] py-20 px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#10B981] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#10B981] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-[#0D1A18] border border-[#10B981]/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
            <span className="text-[#D1FAE5] text-sm font-medium">Get In Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F1F5F9] mb-4 text-balance">
            Let's Start a <span className="text-[#10B981]">Conversation</span>
          </h1>
          <p className="text-lg text-[#F1F5F9]/60 max-w-2xl mx-auto text-pretty">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-[#0D1A18] border border-[#10B981]/10 rounded-2xl p-8 sm:p-10 animate-fade-in-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Success/Error Messages */}
              {success && (
                <div className="bg-[#10B981]/10 border border-[#10B981]/30 rounded-xl p-4 flex items-start gap-3 animate-fade-in">
                  <svg
                    className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-[#D1FAE5] text-sm">{success}</p>
                </div>
              )}

              {error && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-start gap-3 animate-fade-in">
                  <svg
                    className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-red-300 text-sm">{error}</p>
                </div>
              )}

              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-[#F1F5F9] text-sm font-medium flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#050A09] border border-[#10B981]/20 rounded-xl px-4 py-3 text-[#F1F5F9] placeholder-[#F1F5F9]/40 focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="John Doe"
                  required
                  disabled={loading}
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-[#F1F5F9] text-sm font-medium flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#050A09] border border-[#10B981]/20 rounded-xl px-4 py-3 text-[#F1F5F9] placeholder-[#F1F5F9]/40 focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="john@example.com"
                  required
                  disabled={loading}
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-[#F1F5F9] text-sm font-medium flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#050A09] border border-[#10B981]/20 rounded-xl px-4 py-3 text-[#F1F5F9] placeholder-[#F1F5F9]/40 focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed min-h-[150px]"
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  disabled={loading}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#10B981] text-[#050A09] font-semibold px-6 py-4 rounded-xl hover:bg-[#10B981]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
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
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-right">
            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <div className="bg-[#0D1A18] border border-[#10B981]/10 rounded-2xl p-6 hover:border-[#10B981]/30 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#10B981]/20 transition-colors">
                    <svg className="w-6 h-6 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#F1F5F9] font-semibold mb-1">Email</h3>
                    <p className="text-[#F1F5F9]/60 text-sm mb-2">Send me an email anytime</p>
                    <a
                      href="mailto:bohoraghanindra@gmail.com"
                      className="text-[#10B981] hover:text-[#D1FAE5] transition-colors"
                    >
                      bohoraghanindra@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-[#0D1A18] border border-[#10B981]/10 rounded-2xl p-6 hover:border-[#10B981]/30 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#10B981]/20 transition-colors">
                    <svg className="w-6 h-6 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#F1F5F9] font-semibold mb-1">Phone</h3>
                    <p className="text-[#F1F5F9]/60 text-sm mb-2">Available Mon-Fri, 9AM-6PM</p>
                    <Link to="tel:+1234567890" className="text-[#10B981] hover:text-[#D1FAE5] transition-colors">
                      9815313534
                    </Link>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-[#0D1A18] border border-[#10B981]/10 rounded-2xl p-6 hover:border-[#10B981]/30 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#10B981]/20 transition-colors">
                    <svg className="w-6 h-6 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#F1F5F9] font-semibold mb-1">Location</h3>
                    <p className="text-[#F1F5F9]/60 text-sm mb-2">Currently based in</p>
                    <p className="text-[#10B981]">Aanamnagar,kathmandu</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-[#0D1A18] border border-[#10B981]/10 rounded-2xl p-6">
              <h3 className="text-[#F1F5F9] font-semibold mb-4">Follow Me</h3>
              <div className="flex flex-wrap gap-3">
                {/* GitHub */}
                <a href="https://github.com/Ghanindra"
                  className="w-12 h-12 bg-[#050A09] border border-[#10B981]/20 rounded-xl flex items-center justify-center hover:bg-[#10B981] hover:border-[#10B981] transition-all group"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-5 h-5 text-[#F1F5F9] group-hover:text-[#050A09] transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/ghanindra-bohora-734972318/"
                  className="w-12 h-12 bg-[#050A09] border border-[#10B981]/20 rounded-xl flex items-center justify-center hover:bg-[#10B981] hover:border-[#10B981] transition-all group"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5 text-[#F1F5F9] group-hover:text-[#050A09] transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                {/* Twitter */}
                <a
                href="#"
                  className="w-12 h-12 bg-[#050A09] border border-[#10B981]/20 rounded-xl flex items-center justify-center hover:bg-[#10B981] hover:border-[#10B981] transition-all group"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5 text-[#F1F5F9] group-hover:text-[#050A09] transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                {/* Dribbble */}
                <a
                  href="#"
                  className="w-12 h-12 bg-[#050A09] border border-[#10B981]/20 rounded-xl flex items-center justify-center hover:bg-[#10B981] hover:border-[#10B981] transition-all group"
                  aria-label="Dribbble"
                >
                  <svg
                    className="w-5 h-5 text-[#F1F5F9] group-hover:text-[#050A09] transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
