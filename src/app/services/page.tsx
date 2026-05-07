import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import {
  Globe,
  Smartphone,
  Cloud,
  ShieldCheck,
  Database,
  MonitorSmartphone,
  Star,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Modern, scalable, and high-performance websites tailored for businesses.",
    icon: Globe,
  },
  {
    title: "Mobile App Development",
    description:
      "Powerful Android and iOS applications with seamless user experience.",
    icon: Smartphone,
  },
  {
    title: "Cloud Solutions",
    description:
      "Secure cloud infrastructure and deployment solutions for enterprises.",
    icon: Cloud,
  },
  {
    title: "Cyber Security",
    description:
      "Protect your business with advanced cybersecurity and monitoring systems.",
    icon: ShieldCheck,
  },
  {
    title: "Database Management",
    description:
      "Efficient database architecture, optimization, and maintenance services.",
    icon: Database,
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful and intuitive designs that improve customer engagement.",
    icon: MonitorSmartphone,
  },
];

const feedbacks = [
  {
    name: "Michael Johnson",
    role: "CEO, TechNova",
    image: "/client1.jpeg",
    review:
      "NEXORA transformed our business with an exceptional web platform. Their team is highly professional and innovative.",
  },
  {
    name: "Sarah Williams",
    role: "Founder, Bright Solutions",
    image: "/client2.jpeg",
    review:
      "Their mobile app development service exceeded our expectations. Highly recommended for startups and enterprises.",
  },
  {
    name: "David Brown",
    role: "Manager, CloudSync",
    image: "/client3.jpeg",
    review:
      "Outstanding support and cloud solutions. Our systems are now faster, secure, and scalable.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 min-h-screen text-white">
        {/* Hero Section */}
        <section className="pt-40 pb-24 px-6 text-center max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
            IT Services and Solutions
            <br />
            for Businesses
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We provide innovative digital solutions including web development,
            mobile applications, cloud services, cybersecurity, and enterprise
            technologies to help businesses grow and succeed in the digital era.
          </p>

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Team Illustration Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] blur opacity-40 group-hover:opacity-70 transition duration-500"></div>

              <div className="relative bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>

                <Image
                  src="/team-work.jpeg"
                  alt="IT Services"
                  width={700}
                  height={700}
                  className="relative z-10 rounded-3xl mx-auto hover:scale-105 transition duration-500"
                />

                <div className="relative z-10 mt-8 text-center">
                  <h3 className="text-3xl font-bold mb-3">
                    Collaborative Innovation
                  </h3>

                  <p className="text-gray-300 leading-relaxed text-lg">
                    Our expert development team works together to build
                    scalable, secure, and modern digital solutions for
                    businesses.
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Card */}
            <div className="relative group h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-[2rem] blur opacity-40 group-hover:opacity-70 transition duration-500"></div>

              <div className="relative bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 shadow-2xl h-full overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold">Visit Our Office</h3>

                    <p className="text-gray-300 mt-2">
                      San Francisco, California, USA
                    </p>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center shadow-xl text-2xl">
                    📍
                  </div>
                </div>

                <div className="overflow-hidden rounded-3xl border border-white/10 shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019506492208!2d-122.41941548468112!3d37.77492927975951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064dfb5c1d1%3A0x8c1f1c0f5f9b7c0!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                    width="100%"
                    height="420"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-3xl"
                  ></iframe>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                    <h4 className="text-2xl font-bold text-blue-400">24/7</h4>
                    <p className="text-gray-300 text-sm mt-1">
                      Support Available
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                    <h4 className="text-2xl font-bold text-purple-400">100+</h4>
                    <p className="text-gray-300 text-sm mt-1">Global Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Services We Offer
            </h2>

            <p className="text-gray-300 text-lg">
              Premium IT solutions designed for startups, enterprises, and
              modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:scale-105 transition duration-300 shadow-xl"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-6 shadow-lg">
                    <Icon size={32} />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
                  Get in touch.
                </h2>

                <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                  Fill out the form and our team will get back to you as soon as
                  we can!
                </p>

                <div className="mt-10 space-y-8">
                  <Image
                    src="/contact-illustration.jpeg"
                    alt="Contact Us"
                    width={500}
                    height={500}
                    className="rounded-3xl shadow-2xl border border-white/10"
                  />
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/10 focus:outline-none focus:border-purple-500 text-white placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/10 focus:outline-none focus:border-purple-500 text-white placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-2">
                      Message
                    </label>

                    <textarea
                      rows={5}
                      placeholder="Write your message..."
                      className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/10 focus:outline-none focus:border-purple-500 text-white placeholder:text-gray-400"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-lg hover:scale-105 transition duration-300 shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Feedback */}
        <section className="py-24 px-6 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Customer Feedback
              </h2>

              <p className="text-gray-300 text-lg">
                Trusted by businesses around the world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {feedbacks.map((client, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src={client.image}
                      alt={client.name}
                      width={70}
                      height={70}
                      className="rounded-full border-2 border-purple-500"
                    />

                    <div>
                      <h3 className="text-xl font-semibold">{client.name}</h3>

                      <p className="text-gray-400 text-sm">{client.role}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 text-yellow-400 mb-4">
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                  </div>

                  <p className="text-gray-300 leading-relaxed italic">
                    “{client.review}”
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
