import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                // Regex for validating international phone numbers
                return /^[+]*[0-9]{1,4}[0-9]{7,15}$/.test(value);
            },
            message: 'Please enter a valid phone number'
        }
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['student', 'recruiter'],
        required: true
    },
    profile: {
        bio: { type: String },
        skills: [{ type: String }],
        resume: {
            type: String,
            validate: {
                validator: function(value) {
                    return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(value);  // URL regex validation
                },
                message: 'Please enter a valid resume URL'
            }
        },
        resumeOriginalName: { type: String },
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
        profilePhoto: {
            type: String,
            default: null
        }
    },
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function(next) {
    if (this.isModified('password') || this.isNew) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

// Indexing fields for better performance
userSchema.index({ email: 1 });
userSchema.index({ phoneNumber: 1 });

export const User = mongoose.model('User', userSchema);
