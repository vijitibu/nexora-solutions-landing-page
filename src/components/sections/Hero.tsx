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

      <div className="mt-8 flex justify-center gap-4">
        <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-medium hover:scale-105 transition">
          Get Started
        </button>
        <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
}
