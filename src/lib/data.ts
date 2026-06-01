import { Project, Service, TimelineItem, Testimonial, ProcessStep } from "@/types";

export const projects: Project[] = [
  {
    title: "Action College Digital Growth Campaign",
    slug: "action-college",
    year: "2024–2026",
    client: "Action College",
    category: "Digital Marketing",
    role: "Digital Marketing Specialist & Content Creator",
    featured: true,
    coverImage: "/projects/action-college/cover.jpg",
    coverColor: "#1a1a2e",
    disciplines: [
      "Digital Marketing Strategy",
      "Content Production",
      "Photography Direction",
      "Video Editing",
      "Social Media Campaigns",
      "YouTube Content Packaging",
      "Brand Storytelling",
      "Multilingual Campaign Messaging",
    ],
    galleryImages: [
      "/projects/action-college/01.jpg",
      "/projects/action-college/02.jpg",
      "/projects/action-college/03.jpg",
    ],
    intro:
      "Developed creative campaigns, video content, social media visuals, and multilingual messaging to promote language training, driving license programs, international test preparation, and vocational courses.",
    challenge:
      "Action College serves a diverse, multilingual audience in Rwanda with a wide range of educational programs. The challenge was creating cohesive, compelling content that spoke to each audience segment — students, professionals, and parents — across multiple languages and platforms.",
    solution:
      "Built a consistent visual communication system using brand-aligned templates, multilingual copy in English, French, and Kinyarwanda, and a strategic content calendar that aligned campaign timing with enrollment periods and cultural moments.",
    results: [
      "Increased enrollment inquiries through targeted social campaigns",
      "Improved brand visibility and recognition across Kigali",
      "Built consistent multilingual social media communication",
      "Created reusable visual content templates for the marketing team",
    ],
    nextProject: "butera-knowless",
    prevProject: null,
  },
  {
    title: "Butera Knowless Artist Collaboration",
    slug: "butera-knowless",
    year: "2024",
    client: "Butera Knowless",
    category: "Visual Communication",
    role: "Photographer & Video Director",
    featured: true,
    coverImage: "/projects/butera-knowless/cover.jpg",
    coverColor: "#0d1b2a",
    disciplines: [
      "Photography",
      "Video Direction",
      "Creative Direction",
      "Retouching",
      "Motion Graphics",
    ],
    galleryImages: [
      "/projects/butera-knowless/01.jpg",
      "/projects/butera-knowless/02.jpg",
    ],
    intro:
      "Visual storytelling and creative direction for Rwandan music artist Butera Knowless — capturing performance energy and artistic identity through photography and video.",
    challenge:
      "Capturing the authentic energy of a live performing artist while building a consistent visual identity that translates across album art, promotional content, and social media.",
    solution:
      "Combined on-location photography sessions with motion work and post-production retouching to build a rich, editorial visual library that felt cinematic and personal.",
    results: [
      "Delivered a full visual library used across digital platforms",
      "Elevated brand perception with premium editorial aesthetics",
      "Produced promotional video content for social channels",
    ],
    nextProject: "fitness-point-rwanda",
    prevProject: "action-college",
  },
  {
    title: "Fitness Point Rwanda Inclusion Video",
    slug: "fitness-point-rwanda",
    year: "2024",
    client: "Fitness Point Rwanda",
    category: "Video Production",
    role: "Videographer & Video Editor",
    featured: true,
    coverImage: "/projects/fitness-point/cover.jpg",
    coverColor: "#0f2027",
    disciplines: [
      "Video Production",
      "Video Editing",
      "Storytelling",
      "Motion Graphics",
      "Social Media Content",
    ],
    galleryImages: [
      "/projects/fitness-point/01.jpg",
      "/projects/fitness-point/02.jpg",
    ],
    intro:
      "Produced an inclusion-focused video campaign for Fitness Point Rwanda highlighting community, wellness, and accessibility in fitness for all Rwandans.",
    challenge:
      "Communicating a message of inclusivity in fitness in a way that felt authentic, warm, and visually compelling — not corporate or generic.",
    solution:
      "Shot on location with real gym members, using natural light and documentary-style editing to create an honest, emotionally resonant narrative.",
    results: [
      "High engagement rates on social media platforms",
      "Authentic community representation on brand channels",
      "Increased brand trust and community visibility",
    ],
    nextProject: "salam-intel",
    prevProject: "butera-knowless",
  },
  {
    title: "Salam Intel Shipping Social Growth",
    slug: "salam-intel",
    year: "2024",
    client: "Salam Intel",
    category: "Digital Marketing",
    role: "Social Media Strategist & Designer",
    featured: true,
    coverImage: "/projects/salam-intel/cover.jpg",
    coverColor: "#1a1a2e",
    disciplines: [
      "Social Media Strategy",
      "Graphic Design",
      "Content Creation",
      "Brand Communication",
      "Copywriting",
    ],
    galleryImages: ["/projects/salam-intel/01.jpg"],
    intro:
      "Social media growth strategy and design for an international shipping company operating between Rwanda and global markets.",
    challenge:
      "Building trust and visibility for a logistics brand in a competitive market where credibility and reliability are the key differentiators.",
    solution:
      "Developed a content strategy focused on transparency, customer success stories, and educational content about international shipping — paired with clean, professional graphic design.",
    results: [
      "Significant follower growth on key social platforms",
      "Improved brand consistency across all digital touchpoints",
      "Higher engagement rates through educational content",
    ],
    nextProject: "vanguard-economics",
    prevProject: "fitness-point-rwanda",
  },
  {
    title: "Vanguard Economics Design Concepts",
    slug: "vanguard-economics",
    year: "2023",
    client: "Vanguard Economics",
    category: "Graphic Design & Branding",
    role: "Brand Designer",
    featured: false,
    coverImage: "/projects/vanguard/cover.jpg",
    coverColor: "#0a0a0a",
    disciplines: [
      "Brand Identity",
      "Graphic Design",
      "Visual Systems",
      "Typography",
      "Layout Design",
    ],
    galleryImages: ["/projects/vanguard/01.jpg"],
    intro:
      "Visual identity and design concepts for an economics and policy research firm — balancing intellectual credibility with approachable visual language.",
    challenge:
      "Economic institutions often default to dry, institutional design. The challenge was creating something rigorous yet engaging — serious but not stiff.",
    solution:
      "Built a refined typographic system with data visualization principles at its core, using a minimal palette and strategic use of space to convey precision and authority.",
    results: [
      "Delivered complete brand identity package",
      "Consistent visual language across print and digital",
      "Positive reception from stakeholders and partners",
    ],
    nextProject: "ac-mobility",
    prevProject: "salam-intel",
  },
  {
    title: "AC Mobility Communication Campaign",
    slug: "ac-mobility",
    year: "2024",
    client: "AC Mobility",
    category: "Digital Marketing",
    role: "Content Creator & Campaign Strategist",
    featured: false,
    coverImage: "/projects/ac-mobility/cover.jpg",
    coverColor: "#14213d",
    disciplines: [
      "Campaign Strategy",
      "Content Production",
      "Social Media",
      "Graphic Design",
      "Video Production",
    ],
    galleryImages: ["/projects/ac-mobility/01.jpg"],
    intro:
      "Communication campaign for a Rwandan mobility and transportation brand — building awareness, trust, and engagement across digital channels.",
    challenge:
      "Positioning a local mobility brand as reliable and modern in a market where trust is built through consistent visual presence and word of mouth.",
    solution:
      "Executed a multi-format content campaign combining promotional video, graphic posts, and customer-centric storytelling to build credibility and community.",
    results: [
      "Expanded digital reach across target demographics",
      "Built cohesive visual language for the brand",
      "Increased community engagement on social platforms",
    ],
    nextProject: "dems-saas",
    prevProject: "vanguard-economics",
  },
  {
    title: "DEMS SaaS UI/UX System",
    slug: "dems-saas",
    year: "2025–2026",
    client: "DEMS",
    category: "UI/UX Design",
    role: "UI/UX Designer & Visual Systems Lead",
    featured: true,
    coverImage: "/projects/dems/cover.jpg",
    coverColor: "#0d0d1a",
    disciplines: [
      "UI/UX Design",
      "Design Systems",
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "Component Architecture",
    ],
    galleryImages: [
      "/projects/dems/01.jpg",
      "/projects/dems/02.jpg",
      "/projects/dems/03.jpg",
    ],
    intro:
      "Designing the visual system and enterprise UI/UX direction for DEMS — a SaaS platform built for scale, clarity, and professional-grade user experience.",
    challenge:
      "Enterprise SaaS tools are often complex and overwhelming. The challenge was designing an interface that handles complexity with elegance — making powerful features feel intuitive.",
    solution:
      "Built a comprehensive design system with consistent components, clear information hierarchy, and a visual language that communicates trust and precision. Prioritised user flows that reduce cognitive load and accelerate task completion.",
    results: [
      "Delivered complete design system and component library",
      "Improved user experience clarity and workflow efficiency",
      "Established scalable visual direction for the product",
    ],
    nextProject: "event-photography",
    prevProject: "ac-mobility",
  },
  {
    title: "Event Photography — Kigali",
    slug: "event-photography",
    year: "2023–2024",
    client: "Various Clients",
    category: "Photography",
    role: "Event Photographer",
    featured: false,
    coverImage: "/projects/events/cover.jpg",
    coverColor: "#111111",
    disciplines: [
      "Event Photography",
      "Portrait Photography",
      "Post-production",
      "Image Retouching",
    ],
    galleryImages: [
      "/projects/events/01.jpg",
      "/projects/events/02.jpg",
    ],
    intro:
      "Event photography across corporate gatherings, cultural celebrations, and community events in Kigali — capturing authentic moments with cinematic quality.",
    challenge:
      "Events are unpredictable. The challenge is reading the room, anticipating moments, and delivering images that tell the full story of an event — not just the staged ones.",
    solution:
      "Combined photojournalistic instinct with technical precision — balancing available light, movement, and subject awareness to capture the emotional truth of each event.",
    results: [
      "Delivered high-quality event photo libraries for clients",
      "Built lasting client relationships through reliable delivery",
      "Created images used in marketing, press, and social content",
    ],
    nextProject: "action-college",
    prevProject: "dems-saas",
  },
];

