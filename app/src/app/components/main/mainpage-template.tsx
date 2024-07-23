// src/components/main/mainpage-template.tsx

import React from 'react';
import Leaderboard from './leaderboard';
import Button from '../input/button/mainpage-button';
import Text from '../mainpage-text';
import { LeaderboardItem } from './leaderboard-item';
import Header from '../header';

interface MainPageTemplateProps {
  handleNavigation: (path: string) => void;
  leaderboardData: LeaderboardItem[];
  getRowClass: (index: number) => string;
}

const MainPageTemplate: React.FC<MainPageTemplateProps> = ({ handleNavigation, leaderboardData, getRowClass }) => (
  <div className="bg-gray-200">
    <Header />
    <main className="bg-main h-screen bg-contain flex justify-between pt-28">
      <div className="flex flex-col w-3/5">
        <div className="ml-32 flex flex-col space-y-2">
          <Text className="text-roseate font-bold text-6xl">日本語</Text>
          <Text className="text-ocean-600 font-bold text-4xl">Origami of Language</Text>
          <Text className="text-gray-800 text-xl">
            Fold and shape your understanding of<br />Japanese, crafting mastery with<br />each lesson
          </Text>
        </div>
        <div className="absolute bg-white p-20 pl-32 rounded-tr-3xl text-gray-800 bottom-12">
          <b>/ni'hɔŋ.goʊ/</b><br /><br /><i>noun</i><br />
          A dynamic application designed for learning the Japanese language,<br />where users can enhance their linguistic skills through interactive activities<br />such as reading news articles, watching educational videos,<br />and completing various exercises aimed at both beginners and<br />advanced learners.
        </div>
      </div>
      <div className="w-2/5 mr-24 flex flex-col space-y-4">
        <Leaderboard data={leaderboardData} getRowClass={getRowClass} />
        <div className="space-y-4 bg-white p-4 rounded-xl text-center justify-center flex flex-col items-center">
          <Text className="text-ocean-600 text-lg">Looking to see your name<br />at the top of the leaderboard?</Text>
          <Button onClick={() => handleNavigation('/mini-quiz')} className="px-6 font-bold text-xl">
            Play Mini Quiz
          </Button>
        </div>
      </div>
    </main>
  </div>
);

export default MainPageTemplate;
