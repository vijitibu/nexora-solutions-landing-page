"use client";

import { useState } from "react";
import Link from "next/link";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { serviceData } from "@/data/services";

export default function Services() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCards = 3;

  const nextSlide = () => {
    if (startIndex + visibleCards < serviceData.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 bg-linear-to-br from-slate-950 via-blue-950 to-purple-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* =========================================
            HEADER
        ========================================== */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-20">
          {/* Left Content */}
          <div className="max-w-3xl">
            {/* Label */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-cyan-500/10 border border-cyan-400/20 backdrop-blur-xl shadow-lg mb-8">
              {/* Pulse Dot */}
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>

                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
              </div>

              <span className="text-cyan-300 uppercase tracking-[0.25em] text-sm md:text-base font-bold">
                Our Services
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-white mb-7">
              Smart Digital
              <span className="block bg-linear-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
              We create modern websites, scalable applications, and digital
              experiences for fast-growing businesses.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-5">
            {/* Prev */}
            <button
              onClick={prevSlide}
              disabled={startIndex === 0}
              className="
                group
                w-14 h-14
                rounded-full
                bg-white/10
                backdrop-blur-2xl
                border border-white/10
                flex items-center justify-center
                text-white
                hover:bg-cyan-500
                hover:scale-110
                transition-all duration-300
                disabled:opacity-40
                disabled:cursor-not-allowed
                shadow-xl
              "
            >
              <ChevronLeft
                size={24}
                className="group-hover:-translate-x-1 transition"
              />
            </button>

            {/* Next */}
            <button
              onClick={nextSlide}
              disabled={startIndex + visibleCards >= serviceData.length}
              className="
                group
                w-14 h-14
                rounded-full
                bg-linear-to-r
                from-cyan-500
                to-purple-500
                flex items-center justify-center
                text-white
                hover:scale-110
                transition-all duration-300
                disabled:opacity-40
                disabled:cursor-not-allowed
                shadow-xl
              "
            >
              <ChevronRight
                size={24}
                className="group-hover:translate-x-1 transition"
              />
            </button>
          </div>
        </div>

        {/* =========================================
            CARDS
        ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {serviceData
            .slice(startIndex, startIndex + visibleCards)
            .map((service, index) => {
              const Icon = service.icon;

              return (
                <Link
                  href={`/services/${service.slug}`}
                  key={index}
                  className="
                    group
                    relative
                    bg-white/10
                    backdrop-blur-xl
                    border border-white/10
                    rounded-3xl
                    p-6 md:p-8
                    hover:-translate-y-3
                    hover:border-cyan-400/30
                    transition-all duration-500
                    shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                    overflow-hidden
                  "
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-linear-to-r from-cyan-500/0 via-cyan-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

                  {/* Blur Circle */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:scale-150 transition duration-700" />

                  {/* Icon + Title */}
                  <div className="relative z-10 flex items-start gap-5 mb-8">
                    {/* Icon Box */}
                    <div
                      className="
                        w-20 h-20
                        rounded-[1.7rem]
                        bg-linear-to-br
                        from-cyan-500/20
                        to-purple-500/20
                        border border-white/10
                        flex items-center justify-center
                        shadow-2xl
                        shrink-0
                        group-hover:rotate-6
                        group-hover:scale-110
                        transition duration-500
                      "
                    >
                      <Icon size={36} className="text-cyan-300" />
                    </div>

                    {/* Title + Desc */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-tight mb-3">
                        {service.title}
                      </h3>

                      <p className="text-gray-300 leading-relaxed text-base font-light">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="relative z-10 mt-8 flex items-center justify-between">
                    <span className="text-cyan-300 font-semibold text-lg tracking-wide">
                      Learn More
                    </span>

                    <div
                      className="
                        group/btn
                        w-14 h-14
                        rounded-full
                        bg-white/10
                        border border-white/10
                        flex items-center justify-center
                        shadow-lg
                        hover:bg-cyan-500
                        transition duration-300
                      "
                    >
                      <span
                        className="
                          text-cyan-300
                          group-hover/btn:text-white
                          text-2xl
                          group-hover/btn:translate-x-1
                          transition
                        "
                      >
                        →
                      </span>
                    </div>
                  </div>

                  {/* Bottom Border */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-linear-to-r from-cyan-400 to-purple-500 transition-all duration-500" />
                </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
}
