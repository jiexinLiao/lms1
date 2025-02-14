import mongoose from "mongoose";

const PurchaseSchema = new mongoose.Schema({
  courseId: {type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    require: true
  },
  userId: {
    type: String,
    ref: 'User',
    require: true
  },
  amount: { type: Number, require: true},
  status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending'}
},{timestamps : true})


export const Purchase = mongoose.model('Purchase', PurchaseSchema)