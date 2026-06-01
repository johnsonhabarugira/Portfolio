export interface Project {
  title: string;
  slug: string;
  year: string;
  client: string;
  category: string;
  disciplines: string[];
  coverImage: string;
  coverColor?: string;
  galleryImages: string[];
  intro: string;
  challenge: string;
  solution: string;
  results: string[];
  nextProject: string | null;
  prevProject: string | null;
  role: string;
  featured: boolean;
}

export interface Service {
  number: string;
  title: string;
  description: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
