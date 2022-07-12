import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth/auth.service";


@Injectable()
export class Stratage extends PassportStrategy(Strategy){
    constructor(private auth:AuthService){
        super({
            
        });
    }
    
    async validate(username:string, pass:string){
        const user=await this.auth.validateUser(username,pass)
        
        if(!user){
            throw new UnauthorizedException('invalid')
        }
        return user
    }
  

   
}
