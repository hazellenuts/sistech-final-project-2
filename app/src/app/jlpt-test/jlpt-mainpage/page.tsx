'use client';
import { useRouter } from 'next/navigation';
import Header from '@/app/components/header';

const JLPTMainpage = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div>
      <Header />
      <main>
        <div className='flex flex-col w-screen h-screen'>
          <div className="bg-gray-200 h-2/6">
            <h1 className='text-center pt-20 text-2xl font-bold text-gray-800'>JLPT Test</h1>
            <h2 className='pt-6 text-center text-gray-400'>
              <span className='font-bold'>JLPT stands for Japanese Language Proficiency Test and it is<br/>important to take for further education or for work. 
              </span><br/><br/>Let’s familiarize ourselves with the questions
            </h2>
          </div>
          <div className="bg-white h-4/6 pt-16 items-center justify-center flex">
            <div className='relative bg-path w-full h-full bg-no-repeat justify-center items-center text-center'></div>
            <button onClick={() => handleNavigation('/jlpt-test/jlpt-quiz')} className={`bg-ocean-500 text-white hover:bg-ocean-300 px-8 py-6 rounded-xl absolute top-20 mt-56 left-80 ml-20`}>
              N1
            </button>
            <button onClick={() => handleNavigation('/jlpt-test/jlpt-quiz')} className={`bg-ocean-500 text-white hover:bg-ocean-300 px-8 py-6 rounded-xl absolute top-20 mt-56 right-80 mr-20`}>
              N2
            </button>
            <button onClick={() => handleNavigation('/jlpt-test/jlpt-quiz')} className={`bg-ocean-500 text-white hover:bg-ocean-300 px-8 py-6 rounded-xl absolute bottom-60 mb-10 right-80 mr-80`}>
              N3
            </button>
            <button onClick={() => handleNavigation('/jlpt-test/jlpt-quiz')} className={`bg-ocean-500 text-white hover:bg-ocean-300 px-8 py-6 rounded-xl absolute bottom-20 mb-20 left-60 mr-60`}>
              N4
            </button>
            <button onClick={() => handleNavigation('/jlpt-test/jlpt-quiz')} className={`bg-ocean-500 text-white hover:bg-ocean-300 px-8 py-6 rounded-xl absolute bottom-20 mb-20 right-40 mr-0`}>
              N5
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JLPTMainpage;
