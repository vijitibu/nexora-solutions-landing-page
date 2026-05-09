import {
  Cloud,
  Database,
  Globe,
  MonitorSmartphone,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

// src/data/services.ts
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
      "Modern, scalable, and high-performance websites tailored for businesses.",
    icon: Globe,
  },
  {
    title: "Mobile App Development",
    description:
      "Powerful Android and iOS applications with seamless user experience.",
    icon: Smartphone,
  },
  {
    title: "Cloud Solutions",
    description:
      "Secure cloud infrastructure and deployment solutions for enterprises.",
    icon: Cloud,
  },
  {
    title: "Cyber Security",
    description:
      "Protect your business with advanced cybersecurity and monitoring systems.",
    icon: ShieldCheck,
  },
  {
    title: "Digital Marketing",
    description:
      "Growth-focused digital marketing strategies to increase reach, engagement, and business conversions.",
    icon: MonitorSmartphone,
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful and intuitive designs that improve customer engagement.",
    icon: MonitorSmartphone,
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
