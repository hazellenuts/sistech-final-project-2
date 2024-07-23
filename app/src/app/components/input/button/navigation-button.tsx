'use client';

import { useRouter } from 'next/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const NavigationButtons = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex space-x-2">
      {/* Tombol Previous */}
      <button
        onClick={() => handleNavigation('/previous-page')} // Ganti '/previous-page' dengan path yang sesuai
        className="bg-ocean-500 text-white hover:bg-ocean-300 px-4 py-2 rounded-full flex items-center space-x-2"
      >
        <FaArrowLeft />
        <h2>Previous</h2>
      </button>

      {/* Tombol Next */}
      <button
        onClick={() => handleNavigation('/jlpt-test/jlpt-result')} // Ganti '/jlpt-quiz' dengan path yang sesuai
        className="bg-ocean-500 text-white hover:bg-ocean-300 px-4 py-2 rounded-full flex items-center space-x-2"
      >
        <FaArrowRight />
        <h2>Next</h2>
      </button>
    </div>
  );
};

export default NavigationButtons;
