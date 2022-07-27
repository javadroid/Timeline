import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { type } from "os";

export type ProjectDoc= Project & Document

@Schema()
export class Project{
    @Prop()
    name:string
    
    @Prop()
    user:string
    
    @Prop()
    description:string
    
    @Prop()
    duration:number
    
    @Prop()
    startDate:string

    @Prop()
    endDate:string
    
    @Prop()
    cost:number

    @Prop()
    progress:number
    
}

export const ProjectSchema=SchemaFactory.createForClass(Project)