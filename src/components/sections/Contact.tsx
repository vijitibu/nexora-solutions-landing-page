"use client";

import Navbar from "@/components/layout/Navbar";

import { motion } from "framer-motion";
import { useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

interface Errors {
  fullName?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState("");

  // Handle Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validation
  const validate = () => {
    const newErrors: Errors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      console.log("Submitted:", formData);

      setSuccess("Message submitted successfully!");

      setFormData({
        fullName: "",
        email: "",
        message: "",
      });

      setErrors({});
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-x-hidden bg-linear-to-br from-black via-slate-950 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="pt-28 md:pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16 items-center">
              {/* LEFT CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                {/* Badge */}
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 border border-cyan-500/20 backdrop-blur-xl mb-8">
                  <span className="text-xl sm:text-2xl font-bold tracking-[0.25em] uppercase bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
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
                  Contact our expert team to discuss your project ideas,
                  business requirements, or innovative digital transformation
                  solutions.
                </p>

                {/* Info Cards */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                    <h3 className="text-2xl font-semibold mb-3">
                      Email Support
                    </h3>

                    <p className="text-gray-400">support@nexora.com</p>
                  </div>

                  {/* Call */}
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
                className="w-full max-w-2xl bg-white text-black rounded-sm p-8 md:p-12 shadow-2xl"
              >
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold mb-10">
                  Send Message
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-10">
                  {/* Full Name */}
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="
                        w-full
                        border-b-2
                        border-gray-700
                        bg-transparent
                        py-3
                        outline-none
                        text-lg
                        placeholder:text-gray-500
                        focus:border-cyan-500
                        transition duration-300
                      "
                    />

                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="
                        w-full
                        border-b-2
                        border-gray-700
                        bg-transparent
                        py-3
                        outline-none
                        text-lg
                        placeholder:text-gray-500
                        focus:border-cyan-500
                        transition duration-300
                      "
                    />

                    {errors.email && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your Message..."
                      className="
                        w-full
                        border-b-2
                        border-gray-700
                        bg-transparent
                        py-3
                        outline-none
                        resize-none
                        text-lg
                        placeholder:text-gray-500
                        focus:border-cyan-500
                        transition duration-300
                      "
                    />

                    {errors.message && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Success */}
                  {success && (
                    <p className="text-green-600 font-medium">{success}</p>
                  )}

                  {/* Button */}
                  <button
                    type="submit"
                    className="
                      bg-cyan-500
                      hover:bg-cyan-400
                      text-white
                      px-10
                      py-3
                      text-lg
                      font-medium
                      transition duration-300
                      shadow-md
                    "
                  >
                    Send
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
