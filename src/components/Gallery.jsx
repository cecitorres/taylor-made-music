import React from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

const Gallery = () => {
  const images = [
    '/gallery-1.jpg',
    '/gallery-2.jpg',
    '/gallery-3.jpg',
    '/gallery-4.jpg',
    '/gallery-5.jpg',
    '/gallery-6.jpg',
    '/gallery-7.jpg'
  ];

  return (
    <section className="w-full bg-white">
      <div className="w-full">
        <div className="grid grid-cols-2 gap-0 md:grid-cols-4 lg:grid-cols-7">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative aspect-square group"
            >
              <Image
                src={image}
                alt={`Music school image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 14vw"
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