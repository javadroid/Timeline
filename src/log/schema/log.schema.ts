import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { type } from "os";

export type logDoc= log & Document

@Schema()
export class log{


@Prop()
project: string;

@Prop()
activity: string;

@Prop()
user: string;

@Prop()
log: string;

@Prop()
reporterId: string;

@Prop()
reportedAt: string;

@Prop()
assignedTo: string;

@Prop()
dateResolved: string;

@Prop()
response: string;

@Prop()
responseConfirm: string;

@Prop()
responseConfirmDate: string;
}

export const logSchema=SchemaFactory.createForClass(log)