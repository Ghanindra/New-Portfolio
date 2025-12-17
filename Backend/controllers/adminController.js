// ======================= server/controllers/adminController.js =======================
import Project from "../models/Project.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken";


// Admin login
export const adminLogin = async (req, res, next) => {
try {
const { email, password } = req.body;
console.log("Email:", email, "Password:", password);


const user = await User.findOne({ email });
console.log("User in DB:", user);
if (!user) return res.status(401).json({ message: "Invalid credentials" });


const isMatch = await user.matchPassword(password);
if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });


const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
expiresIn: '7d'
});


res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
} catch (error) {
next(error);
}
};


export const createProject = async (req, res) => {
  try {
    const {
      title,
      description,
      techStack,
      githubLink,
      liveLink,
      image,
      featured,
    } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: "Title and description required" });
    }

    const project = await Project.create({
      title,
      description,
      techStack,
      githubLink,
      liveLink,
      image,
      featured,
    });

    res.status(201).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create project" });
  }
};

// Update Project
export const updateProject = async (req, res, next) => {
try {
const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
if (!project) return res.status(404).json({ message: "Project not found" });
res.json(project);
} catch (error) {
next(error);
}
};


// Delete Project
export const deleteProject = async (req, res, next) => {
try {
const project = await Project.findByIdAndDelete(req.params.id);
if (!project) return res.status(404).json({ message: "Project not found" });
res.json({ message: "Project deleted successfully" });
} catch (error) {
next(error);
}
};