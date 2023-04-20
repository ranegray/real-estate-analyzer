import Back from "../formbuttons/back";
import Continue from "../formbuttons/continue";

export default function Step2({ step, setStep }) {
  return (
    <form className="flex flex-col p-10">
      <h2 className="text-lg font-semibold">Mortgage Details</h2>
      <div className="formInput">
          <label htmlFor="">Cash purchase?</label>
          <input type="checkbox" />
      </div>
      <div className="formInput">
          <label htmlFor="">
            Down payment <span className="text-red-500">*</span>
          </label>
          <input type="number" />
      </div>
      <div className="formInput">
          <label htmlFor="">
            Interest rate <span className="text-red-500">*</span>
          </label>
          <input type="number" />
      </div>
      <div className="formInput">
          <label htmlFor="">
            Loan length <span className="text-red-500">*</span>
          </label>
          <input type="number" />
      </div>
      <div className="flex justify-between my-4">
        <Back step={step} setStep={setStep} />
        <Continue step={step} setStep={setStep} />
      </div>
    </form>
  );
}
