import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";
import { singleUpload } from "../middlewares/mutler.js";

const router = express.Router();

// Register a new company (only authenticated users can register)
router.route("/register").post(isAuthenticated, registerCompany);

// Get the company details (for the authenticated user)
router.route("/get").get(isAuthenticated, getCompany);

// Get details of a specific company by ID
router.route("/get/:id").get(isAuthenticated, getCompanyById);

// Update company details, including logo/file upload (use PATCH if it's a partial update)
router.route("/update/:id").put(isAuthenticated, singleUpload, updateCompany);

export default router;
