export default function Back({ step, setStep }) {
  return (
    <button onClick={() => setStep(step - 1)} className="px-4 py-1 transition ease-linear rounded-lg bg-black text-white border border-neutral-700 hover:bg-white hover:ease-linear hover:border-white hover:text-black">
      Back
    </button>
  );
}
