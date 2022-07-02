import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { type } from "os";

export type logDoc= log & Document

@Schema()
export class log{
    
    @Prop()
    projectId: string;
    
    @Prop()
    ActivityId: string;
    
    @Prop()
    UserId: string;

    @Prop()
    Bug: string;

    @Prop()
    ReporterId: string;

    @Prop()
    ReportedAt: string;

    @Prop()
    AssignedTo: string;

    @Prop()
    DateResolved: string;

    @Prop()
    Response: string;

    @Prop()
    ResponseConfirm: string;

    @Prop()
    ResponseConfirmDate: string;
}

export const logSchema=SchemaFactory.createForClass(log)