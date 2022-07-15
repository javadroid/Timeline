import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document,   } from "mongoose";
import { type } from "os";

export type activityassignmentDoc=activityassignment & Document

@Schema()
export class activityassignment{
   
    @Prop()
    project:string;
    @Prop()
    activity:string;
    @Prop()
    user:string;
    @Prop()
    dateAssigned:Date;
    @Prop()
    dateDone:Date;
    @Prop()
    duration: number;
    

}

export const activityassignmentSchema=SchemaFactory.createForClass(activityassignment)