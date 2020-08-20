import { Controller, Get } from '@nestjs/common';
import { BurgersService } from './burgers.service';

@Controller('burgers')
export class BurgersController {
  constructor(private burgerService: BurgersService) {}

  @Get()
  findAll(): string {
    return this.burgerService.findAll();
  }
}
