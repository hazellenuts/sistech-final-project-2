// src/pages/mainpage.tsx

'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import MainPageTemplate from '../components/main/mainpage-template';
import profile from '../../../public/profile.jpg';
import { LeaderboardItem } from '../components/main/leaderboard-item';

const MainPage: React.FC = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const leaderboardData: LeaderboardItem[] = [
    { id: 1, name: 'Alice', points: 1500, photo: profile },
    { id: 2, name: 'Bob', points: 1400, photo: profile },
    { id: 3, name: 'Charlie', points: 1300, photo: profile },
    { id: 4, name: 'David', points: 1200, photo: profile },
    { id: 5, name: 'Eve', points: 1100, photo: profile },
  ];

  const getRowClass = (index: number) => {
    switch (index) {
      case 0:
        return 'bg-pink-800 text-white';
      case 1:
        return 'bg-pink-600 text-white';
      case 2:
        return 'bg-pink-400 text-white';
      default:
        return 'bg-white text-gray-800';
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <MainPageTemplate 
      handleNavigation={handleNavigation}
      leaderboardData={leaderboardData}
      getRowClass={getRowClass}
    />
  );
};

export default MainPage;
