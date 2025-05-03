import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        minlength: 10,  // Minimum length
        maxlength: 500  // Maximum length
    },
    website: {
        type: String,
        match: [/^https?:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+([\/?%&=]*)$/, 'Please enter a valid URL']
    },
    location: {
        type: String
    },
    logo: {
        type: String, // URL to company logo
        match: [/^https?:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+([\/?%&=]*)$/, 'Please enter a valid logo URL']
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

// Index for optimizing queries by userId
companySchema.index({ userId: 1 });

export const Company = mongoose.model("Company", companySchema);
