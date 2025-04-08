import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ListProductService } from './services/list-product.service';
import { GetProductByIdService } from './services/get-product-byid.service';
import { CreateProductService } from './services/create-product.service';

@Module({
  controllers: [ProductController],
  providers: [ListProductService, GetProductByIdService, CreateProductService],
})
export class ProductsModule {}
