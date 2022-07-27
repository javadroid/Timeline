import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createactivityassignment } from './dto/createactivityassignment.dto';
import { activityassignment, activityassignmentDoc} from './schema/activityassignment.schema';

@Injectable()
export class ActivityAssignmentService {
 

    constructor(@InjectModel(activityassignment.name) private activityassignmentModel: Model<activityassignmentDoc>){}
    
    async createactivityassignment(createDto: createactivityassignment){
        const Id =  Math.floor(Math.random()*99).toString();
        return await this.activityassignmentModel.create(createDto)
}
        async getactivityassignment() {
            return this.activityassignmentModel.find().exec();
        }

        async findOne(Id: string) {
            return this.activityassignmentModel.findOne({ _id:Id }).exec()
        }

        async findAll() {
            return this.activityassignmentModel.find().exec();
          }
          async findActivityAssign(Id: string) {
            return this.activityassignmentModel.find({activity:Object(Id)}).exec();
          }
        
        
        
          async delete(_Id: string) {
            const deleted = this.activityassignmentModel
              .findByIdAndRemove({ _id:Object(_Id) })
              .exec();
            return deleted;
          }

            //Model to update a project.. to be called in the controller
    async update(_id:string , updated: createactivityassignment){
      const check=this.activityassignmentModel.findByIdAndUpdate({_id},updated)
      if(!check){
           throw new NotFoundException('project not found')
      }
      return check
  }



}
