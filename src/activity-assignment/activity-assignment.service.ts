import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { activityassignment, activityassignmentDoc} from './schema/activityassignment.schema';

@Injectable()
export class ActivityAssignmentService {
 

    constructor(@InjectModel(activityassignment.name) private activityassignmentModel: Model<activityassignmentDoc>){}
    
    async createactivityassignment(ProjectId: string, ActivityId:string,UserId: string, Dateassigned:Date, Datedone:Date){
        const Id =  Math.floor(Math.random()*99).toString();
        return await this.activityassignmentModel.create({ProjectId ,ActivityId,UserId,Dateassigned,Datedone})
}
        async getactivityassignment() {
            return this.activityassignmentModel.find().exec();
        }

        async findOne(Id: string) {
            return this.activityassignmentModel.findById({ Id })
        }

        async findAll() {
            return this.activityassignmentModel.find().exec();
          }
        
        
        
          async delete(_Id: string) {
            const deleted = this.activityassignmentModel
              .findByIdAndRemove({ _id:Object(_Id) })
              .exec();
            return deleted;
          }



}
