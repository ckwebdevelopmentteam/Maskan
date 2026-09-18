import React from "react";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import ProjectsGridClient, { ProjectGridItem } from "./Client";

const defaultProjects: ProjectGridItem[] = [
  {
    id: "maskan-avoria",
    name: "Maskan Avoria",
    location: "Kochi, Kerala",
    type: "Residential",
    status: "COMPLETED",
    img: "/projects/Avoria Heights.jpeg",
    desc: "A landmark residential development in Kochi, 112 units plus a new tower, designed for modern urban living.",
    stats: [
      { label: "Scope", val: "112 units + new tower" },
    ],
  },
  {
    id: "meridian-heights",
    name: "Meridian Heights",
    location: "Perinthalmanna, Kerala",
    type: "Residential",
    status: "ON GOING",
    img: "/projects/Meridian Heights.jpeg",
    desc: "An exclusive residential villa project in Perinthalmanna, 42 villas designed for modern elegance and premium living.",
    stats: [
      { label: "Scope", val: "42 villas" },
    ],
  },
  {
    id: "kakanad-commercial-hub",
    name: "Veekay Signature",
    location: "Kakanad, Kochi, Kerala",
    type: "Commercial",
    status: "ON GOING",
    img: "/projects/Veekay Signature.jpeg",
    desc: "Redefining business landscapes with a cutting-edge commercial building in Kakanad, Kochi.",
    stats: [
      { label: "Type", val: "Commercial building" },
    ],
  },
  {
    id: "manjeri-white-field",
    name: "Manjeri White Field",
    location: "Manjeri, Kerala",
    type: "Residential",
    status: "ON GOING",
    img: "/projects/project-2.webp",
    desc: "A premium residential development in Manjeri, built to the same quality standards across every unit.",
    stats: [
      { label: "Type", val: "Residential" },
    ],
  },
  {
    id: "plaza-commercial-complex",
    name: "Plaza Commercial Complex",
    location: "Muvatupuzha, Kerala",
    type: "Commercial",
    status: "ON GOING",
    img: "/projects/project-3.webp",
    desc: "A prime commercial complex in Muvatupuzha, built for retail and business spaces with strong footfall and long-term rental value.",
    stats: [
      { label: "Type", val: "Commercial building" },
    ],
  },
  {
    id: "commercial-building-areekode",
    name: "Commercial Building at Areekode",
    location: "Areekode, Kerala",
    type: "Commercial",
    status: "COMPLETED",
    img: "/projects/project-15.png",
    desc: "A functional, well-engineered commercial building in Areekode, designed to serve local business and retail needs.",
    stats: [
      { label: "Type", val: "Commercial building" },
    ],
  },
];

async function getFeaturedProjects(): Promise<ProjectGridItem[]> {
  const fallbackProjects = defaultProjects;
  const sanityProjects: ProjectGridItem[] = [];

  try {
    const projects = await client.fetch<any[]>(
      `*[_type == "project"] | order(order asc, _createdAt desc)[0...6] {
        _id,
        title,
        "slug": slug.current,
        location,
        category,
        status,
        mainImage,
        description,
        stats
      }`
    );

    projects.forEach((p) => {
      sanityProjects.push({
        id: p.slug || p._id,
        name: p.title || "Untitled Project",
        location: p.location || "Kerala",
        type: p.category || "Residential",
        status: p.status || "ON GOING",
        img: urlForImage(p.mainImage) || "/projects/Avoria Heights.jpeg",
        desc: p.description || "",
        stats: p.stats && p.stats.length > 0 ? p.stats : [{ label: "Type", val: p.category || "Project" }],
      });
    });
  } catch (error) {
    console.error("Error fetching projects from Sanity:", error);
  }

  return [...fallbackProjects, ...sanityProjects].filter(
    (project, index, arr) => arr.findIndex((entry) => entry.id === project.id || entry.name === project.name) === index,
  );
}

export default async function ProjectsGrid() {
  const projects = await getFeaturedProjects();
  return <ProjectsGridClient projects={projects} />;
}
