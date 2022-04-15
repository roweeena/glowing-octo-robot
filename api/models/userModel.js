//TODO:  add schema

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "user"
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    passwordDigest: {
        type: String,
        trim: true,
    },
    createdAt:{
        type:Date,
        default: Date.now,
    },
    trips: { // has many 
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Trip",
        default: []
    }
});

export default mongoose.model("User", UserSchema);