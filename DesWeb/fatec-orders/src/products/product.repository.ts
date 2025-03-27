/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ProductInterface } from './product.interface';

@Injectable()
export class ProductRepository {
  private products: ProductInterface[];
  create() {}
  update() {}
  getById(id: number): ProductInterface {
    //filter retorna lista, find retorna um item
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw Error('Produto não encontrado!');
    }
    return product;
  }
  list() {}
  delete() {}
}
