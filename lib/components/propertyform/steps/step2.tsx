import { useState } from "react";
import Back from "../formbuttons/back";
import Continue from "../formbuttons/continue";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

// TODO move these to constants file
const regex = /^(?!(0|5|10|20)$)(\d|[1-9]\d|)$/;
const downPaymentList = ["0", "5", "10", "20", "Other"];

export default function Step2({
  step,
  setStep,
  step2,
  setStep2,
  handleSubmit,
}) {
  const [checked, setChecked] = useState(step2.downPayment);

  // toggle between paid with cash or not, will dim rest of form
  const toggleCashPayment = () => {
    setStep2({
      ...step2,
      cashPayment: !step2.cashPayment,
    });
  };

  // updates state from termLength and interestRate
  const handleChange = ({ target }) => {
    let name = target.name
    setStep2({
      ...step2,
      [name]: target.value,
    });
  };

  // next two handlers are for updating and synchronizing radio % buttons and downPayment input
  const handleInput = ({ target }) => {
    setStep2({
      ...step2,
      downPayment: target.value,
    });
    setChecked(target.value);
  };

  const handleRadio = ({ target }) => {
    setStep2({
      ...step2,
      downPayment: target.value,
    });
    setChecked(target.value);
  };

  // resets input and state when other is clicked
  const handleOther = () => {
    setStep2({
      ...step2,
      downPayment: "",
    });
    setChecked("");
  };

  return (
    <form className="m-3 flex flex-col" onSubmit={handleSubmit}>
      <div className="rounded-lg border border-neutral-700">
        <div className="h-2 w-full rounded-t-lg bg-black">
          <div className="h-2 w-8/12 rounded-r-lg rounded-tl-lg bg-neutral-700"></div>
        </div>
        <h2 className="border-b border-neutral-700 p-3 text-lg font-semibold">
          Mortgage Details
        </h2>
        <div className="border-b border-neutral-700 p-3">
          <input
            type="checkbox"
            id="cashPurchase"
            onChange={toggleCashPayment}
            className="peer hidden"
          />
          <label
            htmlFor="cashPurchase"
            className="inline-flex items-center rounded-lg border border-neutral-700 px-2 py-1 text-sm font-semibold transition ease-linear peer-checked:bg-white peer-checked:text-black"
          >
            Cash purchase
            {step2.cashPayment ? (
              // BUG when navigating back to page colors of icons are inverted
              <CheckIcon className="ml-1 h-4 w-4 stroke-2 text-black" />
            ) : (
              <XMarkIcon className="ml-1 h-4 w-4 stroke-2 text-white" />
            )}
          </label>
        </div>
        <div className="relative">
          <div
            className={`z-9 absolute h-full w-full cursor-pointer bg-neutral-800 opacity-75 ${
              step2.cashPayment ? "visible" : "invisible"
            }`}
          ></div>
          <div className="border-b border-neutral-700 p-3">
            <label htmlFor="" className="text-sm font-semibold">
              Down payment <span className="text-red-500">*</span>
            </label>
            <div className="flex pt-1">
              <input
                type="number"
                min={0}
                max={99}
                onChange={handleInput}
                name="downPayment"
                value={step2.downPayment}
                className="w-1/6 rounded-l border-y border-l border-neutral-700 bg-black px-1 focus:outline-none"
              />
              <span className="inline-flex rounded-r border border-neutral-700 bg-black px-2 text-neutral-400">
                %
              </span>
              <div className="flex-1"></div>
              <ul className="flex items-center text-sm">
                {downPaymentList.map((item) => {
                  return (
                    <li key={item}>
                      <input
                        type="radio"
                        name="downPayment"
                        id={item}
                        onChange={item === "Other" ? handleOther : handleRadio}
                        value={item === "Other" ? checked : item}
                        checked={
                          item === "Other"
                            ? regex.test(checked)
                            : checked === item
                        }
                        className="peer hidden"
                      />
                      <label
                        htmlFor={item}
                        className={`${item === "0" ? "rounded-l" : ""} ${
                          item === "Other" ? "rounded-r" : ""
                        } border-collapse border border-neutral-700 px-1.5 py-1 text-neutral-400 transition ease-linear peer-checked:bg-neutral-700 peer-checked:text-white`}
                      >
                        {item === "Other" ? item : `${item}%`}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="border-b border-neutral-700 p-3">
            <label htmlFor="" className="text-sm font-semibold">
              Interest rate <span className="text-red-500">*</span>
            </label>
            <div className="flex pt-1">
              <input
                type="number"
                step={0.01}
                onChange={handleChange}
                value={step2.interestRate}
                name="interestRate"
                className="w-1/6 rounded-l border-y border-l border-neutral-700 bg-black px-1 focus:outline-none"
              />
              <span className="inline-flex rounded-r border border-neutral-700 bg-black px-2 text-neutral-400">
                %
              </span>
            </div>
          </div>
          <div className="p-3">
            <label htmlFor="" className="text-sm font-semibold">
              Loan length <span className="text-red-500">*</span>
            </label>
            <div className="flex pt-1">
              <ul className="flex items-center text-sm">
                <li>
                  <input
                    type="radio"
                    name="termYears"
                    id="fifteen_length"
                    onChange={handleChange}
                    checked={step2.termYears === "15"}
                    value="15"
                    className="peer hidden"
                  />
                  <label
                    htmlFor="fifteen_length"
                    className="rounded-l border border-r-0 border-neutral-700 px-1.5 py-1 text-neutral-400 transition ease-linear peer-checked:bg-neutral-700 peer-checked:text-white"
                  >
                    15 yrs
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="termYears"
                    id="thirty_length"
                    onChange={handleChange}
                    checked={step2.termYears === "30"}
                    value="30"
                    className="peer hidden"
                  />
                  <label
                    htmlFor="thirty_length"
                    className="rounded-r border border-neutral-700 px-1.5 py-1 text-neutral-400 transition ease-linear peer-checked:bg-neutral-700 peer-checked:text-white"
                  >
                    30 yrs
                  </label>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between border-t border-neutral-700 p-3">
          <Back step={step} setStep={setStep} />
          <Continue step={step} setStep={setStep} />
        </div>
      </div>
    </form>
  );
}
