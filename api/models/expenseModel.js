import mongoose from 'mongoose';

const ExpenseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  amount:{
      type:Number,
      required:true
  },
  category:{
      type:String,
      required:true
  }
  
});

export default mongoose.model("Expense", ExpenseSchema);