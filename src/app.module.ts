import { Module } from '@nestjs/common';
import { BurgersController } from './burgers/burgers.controller';
import { BurgersService } from './burgers/burgers.service';

@Module({
  imports: [],
  controllers: [BurgersController],
  providers: [BurgersService]
})
export class AppModule {}
