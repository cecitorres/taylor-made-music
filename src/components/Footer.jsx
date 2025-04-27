import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <section className="w-full py-4 bg-teal-300">
      {/* All rights reserved */}
      <div className="flex flex-col items-center justify-center w-10/12 gap-4 mx-auto md:flex-row md:justify-between">
        <Typography variant="paragraph" className="text-sm text-center md:text-base">
          All rights reserved | 2025 | Made with ❤️ by <a href="https://www.linkedin.com/in/cecitorresmx/" target="_blank" rel="noopener noreferrer" className="underline">Cecilia Torres</a>
        </Typography>
        {/* Social media icons */}
        <div className="flex items-center justify-center gap-4">
          <FaFacebook className="text-xl md:text-2xl" />
          <FaInstagram className="text-xl md:text-2xl" />
          <FaTwitter className="text-xl md:text-2xl" />
        </div>
      </div>
    </section>
  )
}

export default Footer;