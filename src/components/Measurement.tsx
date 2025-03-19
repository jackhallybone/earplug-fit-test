import { useState, useEffect } from "react";

export default function Measurment({ onNextStep }: { onNextStep: () => void }) {
  const [clickCount, setClickCount] = useState(0);

  const requiredClicks = 3;

  const handleButtonClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    if (clickCount === 3) {
      onNextStep(); // Move to the next step after the 3rd click
    }
  }, [clickCount]);

  return (
    <div className="flex-1 flex flex-col items-center text-center justify-center space-y-6">
      <button
        onClick={handleButtonClick}
        className="bg-secondary dark:bg-primary text-primary dark:text-secondary font-semibold text-lg rounded px-4 py-2 cursor-pointer hover:underline underline-offset-4"
      >
        Respond
      </button>
      <p>
        Respones: {clickCount}/{requiredClicks}
      </p>
    </div>
  );
}
