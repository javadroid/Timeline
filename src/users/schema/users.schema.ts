import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { type } from "os";

export type UsersDoc= Users & Document

@Schema()
export class Users{
   


    @Prop({ unique : true, required : true })
    username: string
    
    @Prop()
    personnelType:string
    
    @Prop({  unique : true, required : true })
    phonenumber:number
    
    @Prop({  unique : true, required : true })
    email:string
    @Prop()
    gender:string
    
    @Prop()
    address:string
    
    @Prop()
    image:string

    @Prop()
    password:string

    
    @Prop()
    roles:string[]

}
MongooseModule.forFeatureAsync([
    {
      name: Users.name,
      useFactory: () => {
        const schema = UsersSchema;
        schema.plugin(require('mongoose-unique-validator'), { message: 'your custom message' }); // or you can integrate it without the options   schema.plugin(require('mongoose-unique-validator')
        return schema;
      },
    },
  ])

export const UsersSchema=SchemaFactory.createForClass(Users)