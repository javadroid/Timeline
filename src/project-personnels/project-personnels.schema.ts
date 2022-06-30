import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { type } from "os";

export type ProjectPersonnelsDoc= ProjectPersonnels & Document

@Schema()
export class ProjectPersonnels{
    @Prop()
    UserId:string
    
    @Prop()
    ProjectId:string
    
    @Prop()
    Personneltype:string

}

export const UserProjectPersonnelsSchema=SchemaFactory.createForClass(ProjectPersonnels)