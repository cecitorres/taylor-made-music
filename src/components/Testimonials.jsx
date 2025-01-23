import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Image from 'next/image'

const testimonialData = [
  {
    id: 1,
    text: "My son has been taking piano and guitar lessons for more than a year. He loves his teachers and I can tell that they really care about my kid too. Your music school is wonderful and I highly recommend.",
    author: "Louise Flores",
    role: "parent",
    image: "/testimonial-1.jpg" // Add your image path here
  },
  // Add more testimonials here
  {
    id: 2,
    text: "The instructors are incredibly patient and skilled. My daughter has made remarkable progress.",
    author: "John Smith",
    role: "parent",
    image: "/testimonial-2.jpg"
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <section className="relative flex flex-col items-center justify-center w-full py-10 h-[450px]">      <div
      className="absolute inset-0 bg-center bg-cover"
      style={{ backgroundImage: "url('/background-3.jpg')" }} // Add your background image
    >
      <div className="absolute inset-0 bg-black/50"> {/* Dark overlay */}
        <div className="flex items-center justify-center h-full">
          <button
            onClick={handlePrevious}
            className="absolute text-4xl text-white transition-transform left-10 hover:scale-110"
          >
            <FaChevronLeft />
          </button>

          <div className="max-w-3xl px-4 mx-auto text-center">

            <div className="w-[120px] h-[120px] relative mx-auto mb-8">
              <Image
                src={testimonialData[currentIndex].image}
                alt={testimonialData[currentIndex].author}
                className="object-cover rounded-full"
                fill
              />
            </div>
            <p className="mb-8 text-2xl">
              &quot;{testimonialData[currentIndex].text}&quot;
            </p>
            <div className="text-teal-400">
              {testimonialData[currentIndex].author} / {testimonialData[currentIndex].role}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute text-4xl text-white transition-transform right-10 hover:scale-110"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Testimonials