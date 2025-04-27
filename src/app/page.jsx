import Image from "next/image";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurGoal from "@/components/OurGoal";
import Contact from "@/components/Contact";
import Team from "@/components/Team";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

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
      <div id="our-goal">
        <OurGoal />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
