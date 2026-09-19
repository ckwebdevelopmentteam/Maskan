export const revalidate = 60;

import React from "react";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import ProjectDetailClient, { ProjectData } from "./ProjectDetailClient";

type SanityImageValue = {
  asset?: unknown;
  _ref?: string;
};

type SanityProject = {
  title?: string;
  location?: string;
  category?: string;
  scale?: string;
  status?: string;
  description?: string;
  mainImage?: SanityImageValue;
  gallery?: SanityImageValue[];
  story?: {
    theWhere?: string;
    theHow?: string;
    theDetails?: string;
  };
  highlights?: ProjectData["highlights"];
  highlightImages?: SanityImageValue[];
};

const meridianShowcaseImages = [
  "/projects/meridian-gallery-1-3x2-v2.webp",
  "/projects/meridian-gallery-2-3x2-v2.webp",
  "/projects/meridian-gallery-3-3x2.webp",
  "/projects/meridian-gallery-4-3x2.webp",
];

const avoriaShowcaseImages = [
  "/projects/avoria-gallery-1.jpeg",
  "/projects/avoria-gallery-2.jpeg",
  "/projects/avoria-gallery-3.jpeg",
  "/projects/avoria-highlight-pool-3x2.webp",
];

const avoriaHighlightImages = [
  "/projects/avoria-highlight-pool-3x2.webp",
  "/projects/avoria-highlight-2.webp",
  "/projects/avoria-highlight-3.webp",
  "/projects/avoria-highlight-4.webp",
];

