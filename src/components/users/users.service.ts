import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    //console.log(createUserDto);
    return await this.userRepository.save(createUserDto);
    // return 'This action adds a new user';
  }

  async findAll() : Promise<User[]>{
    return await this.userRepository.find();
  }

  // findOne(id: number): Promise<User> {
  //   return this.userRepository.findOne({where: {id: id}});
  // }

  async findOne(data: number | any): Promise<User | undefined> {
    return await this.userRepository.findOne(data);
  }
  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }
  async update(id:number, updateUserDto: UpdateUserDto): Promise<User | UpdateResult | undefined> {
    const user = await this.findOne(id).then(res =>res);
    if(user) return await this.userRepository.update(id, updateUserDto).then(res => res);
    return ;
  }

  async findByEmail(email: string) {
    return await User.findOne({
      where: {
        email: email,
      },
    });
  }
  
  async remove(id: number) {
    return await this.userRepository.delete(id);

    // return `This action removes a #${id} user`;
  }
}
