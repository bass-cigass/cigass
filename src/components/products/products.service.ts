import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}
  
  async create(createProductDto: CreateProductDto) {
    return await this.productRepository.save(createProductDto);
    // 'This action adds a new product';
  }

  async findAll() : Promise<Product[]>{
    return await  this.productRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    return await this.productRepository.findOne({where: {id: id}});
    // `This action returns a #${id} product`;
  }

  async update(id:number, updateProductDto: UpdateProductDto): Promise<Product | UpdateResult | undefined> {
    const prod = await this.findOne(id).then(res =>res);
    if(prod) return await this.productRepository.update(id, updateProductDto).then(res => res);
    return ;
  }

  // update(id: number, updateProductDto: UpdateProductDto) {
  //   return `This action updates a #${id} product`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} product`;
  // }
  async remove(id: number) {
    return await this.productRepository.delete(id);

    // return `This action removes a #${id} user`;
  }
}
