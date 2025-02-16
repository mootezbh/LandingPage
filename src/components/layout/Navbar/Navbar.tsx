import { useState } from "react";
import Button from "../../common/Button/Button";
import Container from "../../common/Container/Container";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";
import { navLinks } from "../../../constants/navigation";
import { fadeIn } from "../../../utils/animations";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      custom={0}
      className={`absolute top-0 left-0 right-0 z-50 ${
        isMenuOpen ? 'bg-black' : 'bg-transparent backdrop-blur-sm'
      } xl:bg-transparent xl:backdrop-blur-sm`}
    >
      <Container className="py-4 xl:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <p className="font-syne font-extrabold text-body md:text-body-lg xl:text-heading-4">CONFORT.</p>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg> : <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-[60px] xl:gap-[100px]">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="font-syne text-body hover:text-orange transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-8">
            <a 
              href="#" 
              className="font-syne text-body text-orange border-r border-black pr-8 hover:text-black transition-colors duration-200"
            >
              Contact
            </a>
            <Button hasBorder>Sign up</Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileMenu isOpen={isMenuOpen} />
      </Container>
    </motion.nav>
  );
};

export default Navbar; 