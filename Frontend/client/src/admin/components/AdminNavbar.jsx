import React,{ useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AdminAuthContext } from "../context/AdminAuthContext.jsx"

export default function AdminNavbar() {
  const { logout } = useContext(AdminAuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout() // remove admin from context & localStorage
    navigate("/admin/login") // redirect to login page
  }

  return (
    <nav className="bg-[#0D1A18] text-[#F1F5F9] p-4 flex justify-between items-center border-b border-[#10B981]/20">
      <h1 className="font-bold text-xl tracking-tight">Admin Dashboard</h1>
      <button
        onClick={handleLogout}
        className="bg-[#10B981] text-[#050A09] px-4 py-2 rounded-lg font-medium hover:bg-[#D1FAE5] hover:text-[#0D1A18] transition-colors duration-200"
      >
        Logout
      </button>
    </nav>
  )
}
