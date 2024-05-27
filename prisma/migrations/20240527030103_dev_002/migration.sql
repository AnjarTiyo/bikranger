/*
  Warnings:

  - You are about to drop the column `quantity` on the `cart_items` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `order_items` table. All the data in the column will be lost.
  - You are about to drop the `branchs` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `owner_id` to the `motors` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "motors" DROP CONSTRAINT "motors_branch_id_fkey";

-- AlterTable
ALTER TABLE "cart_items" DROP COLUMN "quantity";

-- AlterTable
ALTER TABLE "motors" ADD COLUMN     "owner_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "order_items" DROP COLUMN "quantity";

-- DropTable
DROP TABLE "branchs";

-- CreateTable
CREATE TABLE "branches" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "loc_map" TEXT NOT NULL,
    "abbreviation" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,

    CONSTRAINT "branches_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "motors" ADD CONSTRAINT "motors_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "branches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
