import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Typography } from "@material-tailwind/react";

const Staff = () => {
    const teachers = [
        {
            name: "Taylor Hett",
            role: "Pianist, Guitarist",
            image: "/teacher-1.jpg",
            socials: {
                facebook: "#",
                twitter: "#",
                instagram: "#"
            }
        }
    ];

    return (
        <section className="flex flex-col items-center justify-center w-full py-10 text-black bg-white">
            <Typography variant="h3" className="mb-10 text-center">Our Teachers</Typography>
            {/* <Typography variant="h6" className="mb-12 text-center text-green-400">staff</Typography> */}

            <div className="container grid w-6/12 grid-cols-1 gap-8 mx-auto md:grid-cols-2">
                {teachers.map((teacher, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="w-[200px] h-[200px] relative">
                            <Image
                                src={teacher.image}
                                alt={teacher.name}
                                fill
                                className="object-cover rounded-full"
                            />
                        </div>
                        <h2 className="mb-2 text-2xl">{teacher.name}</h2>
                        <p className="mb-4 text-gray-600">{teacher.role}</p>
                        <div className="flex gap-4">
                            <a href={teacher.socials.facebook} className="text-teal-300 hover:text-teal-400">
                                <FaFacebookF />
                            </a>
                            <a href={teacher.socials.twitter} className="text-teal-300 hover:text-teal-400">
                                <FaTwitter />
                            </a>
                            <a href={teacher.socials.instagram} className="text-teal-300 hover:text-teal-400">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                ))}
                <div className="flex flex-col items-center">
                    <div className="w-[200px] h-[200px] relative">
                        <Image
                            src="/teacher-2.jpg"
                            alt="apply"
                            fill
                            className="object-cover rounded-full"
                        />
                    </div>
                    <h2 className="mb-2 text-2xl">Coming soon</h2>
                    <p className="mb-4 text-gray-600">Join our team of talented teachers</p>
                    <a href="mailto:taylor@gmail.com?subject=Application for Teacher Position" className="text-teal-300 hover:text-teal-400">
                        <p className="mb-4 font-bold text-teal-300">Apply now</p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Staff