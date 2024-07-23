'use client'; // Menandai komponen ini sebagai Client Component

import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface CardProps {
  testName: string;
  buttonText: string;
  showHistory: boolean;
}

const Card: React.FC<CardProps> = ({ testName, buttonText, showHistory }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const getStatus = (points: number) => {
    return points <= 60 ? 'Failed' : 'Passed';
  };

  const test1History = [
    { date: '10 January, 2020', time: '10:00 AM', points: 85 },
    { date: '29 December, 2019', time: '09:00 AM', points: 50 },
  ];

  const test2History = [
    { date: '20 January, 2020', time: '10:00 AM', points: 90 },
    { date: '16 January, 2020', time: '09:30 AM', points: 60 },
    { date: '8 January, 2020', time: '08:00 AM', points: 50 },
  ];

  let historyData: any[] = [];

  if (testName === 'Test 1') {
    historyData = test1History;
  } else if (testName === 'Test 2') {
    historyData = test2History;
  }

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="bg-white p-4 rounded-2xl mb-4 w-full px-6">
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-gray-800">{testName}</span>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleNavigation('/jlpt-test/jlpt-quiz')} // Ganti dengan path yang benar
            className="bg-ocean-500 text-white hover:bg-ocean-300 px-4 py-2 rounded-full flex items-center space-x-2"
          >
            <h2>{buttonText}</h2>
          </button>
          <button onClick={toggleDropdown} className="text-gray-700">
            {isDropdownOpen ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
          </button>
        </div>
      </div>
      {isDropdownOpen && showHistory && (
        <div className="mt-4">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className='text-gray-300 text-left'>Date</th>
                <th className='text-gray-300 text-center'>Time</th>
                <th className='text-gray-300 text-center'>Status</th>
                <th className='text-gray-300 text-center'>Points</th>
              </tr>
            </thead>
            <tbody>
              {historyData.length > 0 ? (
                historyData.map((record, index) => (
                  <tr key={index}>
                    <td className='text-gray-800'>{record.date}</td>
                    <td className='text-gray-800 text-center'>{record.time}</td>
                    <td className='flex justify-center'>
                      <div
                        className={`inline-block px-4 py-1 rounded-full ${
                          getStatus(record.points) === 'Passed' ? 'bg-success text-white' : 'bg-danger text-white'
                        }`}
                      >
                        {getStatus(record.points)}
                      </div>
                    </td>
                    <td className='text-gray-800 text-center'>{record.points}/180</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className='text-gray-800 py-10 text-center'>No history available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Card;
