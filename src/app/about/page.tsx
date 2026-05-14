"use client";

import Navbar from "@/components/layout/Navbar";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import SliderButton from "@/components/ui/SliderButton";
import { reviews, team, values } from "@/data/about";
import { Star } from "lucide-react";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % team.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? team.length - 1 : prev - 1));
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-purple-950 text-white overflow-hidden">
        {/* Hero */}
        <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 px-4 sm:px-6 overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
                About
                <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  NEXORA
                </span>
              </h1>

              <p className="text-lg md:text-2xl text-gray-300 leading-relaxed mb-8">
                We create innovative digital solutions for startups,
                enterprises, and modern businesses worldwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/services"
                  className="px-8 py-4 rounded-2xl bg-linear-to-r from-blue-600 to-purple-600 text-lg font-semibold shadow-2xl hover:scale-105 transition"
                >
                  READ MORE
                </Link>

                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl text-lg font-semibold hover:bg-white/10 transition"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-4xl blur opacity-40"></div>

              <div className="relative bg-white/10 backdrop-blur-2xl border border-white/10 rounded-4xl p-6 shadow-2xl overflow-hidden">
                <Image
                  src="/team-collaboration.jpeg"
                  alt="About Team"
                  width={700}
                  height={700}
                  className="rounded-3xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Who We Are
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                NEXORA Solutions is a modern IT company focused on web, mobile,
                cloud, and enterprise technologies.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                We help businesses transform digitally with scalable, secure,
                and innovative solutions.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-pink-600 rounded-4xl blur opacity-40"></div>

              <div className="relative bg-white/10 backdrop-blur-2xl border border-white/10 rounded-4xl p-8 shadow-2xl">
                <Image
                  src="/who-we-are.jpeg"
                  alt="Who We Are"
                  width={600}
                  height={600}
                  className="rounded-3xl mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 px-6 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Values
              </h2>

              <p className="text-gray-300 text-lg">
                Core values that drive our innovation and customer success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -10 }}
                    className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl text-center"
                  >
                    <div className="w-20 h-20 mx-auto rounded-3xl bg-linear-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-6 shadow-xl">
                      <Icon size={40} />
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>

                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        {/* =========================================
    MISSION & VISION
========================================== */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              {/* Label */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-400/20 backdrop-blur-xl shadow-lg">
                  {/* Pulse Dot */}
                  <div className="relative flex h-3 w-3 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>

                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
                  </div>

                  <span className="text-cyan-300 uppercase tracking-[0.25em] text-sm md:text-base font-bold whitespace-nowrap">
                    Our Purpose
                  </span>
                </div>
              </div>

              {/* Heading */}
              <h2 className="text-5xl md:text-6xl font-black leading-tight mb-5 text-white">
                Mission &
                <span className="bg-linear-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent ml-3">
                  Vision
                </span>
              </h2>
              {/* Description */}
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
                We empower businesses with innovative technologies, scalable
                digital products, and future-ready solutions.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
              {/* Mission */}
              <div
                className="
          group
          relative
          overflow-hidden
          rounded-[2rem]
          bg-white/10
          backdrop-blur-2xl
          border border-white/10
p-8 md:p-10          hover:-translate-y-4
          hover:border-cyan-400/30
          transition-all duration-500
          shadow-[0_20px_80px_rgba(0,0,0,0.45)]
          flex flex-col
          h-full
        "
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-linear-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10" />

                {/* Blur */}
                <div className="absolute -top-20 -right-20 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl group-hover:scale-150 transition duration-700" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-[2rem] bg-linear-to-br from-cyan-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center shadow-2xl mb-6 group-hover:rotate-6 group-hover:scale-110 transition duration-500">
                    <span className="text-5xl">🚀</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-4xl font-black mb-6">Our Mission</h3>

                  {/* Text */}
                  <p className="text-gray-300 text-lg leading-relaxed font-light flex-1">
                    To deliver high-quality digital solutions that help
                    startups, enterprises, and modern businesses grow, innovate,
                    and succeed in a rapidly evolving digital world.
                  </p>
                </div>

                {/* Bottom Border */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-700" />
              </div>

              {/* Vision */}
              <div
                className="
          group
          relative
          overflow-hidden
          rounded-[2rem]
          bg-white/10
          backdrop-blur-2xl
          border border-white/10
p-8 md:p-10          hover:-translate-y-4
          hover:border-purple-400/30
          transition-all duration-500
          shadow-[0_20px_80px_rgba(0,0,0,0.45)]
          flex flex-col
          h-full
        "
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-linear-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10" />

                {/* Blur */}
                <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl group-hover:scale-150 transition duration-700" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-[2rem] bg-linear-to-br from-purple-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center shadow-2xl mb-6 group-hover:rotate-6 group-hover:scale-110 transition duration-500">
                    <span className="text-5xl">🌍</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-4xl font-black mb-6">Our Vision</h3>

                  {/* Text */}
                  <p className="text-gray-300 text-lg leading-relaxed font-light flex-1">
                    To become a globally trusted technology partner known for
                    innovation, creativity, and delivering scalable digital
                    experiences that shape the future.
                  </p>
                </div>

                {/* Bottom Border */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-700" />
              </div>
            </div>
          </div>
        </section>
        {/* Client Reviews */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What Our Clients Say
              </h2>

              <p className="text-gray-300 text-lg">
                Trusted by businesses around the world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={70}
                      height={70}
                      className="rounded-full border-2 border-purple-500"
                    />

                    <div>
                      <h3 className="text-xl font-semibold">{review.name}</h3>

                      <p className="text-gray-400 text-sm">{review.role}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 text-yellow-400 mb-4">
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                  </div>

                  <p className="text-gray-300 italic leading-relaxed">
                    “{review.review}”
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Slider */}
        <section className="py-24 px-6 bg-black/20">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet The Team
            </h2>

            <p className="text-gray-300 text-lg mb-16">
              Passionate experts behind NEXORA Solutions.
            </p>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-4xl p-10 shadow-2xl"
                >
                  <Image
                    src={team[current].image}
                    alt={team[current].name}
                    width={180}
                    height={180}
                    className="rounded-full mx-auto border-4 border-purple-500 shadow-2xl"
                  />

                  <h3 className="text-3xl font-bold mt-8 mb-3">
                    {team[current].name}
                  </h3>

                  <p className="text-purple-300 text-lg mb-6">
                    {team[current].role}
                  </p>

                  <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    Dedicated to building innovative digital products and
                    helping businesses scale globally.
                  </p>
                </motion.div>
              </AnimatePresence>

              <SliderButton direction="left" onClickAction={prevSlide} />

              <SliderButton direction="right" onClickAction={nextSlide} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
