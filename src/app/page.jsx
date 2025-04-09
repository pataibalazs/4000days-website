import Image from "next/image";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import References from "@/components/References";

export default function Home() {
  return (
    <div className="w-full bg-white">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="references">
        <References />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
