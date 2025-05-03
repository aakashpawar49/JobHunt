import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false,
            });
        }

        // Check if JWT_SECRET exists in the environment variables
        if (!process.env.JWT_SECRET) {
            return res.status(500).json({
                message: "Server misconfiguration: Missing JWT_SECRET",
                success: false,
            });
        }

        // Verify token and handle expiration or invalid signature
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        req.id = decode.userId;

        next();
    } catch (error) {
        console.error(error);
        
        // Specific handling for different JWT errors
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                message: "Token expired",
                success: false,
            });
        }

        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({
                message: "Invalid token",
                success: false,
            });
        }

        return res.status(401).json({
            message: "Authentication failed",
            success: false,
        });
    }
};

export default isAuthenticated;
