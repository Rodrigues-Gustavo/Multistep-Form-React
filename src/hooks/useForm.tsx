import { useState } from "react";

export function useForm(steps: JSX.Element[]) {
    const [currentStep, setCurrentStep] = useState(0);

    return {
        currentStep,
        currentComponent: steps[currentStep]
    }
}