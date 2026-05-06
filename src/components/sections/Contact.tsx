export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-20 px-4 bg-gradient-to-br from-indigo-100 to-blue-100 scroll-mt-24"
    >
      <div className="max-w-md mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">
          Contact Us
        </h2>

        {/* Form */}
        <form className="space-y-4 bg-white/70 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
