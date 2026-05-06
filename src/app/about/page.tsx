import Navbar from "@/components/layout/Navbar";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-blue-950 flex items-center justify-center px-6">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 text-center shadow-2xl max-w-2xl">
          <Image
            src="/work-in-progress.png"
            alt="Work in Progress"
            width={300}
            height={300}
            className="mx-auto mb-8 animate-bounce"
          />

          <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>

          <p className="text-lg text-gray-200">
            Our story and vision are under development.
          </p>

          <div className="mt-6 inline-block px-6 py-3 rounded-full bg-white/20 text-white font-medium">
            ✨ Coming Soon
          </div>
        </div>
      </main>
    </>
  );
}
