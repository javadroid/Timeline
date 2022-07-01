import { Injectable,  } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, StringExpressionOperatorReturningObject } from 'mongoose';


import { Logs } from './log.model'; 
import { log, logDoc } from './schema/log.schema';



@Injectable()
export class LogService {
    
    constructor(@InjectModel(log.name) private logsModel: Model<logDoc>){}
    
    async create(projectId: string, ActivityId: string, UserId: string, Bug: string, ReporterId: string, ReportedAt: string, AssignedTo: string, DateResolved: string,
        Response: string, ResponseConfirm: string, ResponseConfirmDate: string){
        return this.logsModel.create({projectId,ActivityId,UserId,Bug,ReporterId,ReportedAt,AssignedTo,DateResolved,Response,ResponseConfirm,ResponseConfirmDate})
}
        async getlogs() {
            return this.logsModel.find().exec();
        }

        async findOne(_Id: string) {
            return this.logsModel.findById({ _id:Object(_Id) })
        }

        async findAll() {
            return this.logsModel.find().exec();
          }
        
        
        
          async delete(_Id: string) {
            const deleted =  this.logsModel
              .findByIdAndRemove({ _id:Object(_Id) })
              .exec();
            return deleted;
          }

}