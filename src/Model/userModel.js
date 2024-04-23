import mongoose  from "mongoose";

const userSchema = mongoose.Schema({
    fullName: {type: String, required: [true, "Full Name is required"]},
    email: {type: String, unique: true, required: [true, "Email is required"]},
    password: {type: String, required: [true, "Password is required"]},
})
const User = mongoose.models.users || mongoose.model("users", userSchema)

export default User