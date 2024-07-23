'use client'; // Add this line to mark the component as a Client Component

import { useState } from 'react';
import Header from '../components/header';

const questions = [
  {
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
    answer: "Tokyo"
  },
  {
    question: "What is the largest city in Japan?",
    options: ["Tokyo", "Osaka", "Kyoto", "Nagoya"],
    answer: "Tokyo"
  },
  // Add more questions here
];

const MiniQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);

  // Calculate progress based on answered questions
  const progress = (answeredQuestions.length / questions.length) * 100;

  const handleNext = () => {
    if (!answeredQuestions.includes(currentQuestion)) {
      setAnsweredQuestions([...answeredQuestions, currentQuestion]);
    }
    setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1));
    setSelectedOption('');
    setIsChecked(false);
  };

  const handlePrevious = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
    setSelectedOption('');
    setIsChecked(false);
  };

  const handleCheck = () => {
    setIsChecked(true);
    if (!answeredQuestions.includes(currentQuestion)) {
      setAnsweredQuestions([...answeredQuestions, currentQuestion]);
    }
  };

  return (
    <div>
      {/* Header */}
      
      <Header />
      <main className="p-0 bg-off-white h-screen flex flex-col items-center z-0">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-quiz bg-cover bg-center z-0"></div>

        {/* Quiz Container */}
        <div className="relative flex flex-col items-center w-full h-full z-10 pt-32">
          <div className="w-full max-w-lg p-8 bg-white rounded-xl shadow-md">
            {/* Progress Bar */}
            <div className="relative w-full h-4 bg-gray-200 rounded-full mb-6">
              <div
                className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            {/* Question */}
            <p className="text-xl text-gray-800 font-bold mb-4">{questions[currentQuestion].question}</p>
            
            {/* Options */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedOption(option)}
                  className={`px-4 py-2 rounded border ${selectedOption === option ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                  {option}
                </button>
              ))}
            </div>
            
            {/* Check Button */}
            <button
              onClick={handleCheck}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Check
            </button>

            <div className="flex justify-between mt-6">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="px-4 py-2 bg-gray-400 text-white rounded disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={currentQuestion === questions.length - 1}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MiniQuiz;
