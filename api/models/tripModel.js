import mongoose from 'mongoose';

const TripSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
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
  items:{
      type:Array,
      default:[]
  }
});

export default mongoose.model("Trip", TripSchema);