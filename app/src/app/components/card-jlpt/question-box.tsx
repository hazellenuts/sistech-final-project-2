const QuestionBox = () => {
  return (
    <div className="bg-white rounded-2xl p-4 mb-4">
      <h2 className="text-lg font-bold text-gray-800 text-center">Question number 1</h2>
      <p className="py-2 text-gray-800">
        問題1：____ の ことばは ひらがなで どう かきますか。1・2・3・4から いちばん いいものを ひとつ えらんで ください。<br/><br/>にほんごの 先生 が すきです。
      </p>
      <div className="space-y-2 pt-4">
        <div className="flex items-center space-x-2">
          <input type="radio" id="optionA" name="question1" value="A" className="form-radio text-ocean-500 w-6 h-6" />
          <label htmlFor="optionA" className="text-gray-800">せんせい</label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="radio" id="optionB" name="question1" value="B" className="form-radio text-ocean-500 w-6 h-6" />
          <label htmlFor="optionB" className="text-gray-800">せんせえ</label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="radio" id="optionC" name="question1" value="C" className="form-radio text-ocean-500 w-6 h-6" />
          <label htmlFor="optionC" className="text-gray-800">せいせん</label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="radio" id="optionD" name="question1" value="D" className="form-radio text-ocean-500 w-6 h-6" />
          <label htmlFor="optionD" className="text-gray-800">せんせ</label>
        </div>
      </div>
    </div>
  );
};

export default QuestionBox;
