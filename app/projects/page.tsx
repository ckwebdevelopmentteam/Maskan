export const revalidate = 60;

import React from "react";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import ProjectsClient, { ProjectListItem } from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects & Portfolio | Maskan Builders",
  description:
    "Explore our portfolio of premium residential villas, modern commercial complexes, and institutional landmarks across Kerala.",
};

const defaultProjectsList: ProjectListItem[] = [
  {
    id: "maskan-avoria",
    title: "Maskan Avoria",
    category: "Residential",
    location: "Marad, Ernakulam (Kochi), Kerala",
    image: "/projects/Avoria Heights.jpeg",
    scale: "112 units + new tower",
    status: "Completed",
    description: "A landmark residential development in the heart of Ernakulam, 112 units plus a new tower, balancing urban convenience with quality-built, well-integrated living spaces.",
  },
  {
    id: "meridian-heights",
    title: "Meridian Heights",
    category: "Residential Villa",
    location: "Perinthalmanna, Kerala",
    image: "/projects/Meridian Heights.jpeg",
    scale: "42 Villas",
    status: "Ongoing",
    description: "An exclusive residential villa project in Perinthalmanna, 42 villas designed for modern elegance and premium family living.",
  },
  {
    id: "kakanad-commercial-hub",
    title: "Veekay Signature",
    category: "Commercial",
    location: "Kakanad, Kochi, Kerala",
    image: "/projects/Veekay Signature.jpeg",
    scale: "Commercial building",
    status: "Ongoing",
    description: "A cutting-edge commercial building in Kakanad, Kochi, redefining business landscapes in the region.",
  },
  {
    id: "plaza-commercial-complex",
    title: "Plaza Commercial Complex",
    category: "Commercial",
    location: "Muvatupuzha, Kerala",
    image: "/projects/project-3.webp",
    scale: "Multi-storey",
    status: "Ongoing",
    description: "A landmark commercial plaza in Muvatupuzha featuring a striking vertical louvre façade with warm timber tones, built for modern retail and office use.",
  },
  {
    id: "manjeri-white-field",
    title: "Manjeri White Field",
    category: "Residential Villa",
    location: "Manjeri, Kerala",
    image: "/projects/project-2.webp",
    scale: "Premium Villa Community",
    status: "Ongoing",
    description: "An exclusive boutique villa community set against lush green hillsides in Manjeri, dark contemporary architecture, floor-to-ceiling glazing, and natural stone accents for families who value privacy and elegance.",
  },
  {
    id: "residential-flat",
    title: "Apartments ",
    category: "Residential",
    location: "Malappuram, Kerala",
    image: "/projects/Apartments.jpeg",
    scale: "3 Storey",
    status: "Ongoing",
    description: "A thoughtfully designed three-storey residential apartment block in Malappuram, combining exposed brick textures with modern concrete elements, generous balconies, covered parking, and a rooftop terrace for comfortable urban family living.",
  },
  {
    id: "plaza-commercial-building",
    title: "Plaza Commercial Building",
    category: "Commercial",
    location: "Veliyamcode, Kerala",
    image: "/projects/project-4.webp",
    scale: "Multi-storey",
    status: "Ongoing",
    description: "A bold commercial development at Veliyamcode featuring a distinctive terracotta-toned façade with geometric fin details and large glazed frontage, a new benchmark for commercial construction in the region.",
  },
  {
    id: "ayush-villa",
    title: "Ayush Villa",
    category: "Residential Villa",
    location: "Valancheri, Kerala",
    image: "/projects/project-5.webp",
    scale: "Individual Villa",
    status: "Ongoing",
    description: "A heritage-inspired residential villa in Valancheri blending traditional Kerala sloped-roof architecture with contemporary detailing, natural brick, timber accents, and a lush tropical setting.",
  },
  {
    id: "school-project-pattambi",
    title: "School Project at Pattambi",
    category: "Educational",
    location: "Pattambi, Kerala",
    image: "/projects/project-6.webp",
    scale: "Large Educational Complex",
    status: "Ongoing",
    description: "A large-scale school complex under construction in Pattambi, spanning multiple wings and built to modern academic-facility standards.",
  },
  {
    id: "commercial-building-edappal",
    title: "Shopping Complex ",
    category: "Commercial",
    location: "Edappal, Kerala",
    image: "/projects/Shopping Complex.jpeg",
    scale: "Multi-storey Showroom",
    status: "Ongoing",
    description: "A multi-storey commercial building in Edappal featuring a contemporary glazed curtain-wall façade that brings in natural light for premium retail use.",
  },
  {
    id: "commercial-building-areekode",
    title: "Commercial Building at Areekode",
    category: "Commercial",
    location: "Areekode, Kerala",
    image: "/projects/project-15.png",
    scale: "Retail & Business Complex",
    status: "Completed",
    description: "A completed multi-storey commercial building in Areekode, clad in premium composite metal panels with large glazed storefronts, home to leading brands like AGL.",
  },
  {
    id: "school-project-tirur",
    title: "School Project at Tirur",
    category: "Educational",
    location: "Tirur, Kerala",
    image: "/projects/project-16.png",
    scale: "Institutional Campus",
    status: "Ongoing",
    description: "An expansive institutional campus under development in Tirur, built around a classic U-shaped courtyard layout for excellent ventilation and easy movement between wings.",
  },
];

async function getProjects(): Promise<ProjectListItem[]> {
  try {
    const sanityProjects = await client.fetch<any[]>(
      `*[_type == "project"] | order(order asc, _createdAt desc) {
        _id,
        title,
        "slug": slug.current,
        location,
        category,
        scale,
        status,
        mainImage,
        description
      }`
    );

    if (sanityProjects && sanityProjects.length > 0) {
      return sanityProjects.map((p) => ({
        id: p.slug || p._id,
        title: p.title || "Untitled Project",
        category: p.category || "Residential",
        location: p.location || "Kerala",
        image: urlForImage(p.mainImage) || "/projects/project-1.webp",
        scale: p.scale || "Custom Build",
        status: p.status === "COMPLETED" ? "Completed" : "Ongoing",
        description: p.description || "",
      }));
    }
  } catch (error) {
    console.error("Error fetching projects from Sanity for /projects:", error);
  }

  return defaultProjectsList;
}

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <ProjectsClient projects={projects} />;
}
