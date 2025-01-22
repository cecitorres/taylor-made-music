import React from 'react'
import Image from 'next/image';

const Logos = () => {
  const logos = [
    { src: "/partner-1.jpeg", alt: "Hotoh" },
    { src: "/partner-2.png", alt: "Retrodesign" },
    { src: "/partner-3.png", alt: "Retrobrand" },
    { src: "/partner-4.png", alt: "Prestiges" },
    { src: "/partner-5.png", alt: "Mountain" },
    { src: "/partner-6.png", alt: "Partnerco" },
  ];

  return (
    <section className="w-full py-8 overflow-hidden bg-teal-300">
      <div className="max-w-[1200px] mx-auto relative">
        <div className="flex gap-8 animate-scroll">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div key={`logo-${index}`} className="flex-shrink-0 w-[200px] flex items-center justify-center h-32">
              <Image 
                src={logo.src} 
                alt={logo.alt} 
                width={150}
                height={64}
                className="object-contain"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`logo-duplicate-${index}`} className="flex-shrink-0 w-[200px] flex items-center justify-center h-32">
              <Image 
                src={logo.src} 
                alt={logo.alt} 
                width={150}
                height={64}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Logos