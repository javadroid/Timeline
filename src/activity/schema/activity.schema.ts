import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document,  } from "mongoose";

export type ActivityDoc= Activity & Document

@Schema()
export class Activity{
       
    @Prop()
    name:string

    @Prop()
    project:string
    
    @Prop()
    description:string
    
    @Prop()
    duration:string
    
    @Prop()
    startDate:string

    @Prop()
    endDate:string


  

  }

  
  export const ActivitySchema=SchemaFactory.createForClass(Activity)