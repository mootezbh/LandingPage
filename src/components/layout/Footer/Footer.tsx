import React from "react";
import Container from "../../common/Container/Container";
import Arrow from "../../../assets/Hero/Arrow.svg";

interface FooterLink {
  title: string;
  links: string[];
}

const footerLinks: FooterLink[] = [
  {
    title: "Quick Link",
    links: ["About us", "Who we are", "Contact Us"],
  },
  {
    title: "The Cars",
    links: ["How it works", "Pick a car", "FAQs"],
  },
  {
    title: "Social Media",
    links: ["Instagram", "Facebook", "Twitter"],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-[1700px] mx-auto px-6 pt-20">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-20">
          {/* Newsletter Section */}
          <div className="max-w-[400px]">
            <h2 className="font-syne font-bold text-[40px] leading-tight mb-2">
              Don't Miss a Thing
            </h2>
            <p className="text-gray-500 text-[14px] mb-8">
              Subscribe to our newsletter for exclusive deals and updates.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter email address for newsletter..."
                className="w-full px-8 py-4 bg-[#F5F5F5] rounded-full text-[14px] focus:outline-none placeholder:text-gray-400 border border-gray-200"
              />
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full hover:scale-110 flex items-center justify-center"
                aria-label="Subscribe"
              >
                <img src={Arrow} alt="" className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex gap-20">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="font-syne font-bold text-[20px] mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-orange transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-16 py-4 text-center text-gray-500 text-sm">
          Copyright © 2025 COMFORT. All rights reserved. Made by Mootez Bh.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
