// import { DataSource } from "typeorm";

import { DataSource } from "typeorm";

// const AppDataSource = new DataSource({
//     type: 'mysql',
//     host: 'localhost',
//     port: 3306,
//     username: 'root',
//     password: '',
//     database: 'bkdu1098_gestock_new',
//     synchronize: false,
//     logging: true,
//     "entities": [
//         "src/typeorm/**/*.ts"
//     ],
//     "migrations": [
//          "src/migration/**/*.ts"
//     ],
//     "subscribers": [
//         "src/subscriber/**/*.ts"
//     ],
//   });
  
//   export default AppDataSource;

export const connectionSource = new DataSource({
    migrationsTableName: 'migrations',
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'bkdu1098_gestock_new',
    logging: false,
    synchronize: false,
    name: 'default',
    entities: [
        "dist/**/entities/*.entity.{ts,js}"
     ], 
    migrations: ['src/migration/**/*{.ts,.js}'],
    subscribers: ['src/subscriber/**/*{.ts,.js}'],
 });
 connectionSource.initialize();
