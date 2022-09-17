import { Controller, Post, Body, Get, Param ,Delete, Patch} from '@nestjs/common';

import { UpdateProjectPersonnel } from './dto/updateProjectPersonnel.dto';


import { ProjectPersonnelsService } from './project-personnels.service';

@Controller('project-personnels')
export class ProjectPersonnelsController {
    constructor(private  projectPersonnelsService: ProjectPersonnelsService){}
    
   
    @Get('/:personnelId')
    async findOne(@Param('personnelId') personnelId: string) {
      
      return this.projectPersonnelsService.findOne(personnelId);
    }

    @Get()
    async findAll() {
        return this.projectPersonnelsService.findAll()
    }

    @Post()
    async createProjectPersonnels(@Body() createDto: UpdateProjectPersonnel){
        return this.projectPersonnelsService.create(createDto)
    }

    @Delete('/:personnelId')
    async delete(@Param('personnelId') id: string) {
      return this.projectPersonnelsService.delete(id);
    }

    @Patch(':personnelId')
    async update(@Param('personnelId') userId: string, @Body() updated: UpdateProjectPersonnel) {
        return this.projectPersonnelsService.update(userId, updated);
    }

}



