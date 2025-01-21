import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="relative w-full overflow-hidden text-white bg-gradient-to-r from-purple-600 to-blue-600" style={{ height: '100vh' }}>
            <div class="absolute inset-0">
                <Image src={`/home-1.jpg`} alt="Home" fill className="object-cover object-center w-full h-full" />
                <div class="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div class="relative z-10 flex flex-col justify-center items-center h-full text-center ">
                <h1 class="text-5xl font-bold leading-tight mb-4">Music for Everyone</h1>
                <p class="text-lg text-gray-300 mb-8">Awaken possibility.</p>
                <a href="#" class="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg uppercase">Start Learning</a>
            </div>
        </section>
    )
}

export default Hero