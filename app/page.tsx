"use client";
import Hero from "@/components/TravelHero";
import About from "@/components/TravelAbout";
import Destinations from "@/components/TravelDestinations";
import TravelPackages from "@/components/TravelPackages";
import TravelWhyChooseUs from "@/components/TravelWhyChooseUs";
import TopCityActivities from "@/components/TopCityActivities";
import TravelGallery from "@/components/TravelGallery";
import TravelTestimonials from "@/components/TravelTestimonials";
import TravelFAQs from "@/components/TravelFAQs";
import Contact from "@/components/Contect";
import TravelFooter from "@/components/TravelFooter";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <>
      <RevealOnScroll />
      <Hero />
      <About />
      <TravelPackages />
      <Destinations />
      <TravelWhyChooseUs />
      <TopCityActivities />
      <TravelGallery />
      <TravelTestimonials />
      <TravelFAQs />
      <Contact />
      <TravelFooter />
    </>
  );
}
