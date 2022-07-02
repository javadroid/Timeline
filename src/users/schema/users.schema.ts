import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { type } from "os";

export type UsersDoc= Users & Document

@Schema()
export class Users{
    @Prop()
    username:string
    
    @Prop()
    personnelType:string
    
    @Prop()
    phonenumber:number
    
    @Prop()
    email:string

    @Prop()
    gender:string
    
    @Prop()
    address:string
    
    @Prop()
    image:string

    @Prop()
    password:string

    
    

}

export const UsersSchema=SchemaFactory.createForClass(Users)