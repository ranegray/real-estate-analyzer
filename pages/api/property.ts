import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function property (req, res) {
    const { propertyForm, mortgage, expenses } = req.body

    if (req.method === 'POST')  {
        const property = await prisma.property.create({
            data: {
                name: propertyForm.name,
                
            }
        });
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).json({message: `HTTP method ${req.method} not supported`})
    }
}