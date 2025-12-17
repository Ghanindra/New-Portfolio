// ======================= server/routes/adminRoutes.js =======================
import express from "express";
import { adminLogin, createProject, updateProject, deleteProject } from "../controllers/adminController.js";
import { protect } from "../middleware/authMiddleware.js";
// import { createProject } from "../controllers/projectController.js";
import { getContacts } from "../controllers/contactController.js";


const router = express.Router();


router.post('/login', adminLogin);
router.post('/projects', protect, createProject);
router.put('/projects/:id', protect, updateProject);
router.delete('/projects/:id', protect, deleteProject);
router.get("/contacts", protect, getContacts);
;
export default router