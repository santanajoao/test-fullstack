/*
  Warnings:

  - Added the required column `name` to the `clients` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_clients" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "status" TEXT NOT NULL
);
INSERT INTO "new_clients" ("cpf", "email", "id", "phone_number", "status") SELECT "cpf", "email", "id", "phone_number", "status" FROM "clients";
DROP TABLE "clients";
ALTER TABLE "new_clients" RENAME TO "clients";
CREATE UNIQUE INDEX "clients_cpf_key" ON "clients"("cpf");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
