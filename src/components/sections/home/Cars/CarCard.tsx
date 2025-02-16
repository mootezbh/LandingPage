import React from "react";
import { motion } from "framer-motion";
import Button from "../../../common/Button/Button";
import { fadeInUp } from "../../../../utils/animations";

interface CarCardProps {
  name: string;
  image: string;
  price: number;
  index: number;
}

const CarCard: React.FC<CarCardProps> = ({ name, image, price, index }) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      custom={index * 0.1}
      className="relative flex flex-col justify-between bg-white rounded-[20px] p-6 shadow-card transition-all duration-300 h-[460px] xl:h-[500px] hover:bg-orange hover:text-white group hover:shadow-lg hover:-translate-y-2"
    >
      <div className="relative md:aspect-[4/3]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain transition-all"
        />
      </div>
      
      <div className="flex flex-col gap-4">
        <h3 className="font-syne font-bold text-heading-4 md:text-[28px] line-clamp-2 group-hover:text-white">
          {name}
        </h3>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-body-sm text-gray-600 group-hover:text-white/80">Starting at</p>
            <p className="font-syne font-bold text-heading-4 md:text-[28px] group-hover:text-white">${price}/day</p>
          </div>
          <Button className="!px-6 md:!px-8 bg-orange/10 group-hover:bg-white group-hover:text-orange hover:bg-white hover:text-orange transition-colors">
            Rent
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard; 