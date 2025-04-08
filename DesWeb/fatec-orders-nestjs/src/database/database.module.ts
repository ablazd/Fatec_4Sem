import { Module } from '@nestjs/common';
import { ProductRepository } from './repositories/product.repository';

@Module({
  imports: [],
  providers: [ProductRepository],
  exports: [ProductRepository],
})
export class DatabaseModule {}
