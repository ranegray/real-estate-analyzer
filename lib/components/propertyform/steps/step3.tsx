import Back from "../formbuttons/back";
import Submit from "../formbuttons/submit";

export default function Step3({ step, setStep }) {
  return (
    <form className="flex flex-col m-3">

      <div className="border border-neutral-700 rounded-lg">
        
        <h2 className="text-lg font-semibold border-b border-neutral-700 p-3">Expenses</h2>

        <div className="p-3 border-b border-neutral-700">
          <label htmlFor="" className="text-sm font-semibold">
            Property taxes <span className="text-red-500 text-md">*</span>
          </label>
          <div className="flex pt-1">
            <span className="inline-flex rounded-l bg-black px-2 border border-neutral-700 text-neutral-400">
              $
            </span>
            <input type="number" className="w-1/4 px-1 bg-black border-t border-b border-t-neutral-700 border-b-neutral-700 focus:outline-none" />
            <span className="inline-flex rounded-r bg-black border border-neutral-700 px-2 text-neutral-400">
              / year
            </span>
          </div>
        </div>

        <div className="p-3 border-b border-neutral-700">
          <label htmlFor="" className="text-sm font-semibold">
            Insurance <span className="text-red-500">*</span>
          </label>
          <div className="flex pt-1">
            <span className="inline-flex rounded-l bg-black px-2 border border-neutral-700 text-neutral-400">
              $
            </span>
            <input type="number" className="w-1/4 px-1 bg-black border-t border-b border-t-neutral-700 border-b-neutral-700 focus:outline-none" />
            <span className="inline-flex rounded-r bg-black border border-neutral-700 px-2 text-neutral-400">
              / year
            </span>
          </div>
        </div>

        <div className="p-3 border-b border-neutral-700">
          <label htmlFor="" className="text-sm font-semibold">HOA fees</label>
          <div className="flex pt-1">
            <span className="inline-flex rounded-l bg-black px-2 border border-neutral-700 text-neutral-400">
              $
            </span>
            <input type="number" className="w-1/4 px-1 bg-black border-t border-b border-t-neutral-700 border-b-neutral-700 focus:outline-none" />
            <span className="inline-flex rounded-r bg-black border border-neutral-700 px-2 text-neutral-400">
              / month
            </span>
          </div>
        </div>

        <div className="p-3 border-b border-neutral-700">
          <label htmlFor="" className="text-sm font-semibold">Electricity</label>
          <div className="flex pt-1">
            <span className="inline-flex rounded-l bg-black px-2 border border-neutral-700 text-neutral-400">
              $
            </span>
            <input type="number" className="w-1/4 px-1 bg-black border-t border-b border-t-neutral-700 border-b-neutral-700 focus:outline-none" />
            <span className="inline-flex rounded-r bg-black border border-neutral-700 px-2 text-neutral-400">
              / month
            </span>
          </div>
        </div>

        <div className="p-3 border-b border-neutral-700">
          <label htmlFor="" className="text-sm font-semibold">Water & sewer</label>
          <div className="flex pt-1">
            <span className="inline-flex rounded-l bg-black px-2 border border-neutral-700 text-neutral-400">
              $
            </span>
            <input type="number" className="w-1/4 px-1 bg-black border-t border-b border-t-neutral-700 border-b-neutral-700 focus:outline-none" />
            <span className="inline-flex rounded-r bg-black border border-neutral-700 px-2 text-neutral-400">
              / month
            </span>
          </div>
        </div>

        <div className="p-3 border-b border-neutral-700">
          <label htmlFor="" className="text-sm font-semibold">Gas</label>
          <div className="flex pt-1">
            <span className="inline-flex rounded-l bg-black px-2 border border-neutral-700 text-neutral-400">
              $
            </span>
            <input type="number" className="w-1/4 px-1 bg-black border-t border-b border-t-neutral-700 border-b-neutral-700 focus:outline-none" />
            <span className="inline-flex rounded-r bg-black border border-neutral-700 px-2 text-neutral-400">
              / month
            </span>
          </div>
        </div>

        <div className="p-3 border-b border-neutral-700">
          <label htmlFor="" className="text-sm font-semibold">Garbage</label>
          <div className="flex pt-1">
            <span className="inline-flex rounded-l bg-black px-2 border border-neutral-700 text-neutral-400">
              $
            </span>
            <input type="number" className="w-1/4 px-1 bg-black border-t border-b border-t-neutral-700 border-b-neutral-700 focus:outline-none" />
            <span className="inline-flex rounded-r bg-black border border-neutral-700 px-2 text-neutral-400">
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

      <div className="border border-neutral-700 rounded-lg">
        <div className="p-3 border-b border-neutral-700">
          <label htmlFor="" className="text-sm font-semibold">Repairs & maintenance</label>
          <div className="flex pt-1">
            <input
              type="number"
              className="w-1/6 px-1 bg-black border-y border-l rounded-l border-neutral-700 focus:outline-none"
            />
            <span className="inline-flex rounded-r bg-black border border-neutral-700 px-2 text-neutral-400">
              %
            </span>
          </div>
        </div>
        <div className="p-3 border-b border-neutral-700">
          <label htmlFor="" className="text-sm font-semibold">Vacancy</label>
          <div className="flex pt-1">
            <input
              type="number"
              className="w-1/6 px-1 bg-black border-y border-l rounded-l border-neutral-700 focus:outline-none"
            />
            <span className="inline-flex rounded-r bg-black border border-neutral-700 px-2 text-neutral-400">
              %
            </span>
          </div>
        </div>
        <div className="p-3 border-b border-neutral-700">
          <label htmlFor="" className="text-sm font-semibold">Capital expenditures</label>
          <div className="flex pt-1">
            <input
              type="number"
              className="w-1/6 px-1 bg-black border-y border-l rounded-l border-neutral-700 focus:outline-none"
            />
            <span className="inline-flex rounded-r bg-black border border-neutral-700 px-2 text-neutral-400">
              %
            </span>
          </div>
        </div>
        <div className="p-3">
          <label htmlFor="" className="text-sm font-semibold">Management fees</label>
          <div className="flex pt-1">
            <input
              type="number"
              className="w-1/6 px-1 bg-black border-y border-l rounded-l border-neutral-700 focus:outline-none"
            />
            <span className="inline-flex rounded-r bg-black border border-neutral-700 px-2 text-neutral-400">
              %
            </span>
          </div>
        </div>
        <div className="flex p-3 justify-between border-t border-neutral-700">
          <Back step={step} setStep={setStep} />
          <Submit />
        </div>
      </div>
    </form>
  );
}
