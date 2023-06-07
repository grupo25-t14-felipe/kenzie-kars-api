import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1686149272047 implements MigrationInterface {
    name = 'CreateUser1686149272047'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "buyer" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "buyer" SET NOT NULL`);
    }

}
