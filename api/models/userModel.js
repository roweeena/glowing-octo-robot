//TODO:  add schema

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  type: {
    type: String,
    default: "user"
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
  trips: { // has many 
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Trip",
    default: []
  }
});

export default mongoose.model("User", UserSchema);