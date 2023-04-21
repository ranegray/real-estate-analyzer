import Back from "../formbuttons/back";
import Submit from "../formbuttons/submit";

export default function Step3({ step, setStep, formData, setFormData }) {
  return (
    <form className="m-3 flex flex-col">
      <div className="rounded-lg border border-neutral-700">
        <div className="h-2 w-full rounded-t-lg bg-black">
          <div className="h-2 w-11/12 rounded-tl-lg rounded-r-lg bg-neutral-700"></div>
        </div>
        <h2 className="border-b border-neutral-700 p-3 text-lg font-semibold">
          Expenses
        </h2>

        <div className="border-b border-neutral-700 p-3">
          <label htmlFor="" className="text-sm font-semibold">
            Property taxes <span className="text-md text-red-500">*</span>
          </label>
          <div className="flex pt-1">
            <span className="inline-flex rounded-l border border-neutral-700 bg-black px-2 text-neutral-400">
              $
            </span>
            <input
              type="number"
              className="w-1/4 border-b border-t border-b-neutral-700 border-t-neutral-700 bg-black px-1 focus:outline-none"
            />
            <span className="inline-flex rounded-r border border-neutral-700 bg-black px-2 text-neutral-400">
              / year
            </span>
          </div>
        </div>

        <div className="border-b border-neutral-700 p-3">
          <label htmlFor="" className="text-sm font-semibold">
            Insurance <span className="text-red-500">*</span>
          </label>
          <div className="flex pt-1">
            <span className="inline-flex rounded-l border border-neutral-700 bg-black px-2 text-neutral-400">
              $
            </span>
            <input
              type="number"
              className="w-1/4 border-b border-t border-b-neutral-700 border-t-neutral-700 bg-black px-1 focus:outline-none"
            />
            <span className="inline-flex rounded-r border border-neutral-700 bg-black px-2 text-neutral-400">
              / year
            </span>
          </div>
        </div>

        <div className="border-b border-neutral-700 p-3">
          <label htmlFor="" className="text-sm font-semibold">
            HOA fees
          </label>
          <div className="flex pt-1">
            <span className="inline-flex rounded-l border border-neutral-700 bg-black px-2 text-neutral-400">
              $
            </span>
            <input
              type="number"
              className="w-1/4 border-b border-t border-b-neutral-700 border-t-neutral-700 bg-black px-1 focus:outline-none"
            />
            <span className="inline-flex rounded-r border border-neutral-700 bg-black px-2 text-neutral-400">
              / month
            </span>
          </div>
        </div>

        <div className="border-b border-neutral-700 p-3">
          <label htmlFor="" className="text-sm font-semibold">
            Electricity
          </label>
          <div className="flex pt-1">
            <span className="inline-flex rounded-l border border-neutral-700 bg-black px-2 text-neutral-400">
              $
            </span>
            <input
              type="number"
              className="w-1/4 border-b border-t border-b-neutral-700 border-t-neutral-700 bg-black px-1 focus:outline-none"
            />
            <span className="inline-flex rounded-r border border-neutral-700 bg-black px-2 text-neutral-400">
              / month
            </span>
          </div>
        </div>

        <div className="border-b border-neutral-700 p-3">
          <label htmlFor="" className="text-sm font-semibold">
            Water & sewer
          </label>
          <div className="flex pt-1">
            <span className="inline-flex rounded-l border border-neutral-700 bg-black px-2 text-neutral-400">
              $
            </span>
            <input
              type="number"
              className="w-1/4 border-b border-t border-b-neutral-700 border-t-neutral-700 bg-black px-1 focus:outline-none"
            />
            <span className="inline-flex rounded-r border border-neutral-700 bg-black px-2 text-neutral-400">
              / month
            </span>
          </div>
        </div>

        <div className="border-b border-neutral-700 p-3">
          <label htmlFor="" className="text-sm font-semibold">
            Gas
          </label>
          <div className="flex pt-1">
            <span className="inline-flex rounded-l border border-neutral-700 bg-black px-2 text-neutral-400">
              $
            </span>
            <input
              type="number"
              className="w-1/4 border-b border-t border-b-neutral-700 border-t-neutral-700 bg-black px-1 focus:outline-none"
            />
            <span className="inline-flex rounded-r border border-neutral-700 bg-black px-2 text-neutral-400">
              / month
            </span>
          </div>
        </div>

        <div className="border-b border-neutral-700 p-3">
          <label htmlFor="" className="text-sm font-semibold">
            Garbage
          </label>
          <div className="flex pt-1">
            <span className="inline-flex rounded-l border border-neutral-700 bg-black px-2 text-neutral-400">
              $
            </span>
            <input
              type="number"
              className="w-1/4 border-b border-t border-b-neutral-700 border-t-neutral-700 bg-black px-1 focus:outline-none"
            />
            <span className="inline-flex rounded-r border border-neutral-700 bg-black px-2 text-neutral-400">
              / month
            </span>
          </div>
        </div>
      </div>

      <div className="my-3 p-2 text-sm text-neutral-300">
        <p>
          Maintenance, vacancy, capital expenditures, and management fees are
          expressed as percentages of gross monthly income.
        </p>
      </div>

      <div className="rounded-lg border border-neutral-700">
        <div className="border-b border-neutral-700 p-3">
          <label htmlFor="" className="text-sm font-semibold">
            Repairs & maintenance
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
            Vacancy
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
            Capital expenditures
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
            Management fees
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
        <div className="flex justify-between border-t border-neutral-700 p-3">
          <Back step={step} setStep={setStep} />
          <Submit />
        </div>
      </div>
    </form>
  );
}
