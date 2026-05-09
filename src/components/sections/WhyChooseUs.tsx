import { whyFeatures } from "@/data/features";

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="py-20 md:py-24 bg-linear-to-br from-slate-950 via-blue-950 to-purple-950 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>

          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We combine innovation, technology, and expertise to deliver scalable
            digital solutions that help businesses grow confidently.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {whyFeatures.map((item) => (
            <div
              key={item.id}
              className="
                relative
                group
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-3xl
                p-8
                shadow-lg
                md:hover:-translate-y-2
                md:hover:shadow-2xl
                transition duration-500
                overflow-hidden
              "
            >
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-3xl shadow-lg mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-300 leading-relaxed">
                {item.desc}
              </p>

              {/* Bottom Border */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
