import Continue from "../formbuttons/continue";

export default function Step1({ step, setStep }) {
  return (
    <form className="flex flex-col p-10">
      <h2 className="text-lg font-semibold">Property Details</h2>
      <div className="formInput">
        <label htmlFor="">Property name</label>
        <input type="text" />
      </div>
      <div className="formInput">
        <label htmlFor="">
          Address <span className="text-red-500">*</span>
        </label>
        <input type="text" />
      </div>
      <div className="formInput">
        <label htmlFor="">
          Purchase price <span className="text-red-500">*</span>
        </label>
        <input type="number" />
      </div>
      <div className="formInput">
        <label htmlFor="">
          Closing costs <span className="text-red-500">*</span>
        </label>
        <input type="number" />
      </div>
      <div className="formInput">
        <label htmlFor="">
          Monthly rental income <span className="text-red-500">*</span>
        </label>
        <input type="number" />
      </div>
      <div className="my-4 flex flex-row-reverse">
        <Continue step={step} setStep={setStep} />
      </div>
    </form>
  );
}
