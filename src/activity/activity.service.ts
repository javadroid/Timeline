import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Createactivity } from './dto/createactivity.dto';


import { Activity,ActivityDoc } from './schema/activity.schema';
@Injectable()
export class ActivityService {


    
    constructor (@InjectModel (Activity.name) private activity: Model<ActivityDoc>){}
    
    async create(createDto:Createactivity){
        return await this.activity.create(createDto)
}
        async getactivity() {
            return this.activity.find().exec();
        }

        async findOne(Id: string) {
            return this.activity.findById({ Id })
        }

        async findAll() {
            return this.activity.find().exec();
          }
        
        
        
          async delete(_Id: string) {
            const deleted = this.activity
              .findByIdAndRemove({ _id:Object(_Id) })
              .exec();
            return deleted;
          }
}
