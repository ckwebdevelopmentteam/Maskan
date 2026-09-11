export interface DefaultBlogPost {
  _id: string;
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
  tags: string[];
  isPublished: boolean;
  featured: boolean;
  createdAt: string;
}

export const defaultBlogs: DefaultBlogPost[] = [
  {
    _id: "seed-blog-1",
    title: "Contemporary Kerala Architecture: Blending Heritage with Minimalist Luxury",
    slug: "contemporary-kerala-architecture-heritage-minimalism",
    excerpt: "Discover how Maskan harmonises traditional sloping pitched roofs, courtyard courtyards, and natural timber with floor-to-ceiling glass and crisp contemporary aesthetics.",
    content: `
Kerala's rich architectural tapestry has long been celebrated for its climate responsiveness, natural materials, and harmonious integration with the surrounding landscape. At Maskan Builders, our philosophy is anchored in honouring these time-tested traditions while fearlessly embracing contemporary minimalism.

### The Return of the Courtyard (Nadumuttam)
Historically, the central courtyard functioned as the breathing lung of a traditional home. In contemporary residential design, we reinterpret this space into open-to-sky light wells, framed with double-glazed slimline aluminium profiles and minimalist water bodies. Not only does this flood living spaces with diffused, glare-free daylight, but it also creates natural stack ventilation that lowers indoor temperatures year-round.

### Natural Materials Reimagined
Rather than disguising structural elements, modern luxury architecture celebrates honest materiality:
- **Locally Sourced Laterite & Brick**: Hand-dressed laterite stones left exposed or sealed with breathable clear coats offer tactile warmth and thermal mass.
- **Teak & Sustainable Hardwoods**: Sleek horizontal battens, concealed pivot entrance doors, and slatted pergolas create warmth against smooth architectural concrete.
- **Micro-Topping Concrete & Terrazzo**: Seamless floors create uninterrupted sightlines, blurring the boundaries between interior suites and outdoor verandahs.

### Designing for the Tropical Monsoon
Building in Kerala requires deep consideration for heavy rainfall and intense sunlight. Deep overhangs, louvered screens, and strategically angled rooflines protect exterior surfaces while framing views of lush tropical greenery.

> "A home should not merely shelter its occupants; it should ground them in their natural surroundings while delivering an elevated sense of serenity and quiet luxury."

By marrying the lessons of the past with the structural precision and material refinement of the present, Maskan continues to shape a distinct architectural identity for bespoke homes across Kerala.
    `.trim(),
    coverImage: "/projects/meridian-gallery-1-3x2-v2.webp",
    category: "Architecture",
    author: {
      name: "Er. Muhsin & Design Team",
      role: "Principal Architectural Consultant",
      avatar: "",
    },
    readingTime: "5 min read",
    tags: ["Kerala Architecture", "Minimalism", "Luxury Villas", "Sustainable Design"],
    featured: true,
    isPublished: true,
    createdAt: "2026-03-01T10:00:00.000Z",
  },
  {
    _id: "seed-blog-2",
    title: "Sustainable Construction: Smart Climate-Responsive Engineering for the Tropics",
    slug: "sustainable-construction-climate-responsive-engineering",
    excerpt: "Explore engineered solutions for passive cooling, rainwater harvesting, and structural longevity in tropical environments.",
    content: `
Sustainability is no longer an optional design consideration; it is the cornerstone of responsible engineering. In tropical regions like Kerala, buildings must withstand monsoon moisture, high humidity, and intense summer insolation.

### Passive Thermal Strategies
Mechanical air conditioning consumes vast amounts of energy if buildings are not engineered correctly. Our passive cooling strategies focus on:
1. **Cross-Ventilation Corridors**: Aligning window apertures with seasonal wind vectors ensures continuous airflow across social zones.
2. **Thermal Break Facades**: Double-skin ventilated facades and high-performance Low-E glazing mitigate solar heat gain before it penetrates the building envelope.
3. **High Thermal-Mass Walls**: Utilising aerated concrete blocks and solid masonry buffers temperature fluctuations, keeping interior spaces cooler during peak midday hours.

### Rainwater Harvesting & Greywater Recycling
A standard 3,000 sq. ft. villa in Kerala can capture over 400,000 litres of pure rainwater during the dual monsoon seasons. We integrate underground filtration sumps, recharge pits, and dual-plumbing greywater systems that irrigate landscaped gardens autonomously.

### Long-Term Material Resilience
Salt air, humidity, and torrential rains demand high-grade anti-corrosive reinforcement bars, hydrophobic concrete admixtures, and multi-layer elastomeric waterproofing membranes on all flat roofs and terrace gardens.
    `.trim(),
    coverImage: "/projects/avoria-highlight-pool-3x2.webp",
    category: "Engineering",
    author: {
      name: "Maskan Structural Engineering Cell",
      role: "Engineering & Technical Operations",
      avatar: "",
    },
    readingTime: "4 min read",
    tags: ["Sustainability", "Passive Cooling", "Engineering", "Green Building"],
    featured: false,
    isPublished: true,
    createdAt: "2026-02-18T14:30:00.000Z",
  },
  {
    _id: "seed-blog-3",
    title: "Redefining Commercial Landmarks: Balancing Retail Presence with Structural Agility",
    slug: "redefining-commercial-landmarks-retail-presence",
    excerpt: "How modern multi-storey commercial plazas maximize roadside visibility, footfall circulation, and corporate adaptability.",
    content: `
Commercial architecture requires a fine balance between brand visibility, parking logistics, and flexible floor-plate efficiency. From Muvatupuzha to Kakkanad, Maskan's commercial developments set new regional standards.

### The Power of the Façade
In high-traffic urban corridors, a commercial building's exterior is its most effective marketing asset. By utilising vertical timber-toned louvres, structural glass curtain walls, and integrated LED accent channels, our commercial plazas command immediate attention while regulating interior glare.

### Flexible Open Floor Plates
Modern retail brands and corporate tenants demand adaptable floor plans:
- **Post-Tensioned Slabs**: By minimising interior columns, tenants enjoy unrestricted showroom layout possibilities.
- **Double-Height Ground Showrooms**: Dramatic 6-metre floor-to-ceiling heights provide premium brand frontage and effortless natural illumination.
- **Segregated Circulation**: Wide escalator banks, dedicated scenic glass elevators, and separate service loading bays ensure smooth traffic flow without customer disruption.

### Future-Proof Infrastructure
Underground structured multi-level parking, integrated EV charging stations, and dedicated high-speed optical fibre backbones ensure our commercial hubs remain top-tier leasing destinations for decades to come.
    `.trim(),
    coverImage: "/projects/project-1.webp",
    category: "Commercial",
    author: {
      name: "Maskan Commercial Projects Division",
      role: "Commercial Development Advisory",
      avatar: "",
    },
    readingTime: "6 min read",
    tags: ["Commercial Architecture", "Plaza Design", "Retail Architecture", "Urban Development"],
    featured: false,
    isPublished: true,
    createdAt: "2026-01-25T09:15:00.000Z",
  },
  {
    _id: "seed-blog-4",
    title: "Curating Luxury Interiors: The Art of Seamless Space and Bespoke Detailing",
    slug: "curating-luxury-interiors-seamless-space",
    excerpt: "From floating staircase cantilevers to bespoke mood lighting, delve into the subtle nuances that elevate everyday luxury living.",
    content: `
True luxury is not about ornate embellishment; it is about intentionality, spatial harmony, and flawless execution. When architecture and interior design are conceived simultaneously, the result is a home that feels effortlessly cohesive.

### The Role of Concealed Detailing
- **Shadow Gap Skirtings**: Recessed baseboards and shadowline ceiling reveals create clean planar divisions where walls appear to float weightlessly.
- **Architectural Lighting Layers**: Combining glare-free recessed downlights, concealed warm cove lighting (2700K–3000K), and statement designer pendants transforms spaces from vibrant daytime living to intimate evening lounges.
- **Custom Joinery**: Floor-to-ceiling cabinetry finished in fluted oak, tinted mirror glass, and matte lacquer eliminates visual clutter while offering expansive storage.

### Indoor-Outdoor Continuity
By matching the exact tonal hue of interior stone flooring to exterior terrace pavers and using flush-track sliding glass doors, living rooms effortlessly extend into covered verandahs, pool decks, and private gardens.
    `.trim(),
    coverImage: "/projects/meridian-gallery-2-3x2-v2.webp",
    category: "Interior Design",
    author: {
      name: "Maskan Interior Atelier",
      role: "Interior Design & Styling Studio",
      avatar: "",
    },
    readingTime: "4 min read",
    tags: ["Interior Design", "Luxury Homes", "Lighting Design", "Bespoke Joinery"],
    featured: false,
    isPublished: true,
    createdAt: "2026-01-10T11:45:00.000Z",
  },
];
