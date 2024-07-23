// src/app/components/header/UserMenu.tsx

'use client'; // Menandai komponen ini sebagai Client Component
import { FaAngleDown } from 'react-icons/fa';
const UserMenu = () => {

  return (
    <div className="flex items-center space-x-2">
      <span className="text-lg text-gray-800 font-bold">こんにちは, Ame!</span>
      <FaAngleDown size={24} className='text-gray-800' />
    </div>
  );
};

export default UserMenu;
