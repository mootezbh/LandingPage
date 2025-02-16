import React, { useState, useRef, TouchEvent } from "react";
import Container from "../../../common/Container/Container";
import { motion } from "framer-motion";
import { fadeInUp } from "../../../../utils/animations";
import testimonialsBg from "../../../../assets/Testimonials/testimonials_bg.png";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "My Drivoxe experience was nothing short of incredible. The pristine car and impeccable service made my trip unforgettable. I'll be back for more.",
    author: "Aleea Thompson",
    image: "/testimonials/person1.jpg"
  },
  {
    id: 2,
    text: "Outstanding service! The car was in perfect condition and the booking process was seamless. Highly recommend Drivoxe for anyone looking for quality.",
    author: "John Mitchell",
    image: "/testimonials/person2.jpg"
  },
  {
    id: 3,
    text: "From start to finish, Drivoxe provided an exceptional experience. The staff was friendly and the vehicle exceeded my expectations.",
    author: "Sarah Parker",
    image: "/testimonials/person3.jpg"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const touchDiff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(touchDiff) > minSwipeDistance) {
      if (touchDiff > 0) {
        // Swiped left
        handleNext();
      } else {
        // Swiped right
        handlePrev();
      }
    }
  };

  return (
    <div className="relative w-full max-w-[1700px] mx-auto">
      <img 
        src={testimonialsBg} 
        alt="Background pattern" 
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      
      <section className="relative py-section min-h-[600px] md:min-h-[700px]">
        <Container>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center mb-8 md:mb-16"
          >
            <p className="text-orange font-syne font-semibold uppercase tracking-[0.2em] mb-4 text-sm md:text-[20px]">
              WHAT OUR CUSTOMERS SAY
            </p>
          </motion.div>

          <div className="relative max-w-[1600px] mx-auto px-4 md:px-16 xl:px-32 h-[400px] md:h-[450px]">
            {/* Dots Navigation for Mobile */}
            <div className="flex justify-center gap-3 md:hidden">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full z-10 ${
                    currentIndex === index 
                      ? 'w-4 h-4 bg-orange' 
                      : 'w-3 h-3 bg-gray-400 hover:bg-orange'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center h-full flex flex-col justify-center"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <p className="font-syne text-[24px] md:text-[32px] xl:text-[40px] leading-tight mb-8 md:mb-12 max-w-[800px] mx-auto">
                {testimonials[currentIndex].text}
              </p>
              
              <div className="flex flex-col items-center gap-4">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].author}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                />
                <p className="font-syne text-[16px] md:text-[20px] text-gray-600">
                  {testimonials[currentIndex].author}
                </p>
              </div>
            </motion.div>

            {/* Navigation Buttons - Only visible on desktop */}
            <button
              onClick={handlePrev}
              className="hidden md:flex absolute left-[5px] md:-left-4 xl:-left-8 top-1/3 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange/10 hover:bg-orange text-orange hover:text-white transition-colors items-center justify-center"
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="md:w-6 md:h-6">
                <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="hidden md:flex absolute right-[5px] md:-right-4 xl:-right-8 top-1/3 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange/10 hover:bg-orange text-orange hover:text-white transition-colors items-center justify-center"
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="md:w-6 md:h-6">
                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default TestimonialsSection; 