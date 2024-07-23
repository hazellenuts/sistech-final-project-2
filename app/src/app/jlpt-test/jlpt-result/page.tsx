import Header from '../../components/header';
import Card from '../../components/card-jlpt/card';
import ReturnMainpage from '../../components/input/button/return-mainpage';

const JLPTResult = () => {
  return (
    <div>
      <Header />
      <main className="p-0 bg-off-white">
        <div className="flex flex-col items-center pt-32 pb-6 bg-jlpt-header bg-cover bg-center">
          <h1 className="text-3xl font-bold text-center text-gray-800">JLPT N1</h1>
        </div>
        <div className="px-20 pb-24">
          <div className='flex justify-between'>
            <h1 className="text-ocean-600 text-xl py-6 font-bold">Your Score</h1>
            <ReturnMainpage/>
          </div>
          
          <Card testName="Test 1" buttonText="retest" showHistory={true} />
          <Card testName="Test 2" buttonText="retest" showHistory={true} />
          <Card testName="Test 3" buttonText="start" showHistory={true} />
          <Card testName="Test 4" buttonText="start" showHistory={true} />
          <Card testName="Test 5" buttonText="start" showHistory={true} />
          <Card testName="Test 6" buttonText="start" showHistory={true} />
          <Card testName="Test 7" buttonText="start" showHistory={true} />
        </div>
      </main>
    </div>
  );
};

export default JLPTResult;
