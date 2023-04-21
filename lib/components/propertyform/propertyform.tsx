import { useState } from "react";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";

export default function PropertyForm() {
  const [step, setStep] = useState(1);
  const [step1, setStep1] = useState({})
  const [step2, setStep2] = useState({})
  const [step3, setStep3] = useState({})

  const handleSubmit = (formData) => {

  }

  return (
    <div className="">
      {/* property details */}
      {step === 1 ? <Step1 step={step} setStep={setStep} formData={step1} setFormData={setStep1} /> : null}
      {/* mortgage details */}
      {step === 2 ? <Step2 step={step} setStep={setStep} formData={step2} setFormData={setStep2} /> : null}
      {/* expenses details */}
      {step === 3 ? <Step3 step={step} setStep={setStep} formData={step3} setFormData={setStep3} /> : null}
    </div>
  );
}
