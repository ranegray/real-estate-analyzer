import { useState } from "react";
import Back from "../formbuttons/back";
import Continue from "../formbuttons/continue";

export default function Step2({ step, setStep, formData, handleSubmit }) {
  const [downPayment, setDownPayment] = useState()

  return (
    <form className="m-3 flex flex-col" onSubmit={handleSubmit}>
      <div className="rounded-lg border border-neutral-700">
        <div className="h-2 w-full rounded-t-lg bg-black">
          <div className="h-2 w-8/12 rounded-tl-lg rounded-r-lg bg-neutral-700"></div>
        </div>
        <h2 className="border-b border-neutral-700 p-3 text-lg font-semibold">
          Mortgage Details
        </h2>
        <div className="border-b border-neutral-700 p-3">
          <label htmlFor="" className="text-sm font-semibold">
            Cash purchase?
          </label>
          <input
            type="checkbox"
            className=" ml-2 h-4 w-4 border border-neutral-700 bg-black text-black"
          />
        </div>
        <div className="border-b border-neutral-700 p-3">
          <label htmlFor="" className="text-sm font-semibold">
            Down payment <span className="text-red-500">*</span>
          </label>
          <div className="flex pt-1">
            <input
              type="number"
              onChange={({ target }) => setDownPayment(target.value)}
              name="downPayment"
              value={downPayment}
              className="w-1/6 rounded-l border-y border-l border-neutral-700 bg-black px-1 focus:outline-none"
            />
            <span className="inline-flex rounded-r border border-neutral-700 bg-black px-2 text-neutral-400">
              %
            </span>

            <div className="flex-1"></div>

            <ul className="flex items-center text-sm">
              <li>
                <input
                  type="radio"
                  name="downPayment"
                  id="zero"
                  onChange={() => setDownPayment(0)}
                  checked={downPayment === 0 ? true : false}
                  className="peer hidden"
                />
                <label
                  htmlFor="zero"
                  className="rounded-l border border-neutral-700 px-1.5 py-1 text-neutral-400 transition ease-linear peer-checked:bg-neutral-700 peer-checked:text-white"
                >
                  0%
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="downPayment"
                  id="five"
                  onChange={() => setDownPayment(5)}
                  checked={downPayment === 5 ? true : false}
                  className="peer hidden"
                />
                <label
                  htmlFor="five"
                  className="border-y border-neutral-700 px-1.5 py-1 text-neutral-400 transition ease-linear peer-checked:bg-neutral-700 peer-checked:text-white"
                >
                  5%
                </label>{" "}
              </li>
              <li>
                <input
                  type="radio"
                  name="downPayment"
                  id="fifteen"
                  onChange={() => setDownPayment(15)}
                  checked={downPayment === 15 ? true : false}
                  className="peer hidden"
                />
                <label
                  htmlFor="fifteen"
                  className="border border-neutral-700 px-1.5 py-1 text-neutral-400 transition ease-linear peer-checked:bg-neutral-700 peer-checked:text-white"
                >
                  15%
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="downPayment"
                  id="twenty"
                  onChange={() => setDownPayment(20)}
                  checked={downPayment === 20 ? true : false}
                  className="peer hidden"
                />
                <label
                  htmlFor="twenty"
                  className="border-y border-neutral-700 px-1.5 py-1 text-neutral-400 transition ease-linear peer-checked:bg-neutral-700 peer-checked:text-white"
                >
                  20%
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="downPayment"
                  id="other"
                  className="peer hidden"
                />
                <label
                  htmlFor="other"
                  className="rounded-r border border-neutral-700 px-1.5 py-1 text-neutral-400 transition ease-linear peer-checked:bg-neutral-700 peer-checked:text-white"
                >
                  Other
                </label>
              </li>
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
                  value={15}
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
                  defaultChecked
                  value={30}
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
        <div className="flex justify-between border-t border-neutral-700 p-3">
          <Back step={step} setStep={setStep} />
          <Continue step={step} setStep={setStep} />
        </div>
      </div>
    </form>
  );
}
