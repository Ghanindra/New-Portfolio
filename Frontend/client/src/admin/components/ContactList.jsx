import React from "react"
export default function ContactList({ contacts }) {
  return (
    <div className="space-y-3">
      {contacts.map((c) => (
        <div
          key={c._id}
          className="bg-[#0D1A18] border border-[#10B981]/20 p-4 rounded-lg hover:border-[#10B981]/40 transition-colors duration-200"
        >
          <h3 className="font-semibold text-[#F1F5F9] mb-2">
            {c.name} <span className="text-[#10B981]">({c.email})</span>
          </h3>
          <p className="text-[#D1FAE5]/80 leading-relaxed">{c.message}</p>
        </div>
      ))}
    </div>
  )
}
