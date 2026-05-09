"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import SliderButton from "@/components/ui/SliderButton";
import { projects } from "@/data/projects";

export default function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Scroll Function
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });

    setTimeout(checkScroll, 300);
  };

  // Check Scroll Position
  const checkScroll = () => {
    const el = scrollRef.current;

    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
  };

  // Initial Check
  useEffect(() => {
    checkScroll();
  }, []);

  // Scroll Listener
  useEffect(() => {
    const el = scrollRef.current;

    if (!el) return;

    el.addEventListener("scroll", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <section
      id="projects"
      className="py-20 md:py-24 bg-linear-to-br from-slate-950 via-blue-950 to-purple-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Projects
          </h2>

          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Explore some of our latest innovative digital solutions and
            enterprise-grade applications.
          </p>
        </div>

        {/* Slider Buttons */}
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
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-2 md:px-10"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="
                min-w-[85%]
                sm:min-w-[48%]
                md:min-w-[35%]
                lg:min-w-[26%]
                relative
                group
                rounded-3xl
                overflow-hidden
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                shadow-lg
                md:hover:scale-[1.03]
                md:hover:shadow-2xl
                transition duration-500
              "
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={400}
                  height={260}
                  className="
                    w-full
                    h-56
                    md:h-64
                    object-cover
                    transition duration-700
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-linear-to-t
                    from-black/80
                    via-black/30
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition duration-500
                    flex items-end
                    p-6
                  "
                >
                  <div>
                    <h3 className="text-white text-xl font-semibold">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 text-sm mt-2">
                      Innovative digital experience crafted for modern
                      businesses.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Title */}
              <div className="p-5">
                <h3 className="text-white text-lg font-semibold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Glow */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-linear-to-t from-slate-950 to-transparent" />
      </div>
    </section>
  );
}
