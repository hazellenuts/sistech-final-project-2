import ActionButtons from '../../components/input/button/action-buttons';
import NavigationButtons from '../../components/input/button/navigation-button';
import QuestionBox from '../../components/card-jlpt/question-box';
import QuestionNavigator from '../../components/card-jlpt/question-navigator';
import TimeRemaining from '../../components/card-jlpt/time-remaining';
import Header from '../../components/header';
import ReturnMainpage from '../../components/input/button/return-mainpage';
import FlagButton from '../../components/input/button/flag-button';

const JLPTQuiz = () => {
  return (
    <div>
      <Header />
      <main className="pt-20 px-20 bg-off-white">
        <ReturnMainpage/>
        <div className='flex h-screen pt-2'>
            <div className="w-1/5 pr-4">
              <TimeRemaining />
              <ActionButtons />
              <QuestionNavigator />
            </div>
            <div className="w-4/5 pl-4">
              <QuestionBox />
              <div className='flex justify-between'>
                  <FlagButton/>
                  <NavigationButtons/>
              </div>
            
            </div>
        </div>
        
      </main>
    </div>
  );
};

export default JLPTQuiz;
