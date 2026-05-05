// src/app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "NEXORA Solutions",
  description: "IT Services & Digital Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
