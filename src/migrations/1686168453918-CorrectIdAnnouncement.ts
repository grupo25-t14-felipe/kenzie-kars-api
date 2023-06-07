import { MigrationInterface, QueryRunner } from "typeorm";

export class CorrectIdAnnouncement1686168453918 implements MigrationInterface {
    name = 'CorrectIdAnnouncement1686168453918'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcement" ADD "deletedAt" date`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "buyer" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "buyer" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "announcement" DROP COLUMN "deletedAt"`);
    }

}
