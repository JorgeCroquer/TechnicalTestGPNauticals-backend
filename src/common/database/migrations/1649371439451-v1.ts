import {MigrationInterface, QueryRunner} from "typeorm";

export class v11649371439451 implements MigrationInterface {
    name = 'v11649371439451'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "flight_entity" DROP COLUMN "type"`);
        await queryRunner.query(`DROP TYPE "public"."flight_entity_type_enum"`);
        await queryRunner.query(`ALTER TABLE "flight_entity" ALTER COLUMN "price" TYPE numeric`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "flight_entity" ALTER COLUMN "price" TYPE numeric`);
        await queryRunner.query(`CREATE TYPE "public"."flight_entity_type_enum" AS ENUM('roundtrip', 'oneway')`);
        await queryRunner.query(`ALTER TABLE "flight_entity" ADD "type" "public"."flight_entity_type_enum" NOT NULL`);
    }

}
