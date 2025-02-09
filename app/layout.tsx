import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'], // Specify the font weights you need
  subsets: ['latin'], // Specify the subsets you need
  variable: '--font-poppins', // Optional: Define a CSS variable for the font
});

export const metadata: Metadata = {
  title: "Joki Proyek - Implementasi IT Terjangkau",
  description:
    "Layanan implementasi proyek IT yang terjangkau, efisien, dan dapat diandalkan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
