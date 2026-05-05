// src/components/sections/Portfolio.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "E-Commerce Platform", img: "/project1.jpeg" },
  { id: 2, title: "Job Portal App", img: "/project2.jpeg" },
  { id: 3, title: "Healthcare Dashboard", img: "/project3.jpeg" },
  { id: 4, title: "Learning Management", img: "/project4.jpeg" },
  { id: 5, title: "Travel Booking App", img: "/project5.jpeg" },
  { id: 6, title: "Finance Analytics", img: "/project6.jpeg" },
];

// container animation (stagger)
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// each card animation
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Portfolio() {
  return (
    <section id="projects" className="py-24 bg-blue-300 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-12">Our Projects</h2>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              {/* Image */}
              <Image
                src={project.img}
                alt={project.title}
                width={400}
                height={250}
                className="object-cover w-full h-64 group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
