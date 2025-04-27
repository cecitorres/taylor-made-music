import React from 'react'
import { Card, CardHeader, CardBody, Typography, Button } from "/material-tailwind/react";
import Image from "next/image";

const About = () => {
    return (
        <section className="flex items-center justify-center w-full px-4 py-10 text-black bg-white">
            <Card className="flex flex-col w-full max-w-6xl rounded-none shadow-none md:flex-row">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="w-full m-0 rounded-none md:w-1/2 shrink-0 aspect-square md:aspect-auto"
                >
                    <Image src={`/about-1.jpg`} alt="Home" fill className="object-cover" />
                </CardHeader>
                <CardBody className="flex flex-col justify-center p-6 bg-gray-100 md:p-12">
                    <Typography variant="h2" color="blue-gray" className="mb-4 font-serif text-center md:text-left">
                        Our Story
                    </Typography>
                    <Typography color="gray" className="mb-8 font-normal text-center md:text-left">
                        What began as a single piano teacher giving lessons at home grew into a full music school. As word spread, more students joined, and new instructors were brought in to teach guitar, violin, and singing. Despite its growth, it still values the personal connection that made it special from the start.
                    </Typography>
                    <div className="flex justify-center md:justify-start">
                        <a href="#" className="inline-block">
                            <Button className="flex items-center gap-2 bg-teal-300 rounded-3xl">
                                Register Now
                            </Button>
                        </a>
                    </div>
                </CardBody>
            </Card>
        </section>
    )
}

export default About