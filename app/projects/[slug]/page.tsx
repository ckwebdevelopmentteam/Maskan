"use client";

import React, { use, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import NavBar from "@/components/Client/NavBar";
import Footer from "@/sections/Footer/Server";
import FAQ from "@/sections/FAQ/index";
import CTA from "@/sections/CTA";
import SeoContent from "@/sections/SeoContent";

const projectsData = {
  "commercial-muvatupuzha": {
    title: "Plaza Commercial Complex",
    location: "Muvatupuzha, Kerala",
    category: "Commercial",
    scale: "Multi-storey",
    status: "On Going",
    description:
      "A landmark commercial plaza in Muvatupuzha featuring a striking vertical louvre façade with warm timber tones. Designed to accommodate modern retail and office spaces, the building blends contemporary aesthetics with practical commercial functionality.",
    story: {
      theWhere:
        "Located in the heart of Muvatupuzha, this project occupies a prime commercial corridor connecting the town's major retail zones.",
      theHow:
        "The design employs a dramatic vertical louvre screen in warm timber tones over a robust concrete frame, creating a bold street presence while allowing diffused natural light into interior spaces.",
      theDetails:
        "Construction photos reveal meticulous rebar work and formwork, reflecting Maskan's commitment to structural precision. The plaza integrates ground-floor retail with upper commercial floors and dedicated parking.",
    },
    highlights: [
      { title: "Vertical Louvre Façade", description: "Warm timber-toned vertical fins create a striking, contemporary commercial identity." },
      { title: "Retail + Office Mix", description: "Ground-floor retail seamlessly transitions to upper commercial office floors." },
      { title: "Structural Precision", description: "Advanced rebar and formwork techniques ensure long-term structural integrity." },
      { title: "Prime Location", description: "Positioned on a key commercial corridor in Muvatupuzha town centre." },
      { title: "Natural Light Design", description: "Louvre screen diffuses harsh sunlight while maintaining bright interiors." },
    ],
    images: [
      "/projects/project-1.webp",
      "/projects/project-6.webp",
      "/projects/project-7.webp",
      "/projects/project-8.webp",
      "/projects/project-9.webp",
      "/projects/project-10.webp",
    ],
  },
  "kovilakam-villa-manjeri": {
    title: "Kovilakam Villa",
    location: "Manjeri, Kerala",
    category: "Residential Villa",
    scale: "Premium Villa Community",
    status: "On Going",
    description:
      "An exclusive boutique villa community set against lush green hillsides in Manjeri. Features dark contemporary architecture with floor-to-ceiling glazing, a landscaped pool area, and natural stone accents — designed for discerning families who value privacy and elegance.",
    story: {
      theWhere:
        "Set on a verdant hillside in Manjeri, the site offers sweeping views of the surrounding landscape, making it a naturally privileged location for premium residential development.",
      theHow:
        "The design embraces a dark palette of charcoal render and natural stone, contrasted with expansive floor-to-ceiling glass that frames the tropical greenery. The community is organised around a central pool courtyard.",
      theDetails:
        "Each villa features private outdoor terraces, stone-paved pathways, and lush planted surrounds. The architectural language draws from contemporary resort design while respecting the region's natural character.",
    },
    highlights: [
      { title: "Hillside Setting", description: "Nestled in lush green hills offering sweeping panoramic views of Manjeri." },
      { title: "Contemporary Dark Architecture", description: "Charcoal render and stone create a bold, premium residential aesthetic." },
      { title: "Private Pool & Courtyard", description: "A landscaped pool courtyard anchors the villa community's social heart." },
      { title: "Floor-to-Ceiling Glazing", description: "Expansive glass walls blur the boundary between interiors and nature." },
      { title: "Resort-Inspired Design", description: "Each villa features private terraces and carefully curated tropical planting." },
    ],
    images: [
      "/projects/project-2.webp",
      "/projects/project-6.webp",
      "/projects/project-7.webp",
      "/projects/project-8.webp",
      "/projects/project-9.webp",
      "/projects/project-10.webp",
    ],
  },
  "residential-flat": {
    title: "Apartments",
    location: "Malappuram, Kerala",
    category: "Residential",
    scale: "3 Storey",
    status: "On Going",
    description:
      "A thoughtfully designed three-storey residential apartment block in Malappuram, combining exposed brick textures with modern concrete elements. Featuring generous balconies with greenery, covered parking, and a rooftop terrace — offering comfortable urban family living.",
    story: {
      theWhere:
        "Situated in a growing residential neighbourhood in Malappuram, the site demanded a design that maximises usable floor area while maintaining a human scale and connection to the street.",
      theHow:
        "The building uses exposed red brick as the primary façade material, paired with smooth concrete balcony slabs and metal railings. Lush balcony planting softens the façade and brings greenery to each floor.",
      theDetails:
        "The three-storey block includes a covered ground-level car park, spacious family apartments on each floor, and a rooftop terrace with an elevated pool and panoramic views. The top view reveals a compact, efficient floor plate.",
    },
    highlights: [
      { title: "Exposed Brick Façade", description: "Rich red brick textures give the building a warm, grounded residential character." },
      { title: "Green Balconies", description: "Each floor features generous balconies planted with tropical greenery." },
      { title: "Rooftop Pool & Terrace", description: "A private rooftop pool and terrace offer elevated outdoor living." },
      { title: "Covered Parking", description: "Ground-level covered parking ensures convenient and secure vehicle access." },
      { title: "Efficient Floor Plan", description: "Compact, well-organised floor plates maximise usable living space." },
    ],
    images: [
      "/projects/Apartments.jpeg",
      "/projects/project-6.webp",
      "/projects/project-7.webp",
      "/projects/project-8.webp",
      "/projects/project-9.webp",
      "/projects/project-10.webp",
    ],
  },
  "residential-flat-malappuram": {
    title: "Apartments",
    location: "Malappuram, Kerala",
    category: "Residential",
    scale: "3 Storey",
    status: "On Going",
    description:
      "A thoughtfully designed three-storey residential apartment block in Malappuram, combining exposed brick textures with modern concrete elements. Featuring generous balconies with greenery, covered parking, and a rooftop terrace — offering comfortable urban family living.",
    story: {
      theWhere:
        "Situated in a growing residential neighbourhood in Malappuram, the site demanded a design that maximises usable floor area while maintaining a human scale and connection to the street.",
      theHow:
        "The building uses exposed red brick as the primary façade material, paired with smooth concrete balcony slabs and metal railings. Lush balcony planting softens the façade and brings greenery to each floor.",
      theDetails:
        "The three-storey block includes a covered ground-level car park, spacious family apartments on each floor, and a rooftop terrace with an elevated pool and panoramic views. The top view reveals a compact, efficient floor plate.",
    },
    highlights: [
      { title: "Exposed Brick Façade", description: "Rich red brick textures give the building a warm, grounded residential character." },
      { title: "Green Balconies", description: "Each floor features generous balconies planted with tropical greenery." },
      { title: "Rooftop Pool & Terrace", description: "A private rooftop pool and terrace offer elevated outdoor living." },
      { title: "Covered Parking", description: "Ground-level covered parking ensures convenient and secure vehicle access." },
      { title: "Efficient Floor Plan", description: "Compact, well-organised floor plates maximise usable living space." },
    ],
    images: [
      "/projects/Apartments.jpeg",
      "/projects/project-6.webp",
      "/projects/project-7.webp",
      "/projects/project-8.webp",
      "/projects/project-9.webp",
      "/projects/project-10.webp",
    ],
  },
  "commercial-veliyamcode": {
    title: "Plaza Commercial Building",
    location: "Veliyamcode, Kerala",
    category: "Commercial",
    scale: "Multi-storey",
    status: "On Going",
    description:
      "A bold commercial development at Veliyamcode featuring a distinctive terracotta-toned façade with geometric fin details and large glazed frontage. Designed in collaboration with Ecoleaf, this plaza sets a new benchmark for commercial architecture in the region.",
    story: {
      theWhere:
        "Positioned on an open plot at Veliyamcode with excellent road frontage and visibility, this site was selected for its high commercial footfall potential.",
      theHow:
        "The design is defined by a warm terracotta façade with sculpted geometric fins over large glazed shop fronts, creating a memorable commercial identity. The upper floor features a glazed curtain wall with projecting fin shading.",
      theDetails:
        "A collaboration with Ecoleaf brings sustainability thinking to the commercial brief. The building's form and materials reflect a bold, contemporary approach to retail architecture suited to Kerala's growing commercial landscape.",
    },
    highlights: [
      { title: "Terracotta Fin Façade", description: "Geometric terracotta fins create a striking, sun-responsive commercial façade." },
      { title: "Large Glazed Frontage", description: "Full-height glazing at ground floor maximises retail visibility and display." },
      { title: "Ecoleaf Collaboration", description: "Designed with Ecoleaf to integrate sustainable architectural practices." },
      { title: "Strong Road Presence", description: "Bold massing and warm tones ensure high visibility from the main road." },
      { title: "Multi-Level Commercial", description: "Ground retail with upper office floors serve diverse commercial tenants." },
    ],
    images: [
      "/projects/project-4.webp",
      "/projects/project-6.webp",
      "/projects/project-7.webp",
      "/projects/project-8.webp",
      "/projects/project-9.webp",
      "/projects/project-10.webp",
    ],
  },
  "ayush-villa-valancheri": {
    title: "Ayush Villa",
    location: "Valancheri, Kerala",
    category: "Residential Villa",
    scale: "Individual Villa",
    status: "On Going",
    description:
      "A heritage-inspired residential villa in Valancheri blending traditional Kerala sloped roof architecture with contemporary detailing. Natural brick, timber accents, and a lush tropical setting create a timeless home that honours local craftsmanship with modern comfort.",
    story: {
      theWhere:
        "Set on a generous plot in Valancheri surrounded by mature tropical vegetation, the site offered the opportunity to create a villa deeply embedded in its natural context.",
      theHow:
        "The design revives the traditional Kerala sloped roof form with modern materials — combining exposed brick, dark metal framing, and timber accents. Site photos show active excavation and foundation work underway.",
      theDetails:
        "Three distinct villa units share the site, each with its own parking, landscaped garden, and covered outdoor verandah. The dark roof and brick walls ground the villas in the regional architectural tradition while delivering 21st-century living standards.",
    },
    highlights: [
      { title: "Traditional Sloped Roof", description: "Kerala's iconic sloped roof form reimagined with contemporary materials and detailing." },
      { title: "Exposed Brick & Timber", description: "Natural brick and timber accents honour regional craftsmanship traditions." },
      { title: "Tropical Garden Setting", description: "Mature tropical planting wraps each villa in a lush, private green setting." },
      { title: "Multiple Villa Units", description: "Three independent villa units each with private parking and outdoor space." },
      { title: "Covered Verandah Living", description: "Generous verandahs extend living outdoors, blending interior and garden." },
    ],
    images: [
      "/projects/project-5.webp",
      "/projects/project-11.webp",
      "/projects/project-12.webp",
      "/projects/project-6.webp",
      "/projects/project-7.webp",
      "/projects/project-8.webp",
    ],
  },
  "school-pattambi": {
    title: "School Project at Pattambi",
    location: "Pattambi, Kerala",
    category: "Educational",
    scale: "Large Educational Complex",
    status: "On Going",
    description:
      "A massive school complex under construction in Pattambi. Spanning multiple wings with advanced formwork and structural framing, this state-of-the-art educational facility is designed to meet modern standards of academic environments.",
    story: {
      theWhere:
        "Located in Pattambi, a rapidly growing institutional center in Kerala. The school campus occupies an expansive greenfield site designed to accommodate extensive academic facilities.",
      theHow:
        "Using highly durable concrete frame construction, advanced formwork scaffolding, and spacious corridors to guarantee child safety and building resilience. Large window openings allow natural cross-ventilation.",
      theDetails:
        "Active construction is underway on multiple academic blocks. The architectural layout integrates classrooms, laboratory spaces, administrative offices, and secure recreational zones.",
    },
    highlights: [
      { title: "Advanced Formwork Scaffolding", description: "Utilizing modern construction technology for absolute structural precision." },
      { title: "Spacious Courtyard & Wings", description: "Design incorporates wide corridors and open-air transition zones." },
      { title: "High-Volume Classrooms", description: "Classrooms feature elevated ceilings for enhanced natural lighting and cooling." },
      { title: "Safety-First Layout", description: "Strict separation of pedestrian/student paths from service vehicle entries." },
      { title: "Multi-Block Campus", description: "Independent wings for elementary, secondary, and administrative offices." },
    ],
    images: [
      "/projects/project-14.jpg",
      "/projects/project-6.webp",
      "/projects/project-7.webp",
      "/projects/project-8.webp",
      "/projects/project-9.webp",
      "/projects/project-10.webp",
    ],
  },
  "commercial-edappal": {
    title: "Commercial Building at Edappal",
    location: "Edappal, Kerala",
    category: "Commercial",
    scale: "Multi-storey Showroom",
    status: "On Going",
    description:
      "A stunning multi-storey commercial building in Edappal. Featuring a contemporary glazed curtain wall facade that integrates natural light and reflections, this structure combines aesthetic distinction with premium retail functionality.",
    story: {
      theWhere:
        "Positioned on a high-traffic highway intersection in Edappal, offering unparalleled visibility and accessibility for premium brands and retail clients.",
      theHow:
        "The design combines floor-to-ceiling glass panel curtain walls with concrete vertical accents. The open floor-plate interior gives maximum configuration flexibility to future tenants.",
      theDetails:
        "The project incorporates two levels of underground parking, glass elevator shafts, and double-height retail frontages on the ground floor for major showrooms.",
    },
    highlights: [
      { title: "Glazed Curtain Wall", description: "High-performance double-glazed glass curtain wall for modern facade styling." },
      { title: "Double-Height Showrooms", description: "Ground floors feature tall glass facades to maximize visibility for premium retail." },
      { title: "Flexible Floor Plates", description: "Column-minimized layout permits versatile partitioning for retail and offices." },
      { title: "Integrated Glass Elevators", description: "Scenic glass elevator shafts enhance user experience and vertical movement." },
      { title: "High Road Visibility", description: "Located at a key intersection to maximize commercial and branding exposure." },
    ],
    images: [
      "/projects/project-13.jpg",
      "/projects/project-6.webp",
      "/projects/project-7.webp",
      "/projects/project-8.webp",
      "/projects/project-9.webp",
      "/projects/project-10.webp",
    ],
  },
  "commercial-areacode": {
    title: "Commercial Building at Areacode",
    location: "Areacode, Kerala",
    category: "Commercial",
    scale: "Retail & Business Complex",
    status: "Completed",
    description:
      "A completed modern multi-storey commercial building in Areacode. Clad in premium composite metal panels and large glazed storefronts, the complex serves as a bustling business hub and host to top brands like AGL.",
    story: {
      theWhere:
        "Situated in the business district of Areacode, this building commands a prominent spot along the main commercial strip.",
      theHow:
        "We used premium metal composite cladding in sleek grey tones, contrasted with warm wood-textured panels and clean glazing. Energy-efficient lighting highlights the facade at night.",
      theDetails:
        "Completed on schedule, the building features three levels of retail space and office chambers, with dedicated parking and a premium entrance lobby.",
    },
    highlights: [
      { title: "Premium Metal Cladding", description: "Durable composite metal panels combined with wood texture accents." },
      { title: "AGL Tile Showroom", description: "Hosts premium brand showroom with double-height storefront display." },
      { title: "Completed & Operational", description: "Successfully handed over and fully occupied by active retail brands." },
      { title: "Modern Lobby Entrance", description: "A high-end lobby area that welcomes corporate visitors and shoppers." },
      { title: "Eco-Friendly Exterior", description: "Combines low-maintenance cladding with energy-saving LED facade illumination." },
    ],
    images: [
      "/projects/project-15.png",
      "/projects/project-6.webp",
      "/projects/project-7.webp",
      "/projects/project-8.webp",
      "/projects/project-9.webp",
      "/projects/project-10.webp",
    ],
  },
  "school-thirur": {
    title: "School Project at Thirur",
    location: "Thirur, Kerala",
    category: "Educational",
    scale: "Institutional Campus",
    status: "On Going",
    description:
      "An expansive institutional campus under development in Thirur. Featuring a classic U-shaped configuration organized around a spacious open courtyard, the design facilitates excellent ventilation and easy student movement across wings.",
    story: {
      theWhere:
        "Located on a tranquil, scenic site in Thirur, chosen specifically to provide a quiet, distraction-free environment for student learning.",
      theHow:
        "The architecture relies on a U-shaped layout enclosing a central green plaza. This configuration promotes natural cross-breezes and offers a secure playground.",
      theDetails:
        "The building features multiple floors of classrooms, interactive seminar halls, staff rooms, and an indoor activity hall. Modern safety and egress standards are prioritized.",
    },
    highlights: [
      { title: "U-Shaped Configuration", description: "Organized around a central open-air courtyard for student assembly and recreation." },
      { title: "Excellent Cross-Ventilation", description: "Wings are aligned to capture regional breeze patterns, reducing cooling costs." },
      { title: "Courtyard Assembly Area", description: "A large central green plaza that serves as the social heart of the campus." },
      { title: "Dedicated Activity Halls", description: "Includes spacious multi-purpose halls for indoor sports and assemblies." },
      { title: "Safety Egress Corridors", description: "Wide fire escapes and multi-point exits designed for emergency student evacuation." },
    ],
    images: [
      "/projects/project-16.png",
      "/projects/project-6.webp",
      "/projects/project-7.webp",
      "/projects/project-8.webp",
      "/projects/project-9.webp",
      "/projects/project-10.webp",
    ],
  },
  "mak-villa-perinthalmanna": {
    title: "Mak Villa Project at Perinthalmanna",
    location: "Perinthalmanna, Kerala",
    category: "Residential Villa",
    scale: "Premium Villa Community",
    status: "On Going",
    description:
      "A luxury residential development in Perinthalmanna. This meticulously planned premium villa community includes modern architecture, dedicated private gardens, and custom layouts for upscale living.",
    story: {
      theWhere:
        "Set in a peaceful suburban pocket of Perinthalmanna, offering the perfect combination of quiet countryside living and city convenience.",
      theHow:
        "Each villa is designed with custom floor plans using premium finishes, glass balconies, and stone masonry. The master plan ensures smart space utilization and high privacy.",
      theDetails:
        "The community includes a wide paved access road, a secure gated entry portal, landscaped pathways, and shared recreational facilities for the homeowners.",
    },
    highlights: [
      { title: "Gated Villa Community", description: "Gated entrance with round-the-clock security and perimeter protection." },
      { title: "Gravel-Paved Access Roads", description: "Wide, beautiful paved roads for easy, clean driving within the estate." },
      { title: "Private Garden Space", description: "Each villa sits on a generous plot with private lawn and landscaping." },
      { title: "Contemporary Elevation", description: "Sleek modern lines, glass balconies, and stone feature walls on every villa." },
      { title: "Integrated Water System", description: "Centralized rainwater harvesting and reliable local water supply." },
    ],
    images: [
      "/projects/project-17.png",
      "/projects/project-11.webp",
      "/projects/project-12.webp",
      "/projects/project-6.webp",
      "/projects/project-7.webp",
      "/projects/project-8.webp",
    ],
  },
  "meridian-heights": {
    title: "Meridian Heights",
    location: "Perinthalmanna, Kerala",
    category: "Residential Villa",
    scale: "42 Villas",
    status: "On Going",
    description: "An exclusive residential villa project in Perinthalmanna, 42 villas designed for modern elegance and premium family living.",
    story: {
      theWhere: "Situated in the rapidly evolving residential hub of Perinthalmanna.",
      theHow: "Designed with modern architectural elegance, expansive glass facades, and private garden spaces.",
      theDetails: "Every villa features premium finishes, dedicated parking, and custom interior layouts."
    },
    highlights: [
      { title: "Smart Security", description: "24/7 advanced monitoring and access control." },
      { title: "Gated Enclave", description: "Private gated community with wide paved access roads." },
      { title: "Landscaped Gardens", description: "Lush green lawns and private garden spaces." },
      { title: "Premium Finishes", description: "High-end fixtures and bespoke interior finishes." },
      { title: "Club House", description: "Recreational facilities for residents." }
    ],
    images: [
      "/projects/Meridian Heights.jpeg",
      "/white_minimal_house.webp",
      "/white_minimal_interior.webp",
      "/white_minimal_facade.webp",
      "/white_minimal_villa.webp"
    ]
  },
  "median-heights": {
    title: "Meridian Heights",
    location: "Perinthalmanna, Kerala",
    category: "Residential Villa",
    scale: "42 Villas",
    status: "On Going",
    description: "An exclusive residential villa project in Perinthalmanna, 42 villas designed for modern elegance and premium family living.",
    story: {
      theWhere: "Situated in the rapidly evolving residential hub of Perinthalmanna.",
      theHow: "Designed with modern architectural elegance, expansive glass facades, and private garden spaces.",
      theDetails: "Every villa features premium finishes, dedicated parking, and custom interior layouts."
    },
    highlights: [
      { title: "Smart Security", description: "24/7 advanced monitoring and access control." },
      { title: "Gated Enclave", description: "Private gated community with wide paved access roads." },
      { title: "Landscaped Gardens", description: "Lush green lawns and private garden spaces." },
      { title: "Premium Finishes", description: "High-end fixtures and bespoke interior finishes." },
      { title: "Club House", description: "Recreational facilities for residents." }
    ],
    images: [
      "/projects/Meridian Heights.jpeg",
      "/white_minimal_house.webp",
      "/white_minimal_interior.webp",
      "/white_minimal_facade.webp",
      "/white_minimal_villa.webp"
    ]
  },
  "maskan-avoria": {
    title: "Maskan Avoria",
    location: "Marad, Ernakulam, Kerala",
    category: "Residential",
    scale: "112 units + new tower",
    status: "Completed",
    description: "A landmark residential development in the heart of Ernakulam, 112 units plus a new tower, balancing urban convenience with quality-built, well-integrated living spaces.",
    story: {
      theWhere: "Nestled in Marad, Ernakulam, offering convenient access to Kochi's major commercial and transport nodes.",
      theHow: "Designed with modern high-rise architecture, optimal space utilization, and durable facade materials.",
      theDetails: "The complex features 112 residential units plus a modern new tower, landscaped common areas, and full facility management."
    },
    highlights: [
      { title: "112 Units + New Tower", description: "Large-scale residential development with modern amenities." },
      { title: "Prime Kochi Location", description: "Positioned in Marad with seamless urban connectivity." },
      { title: "Club House & Recreation", description: "Exclusive access to community facilities and green spaces." },
      { title: "24/7 Security", description: "Comprehensive perimeter security and access control." }
    ],
    images: [
      "/projects/Avoria Heights.jpeg",
      "/white_minimal_house.webp",
      "/white_minimal_interior.webp",
      "/white_minimal_facade.webp"
    ]
  },
  "avoria-heights": {
    title: "Avoria Heights",
    location: "Marad, Ernakulam, Kerala",
    category: "Residential",
    scale: "112 units + new tower",
    status: "Completed",
    description: "Located in the bustling heart of Ernakulam, Maskan is a luxury residential masterpiece that elegantly balances urban sophistication with serene, nature-integrated living spaces.",
    story: {
      theWhere: "Nestled away from the chaotic urban sprawl of Ernakulam on a densely wooded plot.",
      theHow: "We adopted a highly minimalist, pavilion-style architecture to weave around existing trees.",
      theDetails: "The interior features bespoke teak joinery, textured plaster walls, and a central courtyard."
    },
    highlights: [
      { title: "Infinity Pool", description: "Temperature-controlled swimming pool with skyline views." },
      { title: "Zen Garden", description: "Landscaped lush green spaces for meditation and walking." },
      { title: "Club House", description: "Exclusive access to recreation and community events." },
      { title: "Gymnasium", description: "Fully-equipped modern fitness center." },
      { title: "Concierge Services", description: "24/7 assistance for all your lifestyle needs." }
    ],
    images: [
      "/projects/Avoria Heights.jpeg",
      "/white_minimal_villa.webp",
      "/white_minimal_house.webp",
      "/white_minimal_interior.webp",
      "/white_minimal_facade.webp"
    ]
  },
};

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug as keyof typeof projectsData;
  const project = projectsData[slug];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    if (project?.highlights) {
      setCurrentIndex((prev) => (prev + 1) % project.highlights.length);
    }
  }, [project]);

  const handlePrev = useCallback(() => {
    if (project?.highlights) {
      setCurrentIndex((prev) => (prev - 1 + project.highlights.length) % project.highlights.length);
    }
  }, [project]);

  useEffect(() => {
    if (!project?.highlights) return;
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [handleNext, project]);

  if (!project) {
    return (
      <main className="bg-white text-black min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-light tracking-widest uppercase">Project not found</h1>
      </main>
    );
  }

  return (
    <main className="bg-[#FFFFFF] text-[#3B4D5C] min-h-screen relative font-sans selection:bg-[#244b6b] selection:text-white">

      {/* NavBar */}
      <div className="absolute top-0 w-full z-50">
        <NavBar />
      </div>

      {/* HERO */}
      <section className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="absolute inset-0 w-full h-full object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-[#244b6b]/40 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-black/30 z-10" />

        <div className="relative z-20 flex flex-col items-center text-center max-w-5xl px-6 w-full mt-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/60 text-sm uppercase tracking-widest mb-4 font-medium"
          >
            {project.category} · {project.location}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-[7rem] text-white font-bold tracking-tight uppercase mb-6 drop-shadow-xl"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-base md:text-lg max-w-2xl leading-relaxed mb-10 drop-shadow"
          >
            {project.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-6"
          >
            <span className="px-4 py-1.5 rounded-full border border-white/30 text-white/80 text-xs uppercase tracking-widest">
              {project.status}
            </span>
            <span className="px-4 py-1.5 rounded-full border border-white/30 text-white/80 text-xs uppercase tracking-widest">
              {project.scale}
            </span>
          </motion.div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 lg:py-32">
        <div className="flex flex-col justify-start mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-medium leading-[1.05] tracking-tight max-w-3xl">
            Building in a better way is at the heart of everything we do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">The Where</p>
              <p className="text-base text-gray-600 leading-relaxed">{project.story.theWhere}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">The How</p>
              <p className="text-base text-gray-600 leading-relaxed">{project.story.theHow}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">The Details</p>
              <p className="text-base text-gray-600 leading-relaxed">{project.story.theDetails}</p>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {project.images.slice(1).map((img, idx) => (
            <div key={idx} className="flex flex-col group cursor-pointer">
              <div className="relative w-full aspect-square overflow-hidden bg-gray-100 rounded-sm">
                <Image
                  src={img}
                  alt={`${project.title} Gallery ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS SHOWCASE */}
      <section className="w-full bg-[#f8f9fa] text-[#111] py-24 lg:py-32 relative overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left: Highlights list */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-16">
              Project<br />Highlights.
            </h2>
            <div className="flex flex-col gap-6 relative border-l border-gray-300 pl-6">
              {project.highlights.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`cursor-pointer transition-all duration-300 relative ${
                    currentIndex === idx ? "opacity-100 translate-x-2" : "opacity-40 hover:opacity-70"
                  }`}
                >
                  {currentIndex === idx && (
                    <motion.div
                      layoutId="activeHighlightIndicator"
                      className="absolute -left-[25px] top-0 bottom-0 w-[2px] bg-[#244b6b]"
                    />
                  )}
                  <h3 className={`text-xl md:text-2xl font-semibold mb-2 transition-colors duration-300 ${currentIndex === idx ? "text-[#244b6b]" : "text-gray-800"}`}>
                    {item.title}
                  </h3>
                  <AnimatePresence>
                    {currentIndex === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 text-sm leading-relaxed pt-2">{item.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-16">
              <button onClick={handlePrev} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <span className="text-gray-600">←</span>
              </button>
              <button onClick={handleNext} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <span className="text-gray-600">→</span>
              </button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-2/3 relative aspect-[4/3] lg:aspect-auto lg:h-[700px] rounded-[2rem] overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={project.images[currentIndex % project.images.length]}
                  alt={project.highlights[currentIndex].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-auto md:w-96 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                  <span className="text-xs uppercase tracking-widest text-white/70 font-semibold block mb-2">Project Highlight</span>
                  <p className="text-lg font-medium leading-snug drop-shadow-md">
                    {project.highlights[currentIndex].title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <CTA />
      <FAQ />
      <SeoContent />
      <Footer />
    </main>
  );
}
