// src/components/main/leaderboard.tsx

import React from 'react';
import UserRow from './user-row';
import Text from '../mainpage-text';
import { LeaderboardItem } from './leaderboard-item';

interface LeaderboardProps {
  data: LeaderboardItem[];
  getRowClass: (index: number) => string;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ data, getRowClass }) => (
  <div className="bg-white p-4 rounded-xl text-center">
    <Text className="text-ocean-600 font-bold text-xl">User Leaderboard</Text>
    <table className="w-full table-auto mt-4">
      <tbody>
        {data.map((user, index) => (
          <UserRow key={user.id} index={index} user={user} getRowClass={getRowClass} />
        ))}
      </tbody>
    </table>
  </div>
);

export default Leaderboard;
