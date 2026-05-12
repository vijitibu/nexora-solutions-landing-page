import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Link from "next/link";
import { notFound } from "next/navigation";

import { careers } from "@/data/careers";

export default async function CareerDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const job = careers.find((item) => item.id === id);

  if (!job) {
    return notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-purple-950 text-white px-4 sm:px-6 lg:px-8 pt-32 pb-24 overflow-hidden">
        <section className="max-w-5xl mx-auto">
          {/* Top Card */}
          <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-4xl p-8 md:p-12 shadow-2xl mb-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
              <div>
                <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm inline-block mb-6">
                  {job.type}
                </span>

                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {job.title}
                </h1>

                <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                  {job.description}
                </p>
              </div>

              <div className="bg-black/30 border border-white/10 rounded-3xl p-6 min-w-60">
                <p className="text-gray-400 mb-2">Location</p>
                <h3 className="text-xl font-semibold mb-6">{job.location}</h3>

                <p className="text-gray-400 mb-2">Salary</p>
                <h3 className="text-xl font-semibold text-cyan-300">
                  {job.salary}
                </h3>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 text-lg font-semibold hover:scale-[1.02] transition-all duration-300"
            >
              Apply Now
            </Link>
          </div>

          {/* Responsibilities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-4xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold mb-8">Responsibilities</h2>

              <ul className="space-y-5 text-gray-300">
                {job.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-3 h-3 rounded-full bg-cyan-400 mt-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-4xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold mb-8">Requirements</h2>

              <ul className="space-y-5 text-gray-300">
                {job.requirements.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-3 h-3 rounded-full bg-purple-400 mt-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
