import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      max: 100,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      min: 6,
      max: 30,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    city: String,
    province: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transaction: [],
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", UserSchema);
export default User;
