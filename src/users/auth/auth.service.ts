import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { CreateUsersDto } from '../dto/createUsersDto.dto';
import { Users, UsersDoc } from '../schema/users.schema';
import { UserService } from '../user/user.service';
@Injectable()
export class AuthService {

    constructor(private jwt:JwtService ,private userService:UserService){}

    
    async validateUser(username:string ,pass: string):Promise<CreateUsersDto>{
        const user:CreateUsersDto= await this.userService.findOne1(username)
        
        if(user && user[0]?.password==pass){
            const{ ...result} =user
            return result
        }
        return null
    }

    async getJwt(user: any){
        
        const payload={username:user[0].username,email:user[0].email}
    //    console.log(payload)
        return this.jwt.sign(payload)
    }
}
