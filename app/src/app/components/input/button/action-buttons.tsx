import { Button } from "./button";

const ActionButtons = () => {
    return (
        <div className="bg-white rounded-2xl p-4 mb-4 space-y-2">
            <Button classname="px-4 w-full py-2 rounded-full">文字・語彙</Button>
            <Button classname="px-4 w-full py-2 rounded-full">言語知識・読解</Button>
            <Button classname="px-4 w-full py-2 rounded-full">聴解</Button>
        </div>
    );
  };
  
  export default ActionButtons;
  