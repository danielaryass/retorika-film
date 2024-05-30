
import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import GetInTouch from "@/components/GetInTouch"; 
import Footer from "@/components/Footer";
import WhyUs from "@/components/WhyUs";
import OurServices from "@/components/OurServices";
import AboutUs from "@/components/AboutUs";
import OurTeams from "@/components/OurTeam";
import { Suspense } from "react";
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
import Loading from "@/components/HeroSection/Loading";

export const metadata: Metadata = {
  title: "Retorika Film",
  description: "Retorika Film is a film production house based in Sumedang, Indonesia. We provide services for commercial, music video, and short film production.",
};

export default function Home() {
 
  return (
    <main className="flex flex-col gap-36 md:gap-60">
      <Navbar />
      <Suspense fallback={<Loading/>}>
      
      <HeroSection />
      </Suspense>
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
