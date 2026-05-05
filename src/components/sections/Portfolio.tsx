"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SliderButton from "@/components/ui/SliderButton";

export default function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Scroll handler
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });

    // slight delay to update state after scroll
    setTimeout(checkScroll, 300);
  };

  // Check scroll position
  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
  };

  // Initial check
  useEffect(() => {
    checkScroll();
  }, []);

  // Listen to scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const projects = [
    { id: 1, title: "E-Commerce Platform", img: "/project1.jpeg" },
    { id: 2, title: "Job Portal App", img: "/project2.jpeg" },
    { id: 3, title: "Healthcare Dashboard", img: "/project3.jpeg" },
    { id: 4, title: "Learning Management", img: "/project4.jpeg" },
    { id: 5, title: "Travel Booking App", img: "/project5.jpeg" },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-linear-to-br from-blue-300 via-blue-400 to-indigo-400"
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Our Projects
        </h2>

        {/* Buttons with disable */}
        <SliderButton
          direction="left"
          onClickAction={() => scroll("left")}
          disabled={!canScrollLeft}
        />
        <SliderButton
          direction="right"
          onClickAction={() => scroll("right")}
          disabled={!canScrollRight}
        />

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-10"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="
                min-w-[80%] 
                sm:min-w-[45%] 
                md:min-w-[30%] 
                lg:min-w-[23%] 
                relative group rounded-2xl overflow-hidden 
                bg-white/10 backdrop-blur-md 
                shadow-md hover:shadow-2xl 
                transition duration-500 hover:scale-[1.03]
              "
            >
              <Image
                src={project.img}
                alt={project.title}
                width={300}
                height={180}
                className="
                  w-full h-44 md:h-48 object-cover 
                  transition duration-500 group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0 
                  bg-linear-to-t from-black/70 via-black/30 to-transparent 
                  opacity-0 group-hover:opacity-100 
                  transition duration-500 
                  flex items-end p-4
                "
              >
                <h3 className="text-white font-semibold text-sm md:text-base">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-linear-to-t from-blue-300 to-transparent" />
      </div>
    </section>
  );
}