export const services: Service[] = [
  {
    number: "01",
    title: "Digital Marketing Strategy",
    description:
      "Data-driven campaigns, content planning, and platform strategy that turns attention into action.",
  },
  {
    number: "02",
    title: "Social Media Campaigns",
    description:
      "Platform-native content, community management, and paid social strategy for growth.",
  },
  {
    number: "03",
    title: "Graphic Design",
    description:
      "Print and digital design that communicates clearly and looks exceptional.",
  },
  {
    number: "04",
    title: "Branding & Visual Identity",
    description:
      "Logo systems, colour palettes, typography, and brand guidelines that define who you are.",
  },
  {
    number: "05",
    title: "Video Production",
    description:
      "Cinematic storytelling from concept to final cut — short-form, documentary, and promotional.",
  },
  {
    number: "06",
    title: "Photography",
    description:
      "Commercial, event, portrait, and editorial photography with professional post-production.",
  },
  {
    number: "07",
    title: "Motion Graphics",
    description:
      "Animated content, title sequences, and motion design for social and broadcast.",
  },
  {
    number: "08",
    title: "UI/UX Design",
    description:
      "User-centred product design with clean interfaces, clear flows, and strong visual systems.",
  },
  {
    number: "09",
    title: "YouTube Packaging",
    description:
      "Thumbnails, channel art, intros, and title cards built for click-through and watch time.",
  },
  {
    number: "10",
    title: "Content Strategy",
    description:
      "Editorial planning, messaging architecture, and channel strategies aligned with business goals.",
  },
  {
    number: "11",
    title: "Copywriting",
    description:
      "Clear, compelling copy for campaigns, social, web, and brand communication.",
  },
  {
    number: "12",
    title: "Multilingual Campaigns",
    description:
      "Campaign messaging crafted in English, French, and Kinyarwanda for Rwandan and regional audiences.",
  },
];

