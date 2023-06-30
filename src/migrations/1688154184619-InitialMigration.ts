import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1688154184619 implements MigrationInterface {
    name = 'InitialMigration1688154184619'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "createdAt" date NOT NULL DEFAULT now()`);
    }

}
