import React from "react";
import Container from "../../../common/Container/Container";
import { motion } from "framer-motion";
import { fadeInUp } from "../../../../utils/animations";
import CarCard from "./CarCard";

interface Car {
  name: string;
  image: string;
  price: number;
}

const cars: Car[] = [
  {
    name: "Horizon Mirage Convertible dddddddddddd",
    image: "https://images5.alphacoders.com/554/554903.jpg",
    price: 49,
  },
  {
    name: "Zephyr A4 Stratos",
    image: "https://i.pinimg.com/736x/74/dc/6a/74dc6ae0d18764edeaa7432e39bc6c0a.jpg",
    price: 79,
  },
  {
    name: "Aurora X5 Nebula",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKa7NmRTbFebDA9_0mmIixd4OV4UB0E_6ycg&s",
    price: 99,
  },
  {
    name: "Vanguard CX2 Convertible",
    image: "https://c4.wallpaperflare.com/wallpaper/90/488/981/mercedes-benz-c63-amg-white-wallpaper-preview.jpg",
    price: 59,
  },
  {
    name: "Stellar Orion Hybrid",
    image: "https://c4.wallpaperflare.com/wallpaper/90/488/981/mercedes-benz-c63-amg-white-wallpaper-preview.jpg",
    price: 39,
  },
  {
    name: "Vanguard C-Class Coupe",
    image: "https://c4.wallpaperflare.com/wallpaper/306/894/549/2014-mercedes-benz-cls-63-amg-white-mercedes-benz-sedan-wallpaper-preview.jpg",
    price: 69,
  },
];

const Cars: React.FC = () => {
  return (
    <section className="py-section">
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <p className="text-[20px] font-syne font-semibold uppercase tracking-[0.2em] mb-4">THE CARS</p>
          <h2 className="font-syne font-bold text-heading-1">Our Impressive Fleet</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center xl:justify-between gap-8 px-4 xl:px-0">
          {cars.map((car, index) => (
            <div key={car.name} className="w-full md:w-[calc(50%-16px)] xl:w-[calc(33.33%-22px)]">
              <CarCard
                {...car}
                index={index}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 mt-12">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className={`w-8 h-8 rounded-full font-syne ${
                num === 1
                  ? "bg-orange text-white"
                  : "text-gray-400 hover:text-orange"
              }`}
            >
              {String(num).padStart(2, "0")}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Cars; 