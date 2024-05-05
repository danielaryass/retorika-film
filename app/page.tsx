
import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
const AboutUs = dynamic(() => import("@/components/AboutUs"));
const WhyUs = dynamic(() => import("@/components/WhyUs"));
const OurServices = dynamic(() => import("@/components/OurServices"));
const Projects = dynamic(() => import("@/components/Projects"));
const OurTeams = dynamic(() => import("@/components/OurTeam"));
const GetInTouch = dynamic(() => import("@/components/GetInTouch"));
const Footer = dynamic(() => import("@/components/Footer"));

export const metadata: Metadata = {
  title: "Retorika Film",
  description: "Retorika Film is a film production house based in Sumedang, Indonesia. We provide services for commercial, music video, and short film production.",
};

export default function Home() {
  return (
    <main className="flex flex-col gap-36 md:gap-60">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <WhyUs />
      <OurServices />
      <Projects />
      <OurTeams />
      <GetInTouch />
      <Footer />
    </main>
  );
}
