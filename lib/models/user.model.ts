import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: String,
  bio: String,
  threads: [
    {
    // one user can have multiple threads, ref to threads db model
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thread",
    },
  ],
  // after login onboarding to choose photo bio
  onboarded: {
    type: Boolean,
    default: false,
  },
  // one user belong to many communities, ref to
  communities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Community",
    },
  ],
});

// first time dont exist that mongoose.model.User cant take but after that can be used 
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;