export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
  client: string;
  description: string;
  images: string[]; // Additional images for the details page
  link?: string; // Optional external link
}