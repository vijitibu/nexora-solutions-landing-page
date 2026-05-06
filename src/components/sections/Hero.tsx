import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-linear-to-r from-blue-900 to-purple-800 text-white py-28 text-center">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Transforming Ideas into <br /> Digital Reality
      </h1>

      <p className="mt-6 text-lg max-w-xl mx-auto text-gray-200">
        We provide cutting-edge web, mobile, and cloud solutions to help
        businesses grow.
      </p>

      <div className="flex items-center justify-center gap-6 mt-10">
        <Link
          href="/services"
          className="bg-white text-blue-700 px-8 py-4 rounded-2xl text-xl font-semibold shadow-lg hover:scale-105 transition"
        >
          Get Started
        </Link>

        <Link
          href="/contact"
          className="border border-white text-white px-8 py-4 rounded-2xl text-xl font-semibold hover:bg-white hover:text-purple-700 transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
