import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-jwt";
import { ignoreElements } from "rxjs";
import { jwtConstants } from "../auth/auth.constant";
import { CreateUsersDto } from "../dto/createUsersDto.dto";
import { UserService } from "../user/user.service";

@Injectable()
export class Stratage2 extends PassportStrategy(Strategy){
    constructor(private userService:UserService){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()
            ,ignoreExiration:false,
            secretOrKey:jwtConstants.secret
        });
    }
    


    async validate(payload:any){
        // const user=await this.userService.findOne1(payload.username)
        const user={authenticated:true,username:payload.username, email:payload.email}
       
        if(!user){
            throw new HttpException('invalid ',HttpStatus.UNAUTHORIZED)
        }
        return user
    }

}