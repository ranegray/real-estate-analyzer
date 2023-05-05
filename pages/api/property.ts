import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function property (req, res) {
    console.log(req.body)
    
    if (req.method === 'POST')  {
        try {
            const { propertyDetails, mortgageDetails, expenseDetails } = req.body
            
            const property = await prisma.property.create({
                data: {
                    userId: '258b93e4-eebe-4732-8aa9-56824ce79142',
                    name: propertyDetails.name,
                    address: propertyDetails.address,
                    city: propertyDetails.city,
                    state: propertyDetails.state,
                    postcode: propertyDetails.postcode,
                    purchasePrice: propertyDetails.purchasePrice,
                    closingCost: propertyDetails.closingCost,
                    rentalIncome: propertyDetails.rentalIncome,
                    expenses: {
                        create: [
                            {
                                propertyTaxes: expenseDetails.propertyTaxes,
                                insurance: expenseDetails.insurance,
                                hoaFees: expenseDetails.hoaFees,
                                electricity: expenseDetails.insurance,
                                garbage: expenseDetails.garbage,
                                gas: expenseDetails.gas,
                                waterAndSewer: expenseDetails.waterAndSewer,
                                repairs: expenseDetails.repairs,
                                capitalExpend: expenseDetails.capitalExpend,
                                vacancy: expenseDetails.vacancy,
                                managementFees: expenseDetails.managementFees,
                            },
                        ],
                    },
                    mortgage: {
                        create: {
                            interestRate: mortgageDetails.interestRate,
                            downPayment: mortgageDetails.downPayment,
                            termYears: mortgageDetails.termYears,
                        },
                    },
                    appreciationRate: propertyDetails.appreciationRate,
                },
                include: {
                    expenses: true,
                    mortgage: true
                }
            });
            res.status(200).json(property)
        } catch (error) {
            res.status(500).json({message: `Something went wrong: ${error}`})
        }
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).json({message: `HTTP method ${req.method} not supported`})
    }
}