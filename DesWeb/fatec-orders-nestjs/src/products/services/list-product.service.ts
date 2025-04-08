import { Injectable } from '@nestjs/common';
import { ProductInterface } from '../product.interface';
import { ProductRepository } from 'src/database/repositories/product.repository';

@Injectable()
export class ListProductService {
  constructor(private productRepository: ProductRepository) {}
  execute(): ProductInterface[] {
    return this.productRepository.list();
  }
}
