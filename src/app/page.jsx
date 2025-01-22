"use client";
import Image from "next/image";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "/material-tailwind/react";
import MusicalClasses from "../components/MusicalClasses";
import Stats from "../components/Stats";
import InfoDivider from "../components/InfoDivider";
import MusicGroups from "../components/MusicGroups";
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

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="">
      <main className="flex flex-col items-center sm:items-start">
        <Nav />
        
        <Hero />
        
        <InfoDivider />
        
        {/* Big card */}
        <section className="flex items-center justify-center w-full py-10 text-black bg-white">
          <Card className="flex-row w-full max-w-5xl rounded-none shadow-none min-h-96">
            <CardHeader
              shadow={false}
              floated={false}
              className="w-2/5 m-0 rounded-none shrink-0"
            >
              <Image src={`/image-1.jpg`} alt="Home" fill className="" />
            </CardHeader>
            <CardBody className="p-12 bg-gray-200">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                Summer Arts Garden
              </Typography>
              <Typography color="gray" className="mb-8 font-normal">
                We offers full-day and half-day music camps for kids of all ages and skill levels - including beginners!
                Summer camps give students an opportunity to focus on one instrument or genre for a whole week.
              </Typography>
              <a href="#" className="inline-block">
                <Button className="flex items-center gap-2">
                  Learn More
                </Button>
              </a>
            </CardBody>
          </Card>
        </section>

        <MusicGroups />

        <LetsMakeArt />

        <MusicalClasses />

        <Stats />

        <Staff />

        <Testimonials />

        <Logos />

        <Gallery />

        <Address />

        <Map />

        <Footer />
      </main>
    </div>
  );
}
