import React from "react";
import Container from "../../../common/Container/Container";
import { motion } from "framer-motion";
import { fadeInUp } from "../../../../utils/animations";
import howItWorksBg from "../../../../assets/HowWeWork/HowWeWork.png";
import selectIcon from "../../../../assets/HowWeWork/select.svg";
import bookIcon from "../../../../assets/HowWeWork/book.svg";
import driveIcon from "../../../../assets/HowWeWork/drive.svg";
import returnIcon from "../../../../assets/HowWeWork/return.svg";
import StepCard from "./StepCard";

interface Step {
  icon: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: selectIcon,
    title: "Select",
    description: "Choose your desired car from our fleet."
  },
  {
    icon: bookIcon,
    title: "Book",
    description: "Reserve your car online or through our app."
  },
  {
    icon: driveIcon,
    title: "Drive",
    description: "Pick up your car and hit the road."
  },
  {
    icon: returnIcon,
    title: "Return",
    description: "Bring the car back at the end of your rental period."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <div className="relative w-full max-w-[1700px] mx-auto">
      <div className="absolute inset-0 bg-[#FFF5F5] -z-20" />
      <div className="absolute inset-0 max-w-[1000px] mx-auto">
        <img 
          src={howItWorksBg} 
          alt="Background pattern" 
          className="w-full h-full object-contain -z-10"
        />
      </div>
      
      <section className="relative py-section">
        <Container>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <p className="text-[20px] font-syne font-semibold uppercase tracking-[0.2em] mb-4">
              HOW IT WORKS
            </p>
            <h2 className="font-syne font-bold text-heading-2 md:text-heading-1">
              Simple Steps to Get the Car
            </h2>
          </motion.div>

          <div className="relative max-w-[1200px] mx-auto">
            {/* Vertical dotted line - Only visible on desktop */}
            <div className="hidden md:block absolute left-1/2 top-[75px] -translate-x-1/2 h-[calc(100%-150px)] w-[2px]">
              <div className="h-full w-full border-l-2 border-dashed border-gray-300" />
            </div>
            
            {/* Steps */}
            <div className="flex flex-col gap-8 md:gap-24 relative">
              {steps.map((step, index) => (
                <StepCard
                  key={step.title}
                  {...step}
                  index={index}
                  isTextLeft={index % 2 !== 0}
                  isLast={index === steps.length - 1}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HowItWorks; 