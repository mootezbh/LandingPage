import React from "react";
import HeroSection from "../components/sections/home/Hero/Hero";
import BrandLogos from "../components/sections/home/Brands/Brands";
import Cars from "../components/sections/home/Cars/Cars";
import ValuesSection from "../components/sections/home/Values/Values";
import TestimonialsSection from "../components/sections/home/Testimonials/Testimonials";
import HowItWorks from "../components/sections/home/HowItWorks/HowItWorks";
import CTASection from "../components/sections/home/CTA/CTASection";
import AnimateOnScroll from "../components/common/AnimateOnScroll/AnimateOnScroll";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AnimateOnScroll>
        <BrandLogos />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Cars />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ValuesSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <TestimonialsSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <HowItWorks />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CTASection />
      </AnimateOnScroll>
    </>
  );
};

export default Home;
