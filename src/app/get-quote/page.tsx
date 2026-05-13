"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function GetQuotePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-purple-950 text-white overflow-hidden">
        {/* Hero */}
        <section className="relative py-32 px-6 overflow-hidden">
          {/* Glow Effects */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full" />

          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full" />

          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <p className="text-cyan-400 uppercase tracking-[0.25em] font-semibold mb-6">
              START YOUR PROJECT
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
              Let’s Build Something Amazing
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Tell us about your project and our expert team will help transform
              your ideas into scalable digital solutions.
            </p>
          </div>
        </section>

        {/* Quote Form */}
        <section className="pb-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side */}
              <div>
                <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-4xl p-10 shadow-2xl">
                  <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>

                  <div className="space-y-6">
                    {[
                      "Enterprise-Level Solutions",
                      "Modern Scalable Technologies",
                      "Fast Project Delivery",
                      "Premium UI/UX Experience",
                      "Dedicated Expert Team",
                      "24/7 Support & Maintenance",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/5"
                      >
                        <div className="w-4 h-4 rounded-full bg-cyan-400"></div>

                        <span className="text-lg text-gray-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-4xl p-10 shadow-2xl">
                <h2 className="text-4xl font-bold mb-10">Request a Quote</h2>

                <form className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-gray-300 mb-3">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="
                        w-full
                        bg-white/5
                        border border-white/10
                        rounded-2xl
                        px-5 py-4
                        text-white
                        placeholder:text-gray-400
                        focus:outline-none
                        focus:border-cyan-400
                      "
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-300 mb-3">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="
                        w-full
                        bg-white/5
                        border border-white/10
                        rounded-2xl
                        px-5 py-4
                        text-white
                        placeholder:text-gray-400
                        focus:outline-none
                        focus:border-cyan-400
                      "
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-gray-300 mb-3">
                      Select Service
                    </label>

                    <select
                      className="
                        w-full
                        bg-white/5
                        border border-white/10
                        rounded-2xl
                        px-5 py-4
                        text-white
                        focus:outline-none
                        focus:border-cyan-400
                      "
                    >
                      <option className="bg-slate-900">Web Development</option>

                      <option className="bg-slate-900">Mobile Apps</option>

                      <option className="bg-slate-900">UI/UX Design</option>

                      <option className="bg-slate-900">Cloud Solutions</option>

                      <option className="bg-slate-900">
                        Digital Marketing
                      </option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-gray-300 mb-3">
                      Project Budget
                    </label>

                    <select
                      className="
                        w-full
                        bg-white/5
                        border border-white/10
                        rounded-2xl
                        px-5 py-4
                        text-white
                        focus:outline-none
                        focus:border-cyan-400
                      "
                    >
                      <option className="bg-slate-900">$1,000 - $5,000</option>

                      <option className="bg-slate-900">$5,000 - $10,000</option>

                      <option className="bg-slate-900">
                        $10,000 - $25,000
                      </option>

                      <option className="bg-slate-900">$25,000+</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-300 mb-3">
                      Project Details
                    </label>

                    <textarea
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="
                        w-full
                        bg-white/5
                        border border-white/10
                        rounded-2xl
                        px-5 py-4
                        text-white
                        placeholder:text-gray-400
                        focus:outline-none
                        focus:border-cyan-400
                        resize-none
                      "
                    />
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="
                      w-full
                      bg-cyan-500
                      hover:bg-cyan-400
                      text-white
                      font-semibold
                      py-4
                      rounded-2xl
                      transition
                      shadow-2xl
                    "
                  >
                    Submit Quote Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
