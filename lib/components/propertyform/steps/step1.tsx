import Continue from "../formbuttons/continue";
import dynamic from "next/dynamic";
import FormInput from "../forminput";

const AddressAutofill = dynamic(
  () => import("@mapbox/search-js-react").then((mod) => mod.AddressAutofill),
  { ssr: false }
);

export default function Step1({
  step,
  setStep,
  propertyDetails,
  setPropertyDetails,
  handleSubmit,
}) {
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name of the property",
      label: "Property Name",
      required: false,
    },
    {
      id: 2,
      name: "purchasePrice",
      type: "number",
      dollars: true,
      placeholder: "250,000",
      errorMessage: "Enter an amount between $0 and $250,000,000",
      label: "Purchase price",
      required: true,
    },
    {
      id: 3,
      name: "closingCost",
      type: "number",
      dollars: true,
      placeholder: "7,000",
      label: "Closing costs",
      errorMessage: "Enter an amount between $0 and $100,000",
      required: true,
    },
    {
      id: 4,
      name: "appreciationRate",
      type: "number",
      percentage: true,
      placeholder: "3",
      errorMessage: "Enter a percentage between 0% and 100%",
      label: "Appreciation rate",
      required: true,
    },
    {
      id: 5,
      name: "rentalIncome",
      type: "number",
      dollars: true,
      placeholder: "2,500",
      errorMessage: "Enter an amount more than $0",
      label: "Monthly rental income",
      required: true,
    },
  ];

  const handleChange = ({ target }) => {
    const name = target.name
    const type = target.type

    if (type == 'number') {
      setPropertyDetails({
        ...propertyDetails,
        [name]: Number(target.value),
      });
    } else {
      setPropertyDetails({
        ...propertyDetails,
        [name]: target.value,
      });
    }

  };
  
  const handleAutoComplete = ({ target }) => {
    setPropertyDetails({
      ...propertyDetails,
      address: target.value,
    });
  };

  return (
    <form className="m-3 flex flex-col" onSubmit={handleSubmit}>
      <div className="rounded-lg border border-neutral-700">
        <div className="h-2 w-full rounded-t-lg bg-black">
          <div className="h-2 w-4/12 rounded-r-lg rounded-tl-lg bg-neutral-700"></div>
        </div>
        <h2 className="border-b border-neutral-700 p-3 text-lg font-semibold">
          Property Details
        </h2>

        <div className="border-b border-neutral-700 p-3">
          <label htmlFor="" className="text-sm font-semibold">
            Address <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-wrap">
            <AddressAutofill
              accessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
              options={{
                language: "en",
                country: "US",
              }}
            >
              <label htmlFor="address" className="flex w-full flex-col text-sm">
                Street
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="123 Sample St"
                  autoComplete="street-address"
                  onChange={handleAutoComplete}
                  defaultValue={propertyDetails.address}
                  className="mt-0.5 rounded border border-neutral-700 bg-black p-1 placeholder:text-sm focus:outline-none"
                  required
                />
                <span className="error-message invisible text-xs text-red-500">
                  Please enter valid house address
                </span>
              </label>
            </AddressAutofill>
            <div className="mt-1 flex w-full">
              <label className="mr-1.5 flex w-1/2 flex-col text-sm">
                City
                <input
                  type="text"
                  name="city"
                  placeholder="Glendale"
                  autoComplete="address-level2"
                  onChange={handleChange}
                  value={propertyDetails.city}
                  className="mt-0.5 rounded border border-neutral-700 bg-black p-1 placeholder:text-sm focus:outline-none"
                  required
                />
                <span className="error-message invisible text-xs text-red-500">
                  Please enter valid city name
                </span>
              </label>
              <label className="mr-1.5 flex w-1/6 flex-col text-sm">
                State
                <input
                  type="text"
                  name="state"
                  placeholder="CA"
                  autoComplete="address-level1"
                  onChange={handleChange}
                  value={propertyDetails.state}
                  className="mt-0.5 rounded border border-neutral-700 bg-black p-1 placeholder:text-sm focus:outline-none"
                  required
                />
                <span className="error-message invisible text-xs text-red-500">
                  Please enter valid state name
                </span>
              </label>
              <label className="flex w-1/4 flex-col whitespace-nowrap text-sm">
                Zip code
                <input
                  type="text"
                  name="postcode"
                  placeholder="91020"
                  autoComplete="postal-code"
                  onChange={handleChange}
                  value={propertyDetails.postcode}
                  className="mt-0.5 rounded border border-neutral-700 bg-black p-1 placeholder:text-sm focus:outline-none"
                  required
                />
                <span className="error-message invisible text-xs text-red-500">
                  Please enter valid zip code
                </span>
              </label>
            </div>
          </div>
        </div>

        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            onChange={handleChange}
            value={propertyDetails[input.name]}
          />
        ))}

        {/* <div className="border-b border-neutral-700 p-3">
          <label htmlFor="name" className="text-sm font-semibold">
            Property name
          </label>
          <div className="flex pt-1">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Picket fences on 4th"
              onChange={handleChange}
              className="w-3/4 rounded border border-neutral-700 bg-black px-1 placeholder:text-sm focus:outline-none"
            />
          </div>
        </div>

        <div className="border-b border-neutral-700 p-3">
          <label className="flex flex-col font-semibold">
            Purchase price <span className="text-red-500">*</span>
            <span className="inline-flex w-1/12 rounded-l border border-neutral-700 bg-black px-2 text-neutral-400">
              $
            </span>
            <input
              type="number"
              name="purchasePrice"
              id="purchasePrice"
              onChange={handleChange}
              value={propertyDetails.purchasePrice}
              className="w-1/2 rounded-r border border-l-0 border-neutral-700 bg-black px-1 focus:outline-none"
              required
            />
            <span className="error-message hidden text-xs text-red-500">
              Please enter amount between $0 and $250,000,000
            </span>
          </label>
        </div>

        <div className="border-b border-neutral-700 p-3">
          <label htmlFor="closingCost" className="text-sm font-semibold">
            Closing costs <span className="text-red-500">*</span>
          </label>
          <div className="flex pt-1">
            <span className="inline-flex rounded-l border border-neutral-700 bg-black px-2 text-neutral-400">
              $
            </span>
            <input
              type="number"
              name="closingCost"
              id="closingCost"
              onChange={handleChange}
              value={propertyDetails.closingCost}
              className="w-1/4 rounded-r border border-l-0 border-neutral-700 bg-black px-1 focus:outline-none"
              required
            />
            <span className="error-message hidden text-xs text-red-500">
              Please enter amount between $0 and $100,000
            </span>
          </div>
        </div>

        <div className="border-b border-neutral-700 p-3">
          <label htmlFor="appreciationRate" className="text-sm font-semibold">
            Appreciation Rate <span className="text-red-500">*</span>
          </label>
          <div className="flex pt-1">
            <input
              type="number"
              name="appreciationRate"
              id="appreciationRate"
              step={0.1}
              onChange={handleChange}
              value={propertyDetails.appreciationRate}
              className="w-1/6 rounded-l border-y border-l border-neutral-700 bg-black px-1 focus:outline-none"
              required
            />
            <span className="inline-flex rounded-r border border-neutral-700 bg-black px-2 text-neutral-400">
              %
            </span>
            <span className="error-message hidden text-xs text-red-500">
              Please enter amount between $0 and $250,000,000
            </span>
          </div>
        </div>

        <div className="border-b border-neutral-700 p-3">
          <label htmlFor="rentalIncome" className="text-sm font-semibold">
            Monthly rental income <span className="text-red-500">*</span>
          </label>
          <div className="flex pt-1">
            <span className="inline-flex rounded-l border border-neutral-700 bg-black px-2 text-neutral-400">
              $
            </span>
            <input
              type="number"
              name="rentalIncome"
              id="rentalIncome"
              onChange={handleChange}
              value={propertyDetails.rentalIncome}
              className="w-1/4 rounded-r border border-l-0 border-neutral-700 bg-black px-1 focus:outline-none"
              required
            />
            <span className="error-message hidden text-xs text-red-500">
              Please enter amount between $0 and $5,000,000
            </span>
          </div>
        </div> */}

        <div className="flex flex-row-reverse border-neutral-700 p-3">
          <Continue step={step} setStep={setStep} />
        </div>
      </div>
    </form>
  );
}
