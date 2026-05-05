export default function Contact() {
  return (
    <section className="py-20 text-center bg-linear-to-br from-indigo-100 to-blue-100 scroll-mt-24">
      <h2 className="text-3xl font-bold text-black mb-6">Contact Us</h2>

      <form className="max-w-md mx-auto space-y-4">
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
          className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
