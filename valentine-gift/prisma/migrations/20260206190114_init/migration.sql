-- CreateEnum
CREATE TYPE "GiftType" AS ENUM ('COFFEE', 'GIFTCARD', 'CHOCOLATES');

-- CreateEnum
CREATE TYPE "GiftStatus" AS ENUM ('CREATED', 'OPENED', 'ACCEPTED', 'FULFILLED');

-- CreateTable
CREATE TABLE "Gift" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "senderName" TEXT NOT NULL,
    "recipientName" TEXT NOT NULL,
    "questionText" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "giftType" "GiftType" NOT NULL,
    "giftConfig" JSONB NOT NULL,
    "status" "GiftStatus" NOT NULL DEFAULT 'CREATED',
    "openedAt" TIMESTAMP(3),
    "respondedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Gift_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Gift_slug_key" ON "Gift"("slug");