export const timeline: TimelineItem[] = [
  {
    year: "2026",
    title: "Building enterprise UI/UX & expanding creative portfolio",
    description:
      "Leading visual system design for DEMS SaaS platform. Expanding creative portfolio with new photography and video projects.",
  },
  {
    year: "2025",
    title: "Digital marketing campaigns for Action College",
    description:
      "Full-scale digital marketing, content production, and multilingual campaign execution for education and driving programs.",
  },
  {
    year: "2024",
    title: "Creative campaigns, video, and brand communication",
    description:
      "Developed creative strategies, video concepts, and visual content for brands including Butera Knowless, Fitness Point Rwanda, Salam Intel, and AC Mobility.",
  },
  {
    year: "2023",
    title: "Expanding into UI/UX, photography, and motion",
    description:
      "Broadened skill set into UI/UX design, commercial photography, video production, and motion graphics.",
  },
  {
    year: "2022",
    title: "Foundation in Business IT, design, and digital marketing",
    description:
      "Built core skills in Business Information Technology, graphic design, digital marketing fundamentals, and visual communication.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Observe",
    description:
      "Understand the audience, culture, brand, and business goal. Research competitors, context, and what already exists.",
  },
  {
    number: "02",
    title: "Think",
    description:
      "Define the message, strategy, campaign angle, and visual direction. Align creative intent with business outcomes.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "Design, shoot, edit, animate, write, and produce. Execute with craft, intention, and attention to every detail.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Publish, optimise, measure, and improve. Ensure work lands with impact and continues to perform.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Johnson brought a level of creative vision and strategic thinking that elevated everything we put out. The campaigns he built for us were clear, visually compelling, and culturally resonant.",
    name: "Marketing Director",
    role: "Head of Marketing",
    company: "Action College",
  },
  {
    quote:
      "Working with Johnson felt effortless. He understood the brief immediately, delivered ahead of schedule, and the quality was exactly what we needed. Professional, talented, and great to collaborate with.",
    name: "Creative Lead",
    role: "Creative Director",
    company: "Kigali Studio",
  },
  {
    quote:
      "The photography and video work Johnson produced for our event told the story perfectly. Authentic, cinematic, and delivered exactly on brief.",
    name: "Event Coordinator",
    role: "Brand Manager",
    company: "Events Rwanda",
  },
];

export const skillKeywords = [
  "Digital Marketing",
  "Visual Communication",
  "Branding",
  "Video Production",
  "Photography",
  "Motion Graphics",
  "UI/UX Design",
  "Creative Content",
  "Storytelling",
  "Art Direction",
];

export const marqueeItems = [
  "BRAND STRATEGY",
  "SOCIAL MEDIA",
  "VIDEO PRODUCTION",
  "PHOTOGRAPHY",
  "UI/UX DESIGN",
  "MOTION GRAPHICS",
  "CONTENT MARKETING",
  "ART DIRECTION",
  "BRANDING",
  "DIGITAL CAMPAIGNS",
  "CREATIVE DIRECTION",
  "STORYTELLING",
];
