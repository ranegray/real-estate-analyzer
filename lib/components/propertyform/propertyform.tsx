import { useState } from "react";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";

export default function PropertyForm() {
  const [step, setStep] = useState(1);
  const [propertyDetails, setPropertyDetails] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    postcode: "",
    purchasePrice: "",
    closingCost: "",
    rentalIncome: "",
    appreciationRate: "",
  });
  const [mortgageDetails, setMortgageDetails] = useState({
    cashPayment: false,
    downPayment: "20",
    interestRate: "",
    termYears: "30",
  });
  const [expenseDetails, setExpenseDetails] = useState({
    propertyTaxes: "",
    insurance: "",
    hoaFees: "",
    electricity: "",
    waterAndSewer: "",
    gas: "",
    garbage: "",
    repairs: "5",
    vacancy: "5",
    capitalExpend: "5",
    managementFees: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!form.checkValidity()) {
    //   return;
    // }

    // const form = e.target;
    // const formData = new FormData(form);

    if (step === 1 ||  step === 2) {
      setStep(step + 1);
    } else {
      // add fetch to post data to api endpoint
    }
  };

  return (
    <div className="m-auto sm:w-[640px]">
      {/* property details */}
      {step === 1 ? (
        <Step1
          step={step}
          setStep={setStep}
          handleSubmit={handleSubmit}
          propertyDetails={propertyDetails}
          setPropertyDetails={setPropertyDetails}
        />
      ) : null}
      {/* mortgage details */}
      {step === 2 ? (
        <Step2
          step={step}
          setStep={setStep}
          handleSubmit={handleSubmit}
          mortgageDetails={mortgageDetails}
          setMortgageDetails={setMortgageDetails}
        />
      ) : null}
      {/* expenses details */}
      {step === 3 ? (
        <Step3
          step={step}
          setStep={setStep}
          handleSubmit={handleSubmit}
          expenseDetails={expenseDetails}
          setExpenseDetails={setExpenseDetails}
        />
      ) : null}
    </div>
  );
}
