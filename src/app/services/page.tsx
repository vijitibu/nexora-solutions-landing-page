"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { feedbacks, serviceData } from "@/data/services";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";

import Image from "next/image";

import { useState } from "react";

export default function ServicesPage() {
  /* =========================
     Contact Form State
  ========================== */
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  /* =========================
     Services Slider State
  ========================== */
  const [startIndex, setStartIndex] = useState(0);

  const visibleCards = 3;

  const nextSlide = () => {
    if (startIndex + visibleCards < serviceData.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  /* =========================
     Form Logic
  ========================== */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let valid = true;

    const newErrors = {
      fullName: "",
      email: "",
      message: "",
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";

      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";

      valid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";

      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";

      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      console.log("Submitted Values:", formData);

      setSuccess("Message submitted successfully!");

      setFormData({
        fullName: "",
        email: "",
        message: "",
      });

      setErrors({
        fullName: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <>
      <Navbar />

      <main className="bg-linear-to-br from-slate-950 via-blue-950 to-purple-950 min-h-screen text-white">
        {/* =========================================
            HERO SECTION
        ========================================== */}
        <section className="pt-32 md:pt-40 pb-20 md:pb-24 px-4 sm:px-6 text-center max-w-6xl mx-auto overflow-hidden">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
            IT Services and Solutions
            <br />
            for Businesses
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We provide innovative digital solutions including web development,
            mobile applications, cloud services, cybersecurity, and enterprise
            technologies to help businesses grow and succeed in the digital era.
          </p>

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Team Illustration Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-4xl blur opacity-40 group-hover:opacity-70 transition duration-500"></div>

              <div className="relative bg-white/10 backdrop-blur-2xl border border-white/10 rounded-4xl p-6 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

                <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>

                <Image
                  src="/team-work.jpeg"
                  alt="IT Services"
                  width={700}
                  height={700}
                  className="relative z-10 rounded-3xl mx-auto hover:scale-105 transition duration-500"
                />

                <div className="relative z-10 mt-8 text-center">
                  <h3 className="text-3xl font-bold mb-3">
                    Collaborative Innovation
                  </h3>

                  <p className="text-gray-300 leading-relaxed text-lg">
                    Our expert development team works together to build
                    scalable, secure, and modern digital solutions for
                    businesses.
                  </p>
                </div>
              </div>
            </div>

            {/* Office Card */}
            <div className="relative group h-full">
              <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-pink-600 rounded-4xl blur opacity-40 group-hover:opacity-70 transition duration-500"></div>

              <div className="relative bg-white/10 backdrop-blur-2xl border border-white/10 rounded-4xl p-6 shadow-2xl h-full overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold">Visit Our Office</h3>

                    <p className="text-gray-300 mt-2">
                      San Francisco, California, USA
                    </p>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-purple-600 to-pink-600 flex items-center justify-center shadow-xl text-2xl">
                    📍
                  </div>
                </div>

                <div className="overflow-hidden rounded-3xl border border-white/10 shadow-xl">
                  <iframe
                    src="https://maps.google.com/maps?q=San%20Francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="420"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-3xl"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            SERVICES SECTION
        ========================================== */}
        <section className="py-14 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-16">
            <div>
              <p className="text-cyan-400 uppercase tracking-[0.3em] font-semibold mb-4">
                WHAT WE PROVIDE
              </p>

              <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Our Services
              </h2>

              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
                Innovative digital solutions crafted to help businesses grow,
                scale, and succeed in the modern digital world.
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-5">
              {/* Prev */}
              <button
                onClick={prevSlide}
                disabled={startIndex === 0}
                className="
          group
          w-14 h-14
          rounded-full
          bg-white/10
          backdrop-blur-2xl
          border border-white/10
          flex items-center justify-center
          text-white
          hover:bg-cyan-500
          hover:scale-110
          transition-all duration-300
          disabled:opacity-40
          disabled:cursor-not-allowed
          shadow-xl
        "
              >
                <ChevronLeft
                  size={24}
                  className="group-hover:-translate-x-1 transition"
                />
              </button>

              {/* Next */}
              <button
                onClick={nextSlide}
                disabled={startIndex + visibleCards >= serviceData.length}
                className="
          group
          w-14 h-14
          rounded-full
          bg-linear-to-r
          from-cyan-500
          to-purple-500
          flex items-center justify-center
          text-white
          hover:scale-110
          transition-all duration-300
          disabled:opacity-40
          disabled:cursor-not-allowed
          shadow-xl
        "
              >
                <ChevronRight
                  size={24}
                  className="group-hover:translate-x-1 transition"
                />
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData
              .slice(startIndex, startIndex + visibleCards)
              .map((service, index) => {
                const Icon = service.icon;

                return (
                  <Link
                    href={`/services/${service.slug}`}
                    key={index}
                    className="
            group
            relative
            overflow-hidden
            rounded-[2rem]
            border border-white/10
            bg-white/5
            backdrop-blur-2xl
            p-8
            hover:-translate-y-4
            hover:border-cyan-400/40
            transition-all duration-500
            shadow-[0_20px_80px_rgba(0,0,0,0.45)]
          "
                  >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-linear-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />

                    {/* Background Blur */}
                    <div className="absolute -top-20 -right-20 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl group-hover:scale-150 transition duration-700" />

                    {/* Top */}
                    <div className="relative z-10 flex items-center gap-5 mb-8">
                      {/* Icon */}
                      <div
                        className="
                w-20 h-20
                rounded-[1.8rem]
                bg-linear-to-br
                from-cyan-500/20
                to-purple-500/20
                border border-white/10
                flex items-center justify-center
                shadow-2xl
                shrink-0
                group-hover:rotate-6
                group-hover:scale-110
                transition duration-500
              "
                      >
                        <Icon size={38} className="text-cyan-300" />
                      </div>

                      {/* Title */}
                      <div>
                        <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white leading-tight">
                          {service.title}
                        </h3>

                        <div className="mt-2 w-16 h-1 rounded-full bg-linear-to-r from-cyan-400 to-purple-500" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="relative z-10 text-gray-300 text-base md:text-lg leading-relaxed font-light min-h-[90px]">
                      {service.description}
                    </p>

                    {/* Learn More */}
                    <div className="relative z-10 mt-10 flex items-center justify-between">
                      <span className="text-cyan-300 font-semibold text-lg tracking-wide">
                        Learn More
                      </span>

                      <div
                        className="
                w-14 h-14
                rounded-full
                bg-white/10
                border border-white/10
                flex items-center justify-center
                shadow-lg
                group-hover:bg-cyan-500
                group-hover:translate-x-2
                transition duration-300
              "
                      >
                        <span className="text-2xl text-cyan-300 group-hover:text-white transition">
                          →
                        </span>
                      </div>
                    </div>

                    {/* Bottom Border */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 group-hover:w-full transition-all duration-700" />
                  </Link>
                );
              })}
          </div>
        </section>

        {/* =========================================
            CONTACT SECTION
        ========================================== */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side */}
              <div>
                <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
                  Get in touch.
                </h2>

                <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                  Fill out the form and our team will get back to you as soon as
                  possible.
                </p>

                <div className="mt-10">
                  <Image
                    src="/contact-illustration.jpeg"
                    alt="Contact"
                    width={500}
                    height={500}
                    className="rounded-3xl shadow-2xl border border-white/10"
                  />
                </div>
              </div>

              {/* Form */}
              <div className="bg-white rounded-sm p-10 shadow-2xl">
                <h3 className="text-4xl font-bold text-gray-900 mb-10">
                  Send Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full bg-transparent border-0 border-b-2 border-gray-400 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-cyan-500 transition"
                    />

                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full bg-transparent border-0 border-b-2 border-gray-400 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-cyan-500 transition"
                    />

                    {errors.email && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your Message..."
                      className="w-full bg-transparent border-0 border-b-2 border-gray-400 py-3 resize-none text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-cyan-500 transition"
                    />

                    {errors.message && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {success && (
                    <p className="text-green-600 font-medium">{success}</p>
                  )}

                  <button
                    type="submit"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-3 font-semibold transition shadow-lg"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            CUSTOMER FEEDBACK
        ========================================== */}
        <section className="py-24 px-6 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Customer Feedback
              </h2>

              <p className="text-gray-300 text-lg">
                Trusted by businesses around the world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {feedbacks.map((client, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src={client.image}
                      alt={client.name}
                      width={70}
                      height={70}
                      className="rounded-full border-2 border-purple-500"
                    />

                    <div>
                      <h3 className="text-xl font-semibold">{client.name}</h3>

                      <p className="text-gray-400 text-sm">{client.role}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 text-yellow-400 mb-4">
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                  </div>

                  <p className="text-gray-300 leading-relaxed italic">
                    “{client.review}”
                  </p>
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
