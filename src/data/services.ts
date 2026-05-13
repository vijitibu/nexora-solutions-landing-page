// src/data/services.ts
import {
  Globe,
  Smartphone,
  Palette,
  Cloud,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

export const serviceOptions = [
  { title: "Web Development" },
  { title: "Mobile App Development" },
  { title: "UI/UX Design" },
  { title: "Cloud Solutions" },
  { title: "Digital Marketing" },
];

export const services = [
  {
    title: "Web Development",

    description:
      "Modern, scalable and responsive websites for startups and enterprises.",

    icon: Globe,

    link: "/services/web-development",
  },

  {
    title: "Mobile Apps",

    description:
      "High-performance Android and iOS applications with modern UI.",

    icon: Smartphone,

    link: "/services/mobile-apps",
  },

  {
    title: "UI/UX Design",

    description:
      "Creative and user-friendly interfaces designed for better experiences.",

    icon: Palette,

    link: "/services/ui-ux-design",
  },

  {
    title: "Cloud Solutions",

    description:
      "Secure and scalable cloud infrastructure for modern businesses.",

    icon: Cloud,

    link: "/services/cloud-solutions",
  },

  {
    title: "Cyber Security",

    description:
      "Advanced security solutions to protect systems and digital assets.",

    icon: ShieldCheck,

    link: "/services/cyber-security",
  },

  {
    title: "Digital Marketing",

    description: "Smart marketing strategies to grow your online presence.",

    icon: BarChart3,

    link: "/services/digital-marketing",
  },
];
export const feedbacks = [
  {
    id: 1,
    name: "Michael Johnson",
    role: "CEO, TechNova",
    image: "/client1.jpeg",
    review:
      "NEXORA transformed our business with an exceptional web platform. Their team is highly professional and innovative.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Founder, Bright Solutions",
    image: "/client2.jpeg",
    review:
      "Their mobile app development service exceeded our expectations. Highly recommended for startups and enterprises.",
  },
  {
    id: 3,
    name: "David Brown",
    role: "Manager, CloudSync",
    image: "/client3.jpeg",
    review:
      "Outstanding support and cloud solutions. Our systems are now faster, secure, and scalable.",
  },
];

export const serviceData = [
  {
    slug: "web-development",

    title: "Web Development",

    description: "Modern scalable web applications for businesses.",

    heroDescription:
      "We build fast, secure and scalable web applications using modern technologies.",

    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],

    features: [
      "Responsive Websites",
      "Next.js Applications",
      "E-Commerce Solutions",
      "Admin Dashboards",
    ],

    icon: Globe,
  },

  {
    slug: "mobile-apps",

    title: "Mobile Apps",

    description: "Android and iOS mobile app solutions.",

    heroDescription:
      "Premium Android and iOS mobile applications with modern UI and scalable architecture.",

    technologies: ["Flutter", "React Native", "Firebase", "Node.js"],

    features: [
      "Android Apps",
      "iOS Apps",
      "Realtime Features",
      "Push Notifications",
    ],

    icon: Smartphone,
  },

  {
    slug: "ui-ux-design",

    title: "UI/UX Design",

    description: "Creative and user-friendly interfaces.",

    heroDescription:
      "Modern UI/UX designs focused on user experience and conversions.",

    technologies: ["Figma", "Adobe XD", "Framer", "Photoshop"],

    features: [
      "Wireframes",
      "Mobile UI",
      "Dashboard Design",
      "Prototype Design",
    ],

    icon: Palette,
  },

  {
    slug: "cloud-solutions",

    title: "Cloud Solutions",

    description: "Secure cloud infrastructure services.",

    heroDescription:
      "Cloud architecture and scalable deployment solutions for enterprises.",

    technologies: ["AWS", "Azure", "Docker", "Kubernetes"],

    features: [
      "Cloud Hosting",
      "CI/CD Pipelines",
      "Monitoring",
      "Auto Scaling",
    ],

    icon: Cloud,
  },

  {
    slug: "cyber-security",

    title: "Cyber Security",

    description: "Advanced security and protection systems.",

    heroDescription:
      "Protect your infrastructure and applications with enterprise-grade security.",

    technologies: ["Firewall", "Encryption", "Cloud Security", "Monitoring"],

    features: [
      "Threat Detection",
      "Network Security",
      "Vulnerability Testing",
      "Security Audits",
    ],

    icon: ShieldCheck,
  },

  {
    slug: "digital-marketing",

    title: "Digital Marketing",

    description: "Modern digital marketing strategies.",

    heroDescription:
      "Grow your online presence with data-driven digital marketing.",

    technologies: ["SEO", "Google Ads", "Meta Ads", "Analytics"],

    features: [
      "SEO Optimization",
      "Social Media Marketing",
      "PPC Campaigns",
      "Content Marketing",
    ],

    icon: BarChart3,
  },
];
