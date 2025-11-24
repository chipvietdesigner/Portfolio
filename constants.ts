import { ExperienceItem, SkillCategory, ProjectItem } from './types';

export const PERSONAL_INFO = {
  name: "Pham Xuan Sang",
  role: "Product Designer",
  email: "chipviet.designer@gmail.com",
  website: "www.chipviet.com",
  phone: "(+84) 329456195",
  location: "Da Nang, Vietnam",
  portrait: "https://r2.obj.usercontent.com/p/assets/e30817eb-198d-40f8-b034-5c596c52124d/668d4346-f99c-4603-bbce-132315122d7e_User_Image.png",
  social: {
    behance: "https://www.behance.net/chipviet",
    dribbble: "https://dribbble.com/chipvietdesigner"
  }
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "1",
    role: "Lead Designer & Business Analyst",
    company: "VeryPay LLC",
    period: "Apr 2025 – Present",
    description: "As the lead designer & BA at VeryPay, I work with stakeholders and Product Owner to define business requirements and translate them into actionable specs. Draw wireframe, writing BRDs, PRDs, and user stories. Bridging UX logic with system logic to optimize product flows and improve product scalability. Mentoring designers and formalizing design ops practices."
  },
  {
    id: "2",
    role: "Product Designer",
    company: "VeryPay LLC",
    period: "Aug 2020 – Apr 2025",
    description: "As the product designer at VeryPay, I designed UI/UX for a comprehensive fintech ecosystem including web/mobile POS apps, receipts, NFC cards, merchant & customer apps. Crafted user journeys, wireframes, and high-fidelity prototypes to drive a user-centered design approach."
  },
  {
    id: "3",
    role: "Front-end Developer",
    company: "SmartDev LLC",
    period: "Oct 2019 – Sep 2022",
    description: "As the Front-end at SmartDev LLC, I developed and optimized the front-end for web, iOS, and Android apps. Enhanced UI/UX to ensure smoother interactions and a seamless user experience across all devices."
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Design",
    items: ["Mobile & Web design", "Wire-framing & Prototyping", "HMI Design"]
  },
  {
    title: "Coding",
    items: ["HTML/CSS", "React Native / ReactJS", "Basic Javaspringboot"]
  }
];

export const AWARDS = [
  {
    title: "AWS, Build On Vietnam 2021 - Champion",
    description: "Champion and Best presentation of 63 teams with over 300 participants in Vietnam hosted by Amazon Web Service."
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "1",
    title: "Smart Banking App",
    category: "Product Design",
    year: "2024",
    client: "Global Finance",
    description: "Redesigning the mobile banking experience for a modern, digital-first audience. This app moves away from traditional tabular data, presenting financial health through interactive visualizations and personalized insights. Security features are integrated seamlessly into the UI, making authentication feel like a natural part of the flow rather than a barrier.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?q=80&w=1600&auto=format&fit=crop"
    ]
  },
  {
    id: "2",
    title: "Kletta",
    category: "Product Design",
    year: "2024",
    client: "Kletta",
    link: "https://kletta.com/",
    description: "Led the end-to-end product design for Kletta, a specialized platform for accountants. My role involved translating complex accounting workflows into an intuitive interface. I conducted user research to understand pain points in VAT liability and expense tracking, resulting in a streamlined dashboard that reduces task time significantly. I focused on clean data presentation and quick-action features to support high-volume financial management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224154-260327c00c4b?q=80&w=1600&auto=format&fit=crop"
    ]
  },
  {
    id: "3",
    title: "VeryPay",
    category: "Product Design & BA",
    year: "2023",
    client: "VeryPay",
    link: "https://verypay.ch/",
    description: "VeryPay is a closed-loop contactless tap-and-go payment technology designed to extend utility, increase usage of mobile money, and drive growth for Global Mobile Network Operators. As a Product Designer and Business Analyst, I bridged the gap between technical constraints and user needs. I defined requirements for the mobile wallet and NFC card interaction, creating flows that function seamlessly offline. I facilitated workshops to align stakeholders on the roadmap and translated complex payment logic into simple, user-friendly mobile interfaces.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/cfff8b213178957.6741b54681363.png",
    images: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1600&auto=format&fit=crop"
    ]
  },
  {
    id: "4",
    title: "Drone Command",
    category: "UI/UX Design",
    year: "2023",
    client: "HubX",
    description: "Designed the HMI (Human-Machine Interface) for a professional drone flight controller. The challenge was to display high-density telemetry data without overwhelming the pilot. I utilized progressive disclosure and high-contrast visuals to ensure critical flight data—altitude, battery, GPS, and obstacle avoidance—is legible under varying lighting conditions. The design includes real-time map plotting and automated mission planning interfaces.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=1600&auto=format&fit=crop"
    ]
  },
  {
    id: "5",
    title: "Mobile CRM",
    category: "UI/UX Design",
    year: "2022",
    client: "Enterprise Solutions",
    description: "Transformed a desktop-heavy CRM into a streamlined mobile experience for field sales teams. I focused on quick-entry interactions and gestural navigation to allow users to update leads on the go. The design emphasizes actionable insights, surfacing urgent tasks and client updates immediately upon login. Key features include offline mode support and voice-to-text data entry for efficiency.",
    image: "https://images.unsplash.com/photo-1512428559087-560fa0cec34f?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
    ]
  },
  {
    id: "6",
    title: "Koodaa",
    category: "Product Design",
    year: "2025",
    client: "Koodaa",
    link: "https://koodaa.com/",
    description: "Koodaa is an AI-driven platform built to optimize bookkeeping by offering real-time financial insights for efficient expense management, invoicing, and reporting. I designed the interaction model for the AI assistant, ensuring users feel in control of automated financial categorization. I worked on integrating real-time data visualization from QuickBooks and Xero, creating a dashboard that provides instant financial clarity for small business owners.",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1639815188546-c43c240ff4df?q=80&w=1600&auto=format&fit=crop"
    ]
  }
];