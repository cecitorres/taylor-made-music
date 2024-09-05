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
    <div className="max-h-[68px]">
      <main className="flex flex-col items-center row-start-2 sm:items-start">

        {/* <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll"> */}

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
              {/* <Button fullWidth variant="text" size="sm" className="">
                  <span>Log In</span>
                </Button> */}
              <Button fullWidth variant="gradient" size="sm" className="">
                <span>Book Online</span>
              </Button>
            </div>
          </MobileNav>
        </Navbar>

        {/* Picture big */}
        <section className="h-full">
          <Image src={`/home-1.jpg`} alt="Home" fill className="w-full bg-center bg-cover max-h" />
        </section>

        {/* Private Lessons banner */}
        <section className="flex items-center justify-center w-full py-10 bg-teal-300">
          <div className="w-6/12">
            <p className="inline-block text-4xl">Private Lessons</p>
            <p className="inline-block max-w-lg ml-24 text-xl">We offer music education for individuals of just about every age and skill level.</p>
          </div>
          <div className="w-1/12">
            <Button className="px-8 bg-teal-700 rounded-3xl">Learn More</Button>
          </div>
        </section>

        {/* Big card */}
        <section className="flex items-center justify-center w-full py-10 text-black bg-white">
          Big card
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

        {/* Musical instruments */}
        <section className="flex items-center justify-center w-full py-10 text-black bg-white">
          Musical Instruments
        </section>

        {/* Stats */}
        <section className="flex flex-col text-white items-center justify-center w-full py-10 h-96 text-black bg-center bg-cover bg-[url('/background-2.jpg')] opacity-40">
        </section>

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
