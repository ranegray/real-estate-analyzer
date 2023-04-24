import PropertyList from "@/lib/components/propertylist/propertylist";

export default function Dashboard() {
  const addProperty = () => null;

  return (
    <div>
        <h1>Dashboard</h1>
        <PropertyList properties={addProperty} />
    </div>
  );
}
