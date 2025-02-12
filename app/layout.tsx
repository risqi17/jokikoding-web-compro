import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import TopLoader from "@/components/TopLoader";
import FloatingButton from "@/components/FloatingButton";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'], // Specify the font weights you need
  subsets: ['latin'], // Specify the subsets you need
  variable: '--font-poppins', // Optional: Define a CSS variable for the font
});

export const metadata: Metadata = {
  title: "Joki Koding - Bantuin Proyek Kodingmu",
  description:
    "Bantuin proyek kodingmu dengan layanan kami yang terjangkau, efisien, dan dapat diandalkan.",
};

const scrollbarStyles = `
/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #4F46E5 #1f2937;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

*::-webkit-scrollbar-track {
  background: #1f2937;
  border-radius: 4px;
}

*::-webkit-scrollbar-thumb {
  background-color: #4F46E5;
  border-radius: 4px;
  border: 2px solid #1f2937;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #4F46E5;
}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`} suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <TopLoader />
          <style>{scrollbarStyles}</style>
          <FloatingButton />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
