-- AlterTable
ALTER TABLE `todo` ADD COLUMN `completedAt` DATETIME(3) NULL,
    ADD COLUMN `scheduledCompletion` DATETIME(3) NULL;
