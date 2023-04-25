export default function PropertyList({ properties = [] }) {
  const isEmpty = properties.length < 1;
  console.log(properties);
  return isEmpty ? (
    <p>You're not tracking any properties</p>
  ) : (
    properties.map((item) => {
      return (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <h3>{item.address}</h3>
          <p>{item.purchasePrice}</p>
          <p>{item.analysis}</p>
        </div>
      );
    })
  );
}
