import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-jwt";
import { ignoreElements } from "rxjs";
import { CreateUsersDto } from "./dto/createUsersDto.dto";
import { UsersService } from "./users.service";

export class Stratage2 extends PassportStrategy(Strategy){
    constructor(private auth:UsersService){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()
            ,ignoreExiration:false,
            secretOrKey:'secretKey'
        });
    }
    


    async validate(payload:CreateUsersDto){
        const user=await this.auth.checkJwt(payload)
        if(!user){
            throw new HttpException('invalid',HttpStatus.UNAUTHORIZED)
        }
        return user
    }

}