import React from 'react'
import { Typography } from "@material-tailwind/react";
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Address = () => {
  return (
    <section id="contact" className="w-full py-16 text-gray-800 bg-gray-100">
      <div className="grid w-10/12 grid-cols-1 gap-8 mx-auto md:w-8/12 md:grid-cols-4">
        {/* Address Section */}
        <div className="col-span-1">
          <Typography variant="h4" className="font-serif">Address</Typography>
          <div className="flex items-center justify-start gap-4 mt-4">
            <FaMapMarkerAlt className="text-2xl text-teal-300" />
            <Typography variant="paragraph">New Westminster, BC, CA</Typography>
          </div>
        </div>

        {/* Blank Space for Larger Screens */}
        <div className="hidden col-span-2 md:block"></div>

        {/* Opening Hours Section */}
        <div className="col-span-1">
          <Typography variant="h4" className="font-serif">Opening Hours</Typography>
          <div className="flex justify-start gap-4 mt-4">
            <FaClock className="text-2xl text-teal-300" />
            <div className="flex flex-col items-start justify-start">
              <Typography variant="paragraph">Monday - Friday: 9am - 5pm</Typography>
              <Typography variant="paragraph">Saturday: 10am - 2pm</Typography>
              <Typography variant="paragraph">Sunday: Closed</Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Address;