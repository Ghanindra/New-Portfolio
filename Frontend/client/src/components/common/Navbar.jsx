
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 bg-[#050A09] text-[#F1F5F9] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          Built<span className="text-[#10B981]">By</span>Ghan
        </h1>

        {/* Desktop Menu */}
        <div className="space-x-8 hidden md:flex text-sm font-medium">
          <Link to="/" className="hover:text-[#10B981] transition-colors">Home</Link>
          <Link to="/about" className="hover:text-[#10B981] transition-colors">About</Link>
          <Link to="/projects" className="hover:text-[#10B981] transition-colors">Projects</Link>
          <Link to="/contact" className="hover:text-[#10B981] transition-colors">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-6 h-6 text-[#F1F5F9]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0D1A18] border-t border-[#10B981]">
          <div className="flex flex-col space-y-4 px-6 py-4 text-sm">
            <Link to="/" onClick={() => setOpen(false)} className="hover:text-[#10B981] transition-colors">Home</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="hover:text-[#10B981] transition-colors">About</Link>
            <Link to="/projects" onClick={() => setOpen(false)} className="hover:text-[#10B981] transition-colors">Projects</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-[#10B981] transition-colors">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
