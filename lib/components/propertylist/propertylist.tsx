import Link from "next/link";

export default function PropertyList({ properties = [] }) {
  const isEmpty = properties.length < 1;
  const formatCurrency = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  });

  return isEmpty ? (
    <p>You're not tracking any properties</p>
  ) : (
    properties.map((item) => {
      return (
        <div key={item.id} className="m-3 rounded-md border border-neutral-700">
          <Link href={`/${item.id}`}>
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <h3 className="font-semibold">{item.address}</h3>
            <p>
              {item.city}, {item.state}
            </p>
            <p>{formatCurrency.format(item.purchasePrice)}</p>
            <p>Cash flow: {item.analysis}</p>
            <p>CoC ROI: {item.analysis}</p>
          </Link>
        </div>
      );
    })
  );
}
