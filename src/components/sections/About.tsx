import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-blue-400 mb-6">
            About NEXORA
          </h2>

          <p className="text-gray-300 leading-relaxed">
            NEXORA Solutions is a dynamic IT service company powered by a team
            of skilled developers and designers. Our professionals collaborate
            using modern tools and technologies to deliver high-quality digital
            solutions.
          </p>

          <div className="mt-6 space-y-3">
            <p>
              <span className="font-semibold text-white">Mission:</span> Empower
              businesses with technology
            </p>
            <p>
              <span className="font-semibold text-white">Vision:</span> Become a
              global tech leader
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative group">
          <Image
            src="/about.jpeg"
            alt="Indian team working with laptops"
            width={600}
            height={400}
            className="rounded-2xl shadow-2xl object-cover transform group-hover:scale-105 transition duration-500"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition"></div>
        </div>
      </div>
    </section>
  );
}
