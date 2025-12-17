import Contact from "../models/Contact.js";
import sendEmail from "../utils/sendEmail.js";

export const submitContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const contact = await Contact.create({ name, email, message });

    await sendEmail({ name, email, message });

    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    next(error);
  }
};
// Admin: Get all contacts
export const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    next(err);
  }
};