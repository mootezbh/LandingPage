import React from "react";
import Container from "../../../common/Container/Container";
import { motion } from "framer-motion";
import { fadeInUp } from "../../../../utils/animations";
import ctaBg from "../../../../assets/CTAsection/CTA.png";
import appStore from "../../../../assets/CTAsection/app_store.png";
import googlePlay from "../../../../assets/CTAsection/google_play.png";
import AnimateOnScroll from "../../../common/AnimateOnScroll/AnimateOnScroll";

const CTASection: React.FC = () => {
  return (
    <AnimateOnScroll>
      <div className="relative w-full max-w-[1700px] mx-auto px-4">
        <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-[32px]">
          <img 
            src={ctaBg} 
            alt="Red sports car" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          <Container className="relative h-full">
            <div className="flex flex-col items-center lg:items-end justify-center h-full w-full lg:w-1/3 lg:ml-auto">
              <motion.h2 
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="font-syne font-bold text-heading-3 md:text-heading-2 mb-4 text-white w-full text-center lg:text-left"
              >
                Ready to Go?
              </motion.h2>
              
              <motion.p 
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.1}
                className="font-syne text-body md:text-body-lg mb-8 text-white/80 w-full text-center lg:text-left"
              >
                Book your car wherever you are<br />and ride with us now!
              </motion.p>

              <motion.div 
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.2}
                className="flex gap-4 items-center justify-center lg:justify-start w-full"
              >
                <a 
                  href="#" 
                  className="transition-transform hover:scale-105"
                  aria-label="Download on App Store"
                >
                  <img 
                    src={appStore} 
                    alt="App Store" 
                    className="h-[48px] md:h-[56px] w-auto"
                  />
                </a>
                <a 
                  href="#" 
                  className="transition-transform hover:scale-105"
                  aria-label="Get it on Google Play"
                >
                  <img 
                    src={googlePlay} 
                    alt="Google Play" 
                    className="h-[48px] md:h-[56px] w-auto"
                  />
                </a>
              </motion.div>
            </div>
          </Container>
        </div>
      </div>
    </AnimateOnScroll>
  );
};

export default CTASection; 