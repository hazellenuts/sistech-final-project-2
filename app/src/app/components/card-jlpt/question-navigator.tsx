const QuestionNavigator = () => {
    return (
      <div className="bg-white rounded-2xl p-4 mb-4">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <button key={i} className="w-full h-12 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300">
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default QuestionNavigator;
  