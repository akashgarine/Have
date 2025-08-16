const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
  },

  branch: {
    type: String,
    required: true,
  },

  year: {
    type: String,
    required: true,
  },

  section: {
    type: String,
    required: true,
  },

  leetcode: {
    type: String,
    default: "",
  },

  codeforces: {
    type: String,
    default: "",
  },

  codechef: {
    type: String,
    default: "",
  },

  // ✅ Scores for leaderboards
  scores: {
    leetcode: { type: Number, default: 0 },
    codeforces: { type: Number, default: 0 },
    codechef: { type: Number, default: 0 },
    total: { type: Number, default: 0 }
  },

  verified: {
    type: Boolean,
    default: false,   
  },

  registeredAt: {
    type: Date,
    default: Date.now,
  }
});


module.exports = mongoose.model("User", userSchema);
