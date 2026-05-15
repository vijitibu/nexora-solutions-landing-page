import { whyFeatures } from "@/data/features";

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="py-20 md:py-28 bg-linear-to-br from-slate-950 via-blue-950 to-purple-950 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* =========================================
            HEADER
        ========================================== */}
        <div className="text-center mb-20">
          {/* Label */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-400/20 backdrop-blur-xl shadow-lg">
              {/* Pulse */}
              <div className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>

                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
              </div>

              <span className="text-cyan-300 uppercase tracking-[0.25em] text-sm md:text-base font-bold whitespace-nowrap">
                Why Choose Us
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Trusted Digital
            <span className="ml-3 bg-linear-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent">
              Experts
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            We combine innovation, technology, and expertise to deliver scalable
            digital solutions that help businesses grow confidently.
          </p>
        </div>

        {/* =========================================
            FEATURES GRID
        ========================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {whyFeatures.map((item) => (
            <div
              key={item.id}
              className="
                relative
                group
                bg-white/5
                border border-white/10
                backdrop-blur-2xl
                rounded-[2rem]
                p-7 md:p-8
                shadow-[0_20px_80px_rgba(0,0,0,0.35)]
                md:hover:-translate-y-3
                md:hover:border-cyan-400/30
                transition-all duration-500
                overflow-hidden
                flex flex-col
                h-full
              "
            >
              {/* Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div
                  className="
                    w-18 h-18
                    min-w-[72px]
                    min-h-[72px]
                    rounded-[1.5rem]
                    bg-linear-to-br
                    from-cyan-500/20
                    to-blue-500/20
                    border border-white/10
                    flex items-center justify-center
                    text-3xl
                    shadow-xl
                    mb-6
                    group-hover:scale-110
                    group-hover:rotate-6
                    transition duration-500
                  "
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-black leading-tight mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light flex-1">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Border */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
