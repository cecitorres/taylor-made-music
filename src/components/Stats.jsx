import React from 'react'
import { Typography } from "@material-tailwind/react";
function Stats() {
    return (
        <section className="relative flex flex-col items-center justify-center w-full py-10 text-white h-[500px]">
            {/* Background div with opacity */}
            <div className="absolute inset-0 bg-[url('/background-2.jpg')] bg-center bg-cover opacity-40 z-0"></div>
            
            {/* Content div with z-index to appear above background */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                <Typography variant="h2" className="text-center">Taylor Made Music</Typography>
                <Typography variant="h5" className="px-4 my-4 text-center">We are a team of passionate musicians who are dedicated to teaching music to children and adults.</Typography>
                
                <div className="grid w-full grid-cols-2 gap-4 px-8 mt-4 lg:grid-cols-4">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center w-24 h-24 mb-2 rounded-full bg-white/30">
                            <Typography variant="h2">150</Typography>
                        </div>
                        <Typography variant="h5" className="text-center">Students Taught</Typography> 
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center w-24 h-24 mb-2 rounded-full bg-white/30">
                            <Typography variant="h2">10</Typography>
                        </div>
                        <Typography variant="h5" className="text-center">Years of Experience</Typography> 
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center w-24 h-24 mb-2 rounded-full bg-white/30">
                            <Typography variant="h2">500+</Typography>
                        </div>
                        <Typography variant="h5" className="text-center">Lessons Taught Each Year</Typography> 
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center w-24 h-24 mb-2 rounded-full bg-white/30">
                            <Typography variant="h2">5</Typography>
                        </div>
                        <Typography variant="h5" className="text-center">Awards</Typography> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats