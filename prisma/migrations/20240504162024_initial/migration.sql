-- CreateTable
CREATE TABLE "Super" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "heroName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "realName" TEXT,
    "birthDate" DATETIME,
    "race" TEXT,
    "height" INTEGER,
    "weight" INTEGER
);
