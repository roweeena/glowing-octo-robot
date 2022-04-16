import mongoose from 'mongoose';

const TripSchema = new mongoose.Schema({
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

export default mongoose.model("Trip", TripSchema);