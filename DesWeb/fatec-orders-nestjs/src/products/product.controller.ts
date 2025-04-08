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
import { CreateProductService } from './services/create-product.service';
import { Response } from 'express';

@Controller('product')
export class ProductController {
  constructor(
    private listProductService: ListProductService,
    private getProductByIdService: GetProductByIdService,
    private createProductService: CreateProductService,
  ) {}

  @Get()
  list(): ProductInterface[] {
    const productList = this.listProductService.execute();
    return productList;
  }

  @Get(':id')
  getById(@Param('id') id: string): ProductInterface {
    const product = this.getProductByIdService.execute(Number(id));

    return product;
  }

  @Post()
  @HttpCode(201)
  create(@Body() product: ProductInterface, @Res() res: Response) {
    const { name, value, weight, brand } = product;
    if (!(name && value && weight && brand)) {
      res.status(400).json({
        sucess: false,
        message: 'Todos os campos são obrigatórios.',
      });
      return;
    }

    this.createProductService.execute(product);
    res.send();
  }
}
