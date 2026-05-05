export default function Contact() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Contact Us</h2>

      <form className="max-w-md mx-auto space-y-4">
        <input placeholder="Name" className="w-full border p-3 rounded" />
        <input placeholder="Email" className="w-full border p-3 rounded" />
        <textarea placeholder="Message" className="w-full border p-3 rounded" />

        <button className="bg-blue-900 text-white px-6 py-3 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}
