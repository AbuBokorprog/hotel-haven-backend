const {Schema, model} = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Email already registered"],
      validate: {
        validator: function (value) {
          // Regular expression for basic email validation
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
        },
        message: "Invalid email format",
      },
    },
    password: {
      type: String,
      minLength: [8, "Password must be at least 8 characters"],
      required: true,
    },
    photoURL: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      min: [18, "Age must be at least 18 years"],
    },
    gender: {
      type: String,
      enum: ["MALE", "FEMALE", "OTHER"],
      required: true,
    },
    nid: {
      type: String, // Assuming National ID is alphanumeric, use String
      required: true,
      minlength: 10,
    },
    role: {
      type: String,
      enum: ["MODERATOR", "ADMIN"],
    },
  },
  {timestamps: true}
);

const User = model("User", userSchema);

module.exports = User;
