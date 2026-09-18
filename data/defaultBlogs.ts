export interface DefaultBlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string | any;
  coverImage: string;
  cardImage?: string;
  category: string;
  author: {
    name: string;
    role?: string;
    avatar?: string;
  };
  readingTime: string;
  tags: string[];
  isPublished: boolean;
  featured: boolean;
  createdAt: string;
}

export const defaultBlogs: DefaultBlogPost[] = [
  {
    _id: "maskan-blog-builders-2026",
    title: "How to Choose the Best Builders in Kerala for Your Dream Home in 2026",
    slug: "how-to-choose-the-best-builders-in-kerala-2026",
    excerpt: "A practical guide to finding a reliable Kerala builder who understands quality, climate, design, and the way you want to live.",
    content: `
Choosing the right builder is one of the most important decisions you will make when creating a home. The right team brings together design thinking, technical knowledge, clear communication, and dependable execution.

## Start with experience that fits your project

Look for a builder who has completed projects similar to yours and understands the character of Kerala. A good portfolio should show thoughtful planning, durable materials, and homes that respond to local light, rain, and heat.

## Ask about the complete process

The best builders explain each stage clearly, from the first consultation and design coordination to approvals, construction, finishes, and handover.
    `.trim(),
    coverImage: "/projects/blog1-detail.png",
    cardImage: "/projects/blog1-card.png",
    category: "Home Building",
    author: { name: "Maskan Editorial Team", role: "Architectural Advisory", avatar: "" },
    readingTime: "6 min read",
    tags: ["Home Building", "Kerala", "Construction"],
    featured: true,
    isPublished: true,
    createdAt: "2026-09-18T10:00:00.000Z",
  },
];
