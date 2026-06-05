import mongoose from 'mongoose';

const CareerLocationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a location name (e.g., Dubai)'],
    unique: true,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true,
});

export default mongoose.models.CareerLocation || mongoose.model('CareerLocation', CareerLocationSchema);
