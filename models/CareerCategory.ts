import mongoose from 'mongoose';

const CareerCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a category name'],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true,
});

export default mongoose.models.CareerCategory || mongoose.model('CareerCategory', CareerCategorySchema);
