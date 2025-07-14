"use client";


import Link from "next/link";
import Herosection from "@/components/Herosection";
import JourneySection from "@/components/JourneySection";
import Expierence from "@/components/Expierence";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Navbar from "../components/Navbar.jsx";

export default function Home() {




  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Navbar/>
      <Herosection />
      <JourneySection />
      <Expierence />
      <Skills />
      <Project />
      <Education />
      <Footer/>
    </main>
  );
}