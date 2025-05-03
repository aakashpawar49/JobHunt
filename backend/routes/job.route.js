import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/job.controller.js";

// Role-based access control middleware for admin routes
const hasRole = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.status(403).json({
                message: "Permission denied. Admin access required.",
                success: false,
            });
        }
        next();
    }
};

const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(isAuthenticated, getAllJobs);
router.route("/getadminjobs").get(isAuthenticated, hasRole('admin'), getAdminJobs);
router.route("/get/:id").get(isAuthenticated, getJobById);

export default router;
