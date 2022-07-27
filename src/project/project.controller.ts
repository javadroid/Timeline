import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateProjectDto } from './dto/createProjectDto.dto';
import { UpdateProjectDto } from './dto/updateProjectDto.dto';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
    constructor(private projectService:ProjectService){}

    @Post()
    async create(@Body()createDto:CreateProjectDto){
        return this.projectService.create(createDto)
    }

    @Patch(':_id')
    async update(@Param('_id') _Id: string, @Body() updated: UpdateProjectDto) {
        return this.projectService.update(_Id, updated);
    }

    @Get()
    async findAll() {
        return this.projectService.findAll()
    }
    
    @Get(':_id')
    async findOne(@Param('_id') _id: string) {
      
        return this.projectService.findOne(_id);
      }
      

    @Delete('/:_id')
    async delete(@Param('_id') _id: string) {
      return this.projectService.delete(_id);
    }
}
