import PropertyList from "@/lib/components/propertylist/propertylist";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const properties = await prisma.property.findMany({
    include: {
      expenses: true,
      mortgage: true,
      analysis: true,
    },
  });

  return {
    props: {
      properties: JSON.parse(JSON.stringify(properties)),
    },
  };
}

export default function Dashboard({ properties = [] }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <PropertyList properties={properties} />
    </div>
  );
}
