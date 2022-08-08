/*
  Warnings:

  - You are about to drop the column `clinic` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `dates` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "clinic",
DROP COLUMN "dates";
