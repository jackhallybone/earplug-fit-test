export default function Information({
  onNextStep,
}: {
  onNextStep: () => void;
}) {
  return (
    <div className="flex-1 flex flex-col items-center text-center justify-center space-y-6">
      <p>Here is some more information about the test.</p>
      <p className="text-primary font-semibold">And a warning.</p>
      <button
        onClick={onNextStep}
        className="bg-secondary dark:bg-primary text-primary dark:text-secondary font-semibold text-lg rounded-lg border px-6 py-2 cursor-pointer underline underline-offset-4"
      >
        Okay
      </button>
    </div>
  );
}
