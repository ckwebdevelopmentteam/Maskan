import mongoose from 'mongoose';

const ApplicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, 'Please provide your phone number'],
    trim: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  resumeName: {
    type: String,
  },
  resumeData: {
    type: String,
  },
  message: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ['New', 'Shortlisted', 'Selected', 'Closed'],
    default: 'New',
  }
}, {
  timestamps: true,
});

if (mongoose.models.Application) {
  delete mongoose.models.Application;
}

export default mongoose.model('Application', ApplicationSchema);
