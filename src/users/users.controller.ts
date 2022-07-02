import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUsersDto } from './dto/createUsersDto.dto';
import { UpdateUsersDto } from './dto/updateUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}

    @Post()
    async create(@Body()createDto:CreateUsersDto){
        return this.userService.create(createDto.username,createDto.personnelType,createDto.phonenumber,createDto.email,createDto.gender,createDto.address,createDto.image,createDto.password)
    }

    @Patch(':_id')
    async update(@Param('_id') _Id: string, @Body() updated: UpdateUsersDto) {
        return this.userService.update(_Id, updated);
    }

    @Get()
    async findAll() {
        return this.userService.findAll()
    }
    
    @Get(':_id')
    async findOne(@Param('_id') _id: string) {
      
        return this.userService.findOne(_id);
      }

    @Delete('/:_id')
    async delete(@Param('_id') _id: string) {
      return this.userService.delete(_id);
    }
    
}