const projectsData: Record<string, ProjectData> = {
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
      ...meridianShowcaseImages,
    ],
    galleryImages: meridianShowcaseImages,
    galleryAspectRatio: 3 / 2,
    highlightImages: meridianShowcaseImages,
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
      ...meridianShowcaseImages,
    ],
    galleryImages: meridianShowcaseImages,
    galleryAspectRatio: 3 / 2,
    highlightImages: meridianShowcaseImages,
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
      ...avoriaShowcaseImages,
    ],
    galleryImages: avoriaShowcaseImages,
    galleryAspectRatio: 3 / 2,
    highlightImages: avoriaHighlightImages,
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
      ...avoriaShowcaseImages,
    ],
    galleryImages: avoriaShowcaseImages,
    galleryAspectRatio: 3 / 2,
    highlightImages: avoriaHighlightImages,
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
      ...meridianShowcaseImages,
    ],
    galleryImages: meridianShowcaseImages,
    galleryAspectRatio: 3 / 2,
    highlightImages: meridianShowcaseImages,
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
      ...meridianShowcaseImages,
    ],
    galleryImages: meridianShowcaseImages,
    galleryAspectRatio: 3 / 2,
    highlightImages: meridianShowcaseImages,
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
      "/projects/project-6.webp",
      ...avoriaShowcaseImages,
    ],
    galleryImages: avoriaShowcaseImages,
    galleryAspectRatio: 3 / 2,
    highlightImages: avoriaHighlightImages,
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
      ...meridianShowcaseImages,
    ],
    galleryImages: meridianShowcaseImages,
    galleryAspectRatio: 3 / 2,
    highlightImages: meridianShowcaseImages,
  },
  "commercial-areacode": {
    title: "Commercial Building at Areekode",
    location: "Areekode, Kerala",
    category: "Commercial",
    scale: "Retail & Business Complex",
    status: "Completed",
    description:
      "A completed modern multi-storey commercial building in Areekode. Clad in premium composite metal panels and large glazed storefronts, the complex serves as a bustling business hub and host to top brands like AGL.",
    story: {
      theWhere:
        "Situated in the business district of Areekode, this building commands a prominent spot along the main commercial strip.",
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
      ...avoriaShowcaseImages,
    ],
    galleryImages: avoriaShowcaseImages,
    galleryAspectRatio: 3 / 2,
    highlightImages: avoriaHighlightImages,
  },
  "school-tirur": {
    title: "School Project at Tirur",
    location: "Tirur, Kerala",
    category: "Educational",
    scale: "Institutional Campus",
    status: "On Going",
    description:
      "An expansive institutional campus under development in Tirur. Featuring a classic U-shaped configuration organized around a spacious open courtyard, the design facilitates excellent ventilation and easy student movement across wings.",
    story: {
      theWhere:
        "Located on a tranquil, scenic site in Tirur, chosen specifically to provide a quiet, distraction-free environment for student learning.",
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
      ...meridianShowcaseImages,
    ],
    galleryImages: meridianShowcaseImages,
    galleryAspectRatio: 3 / 2,
    highlightImages: meridianShowcaseImages,
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
      ...meridianShowcaseImages,
    ],
    galleryImages: meridianShowcaseImages,
    galleryAspectRatio: 3 / 2,
    highlightImages: meridianShowcaseImages,
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
      { title: "Club House & Recreation", description: "A dedicated clubhouse and outdoor court surrounded by lush greenery." },
      { title: "Premium Villa Design", description: "Contemporary elevations with generous glazing and refined material finishes." },
      { title: "Landscaped Gardens", description: "Lush private planting complements every villa and shared streetscape." },
      { title: "Gated Enclave", description: "A private villa community with controlled access and wide paved roads." }
    ],
    images: [
      "/projects/meridian-banner.webp",
      "/white_minimal_house.webp",
      "/white_minimal_interior.webp",
      "/white_minimal_facade.webp",
      "/white_minimal_villa.webp"
    ],
    galleryImages: meridianShowcaseImages,
    galleryAspectRatio: 3 / 2,
    highlightImages: meridianShowcaseImages,
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
      { title: "Club House & Recreation", description: "A dedicated clubhouse and outdoor court surrounded by lush greenery." },
      { title: "Premium Villa Design", description: "Contemporary elevations with generous glazing and refined material finishes." },
      { title: "Landscaped Gardens", description: "Lush private planting complements every villa and shared streetscape." },
      { title: "Gated Enclave", description: "A private villa community with controlled access and wide paved roads." }
    ],
    images: [
      "/projects/meridian-banner.webp",
      "/white_minimal_house.webp",
      "/white_minimal_interior.webp",
      "/white_minimal_facade.webp",
      "/white_minimal_villa.webp"
    ],
    galleryImages: meridianShowcaseImages,
    galleryAspectRatio: 3 / 2,
    highlightImages: meridianShowcaseImages,
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
      "/projects/avoria-banner.webp",
      "/white_minimal_house.webp",
      "/white_minimal_interior.webp",
      "/white_minimal_facade.webp"
    ],
    galleryImages: [
      "/projects/avoria-gallery-1.jpeg",
      "/projects/avoria-gallery-2.jpeg",
      "/projects/avoria-gallery-3.jpeg",
      "/projects/avoria-gallery-4.jpeg"
    ],
    highlightImages: [
      "/projects/avoria-highlight-pool-3x2.webp",
      "/projects/avoria-highlight-2.webp",
      "/projects/avoria-highlight-3.webp",
      "/projects/avoria-highlight-4.webp"
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
  "kakanad-commercial-hub": {
    title: "Veekay Signature",
    location: "Kakanad, Kochi, Kerala",
    category: "Commercial",
    scale: "Commercial building",
    status: "On Going",
    description: "A cutting-edge commercial building in Kakanad, Kochi, redefining business landscapes in the IT and commercial hub of Kerala.",
    story: {
      theWhere: "Located strategically in Kakanad, Kochi, close to major IT parks and key transit arteries.",
      theHow: "Designed with a modern glazed façade, efficient floor plans, and flexible space configurations suitable for corporate offices and modern retail.",
      theDetails: "Features double-height entrance lobbies, high-speed elevator access, dedicated parking decks, and advanced energy-efficient lighting."
    },
    highlights: [
      { title: "Prime Kakkanad Location", description: "Positioned in Kochi's premier IT and commercial corridor." },
      { title: "Contemporary Glazed Façade", description: "Sleek architectural exterior maximising daylight and aesthetic appeal." },
      { title: "Flexible Commercial Spaces", description: "Adaptable floor plates for corporate suites, retail, and tech offices." },
      { title: "High-Speed Elevators & Parking", description: "Multi-level structured parking and fast vertical transport." }
    ],
    images: [
      "/projects/Veekay Signature.jpeg",
      ...avoriaShowcaseImages,
    ],
    galleryImages: avoriaShowcaseImages,
    galleryAspectRatio: 3 / 2,
    highlightImages: avoriaHighlightImages,
  },
  "veekay-signature": {
    title: "Veekay Signature",
    location: "Kakanad, Kochi, Kerala",
    category: "Commercial",
    scale: "Commercial building",
    status: "On Going",
    description: "A cutting-edge commercial building in Kakanad, Kochi, redefining business landscapes in the IT and commercial hub of Kerala.",
    story: {
      theWhere: "Located strategically in Kakanad, Kochi, close to major IT parks and key transit arteries.",
      theHow: "Designed with a modern glazed façade, efficient floor plans, and flexible space configurations suitable for corporate offices and modern retail.",
      theDetails: "Features double-height entrance lobbies, high-speed elevator access, dedicated parking decks, and advanced energy-efficient lighting."
    },
    highlights: [
      { title: "Prime Kakkanad Location", description: "Positioned in Kochi's premier IT and commercial corridor." },
      { title: "Contemporary Glazed Façade", description: "Sleek architectural exterior maximising daylight and aesthetic appeal." },
      { title: "Flexible Commercial Spaces", description: "Adaptable floor plates for corporate suites, retail, and tech offices." },
      { title: "High-Speed Elevators & Parking", description: "Multi-level structured parking and fast vertical transport." }
    ],
    images: [
      "/projects/Veekay Signature.jpeg",
      ...avoriaShowcaseImages,
    ],
    galleryImages: avoriaShowcaseImages,
    galleryAspectRatio: 3 / 2,
    highlightImages: avoriaHighlightImages,
  },
};

