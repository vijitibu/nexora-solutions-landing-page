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
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-gray-300 text-sm">Email: info@nexora.com</p>
          <p className="text-gray-300 text-sm">Phone: +91 98765 43210</p>
          <p className="text-gray-300 text-sm">Kerala, India</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center mt-8 text-gray-400 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} NEXORA Solutions. All rights reserved.
      </div>
    </footer>
  );
}
