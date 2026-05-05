"use client";

const testimonials = [
  {
    name: "Rahul",
    text: "Amazing service! Highly recommended.",
  },
  {
    name: "Anjali",
    text: "Very professional team.",
  },
  {
    name: "Vikram",
    text: "Loved the UI and performance.",
  },
  {
    name: "Sneha",
    text: "Great experience working with Nexora.",
  },
  {
    name: "Arjun",
    text: "Top-notch support and delivery.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Testimonials</h2>

        {/* Scrollable Box */}
        <div className="h-75 overflow-y-auto space-y-4 pr-2">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow text-left"
            >
              <p className="text-gray-600">"{item.text}"</p>
              <p className="mt-2 font-semibold text-blue-800">- {item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
