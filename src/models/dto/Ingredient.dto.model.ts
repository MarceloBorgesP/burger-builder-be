import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class IngredientDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

}
