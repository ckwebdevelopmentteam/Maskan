import mongoose, { Schema, Document } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  author: {
    name: string;
    role?: string;
    avatar?: string;
  };
  readingTime: string;
  tags?: string[];
  isPublished: boolean;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: [true, 'Please provide a blog title'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Please provide a unique slug'],
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    excerpt: {
      type: String,
      required: [true, 'Please provide a brief excerpt'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Please provide blog content'],
    },
    coverImage: {
      type: String,
      required: [true, 'Please provide a cover image URL'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Please provide a category'],
      trim: true,
      default: 'Architecture',
    },
    author: {
      name: {
        type: String,
        required: true,
        default: 'Maskan Editorial Team',
      },
      role: {
        type: String,
        default: 'Architecture & Design Lead',
      },
      avatar: {
        type: String,
        default: '',
      },
    },
    readingTime: {
      type: String,
      default: '4 min read',
    },
    tags: {
      type: [String],
      default: [],
    },
    isPublished: {
      type: Boolean,
      default: true,
      index: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);
