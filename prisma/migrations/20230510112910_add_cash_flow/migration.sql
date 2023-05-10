/*
  Warnings:

  - Added the required column `cashFlow` to the `AnalysisResult` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AnalysisResult" ADD COLUMN     "cashFlow" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "capRate" DROP NOT NULL,
ALTER COLUMN "cashOnCashRoi" DROP NOT NULL;
