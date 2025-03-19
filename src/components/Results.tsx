export default function Measurment({ onNextStep }: { onNextStep: () => void }) {
  return (
    <div className="flex-1 flex flex-col items-center text-center justify-center space-y-6">
      <button
        onClick={onNextStep}
        className="bg-secondary dark:bg-primary text-primary dark:text-secondary font-semibold text-lg rounded px-4 py-2 cursor-pointer hover:underline underline-offset-4"
      >
        Restart
      </button>
    </div>
  );
}
