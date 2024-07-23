import React from 'react';
import Header from '../../components/header';

const JLPTMainpage = () => {
  return (
    <div>
      <Header />
      <main>
        <div className='flex flex-col w-screen h-screen'>
          <div className="bg-gray-200 h-2/6">
            <h1 className='text-center pt-20 text-2xl font-bold text-gray-800'>JLPT Test</h1>
            <h2 className='pt-6 text-center text-gray-400'>
              <span className='font-bold'>
                JLPT stands for Japanese Language Proficiency Test and it is<br/>
                important to take for further education or for work.
              </span><br/><br/>
              Let’s familiarize ourselves with the questions
            </h2>
          </div>
          <div className="bg-white h-4/6 pt-16 flex items-center justify-center relative">
            <div className='relative bg-path w-full h-full bg-no-repeat flex items-center justify-center'>
              <a
                href="/jlpt-test/jlpt-quiz"
                className={`bg-ocean-500 text-white hover:bg-ocean-300 px-8 py-6 rounded-xl absolute top-0 left-20`}
              >
                N1
              </a>
              <a
                href="/jlpt-test/jlpt-quiz"
                className={`bg-ocean-500 text-white hover:bg-ocean-300 px-8 py-6 rounded-xl absolute top-0 right-30`}
              >
                N2
              </a>
              <a
                href="/jlpt-test/jlpt-quiz"
                className={`bg-ocean-500 text-white hover:bg-ocean-300 px-8 py-6 rounded-xl absolute bottom-72 right-80`}
              >
                N3
              </a>
              <a
                href="/jlpt-test/jlpt-quiz"
                className={`bg-ocean-500 text-white hover:bg-ocean-300 px-8 py-6 rounded-xl absolute bottom-72 left-60`}
              >
                N4
              </a>
              <a
                href="/jlpt-test/jlpt-quiz"
                className={`bg-ocean-500 text-white hover:bg-ocean-300 px-8 py-6 rounded-xl absolute bottom-40 right-40`}
              >
                N5
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JLPTMainpage;
