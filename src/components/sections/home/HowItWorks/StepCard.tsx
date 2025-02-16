import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../../../utils/animations";
import dotIcon from "../../../../assets/Dot.png";
import dotRedIcon from "../../../../assets/DotRed.png";

interface StepCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
  isTextLeft?: boolean;
  isLast?: boolean;
}

const StepCard: React.FC<StepCardProps> = ({
  icon,
  title,
  description,
  index,
  isTextLeft = false,
  isLast = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardClasses = `bg-white rounded-[32px] p-6 shadow-card w-[150px] h-[150px] flex items-center justify-center transition-all duration-300 ${
    isHovered ? '!bg-orange' : ''
  }`;

  const iconClasses = `w-[64px] h-[64px] z-10 transition-all duration-300 object-contain ${
    isHovered ? 'brightness-0 invert' : 'brightness-0'
  }`;

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      custom={index * 0.1}
      className="flex flex-col items-center w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center">
        <div className={cardClasses}>
          <div className="flex items-center justify-center w-full h-full">
            <img src={icon} alt={title} className={iconClasses} />
          </div>
        </div>

        <div className="text-center max-w-[300px] mt-4">
          <h3 className="font-syne font-bold text-heading-4 mb-2">
            {title}
          </h3>
          <p className="font-syne text-body text-gray-600">
            {description}
          </p>
        </div>

        {!isLast && (
          <div className="h-16 w-[2px] border-l-2 border-dashed border-gray-300 my-4" />
        )}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-[1fr,auto,1fr] items-center w-full">
        {/* Left side content */}
        <div className={`${!isTextLeft ? 'flex gap-4 items-center justify-end' : ''}`}>
          {!isTextLeft && (
            <>
              <div className="text-right">
                <h3 className="font-syne font-bold text-heading-4 mb-2">
                  {title}
                </h3>
                <p className="font-syne text-body text-gray-600">
                  {description}
                </p>
              </div>
              <div className={cardClasses}>
                <div className="flex items-center justify-center w-full h-full">
                  <img src={icon} alt={title} className={iconClasses} />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Center space for timeline */}
        <div className="w-[50px] flex justify-center">
          <img 
            src={isHovered ? dotRedIcon : dotIcon} 
            alt="Timeline dot" 
            className={`w-6 h-6 transition-all duration-300 ${!isHovered ? 'brightness-75' : ''}`}
          />
        </div>

        {/* Right side content */}
        <div className={`${isTextLeft ? 'flex gap-4 items-center' : ''}`}>
          {isTextLeft && (
            <>
              <div className={cardClasses}>
                <div className="flex items-center justify-center w-full h-full">
                  <img src={icon} alt={title} className={iconClasses} />
                </div>
              </div>
              <div className="text-left">
                <h3 className="font-syne font-bold text-heading-4 mb-2">
                  {title}
                </h3>
                <p className="font-syne text-body text-gray-600">
                  {description}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default StepCard; 