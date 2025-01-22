import React from 'react'
import Image from 'next/image'
import { Typography } from "@material-tailwind/react";

const Staff = () => {
    const teachers = [
        {
            name: "Tim Caroll",
            role: "professional cellist",
            image: "/teacher-1.jpg",
            socials: {
                facebook: "#",
                twitter: "#",
                instagram: "#"
            }
        },
        {
            name: "Amanda Snow",
            role: "professional pianist",
            image: "/teacher-2.jpg",
            socials: {
                facebook: "#",
                twitter: "#",
                instagram: "#"
            }
        },
        {
            name: "Terry Barton",
            role: "professional violinist",
            image: "/teacher-3.jpg",
            socials: {
                facebook: "#",
                twitter: "#",
                instagram: "#"
            }
        }
    ];

    return (
        <section className="flex flex-col items-center justify-center w-full py-10 text-black bg-white">
            <Typography variant="h3" className="mb-2 text-center">Featured Teachers</Typography>
            <Typography variant="h6" className="mb-12 text-center text-green-400">staff</Typography>

            <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-3">
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
                            <a href={teacher.socials.facebook} className="text-green-400 hover:text-green-500">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href={teacher.socials.twitter} className="text-green-400 hover:text-green-500">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href={teacher.socials.instagram} className="text-green-400 hover:text-green-500">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Staff