import "../styles/globals.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";

// Define the font
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Chrissa's Portfolio",
  description: "Chrissa's creative journey and portfolio",
  icons: {
    icon: "/favicon.ico", // This points to a file in the public folder
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
