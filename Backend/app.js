// import express from "express";
// import cors from "cors";
// import projectRoutes from "./routes/projectRoutes.js";
// import contactRoutes from "./routes/contactRoutes.js";
// import adminRoutes from "./routes/adminRoutes.js";
// import errorMiddleware from "./middleware/errorMiddleware.js";

// const app = express();
// const whitelist = [
//   process.env.FRONTEND_URL,  // production frontend
//   "http://localhost:5173"    // local dev
// ];

// app.use(cors({
//   origin: function(origin, callback) {
//     // allow requests with no origin (like Postman)
//     if (!origin) return callback(null, true);

//     if (whitelist.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   }
//   }));
// app.use(express.json());

// // Routes
// app.use("/api/admin", adminRoutes);
// app.use("/api/projects", projectRoutes);
// app.use("/api/contact", contactRoutes);

// // Error handler
// app.use(errorMiddleware);

// export default app;


import express from "express";
import cors from "cors";
import projectRoutes from "./routes/projectRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

const app = express();

// CORS
const whitelist = [
  process.env.FRONTEND_URL, // production frontend
  "http://localhost:5173"   // local dev
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // allow Postman
    if (whitelist.includes(origin)) callback(null, true);
    else callback(new Error("Not allowed by CORS"));
  }
}));

app.use(express.json());

// Root route to avoid 404
app.get("/", (req, res) => res.send("Server is running"));

// API routes
app.use("/api/admin", adminRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

// Error handler
app.use(errorMiddleware);

export default app;
