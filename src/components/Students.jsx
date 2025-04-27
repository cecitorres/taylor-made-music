import React from 'react'
import Image from "next/image";

import { Typography } from "@material-tailwind/react";

const Students = () => {
    return (
        <section className="w-full py-12 text-black bg-gray-200">
            {/* Header section with centered text */}
            <div className="mb-8 text-center">
                <Typography variant="h3" className="font-serif font-normal">Individual Classes</Typography>
                {/* subtitle should be teal and italic */}
                <Typography variant="h6" className="text-sm italic font-normal text-teal-300">for</Typography>
            </div>

            {/* Grid layout for the cards */}
            <div className="grid grid-cols-1 gap-8 px-6 mx-auto lg:grid-cols-4 max-w-7xl">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-[200px] h-[200px] relative">
                        <Image
                            src="/lessons-1.jpg"
                            alt="Kids"
                            fill
                            className="object-cover rounded-full"
                        />
                    </div>
                    <Typography variant="h5" className="mt-4 font-serif">Kids</Typography>
                    <Typography variant="paragraph" className="text-center">Our school offers music lessons for kids of all ages and skill levels.</Typography>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className="w-[200px] h-[200px] relative">
                        <Image
                            src="/lessons-2.jpg"
                            alt="Teens"
                            fill
                            className="object-cover rounded-full scale-x-[-1]"
                        />
                    </div>
                    <Typography variant="h5" className="mt-4 font-serif">Teens</Typography>
                    <Typography variant="paragraph" className="text-center">Our school offers music lessons for teens of all ages and skill levels.</Typography>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className="w-[200px] h-[200px] relative">
                        <Image
                            src="/lessons-3.jpg"
                            alt="Adults"
                            fill
                            className="object-cover rounded-full scale-x-[-1]"
                        />
                    </div>
                    <Typography variant="h5" className="mt-4 font-serif">Adults</Typography>
                    <Typography variant="paragraph" className="text-center">Our school offers music lessons for adults of all ages and skill levels.</Typography>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className="w-[200px] h-[200px] relative">
                        <Image
                            src="/lessons-4.jpg"
                            alt="Groups"
                            fill
                            className="object-cover rounded-full"
                        />
                    </div>
                    <Typography variant="h5" className="mt-4 font-serif">Online</Typography>
                    <Typography variant="paragraph" className="text-center">Our school offers music lessons for groups of all ages and skill levels.</Typography>
                </div>
            </div>
        </section>
    )
}

export default Students