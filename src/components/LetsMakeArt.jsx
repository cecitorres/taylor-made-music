import React from 'react'
import { Button, Typography } from '@material-tailwind/react'
const LetsMakeArt = () => {
    return (
        <section className="relative flex flex-col items-center justify-center w-full py-10 h-80">
            <div className="absolute inset-0 bg-[url('/background-1.jpg')] bg-center bg-cover opacity-40"></div>
            <div className="relative z-10 w-1/2 text-center">
                <Typography variant="h1" className="font-normal">Let&apos;s make art!</Typography>
                <Typography variant="h5" className="m-4 font-normal">Explore several art forms as your child builds creativity and confidence in our new visual arts classes for ages 2-5!</Typography>
                
                <Button className="px-10 py-3 text-sm font-normal text-black uppercase bg-yellow-400 rounded-3xl">See our classes</Button>
            </div>
        </section>
    )
}

export default LetsMakeArt