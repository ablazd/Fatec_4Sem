import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { ListProductService } from './services/list-product.service';
import { GetProductByIdService } from './services/get-product-byid.service';
import { ProductInterface } from './product.interface';
import { Response } from 'express';

@Controller('product')
export class ProductController {
  constructor(
    private ProductService: ListProductService,
    private getProductByIdService: GetProductByIdService,
  ) {}

  @Get()
  list(): any[] {
    const productList = this.ProductService.execute();

    return productList;
  }

  @Get(':id')
  getById(@Param('id') id: number): any {
    const product = this.getProductByIdService.execute(id);

    return product;
  }
  @Post()
  @HttpCode(201)
  create(@Body() product: ProductInterface, @Res() res: Response) {
    const { name, value, weight, brand } = product;
    if (!(name && value && weight && brand)) {
      res.status(400).json({
        sucess: false,
        message: 'Todos os campos são obrigatorios',
      });
    }
    this.createProductService.execute(product);
  }
}
