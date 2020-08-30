import { Module } from '@nestjs/common';
import { BurgersController } from './burgers/burgers.controller';
import { BurgersService } from './burgers/burgers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Ingredient } from './models/Ingredient.model';
import { Burger } from './models/Burger.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      // @ts-ignore
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [Ingredient, Burger],
    }),
    TypeOrmModule.forFeature([Ingredient, Burger])
  ],
  controllers: [BurgersController],
  providers: [BurgersService]
})
export class AppModule { }
