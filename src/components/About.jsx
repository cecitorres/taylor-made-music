import React from 'react'
import { Card, CardHeader, CardBody, Typography, Button } from "/material-tailwind/react";
import Image from "next/image";
const About = () => {
    return (
        <section className="flex items-center justify-center w-full py-10 text-black bg-white">
            {/* Card header image should be half width and being a square image */}
            <Card className="flex-row w-6/12 rounded-none shadow-none ">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="w-1/2 m-0 rounded-none shrink-0 aspect-square"
                >
                    <Image src={`/about-1.jpg`} alt="Home" fill className="object-cover" />
                </CardHeader>
                <CardBody className="flex flex-col justify-center p-12 bg-gray-200">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        Our Story
                    </Typography>
                    <Typography color="gray" className="mb-8 font-normal">
                        We offers full-day and half-day music camps for kids of all ages and skill levels - including beginners!
                        Summer camps give students an opportunity to focus on one instrument or genre for a whole week.
                    </Typography>
                    <a href="#" className="inline-block">
                        <Button className="flex items-center gap-2 bg-teal-300 rounded-3xl">
                            Register Now
                        </Button>
                    </a>
                </CardBody>
            </Card>
        </section>
    )
}

export default About