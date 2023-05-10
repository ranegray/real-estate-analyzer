import { PrismaClient } from '@prisma/client';
import { calculateCashFlow } from '@/lib/utilities/calculations';

const prisma = new PrismaClient();

export default async function property (req, res) {
    console.log(req.body)


    
    if (req.method === 'POST')  {
        try {
            const { propertyDetails, mortgageDetails, expenseDetails } = req.body
            let { insurance, propertyTaxes, repairs, capitalExpend, vacancy, managementFees, ...expenses } = expenseDetails
            propertyTaxes = propertyTaxes / 12
            insurance = insurance / 12
            repairs = (repairs / 100) * propertyDetails.rentalIncome
            capitalExpend = (capitalExpend / 100) * propertyDetails.rentalIncome
            vacancy = (vacancy / 100) * propertyDetails.rentalIncome
            managementFees = (managementFees / 100) * propertyDetails.rentalIncome
            
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
                                propertyTaxes: propertyTaxes,
                                insurance: insurance,
                                hoaFees: expenseDetails.hoaFees,
                                electricity: expenseDetails.electricity,
                                garbage: expenseDetails.garbage,
                                gas: expenseDetails.gas,
                                waterAndSewer: expenseDetails.waterAndSewer,
                                repairs: repairs,
                                capitalExpend: capitalExpend,
                                vacancy: vacancy,
                                managementFees: managementFees,
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
                    analysis: {
                        create: {
                            cashFlow: calculateCashFlow(
                                propertyDetails.rentalIncome,
                                propertyDetails.purchasePrice,
                                mortgageDetails.downPayment,
                                mortgageDetails.interestRate,
                                mortgageDetails.termYears,
                                {...expenses, insurance, propertyTaxes, repairs, capitalExpend, vacancy, managementFees}
                            ),
                        }
                    }
                },
                include: {
                    expenses: true,
                    mortgage: true,
                    analysis: true,
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