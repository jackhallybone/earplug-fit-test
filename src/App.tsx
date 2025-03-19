import { useState } from "react";

import Welcome from "./components/Welcome";
import Information from "./components/Information";
import Measurement from "./components/Measurement";
import Results from "./components/Results";

function App() {
  const stepComponents = [Welcome, Information, Measurement, Results];
  const [step, setStep] = useState<number>(0);

  const nextStep = () => {
    setStep((prevStep) => (prevStep + 1) % stepComponents.length);
  };

  const CurrentStepComponent = stepComponents[step];

  return (
    <div className="flex flex-col min-h-screen p-2">
      <header className="flex justify-center">
        <div className="bg-secondary dark:bg-primary text-primary dark:text-secondary p-6 rounded-lg max-w-5xl">
          <h1 className="text-2xl font-semibold">Online Earplug Fit Test</h1>
          <p className="mt-2">
            A quick (uncalibrated) earplug fit test using headphones over the
            earplug too estimate performance. Insert the earplugs following the
            manufacturer's instructions, put headphones on over the top, and
            respond using the buttons or keyboard when you hear a sound.
          </p>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        <CurrentStepComponent onNextStep={nextStep} />
      </main>

      <footer className="flex justify-center text-sm">
        <a
          href="https://github.com/jackhallybone"
          className="underline underline-offset-2 text-secondary hover:text-primary"
        >
          github.com/jackhallybone
        </a>
      </footer>
    </div>
  );
}

export default App;
