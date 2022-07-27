import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Req,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';

import { CreateUsersDto } from './dto/createUsersDto.dto';
import { UpdateUsersDto } from './dto/updateUser.dto';
import { LocalAuthGuards } from './stratages/local-auth-guards';
import { Request as R, Response as Rp } from 'express';

import * as bcrypt from 'bcrypt';
// import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';
import { Jwtlocal } from './stratages/jwtlocal';
import { AuthGuard } from './auth.guard';
import { Roles } from './roles/role.decoration';
import { Role } from './roles/role.enum';
@Controller('users')
export class UsersController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post()
  async create(
    @Body() createDto: CreateUsersDto,
    @Request() req,
    @Res({ passthrough: true }) res: Rp,
  ) {
    const passHash = await bcrypt.hash(createDto.password, 12);
    this.userService.create(
      createDto.username,
      createDto.personnelType,
      createDto.phonenumber,
      createDto.email,
      createDto.gender,
      createDto.address,
      createDto.image,
      createDto.password,
    );

    const token = await this.authService.getJwt([createDto]);
    //res.cookie('auth-cookie', token, { httpOnly: true });

    return { authenticated: true, username: createDto.username,token:token };
  }

  @Patch(':_id')
  async update(@Param('_id') _Id: string, @Body() updated: UpdateUsersDto) {
    return this.userService.update(_Id, updated);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Get('email/:email')
  async findOne(@Param('email') email: string) {
    return this.userService.findOne(email);
  }
  @Get('username/:username')
  @Roles(Role.ADMIN)
  async findByUser(@Param('username') username: string) {
    return this.userService.findOne1(username);
  }
  @Get('phonenumber/:phonenumber')
  async findByPhone(@Param('phonenumber') phonenumber: string) {
    return this.userService.findOne2(phonenumber);
  }

  @Get('id/:_id')
  async findById(@Param('_id') _id: string) {
    return this.userService.findById(_id);
   }


  @Delete(':_id')

  async delete(@Param('_id') _id: string) {
    return this.userService.delete(_id);
  }

  @UseGuards(LocalAuthGuards)
  @Post('login')
  async login(@Request() req, @Res({ passthrough: true }) res: Rp) {
    const token = await this.authService.getJwt(req.user);
    //  res.cookie('auth-cookie',token,{httpOnly:true})

    return { authenticated: true, username: req.user[0].username, token };
  }

  @UseGuards(Jwtlocal)
  @Get('profile')
  async getprfile(@Request() req, rep: R) {
    if(req.user){
      return req.user;
    } return  { authenticated: false };
   
  }

  @Get('signout')
  async logout(@Res({ passthrough: true }) res: Rp) {
    return res.cookie('token', '', { expires: new Date() });
  }
}
