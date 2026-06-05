import mongoose from 'mongoose';

const CareerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a job title'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please provide a job description'],
  },
  requirements: {
    type: [String],
    default: [],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CareerCategory',
    required: true,
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CareerLocation',
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Career || mongoose.model('Career', CareerSchema);
