import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AudioProvider } from "./components/AudioContext";
import AudioToggle from "./components/AudioToggle";

const cinzel = Cinzel({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  title: "SanatanSeal – Bringing Temple Blessings to Every Home",
  description:
    "A sacred digital pilgrimage experience connecting devotees with temples across India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${inter.variable} antialiased`}>
        <AudioProvider>
          <Navbar />
          <AudioToggle />
          {children}
          <Footer />
        </AudioProvider>
      </body>
    </html>
  );
}
