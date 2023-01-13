import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../products/entities/product.entity';
import { CreateProjetDto } from './dto/create-projet.dto';
import { UpdateProjetDto } from './dto/update-projet.dto';
import { Projet } from './entities/projet.entity';

@Injectable()
export class ProjetsService {

  constructor(
    @InjectRepository(Projet)
    private projectRepository: Repository<Product>,
  ) {}
  create(createProjetDto: CreateProjetDto) {
    return 'This action adds a new projet';
  }

  
  async findAll() : Promise<Projet[]>{
    return await  this.projectRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} projet`;
  }

  update(id: number, updateProjetDto: UpdateProjetDto) {
    return `This action updates a #${id} projet`;
  }

  remove(id: number) {
    return `This action removes a #${id} projet`;
  }
}
