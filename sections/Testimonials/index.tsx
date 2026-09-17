import React from "react";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import TestimonialsClient, { TestimonialItem } from "./Client";

const defaultTestimonialsData: TestimonialItem[] = [
  {
    image: "/IrsyMMpxpY0yqVMutVpGtcoOSx4.webp",
    quote: "Professional, creative, and easy to work with. From the first meeting to the final setup, the process was seamless. The final result felt both thoughtful and beautifully executed.",
    author: "Riya Felix",
    location: "Thrissur",
  },
  {
    image: "/S0kKRTM44yfHbhgnxbX3PNQlwE.avif",
    quote: "Maskan Builders completely transformed our space. The attention to detail and personal touch made our home feel truly ours.",
    author: "Sudhkaran Nair",
    location: "Kochi",
  },
  {
    image: "/UOKG1WBP4iClBZMcV2ZS55S7Jyw.avif",
    quote: "We wanted something modern yet warm—and they delivered exactly that. Every room tells a story now. It's not just a space—it feels like home.",
    author: "Tom Mathew",
    location: "Kozhikode",
  },
  {
    image: "/Maskan 01_page-0026.jpg",
    quote: "The attention to detail and zero-defect execution is exactly what our luxury hospitality brand expected. Maskan Builders delivered a masterpiece that has left all our guests in awe.",
    author: "Dr. Amara Khan",
    location: "Vagamon",
  },
  {
    image: "/IrsyMMpxpY0yqVMutVpGtcoOSx4.webp",
    quote: "Exceptional craftsmanship and a team that truly listens. They turned our vision into reality, exceeding our expectations at every step of the journey.",
    author: "Anita Sharma",
    location: "Bangalore",
  },
  {
    image: "/S0kKRTM44yfHbhgnxbX3PNQlwE.webp",
    quote: "Maskan delivered our commercial project on time and within budget. Their structural engineering and project management are top tier in Kerala.",
    author: "Faisal K.",
    location: "Commercial Client, Perinthalmanna",
  },
  {
    image: "/UOKG1WBP4iClBZMcV2ZS55S7Jyw.webp",
    quote: "From architectural design to turnkey handover, the transparency was remarkable. Daily site updates kept us completely at peace.",
    author: "Dr. Ananya Nair",
    location: "Villa Owner, Calicut",
  },
  {
    image: "/S0kKRTM44yfHbhgnxbX3PNQlwE.webp",
    quote: "Building our home while residing abroad seemed daunting, but Maskan managed everything seamlessly with absolute integrity.",
    author: "Rashid Ali",
    location: "NRI Client, Dubai / Malappuram",
  }
];

async function getTestimonials(): Promise<TestimonialItem[]> {
  try {
    const sanityTestimonials = await client.fetch<any[]>(
      `*[_type == "testimonial"] | order(order asc, _createdAt desc) {
        _id,
        author,
        location,
        quote,
        image
      }`
    );

    if (sanityTestimonials && sanityTestimonials.length > 0) {
      return sanityTestimonials.map((t) => ({
        author: t.author || "Client",
        location: t.location || "",
        quote: t.quote || "",
        image: urlForImage(t.image) || "/IrsyMMpxpY0yqVMutVpGtcoOSx4.webp",
      }));
    }
  } catch (error) {
    console.error("Error fetching testimonials from Sanity:", error);
  }

  return defaultTestimonialsData;
}

export default async function Testimonials() {
  const testimonials = await getTestimonials();
  return <TestimonialsClient testimonials={testimonials} />;
}
