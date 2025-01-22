import React from 'react'
import { Typography } from "@material-tailwind/react";
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
const Address = () => {
  return (
    <section className="w-full py-16 text-gray-800 bg-gray-100">
      {/* 3 columns  */}
      {/* 1 column for address */}
      {/* 1 column blank for now */}
      {/* 1 column for opening hours */}
      <div className="grid w-10/12 grid-cols-4 mx-auto">
        <div className="col-span-1">
          <Typography variant="h4">Address</Typography>
          {/* icon should be at the left of the text */}
          <div className="flex items-center justify-start gap-4 mt-4">
            <FaMapMarkerAlt className="text-2xl text-teal-300" />
            <Typography variant="paragraph">123 Main St, Anytown, USA</Typography>
          </div>
        </div>
        <div className="col-span-2"></div>
        <div className="col-span-1">
          <Typography variant="h4">Opening Hours</Typography>
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

export default Address