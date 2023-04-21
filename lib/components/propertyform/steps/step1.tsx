import Continue from "../formbuttons/continue";

export default function Step1({ step, setStep, formData, setFormData }) {
  return (
    <form className="m-3 flex flex-col">
      <div className="rounded-lg border border-neutral-700">
        <div className="h-2 w-full rounded-t-lg bg-black">
          <div className="h-2 rounded-tl-lg rounded-r-lg bg-neutral-700 w-4/12"></div>
        </div>
        <h2 className="border-b border-neutral-700 p-3 text-lg font-semibold">
          Property Details
        </h2>

        <div className="border-b border-neutral-700 p-3">
          <label htmlFor="" className="text-sm font-semibold">
            Property name
          </label>
          <div className="flex pt-1">
            <input
              type="text"
              className="w-3/4 rounded border border-neutral-700 bg-black px-1 focus:outline-none"
            />
          </div>
        </div>

        <div className="border-b border-neutral-700 p-3">
          <label htmlFor="" className="text-sm font-semibold">
            Address <span className="text-red-500">*</span>
          </label>
          <div className="flex pt-1">
            <input
              type="text"
              className="w-3/4 rounded border border-neutral-700 bg-black px-1 focus:outline-none"
            />
          </div>
        </div>

        <div className="border-b border-neutral-700 p-3">
          <label htmlFor="" className="text-sm font-semibold">
            Purchase price <span className="text-red-500">*</span>
          </label>
          <div className="flex pt-1">
            <span className="inline-flex rounded-l border border-neutral-700 bg-black px-2 text-neutral-400">
              $
            </span>
            <input
              type="number"
              className="w-4/6 rounded-r border border-l-0 border-neutral-700 bg-black px-1 focus:outline-none"
            />
          </div>
        </div>

        <div className="border-b border-neutral-700 p-3">
          <label htmlFor="" className="text-sm font-semibold">
            Closing costs <span className="text-red-500">*</span>
          </label>
          <div className="flex pt-1">
            <span className="inline-flex rounded-l border border-neutral-700 bg-black px-2 text-neutral-400">
              $
            </span>
            <input
              type="number"
              className="w-4/6 rounded-r border border-l-0 border-neutral-700 bg-black px-1 focus:outline-none"
            />
          </div>
        </div>

        <div className="border-b border-neutral-700 p-3">
          <label htmlFor="" className="text-sm font-semibold">
            Monthly rental income <span className="text-red-500">*</span>
          </label>
          <div className="flex pt-1">
            <span className="inline-flex rounded-l border border-neutral-700 bg-black px-2 text-neutral-400">
              $
            </span>
            <input
              type="number"
              className="w-4/6 rounded-r border border-l-0 border-neutral-700 bg-black px-1 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-row-reverse border-neutral-700 p-3">
          <Continue step={step} setStep={setStep} />
        </div>
      </div>
    </form>
  );
}
