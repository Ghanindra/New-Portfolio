import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import adminAPI, { setAdminToken } from "../api/adminApi.js";
import { AdminAuthContext } from "../context/AdminAuthContext.jsx";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AdminAuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  // console.log("Submitting login:", { email, password });
  try {
    const res = await adminAPI.post("/api/admin/login", { email, password });
    // console.log("Login response:", res.data); // check what comes from backend

    if (!res.data.user || !res.data.token) {
      // backend response unexpected
      alert("Login failed: invalid server response");
      return;
    }

    // Safe login
    login(res.data.user); 
    setAdminToken(res.data.token);
    localStorage.setItem("adminToken", res.data.token);

    navigate("/admin/dashboard");
  } catch (err) {
    console.log("Login error:", err.response?.data || err.message);
    alert(err.response?.data?.message || "Invalid credentials");
  }
};

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full mb-3 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-3 rounded"
          required
        />
        <button className="bg-blue-600 text-white p-2 w-full rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
}
