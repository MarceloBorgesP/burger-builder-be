import { Injectable } from '@nestjs/common';

@Injectable()
export class BurgersService {
  findAll(): string {
    return 'burgers!';
  }
}
