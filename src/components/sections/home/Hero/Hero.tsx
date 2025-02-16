import React from "react";
import HeroImage from "../../../../assets/Hero/Hero_BG.svg";
import eImage from "../../../../assets/Hero/letter-e 1.png";
import shapeImage from "../../../../assets/Hero/Shape.png";
import vectorImage from "../../../../assets/Hero/Vector.png";
import logoImage from "../../../../assets/Hero/Logo.png";
import person1Image from "../../../../assets/Hero/Person1.png";
import person2Image from "../../../../assets/Hero/Person2.png";
import person3Image from "../../../../assets/Hero/Person3.png";
import Button from "../../../common/Button/Button";
import StatsCard from "../StatsCard";
import Container from "../../../common/Container/Container";
import { motion } from "framer-motion";
import { fadeInUp } from "../../../../utils/animations";

interface SocialIcon {
  src: string;
  alt: string;
}

const socialIcons: SocialIcon[] = [
  { src: eImage, alt: "E Icon" },
  { src: shapeImage, alt: "Shape Icon" },
  { src: vectorImage, alt: "Vector Icon" },
  { src: logoImage, alt: "Logo Icon" },
];

const actionButtons = ["Rent", "Buy", "Sell", "Consult"];

const HeroSection: React.FC = () => {
  return (
    <div
      className="relative w-full max-w-[1700px] mx-auto mb-[65px] overflow-hidden"
    >
      <img
        src={HeroImage}
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-50"
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-black-overlay xl:bg-transparent -z-40 h-full w-full" />
      {/* stats card */}
      <StatsCard 
        top="top-[24%]"
        left="left-[57%]"
        title="50+"
        description={<>Car Types<br />Available</>}
      />

      <Container className="relative pt-[60px] pb-[40px] xl:pt-[100px]">
        <div className="flex flex-col mt-10 xl:flex-row justify-between gap-8 xl:gap-0 xl:mt-0">
          <div className="w-full xl:w-fit h-full flex flex-col items-center xl:items-start">
            <motion.div
              className="flex flex-col items-center xl:items-start gap-6 xl:gap-[56px] mb-8 xl:mb-[130px]"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <motion.p
                className="font-syne font-bold text-heading-4 xl:text-heading-1 w-full xl:w-[414px] pt-[10px] leading-tight text-white xl:text-black text-center xl:text-left"
                variants={fadeInUp}
                custom={0.2}
              >
                Your Journey, Your Car,
                <br /> Your Way
              </motion.p>
              <motion.p
                className="font-syne font-medium text-body xl:text-body-lg w-full xl:w-[320px] text-white/60 xl:xl:text-gray-600 text-center xl:text-left"
                variants={fadeInUp}
                custom={0.4}
              >
                Experience the ultimate freedom of choice with GoCar - tailor
                your adventure by choosing from our premium fleet of vehicles.
              </motion.p>
              <motion.div variants={fadeInUp} custom={0.6}>
                <Button hasBorder className="bg-white/10 xl:bg-orange">
                  Get Started
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex justify-center xl:justify-start gap-[16px] mb-8 xl:mb-0 w-full"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.8}
            >
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[15px] h-[16px]"
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="w-full h-full invert brightness-0 xl:invert-0"
                  />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Section */}
          <motion.div
            className="w-full xl:w-[210px] h-full flex flex-col items-center xl:items-start"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            {/* Profile Images */}
            <div className="flex flex-col items-center xl:items-start gap-4 mb-8 xl:mb-[190px] h-auto xl:h-[212px] xl:mt-[70px]">
              <div className="flex -space-x-4">
                {[person1Image, person2Image, person3Image].map(
                  (src, index) => (
                    <img
                      key={index}
                      className="w-[48px] xl:w-[60px] h-[48px] xl:h-[60px] rounded-full border-2 border-white"
                      src={src}
                      alt={`User avatar ${index + 1}`}
                    />
                  )
                )}
              </div>
              <div className="flex justify-center items-center flex-col gap-2 xl:items-start">
                <h2 className="font-syne font-semibold text-[18px] xl:text-[20px] text-white xl:text-black">
                  12.5K+ PEOPLE
                </h2>
                <p className="font-syne text-center xl:text-left text-white/60 xl:text-gray-600 text-body-xs xl:text-body-sm leading-normal w-full xl:w-[180px] opacity-60">
                  has used our services such as renting, buying, or even
                  selling their car.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col items-center xl:items-start gap-6 xl:gap-8">
              <div className="flex flex-wrap justify-center xl:justify-start gap-2 w-full xl:max-w-[200px]">
                {actionButtons.map((text, index) => (
                  <button
                    key={index}
                    className="font-syne text-white xl:text-orange border border-white xl:border-orange rounded-full px-4 xl:px-6 py-2 hover:bg-white hover:text-black xl:hover:bg-orange xl:hover:text-white transition-colors text-body-xs xl:text-body"
                  >
                    {text}
                  </button>
                ))}
              </div>

              {/* Learn More Link */}
              <div className="flex items-center justify-center xl:justify-start gap-2 text-white xl:text-black hover:text-orange transition-colors cursor-pointer w-full pb-[16px] xl:pb-0">
                <span className="font-syne text-body-sm xl:text-body">
                  Learn more
                </span>
                <svg
                  width="25"
                  height="9"
                  viewBox="0 0 25 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.3536 4.96024C24.5488 4.76498 24.5488 4.4484 24.3536 4.25314L21.1716 1.07116C20.9763 0.875893 20.6597 0.875893 20.4645 1.07116C20.2692 1.26642 20.2692 1.583 20.4645 1.77826L23.2929 4.60669L20.4645 7.43512C20.2692 7.63038 20.2692 7.94696 20.4645 8.14222C20.6597 8.33749 20.9763 8.33749 21.1716 8.14222L24.3536 4.96024ZM0 5.10669H24V4.10669H0V5.10669Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