// Aliases for slug compatibility across all pages
projectsData["plaza-commercial-complex" as keyof typeof projectsData] = projectsData["commercial-muvatupuzha"];
projectsData["manjeri-white-field" as keyof typeof projectsData] = projectsData["kovilakam-villa-manjeri"];
projectsData["plaza-commercial-building" as keyof typeof projectsData] = projectsData["commercial-veliyamcode"];
projectsData["ayush-villa" as keyof typeof projectsData] = projectsData["ayush-villa-valancheri"];
projectsData["school-project-pattambi" as keyof typeof projectsData] = projectsData["school-pattambi"];
projectsData["commercial-building-edappal" as keyof typeof projectsData] = projectsData["commercial-edappal"];
projectsData["commercial-building-areacode" as keyof typeof projectsData] = projectsData["commercial-areacode"];
projectsData["commercial-building-areekode" as keyof typeof projectsData] = projectsData["commercial-areacode"];
(projectsData as Record<string, unknown>)["commercial-areekode"] = projectsData["commercial-areacode"];
(projectsData as Record<string, unknown>)["school-project-tirur"] = projectsData["school-tirur"];
(projectsData as Record<string, unknown>)["school-project-tirur"] = projectsData["school-tirur"];
(projectsData as Record<string, unknown>)["school-tirur"] = projectsData["school-tirur"];

const getProjectBySlug = async (rawSlug: string): Promise<ProjectData> => {
  if (!rawSlug) return projectsData["maskan-avoria"];
  const slug = decodeURIComponent(rawSlug).toLowerCase().trim();

  // 1. Try fetching live from Sanity
  try {
    const sanityProject = await client.fetch<SanityProject | null>(
      `*[_type == "project" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current,
        location,
        category,
        scale,
        status,
        description,
        mainImage,
        gallery,
        story,
        highlights,
        highlightImages
      }`,
      { slug }
    );

    if (sanityProject) {
      const mainImg = urlForImage(sanityProject.mainImage) || "/projects/Avoria Heights.jpeg";
      const galleryImgs = (sanityProject.gallery || [])
        .map((img) => urlForImage(img))
        .filter(Boolean);
      const highlightImgs = (sanityProject.highlightImages || [])
        .map((img) => urlForImage(img))
        .filter(Boolean);

      const allImages = [mainImg, ...galleryImgs];

      return {
        title: sanityProject.title || "Untitled Project",
        location: sanityProject.location || "Kerala",
        category: sanityProject.category || "Residential",
        scale: sanityProject.scale || "Custom Project",
        status: sanityProject.status === "COMPLETED" ? "Completed" : "On Going",
        description: sanityProject.description || "",
        story: {
          theWhere: sanityProject.story?.theWhere || sanityProject.location || "Kerala",
          theHow: sanityProject.story?.theHow || "Engineered with precision and executed to high structural standards.",
          theDetails: sanityProject.story?.theDetails || sanityProject.description || "Designed for long-term durability, functional beauty, and architectural refinement.",
        },
        highlights:
          sanityProject.highlights && sanityProject.highlights.length > 0
            ? sanityProject.highlights
            : [
                {
                  title: "Architectural Precision",
                  description: "Engineered for durability, functional elegance, and contemporary aesthetics.",
                },
              ],
        images: allImages,
        galleryImages: galleryImgs.length > 0 ? galleryImgs : [mainImg],
        galleryAspectRatio: 3 / 2,
        highlightImages: highlightImgs.length > 0 ? highlightImgs : allImages,
      };
    }
  } catch (error) {
    console.error("Error fetching project from Sanity:", error);
  }

  // 2. Fallback to rich static projectsData
  if (slug in projectsData) {
    return projectsData[slug as keyof typeof projectsData];
  }

  const cleanTarget = slug.replace(/[^a-z0-9]/g, "");
  for (const [key, data] of Object.entries(projectsData)) {
    const cleanKey = key.replace(/[^a-z0-9]/g, "");
    if (cleanKey === cleanTarget) {
      return data;
    }
  }

  for (const [key, data] of Object.entries(projectsData)) {
    const cleanKey = key.replace(/[^a-z0-9]/g, "");
    if (cleanTarget && (cleanTarget.includes(cleanKey) || cleanKey.includes(cleanTarget))) {
      return data;
    }
  }

  // Robust fallback to guarantee a project page always loads cleanly
  return projectsData["maskan-avoria"];
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  return {
    title: `${project.title} | Maskan Builders Projects`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  return <ProjectDetailClient project={project} />;
}
