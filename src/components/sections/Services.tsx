const services = [
  { title: "Web Development", icon: "🌐" },
  { title: "Mobile Apps", icon: "📱" },
  { title: "UI/UX Design", icon: "🎨" },
  { title: "Cloud Solutions", icon: "☁️" },
  { title: "Digital Marketing", icon: "📈" },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-blue-900 mb-12">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-white p-8 rounded-2xl shadow hover:shadow-2xl hover:-translate-y-2 transition"
          >
            <div className="text-4xl mb-4">{s.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{s.title}</h3>
            <p className="text-gray-600 mt-2">
              Professional {s.title.toLowerCase()} solutions tailored to your
              needs.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
