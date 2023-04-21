export default function Continue({ step, setStep }) {
  return (
    <button onClick={() => setStep(step + 1)} className="px-4 py-1 border border-black rounded-lg bg-white text-black transition ease-linear hover:bg-black hover:text-white hover:border-white">
      Next
    </button>
  );
}
