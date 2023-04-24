export default function PropertyList({ properties = [] }) {
  const isEmpty = properties.length < 1;
  return isEmpty ? (
    <p>You're not tracking any properties</p>
  ) : (
    <div>{/* map over each property */}</div>
  );
}
