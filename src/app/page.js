// import Image from "next/image";
import HeroSection, { KeyFeaturesSection, SecondSection } from "@/components/layout/HeroSection";
import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <div>
    <Navbar />
    <HeroSection />
    <KeyFeaturesSection />
    <SecondSection />
    </div>
  );
}
