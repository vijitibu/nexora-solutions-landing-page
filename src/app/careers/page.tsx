import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Link from "next/link";

import { careers } from "@/data/careers";

export default function CareersPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden bg-linear-to-br from-slate-950 via-blue-950 to-purple-950 text-white">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 pb-10 md:pb-16">
          <div className="max-w-7xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block px-6 py-3 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl mb-8">
              <span className="text-cyan-400 font-semibold tracking-[0.2em] uppercase">
                Careers at NEXORA
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-8">
              Join Our
              <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Innovative Team
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Build the future with NEXORA Solutions. Explore exciting
              opportunities in software development, cloud computing, UI/UX,
              cybersecurity, and enterprise technologies.
            </p>
          </div>
        </section>

        {/* Current Openings */}
        <section className="px-4 sm:px-6 lg:px-8 pb-8 md:pb-16">
          <div className="max-w-7xl mx-auto">
            {/* Section Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Current
                <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {" "}
                  Openings
                </span>
              </h2>

              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Have we got you excited? Take a look at our current openings and
                become part of our innovative team.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {careers.map((job) => (
                <div
                  key={job.id}
                  className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-2xl hover:scale-[1.02] transition-all duration-300"
                >
                  {/* Top */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">
                      {job.type}
                    </span>

                    <span className="text-sm text-gray-400">
                      {job.location}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl font-bold mb-4">{job.title}</h2>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {job.description}
                  </p>

                  {/* Salary */}
                  <div className="mb-8">
                    <p className="text-lg font-semibold text-cyan-300">
                      {job.salary}
                    </p>
                  </div>

                  {/* Button */}
                  <Link
                    href={`/careers/${job.id}`}
                    className="inline-flex items-center justify-center w-full py-4 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 font-semibold hover:scale-[1.02] transition-all duration-300"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
