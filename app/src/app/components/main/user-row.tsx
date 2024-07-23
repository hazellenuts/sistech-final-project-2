// src/components/main/user-row.tsx

import React from 'react';
import Image from 'next/image';
import { LeaderboardItem } from './leaderboard-item';

interface UserRowProps {
  index: number;
  user: LeaderboardItem; // Updated to use LeaderboardItem
  getRowClass: (index: number) => string;
}

const UserRow: React.FC<UserRowProps> = ({ index, user, getRowClass }) => (
  <tr key={user.id} className={getRowClass(index)}>
    <td className="px-4 py-2">{index + 1}</td>
    <td className="py-2">
      <div className="w-10 h-10 rounded-full overflow-hidden mx-auto border-white border-2">
        <Image
          src={user.photo}
          alt={user.name}
          width={40}
          height={40}
          className="object-cover"
        />
      </div>
    </td>
    <td className="px-4 py-2 w-full text-left">{user.name}</td>
    <td className="px-4 py-2">{user.points}</td>
  </tr>
);

export default UserRow;
