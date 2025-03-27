/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { ProductController } from './product.controller';
import { ListProductService } from './services/list-product.service';
import { GetProductByIdService } from './services/get-product-byid.service';
import { ProductRepository } from './product.repository';

@Module({
  controllers: [ProductController],
  providers: [ListProductService, GetProductByIdService, ProductRepository],
})
export class ProductsModule {}

