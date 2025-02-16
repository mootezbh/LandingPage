import React from "react";
import dotIcon from "../../../assets/Dot.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/animations";

interface StatsCardProps {
  top: string;
  left: string;
  title: string;
  description: string | React.ReactNode;
  delay?: number;
  text?: string;
  dotPosition?: 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  top, 
  left, 
  title, 
  description, 
  delay = 0.8,
  text = "text-heading-2",
  dotPosition = 'bottomleft'
}) => { 
  const getDotPosition = () => {
    switch(dotPosition) {
      case 'topleft':
        return '-top-2 -left-2';
      case 'topright':
        return '-top-2 -right-2';
      case 'bottomright':
        return '-bottom-2 -right-2';
      case 'bottomleft':
      default:
        return '-bottom-2 -left-2';
    }
  };

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      custom={delay}
      className={`absolute hidden xl:block ${top} ${left} transform -translate-x-50% -translate-y-50%`}
    >
      <div className="bg-white/60 backdrop-blur-sm rounded-[20px] p-6 w-auto h-auto shadow-card flex items-center relative overflow-visible">
        <div className="flex flex-col gap-2 items-center">
          <h2 className={`font-syne font-bold ${text} text-black leading-none`}>
            {title}
          </h2>
          <p className="font-syne text-body-sm text-gray-600  text-center">
            {description}
          </p>
        </div>
        <img
          src={dotIcon}
          alt="Dot decoration"
          className={`absolute ${getDotPosition()} w-[23px] h-[23px]`}
        />
      </div>
    </motion.div>
  );
};

export default StatsCard;
