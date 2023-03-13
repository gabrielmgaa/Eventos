-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "people" INTEGER NOT NULL,
    "eventsDetails" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Event" ("date", "eventsDetails", "id", "name", "people") SELECT "date", "eventsDetails", "id", "name", "people" FROM "Event";
DROP TABLE "Event";
ALTER TABLE "new_Event" RENAME TO "Event";
CREATE UNIQUE INDEX "Event_id_key" ON "Event"("id");
CREATE UNIQUE INDEX "Event_name_key" ON "Event"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
