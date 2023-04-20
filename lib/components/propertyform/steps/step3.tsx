import Back from "../formbuttons/back";
import Submit from "../formbuttons/submit";

export default function Step3({ step, setStep }) {
  return (
    <form className="flex flex-col px-8 py-2">
      <h2 className="text-xl font-semibold">Expenses</h2>
      <div className="formInput">
        <label htmlFor="">
          Property taxes <span className="text-red-500">*</span>
        </label>
        <div className="flex">
          <span className="inline-flex rounded-l-md bg-neutral-300 px-2 text-black">
            $
          </span>
          <input type="number" className="rounded-r-md px-1 focus:outline-black" />
        </div>
      </div>
      <div className="formInput">
        <label htmlFor="">
          Insurance <span className="text-red-500">*</span>
        </label>
        <div className="flex">
          <span className="inline-flex rounded-l-md bg-neutral-300 px-2 text-black">
            $
          </span>
          <input type="number" className="rounded-r-md px-1 focus:outline-black" />
        </div>
      </div>

      <div className="my-3 p-2 text-sm text-neutral-300">
        <p>
          Maintenance, vacancy, capital expenditures, and management fees are
          expressed as percentages of gross monthly income.
        </p>
      </div>

      <div className="formInput">
        <label htmlFor="">Repairs & maintenance</label>
        <div className="flex">
          <input type="number" className="rounded-l-md px-1 focus:outline-black" />
          <span className="inline-flex font-semibold rounded-r-md bg-neutral-300 px-2 text-black">
            %
          </span>
        </div>
      </div>
      <div className="formInput">
        <label htmlFor="">Vacancy</label>
        <div className="flex">
          <input type="number" className="rounded-l-md px-1 focus:outline-black" />
          <span className="inline-flex font-semibold rounded-r-md bg-neutral-300 px-2 text-black">
            %
          </span>
        </div>
      </div>
      <div className="formInput">
        <label htmlFor="">Capital expenditures</label>
        <div className="flex">
          <input type="number" className="rounded-l-md px-1 focus:outline-black" />
          <span className="inline-flex font-semibold rounded-r-md bg-neutral-300 px-2 text-black">
            %
          </span>
        </div>
      </div>
      <div className="formInput">
        <label htmlFor="">Management fees</label>
        <div className="flex">
          <input type="number" className="rounded-l-md px-1 focus:outline-black" />
          <span className="inline-flex font-semibold rounded-r-md bg-neutral-300 px-2 text-black">
            %
          </span>
        </div>
      </div>
      <div className="formInput">
        <label htmlFor="">HOA fees</label>
        <div className="flex">
          <span className="inline-flex rounded-l-md bg-neutral-300 px-2 text-black">
            $
          </span>
          <input type="number" className="rounded-r-md px-1 focus:outline-black" />
        </div>
      </div>
      <div className="formInput">
        <label htmlFor="">Electricity</label>
        <div className="flex">
          <span className="inline-flex rounded-l-md bg-neutral-300 px-2 text-black">
            $
          </span>
          <input type="number" className="rounded-r-md px-1 focus:outline-black" />
        </div>
      </div>
      <div className="formInput">
        <label htmlFor="">Water & sewer</label>
        <div className="flex">
          <span className="inline-flex rounded-l-md bg-neutral-300 px-2 text-black">
            $
          </span>
          <input type="number" className="rounded-r-md px-1 focus:outline-black" />
        </div>
      </div>
      <div className="formInput">
        <label htmlFor="">Gas</label>
        <div className="flex">
          <span className="inline-flex rounded-l-md bg-neutral-300 px-2 text-black">
            $
          </span>
          <input type="number" className="rounded-r-md px-1 focus:outline-black" />
        </div>
      </div>
      <div className="formInput">
        <label htmlFor="">Garbage</label>
        <div className="flex">
          <span className="inline-flex rounded-l-md bg-neutral-300 px-2 text-black">
            $
          </span>
          <input type="number" className="rounded-r-md px-1 focus:outline-black" />
        </div>
      </div>
      <div className="my-4 flex justify-between">
        <Back step={step} setStep={setStep} />
        <Submit />
      </div>
    </form>
  );
}
