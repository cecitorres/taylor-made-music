import React from 'react'
import { Button, Typography } from '@material-tailwind/react'

const LetsMakeArt = () => {
    return (
        <section className="relative flex flex-col items-center justify-center w-full py-10 h-80">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/background-1.jpg')] bg-center bg-[length:1300px] md:bg-cover bg-no-repeat">
                {/* Overlay */}
                <div className="absolute inset-0 bg-gray-800 opacity-70"></div>
            </div>
            {/* Content */}
            <div className="relative z-10 w-auto text-center md:w-1/2">
                <Typography variant="h1" className="font-serif text-4xl font-normal text-white md:text-5xl">
                    Let&apos;s make art!
                </Typography>
                <Typography variant="h5" className="m-4 text-base font-normal text-gray-200 md:text-xl">
                    Explore several art forms as your child builds creativity and confidence in our new visual arts classes for ages 2-5!
                </Typography>
                <Button className="px-10 py-3 text-sm font-normal text-black uppercase bg-yellow-400 rounded-3xl">
                    See our classes
                </Button>
            </div>
        </section>
    )
}

export default LetsMakeArt