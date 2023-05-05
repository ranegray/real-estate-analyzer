/*
  Warnings:

  - You are about to drop the column `amount` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the column `frequency` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the column `amount` on the `Mortgage` table. All the data in the column will be lost.
  - Added the required column `insurance` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propertyTaxes` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `closingCost` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postcode` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Expense" DROP COLUMN "amount",
DROP COLUMN "category",
DROP COLUMN "frequency",
DROP COLUMN "name",
ADD COLUMN     "capitalExpend" DOUBLE PRECISION,
ADD COLUMN     "electricity" DOUBLE PRECISION,
ADD COLUMN     "garbage" DOUBLE PRECISION,
ADD COLUMN     "gas" DOUBLE PRECISION,
ADD COLUMN     "hoaFees" DOUBLE PRECISION,
ADD COLUMN     "insurance" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "managementFees" DOUBLE PRECISION,
ADD COLUMN     "propertyTaxes" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "repairs" DOUBLE PRECISION,
ADD COLUMN     "vacancy" DOUBLE PRECISION,
ADD COLUMN     "waterAndSewer" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Mortgage" DROP COLUMN "amount";

-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "closingCost" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "postcode" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL;
