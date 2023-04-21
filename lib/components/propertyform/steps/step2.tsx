import Back from "../formbuttons/back";
import Continue from "../formbuttons/continue";

export default function Step2({ step, setStep }) {
  return (
    <form className="m-3 flex flex-col">
      <div className="rounded-lg border border-neutral-700">
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
              className="w-1/6 rounded-l border-y border-l border-neutral-700 bg-black px-1 focus:outline-none"
            />
            <span className="inline-flex rounded-r border border-neutral-700 bg-black px-2 text-neutral-400">
              %
            </span>
          </div>
        </div>
        <div className="border-b border-neutral-700 p-3">
          <label htmlFor="" className="text-sm font-semibold">
            Interest rate <span className="text-red-500">*</span>
          </label>
          <div className="flex pt-1">
            <input
              type="number"
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
            <input
              type="number"
              className="w-1/4 rounded-l border-y border-l border-neutral-700 bg-black px-1 focus:outline-none"
            />
            <span className="inline-flex rounded-r border border-neutral-700 bg-black px-2 text-neutral-400">
              years
            </span>
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
