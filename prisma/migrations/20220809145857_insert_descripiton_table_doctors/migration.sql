/*
  Warnings:

  - You are about to drop the column `fone` on the `doctors` table. All the data in the column will be lost.
  - You are about to drop the column `fone` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[phoneNumber]` on the table `doctors` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phoneNumber]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `imgUrl` to the `doctors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `doctors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "doctors_fone_key";

-- DropIndex
DROP INDEX "users_fone_key";

-- AlterTable
ALTER TABLE "doctors" DROP COLUMN "fone",
ADD COLUMN     "description" TEXT DEFAULT '',
ADD COLUMN     "imgUrl" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" INTEGER NOT NULL,
ALTER COLUMN "queryValue" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "fone",
ADD COLUMN     "phoneNumber" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "doctors_phoneNumber_key" ON "doctors"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "users_phoneNumber_key" ON "users"("phoneNumber");
