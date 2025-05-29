import {Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add weights as needed
  display: "swap",
});

export const metadata = {
  title: "Supreme Group",
  description: "Frontend Assignment of Blacksof",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} } antialiased`}
        style={{ fontFamily: "var(--font-manrope), sans-serif" }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}