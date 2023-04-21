import Continue from "../formbuttons/continue";

export default function Step1({ step, setStep }) {
  return (
    <form className="flex flex-col p-10">
      <h2 className="text-lg font-semibold">Property Details</h2>
      <div className="flex flex-col">
        <label htmlFor="">Property name</label>
        <input type="text" className="text-black rounded focus:outline-black" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">
          Address <span className="text-red-500">*</span>
        </label>
        <input type="text" className="text-black " />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">
          Purchase price <span className="text-red-500">*</span>
        </label>
        <input type="number" className="text-black " />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">
          Closing costs <span className="text-red-500">*</span>
        </label>
        <input type="number" className="text-black " />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">
          Monthly rental income <span className="text-red-500">*</span>
        </label>
        <input type="number" className="text-black " />
      </div>
      
      <div className="my-4 flex flex-row-reverse">
        <Continue step={step} setStep={setStep} />
      </div>
    </form>
  );
}
