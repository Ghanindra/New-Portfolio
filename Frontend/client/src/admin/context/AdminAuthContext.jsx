// import React, { createContext, useState, useEffect } from "react";

// export const AdminAuthContext = createContext();

// export const AdminAuthProvider = ({ children }) => {
//   const [admin, setAdmin] = useState(null);

//   useEffect(() => {
//     const storedAdmin = localStorage.getItem("adminUser");
//     if (storedAdmin) setAdmin(JSON.parse(storedAdmin));
//   }, []);

//   const login = (adminData) => {
//     localStorage.setItem("adminUser", JSON.stringify(adminData));
//     setAdmin(adminData);
//   };

//   const logout = () => {
//     localStorage.removeItem("adminUser");
//     setAdmin(null);
//   };

//   return (
//     <AdminAuthContext.Provider value={{ admin, login, logout }}>
//       {children}
//     </AdminAuthContext.Provider>
//   );
// };
import React, { createContext, useState } from "react";

export const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);

  const login = (user) => {
    setAdmin(user);
  };

  const logout = () => {
    setAdmin(null);
    localStorage.removeItem("adminToken");
  };

  return (
    <AdminAuthContext.Provider value={{ admin, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};
