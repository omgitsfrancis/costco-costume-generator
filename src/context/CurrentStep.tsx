import React, { createContext, useContext, useState } from "react";

interface CurrentStepContextProps {
  currentStep: number;
  setCurrentStep: (currentStep: number) => void;
}

interface CurrentStepProviderProps {
  children: React.ReactNode;
}

const CurrentStepContext = createContext<CurrentStepContextProps>({
  currentStep: 0,
  setCurrentStep: () => {},
});

function CurrentStepProvider({ children }: CurrentStepProviderProps) {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <CurrentStepContext.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </CurrentStepContext.Provider>
  );
}

function useCurrentStep() {
  const context = useContext(CurrentStepContext);

  if (context === undefined) {
    throw new Error("useCurrentStep must be used within a CurrentStepProvider");
  }
  return context;
}

export { CurrentStepProvider, useCurrentStep };
