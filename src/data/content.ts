import type { Service, TimelineItem, Testimonial, ProcessStep } from "@/types";

export const services: Service[] = [
  { number: "01", title: "Digital Marketing Strategy", description: "Data-driven campaigns that grow audiences, drive conversions, and build lasting brand equity across all digital channels." },
  { number: "02", title: "Social Media Campaigns", description: "Platform-native content strategy, community management, and paid campaign execution for Instagram, Facebook, YouTube, and LinkedIn." },
  { number: "03", title: "Branding & Visual Identity", description: "Complete brand systems — logo, colour, typography, tone — designed to communicate clearly and stand apart from the competition." },
  { number: "04", title: "Video Production", description: "Concept, direction, filming, and editing of brand films, social reels, YouTube content, event recaps, and promotional videos." },
  { number: "05", title: "Photography", description: "Editorial and commercial photography for events, portraits, products, and brand campaigns — authentic imagery that tells your story." },
  { number: "06", title: "Graphic Design", description: "Print, digital, and motion-ready design for marketing materials, presentations, social assets, and publications." },
  { number: "07", title: "Motion Graphics", description: "Animated logos, kinetic typography, explainer animations, and social motion content that brings static visuals to life." },
  { number: "08", title: "UI/UX Design", description: "User-centred interface design for web and mobile — wireframes, prototypes, design systems, and pixel-perfect final screens." },
  { number: "09", title: "YouTube & Thumbnail Design", description: "Optimised thumbnails, channel art, and video packaging designed to maximise click-through rate and channel growth." },
  { number: "10", title: "Content Strategy & Copywriting", description: "Strategic messaging, long-form articles, campaign copy, and multilingual content in English, French, and Kinyarwanda." },
];

export const timeline: TimelineItem[] = [
  {
    year: "2026",
    title: "Creative Consultant & Digital Marketing",
    description: "Leading the visual system and enterprise UI/UX direction for DEMS SaaS platform. Expanding digital portfolio and creative campaigns across Rwanda and East Africa.",
  },
  {
    year: "2025",
    title: "Action College & Campaign Work",
    description: "Digital marketing and content production for Action College — multilingual campaigns covering language training, driving school, and vocational programs.",
  },
  {
    year: "2024",
    title: "Full Creative Stack Activation",
    description: "Deployed end-to-end creative capabilities: digital campaigns, video concepts, brand communication systems, and visual content for social media growth across multiple clients.",
  },
  {
    year: "2023",
    title: "UI/UX, Photography & Motion",
    description: "Built foundations in interface design, visual storytelling, photography, and motion content.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Johnson brought a level of creative professionalism and strategic thinking that transformed our social media presence. His multilingual approach was exactly what we needed.",
    name: "Claire M.",
    role: "Marketing Director",
    company: "Action College",
  },
  {
    quote: "The inclusion campaign he produced for us was powerful, authentic, and deeply felt by our community. Exactly the right tone and vision.",
    name: "Eric N.",
    role: "Brand Manager",
    company: "Fitness Point Rwanda",
  },
  {
    quote: "Working with Johnson on the DEMS design system was seamless. He understood the complexity of enterprise UX and delivered with precision and clarity.",
    name: "Patrick K.",
    role: "Product Lead",
    company: "DEMS",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Observe",
    description: "Understand the audience, culture, brand context, and business goal. Deep listening before any creative output.",
  },
  {
    number: "02",
    title: "Think",
    description: "Define the message, strategy, campaign angle, and visual direction. Where insight meets imagination.",
  },
  {
    number: "03",
    title: "Create",
    description: "Design, shoot, edit, animate, write, and produce. Where the idea becomes something tangible and compelling.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "Publish, optimise, measure, and improve. Creative work that performs, not just impresses.",
  },
];

export const marqueeItems = [
  "BRAND STRATEGY",
  "SOCIAL MEDIA",
  "VIDEO PRODUCTION",
  "PHOTOGRAPHY",
  "UI / UX",
  "MOTION GRAPHICS",
  "CONTENT MARKETING",
  "BRANDING",
  "ART DIRECTION",
  "DESIGN SYSTEMS",
  "STORYTELLING",
  "DIGITAL CAMPAIGNS",
];
