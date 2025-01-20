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
import { useEffect, useState } from "react";
import MusicalClasses from "../components/MusicalClasses";
import Stats from "../components/Stats";
import url from 'url'

export default function Home() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Classes
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Contact
        </a>
      </Typography>
    </ul>
  );
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="">
      <main className="flex flex-col items-center sm:items-start">

        {/* <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll"> */}
        {/* Navbar */}
        {/* <div className="absolute top-0 w-full"> */}
        <Navbar className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 rounded-none h-max lg:px-8 lg:py-4">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Image src={`/logo.png`} alt="Logo" width="100" height="100" />
            <div className="flex items-center gap-4">
              <div className="hidden mr-4 lg:block">{navList}</div>
              <div className="flex items-center gap-x-1">
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>Book Online</span>
                </Button>
              </div>
              <IconButton
                variant="text"
                className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav}>
            {navList}
            <div className="flex items-center gap-x-1">
              <Button fullWidth variant="gradient" size="sm" className="">
                <span>Book Online</span>
              </Button>
            </div>
          </MobileNav>
        </Navbar>
        {/* </div> */}

        {/* Picture big */}
        <section className="relative w-full overflow-hidden text-white bg-gradient-to-r from-purple-600 to-blue-600" style={{ height: '80vh' }}>
          <div class="absolute inset-0">
            <Image src={`/home-1.jpg`} alt="Home" fill className="object-cover object-center w-full h-full" />
            <div class="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div class="relative z-10 flex flex-col justify-center items-center h-full text-center ">
            <h1 class="text-5xl font-bold leading-tight mb-4">Music for Everyone</h1>
            <p class="text-lg text-gray-300 mb-8">Awaken possibility.</p>
            <a href="#" class="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg uppercase">Start Learning</a>
          </div>
        </section>

        {/* Private Lessons banner */}
        <section className="flex flex-col items-center justify-center w-full py-32 text-center bg-teal-300 sm:py-10 sm:flex-row" style={{ height: '15vh' }}>
          <div className="w-auto sm:w-6/12">
            <p className="inline-block text-2xl sm:text-4xl">Private Lessons</p>
            <p className="inline-block max-w-lg mx-8 my-4 text-sm sm:ml-24 sm:text-xl">We offer music education for individuals of just about every age and skill level.</p>
          </div>
          <div className="sm:w-1/12">
            <Button className="px-8 bg-teal-700 rounded-3xl">Learn More</Button>
          </div>
        </section>

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

        {/* Groups for */}
        <section className="flex items-center justify-center w-full py-10 text-black bg-gray-200">
          Music Groups
        </section>

        {/* Banner with picture */}
        <section className="flex flex-col text-white items-center justify-center w-full py-10 h-96 text-black bg-center bg-cover bg-[url('/background-1.jpg')] opacity-40">
          <h1 className="text-4xl">Let's make art!</h1>
          <p className="text-lg">Explore several art forms as your child builds creativity and confidence in our new visual arts classes for ages 2-5!</p>
        </section>

        <MusicalClasses />

        {/* Stats */}
        <Stats />

        {/* Green banner */}
        <section className="flex items-center justify-center w-full py-10 bg-teal-300">
          Next Event
        </section>

        {/* Blog */}
        <section className="flex items-center justify-center w-full py-10 text-black bg-white">
          Big card
        </section>

        {/* Testimonials */}

        {/* Staff */}

        {/* Banner logos */}

        {/* Address, open hours */}

        {/* Map */}

        {/* Footer */}

        {/* <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card> */}
      </main>
    </div>
  );
}
