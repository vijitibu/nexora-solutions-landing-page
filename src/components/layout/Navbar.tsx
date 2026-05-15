"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl">
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
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide bg-linear-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent">
              NEXORA
            </h1>

            <p className="text-sm text-gray-400 font-medium mt-1">Solutions</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-3">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.name}
                href={item.path}
                className={`
                  relative
                  px-5 py-3
                  rounded-2xl
                  font-semibold
                  transition-all duration-300
                  overflow-hidden
                  ${
                    isActive
                      ? "bg-linear-to-r from-cyan-500 to-purple-500 text-white shadow-xl"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }
                `}
              >
                {/* Glow */}
                {isActive && (
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />
                )}

                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-white"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-t border-white/10 px-6 py-6 space-y-3">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setOpen(false)}
                className={`
                  block
                  px-5 py-4
                  rounded-2xl
                  font-semibold
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-linear-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
