
// ======================= components/common/Footer.jsx =======================
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#050A09] text-[#F1F5F9] py-6 mt-5">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
        <span>© {new Date().getFullYear()} Ghanindra Bohora. All rights reserved.</span>
        <a
          href="/cv/Ghanindra-Bohora-cv.pdf" // replace with your CV file path
          download
          className="inline-block bg-[#10B981] hover:bg-[#0D6B4E] text-[#050A09] font-semibold 
                     px-4 py-2 rounded-lg shadow-md transition-colors hover:shadow-[#10B981]/30"
        >
          Download CV
        </a>
      </div>
    </footer>
  );
}
