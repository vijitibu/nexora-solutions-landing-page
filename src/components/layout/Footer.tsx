import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">NEXORA</h2>
          <p className="mt-2 text-gray-300 text-sm">
            Transforming ideas into digital reality with modern technology
            solutions.
          </p>
        </div>

        {/* Quick Links */}
        {/* Quick Links */}
        <div className="text-center lg:text-left">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>

          <div className="flex flex-col gap-3 text-gray-300">
            <Link href="/" className="hover:text-white transition duration-300">
              Home
            </Link>

            <Link
              href="/about"
              className="hover:text-white transition duration-300"
            >
              About
            </Link>

            <Link
              href="/services"
              className="hover:text-white transition duration-300"
            >
              Services
            </Link>

            <Link
              href="/contact"
              className="hover:text-white transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-gray-300 text-sm">Email: info@nexora.com</p>
          <p className="text-gray-300 text-sm">Phone: +91 98765 43210</p>
          <p className="text-gray-300 text-sm">Kerala, India</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center items-center gap-5 mt-10">
        <Link
          href="https://instagram.com"
          target="_blank"
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-2xl text-white hover:bg-pink-600 hover:scale-110 transition duration-300 shadow-xl"
        >
          <FaInstagram />
        </Link>

        <Link
          href="https://facebook.com"
          target="_blank"
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-2xl text-white hover:bg-blue-600 hover:scale-110 transition duration-300 shadow-xl"
        >
          <FaFacebook />
        </Link>

        <Link
          href="https://twitter.com"
          target="_blank"
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-2xl text-white hover:bg-sky-500 hover:scale-110 transition duration-300 shadow-xl"
        >
          <FaTwitter />
        </Link>

        <Link
          href="https://linkedin.com"
          target="_blank"
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-2xl text-white hover:bg-blue-700 hover:scale-110 transition duration-300 shadow-xl"
        >
          <FaLinkedin />
        </Link>

        <Link
          href="https://youtube.com"
          target="_blank"
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-2xl text-white hover:bg-red-600 hover:scale-110 transition duration-300 shadow-xl"
        >
          <FaYoutube />
        </Link>
      </div>
      {/* Bottom */}
      <div className="text-center mt-8 text-gray-400 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} NEXORA Solutions. All rights reserved.
      </div>
    </footer>
  );
}
