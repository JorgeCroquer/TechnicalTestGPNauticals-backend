import { MigrationInterface, QueryRunner } from 'typeorm';

export class first1648865363877 implements MigrationInterface {
  name = 'first1648865363877';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "flight_entity" ("id" SERIAL NOT NULL, "origin" character varying NOT NULL, "destination" character varying NOT NULL, CONSTRAINT "PK_3e329046674d97d25f035ab6682" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "flight_entity"`);
  }
}
