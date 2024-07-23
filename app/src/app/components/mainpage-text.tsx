import React from 'react';

interface MainpageTextProps {
  children: React.ReactNode;
  className?: string;  // className is optional
}

const MainpageText: React.FC<MainpageTextProps> = ({ children, className }) => (
  <h1 className={`text-gray-800 ${className}`}>
    {children}
  </h1>
);

export default MainpageText;
