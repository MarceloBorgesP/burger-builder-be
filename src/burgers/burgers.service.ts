import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Burger } from 'src/models/Burger.model';
import { BurgerDto } from 'src/models/dto/Burger.dto.model';
import { Ingredient } from 'src/models/Ingredient.model';

@Injectable()
export class BurgersService {
  constructor(private connection: Connection) { }

  async findAll(): Promise<Burger[]> {
    return this.connection
      .getRepository(Burger)
      .find({ relations: ["ingredients"] });
  }

  async save(body: BurgerDto): Promise<Burger> {
    const burgerRepo = this.connection.getRepository(Burger);
    const ingredientRepo = this.connection.getRepository(Ingredient);
    const burger = burgerRepo.create((body as unknown) as Burger);
    const response = await burgerRepo.save(burger);

    body.ingredients.forEach(ingredientInBody => {
      const ingredient = ingredientRepo.create({ ...ingredientInBody, burgerId: response.id });
      ingredientRepo.save(ingredient);
    });

    return response;
  }
}
