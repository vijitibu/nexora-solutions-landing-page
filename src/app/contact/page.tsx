"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-black via-slate-950 to-slate-900 text-white">
        {/* Hero Contact Section */}
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 sm:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-red-500 font-semibold uppercase tracking-wider mb-5">
                Contact Us
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
                Reach Out to Our
                <br />
                Experts
              </h1>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
                Contact our expert team to book a demo, ask questions, or
                discover how our innovative digital solutions can help your
                business grow securely and efficiently.
              </p>

              {/* Info Cards */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
                  <h3 className="text-xl font-semibold mb-2">Email Support</h3>

                  <p className="text-gray-400 text-sm">support@nexora.com</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>

                  <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-black/70 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 md:p-10 shadow-2xl"
            >
              <h2 className="text-3xl font-bold mb-8">Register Now</h2>

              <form className="space-y-6">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-5 py-4 rounded-2xl bg-white text-black outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-5 py-4 rounded-2xl bg-white text-black outline-none"
                  />
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-5 py-4 rounded-2xl bg-white text-black outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full px-5 py-4 rounded-2xl bg-white text-black outline-none"
                  />
                </div>

                {/* Company */}
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-5 py-4 rounded-2xl bg-white text-black outline-none"
                />

                {/* Service */}
                <select className="w-full px-5 py-4 rounded-2xl bg-white text-black outline-none">
                  <option>Select Service</option>
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>Cloud Solutions</option>
                  <option>Cyber Security</option>
                  <option>UI/UX Design</option>
                </select>

                {/* Message */}
                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full px-5 py-4 rounded-2xl bg-white text-black outline-none resize-none"
                />

                {/* Checkbox */}
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5" />

                  <p className="text-gray-300 text-sm leading-relaxed">
                    I agree to receive communications regarding products,
                    updates, and services.
                  </p>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-lg font-semibold hover:scale-[1.02] transition duration-300 shadow-xl"
                >
                  Submit Request
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Extra Contact Info */}
        <section className="pb-20 px-4 sm:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-semibold mb-4">Office</h3>

              <p className="text-gray-400 leading-relaxed">
                San Francisco, California
                <br />
                United States
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-semibold mb-4">Business Hours</h3>

              <p className="text-gray-400 leading-relaxed">
                Monday - Friday
                <br />
                9:00 AM - 6:00 PM
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-semibold mb-4">Support</h3>

              <p className="text-gray-400 leading-relaxed">
                24/7 Customer Assistance
                <br />
                Available Worldwide
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
