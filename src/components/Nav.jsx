'use client'

import React, { useState, useEffect } from 'react'
import { Navbar, Collapse, Button, IconButton, Typography } from "@material-tailwind/react"
import Image from "next/image"

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navList = (
    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" className="p-1 font-normal">
        <a href="#" className="flex items-center">Home</a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <a href="#" className="flex items-center">About</a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <a href="#" className="flex items-center">Students</a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <a href="#" className="flex items-center">Classes</a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <a href="#" className="flex items-center">Contact</a>
      </Typography>
    </ul>
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Handle resize event
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );

    // Handle scroll event
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 100); // Adjust scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar className={`fixed top-0 z-50 w-full max-w-full px-4 py-2 transition-all duration-300 rounded-none border-none shadow-none backdrop-blur-none justify-items-center backdrop-saturate-100 h-max lg:px-8 lg:py-4 ${scrolled
        ? "bg-teal-300/100"
        : "bg-transparent"
      }`}>
      <div className="flex items-center justify-between w-10/12 text-white">
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
      <Collapse open={openNav} className={scrolled ? "bg-teal-300" : "bg-white/30 backdrop-blur-sm"}>
        {navList}
        <div className="flex items-center gap-x-1">
          <Button fullWidth variant="gradient" size="sm" className="">
            <span>Book Online</span>
          </Button>
        </div>
      </Collapse>
    </Navbar>
  )
}

export default Nav;