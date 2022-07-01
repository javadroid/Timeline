import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateProjectPersonnel } from './dto/updateProjectPersonnel.dto';

import { Personnel } from './project-personnel.model';
import { ProjectPersonnels, ProjectPersonnelsDoc } from './schema/project-personnels.schema';

@Injectable()
export class ProjectPersonnelsService {
    
    constructor(@InjectModel(ProjectPersonnels.name) private projectPersonnelsModel: Model<ProjectPersonnelsDoc>){}
    
    async create(ProjectId: string, UserId: string, Personneltype: string){
        const personnelId =  Math.floor(Math.random()*99).toString();
        return await this.projectPersonnelsModel.create({personnelId,UserId,ProjectId,Personneltype})
}
       

        async findOne(personnelId: string) {
            return this.projectPersonnelsModel.find({  _id:Object(personnelId)}).exec()
        }
       

        async findAll() {
            return this.projectPersonnelsModel.find().exec();
          }
        
        
        
          async delete(personnelId: string) {
            const deleted = await this.projectPersonnelsModel
              .findByIdAndRemove({ _id:Object(personnelId) })
              .exec();
            return deleted;
          }

          async update(_Id: string, updated: UpdateProjectPersonnel) {
            return this.projectPersonnelsModel.findOneAndUpdate({ _Id}, updated);
        }

}




