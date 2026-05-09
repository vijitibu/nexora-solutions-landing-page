"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { motion } from "framer-motion";

import { serviceOptions } from "@/data/services";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    agree: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Handle Change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  // Validation
  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (!formData.agree) {
      newErrors.agree = "Please accept the agreement";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      console.log("Submitted Values:", formData);

      alert("✅ Form submitted successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
        agree: false,
      });

      setErrors({});
    } else {
      alert("❌ Please fill all required fields correctly.");
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-x-hidden bg-linear-to-br from-black via-slate-950 to-slate-900 text-white">
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
                className="w-full bg-black/60 backdrop-blur-2xl border border-white/10 rounded-4xl p-6 sm:p-8 lg:p-10 shadow-2xl"
              >
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold mb-10">
                  Register Now
                </h2>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-7">
                  {/* Name Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* First Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        First Name
                      </label>

                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className=" w-full
                                  px-5
                                  py-4
                                  rounded-xl
                                  bg-white/8
                                  border
                                  border-white/10
                                  backdrop-blur-md
                                  text-white
                                  placeholder:text-gray-500
                                  focus:outline-none
                                  focus:border-cyan-400
                                  focus:ring-2
                                  focus:ring-cyan-500/20
                                  transition-all
                                  duration-300
        "
                      />

                      {errors.firstName && (
                        <p className="text-red-400 text-sm mt-2">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name
                      </label>

                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="
          w-full
          px-5
          py-4
          rounded-xl
          bg-white/8
          border
          border-white/10
          backdrop-blur-md
          text-white
          placeholder:text-gray-500
          focus:outline-none
          focus:border-cyan-400
          focus:ring-2
          focus:ring-cyan-500/20
          transition-all
          duration-300
        "
                      />

                      {errors.lastName && (
                        <p className="text-red-400 text-sm mt-2">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Contact Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="
          w-full
          px-5
          py-4
          rounded-xl
          bg-white/8
          border
          border-white/10
          backdrop-blur-md
          text-white
          placeholder:text-gray-500
          focus:outline-none
          focus:border-cyan-400
          focus:ring-2
          focus:ring-cyan-500/20
          transition-all
          duration-300
        "
                      />

                      {errors.email && (
                        <p className="text-red-400 text-sm mt-2">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>

                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 890"
                        className="
          w-full
          px-5
          py-4
          rounded-xl
          bg-white/8
          border
          border-white/10
          backdrop-blur-md
          text-white
          placeholder:text-gray-500
          focus:outline-none
          focus:border-cyan-400
          focus:ring-2
          focus:ring-cyan-500/20
          transition-all
          duration-300
        "
                      />

                      {errors.phone && (
                        <p className="text-red-400 text-sm mt-2">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>

                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="NEXORA Solutions"
                      className="
        w-full
        px-5
        py-4
        rounded-xl
        bg-white/8
        border
        border-white/10
        backdrop-blur-md
        text-white
        placeholder:text-gray-500
        focus:outline-none
        focus:border-cyan-400
        focus:ring-2
        focus:ring-cyan-500/20
        transition-all
        duration-300
      "
                    />

                    {errors.company && (
                      <p className="text-red-400 text-sm mt-2">
                        {errors.company}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Select Service
                    </label>

                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="
        w-full
        px-5
        py-4
        rounded-xl
        bg-white/8
        border
        border-white/10
        backdrop-blur-md
        text-white
        focus:outline-none
        focus:border-cyan-400
        focus:ring-2
        focus:ring-cyan-500/20
        transition-all
        duration-300
      "
                    >
                      <option value="" className="text-black">
                        Select Service
                      </option>

                      {serviceOptions.map((item) => (
                        <option
                          key={item.title}
                          value={item.title}
                          className="text-black"
                        >
                          {item.title}
                        </option>
                      ))}
                    </select>

                    {errors.service && (
                      <p className="text-red-400 text-sm mt-2">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>

                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message..."
                      className="
        w-full
        px-5
        py-4
        rounded-xl
        bg-white/8
        border
        border-white/10
        backdrop-blur-md
        text-white
        placeholder:text-gray-500
        focus:outline-none
        focus:border-cyan-400
        focus:ring-2
        focus:ring-cyan-500/20
        transition-all
        duration-300
        resize-none
      "
                    />

                    {errors.message && (
                      <p className="text-red-400 text-sm mt-2">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Checkbox */}
                  <div>
                    <label className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                        className="mt-1 w-5 h-5 accent-cyan-500"
                      />

                      <span className="text-gray-300 leading-relaxed text-sm">
                        I agree to receive communications regarding products,
                        services, and updates.
                      </span>
                    </label>

                    {errors.agree && (
                      <p className="text-red-400 text-sm mt-2">
                        {errors.agree}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="
      w-full
      py-4
      rounded-xl
      bg-linear-to-r
      from-cyan-500
      to-blue-600
      text-lg
      font-semibold
      hover:scale-[1.01]
      hover:shadow-cyan-500/30
      shadow-xl
      transition-all
      duration-300
    "
                  >
                    Submit Request
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bottom Info */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
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
