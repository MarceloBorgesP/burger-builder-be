import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from "typeorm";
import { IngredientDto } from "./Ingredient.dto.model";
import { IsString, IsNotEmpty } from "class-validator";

export class BurgerDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  ingredients: IngredientDto[];

}
