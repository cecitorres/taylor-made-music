import React from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

const Gallery = () => {
  const images = [
    '/gallery-1.webp',
    '/gallery-2.webp',
    '/gallery-3.webp',
    '/gallery-4.webp',
    '/gallery-5.webp',
    '/gallery-6.webp',
    '/gallery-7.webp',
  ];

  return (
    <section className="w-full bg-white">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-4 lg:grid-cols-7">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative aspect-square group ${
                index > 0 ? 'hidden md:block' : ''
              }`}
            >
              <Image
                src={image}
                alt={`Music school image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 25vw, 14vw"
              />
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-black bg-opacity-0 group-hover:bg-opacity-40">
                <FaSearch className="text-3xl text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;