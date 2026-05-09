"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="NEXORA Solutions"
            width={52}
            height={52}
            priority
            className="object-contain rounded-xl"
          />

          <div className="leading-none">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide bg-linear-to-r from-blue-800 to-purple-700 bg-clip-text text-transparent">
              NEXORA
            </h1>

            <p className="text-sm text-gray-500 font-medium mt-1">Solutions</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.path} className="relative group">
              {item.name}

              {/* Underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-blue-900"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4 space-y-3 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setOpen(false)}
              className="block"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
