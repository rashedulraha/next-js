import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Headers/Navbar";
import Footer from "@/Components/Footer/Footer";
import CardProvider from "@/Context/CardProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dev story",
  description: "an app for showing developer story around the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-1">
            <CardProvider>{children}</CardProvider>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
