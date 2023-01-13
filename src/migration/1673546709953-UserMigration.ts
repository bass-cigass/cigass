import { MigrationInterface, QueryRunner, Table } from "typeorm";

const orm = require("typeorm");
export class UserMigration1673546709953 implements MigrationInterface {

    name= 'UserMigration1673546709953';
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: "nom",
                    type: "varchar",
                },
                {
                    name: "prenom",
                    type: "varchar",
                },
                
                {
                    name: "email",
                    type: "varchar",
                },
                {
                    name: "mdp",
                    type: "varchar",
                },
                {
                    name: "role",
                    type: "varchar",
                },
                {
                    name: "tel",
                    type: "int",
                },
                {
                    name: 'created_at',
                    type: 'datetime',        
                    isNullable: false,
                    default: 'CURRENT_TIMESTAMP'
                },
                {
                    name: 'updated_at',
                    type: 'datetime',
                    isNullable: false,
                    default: 'CURRENT_TIMESTAMP'

                },
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
