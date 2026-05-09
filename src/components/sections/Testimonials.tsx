"use client";

import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-24 bg-linear-to-br from-slate-950 via-blue-950 to-purple-950 text-white overflow-hidden scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client Testimonials
          </h2>

          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Hear what our clients say about our innovative digital solutions,
            seamless collaboration, and exceptional project delivery.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="
                relative
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-3xl
                p-7
                shadow-lg
                md:hover:-translate-y-2
                md:hover:shadow-2xl
                transition duration-500
                overflow-hidden
                flex
                flex-col
                justify-between
                min-h-80
              "
            >
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/10 rounded-full blur-3xl"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Quote */}
                <div className="text-5xl text-cyan-400 leading-none mb-5">
                  “
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 leading-relaxed text-lg">
                  {item.text}
                </p>
              </div>

              {/* User Info */}
              <div className="relative z-10 mt-8 flex items-center gap-4">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-xl font-bold text-white shadow-lg">
                  {item.name.charAt(0)}
                </div>

                {/* Name + Role */}
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.name}
                  </h3>

                  <p className="text-cyan-400 text-sm mt-1">{item.role}</p>
                </div>
              </div>

              {/* Bottom Gradient Border */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-cyan-400 to-blue-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
