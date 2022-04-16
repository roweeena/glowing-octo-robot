//TODO:  add schema
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "unnamed"
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required:true
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

module.exports = mongoose.model("User", UserSchema);