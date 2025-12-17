// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/common/Navbar";
// import Footer from "./components/common/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
// import { AdminAuthProvider } from "./admin/context/AdminAuthContext.jsx";
// import AdminLogin from "./admin/pages/AdminLogin.jsx";
// import AdminDashboard from "./admin/pages/AdminDashboard.jsx";
// import ProjectModal from "./components/projects/ProjectModal.jsx";
// // User layout with sticky footer
// const UserLayout = ({ children }) => (
//   <div className="min-h-screen flex flex-col">
//     <Navbar />
//     <main className="flex-grow">{children}</main>
//     <Footer />
//   </div>
// );

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Admin routes */}
//         <Route
//           path="/admin/*"
//           element={
//             <AdminAuthProvider>
//               <Routes>
//                 <Route path="login" element={<AdminLogin />} />
//                 <Route path="dashboard" element={<AdminDashboard />} />
//               </Routes>
//             </AdminAuthProvider>
//           }
//         />

//         {/* User routes */}
//         <Route
//           path="/*"
//           element={
//             <UserLayout>
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="about" element={<About />} />
//                 <Route path="projects" element={<Projects />} />
//                 <Route path="contact" element={<Contact />} />
//                  <Route path="/projects/:id" element={<ProjectModal />} />
//               </Routes>
//             </UserLayout>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectModal from "./components/projects/ProjectModal.jsx";
import { AdminAuthProvider } from "./admin/context/AdminAuthContext.jsx";
import AdminLogin from "./admin/pages/AdminLogin.jsx";
import AdminDashboard from "./admin/pages/AdminDashboard.jsx";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";



// Admin layout just renders nested routes
const AdminLayout = () => <Outlet />;
// User layout
const UserLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

const App = () => (
  <>
  <Router>
    <Routes>
      {/* Admin routes */}
      <Route path="/admin" element={<AdminAuthProvider><AdminLayout /></AdminAuthProvider>}>
        <Route path="login" element={<AdminLogin />} />
        <Route path="dashboard" element={<AdminDashboard />} />
      </Route>

      {/* User routes */}
      <Route path="/" element={<UserLayout><Home /></UserLayout>} />
      <Route path="/about" element={<UserLayout><About /></UserLayout>} />
      <Route path="/projects" element={<UserLayout><Projects /></UserLayout>} />
      <Route path="/projects/:id" element={<UserLayout><ProjectModal /></UserLayout>} />
      <Route path="/contact" element={<UserLayout><Contact /></UserLayout>} />
    </Routes>
  </Router>
      <Toaster position="top-right" reverseOrder={false} />
  </>
);

export default App;