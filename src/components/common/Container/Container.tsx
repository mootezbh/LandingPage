import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`
      w-full
      px-4 
      sm:px-4 
      md:px-8 
      lg:px-16 
      xl:px-[50px] 
      2xl:px-[80px]
      mx-auto 
      max-w-none
      sm:max-w-[600px]
      md:max-w-[800px]
      lg:max-w-[1024px]
      xl:max-w-[1280px]
      2xl:max-w-[1600px]
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Container; 