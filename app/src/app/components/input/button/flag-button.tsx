import { FaFontAwesomeFlag } from 'react-icons/fa';

const FlagButton = () => {
    return (
        <button className={`bg-white text-ocean-500 hover:bg-gray-200 px-4 py-2 rounded-full flex items-center space-x-2`}>
            <FaFontAwesomeFlag/>
            <h2>Flag</h2>
        </button>
    );
  };
  
  export default FlagButton;