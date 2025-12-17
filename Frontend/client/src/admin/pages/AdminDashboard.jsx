import React, { useEffect, useContext, useState } from "react";
import { AdminAuthContext } from "../context/AdminAuthContext.jsx";
import adminAPI from "../api/adminApi.js";
import ProjectForm from "../components/ProjectForm.jsx";
import ProjectList from "../components/ProjectList.jsx";
import ContactList from "../components/ContactList.jsx";
import AdminNavbar from "../components/AdminNavbar.jsx";

export default function AdminDashboard() {
  const { logout } = useContext(AdminAuthContext);

  const [activeView, setActiveView] = useState("upload"); // default view
  const [projects, setProjects] = useState([]);
  const [contacts, setContacts] = useState([]);

  // Fetch projects
  const fetchProjects = async () => {
    try {
      const res = await adminAPI.get("/projects");
      setProjects(res.data);
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  };

  // Fetch contacts
  const fetchContacts = async () => {
    try {
      const res = await adminAPI.get("/admin/contacts");
      setContacts(res.data);
    } catch (err) {
      console.error("Error fetching contacts:", err);
    }
  };

  // Restore last active view from localStorage
  useEffect(() => {
    const savedView = localStorage.getItem("activeView");
    if (savedView) setActiveView(savedView);
  }, []);

  // Save active view & fetch data when view changes
  useEffect(() => {
    if (activeView) localStorage.setItem("activeView", activeView);

    if (activeView === "projects") fetchProjects();
    if (activeView === "contacts") fetchContacts();
  }, [activeView]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <AdminNavbar logout={logout} />

      <div className="p-6 max-w-7xl mx-auto">
        {/* DASHBOARD BUTTONS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <button
            onClick={() => setActiveView("upload")}
            className={`p-6 rounded-xl font-semibold transition ${
              activeView === "upload"
                ? "bg-emerald-600"
                : "bg-emerald-500 hover:bg-emerald-600"
            }`}
          >
            ➕ Upload Project
          </button>

          <button
            onClick={() => setActiveView("projects")}
            className={`p-6 rounded-xl font-semibold transition ${
              activeView === "projects"
                ? "bg-blue-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            📂 Project List
          </button>

          <button
            onClick={() => setActiveView("contacts")}
            className={`p-6 rounded-xl font-semibold transition ${
              activeView === "contacts"
                ? "bg-purple-600"
                : "bg-purple-500 hover:bg-purple-600"
            }`}
          >
            📩 Contact List
          </button>
        </div>

        {/* CONDITIONAL CONTENT */}
        {activeView === "upload" && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Upload Project</h2>
            <ProjectForm fetchProjects={fetchProjects} />
          </section>
        )}

        {activeView === "projects" && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Project List</h2>
            <ProjectList projects={projects} fetchProjects={fetchProjects} />
          </section>
        )}

        {activeView === "contacts" && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact List</h2>
            <ContactList contacts={contacts} />
          </section>
        )}
      </div>
    </div>
  );
}
