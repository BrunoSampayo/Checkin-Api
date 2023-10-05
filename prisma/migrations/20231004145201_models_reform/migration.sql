/*
  Warnings:

  - You are about to drop the column `userId` on the `checkin_List` table. All the data in the column will be lost.
  - You are about to drop the column `active` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `training_location` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `limit` to the `checkin_List` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "checkin_List" DROP CONSTRAINT "checkin_List_userId_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_locationId_fkey";

-- DropIndex
DROP INDEX "checkin_Times_workoutId_key";

-- DropIndex
DROP INDEX "workouts_locationId_key";

-- AlterTable
ALTER TABLE "checkin_List" DROP COLUMN "userId",
ADD COLUMN     "limit" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "active",
DROP COLUMN "role",
ADD COLUMN     "accessId" TEXT,
ALTER COLUMN "locationId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "UserCkeckin" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "checkinClassId" TEXT NOT NULL,

    CONSTRAINT "UserCkeckin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "access" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "access_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "training_location_name_key" ON "training_location"("name");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_accessId_fkey" FOREIGN KEY ("accessId") REFERENCES "access"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "training_location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCkeckin" ADD CONSTRAINT "UserCkeckin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCkeckin" ADD CONSTRAINT "UserCkeckin_checkinClassId_fkey" FOREIGN KEY ("checkinClassId") REFERENCES "checkin_List"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
