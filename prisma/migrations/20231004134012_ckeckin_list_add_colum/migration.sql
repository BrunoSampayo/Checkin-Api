/*
  Warnings:

  - You are about to drop the `ckeckinList` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ckeckinList" DROP CONSTRAINT "ckeckinList_userId_fkey";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "active" SET DEFAULT true,
ALTER COLUMN "role" SET DEFAULT 'user';

-- DropTable
DROP TABLE "ckeckinList";

-- CreateTable
CREATE TABLE "checkin_List" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "checkinTimeId" TEXT NOT NULL,

    CONSTRAINT "checkin_List_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "checkin_List_checkinTimeId_key" ON "checkin_List"("checkinTimeId");

-- AddForeignKey
ALTER TABLE "checkin_List" ADD CONSTRAINT "checkin_List_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "checkin_List" ADD CONSTRAINT "checkin_List_checkinTimeId_fkey" FOREIGN KEY ("checkinTimeId") REFERENCES "checkin_Times"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
