const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["jobseeker", "employer"], required: true },
    avatar: String,
    resume: String,
    // for employer
    companyName: String,
    companyDescription: String,
    companyLogo: String,
}, { timestamps: true });

// Encrypt password before save
userSchema.pre("save", async function () {
    // If password isn't modified, just return to move to the next step
    if (!this.isModified("password")) return;

    // Hash the password
    this.password = await bcrypt.hash(this.password, 10);
});

// Match entered password
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);