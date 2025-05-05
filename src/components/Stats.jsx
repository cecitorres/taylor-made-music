import React from 'react'
import { Typography } from "@material-tailwind/react";

function Stats() {
    return (
        <section className="relative flex flex-col items-center justify-center w-full py-10 text-white md:h-[500px]">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/background-2.webp')] bg-center bg-[length:1300px] md:bg-cover bg-no-repeat">
                {/* Overlay */}
                <div className="absolute inset-0 bg-gray-800 opacity-70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full md:w-8/12">
                <Typography variant="h2" className="font-serif text-center">Taylor Made Music</Typography>
                <Typography variant="h5" className="px-4 my-4 font-normal text-center text-md">
                    We are a team of passionate musicians who are dedicated to teaching music to children and adults.
                </Typography>

                <div className="grid w-full grid-cols-2 gap-4 px-8 mt-4 md:grid-cols-4">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center w-24 h-24 mb-2 border-2 border-gray-500 rounded-full bg-white/30">
                            <Typography variant="h2" className="font-serif">150</Typography>
                        </div>
                        <Typography variant="h5" className="font-serif text-center min-h-[3rem] md:min-h-max">Students Taught</Typography>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center w-24 h-24 mb-2 border-2 border-gray-500 rounded-full bg-white/30">
                            <Typography variant="h2" className="font-serif">10</Typography>
                        </div>
                        <Typography variant="h5" className="font-serif text-center min-h-[3rem] md:min-h-max">Years of Experience</Typography>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center w-24 h-24 mb-2 border-2 border-gray-500 rounded-full bg-white/30">
                            <Typography variant="h2" className="font-serif">500+</Typography>
                        </div>
                        <Typography variant="h5" className="font-serif text-center min-h-[3rem] md:min-h-max">Lessons Taught Each Year</Typography>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center w-24 h-24 mb-2 border-2 border-gray-500 rounded-full bg-white/30">
                            <Typography variant="h2" className="font-serif">5</Typography>
                        </div>
                        <Typography variant="h5" className="font-serif text-center min-h-[3rem] md:min-h-max">Awards</Typography>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats