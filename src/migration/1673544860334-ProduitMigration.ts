 import typeorm from "typeorm"; 
import { MigrationInterface, QueryRunner, Table } from "typeorm";

 
export class ProduitMigration1673544860334 implements typeorm.MigrationInterface {
    name = 'ProduitMigration1673544860334';

    public async up(queryRunner: typeorm.QueryRunner): Promise<void> {
        await queryRunner.createTable(new typeorm.Table({
            name: "products",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: "ref",
                    type: "varchar",
                },
                {
                    name: "libelle",
                    type: "varchar",
                },
                {
                    name: "unite",
                    type: "varchar",
                },
                {
                    name: "type",
                    type: "varchar",
                },
                {
                    name: "quantite",
                    type: "int",
                },
                {
                    name: "seuil",
                    type: "int",
                },
                {
                    name: 'created_at',
                    type: 'datetime',        
                    isNullable: false,
                    default: 'CURRENT_TIMESTAMP'
                },
                {
                    name: 'date_entree',
                    type: 'datetime',        
                    isNullable: false,
                    default: 'CURRENT_TIMESTAMP'
                },
                {
                    name: 'date_exp',
                    type: 'datetime',        
                    
                },
                {
                    name: 'updated_at',
                    type: 'datetime',        
                    isNullable: false,
                    default: 'CURRENT_TIMESTAMP'
                }
            ]
        }), true)
    }

    public async down(queryRunner: typeorm.QueryRunner): Promise<void> {
        await queryRunner.dropTable("products");
    }

}
