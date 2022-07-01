import { Controller, Post, Body, Get, Param ,Delete} from '@nestjs/common';
import { CreateProjectPersonnel } from './dto/CreateProjectPersonnel.dto';

import { ProjectPersonnelsService } from './project-personnels.service';

@Controller('project-personnels')
export class ProjectPersonnelsController {
    constructor(private  projectPersonnelsService: ProjectPersonnelsService){}

    @Get(':personnelId')
    async findOne(@Param('personnelId') personnelId: string) {
      return this.projectPersonnelsService.findOne(personnelId);
    }

    @Get()
    async getProjectPersonnels() {
        return this.projectPersonnelsService.getProjectPersonnels()
    }

    @Post()
    async createProjectPersonnels(@Body() createDto: CreateProjectPersonnel){
        return this.projectPersonnelsService.createProjectPersonnels(createDto.ProjectId,createDto.UserId,createDto.Personneltype)
    }

    @Delete(':personnelId')
    async delete(@Param('personnelId') id: string) {
      return this.projectPersonnelsService.delete(id);
    }

}



