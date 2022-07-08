import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {  ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-local";
import { ignoreElements } from "rxjs";
import { Request } from "express";
import { UsersService } from "./users.service";

@Injectable()
export class Stratage extends PassportStrategy(Strategy){
    constructor(private auth:UsersService){
        super({
            jwtFromRequest:ExtractJwt.fromExtractors([Stratage.extractJwt,ExtractJwt.fromAuthHeaderAsBearerToken()])
            ,ignoreElements:false,
            secretOrKey:'secretKey'
        });
    }
    
    async validate(username:string, pass:string){
        const user=await this.auth.validateUser(username,pass)
        
        if(!user){
            throw new UnauthorizedException('invalid')
        }
        return user
    }
    private static extractJwt(rep:Request){
        if(rep.cookies && 'token' in rep.cookies && rep.cookies.user_token.lenth>0){
         return   rep.cookies.token
        }return null
    }

   
}
