import React from 'react'
// icons from react-icons
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import { Typography } from "@material-tailwind/react";
const Footer = () => {
  return (
    <section className="w-full bg-teal-300 h-[80px]">
      {/* All rights reserved */}
      <div className="flex items-center justify-between w-10/12 h-full mx-auto">
        <Typography variant="paragraph">All rights reserved | 2025 | Made with ❤️ by <a href="https://www.linkedin.com/in/cecitorresmx/" target="_blank" rel="noopener noreferrer">Cecilia Torres</a></Typography>
        {/* Social media icons */}
        <div className="flex items-center justify-center gap-2">
          <FaFacebook className="text-2xl" />
          <FaInstagram className="text-2xl" />
          <FaTwitter className="text-2xl" />
        </div>
      </div>
    </section>
  )
}

export default Footer