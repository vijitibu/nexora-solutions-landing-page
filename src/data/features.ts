import {
  Globe,
  Smartphone,
  Cloud,
  ShieldCheck,
  Database,
  MonitorSmartphone,
  LucideIcon,
} from "lucide-react";

/* =========================
   WHY CHOOSE US FEATURES
========================= */

export interface WhyFeature {
  id: number;
  title: string;
  desc: string;
  icon: string;
}

export const whyFeatures: WhyFeature[] = [
  {
    id: 1,
    title: "Experienced Team",
    desc: "Skilled professionals delivering high-quality digital solutions for modern businesses.",
    icon: "👨‍💻",
  },
  {
    id: 2,
    title: "Fast Delivery",
    desc: "Agile development workflow ensuring faster and reliable project completion.",
    icon: "⚡",
  },
  {
    id: 3,
    title: "Affordable Pricing",
    desc: "Cost-effective services without compromising quality, security, or performance.",
    icon: "💰",
  },
  {
    id: 4,
    title: "24/7 Support",
    desc: "Dedicated support team always available to help your business anytime.",
    icon: "📞",
  },
];

/* =========================
   SERVICES FEATURES
========================= */

export interface ServiceFeature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const serviceFeatures: ServiceFeature[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Modern, scalable, and high-performance websites tailored for businesses.",
    icon: Globe,
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Powerful Android and iOS applications with seamless user experience.",
    icon: Smartphone,
  },
  {
    id: 3,
    title: "Cloud Solutions",
    description:
      "Secure cloud infrastructure and deployment solutions for enterprises.",
    icon: Cloud,
  },
  {
    id: 4,
    title: "Cyber Security",
    description:
      "Protect your business with advanced cybersecurity and monitoring systems.",
    icon: ShieldCheck,
  },
  {
    id: 5,
    title: "Digital Marketing",
    description:
      "Growth-focused digital marketing strategies to increase reach, engagement, and business conversions.",
    icon: MonitorSmartphone,
  },
  {
    id: 6,
    title: "UI/UX Design",
    description:
      "Beautiful and intuitive designs that improve customer engagement.",
    icon: MonitorSmartphone,
  },
];
