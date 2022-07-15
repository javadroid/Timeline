import { Injectable,  } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, StringExpressionOperatorReturningObject } from 'mongoose';
import { CreateLogs } from './dto/createlog.dto';


import { Logs } from './log.model'; 
import { log, logDoc } from './schema/log.schema';



@Injectable()
export class LogService {
    
    constructor(@InjectModel(log.name) private logsModel: Model<logDoc>){}
    
    async create(createDto:CreateLogs){
        return this.logsModel.create(createDto)
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