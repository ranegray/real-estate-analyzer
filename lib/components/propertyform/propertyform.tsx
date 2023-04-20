import { useState } from "react";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";

export default function PropertyForm() {
  const [step, setStep] = useState(1);

  return (
    <div className="">
      {/* property details */}
      {step === 1 ? <Step1 step={step} setStep={setStep} /> : null}
      {/* mortgage details */}
      {step === 2 ? <Step2 step={step} setStep={setStep} /> : null}
      {/* expenses details */}
      {step === 3 ? <Step3 step={step} setStep={setStep} /> : null}
    </div>
  );
}
