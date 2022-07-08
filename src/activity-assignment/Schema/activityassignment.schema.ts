import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document,   } from "mongoose";
import { type } from "os";

export type activityassignmentDoc=activityassignment & Document

@Schema()
export class activityassignment{
   
    @Prop()
    Id:string

    @Prop()
    projectidId:string

    @Prop()
    ActivityId:string
    
    @Prop()
    userId:string
    
    @Prop()
    Dateassigned:Date
    
     @Prop()
    Datedone:Date

    @Prop()
    duration:number
    
    

}

export const activityassignmentSchema=SchemaFactory.createForClass(activityassignment)