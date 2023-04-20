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
          purchasePrice: 250000,
          rentalIncome: 2000,
          expenses: {
            create: [
              {
                name: "Electricity",
                category: "utilities",
                amount: 100,
                frequency: "monthly",
              },
              {
                name: "Water",
                category: "utilities",
                amount: 50,
                frequency: "monthly",
              },
            ],
          },
          mortgage: {
            create: {
              amount: 200000,
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
