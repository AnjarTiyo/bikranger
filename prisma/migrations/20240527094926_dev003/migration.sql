/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `email` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Made the column `user_id` on table `orders` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_user_id_fkey";

-- DropForeignKey
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_user_id_fkey";

-- DropIndex
DROP INDEX "orders_user_id_key";

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "phone_number" TEXT NOT NULL,
ALTER COLUMN "user_id" SET NOT NULL;

-- DropTable
DROP TABLE "users";
