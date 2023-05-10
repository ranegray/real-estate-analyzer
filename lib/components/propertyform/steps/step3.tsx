import Back from "../formbuttons/back";
import Submit from "../formbuttons/submit";

const expenseCategories = {
  taxes: [{ name: "Property taxes", dataName: "propertyTaxes" }],
  insurance: [{ name: "Insurance", dataName: "insurance" }],
  utilities: [
    { name: "HOA fees", dataName: "hoaFees" },
    { name: "Electricity", dataName: "electricity" },
    { name: "Water & sewer", dataName: "waterAndSewer" },
    { name: "Gas", dataName: "gas" },
    { name: "Garbage", dataName: "garbage" },
  ],
  admin: [
    { name: "Repairs & maintenance", dataName: "repairs" },
    { name: "Vacancy", dataName: "vacancy" },
    { name: "Capital expenditures", dataName: "capitalExpend" },
    { name: "Management fees", dataName: "managementFees" },
  ],
};

export default function Step3({
  step,
  setStep,
  handleSubmit,
  expenseDetails,
  setExpenseDetails,
}) {
  const handleChange = ({ target }) => {
    const name = target.name;
    setExpenseDetails({
      ...expenseDetails,
      [name]: Number(target.value),
    });
  };

  return (
    <form className="m-3 flex flex-col" onSubmit={handleSubmit}>
      <div className="rounded-lg border border-neutral-700">
        <div className="h-2 w-full rounded-t-lg bg-black">
          <div className="h-2 w-11/12 rounded-r-lg rounded-tl-lg bg-neutral-700"></div>
        </div>
        <h2 className="border-b border-neutral-700 p-3 text-lg font-semibold">
          Expenses
        </h2>
        {expenseCategories.taxes.map((item) => {
          return (
            <div key={item.dataName} className="border-b border-neutral-700 p-3">
              <label htmlFor={item.dataName} className="text-sm font-semibold">
                {item.name} <span className="text-md text-red-500">*</span>
              </label>
              <div className="flex pt-1">
                <span className="inline-flex rounded-l border border-neutral-700 bg-black px-2 text-neutral-400">
                  $
                </span>
                <input
                  type="number"
                  step={0.01}
                  name={item.dataName}
                  id={item.dataName}
                  onChange={handleChange}
                  value={expenseDetails.dataName}
                  required
                  className="w-1/4 border-b border-t border-b-neutral-700 border-t-neutral-700 bg-black px-1 focus:outline-none"
                />
                <span className="inline-flex rounded-r border border-neutral-700 bg-black px-2 text-neutral-400">
                  / year
                </span>
              </div>
            </div>
          );
        })}

        {expenseCategories.insurance.map((item) => {
          return (
            <div key={item.dataName} className="border-b border-neutral-700 p-3">
              <label htmlFor={item.dataName} className="text-sm font-semibold">
                {item.name} <span className="text-md text-red-500">*</span>
              </label>
              <div className="flex pt-1">
                <span className="inline-flex rounded-l border border-neutral-700 bg-black px-2 text-neutral-400">
                  $
                </span>
                <input
                  type="number"
                  step={0.01}
                  name={item.dataName}
                  id={item.dataName}
                  onChange={handleChange}
                  value={expenseDetails.dataName}
                  required
                  className="w-1/4 border-b border-t border-b-neutral-700 border-t-neutral-700 bg-black px-1 focus:outline-none"
                />
                <span className="inline-flex rounded-r border border-neutral-700 bg-black px-2 text-neutral-400">
                  / year
                </span>
              </div>
            </div>
          );
        })}

        {expenseCategories.utilities.map((item) => {
          return (
            <div key={item.dataName} className="border-b border-neutral-700 p-3">
              <label htmlFor={item.dataName} className="text-sm font-semibold">
                {item.name}
              </label>
              <div className="flex pt-1">
                <span className="inline-flex rounded-l border border-neutral-700 bg-black px-2 text-neutral-400">
                  $
                </span>
                <input
                  type="number"
                  step={0.01}
                  name={item.dataName}
                  id={item.dataName}
                  onChange={handleChange}
                  value={expenseDetails.dataName}
                  className="w-1/4 border-b border-t border-b-neutral-700 border-t-neutral-700 bg-black px-1 focus:outline-none"
                />
                <span className="inline-flex rounded-r border border-neutral-700 bg-black px-2 text-neutral-400">
                  / month
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="my-3 p-2 text-sm text-neutral-300">
        <p>
          Maintenance, vacancy, capital expenditures, and management fees are
          expressed as percentages of gross monthly income.
        </p>
      </div>

      <div className="rounded-lg border border-neutral-700">
        {expenseCategories.admin.map((item) => {
          return (
            <div key={item.dataName} className="border-b border-neutral-700 p-3">
              <label htmlFor={item.dataName} className="text-sm font-semibold">
                {item.name}
              </label>
              <div className="flex pt-1">
                <input
                  type="number"
                  name={item.dataName}
                  id={item.dataName}
                  onChange={handleChange}
                  value={expenseDetails.dataName}
                  className="w-1/6 rounded-l border-y border-l border-neutral-700 bg-black px-1 focus:outline-none"
                />
                <span className="inline-flex rounded-r border border-neutral-700 bg-black px-2 text-neutral-400">
                  %
                </span>
              </div>
            </div>
          );
        })}

        <div className="flex justify-between border-t border-neutral-700 p-3">
          <Back step={step} setStep={setStep} />
          <Submit />
        </div>
      </div>
    </form>
  );
}
