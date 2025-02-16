import React from "react";
import Container from "../../../common/Container/Container";
import logo1 from "../../../../assets/Brands/Logo1.png";
import logo2 from "../../../../assets/Brands/Logo2.png";
import logo3 from "../../../../assets/Brands/Logo3.png";
import logo4 from "../../../../assets/Brands/Logo4.png";
import logo5 from "../../../../assets/Brands/Logo5.png";
import logo6 from "../../../../assets/Brands/Logo6.png";
import { motion } from "framer-motion";
import { fadeInUp } from "../../../../utils/animations";

interface Logo {
  src: string;
  alt: string;
}

const BrandLogos: React.FC = () => {
  const logos: Logo[] = [
    { src: logo1, alt: "Brand Logo 1" },
    { src: logo2, alt: "Brand Logo 2" },
    { src: logo3, alt: "Brand Logo 3" },
    { src: logo4, alt: "Brand Logo 4" },
    { src: logo5, alt: "Brand Logo 5" },
    { src: logo6, alt: "Brand Logo 6" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <Container>
      <motion.div
        className="m-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 p-6 md:p-[30px] gap-y-10 shadow-none md:shadow-card rounded-[20px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            custom={index * 0.1}
            className="flex items-center w-full md:w-auto justify-center"
          >
            <img src={logo.src} alt={logo.alt} className="h-8 object-contain" />
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
};

export default BrandLogos;
