export default function Continue({ step, setStep }) {
  return (
    <button onClick={() => setStep(step + 1)} className="px-4 py-1 rounded-lg bg-white text-black">
      Next
    </button>
  );
}
