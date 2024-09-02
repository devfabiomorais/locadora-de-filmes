/*
  Warnings:

  - Added the required column `first` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "usuarios" ADD COLUMN     "first" BOOLEAN NOT NULL,
ADD COLUMN     "status" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "series" (
    "id" SERIAL NOT NULL,
    "genero" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "series_pkey" PRIMARY KEY ("id")
);
