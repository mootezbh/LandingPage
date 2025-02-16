import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  hasBorder?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, hasBorder = false, className }) => {
  return (
    <button className={`${className} w-fit h-[40px] bg-orange text-white cursor-pointer hover:bg-white hover:text-orange font-bold text-[16px] font-syne rounded-3xl px-6 py-2 shadow-[0_4px_20px_rgba(253,59,59,0.25)] hover:shadow-[0_4px_20px_rgba(253,59,59,0.35)] transition-all ${
        hasBorder ? 'border border-black' : ''
    }`}>
      {children}
    </button>
  );
};

export default Button;
