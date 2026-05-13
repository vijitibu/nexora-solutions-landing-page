import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { serviceData } from "@/data/services";

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = serviceData.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-purple-950 text-white overflow-hidden">
        {/* HERO */}
        <section className="relative pt-40 pb-24 px-6 text-center overflow-hidden">
          {/* Glow Effects */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full" />

          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full" />

          <div className="relative z-10 max-w-5xl mx-auto">
            {/* Icon */}
            <div className="w-28 h-28 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/10 flex items-center justify-center mx-auto mb-10 shadow-2xl">
              <Icon size={56} className="text-cyan-300" />
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
              {service.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {service.heroDescription}
            </p>
          </div>
        </section>

        {/* FEATURES + TECHNOLOGIES */}
        <section className="pb-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* FEATURES */}
            <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-12">
              <h2 className="text-4xl font-bold mb-10">What We Offer</h2>

              <div className="space-y-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-cyan-400"></div>

                    <p className="text-xl text-gray-200">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* TECHNOLOGIES */}
            <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-12">
              <h2 className="text-4xl font-bold mb-10">Technologies</h2>

              <div className="flex flex-wrap gap-4">
                {service.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="
                      px-6 py-3
                      rounded-full
                      bg-cyan-500/20
                      text-cyan-200
                      font-semibold
                      border border-cyan-500/20
                    "
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-[3rem] bg-linear-to-r from-cyan-500/20 to-purple-500/20 border border-white/10 backdrop-blur-2xl p-16 text-center">
              {/* Glow */}
              <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />

              <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />

              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-8">
                  Ready to Start Your Project?
                </h2>

                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                  Let our expert team help you build scalable and modern digital
                  solutions.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                  <a
                    href="/get-quote"
                    className="
                      px-10 py-5
                      rounded-2xl
                      bg-cyan-500
                      hover:bg-cyan-400
                      transition
                      font-semibold
                      text-lg
                    "
                  >
                    Start Your Project
                  </a>

                  <a
                    href="/contact"
                    className="
                      px-10 py-5
                      rounded-2xl
                      bg-white/10
                      border border-white/10
                      hover:bg-white/20
                      transition
                      font-semibold
                      text-lg
                    "
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
