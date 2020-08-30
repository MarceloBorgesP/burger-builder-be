import { Controller, Get, Post, Body } from '@nestjs/common';
import { BurgersService } from './burgers.service';
import { Burger } from 'src/models/Burger.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingredient } from 'src/models/Ingredient.model';
import { BurgerDto } from 'src/models/dto/Burger.dto.model';

@Controller('burgers')
export class BurgersController {
  constructor(
    @InjectRepository(Burger)
    private burgerRepo: Repository<Burger>,
    @InjectRepository(Ingredient)
    private ingredientRepo: Repository<Ingredient>,
    private burgerService: BurgersService
  ) { }

  @Get()
  findAll(): Promise<Burger[]> {
    return this.burgerService.findAll();
  }

  @Post()
  save(@Body() body: BurgerDto): Promise<Burger> {
    return this.burgerService.save(body)
  }
}
