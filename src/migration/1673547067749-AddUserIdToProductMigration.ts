import typeorm from "typeorm";
import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";


export class AddUserIdToProductMigration1673547067749 implements typeorm.MigrationInterface {

    name= 'AddUserIdToProductMigration1673547067749';
    public async up(queryRunner: typeorm.QueryRunner): Promise<void> {

        await queryRunner.addColumn("products", new typeorm.TableColumn({
            name: "userId",
            type: "int"
        }));

        await queryRunner.createForeignKey("products", new typeorm.TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE"
        }));
        
    }

    public async down(queryRunner: typeorm.QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("products");
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("userId") !== -1);
        await queryRunner.dropForeignKey("products", foreignKey);
        await queryRunner.dropColumn("products", "userId")
    }

}
