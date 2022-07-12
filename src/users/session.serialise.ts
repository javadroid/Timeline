import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";


@Injectable()
export class SessionSerialise extends PassportSerializer{
  
    serializeUser(user: any, done: (err:Error,user:any)=>void)  {
        done(null,user)
    }
    deserializeUser(payload: any, done: Function) {
     //   const user =this.userservise.findOne1(payload.username)
        done(null,payload)
    }
}