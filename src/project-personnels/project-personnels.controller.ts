
import { Controller, Post, Body, Get, Param ,Delete, Patch} from '@nestjs/common';
import { CreateProjectPersonnel } from './dto/CreateProjectPersonnel.dto';
import { UpdateProjectPersonnel } from './dto/UpdateProjectPersonnel.dto';

import { ProjectPersonnelsService } from './project-personnels.service';

@Controller('project-personnels')
export class ProjectPersonnelsController {
    constructor(private  projectPersonnelsService: ProjectPersonnelsService){}

    // @Post()
    // addProjectPersonnels(
    // @Body('ProjectId')  project: string, 
    // @Body('UserId') user: string,
    // @Body('Personneltype') personnel: string,
    // ) {
    //  const generatedId = this.projectPersonnelsService.insertProjectPersonnelsModule(project, user, personnel);
    //  return {id: generatedId};
    // }
    @Get('/:personnelId')
    async findOne(@Param('personnelId') personnelId: string) {
      
      return this.projectPersonnelsService.findOne(personnelId);
    }

    @Get()
    async findAll() {
        return this.projectPersonnelsService.findAll()
    }

    @Post()
    async create(@Body() createDto: CreateProjectPersonnel){
      
        return this.projectPersonnelsService.create(createDto.ProjectId,createDto.UserId,createDto.Personneltype)
    }

    @Delete('/:personnelId')
    async delete(@Param('personnelId') id: string) {
      return this.projectPersonnelsService.delete(id);
    }

    @Patch(':userId')
    async updateUser(@Param('userId') userId: string, @Body() updated: UpdateProjectPersonnel) {
        return this.projectPersonnelsService.update(userId, updated);
    }

}



