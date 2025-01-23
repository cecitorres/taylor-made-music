"use client";
import MusicalClasses from "../components/MusicalClasses";
import Stats from "../components/Stats";
import InfoDivider from "../components/InfoDivider";
import Students from "../components/Students";
import LetsMakeArt from "../components/LetsMakeArt";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Staff from "../components/Staff";
import Testimonials from "../components/Testimonials";
import Logos from "../components/Logos";
import Gallery from "../components/Gallery";
import Address from "../components/Address";
import Map from "../components/Map";
import Footer from "../components/Footer";
import About from "../components/About";
export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="">
      <main className="flex flex-col items-center sm:items-start">
        <Nav />

        <Hero />

        <InfoDivider />

        <About />

        <Students />

        <LetsMakeArt />

        <MusicalClasses />

        <Stats />

        <InfoDivider />

        <Staff />

        <Testimonials />

        <Logos />

        <Address />

        <Map />

        <Gallery />

        <Footer />
      </main>
    </div>
  );
}
