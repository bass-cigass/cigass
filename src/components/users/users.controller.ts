import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('createUser')
  async create(@Body() createUserDto: CreateUserDto) {
    //console.log("CREATE USER")
    return await this.usersService.create(createUserDto);
  }
  
  @Get('findAllUsers')
  async findAll() {
    return  await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res): Promise<Response> {
    let user = await this.usersService.findOne(+id)
    if(user) return res.status(HttpStatus.OK).json(user)
    return res.status(HttpStatus.NOT_FOUND).json({"error" : "This resource  no longer exist or has been removed"})
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto, @Res() res) {
    const response = await this.usersService.update(+id, updateUserDto);
    if(response) return res.status(HttpStatus.OK).json({"message" : "User information updated successfully"});
    return res.status(HttpStatus.NOT_FOUND).json({"error" : "The resource to be updated no longer exist"})
  }
  
  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res) {
    await this.usersService.remove(+id);
    res.status(HttpStatus.OK).json({"message" : "User details deleted successfully"});
  }


}
