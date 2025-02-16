import React from "react";
import Container from "../../../common/Container/Container";
import { motion } from "framer-motion";
import { fadeInUp } from "../../../../utils/animations";
import image from "../../../../assets/ValuesSection/image.png";
import StatsCard from "../StatsCard";
const ValuesSection: React.FC = () => {
  return (
    <section className="py-section">
      <Container>
        <div className="flex flex-col xl:flex-row gap-16">
          {/* left Content */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="w-full xl:w-1/2 flex flex-col gap-6  items-center xl:items-start"
          >
            <h2 className="font-syne font-bold text-heading-1 mb-8 text-center xl:text-left">
                Why Choose<br />Drivoxe?
              </h2>
            <div className="flex flex-col gap-6">
              
              <p className="font-syne font-medium text-[18px] text-gray-600 max-w-[250px]">
                Join our satisfied customers who trust us for their journeys.
                We serve with a lot of values that you can feel directly.
              </p>

              
              
            </div>
          </motion.div>
          {/* right Content */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="w-full xl:w-1/2"
          >
            <div className="relative">
              <img 
                src={image} 
                alt="Why Choose Drivoxe" 
                className="w-full h-auto rounded-[20px] object-cover"
              />
              <StatsCard 
                top="top-[-6%]"
                left="left-[50%]"
                title="Quality & Variety"
                text="text-body"
                description={<>Explore our diverse<br />range of premium <br />vehicles.</>}
              />
               <StatsCard 
                top="top-[14%]"
                left="left-[-2%]"
                title="Easy Booking"
                text="text-body"
                description={<>Reseve your car in<br />just a few clicks.</>}
                dotPosition="bottomright"
              />
              <StatsCard 
                top="top-[50%]"
                left="left-[56%]"
                title="Affordable Rates"
                text="text-body"
                description={<>Enjoy competitive<br />prices without<br />hidden fees.</>}
                dotPosition="topright"
              />
              
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ValuesSection; 