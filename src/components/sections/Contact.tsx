"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-black via-slate-950 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="pt-28 md:pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-14 xl:gap-20 items-start">
              {/* LEFT CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="pt-4 xl:pt-10"
              >
                {/* Badge */}
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 border border-cyan-500/20 backdrop-blur-xl mb-8">
                  <span className="text-xl sm:text-2xl font-bold tracking-[0.25em] uppercase bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Contact Us
                  </span>
                </div>

                {/* Heading */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight mb-8">
                  Reach Out to Our
                  <br />
                  Experts
                </h1>

                {/* Description */}
                <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                  Contact our expert team to book a demo, ask questions, or
                  discover how our innovative digital solutions can help your
                  business grow securely and efficiently.
                </p>

                {/* Info Cards */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                    <h3 className="text-2xl font-semibold mb-3">
                      Email Support
                    </h3>

                    <p className="text-gray-400">support@nexora.com</p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                    <h3 className="text-2xl font-semibold mb-3">Call Us</h3>

                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT FORM */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full bg-black/60 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-2xl"
              >
                {/* Form Heading */}
                <h2 className="text-4xl md:text-5xl font-bold mb-10">
                  Register Now
                </h2>

                <form className="space-y-6">
                  {/* Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

                  {/* Contact Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-lg font-semibold hover:scale-[1.02] transition duration-300 shadow-xl"
                  >
                    Submit Request
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Extra Info */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Office */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-semibold mb-4">Office</h3>

              <p className="text-gray-400 leading-relaxed">
                San Francisco, California
                <br />
                United States
              </p>
            </div>

            {/* Business Hours */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-semibold mb-4">Business Hours</h3>

              <p className="text-gray-400 leading-relaxed">
                Monday - Friday
                <br />
                9:00 AM - 6:00 PM
              </p>
            </div>

            {/* Support */}
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
      </main>
    </>
  );
}
