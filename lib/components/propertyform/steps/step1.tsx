import Continue from "../formbuttons/continue";
import dynamic from "next/dynamic";

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
  const handleChange = ({ target }) => {
    const name = target.name;
    setPropertyDetails({
      ...propertyDetails,
      [name]: target.value,
    });
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
            Property name
          </label>
          <div className="flex pt-1">
            <input
              type="text"
              name="name"
              placeholder="Picket fences on 4th"
              onChange={handleChange}
              className="w-3/4 rounded border border-neutral-700 bg-black px-1 placeholder:text-sm focus:outline-none"
            />
          </div>
        </div>

        <div className="border-b border-neutral-700 p-3">
          <label htmlFor="" className="text-sm font-semibold">
            Address <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-wrap">
            <AddressAutofill
              accessToken={
                "pk.eyJ1IjoicmFuZWdyYXkiLCJhIjoiY2xndzl1b2luMGZoZDNmbXVtY2N1bnNpaCJ9.e8WygPzm_BWTsDA2_my5nw"
              }
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
                />
              </label>
            </AddressAutofill>
            <div className="mt-1 flex w-full">
              <label
                htmlFor="city"
                className="mr-1.5 flex w-1/2 flex-col text-sm"
              >
                City
                <input
                  type="text"
                  name="city"
                  placeholder="Glendale"
                  autoComplete="address-level2"
                  onChange={handleChange}
                  value={propertyDetails.city}
                  className="mt-0.5 rounded border border-neutral-700 bg-black p-1 placeholder:text-sm focus:outline-none"
                />
              </label>
              <label
                htmlFor="state"
                className="mr-1.5 flex w-1/6 flex-col text-sm"
              >
                State
                <input
                  type="text"
                  name="state"
                  placeholder="CA"
                  autoComplete="address-level1"
                  onChange={handleChange}
                  value={propertyDetails.state}
                  className="mt-0.5 rounded border border-neutral-700 bg-black p-1 placeholder:text-sm focus:outline-none"
                />
              </label>
              <label
                htmlFor="postcode"
                className="flex w-1/4 flex-col whitespace-nowrap text-sm"
              >
                Zip code
                <input
                  type="text"
                  name="postcode"
                  placeholder="91020"
                  autoComplete="postal-code"
                  onChange={handleChange}
                  value={propertyDetails.postcode}
                  className="mt-0.5 rounded border border-neutral-700 bg-black p-1 placeholder:text-sm focus:outline-none"
                />
              </label>
            </div>
            {/* TODO add city, state, zip fields inside of address div */}
          </div>
        </div>

        <div className="border-b border-neutral-700 p-3">
          <label htmlFor="purchasePrice" className="text-sm font-semibold">
            Purchase price <span className="text-red-500">*</span>
          </label>
          <div className="flex pt-1">
            <span className="inline-flex rounded-l border border-neutral-700 bg-black px-2 text-neutral-400">
              $
            </span>
            <input
              type="number"
              name="purchasePrice"
              onChange={handleChange}
              value={propertyDetails.purchasePrice}
              className="w-1/2 rounded-r border border-l-0 border-neutral-700 bg-black px-1 focus:outline-none"
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
              name="closingCost"
              onChange={handleChange}
              value={propertyDetails.closingCost}
              className="w-1/4 rounded-r border border-l-0 border-neutral-700 bg-black px-1 focus:outline-none"
            />
          </div>
        </div>

        <div className="border-b border-neutral-700 p-3">
          <label htmlFor="appreciationRate" className="text-sm font-semibold">
            Appreciation Rate <span className="text-red-500">*</span>
          </label>
          <div className="flex pt-1">
            <input
              type="number"
              id="appreciationRate"
              step={0.1}
              onChange={handleChange}
              value={propertyDetails.appreciationRate}
              name="appreciationRate"
              className="w-1/6 rounded-l border-y border-l border-neutral-700 bg-black px-1 focus:outline-none"
            />
            <span className="inline-flex rounded-r border border-neutral-700 bg-black px-2 text-neutral-400">
              %
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
