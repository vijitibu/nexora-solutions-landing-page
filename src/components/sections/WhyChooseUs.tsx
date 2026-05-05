const features = [
  {
    title: "Experienced Team",
    desc: "Skilled professionals delivering high-quality solutions",
    icon: "👨‍💻",
  },
  {
    title: "Fast Delivery",
    desc: "On-time project completion with agile workflow",
    icon: "⚡",
  },
  {
    title: "Affordable Pricing",
    desc: "Cost-effective services without compromising quality",
    icon: "💰",
  },
  {
    title: "24/7 Support",
    desc: "Always available for your business needs",
    icon: "📞",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="py-24 bg-linear-to-r from-blue-900 to-blue-700 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12">Why Choose Us</h2>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white text-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
