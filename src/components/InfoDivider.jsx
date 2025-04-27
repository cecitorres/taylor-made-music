import React from 'react'

import { Button } from "@material-tailwind/react";

const InfoDivider = () => {
    
    return (
        <section className="w-full bg-teal-300">
            <div className="grid items-center grid-cols-1 px-4 py-10 mx-auto max-w-7xl sm:grid-cols-12">
                <div className="text-center sm:col-span-3">
                    <p className="font-serif text-4xl font-medium md:text-4xl">Private Lessons</p>
                </div>
                <div className="text-left sm:col-span-6">
                    <p className="max-w-lg mx-8 my-4 text-lg text-center md:text-left md:text-md">We offer music education for individuals of just about every age and skill level.</p>
                </div>
                <div className="text-center sm:col-span-3">
                    <Button className="px-8 bg-teal-700 rounded-3xl">Learn More</Button>
                </div>
            </div>
        </section>
    )
}

export default InfoDivider