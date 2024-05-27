/*
  Warnings:

  - You are about to drop the column `status` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `transaction_id` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `cart_id` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the `cart_items` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `carts` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `orders` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `order_id` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "cart_items" DROP CONSTRAINT "cart_items_cart_id_fkey";

-- DropForeignKey
ALTER TABLE "cart_items" DROP CONSTRAINT "cart_items_motor_id_fkey";

-- DropForeignKey
ALTER TABLE "carts" DROP CONSTRAINT "carts_user_id_fkey";

-- DropForeignKey
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_cart_id_fkey";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "status",
DROP COLUMN "total",
DROP COLUMN "transaction_id",
ALTER COLUMN "user_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "cart_id",
ADD COLUMN     "order_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "cart_items";

-- DropTable
DROP TABLE "carts";

-- CreateIndex
CREATE UNIQUE INDEX "orders_user_id_key" ON "orders"("user_id");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
