import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: [{
        type: String
    }],
    salary: {
        type: Number,
        required: true,
        min: [0, 'Salary must be a positive number']
    },
    experienceLevel: {
        type: String,  // Could also use Number if you prefer numeric values
        enum: ['Junior', 'Mid', 'Senior'],
        required: true
    },
    location: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true,
        enum: ['Full-time', 'Part-time', 'Contract', 'Freelance']
    },
    position: {
        type: Number,
        required: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    applications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Application',
        }
    ]
}, { timestamps: true });

// Indexes for optimization
jobSchema.index({ company: 1 });
jobSchema.index({ created_by: 1 });
jobSchema.index({ applications: 1 });

export const Job = mongoose.model("Job", jobSchema);
