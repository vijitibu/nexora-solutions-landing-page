"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-linear-to-r from-blue-700 to-purple-600 p-1 rounded-lg shadow">
            <Image
              src="/logo.png"
              alt="NEXORA"
              width={36}
              height={36}
              className="rounded"
            />
          </div>

          <span className="text-2xl font-bold tracking-wide bg-linear-to-r from-blue-900 to-purple-700 bg-clip-text text-transparent">
            NEXORA
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {["Home", "Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group"
            >
              {item}

              {/* Underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
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
          {["Home", "Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
