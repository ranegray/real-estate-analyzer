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
    downPayment: 20,
    interestRate: "",
    termYears: 30,
  });
  const [expenseDetails, setExpenseDetails] = useState({
    propertyTaxes: "",
    insurance: "",
    hoaFees: "",
    electricity: "",
    waterAndSewer: "",
    gas: "",
    garbage: "",
    repairs: "",
    vacancy: "",
    capitalExpend: "",
    managementFees: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const createProperty = (data) => {
      fetch("/api/property", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    };

    if (step === 1) {
      setStep(step + 1);
    } else if (step === 2) {
      setStep(step + 1);
    } else {
      let formData = {
        propertyDetails,
        mortgageDetails,
        expenseDetails,
      };

      createProperty(formData);
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
