import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateProjectDto } from './dto/updateProjectDto.dto';
import { Project, ProjectDoc } from './schema/project.schema';

@Injectable()
export class ProjectService {
    constructor(@InjectModel(Project.name) private projectModel: Model<ProjectDoc>){}
    //Model to create a project... to be called in the controller
    async create(    
        name:string,
        description:string,
        duration:number,
        startDate:string,
        endDate:string,
        cost:number
     ){
        return await this.projectModel.create({name, description,duration,startDate,endDate,cost})
    }

    //Model to update a project.. to be called in the controller
    async update(_id:string , updated: UpdateProjectDto){
        const check=this.projectModel.findByIdAndUpdate({_id},updated)
        if(!check){
             throw new NotFoundException('project not found')
        }
        return check
    }

    //Model to find a project... to be called in the controller
    async findOne(_Id:string){
        const check=this.projectModel.find({_id:Object(_Id)}).exec()
        if(!check){
             throw new NotFoundException('project not found')
        }
        return check
    }
     //Model to find all project... to be called in the controller
     async findAll(){
        return this.projectModel.find({}).exec()
    }

    //Model to delete a project... to be called in the controller
    async delete(_id){
        const check= await this.projectModel
        .findByIdAndRemove({ _id:Object(_id) })
        .exec();
        if(!check){
             throw new NotFoundException('project not found')
        }
        return check

    }
}
