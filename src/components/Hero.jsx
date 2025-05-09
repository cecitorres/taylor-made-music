'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Typography, Button } from "@material-tailwind/react";

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const sectionRef = useRef(null);
    const images = ['/home-1.webp', '/home-2.webp', '/home-3.webp'];
    // Titles and subtitles for each image
    const titles = ['Your Journey, Your Music', 'Where Dreams Begin', 'From Basics to Brilliance'];
    const subtitles = ['Adapting to your goals, your way', 'Learn, grow, and shine through music', 'Your growth is our goal'];

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        let interval;
        if (isVisible) {
            interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 10000);
        }
        return () => clearInterval(interval);
    }, [isVisible, images.length]);

    return (
        <section
            id="home"
            ref={sectionRef}
            className="relative w-full overflow-hidden text-white bg-gradient-to-r"
            style={{ height: '100vh' }}
        >
            {images.map((image, index) => (
                <div
                    key={image}
                    className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                    style={{ opacity: currentImageIndex === index ? 1 : 0 }}
                >
                    <Image src={image} alt={`Home ${index + 1}`} fill className="object-cover object-center w-full h-full" />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
            ))}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <Typography variant="h1" className="mb-4 font-serif text-6xl font-medium leading-tight md:text-8xl">
                    {titles[currentImageIndex]}
                </Typography>
                <Typography variant="h2" className="mb-8 text-2xl font-normal text-gray-300">
                    {subtitles[currentImageIndex]}
                </Typography>
                {/* <a href="#" className="px-6 py-2 font-normal text-gray-900 uppercase transition duration-300 ease-in-out transform bg-yellow-400 rounded-full text-md hover:bg-yellow-300 hover:scale-105 hover:shadow-lg">
                    Start Learning
                </a> */}
                <Button className="px-10 text-sm font-medium text-gray-900 bg-yellow-400 rounded-3xl hover:bg-yellow-300 hover:scale-105 hover:shadow-lg">Start Learning</Button>
            </div>
        </section>
    )
}

export default Hero