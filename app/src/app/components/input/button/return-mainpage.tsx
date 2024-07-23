import { FaArrowLeft } from 'react-icons/fa';

const ReturnMainpage = () => {
    return (
        <a href='./jlpt-main' className="flex items-center space-x-2 text-ocean-600 hover:underline">
          <FaArrowLeft size={20} />
        <h2 className="text-lg font-semibold">Return to main page</h2>
      </a>
    );
  };
  
  export default ReturnMainpage;