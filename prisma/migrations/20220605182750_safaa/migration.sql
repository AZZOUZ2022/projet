/*
  Warnings:

  - You are about to drop the `_categoriestoarticle` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `image` to the `article` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_categoriestoarticle` DROP FOREIGN KEY `_CategoriesToarticle_A_fkey`;

-- DropForeignKey
ALTER TABLE `_categoriestoarticle` DROP FOREIGN KEY `_CategoriesToarticle_B_fkey`;

-- DropForeignKey
ALTER TABLE `article` DROP FOREIGN KEY `article_autreId_fkey`;

-- AlterTable
ALTER TABLE `article` ADD COLUMN `image` VARCHAR(191) NOT NULL,
    MODIFY `autreId` INTEGER NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `role` ENUM('USER', 'ADMIN', 'AUTHOR') NOT NULL DEFAULT 'USER';

-- DropTable
DROP TABLE `_categoriestoarticle`;

-- CreateTable
CREATE TABLE `_articleTocategories` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_articleTocategories_AB_unique`(`A`, `B`),
    INDEX `_articleTocategories_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `article` ADD CONSTRAINT `article_autreId_fkey` FOREIGN KEY (`autreId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_articleTocategories` ADD CONSTRAINT `_articleTocategories_A_fkey` FOREIGN KEY (`A`) REFERENCES `article`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_articleTocategories` ADD CONSTRAINT `_articleTocategories_B_fkey` FOREIGN KEY (`B`) REFERENCES `categories`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- RedefineIndex
CREATE UNIQUE INDEX `users_email_key` ON `users`(`email`);
DROP INDEX `Users_email_key` ON `users`;
