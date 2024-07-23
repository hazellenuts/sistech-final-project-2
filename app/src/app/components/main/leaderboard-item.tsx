// src/components/main/leaderboard-item.ts

import { StaticImageData } from 'next/image';

export interface LeaderboardItem {
  id: number;
  name: string;
  points: number;
  photo: StaticImageData; // Use StaticImageData for static images
}
