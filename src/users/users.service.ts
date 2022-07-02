import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateUsersDto } from './dto/updateUser.dto';
import { Users, UsersDoc } from './schema/users.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users.name) private userModel: Model<UsersDoc>){}
    
    //Model to create a user... to be called in the controller
    async create(    
        username:string,
        personnelType:string,
        phonenumber:number,
        email:string,
        gender:string,
        address:string,
        image:string,   
        password:string
     ){
        return await this.userModel.create({username,personnelType,phonenumber,email,gender,address,image,password})
    }

    //Model to update a user.. to be called in the controller
    async update(_id:string , updated: UpdateUsersDto){
        const check=this.userModel.findByIdAndUpdate({_id},updated)
        if(!check){
             throw new NotFoundException('user not found')
        }
        return check
    }

    //Model to find a user... to be called in the controller
    async findOne(_Id:string){
        const check=this.userModel.find({_id:Object(_Id)}).exec()
        if(!check){
             throw new NotFoundException('user not found')
        }
        return check
    }

    //Model to find all user... to be called in the controller
    async findAll(){
        return this.userModel.find().exec()
    }

    //Model to delete a user... to be called in the controller
    async delete(_id){
        const check= await this.userModel
        .findByIdAndRemove({ _id:Object(_id) })
        .exec();
        if(!check){
             throw new NotFoundException('user not found')
        }
        return check

    }
}
