import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create a sample user
  const user = await prisma.user.create({
    data: {
      email: "user@example.com",
      password: "password123",
      properties: {
        create: {
          name: "Sample Property",
          address: "123 Main St",
          city: "Sampletown",
          state: "CA",
          postcode: "91020",
          purchasePrice: 250000,
          closingCost: 14000,
          rentalIncome: 2000,
          expenses: {
            create: [
              {
                propertyTaxes: 1100,
                insurance: 457,
                hoaFees: 235,
                electricity: 145,
                garbage: 30,
                repairs: 0.05 * 2000,
                capitalExpend: 0.05 * 2000,
                vacancy: 0.05 * 2000,
                managementFees: 0.05 * 2000
              },
            ],
          },
          mortgage: {
            create: {
              interestRate: 3.5,
              termYears: 30,
              downPayment: 50000,
            },
          },
          appreciationRate: 3.0,
        },
      },
    },
    include: {
      properties: {
        include: {
          expenses: true,
          mortgage: true,
        },
      },
    },
  });

  console.log("Sample user and property created:");
  console.log(JSON.stringify(user, null, 2));
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
