import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    dob: { type: String, required: true },
    doj: { type: String, required: false },
    mobile: { type: String, required: true },
    created_at: { type: Date, required: false, default: Date.now },
    updated_at: { type: Date, required: false, default: null }
});

export const EmployeeModel = mongoose.model('Employee', EmployeeSchema)
