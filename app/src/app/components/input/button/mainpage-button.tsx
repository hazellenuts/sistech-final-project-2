import React from 'react';

// Define types for the props
interface MainpageButtonProps {
  onClick: () => void; // Function type for the onClick event
  children: React.ReactNode; // Type for children, which can be any React node
  className?: string; // Optional className prop
}

const MainpageButton: React.FC<MainpageButtonProps> = ({ onClick, children, className }) => (
  <button
    onClick={onClick}
    className={`bg-ocean-500 text-white hover:bg-ocean-300 px-4 py-2 rounded-full flex items-center space-x-2 ${className}`}
  >
    {children}
  </button>
);

export default MainpageButton;
