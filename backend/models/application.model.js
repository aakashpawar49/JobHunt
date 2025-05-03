import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: {
            values: ['pending', 'accepted', 'rejected'],
            message: '{VALUE} is not a valid status. Allowed values are pending, accepted, or rejected.'
        },
        default: 'pending'
    }
}, { timestamps: true });

applicationSchema.index({ job: 1 });
applicationSchema.index({ applicant: 1 });

export const Application = mongoose.model("Application", applicationSchema);
