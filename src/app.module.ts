const orm = require("typeorm");

import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {  DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_USER } from './config/constant';
import { ProductsModule } from './components/products/products.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import "reflect-metadata";
import { ProjetsModule } from './components/projets/projets.module';
import { connectionSource } from './config/datasource';
import { UsersModule } from './components/users/users.module';
import { AuthModule } from './components/auth /auth.module';

// export function DatabaseOrmModule(): DynamicModule {
//   // we could load the configuration from dotEnv here,
//   // but typeORM cli would not be able to find the configuration file.

//   return TypeOrmModule.forRoot(connectionSource.options);
// }
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        database:'bkdu1098_gestock_new',
        host: configService.get<string>(DATABASE_HOST),
        username: configService.get(DATABASE_USER),
        password: configService.get(DATABASE_PASSWORD),
        // database: configService.get<string>(DATABASE_NAME),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        
      }),
      inject: [ConfigService],
    }),
    //Add to the import array
    
    UsersModule,
    ProductsModule,
    AuthModule,
    ProjetsModule
  ],
  exports: [TypeOrmModule],
  controllers: [AppController],
  providers: [AppService,  {
    provide: APP_INTERCEPTOR,
    useClass: AuthInterceptor,
  }],
})
export class AppModule {}
