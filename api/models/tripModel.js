const mongoose = require('mongoose')
const {Schema} = mongoose

const TripSchema = new Schema({
  location: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  date:{
    type:Date,
  },
  budget:{
    type:Number,
    default:0,
  },
  expense:{
      type:Object,
      ref: "Expense",
      default:{}
  }
});

module.exports = mongoose.model("Trip", TripSchema);

